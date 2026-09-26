---
title: Mengubah Pi menjadi alur kerja jangka panjang
description: Catatan belajar Pi tahap ke-6, memuat 10 teks asli tweet.
outline: false
prev:
  text: Membuat Subagent Belajar Berbagi Tugas
  link: /tweets/05-subagents-research
next:
  text: Ditulis di Luar Buku Pi
  link: /journey/
---

<span class="library-status">Catatan belajar pribadi · STAGE 06</span>

# Mengubah Pi menjadi alur kerja jangka panjang

**Masalah yang ingin dipecahkan pada tahap ini**　Menangani VPS, perangkat jarak jauh, Runtime, antarmuka, dan ekosistem, agar Pi beralih dari sekali tugas menuju penggunaan jangka panjang.

Tahap terakhir ini memuat proyek yang berjalan lama, akses jarak jauh, desktop, dan proyek ekosistem. Semuanya bukan item yang wajib dipasang; fungsinya membantu pembaca menilai di mana Pi mereka kelak dijalankan dan pekerjaan apa yang dilayani.

Halaman ini memuat 10 teks asli. Isi teks diambil dari arsip pribadi di Google Drive; alamat x.com dan tautan pendek media t.co sudah dihapus. Versi dan status produk yang disebut dalam teks asli mengacu pada tanggal publikasinya.

<article class="tweet-entry" id="post-2087410816136179911">

## Banyak orang bertanya, Pi Agent itu sebenarnya apa? Saya menganalogikannya sebagai karakter game:

<span class="tweet-meta">2026-08-12 13:28:15 · Teks asli</span>

> Banyak orang bertanya, Pi Agent itu sebenarnya apa? Saya menganalogikannya sebagai karakter game:
>
> Claude Code: karakter programmer level maksimal, perlengkapan dan skill sudah disiapkan, langsung masuk dungeon untuk bekerja.
>
> Codex: karakter tipe engineering, lebih andal menerima tugas, mengubah kode, menjalankan pengujian, dan menyelesaikan alur software engineering secara utuh.
>
> Hermes: NPC rekan yang mengikuti Anda jangka panjang, mengingat Anda, membantu menjalankan tugas terjadwal, dan memanggil berbagai tool.
>
> Sedangkan Pi Agent lebih mirip—editor karakter.
>
> Model, tool, Skill, Prompt, dan alur kerja semuanya bisa Anda kombinasikan sendiri.
>
> Anda tidak sedang memilih “apakah Agent ini enak dipakai”, melainkan menentukan:
>
> Agent seperti apa yang ingin saya bentuk.
>
> Jadi menurut saya, bagian paling menarik dari Pi bukanlah seberapa kuat ia sejak pertama dipakai, melainkan bahwa ia menyerahkan urusan “membuat Agent” kepada Anda.

</article>

<article class="tweet-entry" id="post-2092047934288474583">

## Siapa sangka, konsol Pi Agent selain untuk menulis kode ternyata juga bisa dipakai bermain game.

<span class="tweet-meta">2026-08-25 08:34:30 · Teks asli</span>

> Siapa sangka, konsol Pi Agent selain untuk menulis kode ternyata juga bisa dipakai bermain game.
>
> Saya merekomendasikan sebuah proyek seru di dalam pi-extensions: pi-arcade
>
> Tidak perlu lagi membuka jendela game lain; game kecil bisa langsung ditampilkan di antarmuka terminal Pi.
>
> Saat Agent menjalankan pengujian, mengompilasi proyek, atau menjalankan tugas panjang, Anda bisa bermain game kecil sebentar untuk menyelingi waktu luang.
>
> Saat ini ia sudah menyertakan 5 game bawaan:
>
> 1. sPIce-invaders: Space Invaders versi Pi, mengendalikan pesawat untuk menembak musuh, lengkap dengan level dan Boss.
>
> 2. picman: Pac-Man versi Pi, memakan Token di dalam labirin sambil menghindari berbagai Bug.
>
> 3. ping: game ping-pong yang mirip Pong klasik, Anda bertanding melawan Pi, yang pertama mencapai 5 poin menang.
>
> 4. tetris: Tetris versi terminal, mendukung rotasi, hold, preview, skor, dan level.
>
> 5. mario-not: game platformer bergaya Mario yang eksperimental, bisa bergerak, melompat, mengambil koin, dan menantang level yang berbeda.
>
> Setelah terlalu banyak mencoba plugin Pi yang serius, saya justru ingin mencoba proyek-proyek menarik seperti ini; di situlah letak pesona Pi.
>
> Selama Anda mau, Anda bisa melakukannya, karena Pi bebas dan terbuka—Anda bahkan bisa memakainya untuk bermain game. Bukankah sudah terasa nuansa “Minecraft”-nya? 😂

