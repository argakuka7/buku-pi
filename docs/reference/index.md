---
title: Buku panduan referensi
description: Menemukan konsep inti Pi, pintu masuk operasional, batas kemampuan, dan bacaan lanjutan berdasarkan masalah.
prev:
  text: Studi kasus
  link: /cases/
next:
  text: Pertanyaan Umum Pi (FAQ)
  link: /reference/faq
---

<span class="library-status">REFERENCE · Periksa di sini saat menemui masalah</span>

# Buku panduan referensi

Halaman ini tidak bertugas mengajar dari nol, dan tidak mewajibkan pembacaan berurutan. Saat menemui sebuah istilah, satu kemampuan, atau satu masalah operasional, masuklah dari topik yang sesuai; jika Anda membaca untuk pertama kali, mulailah dari [Pengantar: Mengapa membaca Buku Pi ini](/guide/introduction), lalu lanjutkan mengikuti [alur utama Buku Pi](/guide/).

::: info Baca dulu penjelasan edisi ini
[Sepuluh penilaian yang masih berlaku](/guide/lasting-principles) membedakan kesimpulan saat ini dari arsip pembelajaran asli; [Pedoman dan keterangan edisi belajar terbuka 2026](/guide/edition-2026) mencatat jalur platform, batas waktu verifikasi, aturan pemeliharaan, dan batas hak cipta.
:::

## Tiga cara pencarian cepat

| Yang Anda hadapi saat ini | Masuk dari sini | Jalur bacaan |
| --- | --- | --- |
| Satu pertanyaan spesifik | [Pertanyaan umum Pi (FAQ)](/reference/faq) | Lihat dulu jawaban singkatnya, lalu masuk ke konsep atau pelajaran terkait |
| Satu gangguan yang sudah terjadi | [Buku panduan penanganan masalah Pi](/reference/troubleshooting) | Bangun baseline dari gejala, ubah satu kondisi saja setiap kali |
| Satu istilah yang belum dipahami | [Daftar Istilah Populer AI dan Agent](/reference/glossary) | Baca dulu penjelasannya dengan bahasa manusia, lalu pahami maknanya di Pi |

FAQ, buku panduan penanganan masalah, dan daftar istilah populer saling merujuk, dan terus terhubung ke kursus alur utama. FAQ menjawab “mengapa”, panduan masalah menangani “sekarang rusaknya di mana”, dan daftar istilah menjelaskan “apa arti kata ini”.

## Mekanisme inti

| Yang Anda cari | Pintu masuk topik | Masalah yang cocok diselesaikan |
| --- | --- | --- |
| Materi apa saja yang bisa dilihat Pi | [File dan direktori kerja](/guide/files-and-context) | Direktori kerja, cakupan file, dan batas konteks |
| Bagaimana menyimpan dan melanjutkan tugas | [Session dan melanjutkan pekerjaan](/guide/sessions) | Penamaan sesi, pemulihan, dan portabilitas |
| Mengapa tugas panjang jadi terlupa | [Konteks dan pemadatan](/guide/context-and-compaction) | Context, Compaction, dan catatan serah terima |
| Apa arti angka Cache | [Pengantar prompt caching](/guide/prompt-caching) | Cache hit, biaya, dan penilaian status |
| Bagaimana konsep-konsep ini menyatu menjadi satu kali eksekusi | [Cara kerja Pi: Dari satu Prompt hingga satu Agent Loop utuh](/guide/how-pi-works) | Penyusunan Context, pemanggilan model, siklus tertutup tool, dan penulisan kembali Session |

## Kemampuan dan batas

