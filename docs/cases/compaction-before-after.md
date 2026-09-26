---
title: CASE 02 · Perbandingan sebelum dan sesudah pemadatan
description: Melakukan pemadatan manual dalam Session yang sama, lalu membandingkan konteks saat ini, checkpoint di disk, dan data cache opsional.
prev: { text: CASE 01 · Catatan rapat, link: /cases/meeting-notes }
next: { text: CASE 03 · Skill pertama, link: /cases/first-skill }
---

<span class="library-status">CASE 02 · Modul 3 · bisa dilatih</span>

# Perbandingan sebelum dan sesudah pemadatan

## Apa yang akan Anda dapatkan

Dalam satu Pi Session yang sama, Anda akan meninggalkan tiga catatan: jawaban sebelum pemadatan, jawaban dari ingatan setelah pemadatan, dan jawaban setelah membaca ulang checkpoint. Eksperimen ini tidak mengandaikan “setelah pemadatan pasti lupa”, melainkan mengajak Anda memahami perbedaan nyatanya: Session, Context saat ini, file di disk, dan prompt cache adalah bukti yang berbeda.

::: warning Pengingat biaya
Studi kasus ini akan memanggil model dan menjalankan `/compact` satu kali secara manual. Pemadatan itu sendiri juga memerlukan model untuk membuat ringkasan, dan bisa menghabiskan kuota paket berlangganan atau menimbulkan biaya API. Selesaikan dulu [pemeriksaan biaya pada pelajaran login](/guide/connect-model); jika ragu, jangan lanjutkan hanya demi melakukan eksperimen.
:::

## Materi tetap

- <a href="/examples/compaction/brief.md" download>unduh brief eksperimen brief.md</a>
- <a href="/examples/compaction/checkpoint.md" download>unduh checkpoint checkpoint.md</a>
- <a href="/examples/compaction/settings.json" download>unduh settings.json khusus eksperimen</a>

Dua materi pertama hanya berisi teks pembelajaran tetap, tanpa skrip, kredensial, atau data pribadi. `settings.json` hanya menurunkan `keepRecentTokens` untuk direktori eksperimen ini menjadi `200`, agar sesi pendek tetap memiliki konten lama yang bisa dipadatkan; jangan menyalinnya ke proyek sehari-hari atau konfigurasi level pengguna.

## 1. Buat direktori eksperimen terpisah

Di macOS, jalankan di terminal biasa:

```bash
cd ~/Downloads/pi-practice
mkdir -p compaction-lab/.pi compaction-lab/results
curl -fL https://buku-pi-dariargakuka.netlify.app/examples/compaction/brief.md \
  -o compaction-lab/brief.md
curl -fL https://buku-pi-dariargakuka.netlify.app/examples/compaction/checkpoint.md \
  -o compaction-lab/checkpoint.md
curl -fL https://buku-pi-dariargakuka.netlify.app/examples/compaction/settings.json \
  -o compaction-lab/.pi/settings.json
cd compaction-lab
shasum -a 256 brief.md checkpoint.md > input-before.sha256
```

Pengguna Windows tetap memakai Git Bash, ganti baris pertama menjadi `cd ~/pi-practice`, lalu setelah masuk ke direktori eksperimen ganti baris terakhir menjadi:

```bash
sha256sum brief.md checkpoint.md > input-before.sha256
```

Pastikan akhir keluaran `pwd` adalah `compaction-lab`, dan buka sendiri kedua file Markdown serta `.pi/settings.json`. Lanjutkan hanya setelah isinya sesuai dengan penjelasan di halaman ini; hentikan bila file setelannya memiliki kolom tambahan.

## 2. Jalankan satu Session yang bersih

Masih di terminal biasa, jalankan:

```bash
pi --name "Sebelum dan sesudah pemadatan" --no-extensions --no-skills --no-context-files
```

Setelah masuk ke Pi, ketik `/session` dan pastikan nama sesinya adalah “Sebelum dan sesudah pemadatan”. Catat Session ID yang ditampilkan antarmuka; ID itu hanya dipakai nanti untuk memastikan Anda masih berada di sesi yang sama, tidak perlu dipublikasikan atau diunggah.

Jika saat pertama masuk ke direktori itu muncul prompt Project Trust, percayai direktori latihan terisolasi ini hanya setelah Anda memeriksa ketiga materi unduhan. Project Trust mengizinkan Pi memakai setelan di dalam direktori, dan tidak mengubahnya menjadi sandbox; keluarlah bila direktori atau filenya tidak sesuai dengan halaman ini, jangan konfirmasi.

