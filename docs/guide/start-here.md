---
title: Menyelesaikan tugas Pi pertama dalam 30 menit
description: Pilih jalur terpendek sesuai sistem operasi, lalu selesaikan instalasi, koneksi, tugas file pertama, dan verifikasi mandiri di direktori latihan.
prev: { text: Beranda, link: / }
next: { text: Pemeriksaan sebelum instalasi, link: /guide/before-install }
---

# Menyelesaikan tugas Pi pertama dalam 30 menit

Saat pertama kali memakai Pi, jangan jadikan “antarmuka sudah terbuka” atau “model sudah membalas” sebagai garis akhir. Target Anda adalah membuat Pi membantu merapikan satu notulen rapat fiktif, memperoleh daftar tindakan yang bisa Anda periksa sendiri, dan memastikan masukannya tidak berubah.

Jalur ini memerlukan sekitar 30 menit jika jaringan dan lingkungan instalasi normal; kecepatan unduh, otorisasi browser, dan status akun bisa membuatnya lebih lama. Waktu bukan standar verifikasi; seluruh bukti di sisi kanan harus lolos agar dianggap selesai. Halaman ini hanya bertugas menunjukkan jalan, sedangkan operasi rincinya tetap mengikuti pelajaran terkait.

## Lihat dulu siklus lengkapnya

| Tahap | Perkiraan waktu | Halaman tujuan | Bukti kelulusan |
| --- | ---: | --- | --- |
| 1. Menyiapkan lingkungan | 5 menit | macOS/Linux: [Pemeriksaan sebelum instalasi](/guide/before-install); Windows: [Jalur instalasi berbahasa Mandarin](/guide/windows-setup) | Pemeriksaan terminal, direktori latihan, Node.js, dan npm lolos |
| 2. Memasang Pi | 5–10 menit | [Memasang dan menjalankan Pi](/guide/install-pi) | `pi --version` menghasilkan keluaran, bisa dijalankan dan keluar |
| 3. Menghubungkan model | 5 menit | [Login dan pengaturan model](/guide/connect-model) | Model membalas dengan tepat “Pi tersambung”, tanpa memakai tool |
| 4. Memastikan lokasi kerja | 2 menit | [Mulai dari direktori latihan](/guide/ready-to-work) | Direktori, model, dan keputusan kepercayaan di bilah status dapat Anda jelaskan dengan jelas |
| 5. Menyelesaikan tugas pertama | 10 menit | [Tugas pertama](/guide/first-task) | Fingerprint masukan tidak berubah, keluaran ada, tiga butir tindakan bersesuaian satu per satu |

::: tip Untuk putaran ini, tetap tanpa plugin
Tugas pertama tidak memerlukan Extension, Skill, Package, Subagent, Plan Mode, atau otomatisasi browser. Pastikan dulu instalasi, model, file, dan siklus verifikasi Pi versi asli berjalan normal; hanya ketika Anda menemui satu kebutuhan spesifik yang berulang, barulah masuk ke [Rekomendasi plugin](/plugins/) dan pilih satu solusi.
:::

## Sebelum mulai memakai Agent, siapkan empat hal ini

