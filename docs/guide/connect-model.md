---
title: Login akun, agar Pi bisa menjawab Anda
description: Selesaikan autentikasi pertama, pilih model yang tersedia, dan lakukan satu uji konektivitas tanpa operasi file.
prev:
  text: Memasang Pi dan Membukanya untuk Pertama Kali
  link: /guide/install-pi
next:
  text: Masuk ke direktori latihan dan pastikan pengaturan dasar
  link: /guide/ready-to-work
---

<span class="library-status">MODULE 01 · STEP 03</span>

# Login akun, agar Pi bisa menjawab Anda

Pi menyediakan antarmuka interaktif dan tool file, tetapi yang benar-benar menghasilkan balasan adalah layanan model yang Anda pilih. Jadi setelah memasang Pi, Anda masih perlu menghubungkan satu layanan yang sudah bisa Anda pakai.

Sebelum mulai, Anda perlu sudah memiliki salah satu kredensial yang bisa dipakai: login langganan yang saat ini didukung resmi, atau API Key yang sudah diaktifkan pada layanan model terkait. Akun produk chat saja, yang tidak memuat kuota pemakaian API, belum tentu bisa memanggil model di Pi. Login langganan mungkin membuka browser; jalur API Key biasanya ditagih oleh provider model sesuai pemakaian.

::: warning Pastikan biayanya dulu, baru login
**Langganan tidak sama dengan API, dan bisa login juga tidak berarti pemanggilannya gratis.** Autentikasi langganan, kuota paket, pemakaian tambahan, dan aturan saldo API berbeda untuk tiap Provider; pada sebagian jalur, meskipun diotorisasi dengan akun langganan, pemanggilan di Harness pihak ketiga tetap bisa masuk tagihan tersendiri. Jangan menyimpulkan biaya di Pi dari label "sudah berlangganan" di halaman produk chat.
:::

::: info Pengguna Windows
Jika Anda baru menyelesaikan [Jalur instalasi Windows berbahasa Mandarin](/guide/windows-setup), maka "terminal biasa" dalam pelajaran ini dan pelajaran berikutnya berarti Git Bash. Ganti `~/Downloads/pi-practice` di bawah dengan `~/pi-practice` yang sudah Anda buat; perintah seperti `/login` dan `/model` di area edit Pi tidak berubah.
:::

## Pilih dulu cara akses model: API resmi dan langganan

Harga dan cara akses berikut diverifikasi pada **14 September 2026**. Keempat pilihan ini cocok untuk kebutuhan yang berbeda; pilih satu yang bisa dipakai sampai latihannya berhasil. Daftar model, harga, kuota, dan promo bisa berubah, jadi buka lagi halaman resmi terkait untuk memeriksanya sebelum membayar.

**Catatan rekomendasi:** Ini pilihan pribadi saya berdasarkan biaya awal dan cara Pi terhubung, tanpa sponsor, komisi, atau hubungan kepentingan lain dengan penyedia layanan di bawah ini; semua tautan dalam tulisan ini mengarah ke halaman resmi dan tidak memuat tautan undangan saya.

### API resmi DeepSeek · bayar sesuai pemakaian

