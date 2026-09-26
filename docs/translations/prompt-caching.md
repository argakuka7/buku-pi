---
title: Prompt cache pada Agent
description: Terjemahan bahasa Indonesia lengkap dari artikel resmi Earendil Engineering “Prompt Caching In Agents”.
prev:
  text: Mekanisme pemadatan konteks di Pi
  link: /translations/compaction-in-pi
next:
  text: Apa itu Agent Harness?
  link: /translations/what-is-a-harness
---

<span class="library-status">Terjemahan berlisensi resmi Earendil · 03</span>

# Prompt cache pada Agent

> - **Judul asli** *Prompt Caching In Agents*
> - **Penulis** Earendil Engineering `<rfc@earendil.com>`
> - **Tanggal terbit** 2026-07-22
> - **Alamat asli** [earendil.com/posts/prompt-caching](https://earendil.com/posts/prompt-caching/)
> - **Catatan lisensi** Diadaptasi dan diterjemahkan dengan izin dari Earendil (*Adapted and translated with permission from Earendil.*)
> - **Lisensi terjemahan** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)

Orang sering membayangkan model bahasa besar sebagai sebuah fungsi: kirimkan sejumlah teks, terima sejumlah teks. Ini adalah abstraksi yang berguna, tetapi mengabaikan salah satu fakta terpenting saat menjalankan agent pemrograman: sebagian besar input sama dengan input sebelumnya. Dengan kata lain, kita biasanya hanya menambahkan konten di bagian akhir.

Agent pemrograman mengirimkan system prompt, definisi tool, penjelasan proyek, riwayat percakapan, pemanggilan tool, dan hasil tool kepada model. Pada giliran berikutnya, ia mengirimkan lagi hampir semua konten tersebut, hanya menambah sedikit materi baru. Ketika sesi tumbuh hingga puluhan ribu bahkan ratusan ribu token, menghitung ulang seluruh prompt di setiap giliran akan menjadi lambat dan mahal.

Prompt cache membuat cara kerja ini nyaris layak secara ekonomi, tetapi ia juga sangat rapuh. Definisi tool yang berubah, pergantian model, atau perubahan routing oleh provider, semuanya dapat mengubah permintaan inkremental yang seharusnya murah menjadi pemutaran ulang penuh atas seluruh konteks.

Karena itu, bagi agent pemrograman, perilaku cache bukan sekadar detail implementasi atau optimasi performa. Ia memengaruhi latensi, biaya, desain tool, desain sesi, bahkan fitur produk mana yang sebaiknya diberikan kepada pengguna.

## Apa isi KV cache

Transformer memproses prompt secara garis besar dalam dua tahap. Pada **fase prefill (pengisian awal)**, ia membaca token input dan menghitung status atensi untuk token-token tersebut; pada **fase decode (dekode)**, ia menghasilkan satu token baru setiap kali.

Pada setiap lapisan atensi, setiap token yang diproses menghasilkan satu key dan satu value. Keduanya tidak persis sama dengan pencarian key-value di tabel hash: keduanya adalah array angka, umumnya terdiri dari bilangan floating-point atau nilai kuantisasi presisi rendah. Saat memproses token baru, model membandingkan **query** token tersebut dengan **key** sebelumnya, untuk menilai seberapa relevan setiap token awal dengan token saat ini. Lalu, berdasarkan skor relevansi itu, model mencampur **value** terkait secara berbobot. Dalam pengertian ini, key adalah hal yang dicocokkan oleh model, dan value adalah informasi yang diambilnya kembali; namun pencarian ini bersifat fuzzy, tidak seperti kamus yang “hanya mengembalikan satu hasil yang persis cocok”.

Key dan value ini disimpan, sehingga token berikutnya yang dihasilkan dapat memperhatikan seluruh konten sebelumnya tanpa menghitung ulang token awal. Status yang disimpan inilah yang disebut **KV cache**.

Secara konseptual, satu permintaan tampak seperti ini:

```text
Permintaan 1:

[Sistem][Tool][Pengguna][Asisten][Hasil tool][Pengguna]
<-------------------- Prefill -------------------->
                       |
                 Tensor K dan V setiap token, setiap lapisan

Permintaan 2:

[Sistem][Tool][Pengguna][Asisten][Hasil tool][Pengguna][Baru]
<------------------ Prefix yang dapat dipakai ulang ----------------><-->
                                                                     |
                                                             Pekerjaan baru
```

Representasi sebenarnya jauh lebih rumit, berbeda-beda antar model, dan ukurannya “cukup” besar. Ciri terpentingnya: representasi ini berkaitan dengan satu prefix token tertentu. Dua prompt yang maknanya sama tetapi hasil tokenisasinya berbeda tidak dapat berbagi KV cache. Jika satu token di tengah berubah, semua konten setelahnya menjadi lanjutan yang berbeda.

Prompt cache memperpanjang siklus hidup status ini melampaui satu kali generasi. Ketika permintaan API berikutnya dari agent pemrograman diawali dengan token yang sama, sistem inferensi dapat memakai ulang komputasi lama yang cocok dengan prefix tersebut, dan hanya menjalankan prefill untuk sufiks yang baru. Sampai di sini bagian teorinya.

## Di mana cache disimpan

Agar cache dapat bermanfaat, ia harus disimpan di suatu tempat dan dapat dialamati kembali. Sistem inferensi pada dasarnya punya dua cara agar permintaan berikutnya dapat memakai KV cache.

Cara yang lebih sederhana adalah **afinitas sesi (session affinity)**. Ia mempertahankan KV cache di GPU yang pertama kali menjalankan komputasi atau di dekatnya, lalu merutekan ulang permintaan berikutnya ke node kerja yang sama. ID sesi atau prompt cache key dapat menjadi petunjuk routing yang sederhana, sehingga masalah ini bahkan mungkin hanya ditangani di lapisan load balancing HTTP, tanpa perlu memeriksa isi permintaan.

```text
Permintaan(session-42) --> Router --> Node kerja 7 --> KV cache GPU 7
Berikutnya(session-42) --> Router --> Node kerja 7 --> KV cache GPU 7
```

Ini menghindari pemindahan cache yang berukuran sangat besar melalui jaringan. Saat berjalan normal, cara ini cepat, tetapi juga membatasi cara penjadwalan. Node kerja yang terpilih bisa kelebihan beban, restart, atau menyingkirkan cache terkait. Router juga bisa menilai bahwa menyeimbangkan beban seluruh klaster lebih penting daripada mempertahankan cache suatu sesi. Meski begitu, pendekatan ini tetap menarik karena hampir tidak memerlukan infrastruktur deployment dan perangkat keras tambahan.

Cara lainnya adalah **cache terdistribusi**. Blok KV dapat disimpan di lapisan memori lain, atau dibagikan antar beberapa node kerja, sehingga permintaan tidak terlalu terikat pada satu GPU tertentu.

```text
                          +--------------------+
Permintaan --> Scheduler -->| Node kerja 3 / GPU 3 |
                 |           +--------------------+
                 |
                 +----------> Blok KV terdistribusi
                 |
                 +----------> Node kerja 9 / GPU 9
```

Ini meningkatkan fleksibilitas penjadwalan dan kemampuan pemulihan dari kegagalan, tetapi memindahkan, mengindeks, dan mempertahankan blok KV sendiri merupakan masalah rekayasa sistem. Berbagai implementasi menggabungkan memori GPU, memori host, penyimpanan lokal, penyimpanan jarak jauh, routing yang sadar prefix, dan kebijakan eviction dengan caranya masing-masing.

Secara objektif, KV cache memang besar, tetapi dalam beberapa hal tidak sebesar yang dibayangkan. Dengan berbagai teknik, KV cache untuk percakapan yang sangat panjang pun dapat dipadatkan hingga kisaran beberapa GB.

## Cache dan prefix

