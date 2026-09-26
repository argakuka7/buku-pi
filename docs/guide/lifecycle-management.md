---
title: 'Setelah instalasi: pembaruan, logout, dan uninstalasi'
description: Kelola versi, autentikasi, Package, dan data lokal Pi dengan aman; pahami perbedaan pembaruan, logout, uninstalasi, dan pembersihan menyeluruh.
prev:
  text: Masuk ke direktori latihan dan pastikan pengaturan dasar
  link: /guide/ready-to-work
next:
  text: Tugas pertama, pelajari dulu cara verifikasinya
  link: /guide/first-task
---

<span class="library-status">MAINTENANCE PATH · Siklus hidup setelah instalasi</span>

# Setelah instalasi: pembaruan, logout, dan uninstalasi

Pi sudah bisa digunakan dengan normal, tetapi cepat atau lambat Anda akan menghadapi pertanyaan-pertanyaan ini: saat muncul pemberitahuan versi baru, apakah harus memperbarui? Kalau berganti akun model, apakah harus memasang ulang? Setelah uninstalasi, apakah sesi lama dan API Key masih ada?

Itu semua bukan tindakan yang sama. Pembaruan mengubah versi program; logout menangani autentikasi yang disimpan Pi; uninstalasi hanya menghapus perintah `pi`; sesi lokal, pengaturan, dan Package Anda putuskan sendiri apakah akan dipertahankan.

Sebelum memperbarui, Anda bisa membuka [Catatan pembaruan versi Pi](/releases/) dan memasukkan versi saat ini atau versi tujuan untuk memeriksa fitur baru, Breaking Changes, catatan migrasi, dan masalah yang sudah diperbaiki. Arsip versi berguna untuk memahami perbedaan, tetapi pembaruan sebenarnya tetap mengikuti titik pemulihan dan langkah verifikasi di halaman ini.

::: danger Satu hal yang paling mudah disalahpahami, ingat dulu
Menurut penjelasan resmi Pi saat ini, menguninstal Pi **tidak** otomatis menghapus `~/.pi/agent/`. Direktori ini bisa berisi informasi autentikasi, sesi, pengaturan, dan Package yang sudah terpasang. Melihat `pi: command not found` bukan bukti bahwa kredensial dan riwayat sudah hilang dari komputer.
:::

Halaman ini sekaligus mencakup installer resmi yang saat ini dipakai Buku Pi dan jalur npm. Untuk memperbarui Pi itu sendiri, Anda selalu bisa memakai `pi update`; saat menguninstal, Anda harus kembali ke cara pemasangan awal Anda. Pengguna Windows, ketika melihat “terminal biasa”, tetap harus membuka Git Bash.

## Tentukan dulu apa yang ingin Anda selesaikan

| Tujuan Anda | Tindakan yang harus dilakukan | Hal yang tidak terjadi otomatis |
| --- | --- | --- |
| Menggunakan Pi versi baru | `pi update` | Tidak sekaligus memperbarui semua Package |
| Hanya menyegarkan katalog model | `pi update --models` | Tidak meningkatkan Pi itu sendiri |
| Memperbarui Package yang sudah terpasang | Jalankan `pi list`, tinjau, lalu `pi update --extensions` | Bukan berarti Pi itu sendiri sudah diperbarui |
| Mengganti akun atau menghapus kredensial yang disimpan Pi | Pakai `/logout` di dalam Pi | Tidak menguninstal program atau menghapus sesi |
| Sementara tidak memakai Pi, tetapi ingin menyimpan riwayat | Uninstal Pi dengan cara pemasangan awal, pertahankan `~/.pi/agent/` | Tidak otomatis membersihkan data lokal |
| Tidak lagi menyimpan data Pi di komputer ini | Logout dan inventarisasi dulu, baru tangani direktori data secara terpisah | Tidak bisa hanya mengandalkan perintah uninstalasi |

Jika tidak yakin, berhentilah dulu di tahap “periksa versi dan inventarisasi”. Perintah pemeriksaan tidak akan mengubah pengaturan Anda.

## 1. Tinggalkan titik pemulihan sebelum memperbarui

Jangan memperbarui saat Pi sedang mengubah file, menjalankan build, atau menunggu balasan model. Selesaikan dulu tugas yang sedang berjalan, ketik `/quit` di area editor Pi, lalu kembali ke terminal biasa.

Jika direktori saat ini adalah repositori Git, konfirmasi dulu dengan alur normal Anda bahwa perubahan penting sudah di-commit atau punya cadangan lain. Perintah pembaruan Pi hanya mengurus Pi, tidak membuat titik pemulihan untuk proyek Anda.

Catat versi saat ini dan Package yang sudah terpasang:

```bash
pi --version
pi list
```

