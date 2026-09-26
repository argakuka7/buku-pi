---
title: CASE 04 · Memuat Extension minimal
description: Meninjau, memuat, menjalankan, dan menonaktifkan Extension pembelajaran yang hanya mendaftarkan satu perintah antarmuka.
prev: { text: CASE 03 · Skill pertama, link: /cases/first-skill }
next: { text: CASE 05 · Dua jalur review independen, link: /cases/independent-review }
---

<span class="library-status">CASE 04 · bisa dilatih</span>

# Memuat Extension minimal

## Hasil

Memuat `bluebook-check.ts` secara eksplisit, menjalankan `/bluebook-check` dan melihat pemberitahuan yang diharapkan, lalu memastikan Extension itu sudah nonaktif dengan cara menjalankan Pi tanpa `-e`.

## Materi tetap

- Extension: <a href="/examples/extension/bluebook-check.ts" download>unduh bluebook-check.ts</a>

Kode ini tidak membaca atau menulis file dan tidak mengakses jaringan, hanya mendaftarkan satu perintah. Tetap baca seluruh isinya lebih dulu, karena setiap Extension berjalan dengan izin pengguna dari proses Pi.

## 1. Unduh dan tinjau

```bash
cd ~/Downloads/pi-practice
mkdir -p bluebook-examples
curl -fL https://buku-pi-dariargakuka.netlify.app/examples/extension/bluebook-check.ts \
  -o bluebook-examples/bluebook-check.ts
sed -n '1,160p' bluebook-examples/bluebook-check.ts
```

Pengguna Windows mengganti baris pertama menjadi `cd ~/pi-practice`. File sebenarnya seharusnya hanya berisi satu import, fungsi default, dan `registerCommand`, tanpa operasi jaringan atau file; hentikan bila isinya tidak sesuai.

## 2. Muat dan jalankan

Jalankan di terminal biasa:

```bash
pi --no-extensions -e ./bluebook-examples/bluebook-check.ts
```

Setelah masuk ke Pi, ketik:

```text
/bluebook-check
```

Pemberitahuan antarmuka Pi yang diharapkan muncul adalah `"Extension Buku Pi sudah dimuat; perintah ini tidak membaca atau mengubah file apa pun."`.

![Ilustrasi: Si Hitam memasang modul ke sisi mesin dan lonceng berbunyi, dengan label Extension aktif dan notifikasi](/images/06-pi-hasil-extension.webp)

Setelah pemberitahuan tetap itu muncul, baru setengah pekerjaan “memuat dan menjalankan” yang selesai; studi kasus ini juga meminta Anda keluar, lalu menjalankan ulang tanpa `-e` untuk memastikan perintahnya hilang.

## 3. Nonaktifkan

Ketik `/quit` untuk kembali ke terminal biasa, lalu jalankan:

```bash
pi --no-extensions
```

Saat ini `/bluebook-check` seharusnya tidak muncul lagi. Jika masih ada, periksa apakah perintah kali ini masih membawa `-e`, dan apakah direktori Extension proyek atau pengguna menyimpan file lain dengan nama yang sama; jangan menghapus file yang sumbernya tidak jelas.

[Pelajaran ke-11](/guide/first-extension) melanjutkan penjelasan mengapa notifikasi desktop memerlukan bukti sistem yang nyata; studi kasus ini hanya memverifikasi pemuatan, eksekusi, dan penonaktifan perintah minimal.

## Fenomena kunci

Perintah yang sama hanya muncul ketika Extension pembelajaran diteruskan secara eksplisit, dan hilang setelah keluar serta menjalankan ulang dengan `--no-extensions`. Perbandingan ini membuktikan rantai pemuatan dan penonaktifan kali ini, bukan berarti ada notifikasi sistem yang sudah benar-benar muncul.

## Verifikasi independen

- Setelah `pi --no-extensions -e <file>` dijalankan, perintahnya bisa dieksekusi dan menampilkan pemberitahuan tetap.
- Setelah dijalankan ulang tanpa `-e`, perintah pembelajaran tidak lagi tersedia.
- Galat pemuatan bisa dipulihkan dengan tidak memuat file itu; materi latihan dan sesi tidak perlu dihapus.

## Satu langkah lagi: ubah menjadi perintah Anda sendiri

Salin file aslinya, dan pertahankan baseline yang bisa dibandingkan:

```bash
cp bluebook-examples/bluebook-check.ts bluebook-examples/bluebook-check-custom.ts
```

Buka file baru itu, ubah hanya dua tempat: ganti nama perintah pada `registerCommand` menjadi `bluebook-check-custom`; ganti teks pemberitahuannya menjadi "Pemeriksaan kustom selesai; silakan lanjut memeriksa hasil kerja yang sebenarnya." Jangan menambahkan operasi file, jaringan, atau sistem.

Keluar dulu dari proses lama, lalu muat salinannya:

```bash
pi --no-extensions -e ./bluebook-examples/bluebook-check-custom.ts
```

Jalankan `/bluebook-check-custom` di Pi, dan Anda seharusnya melihat teks baru Anda sendiri. Perintah lama `/bluebook-check` seharusnya tidak terdaftar dalam daftar perintah kali ini. Setelah keluar, jalankan ulang dengan `pi --no-extensions`, dan kedua perintah pembelajaran seharusnya tidak terdaftar.

Bandingkan kedua perbedaan sebelum dan sesudah perubahan: nama perintah menentukan cara pemanggilannya, sedangkan teks pemberitahuan menentukan hasil yang bisa diamati. Notifikasi desktop yang nyata masih memerlukan antarmuka sistem dan logika foreground/background; lihat batas lanjutannya di [Pelajaran ke-11](/guide/first-extension).

## Pemulihan saat gagal

Simpan galat pemuatan yang lengkap beserta path filenya. Jangan menyalin file ke beberapa direktori penemuan otomatis dan mencoba berulang kali; kembalilah dulu ke keadaan bersih dengan `--no-extensions`, lalu periksa ulang isi unduhannya.
