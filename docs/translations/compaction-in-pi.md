---
title: Mekanisme pemadatan konteks di Pi
description: Terjemahan bahasa Indonesia lengkap dari artikel resmi Earendil Engineering “How Compaction Works in Pi”.
prev:
  text: Sesi yang tidak bisa Anda bawa
  link: /translations/session-portability
next:
  text: Prompt cache pada Agent
  link: /translations/prompt-caching
---

<span class="library-status">Terjemahan berlisensi resmi Earendil · 02</span>

# Mekanisme pemadatan konteks di Pi

> - **Judul asli** *How Compaction Works in Pi*
> - **Penulis** Earendil Engineering `<rfc@earendil.com>`
> - **Tanggal terbit** 2026-08-13
> - **Alamat asli** [earendil.com/posts/compaction-in-pi](https://earendil.com/posts/compaction-in-pi/)
> - **Catatan lisensi** Diadaptasi dan diterjemahkan dengan izin dari Earendil (*Adapted and translated with permission from Earendil.*)
> - **Lisensi terjemahan** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)

Jika Anda pernah menjalani sesi pemrograman yang sangat panjang di agent pemrograman seperti [Pi](https://pi.dev), Claude Code, atau Codex, Anda pasti pernah memicu pemadatan konteks. Artikel ini menjelaskan cara kerja pemadatan dan kapan Pi membutuhkannya.

## Satu percakapan LLM

[Jendela konteks](https://en.wikipedia.org/wiki/Context_window) pada model bahasa besar (LLM) bersifat terbatas. Jendela konteks adalah hal yang dapat “dilihat” model saat menghasilkan balasan. [Arsitektur Transformer](https://en.wikipedia.org/wiki/Transformer_(deep_learning)) yang dipakai LLM membatasi jumlah input yang dapat diprosesnya. Input pada sesi agent pemrograman mencakup semua pesan dan pemanggilan tool sebelumnya, dan terus bertambah seiring pekerjaan berlanjut. Begitu input melampaui jendela konteks, LLM akan menolak permintaan tersebut.

Saat berinteraksi dengan agent pemrograman seperti Pi, agent mengirim permintaan ke LLM dan menerima balasan. Setiap permintaan mencakup system prompt, file yang sudah dimuat seperti [`AGENTS.md`](https://agents.md/), definisi tool, dan riwayat percakapan.

Permintaan pertama yang dikirim agent pemrograman ke LLM mencakup konteks awal ini beserta pesan pertama pengguna.

```text
Permintaan 1:
[Sistem][Tool][Pengguna]
```

Ini memulai sebuah giliran (turn). LLM mungkin lebih dulu mengembalikan pesan asisten yang berisi pemanggilan tool. Program agent menjalankan pemanggilan itu, lalu mengirim percakapan lengkap termasuk hasil tool ke LLM, dan menerima pesan asisten berikutnya. Ketika asisten selesai mengeluarkan respons, giliran itu berakhir.

```text
Setelah permintaan 1 selesai:
[Sistem][Tool][Pengguna][Asisten: pemanggilan tool][hasil tool][Asisten]
               <------------------------------>     ^         <------>
                     LLM mengembalikan            |     LLM mengembalikan
                                                  |
                                            Agent menghasilkan
```

Kita melanjutkan pekerjaan dan mengirim pesan lain.

```text
Permintaan 2:
[Sistem][Tool][Pengguna][Asisten: pemanggilan tool][hasil tool][Asisten][Pengguna]
                                                                           ^
                                                                 pesan pengguna baru
```

Setiap giliran membuat percakapan semakin panjang. Pada akhirnya, riwayat akan melampaui batas konteks. Permintaan berikutnya akan mengembalikan galat seperti `Request exceeds the maximum size` (permintaan melampaui ukuran maksimum).

```text
[Sistem][Tool][Pengguna][Asisten][……][hasil tool][Pengguna]
                                      ^
                            melampaui jendela konteks
```

## Menangani luapan konteks

Ketika percakapan yang ada tidak bisa dilanjutkan apa adanya, kita punya dua pilihan.

1. Memulai percakapan kosong yang baru tanpa konteks yang sudah terkumpul. Ini membuang riwayat, termasuk keputusan sebelumnya dan pekerjaan yang belum selesai. Langkah ini tetap bisa menjadi pilihan yang baik, karena [semakin panjang konteks, semakin menurun kualitas keluaran LLM](https://www.trychroma.com/research/context-rot).
2. Jika kita ingin melanjutkan percakapan ini, kita perlu membuat representasi yang lebih kecil untuk konteks percakapan. Itulah yang dilakukan pemadatan.

## Pemadatan

Secara teori, pemadatan dapat diwujudkan dengan banyak cara. Misalnya, kita bisa menulis fungsi deterministik yang mempertahankan sebagian isi percakapan dan membuang sisanya. Namun dalam praktiknya, pemadatan biasanya dilakukan melalui satu permintaan LLM untuk merangkum riwayat percakapan.

Pemadatan menggantikan sebagian riwayat dengan representasi yang sudah dipadatkan, sehingga memberi ruang bagi pesan dan pemanggilan tool berikutnya.

```text
[Sistem][Tool][hasil pemadatan][Pengguna]
                                   ^
                             pesan baru
```

## Implementasi di Pi

Mari kita lihat lebih dekat bagaimana Pi [mewujudkan pemadatan](https://pi.dev/docs/latest/compaction#summary-format).

Ketika percakapan menjadi terlalu panjang, Pi memakai pemadatan untuk merangkum bagian yang lebih awal, sambil mempertahankan pekerjaan terkini. Ketika ukuran konteks mendekati kapasitas total jendela konteks, pemadatan terpicu secara otomatis; pengguna juga dapat memicunya secara manual dengan perintah `/compact`.

Pi memeriksa apakah pemadatan otomatis diperlukan setelah suatu giliran selesai. Sebelum itu, setiap permintaan terus menambahkan isi di akhir prompt yang ada, sehingga prefiks yang sudah di-cache dapat dipakai ulang. Jika Pi menemui galat luapan konteks di tengah giliran, ia juga dapat menjalankan pemadatan di tengah giliran tersebut.

Saat memadatkan, Pi mempertahankan sejumlah pesan terbaru apa adanya.

```text
Sebelum pemadatan:
[Sistem + Tool][giliran lebih awal][pesan terbaru yang dipertahankan]
```

Karena Pi memakai [anggaran token yang dapat dikonfigurasi](https://pi.dev/docs/latest/compaction#when-it-triggers), jumlah pesan yang benar-benar dipertahankan tidak tetap. Pi saat ini secara bawaan mempertahankan 20.000 token, kira-kira setara dengan 5 sampai 20 giliran. Semua pesan sebelum titik pemisah ini akan diambil, diserialkan, lalu diringkas.

## Prompt pemadatan Pi

Bagi agent pemrograman, ringkasan yang baik idealnya berfungsi seperti laporan serah terima antar shift. Prompt pemadatan Pi menekankan bahwa sebagian besar isi konteks yang ada sudah tidak relevan; permintaan LLM berikutnya sebaiknya hanya membawa konteks yang masih penting.

Karena itu, permintaan pemadatan yang dikirim Pi berbeda dari permintaan percakapan biasa.

1. System prompt yang dipakai permintaan pemadatan mandiri berbeda. Ia tidak memberi tahu LLM “Anda adalah asisten pemrograman yang profesional”, melainkan memberi tahu: [“Anda adalah asisten peringkas konteks.”](https://github.com/earendil-works/pi/blob/47610217098d9ba8f22d223fa7c1413f9f5fd759/packages/coding-agent/src/core/compaction/utils.ts#L152-L158)
2. Pesan pengguna dalam permintaan pemadatan juga berbeda. Pesan itu meminta pembuatan [“ringkasan terstruktur tentang cabang percakapan ini, untuk dipakai sebagai konteks saat kembali nanti.”](https://github.com/earendil-works/pi/blob/47610217098d9ba8f22d223fa7c1413f9f5fd759/packages/coding-agent/src/core/compaction/compaction.ts#L463-L498) Prompt tersebut menetapkan bagian seperti tujuan, kemajuan, dan keputusan penting.
3. Ini adalah permintaan mandiri yang tidak memakai riwayat percakapan yang ada, sehingga ia dapat memakai LLM lain tanpa menimbulkan biaya yang tidak perlu.

Hasil pemadatan ditambahkan ke sesi Pi sebagai catatan pemadatan, lalu sesi dapat dilanjutkan. Setelah permintaan pemadatan selesai, konteks sudah dipadatkan.

```text
Setelah pemadatan:
[Sistem][Tool][ringkasan][giliran terbaru][pesan pengguna baru]
```

Saat ini, konteks percakapan kembali memiliki ruang untuk menampung lebih banyak pesan.

Pi menyimpan ringkasan pemadatan dalam bentuk teks biasa di dalam sesi. Dengan begitu, konteks yang sudah dipadatkan tetap dapat dibaca dan [portabel](./session-portability), karena kita dapat berganti model di Pi dan terus memakai ringkasan tersebut.

## Pemadatan dan prompt cache

Provider LLM memakai [prompt cache](./prompt-caching) untuk menurunkan biaya permintaan berulang dalam percakapan yang sama. Dalam sesi pemrograman yang aktif, kita membayar lebih murah untuk konteks yang sudah pernah dihasilkan model. Cache ini menuntut kecocokan prefiks yang persis, sehingga pemadatan merusak prompt cache.

```text
Cache sebelum pemadatan:
[Sistem][Tool][riwayat lebih awal][giliran terbaru yang dipertahankan]
<------------------ prefiks yang di-cache ------------------>

Permintaan pertama setelah pemadatan:
[Sistem][Tool][ringkasan][giliran terbaru yang dipertahankan][pesan pengguna baru]
<-- dapat dipakai ulang -->^
                           |
              token pertama yang berubah
                           |
                           +-- semua hal mulai dari sini harus dihitung ulang
```

Giliran yang dipertahankan masih berisi token yang sama, tetapi kini muncul setelah prefiks yang berbeda, sehingga status yang di-cache sebelumnya tidak dapat dipakai ulang.

Permintaan baru setelah pemadatan mulai kembali memperoleh manfaat prompt cache.

## Eksperimen

Pi sangat dapat diperluas dan dibentuk, sehingga Anda dapat mengganti mekanisme pemadatan bawaannya dengan mekanisme Anda sendiri. Jika ingin menguji mekanisme pemadatan lain, Anda bisa meminta Pi membuat Extension dengan prompt pemadatan khusus.

::: info Catatan penerjemah
Artikel ini adalah terjemahan bahasa Indonesia lengkap dari teks asli Earendil Engineering. Terjemahan bahasa Indonesia beserta bagian adaptasinya diterbitkan di bawah [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans) berdasarkan lisensi; hak cipta teks asli bahasa Inggris dimiliki oleh Earendil. Jika ada ambiguitas, [teks asli bahasa Inggris](https://earendil.com/posts/compaction-in-pi/) yang menjadi acuan.
:::

## Baca selanjutnya

- [Teks asli bahasa Inggris: How Compaction Works in Pi](https://earendil.com/posts/compaction-in-pi/)
- [Sebelumnya: Sesi yang tidak bisa Anda bawa](/translations/session-portability)
- [Berikutnya: Prompt cache pada Agent](/translations/prompt-caching)