## 3. Sisakan konten lama yang bisa dipadatkan

Kirim dulu ronde observasi pertama:

```text
Baca brief.md dan checkpoint.md, lalu periksa satu per satu apakah enam informasi tetap itu konsisten.
Dalam balasan, hanya daftarkan keenam informasi itu beserta kesimpulan pemeriksaannya; jangan menulis file, jangan mengakses jaringan.
```

Setelah selesai, kirim ronde observasi kedua:

```text
Jangan baca ulang file. Berdasarkan konteks saat ini saja, jelaskan:
1. Mengapa “Session sudah disimpan” tidak sama dengan “Context saat ini selalu memuat seluruh teks asli”;
2. Mengapa checkpoint.md bisa dijadikan dasar pemulihan;
3. Apa satu-satunya tindakan yang dilarang dalam eksperimen ini.
Maksimal dua kalimat per butir, jangan menulis file, jangan mengakses jaringan.
```

Lanjutkan hanya setelah kedua ronde selesai. Ambang batas rendah khusus eksperimen akan membuat ronde yang lebih awal masuk ke cakupan pemadatan; jika langkah ini dilewati, sesi pendek bisa saja tidak memiliki konten yang bisa dipadatkan.

## 4. Tulis catatan sebelum pemadatan

Serahkan seluruh paragraf berikut kepada Pi:

```text
Jangan baca ulang file. Berdasarkan konteks saat ini saja, tulis keenam informasi itu baris per baris ke
results/before.md, dengan format yang harus sama dengan daftar di checkpoint.md.
Di akhir, balas hanya path tulisannya; untuk yang tidak diketahui tulis “tidak diketahui”, jangan menebak, jangan mengakses jaringan.
```

Proses eksekusinya seharusnya hanya menulis `results/before.md`. Tekan `Esc` untuk berhenti bila terjadi pembacaan, akses jaringan, direktori lain, atau perubahan input.

## 5. Padatkan secara manual, lalu lakukan satu jawaban dari ingatan

Buka `/session` dulu, dan pastikan Session ID-nya sama dengan langkah 2. Lalu ketik di area edit Pi:

```text
/compact
```

Tunggu sampai pemadatan selesai, hingga Pi kembali ke keadaan bisa menerima input. Jangan menjalankan `/compact` kedua kali secara berturut-turut.

Setelah melihat pemberitahuan pemadatan selesai, lanjutkan dengan mengirim:

```text
Jangan membaca file apa pun, dan jangan mengakses jaringan.
Berdasarkan konteks yang kamu terima saat ini saja, tulis keenam informasi tetap eksperimen ke
results/after-memory.md, dengan format seperti sebelum pemadatan.
Untuk butir yang tidak bisa dipastikan tulis “tidak diketahui”, jangan menebak. Di akhir, balas hanya path tulisannya.
```

Bila pada ronde ini muncul `read`, `grep`, `find`, atau tindakan pembacaan lain, segera hentikan: itu akan membuat pengamatan “apakah Context saat ini masih menyimpan informasi” menjadi tidak valid.

## 6. Pulihkan dari checkpoint di disk

Apa pun hasilnya, apakah catatan sebelumnya lengkap atau tidak, tetap kirim:

```text
Sekarang baca checkpoint.md, jadikan file itu acuan, lalu tulis keenam informasi tetap ke
results/after-file.md. Formatnya harus sama dengan daftar di checkpoint.md.
Jika isinya berbeda dari after-memory.md, sebutkan di balasan kolom mana yang berbeda; jangan mengubah catatan yang sudah ada.
```

Tujuan langkah ini bukan membuat Agent “mengakui lupa”, melainkan memverifikasi apakah checkpoint di disk bisa kembali menyediakan informasi yang pasti.

## Fenomena kunci

| Objek pengamatan | Apa yang perlu Anda periksa | Apa yang bisa dibuktikan |
| --- | --- | --- |
| Session | Apakah ID sebelum dan sesudah `/session` sama | Percakapan masih berada di Session tersimpan yang sama |
| Context saat ini | Apakah `after-memory.md` konsisten dengan catatan sebelum pemadatan | Informasi apa yang dipertahankan oleh ringkasan dan pesan terbaru untuk ronde ini |
| File di disk | Apakah sidik jari kedua input tetap sama; apakah `after-file.md` lengkap | File bisa disimpan secara mandiri dan kembali menyediakan batasan |
| Prompt cache | Apakah Provider menampilkan data cache, dan apakah berubah sebelum/sesudah pemadatan | Hanya mencatat fenomena cache dari layanan saat ini, bukan ingatan atau kualitas tugas |

