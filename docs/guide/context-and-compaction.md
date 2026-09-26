---
title: Konteks dan pemadatan
description: Pahami konteks, pohon sesi, pemadatan, dan hasil kerja yang berkelanjutan dari sudut pandang pekerjaan nyata.
prev:
  text: Penyimpanan dan kelanjutan sesi
  link: /guide/sessions
next:
  text: Pengantar prompt cache
  link: /guide/prompt-caching
---

<span class="library-status">MODULE 03 · STEP 08 · LATIHAN</span>

# Konteks dan pemadatan

::: info Jenis pelajaran ini
Pelajaran ini lebih menekankan pemahaman dan kebiasaan kerja. Anda baru perlu mengetik `/compact` ketika informasi penting sudah ditulis ke file dan Anda memang ingin melatih pemadatan.
:::

Setelah percakapan memanjang, Anda mungkin melihat pemakaian konteks di bagian bawah perlahan meningkat. Untuk sementara, konteks dapat dipahami sebagai “konten yang dapat dirujuk model sekaligus pada putaran ini”. Ia mencakup instruksi sistem, aturan proyek, pesan Anda, balasan model, dan hasil tool.

Konteks bukan memori permanen, dan tidak sama dengan file sesi di disk. Sesi dapat tersimpan lama, tetapi ada batas atas untuk konten yang dapat diterima model dalam satu kali.

## Mengapa perlu pemadatan

Pemadatan otomatis aktif secara default: ketika percakapan mendekati batas konteks model, Pi dapat mempertahankan pesan yang lebih baru sekaligus merapikan bagian yang lebih awal menjadi ringkasan. Anda juga dapat mengetiknya secara manual di antarmuka interaktif:

```text
/compact
```

Perintah ini diketik di area edit bagian bawah Pi; tekan `Return`, lalu tunggu pemadatan selesai. Setelah antarmuka kembali ke status dapat menerima input, minta Pi mengulang kembali tujuan saat ini, keputusan yang sudah dibuat, dan langkah berikutnya, lalu cocokkan dengan file proyek Anda. Jika ragu, jangan menjalankannya berulang kali terus-menerus.

Pemadatan membuat pekerjaan dapat berlanjut, tetapi mustahil mempertahankan semua detail tanpa kehilangan. Dari proses debugging yang sangat panjang, yang mungkin diterima model selanjutnya hanyalah “A dan B sudah disingkirkan, berikutnya periksa C” beserta pesan-pesan terbaru. Entri asli yang lebih awal tetap berada di pohon sesi JSONL; pemadatan tidak akan memulihkan atau mengubah file di disk. Jika suatu galat yang presisi, keluaran perintah, atau alasan keputusan harus dipertahankan, jangan biarkan ia hanya berada di konteks yang diterima model selanjutnya.

## Tuliskan hasil penting ke dalam file

Saat menangani tugas panjang, Anda dapat meminta Pi memelihara tiga jenis hasil kerja. Nama file berikut adalah metode kerja yang disarankan buku ini, bukan file tetap yang diwajibkan Pi:

- `plan.md` mencatat tujuan, tahap, dan hal yang belum selesai.
- `decisions.md` mencatat pilihan yang sudah dibuat beserta alasannya.
- `verification.md` mencatat metode pemeriksaan, hasil nyata, dan masalah yang masih tersisa.

File-file ini dapat dibaca ulang oleh Anda, Pi, dan sesi berikutnya. Mereka tidak menggantikan Git, tetapi dapat mencegah keputusan penting hanya berada di salah satu balasan model.

### Buat dulu serah terima minimal

Di terminal biasa, pastikan Anda berada di `pi-practice`, lalu buat direktori catatan kerja:

```bash
mkdir -p worklog
```

Kembali ke area edit Pi, dan berikan tugas berikut kepada Pi. Di sini Anda tidak dituntut benar-benar memanjangkan sesi sampai sangat panjang; targetnya adalah memperoleh file serah terima yang dapat dibaca ulang.

```text
Mohon buat catatan serah terima tugas ini di worklog/handoff.md, hanya tulis lima bagian:
tujuan, cakupan, yang sudah selesai, masalah yang belum terpecahkan, langkah berikutnya.
Isi berdasarkan sesi saat ini; untuk hal yang tidak diketahui tulis “tidak diketahui”, jangan menebak.
Setelah selesai, baca ulang file-nya dan beri tahu saya path-nya.
```

Periksa secara independen bahwa file-nya memang ada:

```bash
test -f worklog/handoff.md && echo "PASS: file serah terima ada"
```

Jika `PASS` tidak muncul, jangan dulu memadatkan. Kembali ke Pi dan periksa path penulisannya; jika masih tidak ditemukan, pertahankan sesi saat ini, lalu di terminal biasa jalankan `pwd` dan `find worklog -maxdepth 1 -type f` untuk memastikan apakah file-nya tertulis di tempat lain.

