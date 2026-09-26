---
title: Kebutuhan dan verifikasi Extension
description: Berangkat dari kebutuhan “ingatkan saya setelah tugas panjang selesai”, kenali desain dan verifikasi Pi Extension.
prev:
  text: Skill, Extension, dan Pi Package
  link: /guide/skills-extensions-packages
next:
  text: Bagaimana Subagent membagi tugas
  link: /guide/subagents
---

<span class="library-status">MODULE 04 · STEP 11 · bisa dilatih</span>

# Kebutuhan dan verifikasi Extension

::: info Hasil pelajaran ini
Anda akan memuat secara eksplisit sebuah Extension pengajaran yang hanya mendaftarkan perintah `/bluebook-check`, dan menyaksikan sendiri bahwa perintah itu muncul, dijalankan, lalu hilang setelah dinonaktifkan. Notifikasi desktop ditempatkan di akhir pelajaran ini sebagai desain lanjutan; pemberitahuan di dalam terminal tidak disamarkan sebagai notifikasi sistem.
:::

Pemahaman saya tentang Extension berawal dari satu gangguan kecil. Saat Pi menjalankan tugas panjang, saya berpindah ke jendela lain, dan tugas yang sudah berhenti tidak langsung saya sadari.

Kebutuhan ini cocok dijadikan Extension pertama, karena syarat pemicunya jelas, aksi sistemnya sederhana, dan mudah diverifikasi.

## Nyatakan dulu kebutuhannya dengan jelas

Jangan langsung menulis “wujudkan notifikasi sistem yang sempurna”. Tetapkan dulu empat batas untuk versi pertama:

1. Hanya pertimbangkan pengingat saat Agent selesai bekerja dan menunggu pesan baru.
2. Jangan mengganggu saat terminal sedang di depan.
3. Isi pengingat tidak memuat teks lengkap tugas yang bersifat privat.
4. Kegagalan pengingat tidak boleh merusak sesi Pi itu sendiri.

Di sini Anda sudah dapat melihat garis besar Extension: ia harus menerima event Pi, menilai status, lalu menjalankan satu aksi sistem.

## Memahami di mana file diletakkan

Pi dapat memuat Extension tingkat pengguna atau tingkat proyek. Saat pertama belajar, sebaiknya mulai dari proyek latihan mandiri dan biarkan hanya proyek ini yang memakainya. Dengan begitu asalnya mudah dilihat, dan saat terjadi kesalahan juga mudah dinonaktifkan.

Prompt kepercayaan proyek bukan penghalang yang berlebihan. Extension tingkat proyek menjalankan kode, dan apa yang dapat dilakukannya bergantung pada izin pengguna saat ini. Anda baru boleh mempercayai proyek itu ketika sudah tahu dari mana filenya berasal dan secara garis besar apa yang dilakukannya.

Lokasi penemuan otomatis resmi saat ini adalah tingkat pengguna `~/.pi/agent/extensions/` dan tingkat proyek `.pi/extensions/`. File yang diletakkan di lokasi ini dapat dimuat ulang dengan `/reload` di dalam Pi; pelajaran ini memakai `-e` dengan path eksplisit untuk pengujian sekali jalan, dan tidak memasang file pengajaran itu secara permanen.

## Praktik: memuat Extension minimal

Kali ini kita tidak langsung membuat notifikasi desktop. Uji dulu alur pemuatan yang lengkap dengan sebuah perintah tanpa baca-tulis file dan tanpa akses jaringan, baru kemudian bahas batas tambahan yang dibutuhkan notifikasi sistem.

### 1. Unduh dan baca kodenya sampai habis

Keluar dari Pi, lalu di terminal biasa masuk ke `pi-practice` dan jalankan:

```bash
mkdir -p bluebook-examples
curl -fL https://pi-bluebook-id.pages.dev/examples/extension/bluebook-check.ts \
  -o bluebook-examples/bluebook-check.ts
```

Buka file ini. Kode lengkapnya hanya punya satu import, satu fungsi default, dan satu pemanggilan `registerCommand`; setelah perintah dijalankan, ia hanya menampilkan satu pemberitahuan antarmuka Pi lewat `ctx.ui.notify`. Jika isi yang Anda unduh berbeda, hentikan dan jangan dimuat.

### 2. Memuatnya hanya untuk peluncuran kali ini

Jalankan di terminal biasa:

```bash
pi --no-extensions -e ./bluebook-examples/bluebook-check.ts
```

`--no-extensions` akan mengabaikan Extension lain yang ditemukan otomatis, lalu `-e` menambahkan file pelajaran ini secara eksplisit. Setelah masuk ke area edit Pi, ketik:

```text
/bluebook-check
```

Anda diharapkan melihat pemberitahuan antarmuka “Extension Bluebook sudah dimuat; perintah ini tidak membaca atau mengubah file apa pun.” Ini membuktikan perintah sudah terdaftar dan fungsi penanganannya berhasil berjalan; ini tidak membuktikan notifikasi desktop, tugas latar belakang, atau kemampuan Extension lain sudah tersedia.

![Ilustrasi: Si Hitam memasang modul ke sisi mesin dan lonceng berbunyi, dengan label Extension aktif dan notifikasi](/images/06-pi-hasil-extension.webp)