</article>

<article class="tweet-entry" id="post-2092531437002268711">

## Baru-baru ini saya melakukan hal yang agak gila: saya membuat Pi menjadi sebuah game 😂

<span class="tweet-meta">2026-08-26 16:35:46 · Teks asli</span>

> Baru-baru ini saya melakukan hal yang agak gila: saya membuat Pi menjadi sebuah game 😂
>
> Cara bermainnya sebenarnya sederhana.
> Pi dilempar ke dalam jendela konteks yang terus membengkak, dikelilingi Token dari segala arah; setiap kali bertabrakan, konteksnya bertambah sedikit.
>
> Saat Context hampir mencapai 100%, Anda hanya bisa menekan tombol dengan panik: /compact
> untuk memadatkan Token di sekitar, lalu bertahan sebentar lagi.
>
> Bahkan ada Cache Hit; setelah mengambilnya, kecepatan pertumbuhan Context bisa diturunkan sementara. Sejujurnya, pengaturan game ini pada dasarnya menggambarkan kondisi mental saya saat meneliti Pi belakangan ini—benar-benar realistis.
>
> Tetapi bagian yang paling menarik adalah: untuk game ini saya sama sekali tidak menyentuh satu baris kode pun, tidak menulis apa pun.
>
> Saya hanya melempar ide di atas kepada Gear Zero, mengatakan bahwa saya ingin game bertahan hidup tentang Pi Agent yang menghindari Token di dalam Context Window, lalu ia merencanakan sendiri, menulis kode, membuat tampilan, menyusun gameplay, dan akhirnya langsung menjalankannya di browser.
>
> Kalau dulu saya menghadapi hal seperti ini, reaksi pertama saya pasti:
> suruh AI menulis kode dulu, lalu buka proyek, lalu mengatur banyak hal, dan akhirnya menghabiskan setengah hari memperbaiki Bug.
>
> Sekarang terbalik: saya hanya bertugas mendeskripsikan bagaimana game ini seharusnya dimainkan.
> Sisanya diserahkan kepada Agent.
>
> Tentu saja, sekarang “membuat game dengan mengobrol bersama AI” sendiri sudah tidak terlalu baru. Yang kali ini benar-benar membuat saya merasa Gear Zero agak menarik justru bagian setelahnya: kalau versi pertama tidak memuaskan, Anda bisa terus mengobrol dengannya. Token terlalu sedikit, suruh ia menambah; /compact kurang memuaskan, terus ubah.
>
> Game terlalu sederhana, terus tambahkan mekanisme.
>
> Ia tidak berhenti setelah menghasilkan satu versi Demo; Deep Mode dapat terus bekerja paling lama 10 jam pada game yang sama, mengerjakannya putaran demi putaran, bahkan bisa menarik orang lain masuk, sekelompok orang mengobrol dan mengubah game yang sama bersama-sama.
>
> Menurut saya pendekatan ini cukup menarik.
>
> Karena dulu AI membuat game lebih seperti:
> “Buatkan saya sebuah game kecil.”
> Sekarang perlahan berubah menjadi:
> “Saya yang bertugas memikirkan, AI menemani saya mengerjakan game ini terus-menerus.”
> Kedua perasaan ini sebenarnya tidak sama.
>
> Selain itu, game akhirnya bisa langsung dimainkan di browser, baik di komputer maupun ponsel, tanpa perlu memasang apa pun; orang lain yang mencoba pun bahkan tidak perlu akun.
>
> Kali ini saya lebih dulu “membedah” Pi Agent; ke depannya sepertinya bisa lanjut membuat yang lebih gila lagi:
>
> Dungeon Claude Code, simulator Codex Debug, bahkan battle royale AI Agent……
> Jika di kepala Anda juga ada ide game yang aneh, Anda bisa melemparnya ke Gear Zero dan mencobanya.
>
> Setiap hari ada kuota pembuatan gratis, dan menerbitkan game bisa mendapat kuota tambahan 👍🏻
>
> Akun resmi: @gearzero_alaya
> Alamat untuk mencoba:

