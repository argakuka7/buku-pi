---
title: CASE 06 · Pemulihan dari checkpoint
description: Mensimulasikan interupsi tugas panjang dengan tiga materi latihan, memulihkan pemrosesan melalui file progres, lalu memeriksa apakah kelanjutannya tidak berulang dan tidak terlewat.
prev: { text: CASE 05 · Pembagian tugas independen, link: /cases/independent-review }
next: { text: CASE 07 · Batas keamanan, link: /cases/safe-review }
---

<span class="library-status">CASE 06 · Dapat dilatih</span>

# Pemulihan dari checkpoint

## Hasil

Proses satu artikel lalu berhenti, kemudian sesi baru membaca `long-task/progress.md` untuk menyelesaikan dua artikel sisanya; pada akhirnya ketiga artikel tidak berulang dan tidak terlewat, dan item yang gagal tercatat.

## Materi tetap

- <a href="/examples/long-task/source/article-a.md" download>article-a.md</a>
- <a href="/examples/long-task/source/article-b.md" download>article-b.md</a>
- <a href="/examples/long-task/source/article-c.md" download>article-c.md</a>
- <a href="/examples/long-task/progress-template.md" download>Templat progres</a>

Ketiga materi adalah teks fiktif yang singkat; templat progres memisahkan dengan jelas bagian selesai, sudah diproses, gagal, dan langkah berikutnya.

## 1. Menyiapkan tugas yang masih kosong

```bash
cd ~/Downloads/pi-practice
mkdir -p long-task/source long-task/output
curl -fL https://buku-pi-dariargakuka.netlify.app/examples/long-task/source/article-a.md -o long-task/source/article-a.md
curl -fL https://buku-pi-dariargakuka.netlify.app/examples/long-task/source/article-b.md -o long-task/source/article-b.md
curl -fL https://buku-pi-dariargakuka.netlify.app/examples/long-task/source/article-c.md -o long-task/source/article-c.md
curl -fL https://buku-pi-dariargakuka.netlify.app/examples/long-task/progress-template.md -o long-task/progress.md
find long-task -type f -print
```

Pengguna Windows ganti baris pertama dengan `cd ~/pi-practice`. Sebelum mulai, seharusnya hanya ada tiga file di `source` dan `progress.md`; jika ada file lama di `output`, pindah ke direktori baru dan jangan menimpanya untuk melanjutkan.

## 2. Sesi pertama hanya mengerjakan satu artikel

```bash
pi --name "Latihan checkpoint - langkah pertama"
```

Kirim:

```text
Baca long-task/progress.md dan long-task/source/article-a.md.
Di long-task/output/index.md, gunakan “## nama file” sebagai heading level dua; pada baris berikutnya tulis judul teks asli dan ringkasan satu kalimat,
lalu perbarui jumlah item selesai, file yang sudah diproses, dan langkah berikutnya di long-task/progress.md.
Kerjakan hanya artikel ini, lalu berhenti dan tunggu verifikasi saya.
```

Keluar dari Pi, buka `index.md` dan `progress.md`, lalu pastikan jumlah item selesai adalah 1, daftarnya hanya berisi `article-a.md`, dan langkah berikutnya masih menunjuk ke materi yang belum diproses.

## 3. Sesi baru memulihkan dari checkpoint

```bash
pi --name "Latihan checkpoint - pemulihan"
```

Kirim:

```text
Baca long-task/progress.md terlebih dahulu, lalu daftarkan file di long-task/source yang belum diproses.
Selesaikan file yang tersisa satu per satu; di long-task/output/index.md tetap gunakan “## nama file” sebagai heading level dua,
dan setiap kali satu artikel selesai, perbarui long-task/output/index.md dan long-task/progress.md sekaligus.
Jangan mengulang file yang sudah tercatat selesai. Jika menemukan file rusak atau tidak dapat dibaca, catat ke daftar kegagalan lalu berhenti.
```

## Gejala kunci

Sesi pemulihan membaca progres di disk terlebih dahulu, bukan menebak sampai mana sesi sebelumnya bekerja. [Pelajaran 13](/guide/vps-and-long-running) menjelaskan lebih lanjut batas VPS dan tmux.

![Ilustrasi: Si Hitam membandingkan papan klip dengan alat ukur bulat, dengan label checkpoint dan progres](/images/07-pi-checkpoint-tugas-panjang.webp)

Sesi pemulihan membaca `progress.md` terlebih dahulu, lalu membandingkan checkpoint dengan progres untuk tiga pemeriksaan. Jangan menyimpulkan tugas sudah selesai hanya karena “sesinya masih ada”.

## Verifikasi independen

```bash
find long-task/source -type f -name '*.md' | wc -l
grep -c '^## ' long-task/output/index.md
sed -n '1,180p' long-task/progress.md
```

Jumlah file input, jumlah entri indeks, dan jumlah item selesai di progres semuanya 3; daftar yang sudah diproses tidak berisi duplikat, dan daftar kegagalan sesuai dengan kenyataan. Periksa juga ringkasan tiap artikel satu per satu; jangan hanya membandingkan angka.

## Pemulihan kegagalan

Setelah interupsi, baca dulu progres dan output yang ada; jangan menjalankan ulang dari awal secara membabi buta. Jika menemukan duplikat, pertahankan kondisi lapangan, daftarkan item duplikat beserta asalnya, baru putuskan perbaikannya; jika file rusak, tulis ke daftar kegagalan lalu berhenti.
