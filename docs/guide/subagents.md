---
title: Bagaimana Subagent membagi tugas
description: Pahami kolaborasi Subagent dari empat sisi, yaitu peran, input, hasil, dan verifikasi.
prev:
  text: Kebutuhan dan verifikasi Extension
  link: /guide/first-extension
next:
  text: 'Cara kerja Pi: Dari satu Prompt hingga satu Agent Loop utuh'
  link: /guide/how-pi-works
---

<span class="library-status">MODULE 04 · STEP 12 · bisa dilatih</span>

# Bagaimana Subagent membagi tugas

Satu Agent dapat menyelesaikan banyak hal sendiri. Ketika sebuah tugas sekaligus membutuhkan pemeriksaan teknis, penyuntingan teks, dan pengecekan oleh pengguna nyata, membagi pekerjaan kepada beberapa Subagent barulah mungkin menghemat waktu.

Hingga 2026-09-09, pihak resmi secara jelas menyatakan bahwa inti Pi tidak memiliki Subagent bawaan; yang disediakan repositori kode resminya adalah contoh Extension. Tidak terlihatnya tombol pembagian kerja di antarmuka bukan berarti pemasangan gagal. Pelajaran ini mula-mula menyelesaikan struktur pembagian kerja yang sama dengan dua sesi terpisah, tidak mewajibkan pemasangan Package komunitas, dan tidak menuliskan latihan manual sebagai kemampuan bawaan.

## Tugas seperti apa yang cocok dibagi

Subtugas yang cocok dijalankan secara paralel memiliki dua ciri: batasnya jelas dan dapat diserahkan secara mandiri. Misalnya, satu pembaruan konten Buku Pi ini dapat dibagi menjadi:

| Peran | Input | Hasil |
| --- | --- | --- |
| Pembaca pemula | Bab instalasi | Menemukan bagian yang membuat pembaca bingung harus mengetik di mana dan melihat hasil apa |
| Pemeriksa teknis | Dokumentasi resmi dan bab teknis | Mendaftar pernyataan yang sudah usang, tidak akurat, atau kurang batasnya |
| Pemimpin redaksi | Bab lengkap dan jalur belajar | Memeriksa pengulangan, langkah yang terlewat, dan keterputusan sebelum-sesudah |

Situasi yang tidak cocok untuk paralel adalah ketika beberapa Agent mengubah file yang sama pada saat yang sama, tetapi tidak ada pemilik yang jelas. Ini sangat mudah menimbulkan penimpaan, konflik, dan standar yang tidak konsisten.

## Cara menulis pembagian kerja yang dapat diverifikasi

Penjelasan yang diberikan kepada Subagent setidaknya memuat:

- Hanya menangani file atau masalah tertentu.
- Boleh mengubah atau hanya memeriksa secara read-only.
- Bukti apa yang harus dikembalikan saat selesai.
- Penilaian mana yang harus dikembalikan kepada Agent utama dan tidak boleh memperluas cakupan sendiri.

Tanggung jawab Agent utama bukan sekadar mengirim tugas lalu selesai. Ia harus menggabungkan hasil, menangani konflik, menjalankan pemeriksaan menyeluruh, dan bertanggung jawab atas hasil akhir.

## Jangan memperbesar tim terlalu dini

Jika Anda belum dapat menuliskan tugas yang bisa diverifikasi untuk satu Agent, menambah Subagent biasanya hanya akan membuat masalah semakin sulit dipahami. Selesaikan dulu tiga sampai lima tugas nyata dengan satu Agent, baru kemudian bagikan bagian yang sudah stabil, mandiri, dan berulang.

## Praktik pendamping: CASE 05 · Dua jalur review independen

Pelajaran ini tidak lagi memelihara langkah operasional kedua. Masuk ke [CASE 05 · Dua jalur review independen](/cases/independent-review), dan berlatih sekali secara lengkap sesuai materi tetap, tiga sesi, teks tugas asli, verifikasi independen, dan pemulihan kegagalan di dalamnya.

Studi kasus ini sengaja memisahkan dua jalur review, lalu sesi utama menggabungkan buktinya. Yang dilatih adalah batas subtugas dan tanggung jawab penggabungan, bukan menuliskan sesi manual sebagai fitur Subagent bawaan inti Pi.

## Verifikasi pelajaran ini

- Bisa menjelaskan tugas mana yang cocok dipisah, dan file mana yang harus punya hanya satu pemilik akhir.
- Bisa menuliskan untuk setiap jalur: input, izin baca-saja atau ubah, bukti penyerahan, dan hal yang belum diketahui.
- Sudah memeriksa dua hasil independen dan catatan penggabungan sesi utama sesuai CASE 05, atau dapat menjelaskan dengan tepat hubungan verifikasinya.
- Bisa menjelaskan: ini adalah latihan manual atas metode pembagian kerja, dan bukan berarti inti Pi memiliki Subagent bawaan.

### Dasar bab ini

- [Prinsip desain dalam Panduan penggunaan Pi](https://pi.dev/docs/latest/usage#design-principles)
- [Indeks contoh Extension resmi Pi](https://pi.dev/docs/latest/extensions#examples-reference)

Batas kemampuan inti diverifikasi pada 2026-09-09.
