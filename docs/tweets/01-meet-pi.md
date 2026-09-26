---
title: Mulai Mengenal Pi dari Rasa Penasaran
description: Catatan belajar Pi tahap 1, memuat 27 teks asli tweet.
outline: false
prev:
  text: Daftar Isi Pembelajaran Tweet
  link: /tweets/
next:
  text: Selesaikan dulu tugas pertama
  link: /tweets/02-first-tasks
---

<span class="library-status">Catatan belajar pribadi · STAGE 01</span>

# Mulai Mengenal Pi dari Rasa Penasaran

**Masalah yang dipecahkan pada tahap ini**　Pertama, pahami apa itu Pi, mengapa ia tetap ringkas, dan bagaimana Agent Harness memengaruhi pengalaman nyata.

Pada tahap ini tidak perlu buru-buru memasang banyak plugin. Mulailah dari posisi Pi, penulisnya, arah desainnya, dan titik awal saya belajar. Artikel disusun menurut waktu publikasi, dari yang paling awal hingga paling akhir; Anda akan melihat bagaimana saya perlahan bergerak dari "mengapa ia begitu kecil" menuju "saya ingin merapikan proses belajar saya sendiri".

Halaman ini memuat 27 teks asli. Isinya berasal dari pustaka naskah asli di Google Drive pribadi, dengan alamat x.com dan tautan pendek media t.co yang sudah dihapus. Versi dan status produk yang disebut dalam teks asli mengikuti tanggal publikasi.

<article class="tweet-entry" id="post-2086991504451792928">

## Pi Agent entah bagaimana jadi viral, padahal saya sudah memakainya sejak lama; saya rangkum beberapa keunggulannya:

<span class="tweet-meta">2026-08-11 09:42:03 · naskah asli</span>

> Pi Agent entah bagaimana jadi viral, padahal saya sudah memakainya sejak lama. Berikut beberapa keunggulannya:
>
> 1. Hampir tidak ada system prompt, bersih dan rapi, konteksnya kecil
>
> 2. Hemat token karena hampir tidak ada komponen eksternal
>
> 3. Ekstensibilitas di hampir semua bagian; kalau ada yang kurang nyaman, Anda bisa memasang ekstensi atau menulis plugin sendiri untuk melengkapinya
>
> Namun tidak disarankan untuk pemula, karena tidak ada komponen kontrol izin bawaan. Jika kemampuan AI tidak kuat atau ada masalah semantik, bisa muncul akibat yang tidak bisa dibatalkan.

</article>

<article class="tweet-entry" id="post-2087509640334746086">

## Pi Agent sudah cukup kecil dan ringkas, masih ada Agent yang lebih kecil lagi?

<span class="tweet-meta">2026-08-12 20:00:56 · naskah asli</span>

> Pi Agent sudah cukup kecil dan ringkas, masih ada Agent yang lebih kecil lagi?
>
> Agent ini hanya butuh 15 MB untuk berjalan, benar-benar di luar kebiasaan untuk ukuran sebuah agent.
>
> Ditulis dengan bahasa Rust: ringan, praktis, dan hemat sumber daya. Yang utama, ia menambahkan banyak fitur khusus sehingga bisa dipadukan dengan Agent pihak ketiga seperti Claude Code dan Codex. Sangat saya rekomendasikan untuk dicoba.
>
> Lihat artikel di bawah ini untuk isi lengkapnya👇

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2091350038165492014">

## Ulasan tajam Pi kali ini cukup tepat.

<span class="tweet-meta">2026-08-23 10:21:19 · naskah asli</span>

> Ulasan tajam Pi kali ini cukup tepat.
>
> Sekarang orang masih berlomba membandingkan siapa modelnya lebih kuat dan siapa Tool-nya lebih banyak.
>
> Yang benar-benar rawan bermasalah adalah setelah Agent berjalan terus-menerus beberapa jam: context dipotong, hasil tool tidak bisa ditemukan lagi, proses mati di tengah jalan, dan ia sendiri tidak tahu apakah pekerjaannya barusan sudah selesai atau belum.
>
> Hal ini sering saya alami saat memakai Hermes. Begitu tugas berulang menumpuk, token habis terkuras untuk log tool; begitu bagian tengahnya di-prune, model pintar sekalipun hanya bisa menebak.
>
> Jadi sekarang saya tidak lagi berpikir untuk langsung mengganti ke model yang lebih kuat; yang lebih praktis adalah tiga hal ini:
>
> 1.  Tugas berkompleksitas rendah tapi boros, lemparkan ke model lokal kecil
>
> 2.  Simpan dulu keluaran tool ke disk, jangan jadikan context satu-satunya memori
>
> 3.  Rancang izin dan pemulihan dengan asumsi "akan gagal", bukan dengan asumsi demo bisa selesai mulus
>
> Model ke depan hanya akan makin murah. Kalau sisi Harness tidak ikut menyesuaikan, makin lama berjalan makin tersiksa.

</article>

<article class="tweet-entry" id="post-2091562941862838780">

## Slogan Pi Agent adalah: There are many agent harnesses, but this one is yours.

<span class="tweet-meta">2026-08-24 00:27:19 · naskah asli</span>

> Slogan Pi Agent adalah: There are many agent harnesses, but this one is yours.
>
> Terjemahannya: Agent itu banyak, tapi yang ini milik Anda.
>
> Inilah alasan saya menyukainya.
>
> Agent lain sejak awal sudah menyiapkan segalanya untuk Anda — praktis, tetapi Anda sulit mengubahnya sesuai keinginan sendiri.
>
> Pi Agent melakukan sebaliknya: ia memberi Anda rumah yang sangat bersih, dan model, tool, Skill, serta alur kerja semuanya bisa Anda padukan sendiri.
>
> Dari rangkuman saya, ada beberapa keunggulan berikut:
> 1. Hampir tidak ada system prompt bawaan, konteks model sangat bersih, dan menguji kemampuan model jadi sangat akurat
>
> 2. Sangat hemat Token; komponen eksternal sedikit, jadi untuk pekerjaan yang sama, penghematannya benar-benar nyata
>
> 3. Kalau ada yang kurang nyaman, tinggal tambah Skill atau tulis plugin; ekstensibilitasnya sangat kuat
>
> 4. Tidak terikat pada satu model; DeepSeek, model lokal kecil, GPT, semuanya bisa disambungkan dengan bebas
>
> 5. Ia lebih mirip editor karakter, bukan akun level maksimal yang siap pakai
>
> Saya merekomendasikan pemula untuk mempelajarinya, tetapi tidak menyarankan pemula total langsung menjadikannya Agent pertama, karena izin bawaannya cukup longgar dan Anda perlu punya kesadaran batas sendiri.
>
> Tetapi kalau Anda sudah memakai Claude Code, Codex, atau Hermes, Pi benar-benar layak dimasukkan ke pekerjaan sehari-hari untuk merasakan serunya DIY Agent.
>
> Sekali lagi, mulai memakainya jauh lebih penting daripada apa pun.

</article>

<article class="tweet-entry" id="post-2091709706402488671">

## Banyak orang memakai Pi, tapi belum tentu tahu siapa orang di belakangnya.

<span class="tweet-meta">2026-08-24 10:10:30 · naskah asli</span>

