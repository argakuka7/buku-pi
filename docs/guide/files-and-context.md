---
title: File dan direktori kerja
description: Pelajari cara memakai direktori kerja untuk membangun titik awal tugas yang jelas, dan memakai referensi @file untuk menyediakan materi secara akurat.
prev:
  text: Tugas pertama, pelajari dulu cara verifikasinya
  link: /guide/first-task
next:
  text: Penyimpanan dan kelanjutan sesi
  link: /guide/sessions
---

<span class="library-status">MODULE 02 · STEP 06 · LATIHAN</span>

# File dan direktori kerja

Tugas pertama dapat diselesaikan dengan lancar karena ada satu prasyarat yang mudah diabaikan: Anda lebih dulu masuk ke direktori `pi-practice`, baru kemudian menjalankan Pi. Bagi Agent, direktori kerja saat ini ibarat area kerja yang digelar di atas meja; ia membantu Pi memahami path relatif dan konteks proyek.

::: danger Direktori kerja bukan isolasi keamanan
Tool Pi tetap berjalan dengan izin pengguna saat ini, dan secara teknis dapat mengakses lokasi di luar direktori saat ini. Direktori latihan khusus membuat cakupannya lebih jelas, tetapi bukan berarti Anda sudah masuk ke dalam sandbox.
:::

## Pahami dulu path

Jalankan di terminal biasa:

```bash
pwd
```

`pwd` akan memberi tahu direktori tempat Anda berada saat ini. Misalnya:

```text
/Users/nama-pengguna-Anda/Downloads/pi-practice
```

Path adalah lokasi file di komputer. `/` dipakai untuk memisahkan lapisan-lapisan folder, sedangkan `~` adalah singkatan dari direktori home pengguna Anda. `~/Downloads/pi-practice` dan path lengkap di atas biasanya menunjuk ke lokasi yang sama.

Pengguna Windows tetap memakai Git Bash; direktori latihan Anda ditulis `~/pi-practice`, dan `pwd` biasanya menampilkan `/c/Users/nama-pengguna-Anda/pi-practice`. Jangan mengubah `/` di Git Bash menjadi backslash yang dipakai Windows Explorer.

Jalankan `ls` untuk melihat isi direktori saat ini. Jalankan `cd` diikuti nama direktori untuk masuk ke direktori lain. Ketiga perintah ini sudah cukup untuk menopang beberapa latihan pertama seorang pemula.

::: warning Pastikan lokasinya dulu sebelum menjalankan
Jangan berlatih langsung di direktori home, seluruh direktori unduhan, atau direktori induk proyek penting. Buat dulu folder khusus, periksa dengan `pwd`, baru ketik `pi`.
:::

## Masalah apa yang diselesaikan `@file`

Di area input Pi, ketik `@` untuk mencari file di proyek saat ini. Setelah memilih, area input akan mempertahankan referensi file yang eksplisit untuk pesan ini; ini tidak berarti Pi sudah otomatis membacanya sampai selesai, dan lebih-lebih tidak berarti Anda boleh melewati catatan baca-tulis serta pemeriksaan hasil berikutnya.

Operasi lengkapnya di sini adalah:

1. Pastikan area edit di bagian bawah Pi dapat menerima input.
2. Ketik `@`, lalu lanjutkan dengan mengetik `notulen`.
3. Pada daftar file yang muncul, pilih `input/notulen-rapat.md` dengan tombol panah atas dan bawah.
4. Tekan `Return` untuk mengonfirmasi. Lanjutkan menulis tugas berikutnya hanya setelah referensi file ini dipertahankan di area input.

![Ilustrasi: Si Hitam mengetik di keyboard kecil sementara lemari berkas terbuka dan tiga folder meluncur ke slot, dengan label @ nama file dan kandidat path](/images/04-pi-referensi-file.webp)

Setelah kandidat `input/notulen-rapat.md` muncul, periksa dulu path relatifnya, baru tekan `Return` untuk memilihnya. Munculnya kandidat hanya membuktikan Pi menemukan filenya, bukan bahwa ia sudah membaca isinya.

Jika setelah mengetik `@` tidak ada daftar file yang muncul, keluar dulu dari Pi dengan `/quit`. Di terminal biasa, jalankan `pwd` dan `ls input`, pastikan Anda berada di direktori latihan yang benar dan file-nya memang ada, lalu jalankan lagi Pi.

Misalnya, Anda bisa mengetik:

```text
Mohon baca @input/notulen-rapat.md,
lalu rapikan butir tindakannya ke output/daftar-tindakan.md.
Jangan ubah teks aslinya.
```

Ini lebih andal daripada “lihat saja notulen rapat itu”. Ia mengurangi peluang file bernama sama, materi yang salah pilih, dan pemahaman path yang tidak konsisten. Pi juga mendukung penerusan `@file` sebagai argumen file saat dijalankan, tetapi pemula cukup memakai `@` di antarmuka interaktif terlebih dahulu.

## Praktik: menghasilkan hasil kedua dengan file yang eksplisit

Sebelum mulai, Anda seharusnya sudah menyelesaikan pelajaran ke-5, dan baik `input/notulen-rapat.md` maupun `input-before.sha256` sudah ada. Jalankan dulu di terminal biasa:

```bash
cd ~/Downloads/pi-practice
pwd
shasum -a 256 -c input-before.sha256
test -f input/notulen-rapat.md && echo "PASS: input ada"
```

