---
title: Selesaikan dulu tugas pertama
description: Catatan belajar Pi Tahap 2, memuat 25 tweet asli.
outline: false
prev:
  text: Mulai Mengenal Pi dari Rasa Penasaran
  link: /tweets/01-meet-pi
next:
  text: Memahami Session dan Konteks
  link: /tweets/03-sessions-context
---

<span class="library-status">Catatan belajar pribadi · STAGE 02</span>

# Selesaikan dulu tugas pertama

**Masalah yang hendak dipecahkan pada tahap ini**　Mengenal pemilihan model, teknik pemula, dan antarmuka dasar, lalu kembali ke tugas kecil yang bisa diverifikasi secara mandiri.

Catatan-catatan ini memuat tutorial dari nol maupun pengalaman memakai berbagai model. Model spesifik dan status produk akan usang, tetapi cara memilih model tetap layak dipertahankan. Saat belajar, selesaikan dulu tugasnya, baru bandingkan kecepatan dan harga.

Halaman ini memuat 25 tweet asli. Teksnya berasal dari arsip pribadi di Google Drive; alamat x.com dan tautan pendek media t.co sudah dihapus. Versi dan status produk yang disebut dalam tweet asli mengacu pada tanggal publikasinya.

<article class="tweet-entry" id="post-2087369163572756657">

## Saya uji Pi Agent + Deepseek V4 Flash, akhirnya merasakan seperti apa kecepatan keluaran teks yang sesungguhnya

<span class="tweet-meta">2026-08-12 10:42:44 · Teks asli</span>

> Saya uji Pi Agent + Deepseek V4 Flash, akhirnya merasakan seperti apa kecepatan keluaran teks yang sesungguhnya
>
> Rasanya seperti lepas landas di tempat, praktis tanpa jeda. Setelah sering memakai Claude dan GPT, model lain tidak ada yang terasa lambat; tapi kecepatan dari pengujian hari ini mungkin memang kecepatan generasi AI yang benar-benar saya inginkan
>
> Kalau nanti model dalam negeri bisa menyamai atau melampaui kemampuan model luar negeri, saya akan langsung beralih sepenuhnya ke model dalam negeri tanpa ragu

</article>

<article class="tweet-entry" id="post-2087775404090114120">

## Percikan seperti apa yang muncul dari Pi Agent + Deepseek V4 Pro terbaru?

<span class="tweet-meta">2026-08-13 13:36:59 · Teks asli</span>

> Percikan seperti apa yang muncul dari Pi Agent + Deepseek V4 Pro terbaru?
>
> Hari ini saya memakai kombinasi keduanya untuk membuat halaman efek partikel yang keren, dan hasilnya membuat saya kagum.
>
> Intinya Pi Agent hampir tidak punya system prompt, jadi paling bisa menguji kemampuan asli model. Skor benchmark bisa dimanipulasi; sering kali nilainya tinggi tapi kemampuannya rendah. Namun setelah pengaruh eksternal disingkirkan, yang tersisa adalah kemampuan paling mendasar dari model.
>
> Secara keseluruhan hasilnya bagus sekali. Prompt ini sudah saya jalankan di Qwen dan Kimi; dari sisi kelancaran dan kelengkapan, kali ini saya hanya bisa bilang Deepseek masih keren!

</article>

<article class="tweet-entry" id="post-2091511349431898427">

## Sebenarnya tidak perlu menyimpan banyak situs terkait Pi, cukup beberapa saja.

<span class="tweet-meta">2026-08-23 21:02:18 · Teks asli</span>

> Sebenarnya tidak perlu menyimpan banyak situs terkait Pi, cukup beberapa saja.
>
> Situs resmi:
> Dokumentasi, instalasi, dan pembaruan semuanya masuk dari sini; jangan langsung mencari tutorial pihak ketiga.
>
> Dokumentasi Skill:
> Bagaimana menulis SKILL.md, diletakkan di mana, kapan dimuat. Proses yang berulang sebaiknya ditulis sebagai Skill, jangan langsung pakai MCP.
>
> Dokumentasi ekstensi:
> Lihat ini kalau ingin menambah perintah, mencegat operasi berbahaya, atau mengubah status bar. Skill itu buku manual, ekstensi mengubah runtime.
>
> Instalasi paket:
> Cara memakai pi install. Ekstensi membawa hak sistem, baca dulu penjelasan keamanannya sebelum memasang.
>
> Marketplace plugin:
> Cari paket dulu di sini; lebih andal daripada menyalin perintah dari grup chat.
>
> Kode sumber resmi
> Contoh intersepsi permission, sandbox, dan subagent semuanya ada di repositori.
>
> Dokumentasi Mandarin:
> Kalau bahasa Inggris terasa berat, lihat ini; bagian quick start sudah cukup.
>
> Kumpulan plugin:
> Kalau masih ingin mencari plugin, buka ini lagi; pakai sebagai katalog.
>
> Saran saya, Anda harus mulai praktik dulu, sambil melihat dokumentasinya. Kalau tidak, sebanyak apa pun yang disimpan tidak akan memberi peningkatan nyata.

<p class="tweet-media-note">Postingan asli memuat gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2091682103109017691">

## Banyak orang bertanya apa perbedaan Pi Agent dan Deepseek Harness?

<span class="tweet-meta">2026-08-24 08:20:49 · Teks asli</span>

> Banyak orang bertanya apa perbedaan Pi Agent dan Deepseek Harness?
>
> Sebenarnya dua jalan ini terlihat berbeda, tapi pada dasarnya sama: keduanya memberi Anda cangkang Agent yang bisa berjalan, tetapi model dan tool-nya harus Anda sambungkan sendiri ke dalamnya. Bentuk akhirnya seperti apa, hanya Anda yang tahu.
>
> Saya sudah memakai keduanya cukup lama, dan perbedaan yang cukup jelas:
>
> 1.  Pi default-nya sangat minimalis, system prompt-nya sedikit; DSH lebih lengkap, sejak awal memberi Anda rangka yang bisa langsung bekerja
>
> 2.  Pi: kalau ada yang kurang nyaman, tambahkan Skill atau tulis ekstensi; DSH segalanya plugin, bahkan Harness-nya sendiri bisa diubah, bagian intinya pun bisa langsung diganti
>
> 3.  Penanganan Context berbeda. Di DSH, hasil tool yang terlalu panjang dipotong di tengah, dan yang terpotong hilang; Pi memakai pendekatan pemadatan dulu, konten lengkapnya ditulis ke disk, dan dibaca kembali saat diperlukan
>
> 4.  Sikap terhadap plugin juga mulai bercabang. DSH makin terbuka, mengusung semangat segalanya bisa ditukar; Pi belakangan justru menetapkan batas: mana yang percakapan, mana yang runtime, mana yang bisa dipersistenkan
>
> 5.  Dari pengalaman, Pi lebih seperti editor karakter, DSH lebih seperti mengopensourcekan seluruh "cara membuat Agent"
> Jadi jangan tanya mana yang lebih kuat. Yang satu memberi Anda sasis yang bersih, yang lain memberi Anda seluruh komponen yang bisa diubah.
>
> Meski kedua Agent ini punya banyak perbedaan, pada dasarnya keduanya tetap menyediakan Agent dengan tingkat kebebasan yang cukup tinggi; satu berbasis plugin, satu dengan intervensi seminimal mungkin, masing-masing punya kelebihan

</article>

