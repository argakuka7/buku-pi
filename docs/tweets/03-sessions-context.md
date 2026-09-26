---
title: Memahami Session dan Konteks
description: Catatan belajar Pi tahap 3, memuat 7 tweet asli.
outline: false
prev:
  text: Selesaikan dulu tugas pertama
  link: /tweets/02-first-tasks
next:
  text: Membangun Skill dan Extension Anda Sendiri
  link: /tweets/04-skills-extensions
---

<span class="library-status">Catatan belajar pribadi · STAGE 03</span>

# Memahami Session dan Konteks

**Masalah yang ingin dipecahkan pada tahap ini**　Pahami hubungan antara pohon sesi, memori jangka panjang, pemadatan konteks, Token, dan prompt cache.

Tahap ini hanya berisi tujuh tweet, tetapi menjadi titik balik seluruh jalur pembelajaran. Disarankan membacanya secara kronologis: mulai dari cache dan pemadatan konteks, lalu Session Tree, dan terakhir kembali ke koreksi pemahaman soal “apakah konteks yang lebih kecil pasti lebih hemat”.

Halaman ini memuat 7 tweet asli. Teks berasal dari pustaka tweet asli pribadi di Google Drive, dengan alamat x.com dan tautan pendek media t.co sudah dihapus. Versi dan status produk yang disebut dalam tweet asli mengikuti tanggal terbitnya.

<article class="tweet-entry" id="post-2092091965244609020">

## Ada satu hal lain di Pi yang mudah diabaikan orang, yaitu rasio cache hit 🔥

<span class="tweet-meta">2026-08-25 11:29:28 · tweet asli</span>

> Ada satu hal lain di Pi yang mudah diabaikan orang, yaitu rasio cache hit 🔥
>
> Saat ini banyak orang masih membandingkan Agent mana yang lebih nyaman dipakai dan model mana yang lebih kuat. Saya sendiri lebih sering memperhatikan berapa besar tagihan API yang bisa dihemat.
>
> Ada orang yang memakai Pi dengan DeepSeek V4 Flash, menjalankan hampir 1 miliar input token, cache hit 99.93%, dan akhirnya hanya mengeluarkan 2.65 dolar. Menurut keterangan resmi, tanpa cache biayanya bisa sekitar 132 dolar.
>
> Model yang sama di Harness lain biasanya mencatat cache hit 94% sampai 97%. Di Pi Agent, angkanya bisa stabil di atas 99%. Selisih beberapa poin ini, saat volumenya besar, beda biayanya melebar secara eksponensial.
>
> Penyebabnya sebenarnya tidak misterius. System prompt Pi pendek, tool bawaannya sedikit, dan sebelum request konteksnya bisa dilihat serta diubah. Prefix cache tidak mudah berubah, jadi rasio cache hit-nya otomatis tinggi.
>
> Yang lebih sering ingin saya sampaikan, mungkin biaya pemakaian AI justru menjadi hambatan terbesar pemula dalam mempelajari Agent, karena tidak semua orang bisa berlangganan paket 20 atau 200 dolar per bulan.
>
> Semoga ke depannya Pi semakin bagus, karena nyata-nyata membantu saya menghemat uang 👍🏻

</article>

<article class="tweet-entry" id="post-2092129372178350355">

## Mengapa Pi hemat Token? Sebenarnya tidak ada teknologi cache yang ajaib 🔥

<span class="tweet-meta">2026-08-25 13:58:06 · tweet asli</span>

> Mengapa Pi hemat Token? Sebenarnya tidak ada teknologi cache yang ajaib 🔥
>
> Intinya hanya satu hal: Pi sangat menahan diri terhadap Context.
>
> Lima jurus utamanya:
>
> Prefix stabil: System Prompt, definisi tool, AGENTS.md, dan sejenisnya dibuat seminim mungkin berubah, sehingga Prompt Cache lebih mudah terus terkena hit.
>
> Bawaan yang sedikit: System Prompt Pi sangat tipis, tool bawaannya juga sedikit, jadi Context dasarnya sendiri sudah kecil.
>
> Riwayat yang terutama ditambahkan: Session biasanya melanjutkan dengan menambahkan pesan baru di belakang Context lama, bukan menyusun ulang Prompt setiap ronde, sehingga lebih mendukung pemakaian ulang cache.
>
> Dimuat sesuai kebutuhan: kemampuan seperti Skill hanya menampilkan nama dan deskripsi lebih dulu, lalu teks lengkapnya dibaca saat diperlukan, agar sejak awal tidak menjejalkan banyak konten yang tidak relevan ke dalam konteks.
>
> Compaction hanya untuk percakapan panjang: riwayat lama baru dipadatkan ketika Context terlalu panjang; Compaction sempat merusak cache, tetapi setelah itu akan terbentuk lagi prefix yang stabil.
>
> Di sini saya juga mengoreksi kesalahan saya sebelumnya: Pi belum tentu lebih efisien cache-nya dibanding Agent lain, tetapi dengan cara-cara ini Pi mengoptimalkan konteksnya, sehingga total Token yang dikonsumsi lebih sedikit daripada Agent lain.
>
> Optimasi total konsumsi Token juga sangat penting, bukan sekadar mengejar rasio cache hit yang tinggi.

