---
title: Catatan Pembaruan Versi Pi
description: Telusuri catatan pembaruan resmi lengkap Pi Coding Agent berdasarkan nomor versi, tahun, jenis perubahan, dan topik.
aside: false
lastUpdated: false
---

<span class="library-status">RELEASE ARCHIVE · Cuplikan catatan versi resmi</span>

# Catatan Pembaruan Versi Pi

Untuk mencari dari versi mana suatu fitur muncul, apa yang berubah dalam satu peningkatan versi, atau apakah suatu error sudah diperbaiki, Anda tidak perlu lagi menyisir ribuan baris changelog paragraf demi paragraf.

Halaman ini menyusun `CHANGELOG.md` resmi Pi Coding Agent menjadi arsip yang dapat ditelusuri. **Nomor versi, tanggal rilis, dan rincian perubahan berbahasa Inggris semuanya berasal dari catatan resmi**; bahasa Indonesia hanya dipakai untuk tag pencarian, kategori, dan penjelasan lima titik kunci, tanpa menambahkan dugaan menjadi fakta resmi. Changelog resmi saat ini dimulai dari `0.10.0`, dan halaman ini tidak mengarang konten pembaruan versi yang lebih awal.

<PiReleaseExplorer />

## Batas Data dan Cara Pemeliharaan

- Sumber fakta: [Changelog resmi Pi Coding Agent](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/CHANGELOG.md). Setiap catatan versi dapat dicek kembali ke teks resmi yang bersangkutan.
- Halaman menyimpan cuplikan lokal yang telah diverifikasi, sehingga pembangunan situs tidak bergantung pada permintaan sementara browser ke GitHub; saat tidak ada jaringan, versi yang sudah terindeks tetap dapat ditelusuri.
- Saat memperbarui data, jalankan `npm run sync:pi-releases`, lalu jalankan `npm run check:releases` dan `npm run check`. Halaman akan menampilkan tanggal verifikasi cuplikan ini.
- Catatan resmi berbahasa Inggris digunakan sesuai lisensi repositori hulu; kategori dan penjelasan titik kunci berbahasa Indonesia di halaman ini merupakan konten yang disusun Buku Pi. Batas lisensi proyek dapat dilihat di berkas `LICENSE-CONTENT.md`.

Jika Anda berencana meningkatkan versi Pi, baca dulu [Pembaruan, logout, dan uninstalasi](/guide/lifecycle-management), catat `pi --version` saat ini, lalu bandingkan di sini untuk memeriksa Breaking Changes dan panduan migrasi versi tujuan.