> Banyak orang memakai Pi, tapi belum tentu tahu siapa orang di belakangnya.
>
> Penulis Pi Agent bernama Mario Zechner, dengan akun X @badlogicgames. Ia orang Austria dan sebelumnya tidak berkecimpung di AI, melainkan di framework game. libGDX adalah karyanya, dan game seperti Ingress serta Slay the Spire memakainya.
>
> Setelah itu ia juga membuat RoboVM; perusahaannya dijual lalu ditutup oleh Microsoft, dan ia pernah mengalami bagaimana komunitas berbalik menyerang. Karena itu sekarang ia sangat enggan mengumpulkan banyak dana lalu menjadi CEO.
>
> Pada akhir 2025 ia mengerjakan sendiri sebuah coding agent minimalis, ditulis dalam dua malam, awalnya hanya untuk dirinya sendiri. Bawaannya hanya empat tool: read, write, edit, bash; system prompt-nya dipangkas sangat pendek, sisanya sepenuhnya Anda tambahkan sendiri. Slogannya pun lugas: There are many agent harnesses, but this one is yours.
>
> Kemudian perusahaan Armin Ronacher, penulis Flask, yaitu Earendil, mengakuisisi Pi; Mario masuk sebagai pemegang saham dan bergabung ke tim. Judul tulisan yang ia publikasikan sendiri adalah I've sold out, ditulis dengan sangat terbuka: ia tidak ingin mengulang tekanan tinggi dunia startup, ia punya anak di rumah, tetapi ia juga ingin Pi tetap dirawat agar tidak berhenti diperbarui. Arah teknisnya tetap ia yang memutuskan, dan intinya tetap open source.
>
> Orang ini bicaranya blak-blakan; bio-nya berbunyi Old man yelling at Claudes. Ia tidak suka Agent makin berat dan prompt makin panjang. Ia bahkan menguji sendiri MCP dan CLI, dan kesimpulannya sama dengan yang banyak orang rasakan: CLI sering kali lebih hemat dan lebih stabil.
> Jadi bentuk Pi sekarang bukanlah daftar fitur yang ditumpuk seorang product manager, melainkan cangkang yang dibuat seorang penulis open source senior sesuai seleranya sendiri. Kalau Anda menyukainya karena bersih, bisa diubah, dan tidak terikat pada satu model, hampir semuanya bisa ditelusuri dari pribadinya.
>
> Kalau tertarik, Anda bisa membaca blog-nya di @badlogicgames. Akun produknya adalah @pidotdev.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2091721408221168104">

## Banyak orang memakai Pi, tapi belum tentu tahu siapa orang di belakangnya.

<span class="tweet-meta">2026-08-24 10:57:00 · naskah asli</span>

> Banyak orang memakai Pi, tapi belum tentu tahu siapa orang di belakangnya.
>
> Penulis Pi Agent bernama Mario Zechner, dengan akun X @badlogicgames. Ia orang Austria dan sebelumnya tidak berkecimpung di AI, melainkan di framework game. libGDX adalah karyanya, dan game seperti Ingress serta Slay the Spire memakainya.
>
> Setelah itu ia juga membuat RoboVM; perusahaannya dijual lalu ditutup oleh Microsoft, dan ia pernah mengalami bagaimana komunitas berbalik menyerang. Karena itu sekarang ia sangat enggan mengumpulkan banyak dana lalu menjadi CEO.
>
> Pada akhir 2025 ia mengerjakan sendiri sebuah coding agent minimalis, ditulis dalam dua malam, awalnya hanya untuk dirinya sendiri. Bawaannya hanya empat tool: read, write, edit, bash; system prompt-nya dipangkas sangat pendek, sisanya sepenuhnya Anda tambahkan sendiri. Slogannya pun lugas: There are many agent harnesses, but this one is yours.
>
> Kemudian perusahaan Armin Ronacher, penulis Flask, yaitu Earendil, mengakuisisi Pi; Mario masuk sebagai pemegang saham dan bergabung ke tim. Judul tulisan yang ia publikasikan sendiri adalah I've sold out, ditulis dengan sangat terbuka: ia tidak ingin mengulang tekanan tinggi dunia startup, ia punya anak di rumah, tetapi ia juga ingin Pi tetap dirawat agar tidak berhenti diperbarui. Arah teknisnya tetap ia yang memutuskan, dan intinya tetap open source.
>
> Orang ini bicaranya blak-blakan; bio-nya berbunyi Old man yelling at Claudes. Ia tidak suka Agent makin berat dan prompt makin panjang. Ia bahkan menguji sendiri MCP dan CLI, dan kesimpulannya sama dengan yang banyak orang rasakan: CLI sering kali lebih hemat dan lebih stabil.
> Jadi bentuk Pi sekarang bukanlah daftar fitur yang ditumpuk seorang product manager, melainkan cangkang yang dibuat seorang penulis open source senior sesuai seleranya sendiri. Kalau Anda menyukainya karena bersih, bisa diubah, dan tidak terikat pada satu model, hampir semuanya bisa ditelusuri dari pribadinya.
>
> Kalau tertarik, Anda bisa membaca blog-nya di @badlogicgames. Akun produknya adalah @pidotdev.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2091773823658131469">

## Banyak orang mencampuradukkan Pi dan Pi coding agent hingga bingung membedakannya; saya jelaskan dalam satu menit😄

<span class="tweet-meta">2026-08-24 14:25:17 · naskah asli</span>

> Banyak orang mencampuradukkan Pi dan Pi coding agent hingga bingung membedakannya; saya jelaskan dalam satu menit😄
>
> Kesimpulannya dulu:
> Pi adalah satu set framework dasar (harness), sedangkan Pi coding agent adalah produk jadi yang dibuat dengan framework tersebut dan khusus dipakai untuk menulis kode bagi Anda.
>
> Ibaratnya, framework Pi adalah komponen seperti mesin, roda, dan rangka. Pi coding agent lebih mirip mobil utuh yang sudah dirakit dari komponen-komponen itu.
>
> Mari kita uraikan lebih rinci:
>
> 1. Tingkatannya berbeda
> Pi sendiri mencakup beberapa lapisan: antarmuka terpadu untuk berbagai model, loop inti tempat agent berjalan, antarmuka terminal, dan sistem ekstensi. Perintah pi yang biasa Anda ketik setelah instalasi sebenarnya hanyalah lapisan paling atas dan paling sering dipakai, yaitu versi coding alias Pi coding agent.
>
> 2. Bawaan yang diberikan berbeda
> Pi murni lebih bersih, hampir tidak ada yang dipasang sebelumnya, semuanya bergantung pada apa yang Anda tambahkan. Pi coding agent sudah menyiapkan empat perkakas paling dasar: membaca file, menulis file, mengubah file, dan menjalankan perintah (read / write / edit / bash). Karena itu banyak orang bisa langsung bekerja setelah memasangnya.
>
> 3. Cara ekstensinya sama, tetapi skenario pemakaiannya berbeda
> Apa pun yang Anda pakai, mekanisme dasar untuk menambah Skill, menulis plugin, dan memasang ekstensi tetap sama. Bedanya: yang satu adalah merakit Agent sendiri dari nol, yang lain adalah memakai versi coding yang sudah dirakit lebih dulu, lalu menambahkan jika masih kurang.
>
> 4. Mengapa orang mencampuradukkannya
> Karena di situs resmi, dokumentasi, dan obrolan grup, Pi yang disebut orang secara lisan hampir selalu merujuk pada Pi coding agent yang bisa langsung dipakai mengetik perintah untuk menulis kode. Hanya orang yang benar-benar ingin mengubah lapisan dasar, membuat Agent sendiri, atau menyematkannya ke produk lain yang akan menyentuh Pi harness secara utuh.
>
> 5. Bagaimana memilihnya secara praktis
> Kalau hanya ingin cepat memakai AI untuk menulis kode dan mengubah proyek → cukup pasang Pi coding agent. Kalau ingin mendefinisikan sendiri perilaku Agent, mengubah tool, mengubah alur kerja, bahkan membuat bentuk lain → yang sebenarnya Anda mainkan adalah lapisan dasar Pi.
>
> Kalau diringkas dalam satu kalimat: Pi adalah sebuah cangkang yang memuat filosofi Agent penulisnya sendiri, sedangkan Pi coding agent adalah versi tulis kode yang sudah disiapkan untuk Anda. Sebagian besar orang memakai yang kedua, tetapi mengira sedang memakai keseluruhan Pi.
>
> Saya rasa setelah membaca ini, lain kali Anda tidak akan bingung lagi membedakan keduanya. Ini juga hasil pendalaman materi saya sendiri; orang awam mungkin memang tidak akan menyadari perbedaan di antara keduanya.

