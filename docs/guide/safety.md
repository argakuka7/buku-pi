---
title: Izin, isolasi, dan verifikasi
description: Bangun kesadaran akan prinsip hak paling minimal, input tidak tepercaya, isolasi, dan verifikasi manusia saat menggunakan Agent.
prev:
  text: Tugas berdurasi panjang dan VPS
  link: /guide/vps-and-long-running
next:
  text: CASE 08 · Proyek akhir
  link: /cases/graduation-project
---

<span class="library-status">MODULE 05 · STEP 14 · bisa dilatih</span>

# Izin, isolasi, dan verifikasi

Pi bukan hanya jendela chat. Ia dapat membaca dan menulis file, menjalankan perintah, dan Extension bahkan dapat menambah lebih banyak kemampuan. Inilah alasan ia mampu menyelesaikan tugas nyata, sekaligus alasan Anda harus serius menetapkan batasnya. Tool bawaan, Extension, dan proses lokal biasa berjalan dengan izin proses yang menjalankan Pi; Pi tidak memiliki sandbox bawaan atau dialog izin per operasi.

## Batasan teks bukan sandbox keamanan

Menuliskan “jangan mengakses direktori lain” di dalam tugas sangatlah perlu, karena itu menjelaskan cakupan kerja. Tetapi kalimat itu tidak membatalkan izin dari tingkat sistem operasi. Jika Pi berjalan dengan identitas pengguna Anda, perintah dan Extension yang dipanggilnya umumnya juga memiliki izin pengguna tersebut.

Saat menangani repositori, skrip, atau data yang tidak tepercaya, Anda memerlukan batas isolasi yang sungguhan seperti container, mesin virtual, atau akun khusus. Project Trust hanya menentukan apakah konfigurasi dan sumber daya tingkat proyek dimuat, bukan sandbox saat berjalan. Jangan terus menyetujui proyek yang asalnya tidak jelas.

Project Trust juga punya pengecualian yang jelas: `AGENTS.override.md`, `AGENTS.md`, dan `CLAUDE.md` secara default tetap dimuat sebagai file konteks. Menolak mempercayai bukan berarti “tidak membaca teks proyek apa pun”; untuk repositori asing, periksa dulu di lingkungan terisolasi, atau matikan pemuatan konteks semacam ini dengan `--no-context-files`, dan tetap patuhi prinsip hak paling minimal.

Dokumentasi repositori, komentar, dan keluaran build semuanya dapat memuat Prompt Injection. Project Trust tidak dapat secara andal mengenali atau mencegah konten semacam ini memengaruhi Agent; input yang tidak tepercaya tetap harus ditangani seperti kode dan data yang tidak tepercaya.

Container juga harus dilihat dari batas mount-nya: jika direktori kerja host di-mount ke dalam container dengan mode yang dapat ditulis, penulisan di dalam container tetap akan mengubah file host; tanpa sengaja me-mount `~/.pi/agent` juga akan mengekspos autentikasi dan sesi. Saat memakai Pi di host lalu mengarahkan sebagian tool ke lingkungan terisolasi, Extension lain juga dapat tetap berjalan di host. Sebelum benar-benar mengisolasi, Anda harus melihat dengan jelas di mana proses, file, kredensial, dan jaringan masing-masing berada.

## Empat pertanyaan sebelum mulai

Sebelum membiarkan Pi menjalankan proyek asing apa pun, jawab dulu:

1. Apakah sumber materinya tepercaya, dan apakah mungkin memuat teks yang menggiring Agent menjalankan operasi?
2. Apakah di dalam direktori ada kunci, data klien, atau file pribadi yang tidak berhubungan dengan tugas?
3. Apakah tugas akan menjalankan skrip yang tidak dikenal, memasang dependensi, atau mengakses jaringan?
4. Apakah tugas akan menimpa, memindahkan, menghapus file, atau mengirim konten ke luar?

Jika ada satu pun yang tidak dapat dijawab dengan jelas, hentikan eksekusi dulu. Anda dapat melakukan pemeriksaan read-only di salinan terisolasi, atau meminta orang yang berpengalaman meninjau ulang; jangan menganggap “saya sudah menulis larangan di prompt” sebagai kontrol izin.

## Tiga lapis pertahanan

### Lapis pertama adalah memperkecil cakupan

Gunakan direktori latihan mandiri, dan masukkan hanya materi yang diperlukan untuk menyelesaikan tugas. Jangan menaruh kata sandi, API Key, data klien, dan file pribadi yang tidak berhubungan dengan tugas di direktori yang sama.

