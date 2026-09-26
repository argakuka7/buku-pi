# EN TRANSLATION BRIEF — Pi Bluebook English edition

Tugas: membangun **edisi English** situs ini dari edisi Indonesia yang sudah ada.
Sumber = berkas Bahasa Indonesia. Target = berkas English di `docs/en/<path yang sama>`.

## Gaya
- English natural dan idiomatis (bukan terjemahan kaku). Nada instruktif, tenang, seperti buku panduan teknis.
- Sapa pembaca dengan "you". Kalimat aktif. Angka/satuan tetap (mis. "30 minutes").
- Judul bagian: Title Case ringan, tanpa titik di akhir.
- Istilah teknis dipertahankan Inggris: Session, Context, Compaction, Skill, Extension, Subagent, Harness, tool, prompt, agent, provider, checkpoint, cache, prefix cache, token, sandbox, workflow.
- Nama diri/produk tetap: Pi, Pi Coding Agent, PI BLUEBOOK, OMP, Selesai, Earendil, Lefos, Mario Zechner, Xiaomo, GitHub, npm, VitePress.

## Jangan diubah
- Perintah, flag, path, identifier, nama paket, sintaks konfigurasi, struktur blok kode, sintaks VitePress (`::: tip/warning/danger/details`), komponen Vue (`<PiReleaseExplorer />`), tag HTML, atribut, anker eksplisit `{#anchor}`.
- Angka, tanggal, ID tweet (`post-...`), nama berkas contoh (`input/notulen-rapat.md`, `output/daftar-tindakan.md`, `output/daftar-tindakan-revisi.md`, `output/daftar-tindakan-urutan-terbalik.md`, `output/indeks-tenggat.md`).
- Nama tokoh contoh: Lin, Zhou, Chen.

## Yang diterjemahkan
- Seluruh teks: judul, paragraf, daftar, tabel, blockquote, callout, caption, alt text.
- Teks yang dibaca manusia **di dalam blok kode**: contoh prompt ke Pi, materi contoh, keluaran yang diharapkan, pesan echo, komentar. Perintahnya sendiri tidak diubah.
- Frontmatter: key dipertahankan; nilai `title`, `description`, dan `text` pada `prev`/`next` diterjemahkan. Nilai yang mengandung `:` diikuti spasi **wajib** dibungkus tanda kutip tunggal.

## Aturan penulisan ulang tautan (penting)
1. Tautan halaman internal → tambahkan prefix `/en`:
   `/guide/x` → `/en/guide/x` · `/cases/x` → `/en/cases/x` · `/reference/x` → `/en/reference/x` ·
   `/plugins/` → `/en/plugins/` · `/translations/x` → `/en/translations/x` · `/journey/x` → `/en/journey/x` ·
   `/tweets/x` → `/en/tweets/x` · `/releases/` → `/en/releases/` · `/about` → `/en/about` · `/` (beranda) → `/en/`.
   Tautan ke berkas contoh relatif (`/examples/...`) juga diberi prefix.
2. **Anchor/fragment** di dalam tautan internal harus disesuaikan dengan judul English yang baru,
   memakai slug GitHub-style: huruf kecil, spasi → `-`, buang tanda baca, pertahankan huruf/angka.
   Contoh: `#kontak-dan-kerja-sama` → `#contact-and-collaboration`.
   Anker eksplisit `{#foo}` pada judul TIDAK diubah — kalau judul punya `{#foo}`, tautan tetap memakai `#foo`.
3. Diagram: `/images/diagrams/*.svg` → `/en/images/diagrams/*.svg` (versi English disiapkan terpisah).
   Gambar lain (foto/screenshot) tetap `/images/...`.
4. URL unduhan contoh: `https://buku-pi-dariargakuka.netlify.app/examples/` → `https://buku-pi-dariargakuka.netlify.app/en/examples/`.
5. Tautan eksternal (pi.dev, GitHub, creativecommons, dsb.) tidak diubah.

## Batas berkas
- Hanya menulis di dalam `docs/en/`. Jangan menyentuh berkas lain (termasuk berkas Bahasa Indonesia).

## Verifikasi sebelum selesai
- Tidak ada kalimat Bahasa Indonesia yang tersisa (kecuali nama diri dan kutipan judul asli).
- Semua tautan internal sudah berprefix `/en`, anchor cocok dengan judul English.
- Blok kode & frontmatter tetap valid; jumlah heading/daftar/tabel sama dengan sumber.
- Laporkan: per berkas — baris sumber → baris hasil, dan daftar anchor yang Anda sesuaikan.
