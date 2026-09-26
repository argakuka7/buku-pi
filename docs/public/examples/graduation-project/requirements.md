# CASE 08 · Kebutuhan proyek akhir

## Proyek

- Repositori latihan: `https://github.com/argakuka7/buku-pi`
- Teknologi: VitePress
- Cara kerja: dikerjakan setelah meng-clone repositori secara lokal; tanpa deploy, tanpa commit,
  tanpa push.

## Tujuan

Menambahkan satu halaman baru "Daftar periksa penyelesaian tugas" di buku panduan referensi, agar
pemula dapat memverifikasi sendiri hasil kerja Pi dari tiga sisi: file nyata, hasil perintah, dan
status daring — setelah Pi melaporkan tugasnya selesai.

## File yang boleh diubah

1. Membuat `docs/reference/task-completion-checklist.md`
2. Mengubah `docs/reference/index.md`
3. Mengubah `docs/.vitepress/config/navigation.mts`
4. Membuat atau memperbarui `worklog/graduation-checkpoint.md`

Selain path di atas, jangan mengubah file proyek lain. `worklog/` adalah catatan latihan lokal dan
tidak boleh ikut di-commit.

## Ketentuan halaman

`docs/reference/task-completion-checklist.md` harus memuat:

- frontmatter VitePress: `title` dan `description`
- judul tingkat satu: `Daftar periksa penyelesaian tugas`
- empat judul tingkat dua:
  - `Sebelum mulai`
  - `Saat dikerjakan`
  - `Setelah selesai`
  - `Kegagalan dan pemulihan`
- setidaknya tertaut ke tiga halaman yang sudah ada:
  - `/guide/first-task`
  - `/guide/context-and-compaction`
  - `/guide/safety`
- menuliskan secara eksplisit: "Laporan selesai dari Agent hanyalah petunjuk, bukan bukti selesai."

## Ketentuan navigasi

- Tambahkan pintu masuk halaman baru di `docs/reference/index.md`.
- Tambahkan "Daftar periksa penyelesaian tugas" pada sidebar buku panduan di
  `docs/.vitepress/config/navigation.mts`.
- Jangan mengubah judul, urutan, dan tautan halaman lain.

## Ketentuan verifikasi

1. `npm run check:content` dan `npm run check` keduanya lulus.
2. Diff Git hanya memuat file proyek yang diizinkan kebutuhan ini; direktori dependensi, hasil build,
   dan cache tidak boleh masuk ke diff.
3. Halaman baru dapat dijangkau dari beranda dan sidebar buku panduan.
4. Tiga tautan pelajaran tersebut benar-benar menemukan halaman yang sesuai di proyek.
5. Empat tahap pada halaman lengkap; "Pi menjawab selesai" tidak ditulis sebagai bukti akhir.

## Larangan

- Jangan men-deploy situs.
- Jangan menjalankan `git add`, `git commit`, atau `git push`.
- Jangan mengubah atau membaca file kredensial.
- Jangan memasang Package, Extension, atau dependensi sistem baru.
- Jangan memulihkan kesalahan dengan menghapus, menimpa, atau me-reset seluruh repositori.

Jika struktur repositori tidak sesuai dengan kebutuhan ini, tuliskan perbedaannya ke checkpoint lalu
berhenti; jangan memperluas cakupan perubahan sendiri.
