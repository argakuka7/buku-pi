---
title: 'Pengantar: Mengapa membaca Buku Pi ini'
description: Pahami dulu apa itu Pi, untuk siapa ia cocok, dan mengapa Buku Pi ini dimulai dari satu hal kecil yang bisa diverifikasi.
prev:
  text: Alur utama Buku Pi
  link: /guide/
next:
  text: Sepuluh penilaian yang tersisa dari 98 tweet
  link: /guide/lasting-principles
---

<span class="library-status">INTRODUCTION · Mulai dari sini</span>

# Mengapa membaca Buku Pi ini

Anda mungkin sudah pernah memakai ChatGPT, Claude, atau produk obrolan lain: buka jendela, ajukan pertanyaan, tunggu jawaban. Saat pertama kali membuka Pi, ia juga tampak seperti jendela terminal tempat mengetik teks, tetapi itu bukan cara terbaik untuk memahaminya.

Pi secara resmi didefinisikan sebagai **[Agent Harness](https://pi.dev/)** yang minimalis dan dapat diperluas. Model bertugas memahami dan menghasilkan, sedangkan Harness menghubungkan model, tool, Session, konteks, dan direktori kerja Anda. Ia dapat membaca file, mengubah isi, menjalankan perintah, dan menyesuaikan diri dengan cara kerja Anda melalui Skill dan Extension. Karena itu, Pi bukan “sekadar jendela obrolan lain”, melainkan fondasi Agent yang bisa Anda kuasai dan ubah.

## Posisinya dibanding Claude Code dan Codex

Claude Code, Codex, dan Pi semuanya dapat membawa model ke pekerjaan nyata, tetapi pilihan desain produknya berbeda. Mempelajari Pi bukan untuk membuktikan bahwa ia “karakter programmer yang lebih kuat”, dan bukan untuk menggantikan semua alat lain.

Ciri Pi adalah intinya tetap kecil, dengan lebih banyak keputusan alur kerja diserahkan kepada pengguna. Secara default, versi resmi menyediakan kemampuan dasar yang berfungsi, tetapi [tidak mengunci Subagent, Plan Mode, pop-up izin, dan sebagainya sebagai satu-satunya jawaban](https://pi.dev/#what-we-didnt-build). Anda bisa terus memakai cara default, atau menambahkan satu kemampuan dengan Extension, Skill, template, atau Package setelah benar-benar menemui kebutuhan.

Kebebasan ini memiliki dua sisi: Anda lebih mudah menjadikan alat itu milik Anda sendiri, tetapi juga harus lebih jelas tentang apa yang Anda pasang, izin apa yang Anda buka, dan bagaimana hasil akhirnya diverifikasi.

## Di mana pemula berbahasa Mandarin benar-benar tersendat

Kebanyakan orang tidak tersendat pada konsep abstrak Agent, melainkan pada beberapa masalah yang sangat nyata.

1. **Akun dan akses model.** Memasang Pi tidak berarti sudah mendapatkan model. Anda tetap perlu memakai [login langganan atau API Key yang didukung](https://pi.dev/docs/latest/providers).
2. **Biaya dan kuota.** Langganan dan API adalah cara akses yang berbeda; pemanggilan API mungkin ditagih sesuai pemakaian, dan langganan pun bisa memiliki batas kuota. Pastikan dulu apa yang bisa Anda pakai, baru mulai tugas panjang.
3. **Jalur dan terminal di Windows.** Perintah macOS tidak bisa begitu saja disalin ke PowerShell. Situs ini menyediakan jalur Git Bash khusus untuk Windows, dan memberikan padanannya di pelajaran berikutnya.
4. **Ketidakpastian akibat plugin.** Memasang banyak plugin sejak awal membuat Anda tidak bisa menentukan apakah suatu kemampuan berasal dari Pi, model, atau ekstensi pihak ketiga, dan sulit melacak penyebabnya saat terjadi kegagalan.

Karena itu, buku ini tidak akan langsung memberi Anda daftar lengkap semua fitur. Tahap pertama hanya meminta Anda menyiapkan direktori tersendiri, menyelesaikan login, dan membuat Pi menuntaskan satu hal kecil yang bisa Anda periksa sendiri.

## Lima pendirian yang dipegang edisi ini

- **Kerjakan dulu satu hal kecil.** Belajar mengajukan tugas, memeriksa hasil, dan memverifikasi secara mandiri lebih penting daripada menghafal semua konsep.
- **Tambahkan satu variabel dalam satu waktu.** Pakai dulu kemampuan default; saat menemui kebutuhan yang jelas, cobalah satu Skill atau Extension, dan periksa apakah ia benar-benar berfungsi.
- **Ringkasan Agent bukan verifikasi.** Apakah file bisa dibuka, data lengkap, dan pengujian lulus harus dikonfirmasi oleh bukti eksternal.
- **Batasan tertulis bukan sandbox.** “Jangan mengakses di luar direktori” adalah keterangan cakupan tugas, dan tidak mencabut izin proses di sistem operasi.
- **Fakta dinamis harus disertai tanggal.** Model, cara login, perintah, dan ekosistem semuanya berubah; saat melihat konten dinamis, berpeganglah pada tanggal verifikasi di halaman dan dokumentasi resmi.

## Cara membaca buku ini

Jika ingin langsung praktik, masuklah ke [Praktik dari nol](/guide/start-here), selesaikan instalasi, autentikasi, dan tugas pertama sesuai platform, lalu kembali untuk memahami prinsipnya. Jika ingin membaca secara sistematis, lanjutkan dengan urutan Pengantar, sepuluh penilaian, pedoman, Prolog, dan lima modul. Kisah penulis dan sepuluh penilaian bukan prasyarat instalasi.

Pembaca yang sudah bisa memakai Pi secara stabil dapat memilih modul terkait dari [alur utama Buku Pi](/guide/); saat menemui konsep konkret, barulah periksa [buku panduan referensi](/reference/); jika ingin tahu bagaimana penilaian itu terbentuk, lihat kembali [Catatan belajar](/journey/). Terjemahan berlisensi resmi menyediakan pembahasan lengkap penulis asli, tetapi tidak menggantikan jalur operasi berbahasa Mandarin dalam pelajaran.

Halaman berikutnya akan menampilkan secara terpusat penilaian yang berulang kali muncul dalam 98 tweet dan masih berlaku hingga edisi ini diselesaikan. Tweet asli mempertahankan eksplorasi dan perubahan pada masanya, sedangkan Buku Pi hanya menanggung kesimpulan saat ini.

## Bacaan lanjutan

- [Sepuluh penilaian yang masih berlaku](/guide/lasting-principles)
- [Pedoman dan keterangan edisi belajar terbuka 2026](/guide/edition-2026)
- [Situs resmi Pi](https://pi.dev/)
