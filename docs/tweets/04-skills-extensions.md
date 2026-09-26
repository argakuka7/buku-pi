---
title: Membangun Skill dan Extension Anda Sendiri
description: Catatan belajar Pi tahap 4, memuat 22 tweet asli.
outline: false
prev:
  text: Memahami Session dan Konteks
  link: /tweets/03-sessions-context
next:
  text: Membuat Subagent Belajar Berbagi Tugas
  link: /tweets/05-subagents-research
---

<span class="library-status">Catatan belajar pribadi · STAGE 04</span>

# Membangun Skill dan Extension Anda Sendiri

**Masalah yang perlu diselesaikan pada tahap ini**　Beralih dari memakai plugin siap pakai menuju merapikan metode dan mengendalikan jumlah, lalu menyelesaikan kebutuhan nyata Anda sendiri.

Awalnya saya lebih peduli soal plugin apa yang harus dipasang, kemudian mulai membedakan Skill, Extension, dan Package, serta mulai membersihkan konflik dan menulis sendiri fitur pengingat. Perubahan itulah yang saya pertahankan di halaman ini.

Halaman ini memuat 22 tweet asli. Teksnya berasal dari arsip pribadi di Google Drive, tautan x.com dan short link media t.co sudah dihapus. Versi dan status produk yang disebut dalam tweet asli mengacu pada tanggal publikasinya.

<article class="tweet-entry" id="post-2087104117533814998">

## Belakangan Pi Agent sedang ramai, saya merekomendasikan beberapa plugin dan proyek yang biasa saya pakai:

<span class="tweet-meta">2026-08-11 17:09:32 · Tweet asli</span>

> Belakangan Pi Agent sedang ramai, saya merekomendasikan beberapa plugin dan proyek yang biasa saya pakai:
>
> Pi Package Catalog: marketplace plugin resmi
> pi-web-access: halaman web / GitHub / PDF / YouTube
> pi-subagents: banyak Agent, tugas paralel
> PI WEB: kontrol Web dari jarak jauh
> pi-telegram: mengendalikan Pi lewat Telegram
> Plannotator: visualisasi Plan / Diff / Review
> pi-hermes-memory: memori jangka panjang bergaya Hermes
>
> Kalau hanya boleh merekomendasikan tiga, saya harap Anda memasang 3 ini: pi-web-access + pi-subagents + PI WEB

</article>

<article class="tweet-entry" id="post-2091445724420747389">

## Setelah terbiasa dengan Pi Agent, saya hampir meninggalkan MCP; sekarang saya lebih suka memasang Skill ke Pi, lalu menyerahkan sisa tugas ke CLI.

<span class="tweet-meta">2026-08-23 16:41:32 · Tweet asli</span>

> Setelah terbiasa dengan Pi Agent, saya hampir meninggalkan MCP; sekarang saya lebih suka memasang Skill ke Pi, lalu menyerahkan sisa tugas ke CLI.
>
> Pada dasarnya MCP terlalu berat. Deskripsi tool dulu memakan context, lalu model menebak parameter, konsumsi Token habis, kadang masih salah panggil. Pi sudah punya read / bash / edit / write, banyak hal cukup dibiarkan membaca bantuan perintah lalu langsung menjalankannya, malah lebih stabil.
>
> Skill juga lebih cocok, saat mulai hanya nama dan deskripsi yang masuk, teks lengkapnya baru dimuat saat benar-benar dipakai.
>
> Beberapa ini yang biasa saya pakai:
>
> Direktori Skill: ~/.pi/agent/skills/ dan .pi/skills/ di dalam proyek gh /
> git CLI: mengajukan PR, melihat diff, lebih bersih daripada membungkusnya lagi dengan lapisan GitHub MCP
>
> ponytail: pakai ulang kode yang sudah ada dulu, kurangi membuat banyak file baru commit-
>
> helper / pr-helper: commit dan PR lewat Skill + gh pi-context-view: setiap kali menambah sesuatu, lihat dulu berapa banyak context yang dimakannya pi-agent-
>
> skill-evolution: tugas rumit yang sudah selesai bisa diendapkan menjadi Skill pi-web-access: hanya dinyalakan saat mencari web, GitHub, PDF
>
> Kalau hanya menyisakan tiga: direktori Skill proyek + gh CLI + pi-context-view
>
> Kalau ada kebutuhan web baru tambah pi-web-access, saya makin suka rasa ringkas seperti ini, meski perangkat lunaknya kecil dan pluginnya sedikit, tapi menyelesaikan pekerjaan sama sekali tidak asal-asalan.

</article>

<article class="tweet-entry" id="post-2091729625483452813">

## Merekomendasikan beberapa plugin keamanan yang wajib dipasang pemula saat memakai Pi Agent!

<span class="tweet-meta">2026-08-24 11:29:39 · Tweet asli</span>

> Merekomendasikan beberapa plugin keamanan yang wajib dipasang pemula saat memakai Pi Agent!
>
> Karena Pi Agent secara bawaan hampir tidak punya sandbox, dan juga tidak punya penilaian izin yang lengkap.
>
> Tapi jangan menganggap ini bug, sebenarnya memang begitu desainnya. Pi secara bawaan hanya punya empat tool, read, write, edit, bash, izinnya sama dengan pengguna Anda saat ini. Begitu model ingin menghapus file, mengubah `.env`, menjalankan `sudo`, ia benar-benar bisa melakukannya. Bagi yang berpengalaman ini disebut bersih, bagi pemula ini disebut berbahaya.
>
> Jadi saya biasanya meminta orang yang baru mulai memasang beberapa pelindung dulu, jangan langsung telanjang.
>
> 1. safe-coder
> Paket pemula serba ada. Perintah berbahaya akan menanyai Anda dulu, `.env`, `.git`, `node_modules` bisa ditahan dulu. Pemula sebaiknya memasang ini lebih dulu, paling praktis.
>
> 2. pi-permission-gate
> Pendekatan yang sama seperti contoh resmi. `rm -rf`, `sudo`, mengubah sembarangan di path yang dilindungi, munculkan konfirmasi dulu sebelum dieksekusi. Kalau tidak ada antarmuka, secara bawaan langsung diblokir.
>
> 3. pi-protected-paths
> Khusus melindungi kunci rahasia dan file sensitif. `.env`, kredensial, konfigurasi umum, baca-tulis semuanya diblokir, agar model tidak keceplosan membocorkan kunci atau merusaknya.
>
> 4. pi-sandbox
> Lebih mendekati sandbox sungguhan. File dan jaringan bisa dikendalikan lewat whitelist, di dalam sesi juga bisa dinyalakan dan dimatikan. Lebih menyeluruh daripada sekadar konfirmasi pop-up, tapi konfigurasinya juga lebih banyak.
>
> 5. pi-permission-modes
> Seperti tuas level izin. Konfirmasi bawaan, menerima hasil edit, lebih otomatis, semuanya bisa diganti; perintah yang sangat berbahaya langsung dikunci mati. Cocok untuk orang yang ingin menyesuaikan kekencangan sambil memakainya.
>
> Saya sangat menyarankan urutan pemasangan bagi pemula: safe-coder dulu, lalu tambahkan pi-protected-paths. Kalau benar-benar ingin mengisolasi lingkungan, baru pasang pi-sandbox.
>
> Pi sendiri sebenarnya sudah cukup bersih, tapi bersih tidak berarti aman.
>
> Pasang dulu pagar pelindungnya, baru bermain Skill dan plugin, keamanan itu yang utama.