Sesi Pi adalah pohon, bukan daftar. `/tree` dapat memindahkan percakapan saat ini kembali ke node yang lebih awal, lalu melanjutkan di sepanjang branch lain. Operasi mundur dapat membuang sufiks yang aktif saat ini, tetapi tidak menghapusnya dari file sesi. Branch baru mungkin berbagi sebagian besar konten dengan konteks lama, hanya berbagi sedikit, atau praktis tidak berbagi sama sekali. Desain ini bukan khas Pi; banyak agent pemrograman setidaknya memiliki mekanisme serupa secara konseptual. Bahkan ketika sesi tidak direpresentasikan sebagai pohon, agent yang memiliki semacam fungsi mundur bukanlah hal yang langka.

```text
                             +-- E -- F  branch lain
                             |
Sesi S: root -- A -- B -- C -- D  branch saat ini
                   |
                   +-- Z  branch dekat titik awal
```

Ketiga branch ini dapat memiliki ID sesi Pi yang sama. Dari sudut pandang router, semuanya termasuk sesi yang sama; dari sudut pandang prompt cache, ketiganya adalah tiga rangkaian token yang hanya berbagi sebagian prefix.

Jika cache menyimpan blok prefix yang dapat dipakai ulang, saat melompat dari `D` ke `F` ia masih mungkin memakai ulang `root -> C`. Namun jika cache hanya menyimpan lanjutan yang paling sering dipakai, blok bersama sudah di-evict, atau permintaan dirutekan ke tempat lain, cache hit bisa berkurang drastis. Saat melompat ke `Z`, meskipun ia bercabang dari `A`, yang tersisa mungkin hanya system prompt dan definisi tool awal. Perilaku manajemen cache yang konkret sangat bergantung pada provider.

Situasi sebaliknya juga bisa terjadi. `/fork` atau sesi baru dapat menghasilkan ID sesi baru, tetapi membawa konteks yang sebagian besar identik. Jika sistem routing mengisolasi cache berdasarkan session key, ia mungkin tidak dapat menemukan tumpang tindih yang berguna ini.

Yang benar-benar menentukan pekerjaan mana yang dapat di-cache adalah prefix yang dapat dipakai ulang. Identitas sesi hanya membantu infrastruktur menemukan konten yang mungkin relevan. Pada sebagian sistem, routing key sangat penting bagi manajemen cache; pada sistem lain, ia hanya sekadar optimasi.

## Prefix cache eksplisit dan prefix cache otomatis

API provider terutama membuka cache dengan dua cara.

Antarmuka lama Anthropic menggunakan node `cache_control` yang eksplisit. Klien menandai batas setelah bagian yang stabil, seperti system prompt, definisi tool, atau konten percakapan terbaru yang dapat di-cache. Server kemudian dapat menulis atau mencari prefix hingga node tersebut. Batasnya eksplisit, tetapi pemakaian ulang tetap menuntut konten sebelumnya benar-benar identik. Bukan hanya node cache yang eksplisit, harganya pun eksplisit: penulisan cache dikenai biaya, dan Anda juga dapat memilih durasi retensi dengan harga yang berbeda.

API lain menggunakan prefix cache otomatis. Klien mengirim permintaan seperti biasa, dan provider mencari sendiri prefix yang dapat dipakai ulang, tanpa perlu klien menetapkan breakpoint. Prompt cache key atau header sesi mungkin memperbaiki routing atau pengelompokan, tetapi tidak dapat membuat prefix yang berbeda menjadi sama.

## Mengapa konfigurasi tool menghancurkan cache

Definisi tool biasanya muncul sebelum percakapan, dan di dalam model “dilipat” ke dalam system prompt. Nama, deskripsi, dan JSON Schema-nya sama seperti teks lain, yakni input bagi model. Menambah satu tool, menghapus satu tool, mengubah Schema-nya, bahkan sekadar mengubah urutan serialisasi tool, semuanya dapat membuat ketidakcocokan pertama muncul di dekat awal prompt.

```text
Giliran 1: [Sistem][Baca][Tulis][Shell][Percakapan...........]
Giliran 2: [Sistem][Baca][Tulis][Shell][Deploy][Percakapan...]
                                                  |
                                                  Percakapan lama kini berada
                                                  setelah titik yang tidak cocok
```

