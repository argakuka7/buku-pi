---
title: Penyimpanan dan kelanjutan sesi
description: Pahami bagaimana sesi Pi tersimpan otomatis, lalu pelajari cara menamai, melanjutkan, dan bercabang dari node yang lebih awal.
prev:
  text: File dan direktori kerja
  link: /guide/files-and-context
next:
  text: Konteks dan pemadatan
  link: /guide/context-and-compaction
---

<span class="library-status">MODULE 02 · STEP 07 · LATIHAN</span>

# Penyimpanan dan kelanjutan sesi

Setelah menyelesaikan tugas pertama, banyak orang bertanya: setelah terminal ditutup, apakah percakapan tadi hilang begitu saja?

Secara default Pi menyimpan sesi secara otomatis dan menatanya berdasarkan direktori kerja. Anda tidak perlu menyimpan secara manual setiap kali bicara, tetapi Anda perlu belajar memberi nama sesi; jika tidak, nanti akan sulit menemukannya kembali.

Sesi secara default disimpan di bawah `~/.pi/agent/sessions/` dan ditata berdasarkan direktori kerja sebagai file JSONL. Di Pi, ketik `/session` untuk melihat file sesi saat ini, ID, jumlah pesan, token, dan biaya; isinya mungkin memuat prompt pribadi, path, dan hasil tool, jadi jangan langsung mengunggah atau mempublikasikannya.

## Satu urusan, satu sesi

Aturan awal yang praktis adalah: satu tujuan yang jelas, gunakan satu sesi. Merapikan notulen rapat, memperbaiki navigasi situs, dan menerjemahkan satu artikel sebaiknya tidak semuanya dimasukkan ke dalam satu percakapan.

Setelah tugas dimulai, ketik di area input Pi:

```text
/name Latihan merapikan notulen rapat
```

Nama itu harus mendeskripsikan tugas, bukan menulis “tes 1” atau “percakapan hari ini”. Ketika Anda kembali seminggu kemudian, Anda tetap bisa menebak isinya dari namanya.

Setelah selesai mengetik, tekan `Return`. `/session` dapat menampilkan file sesi saat ini, ID, jumlah pesan, token, dan informasi biaya; pintu masuk paling langsung untuk memeriksa kembali nama sesi adalah pemilih `/resume` yang akan dibahas nanti. Lanjutkan dulu latihan keluar dan memulihkan pada bagian ini.

## Melanjutkan setelah ditutup

Jika Anda baru saja keluar dari Pi dan ingin melanjutkan sesi terbaru di direktori saat ini, kembalilah dulu ke direktori latihan di terminal biasa:

```bash
cd ~/Downloads/pi-practice
pwd
pi -c
```

`pwd` harus menampilkan direktori latihan yang benar. Setelah `pi -c` terbuka, periksa dulu bahwa riwayat pesan memang milik tugas notulen rapat tadi; saat perlu memeriksa nama, buka `/resume`, dan di daftar itu seharusnya ada “Latihan merapikan notulen rapat”; tekan `Esc` untuk membatalkan pilihan dan kembali ke sesi saat ini.

Jika proyek ini punya beberapa sesi, gunakan:

```bash
cd ~/Downloads/pi-practice
pwd
pi -r
```

Ini akan membuka pemilih riwayat sesi. Cari nama yang sesuai dengan tombol panah atas dan bawah, tekan `Return` untuk membukanya, dan tekan `Esc` untuk membatalkan. Anda juga dapat mengetik `/resume` di Pi yang sudah terbuka. Sebelum memilih, lihat dulu nama sesi dan direktori kerjanya, jangan sampai salah menyambung ke proyek yang mirip.

Jika nama direktori latihan yang Anda pakai bukan `pi-practice`, ganti nama direktori pada kedua perintah `cd` itu sekaligus.

### Saat tidak kembali ke sesi yang diharapkan

- Riwayat yang dibuka `pi -c` tidak sesuai: jangan terus menulis file di sesi ini, ketik `/quit`, pastikan `pwd`, lalu beralih ke `pi -r`.
- Daftar `pi -r` kosong: pastikan dulu apakah direktori kerja saat ini sama dengan saat sesi dibuat. Sesi Pi ditata berdasarkan direktori kerja, sehingga saat direktorinya berbeda, Anda tidak akan melihat kelompok sesi yang sama.
- Salah memilih nama yang mirip: periksa dengan `/session`, segera keluar, lalu pilih ulang.
- Sesi benar-benar tidak ditemukan: jangan mengklaim percakapan sudah dipulihkan. Buat sesi baru, minta Pi membaca ulang input, output, dan file serah terima di proyek, lalu lanjutkan dari hasil di disk.

