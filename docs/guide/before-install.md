---
title: Sebelum instalasi, siapkan dulu terminal dan lingkungan
description: Buka terminal, buat direktori latihan yang aman, periksa Node.js dan npm.
prev:
  text: 'Prolog: Kenali dulu penulis Pi, Mario Zechner'
  link: /guide/mario-zechner
next:
  text: Memasang Pi dan Membukanya untuk Pertama Kali
  link: /guide/install-pi
---

<span class="library-status">MODULE 01 · Instalasi dan pengaturan dasar</span>

# Sebelum instalasi, siapkan dulu terminal dan lingkungan

Petunjuk instalasi sering kali hanya berisi satu baris perintah, tetapi pemula justru mudah tersendat di bagian yang lebih awal. Di mana perintah harus diketik? Sekarang sedang berada di direktori mana? Apakah komputer punya lingkungan runtime yang dibutuhkan Pi?

Pelajaran ini hanya menangani tiga hal tersebut. Untuk sementara jangan memasang Extension, Skill, atau Package pihak ketiga, dan jangan menaruh file asli ke area latihan.

::: info Lingkungan pelajaran ini
Alur utama ditulis untuk macOS. Linux dapat memakai perintah pemeriksaan yang sama; jika tidak ada direktori `~/Downloads`, ganti `~/Downloads/pi-practice` di pelajaran ini serta langkah instalasi dan login berikutnya dengan `~/pi-practice` secara seragam. Pengguna Windows jangan mengubah perintah di halaman ini sendiri; gunakan [Jalur instalasi Windows berbahasa Mandarin](/guide/windows-setup) yang lengkap: halaman itu dimulai dari Git Bash, Node.js, dan direktori latihan, lalu menuntun Anda sampai menjalankan Pi untuk pertama kali.
:::

## Kenali dulu jendela ini: masukan dan keluaran bukan hal yang sama

Terminal adalah jendela untuk berbicara dengan komputer memakai keyboard. Yang Anda ketik pada baris dengan kursor adalah **perintah**; teks yang ditampilkan komputer setelah Anda menekan Enter adalah **keluaran**. Saat keluaran selesai, akan muncul kembali baris yang bisa diketik beserta kursor yang berkedip.

- `Return` (Enter) akan menjalankan baris saat ini; setiap isi kotak kode di halaman ini harus diketik sampai selesai lalu tekan Enter sekali.
- Teks `/Users/...`, nomor versi, dan pesan kesalahan di luar kotak kode adalah “apa yang seharusnya Anda lihat”; jangan mengetikkannya lagi.
- Seret mouse untuk memilih seluruh baris di kotak kode, tekan `Command + C` untuk menyalin; klik kembali ke kursor yang berkedip di terminal, lalu tekan `Command + V` untuk menempel. Setelah menempel, lihat dulu sekilas: isinya harus sama persis dengan kotak kode, baru tekan Enter.
- Pintasan salin dan tempel di Linux berbeda-beda tergantung terminal; Anda bisa memakai menu terminal atau menu klik kanan, pastikan isi yang ditempel lengkap sebelum menekan Enter.
- Saat perintah sedang dijalankan, tunggu dulu. Munculnya baris baru yang bisa diketik berarti perintah itu sudah selesai; jangan menekan Enter berulang-ulang saat menunggu, dan jangan menempelkan perintah berikutnya.

Jika Anda salah menyalin teks, tekan dulu `Control + C` di terminal untuk mengosongkan masukan yang belum dijalankan, lalu tempel ulang. `Control + C` di sini hanya untuk membatalkan teks yang belum di-Enter; jangan memakainya sembarangan pada perintah instalasi yang sedang berjalan.

## 1. Buka lokasi masukan yang benar