<p class="tweet-media-note">Postingan asli memuat gambar atau video, materi media akan ditata menyusul.</p>

</article>

<article class="tweet-entry" id="post-2092791993575629269">

## Mengapa Pi tidak pernah membuat versi desktop?

<span class="tweet-meta">2026-08-27 09:51:08 · Teks asli</span>

> Mengapa Pi tidak pernah membuat versi desktop?
>
> Dari penelitian saya belakangan ini, mungkin bukan karena tidak dibuat, melainkan karena Pi memang tidak berniat membuatnya sendiri, dan membuka fungsinya untuk pihak ketiga.
>
> Awalnya saya mencari jawabannya dengan rasa penasaran: Pi sudah berkembang cukup lama, pengalaman terminalnya sudah sangat lengkap, tetapi pihak resmi tidak pernah menghadirkan Desktop App, juga tidak ada penyesuaian untuk mobile.
>
> Setelah mengamati dengan saksama, saya perlahan memahami pemikiran di baliknya.
>
> 1. Yang sebenarnya dibuat pihak resmi Pi bukanlah “klien”
>
> Hal yang lebih inti pada Pi selalu berupa kemampuan dasar seperti Agent Runtime, Session, Tool, dan Extension. Terminal yang biasa kita lihat hanyalah salah satu cara berinteraksi, bukan satu-satunya bentuk produk Pi.
>
> 2. Sebenarnya pihak resmi sudah lama menyiapkan antarmuka (interface)-nya
>
> Selain mode terminal, Pi juga punya SDK, JSON, dan RPC, yang memungkinkan pihak ketiga mengendalikan Session secara langsung, mengirim Prompt, serta menerima Tool Call dan event Streaming.
>
> Jadi secara teori Anda benar-benar bisa membuatnya menjadi aplikasi desktop, Web, aplikasi mobile, bahkan mengintegrasikannya langsung ke IDE; yang berjalan di baliknya tetap Pi yang sama.
>
> 3. Dengan begitu, tidak perlu membangun ulang satu set Agent
>
> Pihak ketiga hanya perlu menangani UI dan interaksi, tidak perlu mengimplementasikan ulang pemanggilan model, Session, Tool, Extension, dan hal-hal semacam itu.
>
> Inilah sebabnya komunitas kini perlahan memunculkan berbagai implementasi berbeda: desktop, konsol Web, remote ponsel, dan lain-lain.
>
> 4. Mungkin Pi memang tidak ingin menentukan Agent seharusnya seperti apa
>
> Sampai di sini saya baru paham: Pi tidak membuat desktop resmi mungkin bukan berarti kekurangan satu fitur, melainkan sejak awal ia sudah memisahkan Agent dari klien.
>
> Gagasan inti Pi: hanya bertanggung jawab menyiapkan fondasinya dengan baik; soal bagaimana menggunakannya atau fitur seperti apa yang diinginkan, semuanya diserahkan kepada komunitas untuk menciptakannya sendiri.

</article>

<article class="tweet-entry" id="post-2092819605656060219">

## Hari ini saya melihat JetBrains membuat klien GUI untuk Pi 🔥

<span class="tweet-meta">2026-08-27 11:40:51 · Teks asli</span>

