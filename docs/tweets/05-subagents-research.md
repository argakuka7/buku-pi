---
title: Membuat Subagent Belajar Berbagi Tugas
description: Catatan belajar Pi tahap 5, memuat 7 tweet asli.
outline: false
prev:
  text: Membangun Skill dan Extension Anda Sendiri
  link: /tweets/04-skills-extensions
next:
  text: Mengubah Pi menjadi alur kerja jangka panjang
  link: /tweets/06-long-running
---

<span class="library-status">Catatan belajar pribadi · STAGE 05</span>

# Membuat Subagent Belajar Berbagi Tugas

**Masalah yang ingin dipecahkan pada tahap ini**　Pelajari cara memecah tugas pencarian, perapian, dan review, serta memeriksa bukti yang dikembalikan masing-masing Agent.

Nilai Subagent berasal dari pembagian tugas dan pemeriksaan ulang. Bagian ini berangkat dari pengalaman dengan berbagai Agent, lalu masuk ke pencarian multi-Agent, perbandingan bahan, dan skenario riset yang konkret.

Halaman ini memuat 7 tweet asli. Teks berasal dari pustaka tweet asli pribadi di Google Drive, dengan alamat x.com dan tautan pendek media t.co sudah dihapus. Versi dan status produk yang disebut dalam tweet asli mengikuti tanggal terbitnya.

<article class="tweet-entry" id="post-2090071185421955145">

## Yang ingin saya bagikan: cobalah berbagai Agent yang berbeda, sungguh, Anda akan datang kembali untuk berterima kasih kepada saya!

<span class="tweet-meta">2026-08-19 21:39:36 · tweet asli</span>

> Yang ingin saya bagikan: cobalah berbagai Agent yang berbeda, sungguh, Anda akan datang kembali untuk berterima kasih kepada saya!
>
> Karena setiap Agent punya kesamaan, tetapi juga banyak perbedaan.
>
> Misalnya yang paling sering saya pakai, Claude Code dan Codex; menurut saya perbedaan terbesar keduanya terletak pada ekosistemnya. Tidak banyak orang yang bisa mencoba seluruh lini produk Claude, tetapi Codex bisa.
>
> Pi Agent dan DeepSeek Harness sangat berbeda bahkan sejak lapisan dalamnya: yang satu percaya pada desain sederhana karena AI tidak butuh sebanyak itu, yang lain berpikir bahwa segalanya adalah plugin.
>
> Ada juga Hermes dan Openclaw yang sering saya pakai. Kedua produk mirip, tetapi arah besarnya berbeda: yang satu mengutamakan self-evolution, pemeliharaan rendah, dan skill; yang lain menonjolkan ekosistem plugin dan sistem memori yang khas. Masing-masing punya kelebihan.
>
> Setelah memakai banyak, sebagian desain intinya sebenarnya sama. Semakin banyak Anda mencoba, semakin Anda tahu mana yang benar-benar Anda butuhkan dan ingin pakai.

</article>

<article class="tweet-entry" id="post-2091841029850681551">

## Fitur Sub-agent Pi Agent wajib dicoba!

<span class="tweet-meta">2026-08-24 18:52:20 · tweet asli</span>

