---
title: Alur utama Buku Pi
description: Lima modul belajar, 14 pelajaran, dan bagian lengkap cara kerja Pi dalam Buku Pi.
prev:
  text: "Buku Pi: Panduan Pi Coding Agent"
  link: /
next:
  text: 'Pengantar: Mengapa membaca Buku Pi ini'
  link: /guide/introduction
---

<span class="library-status">CORE CURRICULUM · 5 modul · 14 pelajaran + bagian prinsip kerja</span>

# Alur utama Buku Pi

Bagian ini menangani proses belajar yang lengkap, berkesinambungan, dan sudah diverifikasi. Jika ingin langsung praktik, pilih pintu masuk platform dari [keberhasilan pertama dalam 30 menit](/guide/start-here); jika ingin membaca secara sistematis, mulailah dari Pengantar, pedoman, dan Prolog. Pembaca yang sudah bisa memasang, login, dan menggunakan Pi secara normal dapat langsung masuk ke tugas nyata mulai modul kedua.

Tweet pribadi dan catatan pengalaman penggunaan tidak langsung dijadikan kesimpulan tutorial. Konten yang bisa masuk ke alur utama harus diperiksa ulang sumbernya, cara pengoperasiannya, batas risikonya, dan sinyal keberhasilannya. Setiap modul sekaligus menandai latihan pendamping dan bacaan lanjutan, tetapi keduanya tidak mengganggu urutan alur utama. Setelah menyelesaikan studi kasus dasar, Anda dapat memilih [penataan konten](/cases/content-workflow) atau [perbaikan kode kecil](/cases/code-repair) untuk melatih pemindahan metode yang sama ke tugas lain.

## Pembuka · Kenali dulu alasan membacanya

1. [Pengantar: Mengapa membaca Buku Pi ini](/guide/introduction)
2. [Sepuluh penilaian yang tersisa dari 98 tweet](/guide/lasting-principles)
3. [Pedoman dan keterangan edisi belajar terbuka 2026](/guide/edition-2026)

Pengantar menjelaskan posisi Pi, hambatan nyata pemula berbahasa Mandarin, dan pokok pendirian edisi ini; sepuluh penilaian menyaring bagian catatan belajar pribadi yang bertahan dalam praktik berikutnya ke dalam buku ini; sedangkan pedoman menetapkan jalur platform, tanggal verifikasi, cara pemeliharaan, dan batas hak cipta.

## Prolog · Kenali dulu orang di balik Pi

[Lini masa karier lengkap Mario Zechner](/guide/mario-zechner) dimulai dari AFX dan libGDX pada 2009, melewati RoboVM, pengembangan independen, dan praktik Coding Agent, lalu sampai ke Pi dan Earendil pada 2026. Bagian ini bukan prasyarat instalasi, tetapi dapat membantu Anda memahami mengapa Pi tetap minimalis, terbuka, dan dapat diperluas.

## Modul satu · Instalasi dan pengaturan dasar

1. [Pemeriksaan sebelum instalasi](/guide/before-install)
2. [Memasang dan menjalankan Pi](/guide/install-pi)
3. [Login dan pengaturan model](/guide/connect-model)
4. [Mulai dari direktori latihan](/guide/ready-to-work)

::: info Pengguna Windows mulai dari sini
Selesaikan dulu [Jalur Windows berbahasa Mandarin: memasang dan menjalankan Pi](/guide/windows-setup), lalu setelah lolos verifikasi halaman tersebut, langsung lanjut ke pelajaran ke-3. Saat nanti melihat “terminal biasa”, terus gunakan Git Bash, dan ganti direktori latihan serta perintah fingerprint sesuai tabel padanan di halaman itu.
:::

**Tanda selesai:** Anda dapat menjalankan Pi di direktori latihan tersendiri dan mendapatkan satu balasan nyata.

Setelah instalasi selesai, Anda tidak perlu langsung berhenti untuk mempelajari perintah pemeliharaan; saat perlu meningkatkan versi, mengganti akun, menghapus instalasi, atau menangani data lokal, bukalah [Manajemen siklus hidup setelah instalasi](/guide/lifecycle-management).

## Modul dua · Menyelesaikan tugas nyata

