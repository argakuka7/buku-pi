# Rencana Pembaruan P0 Pengantar Buku Pi Pi

> **Catatan historis.** Dokumen ini berasal dari proyek sumber (versi Mandarin, dua locale). Pada edisi Bahasa Indonesia, perintah pemeriksaannya adalah `npm run check` dan hanya ada satu locale.

Tanggal verifikasi: 2026-09-23

## Tujuan Ronde Ini

Agar pembaca yang pertama kali menyentuh Pi, hanya dengan satu jalur masuk, dapat menyelesaikan lingkaran tertutup “siapkan lingkungan → instalasi → hubungkan model → jalankan tugas di direktori latihan → verifikasi independen”; sekaligus membuat rute Windows dan rekomendasi plugin tidak lagi bergantung pada pintu masuk yang usang atau daftar yang kabur.

## Tugas dan Kriteria Selesai

| Tugas | Lokasi penerapan | Kriteria selesai | Status |
| --- | --- | --- | --- |
| P0-01 · Sukses pertama dalam 30 menit | `docs/guide/start-here.md` | Merangkai kursus yang ada dengan tahapan, anggaran waktu, bukti selesai, dan fallback kegagalan | Selesai |
| P0-02 · Dua rute instalasi resmi | `docs/guide/install-pi.md`, `docs/guide/lifecycle-management.md` | Menjelaskan installer resmi dan npm sekaligus; metode verifikasi, pembaruan, dan uninstal konsisten | Selesai |
| P0-03 · Pemilihan rute Windows | `docs/guide/windows-setup.md` | Membandingkan Git Bash native, PowerShell, dan WSL; memberi nilai default yang jelas dan verifikasi Shell untuk rute pengantar | Selesai |
| P0-04 · Tingkatan rekomendasi plugin | `docs/plugins/index.md` | Menegaskan mulai tanpa plugin; beri tingkatan instalasi awal, sesuai kebutuhan, dan lanjutan; segarkan sumber terkini seperti Plannotator | Selesai |
| P0-05 · Bahasa dan verifikasi situs | `docs/`, hasil build resmi | Terjemahkan situs ke Bahasa Indonesia; lulus pemeriksaan konten, konsistensi judul, build, SEO, dan anchor; periksa sampel halaman desktop dan 390px | Selesai |

## Aturan Penyuntingan

- Dokumentasi resmi menentukan instalasi, perintah, izin, dan batas data; diskusi komunitas hanya dipakai untuk menilai apa yang dipedulikan pengguna.
- Informasi dinamis mencantumkan tanggal verifikasi; plugin tidak dibuatkan daftar Top permanen.
- Jangan menghapus latihan yang bisa diverifikasi yang sudah ada, dan jangan menggambarkan prompt tugas sebagai sandbox.
- Pemula secara default tidak memasang Package pihak ketiga; bila perlu, muat sekali, verifikasi satu item, baru putuskan pemasangan permanen.

## Halaman Verifikasi Akhir

- `/guide/start-here`
- `/guide/install-pi`
- `/guide/windows-setup`
- `/guide/connect-model`
- `/guide/ready-to-work`
- `/guide/first-task`
- `/plugins/`
- `/guide/lifecycle-management`

## Hasil Eksekusi

- `npm run check` lulus seluruhnya: seluruh pemeriksaan konten, konsistensi judul, build produksi, SEO, dan anchor lulus pada edisi Bahasa Indonesia.
- Di desktop sudah diperiksa judul, teks, kotak petunjuk, navigasi, dan tabel pada halaman masuk dan halaman plugin.
- Pada 390px sudah diperiksa halaman masuk, halaman instalasi, dan halaman plugin; lebar halaman tidak meluap horizontal secara keseluruhan, tabel lebar tetap punya scroll horizontal internal, dan blok kode tidak keluar dari kontainer teks.
- Konten saat ini hanya selesai secara lokal, belum di-commit, di-push, atau di-deploy, menunggu konfirmasi akhir.
