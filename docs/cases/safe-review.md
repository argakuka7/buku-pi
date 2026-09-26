---
title: CASE 07 · Review keamanan sebelum tugas
description: Menilai cakupan tugas, izin, titik pemulihan, dan cara verifikasi tanpa mengeksekusi kode yang tidak diketahui.
prev: { text: CASE 06 · Pemulihan setelah interupsi, link: /cases/checkpoint-recovery }
next: { text: CASE 08 · Proyek akhir, link: /cases/graduation-project }
---

<span class="library-status">CASE 07 · Dapat dilatih</span>

# Review keamanan sebelum tugas

## Hasil

Selesaikan pemeriksaan empat pertanyaan sebelum benar-benar mengeksekusi tugas, lalu catat direktori, file, risiko, dan titik pemulihan; setiap hal yang belum diketahui tetap dibiarkan sebagai tidak diketahui, dan jangan mengganti penilaian isolasi dengan “proyek sudah dipercaya”.

## Materi tetap

- <a href="/examples/safety/review-brief.md" download>Permintaan dari repositori asing (tanpa kode yang dapat dieksekusi)</a>
- <a href="/examples/safety/plan-template.md" download>Templat review keamanan</a>

Di terminal biasa, masuk ke `pi-practice`, lalu simpan kedua file ke `safety-review/`:

```bash
cd ~/Downloads/pi-practice
pwd
mkdir -p safety-review
curl -fL https://buku-pi-dariargakuka.netlify.app/examples/safety/review-brief.md \
  -o safety-review/review-brief.md
curl -fL https://buku-pi-dariargakuka.netlify.app/examples/safety/plan-template.md \
  -o safety-review/plan-template.md
```

Buka dulu kedua file itu, pastikan isinya hanya skenario tetap dan tujuh judul kosong, tanpa kode yang dapat dieksekusi. Lalu matikan Extension dan file konteks secara eksplisit, dan sediakan hanya tool baca, pencarian, dan tulis:

```bash
pi --name "Latihan review keamanan" --no-extensions --no-context-files \
  --tools read,write,grep,find,ls
```

Parameter-parameter ini bukan sandbox; `write` tetap dapat menulis file dengan izin pengguna saat ini. Materi pelajaran ini adalah teks pengajaran tetap yang tidak berbahaya, dan tugasnya hanya mengizinkan penulisan satu hasil baru. Setelah masuk ke Pi, kirim:

```text
Baca safety-review/review-brief.md dan safety-review/plan-template.md.
Tuliskan hasil review ke safety-review/plan.md sesuai templat.
Gunakan hanya fakta yang tertulis jelas dalam skenario; untuk yang tidak diketahui tulis “tidak diketahui”, jangan mengakses jaringan, menjalankan perintah, memasang dependensi,
membaca direktori lain, atau mengubah kedua file input. Bagian akhir “apakah boleh dilanjutkan” hanya boleh diisi “informasi belum cukup”, dan daftarkan hal-hal yang wajib dikonfirmasi sebelum melanjutkan.
```

Selama eksekusi, yang seharusnya terlihat hanya dua pembacaan input dan satu penulisan `safety-review/plan.md`. Jika muncul path atau aksi tool lain, tekan `Esc` untuk berhenti, dan pertahankan kondisi lapangan sesuai [Pelajaran 14](/guide/safety).

## Gejala kunci

Agent hanya boleh menuliskan fakta yang sudah ada di materi sebagai hal yang diketahui, sedangkan isi repositori, perilaku skrip, dan kebutuhan kredensial tetap dibiarkan sebagai tidak diketahui; kesimpulan akhir harus berhenti pada “informasi belum cukup”. Jika output langsung menyarankan pemasangan atau eksekusi, berarti review keamanan telah melampaui bukti yang ada.

## Verifikasi independen

- Rencana menuliskan dengan jelas cakupan hanya-baca, aksi yang mungkin dieksekusi, permukaan paparan kredensial, dan cara isolasi yang dibutuhkan.
- Tidak menjalankan skrip pemasangan yang tidak diketahui, dan tidak menaruh kunci asli ke direktori latihan.
- Project Trust dijelaskan dengan benar sebagai izin pemuatan sumber daya, bukan sandbox.
- Sebelum pemulihan, simpan dulu path, waktu, status, perbedaan, dan perintah yang telah dieksekusi.

Setelah keluar dari Pi, periksa secara independen:

```bash
test -f safety-review/plan.md && echo "PASS: review keamanan ada"
grep -E '^## (Fakta yang diketahui|Hal yang belum diketahui dan risiko|Pemeriksaan hanya-baca yang diizinkan|Tindakan yang saat ini dilarang|Isolasi dan kredensial minimal yang dibutuhkan|Titik pemulihan dan bukti|Apakah boleh dilanjutkan)$' safety-review/plan.md
```

Perintah kedua seharusnya menampilkan tujuh judul. Lalu buka filenya dan pastikan penilaian akhirnya adalah “informasi belum cukup”, serta isi repositori fiktif tidak ditulis sebagai fakta yang sudah diperiksa.

## Pemulihan kegagalan

Jika Anda sudah terlanjur menjalankan konten yang tidak diketahui, putuskan dulu koneksinya dan hentikan operasi, lalu pertahankan kondisi lapangan; jangan minta Agent membersihkannya secara massal. Sesuai dampak sebenarnya, lakukan pencabutan kredensial, pemeriksaan host, dan pemulihan file yang setara. Studi kasus ini tidak dapat menggantikan penanganan insiden profesional.