</article>

<article class="tweet-entry" id="post-2092202209526301103">

## Mengapa bio X kreator Pi, Mario Zechner, memuat kalimat ini?

<span class="tweet-meta">2026-08-25 18:47:32 · naskah asli</span>

> Mengapa bio X kreator Pi, Mario Zechner, memuat kalimat ini?
>
> Old man yelling at Claudes.
>
> Sebenarnya banyak orang, seperti saya, juga merasa aneh. Padahal kalau Anda membaca perjalanan batinnya, Anda akan paham.
>
> Awalnya Mario sebenarnya pengguna berat Claude Code; ia bahkan menambal kliennya sendiri, menangkap system prompt, dan meneliti apa tepatnya yang berubah di setiap pembaruan.
>
> Tetapi makin dalam ia memakainya, makin ia tidak tahan pada satu hal:
>
> Claude Code terus berubah.
>
> system prompt berubah, tool berubah, aturan tersembunyi juga berubah. Prompt, Skill, dan Workflow yang susah payah Anda setel bisa mendadak hasilnya berbeda sama sekali setelah satu pembaruan.
>
> Kemudian ia juga mencoba Codex, OpenCode, dan Agent lain, dan akhirnya menemukan masalahnya kurang lebih sama:
>
> Harness terlalu banyak mengatur dan memberi terlalu sedikit kebebasan; perlahan ia mulai bosan.
>
> Maka pada akhir 2025, ia langsung menghabiskan dua malam untuk menulis Pi sendiri.
>
> Bawaannya hanya empat tool: read, write, edit, bash; system prompt dibuat sependek mungkin, model tidak diikat, dan semua kemampuan lain diserahkan sepenuhnya kepada pengguna untuk dikembangkan sendiri.
>
> Inilah sebabnya Pi punya slogan yang sangat khas:
>
> There are many agent harnesses, but this one is yours.
>
> Yang ingin dibuat Mario tidak pernah sekadar Agent dengan fitur terbanyak.
>
> Melainkan Harness yang cukup bersih, transparan, stabil, dan pada akhirnya kendalinya tetap di tangan Anda.
>
> Jika Anda memakai Pi tetapi belum paham mengapa ia begitu "sederhana", mengapa banyak hal yang jelas bisa dibangunkan justru sengaja tidak dilakukan.
>
> Video Mario yang menceritakan sendiri proses lahirnya Pi mungkin bisa memberi Anda jawabannya.

</article>

<article class="tweet-entry" id="post-2092238018447020036">

## Jika Anda juga ingin mulai belajar Pi, silakan lihat berbagi pengalaman belajar saya🔥

<span class="tweet-meta">2026-08-25 21:09:50 · naskah asli</span>

> Jika Anda juga ingin mulai belajar Pi, silakan lihat berbagi pengalaman belajar saya🔥
>
> Sebenarnya Pi tidak sesulit yang dibayangkan; hanya saja kebanyakan orang salah arah sejak awal belajar, langsung meneliti Harness, Agent Loop, Extension, dan sejenisnya.
>
> Kalau saya yang menyarankan, saya akan menganjurkan belajar melalui 5 langkah ini:
>
> 1. Pertama, pahami dulu apa sebenarnya Pi
>
> Pahami dulu hubungan antara Pi, Pi Coding Agent, Claude Code, dan Codex. Anda cukup tahu bahwa ciri terbesar Pi adalah cukup ringan, dan banyak kemampuan bisa Anda tambahkan sendiri.
>
> 2. Kuasai dulu fitur paling dasar
>
> Pasang, masuk ke model, buat Session baru, lanjutkan tugas sebelumnya, lalu kuasai beberapa perintah yang sering dipakai. Biarkan Pi benar-benar masuk ke pekerjaan harian Anda, bukan langsung meneliti kode sumber setelah memasangnya.
>
> 3. Lalu mulai menambah kemampuan pada Pi
>
> Pelajari cara memasang Extension dan Skill, lalu coba SSH, plugin keamanan, tool konteks, dan hal-hal yang benar-benar bisa memperbaiki pengalaman. Langkah ini pada dasarnya juga tahap paling seru dari Pi.
>
> 4. Setelah itu pahami Context dan Token
>
> Setelah benar-benar memakainya beberapa waktu, barulah pahami mengapa System Prompt Pi pendek, tool-nya sedikit, cache mudah kena, dan apa sebenarnya yang dilakukan Compaction saat konteks penuh. Ini jauh lebih mudah daripada memaksakan diri menelan konsep sejak awal.
>
> 5. Terakhir, cobalah permainan lanjutan Pi yang benar-benar menarik
>
> Remote dari ponsel, kolaborasi multiperangkat, Sub-agent, pembagian kerja antarmodel, bahkan perlahan merakit Pi milik Anda sendiri. Saat itulah Anda benar-benar paham mengapa banyak orang menganggap Pi sebagai Harness, bukan sekadar Coding Agent lain.
>
> Dengan belajar mengikuti lima poin ini, saya yakin Anda juga pasti bisa merasakan nikmatnya memakai Pi, yaitu perasaan bebas, di mana apa pun yang Anda inginkan bisa Anda ciptakan sendiri.
>
> Untuk situs belajar, saya hanya merekomendasikan satu:

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2092265777214951636">

## Menengok kembali riwayat iterasi versi Pi, rasanya seperti menonton lagi sejarah perkembangan Agent!

<span class="tweet-meta">2026-08-25 23:00:08 · naskah asli</span>

> Menengok kembali riwayat iterasi versi Pi, rasanya seperti menonton lagi sejarah perkembangan Agent!
>
> Melihat penulisnya mulai dari sekadar ide sederhana hingga menjadi produk nyata, sebenarnya setiap poin di dalamnya adalah bentuk ketidakkompromian penulis terhadap Agent yang ia inginkan.
>
> Dari banyak versi, saya memilih lima versi paling representatif ini.
>
> 1. Mulai menangani masalah konteks (0.12)
>
> Versi ini menambahkan Context Compaction: saat konteks hampir penuh, isi lama dirangkum otomatis dan pesan terbaru dipertahankan. Session juga mulai mendukung Branch. Bisa dibilang, dari sinilah Pi benar-benar punya fondasi untuk bekerja dalam waktu lama.
>
> 2. Extension resmi menjadi inti permainan (0.35)
>
> Hooks dan Custom Tools yang sebelumnya tersebar disatukan menjadi Extension. Sejak saat itu, Anda bisa menambahkan tool, perintah, UI, status, dan kontrol izin ke Pi. Sebagian besar plugin Pi yang kita lihat hari ini berkembang mengikuti mekanisme ini.
>
> 3. Pi mulai punya ekosistem sendiri (0.50)
>
> Extension, Skill, Prompt, dan Theme bisa dikemas menjadi Pi Package, dipasang dan dibagikan dengan satu klik. Ini juga berarti Pi mulai bergeser dari "Agent yang diutak-atik sendiri" menjadi ekosistem tempat orang bisa saling berbagi kemampuan.
>
> 4. Mulai memperhatikan keamanan dan biaya pemakaian (0.79)
>
> Project Trust ditambahkan: konfigurasi dan Extension di dalam proyek tidak lagi dimuat langsung secara bawaan. Pi bahkan menampilkan Prompt Cache Hit Rate di bagian bawah antarmuka. Terlihat bahwa pihak resmi mulai serius memperhatikan keamanan, Token, dan efisiensi cache.
>
> 5. Mulai makin terasa seperti Agent Harness (0.84)
>
> AGENTS.override.md, kontrol tool bawaan, dan kemampuan terkait Remote Session muncul satu per satu. Anda bisa mengontrol Context, tool, dan Session dengan lebih rinci. Pi pun perlahan berkembang dari Coding Agent minimalis menjadi Agent Harness yang bisa dirakit sendiri.
>
> Di sela-sela itu saya juga meluangkan waktu mempelajari riwayat penulisnya, lalu memadukannya dengan beberapa pernyataannya dan pengalaman open source masa lalunya, sehingga saya perlahan bisa memahami mengapa ia menulis sendiri sebuah Agent miliknya sendiri.
>
> Banyak orang bilang tool Pi Agent ini condong ke geek, tetapi hanya yang benar-benar paham yang tahu betapa sulitnya memiliki tool milik sendiri yang bisa dirakit dan dioptimalkan sesuka hati.
>
> Hanya dengan memahami secara mendalam, Anda juga akan seperti saya: memahami filosofi desain di dalamnya.
>
> Mungkin inilah bagian dari Pi yang paling membuat saya ketagihan.

