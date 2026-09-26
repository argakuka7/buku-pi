---
title: Pedoman dan keterangan edisi belajar terbuka 2026
description: Menjelaskan cakupan edisi ini, jalur platform, tanggal verifikasi, batas pembaruan, aturan tangkapan layar, dan kepemilikan hak cipta.
prev:
  text: Sepuluh penilaian yang tersisa dari 98 tweet
  link: /guide/lasting-principles
next:
  text: 'Prolog: Kenali dulu penulis Pi, Mario Zechner'
  link: /guide/mario-zechner
---

<span class="library-status">EDITION NOTE · Edisi belajar terbuka 2026</span>

# Pedoman dan keterangan edisi belajar terbuka 2026

Ini adalah bluebook pembelajaran Pi yang ditujukan untuk pemula berbahasa Mandarin. Situs web akan terus dipelihara, sedangkan **edisi belajar terbuka 2026** adalah susunan konten yang cakupannya jelas serta dapat dikutip dan ditinjau ulang.

## Identitas edisi ini

| Item | Keterangan |
| --- | --- |
| Nama versi | Buku Pi · Edisi belajar terbuka 2026 |
| Dasar verifikasi edisi awal | 9 September 2026; halaman berikutnya diperbarui sesuai catatan verifikasinya masing-masing |
| Skala alur utama | 5 modul, 14 pelajaran |
| Platform utama | macOS; Windows memakai jalur terpisah untuk masuk ke alur utama yang sama |
| Status konten | Dapat dibaca publik; situs web terus disunting |
| Media edisi tetap | PDF belum diterbitkan, nantinya dihasilkan mengikuti susunan edisi ini |

“Edisi belajar terbuka” bukan berarti “semua halaman tidak akan pernah berubah”. Ia berarti sasaran pembaca, urutan belajar, pokok pendirian, dan batas konten edisi ini sudah ditetapkan; perubahan setelah penerbitan harus mengikuti aturan pemeliharaan di bawah.

## Pedoman membaca

### 1. Alur utama mengacu pada macOS, Windows lewat pintu masuk terpisah

Tangkapan layar, pintasan, dan direktori umum pada alur utama berbasis macOS. Pengguna Windows membaca dulu [Jalur Windows berbahasa Mandarin](/guide/windows-setup), menyelesaikan instalasi dan peluncuran pertama di Git Bash, baru kembali ke pelajaran ke-3. Pembaca Linux dapat memakai perintah umum macOS/Linux dan mengganti sendiri path direktori home.

### 2. Fakta dinamis lihat tanggal di halaman