<article class="tweet-entry" id="post-2091896626931749132">

## Langkah pertama Pi Agent, pasti menyetel status bar yang enak dilihat🔥

<span class="tweet-meta">2026-08-24 22:33:16 · Teks asli</span>

> Langkah pertama Pi Agent, pasti menyetel status bar yang enak dilihat🔥
>
> Di sini saya merekomendasikan proyek pi-footer.
>
> Ini bukan sekadar mengganti warna, melainkan menaruh model Pi saat ini, Provider, Thinking Level, tingkat pemakaian Context, konsumsi Token, biaya Session, waktu berjalan, dan status Git, semuanya ke dalam status bar.
>
> Saat Pi sudah lama berjalan, hal yang paling mudah terlewat adalah berapa Context yang tersisa, berapa Token yang terpakai, dan model apa yang sedang dipakai. Setelah memasang pi-footer, informasi itu bisa diketahui sekali lihat, tanpa perlu sering mengetik perintah untuk memeriksa.
>
> Saat ini ada 10 preset bawaan, yang lebih sering dipakai:
>
> 1. compact: informasi ringkas, cocok untuk terminal dengan layar sempit.
>
> 2. powerline: efek blok berwarna, paling enak dilihat, tapi sebaiknya dipadukan dengan Nerd Font.
>
> 3. git-heavy: menonjolkan branch, perubahan file, penambahan/pengurangan kode, dan status sinkronisasi.
>
> 4. pi-footer: mirip status bar asli Pi, perubahannya tidak banyak, tapi bisa diedit bebas.
>
> 5. powerline-bright / blocks / mono: masing-masing bergaya warna terang, blok multi-baris, dan hitam-putih kontras tinggi.
>
> Selain langsung memakai preset, Anda juga bisa menambah atau menghapus komponen status, mengatur urutannya, mengubah warna dan ikon, bahkan membuat status bar multi-baris. Kalau suka sederhana, pasang sedikit saja; kalau ingin menampilkan status Agent sekaligus status proyek, Anda juga bisa meraciknya sendiri perlahan.
>
> Perlu diperhatikan, gaya Powerline sebaiknya dipadukan dengan Nerd Font, kalau tidak sebagian ikon bisa tampil tidak utuh.
>
> Di video saya memang belum memasang Nerd Font, jadi ikon yang tampil tidak lengkap. Tapi bagi saya sudah cukup; dengan sedikit perincian dan optimasi lagi sudah benar-benar memadai. Jadi saya sarankan Anda mulai memakainya.

</article>

<article class="tweet-entry" id="post-2092509979408580806">

## Praktik Pi dari nol, tutorial panjang 10.000 kata akhirnya datang🔥

<span class="tweet-meta">2026-08-26 15:10:30 · Teks asli</span>

> Praktik Pi dari nol, tutorial panjang 10.000 kata akhirnya datang🔥
>
> Akhirnya ada waktu untuk merapikan materi belajar Pi menjadi artikel; tidak langsung membahas konsep dasar, melainkan langsung mengajak Anda praktik.
>
> Artikelnya dibagi berurutan menjadi lima bagian:
>
> 1. Mengenal Pi
> Bedakan dulu file apa saja yang bisa dibaca dan ditulisnya, serta operasi apa saja yang bisa dijalankannya. Agent lokal dan model lokal itu dua hal berbeda.
>
> 2. Instalasi dan antarmuka
> Mulai memasang dari direktori latihan, pastikan versinya dan login, lalu kenali area input, event tool, status bar, dan pengaturan model.
>
> 3. Tugas nyata pertama
> Pakai @ untuk merujuk notulen rapat, tulis materi, tindakan, batasan, dan kriteria verifikasi ke dalam prompt, lalu hasilkan daftar tindakan yang bisa dibuka.
>
> 4. Verifikasi mandiri
> Jangan hanya melihat ringkasan buatannya sendiri. Periksa nilai checksum, file keluaran, penanggung jawab, dan tenggat waktu, lalu kelola tugas berikutnya dengan AGENTS.md dan perintah sesi.
>
> 5. Ekstensi dan keamanan
> Bedakan Skill, Extension, dan Package. Project Trust bukan sandbox; "jangan mengakses di luar direktori" hanya prompt, bukan kunci sistem.
>
> Asalkan Anda serius mengikuti tutorialnya untuk praktik, saya yakin Anda juga bisa berubah dari pemula Pi menjadi ahli yang menguasai Agent.
>
> Kalau ada yang ingin diketahui lagi, tinggalkan pesan di kolom komentar; lain kali saya akan berusaha membuat artikel yang sesuai😂

</article>

<article class="tweet-entry" id="post-2092599173191434612">

## Praktik Pi Agent dari nol, artikel panjang 10.000 kata, saya khawatir kalian tidak sabar membacanya🔥

<span class="tweet-meta">2026-08-26 21:04:56 · Teks asli</span>

> Praktik Pi Agent dari nol, artikel panjang 10.000 kata, saya khawatir kalian tidak sabar membacanya🔥
>
> Saya khusus meringkas artikel panjang ini menjadi beberapa poin kunci, lalu membuatnya menjadi video untuk Anda tonton.
>
> Beberapa bab utama dalam artikel itu saya ulangi lagi, lengkap dengan animasi dan perintah yang relevan.
>
> Yang paling utama, saya juga ingin mencoba cara video pendek edukasi untuk memopulerkan pengetahuan terkait AI; kalau kalian suka, ke depannya saya akan mencoba lebih banyak arah.

<p class="tweet-media-note">Postingan asli memuat gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2092808237339087232">

## Di Pi, model tidak perlu banyak, tiga tingkat sudah cukup.

<span class="tweet-meta">2026-08-27 10:55:40 · Teks asli</span>

> Di Pi, model tidak perlu banyak, tiga tingkat sudah cukup.
>
> 1. GPT 5.6 Sol
> Andalan. Mengubah kode, melihat struktur, memecahkan masalah, tugas yang agak berbelit — semua saya lemparkan dulu ke sini. Ini bukan yang termurah, tapi jarang bikin kerja ulang. Sekarang saya tidak langsung memakai model gratis untuk menantang pekerjaan rumit; menghemat sedikit uang, tapi waktu perbaikan setelahnya lebih mahal.
>
> 2. DeepSeek
> Untuk perapian harian, mengubah file secara massal, menulis daftar, dan pekerjaan berulang, Flash sudah cukup; kalau butuh penalaran dan penyelarasan logika, baru naik ke Pro. Context Pi bersih, sehingga cache dan tagihan DeepSeek terlihat lebih rapi. Kalau bisa diselesaikan dengan tingkat ini, jangan panggil Sol untuk kerja kasar.
>
> 3. OpenRouter
> Kuota gratis dan model baru yang baru rilis masuk ke Pi dari sini. Model baru dites dulu untuk dua-tiga tugas kecil: merapikan notulen, mengubah beberapa nama file, membaca repositori kecil. Kalau feel-nya sudah pas, baru masuk proyek serius; kalau tidak, ganti saja, tidak perlu sayang. Jangan memakai model yang belum terverifikasi untuk mengubah kode yang benar-benar Anda pakai.
>
> Saran konkretnya cuma satu: jadikan model bagus yang biasa dipakai sebagai andalan, dan pakai model murah untuk pekerjaan kasar terutama yang sangat berulang.
>
> Terakhir, sisakan satu OpenRouter sebagai cadangan dan sumber gratisan, supaya kalau model andalan tidak tersedia kita tetap bisa menelusuri masalah. Yang paling utama, model gratis jumlahnya banyak dan memuaskan, untuk pengujian maupun pemakaian sehari-hari sama-sama bagus.

