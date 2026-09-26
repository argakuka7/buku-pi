---
title: CASE 05 · Dua jalur review independen
description: Melatih pembagian subtugas dengan sesi hanya-baca yang terisolasi, lalu menggabungkan buktinya di sesi utama.
prev: { text: CASE 04 · Extension minimal, link: /cases/first-extension }
next: { text: CASE 06 · Pemulihan setelah interupsi, link: /cases/checkpoint-recovery }
---

<span class="library-status">CASE 05 · Dapat dilatih</span>

# Dua jalur review independen

## Hasil

Review field dan review keamanan tidak saling membaca kesimpulan satu sama lain, dan masing-masing mengembalikan bukti dari teks asli; sesi utama mencatat kesimpulan bersama, perbedaan, konflik, dan hal yang belum diketahui.

## Materi tetap

- Input: <a href="/examples/first-task/meeting-notes.md" download>catatan rapat fiktif</a>

Studi kasus ini memakai dua sesi Pi bernama yang bersifat hanya-baca untuk melatih struktur pembagian tugas; tidak mengharuskan pemasangan Package, dan tidak mengklaim bahwa inti Pi sudah memiliki Subagent bawaan.

## 1. Menyiapkan direktori

```bash
cd ~/Downloads/pi-practice
mkdir -p input reviews
curl -fL https://buku-pi-dariargakuka.netlify.app/examples/first-task/meeting-notes.md \
  -o input/notulen-rapat.md
shasum -a 256 input/notulen-rapat.md > input-before.sha256
```

Pengguna Windows ganti baris pertama dengan `cd ~/pi-practice`, dan ganti `shasum -a 256` dengan `sha256sum`. Buka sendiri file input, pastikan itu catatan rapat fiktif dan tidak memuat informasi pribadi, baru lanjutkan.

## 2. Sesi review field

Jalankan di terminal biasa:

```bash
pi --name "Review field" --no-extensions --tools read,grep,find,ls
```

Setelah masuk ke Pi, kirim:

```text
Periksa input/notulen-rapat.md secara hanya-baca.
Daftarkan item, penanggung jawab, tenggat waktu, dan batasan untuk setiap item tindakan; untuk yang tidak ada di teks asli tulis “tidak diketahui”.
Jangan mengubah file. Kembalikan kutipan singkat dari teks asli beserta nomor barisnya.
```

Setelah selesai, ketik `/export reviews/fields.html`, lalu keluar dari Pi.

## 3. Sesi review keamanan

Jalankan di terminal biasa yang sama:

```bash
pi --name "Review keamanan" --no-extensions --tools read,grep,find,ls
```

Setelah masuk ke Pi, kirim:

```text
Periksa input/notulen-rapat.md secara hanya-baca.
Daftarkan hanya batasan yang menyangkut akun, path pribadi, kredensial, pemeriksaan sebelum rilis, dan verifikasi.
Jangan mengubah file; setiap kesimpulan disertai kutipan singkat dari teks asli dan nomor barisnya, tandai “tidak diketahui” bila ragu.
```

Setelah selesai, ketik `/export reviews/safety.html`, lalu keluar dari Pi.

## 4. Penggabungan di sesi utama

```bash
pi --name "Penggabungan pembagian tugas" --no-extensions
```

Kirim:

```text
Baca reviews/fields.html, reviews/safety.html, dan input/notulen-rapat.md.
Tuliskan hasil gabungan ke reviews/merged.md, yang hanya berisi: kesimpulan bersama, hal yang hanya ada di review field,
hal yang hanya ada di review keamanan, konflik dan hal yang belum diketahui, serta pemeriksaan akhir setelah kembali ke teks asli.
Setiap kesimpulan akhir disertai nomor baris teks asli. Saat kedua jalur berkonflik, dasarnya harus teks asli yang dibaca ulang, bukan keputusan berdasarkan suara terbanyak.
Jangan mengubah input dan kedua file ekspor HTML.
```

## Gejala kunci

Kedua sesi tidak saling membaca kesimpulan satu sama lain, dan hanya sesi utama yang menulis `merged.md`. Yang dilatih di sini adalah struktur pembagian tugas yang dapat diaudit, bukan asumsi bahwa inti Pi sudah memiliki “tombol Subagent” bawaan. [Pelajaran 12](/guide/subagents) menjelaskan hubungan antara pembagian tugas manual ini dan Ekstensi Subagent.

## Verifikasi independen

Setelah keluar dari Pi, jalankan:

```bash
test -f reviews/fields.html && echo "PASS: review field ada"
test -f reviews/safety.html && echo "PASS: review keamanan ada"
test -f reviews/merged.md && echo "PASS: catatan gabungan ada"
shasum -a 256 -c input-before.sha256
sed -n '1,180p' reviews/merged.md
```

Pengguna Windows Git Bash ganti `shasum -a 256 -c` dengan `sha256sum -c`.

- Cakupan input kedua jalur berbeda, dan output keduanya menyertakan posisi di teks asli.
- Kedua jalur tidak menulis file yang sama, dan tidak saling menukar kesimpulan lebih awal.
- Sesi utama membaca ulang teks asli saat menemukan konflik, dan tidak memutuskan berdasarkan suara terbanyak.
- Catatan akhir mempertahankan item yang belum diketahui dan alasan pemilihannya.

## Pemulihan kegagalan

Jika satu jalur gagal, jalankan ulang hanya jalur itu; jika salah memilih sesi, keluar dulu dan periksa namanya. Bila kedua peran hendak mengubah file yang sama, hentikan segera, ubah menjadi hanya mengembalikan hasil, dan biarkan sesi utama menulis draf akhirnya sendiri.