</article>

<article class="tweet-entry" id="post-2091796705859797430">

## Berbagi solusi Pi untuk perangkat jarak jauh, plugin resmi + UU Remote, pada dasarnya sudah cukup

<span class="tweet-meta">2026-08-24 15:56:13 · Tweet asli</span>

> Berbagi solusi Pi untuk perangkat jarak jauh, plugin resmi + UU Remote, pada dasarnya sudah cukup
>
> Saya rekomendasikan lima plugin ini:
>
> 1. SSH Extension resmi
> Menjalankan Pi secara lokal, mengoperasikan file, Shell, Docker di VPS dari jarak jauh. Paling mendekati "saya masih di komputer sendiri, tapi tangan saya menjangkau server".
>
> 2. pi-mobile
> Ponsel atau browser langsung mengambil alih Session Pi, bisa melihat Tool Call, mengganti model, melanjutkan percakapan. Cocok saat Anda tidak sedang di depan komputer tapi ingin terus mengawal tugas.
>
> 3. PI WEB
> Pi menetap di server, banyak perangkat masuk ke satu bidang kendali yang sama lewat browser. Lebih mendekati workbench jarak jauh lengkap, bukan sekadar tersambung sebentar.
>
> 4. remote-pi
> Plugin komunitas, fokus pada kendali jarak jauh dari ponsel, ke depannya masih mengarah ke banyak Pi dan Agent Mesh. Agak eksperimental, tapi arahnya layak diikuti.
>
> 5. tmux + Tailscale + Pi
> Rangkaian paling sederhana. Pi berjalan di server, Mac atau ponsel kapan saja SSH kembali, lalu lanjut mengerjakan Session yang sama. Tidak bergantung pada trik macam-macam, stabil.
>
> Saya pada dasarnya memakai SSH Extension resmi + pi-mobile, sebelumnya lewat cara Tailscale menembus jaringan internal, tapi masih merepotkan dan node resminya juga belum tentu stabil, sekarang cukup memakai plugin resmi dan server VPS saja.
>
> Kalau ada masalah yang benar-benar tidak bisa diselesaikan, bisa dipakai UU Remote untuk mengatasinya, pada dasarnya dengan kombinasi ini, kebutuhan jarak jauh 99 persen orang sudah terpenuhi!

</article>

<article class="tweet-entry" id="post-2092408367432319052">

## Saat memakai Pi Agent jangan hanya ingat memasang plugin, Skill kadang justru lebih berguna🔥

<span class="tweet-meta">2026-08-26 08:26:44 · Tweet asli</span>

> Saat memakai Pi Agent jangan hanya ingat memasang plugin, Skill kadang justru lebih berguna🔥
>
> Saya merekomendasikan beberapa Pi Skill yang cukup praktis ini:
>
> browser-tools: mengendalikan browser Chrome, membuka halaman web, mengekstrak konten, mengambil tangkapan layar, menjalankan operasi di halaman
>
> brave-search: pencarian web + ekstraksi konten, melengkapi Pi dengan kemampuan pencarian daring paling dasar
>
> youtube-transcript: langsung membaca subtitle video YouTube, sangat berguna untuk merangkum video dan riset materi
>
> gmcli: menyambung ke Gmail, agar Pi bisa mencari email, melihat email, mengelola draf dan label
>
> gdcli: menyambung ke Google Drive, agar Pi bisa mencari, mengelola, dan berbagi file di cloud
>
> transcribe: mengubah audio menjadi teks, cocok untuk rekaman rapat, materi video, perapian konten suara
>
> Ini juga hanya berdasarkan pekerjaan dan pilihan harian saya, lingkungan kerja setiap orang berbeda, jadi pasang sesuai kebutuhan, menjaga Pi Agent tetap ringkas seperti seharusnya itu yang paling utama.
>
> Saya juga tahu sebagian besar sebenarnya sudah diselesaikan oleh plugin, tapi kadang kombinasi Skill+CLI benar-benar menyenangkan😂

</article>

<article class="tweet-entry" id="post-2092436179228713122">

## Belakangan Pi sedang ramai, tapi banyak orang langsung hanya memasang Extension. Padahal Skill justru bagian yang lebih layak digeluti.

<span class="tweet-meta">2026-08-26 10:17:15 · Tweet asli</span>

> Belakangan Pi sedang ramai, tapi banyak orang langsung hanya memasang Extension. Padahal Skill justru bagian yang lebih layak digeluti.
>
> Pi mengikuti standar Agent Skills, banyak Skill dari Claude Code dan Codex bisa langsung dipakai, tidak perlu terpaku pada ekosistem Pi sendiri.
>
> Sumber yang cukup sering saya lihat:
>
> Pi Skills
> Kumpulan yang dipelihara Mario sendiri. Ada pencarian web, browser, transkripsi YouTube, suara ke teks, layanan Google, paling aman mulai dari selera resmi.
>
> Anthropic Skills
> Repositori resmi besar yang paling layak dikoleksi saat ini. Kemampuan perkantoran dan front-end seperti PDF, DOCX, PPTX, XLSX, pengembangan Web cukup lengkap, dokumentasi resmi Pi juga merekomendasikannya langsung.
>
> Pencarian dan papan peringkat Skill yang paling enak dipakai sekarang. Mencari berdasarkan popularitas, dan sudah mendukung pemasangan ke Pi secara native, lebih praktis daripada mengubek-ubek GitHub.
>
> mattpocock/skills
> Lebih condong ke skenario engineering nyata. Tidak mengejar serba besar dan lengkap, alur pengembangan dipecah menjadi banyak Skill kecil, misalnya menantang kebutuhan dulu, baru TDD, dipakai terasa lega.
>
> Awesome Agent Skills
> Cocok untuk terus menggali hasil komunitas. Review kode, pengujian, Debug, keamanan, refactoring, penulisan, kategorinya cukup lengkap, pakai saja sebagai katalog.
>
> Kalau hanya mengoleksi tiga: Pi Skills + Anthropic Skills +
>
> Skill di Pi dimuat sesuai kebutuhan, biasanya hanya nama dan deskripsi yang masuk ke Context, baru membaca SKILL.md lengkap saat benar-benar dipakai. Jauh lebih bersih dibanding langsung memasukkan puluhan tool ke Agent, dan lebih hemat Token.
>
> Memasang Extension sebanyak apa pun tidak sebaik memahami dulu beberapa Skill yang benar-benar akan dipakai berulang.