> Hari ini saya melihat JetBrains membuat klien GUI untuk Pi 🔥
>
> Dari sudut pandang saya, command line tetap paling nyaman, tetapi GUI dan TUI adalah bentuk yang lebih bisa diterima orang banyak.
>
> Jika ingin membagikan Pi kepada lebih banyak orang, mau tidak mau harus ada yang menempuh jalur GUI ini.
>
> Klien GUI yang dibuat JetBrains untuk Pi bernama ThinkRail; mesin di baliknya tetap Pi—misalnya model, skills, dan pemadatan tetap dikelola Pi sendiri—tetapi di luarnya ada lapisan workspace yang bisa dilihat.
>
> Ada tiga hal yang menurut saya cukup menarik dari GUI kali ini:
>
> 1. Obrolan, editor, dan terminal terhampar dalam satu antarmuka
> Tidak perlu bolak-balik berpindah jendela; apa yang diubah bisa langsung dilihat, dan Anda bisa mengikuti apa yang sedang dikerjakan Agent dengan sekali pandang.
>
> 2. Satu repositori bisa membuka beberapa workspace
> Setiap Agent mendapat satu git worktree tersendiri, berjalan berdampingan di antarmuka, dan branch main tidak ikut diacak-acak. Inilah GUI yang bisa dipahami multi-Agent, bukan sekadar membuka beberapa kotak dialog.
>
> 3. Spesifikasi dan perubahan sama-sama terlihat
> Spec graph + diff ada di antarmuka, sehingga keadaan antara tidak hanya menyisakan hasil akhir. Jika ingin menelusuri kembali, tidak perlu membongkar tumpukan log.
>
> Meskipun bentuk command line sesuai dengan jalur minimalis Pi, dalam pekerjaan yang kompleks, jika ada yang membantu mengonfigurasi dan memasang fungsi yang sesuai, saya kira semua orang juga akan senang; yang paling utama adalah akhirnya ada jalur GUI yang bisa menahan orang untuk tetap memakainya.
>
> Mau menggunakan apa adalah hak Anda, tetapi komunitas menyediakan pilihan yang berbeda; ini sejalan dengan filosofi Pi.

</article>

<article class="tweet-entry" id="post-2092887927672205740">

## Saat meneliti Pi belakangan ini, saya menemukan komunitas sebenarnya sudah membuat cukup banyak proyek desktop dan mobile 🔥

<span class="tweet-meta">2026-08-27 16:12:20 · Teks asli</span>

> Saat meneliti Pi belakangan ini, saya menemukan komunitas sebenarnya sudah membuat cukup banyak proyek desktop dan mobile 🔥
>
> Pihak resmi Pi tidak pernah membuat Desktop App sendiri, tetapi kemampuan dasar seperti SDK, RPC, dan Session sudah dibuka, jadi banyak proyek pihak ketiga sebenarnya hanya memberi Pi pintu masuk yang lebih nyaman.
>
> Saya pilih beberapa yang cukup layak dicoba:
>
> Pi Desktop: desktop Pi yang saat ini cukup lengkap, langsung menggunakan kembali Session, login model, dan Extension yang sama; Pi di terminal pada dasarnya bisa dipindahkan ke GUI tanpa hambatan.
>
> Pi Web: workstation Pi versi browser, Session, file, model, dan Skill semuanya bisa dikelola langsung; saat ini di GitHub sudah 3K+ Star, sangat populer di komunitas.
>
> Remote Pi: solusi mobile yang cukup saya rekomendasikan, tersedia App native untuk iOS dan Android; melalui Extension + kode QR, Anda bisa mengendalikan Pi Anda dari jarak jauh lewat ponsel.
>
> pi-mobile: solusi Web ponsel yang lebih ringan, tanpa memasang App; browser bisa langsung mengambil alih Session, dan mendukung Tailscale, Cloudflare Tunnel, serta Face ID / Touch ID.
>
> PI WEB: lebih condong ke kolaborasi multiperangkat; Pi bisa terus berjalan di server atau workstation, dan Agent tidak berhenti meskipun browser ditutup; nanti berganti ponsel, komputer, atau tablet pun bisa tetap melanjutkan.
>
> Setelah mencoba banyak, yang paling saya sukai tetap: PI WEB
>
> Terutama UI dan gaya pengaturan bawaannya benar-benar membuat saya menyukainya; perpindahan dan kompatibilitas antarperangkat bisa tercapai dengan mudah, karena pada dasarnya ini hanya aplikasi WEB, tanpa konfigurasi yang rumit.
>
> Komunitas sudah menyiapkan semuanya; soal apakah Anda ingin terminal, desktop, atau web, sepenuhnya bisa Anda tentukan sendiri.

</article>

