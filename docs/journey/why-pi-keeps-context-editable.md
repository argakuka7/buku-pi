---
title: Mengapa Pi Menyerahkan Sesi dan Konteks ke Tangan Anda
description: "Membaca berangkai portabilitas sesi, prompt cache, pemadatan konteks, dan Agent Harness: bedakan catatan sesi, konteks model, dan permintaan provider, serta pahami mengapa setiap lapisan perlu bisa diperiksa dan diubah."
prev:
  text: Ditulis di Luar Buku Pi
  link: /journey/
next:
  text: Sesi yang tidak bisa Anda bawa
  link: /translations/session-portability
---

<span class="library-status">Catatan belajar · Rangkaian terjemahan</span>

# Mengapa Pi Menyerahkan Sesi dan Konteks ke Tangan Anda

Setelah membaca [“Sesi yang Tidak Bisa Dibawa Serta”](/translations/session-portability), [“Mekanisme Pemadatan di Pi”](/translations/compaction-in-pi), dan [“Prompt Cache di Agent”](/translations/prompt-caching), saya semakin merasa ketiganya tidak membahas tiga fitur yang terpisah, melainkan satu pertanyaan yang sama: **dari sebuah pekerjaan Agent, berapa banyak bagian yang benar-benar bisa kita bawa, periksa, dan ubah sendiri?**

Bayangkan Anda meminta Agent memperbaiki gangguan yang berlangsung dua hari. Ia membaca log, mengubah kode, menyingkirkan beberapa dugaan, dan pada akhirnya belum selesai. Saat itu Anda ingin mengganti model untuk melanjutkan. Jika di tangan Anda hanya ada ID sesi dari satu provider, atau sepotong “status setelah pemadatan” yang tidak bisa Anda buka, apa sebenarnya yang diterima model baru? Bisakah ia tahu penyebab error yang sudah disingkirkan? Bisakah Anda melihat langkah mana yang terlewat?

Inilah benang merah yang saya temukan saat membaca terjemahan-terjemahan ini:

**Menyimpan catatan berarti bisa menelusuri; mengendalikan konteks berarti bisa menentukan apa yang dilihat model sekarang; mengendalikan lapisan konversi berarti tidak membiarkan antarmuka satu model menentukan cara Anda bekerja.**

Ketiga lapisan itu baru mendekati sebuah Agent Harness milik Anda sendiri jika disatukan.

## Bedakan dulu tiga hal

1. **Catatan sesi** menjawab “apa yang terjadi pada tugas”. Sesi JSONL lokal, pohon sesi, dan entri Extension menyimpan branch, pemanggilan tool, dan ringkasan.
2. **Konteks ronde ini** menjawab “apa yang akan dilihat model pada pemanggilan berikutnya”. Branch saat ini, ringkasan pemadatan, pesan terbaru, dan pemrosesan `context` dari Extension bersama-sama menentukan materi ronde ini.
3. **Permintaan provider** menjawab “bagaimana materi ini diserahkan ke model”. Lapisan adaptasi Pi mengonversi input; bila perlu, Extension dapat memeriksa atau menyesuaikan payload permintaan.