</article>

<article class="tweet-entry" id="post-2092930420090519653">

## Cara pakai Pi yang sebenarnya adalah membangun Agent milik Anda sendiri🔥

<span class="tweet-meta">2026-08-27 19:01:11 · naskah asli</span>

> Cara pakai Pi yang sebenarnya adalah membangun Agent milik Anda sendiri🔥
>
> Belakangan ini saya meneliti Pi secara mendalam, dan hari ini tiba-tiba muncul sebuah ide:
>
> Karena Pi sendiri sudah menyelesaikan hal-hal paling merepotkan dari Agent, mungkinkah saya membangun Agent saya sendiri di atas arsitekturnya yang sederhana?
>
> Saya menganalisis hal-hal terkait dan merangkumnya dalam beberapa aspek berikut:
>
> 1. Pi lebih dulu memberi Anda kerangka dasar Agent
>
> Bagaimana model disambungkan, bagaimana Session disimpan, bagaimana Tool dipanggil, bagaimana Context dipadatkan — semua itu sudah ditangani Pi sendiri.
>
> Anda tidak perlu mengimplementasikan ulang Agent Loop; lebih sering hanya menambahkan hal-hal di atas fondasi yang sudah jadi.
>
> 2. Bagian yang benar-benar milik Anda sebenarnya adalah kombinasi kemampuan
>
> Misalnya saya ingin membuat Agent riset, saya bisa menambahkan pencarian, browser, YouTube, Memory.
>
> Kalau ingin membuat Agent server, tambahkan SSH, Docker, analisis log.
>
> Bahkan kalau ingin membuat Agent pribadi jangka panjang, Anda bisa terus menambahkan memori, kanal pesan, dan tugas terjadwal.
>
> Di titik ini Pi lebih mirip fondasi yang bisa terus dirakit, bukan Coding Agent dengan bentuk tetap.
>
> 3. Bahkan kliennya pun tidak harus memakai terminal asli Pi
>
> Pi sudah menyediakan antarmuka seperti SDK dan RPC, jadi Anda bisa membuat ulang Web, desktop, atau mobile di luarnya, sementara di bawahnya tetap menjalankan Pi yang sama.
>
> Ini juga kesan terbesar saya setelah akhir-akhir ini mempelajari Pi versi desktop dan mobile:
>
> Anda belum tentu sedang mengubah Pi; bisa jadi Anda sedang memakai Pi untuk membuat produk Anda sendiri.
>
> 4. Yang akhirnya benar-benar membedakan mungkin bukan modelnya
>
> Semua orang bisa memakai GPT, Claude, atau Qwen, tetapi Skill, Extension, Memory, tool, dan aturan kerja apa yang Anda pasang pada Agent, itulah yang perlahan membuatnya menjadi sesuatu yang benar-benar berbeda.
>
> Jadi sekarang saya makin merasa, bagian paling seru dari Pi mungkin bukan membandingkannya dengan Claude Code atau Codex untuk melihat siapa lebih kuat.
>
> Melainkan karena Anda bisa menganggapnya sebagai fondasi Agent yang sudah jadi, lalu menumpuk kebiasaan dan kemampuan Anda sedikit demi sedikit.
>
> Hasil akhirnya mungkin sudah bukan Pi lagi.
>
> Melainkan Agent yang benar-benar milik Anda sendiri.

</article>

<article class="tweet-entry" id="post-2092983677626331480">

## Pi bukan sulit, hanya saja banyak orang membalik urutan belajarnya.

<span class="tweet-meta">2026-08-27 22:32:49 · naskah asli</span>

> Pi bukan sulit, hanya saja banyak orang membalik urutan belajarnya.
>
> Banyak orang meneliti arsitektur dulu, baru kemudian kembali memasang perangkat lunaknya; folder bookmark penuh sesak, tetapi isi komputernya kosong melompong.
>
> Sebenarnya tidak banyak hal rumit; cukup ikuti lima langkah di bawah ini, dan semuanya bisa selesai dalam sehari.
>
> 1. Hari itu hanya lakukan penyiapan awal
> Pasang dengan cara resmi, jangan cari tutorial pihak ketiga terlebih dahulu.
>
> Setelah terpasang, konfigurasikan dulu model yang kuotanya Anda miliki, buat Session baru, lalu lemparkan satu pekerjaan nyata: ubah satu fungsi, tulis skrip, atau telusuri satu galat. Bisa berjalan, bisa dihentikan, dan bisa dilanjutkan — baru langkah ini dianggap lulus.
>
> 2. Jadikan operasi dasar sebagai memori otot
> Cukup hafalkan beberapa ini: buat / ganti Session, lanjutkan tugas terakhir, /scoped-models untuk merangkum model langganan menjadi daftar pendek, dan Ctrl+P untuk berganti. Tetapkan dulu satu model utama, jangan ganti lima model dalam sehari.
>
> Jangan membuka banyak jendela baru sebelum tugas selesai; konteksnya akan berantakan.
>
> 3. Tambahkan hanya kemampuan yang akan Anda pakai berulang
> Tulis atau pasang Skill dulu: masukkan ke SKILL.md alur kerja yang "setiap kali harus dijelaskan ulang".
>
> Lalu pasang Extension: SSH, pencegatan keamanan, penampil konteks. Skill adalah buku petunjuk, sedangkan ekstensi baru mengubah runtime.
>
> Untuk memasang paket gunakan pi install; carilah di dokumentasi resmi dan pasar plugin. Perintah yang disalin dari grup jangan dipakai dulu. MCP kesampingkan dulu.
>
> 4. Tunggu sampai jendela penuh, baru sesuaikan Context
> Kerjakan satu hal yang agak panjang secara terus-menerus, dan lihat kapan Token, cache, serta Compaction mulai bekerja. Saat itulah Anda paham mengapa Prompt-nya pendek dan tool bawaannya sedikit.
>
> Mengalami satu kali konteks meledak dulu, baru memutuskan perlu menambah pemadatan atau beralih ke model ringan, jauh lebih berguna daripada menghafal konsep lebih dulu.
>
> 5. Setelah stabil selama sepekan, barulah bermain kombinasi
> Setelah sehari-hari sudah tidak bisa lepas darinya, barulah coba remote, multiperangkat, Sub-agent, satu model menulis dan satu model me-review. Kuasai dulu sesi tunggal, baru paralel.
>
> Sebelum paralel, pikirkan dulu dengan jelas: siapa yang menulis, siapa yang memeriksa, dan hasilnya diletakkan di mana. Kalau tidak, itu hanya membuka beberapa jendela lebih banyak.
>
> Harus diingat, yang sulit dalam belajar Pi bukanlah memahami, melainkan mulai bertindak. Hanya dengan benar-benar mencoba dan belajar, Anda bisa benar-benar menguasainya.
>
> Segera gunakan dengan aman di komputer Anda.🔥

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2093013305237598446">