5. [Tugas pertama](/guide/first-task)
6. [File dan direktori kerja](/guide/files-and-context)
7. [Penyimpanan dan kelanjutan sesi](/guide/sessions)

**Tanda selesai:** Anda dapat memeriksa sendiri bahan masukan, file keluaran, dan persyaratan tugas, tanpa membiarkan Agent menilai pekerjaannya sendiri.

**Konten pendamping:** [CASE 01 · Merapikan notulen rapat menjadi daftar tindakan](/cases/meeting-notes) · [Terjemahan berlisensi: Sesi yang tidak bisa dibawa pergi](/translations/session-portability)

## Modul tiga · Tugas panjang dan konteks

8. [Konteks dan pemadatan](/guide/context-and-compaction)
9. [Pengantar prompt cache](/guide/prompt-caching)

**Tanda selesai:** Saat tugas terus memanjang, Anda tahu cara menyisakan hasil kunci, dan memahami bahwa pemadatan dan cache adalah dua hal yang berbeda.

**Eksperimen pendamping:** [CASE 02 · Perbandingan sebelum dan sesudah pemadatan](/cases/compaction-before-after)

**Terjemahan berlisensi resmi:** [Mekanisme pemadatan di Pi](/translations/compaction-in-pi) · [Prompt cache pada Agent](/translations/prompt-caching)

## Modul empat · Memperluas Pi Anda sendiri

10. [Skill, Extension, dan Package](/guide/skills-extensions-packages)
11. [Kebutuhan dan verifikasi Extension](/guide/first-extension)
12. [Bagaimana Subagent membagi tugas](/guide/subagents)

**Tanda selesai:** Anda dapat memilih cara perluasan berdasarkan kebutuhan nyata, dan memeriksa apakah kemampuan baru benar-benar berfungsi.

**Latihan pendamping:** [CASE 03 · Skill pertama](/cases/first-skill) · [CASE 04 · Extension minimal](/cases/first-extension) · [CASE 05 · Dua jalur review independen](/cases/independent-review)

### Bagian prinsip terpadu · Merangkai semua istilah menjadi satu proses berjalan yang utuh

[Cara kerja Pi: Dari satu Prompt hingga satu Agent Loop utuh](/guide/how-pi-works) mengembalikan Session, Context, System Prompt, Tool, Skill, pemanggilan model, dan Compaction ke dalam satu rantai yang sama, lalu melanjutkan tugas notulen rapat untuk menuntaskan satu siklus tool yang nyata. Sebaiknya dibaca setelah menyelesaikan modul dua, tiga, dan empat; jika istilah-istilah sebelumnya masih tersebar, Anda juga bisa memakai peta besar ini untuk menentukan arah, lalu kembali berlatih ke pelajaran terkait.

## Modul lima · Membangun alur kerja yang stabil

13. [Tugas berdurasi panjang dan VPS](/guide/vps-and-long-running)
14. [Izin, isolasi, dan verifikasi](/guide/safety)

**Tanda selesai:** Anda membangun checkpoint, jalur pemulihan, dan batas izin, sehingga tugas panjang dapat dilanjutkan maupun dihentikan dengan aman.

**Latihan pendamping:** [CASE 06 · Memulihkan dari checkpoint](/cases/checkpoint-recovery) · [CASE 07 · Review keamanan sebelum tugas](/cases/safe-review) · [CASE 08 · Proyek akhir Buku Pi](/cases/graduation-project)

## Saat perlu mencari, bukan melanjutkan pelajaran

Buka [Buku panduan referensi](/reference/) dan telusuri berdasarkan topik: [FAQ](/reference/faq) menjawab pertanyaan umum, [Panduan penanganan masalah](/reference/troubleshooting) mulai dari gejala yang sudah terjadi, dan [Daftar istilah populer](/reference/glossary) menjelaskan konsep yang belum dikenal. Jika ingin membandingkan Pi dengan turunannya, bacalah [Perbandingan jalur OMP dan Selesai Code](/reference/pi-forks). Pengalaman pribadi, teks asli tweet, dan perubahan pemahaman disimpan terpisah di [Catatan belajar](/journey/) dan tidak akan tercampur ke kesimpulan pelajaran.