</article>

<article class="tweet-entry" id="post-2092158815198380343">

## Cara Pi menangani pemadatan konteks lebih menarik daripada yang saya bayangkan!

<span class="tweet-meta">2026-08-25 15:55:06 · tweet asli</span>

> Cara Pi menangani pemadatan konteks lebih menarik daripada yang saya bayangkan!
>
> Sebagai gambaran singkat, logika pemadatan konteks bawaan Pi sebenarnya sangat sederhana:
>
> Context hampir penuh → rangkum konteks lama → simpan pesan terbaru → lanjut bekerja.
>
> Tetapi komunitas sudah memunculkan beberapa pendekatan yang berbeda:
>
> 1. pai-acp: aliran pelupaan, membiarkan AI memutuskan sendiri apa yang dilupakan
>
> Tidak lagi menunggu Context penuh lalu memadatkannya sekaligus, melainkan membiarkan Agent menilai sendiri riwayat mana yang sudah tidak bernilai, lalu memadatkannya lebih awal; saat diperlukan, riwayat itu bahkan bisa dicari atau dipulihkan.
>
> 2. pi-smart-compact: plugin ini terutama menyimpan tujuan saat ini, file yang diubah, error, keputusan penting, dan hal yang belum selesai, lebih seperti catatan pengingat untuk dirinya sendiri.
>
> 3. pi-context: memperlakukan konteks seperti Git, bisa melakukan checkpoint, melihat timeline, lalu memilih kapan compact.
>
> 4. Hypa: gagasan desainnya adalah pemadatan terbaik adalah sejak awal tidak membiarkan sampah masuk ke konteks, karena ini lebih hemat token daripada sekadar memadatkan setelah konteks mencapai batas.
>
> 5. pi-press: memindahkan proses pemadatan ke depan, membuat ringkasan lebih awal saat konteks mendekati ambang batas, sehingga ketika Compact benar-benar dibutuhkan bisa langsung beralih dan mengurangi jeda Agent akibat pemadatan.
>
> Setelah melihat banyak gagasan desain plugin ini, kesimpulannya adalah memilih isi yang tepat pada saat yang tepat; mungkin benar bahwa sejak awal kita tidak boleh membiarkan data sampah masuk ke konteks.
>
> Bisa juga pemadatan dilakukan lebih awal, dan bagi Anda ketidakterasaannya yang paling nyaman. Namun yang tetap perlu dijawab adalah pertanyaan paling mendasar: bagaimana sebenarnya memori Agent itu.
>
> Sampai sekarang belum ada kesimpulan yang final, tetapi inspirasi dan gagasan ini akan selalu ada.

</article>

<article class="tweet-entry" id="post-2092565910251004299">

## Setelah meneliti memori jangka panjang Pi, hasilnya lebih rumit daripada yang saya bayangkan 🔥

<span class="tweet-meta">2026-08-26 18:52:45 · tweet asli</span>

