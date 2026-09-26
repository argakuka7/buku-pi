---
title: Masuk ke direktori latihan dan pastikan pengaturan dasar
description: Pahami direktori saat ini, model, dan kepercayaan proyek, lalu lalui verifikasi akhir modul instalasi.
prev:
  text: Login akun, agar Pi bisa menjawab Anda
  link: /guide/connect-model
next:
  text: Tugas pertama, pelajari dulu cara verifikasinya
  link: /guide/first-task
---

<span class="library-status">MODULE 01 · STEP 04</span>

# Masuk ke direktori latihan dan pastikan pengaturan dasar

Instalasi dan login sudah selesai, tetapi sekarang Anda masih perlu memastikan dari mana Pi akan mulai bekerja. Langkah ini langsung memengaruhi isi proyek yang dilihatnya, dan juga menentukan di mana file latihan pelajaran berikutnya diletakkan.

::: info Pengguna Windows
Lanjutkan memakai Git Bash, dan ganti `~/Downloads/pi-practice` dalam pelajaran ini serta pelajaran berikutnya menjadi `~/pi-practice`. Jika lupa padanan path-nya, kembali ke [Jalur instalasi Windows berbahasa Mandarin](/guide/windows-setup) untuk melihat tabel padanannya.
:::

## 1. Jalankan dari direktori yang jelas

Ketik `/quit` dulu di area edit bawah Pi, lalu tekan `Return`. Setelah Anda melihat kembali prompt perintah terminal biasa, jalankan baris per baris:

```bash
cd ~/Downloads/pi-practice
pwd
pi
```

Baris pertama masuk ke direktori latihan, baris kedua menampilkan posisi saat ini, baris ketiga menjalankan Pi. Tekan `Return` setiap kali selesai mengetik satu baris, dan tunggu perintah itu selesai sebelum mengetik baris berikutnya.

Jika pada pelajaran 1 Anda memakai `pi-practice-2` atau nama lain, ganti juga `pi-practice` di sini dengan nama direktori latihan Anda sendiri.

Hasil `pwd` seharusnya berakhir dengan `/Downloads/pi-practice`. Setelah Pi terbuka, lihat sekali lagi status bar di bagian bawah dan pastikan direktori kerja saat ini tidak berubah.

Jika `cd` menampilkan `No such file or directory`, itu berarti direktori latihan sebelumnya gagal dibuat atau namanya tidak sama. Kembali ke [Pemeriksaan sebelum instalasi](/guide/before-install) lalu buat ulang direktori dengan nama yang sama.

Jika direktorinya salah, jangan mengirim tugas. Keluar dari Pi, kembali ke terminal, dan `cd` lagi ke posisi yang benar.

## 2. Periksa hanya pengaturan yang diperlukan sekarang

Ketik `/model` dan pastikan sudah ada model yang dipilih. Jika perlu mengubahnya, pilih di daftar; jika ingin tetap memakainya pada peluncuran berikutnya, tekan `Ctrl+S` untuk menyimpannya sebagai model default.

Ketik `/settings` untuk membuka pengaturan yang umum dipakai. Pada tahap ini, biarkan nilai default saja sudah cukup. Tema, pemadatan konteks, dan opsi lain akan dibahas saat Anda benar-benar menghadapi kebutuhannya.

Jika tanpa sengaja membuka halaman pengaturan yang tidak dikenal, tekan `Esc` untuk kembali. Jangan mengikuti tangkapan layar orang lain dan mengubah banyak opsi pada pelajaran ini; tampilan bisa berbeda antar versi dan terminal.

## 3. Pahami kepercayaan proyek dengan benar

Direktori kosong yang benar-benar baru biasanya tidak memunculkan permintaan kepercayaan proyek. Pi baru mungkin bertanya apakah Anda mempercayainya ketika di dalam direktori terdapat konfigurasi `.pi` tingkat proyek, Extension, Skill, atau sumber daya proyek lain.

Percayai hanya proyek yang Anda buat sendiri atau sudah Anda periksa. Untuk repositori yang sumbernya tidak jelas, tolak dulu pemuatan sumber daya proyeknya, lalu periksa `.pi/` dan `.agents/skills/`.