## Jangan cuma menyimpan dokumentasi saat belajar Pi; menonton video ini lebih berguna daripada menyimpan sepuluh tutorial.

<span class="tweet-meta">2026-08-28 00:30:32 · naskah asli</span>

> Jangan cuma menyimpan dokumentasi saat belajar Pi; menonton video ini lebih berguna daripada menyimpan sepuluh tutorial.
>
> Kali ini saya langsung menyiapkan videonya agar Anda memahami sistem PI Agent ini secara utuh:
>
> 1. Model bertanggung jawab memahami dan menilai
> 2. Konteks memberitahunya latar belakang dan aturan proyek
> 3. Tool bertanggung jawab membaca, mengubah, dan menjalankan
> 4. Sesi menyimpan seluruh proses kerja
> 5. Skill dan Extension menambah kemampuan baru
> 6. RPC, SDK, dan sejenisnya menyambungkannya ke alur lain
>
> Anda mengajukan tugas, model mengambil keputusan, tool menjalankan operasi, dan hasilnya kembali ke model — inilah siklus kerja Pi yang sebenarnya.
>
> Keunggulan Pi bukan pada betapa mewahnya fitur bawaan, melainkan pada intinya yang cukup ringan sehingga otak, tool, dan aturan semuanya bisa Anda pilih sendiri.
>
> Pahami dulu struktur ini, baru memasang plugin, menulis Skill, dan membuat otomatisasi. Kalau tidak, makin banyak yang dipasang, makin tidak jelas di mana sebenarnya kekuatan Pi.
>
> Dua menit, menjelaskan susunan lengkap Pi sekaligus.👇

</article>

<article class="tweet-entry" id="post-2093675914836255111">

## Pi dan Oh My Pi sedang mendorong Agent Harness ke dua ekstrem🔥

<span class="tweet-meta">2026-08-29 20:23:31 · naskah asli</span>

> Pi dan Oh My Pi sedang mendorong Agent Harness ke dua ekstrem🔥
>
> Pada dasarnya keduanya lahir dari induk yang sama; Oh My Pi sendiri bahkan hasil Fork dari Pi. Namun dalam perkembangan selanjutnya, keduanya makin menjauh ke arah ekstrem yang berlawanan.
>
> Pendekatan Pi sederhana: intinya diringkas sebisa mungkin, dan fitur tambahan diserahkan ke plugin.
>
> Tool bawaan sedikit, system prompt pendek; untuk Extension, Skill, Memory, Subagent, dan sejenisnya, ia sedapat mungkin tidak mengambil keputusan untuk Anda.
>
> Jadi Pi lebih mirip rumah tanpa finishing: isinya tidak banyak, tetapi strukturnya bersih, dan hampir setiap kemampuan ada dalam kendali Anda.
>
> Oh My Pi justru sebaliknya: apa pun yang bisa dilakukan Harness, sebisa mungkin saya masukkan ke dalamnya.
>
> Mari bandingkan secara singkat beberapa hal yang paling mencolok:
>
> 1. Tool bawaan Pi sangat menahan diri; Oh My Pi langsung memasukkan LSP, Debugger, AST, Browser, Subagent, dan Memory.
>
> 2. Pi lebih condong ke cara pengeditan kode tradisional; Oh My Pi bahkan membuat ulang Edit Protocol, memakai Hashline untuk mengurangi masalah penentuan posisi dan konflik saat mengubah kode.
>
> 3. Pi menjaga Context tetap sederhana; Oh My Pi bahkan membuat SnapCompact, yang merender konteks historis menjadi gambar lalu menyerahkannya ke model visual untuk terus dibaca.
>
> Sebenarnya saya tidak akan bilang arah mana yang benar atau salah, karena saya sering menimbangnya berdasarkan kelompok pengguna yang bersangkutan.
>
> Tidak semua orang geek atau menyukai Agent yang ringkas dan bebas; lebih banyak yang pemula, dan yang mereka butuhkan adalah solusi yang langsung bisa dipakai.
>
> Perkembangan komunitas ke berbagai arah justru yang saya harapkan; hal-hal yang selesai dibuat akan makin banyak.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2093697448527233162">

## Pi 0.84.4 (2026-08-28) adalah versi terbaru saat ini; tweet resmi menyoroti 3 hal ini:

<span class="tweet-meta">2026-08-29 21:49:05 · naskah asli</span>

> Pi 0.84.4 (2026-08-28) adalah versi terbaru saat ini; tweet resmi menyoroti 3 hal ini:
>
> 1. Hasil tool yang besar langsung dipadatkan
>
> Saat keluaran tool terlalu besar, sekarang ia melakukan compaction dulu dalam proses yang sama, lalu melanjutkan ke balasan berikutnya, sehingga konteks tidak mudah meledak.
>
> 2. Mendukung DeepSeek V4 Flash Vision (eksperimental)
>
> Provider DeepSeek bawaan bisa langsung memakai model dengan kemampuan visual ini.
>
> 3. Kemampuan terminal bisa ditimpa secara manual
>
> Dukungan hyperlink, gambar, dan true color tidak lagi sepenuhnya bergantung pada deteksi otomatis; Anda bisa memaksa menyalakan atau mematikannya sendiri.
>
> Semua itu kalau dipadatkan menjadi satu kalimat: pemadatan konteks dioptimalkan, pencocokan model baru ditambahkan, dan lebih banyak kemampuan terminal dibuka.
>
> Perintah pembaruan: pi update.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2094089240812691764">

## Dulu saya yang mengawasi Pi mengubah kode, sekarang ada yang mulai membiarkan Pi mengoptimalkan sendiri sampai habis-habisan😂

<span class="tweet-meta">2026-08-30 23:45:55 · naskah asli</span>

> Dulu saya yang mengawasi Pi mengubah kode, sekarang ada yang mulai membiarkan Pi mengoptimalkan sendiri sampai habis-habisan😂
>
> Akhir-akhir ini saya melihat proyek yang sangat layak dicoba: pi-autoresearch.
>
> Ia terinspirasi Karpathy Autoresearch dan langsung memindahkan pendekatan itu ke dalam Pi.
>
> Anda tidak perlu memberi tahu langkah demi langkah bagaimana mengoptimalkannya; cukup berikan satu metrik yang jelas.
>
> Sisanya ia kerjakan sendiri:
>
> Cari ide → ubah → uji → bandingkan hasil → kalau membaik pertahankan → kalau memburuk rollback → lanjut ke putaran berikutnya.
>
> Beberapa hal yang sangat menarik:
>
> 1. Targetnya sangat jelas
>
> Bukan menyuruh Agent "mengoptimalkan kode" secara kabur, melainkan langsung membidik satu angka, misalnya waktu pengujian, kecepatan build, Bundle Size, atau skor Lighthouse. Apakah ada perbaikan, bisa dinilai sekali lihat.
>
> 2. Biaya kegagalan sangat rendah
>
> Pi bisa berani mencoba berbagai pendekatan. Kalau hasilnya buruk, langsung di-rollback; saya tidak perlu terus mengawasi setiap perubahan, dan hanya hasil yang benar-benar meningkat yang dipertahankan.
>
> 3. Bisa berjalan terus-menerus banyak putaran
>
> Agent biasa biasanya berhenti setelah sekali perubahan; Autoresearch lebih mirip bereksperimen. Kalau satu pendekatan tidak berhasil, ganti yang berikutnya, sampai metriknya perlahan naik.
>
> 4. Proses eksperimen bisa terus terakumulasi
>
> Setiap putaran percobaan, hasil, dan perubahan dicatat. Bahkan kalau Context direset nanti, ia bisa melanjutkan eksperimen sebelumnya, bukan menebak lagi dari nol.
>
> Saya merasa ia paling cocok untuk memecahkan satu jenis masalah yang menarik:
> Saya tidak tahu bagaimana mengoptimalkan langkah berikutnya, tetapi saya tahu hasil seperti apa yang lebih baik.
>
> Dulu saya juga memakai framework serupa untuk menjalankan dan mengiterasi berulang kali, bahkan menjalankan beberapa cabang secara bersamaan, lalu menentukan versi dengan skor tertinggi.
>
> Ide plugin ini sebenarnya juga sama: membiarkan AI berevolusi sendiri sesuai target Anda, memberi skor setiap kali, dan mendekati tujuan akhir langkah demi langkah.
>
> Kalau akhir-akhir ini Anda juga sedang bermain Pi, pi-autoresearch sangat saya rekomendasikan untuk dicoba.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2094260899712548912">