::: tip Untuk sekarang, ingat saja dua pintu masuk ini
`pi -c` melanjutkan sesi terbaru, `pi -r` memilih dari daftar. Opsi lain bisa dipelajari saat benar-benar menghadapi kebutuhannya.
:::

## Mengenal `/tree` saat salah arah

Percakapan tidak hanya bisa berjalan lurus ke bawah. Sesi Pi disimpan dalam struktur pohon. Di antarmuka interaktif, ketik `/tree` untuk kembali ke node sebelumnya, lalu melanjutkan dari sana. Pelajaran ini memperkenalkannya sebagai pintu masuk lanjutan; jangan melompat-lompat sembarangan di sesi yang penting.

Skenario yang cocok untuk memakainya antara lain:

- Anda menyadari bahwa sejak tiga putaran sebelumnya Anda salah memahami tugas.
- Ingin mempertahankan rencana saat ini sekaligus mencoba jalur lain.
- Percakapan sudah penuh dengan informasi debugging sementara, dan Anda ingin memulai lagi dari node yang relatif bersih.

Melompat tidak akan memulihkan file yang sudah ditulis ke disk ke status sebelumnya. Pohon sesi mengelola riwayat percakapan, sedangkan versi file dikelola Git atau cadangan.

`/tree` hanya memindahkan node saat ini di dalam file sesi JSONL yang sama; `/fork` membuat sesi baru dari pesan pengguna sebelumnya, dan `/clone` menyalin branch yang aktif saat ini menjadi sesi baru. Saat meninggalkan branch saat ini, Pi mungkin juga menanyakan apakah akan membuat Branch Summary untuk jalur yang ditinggalkan. Ringkasan itu dipakai untuk membawa informasi berguna ke jalur baru, dan tidak akan me-rollback file di disk.

Jika Anda punya file sesi dari tempat lain, buka dengan `pi --session <path atau ID>`, atau impor dengan `/import <file>` di antarmuka interaktif. Pastikan dulu sumber filenya, karena di dalamnya mungkin ada konten pribadi, path proyek, dan catatan tool.

Saat masih pemula, tidak perlu memaksakan latihan bercabang di sesi penting. Setelah Anda punya sesi uji yang boleh dibuang, ketik dua rencana yang berbeda, lalu gunakan `/tree` untuk kembali ke pesan pengguna sebelum percabangan dan melanjutkan jalur lainnya. Titik verifikasinya bukanlah apakah antarmuka menampilkan pohon, melainkan apakah Anda dapat menyatakan dengan jelas: setelah berpindah node percakapan, file di disk yang tadi sudah ditulis tetap perlu diperiksa atau dipulihkan secara terpisah.

## Tugas baru, buat sesi baru

Ketika tujuannya sudah berubah, ketik `/new` di Pi. Sesi sebelumnya tetap tersimpan, dan tugas baru mendapat titik awal yang bersih.

## Verifikasi pelajaran ini

Sebelum meninggalkan bab ini, selesaikan satu latihan tetap:

1. Beri nama sesi saat ini, buka `/resume` dan lihat namanya di daftar, lalu tekan `Esc` untuk kembali.
2. Keluar dengan `/quit`, pastikan Anda kembali ke terminal biasa.
3. Jalankan `pi -c` di direktori yang benar, periksa riwayat pesan, dan temukan lagi namanya di daftar `/resume`.
4. Pastikan pesan sebelumnya masih ada, lalu buka file output dari pelajaran sebelumnya dan pastikan hasil di disk juga ada.

Nama, riwayat pesan, dan direktori kerja yang konsisten menunjukkan bahwa Anda memulihkan sesi yang benar; file output yang masih ada hanya membuktikan bahwa isi disk masih ada. Jangan mencampuradukkan kedua jenis bukti itu.

### Dasar bab ini

- [Pi Sessions](https://pi.dev/docs/latest/sessions)
- [Penjelasan penggunaan Pi](https://pi.dev/docs/latest/usage)