Nama model, Provider, cara login, parameter perintah, harga, kuota, dan status proyek pihak ketiga semuanya dapat berubah. Saat membahas hal-hal ini, lihat juga tanggal pembaruan terakhir halaman, dan jadikan [dokumentasi resmi Pi](https://pi.dev/docs/latest) serta keterangan terkini dari penyedia layanan terkait sebagai acuan.

Buku ini tidak memelihara daftar harga model atau peringkat plugin. Angka spesifik yang sudah kedaluwarsa akan disunting atau diberi tanggal, tetapi promosi jangka pendek tidak akan diangkat menjadi anjuran jangka panjang.

### 3. Tangkapan layar membantu menemukan lokasi, bukan menggantikan langkah operasi

Tangkapan layar berfungsi memastikan area antarmuka, status, dan sinyal keberhasilan. Setelah antarmuka diperbarui, posisi tombol dan teks bisa berubah; pembaca harus terus menilai berdasarkan tujuan, langkah, dan verifikasi di isi teks, bukan hanya mencari tampilan yang persis sama.

Saat menyangkut hasil tingkat sistem, bukti yang sesuai harus dipakai. Misalnya, teks notifikasi yang tercetak di terminal tidak sama dengan notifikasi desktop yang benar-benar muncul; fitur yang tidak memiliki tangkapan layar sistem nyata dan skenario reproduksi akan ditandai jelas sebagai belum diverifikasi atau materi lanjutan.

### 4. Blok perintah secara default perlu dipahami baris demi baris

Nama direktori, nama file, dan nilai contoh di dalam perintah hanya berlaku untuk latihan terkait. Pastikan direktori saat ini sebelum menempelkan, dan jangan menuliskan API Key asli, kata sandi utama, path privat, atau kredensial produksi ke dalam prompt, tangkapan layar, dan repositori.

Operasi destruktif tidak otomatis menjadi aman hanya karena muncul di tutorial. Saat menemukan path yang tidak sesuai dengan lingkungan Anda, berhenti dulu dan periksa targetnya.

### 5. “Selesai” harus punya bukti eksternal

Setiap pelajaran memberikan tanda selesai atau langkah verifikasi. Rangkuman diri Agent, pesan sukses di peramban, dan satu baris keluaran di terminal hanya mewakili sebagian sinyal; pada akhirnya periksa file, konten, test, status jarak jauh, atau antarmuka nyata.

## Cara memelihara situs web dan edisi tetap

- **Situs web dapat terus disunting:** perbaiki salah ketik, tautan mati, perintah yang sudah berubah, dan tanggal verifikasi; tambahkan keterangan yang tidak mengubah struktur belajar.
- **Struktur edisi ini tetap stabil:** Pengantar, Prolog, lima modul, studi kasus, rekomendasi plugin, terjemahan berlisensi, dan lampiran membentuk daftar isi dasar edisi belajar terbuka 2026.
- **Perubahan besar dibuat sebagai edisi baru:** jika instalasi, konsep inti, atau jalur belajar Pi berubah secara struktural, perbarui keterangan edisi, bukan diam-diam menulis ulang pendirian edisi lama.
- **PDF memakai snapshot yang jelas:** PDF yang diterbitkan nanti akan mencantumkan tanggal pembuatan, batas akhir verifikasi konten, dan commit yang bersesuaian, agar mudah diunduh, dicetak, dan dikutip.

## Batas konten dan hak cipta

Tulisan dan kode orisinal situs ini diterbitkan mengikuti file lisensi di repositori. Terjemahan berlisensi resmi Earendil mempertahankan judul asli, penulis, tanggal, sumber, dan pernyataan lisensi, serta digunakan sesuai lisensi yang dinyatakan di halaman terjemahan.

Tangkapan layar pihak ketiga, gambar asli, merek dagang, dan konten kutipan tidak otomatis menjadi karya orisinal situs ini hanya karena muncul di sini, dan tidak otomatis berlaku di bawah MIT License situs ini. Kepemilikan spesifiknya mengacu pada atribusi halaman dan berkas `LICENSE-CONTENT.md` di repositori.

## Catatan pemeliharaan kali ini

12 September 2026: menambahkan pintu masuk praktik langsung, latihan pemindahan penataan konten dan perbaikan kode, merevisi sinkronisasi bilingual proyek kelulusan serta cakupan tool read-only; memulihkan pencarian di situs, dan menambahkan anchor halaman serta pemeriksaan konsistensi pembuatan versi tradisional. Antarmuka nyata Windows dan notifikasi desktop sistem masih termasuk lingkup verifikasi di perangkat nyata secara terpisah.

## Urutan daftar isi edisi ini

1. Pengantar: Mengapa membaca buku ini
2. Sepuluh penilaian yang tersisa dari 98 tweet
3. Pedoman dan keterangan edisi ini
4. Prolog: Mario Zechner dan asal-usul Pi
5. Lima modul belajar, 14 pelajaran
6. Studi kasus pendamping
7. Rekomendasi plugin dan peta pilihan
8. Terjemahan berlisensi resmi Earendil
9. Referensi dan lampiran

Situs web saat ini sudah membangun pintu masuk pembacaan untuk tiga item pertama; PDF akan dihasilkan pada putaran berikutnya mengikuti urutan buku ini.

## Lanjut membaca

- [Prolog: Kenali dulu penulis Pi, Mario Zechner](/guide/mario-zechner)
- [Alur utama lengkap Buku Pi](/guide/)
- Keterangan hak cipta konten repositori: `LICENSE-CONTENT.md`.