Linux dan Git Bash di Windows mengganti pemeriksaan fingerprint pertama dengan `sha256sum -c input-before.sha256`; untuk Windows, sekaligus ganti path `cd` menjadi `~/pi-practice`.

Jika direktori latihan bukan `pi-practice`, ganti dengan nama nyata yang Anda catat. Jika fingerprint bukan `OK`, input tidak ada, atau posisi `pwd` salah, jangan lanjutkan; kembalilah ke materi bersih dari pelajaran ke-5.

Jalankan Pi, pilih `input/notulen-rapat.md` dengan `@` di area edit, lalu kirim:

```text
Materi: @input/notulen-rapat.md
Proses: hanya ekstrak tiga tenggat waktu, urutkan dari yang paling awal, dan pertahankan penanggung jawab yang bersesuaian
Output: output/indeks-tenggat.md
Batasan: jangan ubah input, jangan timpa output/daftar-tindakan.md yang sudah ada; untuk informasi yang tidak ada di teks asli tulis “tidak diketahui”
Verifikasi: output harus tepat tiga item, dan laporkan path yang sebenarnya dibaca dan ditulis
```

Amati path baca-tulis yang sebenarnya. Jika muncul file lain bernama sama, ia hendak menulis ke `input`, atau path output bukan `output/indeks-tenggat.md`, hentikan segera dan periksa direktori kerja. Jika direktori output tidak ada, keluar dari Pi, jalankan `mkdir -p output` di terminal biasa, lalu coba lagi; jangan mengubahnya sementara ke lokasi yang Anda sendiri tidak bisa temukan.

## Tulis tugas dengan jelas dalam empat kalimat

Saat tidak tahu cara memberi instruksi, tulislah dengan urutan ini:

1. Di mana materinya.
2. Pemrosesan apa yang dilakukan.
3. Hasilnya diletakkan di mana.
4. Hal apa yang tidak boleh dilakukan, dan hasil seperti apa yang dianggap lulus.

```text
Materi: @input/notulen-rapat.md
Proses: ekstrak item, penanggung jawab, tanggal, dan pengingat risiko
Output: output/daftar-tindakan.md
Batasan: jangan ubah input, output harus memuat 3 item dari teks asli
```

## Jangan lupakan file konteks proyek

Selain materi yang Anda rujuk secara eksplisit dengan `@`, Pi secara default juga mencari `AGENTS.override.md`, `AGENTS.md`, dan `CLAUDE.md` naik dari direktori saat ini, serta membaca `~/.pi/agent/AGENTS.md` tingkat pengguna. File-file itu dipakai untuk menyediakan aturan proyek, dan bukan materi biasa yang Anda lampirkan secara manual pada pesan ini.

Saat menghadapi repositori asing, masukkan juga file-file ini ke dalam cakupan pemeriksaan. Jika ingin sekali menjalankan tanpa memedulikan file konteks sama sekali, gunakan di terminal biasa:

```bash
pi --no-context-files
```

Setelah file konteks di lokasi yang ditemukan otomatis berubah, Anda dapat memuat ulang dengan `/reload` di Pi. `--no-context-files` hanya menonaktifkan file penjelasan semacam ini, tidak membatasi izin file pada tool bawaan, dan juga bukan sandbox.

## Pemeriksaan minimal setelah selesai

Keluar dari Pi atau buka jendela terminal baru, pastikan dulu lokasinya, baru periksa file-nya.

```bash
cd ~/Downloads/pi-practice
pwd
ls input output
shasum -a 256 -c input-before.sha256
test -f output/indeks-tenggat.md && echo "PASS: indeks tanggal ada"
sed -n '1,80p' output/indeks-tenggat.md
```

Linux dan Git Bash di Windows juga mengganti `shasum -a 256 -c` dengan `sha256sum -c`; path `cd` di Windows tetap memakai `~/pi-practice`.

Jika pada pelajaran 1 Anda memakai `pi-practice-2` atau nama lain, di sini dan pada pelajaran berikutnya semua `pi-practice` harus diganti dengan nama direktori latihan yang benar-benar Anda catat.

Setidaknya Anda harus dapat menjawab tiga pertanyaan: file mana yang dibaca Pi, file mana yang ditulis, dan apakah teks aslinya tetap dipertahankan. Indeks tanggal juga harus berisi tepat Rani, 2026-08-28; Bayu, 2026-08-30; Sari, 2026-09-01, dengan urutan dari yang paling awal. Setelah batas-batas ini stabil, barulah buat tugasnya lebih rumit.

## Verifikasi pelajaran ini

- Referensi `@` menunjuk ke `input/notulen-rapat.md` yang benar sebelum dikirim.
- Catatan baca-tulis yang sebenarnya tidak memunculkan direktori tak terduga, dan tidak menimpa daftar tindakan dari pelajaran sebelumnya.
- Fingerprint input tetap menampilkan `OK`, output baru ada, dan tiga tanggal, penanggung jawab, serta urutannya benar.
- Saat muncul file bernama sama, path salah, atau input berubah, Anda tahu harus berhenti dulu dan memeriksa di terminal biasa, bukan terus menebak.

### Dasar bab ini

- [Penjelasan penggunaan Pi](https://pi.dev/docs/latest/usage)
- [Mengapa tugas pertama harus bisa diverifikasi](/tweets/02-first-tasks)
