---
title: Skill, Extension, dan Pi Package
description: Bedakan tiga cara perluasan Pi lewat “instruksi, kemampuan yang dapat dijalankan, dan distribusi paket”.
prev:
  text: Pengantar prompt cache
  link: /guide/prompt-caching
next:
  text: Kebutuhan dan verifikasi Extension
  link: /guide/first-extension
---

<span class="library-status">MODULE 04 · STEP 10 · bisa dilatih</span>

# Skill, Extension, dan Pi Package

Saat baru mulai memperluas Pi, ketiga nama ini mudah tertukar. Masing-masing menyelesaikan tiga hal yang berbeda — metode kerja, kemampuan yang dapat dijalankan, dan distribusi sumber daya — dan tidak ada hubungan tingkat dari rendah ke tinggi di antaranya.

| Nama | Dapat dipahami sebagai | Cocok untuk menyelesaikan | Kapan pemula memakainya |
| --- | --- | --- | --- |
| Skill | Paket kemampuan khusus yang dimuat sesuai kebutuhan | Menyediakan penjelasan alur kerja, juga dapat membawa skrip, sumber daya, dan dokumen referensi | Ketika satu jenis tugas sudah dikerjakan beberapa kali dan metodenya perlu dibakukan |
| Extension | Kemampuan yang dapat dijalankan yang dimuat ke dalam Pi | Tool baru, perintah, penanganan event, antarmuka, atau perilaku kustom | Ketika penjelasan saja tidak cukup dan memang perlu kode yang berjalan |
| Pi Package | Paket untuk mendistribusikan sekumpulan sumber daya Pi | Memasang dan berbagi Extension, Skill, template prompt, tema, dan lain-lain sekaligus | Ketika kombinasi Anda sudah stabil dan siap dipakai ulang di banyak proyek atau oleh banyak orang |

## Tentukan dulu masalahnya termasuk kategori mana

Jika setiap kali menulis tutorial Anda harus menjelaskan ulang “periksa dulu apakah pembaca dapat memverifikasi sendiri”, itu lebih mirip Skill. Nilainya terletak pada metode kerja yang stabil, dan belum tentu membutuhkan kode baru.

Jika Anda ingin terminal memunculkan pengingat saat tugas selesai, Anda perlu memantau event Pi dan memanggil kemampuan sistem. Ini lebih mirip Extension.

Jika Anda ingin menyerahkan Extension pengingat, Skill pendamping, template prompt, dan tema kepada komputer lain, barulah sebuah Pi Package mulai bermakna.

## Urutan memilih

1. Jalankan dulu secara manual di tugas nyata.
2. Langkah dan standar yang berulang, rapikan menjadi Skill.
3. Jika memang kurang kemampuan yang dapat dijalankan, barulah kembangkan atau pasang Extension.
4. Jika ingin mendistribusikan ke banyak proyek atau orang lain, barulah pertimbangkan Package.

Urutan ini menghindari satu masalah umum: tugasnya belum stabil, tetapi sudah mengumpulkan banyak plugin dan paket, dan pada akhirnya Anda sendiri tidak dapat menjelaskan lapisan mana yang bekerja.

## Praktik: memuat hanya satu Skill pengajaran

Pelajaran ini melanjutkan catatan rapat fiktif dari pelajaran ke-5. Anda akan memuat sebuah Skill yang hanya berisi aturan teks, agar Pi memeriksa daftar tindakan berdasarkan field tetap. Skill ini tidak menambah izin sistem, tetapi penjelasan di dalamnya tetap dapat memengaruhi perilaku Agent, jadi Anda wajib membaca isinya lebih dulu.

### 1. Unduh dan periksa

Di terminal biasa, masuk ke `pi-practice`, lalu unduh file pengajaran:

```bash
mkdir -p bluebook-examples/action-list-review
curl -fL https://pi-bluebook-id.pages.dev/examples/skill/action-list-review/SKILL.md \
  -o bluebook-examples/action-list-review/SKILL.md
```

Buka atau lihat `bluebook-examples/action-list-review/SKILL.md` di terminal. Anda akan melihat dua metadata `name` dan `description`, serta enam aturan yang hanya berkisar pada membaca, merapikan, dan memeriksa catatan rapat. Jika filenya kosong, isinya bukan teks biasa, atau meminta menjalankan perintah yang tidak berhubungan dengan tugas, hentikan dan jangan dimuat.

### 2. Memuat secara eksplisit