<p class="tweet-media-note">Tweet asli memuat gambar atau video, materi medianya akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2092630793277632999">

## Di mana sebenarnya batas antara plugin Pi dan fitur inti?

<span class="tweet-meta">2026-08-26 23:10:34 · Tweet asli</span>

> Di mana sebenarnya batas antara plugin Pi dan fitur inti?
>
> Belakangan saya terus memikirkan satu pertanyaan: kemampuan apa yang harus masuk ke Core, dan kemampuan apa yang harus selamanya diserahkan ke Extension?
>
> Saya rasa ini bagian paling menarik selama saya meneliti Pi.
>
> Pi selalu bersikeras intinya cukup ringan, kemampuan apa yang dibutuhkan tinggal ditambahkan sendiri, tapi seiring ekosistem makin besar, Sub-agent, Sandbox, Memory, Plan Mode, Remote Session mulai makin umum.
>
> Sering kali orang mendiskusikan "perlukah menambah fitur", tapi justru menurut saya tiga batas besar ini yang lebih perlu diperjelas:
>
> 1. Kemampuan yang wajib ada agar Agent bisa berjalan, harus masuk Core
>
> Misalnya Session, Context, Tool Call, Compaction, semua itu memang dasar agar Agent bekerja normal.
>
> 2. Kemampuan yang menentukan keamanan dan aturan ekosistem, setidaknya Core harus menyediakan standar
>
> Misalnya izin, Session jarak jauh, komunikasi Sub-agent, kalau setiap Extension merancang sendiri, akhirnya malah makin kacau.
>
> 3. Bagaimana cara bermainnya secara spesifik, tetap serahkan ke Extension
>
> Memory pakai yang mana, Plan Mode dirancang bagaimana, Sub-agent bagaimana dibagi tugas, tool pencarian pakai yang mana, semua ini justru saya harap Pi tidak pernah memutuskan untuk pengguna.
>
> Saya membaca banyak materi resmi dan penjelasan proyek open source, semuanya menjalankan minimalisme sampai tuntas, dan di banyak tempat pihak resmi menyatakan tidak akan menambah fitur yang tidak perlu ke dalam inti.
>
> Ada satu kalimat yang sangat saya ingat, apa pun yang bisa diselesaikan dengan plugin tidak akan pernah menyentuh inti, saya rasa inilah hal yang paling sulit dipertahankan Pi, dan paling layak diharapkan oleh kami para developer.

</article>

<article class="tweet-entry" id="post-2093212359552893008">

## Pi Package mungkin fitur yang paling sering terlewatkan🔥

<span class="tweet-meta">2026-08-28 13:41:31 · Tweet asli</span>

> Pi Package mungkin fitur yang paling sering terlewatkan🔥
>
> Banyak orang mungkin hanya tahu Skill, tapi belum teliti mempelajari fitur Pi Package ini, yang dipecahkannya bukan masalah berbagi satu skill, melainkan mengemas kebiasaan, konfigurasi, dan cara pemakaian Anda sekaligus.
>
> Ia memungkinkan Anda membagikan Pi Agent Anda secara utuh kepada orang yang Anda inginkan!
>
> 1. Dulu menambah kemampuan itu terpisah-pisah
>
> Di sini menaruh satu penjelasan, di sana mengubah satu pengaturan, makin lama Anda sendiri tidak bisa menjelaskan apa saja yang menumpuk di lingkungan ini. Package mengumpulkannya menjadi satu, setelah dipasang langsung terlihat daftarnya, dan semuanya mendadak jadi jelas.
>
> 2. Ia lebih mirip kotak peralatan yang disiapkan untuk suatu skenario
>
> Bukan mengoleksi "wajib pasang" di marketplace. Untuk riset siapkan pencarian dan memori, untuk mengurus mesin siapkan akses jarak jauh dan log. Satu paket mewakili satu cara pakai, ganti skenario tinggal ganti daftar, lingkungan utama tidak makin berat.
>
> 3. Bisa ditambah, juga bisa dilepas
>
> Ini sebenarnya sangat krusial. Hari ini mencoba satu bagian, besok melepasnya kalau tidak cocok, tidak akan membuat seluruh Pi menjadi kondisi yang takut diutak-atik. Bisa dipulihkan, barulah berani benar-benar menumpuknya.
>
> 4. Jadi rasanya itu muncul dari daftar
>
> Model semua orang bisa menyambungnya. Yang benar-benar mulai berguna adalah untuk hal apa saja Anda membuat paket dan kebiasaan apa yang Anda tinggalkan. Begitu daftarnya pendek, barulah terasa seperti cara kerja Anda sendiri, bukan sekadar Coding Agent bawaan.
>
> Fitur Pi benar-benar tidak habis untuk diteliti, selalu bisa menemukan implementasi menarik di komunitas dan pihak resmi, sebenarnya dulu saya juga berpikir bagaimana membagikan Agent saya, tidak menyangka pihak resmi sudah menyediakannya bawaan.

<p class="tweet-media-note">Tweet asli memuat gambar atau video, materi medianya akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2093945888637174062">

## Lama-kelamaan, saya mulai membiarkan Pi memodifikasi dirinya sendiri🔥

<span class="tweet-meta">2026-08-30 14:16:18 · Tweet asli</span>

