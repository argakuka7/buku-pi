---
title: 'Bukan hanya Pi: cara memilih OMP dan Selesai Code'
description: Mengenal dua cabang aktif Pi, membandingkan kemampuan bawaan, cara kerja, batas konfigurasi, dan jalur mencobanya.
prev:
  text: Buku panduan referensi
  link: /reference/
next:
  text: Skill, Extension, dan Pi Package
  link: /guide/skills-extensions-packages
---

<span class="library-status">AGENT ROUTES · Pilihan berbeda dalam keluarga Pi</span>

# Bukan hanya Pi: cara memilih OMP dan Selesai Code

Jika Anda sudah bisa menyelesaikan satu tugas dengan Pi, langkah berikutnya belum tentu terus memasang plugin untuk Pi. Dua proyek cabang Pi—OMP (Oh My Pi) dan Selesai Code—mempertahankan bentuk dasar Coding Agent terminal, tetapi memberikan jawaban berbeda atas “berapa banyak kemampuan yang sebaiknya dibangunkan”. Halaman ini membantu Anda menilai jalur mana yang cocok untuk tugas saat ini; 14 pelajaran praktik dalam buku ini tetap berpatokan pada Pi versi asli, dan perintah, antarmuka, serta konfigurasi di bawah ini tidak bisa langsung diterapkan kembali ke Pi.

