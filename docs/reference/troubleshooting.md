---
title: Buku panduan penanganan masalah Pi
description: Mempersempit masalah Pi langkah demi langkah berdasarkan gejala seperti startup, model, Extension, Skill, Session, tidak merespons, Context, dan konflik plugin.
prev:
  text: Pertanyaan Umum Pi (FAQ)
  link: /reference/faq
next:
  text: Daftar Istilah Populer AI dan Agent
  link: /reference/glossary
---

<span class="library-status">TROUBLESHOOTING · Persempit cakupan berdasarkan gejala</span>

# Buku panduan penanganan masalah Pi

Ini bukan ensiklopedia kode galat, dan tidak dimulai dari kategori pengetahuan seperti “Session, Context, Extension”. Temukan dulu gejala yang Anda lihat di depan mata, lalu tangani dengan satu jalur yang sama: **pertahankan kondisi awal → periksa syarat minimal → buat baseline bersih → pulihkan satu variabel setiap kali → berhenti ketika kondisi henti tercapai.**

Konten yang menyangkut perintah dan perilaku saat ini diverifikasi pada **11 September 2026**, dengan versi Pi di mesin ini `0.80.10`. Jika output aktual tidak konsisten, utamakan `pi --help` di mesin Anda dan [dokumentasi resmi Pi terbaru](https://pi.dev/docs/latest).

::: warning Jangan lakukan ini lebih dulu
Jangan langsung memasang ulang, mengosongkan `~/.pi/agent/`, menghapus Session, menjalankan `pi update --all`, atau menonaktifkan sekaligus sekumpulan plugin yang Anda sendiri tidak ingat. Tindakan ini mengubah kondisi awal sehingga masalah asli jadi lebih sulit dilacak; direktori autentikasi juga bisa berisi sesi pribadi dan kredensial.
:::

## Tentukan dalam satu menit, masalahnya ada di lapisan mana

| Gejala yang terlihat | Masuk ke bagian |
| --- | --- |
| Terminal biasa menampilkan `command not found`, atau antarmuka Pi sama sekali tidak bisa dibuka | [Tidak bisa dijalankan](#cannot-start) |
| Pi bisa dibuka, tetapi daftar model kosong, model target tidak ada, atau permintaan melaporkan galat autentikasi | [Model tidak muncul](#model-missing) |
| Saat startup muncul galat `.ts`, import, registrasi tool atau command | [Extension gagal dimuat](#extension-failed) |
| Skill terlihat tetapi tidak dieksekusi, atau `/skill:name` tidak ada | [Skill tidak terpicu](#skill-not-triggered) |
| `pi -c` dan `pi -r` tidak menemukan tugas semula | [Session tidak ditemukan](#session-missing) |
| Antarmuka sudah terbuka, tetapi setelah dikirim lama tidak ada konten baru | [Tiba-tiba tidak merespons](#not-responding) |
| Context mendekati batas, pemadatan gagal, atau setelah pemadatan lupa persyaratan penting | [Context penuh](#context-full) |
| Normal saat diaktifkan sendiri-sendiri, tetapi muncul galat atau perilaku berubah saat diaktifkan bersamaan | [Plugin saling konflik](#resource-conflict) |
| Pi salah membaca direktori, mengubah di luar batas, atau “mengaku selesai” tetapi filenya tidak benar | [Hasil file dan tool tidak wajar](#wrong-files) |

### Membuat baseline minimal

Banyak masalah perlu dimulai dengan menjawab satu pertanyaan: **tanpa resource proyek maupun resource hasil penemuan otomatis, apakah Pi tetap bisa dijalankan dengan normal?**

Jalankan di terminal biasa:

```bash
pi --no-approve --no-extensions --no-skills --no-context-files \
  --no-prompt-templates --no-themes --verbose
```

Perintah ini hanya untuk penanganan masalah. Untuk sementara ia mengabaikan resource proyek, Extension, Skill, file konteks, template prompt, dan tema, tetapi ini bukan sandbox dan tidak akan memperbaiki apa pun.

- Baseline juga gagal: periksa dulu instalasi, Node, terminal, autentikasi, atau Provider.
- Baseline normal: masalah lebih mungkin berasal dari direktori proyek, Session, atau salah satu resource tambahan.
- Gagal baru muncul setelah memulihkan satu resource: cakupan sudah dipersempit ke resource itu atau kombinasinya dengan lingkungan saat ini.

## 1. Mengapa Pi tidak bisa dijalankan? {#cannot-start}

**Gejala yang Anda lihat**

- Terminal biasa menampilkan `pi: command not found`.
- `pi` mengeluarkan output, tetapi keluar sebelum masuk ke antarmuka interaktif.
- Antarmuka tersangkut di tahap startup, dengan galat berisi Node, modul, konfigurasi, atau path resource.

**Apa yang perlu diperiksa lebih dulu**

Bedakan dulu antara “sistem tidak menemukan command” dan “Pi sudah mulai tetapi gagal inisialisasi”. Jangan menganggap area editor Pi sebagai terminal biasa, dan jangan mengubah PATH sembarangan berdasarkan tutorial lama.

```bash
pwd
command -v node
node --version
command -v pi
pi --version
pi --help
```

Pengguna Windows menjalankan perintah ini di Git Bash yang disepakati dalam buku ini. Jika `command -v pi` tidak menghasilkan apa pun, masalahnya belum masuk ke dalam Pi; kembali ke [Memasang dan Menjalankan Pi](/guide/install-pi) untuk memeriksa cara instalasi dan persyaratan resmi saat ini.

**Cara mempersempit cakupan**

Jika `pi --version` normal tetapi antarmuka interaktif tidak bisa dibuka, jalankan dulu [baseline minimal](#membuat-baseline-minimal) di halaman ini. Jika masih tersangkut di tahap jaringan saat startup, coba sekali lagi:

```bash
pi --offline --no-approve --no-extensions --no-skills \
  --no-context-files --no-prompt-templates --no-themes --verbose
```

`--offline` hanya dipakai untuk menilai apakah operasi jaringan saat startup ikut berpengaruh. Bisa terbuka saat offline bukan berarti pemanggilan Provider pasti normal, dan jangan langsung menyimpulkan “jaringan adalah satu-satunya penyebab”.

**Kapan harus berhenti**

- Galat meminta eskalasi izin sistem, mengubah direktori sistem, atau menjalankan skrip instalasi yang tidak dikenal.
- Anda berencana menghapus seluruh direktori konfigurasi hanya untuk “mencoba-coba”.
- Asal Node atau Pi tidak bisa dipastikan, dan galat menyangkut executable yang digantikan.

Simpan versi, galat lengkap, jenis terminal, dan path dari `command -v`, baru kemudian minta bantuan.

## 2. Mengapa model tidak muncul? {#model-missing}

**Gejala yang Anda lihat**

- Daftar `/model` kosong, atau tidak ada model yang disebutkan dalam tutorial.
- Model bisa dipilih, tetapi setelah dikirim muncul pesan belum login, tanpa izin, kuota tidak cukup, atau model tidak tersedia.
- Provider sudah merilis model baru, tetapi belum muncul di direktori lokal.

**Apa yang perlu diperiksa lebih dulu**

Pisahkan dulu tiga hal: apakah model itu ada di direktori, apakah saat ini ada kredensial, dan apakah akun memang punya izin memanggil model tersebut. Memasang Pi saja tidak otomatis memberi Anda model atau kuota.

```bash
pi --list-models
pi --list-models kata-kunci
pi update --models
```

Dua perintah pertama hanya melihat direktori saat ini; perintah ketiga menyegarkan direktori model, bukan memperbarui Pi itu sendiri. Lalu jalankan Pi, di area editor gunakan `/login` untuk memeriksa Provider dan `/model` untuk memilih ulang.

**Cara mempersempit cakupan**

| Hasil yang umum | Arah yang lebih mungkin |
| --- | --- |
| `--list-models` sama sekali tidak memuat Provider target | Direktori model atau konfigurasi Provider kustom |
| Daftar memuat model, tetapi tidak tersedia di `/model` | Provider saat ini, filter cakupan, atau status autentikasi |
| Permintaan mengembalikan 401 / 403 | Kredensial, langganan, atau izin akun; utamakan galat asli dari Provider |
| Permintaan mengembalikan 429 | Kuota, batas laju, atau batas konkurensi; jangan langsung mengulang berkali-kali |
| Permintaan mengembalikan 404 / model not found | ID model, wilayah, Provider, atau direktori kedaluwarsa |
| Permintaan timeout atau 5xx | Jaringan, proxy, atau status layanan Provider |

Arti kode status bisa berbeda antar-Provider, tabel ini hanya untuk menunjukkan arah pencarian. Pastikan biaya sebelum menguji model berbayar; jangan menempelkan API Key ke dalam obrolan, tangkapan layar, file proyek, atau argumen perintah.

**Kapan harus berhenti**

- Halaman login, domain callback, atau asal Provider tidak tepercaya.
- Percobaan ulang terus menagih biaya, atau 429 belum pulih.
- Anda perlu menyalin `auth.json`, Token lengkap, atau API Key untuk melanjutkan permintaan bantuan.

## 3. Mengapa Extension gagal dimuat? {#extension-failed}

**Gejala yang Anda lihat**

- Informasi startup menunjukkan kegagalan memuat file `.ts` / `.js` tertentu.
- Command atau tool yang didaftarkan Extension tidak muncul.
- Setelah dimuat Pi bisa dijalankan, tetapi muncul galat saat memanggil tool kustom.

**Apa yang perlu diperiksa lebih dulu**

Simpan dulu **path file lengkap dan pengecualian pertama** dalam galat. Extension mengeksekusi kode di dalam proses Pi, masalahnya bisa berasal dari path penemuan, Project Trust, import, dependensi, versi, atau logika runtime.

```bash
pi --no-extensions --verbose
pi --no-extensions -e ./path/to/extension.ts --verbose
```

Perintah pertama memastikan “apakah Pi bisa dijalankan tanpa Extension”; perintah kedua mematikan penemuan otomatis lalu hanya memuat file target secara eksplisit.

**Cara mempersempit cakupan**

- Tanpa Extension normal, tetapi pemuatan eksplisit gagal: masalah sudah dipersempit ke file itu, dependensinya, atau kompatibilitas Pi saat ini.
- Pemuatan eksplisit normal, tetapi penemuan otomatis gagal: periksa lokasi penemuan global dan proyek, pengaturan, Package, dan Project Trust.
- Startup normal, hanya eksekusi tool yang gagal: simpan input dan galat Tool Call tersebut, masalahnya ada di jalur eksekusi, bukan “tidak dimuat”.
- Hanya gagal setelah `/reload`: jalankan ulang untuk melakukan cold load, lalu bedakan antara status reload dan file itu sendiri.

Gunakan `pi list` untuk melihat Package yang terdaftar, dan `pi config` untuk melihat Extension mana saja yang diaktifkan. Jangan menjalankan `pi update --all` lebih dulu hanya untuk penanganan masalah, memperbarui banyak Package sekaligus akan memasukkan lebih banyak variabel.

**Kapan harus berhenti**

- Asal Extension tidak jelas, atau ia meminta kredensial, izin sistem, penghapusan file, dan pengiriman ke luar.
- Galat mengarah ke pemasangan dependensi, tetapi Anda belum meninjau `package.json` dan skrip pemasangan.
- Masalah hilang setelah Extension dinonaktifkan, tetapi mengaktifkannya lagi berulang kali menghasilkan penulisan di luar batas atau perintah berbahaya.

## 4. Mengapa Skill tidak terpicu? {#skill-not-triggered}

**Gejala yang Anda lihat**

- Menurut Anda tugas seharusnya cocok dengan suatu Skill, tetapi Pi tidak membacanya.
- `/skill:name` tidak ada.
- Skill sudah dibaca, tetapi hasilnya tidak dijalankan sesuai petunjuk.

**Apa yang perlu diperiksa lebih dulu**

Bedakan dulu antara “tidak ditemukan”, “ditemukan tetapi tidak dipilih otomatis”, dan “sudah dimuat tetapi eksekusinya menyimpang”. Pastikan bahwa pintu masuk sebenarnya adalah `SKILL.md`, dengan frontmatter yang setidaknya memiliki `name` yang valid dan `description` yang tidak kosong.

```bash
test -f ./path/to/skill/SKILL.md
sed -n '1,40p' ./path/to/skill/SKILL.md
pi --no-skills --skill ./path/to/skill/SKILL.md --verbose
```

`--no-skills` mematikan penemuan otomatis, tetapi `--skill` eksplisit tetap memuat path yang ditentukan. Setelah masuk ke Pi, `/skill:name` bisa dipakai untuk memaksa pembacaan Skill tersebut; pencocokan otomatis tidak menjamin selalu terpicu.

**Cara mempersempit cakupan**

- `/skill:name` tidak ada: periksa path, frontmatter, aturan penamaan, dan peringatan saat startup.
- Command ada, tetapi tugas otomatis tidak terpicu: `description` mungkin tidak menggambarkan skenario penggunaan dengan akurat, atau model tidak memilih untuk membacanya; verifikasi dulu dengan command eksplisit, jangan langsung mengubah deskripsi menjadi “berlaku untuk semua tugas”.
- Skill sudah dibaca tetapi skripnya tidak ditemukan: periksa apakah path relatif mengacu ke direktori Skill sebagai basis, dan apakah file pendampingnya lengkap.
- Muncul peringatan nama yang sama: Pi akan mempertahankan Skill bernama sama yang ditemukan lebih dulu; pastikan dulu sumber yang benar-benar dimuat, baru tangani tabrakannya.

**Kapan harus berhenti**

- Skill mengarahkan untuk menjalankan skrip yang belum ditinjau, memasang dependensi, membaca kredensial, atau mengakses direktori di luar tugas.
- Anda hendak menulis deskripsi yang luas mencakup semua tugas demi menaikkan tingkat keterpicuan.
- Anda tidak bisa memastikan Skill bernama sama mana yang sedang dimuat.

## 5. Mengapa Session tidak ditemukan? {#session-missing}

**Gejala yang Anda lihat**

- `pi -c` tidak membuka tugas yang barusan Anda kerjakan.
- Nama sesi yang dikenal tidak ada di daftar `pi -r` atau `/resume`.
- Setelah proyek dipindahkan, diganti nama, atau berganti komputer, sesi lama tidak muncul lagi.

**Apa yang perlu diperiksa lebih dulu**

Session Pi secara default diatur berdasarkan direktori kerja. `pi -c` melanjutkan Session terbaru dari **proyek saat ini**, bukan obrolan terbaru secara global.

```bash
pwd
pi -r
```

Di pemilih, `Ctrl+P` menampilkan path dan `Ctrl+N` hanya menampilkan Session bernama. Setelah masuk ke sesi kandidat, gunakan `/session` untuk memeriksa file, ID, jumlah pesan, Token, dan biaya; jika ternyata salah pilih, keluar saja, jangan terus menulis.

**Cara mempersempit cakupan**

- Kembali ke direktori asal saat Session dibuat, lalu jalankan `pi -r`.
- Jika Anda tahu file atau ID Session, gunakan `pi --session <path atau ID>` untuk membukanya secara presisi.
- Jika saat itu Anda memakai `--no-session`, percakapan ini memang tidak akan tersimpan.
- Jika saat itu Anda memakai `--session-dir`, Anda harus kembali ke pengaturan direktori yang sama atau memberikan path Session yang spesifik.
- Saat repositori dipindahkan atau diganti nama, Session lama mungkin masih ada, hanya saja tidak otomatis terpetakan ke path baru.

**Kapan harus berhenti**

- Anda hendak langsung mengedit JSONL untuk “memperbaiki” pohon sesi.
- Sesi berisi prompt pribadi, kredensial, atau data klien, tetapi Anda hendak mengunggah seluruhnya ke publik.
- Path dan namanya belum dipastikan, tetapi Anda hendak menghapus banyak Session lama sekaligus di pemilih.

## 6. Mengapa tiba-tiba tidak merespons? {#not-responding}

**Gejala yang Anda lihat**

- Setelah dikirim, lama tidak ada teks, tetapi bilah status masih menunjukkan sedang bekerja.
- Tersangkut pada satu pemanggilan tool, permintaan jaringan, atau Compaction.
- Antarmuka masih bisa dioperasikan, hanya Session saat ini yang tidak lagi berjalan maju.

**Apa yang perlu diperiksa lebih dulu**

Tunggu dulu waktu wajar penyelesaian tool saat ini, baru tekan `Esc` sekali untuk menghentikan putaran ini. `Esc` bisa menghentikan pekerjaan yang belum selesai, tetapi tidak bisa membatalkan penulisan file, perintah, publikasi, atau pengiriman ke luar yang sudah terjadi.

Setelah berhenti, segera catat: model saat ini, Tool Call terakhir, galat terakhir yang terlihat, apakah sudah ada perubahan file, dan apakah permintaan ini mungkin menagih biaya.

**Cara mempersempit cakupan**

Jalankan uji minimal yang tidak menyimpan, tanpa tool, dan tanpa resource tambahan:

```bash
pi --no-session --no-tools --no-extensions --no-skills \
  --no-context-files --verbose
```

Kirim hanya satu kalimat pendek, jangan biarkan ia membaca file atau menjalankan perintah.

- Permintaan minimal juga tidak membalas: periksa dulu autentikasi, jaringan, proxy, status Provider, dan kuota.
- Permintaan minimal normal, tetapi Session lama tidak: periksa Context, riwayat Session, atau model tertentu.
- Normal tanpa tool, tetapi tersangkut begitu tool diaktifkan: lacak Tool Call terakhir dan proses eksternal.
- Normal tanpa Extension: lanjut ke [Penanganan Extension](#extension-failed) atau [Penanganan konflik](#resource-conflict).

**Kapan harus berhenti**

- Permintaan yang sama mungkin menagih biaya, tetapi Anda sudah mengulangnya terus-menerus.
- Tindakan terakhir menyangkut deployment, penghapusan, pembayaran, atau pengiriman ke luar, dan status hasilnya tidak diketahui.
- Command eksternal mungkin masih berjalan di latar belakang, sementara Anda hendak menjalankan ulang tugas yang sama.

Periksa dulu status sistem yang sebenarnya secara mandiri, jangan langsung menyamakan “antarmuka tidak membalas” dengan “tindakan tidak terjadi”.

## 7. Mengapa Context penuh? {#context-full}

**Gejala yang Anda lihat**

- Pemakaian Context di bilah status mendekati batas.
- Pi otomatis memulai Compaction, atau `/compact` gagal.
- Setelah pemadatan masih bisa lanjut, tetapi persyaratan awal, teks galat asli, atau status file terlewat.

**Apa yang perlu diperiksa lebih dulu**

Tuliskan dulu fakta yang tidak boleh hilang ke dalam checkpoint di proyek: tujuan, hal yang dilarang, yang sudah selesai, perubahan file yang sebenarnya, teks kegagalan asli, dan satu-satunya langkah berikutnya. Jangan biarkan status penting hanya tersimpan di obrolan yang akan dipadatkan.

Di Pi, gunakan `/session` untuk melihat informasi Session saat ini; saat perlu memadatkan, gunakan:

```text
/compact
```

Compaction memerlukan model untuk membuat ringkasan. Ia membangun ulang Context selanjutnya dari ringkasan dan pesan-pesan terbaru, tidak membatalkan perubahan di disk, dan tidak menjamin semua detail lama tersimpan kata per kata.

**Cara mempersempit cakupan**

- Beberapa tugas tidak berkaitan sudah tercampur sebelum pemadatan: buat Session bernama baru, baca ulang checkpoint, biasanya lebih jelas daripada terus memadatkan.
- Output satu tool sangat besar: lain kali bacalah potongan yang perlu saja, simpan log panjang ke file, dan ambil baris kuncinya.
- `/compact` sendiri gagal: simpan galatnya; periksa apakah model saat ini bisa dipakai dan apakah permintaan masih bisa memanggil Provider.
- Setelah pemadatan ada persyaratan yang terlewat: minta Pi membaca ulang kebutuhan awal dan checkpoint, lalu mengulanginya satu per satu; jangan menutupi masalah dengan penjelasan panjang yang baru.

**Kapan harus berhenti**

- Ringkasan sudah kehilangan batas keamanan atau larangan tindakan, sementara langkah berikutnya punya efek samping.
- Pemadatan berturut-turut tetap tidak sanggup menampung satu input atau hasil tool yang sangat besar.
- Anda tidak bisa menjelaskan mana sumber yang tepercaya: file di disk, riwayat Session, atau Context saat ini.

## 8. Mengapa plugin saling konflik? {#resource-conflict}

**Gejala yang Anda lihat**

- Dua Package normal saat diaktifkan sendiri-sendiri, tetapi gagal saat dijalankan bersamaan.
- Command, tool, atau Skill bernama sama mengarah ke sumber yang tak terduga.
- Setelah memuat plugin baru, System Prompt, model, pilihan tool, atau perilaku antarmuka berubah.

**Apa yang perlu diperiksa lebih dulu**

Jangan memperbarui semua plugin lebih dulu. Catat dulu kombinasi resource pada “terakhir kali normal”, lalu lihat isi yang terdaftar saat ini:

```bash
pi list
pi --no-approve --no-extensions --no-skills --no-context-files \
  --no-prompt-templates --no-themes --verbose
```

Jika baseline bersih normal, mulailah dari nol dan tambahkan satu resource secara eksplisit pada setiap langkah:

```bash
pi --no-extensions -e ./one-extension.ts --no-skills --verbose
pi --no-skills --skill ./one-skill/SKILL.md --no-extensions --verbose
```

**Cara mempersempit cakupan**

1. Tetapkan direktori, versi Pi, model, dan tugas uji yang sama.
2. Uji A dulu, lalu B, terakhir A+B.
3. Catat resource yang benar-benar dimuat pada setiap startup dan perbedaan perilaku pertama.
4. Hanya jika A dan B normal sendiri-sendiri tetapi A+B gagal, barulah ada bukti “konflik”.
5. Setelah sumbernya jelas, `pi config` bisa dipakai untuk menjeda salah satu resource di dalam Package; ubah satu sakelar saja dalam satu waktu.

Skill bernama sama bisa mengalami tabrakan urutan penemuan dan nama; Extension juga bisa mendaftarkan command, tool, atau event handler bernama sama. Jangan menebak kemampuan hanya dari nama Package, periksa apakah yang benar-benar dimuat itu Extension, Skill, template, atau tema.

**Kapan harus berhenti**

- Asal, versi, atau kode sebenarnya dari kedua resource tidak bisa dipastikan.
- Konflik menyangkut intersepsi command, kontrol izin, kredensial, deployment, atau perlindungan penghapusan.
- Anda perlu menghapus seluruh direktori Package, konfigurasi global, atau semua cache untuk terus mencoba-coba.

## 9. Mengapa salah membaca file, salah mengubah direktori, atau “selesai” tanpa hasil? {#wrong-files}

**Gejala yang Anda lihat**

- Pi menjawab suatu isi, tetapi file target tidak ada atau tidak berubah.
- Perubahan muncul di proyek lain yang namanya sama.
- Agent bilang pengujiannya lulus, tetapi ketika dijalankan ulang di terminal biasa malah gagal.
- Setelah `Esc` Anda mengira tindakan sudah dibatalkan, padahal filenya sudah berubah.

**Apa yang perlu diperiksa lebih dulu**

Kembali ke lingkungan nyata, jangan tanya ke Agent sendiri apakah sudah selesai:

```bash
pwd
git status --short
git diff --check
git diff
```

Jika bukan proyek Git, buka langsung file target dan periksa waktu modifikasi, isi, dan path output. Lalu tinjau kembali Tool Call yang benar-benar terjadi di Session, jangan hanya melihat ringkasan terakhir.

**Cara mempersempit cakupan**

- `pwd` tidak benar: hentikan Session saat ini, kembali ke direktori yang benar, lalu buat atau pulihkan tugas.
- Status memuat file di luar cakupan: simpan dulu perbedaannya, bedakan perubahan yang sudah ada dengan perubahan kali ini, jangan lakukan pemulihan massal.
- Agent melaporkan lulus tetapi tidak ada output perintah: jalankan sendiri pemeriksaan yang ditentukan proyek di terminal biasa.
- File lokal benar tetapi yang online tidak: lanjut periksa versi deployment, direktori build, cache, dan URL resmi; lulus di lokal bukan berarti lulus online.

**Kapan harus berhenti**

- Ditemukan bahwa file kredensial, direktori pengguna, atau repositori di luar tugas dibaca atau diubah.
- Status akhir publikasi, pembayaran, penghapusan, atau pengiriman pesan tidak bisa dipastikan.
- Demi pemulihan, Anda hendak memakai perintah destruktif yang menimpa seluruh repositori atau direktori pengguna.

## Menyiapkan paket bukti minimal sebelum minta bantuan

Jangan hanya mengirim “rusak” atau tangkapan layar yang justru memotong bagian galat. Salin templat di bawah, isi hanya bagian yang berkaitan dengan masalah:

```text
Gejala:
Hasil yang diharapkan:
Sistem operasi dan terminal:
Versi Pi (pi --version):
Versi Node (node --version):
Direktori saat ini (pwd, bagian path induk yang privat boleh disamarkan):
Perintah startup yang sebenarnya (hapus Key dan Token):
Galat lengkap pertama:
Apakah baseline minimal bisa dijalankan:
Hasil saat hanya mengaktifkan resource target:
Provider dan nama model (jangan berikan kredensial):
Nama atau ID Session (jangan unggah seluruh Session pribadi):
Perubahan file atau status eksternal yang sudah terjadi:
```

Paket bukti yang baik memungkinkan orang lain menilai apakah masalahnya termasuk instalasi, Provider, Session, Context, atau resource tambahan, sekaligus menghindarkan Anda dari mengulangi tindakan yang sudah gagal dan mungkin menimbulkan efek samping.

## Kondisi berhenti global

Jika salah satu situasi berikut muncul, hentikan percobaan ulang otomatis dan biarkan manusia yang memastikan lebih dulu:

- Kredensial, pembayaran, kuota, atau izin akun tidak jelas;
- Status akhir penghapusan, penimpaan, publikasi, atau pengiriman ke luar tidak diketahui;
- Asal Extension atau Skill tidak jelas, tetapi ia meminta menjalankan kode atau memasang dependensi;
- Path aktual keluar dari direktori tugas, atau muncul perubahan file yang tidak bisa dilacak asalnya;
- Permintaan yang sama terus menagih biaya, terus 429, atau layanan eksternal masih memproses;
- Solusi perbaikan menuntut pengosongan autentikasi, Session, seluruh direktori konfigurasi, atau seluruh repositori;
- Anda tidak punya cara untuk menyimpan galat saat ini, perbedaannya, dan titik pemulihannya.

## Rujukan dan bacaan lanjutan

- [Pi Using Pi: command, tool, dan parameter resource](https://pi.dev/docs/latest/usage)
- [Pi Providers: login, direktori, dan resolusi kredensial](https://pi.dev/docs/latest/providers)
- [Pi Sessions: lokasi penyimpanan, pemilih, dan pemulihan presisi](https://pi.dev/docs/latest/sessions)
- [Pi Compaction: pemicu, ringkasan, dan pembangunan ulang Context](https://pi.dev/docs/latest/compaction)
- [Pi Skills: penemuan, pemuatan eksplisit, dan validasi](https://pi.dev/docs/latest/skills)
- [Pi Extensions: lokasi penemuan, izin, dan penanganan galat](https://pi.dev/docs/latest/extensions)
- [Pi Packages: melihat, menyaring, dan menonaktifkan resource](https://pi.dev/docs/latest/packages)
- [Izin, isolasi, dan verifikasi](/guide/safety)