Di Mac, saya paling merekomendasikan [iTerm2](https://iterm2.com/); jika belum memasangnya, aplikasi “Terminal” bawaan sistem juga bisa menyelesaikan seluruh langkah pemula di buku ini. Tekan `Command + Space`, ketik “iTerm” atau “Terminal”, lalu tekan Enter. Setelah melihat jendela dengan kursor, ketik baris berikut dan tekan Enter. Pembaca Linux dapat membuka terminal di distribusinya dan menjalankan perintah pemeriksaan yang sama.

```bash
pwd
```

`pwd` berarti “saya sekarang ada di mana”. Misalnya, Anda mungkin melihat:

```text
/Users/nama-pengguna-Anda
```

Baris ini adalah keluaran, tidak perlu diketik. Jika kursor muncul kembali di bawahnya, artinya terminal sudah siap menerima perintah berikutnya.

### Pemeriksaan singkat

- [ ] Saya hanya mengetik `pwd`, bukan contoh path-nya.
- [ ] Saya melihat path yang diawali `/Users/`, dan kursor sudah kembali ke baris berikutnya.

## 2. Buat direktori latihan khusus

Jangan menjalankan Pi di akar direktori unduhan, di basis pengetahuan Obsidian, atau di repositori kode yang sedang Anda kerjakan. Siapkan dulu area latihan yang kosong untuknya.

```bash
mkdir ~/Downloads/pi-practice
cd ~/Downloads/pi-practice
pwd
ls -A
```

Keempat baris ini harus dijalankan secara berurutan: jalankan `mkdir` lebih dulu dan tunggu kursor kembali; lalu jalankan `cd`; kemudian jalankan `pwd` dan `ls -A`. Dua baris pertama biasanya tidak menampilkan teks apa pun saat berhasil, dan kembali langsung ke baris yang bisa diketik adalah hal normal. `pwd` harus berakhir dengan `/Downloads/pi-practice`, dan `ls -A` di akhir baru menunjukkan direktori kosong jika tidak menampilkan nama file apa pun.

Jika perintah pertama menampilkan `File exists`, jangan dulu masuk ke direktori itu. Di dalamnya mungkin masih tersimpan isi latihan lama. Ganti dengan nama baru, misalnya `pi-practice-2`, lalu ulangi tiga langkah di atas. Saat pelajaran berikutnya menyebut `pi-practice`, gantilah dengan nama yang benar-benar Anda pakai.

### Pemeriksaan singkat

- [ ] `mkdir` tidak menampilkan `File exists` atau kesalahan lain.
- [ ] Bagian terakhir `pwd` adalah `Downloads/pi-practice`; jika saya memakai nama baru, bagian terakhirnya adalah nama baru itu.
- [ ] `ls -A` tidak mencantumkan nama file.
- [ ] Direktori ini khusus untuk latihan, dan di dalamnya belum ada catatan, foto, kode, atau file kerja saya.

## 3. Periksa Node.js dan npm

Cara instalasi Pi melalui npm memerlukan Node.js dan npm. Jalankan di direktori latihan:

```bash
node --version
npm --version
```

Jika kedua baris mengembalikan nomor versi dan Node.js tidak lebih rendah dari `22.19.0`, Anda bisa lanjut ke pelajaran berikutnya. Persyaratan versi minimum ini diverifikasi pada 2026-09-23; setelah diterbitkan, ikuti [Quickstart resmi Pi](https://pi.dev/docs/latest/quickstart).

Misalnya, baris pertama mungkin menampilkan `v22.19.0` atau versi yang lebih tinggi, dan baris kedua menampilkan rangkaian nomor versi lain. Angka spesifik nomor versi boleh berbeda; yang penting kedua perintah menghasilkan nomor versi, dan kursor kembali setelah setiap keluaran.

Jika melihat `command not found`, atau versi Node.js terlalu rendah, pasang dulu versi LTS terkini dari [halaman unduhan resmi Node.js](https://nodejs.org/en/download). Setelah menyelesaikan wizard instalasi resmi, tutup semua jendela terminal, buka terminal kembali, lalu kembali ke direktori latihan dan jalankan kedua perintah pemeriksaan ini.

Jika muncul kesalahan yang tidak Anda pahami, jangan lanjut mencoba perintah lain. Seret mouse dari “perintah yang Anda ketik” hingga baris kesalahan terakhir, tekan `Command + C` untuk menyalin, lalu tempel ke catatan sementara. Simpan perintah, keluaran lengkap, dan tangkapan layarnya; jika di dalamnya tanpa sengaja terdapat akun, kunci, atau path pribadi, tutupi dulu bagian tersebut sebelum mengirimkannya kepada orang lain.

::: warning Jangan lakukan ini dulu
Jangan menambahkan `sudo` di depan perintah npm sembarangan hanya untuk melewati kesalahan izin, dan jangan menjalankan perintah perbaikan PATH dari internet secara acak. Simpan pesan kesalahan lengkap agar masalah bisa dinilai dengan tepat nanti.
:::

### Pemeriksaan singkat

- [ ] Versi yang dikeluarkan `node --version` tidak lebih rendah dari `v22.19.0`.
- [ ] `npm --version` juga mengeluarkan nomor versi.
- [ ] Jika gagal, saya sudah menyimpan pesan kesalahan aslinya, bukan terus mencoba dengan perintah yang tidak saya pahami.

## Verifikasi pelajaran ini

- Saya bisa membuka terminal dan memakai `pwd` untuk melihat posisi saat ini.
- Saya sudah membuat direktori `pi-practice` yang kosong.
- `ls -A` tidak mencantumkan file, yang berarti direktori latihan kosong pada awalnya.
- `node --version` tidak lebih rendah dari persyaratan halaman ini, `npm --version` mengembalikan nomor versi, dan kursor muncul kembali setelah kedua perintah selesai.

[Pelajaran berikutnya, memasang dan menjalankan Pi →](/guide/install-pi)
