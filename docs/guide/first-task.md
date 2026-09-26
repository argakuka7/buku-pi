---
title: Tugas pertama, pelajari dulu cara verifikasinya
description: Selesaikan perapian file pertama dengan notulen rapat fiktif, lalu periksa input dan output secara independen.
prev:
  text: Masuk ke direktori latihan dan pastikan pengaturan dasar
  link: /guide/ready-to-work
next:
  text: File dan direktori kerja
  link: /guide/files-and-context
---

<span class="library-status">MODULE 02 · STEP 05</span>

# Tugas pertama, pelajari dulu cara verifikasinya

Rapat sudah selesai, dan di tangan Anda tersisa catatan yang berserakan. Sebelum mulai mendorongnya besok, Anda perlu merapikan pokok bahasan, penanggung jawab, tenggat waktu, dan pengingat risiko dengan jelas.

Ini sangat cocok sebagai latihan Pi pertama. Materinya pendek, hasilnya terlihat, dan jika salah pun tidak ada kerugian nyata. Kita akan meminta Pi merapikan notulen rapat fiktif menjadi daftar tindakan, lalu meninggalkan ringkasan Pi dan memeriksa sendiri file asal serta hasil akhirnya.

::: warning Sebelum mulai
Bab ini melanjutkan "Instalasi dan pengaturan dasar". Anda seharusnya sudah bisa menjalankan Pi di direktori `pi-practice` dan menerima balasan model. Jika belum selesai, kembali dulu ke [pelajaran sebelumnya](/guide/ready-to-work). Tangkapan layar hanya dipakai untuk mengenali operasi; model, status bar, dan pemberitahuan pembaruan yang Anda lihat bisa berbeda, dan itu tidak memengaruhi latihan ini.
:::

## 1. Siapkan materi yang mudah diperiksa

Buat dulu direktori latihan yang terpisah. Perintah berikut berlaku untuk macOS dan Linux. Pengguna Windows tetap memakai Git Bash, dan mengganti `~/Downloads/pi-practice` di ketiga baris dengan `~/pi-practice`.

```bash
mkdir ~/Downloads/pi-practice/input
mkdir ~/Downloads/pi-practice/output
cd ~/Downloads/pi-practice
```

Jika direktori latihan Anda memakai nama lain, ganti semua `pi-practice` di ketiga baris itu dengan satu nama nyata yang sama.

Jika salah satu `mkdir` menampilkan `File exists`, jangan lanjut dulu. Itu menandakan latihan lama mungkin masih ada, dan keluarannya akan mengganggu verifikasi kali ini. Kembali ke modul satu dan buat direktori kosong lain, lalu pakai nama baru yang sama di perintah halaman ini.

Jalankan perintah berikut di direktori latihan saat ini untuk menyimpan materi latihan langsung ke `input`.

```bash
curl -fL https://buku-pi-dariargakuka.netlify.app/examples/first-task/meeting-notes.md \
  -o input/notulen-rapat.md
ls input
sed -n '1,12p' input/notulen-rapat.md
```

Backslash berarti perintah ini belum selesai; salin seluruh kotak kode lalu jalankan. `-f` membuat galat server gagal secara eksplisit; `ls input` harus menampilkan `notulen-rat.md`, lalu 12 baris pertama yang dicetak harus diawali dengan "Notulen rapat kickoff proyek" dan memuat tiga pokok bahasan.

Jika pengunduhan gagal, Anda juga bisa membuka <a href="/examples/first-task/meeting-notes.md" download="notulen-rat.md">notulen rapat untuk latihan</a>, lalu menyimpannya dengan editor teks biasa ke `pi-practice/input/notulen-rapat.md`. Nama file dan lokasinya harus sama; setelah disimpan, jalankan lagi `ls input` dan pemeriksaan isi `sed` di atas.

```markdown
# Notulen rapat kickoff proyek

Tanggal: 2026-08-26

- Halaman penjelasan situs disiapkan oleh Rani, tenggat 2026-08-28. Perintah instalasi harus diperiksa dulu apakah masih berlaku.
- Tangkapan layar tutorial dibuat oleh Bayu, tenggat 2026-08-30. Akun, path pribadi, dan kredensial harus disembunyikan.
- Pemeriksaan sebelum rilis menjadi tanggung jawab Sari, tenggat 2026-09-01. Perintah di dalam teks dan tangkapan layar harus bisa bersesuaian satu per satu.

Catatan tambahan: kali ini hanya membuat file latihan, tidak mengubah direktori lain, tidak mengirim atau mengunggah apa pun.
```