</article>

<article class="tweet-entry" id="post-2092853199053148319">

## Model lokal + Pi Agent, itulah cara yang benar memakai model lokal🔥

<span class="tweet-meta">2026-08-27 13:54:20 · Teks asli</span>

> Model lokal + Pi Agent, itulah cara yang benar memakai model lokal🔥
>
> Hari ini saya melihat video pengujian Pi + model Qwen3.8 lokal, dan baru sadar bahwa untuk Agent lokal, ukuran konteks mungkin akan menjadi topik hangat berikutnya.
>
> Meski model lokal tidak menagih per Token, karena keterbatasan perangkat keras, konteksnya mungkin hanya mendukung 256k, bahkan 64K.
>
> Kesimpulannya:
>
> 1. Makin panjang konteks, makin lama menunggu
>
> Setiap kali Agent memanggil model, konteks sebelumnya harus diproses dulu. Di cloud mungkin hanya tagihan yang membengkak, tapi model lokal jauh lebih langsung: makin panjang Prompt, makin lambat Prefill, dan Anda bisa merasakan Agent makin tersendat seiring percakapan.
>
> 2. Konteks juga benar-benar memakan sumber daya perangkat Anda
>
> Session jangka panjang, Tool Result, dan berbagai penjelasan plugin semuanya dimasukkan; yang dimakan akhirnya bukan hanya Token, tapi juga KV Cache, memori, dan VRAM.
>
> Apalagi menjalankan model seperti Qwen3.8-27B secara lokal, sumber daya perangkatnya memang tidak semelimpah cloud, sehingga keunggulan Pi yang Prompt-nya pendek dan tool-nya sedikit justru makin terasa.
>
> 3. Makin banyak plugin, model lokal justru makin gampang dirugikan
>
> Pi awalnya hanya punya sedikit tool, dan Skill dimuat sesuai kebutuhan. Desain ini dulu terlihat hanya "minimalis".
>
> Tapi di skenario model lokal, Anda akan menyadari bahwa Tool Schema, log, dan konten web yang tidak relevan itu, makin sedikit berarti model setiap putaran memproses lebih sedikit data sampah.
>
> 4. Menghemat Token di lokal sebenarnya berarti menghemat waktu
>
> Di lokal, karena Token sudah gratis, yang lebih kita perhatikan seharusnya konsumsi waktu; sebab jika berjalannya terlalu lambat, konsumsi waktu pun menjadi biaya.
>
> Dulu: menghemat Token = menghemat uang, tapi sekarang dengan model lokal:
>
> Menghemat Token = latensi lebih rendah + pemakaian sumber daya lebih sedikit + Context efektif lebih besar + Agent bisa bekerja lebih lama.
>
> Jadi belakangan ini saat melihat Qwen3.8 dan Pi, saya justru makin paham mengapa Pi terus mengurangi hal-hal pada konteks.
>
> Dulu saya hanya tahu desainnya minimalis dan cache-nya efisien; sekarang kalau melihat ke belakang, desain ini memang secara alami cocok dengan kenyataan model lokal.
>
> Kalau nanti benar-benar tiba saatnya setiap rumah bisa menyebar model besar sendiri di rumah, maka kita perlu memikirkan bagaimana menyelesaikan kebutuhan sendiri secepat mungkin di bawah keterbatasan daya komputasi.

</article>

<article class="tweet-entry" id="post-2092899784797667540">

## Melihat GPT meluncurkan fitur stiker, saya langsung memasangnya di Pi yang sudah lama saya idam-idamkan.

<span class="tweet-meta">2026-08-27 16:59:27 · Teks asli</span>

> Melihat GPT meluncurkan fitur stiker, saya langsung memasangnya di Pi yang sudah lama saya idam-idamkan.
>
> Saya membuatkan satu set stiker untuknya; nanti kalau ada orang bertanya, saya tinggal mengirim stiker Pi buatan saya sendiri😂

<p class="tweet-media-note">Postingan asli memuat gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2093506603890958446">

## Pi Agent menjalankan model besar dalam negeri, hasilnya mirip dengan dugaan saya

<span class="tweet-meta">2026-08-29 09:10:44 · Teks asli</span>

> Pi Agent menjalankan model besar dalam negeri, hasilnya mirip dengan dugaan saya
>
> Di proyek ada satu endpoint yang kadang gagal: setelah disubmit, loadernya berputar, lalu setelah refresh normal lagi. Log-nya agak berantakan, jadi saya biarkan mereka menelusurinya sendiri, mencari penyebabnya, dan memberi tahu bagian mana yang bisa diperbaiki.
>
> Pengalaman memakai beberapa model cukup berbeda.
>
> 1. GLM 5.3 Flash: berjalan cukup lama, akhirnya bisa menjelaskan secara garis besar, tapi analisisnya agak kering dan tidak cukup jelas bagian mana yang harus diubah
>
> 2. DeepSeek V4 Flash: jauh lebih cepat, langkahnya juga lengkap, arah yang diberikan bisa langsung dicoba
>
> 3. GPT-5.6 Terra: paling cepat, analisisnya paling rinci, kualitas terbaik pada ronde ini
>
> 4. Kimi K3: setelah berjalan sebentar muncul pesan kelebihan beban, ronde ini tidak selesai
>
> Secara keseluruhan, kemampuan model dalam negeri sekarang sudah menyusul, tapi daya komputasinya masih belum menyusul; meski begitu, sudah dalam proses mengejar
>
> Kalau ada waktu, mungkin saya akan terus menguji, untuk melihat apakah hasil keseluruhannya ada kemajuan atau peningkatan

<p class="tweet-media-note">Postingan asli memuat gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2093634905037230252">

## Model yang sama, ganti Agent Harness, rasanya seperti ganti model?

<span class="tweet-meta">2026-08-29 17:40:33 · Teks asli</span>