> Setelah meneliti memori jangka panjang Pi, hasilnya lebih rumit daripada yang saya bayangkan 🔥
>
> Pi secara bawaan lebih condong mengelola Session dan Context, tidak punya sistem memori seperti Hermes Agent Memory, tetapi komunitas ternyata memiliki implementasi memori yang mirip Hermes.
>
> Komunitas sekarang sudah menumbuhkan beberapa pendekatan yang sama sekali berbeda.
>
> Jika Anda ingin meneliti, saya merekomendasikan empat proyek ini:
>
> 1. pi-memory
>   Memori file yang paling sederhana. MEMORY.md, Daily Log, Scratchpad, ditambah pencarian semantik. Memori adalah file nyata yang bisa dibuka, diubah, dan dicadangkan, tidak diserahkan untuk dipelihara oleh sistem kotak hitam.
>
> 2. pi-hermes-memory
>   Yang ini agak saya kenal. Selain memori jangka panjang, ada Session Search, memori kegagalan, preferensi pengguna, perapian otomatis, dan Procedural Skills. Proyek ini bukan sekadar ingin Pi mengingat banyak hal, tetapi berharap Agent bisa perlahan menumbuhkan pengalaman dari kegagalan, koreksi, dan pengalaman kerjanya.
>
> 3. pi-honcho
>   Lebih seperti lapisan memori jangka panjang yang mandiri. Memori pengguna dan memori proyek dipisahkan; kebiasaan dan preferensi bisa bertahan lintas Session dan lintas proyek, sementara pengetahuan proyek bisa dipelihara secara terpisah. Cocok jika Anda benar-benar memakai Pi sebagai Agent jangka panjang, bukan hanya sebagai Coding CLI.
>
> 4. pi-hindsight
>   Pendekatannya cukup menarik. Bukan setiap kalimat dimasukkan ke memori jangka panjang, melainkan pada titik seperti Context yang akan dipadatkan atau Session yang akan berakhir, keputusan, pengalaman, jebakan, dan pengetahuan proyek yang benar-benar layak disimpan diekstraksi lalu disimpan.
>
> Ada masa saya sendiri juga terus meneliti memori jangka panjang Agent, bahkan melakukan optimasi dan modifikasi terhadap sistem memori Hermes.
>
> Yang paling utama bukanlah belajar memakai apa, melainkan banyaknya inspirasi yang saya dapat selama proses belajar; meneliti plugin memori Pi ini pun sama halnya.
>
> Mungkin Pi Agent Anda tidak perlu memori jangka panjang, karena sederhana dan efisien adalah jurus pamungkas Pi.

</article>

<article class="tweet-entry" id="post-2093127901059457117">

## Saya menuangkan pemadatan konteks Pi menjadi sebuah game 🔥

<span class="tweet-meta">2026-08-28 08:05:54 · tweet asli</span>

> Saya menuangkan pemadatan konteks Pi menjadi sebuah game 🔥
>
> Belajar Pi jangan sekadar membaca teori yang kering; Anda bisa belajar sambil bermain game.
>
> Saya membuat konten seputar penanganan konteks Pi menjadi sebuah game, dan memasukkan semua ciri penanganan konteks ke dalamnya.
>
> 1. Sesekali akan muncul bilah energi pemadatan konteks; klik untuk menghapus Token di sekitarnya
>
> 2. Saat menyentuh Token yang sesuai, konteks akan bertambah
>
> 3. Secara bawaan konteks bertambah seiring waktu; hanya dengan mengambil item secara bawaan konteks bisa tetap tidak berubah
>
> Inti dari ini semua sebenarnya adalah cara Pi menangani dan memahami konteks, dan itulah alasan saya ingin menuangkan pengetahuan ini menjadi bentuk nyata.
>
> Belajar di dalam game, belajar sambil bermain, bermain sambil belajar 🔥

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi medianya akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2093359637932445901">

## Konteks Pi sebenarnya bukan satu catatan obrolan, melainkan sebuah jalur yang dibangun sementara dari Session Tree.

<span class="tweet-meta">2026-08-28 23:26:45 · tweet asli</span>