## Titik paling kontradiktif dari Pi: mengejar kesederhanaan, atau kerumitan🔥

<span class="tweet-meta">2026-08-31 11:08:02 · naskah asli</span>

> Titik paling kontradiktif dari Pi: mengejar kesederhanaan, atau kerumitan🔥
>
> Akhir-akhir ini saya melihat proyek yang cukup menarik: Plannotator.
>
> Mungkin banyak orang sudah pernah mendengar atau bahkan memasangnya; dari pengamatan saya, ia adalah plugin yang mewakili kerumitan.
>
> Pi sendiri sebenarnya sangat menahan diri; banyak kemampuan tidak dimasukkan ke Core. Tetapi Plannotator justru sebaliknya, khusus melengkapi Pi dengan Review visual.
>
> Setelah Agent menulis Plan, Anda bisa langsung memberi catatan, menghapus, dan mengubahnya di halaman; setelah kode selesai, Anda juga bisa melihat Diff seperti saat Review PR, memberi masukan pada posisi tertentu, lalu meminta Pi memperbaikinya lagi.
>
> Keunggulannya jelas:
>
> 1. Plan tidak perlu lagi dipaksa dibaca di terminal; di mana ada masalah, di situ langsung diubah.
>
> 2. Code Review lebih intuitif: Pi menulis, manusia yang mengambil keputusan penting.
>
> 3. Catatan bisa terakumulasi, bahkan nantinya bisa dirapikan menjadi Review Skill milik sendiri.
>
> Kekurangannya juga lugas:
>
> 1. Ia membuat Pi menjadi berat.
>
> Dulu cukup membuka Terminal untuk bekerja, sekarang ada tambahan lapisan browser dan alur Review. Kalau Anda memang suka Agent menyelesaikan sendiri lalu melapor, justru hal ini terasa agak berlebihan.
>
> Jadi Pi ini sebenarnya sederhana atau rumit?
>
> Sekarang saya lebih condong pada:
>
> Yang sederhana dari Pi adalah Core-nya, bukan alur kerja akhir Anda.
> Ia hanya menyerahkan pilihan mau rumit atau tidak kepada Anda.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2094294968307487038">

## Wah, ternyata Slay the Spire berhubungan dengan Mario Zechner, penulis Pi🔥

<span class="tweet-meta">2026-08-31 13:23:25 · naskah asli</span>

> Wah, ternyata Slay the Spire berhubungan dengan Mario Zechner, penulis Pi🔥
>
> Tepatnya, Slay the Spire bukan dibuat Mario, tetapi framework pengembangan game yang dipakainya, libGDX, adalah proyek open source Mario sejak lama.
>
> Hal ini sebelumnya saya tidak tahu, dan saat terus menelusuri riwayatnya, tiba-tiba terasa lebih mudah memahami mengapa Pi tumbuh seperti sekarang.
>
> Sekitar 2009 Mario mulai mengerjakan libGDX; awalnya hanya karena pengalaman pengembangan saat membuat game Android terasa sangat menyiksa, lalu perlahan menjadi satu set framework game lintas platform.
>
> Kemudian libGDX dipakai banyak game; Slay the Spire adalah salah satu yang sangat terkenal, selain itu ada Ingress dan Spine yang juga dibangun di atasnya.
>
> Yang menarik bukanlah bahwa Mario pernah membuat framework game yang sangat sukses.
>
> Melainkan bahwa lebih dari sepuluh tahun kemudian, pendekatannya membuat Pi ternyata masih terasa familier.
>
> libGDX tidak membuatkan game untuk Anda; ia hanya menyerahkan kemampuan dasar yang diperlukan untuk membuat game.
>
> Di Pi pun sama.
>
> Pi tidak buru-buru memasukkan Sub-agent, Plan Mode, Memory, dan segala fitur ke dalam Core. Ia menyiapkan kemampuan dasar seperti Agent Loop, Session, Tool, Context, dan Extension, lalu menyerahkan kepada Anda mau dirakit menjadi seperti apa.
>
> Yang satu akhirnya menumbuhkan Slay the Spire.
>
> Yang satu sekarang sedang menumbuhkan berbagai macam Agent.
>
> Dulu saya lebih sering melihat Pi hanya sebagai Coding Agent yang baru dibuat Mario. Sekarang kalau menengok kembali libGDX, RoboVM, lalu Pi, terlihat ia sepertinya selalu menyukai jenis pekerjaan yang sama:
>
> Bukan menyelesaikan produk untuk orang lain, melainkan membuat dulu fondasi yang cukup bebas agar orang lain bisa menciptakan barang mereka sendiri.
>
> Mungkin sifat Pi hari ini yang "ingin menyerahkan semuanya kepada keputusan Anda sendiri" sudah terlihat bayangannya sejak libGDX lebih dari sepuluh tahun lalu.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2094627740440047962">

## Saya menemukan cara baru: menjalankan Pi Agent dengan Grok Bot🔥

<span class="tweet-meta">2026-09-01 11:25:44 · naskah asli</span>

> Saya menemukan cara baru: menjalankan Pi Agent dengan Grok Bot🔥
>
> Saya baru saja menguji menjalankan Agent terkait dengan Grok Bot, dan semuanya berjalan sempurna di sana. Instalasinya sendiri tidak sulit karena pada dasarnya Grok Bot adalah sebuah server.
>
> Tapi saya tetap ingin berbagi jebakan yang saya alami di tengah jalan:
>
> 1. Saat instalasi, tentukan bahwa yang dimaksud adalah lingkungan komputer miliknya sendiri; kalau tidak, bisa jadi yang diperiksa adalah lingkungan komputer Anda. Di sini pastikan AI bisa membedakannya dengan jelas.
>
> 2. Lingkungan bawaan masih agak lama; sebaiknya tingkatkan lingkungan pendukungnya agar kompatibilitasnya lebih baik.
>
> 3. Selain itu, variabel lingkungan untuk menjalankannya perlu Anda konfigurasikan sendiri; kalau tidak, aplikasi Pi mungkin tidak ditemukan.
>
> Saya masih menjajaki apakah ada solusi latensi rendah, misalnya melakukan tunneling (hole punching) di Grok Bot atau mengikat domain tetap, agar servernya bisa tersambung ke lingkungan jaringan luar untuk digunakan.
>
> Sekarang ada dua opsi: memakai Tailscale yang paling sederhana, atau memakai CloudFlare Tunnel; masing-masing punya keunggulannya sendiri.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2094765507207708692">

## Belum sampai setahun, Pi sudah 100 ribu Star🔥

<span class="tweet-meta">2026-09-01 20:33:10 · naskah asli</span>