> Model yang sama, ganti Agent Harness, rasanya seperti ganti model?
>
> Belakangan ini saya terus melihat pengujian model lokal seperti Pi + Qwen3.8, dan makin lama makin merasa bahwa dulu mengaitkan seluruh kemampuan Agent pada modelnya sendiri mungkin sudah salah sejak awal.
>
> Model tentu penting, tetapi sekarang Harness memainkan peran yang makin krusial dalam penggunaan AI.
>
> 1. Apa yang dilihat model di setiap ronde memang sudah berbeda
>
> Tool bawaan Pi sedikit, System Prompt-nya juga cukup menahan diri, dan banyak kemampuan dimuat sesuai kebutuhan.
>
> Kalau diganti ke Harness lain, mungkin secara default model sudah disuapi belasan Tool, lebih banyak penjelasan, dan lebih banyak status.
>
> Untuk model besar di cloud, ini mungkin hanya sedikit tambahan Token.
>
> Tapi untuk model lokal seperti Qwen3.8-27B, Tool Schema, Context, dan pilihan tambahan itu sendiri berpotensi mengubah cara model bernalar.
>
> 2. Kalau desain tool tidak bagus, model secerdas apa pun tidak berguna
>
> Saya melihat pengujian Qwen yang cukup menarik: dengan model yang sama, awalnya hanya diberi Bash, lalu dibiarkan memakai sed dan Python untuk mengubah file, dan pass@1 pada SWE-bench Pro hanya sekitar 28%.
>
> Setelah itu hanya dengan mengganti tool edit menjadi str_replace yang lebih cocok untuk perubahan kode, lalu mengoptimalkan cara pengujiannya, skornya langsung naik ke sekitar 50%.
>
> Bobot model tidak berubah satu baris pun.
>
> Yang berubah adalah tool di tangannya.
>
> Ini sangat mirip dengan menyuruh orang yang sama bekerja: satu orang hanya memegang palu, yang lain punya kotak perkakas lengkap; hasil akhirnya jelas akan sangat berbeda.
>
> 3. Yang benar-benar membedakan Agent sering kali adalah setelah kesalahan pertama
>
> Apa yang dikembalikan setelah Tool Call gagal, berapa banyak log yang dipotong, perlu Retry atau tidak, kapan lanjut, kapan berhenti — hal-hal ini sebenarnya tidak bisa dikendalikan model sendiri.
>
> Setiap kali Harness memasukkan kembali hasil eksekusi ke Context, pada dasarnya ia memberi tahu model lagi:
>
> "Kamu tadi melakukan apa, dan sekarang yang terjadi apa."
>
> Jadi Harness sebenarnya terus memengaruhi bagaimana model menilai langkah berikutnya.
>
> 4. Pengelolaan Context juga langsung mengubah berapa lama Agent bisa bertahan
>
> Dengan konteks 100K yang sama, satu Harness mungkin sudah mulai melakukan Compaction lebih awal, sementara yang lain masih menyimpan banyak riwayat asli.
>
> Satu sisi nanti melihat Tool Result lengkap, kode, dan penilaian sebelumnya; sisi lain hanya tersisa Summary.
>
> Sampai di titik ini, meski keduanya memakai model yang sama, sebenarnya sudah bukan menyelesaikan masalah yang sama lagi.
>
> Saya sendiri juga pengguna berat Agent; sehari-hari saya pernah memakai Codex, Claude Code, Pi Agent, Deepseek-Harness, Hermes, dan lain-lain.
>
> Tapi sering kali dengan model yang sama di Agent yang berbeda, saya benar-benar merasa berbeda; ada yang kemampuannya lebih kuat, ada yang justru melemah.
>
> Jadi hal ini akan makin penting ke depannya.

<p class="tweet-media-note">Postingan asli memuat gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2093888400738922672">

## Berbagi 4 tips penggunaan Pi Agent yang paling saya rekomendasikan🔥

<span class="tweet-meta">2026-08-30 10:27:51 · Teks asli</span>

> Berbagi 4 tips penggunaan Pi Agent yang paling saya rekomendasikan🔥
>
> Saya sudah cukup lama bermain dengan Pi, jadi saya bagikan beberapa tips pemakaian versi saya; ini bukan sekadar tips perintah, tapi tips yang sifatnya mendasar.
>
> 1. Jangan langsung memasang banyak Extension
>
> Keunggulan terbesar Pi sendiri adalah ringan.
>
> Saya biasanya memakai apa adanya dulu; kalau benar-benar ada kebutuhan berulang, baru menambah Skill atau Extension. Kalau tidak, tool makin banyak, dan pada akhirnya Pi malah jadi berat.
>
> 2. Muat Skill sesuai kebutuhan
>
> Aturan proyek bisa menetap, tapi tutorial, alur, dan materi sementara tidak perlu semuanya dimasukkan ke Context.
>
> Biarkan Pi membacanya saat diperlukan; ini terutama berguna untuk tugas panjang, Context akan jauh lebih bersih.
>
> 3. Untuk pekerjaan berulang, biarkan Pi membuat Skill-nya sendiri
>
> Misalnya Code Review tetap, perapian materi, alur publikasi — sekarang saya lebih suka langsung memberi tahu Pi:
>
> "Rapikan alur tadi menjadi satu Skill."
>
> Setelah dipakai lama, Pi perlahan akan menjadi seperangkat tool yang lebih cocok untuk Anda, bukan terus mencari plugin orang lain.
>
> 4. Untuk tugas rumit, pecah dulu, baru pertimbangkan Subagent
>
> Subagent bukan berarti makin banyak makin baik.
>
> Saya biasanya hanya memecahnya kalau tugasnya jelas bisa diparalelkan, misalnya "mencari bahan + membaca kode sumber + menjalankan tes".
>
> Kalau tidak, beberapa Agent yang saling melemparkan Context kadang justru lebih berantakan daripada satu Agent mengerjakan sampai selesai.
>
> Kalau diringkas menjadi satu kalimat:
>
> Pertahankan konfigurasi paling minimal, tambahkan hanya saat dibutuhkan.
>
> Jagalah kebersihan dan kesederhanaannya; pasang plugin hanya ketika ada kebutuhan yang sesuai, jangan menambah terlalu banyak komponen demi fitur yang katanya canggih.

<p class="tweet-media-note">Postingan asli memuat gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2093978662697828756">

## Claude Code, Codex, DeepSeek Harness, dan Pi — semuanya terlihat membuat Agent, tapi sebenarnya menempuh empat jalan yang sangat berbeda.

<span class="tweet-meta">2026-08-30 16:26:32 · Teks asli</span>