> Fitur Sub-agent Pi Agent wajib dicoba!
>
> Meskipun secara resmi belum ada fitur ini di dalam Pi, Anda cukup memasang plugin untuk memakainya.
>
> Saat banyak tugas berjalan paralel, fitur ini adalah pembantu yang baik untuk meningkatkan efisiensi, terutama ketika menangani data sederhana yang berulang dan bervolume besar.
>
> Di sini saya jelaskan sedikit cara kerjanya:
>
> 1. Agent utama bertugas memecah tugas
>
> Pi yang biasa Anda ajak bicara adalah Agent utama.
>
> Misalnya saat menganalisis proyek besar, ia bisa menyuruh scout mencari file entri, researcher mencari dokumentasi, lalu reviewer memeriksa risiko.
>
> Anda cukup menjelaskan tujuan dan batasannya dengan jelas, sisanya distribusi tugas diserahkan ke plugin.
>
> 2. Setiap Sub-agent punya context yang mandiri
>
> Sebagian besar plugin akan menjalankan proses Pi tersendiri, sehingga Sub-agent membaca file dan memanggil tool sendiri.
>
> Setelah selesai, ia hanya mengembalikan kesimpulan ke Agent utama, tidak menjejalkan puluhan pemanggilan tool ke percakapan utama.
>
> Keuntungannya hemat context, kerugiannya ia belum tentu tahu apa yang pernah Anda bicarakan sebelumnya. Karena itu, di dalam tugas sebaiknya tuliskan dengan jelas path, tujuan, dan hasil yang perlu dikembalikan.
>
> 3. Berbagai Agent bisa memakai model dan izin yang berbeda
>
> scout yang memeriksa kode hanya diberi akses read, grep, find.
>
> Agent yang bertugas Review bisa melihat kode dan menjalankan tes, tetapi belum tentu perlu mengubah file.
>
> worker yang benar-benar bekerja baru diberi akses edit, write, dan bash.
>
> Tugas sederhana bisa diserahkan ke model murah, sedangkan penilaian rumit memakai model kuat. Tidak semua Agent perlu memakai konfigurasi termahal.
>
> 4. Mendukung eksekusi tunggal, paralel, dan berantai
>
> Contoh Sub-agent resmi mendukung tiga cara umum:
>
> Single: satu Agent menyelesaikan satu tugas
> Parallel: beberapa Agent menangani tugas berbeda secara bersamaan
> Chain: scout mencari kode → planner menyusun rencana → worker mengubah → reviewer memeriksa
>
> Kombinasikan tugas dengan bebas; tugas tidak hanya bisa dijalankan terpisah, tetapi juga digabungkan, dan hasil akhir dari pemrosesan yang terpisah itu akan bertemu di satu titik.
>
> Tetapi ada juga kekurangannya, yaitu konsumsi Token bertambah beberapa kali lipat. Jika pekerjaan Anda tidak terlalu mendesak, atau kuota paketnya tidak cukup, sebaiknya jangan dipakai untuk jangka panjang.
>
> Jika Anda tertarik dengan bagian ini, lain kali saya akan memperkenalkan plugin terkait untuk menjadikan Pi Anda sebuah workbench pengembangan paralel multithread.

</article>

<article class="tweet-entry" id="post-2093160756716204485">

## Sub-agent Pi Agent selalu saya pakai; baru-baru ini saya menjalankan pencarian multi-Agent lagi dengan Apodex 1.1.

<span class="tweet-meta">2026-08-28 10:16:28 · tweet asli</span>