Dalam sistem plugin dan katalog tool bergaya MCP, kejadian tak terduga seperti ini sangat umum. Memuat sebuah tool hanya ketika ia menjadi relevan terdengar efisien, karena Schema yang perlu dikirim di awal lebih sedikit. Namun bagi sebagian besar model, memperluas konfigurasi tool di kemudian hari akan membatalkan seluruh percakapan yang sudah di-cache setelahnya. Menghemat beberapa token Schema tool bisa menyebabkan puluhan ribu token percakapan diproses ulang.

Beberapa API model yang lebih baru mendukung **pemuatan tool secara inkremental**. Tool dapat tersedia pada posisi hasil tool tertentu dalam transkrip, alih-alih disisipkan ke daftar tool awal. Dengan begitu, prefix yang sudah ada tidak berubah:

```text
[Sistem][Tool awal][Percakapan][Tool baru][Giliran berikutnya]
<---------- Prefix yang sudah di-cache ---------->
```

Kini Pi telah mendukung cara ini pada model yang memiliki mekanisme penundaan tool (deferred tools) secara native. Ketika Extension melakukan perubahan yang murni inkremental melalui `setActiveTools()`, Pi mencatat nama tool yang baru ditambahkan ke dalam hasil tool. Untuk model Anthropic yang mendukung fitur ini, ia menggunakan definisi yang ditunda dan `tool_reference`; untuk model OpenAI yang mendukungnya, ia mengirimkan item pencarian tool yang sesuai. Model lain memakai fallback yang aman: Pi mengirimkan daftar tool aktif yang lengkap pada permintaan berikutnya. Secara fungsional tetap normal, tetapi bisa mengosongkan prompt cache.

Kata “inkremental” sangat penting, karena menghapus tool, mengganti satu set tool dengan set lain, atau mengubah penggalan prompt tetap akan mengubah input di bagian awal. Jika Extension membangun ulang system prompt, mengacak urutan tool, menyuntikkan timestamp, atau mengubah daftar tool aktif di setiap giliran, ia bisa tanpa sengaja merusak cache seluruh sesi.

Sifat Pi yang dapat diperluas berarti Pi tidak dapat menjamin stabilitas cache untuk setiap Extension. Pi dapat menyediakan mekanisme yang ramah cache, tetapi Extension tetap harus menggunakannya dengan benar. Berdasarkan pengamatan kami, banyak Extension kurang memperhatikan efisiensi cache. Sebagian penyebabnya adalah, saat memakai langganan tetap, biaya akibat cache miss tidak terlihat jelas.

## Interupsi dan TTL

Beberapa prompt cache penting memiliki masa hidup default yang sangat singkat. Cache lima menit bawaan Anthropic patut diperhatikan, karena lebih singkat daripada banyak aktivitas pemrograman normal. Jika Anda sedang memakai Fable lalu pergi minum kopi, kembali sepuluh menit kemudian, dan hanya mengirim satu kalimat “say hi”, biayanya bisa jauh lebih tinggi dari yang Anda duga.

Penyebabnya adalah pengguna mungkin menganggap satu sesi pemrograman selalu aktif secara berkelanjutan, sementara provider inferensi melihatnya sebagai rangkaian permintaan yang terpisah satu sama lain:

```text
Permintaan model --> Menjalankan tes 7 menit --> Permintaan model
              Di sini tidak ada lalu lintas cache
```

Build yang panjang, satu set tes, makan siang, rapat, atau bahkan sekadar berhenti untuk memeriksa diff, semuanya dapat melampaui masa hidup cache. Permintaan berikutnya memang berisi prompt yang sama, tetapi status KV yang tersimpan sudah hilang, dan seluruh prefix akan dikenai tarif input lagi.

