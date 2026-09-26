---
title: CASE 03 · Merapikan metode menjadi Skill
description: Memuat satu Skill pembelajaran secara eksplisit dan memakai ulang aturan pemeriksaan untuk daftar tindakan.
prev: { text: CASE 02 · Sebelum dan sesudah pemadatan, link: /cases/compaction-before-after }
next: { text: CASE 04 · Extension minimal, link: /cases/first-extension }
---

<span class="library-status">CASE 03 · bisa dilatih</span>

# Merapikan metode menjadi Skill

## Hasil

Mengukuhkan “tentukan input, tetap empat bidang, jangan menebak hal yang belum diketahui, periksa ulang setelah menulis” menjadi Skill yang bisa dibaca, sekaligus menghasilkan satu versi review dari daftar tindakan.

## Materi tetap

- Input: <a href="/examples/first-task/meeting-notes.md" download>catatan rapat fiktif CASE 01</a>
- Skill: <a href="/examples/skill/action-list-review/SKILL.md" download>unduh action-list-review/SKILL.md</a>

## 1. Unduh dan tinjau

Siapkan direktori latihan terpisah di terminal biasa; Anda tidak diwajibkan menyelesaikan CASE 01 lebih dulu:

```bash
cd ~/Downloads/pi-practice
mkdir -p input output bluebook-examples/action-list-review
curl -fL https://pi-bluebook-id.pages.dev/examples/first-task/meeting-notes.md \
  -o input/notulen-rapat.md
curl -fL https://pi-bluebook-id.pages.dev/examples/skill/action-list-review/SKILL.md \
  -o bluebook-examples/action-list-review/SKILL.md
shasum -a 256 input/notulen-rapat.md > input-before.sha256
sed -n '1,160p' bluebook-examples/action-list-review/SKILL.md
```

Pengguna Windows mengganti baris pertama menjadi `cd ~/pi-practice`, dan mengganti `shasum -a 256` menjadi `sha256sum`. Isi Skill seharusnya hanya memuat `name`, `description`, dan aturan pemeriksaan seputar catatan rapat; hentikan bila muncul perintah yang tidak relevan.

## 2. Muat secara eksplisit dan kirim tugas

Jalankan di terminal biasa:

```bash
pi --no-skills --skill ./bluebook-examples/action-list-review/SKILL.md
```

Setelah masuk ke Pi, kirim:

```text
/skill:action-list-review Tolong periksa ulang input/notulen-rapat.md,
lalu tulis hasilnya ke output/daftar-tindakan-revisi.md. Jangan mengubah file input;
untuk informasi yang tidak ada di sumber asli tulis “tidak dijelaskan di sumber asli”. Setelah selesai, baca ulang output dan laporkan path-nya.
```

Jika `/skill:action-list-review` tidak muncul, periksa dulu Skill commands di `/settings`, lalu jalankan ulang Pi; jangan menyalin file ke beberapa direktori penemuan otomatis sambil berharap berhasil.

Baca seluruh `SKILL.md` sampai selesai, baru muat secara eksplisit dengan `--no-skills --skill <path>`. Jangan menaruh instruksi kerja yang tidak Anda pahami langsung ke direktori penemuan otomatis.

![Ilustrasi: Si Hitam menyelipkan kartu ke slot mesin dan lampu menyala, dengan label muat Skill dan Skill aktif](/images/05-pi-memuat-skill.webp)

Sebelum mengeksekusinya, periksa sekali lagi nama Skill, path input, dan direktori kerja saat ini, agar Skill dimuat pada konteks yang Anda maksud.

[Pelajaran ke-10](/guide/skills-extensions-packages) menjelaskan batas tiga jenis Ekstensi; halaman ini sudah memuat semua operasi yang diperlukan untuk menyelesaikan studi kasus.

## Fenomena kunci

Setelah Skill dimuat secara eksplisit, tugas yang sama mendapat satu set aturan pemeriksaan yang terlihat dan bisa ditinjau ulang; Skill tidak menyediakan input untuk Anda, dan juga tidak otomatis membuktikan bahwa outputnya benar. Verifikasi tetap kembali ke teks asli yang tetap, file output, dan sidik jari input.

## Verifikasi independen

Setelah keluar dari Pi, jalankan:

```bash
test -f output/daftar-tindakan-revisi.md && echo "PASS: versi review ada"
shasum -a 256 -c input-before.sha256
sed -n '1,160p' output/daftar-tindakan-revisi.md
```

Git Bash di Windows mengganti `shasum -a 256 -c` menjadi `sha256sum -c`.

- File yang benar-benar dimuat dan file yang sudah diperiksa berada di path yang sama.
- Outputnya berupa file baru, sidik jari input tidak berubah.
- Ketiga butir memiliki pokok bahasan, penanggung jawab, tanggal, dan batasan; informasi yang hilang tidak dikarang.
- Setelah keluar dari Pi kali ini, `--skill` tidak lagi diteruskan, sehingga Skill pembelajaran tersebut tidak akan terus dimuat.

## Satu langkah lagi: ubah aturan pemeriksaan Anda sendiri

Simpan dulu Skill aslinya, lalu salin menjadi latihan baru:

```bash
mkdir -p bluebook-examples/action-list-latest
cp bluebook-examples/action-list-review/SKILL.md bluebook-examples/action-list-latest/SKILL.md
```

Buka file baru itu, ubah `name` pada frontmatter menjadi `action-list-latest`, lalu tambahkan satu aturan: “Hasil diurutkan berdasarkan tenggat waktu dari yang paling akhir ke paling awal; tanggal yang belum diketahui diletakkan di paling bawah, dan tanggalnya tidak boleh diisi sendiri.” Aturan lainnya dipertahankan.

Jalankan ulang Pi, dan muat hanya file baru secara eksplisit:

```bash
pi --no-extensions --no-skills --skill ./bluebook-examples/action-list-latest/SKILL.md
```

Ketik `/skill:action-list-latest` di Pi, lalu minta Pi membaca input yang sama dan menulis ke `output/daftar-tindakan-urutan-terbalik.md`. Saat verifikasi, urutan penanggung jawab seharusnya Sari, Bayu, Rani, dengan tanggal masing-masing 2026-09-01, 2026-08-30, dan 2026-08-28; batasan ketiga butir itu tidak boleh hilang karena pengurutan.

Terakhir, periksa ulang sidik jari input untuk memastikan Skill lama tidak ikut ditulis ulang. Dengan begitu, yang Anda latih adalah “mengubah aturan berulang menjadi metode Anda sendiri”, bukan sekadar memuat file yang disediakan orang lain. Jika ingin mencoba jenis input lain, lanjutkan ke [latihan migrasi perapian konten](/cases/content-workflow).

## Pemulihan saat gagal

Jika Skill tidak dipakai, periksa path, metadata, dan parameter peluncurannya; jika hasilnya salah, kembalilah ke verifikasi teks asli, jangan buru-buru mengubah Skill untuk menutupi satu kesalahan tugas. Hentikan pemuatan bila sumber atau isinya tidak wajar.