> Sub-agent Pi Agent selalu saya pakai; baru-baru ini saya menjalankan pencarian multi-Agent lagi dengan Apodex 1.1.
>
> Cara Apodex menangani perbandingan bahan berbeda dari Deep Research biasa.
>
> Pi Agent sendiri tidak punya Sub-agent bawaan, sehingga perlu diperluas lewat plugin. Anda bisa menyuruh scout mencari bahan, researcher merapikan informasi, lalu menyerahkannya ke reviewer untuk diperiksa. Model yang dipakai tiap peran, tool dan izin yang dibuka, semuanya bisa Anda konfigurasi sendiri.
>
> Cara ini sangat fleksibel dan cocok untuk orang yang suka membangun alur kerja Agent sendiri.
>
> Tugas yang saya berikan ke Apodex 1.1 kali ini adalah memeriksa kemampuan multi-Agent dari Pi Agent, Codex CLI, Claude Code, dan FrontierAgent.
>
> Tool-tool ini diperbarui dengan cepat. Suatu fitur mungkin tidak ada di dokumentasi lama dan sudah ditambahkan di versi terbaru, atau mungkin hanya didukung plugin, tetapi akhirnya ditulis sebagai bawaan resmi.
>
> Karena itu, sejak awal saya membatasi cakupan bahan: hanya menerima dokumentasi resmi, repositori GitHub, dan catatan pembaruan versi.
>
> Apodex akan memecah rute pencarian berdasarkan pertanyaan. Beberapa Agent memeriksa tool yang berbeda, hasil tahapannya terus dirangkum ke dalam tugas yang sama, lalu pada akhirnya dibandingkan secara terpusat.
>
> Yang ingin saya lihat kali ini adalah apakah ia bisa menyelesaikan tugas yang bahannya banyak dan versinya beragam sampai tuntas, sekaligus menyimpan sumber dari setiap kesimpulan.
>
> Tabel akhirnya akan memisahkan bawaan resmi dan implementasi plugin. Ketika halaman resmi yang berbeda bertentangan, ia akan mencantumkan sumber dan waktu pembaruan masing-masing. Bagian yang tidak dijelaskan secara eksplisit oleh pihak resmi langsung ditandai sebagai tidak diketahui, bukan ditambahi jawaban demi memenuhi tabel.
>
> Hasil yang dikirim juga melewati Statement Review. Kesimpulan penting dan proses pembuatannya diperiksa secara terpisah; ketika bukti kurang, kutipan tidak cocok, atau bahan bertentangan, catatan pemeriksaannya akan disimpan.
>
> Dua arah penggunaan multi-Agent ini juga sangat jelas.
>
> Pi Agent cocok untuk membentuk tim sendiri. Peran, model, dan izin bisa disesuaikan secara mendalam.
>
> Apodex lebih cocok untuk pencarian dari banyak jalur, membandingkan bahan yang tersebar, lalu mengirimkan satu hasil yang bisa terus diperiksa ulang.
>
> Jika Anda sering perlu memastikan apakah suatu kemampuan didukung resmi, disediakan plugin, atau belum ada bahan yang jelas, cara kerja seperti ini akan cukup praktis.
>
> FrontierAgent adalah Agent harness single-machine open source yang mendukung ReAct dan Agent Team. Di macOS dan Linux bisa dijalankan dengan satu perintah, tanpa wajib memasang Docker sebelumnya. Jika menurut Anda berguna, silakan memberi Star di GitHub.
>
> Apodex 1.1 mini adalah model 35B dengan bobot terbuka yang bisa dijalankan secara lokal, dan juga dipakai bersama FrontierAgent.
>
> Workbench online Apodex 1.1 sudah dirilis. Pengguna baru yang mendaftar mendapat credits dan bisa mengunggah dokumen, data, atau tabel sendiri untuk menjalankannya sekali. Platform API-nya saat ini gratis selama dua minggu.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi medianya akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2093177805433704718">

## Saya menghubungkan Pi ke Apodex 1.1 agar ia membantuku memeriksa apakah ucapan Sun Yuchen benar 🔥

<span class="tweet-meta">2026-08-28 11:24:12 · tweet asli</span>