> Belum sampai setahun, Pi sudah 100 ribu Star🔥
>
> Pada akhir 2025, Mario Zechner menulis coding agent minimalis untuk dirinya sendiri. Ia tidak menyangka dalam waktu sesingkat itu sudah menembus seratus ribu Star.
>
> Slogan Pi: There are many agent harnesses, but this one is yours.
>
> Pada Januari 2026, Armin Ronacher, penulis Flask, secara terbuka mengatakan arsitektur ini layak menghabiskan waktu dan tenaga untuk dibangun dan disempurnakan.
>
> Pada April, perusahaannya, Earendil, mengakuisisi proyek ini. Mario masuk sebagai pemegang saham tetapi tetap membimbing arah teknis; repositorinya dipindahkan dari akun pribadi ke earendil-works/pi, dengan lisensi tetap MIT.
>
> Juli 70 ribu bintang. Hari ini 100 ribu.
>
> Hari ini adalah tahap yang bersifat milestone, karena pihak resmi hanya menambahkan satu kalimat: Pi v2 coming soon.
>
> Saya sangat menantikan kedatangan Pi v2; kejutan macam apa yang akan kau bawa untukku?

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2095857935255798186">

## Saya ingin berbagi proses belajar Pi saya

<span class="tweet-meta">2026-09-04 20:54:05 · naskah asli</span>

> Saya ingin berbagi proses belajar Pi saya
>
> Awalnya saya hanya penasaran lalu mencoba produk Pi Agent ini, memublikasikan beberapa konten terkait, dan ternyata cukup banyak yang melihatnya.
>
> Lama-lama saya memublikasikan makin banyak konten ke arah ini, dari berbagi plugin paling sederhana hingga membaca kode sumber, semuanya dilalui langkah demi langkah.
>
> Kadang saya juga menggali hal-hal yang lebih dalam.
>
> Misalnya mengapa penulisnya mengembangkan produk Pi; saya pun menggali blog penulisnya dan seluruh perjalanannya.
>
> Banyak hal yang saya dapatkan, karena pi bukan karya open source pertamanya; ia sudah membuka banyak karya.
>
> Justru karena luka akibat karya sebelumnya, pada karya open source kali ini ia mempertahankan otonomi yang mutlak.
>
> Saya juga perlahan memahami bahwa ia dulu penggemar setia Claude Code, tetapi karena pihak resmi Claude Code memperbarui dengan sangat sering dan terus menambah beban, ia merasa kehilangan kendali atas agent-nya, sehingga bertekad mengembangkan Agent yang bisa dipadukan dan dirakit dengan bebas.
>
> Inilah juga niat awal seluruh produk ini.
>
> Sejujurnya, awalnya saya juga tidak tahu akan meneliti sedalam ini.
>
> Dari detail kecil satu per satu saya mengupas dan memahami seluruh Pi; dari sekadar penasaran, berubah menjadi benar-benar ingin memahaminya.
>
> Dari seluruh proses belajar ini, saya menemukan satu pelajaran:
>
> Kalau Anda ingin benar-benar mempelajari sesuatu, Anda harus meluangkan waktu untuk memakainya.
>
> Makin sering dipakai, makin banyak dipahami, barulah Anda benar-benar bisa menguasainya.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2095918886445330713">

## Merekomendasikan proyek Pi yang sangat menarik, pi-vs-claude-code.

<span class="tweet-meta">2026-09-05 00:56:17 · naskah asli</span>

> Merekomendasikan proyek Pi yang sangat menarik, pi-vs-claude-code.
>
> Awalnya saya pikir dari namanya ia hanya membandingkan Pi dengan Claude Code, tetapi setelah saya telusuri ternyata sama sekali bukan.
>
> Ia lebih seperti melakukan satu hal:
>
> Melihat apakah fitur yang dimiliki Claude Code bisa dibangun sendiri satu per satu dengan Pi.
>
> Kalau Anda sudah mulai mengutak-atik Extension, Subagent, dan alur kerja kustom Pi, saya sangat merekomendasikan untuk melihatnya; banyak hal di dalamnya bahkan bisa langsung ditiru idenya.
>
> Ada beberapa cara bermain utama:
>
> 1. Menambahkan Subagent sendiri ke Pi
>
> Anda bisa menjalankan beberapa Pi di latar belakang untuk mengerjakan tugas berbeda; Agent utama terus bekerja, dan Anda tetap bisa melihat progres eksekusi setiap Agent.
>
> 2. Merakit Agent Team sendiri
>
> Anda bisa mendefinisikan lebih dulu Planner, Builder, Reviewer, Scout; Agent yang berbeda mengerjakan hal berbeda, bahkan bisa dipasangi model yang berbeda pula.
>
> 3. Melengkapi Pi dengan keamanan dan izin
>
> Pencegatan operasi berbahaya, perlindungan file sensitif, sebagian perintah perlu konfirmasi — hal-hal yang asli dimiliki Claude Code ini juga bisa dilengkapi sendiri di Pi lewat Extension.
>
> 4. Pi bisa berkomunikasi langsung dengan Pi
>
> Bukan hanya Agent utama memanggil Subagent; beberapa Pi bahkan bisa saling berkirim pesan, dan bisa berkomunikasi antar mesin, sudah terasa seperti Agent Network.
>
> 5. Bahkan bisa menyuruh Pi membuat Pi sendiri
>
> Di dalam proyek ini ada sebuah Pi Pi, yang pertama-tama mencari beberapa Agent ahli untuk meneliti Extension, Skill, Tool, dan TUI, lalu membantumu menghasilkan fitur Pi milikmu sendiri.
>
> Menurut saya bagian paling menarik dari proyek ini bukanlah siapa lebih kuat dari siapa.
>
> Melainkan Anda akan perlahan menyadari:
>
> Banyak fitur yang diberikan Claude Code sebenarnya bisa Anda rakit sendiri di Pi.
>
> Kalau Anda sudah tidak puas hanya memasang beberapa plugin dan ingin benar-benar mulai mengubah Pi milik Anda, proyek ini sangat layak dijadikan pustaka referensi.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2096461907666579807">

## Meski inti Pi sederhana, ketika dikombinasikan sama sekali tidak sederhana.

<span class="tweet-meta">2026-09-06 12:54:03 · naskah asli</span>

> Meski inti Pi sederhana, ketika dikombinasikan sama sekali tidak sederhana.
>
> Bisa diubah menjadi meja kerja Anda sendiri, sungguh sempurna.
>
> Lewat Extension API, banyak hal yang tadinya tetap bisa Anda ubah sendiri, jadi Anda benar-benar bisa perlahan menjadikan Pi sebagai meja kerja AI Anda:
>
> 1. Membuat satu set status bar yang selalu tampil
> Informasi model, Thinking, Token, Context, dan branch Git diletakkan langsung di bagian bawah, sehingga status saat ini bisa dilihat sekali lihat.
>
> 2. Menempelkan panel Todo / Task
> Tinggalkan target saat ini, langkah yang sudah selesai, dan tugas berikutnya di antarmuka; saat menjalankan tugas panjang, Anda tidak perlu berulang kali bertanya ke Pi sudah sampai mana.
>
> 3. Membuat Context menjadi visual
> Berapa porsi System Prompt, Skill, dan Tool masing-masing, berapa sisa konteks, dan kapan harus Compact, semuanya bisa langsung terlihat.
>
> 4. Lalu padukan dengan pi-cc-extensions untuk melengkapi pengalaman membaca
> Pelipatan Tool Call, Rich Diff, Markdown, Mermaid, dan keluaran panjang ditangani bersama, sehingga pengalaman membaca Pi bawaan yang agak polos pada dasarnya sudah lengkap.
>
> Yang paling terasa khas Pi adalah hal-hal ini tidak perlu menunggu pihak resmi menambahkannya perlahan.
>
> Anda bahkan bisa langsung menyuruh Pi menuliskan Extension untuk Anda; setelah selesai diubah, /reload, dan langsung pakai lagi.
>
> Saya sekarang makin menyukai perasaan ini:
>
> Bukan mencari Coding Agent dengan fitur terlengkap, melainkan mengambil Pi yang cukup sederhana, lalu perlahan mengubahnya menjadi lingkungan kerja sendiri.

</article>

<article class="tweet-entry" id="post-2096847370902544442">

## Memahami pesona desain Pi mungkin hanya butuh satu menit.