| Kemampuan | Pintu masuk topik | Satu kalimat yang perlu diingat dulu |
| --- | --- | --- |
| Memantapkan metode dan menambah kemampuan | [Skill, Extension, dan Pi Package](/guide/skills-extensions-packages) | Skill mengajarkannya cara melakukannya, Extension memberinya kemampuan menjalankan yang baru |
| Memilih ekstensi pihak ketiga | [Rekomendasi plugin Pi](/plugins/) | Pastikan dulu kebutuhan dan asalnya, coba hanya satu plugin yang paling dekat dengan masalah |
| Memilih jalur Agent yang berbeda | [Bukan hanya Pi: cara memilih OMP dan Selesai Code](/reference/pi-forks) | Bedakan Pi asli dengan dua branch independennya, putuskan berdasarkan tugas apakah perlu berganti tool |
| Pembagian banyak tugas | [Bagaimana Subagent membagi tugas](/guide/subagents) | Setelah pembagian kerja, bukti dan verifikasi akhir tetap harus disatukan |
| Menjalankan tugas dengan aman | [Izin, isolasi, dan verifikasi](/guide/safety) | Kembalinya hasil yang sukses tidak sama dengan hasil bisnis yang sudah selesai |
| Berjalan dalam waktu lama | [Tugas berdurasi panjang dan VPS](/guide/vps-and-long-running) | Rancang dulu checkpoint, jalur pemulihan, dan kondisi berhenti |

## Pintu masuk operasional

- [Sebelum instalasi, siapkan dulu terminal dan lingkungan](/guide/before-install): Pastikan lingkungan dan direktori latihan.
- [Memasang Pi dan Membukanya untuk Pertama Kali](/guide/install-pi): Selesaikan peluncuran pertama.
- [Jalur Windows berbahasa Mandarin: pasang dan jalankan Pi](/guide/windows-setup): Gunakan Git Bash untuk menyiapkan lingkungan Windows, instalasi, dan peluncuran pertama.
- [Login akun dan pengaturan model](/guide/connect-model): Hubungkan Provider dan model.
- [Mulai dari direktori latihan](/guide/ready-to-work): Pisahkan eksperimen dari file asli.
- [Manajemen siklus hidup setelah instalasi](/guide/lifecycle-management): Perbarui Pi, segarkan katalog model, keluar dari login, lepas pemasangan, dan tangani data lokal.

## Ringkasan perintah yang sering dipakai

Berikut hanya mencantumkan pintu masuk yang benar-benar dipakai di alur utama. Jangan mencampur perintah terminal biasa dengan perintah internal Pi.

| Tempat memasukkan | Perintah | Kegunaan |
| --- | --- | --- |
| Terminal biasa | `pi` | Menjalankan antarmuka interaktif di direktori saat ini |
| Terminal biasa | `pi --version` | Melihat versi yang terpasang saat ini |
| Terminal biasa | `pi update` | Hanya memperbarui Pi itu sendiri |
| Terminal biasa | `pi update --models` | Hanya menyegarkan katalog model |
| Terminal biasa | `pi list` | Melihat Package yang terdaftar di pengaturan |
| Terminal biasa | `pi -c` | Melanjutkan sesi terakhir proyek saat ini |
| Terminal biasa | `pi -r` | Membuka pemilih sesi proyek saat ini |
| Terminal biasa | `pi --no-extensions -e ./file.ts` | Mengabaikan Extension yang ditemukan otomatis, hanya memuat satu file secara eksplisit |
| Terminal biasa | `pi --no-skills --skill ./SKILL.md` | Mengabaikan Skill yang ditemukan otomatis, hanya memuat satu file secara eksplisit |
| Area editor Pi | `/login` | Mengelola autentikasi layanan model |
| Area editor Pi | `/logout` | Menghapus kredensial lokal Provider yang dipilih |
| Area editor Pi | `/model` | Memilih model saat ini |
| Area editor Pi | `/name nama` | Menetapkan nama tampilan sesi |
| Area editor Pi | `/resume` | Menelusuri dan beralih sesi |
| Area editor Pi | `/tree` | Memilih node di pohon sesi saat ini |
| Area editor Pi | `/fork` / `/clone` | Membuat sesi baru dari pesan lama atau branch saat ini |
| Area editor Pi | `/compact` | Merapikan konteks yang lebih awal menjadi ringkasan |
| Area editor Pi | `/reload` | Memuat ulang sumber daya di lokasi yang ditemukan otomatis |
| Area editor Pi | `/quit` | Keluar dari Pi kembali ke terminal biasa |

