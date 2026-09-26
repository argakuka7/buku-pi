---
title: Studi kasus
description: Kumpulan studi kasus tugas Pi yang dapat direproduksi dan diverifikasi secara mandiri, lengkap dengan materi latihan, langkah eksekusi, hasil yang diharapkan, dan daftar periksa.
prev:
  text: Alur utama Buku Pi
  link: /guide/
next:
  text: CASE 01 · Daftar tindakan notulen rapat
  link: /cases/meeting-notes
---

<span class="library-status">PRACTICE LAB · Dari materi sampai verifikasi</span>

# Studi kasus

Di sini kami tidak mengulang konsepnya dari awal. Setiap studi kasus bernaung di bawah sebuah modul Buku Pi, dimulai dari materi yang jelas, lalu menuliskan tugas, batasan, hasil yang diharapkan, dan cara pemulihan setelah kegagalan, sehingga pembaca dapat mereproduksinya secara utuh di lingkungannya sendiri.

## Struktur studi kasus

Setiap studi kasus resmi harus memuat:

1. Materi latihan yang dapat diunduh atau Anda siapkan sendiri;
2. Penjelasan tugas yang bisa langsung diberikan kepada Pi;
3. Gejala kunci yang seharusnya terlihat selama eksekusi;
4. Metode verifikasi yang tidak bergantung pada pengakuan Agent;
5. Cara mempertahankan kondisi lapangan dan memulihkannya setelah terjadi kesalahan.

## Peta jalan studi kasus

Delapan studi kasus menerapkan metode dalam kurikulum ke materi tetap, tugas yang dapat direplikasi, gejala kunci, verifikasi independen, dan pemulihan kegagalan. Tujuh studi kasus pertama melatih kemampuan tunggal, sedangkan satu proyek kelulusan terakhir merangkai 14 pelajaran ke dalam satu alur kerja nyata. Kode pengajaran hanya dipakai untuk latihan minimal dan non-destruktif; untuk efek lanjutan yang melibatkan notifikasi desktop nyata, server jarak jauh, atau plugin asing, verifikasi tetap mengacu pada lingkungan sebenarnya.

| Urutan | Modul | Studi kasus | Bukti inti |
| --- | --- | --- | --- |
| 01 | Modul 2 | [Daftar tindakan notulen rapat](/cases/meeting-notes) | Sidik jari input tidak berubah, tiga field berkorespondensi satu per satu |
| 02 | Modul 3 | [Perbandingan sebelum dan sesudah pemadatan](/cases/compaction-before-after) | Session yang sama; jawaban dari ingatan dan pemulihan dari disk diperiksa terpisah |
| 03 | Modul 4 | [Menyusun metode menjadi Skill](/cases/first-skill) | Dimuat secara eksplisit, menghasilkan file baru, nonaktif setelah keluar |
| 04 | Modul 4 | [Memuat Extension minimal](/cases/first-extension) | Perintah muncul, dieksekusi, lalu hilang setelah restart |
| 05 | Modul 4 | [Dua jalur review independen](/cases/independent-review) | Dua bukti terisolasi digabungkan secara terpusat oleh sesi utama |
| 06 | Modul 5 | [Pemulihan dari checkpoint](/cases/checkpoint-recovery) | Tiga materi tidak berulang dan tidak terlewat, progres konsisten dengan hasil |
| 07 | Modul 5 | [Review keamanan sebelum tugas](/cases/safe-review) | Yang belum diketahui tetap dibiarkan, tindakan berbahaya tidak dieksekusi |
| 08 | Gabungan | [Proyek akhir Buku Pi](/cases/graduation-project) | Siklus tertutup dari kebutuhan, implementasi, checkpoint, review hanya-baca, hingga verifikasi manusia |

Modul 1 untuk sementara tidak memiliki CASE tersendiri: instalasi, path Windows, login, dan direktori latihan itu sendiri sudah berupa praktik bertahap. Modul 3 hanya menambahkan satu eksperimen pembanding, tanpa menambah pelajaran baru.

Jika selama latihan muncul masalah startup, model, Session, Context, Skill, atau Extension, pertahankan dulu kondisi lapangan, lalu bangun baseline yang bersih sesuai [Buku panduan penanganan masalah Pi](/reference/troubleshooting). Setelah penanganan selesai, kembali ke studi kasus yang sama dan lanjutkan; jangan mengubah tugas, model, dan plugin secara bersamaan saat sedang terjadi error.

::: info Batas antara studi kasus dan pengalaman pribadi
Catatan belajar dapat menjadi petunjuk studi kasus, tetapi tidak langsung dijadikan dasar operasional. Hal-hal yang menyangkut perintah, versi, plugin, dan izin perlu diverifikasi ulang sebelum diterbitkan.
:::

## Setelah menyelesaikan studi kasus dasar, coba jenis tugas yang lain

Kedua latihan migrasi ini bersifat opsional dan tidak mengubah penomoran pelajaran CASE 01–08.

- [Dari materi menjadi draf yang dapat diverifikasi](/cases/content-workflow): susun tabel fakta, draf yang menunggu konfirmasi, dan item yang belum diketahui dari dua materi yang bertentangan; cocok untuk penulis konten.
- [Memperbaiki program kecil](/cases/code-repair): reproduksi dua tes yang gagal terlebih dahulu, perbaiki hanya implementasinya, lalu verifikasi sendiri empat tes dan cakupan perubahannya; cocok untuk pembaca yang ingin mulai menangani kode.
