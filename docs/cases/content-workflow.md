---
title: Latihan migrasi · Dari materi menjadi draf yang bisa diverifikasi
description: Dengan satu brief yang sudah dikonfirmasi dan satu catatan diskusi lama, latih prioritas sumber, penelusuran fakta, hal yang belum diketahui, dan penyuntingan manual.
prev: { text: Studi kasus, link: /cases/ }
next: { text: Perbaikan kode skala kecil, link: /cases/code-repair }
---

# Dari materi menjadi draf yang bisa diverifikasi

Saat merapikan artikel, masukannya sering kali lebih dari satu file. Dalam diskusi lama, acara yang sama disebut merekrut 20 orang, sedangkan brief terbaru hanya mengonfirmasi 12 orang; lokasi dan waktunya pun belum ditetapkan. Jika Anda langsung meminta Agent “menulis pengumuman yang menarik”, usulan lama bisa ikut ditulis sebagai fakta.

Latihan ini melanjutkan metode verifikasi file dari [tugas pertama](/guide/first-task), dengan satu aturan tambahan: setiap fakta harus bisa ditelusuri kembali ke sumbernya. Materinya adalah klub baca fiktif yang tidak merujuk pada acara nyata, dan hasil akhirnya hanya draf yang menunggu konfirmasi.

## 1. Siapkan dua jenis sumber

Jalankan di terminal biasa; macOS, Linux, dan Windows Git Bash semuanya bisa dipakai:

```bash
mkdir ~/pi-content-workflow
cd ~/pi-content-workflow
mkdir source output
curl -fL https://buku-pi-dariargakuka.netlify.app/examples/content-workflow/confirmed-brief.md -o source/confirmed-brief.md
curl -fL https://buku-pi-dariargakuka.netlify.app/examples/content-workflow/old-note.md -o source/old-note.md
cp source/confirmed-brief.md confirmed-before.txt
cp source/old-note.md old-before.txt
```

Jika direktori sudah ada, mulailah lagi dengan nama baru. Setelah membaca kedua materi, pastikan tanggal brief yang sudah dikonfirmasi lebih baru, dan nyatakan dengan jelas bahwa diskusi lama harus tunduk padanya. Nama file dan kata “terbaru” tidak dengan sendirinya menjadi bukti kredibilitas; kali ini prioritas sumber ditetapkan secara eksplisit oleh materi tetap yang sudah ditinjau.

## 2. Buat tabel fakta dulu, baru tulis draf

Jalankan Pi:

```bash
pi --no-extensions --no-skills --no-context-files
```

Kirim:

```text
Baca dua materi fiktif di source, lalu tulis hanya output/brief.md.
Buat dulu tabel fakta yang memuat pokok bahasan, nilai yang dipakai, file sumber beserta kutipan singkat aslinya, serta konflik atau hal yang belum diketahui.
Brief yang sudah dikonfirmasi lebih diutamakan daripada diskusi lama; usulan lama tidak boleh berubah menjadi fakta yang sudah pasti.
Setelah itu tulis satu paragraf pengantar acara yang masih menunggu konfirmasi, dan pisahkan daftar pertanyaan yang wajib dikonfirmasi sebelum publikasi.
Jangan mengarang lokasi, waktu mulai, tautan pendaftaran, atau janji hadiah; jangan mengklaim pendaftaran sudah dibuka.
Jangan mengubah sumber dan salinannya, jangan mengakses jaringan, jangan memublikasikan, dan jangan membaca direktori lain.
```

Kali ini periksa tabel faktanya lebih dulu, baru perbaiki pilihan katanya. Agent harus memakai angka 12 orang, mencatat konflik bahwa 20 orang berasal dari diskusi lama, dan membiarkan lokasi, waktu mulai, tautan pendaftaran, serta janji hadiah tetap sebagai hal yang belum diketahui atau belum dikonfirmasi.

## 3. Selesaikan penyuntingan dengan membandingkan sumber

Keluar dari Pi, lalu periksa di terminal biasa:

```bash
cmp source/confirmed-brief.md confirmed-before.txt
cmp source/old-note.md old-before.txt
sed -n '1,220p' output/brief.md
find . -maxdepth 2 -type f
```

Kedua `cmp` tidak menghasilkan keluaran dan kode keluarnya 0, yang berarti sumber tidak berubah. Konfirmasi satu per satu:

| Butir verifikasi | Hasil yang diharapkan |
| --- | --- |
| Fakta yang sudah dikonfirmasi | Nama “Pertukaran bacaan akhir pekan”, tanggal 2026-09-20, 12 orang, format berbagi dan diskusi |
| Penanganan konflik | 20 orang hanya dijelaskan sebagai usulan lama, tidak muncul dalam kuota terkonfirmasi di draf |
| Penelusuran sumber | Setiap fakta punya nama file asli dan kutipan singkat yang bisa ditemukan |
| Isi yang belum dikonfirmasi | Lokasi, waktu mulai, tautan pendaftaran, dan janji hadiah tidak ditambahkan menjadi fakta |
| Status publikasi | Jelas merupakan draf yang menunggu konfirmasi, belum dikirim atau dipublikasikan |

Jika pengantarnya perlu dibuat lebih ringkas, minta Pi hanya mengubah paragraf pengantar, sambil mempertahankan tabel fakta dan daftar hal yang belum diketahui. Setelah setiap penyuntingan, periksa kembali tabel ini agar bahasa yang membaik tidak turut mengubah faktanya.

## Terapkan metode ini pada artikel Anda sendiri

Saat nanti menangani materi produk, tutorial, atau wawancara, Anda bisa mempertahankan urutan “sumber → tabel fakta → draf → verifikasi manual”. Untuk konten teknis yang nyata, Anda juga perlu memeriksa versi dan tanggal resminya; pengalaman, harga, atau efek yang tidak bisa diverifikasi tidak boleh langsung dipakai hanya karena tercantum dalam materi.

Setelah beberapa kali mengulanginya, rapikan aturan pemeriksaan yang sudah stabil menjadi [Skill](/cases/first-skill). Bila membutuhkan contoh kode, lanjutkan ke [perbaikan kode skala kecil](/cases/code-repair) untuk memverifikasi program di dalam artikel dengan pengujian yang bisa dijalankan.

## Catatan reproduksi pengelola

Pada 12 September 2026, latihan materi ini diselesaikan dengan Pi `0.84.3` di direktori latihan baru pada macOS. Keluarannya memakai angka 12 orang, mencatat konflik 20 orang dari diskusi lama secara eksplisit, dan membiarkan lokasi, waktu mulai, tautan pendaftaran, serta janji hadiah tetap belum dikonfirmasi. Kedua sumber dan salinan sebelum eksekusi identik byte per byte, hanya `output/brief.md` yang ditambahkan. Ini membuktikan alur materi tetap kali ini sudah berjalan, tetapi tidak berarti model akan selalu menangani sumber baru dengan benar.
