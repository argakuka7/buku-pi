---
title: Memasang Pi dan Membukanya untuk Pertama Kali
description: Pilih antara installer resmi dan jalur npm, konfirmasi versi, lalu latih cara memulai dan keluar dari Pi.
prev:
  text: Sebelum instalasi, siapkan dulu terminal dan lingkungan
  link: /guide/before-install
next:
  text: Login akun, agar Pi bisa menjawab Anda
  link: /guide/connect-model
---

<span class="library-status">MODULE 01 · STEP 02</span>

# Memasang Pi dan Membukanya untuk Pertama Kali

Pelajaran sebelumnya sudah menyiapkan terminal, direktori latihan kosong, Node.js, dan npm. Kini kerjakan satu hal saja: pastikan perintah `pi` bisa dibuka dan ditutup dengan normal di komputer ini. Login model dan tugas pertama tetap berada di tahap verifikasi tersendiri setelah ini.

::: info Pengguna Windows
Pintasan dan direktori di halaman ini disusun untuk macOS. Pengguna Windows silakan mengikuti [Jalur instalasi Windows berbahasa Mandarin](/guide/windows-setup), dan jangan menyalin halaman ini apa adanya ke Command Prompt atau PowerShell; setelah menyelesaikan instalasi dan peluncuran pertama lewat jalur khusus itu, Anda akan kembali ke pelajaran 3.
:::

Pengguna Linux memakai perintah pemasangan dan verifikasi yang sama, tetapi menyalin dan menempel mengikuti pintasan terminal Anda saat ini; jika pelajaran sebelumnya membuat `~/pi-practice`, direktori latihan di halaman ini pun diseragamkan menjadi itu. Tangkapan layar di halaman ini merekam lingkungan Mac, sedangkan untuk Linux jadikan keluaran perintah yang sebenarnya dan status bar Pi sebagai acuan.

Buka terminal lebih dulu. Jika Anda tidak yakin sedang berada di mana, ketik `pwd` untuk melihatnya sekilas. Perintah pemasangan pertama di bawah memasang perintah Pi yang bisa dipanggil komputer ini; direktori tempat Anda nanti "menjalankan Pi" itulah yang menentukan file apa saja yang akan dilihat Pi.

## 1. Pilih satu jalur pemasangan resmi

Pi resmi saat ini menyediakan dua jalur pemasangan untuk macOS dan Linux. Keduanya memasang **Pi Coding Agent** yang sama; pilih satu saja, jangan menjalankan kedua metode itu secara berurutan.

| Jalur | Cocok untuk siapa | Perintah pemasangan | Cara menghapusnya nanti |
| --- | --- | --- | --- |
| Installer resmi | Pemula yang ingin skrip resmi menangani pemeriksaan lingkungan, pemasangan, dan PATH | `curl -fsSL https://pi.dev/install.sh \| sh` | Jalankan ulang installer lalu pilih uninstall |
| Pemasangan global npm | Pembaca yang sudah mengelola Node.js/npm dan ingin jelas memakai manajer paket | `npm install -g --ignore-scripts @earendil-works/pi-coding-agent` | Uninstall global lewat npm |

Buku ini merekomendasikan **installer resmi** untuk pemasangan pertama. Installer akan memeriksa Node.js versi 22.19.0 atau lebih baru dan npm; jika lingkungan belum lengkap, ia akan bertanya lebih dulu apakah ingin dibantu memasang. Pelajaran sebelumnya sudah membuat Anda menyelesaikan pemeriksaan itu lebih awal, jadi dalam kondisi normal installer akan langsung masuk ke proses pemasangan Pi.

Pilih dengan mouse **satu baris penuh** di bawah, tekan `Command + C`; klik kembali kursor yang berkedip di terminal, tekan `Command + V`, pastikan domainnya `pi.dev` dan tidak ada teks tambahan, lalu tekan Enter.

```bash
curl -fsSL https://pi.dev/install.sh | sh
```

Perintah ini mengunduh lalu langsung menjalankan skrip installer resmi Pi. Jangan mengganti domainnya dengan hasil pencarian, penyimpanan cloud, atau alamat skrip kiriman orang lain. Saat installer menampilkan pemeriksaan lingkungan dan tindakan pemasangan, baca dulu petunjuknya sampai jelas sebelum melanjutkan; jika ia hendak memasang komponen sistem yang tidak Anda rencanakan, batalkan dan simpan teks petunjuknya.