### Lapis kedua adalah menyimpan titik pemulihan

Gunakan Git untuk proyek kode, dan simpan cadangan untuk dokumen serta materi. Sebelum operasi berisiko tinggi, minta Pi mendaftar target, jumlah, dan dampaknya lebih dulu, baru jalankan. Saat menghapus, utamakan cara yang dapat dipulihkan.

### Lapis ketiga adalah verifikasi independen

Jangan memakai ringkasan terakhir Agent sebagai satu-satunya bukti. Periksa hasil nyata sesuai jenis tugas:

- Merapikan file: periksa jumlah file, sidik asli, dan field konten.
- Mengubah kode: lihat diff perubahan, jalankan build dan test, lalu lakukan operasi manual pada antarmuka penting.
- Menerbitkan situs: akses domain resminya, periksa tampilan desktop dan ponsel, dan pastikan deployment sesuai commit terbaru.
- Mengirim ke luar: simpan konfirmasi manusia di langkah terakhir, periksa penerima, cakupan, dan lampiran.

## Saat terjadi masalah, jaga lokasinya tetap utuh

Jika Anda menemukan path yang salah, atau file yang seharusnya tidak diubah ternyata berubah, hentikan dulu operasi baru. Jangan langsung menyuruh Agent “bersihkan semuanya”, karena bisa jadi Anda sekaligus menghapus petunjuk penyelidikan. Catat dulu apa yang terjadi dan file mana yang terdampak, baru pulihkan dari Git atau cadangan.

Keamanan bukan satu tombol. Ia adalah satu set kebiasaan kerja yang dapat diulang: memperkecil cakupan, menyimpan titik pemulihan, mengamati aksi nyata, dan memverifikasi hasil secara independen.

## Latihan pemulihan tanpa merusak

Latihan ini tidak menghapus file. Andaikan Anda menemukan Agent mungkin salah menulis direktori, segera hentikan pengiriman tugas lebih lanjut, dan catat di terminal biasa:

```bash
pwd
date
find . -maxdepth 3 -type f -print
git status --short 2>/dev/null || true
```

Tuliskan perintah yang benar-benar dijalankan, galat yang terlihat, dan path yang dicurigai terdampak ke dalam catatan insiden sementara. Selanjutnya, hanya lihat diff atau cadangan, dan jangan langsung menjalankan pembersihan massal. Jika proyek memakai Git, Anda dapat melihat status dan diff; apakah akan memulihkan dan file mana yang dipulihkan, harus diputuskan secara terpisah setelah targetnya sudah jelas.

Inti dari urutan ini adalah menyimpan bukti: hentikan operasi baru → catat lokasi dan gejalanya → pastikan dampaknya → konfirmasi target pemulihan → jalankan pemulihan → verifikasi sekali lagi. Ini lebih terkendali daripada sekadar berkata “bersihkan semuanya”.

## Pemeriksaan penyelesaian seluruh buku

- Direktori latihan terpisah dari materi kerja nyata, dan tidak memuat kunci atau file pribadi.
- Anda dapat membedakan terminal biasa, area edit Pi, sumber daya proyek, dan batas isolasi sistem.
- Tugas penting memiliki input, output, nama sesi, checkpoint, dan jalur pemulihan.
- Asal Skill atau Extension dapat dibaca, cakupan pemuatannya jelas, dan dapat dinonaktifkan.
- Hasil tugas diverifikasi lewat file, diff, test, atau antarmuka nyata, bukan hanya dari rangkuman Agent.
- Pengiriman ke luar, pembayaran, publikasi, dan operasi yang tidak dapat dipulihkan tetap menyimpan konfirmasi manusia.

Jika hal-hal ini belum dapat Anda lakukan secara konsisten, kembali dulu ke pelajaran terkait atau [studi kasus](/cases/), jangan buru-buru memperluas pekerjaan ke repositori asing, tugas tanpa pengawasan dalam jangka panjang, atau lingkungan berizin tinggi.

### Dasar bab ini

- [Pi Security](https://pi.dev/docs/latest/security)
- [Pi Containerization](https://pi.dev/docs/latest/containerization)
- [Project Trust dalam Panduan penggunaan Pi](https://pi.dev/docs/latest/usage#project-trust)

Batas keamanan dan Project Trust diverifikasi pada 2026-09-09.