Pemberitahuan antarmuka muncul sebagai umpan balik Pi setelah `/bluebook-check` dijalankan. Peluncuran ini dilakukan offline, dan perintah itu sendiri tidak memanggil model, membaca atau menulis file, maupun mengakses jaringan. Apakah penonaktifan berhasil tetap harus diperiksa dengan memulai ulang sesuai langkah berikutnya.

### 3. Menonaktifkan dan memeriksa ulang

Ketik `/quit` untuk kembali ke terminal biasa, lalu jalankan langsung:

```bash
pi --no-extensions
```

Saat ini `/bluebook-check` seharusnya tidak lagi menjadi perintah Extension yang dapat dijalankan. Jika masih muncul, periksa dulu apakah perintah peluncuran kali ini benar-benar tanpa `-e`, lalu periksa apakah `.pi/extensions/` di proyek dan direktori pengguna `~/.pi/agent/extensions/` memiliki file bernama sama. Jangan menghapus file yang tidak Anda kenali; cukup catat asalnya dan berhenti.

Jika Extension mengalami galat sintaks, Pi akan menampilkan galat pemuatan. Simpan galat lengkap dan path filenya, lalu mulai ulang dengan perintah tanpa `-e` untuk melewati Extension pelajaran ini; kegagalan pemuatan tidak boleh menjadi alasan untuk menghapus sesi atau materi latihan.

## Verifikasi dengan hasil yang dapat diamati

Saat benar-benar membuat notifikasi desktop, setidaknya Anda harus menguji tiga situasi:

| Skenario | Hasil yang seharusnya |
| --- | --- |
| Terminal di latar belakang, Agent benar-benar menyelesaikan tugas | Muncul satu pengingat yang terlihat |
| Terminal di depan, Anda sedang melihat Pi | Tidak ada pengingat tambahan yang muncul |
| Masih menjalankan pemanggilan tool, atau masih ada pesan dalam antrean | Jangan salah menilai status antara sebagai selesai |

Perintah yang mencetak sederet karakter kontrol hanya membuktikan perintah itu dipanggil. Itu tidak membuktikan notifikasi benar-benar muncul di desktop macOS. Bukti akhir harus mencakup pengamatan antarmuka yang nyata, dan menyembunyikan nama pengguna, path, serta konten privat.

Setelah menyelesaikan pemuatan dasar, buka [latihan kustom CASE 04](/cases/first-extension), ubah satu nama perintah dan teks pemberitahuannya, lalu verifikasi penonaktifannya; jangan hanya berhenti di mengunduh kode yang sudah jadi.

## Dari perintah minimal menuju notifikasi desktop

Saat benar-benar menyelesaikan fungsi kecil ini, Anda akan melewati satu siklus pengembangan Extension yang lengkap: berangkat dari kebutuhan nyata, menemukan event, menulis perilaku minimal, memuat ulang, mereproduksi skenario, dan memeriksa efek samping.

Di antara event Extension resmi saat ini, `agent_end` menandakan berakhirnya satu proses di lapisan bawah, dan setelah itu masih mungkin ada percobaan ulang otomatis, percobaan ulang pemadatan, atau pemrosesan pesan dalam antrean; untuk integrasi status “tugas sudah tidak akan berlanjut otomatis”, `agent_settled` sebaiknya dinilai lebih dulu. Namun “apakah terminal berada di depan” dan “bagaimana memanggil notifikasi desktop macOS, Windows, atau Linux” termasuk kemampuan sistem operasi, dan tidak dapat diselesaikan lintas platform hanya dengan satu event.

::: warning Studi kasus lanjutan belum diklaim selesai
Pelajaran ini sudah menyelesaikan siklus lengkap Extension: mengunduh, mengulas, memuat, menjalankan, dan menonaktifkan. Notifikasi desktop di latar belakang masih perlu diverifikasi secara terpisah untuk izin notifikasi sistem operasi, penilaian posisi di depan, dan antarmuka nyata; sebelum ada tangkapan layar nyata dan skenario yang dapat direproduksi, jangan menandainya sudah terverifikasi.
:::

## Verifikasi pelajaran ini

- Anda sudah membaca file `.ts` yang benar-benar dimuat, dan dapat menunjukkan perintah yang didaftarkannya serta satu-satunya aksi yang terlihat.
- Saat diluncurkan dengan `-e`, `/bluebook-check` menampilkan pemberitahuan yang diharapkan.
- Saat diluncurkan lagi tanpa `-e`, perintah pengajaran itu tidak lagi tersedia.
- Meskipun kode gagal dimuat, Anda tetap dapat melewati file itu dan masuk kembali ke Pi, serta sesi asli dan materi latihan tidak terhapus.

### Dasar bab ini

- [Pi Extensions](https://pi.dev/docs/latest/extensions)

Extension API dan event `agent_settled` diverifikasi pada 2026-09-09. File pengajaran telah benar-benar dimuat di Pi 0.80.10 pada mesin ini, perintah `bluebook-check` berhasil terdaftar, dan mengembalikan permintaan pemberitahuan antarmuka yang diharapkan.