> Saya menghubungkan Pi ke Apodex 1.1 agar ia membantuku memeriksa apakah ucapan Sun Yuchen benar 🔥
>
> Setelah artikel Sun Yuchen berjudul "Pacar Perempuanku Jing Tian" terbit, topik terkait dengan cepat mencuat ke daftar trending.
>
> Artikel itu memuat banyak detail perselisihan asmara dan harta, sementara di awal dan akhirnya diberi catatan bahwa semuanya fiksi. Setelah itu, kuasa hukumnya secara terbuka menyebut perselisihan harta lebih dari tiga puluh juta yuan, dan pihak Jing Tian juga memberikan tanggapan.
>
> Setelah beberapa sumber tercampur, banyak isinya sudah sulit dibedakan antara fakta publik, klaim sepihak, atau cerita yang diolah media mandiri dari teks aslinya.
>
> Kebetulan saya baru menghubungkan Apodex 1.1 ke Pi Agent, jadi saya menjalankannya untuk berita ini.
>
> Saya meminta model mencari sendiri teks asli Sun Yuchen, tanggapan kedua pihak, dan pernyataan terbuka pengacaranya, lalu terus melacak asal mula pemberitaan media. Klaim yang bertentangan harus dipertahankan, halaman asli yang tidak bisa dibuka juga harus ditandai dengan jelas, dan konten yang buktinya kurang tidak boleh ditulis sebagai fakta.
>
> Pi Agent menyediakan tool pencarian dan pembacaan web; Apodex 1.1 memutuskan dari mana pencarian dimulai dan konten mana yang perlu diverifikasi silang, lalu merapikan berita menjadi timeline dan tabel cek fakta yang disertai sumber.
>
> Yang diuji di sini adalah kemampuan pencarian nyata dan integrasi informasi model Apodex; Anda tentu tahu bahwa menjalankan model di dalam Pi bisa mencerminkan kemampuan sebenarnya secara cukup nyata.
>
> Apakah ini yang asli atau yang palsu, coba uji saja dulu.
>
> Platform API Apodex saat ini bebas biaya untuk waktu terbatas selama dua minggu; yang tertarik bisa mencobanya sendiri, tautannya saya taruh di kolom komentar.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi medianya akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2093222498943025525">

## Melihat contoh pencarian "Mimpi di Paviliun Merah" dengan Apodex ini, saya berpikir Sub-agent Pi sangat cocok menangani masalah semacam ini.

<span class="tweet-meta">2026-08-28 14:21:48 · tweet asli</span>

> Melihat contoh pencarian "Mimpi di Paviliun Merah" dengan Apodex ini, saya berpikir Sub-agent Pi sangat cocok menangani masalah semacam ini.
>
> Banyak pertanyaan seputar Mimpi di Paviliun Merah menyangkut versi yang berbeda, anotasi Zhiyanzhai, dan pandangan penelitian setelahnya. Jika model menulis mengikuti penjelasan yang pertama kali ditemukan, sangat mudah teks asli, catatan penyuntingan, dan dugaan orang-orang setelahnya tercampur.
>
> Setelah tersambung ke Pi, Anda bisa menyuruh Sub-agent memeriksa secara terpisah. Satu hanya mencari teks asli dan asal versinya, yang lain merapikan pandangan penelitian yang berbeda. Agent utama lalu memeriksa dari mana kutipan berasal, dan mempertahankan konflik yang belum bisa diselesaikan.
>
> Bagian ini sangat menguji bagaimana Apodex 1.1 memecah pertanyaan, dan sekaligus memperlihatkan apakah ia memeriksa bahan yang dibawa pulang oleh Sub-agent.
>
> Jumlah pencarian menentukan berapa banyak bahan yang bisa ditemukan; penilaian sumber menentukan apakah jawaban akhir bisa dipercaya.
>
> Pertanyaan yang tidak punya jawaban standar tunggal seperti ini sangat cocok untuk menguji kombinasi Pi Sub-agent dan Apodex 1.1.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi medianya akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2094032795546849667">

## Saya mulai mengajari Pi cara saya menganalisis tweet X milik sendiri 🔥

<span class="tweet-meta">2026-08-30 20:01:38 · tweet asli</span>

