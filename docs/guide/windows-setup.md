---
title: 'Jalur Windows berbahasa Mandarin: pasang dan jalankan Pi'
description: Pilih dulu di antara Git Bash native, PowerShell, dan WSL, lalu pasang dan jalankan Pi mengikuti jalur pemula Git Bash.
prev:
  text: Alur utama Buku Pi
  link: /guide/
next:
  text: Login akun, agar Pi bisa menjawab Anda
  link: /guide/connect-model
---

<span class="library-status">WINDOWS PATH · Pemasangan dan pengoperasian pertama</span>

# Jalur Windows berbahasa Mandarin: pasang dan jalankan Pi

Anda membuka Buku Pi di komputer Windows, tetapi mendapati pelajaran 1 dan 2 berisi terminal Mac, pintasan `Command`, dan path `/Users/...`. Jangan mengubah perintah-perintah itu menjadi format Windows kata per kata, dan jangan mencampur Command Prompt, PowerShell, WSL, dan Git Bash sekaligus.

Jalur Mandarin ini menjelaskan dulu tiga lingkungan eksekusi di Windows, lalu mematok pemasangan pertama pada jalur Git Bash yang paling mudah direproduksi. Setelah lolos verifikasi halaman ini, langsung lanjut ke [Pelajaran 3: login dan pengaturan model](/guide/connect-model), lalu kembali ke alur utama bersama.

## Pilih dulu lingkungan eksekusi

Pi dapat berjalan native di Windows, dan juga dapat berjalan penuh di WSL. Yang benar-benar penting bukan “jalur mana yang paling hebat”, melainkan file proyek, Tool pengembangan, dan Shell harus berada dalam satu lingkungan yang bisa Anda jelaskan dengan jelas.

| Jalur | Di mana Pi dan proyek diletakkan | Cocok untuk | Penanganan di buku ini |
| --- | --- | --- | --- |
| Windows native + Git Bash | Pi, Node.js, dan proyek terutama berada di Windows; Tool perintah memakai Git Bash | Pemasangan pertama, file terutama di Windows, ingin langkah paling sedikit | **Jalur default halaman ini, menyediakan praktik lengkap dan verifikasi** |
| Windows native + Tool PowerShell | Pi tetap proses Windows, Tool default yang dihadapi model bisa diganti ke PowerShell | Pekerjaan bergantung pada modul PowerShell atau perintah native Windows | Konfigurasikan mengikuti dokumentasi resmi setelah jalur dasar selesai, bukan prasyarat pemasangan pertama |
| WSL penuh | Pi, Node.js, Git, dan proyek semuanya berada di distro Linux yang dipilih | Lingkungan pengembangan memang sudah di Linux/WSL, akrab dengan batas file dan jaringan WSL | Pasang mengikuti jalur Linux, jangan memasang Pi campur antara Windows dan WSL |