Sesi adalah catatan jangka panjang; konteks ronde ini dibangun ulang dari jalur sesi saat ini, lalu ditambah system prompt dan definisi tool; permintaan provider kemudian mengubah materi itu ke bentuk yang dibutuhkan antarmuka tertentu. **“Ada di sesi saya” tidak sama dengan “model melihatnya saat ini”; “model melihatnya” juga tidak berarti “bisa disambungkan apa adanya ketika berganti provider”.** [Penjelasan format file sesi](https://pi.dev/docs/latest/session-format) dari Pi memerinci bagaimana entri sesi membentuk pesan model; [dokumentasi Extension](https://pi.dev/docs/latest/extensions) menyediakan pintu masuk untuk menyesuaikan pesan dan payload permintaan sebelum dikirim.

Kata “dapat disesuaikan” di sini juga punya batas: file sesi Pi memiliki struktur JSONL-nya sendiri, jadi Pi tidak akan otomatis mengenali format disk sembarang yang Anda karang. Yang benar-benar layak diperhatikan adalah catatan tetap tersimpan lokal dan dapat dibaca, Extension dapat menambah entri atau pesan, dan juga mengubah konteks ronde ini yang diturunkan dari catatan tersebut.

<div class="concept-diagram"><img src="/images/diagrams/context-session-compaction.svg" alt="Session Tree menyimpan riwayat dan branch lengkap; Pi memilih jalur dan menggabungkannya dengan file proyek yang dibaca sesuai kebutuhan serta ringkasan pemadatan, lalu menyusun Context saat ini sebelum menyerahkannya ke model" loading="lazy"></div>

*Diagram: sesi menyimpan “apa yang terjadi”, sedangkan Context ronde ini menentukan “apa yang dilihat model sekarang”. Gambar ini menunjukkan hubungan dasarnya; dua gambar berikutnya menjelaskan perubahan prefix dan serah terima antar-model. [Buka gambar asli](/images/diagrams/context-session-compaction.svg)*

## Mengapa sesi harus dipegang lebih dulu

Terjemahan [tentang portabilitas sesi](/translations/session-portability) menyadarkan saya bahwa menyimpan teks obrolan saja tidak cukup. “Pengalaman” Agent pemrograman juga mencakup instruksi sistem, pemanggilan tool, hasil tool, pergantian model, branch, dan pemadatan. Jika langkah-langkah penting hanya tersembunyi di dalam provider, setelah meninggalkan layanannya, bahkan dengan riwayat obrolan yang tampak rapi, kondisi kerja saat itu belum tentu bisa dibangun kembali.

Secara bawaan Pi menyimpan sesi dalam file JSONL lokal, diatur menurut direktori kerja, dan mempertahankan berbagai jalur dalam struktur pohon. Anda dapat melanjutkan, kembali ke titik percabangan, atau membuka sesi lain. Pemadatan pun ditulis ke catatan sebagai entri: konten lama mungkin tidak lagi masuk ke konteks model pada ronde berikutnya, tetapi entri sesi aslinya masih bisa ditinjau kembali. Ini memberi kita dua kemampuan berbeda: **melanjutkan jalur saat ini**, dan **menanyakan kembali dari mana suatu penilaian berasal setelah kejadian**.[Dokumentasi sesi Pi](https://pi.dev/docs/latest/sessions) dan [penjelasan format file](https://pi.dev/docs/latest/session-format) menjelaskan mekanisme ini.

Sesi lokal tetap bukan cadangan serba bisa. Penalaran tersembunyi yang tidak dikembalikan provider model, serta proses internal pencarian terkelola, tidak mungkin dicatat oleh Pi dari udara; pohon sesi juga tidak akan memulihkan file disk untuk Anda. Agar model lain dapat mengambil alih, setidaknya simpan tujuan, keputusan penting, file yang sudah diubah, hasil verifikasi, dan masalah yang belum selesai. Kode itu sendiri tetap perlu dicek lewat file dan Git.

## Mengapa sebaiknya prefix tidak diusik sehari-hari, dan pemadatan hanya saat perlu

Sesi panjang memiliki biaya yang mudah terlewatkan: ronde berikutnya biasanya mengirim ulang sebagian besar konten sebelumnya. Prompt cache dapat memakai kembali **prefix input yang sepenuhnya sama**. Karena itu, sambil bekerja terus-menerus menghapus hasil tool lama dari tengah, menata ulang definisi tool, dan mengubah system prompt, meskipun terlihat memperpendek prompt, bisa membuat konten di belakangnya yang tadinya dapat dipakai ulang harus dihitung ulang.

Ini menjelaskan mengapa Pi lebih menyukai catatan yang stabil dan mengutamakan penambahan. Prefix yang stabil memberi cache kesempatan untuk mengenai sasaran; tetapi “kesempatan” bukan jaminan, karena provider tetap dapat membiarkan cache kedaluwarsa, menghapusnya, atau merutekan permintaan ke tempat lain. ID sesi juga tidak dapat mengubah dua prefix yang berbeda menjadi prefix yang sama. [Terjemahan tentang prompt cache](/translations/prompt-caching) menjelaskan biaya ini dengan sangat gamblang.

**Pemadatan adalah hal lain lagi.** Ketika konteks mendekati jendela model, atau Anda secara sengaja mengetik `/compact`, Pi merapikan bagian konten yang lebih awal menjadi ringkasan yang dapat dibaca, mempertahankan pesan terbaru, lalu melanjutkan dengan “ringkasan + konten terbaru”. Langkah ini sengaja menulis ulang prefix input, sehingga prompt cache lama biasanya harus dibangun kembali. Dengan kata lain, Pi tidak “mempertahankan prefix asli untuk memadatkan”: ia **menjaga prefix tetap stabil sehari-hari, dan ketika benar-benar perlu menerima satu kali reset cache demi konteks yang lebih pendek namun tetap bisa dilanjutkan**.[Dokumentasi Compaction Pi](https://pi.dev/docs/latest/compaction) menjelaskan ringkasan, pemertahanan pesan terbaru, dan alur pemadatan yang dapat dikustomisasi.

<div class="concept-diagram"><img src="/images/diagrams/prefix-cache-compaction.svg" alt="Ronde 1 dan ronde 2 berbagi prefix sistem, tool, riwayat, dan pesan A yang sama; setelah pemadatan, riwayat lama berubah menjadi ringkasan yang dapat dibaca, pesan terbaru dipertahankan, dan prompt cache dibangun kembali dari titik perubahan" loading="lazy"></div>

*Diagram: ronde kedua hanya menambah konten, sehingga prefix yang sama berpeluang mengenai cache; pemadatan menulis ulang bagian yang lebih awal, dan meskipun pesan terbaru dipertahankan, prefix lengkap yang lama tidak lagi sama. Di ponsel Anda dapat menggeser ke kiri dan kanan, atau [buka gambar asli](/images/diagrams/prefix-cache-compaction.svg) untuk memperbesarnya.*

Ini juga sebuah kompromi, bukan “memori tanpa kehilangan” yang ajaib. Ringkasan akan membuang detail. Jika teks asli suatu error, batasan pengguna, atau hasil verifikasi tidak boleh hilang, pastikan hal itu muncul secara eksplisit dalam ringkasan, atau tuliskan ke file proyek yang dapat dibaca ulang. Setelah pemadatan, meminta Agent mengulang tujuan dan langkah berikutnya lalu mengeceknya dengan file lebih andal daripada hanya melihat tulisan “pemadatan selesai”.

## Mengapa juga perlu bisa mengubah “apa yang dilihat model”

Jika catatan sesi selalu dikirim apa adanya ke model setiap kali, kita hanya bisa memilih antara “menghapus catatan selamanya” dan “selalu mengirim seluruh catatan”. Padahal yang benar-benar dibutuhkan adalah pilihan ketiga: **catatan tetap dapat ditelusuri, sementara input ronde ini diatur sesuai kebutuhan tugas.**

Misalnya, satu kali menjalankan tool menghasilkan ribuan baris log. Anda mungkin ingin sesi menyimpan hasil lengkapnya agar mudah dipertanggungjawabkan; sementara pada pemanggilan berikutnya cukup berikan ringkasan error, nomor baris penting, dan path file aslinya kepada model. Atau jika Anda berganti ke model dengan jendela konteks yang lebih kecil, dibutuhkan konten serah terima yang lebih ringkas. Event `context` pada Extension Pi dapat melakukan penyesuaian non-destruktif pada salinan pesan sebelum setiap pemanggilan model; hook pemadatan kustom dapat menyediakan ringkasannya sendiri; pesan kustom dapat masuk ke konteks. [Dokumentasi Extension](https://pi.dev/docs/latest/extensions) dan [dokumentasi pemadatan](https://pi.dev/docs/latest/compaction) masing-masing menyediakan pintu masuk tersebut.

Saya memahami kemampuan ini sebagai “strategi konteks bisa Anda tentukan sendiri”: menentukan fakta mana yang harus dipertahankan apa adanya, mana yang boleh diringkas, dan mana yang hanya diberikan pada tugas tertentu. Ini tidak berarti Pi otomatis menemukan format optimal untuk semua model, apalagi berarti satu set ringkasan dapat mempertahankan rasio pemadatan yang sama di provider mana pun. Cara tokenisasi model, jendela konteks, protokol tool, dan penagihan cache semuanya bisa berbeda; KV cache setelah pergantian model juga tidak bisa langsung dipindahkan. **Yang portabel adalah catatan kerja dan aturan serah terima yang dapat Anda baca dan ubah, bukan status komputasi internal suatu provider.**

<div class="concept-diagram"><img src="/images/diagrams/portable-context-policy.svg" alt="Session lokal yang dapat dibaca diatur oleh strategi konteks menjadi pesan ronde ini, lalu dikonversi secara terpisah menjadi permintaan provider untuk model A dan model B; KV cache internal provider tidak dapat berpindah antar-model" loading="lazy"></div>

*Diagram: saat berganti model, yang berlanjut adalah catatan yang dapat dibaca dan aturan serah terima yang Anda tetapkan. Permintaan untuk A dan B perlu diadaptasi masing-masing, dan cache internal provider tidak ikut berpindah. [Buka gambar asli](/images/diagrams/portable-context-policy.svg)*

## Yang benar-benar layak ditanyakan bukan “seberapa pendek bisa dipadatkan”

Sekarang saya menguji kemampuan ini dengan serah terima yang sangat sederhana: andaikan besok harus berganti model, bahkan berganti satu set Agent, apakah saya bisa menjawab pertanyaan berikut hanya dengan catatan yang ada di tangan?

1. Apa yang awalnya ingin diselesaikan pengguna, dan persyaratan mana yang tidak boleh berubah?
2. Hal apa yang sudah selesai, dan buktinya ada di file atau hasil tool yang mana?
3. Penilaian mana yang baru dugaan, dan opsi mana yang sudah disingkirkan?
4. Detail apa yang dihapus saat pemadatan, dan perlukah meninjau kembali sesi aslinya?
5. Saat langkah berikutnya diserahkan ke model lain, apa yang sebenarnya akan diterimanya?

Jika tidak bisa menjawabnya, masalahnya belum tentu karena model “tidak cukup pintar”. Bisa juga karena sesinya tidak lengkap, ringkasan kehilangan batasan penting, atau kita memang tidak pernah memeriksa konteks sebelum dikirim.

[“Apa itu Agent Harness?”](/translations/what-is-a-harness) menjelaskan bagaimana system prompt, tool, loop, dan lapisan konversi model bersama-sama menopang Agent. Menurut saya, mempertahankan sesi, menjaga prefix tetap stabil, memadatkan, dan membuat konteks dapat disesuaikan adalah cara konkret untuk menahan “sabuk pengaman” ini di tangan sendiri. Semua itu tidak menjamin setiap langkah benar, tetapi memberi peluang bagi kesalahan untuk ditemukan, memberi tempat bagi aturan untuk diubah, dan membuat kita tidak perlu memulai dari kotak hitam saat berganti jalur.

Jika ingin memverifikasinya sendiri, mulailah dari [Penyimpanan dan kelanjutan sesi](/guide/sessions), [Konteks dan pemadatan](/guide/context-and-compaction), serta [CASE 02 · Perbandingan sebelum dan sesudah pemadatan](/cases/compaction-before-after); lalu baca ketiga terjemahan itu sesuai urutan di atas. Tulisan ini adalah bacaan berangkai dan penilaian saya, dan tidak berarti penulis asli Earendil menggabungkan artikel-artikel tersebut menjadi satu argumen yang sama.