Perintah manajemen Package dimasukkan di terminal biasa: `pi install <sumber>` untuk memasang, `pi list` untuk melihat, `pi config` untuk mengaktifkan atau menonaktifkan sumber daya, dan `pi remove <sumber>` untuk menghapus. Package mungkin berisi Extension yang dapat dieksekusi dan Skill yang mengarahkan Agent menjalankan tindakan; jangan memasangnya jika asal-usul dan isi lengkapnya tidak jelas.

Perilaku perintah dapat berubah antar versi; tabel ini diverifikasi pada 2026-09-09. Jika menemui ketidaksesuaian, jalankan dulu `pi --help`, lalu periksa [Using Pi](https://pi.dev/docs/latest/usage) dan halaman topik terkait.

## Lokasi file dan konfigurasi

| Lokasi | Fungsi | Batas |
| --- | --- | --- |
| `~/.pi/agent/` | Autentikasi, pengaturan, sesi, dan sumber daya tingkat pengguna | Mungkin berisi kredensial dan sesi pribadi, jangan diunggah |
| `.pi/` | Pengaturan, Extension, Skill, dan lain-lain proyek saat ini | Sumber daya proyek dikendalikan oleh Project Trust |
| `.agents/skills/` | Skill proyek yang dapat ditemukan oleh beberapa tool Agent | Sumber daya tingkat proyek, asal-usulnya perlu diperiksa dulu |
| `AGENTS.md`, `CLAUDE.md` | Penjelasan konteks proyek | Pemuatan bawaan tidak dilindungi oleh penolakan Project Trust, dapat dimatikan dengan `--no-context-files` |
| `docs/public/` | Materi unduhan publik situs Buku Pi ini | Setelah build disalin ke path akar situs, jangan menyimpan kredensial |

## Urutan penanganan masalah

Hentikan dulu percobaan berulang dan simpan pesan error secara lengkap, lalu periksa posisi input, direktori kerja, model saat ini, dan Session. Setelah itu bangun baseline bersih tanpa memuat sumber daya tambahan, dan pulihkan satu variabel saja setiap kali. Jika menyangkut kunci, pembayaran, publikasi, penghapusan, atau pengiriman ke luar, jangan memperluas tindakan sendiri.

[Buka panduan penanganan masalah Pi selengkapnya →](/reference/troubleshooting)

## Batas istilah

- **Provider**: Layanan yang benar-benar menyediakan pemanggilan model dan penagihan, tidak sama dengan Pi itu sendiri.
- **Session**: Pohon percakapan yang tersimpan; tidak menggantikan manajemen versi file.
- **Context**: Input yang bisa dijadikan rujukan model pada putaran ini; tidak sama dengan memori permanen.
- **Skill**: Penjelasan kerja dan sumber daya pendamping yang dibaca sesuai kebutuhan; dapat memengaruhi perilaku, dan mungkin mengarahkan eksekusi skrip.
- **Extension**: Kemampuan TypeScript yang berjalan di dalam proses Pi, dengan izin pengguna saat ini.
- **Package**: Kombinasi distribusi Skill, Extension, template prompt, dan tema; bukan container yang aman.
- **Project Trust**: Keputusan apakah sumber daya proyek dimuat, bukan sandbox saat berjalan.

## Bacaan lanjutan

Terjemahan berlisensi resmi bukan kursus alur utama. Terjemahan itu dipertahankan sebagai zona khusus tersendiri menurut daftar isi edisi ini; masuklah dari bab yang sesuai untuk menjelaskan suatu mekanisme lebih lanjut melalui artikel lengkap penulis aslinya:

- Setelah menyelesaikan pelajaran 7: [Sesi yang tidak dapat Anda bawa serta](/translations/session-portability)
- Setelah menyelesaikan pelajaran 8: [Mekanisme pemadatan di Pi](/translations/compaction-in-pi)
- Setelah menyelesaikan pelajaran 9: [Prompt caching di dalam Agent](/translations/prompt-caching)

[Lihat semua terjemahan berlisensi resmi](/translations/)

::: tip Cara menggunakan buku panduan referensi
Gunakan dulu pencarian atau indeks topik di atas untuk menemukan masalah; ketika perlu membangun pemahaman lengkap, kembalilah ke bab terkait dengan mengikuti keterkaitan kursus di bagian atas halaman.
:::