Karena Anthropic saat ini tidak mengizinkan Pi digunakan sebagai tool dalam layanan langganannya, kami memakai nilai default lima menit yang direkomendasikan Anthropic untuk pengguna API. Namun dari basis kode Claude Code terlihat bahwa Anthropic memperpanjang durasi cache menjadi satu jam bagi pelanggan langganannya sendiri. Akan tetapi, jika Anda membayar dengan harga token API, biaya tambahan untuk memperpanjang cache sering kali tidak sepadan.

Tentu saja, Anda juga dapat secara aktif mengaktifkan durasi retensi yang lebih panjang. Provider seperti Anthropic menyediakan kontrol retensi yang lebih panjang. Saat memakai API koneksi langsung yang didukung, pengguna Pi dapat menyetel `PI_CACHE_RETENTION=long` untuk mengajukan permintaan ini. Namun pada akhirnya ini hanyalah sebuah permintaan: Pi tidak dapat memaksa gateway mempertahankan entri cache, tidak dapat mencegah eviction saat memori tertekan, dan tidak dapat menjaga cache tetap aktif ketika tidak ada permintaan model.

## Biaya satu kali cache miss

Provider biasanya menerapkan harga berbeda untuk input yang tidak di-cache, penulisan cache, dan pembacaan cache. Pembacaan cache sering kali mendapat diskon, karena pekerjaan prefill yang mahal sudah selesai. Penulisan cache bisa dikenai premi, karena provider berjanji mempertahankan status untuk pemakaian berikutnya.

Masih dengan skenario Fable di atas: bayangkan sebuah sesi pemrograman sudah mengumpulkan riwayat 100 ribu token, lalu hanya mengirim satu permintaan baru yang sangat singkat. Saat cache normal, hampir seluruh riwayat akan dikenai tarif pembacaan cache yang lebih murah, hanya sedikit materi baru yang perlu diproses dengan tarif input normal, dan mungkin ditulis ke cache.

Saat cache miss, provider harus memproses ulang seluruh riwayat 100 ribu token dengan tarif input normal, dan mungkin mengenakan biaya tambahan untuk menuliskannya kembali ke cache. Karena itu, setelah cache kedaluwarsa, permintaan singkat seperti `continue` pun bisa terasa sangat mahal. Dalam sesi panjang, biaya membaca ulang input lama bisa jauh lebih besar daripada biaya menghasilkan balasan berikutnya.

Cache juga dapat menciptakan hubungan insentif yang tidak begitu intuitif.

Pengguna menginginkan cache hit rate yang tinggi, karena hal itu menurunkan latensi dan harga. Operator inferensi yang memiliki GPU juga seharusnya menginginkan hit rate yang tinggi: komputasi prefill yang lebih sedikit berarti perangkat keras yang sama dapat melayani lebih banyak permintaan. Diskon token cache yang dirancang dengan baik dapat menyelaraskan kepentingan kedua pihak, sekaligus memberi operator margin keuntungan yang lebih baik.

Insentif gateway atau penjual ulang bisa berbeda. Jika ia memperoleh pendapatan dari token input yang dikenai tarif tanpa cache, maka cache miss dapat membuat tagihan pelanggan lebih tinggi. Apakah itu juga menghasilkan lebih banyak laba bergantung pada biaya hulu, kontrak, dan siapa yang menjalankan cache. Dalam tumpukan teknologi yang insentifnya tidak selaras, pihak yang menangani routing mungkin tidak perlu menanggung seluruh biaya cache miss, sementara pihak yang menagih pengguna justru memperoleh lebih banyak pendapatan saat terjadi cache miss.

Ini tidak berarti provider sengaja merusak cache, tetapi menunjukkan bahwa performa cache seharusnya dapat diamati. Pengguna tidak seharusnya hanya bisa menduga-duga ada masalah dari tagihan yang tiba-tiba membengkak. Mengetahui apakah cache mengalami anomali bisa menjadi petunjuk penting.

Mengikuti cache secara ketat juga berarti gateway tidak leluasa merutekan permintaan ke opsi terbaik di antara dua giliran. Anda mungkin bersedia mengorbankan satu cache hit demi beralih ke model lain yang sejak saat itu lebih hemat; atau mungkin lebih baik menyeimbangkan beban ke provider lain.

