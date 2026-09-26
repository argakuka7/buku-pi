# Panduan Pemeliharaan

Dokumen ini menjelaskan pintu masuk teknis, batas perubahan, dan pemeriksaan sebelum rilis.

## Satu pintu masuk

- `.translation/BRIEF.md` + `.translation/GLOSSARY.md` — aturan terjemahan dan istilah.
- `docs/.vitepress/config/navigation.mts` — satu-satunya tempat urutan belajar dan sidebar diatur.
- `docs/.vitepress/config.mts` — bahasa, tema, SEO, hreflang, footer, URL kanonik.
- `package.json` → `npm run check` — pemeriksaan menyeluruh sebelum deploy.

## Pekerjaan rutin

| Pekerjaan | Perintah / langkah |
| --- | --- |
| Memperbarui arsip versi Pi | `npm run sync:pi-releases`, lalu `npm run check:releases` |
| Memeriksa tautan & aset | `npm run check:content` |
| Menyelaraskan label navigasi | `npm run check:consistency -- --fix` |
| Memeriksa anchor hasil build | `npm run docs:build && npm run check:pages` |
| Merilis | `npm run deploy` (Netlify, lihat `netlify.toml`) |

## Batas perubahan

- Jangan menaruh terjemahan ke dalam `docs/.vitepress/data/pi-releases.json`; isinya mengikuti
  changelog resmi berbahasa Inggris.
- Perubahan judul halaman berdampak pada label `prev`/`next` halaman lain dan pada sidebar —
  jalankan `check:consistency` setelahnya.
- Perubahan heading berdampak pada anchor; `check:pages` memverifikasi ID yang benar-benar dirender.
- Aset di `docs/public/` disalin apa adanya; letakkan gambar dan berkas contoh di sana.

## Atribusi

Proyek sumber: <https://github.com/xiaomoBoy/pi-bluebook> (MIT) karya penulis aslinya.
Jangan menghapus kredit pada footer, `README.md`, dan `about`.