Saat muncul permintaan kepercayaan, gunakan kartu keputusan minimal ini:

- Direktori latihan kosong yang baru Anda buat: pastikan dulu path dan isinya; tanpa sumber daya proyek biasanya tidak ada permintaan.
- Proyek yang Anda unduh dari orang lain: tolak atau keluar dulu, lalu di terminal biasa lihat saja file apa yang ada di `.pi/` dan `.agents/skills/`, baru baca isinya.
- Tidak tahu sumber filenya, tidak paham Extension atau skrip pemasangannya: jangan percayai pada pelajaran ini, dan jangan lanjut menjalankannya.
- Sudah memeriksa satu per satu dan memutuskan mempercayai: yang Anda setujui adalah "mengizinkan pemuatan sumber daya proyek", bukan memperoleh isolasi keamanan.

::: danger Project Trust bukan sandbox
Menolak sumber daya proyek tidak akan membatasi Pi ke direktori saat ini. Tool baca, tulis, edit, dan perintah bawaan tetap berjalan dengan izin pengguna saat ini. Jika Anda perlu isolasi yang sungguh-sungguh, gunakan container, mesin virtual, atau sandbox berbasis kebijakan.

Ada satu pengecualian lagi yang mudah terlewat: penjelasan resmi saat ini menyatakan bahwa file konteks seperti `AGENTS.override.md`, `AGENTS.md`, dan `CLAUDE.md` dimuat secara default dan tidak dilindungi oleh keputusan penolakan Project Trust, kecuali pemuatan file konteks dimatikan secara eksplisit. Saat menghadapi repositori asing, Anda tetap perlu memeriksa file-file itu lebih dulu, tidak boleh hanya memeriksa `.pi/`.
:::

## 4. Lakukan pemeriksaan akhir

Sebelum masuk ke tugas file pertama, pastikan satu per satu:

- [ ] Saya bisa membuka terminal dan melihat posisi saat ini dengan `pwd`.
- [ ] `node --version`, `npm --version`, dan `pi --version` semuanya mengembalikan nomor versi.
- [ ] Saya hanya menjalankan Pi di direktori latihan kosong yang baru dibuat pada pelajaran 1.
- [ ] Status bar di bagian bawah menampilkan direktori kerja dan model yang benar.
- [ ] Saya sudah menerima satu balasan model tanpa pemanggilan tool.
- [ ] Saya tahu cara menghentikan generasi dengan `Esc` dan keluar dari Pi dengan `/quit`.

Jika semua itu bisa dilakukan, Anda sudah memenuhi prasyarat untuk tugas pertama.

Setelah verifikasi selesai, Anda boleh tetap berada di area edit Pi karena pelajaran berikutnya langsung mulai dari sini; Anda juga bisa memakai `/quit` untuk kembali ke terminal biasa. Apa pun pilihan Anda, sebelum mengirim tugas di pelajaran berikutnya pastikan lagi `pwd` atau status bar masih menunjuk ke direktori latihan yang sama.

::: tip Jika ada satu bagian yang belum lolos
Berhenti di pelajaran saat ini dan selesaikan hanya bagian itu. Simpan teks galat selengkapnya, perintah yang Anda jalankan, dan hasil `pwd`. Jangan memasang ulang Node.js, Pi, dan terminal sekaligus, karena akan sulit menilai langkah mana yang benar-benar berhasil.
:::

[Pelajaran berikutnya, merapikan notulen rapat dan verifikasi independen →](/guide/first-task)

Jika Anda perlu memahami cara memutakhirkan, mengganti akun, atau menghapus, lihat [Manajemen siklus hidup setelah instalasi](/guide/lifecycle-management).

### Dasar modul ini

- [Pi Quickstart](https://pi.dev/docs/latest/quickstart)
- [Penjelasan penggunaan Pi](https://pi.dev/docs/latest/usage)
- [Penjelasan pengaturan Pi](https://pi.dev/docs/latest/settings)
- [Penjelasan keamanan Pi](https://pi.dev/docs/latest/security)