Hitunglah sendiri dengan mata Anda. Di sini ada 3 pokok bahasan, 3 penanggung jawab, 3 tanggal, dan 3 pengingat risiko. Itulah pembanding tetap untuk verifikasi nanti.

Lalu tinggalkan satu "sidik jari" file input sebelum eksekusi. Untuk macOS gunakan:

```bash
shasum -a 256 input/notulen-rapat.md > input-before.sha256
```

Distribusi Linux yang umum memakai:

```bash
sha256sum input/notulen-rapat.md > input-before.sha256
```

Git Bash di Windows juga memakai perintah `sha256sum` di atas.

Terakhir jalankan `pwd` dan pastikan posisi saat ini berakhir dengan nama direktori latihan Anda; lalu jalankan `ls output`. Perintah ini baru berarti direktori output kosong jika tidak menampilkan nama file apa pun. File lama juga akan lolos pemeriksaan "file ada", jadi latihan pertama harus dimulai dari direktori kosong.

## 2. Tulis tugas sebagai persyaratan yang bisa diperiksa

Jalankan `pwd` di terminal biasa, pastikan posisi saat ini masih direktori latihan, lalu ketik `pi`. Setelah area edit bawah Pi terlihat, salin dan kirim tugas berikut.

```text
Baca input/notulen-rapat.md, lalu susun menjadi output/daftar-tindakan.md.

Tulis setiap item pada satu baris tersendiri, dan Anda harus mempertahankan item, penanggung jawab, tenggat waktu, serta pengingat risiko;
jangan mengubah file asli di dalam input, dan jangan mengakses apa pun di luar direktori latihan saat ini.
Setelah selesai, daftarkan file yang ditambahkan dan diubah, lalu jelaskan bagaimana saya harus memverifikasinya.
```

Tugas ini menjelaskan empat hal, yaitu **apa yang dibaca, apa yang dihasilkan, bagian mana yang tidak boleh diubah, dan apa yang dilaporkan setelah selesai**. Ia tidak mengejar teknik prompt yang rumit, hanya mengubah hasil menjadi fakta yang bisa diperiksa satu per satu.

::: danger Cakupan tugas dan isolasi keamanan itu dua hal berbeda
"Jangan mengakses konten di luar direktori latihan" hanya menetapkan cakupan tugas kali ini. Tool dan Extension Pi berjalan dengan izin pengguna saat ini. Saat menangani materi yang tidak tepercaya, gunakan lingkungan terisolasi seperti container atau mesin virtual; bagian ini akan dibahas di bab keamanan berikutnya.
:::

## 3. Lihat dengan jelas apa yang dibaca dan ke mana Pi menulis

Setelah mengirim, lihat dulu catatan baca-tulis yang ditampilkan antarmuka, jangan hanya menunggu kalimat terakhir "sudah selesai".

1. Objek bacaannya harus `input/notulen-rapat.md`.
2. Objek tulisannya harus `output/daftar-tindakan.md`.
3. Jika muncul direktori lain, atau Pi hendak menulis ke `input`, tekan `Esc` untuk menghentikan tugas saat ini.

![Ilustrasi: Si Hitam memasukkan gulungan kertas ke slot surat pada kotak berbaris kursor, dengan label kirim tugas dan Pi](/images/first-task-submit.webp)

Contoh ini dibuat pengelola proyek memakai materi rapat fiktif. Pembaruan Package, model, dan status bar bukan prasyarat latihan ini. Path Anda harus berakhir dengan `.../pi-practice` dan tidak perlu sama persis dengan contoh di pelajaran ini.

Menekan `Esc` hanya bisa menghentikan tindakan yang belum selesai, tidak bisa membatalkan penulisan yang sudah terjadi. Setelah menghentikannya, Anda tetap harus memeriksa file input; jika isinya sudah berubah, simpan direktori saat ini sebagai lokasi kejadian, buat direktori latihan kosong baru, unduh ulang materi asli, dan buat sidik jari baru sebelum memulai lagi. Jangan menimpa lokasi kejadian untuk menciptakan ilusi "sudah pulih".