> Lama-kelamaan, saya mulai membiarkan Pi memodifikasi dirinya sendiri🔥
>
> Belakangan saya mulai memakai Pi saya dengan cara lain.
>
> Dulu saat Agent kekurangan suatu fitur, reaksi pertama saya biasanya mencari plugin dan menelusuri GitHub, melihat apakah ada orang lain yang sudah membuatnya.
>
> Tapi sekarang berbeda, sering kali yang saya temukan belum tentu sesuai keinginan, jadi perlahan saya mulai membiarkannya menulis pluginnya sendiri.
>
> Pi sendiri sudah ringan, jadi ringkasnya satu kalimat: apa yang Anda kekurangan, Anda sendiri yang melengkapinya.
>
> Saya mulai mengujinya dengan kebutuhan keamanan yang sangat sederhana.
>
> Saat Agent biasa mengoperasikan terminal sendiri, saya tetap ingin beberapa operasi berisiko tinggi harus melewati konfirmasi saya, jadi saya langsung memberi tahu Pi kebutuhannya, membiarkannya meneliti sendiri bagaimana mewujudkannya.
>
> Ternyata seluruh prosesnya jauh lebih sederhana dari yang saya bayangkan:
>
> 1. Saya hanya bertugas menyampaikan kebutuhan: operasi mana yang risikonya cukup tinggi dan perlu konfirmasi saya lebih dulu.
>
> 2. Pi mencari cara mewujudkannya sendiri: ia akan memahami mekanisme ekstensinya, menilai kemampuan ini sebaiknya diletakkan di lapisan mana.
>
> 3. Setelah selesai ia mengujinya sendiri: kalau tidak cocok terus diperbaiki, sampai menjadi fitur yang benar-benar ingin saya pertahankan jangka panjang.
>
> Menurut saya pendekatan ini jauh lebih menarik daripada "merekomendasikan beberapa plugin Pi".
>
> Karena fitur yang benar-benar dibutuhkan setiap orang sebenarnya berbeda.
>
> Plugin yang sudah dibuat orang lain menyelesaikan masalah orang lain; membiarkan Pi menulis sesuai kebiasaan pemakaian Anda, yang akhirnya tersisa barulah lebih mirip alat milik Anda sendiri.
>
> Saya menduga pasti ada yang bilang ini membuat roda yang sudah ada, tapi yang lebih ingin saya katakan, bukankah inilah makna kebebasan yang diberikan Pi kepada Anda
>
> Tidak ada dua keping salju yang benar-benar sama di dunia, coba saja sendiri, saya rasa Anda juga akan merasa seru

<p class="tweet-media-note">Tweet asli memuat gambar atau video, materi medianya akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2094324181785796635">

## Saat bermain Pi, saya melihat banyak orang memasang banyak plugin, tapi menulis kode tetap berantakan🔥

<span class="tweet-meta">2026-08-31 15:19:30 · Tweet asli</span>

> Saat bermain Pi, saya melihat banyak orang memasang banyak plugin, tapi menulis kode tetap berantakan🔥
>
> Sebelumnya saya berbagi kombinasi plugin yang biasa dipakai untuk Pi, merekomendasikan yang terkait jaringan, kendali jarak jauh, dan perlindungan keamanan, responsnya sangat baik, hari ini saya berbagi beberapa plugin yang istimewa.
>
> Kali ini saya tidak merekomendasikan plugin yang bisa terhubung jaringan, saya hanya merekomendasikan plugin yang berulang kali saya pakai untuk menulis kode.
>
> 1. ponytail
> Pakai ulang kode yang sudah ada dulu, kurangi membuat banyak file baru.
> Pi

<p class="tweet-media-note">Tweet asli memuat gambar atau video, materi medianya akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2095028261482827875">

## Hal yang wajib Anda pelajari saat memakai Pi, belajar menulis AGENT.md dengan baik🔥

<span class="tweet-meta">2026-09-02 13:57:15 · Tweet asli</span>

> Hal yang wajib Anda pelajari saat memakai Pi, belajar menulis AGENT.md dengan baik🔥
>
> Banyak orang saat membuat proyek sama sekali tidak memedulikannya, atau memang tidak punya file AGENTS.md, karena menganggapnya hanya dokumen prompt.
>
> Ini mungkin alasan Pi Anda tidak bekerja sesuai instruksi Anda, aturan yang diedit langsung lupa begitu berbalik, setiap kali harus diingatkan ulang. AGENTS.md bukan sekadar dokumen sederhana, melainkan pedoman tertinggi seluruh proyek.
>
> Di komunitas sudah muncul dua kubu, ada yang sama sekali tidak menulis, ada yang menulis terlalu penuh, semua aturan dimasukkan, sehingga belum mulai dipakai, konteks Pi sudah penuh.
>
> Saya merangkumnya menjadi tiga poin berikut:
>
> 1. Secara global pertahankan hanya kebiasaan
>
> AGENT.md di direktori root berlaku untuk semua proyek. Di sini cocok menaruh kebiasaan pribadi Anda. Misalnya cara penulisan pesan commit, tidak perlu bertele-tele, informasi dan operasi yang tidak pasti sebaiknya ditanyakan lebih dulu.
>
> Jangan menuliskan struktur direktori framework tertentu atau perintah pengujian tertentu ke dalamnya. Karena tidak setiap proyek perlu tahu aturan khusus proyek tersebut.
>
> 2. Di dalam proyek simpan jebakan yang berulang kali terulang
>
> Setelah direktori root, kita masuk ke file AGENT.md di direktori proyek, cakupan berlakunya menyempit ke satu proyek saja.
>
> Yang layak ditinggal biasanya terbagi tiga jenis. Perintah pemeriksaan yang sering dipakai. Direktori yang sama sekali tidak boleh disentuh. Pengalaman jatuh yang pernah Anda alami, tapi tetap berulang dilanggar.
>
> Yang tidak layak ditinggal lebih banyak. Dokumentasi orientasi, tulisan panjang arsitektur, daftar plugin, konten hasil salin dari tempat lain.
>
> Sebenarnya ada cara sederhana. Kalau Anda sudah tiga kali berturut-turut memberi tahu Pi aturan atau batasan yang sama, Anda bisa menambahkannya ke file penjelasan proyek, lalu perlahan mengendapkannya dan mengoptimalkannya.
>
> 3. Buat AGENT.md sekecil mungkin
>
> Saat menulis file AGENT.md, pegang satu prinsip yaitu menjaga AGENT.md tetap sebersih dan serapi mungkin, sebaiknya tidak lebih dari 300 baris, meski tidak wajib.
>
> Tapi terlalu banyak konten dalam satu file AGENT.md juga mudah membuat perhatian AI terpecah.
>
> Selama Anda memperhatikan tiga hal di atas, pada dasarnya AGENT.md Anda sudah memenuhi standar, selanjutnya tinggal menyempurnakan dan mengoptimalkan sesuai detail proyek.
>
> Jangan menganggap ini hal yang terlalu dasar, tapi ini benar-benar penting👍🏻

<p class="tweet-media-note">Tweet asli memuat gambar atau video, materi medianya akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2095051345606943162">

## Bermain Pi bukan soal kekurangan plugin, melainkan membersihkan hal yang tidak terpakai di repositori🔥