Perintah berikut diketik di terminal biasa. `--no-skills` mengabaikan Skill lain yang ditemukan otomatis, lalu `--skill` hanya menambahkan satu file dari pelajaran ini:

```bash
pi --no-skills --skill ./bluebook-examples/action-list-review/SKILL.md
```

![Ilustrasi: Si Hitam menyelipkan kartu ke slot mesin dan lampu menyala, dengan label muat Skill dan Skill aktif](/images/05-pi-memuat-skill.webp)

Ada dua hal yang perlu diperiksa: perintah peluncuran secara eksplisit menyebut path Skill, dan Skill `action-list-review` tercantum setelah dimuat. Ini membuktikan “sudah dimuat dan siap dipanggil secara eksplisit”, bukan bahwa file berikutnya sudah dihasilkan.

Setelah masuk ke Pi, jika perintah `/skill:` tersedia, ketik potongan berikut untuk memaksa memuat Skill tertentu; jika perintahnya tidak muncul, aktifkan dulu Skill commands di `/settings`, lalu ketik ulang:

```text
/skill:action-list-review Tolong periksa ulang input/notulen-rapat.md,
lalu tulis hasilnya ke output/daftar-tindakan-revisi.md. Jangan mengubah file input; untuk informasi yang tidak ada di sumber asli tulis “tidak dijelaskan di sumber asli”.
```

Pi saat mulai hanya memasukkan nama dan deskripsi Skill ke dalam konteks, sedangkan penjelasan lengkapnya dimuat sesuai kebutuhan; pihak resmi juga mengingatkan bahwa model belum tentu membacanya secara otomatis setiap kali, jadi pelajaran ini memakai `/skill:action-list-review` secara eksplisit. Ini tetap tidak berarti sistem pasti menjalankan semua pemeriksaan untuk Anda. Amati apakah Pi benar-benar membaca input yang ditentukan dan menulis output yang ditentukan; setelah selesai Anda tetap harus memeriksa filenya secara mandiri.

### 3. Verifikasi dan menonaktifkan

Setelah keluar dari Pi, jalankan di terminal biasa:

```bash
test -f output/daftar-tindakan-revisi.md && echo "PASS: versi review ada"
grep -c '^## ' output/daftar-tindakan-revisi.md
```

Baris pertama harus memunculkan `PASS`. Baris kedua dipakai untuk membantu menghitung; jika format judul Anda berbeda, buka saja filenya dan pastikan tepat ada tiga item, jangan hanya bergantung pada angka ini.

Skill ini tidak dipasang ke direktori global atau direktori penemuan otomatis proyek. Saat Anda menjalankan `pi` secara langsung lain kali, Skill ini tidak akan terus dimuat hanya karena perintah pelajaran ini. Untuk memakainya lagi, sertakan kembali `--skill`; untuk menonaktifkannya, cukup keluar dari Pi kali ini dan jangan teruskan parameter itu.

::: tip Lokasi penempatan tingkat proyek
Ketika Anda sudah memahaminya dan ingin agar proyek yang sama menemukannya secara otomatis, letakkan di `.pi/skills/action-list-review/SKILL.md`. Sumber daya proyek baru dimuat setelah proyek dipercaya. Untuk belajar pertama kali, gunakan dulu `--skill` secara eksplisit agar asal dan cakupannya lebih mudah dilihat.
:::

::: danger Baca dulu sebelum memasang
Pi Package berjalan dengan izin sistem penuh pengguna saat ini. Selain Extension yang dapat dijalankan, Skill dan sumber daya lain juga dapat mengarahkan Agent menjalankan perintah atau menimbulkan efek samping. Jangan langsung percaya hanya karena namanya “paket” atau “sumber daya komunitas”. Sebelum memasang, periksalah asal, sumber daya, dan isi pemasangan seluruh paket.
:::

### Dasar bab ini

- [Pi Skills](https://pi.dev/docs/latest/skills)
- [Pi Extensions](https://pi.dev/docs/latest/extensions)
- [Pi Packages](https://pi.dev/docs/latest/packages)
- [Perbedaan Skill, Extension, dan Pi Package](/tweets/04-skills-extensions)

Perilaku dinamis di atas diverifikasi pada 2026-09-09. Skill pengajaran telah diverifikasi dimuat sementara di Pi 0.80.10 pada mesin ini, dan muncul di daftar perintah `skill:action-list-review`; lokasi sumber daya dan perintah Pi dapat diperbarui, jadi acuannya adalah halaman resmi terkait.