<article class="tweet-entry" id="post-2093242314764537867">

## Dari meneliti Pi, saya menemukan penggunaan stabil jangka panjang lebih penting dari apa pun 🔥

<span class="tweet-meta">2026-08-28 15:40:33 · Teks asli</span>

> Dari meneliti Pi, saya menemukan penggunaan stabil jangka panjang lebih penting dari apa pun 🔥
>
> Jadi menurut saya ia lebih cocok diletakkan di sebuah VPS, bukan di komputer rumah.
>
> Dulu saya memasangnya di komputer rumah dan menjalankannya 24 jam, tetapi jika terjadi pemadaman listrik atau sistem tertidur sendiri, pengalamannya sangat buruk, pekerjaan langsung terputus, dan itu membuat saya kesal. Sekarang dengan VPS, semua masalah itu teratasi.
>
> Dari pengalaman saya sendiri, ada beberapa poin yang cukup mencolok.
>
> 1. Server tidak tertidur sendiri
> Komputer rumah selalu bisa mengalami pemadaman, pembaruan, atau tidur. VPS selalu online, tugas bisa dibiarkan berjalan, dan saat kembali kita bisa melanjutkannya tanpa harus menjelaskan ulang konteksnya.
>
> 2. Siaga 24 jam kapan saja
> Dulu kita harus duduk di depan mesin itu. Sekarang dengan ponsel, menghubungkan diri dari jarak jauh, kita bisa melihat apa yang sedang dikerjakannya dan melanjutkan memberi perintah. Kendali tidak lagi terikat pada meja di rumah.
>
> 3. Komputer di rumah akhirnya bisa beristirahat
> Saat Agent menempati komputer lokal, mematikannya, menidurkannya, atau memakainya untuk hal lain akan saling bertabrakan. Kalau diletakkan di server, keduanya tidak saling mengganggu dan sama-sama lebih ringan.
>
> 4. Isolasi lingkungan, bebas bereksperimen
> Komputer lokal hari ini memasang ini, besok mengubah sistem, konfigurasi Agent mudah ikut bergeser. Di server relatif bersih, daftar (manifest) dan kebiasaan bisa tetap terjaga, dan setelah lama dipakai barulah terasa seperti milik sendiri.
>
> 5. Sangat cocok untuk tugas panjang
> Mencari bahan, mengawasi log, dan membiarkan tugas-tugas kecil berjalan di latar belakang—hal-hal seperti ini paling takut terputus di tengah jalan. Setelah online 24 jam, Pi barulah lebih mirip asisten yang bisa dipercaya, bukan sekadar tool yang hanya ada saat komputer dinyalakan.
>
> Mungkin ada yang bertanya soal sulitnya sinkronisasi data; sebenarnya sederhana, cukup gunakan Github. Konten dan data saya sendiri saya letakkan di repositori privat Github. Namun jika ada data pribadi, sebaiknya tidak disarankan.
>
> Tetapi solusi saya ini tidak cocok untuk semua orang, hanya cocok untuk pengguna yang perlu memakai Agent dalam waktu lama. Semoga bermanfaat untuk Anda.

<p class="tweet-media-note">Postingan asli memuat gambar atau video, materi media akan ditata menyusul.</p>

</article>

<article class="tweet-entry" id="post-2093563366220652868">

## Saya ternyata tidak tahu Pi juga berkontribusi di bidang game 🔥

<span class="tweet-meta">2026-08-29 12:56:17 · Teks asli</span>