Jika Anda secara eksplisit memilih jalur npm, jalankan perintah di bawah ini dan jangan lagi menjalankan installer di atas:

```bash
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

Kedua jalur ini memasang aplikasi terminal lengkap yang nanti dibuka dengan perintah `pi`. Pi memakai komponen dasar seperti Pi Agent Core, tetapi Anda tidak perlu memasang paket inti secara terpisah lalu merangkai sekelompok plugin dengan tangan. Skill dan Extension adalah kemampuan yang ditambahkan sesuai tugas nanti. Nama dan hierarkinya lihat [Perbedaan Pi dan Pi Coding Agent](/reference/faq#pi-vs-pi-coding-agent), sedangkan pintu masuk pemasangannya lihat [Quickstart resmi](https://pi.dev/docs/latest/quickstart).

Pada jalur npm, `-g` berarti memasang Pi sebagai perintah yang bisa dipanggil langsung oleh komputer ini; `--ignore-scripts` melarang paket dependensi menjalankan lifecycle script saat pemasangan. Pemasangan npm Pi yang normal tidak membutuhkan skrip-skrip itu.

Setelah pemasangan dimulai, terminal akan menampilkan informasi pemeriksaan, pengunduhan, dan pemasangan secara bertahap. Ini proses menunggu yang normal, Anda tidak perlu mengetik apa pun. Apa pun jalur yang dipilih, pemasangan baru dianggap lolos jika ketiga hal berikut terpenuhi sekaligus:

1. Kursor yang bisa dipakai mengetik muncul kembali di terminal;
2. Di akhir tidak muncul kegagalan pemasangan atau galat `npm ERR!`;
3. Perintah `pi --version` yang dijalankan tepat setelahnya bisa mengembalikan nomor versi.

Jika teks masih terus bergulir setelah agak lama, tunggu saja; jika teks sudah berhenti tetapi kursor belum kembali, jangan langsung mengetik perintah berikutnya. Saat jaringan lambat, pengunduhan akan lebih lama daripada perintah biasa.

Setelah proses pemasangan selesai, periksa apakah Pi benar-benar bisa dipakai.

```bash
pi --version
```

Yang diketik di sini adalah `pi --version`, lalu rangkaian nomor versi yang muncul setelahnya itulah keluarannya. Jika nomor versi muncul dan kursor kembali lagi, bukan `command not found`, berarti lolos. Buku ini tidak menjadikan versi Pi tertentu sebagai syarat permanen; kedua jalur pemasangan diverifikasi pada 2026-09-23, dan selanjutnya mengacu pada [Quickstart resmi Pi](https://pi.dev/docs/latest/quickstart).

![Ilustrasi: Si Hitam memeriksa tiga peti kayu dengan kaca pembesar, dengan label node --version, npm --version, dan pi --version](/images/01-pi-cek-versi.webp)

Pemeriksaan ini mengacu pada lingkungan pengajaran tanggal 2026-09-09. Nomor versi Anda boleh lebih baru, dan cara menilainya tetap sama: ketiga pemeriksaan punya keluaran, dan kursor terminal muncul kembali setelah perintah selesai dijalankan. Hasil ini hanya membuktikan lingkungan saat ini sudah terpasang, dan bukan bukti proses pemasangan pertama.

### Pemeriksaan kecil

- [ ] Perintah pemasangan sudah berhenti, terminal tidak menampilkan kegagalan atau `npm ERR!`.
- [ ] Perintah `pi --version` menampilkan nomor versi.
- [ ] Saya tidak memasukkan `sudo` untuk pemasangan, dan tidak memasukkan kata sandi akun komputer untuk mengakali galat.
- [ ] Saya ingat apakah saya memakai installer resmi atau npm, sehingga saat menghapus nanti sumbernya tidak tertukar.

## 2. Peluncuran pertama

Pastikan Anda masih berada di direktori latihan, lalu jalankan Pi.

```bash
cd ~/Downloads/pi-practice
pwd
pi
```

Ketiga baris ini dijalankan berurutan. Keluaran `pwd` harus berakhir dengan `/Downloads/pi-practice`; jika pada pelajaran sebelumnya Anda memakai `pi-practice-2`, nama direktori di perintah ini juga harus diganti dengan nama Anda sendiri. Setelah path-nya dipastikan, barulah ketik baris terakhir `pi`.

Saat pertama kali dibuka, Pi mungkin perlu waktu sebentar untuk memuat. Setelah selesai, Anda akan melihat area editor untuk mengetik pesan, dan status bar di bagian bawah menampilkan direktori saat ini serta model. Kini Anda sudah masuk ke antarmuka interaktif Pi dari terminal biasa; jangan mengetik teks status bar di antarmuka Pi sebagai perintah terminal.

Jika Pi meminta login, itu tidak berarti pemasangannya gagal. Autentikasi ditangani pada pelajaran berikutnya.

Jika direktori yang ditampilkan di bagian bawah bukan direktori latihan yang tadi terlihat dari `pwd`, jangan kirim tugas apa pun: ketik `/quit` di Pi, lalu setelah kembali ke terminal jalankan ulang tiga baris perintah di bagian ini.

### Pemeriksaan kecil

- [ ] `pwd` sebelum peluncuran menunjukkan direktori latihan.
- [ ] Antarmuka Pi sudah menampilkan area input dan status bar di bagian bawah.
- [ ] Saya belum meminta Pi membaca, membuat, atau mengubah file, atau menjalankan perintah.

## 3. Belajar kembali ke terminal

Sekarang perhatikan: `/quit` di bawah adalah perintah **di dalam antarmuka Pi**, bukan yang diketik di terminal biasa. Klik dulu area input Pi, ketik perintah itu, lalu tekan Enter.

```text
/quit
```

Setelah Pi tertutup, Anda akan kembali ke prompt terminal semula. Sekarang ketik `pi` sekali lagi dan tekan Enter; jika antarmuka Pi bisa muncul lagi, berarti Anda sudah bisa membedakan dua keadaan, yaitu "perintah terminal" dan "perintah di dalam Pi". Setelah pembukaan kedua, Anda bisa mengetik `/quit` lagi untuk bersiap ke pelajaran berikutnya.

::: warning Saat menemui kegagalan umum
- Jika pemeriksaan lingkungan installer resmi gagal, simpan dulu petunjuk Node.js, npm, dan PATH yang ditampilkannya; jangan langsung beralih memakai npm dan berulang kali menimpa pemasangan.
- Jika jalur npm memunculkan `npm ERR!` atau `EACCES`, jangan langsung menambahkan `sudo`. Tunggu perintah selesai; lalu seret dan pilih dari "perintah pemasangan" hingga baris galat terakhir, tekan `Command + C` untuk menyimpan teks lengkapnya, lalu pastikan Node.js berasal dari instalasi LTS resmi.
- Jika setelah pemasangan berhasil masih muncul `pi: command not found`, keluar sepenuhnya dari terminal dan buka lagi, lalu jalankan `pi --version`. Jangan mengubah PATH sendiri.
- Jika pengunduhan jaringan gagal, pastikan jaringan lalu coba sekali lagi dengan jalur resmi yang sama seperti tadi; jangan mencampur installer dan beberapa manajer paket.
- Jika di tengah pemasangan tiba-tiba muncul permintaan kata sandi, jangan memasukkannya demi melanjutkan. Tekan `Control + C` untuk berhenti, simpan teks di layar, lalu periksa apakah Anda tidak sengaja menambahkan perintah lain.
:::

## Verifikasi pelajaran ini

- `pi --version` bisa mengembalikan nomor versi.
- Saya bisa menjalankan Pi dari direktori latihan yang saya buat sendiri.
- Saya bisa keluar dengan `/quit`, lalu menjalankannya lagi.
- Saya tahu: kursor terminal kembali barulah berarti perintah sudah selesai; galat yang belum dipahami disimpan utuh dulu, bukan ditangani dengan `sudo` atau perintah acak.

[Pelajaran berikutnya, login akun dan pilih model →](/guide/connect-model)

Sudah selesai memasang dan sekarang perlu memutakhirkan atau menghapus? Lihat [Manajemen siklus hidup setelah instalasi](/guide/lifecycle-management).