> Saya mulai mengajari Pi cara saya menganalisis tweet X milik sendiri 🔥
>
> Dulu saya meninjau ulang data tweet X hampir selalu sendiri, dan sebenarnya itu sangat membuang waktu.
>
> Saya harus melihat impresi, suka, dan simpanan, lalu meninjau ulang apakah pembukanya menarik, bagian tengah mana yang paling padat informasi, dan mengapa suatu konten yang tulisannya jelas bagus justru tidak ada yang melihat.
>
> Setelah sering melakukannya, saya sadar bahwa pola analisis saya setiap kali sebenarnya hampir sama.
>
> Jadi tidak perlu lagi memberi tahu AI setiap kali.
>
> Sekarang saya mulai mematrikan alur ini langsung ke dalam Pi.
>
> Misalnya nanti saya melempar tweet saya sendiri kepadanya, ia akan melihatnya dalam urutan tetap:
>
> 1. Pertama, menilai apa sebenarnya daya tarik konten ini, bukan hanya melihat tinggi-rendahnya angka.
>
> 2. Lalu membedah pembuka, struktur, pemilihan topik, dan penyampaiannya, untuk menemukan bagian mana yang layak dipertahankan.
>
> 3. Terakhir, dengan menggabungkan konten saya yang sebelumnya berperforma baik, memberi tahu ke arah mana topik ini masih bisa digali.
>
> Sekarang saya memakai Pi bukan lagi sekadar membungkusnya menjadi skill, melainkan menyadari bahwa kebiasaan dalam hidup bisa dipatrikan dan diselesaikan oleh plugin kustom Pi untuk saya.
>
> Inilah alasan saya semakin menyukai Pi sekarang.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi medianya akan dirapikan menyusul.</p>

</article>

<article class="tweet-entry" id="post-2095306131560431748">

## OMP semakin ganas: satu Agent mulai dilengkapi satu tim model penuh.

<span class="tweet-meta">2026-09-03 08:21:25 · tweet asli</span>

> OMP semakin ganas: satu Agent mulai dilengkapi satu tim model penuh.
>
> Dulu, saat memakai Pi untuk menjalankan sub-agent, saya selalu bimbang dengan satu pertanyaan:
>
> Apakah semua Subagent perlu mewarisi level model dari thread utama? Padahal dalam pemakaian nyata konsumsinya tinggi dan jalannya lambat.
>
> Tetapi di Harness multi-Agent seperti Oh My Pi, saya menemukan arah yang masih samar.
>
> Agent thread utama, Advisor, dan Subagent perlu pembagian kerja yang jelas tentang siapa mengerjakan apa. Kalau semuanya diberi model terkuat yang sama, biayanya tinggi dan kecepatannya pun lambat.
>
> Sekarang komunitas OMP sudah mulai membahas pemisahan model untuk setiap peran sepenuhnya:
>
> 1. Main Agent membutuhkan kemampuan menyeluruh
>
> Ia bertugas memahami kebutuhan, mengambil keputusan, dan mengendalikan keseluruhan tugas, sehingga lebih cocok diberi model paling mumpuni.
>
> 2. Advisor membutuhkan kemampuan menilai
>
> Ia belum tentu bertugas mengerjakan pekerjaannya; lebih banyak mengawasi apakah Agent utama menyimpang, sehingga penalaran dan penilaian lebih penting daripada kecepatan.
>
> 3. Subagent lebih mementingkan nilai manfaat terhadap biaya
>
> Mencari bahan, memindai kode, menjalankan tugas sederhana—jika hal-hal ini dijalankan belasan sekaligus, tidak perlu semuanya memakai model puncak.
>
> Saya sendiri sebenarnya sudah memakai pola serupa.
>
> Untuk Agent utama saya memakai GPT-5.6 Sol, Advisor dengan GPT-5.6 Terra, dan saat benar-benar menjalankan banyak Subagent, saya justru mengutamakan DeepSeek, GPT-5 Mini, bahkan beberapa model gratis.
>
> Model kuat bertugas menilai, model murah bertugas mengerjakan pekerjaan kaki, menjadi lapisan eksekusi.
>
> Arah ini mungkin jalan keluar yang selama ini saya cari: mengalokasikan tugas dan model secara dinamis. Meskipun rumit, hasilnya lebih murah dan efisien.

<p class="tweet-media-note">Postingan asli berisi gambar atau video; materi medianya akan dirapikan menyusul.</p>

</article>

## Langkah Berikutnya

Setelah menyelesaikan tahap ini, lanjutkan membaca [Tahap 6　Menjadikan Pi alur kerja jangka panjang](/tweets/06-long-running).