Cocok untuk pembaca yang ingin lebih dulu memakai satu model Tiongkok dan membayar sesuai pemakaian nyata. Buka API di [Platform resmi DeepSeek](https://platform.deepseek.com/), buat Key, dan pastikan saldonya; Pi sudah memiliki Provider `deepseek` bawaan, Anda bisa memilih DeepSeek di `/login` lalu memasukkan Key resmi, kemudian memakai `/model` untuk melihat model yang tersedia saat ini. [Petunjuk koneksi resmi Pi](https://pi.dev/docs/latest/providers) mencantumkan `DEEPSEEK_API_KEY`. Ini **bukan langganan bulanan**: pemanggilan ditagih berdasarkan token input dan output; apakah cache terkena, model yang dipakai, serta jam sibuk/sepi semuanya memengaruhi harga. [Daftar harga resmi DeepSeek](https://api-docs.deepseek.com/quick_start/pricing) akan diperbarui, jadi lihat saldo dan aturan penagihan saat ini sebelum pengujian pertama.

### ChatGPT Plus · $20/bulan

Cocok untuk pembaca yang terutama ingin memakai model Codex milik OpenAI sekaligus menggunakan ChatGPT. [Harga resmi OpenAI](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus) adalah $20/bulan. Pi mendukung pilihan **ChatGPT Plus/Pro (Codex)** di `/login`, tetapi model yang bisa dipilih bergantung pada akun saat ini dan daftar model Pi; tidak bisa ditulis bahwa "seluruh seri GPT bisa dipakai di Pi". Plus juga tidak mencakup pemakaian OpenAI API yang ditagih terpisah. [Lihat petunjuk koneksi Pi](https://pi.dev/docs/latest/providers)

### OpenCode Go · $10/bulan

Cocok untuk pembaca yang ingin memakai beragam model coding dengan biaya bulanan lebih rendah. [Penjelasan resmi Go](https://opencode.ai/docs/go/) mencantumkan $10/bulan; Pi sudah memiliki Provider `opencode-go` bawaan, dan login memakai API Key Go. Daftar saat ini mencakup GLM, Kimi, Qwen, DeepSeek, MiniMax, MiMo, juga GPT, Grok, dan lainnya, sehingga tidak bisa diringkas menjadi "semuanya model Tiongkok". Batas pemakaian bulanan tiap model berbeda; jendela 5 jam dan mingguan masing-masing maksimal memakai 20% dan 50% dari batas bulanan model tersebut. [Lihat petunjuk koneksi Pi](https://pi.dev/docs/latest/providers)

### Command Code GOAT · $10/bulan

Cocok untuk pembaca yang bersedia mengonfigurasi Provider kustom dan ingin berpindah-pindah di antara banyak model. [Penjelasan resmi GOAT](https://commandcode.ai/docs/plans/goat) mencantumkan $10/bulan; [Provider API](https://commandcode.ai/docs/provider) miliknya dapat memakai model dan kuota di dalam paket. Pi tidak punya item login GOAT bawaan, jadi Anda perlu menghubungkannya lewat [Petunjuk model kustom Pi](https://pi.dev/docs/latest/models) ke API yang kompatibel. Daftarnya sekaligus memuat model terbuka Tiongkok dan sebagian model GPT, Gemini, Grok, dan lainnya. Resminya mencantumkan jendela pemakaian 5 jam $14 dan mingguan $35; jumlah yang bisa dipakai setiap bulan tetap bergantung pada model yang dipilih.

**Cara memilih:** Jika ingin memakai model Tiongkok dan hanya membayar sesuai pemakaian nyata, lihat API resmi DeepSeek lebih dulu; jika ingin memakai model Codex OpenAI sekaligus menggunakan ChatGPT, lihat ChatGPT Plus lebih dulu; jika ingin mencoba beragam model coding dengan biaya bulanan lebih rendah, baru pertimbangkan OpenCode Go; jika bersedia mengonfigurasi antarmuka sendiri dan juga membutuhkan daftar model GOAT, barulah pertimbangkan Command Code GOAT. "Bisa dipakai secara intensif" hanya berarti sebagian paket punya ruang pemakaian tertentu, **bukan berarti pemanggilan tanpa batas**; untuk API yang dibayar sesuai pemakaian, Anda sendiri harus memperhatikan saldo dan pengeluarannya. Pada percobaan pertama, tetap periksa kuota di akun dan apakah pembayaran tambahan diaktifkan.

Promo OpenCode Go "undang orang lain dapat $5" saat ini tidak ditemukan ketentuan kampanyenya yang tetap di [Penjelasan resmi Go](https://opencode.ai/docs/go/) yang mereka buka untuk publik, sehingga tidak dihitung dalam harga atau kuota di atas. Jika akun Anda menampilkan kampanye undangan, ikuti jenis imbalan, syarat klaim, dan masa berlaku yang terdaftar di dasbor saat itu; memakai imbalan kuota tidak sama dengan potongan biaya bulanan.

## 1. Pilih satu cara login

Tentukan dulu jalur Anda dengan tabel di bawah ini. Jangan karena suatu model di daftar terlihat lebih kuat, Anda lalu buru-buru mengaktifkan layanan berbayar yang belum Anda pahami.

| Cara akses yang sudah Anda miliki | Pintu masuk di Pi | Yang wajib dipastikan sebelum mulai |
| --- | --- | --- |
| Langganan yang saat ini terdaftar sebagai didukung oleh Pi resmi | Login langganan/OAuth Provider terkait | Apakah tingkat langganannya memenuhi syarat; apakah pemanggilan di Pi memakai kuota paket, pemakaian tambahan, atau saldo lain |
| Sudah berlangganan dan memperoleh API Key, atau sudah punya saldo API; Provider itu sudah bawaan di Pi | Pilih API Key Provider terkait di `/login` | Key ini milik akun mana; cara penagihan, saldo, atau batasnya; bagaimana cara mencabut Key |
| Paket menyediakan API yang kompatibel, tetapi Pi tidak memiliki Provider itu sebagai bawaan (misalnya GOAT) | Lihat dulu [Petunjuk model kustom Pi](https://pi.dev/docs/latest/models); menu login pelajaran ini tidak punya pintu masuk siap pakai | Apakah paket membuka API, bagaimana mengonfigurasi Key, apakah modelnya termasuk dalam paket, dan batas pemakaiannya |
| Hanya punya akun produk chat biasa | Jangan lanjut dulu | Apakah akun itu benar-benar memuat cara akses model yang didukung Pi |
| Tidak punya keduanya atau tidak bisa memastikan | Jangan lanjut dulu | Baca dulu penjelasan Provider saat ini, jangan mengisi saldo secara buta demi menyelesaikan tutorial |

Sebelum terhubung, selesaikan dulu tiga pemeriksaan:

1. Nyatakan dengan jelas apakah Anda memakai "autentikasi langganan" atau "API Key", jangan hanya berkata "saya punya akun".
2. Pastikan status penagihan atau kuota di akun penyedia layanan terkait; harga di atas hanyalah referensi pilihan yang mencantumkan tanggal verifikasi, bukan pengganti halaman pembayaran dan saldo akun.
3. Tetapkan syarat berhenti pelajaran ini sebagai satu uji konektivitas tanpa file. Sebelum biaya dipastikan, jangan memulai tugas panjang, dan jangan berturut-turut mencoba beberapa model.

Jika setelah pelajaran sebelumnya Anda sudah keluar dari Pi, masuk lagi ke direktori latihan di terminal.

```bash
cd ~/Downloads/pi-practice
pwd
pi
```

Jika pada pelajaran 1 Anda memakai nama direktori latihan lain, ganti dulu `pi-practice` di perintah tersebut. Pastikan `pwd` berakhir dengan nama direktori latihan Anda yang sebenarnya. Pembaca yang memakai Provider bawaan Pi, setelah masuk ke Pi ketik:

```text
/login
```

Perintah `/login` ini diketik di **area edit di bagian bawah Pi**, bukan setelah kembali ke terminal biasa. Setelah diketik, tekan `Return`. Saat menu muncul, gunakan tombol panah atas dan bawah untuk berpindah item, tekan `Return` untuk memilih, dan tekan `Esc` untuk kembali ke lapisan sebelumnya atau membatalkan.

![Ilustrasi: Si Hitam berdiri di depan empat pintu sambil memegang kunci dan memilih satu, dengan label cara login, API resmi, dan langganan](/images/02-pi-cara-login.webp)

Tahap ini baru pintu masuk pemilihan; tidak ada akun atau kredensial yang dikirim. Anda bisa berpindah antara jalur login akun dan API Key. Key asli, kode verifikasi, dan informasi akun apa pun tidak boleh dipublikasikan atau dibagikan ke mana pun.

Ikuti petunjuk antarmuka untuk memilih satu jalur, dan selesaikan hanya yang tadi sudah Anda pastikan.

- Jika sudah punya langganan yang didukung, pilih layanan yang sesuai, lalu selesaikan login mengikuti alur otorisasi browser. Keberhasilan otorisasi browser hanya membuktikan kredensial sudah dikembalikan, bukan bahwa pemanggilan berikutnya tidak menimbulkan biaya.
- Jika sudah punya API Key, pilih layanan yang sesuai, dan masukkan hanya di antarmuka login lokal Pi. API Key adalah kredensial pemanggilan, bukan kuota gratis; biaya dan batas sesungguhnya ditentukan oleh akun pemilik Key tersebut.

Jika ada langkah yang meminta Anda menuliskan Key ke file proyek, area input chat, tangkapan layar, atau riwayat perintah terminal biasa, tekan `Esc` untuk membatalkan dan jangan menempelkannya. Pelajaran ini hanya menerima pintu autentikasi lokal Pi atau cara konfigurasi lingkungan yang dinyatakan resmi.

Sebagian cara login akan otomatis membuka browser. Setelah menyelesaikan konfirmasi di browser, kembalilah ke jendela terminal semula. Area input Pi muncul kembali di terminal, barulah berarti alur login sudah kembali. Jangan menutup seluruh terminal hanya karena browser menampilkan "berhasil".

Langganan, API Key, dan aturan provider yang saat ini didukung resmi bisa berubah, jadi jadikan [Pi Providers](https://pi.dev/docs/latest/providers) sebagai acuan, dan terus lihat penjelasan penagihan penyedia layanan yang Anda pilih. Keberadaan sebuah akun produk chat tidak berarti akun itu pasti memuat izin akses model yang dibutuhkan Pi.

::: danger Jangan mempublikasikan kredensial
Jangan menempelkan API Key asli ke chat, tutorial, tangkapan layar, atau repositori GitHub. Jika Anda curiga kunci sudah bocor, segera cabut kunci lama di dasbor penyedia layanan dan buat kunci baru.
:::

## 2. Pilih model yang tersedia untuk akun saat ini

Setelah terhubung, ketik:

```text
/model
```

Berpindah dengan tombol panah atas dan bawah, lalu tekan `Return` untuk memilih model. Setelah daftar tertutup dan Anda kembali ke area edit, lihat status bar di bagian bawah dan pastikan nama model saat ini sudah ditampilkan.

![Ilustrasi: Si Hitam memutar satu dari lima dial di panel, dengan label pilih model dan akun aktif](/images/03-pi-pilih-model.webp)

Pemilih hanya menampilkan model yang tersedia dari Provider yang saat ini sudah dikonfigurasi. Daftar itu berubah mengikuti akun dan waktu; setelah memilih, Anda tetap harus kembali ke status bar bawah untuk memeriksa ulang nama modelnya.

Jika Anda ingin tetap memakainya saat dijalankan berikutnya, tekan `Ctrl+S` di pemilih model untuk menyimpannya sebagai nilai default saat mulai. Jangan menganggap satu nama model di tutorial sebagai satu-satunya jawaban benar; nama, ketersediaan, dan penagihan model semuanya bisa berubah.

## 3. Lakukan satu uji konektivitas tanpa operasi file

Kembali ke area edit, kirim kalimat ini:

```text
Hanya balas “Pi tersambung”. Jangan membaca, membuat, atau mengubah file, dan jangan menjalankan perintah.
```

Setelah ditempel ke area edit bawah Pi, tekan `Return`. Antarmuka mungkin menampilkan sedang berpikir atau menunggu jaringan lebih dulu; saat itu jangan mengirim ulang. Tunggu sampai model benar-benar mengembalikan teks dan area edit bawah bisa dipakai mengetik lagi, barulah ronde ini berakhir.

Balasan "Pi tersambung" yang lengkap baru dianggap lolos. Sapaan pembuka yang umum, atau hanya melihat pemberitahuan "login berhasil", tidak bisa membuktikan model saat ini menyelesaikan pemanggilan nyata ini.

Jika Pi hendak membaca atau menulis file atau menjalankan perintah, tekan `Esc` untuk menghentikannya. Pengujian ini tidak membutuhkan tool apa pun.

::: warning Tidak menerima balasan
- Jika tidak melihat model yang tersedia, untuk Provider bawaan kembali ke `/login` dan periksa autentikasi; untuk Provider kustom periksa dulu konfigurasi modelnya.
- Jika setelah memilih model status bar tidak berubah, batalkan dulu operasi saat ini dan buka lagi `/model` untuk memeriksa; jangan berturut-turut berpindah provider.
- Jika permintaan pengujian lama tidak kembali, tekan `Esc` dulu untuk menghentikan ronde ini, simpan nama model di status bar dan teks galatnya, lalu periksa jaringan dan status layanan tersebut.
- Jika muncul galat `unauthorized`, saldo, atau kuota, simpan teks aslinya dan periksa izin akun saat ini.
- Jika setelah otorisasi browser tidak kembali ke Pi, batalkan login kali ini, pastikan akun di browser, lalu coba lagi.
- Jika tidak tahu di mana galatnya, salin seluruh bagian dari baris galat pertama sampai area input bawah, tetapi tutupi dulu API Key, email, dan path pribadi.
:::

## Verifikasi pelajaran ini

- Bisa menyebutkan dengan jelas apakah kali ini memakai autentikasi langganan atau API Key, dan sudah melihat status kuota atau penagihan akun terkait.
- Sudah menyelesaikan autentikasi lewat `/login`, atau sudah mengonfigurasi satu Provider kustom yang bisa dipakai.
- Status bar di bagian bawah menampilkan model saat ini.
- Pengujian membalas dengan tepat "Pi tersambung", dan tanpa pemanggilan tool.

[Pelajaran berikutnya, bersiap bekerja di direktori yang benar →](/guide/ready-to-work)