<span class="tweet-meta">2026-09-02 15:28:59 · Tweet asli</span>

> Bermain Pi bukan soal kekurangan plugin, melainkan membersihkan hal yang tidak terpakai di repositori🔥
>
> Sekarang saya menyadari satu hal, makin ditelusuri marketplace plugin makin lengkap, tapi saat benar-benar bekerja malah makin berantakan. Saat itulah saya sadar bukan model yang mendadak bodoh, melainkan Pi saya yang menjadi bengkak.
>
> Saat memakai Claude Code, saya pernah sekali kena jebakan rangkaian Skill Superpowers itu. Waktu itu terasa sangat profesional, perencanaan, TDD, review, debugging seluruh alurnya ada, dan sangat lengkap, seolah AI saya akhirnya punya kesadaran engineering.
>
> Tapi makin lama dipakai makin terasa terlalu berat, tugas belum mulai konteks sudah dipenuhi Skill-Skill itu, apalagi saat memakai model Flash yang konteksnya lebih kecil, rasanya makin jelas.
>
> Baru sekarang saya sadar, membersihkan ternyata juga hal yang wajib dilakukan:
>
> 1. Skill bergaya konstitusi engineering
>
> Menyolder metodologi lengkap ke lingkungan bawaan sama dengan mengadakan pelatihan setiap ronde. Perencanaan boleh ada, pengujian boleh ada, tapi itu manual untuk jenis tugas tertentu, bukan kepribadian Agent ini.
>
> Sekarang saya hanya menyalakannya saat benar-benar ingin mengikuti alur itu. Sehari-hari mengubah fungsi, melengkapi pengujian, memeriksa error, tidak perlu bersumpah iman engineering dulu.
>
> 2. Subagent yang dipasang begitu mulai
>
> Core Pi sengaja tidak menaruh lapisan ini. Setelah marketplace paket melengkapinya, banyak orang hari pertama sudah paralel. Satu untuk mencari bahan, satu untuk meninjau kode sumber, satu lagi untuk menjalankan pengujian, sesi utama berubah menjadi pusat penjadwalan.
>
> Pekerjaannya belum cukup rumit untuk berbagi peran, Context sudah berpindah tangan di antara beberapa peran. Saya kemudian mengubahnya menjadi satu Session sampai selesai, hanya memecah ketika jelas bisa paralel dan hasilnya mudah digabungkan. Kebanyakan waktu, bercabang cukup pakai pohon percakapan.
>
> 3. GitHub MCP
>
> Melihat diff, mengajukan PR, menyamakan pesan commit, git dan gh di terminal biasanya lebih stabil. MCP memasukkan deretan panjang deskripsi tool ke prefix lebih dulu, parameternya masih harus ditebak model. Tagihan dan perhatian habis untuk menjelaskan tool, pekerjaan belum dimulai.
>
> Aksi repositori yang berulang, saya lebih suka merangkumnya menjadi Skill pendek, dibaca saat perlu, daripada membiarkan lapisan tool GitHub menetap.
>
> 4. Menulis tutorial ke dalam AGENTS.md
>
> File ini saat mulai akan masuk ke system prompt. Satu global, satu proyek, di perjalanan masih bisa disambung lagi. Menuliskan dokumentasi orientasi, tulisan panjang arsitektur, daftar plugin ke dalamnya sama dengan mengikuti kelas dulu setiap ronde.
>
> Sekarang saya hanya menyisakan batasan yang akan diucapkan berulang. Setelah tiga kali berturut-turut mengucapkan kalimat yang sama ke Pi, baru dipindahkan ke dalam. Perintah pemeriksaan, direktori yang tidak boleh disentuh, jebakan yang pernah dialami tapi masih terulang, boleh ditinggal. Daftar keinginan tidak ditinggal.
>
> Setelah dibongkar, saya tidak beralih ke paket lain yang lebih besar. Sehari-hari cukup cangkang kosong plus penjelasan proyek yang sangat pendek, alur yang benar-benar berulang baru dibiarkan ditulis menjadi Skill. Jaringan, review halaman, akses jarak jauh untuk melihat sekilas, dipasang saat dipakai, setelah selesai anggap tidak ada.
>
> Kalau hanya mengingat satu kalimat.
>
> Tanyakan dulu apakah hal ini perlu terlihat setiap ronde. Kalau jawabannya tidak, jangan biarkan ia berbaring di lingkungan bawaan.
>
> Fitur boleh banyak, yang menetap harus sedikit. Makin lama bermain Pi, daftar rekomendasi tidak lebih berharga daripada daftar uninstalasi.

<p class="tweet-media-note">Tweet asli memuat gambar atau video, materi medianya akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2095175082696122460">

## Saran pamungkas Pi, 1 situs web, 2 cara pakai, 3 plugin🔥

<span class="tweet-meta">2026-09-02 23:40:40 · Tweet asli</span>

> Saran pamungkas Pi, 1 situs web, 2 cara pakai, 3 plugin🔥
>
> 1. Satu situs belajar
>
> Kunjungi dulu
>
> Pasang sesuai situs resmi, cukup baca Quickstart. Setelah dipasang, lemparkan satu pekerjaan nyata ke dalamnya, kalau bisa berjalan, bisa dihentikan, dan bisa dilanjutkan, barulah langkah ini dianggap lulus. Jangan mengoleksi tutorial dulu, jangan juga menelusuri marketplace plugin dulu.
>
> 2. Dua saran pemakaian
>
> 1. Satu urusan satu Session

<p class="tweet-media-note">Tweet asli memuat gambar atau video, materi medianya akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2095793347181109415">

## Merekomendasikan plugin tata letak Pi, pi-cc-extensions

<span class="tweet-meta">2026-09-04 16:37:26 · Tweet asli</span>

> Merekomendasikan plugin tata letak Pi, pi-cc-extensions
>
> Setelah saya sendiri memakainya terasa sangat nyaman, output konten dan tata letaknya meningkat cukup banyak, kalau Anda tidak suka format output bawaan Pi, sangat saya rekomendasikan untuk mencobanya.
>
> Ia bukan sekadar mempercantik, melainkan langsung mengubah Pi menuju pengalaman membaca seperti Claude Code.
>
> Fitur utamanya:
>
> 1. Tool Call otomatis diringkas, dilipat, dan dibuka
> 2. Rich Diff untuk Edit / Write
> 3. Peningkatan Markdown, mendukung Mermaid, blok petunjuk, dan penautan
> 4. Dalam Fullscreen kartu tool bisa diklik untuk dibuka dan ditutup
> 5. Output panjang punya penanganan kembali ke bawah, Hover, penyorotan
> 5. Juga bisa melihat berapa banyak bagian yang ditempati System Prompt, Skill, Tool di dalam Context
>
> Yang terpenting, akhir Agustus masih terus diperbarui, pada dasarnya semua fitur yang saya butuhkan sudah ditambahkan, kalau satu plugin bisa menyelesaikannya, tidak akan memasang plugin lain lagi.