## Mengapa Pi tidak melakukan pemangkasan secara agresif

Setelah membaca sampai di sini, Anda mungkin sudah paham mengapa Pi tidak memangkas pemanggilan tool. Orang mudah berpikir untuk mengendalikan biaya dengan terus menghapus hasil tool lama atau menulis ulang riwayat; kadang itu memang perlu, terutama ketika mendekati batas jendela konteks. Tetapi seperti dijelaskan sebelumnya, pemangkasan itu sendiri juga memiliki biaya cache.

Menghapus konten dari tengah akan mengubah prefix pada posisi penghapusan. Seluruh percakapan yang masih tersisa setelahnya mungkin perlu diproses ulang. Biaya sekali jalan untuk menulis ulang konteks panjang yang sudah di-cache bisa melebihi penghematan di masa depan dari menghapus sedikit token cache yang berharga murah.

Perbandingan titik impas secara kasar adalah sebagai berikut:

```text
Biaya penulisan ulang sekali jalan
    ≈ token yang dipertahankan setelah titik edit × (harga tanpa cache - harga baca cache)

Penghematan per giliran di masa depan
    ≈ token yang dipangkas × harga baca cache
```

Ini bukan hanya soal penagihan. Hasil tool lama sering kali memuat bukti yang kemudian menjadi dasar keputusan model. Menghapusnya dapat memperburuk performa model, bahkan jika ringkasannya mempertahankan inti maknanya.

Karena itu, Pi lebih memilih transkrip yang stabil dan terutama bersifat append, dan tidak menganggap setiap token lama sebagai pemborosan. Ketika tekanan konteks cukup kuat untuk membenarkan penulisan ulang yang bersifat lossy, pemadatan konteks dapat dijalankan. Karena pemadatan sengaja membangun konteks baru, bukan tanpa sengaja menagih ulang prompt yang tidak berubah, Pi mencatatnya dalam statistik sesi sebagai satu kali reset cache, bukan sebagai kegagalan cache.

Tujuannya bukan membuat prompt sependek mungkin, melainkan mencapai keseimbangan terbaik antara konteks model, pemakaian ulang cache, latensi, dan harga.

Pada saat yang sama, pemangkasan terkadang juga bermanfaat. Jika provider yang Anda pakai tidak memberi diskon atas performa cache yang baik, atau karena suatu alasan Anda tidak bisa memperoleh hit rate yang tinggi, maka pemangkasan bisa jadi lebih cocok. Pemangkasan juga memang memudahkan router menyeimbangkan beban antar backend yang berbeda, karena cache tidak dapat dipindahkan.

## Apa yang bisa dan tidak bisa dilakukan Pi

Pi berupaya menjaga input yang stabil tetap stabil. Ia meneruskan ID sesi yang konsisten dan petunjuk cache khusus provider, menetapkan node cache eksplisit saat API memerlukannya, mencatat pemakaian pembacaan dan penulisan cache, serta mendukung pemuatan tool inkremental yang berlabuh pada posisi pesan ketika model mengizinkannya. Perilaku transkrip bawaannya juga menghindari penulisan ulang konteks lama tanpa alasan.

Setelah permintaan meninggalkan komputer lokal, Pi tidak dapat mengendalikan setiap lapisan setelahnya. Ia tidak dapat menentukan kebijakan eviction provider, tidak dapat memperpanjang cache melebihi batas yang diizinkan API, tidak dapat menjamin suatu GPU tetap hidup, dan tidak dapat memastikan gateway mematuhi afinitas routing. Ia juga tidak dapat mempertahankan cache untuk prefix yang diubah oleh Extension.

Yang bisa dilakukan Pi adalah membuat kesehatan cache terlihat.