> Claude Code, Codex, DeepSeek Harness, dan Pi, semuanya terlihat membuat Agent, tapi sebenarnya menempuh empat jalan yang sangat berbeda.
>
> Dulu saya juga suka membandingkan siapa yang lebih kuat menulis kode, tapi setelah belakangan ini tekun meneliti Pi, saya makin merasa yang seharusnya benar-benar diperhatikan adalah: seberapa banyak ia ingin memutuskan untuk pengguna, dan seberapa banyak kendali yang bersedia ia serahkan kepada Anda.
>
> 1. Claude Code: makin mirip produk Agent yang utuh
>
> Claude Code sekarang sudah melengkapi hampir semua hal seperti Plan, Sub-agent, Hooks, Skills, MCP, dan plugin; bahkan sudah bisa dipakai dari berbagai pintu masuk: CLI, IDE, Web, dan Mobile.
>
> Kesan yang diberikannya: Anthropic sudah memilihkan sebagian besar jawaban yang benar untuk Anda.
>
> Anda tidak perlu meneliti Harness terlalu banyak; ambil saja dan langsung bisa bekerja, dan seluruh ekosistem Claude sangat selaras.
>
> Kalau hanya ditanya mana yang paling cocok untuk langsung bekerja, saya mungkin tetap mengutamakannya.
>
> 2. Codex: lebih seperti engineer yang diawasi ketat
>
> Yang paling membekas dari Codex justru bukan salah satu fiturnya, melainkan hal-hal seperti Sandbox, Approval, dan Network Policy.
>
> Ia terus menyelesaikan satu masalah yang sangat nyata: ketika izin Agent makin besar, bagaimana membuatnya bisa bekerja dengan berani tanpa benar-benar membuat mesinnya rusak.
>
> Termasuk otomatis Review sekarang, pada dasarnya bahkan menugaskan satu Agent lain untuk menilai apakah satu langkah Agent bisa dieksekusi.
>
> Jadi menurut saya arah Codex sudah jelas:
>
> Bukan hanya membuat Agent bisa bekerja, tetapi juga membuatnya bekerja di dalam batas yang terkendali.
>
> 3. DeepSeek Harness: saat ini paling mirip laboratorium eksperimen besar
>
> Slogannya sekarang sangat langsung:
>
> Everything is a Plugin.
>
> Plan, Sub-agent, model, Tool, Session, termasuk banyak kemampuan inti, semuanya dipecah ke arah pluginisasi; bahkan pemanggilan tool sendiri masih dibagi menjadi Native Mode dan Code Mode.
>
> Dan sekarang sudah bisa menyambung ke DeepSeek, Anthropic, OpenAI, dan Provider kustom, bukan hanya bisa menjalankan DeepSeek.
>
> Tapi saat ini ia masih berada di Developer Preview, dan pihak resminya sendiri secara jelas mengingatkan akan ada Breaking Changes.
>
> Jadi saya lebih suka memahaminya sebagai eksperimen arsitektur Agent yang sedang berevolusi cepat, bukan produk jadi yang sudah sepenuhnya stabil.
>
> 4. Pi: yang paling mirip "tidak memutuskan apa pun untuk Anda" di antara keempatnya
>
> Pi bahkan enggan memasukkan hal-hal yang banyak orang anggap seharusnya dimiliki Agent seperti Sub-agent, Plan Mode, dan Sandbox ke dalam Core-nya.
>
> Butuh apa, pakai Extension; ingin memberi Agent alur kerja, pakai Skill; kalau lebih rumit lagi, langsung bungkus jadi Package.
>
> Keuntungan terbesar dari cara ini adalah ringan, Context sangat bersih, dan Anda hampir selalu bisa terus mengubahnya.
>
> Sebenarnya setelah saya mondar-mandir mencoba semua Agent ini, awalnya pemikiran saya sederhana: Agent mana yang lebih kuat, model mana yang lebih baik menulis kode, itu yang saya pakai.
>
> Tapi makin banyak memakai tool, saya justru makin mulai peduli mengapa model yang sama tampil berbeda ketika Harness-nya diganti, bagaimana Context diorganisasi, mengapa Tool dirancang begitu, kemampuan mana yang harus masuk Core, dan mana yang harus diserahkan ke plugin.
>
> Sampai di titik ini, yang saya teliti bukan lagi sekadar "tool mana yang lebih nyaman dipakai", melainkan perlahan membentuk penilaian saya sendiri tentang Agent.
>
> Mungkin yang benar-benar menarik bukan memilih Agent terkuat, melainkan perlahan memahami bagaimana Agent yang baik seharusnya dirancang.

<p class="tweet-media-note">Postingan asli memuat gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2094345513344663712">

## DeepSeek Harness dan Pi, menurut Anda siapa yang lebih kuat?🔥

<span class="tweet-meta">2026-08-31 16:44:16 · Teks asli</span>

> DeepSeek Harness dan Pi, menurut Anda siapa yang lebih kuat?🔥
>
> Kalau hanya melihat permukaannya, keduanya mirip: sama-sama open source, sama-sama MIT, sama-sama bilang kemampuan ditambah lewat plugin, dan memberi pengguna kebebasan yang cukup.
>
> Tapi kalau dibongkar, sebenarnya titik tekannya tidak berada di tempat yang sama.
>
> 1. Pi melindungi loop, dsh membongkar loop
> Pi default-nya read / write / edit / bash, dan system prompt-nya ditekan sangat pendek.
> Skill, Extension, dan Package digantung di luar; Loop dan Session tetap berada di lapisan yang bisa Anda sentuh.
>
> DeepSeek Harness lebih ekstrem: model, tool, sandbox, penyimpanan, UI, bahkan bagaimana Agent berpikir selanjutnya, semuanya dijadikan plugin.
> Slogannya bukan pemasaran, melainkan arsitektur — Everything is a Plugin.
>
> Yang satu seperti rumah tanpa finishing: dindingnya sedikit, struktur pemikulnya jelas.
> Yang lain seperti studio LEGO: setiap keping bisa ditukar, termasuk cara bermainnya sendiri.
>
> 2. Posisi kerumitannya berbeda
> Pi menyerahkan hak memilih kepada Anda. Tambah sesuai kebutuhan, Context baru bersih.
> dsh mengubah hak memilih menjadi tumpukan konfigurasi. Profile bertumpuk lapis demi lapis, lapisan belakang menimpa lapisan depan; kemampuan berganti cepat, tapi kalau ada masalah harus ditelusuri mengikuti seluruh tumpukan plugin.
>
> Jadi akan ada ilusi: dsh fiturnya lebih banyak, berarti lebih kuat.
> Padahal ia hanya lebih awal membentangkan kerumitannya. Pi bukan tidak punya kemampuan itu, hanya secara default tidak memasangnya untuk Anda.
>
> 3. Sekarang jangan memilih berdasarkan siapa yang lebih kuat
> Ada yang memakai DeepSeek V4 Pro yang sama untuk menjalankan satu ronde tugas Agent di Claude Code, dsh, Hermes, Pi, dan OpenCode.
> Hasilnya cukup menarik: Pi menyelesaikan soal paling banyak, dan Harness milik DeepSeek sendiri paling hemat biaya.
>
> Saya tidak tahu gaya desain siapa yang akan menjadi tokoh utama di masa depan, karena saya juga tidak tahu jalan mana yang benar. Tapi saya hanya percaya satu hal: memberi pengguna kebebasan yang cukup pasti tidak salah.
>
> Kebutuhan dan pemahaman saya sendiri hanya saya yang tahu; Anda membukanya, maka saya punya kesempatan membangun Agent saya sendiri!

<p class="tweet-media-note">Postingan asli memuat gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2094658406976241811">

## Model Flash sudah bisa bekerja, banyak orang belum tahu betapa nikmatnya memakai Pi🔥

<span class="tweet-meta">2026-09-01 13:27:35 · Teks asli</span>