1. **Satu komputer yang bisa bekerja dengan stabil.** Saya lebih suka mengerjakan tugas baris perintah di Mac atau Linux; jika yang ada di tangan adalah Windows, itu juga bisa—Pi punya [jalur Windows resmi](https://pi.dev/docs/latest/windows), dan buku ini menyediakan [langkah berbahasa Mandarin yang lengkap](/guide/windows-setup). Jalankan dulu Node.js, terminal, dan Pi di perangkat yang ada; tidak perlu mengganti komputer hanya untuk memulai.
2. **Satu terminal yang nyaman dipakai.** Di Mac saya paling merekomendasikan [iTerm2](https://iterm2.com/); aplikasi ini hanya mendukung macOS, tetapi terminal bawaan sistem juga bisa menjalankan Pi. Di Linux, Anda bisa memakai terminal bawaan distribusi terlebih dahulu. Pemula di Windows sebaiknya memasang dan membuka **Git Bash** lebih dulu; jika menyukai antarmuka jendela [Windows Terminal](https://learn.microsoft.com/en-us/windows/terminal/install), pastikan yang benar-benar berjalan adalah Git Bash—jangan menganggap PowerShell yang terbuka secara default sebagai lingkungan perintah yang sama. [Penjelasan kompatibilitas terminal Pi](https://pi.dev/docs/latest/terminal-setup)
3. **Satu Agent yang sederhana dan dapat diperluas.** Saya merekomendasikan mulai dari [Pi Coding Agent](https://pi.dev/docs/latest/quickstart). Yang benar-benar dipasang di sini adalah aplikasi terminal lengkap dengan perintah `pi`, sedangkan `pi-agent-core` di lapisan bawah adalah komponen yang dipakainya; [keduanya bukan lapisan yang sama](/reference/faq#pi-vs-pi-coding-agent). Pi bertugas menghubungkan model, menata tool, dan menyimpan sesi; memasangnya sendiri tidak menyertakan kuota model. macOS/Linux bisa memilih installer resmi atau npm, sedangkan pemula Windows melanjutkan jalur Git Bash dari buku ini.
4. **Satu cara akses model yang bisa dipakai.** Jika ingin membayar sesuai pemakaian aktual, lihat dulu [API resmi DeepSeek](https://api-docs.deepseek.com/quick_start/pricing); jika ingin memakai model Codex dari OpenAI sekaligus menggunakan ChatGPT, Anda bisa mulai dari [ChatGPT Plus](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus) seharga $20 per bulan. Lihat dulu [empat pilihan dan batas aksesnya](/guide/connect-model#pilih-dulu-cara-akses-model-api-resmi-dan-langganan). Apakah Plus cukup untuk pemakaian jangka panjang bergantung pada volume tugas dan kuota saat itu; jika pemakaian tidak cukup, periksa dulu batas akun saat ini serta kuota tambahan atau paket yang lebih tinggi yang tersedia, baru putuskan apakah akan meningkatkan paket. Plus tidak mencakup pemakaian OpenAI API yang ditagih terpisah.

Setelah keempat hal ini siap, selesaikan dulu satu balasan nyata tanpa file, baru masuk ke tugas file. **Memasang Pi, login ke Provider, memilih model, dan menyelesaikan tugas adalah empat titik verifikasi yang berbeda**; keberhasilan langkah sebelumnya tidak bisa menjadi bukti untuk langkah berikutnya.

Informasi platform, terminal, dan cara akses model di atas terakhir diverifikasi pada **23 September 2026**; saat benar-benar membeli dan memasang, periksa lagi halaman resmi yang ditautkan dalam teks.

## Di luar Pi, ada dua jalur turunan

Buku ini memakai Pi versi asli untuk mengajarkan dasar, karena itu memudahkan melihat bagaimana model, tool, dan file benar-benar bekerja sama. Jika Anda sudah bisa menyelesaikan tugas dasar dan menginginkan lebih banyak kemampuan siap pakai, bacalah [Perbandingan OMP dan Selesai Code](/reference/pi-forks): OMP lebih menekankan navigasi kode, debugging, dan antarmuka tool; Selesai lebih menekankan Subagent lengkap, riset, dan serah terima sesi. Keduanya adalah Agent independen, bukan plugin Pi, dan memasangnya tidak otomatis memberi Anda kuota model.

## Temukan posisi Anda sekarang

| Kondisi saat ini | Mulai dari mana | Tanda selesai |
| --- | --- | --- |
| Belum memasang Pi di Mac atau Linux | [Pemeriksaan sebelum instalasi](/guide/before-install) → [Memasang Pi](/guide/install-pi) | Node.js, npm, dan Pi bisa mengembalikan nomor versi, bisa dijalankan dan keluar |
| Belum memasang Pi di Windows | [Pilihan jalur Windows dan praktik Git Bash](/guide/windows-setup) | Pilih satu lingkungan Windows; buat direktori latihan dan jalankan Pi pada jalur pemula Git Bash |
| Sudah terpasang, tetapi belum bisa membalas | [Login dan pengaturan model](/guide/connect-model) | Pastikan cara akses dan biaya, lalu terima satu balasan nyata |
| Sudah bisa menerima balasan | [Mulai dari direktori latihan](/guide/ready-to-work) → [Tugas pertama](/guide/first-task) | Menghasilkan daftar tindakan, tiga butir tindakan lengkap, file masukan tidak berubah |

Pengguna Linux dapat mengikuti perintah umum macOS/Linux, dengan fingerprint file memakai `sha256sum`. Buku ini tidak menyediakan tutorial antarmuka desktop Linux layar demi layar.

## Apa yang harus tersisa dari keberhasilan pertama

- Keluaran nyata `pi --version`, serta satu balasan “Pi tersambung” yang tepat.
- `input/notulen-rapat.md`: bahan tetap yang Anda periksa sendiri.
- `output/daftar-tindakan.md`: berisi butir tindakan, penanggung jawab, tenggat waktu, dan peringatan risiko.
- Verifikasi fingerprint masukan lolos, keluaran berisi tepat tiga butir tindakan.

Jika perintah tidak ditemukan, model tidak membalas secara nyata, file tidak ada, kolom terlewat, atau masukan berubah, semuanya belum dianggap selesai. Kembalilah ke tahap terkait dan selesaikan hanya satu hal itu; jangan sekaligus memasang ulang Pi, mengganti Provider, memasang plugin, dan mengubah pengaturan terminal.

## Setelah selesai, bagaimana memilih langkah berikutnya

Jika ingin memahami apa yang baru saja terjadi, lanjutkan membaca [File dan direktori kerja](/guide/files-and-context), [Penyimpanan sesi](/guide/sessions), lalu ikuti [alur utama lengkap](/guide/). Jika ingin membangun gambaran konsep secara utuh lebih dulu, Anda bisa kembali ke [Pengantar](/guide/introduction) dan [Cara kerja Pi](/guide/how-pi-works).

Setelah menyelesaikan pelajaran dasar, gunakan [latihan pemindahan penataan konten](/cases/content-workflow) untuk menangani bahan yang saling bertentangan, atau [perbaikan kode kecil](/cases/code-repair) untuk melatih “mereproduksi kegagalan lebih dulu, baru memverifikasi perbaikan”. Setelah menyelesaikan pelajaran ke-14, masuklah ke [proyek kelulusan](/cases/graduation-project) dan rangkai metode sebelumnya menjadi satu alur kerja yang utuh.

## Saat macet, perkecil dulu masalahnya

Jika tidak bisa dijalankan, periksa [kegagalan startup](/reference/troubleshooting#cannot-start); jika tidak ada model, periksa [model dan autentikasi](/reference/troubleshooting#model-missing); jika hasil tidak ditemukan, periksa [kesalahan file dan direktori](/reference/troubleshooting#wrong-files). Saat meminta bantuan, sertakan bagian buku, sistem operasi, versi Pi, lokasi eksekusi, dan teks kesalahan setelah kredensial dihapus.