Artikel ini diverifikasi pada **14 September 2026**, berdasarkan [dokumentasi resmi Pi](https://pi.dev/docs/latest/usage), [penjelasan proyek OMP](https://github.com/can1357/oh-my-pi), dan [penjelasan proyek Selesai](https://github.com/SelesaiInTech/selesai-code). Fitur dan cara instalasinya berubah cepat; saat benar-benar mencoba, ikuti dokumentasi dan bantuan terminal masing-masing proyek pada saat itu. Berikut rekomendasi pribadi menurut skenario penggunaan; semua tautan mengarah ke materi resmi proyek dan bukan berarti dukungan dari pihak proyek.

## Lihat dulu hubungannya: mereka bukan tiga model

“Pi versi asli” yang dimaksud halaman ini adalah **Pi Coding Agent** yang Anda jalankan lewat perintah `pi`, yaitu aplikasi terminal resmi yang benar-benar diajarkan buku ini untuk dipasang; ia bukan paket `pi-agent-core` tersendiri yang dipanggil pengembang. [Perbedaan Pi dan Pi Coding Agent](/reference/faq#pi-vs-pi-coding-agent) menjelaskan dulu hubungan ini, baru membandingkan dua fork di bawah.

**Pi, OMP, dan Selesai Code semuanya adalah tool Agent, bukan paket langganan yang menyediakan kuota model.** Model bertugas memahami dan menghasilkan, sedangkan Agent bertugas menyambungkan balasan model ke file lokal, perintah, dan sesi. Apakah Anda dapat memakai suatu model di salah satu tool bergantung pada Provider yang didukung tool itu saat ini, login atau API Key Anda, serta aturan penagihan akun terkait; nama model yang sama juga tidak berarti ketiga tool memiliki tool dan alur kerja yang persis sama. [Cara akses model dan batas biaya](/guide/connect-model#pilih-dulu-cara-akses-model-api-resmi-dan-langganan) membahas hal ini secara terpisah.

- **Pi Coding Agent versi asli** adalah jalur utama. Secara bawaan ia mulai dengan sedikit tool dasar, dan menyerahkan kemampuan alur kerja kepada [Skill, Extension, dan Package](/guide/skills-extensions-packages). [Penjelasan desain Pi](https://pi.dev/docs/latest/usage#design-principles) menegaskan bahwa Subagent, rencana, todo, dan sejenisnya bukan fitur inti yang wajib dibangunkan.
- **OMP** menandai repositorinya secara eksplisit sebagai [fork Pi](https://github.com/can1357/oh-my-pi). Ia mengintegrasikan kemampuan seperti navigasi kode LSP, debugging, penyuntingan terstruktur, browser, Subagent, dan review kode ke dalam antarmuka toolnya sendiri; arahnya lebih mirip “Agent yang membawa satu set IDE di dalam terminal”.
- **Selesai Code** juga secara eksplisit adalah [fork Pi](https://selesaiintech.github.io/selesai-code/why-selesai/). Ia mempertahankan interaksi inti Pi, sekaligus mengemas dan merilis Subagent, riset web, serah terima sesi, tool pemulihan, skill, dan antarmuka terminal; arahnya lebih mirip “sekali pasang langsung punya alur kerja kolaboratif”.

Keduanya bukan versi peningkatan resmi Pi, dan bukan pula dua plugin yang dipasang di dalam Pi. Anggaplah keduanya sebagai **pilihan Agent yang berdiri sendiri**, lalu lihat perintah, pengaturan, dan keterangan pembaruan masing-masing.

<div class="agent-routes-diagram"><img src="/images/diagrams/pi-agent-routes.svg" alt="Komponen dasar Pi membentuk Pi Coding Agent resmi; OMP dan Selesai Code adalah dua cabang mandiri yang berkembang dari Pi"></div>

*Diagram: yang dipasang buku ini adalah Pi Coding Agent di tengah; pustaka dasarnya tidak perlu dipasang terpisah, dan dua fork di sebelah kanan juga bukan plugin yang dimasukkan ke Pi. Saat membaca di ponsel, Anda bisa menggeser gambar ke kiri-kanan, atau [membuka gambar asli](/images/diagrams/pi-agent-routes.svg) untuk memperbesarnya.*

## Memahami perbedaan utama sekilas

Saat membaca di ponsel, Anda bisa menggeser tabel di bawah ke kiri-kanan untuk melihat kolom OMP dan Selesai; tiga subbagian berikutnya juga menjelaskan setiap jalur.

| Hal yang ingin dibandingkan | Pi versi asli | OMP (Oh My Pi) | Selesai Code |
| --- | --- | --- | --- |
| Orientasi produk | Inti ringkas, diperluas sendiri sesuai kebutuhan | Lebih banyak tool kode dan antarmuka eksekusi langsung dibangunkan | Menyediakan ekstensi, skill, dan alur kolaboratif dalam satu paket |
| Titik awal pemula | Pelajari dulu file, perintah, sesi, dan verifikasi | Pahami dulu pemilihan tool, izin, dan alur kerja kode | Pahami dulu kapan alur bawaan menyala dan kapan serah terima terjadi |
| Multi-Agent | Bisa memakai ekstensi komunitas atau membuat sendiri; bawaannya tidak menyertakan | Membawa Subagent dan pintu masuk koordinasi tugas | Membawa pembagian kerja Subagent foreground, background, paralel, atau berantai |
| Pekerjaan kode | Bergantung pada tool dasar dan ekstensi sesuai kebutuhan | Menekankan penyediaan LSP, debugging, pencarian dan penyuntingan terstruktur | Mempertahankan tool inti Pi, menyediakan ekstensi konteks kode yang perlu dibuatkan graf lebih dulu |
| Riset dan pemulihan | Dapat dilengkapi lewat ekstensi; pohon sesi, fork, dan pemadatan sudah ada sendiri | Membawa kemampuan bawaan seperti pencarian/pembacaan web, browser, koordinasi tugas, dan memori | Mengemas riset web, pencarian kode publik, serah terima sesi, undo, dan checkpoint opsional |
| Lebih cocok untuk siapa | Orang yang ingin memahami dasar Agent, tetap sederhana, atau merakit sendiri | Orang yang sering menavigasi, merefaktor, dan men-debug di repositori kode | Orang yang ingin sedikit memilih plugin dan langsung mencoba alur kerja satu paket |

Tabel ini membandingkan **bentuk produk yang disediakan proyek secara bawaan**, bukan batas atas kemampuannya. Ekosistem ekstensi Pi juga dapat mewujudkan banyak kebutuhan serupa; sedangkan butir bawaan OMP dan Selesai, sakelar bawaannya, dan wujud nyatanya harus mengikuti versi masing-masing. [Prinsip desain Pi](https://pi.dev/docs/latest/usage#design-principles) · [Penjelasan fitur OMP](https://github.com/can1357/oh-my-pi) · [Perbandingan fitur Selesai](https://selesaiintech.github.io/selesai-code/why-selesai/)

## Jalur pertama: lanjut memakai Pi versi asli

Jika Anda masih berlatih “membuat Agent menemukan direktori yang tepat, mengubah file yang benar, dan menyerahkan hasil yang dapat diperiksa”, saya tetap merekomendasikan menyelesaikan dulu [tugas pertama](/guide/first-task) dan [file serta direktori kerja](/guide/files-and-context) pada Pi versi asli. Dengan sedikit tool dasar, lebih mudah melihat dengan jelas: langkah mana yang merupakan penilaian model, dan langkah mana yang benar-benar mengubah disk lewat tool. Saat memerlukan Subagent, riset web, atau UI khusus, baru tambahkan satu ekstensi yang sudah diperiksa sesuai tugas. Dengan begitu Anda tahu masalah apa yang dipecahkan kemampuan baru itu, dan dapat mempersempit lingkup penelusuran saat terjadi error.

Pi versi asli **bukan versi yang kekurangan fitur**: ia sudah memiliki infrastruktur seperti penggantian model, penyimpanan sesi, percabangan dan pemadatan, Extension, serta Skill. Alur kerja yang tidak dibangunkan sering kali memang sengaja diserahkan penulis kepada pengguna untuk dikombinasikan, bukan karena tidak bisa dilakukan. [Petunjuk penggunaan resmi Pi](https://pi.dev/docs/latest/usage)

## Jalur kedua: OMP, lebih menekankan tool kode

Perbedaan mencolok OMP ada pada **antarmuka pemahaman dan eksekusi kode**. README resminya menampilkan fitur seperti navigasi dan penggantian nama LSP, debugging DAP, pencarian dan penyuntingan terstruktur, operasi browser, panel Subagent, serta peran multi-model. Bagi orang yang sering menemukan definisi di repositori kode besar, merefaktor lintas file, dan menelusuri kegagalan saat berjalan, pintu masuk ini dapat mengurangi pekerjaan memasang dan menyambung tool sendiri. [Penjelasan proyek OMP](https://github.com/can1357/oh-my-pi)

![Beranda repositori GitHub OMP, menampilkan can1357/oh-my-pi, deskripsi proyek, dan daftar file publik](/images/pi-forks-omp-github-2026-09-14.webp)

*Tangkapan halaman repositori OMP (14 September 2026). Nama repositori dan pintu masuk proyek dapat dicocokkan dari sini; Star, versi, dan waktu aktivitas akan terus berubah. [Lihat gambar besar](/images/pi-forks-omp-github-2026-09-14.webp).*

<!-- Tangkapan layar menyusul: antarmuka asli OMP, utamakan menampilkan LSP/debugging atau Agent Hub; keterangan gambar mencantumkan versi, model yang dipilih, dan operasi yang terlihat, tanpa menampilkan kredensial atau path pribadi. -->

Harganya adalah cakupan belajar yang lebih luas: tool yang lebih banyak tidak otomatis membuat tugas lebih andal. Anda perlu melihat jelas apakah suatu pemanggilan hanya membaca, mengusulkan perubahan, atau sudah menulis ke disk; hasil pembagian kerja Subagent tetap harus kembali ke kebutuhan awal, pengujian, dan pemeriksaan diff. Angka performa dalam README OMP adalah keterangan pihak proyek untuk tugas dan versi tertentu, **dan tidak dapat langsung disimpulkan bahwa model, proyek, atau biaya Anda sendiri akan memperoleh hasil yang sama**.

OMP adalah perintah mandiri `omp`. Saat ini dokumentasi resminya mencantumkan skrip instalasi macOS/Linux, Homebrew, Bun, dan jalur Windows PowerShell; pembaca Mac dapat melihat dulu [bagian instalasi resmi](https://github.com/can1357/oh-my-pi#install), lalu memilih cara yang cocok. Pengaturan pengguna asli OMP biasanya berada di `~/.omp/agent/`, dan sumber daya proyek di `.omp/`; jangan menyalin langkah `.pi/` dari buku ini mentah-mentah ke sana. [Penjelasan konfigurasi OMP](https://github.com/can1357/oh-my-pi/blob/main/docs/config-usage.md)

**Saya akan merekomendasikan OMP dalam situasi ini:** Anda sudah bisa me-review perubahan Agent, sering perlu navigasi kode, debugging, atau review paralel, dan bersedia mempelajari lebih banyak tool bawaan. Jika baru pertama kali meminta Agent merapikan file, menjalankan dulu jalur utama Pi lebih memudahkan penilaian apakah tool itu benar-benar membantu.

## Jalur ketiga: Selesai Code, lebih menekankan alur kerja satu paket

Pilihan inti Selesai adalah **memelihara dan merilis satu set kemampuan bersama-sama**. Halaman perbandingan resminya mencantumkan pembagian kerja Subagent, riset web, pencarian kode publik, pesan dan serah terima sesi, memori persisten, tampilan terminal, dan lain-lain sebagai kemampuan yang disediakan bersama produk. Pembaca tidak perlu memilih banyak plugin dari nol untuk mencoba alur “riset → pembagian kerja → eksekusi → pemeriksaan → serah terima”. [Perbandingan fitur Selesai](https://selesaiintech.github.io/selesai-code/why-selesai/)

![Beranda repositori GitHub Selesai Code, menampilkan SelesaiInTech/selesai-code, deskripsi proyek, dan daftar file publik](/images/pi-forks-selesai-github-2026-09-14.webp)

*Tangkapan halaman repositori Selesai Code (14 September 2026). Nama repositori dan pintu masuk proyek dapat dicocokkan dari sini; Star, versi, dan waktu aktivitas akan terus berubah. [Lihat gambar besar](/images/pi-forks-selesai-github-2026-09-14.webp).*

<!-- Tangkapan layar menyusul: antarmuka asli Selesai, utamakan menampilkan pembagian kerja Subagent, riset web, atau serah terima; keterangan gambar mencantumkan versi dan status tugas, tanpa menampilkan kredensial atau path pribadi. -->

Penekanannya berbeda dari OMP: Selesai lebih menekankan satu set ekstensi dan skill yang terkoordinasi, serta kesinambungan sesi panjang. Misalnya `/handoff-new` dipakai untuk menghasilkan prompt serah terima yang dapat diedit, dan `/undo` dipakai untuk membatalkan perubahan `edit` dan `write` yang dapat dilacak pada putaran ini; ia akan menandai perintah Bash yang mungkin mengubah file, tetapi **tidak otomatis membatalkan efek yang ditimbulkan perintah itu**. Dokumentasi resmi juga menandai git-backed rewind checkpoints sebagai kemampuan opsional, yang tidak seharusnya ditulis sebagai aktif secara bawaan. [Batas undo Selesai](https://selesaiintech.github.io/selesai-code/capabilities/continuity/undo/) · [Daftar fitur](https://selesaiintech.github.io/selesai-code/capabilities/)

Paket rilis Selesai adalah `@selesai/code`, dan perintah untuk menjalankannya adalah `selesai`. Dokumentasi resmi merekomendasikan instalasi lewat npm; status tingkat pengguna berada di `~/.selesai/agent/`, dan sumber daya proyek di `.selesai/`. Ia mendukung konfigurasi Provider sendiri, dan juga menyediakan akses model token.in yang opsional; **memakai Selesai tidak mengharuskan membeli token.in**, dan apakah kredensial model yang ada berlaku tetap harus diperiksa butir demi butir. [Petunjuk memulai resmi](https://selesaiintech.github.io/selesai-code/get-started/) · [README proyek](https://github.com/SelesaiInTech/selesai-code)

**Saya akan merekomendasikan Selesai dalam situasi ini:** Anda sudah tahu cara menetapkan syarat berhenti dan standar verifikasi untuk tugas, tetapi tidak ingin merakit banyak ekstensi secara manual, dan ingin langsung mencoba alur kerja yang menyatukan multi-Agent, riset, dan serah terima. Saat tugasnya sederhana, aktifkan juga hanya kemampuan yang diperlukan saat itu, agar pembagian kerja itu sendiri tidak dianggap sebagai hasil.

## Bagaimana memilih agar ketiga tool tidak menjadi beban

1. **Tentukan dulu tugasnya.** Untuk tugas file tingkat pemula dan memahami Agent Loop, pilih Pi; untuk navigasi kode lintas file, refaktor, atau debugging, coba OMP; untuk riset bertahap, pembagian kerja, dan serah terima sesi panjang, coba Selesai.
2. **Coba satu tool baru dalam satu waktu.** Gunakan direktori latihan yang tidak berisi materi pribadi, bandingkan dengan model yang sama dan tugas yang mirip, agar perbedaan kualitas model tidak salah dinilai sebagai perbedaan Agent.
3. **Bandingkan hanya hasil yang terlihat.** Catat apa yang benar-benar dibaca dan ditulis tool, apakah persyaratannya terpenuhi, berapa banyak pemanggilan atau kuota yang dipakai, dan apakah error dapat dipulihkan. Antarmuka yang tampak lebih ramai tidak berarti hasilnya lebih akurat.
4. **Periksa biaya dan izin secara terpisah.** Ketiganya mungkin menjalankan perintah lokal dan membaca file; membeli paket model juga tidak otomatis memberi semua Agent izin login yang sama. Periksa dulu Provider dan kredensial yang dipilih, gunakan lingkungan terisolasi untuk proyek sensitif, dan tinjau diff akhirnya. [Penjelasan keamanan Pi](https://pi.dev/docs/latest/security) · [Batas keamanan Selesai](https://github.com/SelesaiInTech/selesai-code#pi-compatible-core)

### Satu tugas perbandingan yang dapat dipakai ulang

Pada **salinan** yang sama, mintalah ketiga Agent menyelesaikan tugas berikut: “Beri tahu saya dulu bagaimana cara menjalankan pemeriksaan di proyek ini; hanya baca, jangan ubah file, jangan jalankan instalasi atau pengujian. Sebutkan file yang benar-benar Anda lihat beserta dasarnya.” Periksa dulu apakah jawabannya mengacu pada file nyata, baru putuskan apakah Anda memberi izin untuk langkah berikutnya. Pada putaran kedua barulah berikan tugas perbaikan kecil, jalankan pengujian secara independen, dan bandingkan diff akhirnya. Perbandingan ini hanya membantu Anda menilai pengalaman pemakaian pada versi dan model saat ini, bukan peringkat performa secara umum.

<!-- Tangkapan layar menyusul: jika ada tangkapan hasil ketiga Agent menjalankan tugas yang sama, letakkan di sini; setiap gambar hanya membuktikan hasil yang terlihat di dalamnya, dan tidak dapat dijadikan dasar untuk mengklaim tinggi-rendah performa secara umum. -->

Untuk terus memahami dari mana perbedaan ini berasal, baca [Cara kerja Pi](/guide/how-pi-works) dan [Bagaimana Subagent membagi kerja](/guide/subagents); untuk benar-benar berganti tool, buka dulu [repositori resmi OMP](https://github.com/can1357/oh-my-pi) atau [halaman memulai resmi Selesai](https://selesaiintech.github.io/selesai-code/get-started/) untuk memeriksa versi saat ini.