Catat nomor versinya di catatan sementara. `pi list` menampilkan Package yang terdaftar di pengaturan pengguna dan pengaturan proyek saat ini; Package tersebut bisa berisi Extension yang dapat menjalankan kode, jadi jangan memperbarui semuanya tanpa pemeriksaan.

Lalu konfirmasi apakah direktori data lokal Pi ada, tetapi jangan mencetak isi autentikasi di dalamnya:

```bash
test -d ~/.pi/agent && echo "FOUND: direktori data lokal Pi ada"
ls -la ~/.pi/agent
```

`ls` hanya untuk mengonfirmasi nama file dan direktori. Jangan menjalankan `cat ~/.pi/agent/auth.json`, dan jangan memasukkan isi `auth.json` ke tangkapan layar, obrolan, tiket, atau repositori Git.

### Verifikasi sebelum pembaruan

- [ ] Tugas Pi saat ini sudah selesai, saya sudah kembali ke terminal biasa.
- [ ] Perubahan penting di proyek sudah punya titik pemulihan.
- [ ] Saya mencatat `pi --version` sebelum pembaruan.
- [ ] Saya sudah melihat `pi list` dan tidak menganggap Package asing sebagai Pi itu sendiri.

## 2. Hanya memperbarui Pi itu sendiri

Pembaruan biasa menggunakan:

```bash
pi update
```

Menurut penjelasan resmi saat ini, `pi update` secara default hanya memperbarui Pi itu sendiri, sama tujuannya dengan `pi update --self`. Perintah ini tidak otomatis meningkatkan semua Package yang sudah terpasang.

Setelah perintah selesai dan baris input muncul kembali di terminal biasa, periksa:

```bash
pi --version
```

Nomor versi baru bisa berubah, bisa juga tetap karena sudah versi terbaru. Jangan menilai keberhasilan hanya dari “banyak teks unduhan muncul”; yang menentukan adalah perintah pembaruan tidak menghasilkan error dan `pi --version` masih bisa dijalankan.

Lalu jalankan Pi dari direktori latihan terpisah dan lakukan satu tes konektivitas minimal:

```bash
cd ~/Downloads/pi-practice
pi
```

Windows Git Bash mengganti direktorinya menjadi `~/pi-practice`. Setelah masuk ke Pi, kirim:

```text
Cukup balas “Koneksi normal setelah pembaruan”. Jangan membaca, membuat, atau mengubah file, dan jangan menjalankan perintah.
```

Jika menerima balasan yang tepat, berarti autentikasi dan pemanggilan model saat ini juga berfungsi. Jika tes gagal, simpan dulu error lengkap serta nomor versi sebelum dan sesudah pembaruan; jangan langsung memasang ulang, mengosongkan pengaturan, dan mengganti Provider; periksa satu variabel dalam satu waktu.

::: warning `--force` bukan tombol pembaruan harian
`pi update --self --force` tetap akan mencoba memasang ulang saat sudah versi terbaru. Ini cocok untuk skenario perbaikan yang jelas, bukan langkah wajib pembaruan biasa. Pi juga menjelaskan bahwa mode pengelolaan installer eksperimental tidak mendukung `--force`; pemasangan seperti itu harus diperbaiki dengan menjalankan kembali installer yang sesuai.
:::

## 3. Bedakan pembaruan Pi, katalog model, dan Package

Pi saat ini menyediakan beberapa cakupan berikut:

| Perintah | Cakupan sebenarnya | Kapan dipakai |
| --- | --- | --- |
| `pi update` | Hanya memperbarui Pi | Peningkatan rutin Pi itu sendiri |
| `pi update --self` | Hanya memperbarui Pi | Saat perlu menuliskan cakupan secara eksplisit |
| `pi update --models` | Hanya menyegarkan katalog model | Saat Provider sudah mendukung model baru, tetapi pemilih lokal belum menampilkannya |
| `pi update --extensions` | Memperbarui Package yang sudah terpasang dan memeriksa referensi Git yang dipatok | Saat sumber dan perubahan Package sudah dikonfirmasi satu per satu |
| `pi update --all` | Memperbarui Pi dan Package | Saat `pi list` sudah dilihat dan siap memverifikasi semuanya sekaligus |

Package bisa berisi Extension, Skill, Prompt Template, dan tema. Extension di dalamnya dapat menjalankan kode dengan izin pengguna saat ini, dan Skill juga bisa mengarahkan model untuk melakukan tindakan. Sebelum memperbarui Package pihak ketiga, konfirmasikan dulu sumbernya, versi saat ini, isi pembaruan, dan cara mengembalikannya.

Urutan default untuk pemula sebaiknya:

1. Jalankan dulu `pi update` dan verifikasi Pi itu sendiri.
2. Saat membutuhkan katalog model baru, jalankan `pi update --models` secara terpisah.
3. Hanya saat memang perlu, lihat `pi list` lalu tangani Package satu per satu.
4. Jangan menjadikan `pi update --all` sebagai reaksi pertama saat melihat pemberitahuan pembaruan.