<p class="tweet-media-note">Tweet asli memuat gambar atau video, materi medianya akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2095842480969449940">

## Pi bisa menghasilkan UI yang bisa dikirimkan sendiri, cukup satu plugin🔥

<span class="tweet-meta">2026-09-04 19:52:40 · Tweet asli</span>

> Pi bisa menghasilkan UI yang bisa dikirimkan sendiri, cukup satu plugin🔥
>
> Plugin yang sebelumnya saya rekomendasikan bisa menyelesaikan masalah tata letak, tapi ada yang masih belum puas, jadi saya langsung mengeluarkan kartu as saya.
>
> pi-generative-ui adalah plugin yang bisa menghasilkan antarmuka UI interaktif, dalam hitungan menit membangun workbench milik Anda sendiri, dari keseluruhan pengujian, meski ada beberapa masalah kecil, tapi tidak menutupi keunggulannya.
>
> Fitur utamanya:
>
> 1. Mengubah output Pi langsung menjadi UI interaktif, mendukung HTML, SVG, JavaScript, tidak lagi hanya Markdown dan blok kode
>
> 2. Mendukung diagram dan visualisasi data, bisa memanggil Chart.js, D3, langsung menghasilkan Dashboard, grafik tren, panel data
>
> 3. Mendukung diagram arsitektur dan diagram alur, konten seperti struktur proyek, hubungan modul, alur teknis bisa langsung divisualisasikan
>
> 4. Mendukung UI Mockup dan komponen interaktif, tombol, slider, kartu, Hover, animasi semuanya bisa dihasilkan saat itu juga
>
> 5. Dirender sambil dihasilkan, saat Pi masih mengeluarkan kode, UI di jendela sudah mulai berubah secara real time, tidak perlu menunggu seluruh halaman selesai dibuat
>
> 6. Pi akan menilai sendiri kapan memerlukan UI, tugas biasa tetap lewat Terminal, baru memanggilnya saat menemui diagram, arsitektur, konten visualisasi
>
> Secara keseluruhan efeknya menurut saya sangat bagus, di bawah ada video demonstrasi yang bisa dilihat.

<p class="tweet-media-note">Tweet asli memuat gambar atau video, materi medianya akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2096573015811113279">

## Membangun workbench Pi tidak bisa selesai dalam sehari, Anda perlu mengoptimalkan dan mengiterasinya perlahan sesuai kebutuhan Anda.

<span class="tweet-meta">2026-09-06 20:15:34 · Tweet asli</span>

> Membangun workbench Pi tidak bisa selesai dalam sehari, Anda perlu mengoptimalkan dan mengiterasinya perlahan sesuai kebutuhan Anda.
>
> Belakangan saya mulai menulis Extension sendiri, saya bagikan beberapa masalah yang saya temui dan sedikit pengalaman.
>
> Sekarang ada beberapa kesan yang cukup jelas bagi saya:
>
> 1. Jangan langsung menulis Extension yang besar dan serba lengkap
>
> Ambang untuk menulis Extension di Pi sebenarnya rendah, satu file .ts sudah bisa memulai.
>
> Saya sarankan mulai menulis dari masalah kecil dulu, misalnya menambah satu perintah, atau mencegat satu operasi berbahaya, bahkan mengubah status bar di bawah Anda.
>
> Jangan langsung menulis sesuatu yang besar dan serba lengkap, karena Anda sendiri pun mungkin belum tahu kebutuhan nyata Anda.
>
> 2. Global dan Project harus benar-benar dipisahkan
>
> UI, notifikasi, Context yang umum bisa ditaruh global.
>
> Tapi deployment, operasi database, aturan khusus milik proyek sendiri, sekarang lebih suka saya taruh di direktori proyek.
>
> Kalau tidak, setelah lama dipakai yang paling merepotkan bukan kekurangan fitur, melainkan setiap kali membuka Pi, membawa banyak hal yang sama sekali tidak terpakai.
>
> 3. Tool juga bukan makin banyak makin baik
>
> Ini hal yang cukup saya perhatikan.
>
> Extension makin ditulis makin mudah menjadi serba ada, tapi yang benar-benar perlu Anda pakai atau muat sangat sedikit, kalau terlalu banyak ditulis, mudah memengaruhi konteks dan penilaian pemanggilan pi.
>
> Jadi desain yang baik sebaiknya sesingkat mungkin, tambahkan saat perlu, bahkan bisa menambahkan pengungkapan bertahap, desain di sini sebenarnya cukup mirip dengan desain minimalis Pi sendiri.
>
> 4. State dan reload lebih mudah menjebak dari yang dibayangkan
>
> Saat pengembangan /reload sangat menyenangkan, selesai diubah langsung bisa dicoba.
>
> Tapi begitu Extension mulai menyimpan state, Anda tidak bisa begitu saja mempercayai variabel di memori. Apalagi kalau nanti ingin menjalankan skenario Web, RPC, SSH, banyak cara penulisan yang harus dipertimbangkan lebih awal.
>
> Ini juga baru saya sadari perlahan setelah mulai menulis sendiri.
>
> Kalau menoleh ke belakang sekarang, saya rasa bagian paling menarik dari Pi mungkin memang bukan seberapa banyak Extension-nya.
>
> Melainkan pintu masuk yang dibuka pihak resmi untuk Anda, di mana pun Anda merasa tidak nyaman, atau merasa tidak enak dipakai, langsung bisa diubah segera.
>
> Awalnya saya juga mencari plugin ke mana-mana, lalu mulai menghapus yang duplikat, dan sekarang melengkapi sendiri beberapa fitur yang benar-benar kurang.
>
> Proses ini cukup lambat, tapi setiap kali hanya menyelesaikan satu masalah nyata, yang akhirnya tersisa malah makin mirip milik sendiri.

</article>

<article class="tweet-entry" id="post-2096641158361579563">

## Sebenarnya kalau Pi ingin mengoperasikan browser, tidak perlu memasang banyak plugin, cukup pahami beberapa ini dulu🔥

<span class="tweet-meta">2026-09-07 00:46:20 · Tweet asli</span>