> Saya ternyata tidak tahu Pi juga berkontribusi di bidang game 🔥
>
> Unity, mesin game yang saya kira semua orang sudah tahu, komunitas perlahan mulai menggarap pengembangan game ke arah ini.
>
> Baru-baru ini saya melihat proyek yang cukup menarik, pi-unity; yang ia selesaikan bukan lagi sekadar masalah membuat game, melainkan mulai benar-benar membawa Pi masuk ke pekerjaan yang berkaitan dengan pengembangan game.
>
> Dulu saat memakai Coding Agent untuk Unity, alurnya pada dasarnya adalah AI mengubah kode, saya kembali ke Unity menunggu kompilasi, menemukan error, lalu melemparkan error itu kembali. Sering kali manusia sebenarnya hanya bolak-balik memindahkan informasi antara dua perangkat lunak.
>
> pi-unity mulai mencoba menyambungkan rantai proses ini.
>
> 1. Pi mulai tahu apa yang sedang terjadi di Unity saat ini
>
> Ia dapat memeriksa proyek mana yang sedang terbuka, apakah proses Unity ada, apakah Pipeline sudah terhubung, dan apakah proyek saat ini bisa menjalankan tugas dengan normal.
>
> Perubahan ini terlihat kecil, tetapi maknanya berbeda.
>
> Dulu Agent hanya menghadapi tumpukan file .cs, dan hanya bisa “menebak” keadaan game saat ini melalui kode; sekarang ia mulai bisa mendapatkan status Editor itu sendiri, dan tahu lingkungan apa yang sebenarnya sedang ia operasikan.
>
> 2. Setelah selesai menulis kode, ia mulai bisa memverifikasi hasilnya sendiri
>
> Misalnya meminta Pi mengubah sebuah sistem karakter; dulu setelah diubah, pada dasarnya selesai.
>
> Sekarang ia bisa melanjutkan dengan memicu kompilasi Unity, menemukan Compiler Error lalu kembali memperbaikinya, kemudian menjalankan EditMode / PlayMode Test, dan jika pengujian gagal terus membaca hasilnya dan menanganinya.
>
> Artinya, alurnya perlahan berubah menjadi:
>
> Saya memberi tahu apa yang ingin dilakukan, dan sisanya—kompilasi, pengujian, error, lalu perbaikan lagi—bisa dibiarkan Agent jalankan bolak-balik sendiri.
>
> 3. Yang paling menarik justru ketika ia mulai masuk ke Unity Editor yang sedang berjalan
>
> pi-unity dapat, melalui Roslyn REPL milik Pipeline, menjalankan C# yang terkendali di thread utama Unity Editor.
>
> Misalnya membaca sebuah pengaturan di proyek saat ini, memeriksa status berjalan, bahkan melakukan pengujian dan penyesuaian sementara untuk hal yang sedang di-debug.
>
> Di dalamnya bahkan dibuat Skill khusus bernama unity-interactive-playmode-authoring, yang tujuannya membuat Agent memeriksa dan men-debug lebih dulu di dalam Play Mode, lalu memutuskan hal-hal mana yang benar-benar perlu dipersistenkan.
>
> 4. Jadi yang benar-benar membuat saya tertarik pada pi-unity bukanlah “Pi juga sudah bisa menulis Unity”
>
> melainkan bahwa Agent sedang berkembang dari mengoperasikan kode menuju mengoperasikan perangkat lunak profesional secara perlahan.
>
> Hari ini Unity, nanti bisa juga Blender, Unreal, CAD, perangkat lunak penyuntingan video.
>
> Ketika status, tombol, dan lingkungan berjalan di dalam perangkat lunak ini perlahan menjadi Tool yang bisa dipahami dan dipanggil Agent, Vibe Coding mungkin juga tidak akan terus berhenti pada “buatkan saya sebuah halaman web”, melainkan benar-benar bisa menghasilkan—di dalam produksi game—game yang saya sendiri inginkan.

<p class="tweet-media-note">Postingan asli memuat gambar atau video, materi media akan ditata menyusul.</p>

</article>

<article class="tweet-entry" id="post-2097002884147872080">

## Ternyata MiniMax Code 2.0 juga dibuat ulang di atas Pi.

<span class="tweet-meta">2026-09-08 00:43:42 · Teks asli</span>