Keenam informasi yang semuanya tetap tersimpan setelah pemadatan adalah hasil yang valid; munculnya “tidak diketahui” atau perbedaan juga hasil yang valid. Eksperimen hanya gagal dalam dua hal: tidak meninggalkan catatan yang bisa dibandingkan, atau diam-diam membaca ulang file pada tahap jawaban dari ingatan.

## Verifikasi independen

Keluar dulu dari Pi. Di macOS, jalankan di terminal biasa:

```bash
cd ~/Downloads/pi-practice/compaction-lab
shasum -a 256 -c input-before.sha256
test -f results/before.md
test -f results/after-memory.md
test -f results/after-file.md
grep -F 'Kode proyek: Perahu Kertas Biduk' results/after-file.md
grep -F 'Urutan tetap: biru → emas → kelabu' results/after-file.md
grep -F 'Frasa verifikasi：perahu merapat' results/after-file.md
diff -u results/before.md results/after-memory.md || true
```

Git Bash di Windows mengganti `shasum -a 256 -c` menjadi `sha256sum -c`, sedangkan perintah lainnya tidak berubah.

Kedua input sama-sama menampilkan `OK`, ketiga catatan ada, dan `after-file.md` memuat tiga informasi tetap, yang berarti rantai pemulihan file sudah lolos. Tiga baris `grep -F` memakai literal yang sama persis dengan `checkpoint.md`, jadi pencocokannya harus tepat. `diff` terakhir yang tidak menghasilkan keluaran berarti kedua catatan sama; bila muncul perbedaan, pertahankan perbedaan itu, karena itulah hasil eksperimen kali ini — jangan mengubahnya menjadi jawaban yang diharapkan.

Jalankan sekali lagi Pi dan gunakan `pi -r` untuk menemukan “Sebelum dan sesudah pemadatan”, lalu buka `/session` dan periksa Session ID aslinya. Sesi yang bisa dibuka kembali hanya membuktikan riwayatnya tersimpan; Anda tetap perlu memeriksa file di disk dan jawaban setelah pemadatan.

## Pemulihan saat gagal

- `/compact` menampilkan `Nothing to compact (session too small)`: pastikan akhir direktori saat ini adalah `compaction-lab`, isi `.pi/settings.json` benar, dan langkah 3 serta 4 sudah selesai; setelah diperbaiki, buat Session baru dan ulangi, jangan mencoba terus-menerus di sesi yang sama.
- `/compact` mengalami galat lain atau tidak kembali ke area input: tekan `Esc` untuk berhenti, simpan teks galatnya dan file yang sudah ada, jangan mengulang tanpa jeda.
- Tahap jawaban dari ingatan membaca file: simpan catatan itu dan tandai “ronde ini tidak valid”, lalu buat Session baru untuk mengulang eksperimen, jangan menimpa file lama.
- Session asli tidak ditemukan: jangan mengklaim sesinya sudah dipulihkan; buat sesi baru, lalu lanjutkan pemeriksaan dari `checkpoint.md` dan catatan yang sudah ada.
- Sidik jari input berubah: hentikan perbandingan, simpan kondisi apa adanya; unduh ulang ke direktori eksperimen baru, jangan menimpa materi yang sudah berubah.
- `after-file.md` masih kekurangan kolom: buka `checkpoint.md` dan periksa secara manual, catat yang terlewat; jangan membiarkan Agent mengubahnya berulang kali sampai pengujian lolos.
- Jika setelah eksperimen selesai Anda tidak ingin mempertahankan ambang batas rendah: keluar dari Pi, hapus seluruh `compaction-lab`; atau hapus hanya `.pi/settings.json` di dalamnya. Ini tidak mengubah setelan level pengguna.

## Studi kasus ini berkaitan dengan dua penilaian berikut

- [Poin 6: Session bisa disimpan, tetapi bukan berarti model selalu mengingat semua isinya](/guide/lasting-principles#session-and-context)
- [Poin 7: Pemadatan dan prompt cache harus dipahami secara terpisah](/guide/lasting-principles#compaction-and-cache)

Dasar mekanisme resmi: [Pi Compaction](https://pi.dev/docs/latest/compaction) · [Pi Sessions](https://pi.dev/docs/latest/sessions)
