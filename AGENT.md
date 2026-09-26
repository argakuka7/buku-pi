# Panduan Repositori — Buku Pi (Edisi Bahasa Indonesia)

## Posisi proyek

Ini adalah edisi Bahasa Indonesia dari **Buku Pi**: panduan tidak resmi Pi Coding Agent untuk
pemula, dibangun dengan VitePress. Alur belajar tetap sama dengan sumbernya: instalasi, login, dan
tugas pertama yang bisa diverifikasi, lalu file & sesi, konteks, Skill, Extension, subagent, tugas
panjang, dan verifikasi keamanan.

Proyek sumber: <https://github.com/xiaomoBoy/pi-bluebook> (MIT License).
Edisi ini adalah karya turunan; atribusi tidak boleh dihapus.

## Struktur

- `docs/` — akar VitePress. Satu bahasa: Indonesia.
  - `docs/.vitepress/config.mts` — bahasa, tema, navigasi, SEO, hreflang, footer.
  - `docs/.vitepress/config/navigation.mts` — nav + sidebar (satu-satunya tempat urutan belajar).
  - `docs/.vitepress/theme/` — tema kustom dan komponen (mis. `PiReleaseExplorer.vue`).
  - `docs/.vitepress/data/pi-releases.json` — data changelog resmi; **tetap bahasa Inggris**.
  - `docs/public/examples/` — berkas contoh yang diunduh pembaca (Bahasa Indonesia).
  - `docs/public/images/`, `docs/public/images/diagrams/` — aset.
- `.translation/` — aturan terjemahan (`BRIEF.md`) dan glosarium (`GLOSSARY.md`).
- `scripts/` — pemeriksa konten, konsistensi judul, SEO, dan ID hasil build.
- `docs/diagrams/*.html` — sumber diagram dari proyek asal; tidak ikut dibangun/di-deploy.

## Perintah

```bash
npm install
npm run docs:dev            # server pengembangan
npm run docs:build          # build produksi (docs/.vitepress/dist)
npm run check:content       # semua rujukan lokal bisa diselesaikan
npm run check:consistency   # label nav & prev/next cocok dengan judul halaman
npm run check:pages         # anchor/ID di HTML hasil build benar-benar ada
npm run check               # konten + konsistensi + build + SEO + anchor
npm run sync:pi-releases    # memperbarui data changelog dari sumber resmi
```

## Aturan penulisan

- Bahasa Indonesia, "Anda" untuk pembaca, istilah teknis mengikuti `.translation/GLOSSARY.md`.
- Gunakan **"file"**, bukan "berkas", agar seragam.
- Judul halaman (`frontmatter.title`) adalah sumber kebenaran untuk label navigasi; label sidebar
  boleh lebih pendek, tetapi label `prev.text`/`next.text` harus sama dengan judul halaman tujuan
  (jalankan `npm run check:consistency -- --fix`).
- Di dalam blok kode: perintah, flag, path, dan identifier tidak diubah; teks yang dibaca manusia
  (prompt contoh, materi, keluaran yang diharapkan, komentar) ditulis dalam Bahasa Indonesia.
- Frontmatter: nilai yang mengandung `:` diikuti spasi **harus** dibungkus tanda kutip tunggal.
- Jangan mengubah anchor/ID hasil build tanpa memperbarui tautannya; `npm run check:pages`
  memverifikasi hal ini.

## Batas perubahan

- Jangan menambahkan locale kedua tanpa menyesuaikan navigasi, pencarian, dan `transformPageData`.
- Jangan menimpa data `pi-releases.json` dengan terjemahan: isinya mengikuti changelog resmi.
- Perubahan pada `.vitepress/config.mts` memengaruhi SEO dan URL kanonik; uji dengan
  `PI_SITE_URL` yang sesuai sebelum deploy.
