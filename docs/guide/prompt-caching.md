---
title: Pengantar prompt cache
description: Memahami mengapa konteks yang berulang bisa lebih cepat dan lebih hemat, serta perubahan apa saja yang membuat cache tidak berlaku.
prev:
  text: Konteks dan pemadatan
  link: /guide/context-and-compaction
next:
  text: Skill, Extension, dan Pi Package
  link: /guide/skills-extensions-packages
---

<span class="library-status">MODULE 03 · STEP 09 · pelajaran pemahaman</span>

# Pengantar prompt cache

::: info Jenis pelajaran ini
Ini pelajaran pemahaman; Anda tidak diminta mengetik perintah, dan tidak diminta mengganti model atau memadatkan sesi hanya untuk mengubah angka cache.
:::

Bab ini tidak meminta Anda melakukan debug cache. Ia hanya membantu Anda memahami informasi seputar token, cache, dan cost di bagian bawah Pi, serta mengapa “menghapus sedikit konteks” belum tentu langsung lebih murah.

Field penggunaan yang dikembalikan tiap model dan provider tidak sepenuhnya sama. Jika antarmuka tidak menampilkan angka cache tertentu, itu bukan berarti Pi rusak, dan tidak sepadan mengganti model hanya agar angka itu muncul.

## Cache memakai ulang apa

Setiap kali model membalas, ia harus memproses input yang panjang. Dalam percakapan yang berurutan, bagian awal input putaran baru sering kali sama persis dengan putaran sebelumnya. Provider model yang mendukung prompt cache dapat memakai ulang prefix yang sudah diproses itu, sehingga mengurangi perhitungan berulang.

Bayangkan seperti buku yang sudah dibuka di halaman tertentu. Selama halaman-halaman sebelumnya tidak berubah, pembacaan bisa dilanjutkan; jika versi buku, urutan bab, atau isi sebelumnya berubah, maka perlu diproses ulang.

## Perubahan apa yang mudah memutus cache

- Mengganti model atau provider.
- Definisi tool, system prompt, atau konteks proyek berubah.
- Beralih ke branch lain dari node yang lebih awal di pohon sesi. Prefix bersama sebelum cabang masih mungkin dipakai ulang; hit yang sebenarnya bergantung pada provider dan retensi cache.
- Menjalankan pemadatan konteks, sehingga teks asli awal digantikan ringkasan baru.
- Cache melewati masa retensi provider.

Penagihan, masa berlaku, dan cara penyajian tiap model dan provider bisa berubah; bab ini tidak menyediakan daftar harga tetap. Saat perlu menghitung biaya, lihatlah keterangan resmi provider yang benar-benar Anda pakai pada periode tersebut.

## Apa dampaknya bagi pemakaian sehari-hari

Pertama, jangan menghapus riwayat atau memaksa pemadatan setiap beberapa putaran hanya demi mengejar konteks yang tampak lebih kecil. Tindakan itu bisa sekaligus menghilangkan detail dan prefix cache yang sudah ada.

Kedua, jangan menganggap rasio cache hit sebagai kualitas tugas. Ia hanya mencerminkan berapa banyak input yang dipakai ulang, dan tidak membuktikan kode benar, artikel enak dibaca, atau file tidak salah diubah.

Terakhir, tugas panjang tetap harus kembali ke hasil yang dapat diverifikasi. Cache membantu model memproses prefix berulang dengan lebih efisien, sedangkan file, test, riwayat Git, dan pemeriksaan manusia yang membantu Anda memastikan tugas sudah selesai.

## Empat hal yang mudah tertukar

| Nama | Menyelesaikan masalah apa | Tidak membuktikan apa |
| --- | --- | --- |
| Prompt cache | Mengurangi pemrosesan ulang prefix input yang sama | Tugas benar, hasil lengkap |
| Pemadatan konteks | Menggantikan konten yang lebih awal dengan ringkasan saat jendela terbatas | Detail awal terjaga tanpa kehilangan |
| Penyimpanan sesi | Membuat Anda dapat menemukan dan melanjutkan percakapan nanti | File di disk bisa kembali ke versi lama |
| Versi file dan pencadangan | Membandingkan, memulihkan, dan meninjau hasil kerja nyata | Model masih mengingat seluruh alasan saat itu |

## Verifikasi pelajaran ini

Nilai dua skenario berikut:

1. Cache hit sangat tinggi, tetapi file keluaran melewatkan dua item. Apakah tugasnya selesai? — Belum, Anda harus kembali memeriksa input, output, dan aturan verifikasi.
2. Angka cache sangat rendah, tetapi test, selisih file, dan pemeriksaan manusia semuanya lolos. Perlu mengulang tugas demi menaikkan rasio hit? — Tidak.

Selama Anda tidak lagi menilai kualitas tugas dengan angka cache, dan tahu bahwa pemeriksaan kualitas harus kembali ke hasil nyata, pelajaran ini sudah lulus.

Untuk memahami mekanismenya lebih dalam, lanjutkan membaca terjemahan berlisensi resmi [Prompt cache pada Agent](/translations/prompt-caching).

### Dasar bab ini

- [Petunjuk penggunaan Pi](https://pi.dev/docs/latest/usage)
- [Prompt Caching In Agents](https://earendil.com/posts/prompt-caching/)