> Konteks Pi sebenarnya bukan satu catatan obrolan, melainkan sebuah jalur yang dibangun sementara dari Session Tree.
>
> Belakangan ini saya sedang meneliti kode sumber Pi, dan menemukan bahwa konteks yang disimpan Pi berada di Session, dan itu hanya salah satu sudut pandang model.
>
> Baru sekarang saya menyadari bahwa pemahaman saya sebelumnya tentang Agent Context masih terlalu sederhana.
>
> 1. Session yang disimpan Pi sendiri adalah sebuah pohon
>
> Setiap Session Entry Pi mencatat id dan parentId-nya sendiri, jadi satu tugas tidak harus selalu dilanjutkan ke belakang saja.
>
> Misalnya Anda sudah mencoba satu pendekatan, di tengah jalan ternyata arahnya salah, dan bisa langsung kembali ke salah satu node sebelumnya untuk memulai ulang. Jalur sebelumnya tidak dihapus, melainkan tetap disimpan di dalam Session, sedangkan rencana baru membentuk cabang lain.
>
> Yang paling menarik di sini adalah Pi tidak menyimpan jawaban akhir, melainkan seluruh proses kerja Agent.
>
> 2. Tetapi model tidak melihat seluruh pohon itu setiap kali
>
> Inilah yang menurut saya desainnya cukup cerdik.
>
> Pi akan menelusuri ke belakang mencari node induk berdasarkan node tempat ia berada saat ini, lalu mendapatkan riwayat yang benar-benar berlaku pada cabang tersebut, dan memakai konten itu untuk membangun Context ronde ini.
>
> Jadi Session dan Context sebenarnya bukan hal yang sama.
>
> Session lebih seperti aset sejarah yang lengkap, sedangkan Context adalah memori kerja yang dipilih sementara dari riwayat itu untuk dipakai model.
>
> 3. Compaction pada dasarnya juga tidak mengubah pengalaman-pengalaman itu
>
> Ketika Context semakin panjang, Pi akan merangkum bagian yang lebih awal menjadi Compaction Summary, lalu terus menyimpan pesan asli yang paling baru.
>
> Tetapi Tool Call, percakapan, dan eksplorasi file yang lama tidak lenyap dari Session karena hal ini; yang dipadatkan sebenarnya bukan "memori", melainkan hanya cara model melihat memori itu saat ini.
>
> Inilah alasan saya semakin suka memahami Session dan Context secara terpisah.
>
> 4. Bahkan cabang yang gagal pun belum tentu tidak bernilai
>
> Saat berpindah cabang Session Tree, Pi juga bisa membuat Branch Summary untuk jalur yang akan ditinggalkan.
>
> Artinya, meski sebelumnya salah arah, Bug yang ditemukan, metode yang dicoba, file yang diubah, dan rencana yang terbukti tidak layak, semua pengalaman itu tetap bisa dibawa ke jalur baru.
>
> Sampai di sini saya perlahan menyadari bahwa nilai sebenarnya dari desain Session Tree mungkin bukan kemampuannya membawa Anda kembali kapan saja dengan /tree.
>
> Setelah meneliti, saya sadar penelitian saya masih terlalu dangkal; ada beberapa bagian yang harus masuk ke kode sumber, atau dibantu analisis AI, agar isinya bisa dipahami.
>
> Jika hanya tahu konsepnya secara dangkal tanpa memahami implementasinya, akan sulit mendapat pemahaman yang mendalam. Saya menyarankan, jika ingin belajar mendalam, Anda harus membongkar kode sumbernya.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi medianya akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2097224177887670482">

## Pi punya hal yang sangat berlawanan dengan intuisi: konteks yang lebih kecil belum tentu lebih hemat

<span class="tweet-meta">2026-09-08 15:23:03 · tweet asli</span>

> Pi punya hal yang sangat berlawanan dengan intuisi: konteks yang lebih kecil belum tentu lebih hemat
>
> Belakangan ini saya membaca ulang tulisan Earendil berjudul "Prompt Caching In Agents", dan baru saat itu saya paham bahwa cache Agent tidak sesederhana itu.
>
> Dulu ketika memakai Agent, saya juga secara alami merasa bahwa konteks semakin pendek semakin baik. Tool dan hasil yang tidak dipakai sebisa mungkin dihapus, dan semakin sedikit konteks yang dirapikan, semakin hemat Token.
>
> Tetapi Prompt Cache membuat masalah ini menjadi sama sekali berbeda.
>
> Setiap ronde Pi Agent meminta ke model, ia tidak hanya mengirim konten baru yang baru Anda ketik, melainkan membawa serta System Prompt, Tools, riwayat percakapan, Tool Call, dan lain-lain, lalu menambahkan pesan terbaru di ekornya.
>
> Tetapi ada satu poin paling penting: Prefix harus tetap stabil agar cache bisa dimanfaatkan secara efisien.
>
> Misalkan sebuah percakapan sudah mengumpulkan lebih dari seratus ribu Token, dan sebagian besar konteks percakapan itu sudah terkena cache.
>
> Tetapi Harness Anda, demi menghemat Token, menghapus sebagian konten tak berguna di tengah, atau mengubah Tool Definition dan System Prompt di depan secara dinamis, sehingga sepintas memang menghemat sebagian konsumsi Token.
>
> Namun karena Prefix berubah, cache ratusan ribu Token di belakangnya bisa langsung tidak berlaku, sehingga konteks setelahnya harus di-cache ulang, dan biaya Token yang dikonsumsi justru lebih tinggi.
>
> Hasil akhir yang Anda dapatkan besar kemungkinan justru terbalik dari tujuan.
>
> Demi menghemat beberapa ribu Token, Anda menghitung ulang puluhan ribu bahkan lebih dari seratus ribu Token setelahnya.

</article>

## Langkah Berikutnya

Setelah menyelesaikan tahap ini, lanjutkan membaca [Tahap 4　Membangun Skill dan Extension sendiri](/tweets/04-skills-extensions).