Bilah status di bagian bawah antarmuka menampilkan total pembacaan dan penulisan cache dengan `R` dan `W`, serta cache hit rate permintaan terakhir dengan `CH`. Perintah `/session` menampilkan informasi yang lebih lengkap: total input yang di-cache dan tidak di-cache, hit rate kumulatif, biaya, serta estimasi jumlah token dan uang yang ditagih ulang akibat [cache miss yang signifikan](https://github.com/earendil-works/pi/blob/34f3719a942ecbf3e6d23e67098f47ba2867de0a/packages/coding-agent/src/core/cache-stats.ts#L50-L90).

```text
Pesan
Total: 178
Pengguna: 6
Asisten: 58
Tool: 114 pemanggilan, 114 hasil

Token
Input: 7,129,883
  Di-cache: 6,776,832 (95.0%)
  Tidak di-cache: 353,051
Output: 30,013
Total: 7,159,896

Biaya
Total: $6.054
Penagihan ulang cache: $0.728 (161,744 token, 2 kali miss)
```

Pengguna yang ingin diberi tahu saat cache miss terjadi dapat mengaktifkan **Show cache miss notices (tampilkan pemberitahuan cache miss)** di `/settings`, yang bersesuaian dengan `showCacheMissNotices` di `settings.json`. Setelah itu, Pi akan menyisipkan peringatan setiap kali terjadi miss yang signifikan, berisi jumlah token yang ditagih ulang dan estimasi biaya. Ketika Pi dapat mengamati pergantian model, atau waktu idle yang melebihi TTL pendek yang biasa, Pi juga akan menjelaskan penyebabnya. Untuk miss lainnya, ia hanya melaporkan faktanya, dan tidak berpura-pura mengetahui apa yang terjadi di dalam provider.

## Penyebab umum performa cache memburuk

Ketika cache hit rate sebuah sesi terlihat tidak wajar, penyebab yang umum antara lain:

1. **Idle.** Suatu perintah, review kode, atau jeda percakapan melampaui jendela retensi provider.
2. **Berganti model atau provider.** Status KV terikat pada model, dan biasanya tidak dapat dipindahkan antar provider.
3. **Navigasi branch.** `/tree`, mundur, fork, dan branch alternatif dapat mengubah rangkaian token saat ini, meskipun ID sesi tidak berubah.
4. **Pemadatan konteks atau penulisan ulang riwayat secara manual.** Operasi ini sengaja mengganti sebagian prompt dan membentuk prefix baru.
5. **Perubahan tool dan tingkat reasoning.** Menambah, menghapus, mengurutkan ulang, atau mengedit definisi tool akan mengubah bagian awal permintaan, kecuali model mendukung pemuatan yang berlabuh pada posisi pesan dan perubahannya murni inkremental. Mengubah tingkat reasoning biasanya juga berdampak sama.
6. **System prompt yang dinamis.** Timestamp, nilai acak, konteks proyek yang terus berubah, dan penggalan prompt yang disediakan Extension dapat membatalkan semua yang ada setelahnya.
7. **Transformasi konteks oleh Extension.** Extension yang memodifikasi pesan lama atau payload permintaan provider dapat membuat transkrip Pi yang tampak stabil berubah saat benar-benar dikirim.
8. **Routing dan eviction provider.** Bahkan jika prompt benar-benar identik, cache tetap bisa miss jika permintaan tiba di lokasi yang tidak lagi dapat mengambil blok KV terkait.

::: info Catatan penerjemah
Artikel ini adalah terjemahan bahasa Indonesia lengkap dari teks asli Earendil Engineering. Terjemahan bahasa Indonesia beserta bagian adaptasinya diterbitkan di bawah [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans) berdasarkan lisensi; hak cipta teks asli bahasa Inggris dimiliki oleh Earendil. Jika ada ambiguitas, [teks asli bahasa Inggris](https://earendil.com/posts/prompt-caching/) yang menjadi acuan.
:::

## Baca selanjutnya

- [Teks asli bahasa Inggris: Prompt Caching In Agents](https://earendil.com/posts/prompt-caching/)
- [Sebelumnya: Mekanisme pemadatan konteks di Pi](/translations/compaction-in-pi)
- [Berikutnya: Apa itu Agent Harness?](/translations/what-is-a-harness)