## 4. Jangan biarkan Agent menilai dirinya sendiri

Ringkasan Pi bisa memberi petunjuk, tetapi tidak bisa dijadikan bukti penyelesaian. Keluar dari Pi atau buka jendela terminal lain, lalu kembali ke direktori latihan yang sama. Di macOS jalankan berurutan:

```bash
shasum -a 256 -c input-before.sha256
test -f output/daftar-tindakan.md && echo "PASS: file output ada"
sed -n '1,120p' output/daftar-tindakan.md
```

Linux dan Git Bash Windows mengganti baris pertama dengan `sha256sum -c input-before.sha256`, dua baris berikutnya tidak berubah.

`shasum` memakai sidik jari yang ditinggalkan sebelum eksekusi untuk memeriksa apakah file input tidak berubah satu byte pun, dan seharusnya menampilkan `OK`. `test -f` hanya memeriksa apakah path output ada, dan seharusnya menampilkan `PASS`. `sed` mencetak isi output agar Anda bisa memeriksanya satu per satu; perintah itu sendiri tidak menilai apakah isinya benar.

![Ilustrasi: Si Hitam membandingkan dua lembar di depan jendela dengan kaca pembesar, dengan label input, output, dan cek](/images/first-task-verify-cropped.webp)

Buka notulen rapat dan daftar tindakan, lalu periksa satu per satu sesuai teks aslinya.

| Pokok bahasan | Penanggung jawab | Tenggat waktu | Pengingat risiko |
| --- | --- | --- | --- |
| Penataan halaman penjelasan situs resmi | Rani | 2026-08-28 | Memeriksa apakah perintah pemasangan masih berlaku |
| Pembuatan tangkapan layar tutorial | Bayu | 2026-08-30 | Menyembunyikan akun, path pribadi, dan kredensial |
| Pemeriksaan sebelum rilis | Sari | 2026-09-01 | Perintah dan tangkapan layar bisa bersesuaian satu per satu |

Keberadaan file hanyalah langkah pertama; Anda juga harus memastikan bahwa jumlahnya tepat 3 pokok bahasan itu, tidak ada yang terlewat, tidak ada yang muncul entah dari mana, dan penanggung jawab serta tanggal tidak tertukar.

Jika ada satu bagian yang tidak lolos, jangan hanya menyuruh Pi "periksa lagi". Sebutkan kesalahannya secara spesifik, seperti contoh berikut.

```text
Item kedua melewatkan “Akun, path pribadi, dan kredensial harus disembunyikan”.
Mohon hanya mengubah output/daftar-tindakan.md, lengkapi pengingat risiko ini, jangan ubah isi lainnya.
Setelah selesai, laporkan lokasi perubahannya.
```

Setelah diperbaiki, jalankan lagi ketiga pemeriksaan. Tugas ini baru dianggap selesai jika input tetap `OK`, output benar-benar ada, dan keempat jenis kolom bersesuaian satu per satu.

## 5. Simpan latihan ini

Latihan pertama tidak perlu menghafal semua perintah. Cukup ikuti urutan yang sama. Siapkan materi yang bisa diperiksa, tuliskan tindakan dan cakupannya dengan jelas, amati baca-tulis yang sebenarnya, lalu periksa hasilnya secara independen.

Pelajaran berikutnya akan melatih [`@file` dan direktori kerja](/guide/files-and-context) secara khusus. Jika ingin melihat catatan asli penulisnya lebih dulu, Anda juga bisa membaca [Catatan belajar asli tugas pertama](/tweets/02-first-tasks).

**Ringkasan Agent hanyalah petunjuk; hasil yang bisa diverifikasi secara independen barulah yang dianggap selesai.**

### Dasar bab ini

- [Pi Quickstart](https://pi.dev/docs/latest/quickstart)
- [Penjelasan penggunaan Pi](https://pi.dev/docs/latest/usage)
- [Penjelasan keamanan Pi](https://pi.dev/docs/latest/security)
- [Penjelasan lingkungan terisolasi Pi](https://pi.dev/docs/latest/containerization)