Jika ragu, pilih baris pertama. Jangan karena komputer sudah memasang WSL, lalu mencampur Node.js Windows, npm WSL, path Git Bash, dan perintah PowerShell dalam satu pemasangan yang sama. Pembaca yang sudah lama mengembangkan di WSL bisa langsung mengikuti jalur WSL pada [panduan Windows resmi Pi](https://pi.dev/docs/latest/windows), lalu memakai perintah Linux di pelajaran berikutnya dari buku ini.

::: info Jalur yang dipakai halaman ini
Saat berjalan native di Windows, Pi secara default memakai **Git Bash**. Pi mencari berurutan: path Bash kustom, lokasi pemasangan default Git for Windows `C:\Program Files\Git\bin\bash.exe`, dan terakhir `bash.exe` lain di PATH. Halaman ini ditujukan untuk pembaca yang pertama kali memasang, hanya memakai jalur default Git for Windows, dan tidak mengonfigurasi Cygwin, MSYS2, WSL, atau Tool PowerShell opsional.
:::

Pembaca Windows juga memulai dengan “empat persiapan”: komputer Windows yang ada, terminal Git Bash, Pi Agent, dan satu cara akses model yang tersedia. **Anda tidak perlu mengganti perangkat Mac atau Linux hanya untuk mempelajari Pi, dan tidak perlu memasang iTerm2**; iTerm2 adalah perangkat lunak macOS. Dua hal pertama dan pemasangan Pi diselesaikan di halaman ini, sedangkan langganan atau API Key dipilih di [pelajaran berikutnya](/guide/connect-model).

Jika [Windows Terminal](https://learn.microsoft.com/en-us/windows/terminal/install) sudah terpasang, ia bisa dipakai sebagai antarmuka jendela, tetapi konfigurasi defaultnya biasanya membuka PowerShell. Saat pertama kali mengikuti halaman ini, buka **Git Bash** langsung dari menu Start dan pastikan Anda menjalankan rangkaian perintah yang sama; jangan karena nama jendelanya Terminal, lalu menyalin langkah Git Bash di PowerShell.

## Bedakan dulu dua tempat input

Halaman ini akan memasukkan konten di dua tempat:

1. **Jendela Git Bash**: memasukkan perintah terminal biasa seperti `pwd`, `npm`, `pi`.
2. **Area editor bawah Pi**: memasukkan pesan setelah Pi terbuka, serta perintah internal Pi seperti `/quit`.

Menyalin kode dari halaman web tetap memakai `Ctrl+C`. Saat menempel ke Git Bash, Anda bisa menekan `Shift+Insert`, atau klik kanan di jendela lalu pilih paste. Setelah menempel, periksa dulu seluruh baris, baru tekan `Enter`; jangan memasukkan bersama contoh output di luar kotak kode.

Jika salah ketik tetapi belum menekan `Enter`, tekan `Ctrl+C` untuk membatalkan input saat ini. Setelah perintah mulai berjalan, jangan menekan tombol berulang-ulang untuk mempercepatnya.

## 1. Pasang dan konfirmasi Git Bash

Unduh installer dari [situs resmi Git for Windows](https://git-scm.com/download/win). Saat pertama kali memakai, pertahankan lokasi pemasangan default; pelajaran ini tidak meminta Anda mengubah editor, emulator terminal, atau opsi lanjutan lainnya.

Setelah pemasangan selesai, tutup terminal lama. Cari dan buka **Git Bash** dari menu Start Windows. Jangan membuka “Command Prompt”, dan jangan memasukkan kode halaman ini ke PowerShell terlebih dahulu.

Jalankan baris per baris di Git Bash:

```bash
git --version
bash --version | sed -n '1p'
test -f "/c/Program Files/Git/bin/bash.exe" && echo "PASS: Pi dapat menemukan Git Bash default"
```

Jika lolos, Anda akan melihat versi Git, versi Bash, dan terakhir satu baris `PASS`. Angka versinya boleh berbeda.

Jika dua perintah pertama menampilkan nomor versi tetapi baris terakhir tidak menghasilkan output, berarti Git Bash mungkin terpasang di lokasi lain. Ini tidak berarti Git rusak, tetapi jalur default halaman ini belum lolos. Untuk pemasangan pertama, sebaiknya gunakan kembali lokasi default; pembaca yang sudah jelas memelihara lingkungan kustom baru merujuk ke [pengaturan Windows resmi Pi](https://pi.dev/docs/latest/windows) untuk mengonfigurasi `shellPath`.

### Pemeriksaan singkat

- [ ] Yang saya buka adalah Git Bash.
- [ ] `git --version` dan `bash --version` sama-sama menghasilkan output.
- [ ] Pemeriksaan path default menampilkan `PASS`.

## 2. Pasang dan periksa Node.js

Cara pemasangan Pi melalui npm membutuhkan Node.js dan npm. Unduh versi LTS terkini dari [halaman unduhan resmi Node.js](https://nodejs.org/en/download) dan selesaikan pemasangannya. Setelah pemasangan selesai, tutup semua jendela Git Bash, lalu buka Git Bash baru agar PATH baru berlaku.

Jalankan:

```bash
node --version
npm --version
```

Kedua perintah harus mengembalikan nomor versi, dan Node.js tidak boleh lebih rendah dari `22.19.0`. Persyaratan versi minimum diverifikasi pada 2026-09-23; jika berubah setelah rilis, ikuti [Quickstart resmi Pi](https://pi.dev/docs/latest/quickstart).

Jika muncul `command not found`, pastikan dulu installer Node.js sudah selesai, lalu tutup sepenuhnya dan buka kembali Git Bash. Jangan menyalin perintah pengubah PATH yang asing dari internet, dan jangan berpindah-pindah antara beberapa installer Node.js.

## 3. Buat direktori latihan khusus Windows

Path Windows sering ditulis `C:\Users\NamaPenggunaAnda\...`, dan Git Bash menampilkan lokasi yang sama sebagai `/c/Users/NamaPenggunaAnda/...`. Perintah di pelajaran berikutnya dari buku ini memakai `/`; ini penulisan normal Git Bash dan tidak perlu diubah menjadi backslash.

Buat direktori latihan kosong di Git Bash:

```bash
mkdir ~/pi-practice
cd ~/pi-practice
pwd
ls -A
```

`pwd` harus berakhir dengan `/pi-practice`; `ls -A` tidak menampilkan nama file, itulah tandanya direktori kosong. Direktori ini biasanya berkorespondensi dengan `C:\Users\NamaPenggunaAnda\pi-practice` di File Explorer.

Jika `mkdir` menampilkan `File exists`, jangan langsung memakai direktori yang mungkin masih berisi file lama. Gunakan nama baru dan ingat nama itu:

```bash
mkdir ~/pi-practice-2
cd ~/pi-practice-2
pwd
ls -A
```

::: warning Mengapa tidak langsung memakai seluruh direktori pengguna
Direktori latihan membuat cakupan tugas dan hasil lebih mudah diperiksa, tetapi ia bukan sandbox keamanan. Tool Pi tetap berjalan dengan izin pengguna Windows Anda. Jangan menjalankan Pi langsung di `~`, akar Desktop, seluruh direktori Downloads, atau di atas repositori yang berisi pekerjaan nyata.
:::

## 4. Pasang Pi dan pastikan perintahnya bisa dipakai

Masih di Git Bash, jalankan perintah pemasangan npm resmi:

```bash
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

Tunggu perintah selesai dan baris input muncul kembali, lalu jalankan:

```bash
pi --version
command -v pi
```

Perintah pertama harus menampilkan nomor versi Pi, perintah kedua harus menampilkan lokasi perintah `pi` yang sebenarnya ditemukan Git Bash. Perintah pemasangan diverifikasi pada 2026-09-23; setelahnya ikuti [Quickstart resmi Pi](https://pi.dev/docs/latest/quickstart).

Jika proses pemasangan memunculkan `npm ERR!`, `EPERM`, atau `Access is denied`:

- Jangan langsung beralih ke mode administrator dan memasang berulang kali.
- Tunggu perintah selesai, simpan teks lengkap dari perintah pemasangan hingga baris error terakhir.
- Tutup proses Pi atau Node.js lain yang mungkin sedang berjalan, buka kembali Git Bash, lalu coba sekali lagi hanya dengan perintah resmi yang sama.
- Jika masih gagal, catat `node --version`, `npm --version`, dan error lengkapnya; jangan menghapus direktori sistem yang tidak Anda kenali.

Jika pemasangan selesai tetapi `pi` menampilkan `command not found`, tutup sepenuhnya Git Bash lalu buka kembali, dan jalankan `pi --version`. Jika masih gagal, simpan `npm prefix -g` dan output error, lalu lakukan penelusuran yang terarah; jangan menambahkan PATH secara sembarangan.

## 5. Pengoperasian pertama dari direktori latihan

Konfirmasi posisi saat ini lalu jalankan Pi:

```bash
cd ~/pi-practice
pwd
pi
```

Jika Anda memakai `pi-practice-2`, ganti nama direktori di ketiga tempat dalam pelajaran ini dengan nama aktual Anda. Setelah Pi terbuka, direktori kerja yang ditampilkan di status bar bawah harus sama dengan hasil `pwd` tadi.

Pengoperasian pertama mungkin langsung memunculkan prompt login. Ini berarti Pi sudah berjalan; autentikasi ditunda ke pelajaran berikutnya. Sekarang masukkan di **area editor bawah Pi**:

```text
/quit
```

Setelah keluar, Anda harus kembali ke Git Bash. Jalankan `pi` sekali lagi untuk memastikan bisa terbuka kembali; setelah itu Anda bisa `/quit` lagi atau lanjut ke pelajaran berikutnya.

## 6. Cara mengikuti alur utama Buku Pi selanjutnya

Mulai pelajaran berikutnya, pengguna Windows tetap memakai Git Bash dan mengikuti rangkaian penggantian tetap ini:

| Penulisan di alur utama | Yang dipakai Windows Git Bash |
| --- | --- |
| `~/Downloads/pi-practice` | `~/pi-practice` |
| `/Users/NamaPenggunaAnda/...` | `/c/Users/NamaPenggunaAnda/...` |
| `shasum -a 256` | `sha256sum` |
| `Command+C` / `Command+V` | Menyalin di halaman web pakai `Ctrl+C`, menempel di Git Bash pakai `Shift+Insert` |

Perintah latihan berikutnya seperti `curl`, `sed`, `find`, dan `test` tetap dijalankan di Git Bash. Saat Buku Pi menulis “terminal biasa”, pengguna Windows harus memahaminya sebagai “Git Bash”.

Pi juga menyediakan Tool `powershell` opsional, tetapi itu bukan prasyarat jalur pemula buku ini. Meskipun Tool tersebut diaktifkan, `!` dan `!!` di area editor Pi tetap memakai Bash. Selesaikan dulu satu jalur, baru putuskan apakah menambahkan Shell kedua.

## Verifikasi halaman ini

- Saya sudah secara jelas memilih Windows native + Git Bash, bukan berpindah Shell sambil beroperasi.
- Pemeriksaan Git, Bash, dan path default pada Git Bash semuanya lolos.
- `node --version` tidak lebih rendah dari persyaratan halaman ini, dan `npm --version` menghasilkan output.
- Saya membuat `~/pi-practice` yang kosong dan bisa menyebutkan padanan path Windows-nya.
- `pi --version` menghasilkan output, dan `command -v pi` dapat menemukan perintahnya.
- Saya bisa membuka Pi dari direktori latihan, kembali ke Git Bash dengan `/quit`, lalu membukanya kembali.
- Saya tahu bagaimana path dan perintah fingerprint di pelajaran berikutnya harus diganti.

Setelah lolos, Anda tidak perlu lagi menyalin pelajaran 1 dan 2 untuk macOS; langsung lanjut ke login.

[Pelajaran berikutnya, login akun dan pilih model →](/guide/connect-model)

Sudah selesai memasang dan sekarang perlu meningkatkan atau menguninstal? Lihat [Pengelolaan siklus hidup setelah instalasi](/guide/lifecycle-management).

### Dasar halaman ini

- [Pengaturan Windows resmi Pi](https://pi.dev/docs/latest/windows)
- [Quickstart resmi Pi](https://pi.dev/docs/latest/quickstart)
- [Git for Windows](https://git-scm.com/download/win)
- [Halaman unduhan Node.js](https://nodejs.org/en/download)

Perintah pemasangan, persyaratan Node.js, dan tiga jalur eksekusi Windows diverifikasi pada 2026-09-23. Jika Pi, Node.js, atau Git for Windows diperbarui, utamakan memeriksa ulang halaman resmi di atas.