> Model Flash sudah bisa bekerja, banyak orang belum tahu betapa nikmatnya memakai Pi🔥
>
> Hal ini terasa agak aneh. V4 Flash, GLM-5.3 Flash, dan Qwen di tingkat itu harganya ditekan sangat rendah, tapi kemampuan kerjanya sama sekali tidak buruk.
>
> Untuk pekerjaan harian seperti mengubah file, menjalankan script, atau menambah test case, menghadapi tugas sederhana sehari-hari umumnya tidak masalah.
>
> Tapi begitu benar-benar dipakai, sebagian besar orang tetap menaikkan default thinking depth ke maksimum: tool dipasang segunung, system prompt ditulis panjang, Plan, Sub-agent, browser, dan lapisan memori dinyalakan bersama.
>
> Saya makin merasa Flash bukan butuh produk yang lebih lengkap, melainkan lapisan yang lebih tipis. Pi kebetulan berada di posisi ini.
>
> 1. Flash bukan takut kemampuannya kurang, tapi takut instruksinya terlalu ribut
>
> Kekurangan sesungguhnya model murah sekarang sering kali bukan tidak bisa menulis kode, melainkan mudah berputar-putar saat konteksnya kotor. Begitu tool-nya banyak, ia lebih suka membaca berulang file yang sama, parameternya ngawur, dan satu hal yang sama diputar tiga kali. Cangkang yang berat membentangkan semua kemampuan itu di lingkungan default; bagi Opus mungkin menambah bagus, bagi Flash lebih mirip gangguan.
>
> Pi default-nya hanya empat hal: read, write, edit, bash. System prompt-nya ditekan sangat pendek. Skill, Extension, dan Package semuanya ada, hanya tidak dibuka lebih dulu untuk Anda. Ini sangat penting bagi Flash. Yang bisa dilihatnya setiap ronde menjadi lebih sedikit, barulah perhatiannya kembali, dan harga murah jadi bermakna.
>
> 2. Cangkang tipis melindungi harganya, bukan mengurangi fitur
>
> Flash disebut Flash bukan hanya karena cepat, tapi karena harga satuannya memungkinkan Anda menjalankannya lebih banyak ronde. Model seperti V4 Flash, input-nya bisa serendah sekitar 0,14 dolar / juta Token, sementara konteksnya juga ditarik sangat panjang. Tapi begitu cangkangnya tebal, setiap ronde mengirimkan prefix panjang, deskripsi tool yang menganggur, dan penjelasan kepribadian tambahan; penghematan yang tadinya didapat akan dimakan lebih dulu oleh lingkungannya.
>
> Ada yang memakai DeepSeek V4 Flash yang sama untuk menjalankan sekumpulan tugas yang cenderung realistis di Harness yang berbeda. Yang ditukar bukan modelnya, melainkan cangkangnya. Pi menyelesaikan lebih banyak soal, dengan biaya sekitar 0,028 dolar per keberhasilan; alur kerja default yang lebih berat bisa mencapai sekitar 0,195 dolar per keberhasilan. Tujuh kali lipatnya bukan berasal dari selisih kecerdasan model, melainkan dari seberapa banyak yang dimasukkan di setiap ronde.
>
> Jadi saya mencatat paduannya dalam satu kalimat: Flash bertanggung jawab menyelesaikan pekerjaan, Pi bertanggung jawab agar pekerjaannya tidak menjadi mahal.
>
> 3. Kerumitan tetap digantung di luar, hanya saja tidak diserahkan ke Flash secara default
>
> Ringan bukan berarti sederhana. Browser, review, subagent, navigasi repositori, dipasang saat perlu. Flash cocok untuk menjelajah repo, mengubah tes, menjalankan script, dan mengubah file sesuai yang sudah ditulis jelas. Menentukan rencana, menyentuh arsitektur, dan pemeriksaan akhir, tetap beralih kembali ke model yang lebih berat.
>
> Keuntungan Pi di sini bukan menambah satu saklar Flash lagi, melainkan biaya mengganti model dalam Session yang sama itu rendah. Kalau Flash berjalan sampai tersendat, serahkan ronde itu ke Opus atau Pro; tidak perlu berganti produk, dan tidak perlu memanggul seluruh plugin default lebih dulu.
>
> Ringkasan hariannya:
>
> Siklus harian: V4 Flash atau GLM-5.3 Flash + konfigurasi polos Pi
>
> Cadangan: ganti ke satu model berat di Session yang sama untuk melihat rencana
>
> Jangan dilakukan: menumpuk seluruh plugin default begitu saja di awal pakai Flash
>
> Ada satu kalimat inti di Pi: yang tidak seharusnya masuk Core, jangan dimasukkan ke Core. Persoalan ini bertemu dengan model murah, barulah penghematannya benar-benar terasa.

<p class="tweet-media-note">Postingan asli memuat gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2094684026028339324">

## Sudah dua minggu memakai Pi, ini tips wajib yang harus Anda tahu🔥

<span class="tweet-meta">2026-09-01 15:09:23 · Teks asli</span>

> Sudah dua minggu memakai Pi, ini tips wajib yang harus Anda tahu🔥
>
> Pi sekilas tampak seperti Agent yang sangat ringan, padahal kenyataannya menumpuk perombakan login, refaktor routing, dan sekalian bertanya soal dokumentasi ke dalam satu Session yang sama.
>
> Sering kali sebenarnya modelnya tidak menjadi bodoh, melainkan konteksnya lebih dulu tercemar. Kadang arahnya salah, dan tugas setelahnya jadi tidak bermakna; menambalnya dengan pemadatan konteks atau menyesuaikan arah hanya membuang lebih banyak waktu.
>
> Saya melihat orang yang memakai Pi dengan baik di komunitas sekarang melakukan hal yang justru sebaliknya:
>
> Mereka mengendalikan percakapan dulu, baru membiarkan model bekerja. Pi tidak memberi Anda subagent secara default; percabangan dilakukan pada pohon Session, bukan pada sekumpulan persona.
>
> 1. Satu urusan, satu Session
>
> Kalau mengubah login, ya hanya mengubah login. Kalau sudah kotor, buka yang baru, beri nama yang besok masih bisa dicari.
>
> Ada yang berharap pemadatan bisa membuat bubur jadi bening. Kadang bisa menyelamatkan, tapi ketika tiga hal yang tidak berhubungan saling kusut, pemadatan hanya memekatkan kekacauannya. Daripada berdoa semoga jadi bersih, lebih baik segera buka jalur baru.
>
> 2. Kalau keluar jalur, kembali ke titik percabangan, jangan ditarik dengan omongan
>
> Ketika pembicaraan di jalur yang sama makin jauh, kembalilah ke kalimat yang belum melenceng; kalau perlu mencoba jalan lain, tumbuhkan dari sana.
>
> Ini kebiasaan yang paling sering disebut, sekaligus paling mudah diabaikan. Percakapan Pi bukan garis lurus, melainkan pohon. Salah cabang, pindah ke cabang lain dan lanjutkan; tidak perlu menjelaskan ulang seluruh bagian, apalagi menarik satu agent untuk meneruskan konteks.
>
> Tambah satu yang lebih tegas lagi: kalau model dan arah yang Anda inginkan sudah bercabang sejak awal, langsung hentikan, ubah kalimat prompt-nya. Jangan menunggu ia menyelesaikan perubahan file dulu baru menyesal.
>
> 3. Kalau bisa dilihat sendiri, jangan langsung disuapkan ke model
>
> Memeriksa status, memindai log, memastikan file ada atau tidak, sering kali tidak perlu memakan mata model. Jalankan dulu di terminal, pastikan berguna, baru putuskan apakah perlu dilihatnya. Menunjuk file yang spesifik juga lebih aman daripada membiarkannya menebak path di seluruh repositori.
>
> Ini bukan pamer teknik. Kurangi menyuruh model murah dan model mahal menjadi petugas kebersihan; Context akan lebih tertib, dan tagihan juga lebih tertib.
>
> 4. Skill tumbuh dari kebiasaan berulang Anda, bukan dari daftar keinginan
>
> Aturan proyek bisa ditulis sangat pendek. Tutorial, alur, dan materi sementara jangan semuanya dimasukkan dulu.
>
> Yang lebih aman adalah beberapa hari kemudian membuka kembali percakapan terakhir, melihat bahwa Anda berulang kali membicarakan review yang sama, alur publikasi yang sama, atau jenis perubahan tes yang sama, lalu merangkum alur itu menjadi Skill. Dengan begitu yang tersimpan adalah alur kerja Anda, bukan koleksi dari marketplace plugin.
>
> Anggap model juga sebagai tingkat. Untuk harian pakai yang ringan, kalau tersendat baru ganti ke yang berat, dan tambah kedalaman berpikir sesuai tugas. Cangkangnya tetap lapisan yang sama; yang berganti adalah mesinnya.
>
> Kalau hanya boleh mengingat satu kalimat:
>
> Plugin menentukan apa lagi yang bisa Anda lakukan, Session menentukan apakah Anda masih bisa melihat dengan jelas apa yang sedang Anda lakukan.
>
> Rapikan dulu percakapannya, barulah bekerja lebih akurat dan lebih cepat.