## Irama sebuah tugas panjang

1. Sebelum mulai, tuliskan tujuan dan kriteria verifikasi dengan jelas.
2. Setiap menyelesaikan satu tahap, perbarui hasil kerja dan daftar tugas.
3. Saat debugging masuk ke jalur yang salah, gunakan `/tree` untuk kembali ke node yang benar.
4. Sebelum konteks mendekati batas atas, periksa apakah informasi penting sudah mendarat di file.
5. Setelah pemadatan, baca ulang tujuan, keputusan, dan catatan verifikasi, baru lanjutkan.

![Ilustrasi: Si Hitam membandingkan papan klip dengan alat ukur bulat, dengan label checkpoint dan progres](/images/07-pi-checkpoint-tugas-panjang.webp)

Ilustrasi ini menggambarkan “bagaimana memverifikasi setelah status ditulis ke luar sesi”: bandingkan dulu jumlah input dan indeks, lalu lihat file yang sudah selesai dan item yang gagal yang dicatat di checkpoint. Catatan kemajuan dan hasil di disk dapat diperiksa secara independen, tetapi itu tidak membuktikan `/compact` sudah berhasil; apakah pemadatan selesai tetap harus dinilai dari Pi yang kembali ke status dapat menerima input serta pemeriksaan ulang lewat pengulangan setelah pemadatan.

## Saat ingin benar-benar melatih `/compact`

Hanya ketika `worklog/handoff.md` sudah ada, dan tujuan, cakupan, serta langkah berikutnya di dalamnya sesuai dengan pemahaman Anda, barulah ketik di area edit Pi:

```text
/compact
```

Setelah pemadatan selesai dan Pi kembali menunggu input, kirim:

```text
Mohon baca dulu worklog/handoff.md, lalu sebutkan tujuan saat ini, cakupan yang tidak boleh dilanggar,
hal yang sudah selesai, dan satu-satunya langkah berikutnya. Jika ingatan sesi bertentangan dengan file, jadikan file sebagai dasar pemeriksaan dan sebutkan pertentangannya.
```

Pemadatan tidak akan membatalkan atau memulihkan file di disk. Jika perintah melaporkan galat atau lama tidak kembali ke status dapat menerima input, hentikan pengulangan, simpan teks galat dan `handoff.md` saat ini; setelah menjalankan ulang dan memulihkan sesi, bangun kembali konteks dari file terlebih dahulu.

## Verifikasi pelajaran ini

- `worklog/handoff.md` dapat dipastikan keberadaannya di terminal biasa.
- File menuliskan tujuan, cakupan, hal yang sudah selesai, hal yang belum diketahui, dan langkah berikutnya dengan jelas, tanpa menambal kekosongan dengan tebakan.
- Anda dapat menjelaskan dengan jelas: sesi dipakai untuk menemukan kembali percakapan, konteks adalah konten yang dapat dirujuk model pada putaran ini, sedangkan file atau Git adalah hasil kerja yang dapat diperiksa dan dipulihkan secara independen.
- Jika Anda melakukan pemadatan, pengulangan setelah pemadatan konsisten dengan file serah terima; jika ada konflik, konflik itu sudah dicantumkan secara jelas.

## Eksperimen pendamping: benar-benar membandingkan sebelum dan sesudah pemadatan

Setelah menyelesaikan serah terima minimal pada pelajaran ini, masuklah ke [CASE 02 · Perbandingan sebelum dan sesudah pemadatan](/cases/compaction-before-after). Di sana tersedia brief tetap, checkpoint disk, catatan sebelum pemadatan, jawaban dari ingatan setelah pemadatan, dan catatan pemulihan setelah pembacaan ulang; Anda tidak perlu menambah pelajaran baru, dan angka cache tidak dianggap sebagai kualitas tugas.

::: info Perbedaan yang mudah diabaikan
Portabilitas sesi, pemadatan konteks, dan manajemen versi file adalah tiga masalah yang berbeda. Jika ingin melanjutkan percakapan, perhatikan sesi; jika ingin melanjutkan alur pemikiran model saat ini, perhatikan konteks; jika ingin memulihkan file, gunakan Git atau cadangan.
:::

Kami menyarankan Anda melanjutkan membaca terjemahan berlisensi resmi [Mekanisme pemadatan di Pi](/translations/compaction-in-pi) dan [Sesi yang tidak bisa dibawa pergi](/translations/session-portability) untuk memahami proses pemadatan dan portabilitas sesi secara berdampingan.

Jika ingin menghubungkan sesi, prompt cache, dan konteks yang dapat disesuaikan dalam satu rangkaian pemikiran, Anda dapat membaca [Rangkaian terjemahan](/journey/why-pi-keeps-context-editable).

### Dasar bab ini

- [Pi Compaction](https://pi.dev/docs/latest/compaction)
- [Pi Sessions](https://pi.dev/docs/latest/sessions)