> Ternyata MiniMax Code 2.0 juga dibuat ulang di atas Pi.
>
> Sejujurnya, saya sangat bersemangat saat mengetahui kabar ini: semakin banyak pengembang yang suka menggunakan Pi Agent sebagai fondasi produk Agent mereka.
>
> Pihak resmi MiniMax sendiri juga mengatakan:
>
> Rebuilt on the open-source Pi Agent framework.
>
> Saya menganalisis sekilas persamaan di antara keduanya
>
> Persamaan:
>
> 1. Di lapisan dasar keduanya memakai logika Coding Agent yang sama
>
> Membaca file, mengubah kode, menjalankan perintah, memanggil tool, lalu terus bekerja seputar Session.
>
> 2. Keduanya mulai sangat mementingkan Session dan tugas panjang
>
> Setelah dibuat ulang, MiniMax Code 2.0 juga jelas memperkuat kesinambungan tugas, penyimpanan status, dan stabilitas tugas panjang.
>
> 3. Keduanya sama-sama menyediakan ruang untuk kemampuan ekstensi
>
> Skill, tool, dan kemampuan eksternal semuanya bisa terus ditumpuk di atasnya.
> Tetapi perbedaan sebenarnya justru lebih mencolok.
>
> MiniMax Code 2.0: berusaha semaksimal mungkin membuat produknya bagus untuk Anda
>
> Di atas fondasi Pi ini, ia terus menambahkan desktop UI, Browser Control, Remote Control, Goal, Memory, Plugin Marketplace, kemampuan Office, dan lain-lain.
>
> Meskipun MiniMax Code 2.0 telah diubah sedemikian rupa sehingga tidak lagi terasa seperti Pi, dari sudut pandangnya sebagai sebuah produk, tidak ada masalah sama sekali; yang lebih saya perhatikan adalah apakah ia membuat inovasi sendiri di atas Pi.
>
> Jika di atasnya ada inovasi yang istimewa, itu berarti sukses.
>
> Makna Pi lebih mirip menyediakan satu set fondasi Agent; siapa pun bisa membangun Agent-nya sendiri, memberi kesempatan kepada khalayak untuk menyesuaikannya. Inilah yang saya anggap makna terbesar dari keberadaan proyek Pi.

</article>

<article class="tweet-entry" id="post-2097146541417083288">

## Pi V2 telah datang, mungkin akan memasuki era baru Agent Runtime 🔥

<span class="tweet-meta">2026-09-08 10:14:33 · Teks asli</span>

> Pi V2 telah datang, mungkin akan memasuki era baru Agent Runtime 🔥
>
> Belakangan ini saya terus memperhatikan desain versi baru Harness V2 milik Pi; saya merasa hal yang benar-benar perlu diperhatikan dari versi baru bukan lagi sekadar penambahan fitur, melainkan perubahan arah secara keseluruhan.
>
> Pergeseran dari Coding Agent sederhana menuju Agent Runtime—inilah yang saya rasa paling layak diperhatikan dari perubahan kali ini.
>
> Coding Agent mudah dipahami, seperti Pi Agent, Claude Code, Codex: Anda memberinya sebuah tugas, ia memanggil model, memakai tool, menulis kode, lalu menyelesaikan pekerjaan itu.
>
> Agak mirip seorang programmer yang selalu siap Anda panggil.
>
> Agent Runtime lebih mirip menyiapkan kantor yang ada secara permanen untuk programmer ini. Orang bisa pulang kerja, komputer bisa di-restart, bahkan besoknya digantikan orang lain untuk melanjutkan, tetapi tugas, materi, dan progres tetap ada di sana.
>
> Keduanya sebenarnya punya banyak kesamaan:
>
> 1. Sama-sama memerlukan model
> 2. Sama-sama memerlukan Tools
> 3. Sama-sama memerlukan Context
> 4. Sama-sama memiliki Agent Loop
>
> Sebenarnya, ringkasannya dalam satu kalimat adalah:
>
> Coding Agent: fokusnya menyelesaikan tugas kali ini.
>
> Agent Runtime: fokusnya membuat tugas dan status bertahan lama.
>
> Dari Pi V2, yang paling ingin saya lihat sekarang bukan lagi seberapa banyak kemampuan Coding-nya meningkat, atau seberapa banyak fitur yang ditambahkan.
>
> Hal-hal itu semakin jauh dari kehidupan sehari-hari saya; saya lebih menantikan bagaimana Pi, di atas dasar kesederhanaannya yang tetap terjaga, perlahan berubah menjadi Runtime yang membuat Agent bisa hidup lama.

</article>

## Langkah selanjutnya

Setelah menyelesaikan enam tahap, Anda bisa kembali ke [Catatan belajar Pi saya](/journey/), lalu memilih bab yang perlu dipraktikkan dari tutorial utama.