<p class="tweet-media-note">Postingan asli memuat gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2095082604169146610">

## Fable 5.1 sudah keluar, masuk ke Pi cuma satu pesan: jangan jadikan mesin default🔥

<span class="tweet-meta">2026-09-02 17:33:12 · Teks asli</span>

> Fable 5.1 sudah keluar, masuk ke Pi cuma satu pesan: jangan jadikan mesin default🔥
>
> 1. Pilih model sesuai tugas
>
> Dalam pengujian keseluruhan, scientific terminal naik dari 24,7% ke 52,6%, otomasi perkantoran naik dari 17,1% ke 31,4%, hampir dua kali lipat. Yang paling saya perhatikan, pemrograman Agent, naik dari 42,0% ke 55,8%. Kalau hanya melihat modelnya, peningkatan kali ini tidak kecil.
>
> Tapi di Pi saya tidak akan menjadikannya model default. Bagaimanapun, sebagian besar pekerjaan harian seperti mengubah file, membuat tes, atau menjalankan script bisa langsung dikerjakan model Flash.
>
> Meski kemampuannya naik dan harganya juga lebih murah, tetap hemat di tempat yang perlu, boros di tempat yang perlu — naik sepeda ke bar.
>
> 2. Optimasi konteks lebih hemat
>
> Input dan output tidak berubah, tetap 10 dolar dan 50 dolar. Tapi harga cache turun, dari 1 dolar dipangkas jadi 0,25 dolar. Untuk tugas berdurasi panjang dan beban tinggi tetap sangat hemat.
>
> Tapi Fable 5.1 lebih suka menulis konten panjang; kalau thinking dibuka maksimal, uang yang dihemat mungkin tidak cukup untuk sekali memuat konteks.
>
> Jadi jangan anggap 1M sebagai bonus; ukuran konteks default model bisa disesuaikan, 272K sebenarnya juga cukup untuk menangani sebagian besar tugas.
>
> 3. Perlindungan keamanan tidak boleh kurang
>
> Meski model Fable 5.1 ini sensitif, dan kali ini pihak resmi bilang ambang keamanannya dilonggarkan sehingga tidak seperti dulu yang sekali tersentuh langsung beralih kembali ke model Opus, tetap saja saya sarankan Anda memasang plugin terkait izin untuk Pi Anda.
>
> Jangan hanya percaya pada kemampuan model. Kalau bertemu relay yang tidak aman, peracunan man-in-the-middle, atau pencemaran prompt, kerugian ekonomi dan properti mudah terjadi, jadi sisi ini juga tidak boleh kurang.
>
> Meski saya yakin sebagian besar orang tidak akan memindahkan Fable 5.1 ke Pi untuk dijalankan — lagipula harga API resminya masih mahal — tapi untuk benar-benar menguji kemampuan sebuah model, ia harus dilepaskan dari Harness yang tebal.
>
> Pakai langsung kemampuan asli modelnya, dan lihat apakah ia dewa atau setan.

<p class="tweet-media-note">Postingan asli memuat gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2095103024012353851">

## Dukungan Pi terhadap vendor model masih belum cukup banyak🔥

<span class="tweet-meta">2026-09-02 18:54:20 · Teks asli</span>

> Dukungan Pi terhadap vendor model masih belum cukup banyak🔥
>
> Dalam proses saya memakai Pi, ada satu perasaan yang makin jelas:
>
> Sering kali apa yang disebut dukungan model hanya berarti permintaannya bisa dikirim keluar dengan utuh, hanya itu.
>
> Tapi itu tidak berarti di dalam Pi model bisa bekerja selengkap Harness resminya.
>
> 1. Masalah DeepSeek lebih banyak muncul di Tool Call dan Thinking
>
> Modelnya sendiri bisa dipakai, tapi begitu melibatkan pemanggilan tool beruntun, pemutaran ulang konten berpikir, dan urutan pesan, masalah kompatibilitas mudah muncul.
>
> Artinya, bukan modelnya tidak bisa berjalan, melainkan bagaimana Harness menyusun konteks dan memutar ulang Thinking akan langsung memengaruhi kestabilan.
>
> 2. Masalah terbesar OpenRouter adalah antarmukanya sama, perilakunya belum tentu sama
>
> Di permukaan semuanya kompatibel dengan antarmuka Anthropic atau OpenAI, tapi begitu model di belakangnya berganti, Thinking Signature, Reasoning Replay, dan Prompt Cache bisa saja berbeda.
>
> Kelihatannya API-nya sama, padahal perilaku internalnya sama sekali bukan satu hal.
>
> 3. Model seperti Kimi masih akan bertemu detail seperti OAuth dan statistik cache
>
> Kemampuan modelnya sendiri mungkin tidak masalah, tapi bagaimana Token cache dihitung, kapan OAuth disegarkan, bagaimana tugas dilanjutkan setelah terputus — detail pinggiran ini juga akan langsung memengaruhi pengalaman.
>
> Sering kali, bisa tidaknya tersambung dengan baik adalah langkah pertama dari Harness yang unggul.
>
> Saya sendiri juga pernah mengalami masalah serupa dalam pemakaian sehari-hari. Meski Pi adalah Agent yang sangat bagus, dalam hal menangani koneksi multi-model masih perlu ditingkatkan.

<p class="tweet-media-note">Postingan asli memuat gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2095381382801551533">

## Pi + Gemini 3.8 Flash benar-benar cepat sekali😂

<span class="tweet-meta">2026-09-03 13:20:26 · Teks asli</span>

> Pi + Gemini 3.8 Flash benar-benar cepat sekali😂
>
> Saya menjalankan uji pelikan naik sepeda, hanya butuh sekitar dua puluh detik untuk selesai, benar-benar unggul jauh dibandingkan AI vendor lain.
>
> Tapi halaman hasil pengujiannya lumayan, secara keseluruhan komplet, dan parameter yang bisa disesuaikan juga sangat bagus, terutama lengkungan mulutnya. Pada gelombang pertama masih gambar statis, setelah ditambah parameter baru bergerak.
>
> Silakan lihat hasilnya👇🏻

<p class="tweet-media-note">Postingan asli memuat gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2096048107951972445">

## Inilah kecepatan Pi, model baru rilis langsung diperbarui😂

<span class="tweet-meta">2026-09-05 09:29:46 · Teks asli</span>

> Inilah kecepatan Pi, model baru rilis langsung diperbarui😂
>
> Pi sudah mendukung model GPT-6 terbaru, cepat sekali
>
> Hanya perlu satu baris perintah: “pi update - -models”, lalu daftar model terbaru bisa diperbarui dan langsung dipakai
>
> Pi sudah mengikuti paling awal; kapan ya Hermes menyambungkan GPT-6.

<p class="tweet-media-note">Postingan asli memuat gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2096247146937028914">

## Makin mahal GPT-6, makin besar justru nilai Pi🔥

<span class="tweet-meta">2026-09-05 22:40:40 · Teks asli</span>