<span class="tweet-meta">2026-09-07 14:25:45 · naskah asli</span>

> Memahami pesona desain Pi mungkin hanya butuh satu menit.
>
> Hari ini saya tiba-tiba paham mengapa Pi mendesain Session sendiri, menangani algoritma pemadatan, dan membangun sistem konteksnya sendiri: semuanya demi tidak berkompromi!
>
> Konteks: usahakan prefix tetap stabil agar Prompt Cache terus terkena, Token lebih hemat, dan tidak mudah diubah sesuka hati oleh Harness.
>
> Session: rekaman utuh ada di tangan Anda sendiri, tidak bergantung pada satu vendor model untuk menyimpan status, dan tetap bisa dilanjutkan setelah berganti model.
>
> Pemadatan: Anda sendiri yang menentukan apa yang dipertahankan dan apa yang dibuang; isi setelah pemadatan tetap terlihat, bisa diubah, dan bisa dipindahkan, bukan berubah menjadi kotak hitam yang hanya bisa dibaca Provider.
>
> Model: GPT, Claude, Gemini, bahkan model lokal, semuanya hanyalah satu lapisan yang bisa diganti kapan saja.
>
> Harness: Pi juga tidak ingin Anda akhirnya hanya berpindah dari terkunci vendor menjadi terkunci oleh Harness lain.
>
> Desain-desain ini terlihat sangat menahan diri, bahkan agak keras kepala, tetapi pada akhirnya hanya menunjuk pada satu hal:
>
> Tidak berkompromi.
>
> Model bisa diganti, Provider bisa diganti, Harness juga bisa diganti.
>
> Tetapi Session, Context, dan Memory seharusnya selalu menjadi milik Anda sendiri.
>
> Barulah itu disebut Agent yang benar-benar bebas.

</article>

<article class="tweet-entry" id="post-2096905514995331392">

## Jika tidak sedang belajar dan meneliti Pi, beberapa artikel wajib baca ini tentu tidak boleh Anda lewatkan🔥

<span class="tweet-meta">2026-09-07 18:16:48 · naskah asli</span>

> Jika tidak sedang belajar dan meneliti Pi, beberapa artikel wajib baca ini tentu tidak boleh Anda lewatkan🔥
>
> Sering kali hanya melihat kode sumber dan konsep sederhana tidak memberi banyak wawasan; hanya membaca README juga sulit benar-benar memahami niat awal desain penulisnya.
>
> Justru artikel-artikel ini yang bisa menampilkan pemikiran penulisnya, sehingga Anda perlahan tahu mengapa Pi dirancang seperti sekarang.
>
> 1. Prompt Caching In Agents
>
> Membahas Prompt Cache, kestabilan prefix, dan cache hit; menurut saya ini artikel yang paling cocok untuk memahami gagasan desain Pi.
>
> 2. How Compaction Works in Pi
>
> Khusus membahas mekanisme pemadatan Pi: kapan dipicu, apa yang dipertahankan, dan bagaimana Session berlanjut setelah pemadatan.
>
> 3. The Session You Cannot Take With You
>
> Yang ini sangat saya rekomendasikan.
>
> Membahas portabilitas Session, kotak hitam Provider, dan apakah riwayat sebuah Agent benar-benar milik Anda.
>
> 4. AgentHarness v2
>
> Kalau ingin menyelami lapisan dasar lebih jauh, bacalah yang ini.
>
> Session, Lane, persistensi, dan mekanisme pemulihan; di sini terlihat beberapa desain Pi yang lebih dalam untuk Agent Runtime.
>
> 5. Pi Real Sessions
>
> Data Pi Session nyata yang dibuka Mario untuk publik.
>
> Anda bisa langsung melihat Tool Call, Thinking, Compaction, dan Branch untuk memahami bagaimana Agent nyata sebenarnya bekerja.
>
> Kalau hanya boleh merekomendasikan tiga artikel, yang wajib dibaca adalah:
>
> Prompt Caching In Agents
> How Compaction Works in Pi
> The Session You Cannot Take With You
>
> Setelah membaca ketiga artikel ini, saya rasa Anda pada dasarnya sudah bisa mulai memahami Pi.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2096905691852333156">

## Jika Anda juga sedang belajar dan meneliti Pi, beberapa artikel wajib baca ini jangan sampai Anda lewatkan🔥

<span class="tweet-meta">2026-09-07 18:17:30 · naskah asli</span>

> Jika Anda juga sedang belajar dan meneliti Pi, beberapa artikel wajib baca ini jangan sampai Anda lewatkan🔥
>
> Sering kali hanya melihat kode sumber dan konsep sederhana tidak memberi banyak wawasan; hanya membaca README juga sulit benar-benar memahami niat awal desain penulisnya.
>
> Justru artikel-artikel ini yang bisa menampilkan pemikiran penulisnya, sehingga Anda perlahan tahu mengapa Pi dirancang seperti sekarang.
>
> 1. Prompt Caching In Agents
>
> Membahas Prompt Cache, kestabilan prefix, dan cache hit; menurut saya ini artikel yang paling cocok untuk memahami gagasan desain Pi.
>
> 2. How Compaction Works in Pi
>
> Khusus membahas mekanisme pemadatan Pi: kapan dipicu, apa yang dipertahankan, dan bagaimana Session berlanjut setelah pemadatan.
>
> 3. The Session You Cannot Take With You
>
> Yang ini sangat saya rekomendasikan.
>
> Membahas portabilitas Session, kotak hitam Provider, dan apakah riwayat sebuah Agent benar-benar milik Anda.
>
> 4. AgentHarness v2
>
> Kalau ingin menyelami lapisan dasar lebih jauh, bacalah yang ini.
>
> Session, Lane, persistensi, dan mekanisme pemulihan; di sini terlihat beberapa desain Pi yang lebih dalam untuk Agent Runtime.
>
> 5. Pi Real Sessions
>
> Data Pi Session nyata yang dibuka Mario untuk publik.
>
> Anda bisa langsung melihat Tool Call, Thinking, Compaction, dan Branch untuk memahami bagaimana Agent nyata sebenarnya bekerja.
>
> Kalau hanya boleh merekomendasikan tiga artikel, yang wajib dibaca adalah:
>
> Prompt Caching In Agents
> How Compaction Works in Pi
> The Session You Cannot Take With You
>
> Setelah membaca ketiga artikel ini, saya rasa Anda pada dasarnya sudah bisa mulai memahami Pi.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2097275917915853200">

## Bersiap merapikan proses belajar Pi saya sendiri

<span class="tweet-meta">2026-09-08 18:48:38 · naskah asli</span>

> Bersiap merapikan proses belajar Pi saya sendiri
>
> Tidak tahu akan berapa banyak yang melihat, tetapi berbagi memang hal yang bermakna; merapikannya juga sekaligus menjadi peninjauan ulang atas pembelajaran.
>
> Dua bulan ini, dari Pi Agent sederhana hingga meneliti kode sumber, menganalisis isinya, dan belajar tumbuh langkah demi langkah sampai mulai menulis plugin sendiri.
>
> Awalnya hanya penasaran murni: mengapa muncul Agent sesederhana ini, dan mengapa Openclaw memilihnya sebagai fondasi untuk dikembangkan. Kemudian saya perlahan memahami alasannya.
>
> Saya sangat menyarankan Anda meluangkan waktu di sela belajar untuk menelusuri riwayat penulisnya; itu bukan sekadar kilas balik sejarah, melainkan tumbukan gagasan, dan sekaligus menjawab mengapa bisa seperti ini.
>
> Tidak perlu banyak bicara, saya mulai bertindak sekarang. Kalau Anda juga tertarik, beri tahu saya di kolom komentar👇

</article>

## Selanjutnya

Setelah menyelesaikan tahap ini, lanjutkan membaca [Tahap 2　Selesaikan dulu tugas pertama](/tweets/02-first-tasks).