> Sebenarnya kalau Pi ingin mengoperasikan browser, tidak perlu memasang banyak plugin, cukup pahami beberapa ini dulu🔥
>
> pi-browser-harness
>
> Langsung tersambung ke Chrome yang sedang Anda pakai sekarang.
> Keunggulan terbesarnya adalah bisa memakai ulang Profile, Cookie, dan status login yang ada, klik halaman web, isi formulir, tangkapan layar, unggah-unduh, melihat Console, menangkap request jaringan semuanya bisa dilakukan.
>
> Cocok untuk benar-benar memakai Pi mengerjakan tugas web sehari-hari.
>
> pi-agent-browser-native
>
> Lebih condong ke pengalaman native Pi.
>
> Lapisan bawahnya tersambung ke agent-browser, tapi dibuat menjadi Tool milik Pi sendiri, Snapshot halaman, klik, input, tangkapan layar cukup lengkap, dan khusus mengendalikan panjang output, cukup ramah terhadap Context.
> Kalau Anda cukup mementingkan minimalisme dan Token di Pi, saya akan memprioritaskan yang ini.
>
> pi-chrome
>
> Lebih ringan daripada browser-harness.
>
> Intinya menjembatani Chrome yang sudah login dengan aman kepada Pi, tidak mengejar memasukkan puluhan tool browser.
>
> Kalau kebutuhan Anda hanya membuat Pi memakai status login yang sudah ada untuk melihat halaman web dan melakukan sedikit operasi, justru ini sudah cukup.
>
> Steel Browser
>
> Jalur ini sama sekali berbeda dari beberapa di atas.
>
> Ia tidak mengoperasikan Chrome di komputer Anda, melainkan langsung memberikan Pi satu browser cloud.
>
> Sangat cocok untuk tugas latar belakang, pemantauan halaman web, pengambilan massal, komputer dimatikan pun tidak berpengaruh. Kalau ingin membuat Browser Agent yang benar-benar berjalan jangka panjang, bisa menyoroti yang ini.
>
> pi-browser-cdp-extension
>
> Cukup cocok untuk developer.
> Langsung memberikan Pi kemampuan mengeksekusi browser melalui Chrome CDP, strukturnya sederhana, kode sumbernya juga cukup mudah dipahami.
>
> Kalau akhir-akhir ini Anda memang sedang menulis Extension sendiri, ini sangat cocok untuk meneliti bagaimana Pi membungkus kemampuan browser menjadi Tool.
>
> Saya sendiri akan memilih seperti ini:
>
> Andalan harian coba pi-browser-harness dulu, ingin menjaga Pi tetap minimalis pakai pi-agent-browser-native, otomatisasi latar belakang jangka panjang baru pertimbangkan Steel.
>
> Plugin browser juga bukan makin banyak makin baik.
>
> Pikirkan dulu dengan jelas apakah Anda ingin mengoperasikan Chrome Anda sekarang, atau ingin memberikan Pi satu browser mandiri, baru pilih solusi yang sesuai, jauh lebih sedikit memutar jalan.

</article>

<article class="tweet-entry" id="post-2096787108564513046">

## Pi sekarang bisa langsung menulis Extension untuk dirinya sendiri, belakangan saya sudah mulai membiarkannya melengkapi workbench-nya sendiri.

<span class="tweet-meta">2026-09-07 10:26:17 · Tweet asli</span>

> Pi sekarang bisa langsung menulis Extension untuk dirinya sendiri, belakangan saya sudah mulai membiarkannya melengkapi workbench-nya sendiri.
>
> Karena banyak kebutuhan kecil terlalu personal, daripada mencari plugin ke mana-mana, sekarang saya lebih suka membiarkan Pi membuatnya sendiri dulu.
>
> 1. Sampaikan langsung masalahnya ke Pi dulu
>
> Misalnya saya ingin menambah satu perintah, atau mengingatkan saya dulu setiap kali akan menjalankan jenis operasi berbahaya tertentu.
>
> Tidak perlu menulis dokumen kebutuhan yang lengkap dulu, cukup jelaskan di mana yang sekarang terasa tidak nyaman.
>
> 2. Biarkan ia membuat versi paling minimal dulu
>
> Satu file .ts sudah cukup.
>
> Selesaikan dulu masalah yang ada di depan mata, jangan langsung memasukkan halaman pengaturan, file konfigurasi, banyak Tool.
>
> 3. Setelah selesai langsung biarkan Pi memuat dan mengujinya sendiri
>
> Pada tahap pengembangan saya memuatnya sementara dulu, setelah diubah /reload untuk melanjutkan.
>
> Kalau ada error, lemparkan terus hasil terminalnya kepadanya, biarkan ia memperbaikinya sendiri.
>
> 4. Terakhir uji dengan operasi nyata sekali
>
> Misalnya yang dibuat adalah pencegatan perintah berbahaya, saya benar-benar memicunya sekali.
>
> Kalau Pi bisa memunculkan konfirmasi sebelum perintah dieksekusi, Extension ini dianggap sudah berhasil.
>
> Sekarang saya melengkapi satu per satu masalah kecil yang ditemui setiap hari seperti ini, setelah stabil baru memutuskan mana yang layak terus tinggal di workbench.

</article>

<article class="tweet-entry" id="post-2096836233679053242">

## Setelah plugin Pi dipasang banyak, belakangan saya benar-benar mulai menemui masalah kompatibilitas.

<span class="tweet-meta">2026-09-07 13:41:30 · Tweet asli</span>

> Setelah plugin Pi dipasang banyak, belakangan saya benar-benar mulai menemui masalah kompatibilitas.
>
> Belakangan karena menguji dan membagikan plugin, Pi saya cukup kelimpungan, sehingga muncul masalah konflik plugin.
>
> Lalu saya menemukan: plugin pi-extension-doctor ini, memang khusus menyelesaikan masalah ini
>
> Tidak paham juga tidak masalah, ikuti saja langkahnya:
>
> 1. Pasang dulu
>
> pi install npm:pi-extension-doctor
>
> Setelah dipasang ingat /reload lagi, untuk memuat pluginnya.
>
> 2. Jalankan di dalam Pi
>
> /extension-doctor
>
> Ia akan memindai semua Extension yang dimuat, dan menilai masalahnya.
>
> Hasil outputnya juga tidak rumit, terutama perhatikan tiga tempat:
>
> confirmed berarti sudah dipastikan ada konflik
>
> inferred berarti ditemukan kemungkinan masalah di kode sumber
>
> unknown berarti ia tidak bisa menilainya dengan aman
>
> Saya biasanya menangani masalah confirmed lebih dulu, karena ini tempat yang jelas bermasalah, jangan begitu melihat masalah langsung menghapus pluginnya, pastikan masalahnya lalu selesaikan itu baru pendekatannya.
>
> Kasus dua Extension bernama sama yang menyebabkan masalah pemuatan cukup umum, cukup matikan salah satu plugin yang tidak Anda butuhkan, lalu jalankan Doctor sekali lagi.
>
> Sebagian masalah sederhana, cukup dimatikan atau dihapus, kalau konflik dependensi versi bisa memilih langsung melakukan upgrade, tapi kalau error di tingkat kode, dan Anda tidak bisa lepas darinya, pilihan saya langsung mengunduh kode sumbernya, lalu mengubah versi sendiri😂
>
> Alamat open source saya tinggalkan di kolom komentar, jangan lupa klik bintang kecil Anda