> Makin mahal GPT-6, makin besar justru nilai Pi🔥
>
> Menurut saya masalah terbesar Astra bukanlah kekuatan modelnya, melainkan kuotanya yang tidak tahan lama; member plus biasa habis hanya dalam beberapa ronde percakapan.
>
> Harga API sudah naik menjadi input $10/M dan output $50/M, dan pihak resmi secara jelas mengingatkan bahwa di Work / Codex, Astra akan menghabiskan kuota lebih cepat daripada Sol.
>
> Di sinilah keunggulan Pi mulai terasa.
>
> Ada yang khusus menguji Pi, OpenCode, dan Codex; kerangka default Pi di awal hanya sekitar 1,1–1,4K Token.
>
> Dalam satu rangkaian tugas MCP:
>
> 1. Total Input Token lebih sedikit 81%
> 2. Input yang tidak ter-cache lebih sedikit 55,5%
> 3. Jumlah permintaan ke model lebih sedikit 53%
>
> Dulu desain minimalis seperti ini lebih sering hanya membantu menghemat biaya API.
>
> Tapi pada model seperti GPT-6, saya rasa maknanya jadi lebih besar
>
> Makin mahal model dan makin kuat penalarannya, Harness-nya justru makin tidak seharusnya gemuk; bagaimanapun, bisa dipakai dalam jangka panjang adalah yang benar-benar kita pedulikan. Kalau tidak, model sebagus apa pun habis dalam dua ronde, dan orang biasa sama sekali tidak sanggup memakainya.
>
> Jadi setelah GPT-6 keluar, saya justru makin optimistis terhadap Agent minimalis seperti Pi.

<p class="tweet-media-note">Postingan asli memuat gambar atau video; materi media akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2096391875913744841">

## GPT-6 makin mahal, model lokal makin penting🔥.

<span class="tweet-meta">2026-09-06 08:15:46 · Teks asli</span>

> GPT-6 makin mahal, model lokal makin penting🔥.
>
> Belakangan di X, saya menemukan kombinasi yang cukup menarik:
>
> Pi + Qwen3.8 27B.
>
> Dulu masalah terbesar model lokal bukanlah tidak bisa dijalankan, melainkan setelah dimasukkan ke Agent, rasanya hanya bisa mengobrol; untuk benar-benar bekerja bersama Agent selalu terasa tidak bertenaga.
>
> Tapi Qwen3.8 27B mulai agak berbeda.
>
> 27B Dense, konteks asli 256K, dan generasi ini jelas memperkuat kemampuan Coding dan Agent.
>
> Ditambah dengan Harness minimalis seperti Pi:
>
> 1. Default-nya hanya 4 tool inti, model lokal tidak perlu lebih dulu mengunyah setumpuk definisi Tool
>
> 2. System Prompt cukup ringan, lebih bersahabat bagi Prefill yang paling mahal di model lokal
>
> 3. Ollama dan llama.cpp bisa disambungkan langsung, model sepenuhnya berjalan di mesin sendiri
>
> 4. Tidak ada tagihan API, tidak ada kecemasan kuota, benar-benar bisa membuat Agent bekerja perlahan di latar belakang
>
> Tapi dari sisi skala, jelas tidak bisa menandingi GPT-6; meski begitu, keunggulannya juga tidak bisa Anda abaikan.
>
> Sebagian besar aktivitas harian saya adalah mengubah file, menjalankan script, merapikan proyek, dan Coding sederhana; model lokal Qwen sepenuhnya sanggup.
>
> Kalau benar-benar bertemu masalah yang tidak bisa diselesaikan, baru /model beralih ke GPT-6.
>
> Dengan begitu, GPT-6 bukan lagi model default Pi, melainkan lebih seperti seorang ahli yang sesekali dipanggil untuk menyelesaikan soal sulit.
>
> Pi + Qwen3.8 lokal bertanggung jawab bekerja, GPT-6 bertanggung jawab menjadi cadangan.
>
> Saya merasa ini mungkin lebih dekat dengan cara memakai Agent yang saya inginkan, dibanding sekadar mengejar satu model terkuat.

</article>

<article class="tweet-entry" id="post-2096515795815633403">

## GPT-6 makin kuat, Pi Agent saya justru makin bersih🔥

<span class="tweet-meta">2026-09-06 16:28:11 · Teks asli</span>

> GPT-6 makin kuat, Pi Agent saya justru makin bersih🔥
>
> Pi yang saya pakai sehari-hari sebenarnya sudah sangat bersih, tapi sekarang kemampuannya makin kuat, ia justru makin bersih; mungkin terdengar agak berlawanan dengan intuisi.
>
> Dulu kemampuan model belum cukup kuat, jadi kita terbiasa terus menambah barang ke dalam Agent: Skill, AGENTS.md, berbagai Prompt, serta yang mungkin sudah semua orang pakai, PowerSkill atau satu set skill lengkap.
>
> Tapi setelah GPT-6 Astra keluar, Eric Provencher dari OpenAI Codex secara khusus menyebut satu hal:
>
> Aturan yang dulu membantu model lama agar tidak banyak salah, sekarang mungkin sudah mulai menahan laju model baru.
>
> Panduan Astra resmi OpenAI sebenarnya juga mengingatkan bahwa GPT-6 lebih sensitif terhadap instruksi di Skill dan AGENTS.md dibanding sebelumnya; kalau di dalamnya ada aturan yang usang, bertentangan, atau ditulis terlalu kaku, ia justru akan menjalankannya dengan patuh.
>
> Jadi kalau Anda bersiap beralih ke GPT-6, saya rasa Anda bisa sekalian melakukan bersih-bersih besar pada Agent Anda:
>
> 1. Hapus aturan berulang yang dulu ditulis agar model tidak berbuat bodoh, misalnya mewajibkan membaca seluruh repositori atau menjalankan banyak tes setiap kali.
>
> 2. Buat deskripsi Skill sesingkat mungkin, cukup katakan kapan harus dipakai; alur, dokumentasi, dan script yang sebenarnya dimuat saat diperlukan.
>
> 3. Tinjau ulang AGENTS.md, terutama aturan yang sudah dipakai setengah tahun sampai setahun sehingga Anda sendiri lupa mengapa dulu ditambahkan.
>
> Hal-hal ini makin dipakai makin kembali ke esensinya, yaitu menyerahkan semua kemampuan kepada AI; ke depannya makin kuat kemampuan AI, makin tidak diperlukan ikatan-ikatan ini. Beri ia tempat yang bersih-bersih, lalu biarkan ia beroperasi sendiri.

</article>

<article class="tweet-entry" id="post-2097249000252649861">

## DeepSeek meluncurkan seri model baru: deepseek-v4.1-flash-expires-on-0910

<span class="tweet-meta">2026-09-08 17:01:41 · Teks asli</span>

> DeepSeek meluncurkan seri model baru: deepseek-v4.1-flash-expires-on-0910
>
> Diklaim: memakai struktur model baru, dukungan multimodal native, kemampuan lebih kuat, lebih cepat, dan biaya lebih rendah.
>
> Pertama kali saya langsung menjalankannya di Pi Agent, rasanya 300 token/s pun masih kurang; satu kata saja, cepat
>
> Langkah pemakaian: langsung ganti nama model deepseek-v4-flash menjadi deepseek-v4.1-flash-expires-on-0910, lalu bisa langsung dipakai
>
> Uji pelikan naik sepeda yang baru saja dijalankan👇🏻

</article>

## Selanjutnya

Setelah menyelesaikan tahap ini, lanjutkan membaca [Tahap 3　Memahami Session dan Konteks](/tweets/03-sessions-context).

