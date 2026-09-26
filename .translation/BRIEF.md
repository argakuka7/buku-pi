# ID-TRANSLATION BRIEF — Pi Bluebook → Bahasa Indonesia

Tugas: terjemahkan konten situs dokumentasi VitePress dari **Bahasa Mandarin Sederhana (zh-CN)** ke
**Bahasa Indonesia yang natural, akurat, dan enak dibaca** (bukan terjemahan kaku per kata).

## Aturan wajib
1. **Jangan mengubah struktur teknis.** Pertahankan apa adanya:
   - frontmatter YAML: nama key, urutan, dan struktur. Terjemahkan hanya nilai yang manusiawi
     (`title`, `description`), biarkan `layout`, `outline`, `head`, `pageClass`, dsb.
   - blok kode (```), inline code (`...`), nama file, path, URL, perintah shell, nama paket.
   - sintaks VitePress: `::: tip`, `::: warning`, `::: details`, `<!-- -->`, komponen Vue
     (`<PiReleaseExplorer />`), anker `{#anchor}`, dan tautan markdown.
   - Gambar: path `/images/...` tidak berubah. Alt text boleh diterjemahkan.
2. **Terjemahkan SEMUA teks prosais**, termasuk: judul H1/H2/H3, paragraf, item daftar, isi tabel,
   teks di dalam blok `::: tip/warning/danger/details`, caption, alt text, teks tombol.
3. **Jangan memotong isi.** Keluaran harus mencakup seluruh isi file sumber, panjang serupa.
   Jangan meringkas, jangan menambah opini, jangan menghilangkan paragraf.
4. **Nada & gaya**: instruktif, tenang, jelas — seperti buku panduan teknis berbahasa Indonesia.
   Gunakan "Anda" untuk pembaca. Hindari kata serapan yang aneh; gunakan istilah teknis Inggris yang
   lazim dipakai praktisi Indonesia (lihat GLOSSARY).
5. **Istilah teknis**: ikuti `.translation/GLOSSARY.md` secara konsisten (dibuat agar seragam antar
   batch). Bila ragu, pertahankan istilah Inggris aslinya.
6. **Karakter Mandarin tidak boleh tersisa**, kecuali: nama diri Tionghoa yang memang dipertahankan
   (mis. "小墨同学" pada atribusi penulis), dan kutipan asli yang sengaja ditampilkan.
7. **Jangan menyentuh hal di luar file yang ditugaskan.** Jangan mengubah file lain.
8. Di dalam blok kode, bedakan dua hal:
   - **JANGAN diubah**: perintah, flag, path, nama paket, identifier, sintaks, konfigurasi.
   - **TERJEMAHKAN**: teks yang dibaca atau diketik manusia — contoh prompt yang diberikan ke Pi,
     materi/contoh dokumen, keluaran yang diharapkan, pesan log berbahasa Mandarin, dan komentar.
   Tujuannya: pembaca Indonesia harus bisa meniru langkah-langkahnya tanpa perlu paham Bahasa Mandarin.
   Jika sebuah contoh materi adalah file terpisah (mis. `input/notulen-rapat.md`), terjemahkan
   isi teks contohnya; nama file boleh disesuaikan ke Bahasa Indonesia selama konsisten di seluruh file.
9. Kutipan keluaran Pi yang berbahasa Mandarin (mis. "Pi 已连接") boleh diterjemahkan, tetapi bila
   kutipan itu adalah bukti kecocokan (output yang harus sama persis), tambahkan padanan Indonesia
   di sampingnya, mis. `"Pi 已连接" ("Pi tersambung")`.

## Frontmatter: penting
- Jika nilai YAML mengandung karakter `:` diikuti spasi, tanda kutip, `#`, atau `[]`,
  **bungkus nilainya dengan tanda kutip tunggal**, contoh:
  `title: 'Pengantar: Mengapa membaca Bluebook Pi ini'`.
  Jika tidak, frontmatter rusak dan build gagal.

## Verifikasi sebelum selesai
- Buka kembali file hasil, pastikan: (a) tidak ada paragraf Mandarin tersisa,
  (b) blok kode & tautan utuh, (c) frontmatter masih valid YAML.
- Laporkan: daftar file, jumlah baris sebelum/sesudah, dan sisa karakter Mandarin (jelaskan alasannya).