</article>

<article class="tweet-entry" id="post-2096979610588283228">

## Baru-baru ini saya pertama kali menulis Extension sendiri untuk Pi.

<span class="tweet-meta">2026-09-07 23:11:13 · Tweet asli</span>

> Baru-baru ini saya pertama kali menulis Extension sendiri untuk Pi.
>
> Penyebabnya sederhana, saya sering menyerahkan tugas ke Pi lalu beralih mengerjakan hal lain, akibatnya kapan tugasnya selesai saya sama sekali tidak tahu.
>
> Saya bagikan keseluruhan alur berpikir saya:
>
> 1. Temukan kebutuhannya dulu
>
> Saat Pi menjalankan tugas saya sering beralih mengerjakan hal lain, tidak tahu kapan selesai.
>
> 2. Baru mulai menulis
>
> Versi pertama hanya menyelesaikan satu masalah: tugas selesai, munculkan pengingat.
>
> 3. Lakukan pengujian minimal dulu
>
> Pastikan notifikasinya bisa terpicu, tidak berulang, dan setelah diubah benar-benar berlaku.
>
> 4. Setelah bisa dipakai baru diiterasi
>
> Teksnya kalau tidak pas diubah, pengingatnya terlalu sering tambahkan ambang durasi, saat diperlukan baru tambahkan sakelarnya.
>
> 5. Baru terakhir, pelajaran terbesarnya
>
> Dulu saya selalu mencari Extension yang sudah ditulis orang lain, sekarang malah mulai memperhatikan alur kerja saya sendiri.
>
> Plugin pertama tidak perlu hebat.
>
> Selesaikan dulu satu masalah kecil yang benar-benar Anda temui setiap hari, itu sudah cukup.

</article>

<article class="tweet-entry" id="post-2096979758349496647">

## Baru-baru ini saya pertama kali menulis Extension sendiri untuk Pi.

<span class="tweet-meta">2026-09-07 23:11:49 · Tweet asli</span>

> Baru-baru ini saya pertama kali menulis Extension sendiri untuk Pi.
>
> Penyebabnya sederhana, saya sering menyerahkan tugas ke Pi lalu beralih mengerjakan hal lain, akibatnya kapan tugasnya selesai saya sama sekali tidak tahu.
>
> Saya bagikan keseluruhan alur berpikir saya:
>
> 1. Temukan kebutuhannya dulu
>
> Saat Pi menjalankan tugas saya sering beralih mengerjakan hal lain, tidak tahu kapan selesai.
>
> 2. Baru mulai menulis
>
> Versi pertama hanya menyelesaikan satu masalah: tugas selesai, munculkan pengingat.
>
> 3. Lakukan pengujian minimal dulu
>
> Pastikan notifikasinya bisa terpicu, tidak berulang, dan setelah diubah benar-benar berlaku.
>
> 4. Setelah bisa dipakai baru diiterasi
>
> Teksnya kalau tidak pas diubah, pengingatnya terlalu sering tambahkan ambang durasi, saat diperlukan baru tambahkan sakelarnya.
>
> 5. Baru terakhir, pelajaran terbesarnya
>
> Dulu saya selalu mencari Extension yang sudah ditulis orang lain, sekarang malah mulai memperhatikan alur kerja saya sendiri.
>
> Plugin pertama tidak perlu hebat.
>
> Selesaikan dulu satu masalah kecil yang benar-benar Anda temui setiap hari, itu sudah cukup.

</article>

<article class="tweet-entry" id="post-2097181979540111592">

## Proses membuat plugin di Pi sederhana, tapi masalah detail di dalamnya benar-benar banyak😂

<span class="tweet-meta">2026-09-08 12:35:22 · Tweet asli</span>

> Proses membuat plugin di Pi sederhana, tapi masalah detail di dalamnya benar-benar banyak😂
>
> Sebelumnya saya menulis artikel tentang bagaimana pemula membuat plugin pertama miliknya, saya merekam video untuk mendemonstrasikannya, ternyata penuh masalah.
>
> 1. Pertama tanyakan ke AI untuk memastikan kebutuhan Anda, setelah kebutuhan pasti baru mulai merancang plugin Anda, di sini saya bertanya ke AI dan ia memberi 10 poin, ada versi awal juga versi peningkatan iterasi.
>
> 2. Mulai menulis MVP minimal, pertama menguji notifikasi bubble paling sederhana, saat Pi menyelesaikan tugas, iTerm2 akan memberi saya notifikasi, pekerjaan selesai, sehingga saya bisa mengikuti progresnya secara real time.
>
> Di sini menemui jebakan pertama, lupa mengaktifkan izin notifikasi iTerm2, pengujian gagal.
>
> 3. Mengiterasi dan meningkatkan konten, awalnya yang dipakai bukan mekanisme notifikasi native, sehingga isi notifikasinya muncul karakter rusak, lalu dilakukan satu putaran optimasi dan iterasi.
>
> Di sini menemui masalah yang sangat canggung, di rekaman layar gelembung notifikasi terkait tidak pernah muncul, ternyata penyebabnya karena tidak mengaktifkan mirror notification di notifikasi Mac, sehingga notifikasi pop-up dibisukan.
>
> 4. Optimasi versi, melakukan beberapa optimasi versi terkait, kompatibilitas berbagai versi Mac, juga untuk lebih baik menguji kemampuan native dan masalah kompatibilitas plugin Pi, langkah ini tidak ada masalah.
>
> Dulu saat menulis plugin saya belum pernah menemui begitu banyak masalah, semuanya cukup /reload sederhana, lalu mulai dipakai, tapi sekarang saya sadar kemampuan menyelesaikan dan menemukan masalah sama pentingnya.
>
> Kalau tidak, AI tidak akan memberi tahu Anda bahwa di dalam pengaturan sistem tersembunyi begitu banyak jebakan.

</article>

## Selanjutnya

Setelah menyelesaikan tahap ini, lanjutkan membaca [Tahap 5　Membuat Subagent belajar membagi tugas](/tweets/05-subagents-research).

