---
title: Latihan migrasi · Memperbaiki program kecil
description: Mereproduksi kesalahan program daftar tindakan dengan empat tes tetap, meminta Pi memperbaikinya secara minimal, lalu memverifikasi sendiri tes dan cakupan perubahannya.
prev: { text: Latihan migrasi penyusunan konten, link: /cases/content-workflow }
next: { text: Proyek akhir, link: /cases/graduation-project }
---

# Memperbaiki program kecil

Anda sudah bisa memeriksa field daftar tindakan. Sekarang terapkan kebiasaan verifikasi yang sama pada kode: sebuah fungsi seharusnya menyaring item yang belum selesai dan mengurutkannya berdasarkan tanggal, tetapi item yang sudah selesai malah ikut masuk, dan daftar asli milik pemanggil pun berubah.

Untuk menyelesaikan contoh ini, Anda perlu sudah bisa menggunakan Pi dan memiliki Node.js 22 atau versi yang lebih baru. Materi ini tidak memiliki dependensi pihak ketiga, jadi tidak perlu menjalankan `npm install`. Program ini sengaja dibuat salah untuk pengajaran dan tidak berkaitan dengan kode produksi situs ini.

## 1. Mereproduksi kesalahan di direktori baru

Jalankan di terminal biasa; macOS, Linux, dan Windows Git Bash semuanya dapat memakai path direktori home berikut:

```bash
mkdir ~/pi-code-repair
cd ~/pi-code-repair
curl -fL https://pi-bluebook-id.pages.dev/examples/code-repair/action-list.mjs -o action-list.mjs
curl -fL https://pi-bluebook-id.pages.dev/examples/code-repair/action-list.test.mjs -o action-list.test.mjs
node --test action-list.test.mjs
```

Jika direktorinya sudah ada, ganti dengan nama baru agar perbaikan lama tidak menimpa keadaan awal. Baca dulu kedua file, lalu jalankan tes; kali ini seharusnya terlihat **4 tes, 2 lulus, 2 gagal**. Kegagalan itu adalah titik awal yang perlu dicatat. Jika sejak awal semuanya lulus, periksa dulu materi unduhan dan direktorinya.

Keempat tes memeriksa: mengecualikan item yang sudah selesai dan mengurutkan berdasarkan tanggal, tidak mengubah input, mempertahankan urutan asli untuk tanggal yang sama, dan mengembalikan daftar kosong dengan benar untuk array kosong. Format tanggal sudah dibatasi ke `YYYY-MM-DD` atau `null`; contoh ini tidak menangani tanggal berbahasa alami dan zona waktu.

Simpan salinan kedua file awal:

```bash
cp action-list.mjs action-list.before.txt
cp action-list.test.mjs tests.before.txt
pi --no-extensions --no-skills --no-context-files
```

## 2. Meminta Pi hanya memperbaiki satu file

Di Pi, masukkan:

```text
Baca action-list.mjs dan action-list.test.mjs, lalu jalankan
node --test action-list.test.mjs untuk mereproduksi kegagalan, dan jelaskan penyebabnya.
Ubah hanya action-list.mjs: kembalikan item yang belum selesai, tanggal urut menaik, tanggal tidak diketahui di paling akhir;
untuk tanggal yang sama pertahankan urutan asli, dan jangan mengubah array atau objek yang diteruskan.
Jangan mengubah tes, salinan awal, atau file lain; jangan memasang dependensi, dan jangan mengakses jaringan atau direktori lain.
Setelah diperbaiki, jalankan ulang tes dan laporkan lokasi perubahan serta hasil sebenarnya.
```

Cakupan eksekusi ditetapkan secara eksplisit oleh prompt, dan bukan sandbox sistem operasi. Seluruh latihan hanya memakai file pengajaran yang sudah ditinjau setelah diunduh.

## 3. Keluar dari Pi, verifikasi secara independen

Ketik `/quit` untuk kembali ke terminal biasa:

```bash
node --test action-list.test.mjs
cmp action-list.test.mjs tests.before.txt
diff -u action-list.before.txt action-list.mjs
ls -A
```

Sekarang seharusnya **4 lulus, 0 gagal**. File tes baru dinyatakan tidak diubah jika `cmp` tidak menghasilkan output dan kode keluarnya 0; `diff` seharusnya menunjukkan perubahan implementasi, dan nilai keluar 1 hanya berarti kedua file berbeda. Terakhir, periksa bahwa direktori hanya berisi dua program dan dua salinan awal, tanpa tambahan dependensi atau file yang tidak relevan.

Jangan menghapus tes, melonggarkan assertion, atau meng-hardcode jawaban contoh hanya agar lulus. Pahami struktur dasar perbaikannya: pertama hasilkan array baru berisi item yang belum selesai, lalu urutkan; tanggal yang tidak diketahui ditangani terpisah, dan urutan array asli tetap tidak berubah. Tes tetap yang ada hanya membuktikan cakupan kebutuhan ini, dan tidak membuktikan bahwa semua input pasti benar.

## Cara melanjutkan setelah gagal

Kembalikan nama tes yang gagal, nilai yang diharapkan, dan nilai sebenarnya ke Pi, lalu minta ia memperbaiki hanya masalah terkait. Jika file tes berubah, pertahankan kondisi lapangan dan mulai ulang di direktori baru; jangan menganggap “semua tes hijau” sebagai izin untuk mengubah perilaku tes.

Setelah selesai, Anda dapat melanjut ke [Proyek akhir](/cases/graduation-project) dan menerapkan metode yang sama pada repositori nyata yang memiliki navigasi, konten dua bahasa, dan pemeriksaan build.

## Catatan reproduksi pemelihara

Pada 12 September 2026, direproduksi di direktori latihan baru pada macOS menggunakan Pi `0.84.3` dan Node.js `24.14.1`: materi awal menghasilkan 2 lulus dan 2 gagal; setelah Pi hanya mengubah `action-list.mjs`, pemelihara menjalankan ulang secara independen dan memperoleh 4 lulus dan 0 gagal, serta memastikan file tes tidak berubah melalui perbandingan byte demi byte. Cara perbaikan bisa berbeda antar model; yang tetap menjadi acuan adalah hasil tes dan perbedaan file pada eksekusi Anda saat itu.