## 4. Mengganti akun atau logout

Jika hanya ingin mengganti akun model, Anda tidak perlu menguninstal Pi. Masuk ke Pi, lalu ketik di area editor bagian bawah:

```text
/logout
```

Pilih Provider yang kredensialnya ingin dihapus sesuai antarmuka. Setelah selesai, Anda bisa login ke akun lain dengan `/login`, lalu pilih model yang tersedia dengan `/model`.

Pi menjelaskan bahwa token atau API Key yang disimpan lewat `/login` berada di `~/.pi/agent/auth.json`, dan `/logout` dipakai untuk menghapus kredensial. Jangan langsung membuka file ini untuk menyalin atau mengubah sebagian JSON secara manual; format yang rusak karena pengeditan manual akan ikut memengaruhi Provider lain.

::: warning Variabel lingkungan adalah sumber kredensial lainnya
Jika Anda pernah menetapkan API Key di konfigurasi Shell, lingkungan sistem, atau skrip startup, `/logout` tidak akan mengubah konfigurasi eksternal tersebut. Urutan resolusi kredensial Pi saat ini mencakup argumen command line, `auth.json`, variabel lingkungan, dan konfigurasi Provider kustom. Setelah logout masih bisa memanggil suatu Provider belum tentu berarti `/logout` gagal; bisa jadi lingkungan eksternal masih menyediakan kredensial.

Jangan memeriksa dengan perintah semacam `echo $OPENAI_API_KEY`, karena itu akan mencetak kunci asli di layar dan log. Periksa hanya nama variabel dan dari lokasi konfigurasi mana asalnya; jika perlu dicabut, cabut Key lama di backend penyedia layanan terkait.
:::

Jika komputer hilang, akun bermasalah, atau kunci mungkin bocor, menghapus file lokal saja tidak cukup. Anda harus mencabut token atau API Key di backend penyedia layanan, lalu membuat kredensial baru.

### Verifikasi logout

- `/logout` sudah dilakukan untuk Provider yang benar.
- Saya tidak mencetak `auth.json` atau isi kunci.
- Jika mengganti akun, setelah `/login` ulang sudah diverifikasi dengan satu balasan nyata.
- Jika kredensial lama mungkin bocor, saya sudah mencabutnya di backend penyedia layanan, bukan hanya membersihkan file lokal.

## 5. Uninstal Pi sesuai cara pemasangan awal, tetapi pertahankan pengaturan dan sesi

Keluar dari Pi dulu dengan `/quit`, lalu kembali ke terminal biasa. Pilih satu jalur uninstalasi berdasarkan catatan saat pemasangan; jika tidak yakin, jangan menjalankan kedua perintah sekaligus.

Jika memasang melalui installer resmi, jalankan kembali pintu masuk resmi yang sama dan pilih uninstalasi di menu:

```bash
curl -fsSL https://pi.dev/install.sh | sh
```

Sebelum eksekusi, konfirmasi sekali lagi bahwa domainnya `pi.dev`. Installer akan memeriksa pemasangan saat ini dan menyediakan tindakan yang sesuai; baca menunya lalu pilih hanya uninstalasi.

Jika memasang secara global melalui npm, uninstal dengan manajer paket yang sama:

```bash
npm uninstall -g @earendil-works/pi-coding-agent
```

Setelah perintah selesai, periksa apakah `pi` masih bisa ditemukan:

```bash
if command -v pi >/dev/null 2>&1; then
  echo "CHECK: pi masih ditemukan, konfirmasi cara pemasangan"
else
  echo "PASS: perintah pi sudah dihapus"
fi
```

Jika `pi` masih ditemukan, jangan lanjut menghapus direktori. Jalankan dulu `command -v pi` untuk memastikan apakah berasal dari versi Node.js lain, manajer paket lain, atau lokasi pemasangan lama.

Setelah uninstalasi melalui jalur mana pun, `~/.pi/agent/` secara default tetap dipertahankan. Saat memasang ulang nanti, pengaturan dan sesi lama biasanya masih bisa dipakai; setelah pemasangan ulang tetap jalankan `pi --version`, dan gunakan `/resume` untuk benar-benar memastikan sesi yang dibutuhkan ada.

Jika Pi dipasang melalui pnpm, Yarn, atau Bun, hapus dengan manajer paket yang sama. Jangan menjalankan keempat perintah sekaligus hanya demi “uninstalasi yang bersih”.

## 6. Tentukan sejauh mana data lokal disimpan

Setelah menguninstal program, putuskan hal-hal berikut secara terpisah:

| Lokasi | Kemungkinan isinya | Keputusan umum |
| --- | --- | --- |
| `~/.pi/agent/auth.json` | Token OAuth atau API Key | Tangani dulu dengan `/logout`; jangan masukkan ke paket cadangan biasa |
| `~/.pi/agent/sessions/` | Sesi yang disimpan per direktori kerja | Pertahankan bila perlu melanjutkan atau mengarsipkan |
| `~/.pi/agent/settings.json` | Pengaturan pengguna seperti model default, tema, Package | Biasanya dipertahankan saat bersiap memasang ulang |
| `~/.pi/agent/npm/`, `git/` | File Pi Package tingkat pengguna | Baru tangani saat Package terkait tidak dipakai lagi |
| `~/.pi/agent/models-store.json` | Cache katalog model | Bisa disegarkan ulang, tidak sama dengan kredensial autentikasi |
| `.pi/` di dalam proyek | Pengaturan proyek, sumber daya, atau Package lokal | Termasuk lingkup proyek, tidak otomatis hilang karena uninstalasi global |

Untuk pembersihan pertama, halaman ini tidak menyediakan satu perintah `rm -rf ~/.pi/agent` untuk menghapus seluruh direktori. Urutan yang lebih aman adalah:

1. Lakukan `/logout` satu per satu di Pi, pastikan autentikasi yang disimpan lokal tidak dibutuhkan lagi.
2. Inventarisasi nama dengan `pi list` dan `ls -la ~/.pi/agent`, tanpa membaca isi kredensial.
3. Cadangkan secara terpisah `sessions/` dan catatan pengaturan yang memang dibutuhkan; jangan masukkan `auth.json` ke arsip tanpa enkripsi, berbagi cloud, atau Git.
4. Gunakan tempat sampah atau Recycle Bin sistem operasi untuk data Pi yang tidak dibutuhkan lagi, agar masih ada kesempatan memulihkan jika salah hapus.
5. Terakhir, periksa `.pi/` di direktori proyek; direktori global dan sumber daya proyek adalah dua lingkup yang berbeda.

Jika tujuan Anda hanya “kembali ke keadaan yang mendekati instalasi baru”, ganti dulu nama direktori lama dan konfirmasi lingkungan baru berfungsi, alih-alih langsung menghapus permanen. Tindakan ini akan membuat Pi sementara tidak melihat pengaturan, autentikasi, dan sesi lama; lakukan hanya jika Anda sudah selesai menginventarisasi dan mencadangkan.

## 7. Selesaikan verifikasi siklus hidup secara lengkap

Periksa satu per satu sesuai tindakan yang benar-benar Anda lakukan; Anda tidak perlu benar-benar menguninstal Pi yang sedang dipakai hanya untuk menyelesaikan pelajaran ini.

- **Hanya memperbarui:** Versi sebelum dan sesudah pembaruan tercatat, `pi --version` bisa dipakai, dan menerima satu balasan nyata minimal.
- **Memperbarui Package:** Periksa `pi list` dulu, lalu verifikasi ulang Extension, Skill, atau tema terkait setelah pembaruan, bukan hanya melihat perintah berhasil.
- **Logout:** Provider yang benar sudah logout, kunci tidak tercetak; setelah ganti akun, pemanggilan nyata sudah dilakukan.
- **Hanya menguninstal program:** `command -v pi` tidak lagi menemukan perintah, dan Anda tahu dengan pasti apakah `~/.pi/agent/` dipertahankan.
- **Bersiap membersihkan data:** Sudah membedakan autentikasi, sesi, pengaturan, Package, dan `.pi/` proyek; cadangkan atau pindahkan ke tempat sampah terlebih dahulu, jangan menjalankan perintah penghapusan seluruh direktori yang tidak transparan.

**Pembaruan, logout, uninstalasi, dan penghapusan data adalah empat keputusan yang independen. Setiap kali menyelesaikan satu tindakan, verifikasi dengan bukti yang sesuai.**

[Lanjut ke pelajaran 5, selesaikan tugas nyata pertama →](/guide/first-task)

### Dasar halaman ini

- [Pi Quickstart: pemasangan dan uninstalasi](https://pi.dev/docs/latest/quickstart)
- [Pi Packages: cakupan pembaruan dan pengelolaan Package](https://pi.dev/docs/latest/packages)
- [Pi Providers: login, logout, dan lokasi kredensial](https://pi.dev/docs/latest/providers)
- [Pi Sessions: lokasi penyimpanan sesi](https://pi.dev/docs/latest/sessions)
- [Pi Settings: pengaturan dan pemeriksaan pembaruan](https://pi.dev/docs/latest/settings)

Installer, cara uninstalasi npm, dan lokasi penyimpanan di halaman ini diverifikasi pada 2026-09-23. Saat digunakan, tetap berpedoman pada dokumentasi resmi terkini dan `pi --help` di komputer Anda.
