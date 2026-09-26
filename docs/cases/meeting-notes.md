---
title: CASE 01 · Daftar tindakan notulen rapat
description: Menghasilkan daftar tindakan dari sebuah catatan rapat fiktif, lalu memeriksa input dan output secara independen.
prev: { text: Koleksi studi kasus, link: /cases/ }
next: { text: CASE 02 · Sebelum dan sesudah pemadatan, link: /cases/compaction-before-after }
---

<span class="library-status">CASE 01 · Dapat dilatih</span>

# Daftar tindakan notulen rapat

## Hasil

Dari tiga catatan rapat fiktif, hasilkan `output/daftar-tindakan.md`; file asli tetap tidak berubah, dan penanggung jawab, tanggal, serta batasan dari ketiga item tindakan berkorespondensi satu per satu.

## Materi tetap

- <a href="/examples/first-task/meeting-notes.md" download>Unduh catatan rapat fiktif</a>
- Direktori kerja: `pi-practice` yang terpisah

Materi harus memuat tiga tugas dari Rani, Bayu, dan Sari, beserta tanggal dan batasannya masing-masing. Ini adalah teks pengajaran tanpa informasi pribadi.

## 1. Menyiapkan input dan sidik jari

Di macOS, jalankan di terminal biasa:

```bash
mkdir -p ~/Downloads/pi-practice/input ~/Downloads/pi-practice/output
cd ~/Downloads/pi-practice
curl -fL https://buku-pi-dariargakuka.netlify.app/examples/first-task/meeting-notes.md \
  -o input/notulen-rapat.md
shasum -a 256 input/notulen-rapat.md > input-before.sha256
test ! -e output/daftar-tindakan.md && echo "PASS: output belum ada"
```

Pengguna Windows menggunakan Git Bash, ganti direktorinya menjadi `~/pi-practice`, dan ganti `shasum -a 256` dengan `sha256sum`. Jika pada akhirnya `PASS` tidak muncul, pindah ke direktori latihan baru yang kosong; jangan melanjutkan dengan hasil lama.

## 2. Teks asli tugas

Jalankan `pi` di direktori latihan saat ini, lalu berikan seluruh paragraf berikut kepadanya:

```text
Baca input/notulen-rapat.md, lalu susun menjadi output/daftar-tindakan.md.

Tulis setiap item pada satu baris tersendiri, dan Anda harus mempertahankan item, penanggung jawab, tenggat waktu, serta pengingat risiko;
jangan mengubah file asli di dalam input, dan jangan mengakses apa pun di luar direktori latihan saat ini.
Setelah selesai, daftarkan file yang ditambahkan dan diubah, lalu jelaskan bagaimana saya harus memverifikasinya.
```

## Gejala kunci

- Objek yang dibaca hanya `input/notulen-rapat.md`.
- Objek yang ditulis adalah file baru `output/daftar-tindakan.md`.
- Jika Anda hendak menulis ke `input` atau muncul path di luar direktori latihan, tekan `Esc` untuk berhenti.

[Pelajaran 5](/guide/first-task) menjelaskan mengapa tugas ini perlu menuliskan input, output, batasan, dan verifikasi sekaligus; menyelesaikan studi kasus ini tidak mengharuskan Anda kembali ke pelajaran untuk menyalin langkah-langkahnya.

## Verifikasi independen

Keluar dari Pi. Di macOS jalankan:

```bash
cd ~/Downloads/pi-practice
shasum -a 256 -c input-before.sha256
test -f output/daftar-tindakan.md && echo "PASS: file output ada"
sed -n '1,120p' output/daftar-tindakan.md
```

Pengguna Windows Git Bash ganti pemeriksaan pertama dengan `sha256sum -c input-before.sha256`.

1. Pemeriksaan sidik jari sebelum eksekusi tetap `OK`.
2. File output ada dan berisi tepat tiga item.
3. Rani, Bayu, dan Sari masing-masing berpasangan dengan tanggal dan batasan yang benar.
4. Catatan baca-tulis yang sebenarnya tidak memuat path di luar direktori latihan.

## Pemulihan kegagalan

Jika input berubah, output tercampur konten lama, atau path-nya salah, hentikan modifikasi lebih lanjut dan pertahankan kondisi lapangan; unduh ulang materi di direktori latihan baru yang kosong dan buat sidik jari baru. Jangan mengganti pemeriksaan ulang dengan “sudah diperbaiki” dari Agent.
