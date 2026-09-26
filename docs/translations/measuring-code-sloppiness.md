---
title: 'Jika pemrograman sudah terpecahkan, lalu apa? — Mengukur kekasaran kode'
description: 'Terjemahan bahasa Indonesia lengkap dari artikel resmi Earendil “If coding is solved, what now?: Measuring the sloppiness of code”; membahas cara mengukur kepanjangan, erosi, dan penumpukan pada kode yang dihasilkan AI.'
prev:
  text: Undangan untuk Memulai Korespondensi
  link: /translations/invitation
next:
  text: Terjemahan Berlisensi Resmi Earendil
  link: /translations/
---

<span class="library-status">Terjemahan berlisensi resmi Earendil · 11</span>

# Jika pemrograman sudah terpecahkan, lalu apa? — Mengukur kekasaran kode

> - **Judul asli** *If coding is solved, what now?: Measuring the sloppiness of code*
> - **Penulis** Sebastian, Earendil `<sebastian@earendil.com>`
> - **Tanggal terbit** 2026-09-10
> - **Alamat asli** [earendil.com/posts/measuring-code-sloppiness](https://earendil.com/posts/measuring-code-sloppiness/)
> - **Catatan lisensi** Diadaptasi dan diterjemahkan dengan izin dari Earendil (*Adapted and translated with permission from Earendil.*)
> - **Lisensi terjemahan** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)

LLM kini nyaris sempurna dalam menghasilkan kode, tetapi persoalannya tidak berhenti di situ. Kode yang benar secara bentuk belum tentu bebas dari abstraksi yang tidak perlu, duplikasi, atau keputusan buruk secara keseluruhan. Ini bukan pengamatan yang baru: sebagian besar orang yang pernah mengembangkan proyek dengan cara vibe coding (menulis kode berdasarkan feeling) sudah menemukan bahwa setiap penambahan fitur kadang membuat jumlah baris kode (LOC) membengkak dengan cepat.

Hal ini melemahkan otonomi manusia, karena pada proyek yang bertambah jutaan baris kode setiap bulan, manusia sulit mengikutinya.<sup id="fnref-1"><a href="#fn-1">1</a></sup> Sebagian orang mungkin berkata bahwa ini sama sekali bukan masalah, karena mereka percaya Agent mereka mampu menanganinya. Saya harus menyampaikan kabar buruk: Agent sebenarnya juga tidak benar-benar mampu menangani kode yang kasar ini.

Saya berlatar belakang fisika, sehingga saya terbiasa memakai pendekatan eksperimental dan kuantitatif saat memecahkan masalah. Ketika baru bergabung dengan Earendil, tugas saya adalah mencari tahu cara mengukur tingkat kekasaran kode. Naluri pertama saya adalah menelusuri literatur yang relevan, lalu melihat apa yang sedang dilakukan perusahaan lain.

Sejujurnya, selain beberapa makalah penelitian yang sangat berwawasan, saya kecewa melihat seberapa besar industri ini masih bertindak “berdasarkan feeling”. Selama riset dan di X, saya terus melihat promosi seperti “Agent pemrograman end-to-end”, “AI yang bukan hanya menyarankan kode, tetapi juga mengirimnya ke produksi”, atau “evaluasi tingkat manusia tanpa biaya tingkat manusia”. Seperti semua cerita yang dikemas dengan baik, klaim-klaim itu juga memuat sebagian fakta.

LLM memang mampu menulis kode yang **hampir** sepenuhnya benar. Ini karena kode memiliki sifat yang dapat diskalakan dan diverifikasi. Meminta LLM menghasilkan kode, lalu memeriksanya dengan pengujian tersembunyi, adalah hal yang cukup langsung dan menghasilkan sinyal imbalan yang jelas. Sebaliknya, menilai “tingkat kekasaran” kode semacam itu sering menuntut intuisi dan selera manusia, dan secara umum sangat sulit. Menurut saya, cara terbaik menjelaskan sebabnya adalah meninjau satu per satu metode pengukuran yang mungkin dipakai.

**Biarkan AI menjadi juri:** Ini mungkin metode paling umum di industri untuk menilai kualitas kode, tetapi menurut pengamatan saya, metode ini jarang berhasil. Pendekatan paling naif adalah meminta model menilai kualitas kode pada skala 1 sampai 10; cara ini pada dasarnya setara dengan pembangkit bilangan acak. Pendekatan yang lebih halus adalah menyerahkan opsi A dan opsi B kepada model juri, lalu memintanya menentukan opsi mana yang lebih disukai; tetapi masalahnya, setelah label A/B atau urutan penyajian kedua opsi ditukar, [preferensi model bisa berubah](https://arxiv.org/pdf/2604.16790). Di sini saya terdengar agak sinis, dan efek ini tidak begitu kentara pada model yang lebih besar, tetapi persoalan intinya tetap berlaku. Membiarkan LLM menilai kode yang ditulisnya sendiri tidak dapat menggantikan evaluasi yang benar-benar andal. Meskipun arah seperti rubrik penilaian atau meminta LLM menulis pengujian merupakan upaya yang menarik, semuanya masih jauh dari benar-benar menghapus kode yang kasar.

**Biarkan manusia menilai AI:** Jika kita mengesampingkan fakta bahwa kemampuan software engineer sangat beragam, ini akan menjadi cara terbaik untuk memastikan kode tetap dapat dibaca manusia. Kekurangannya, baik untuk melatih AI maupun untuk membangun benchmark besar yang mencakup banyak penyedia model dan Agent Harness, cara ini tidak dapat diskalakan.<sup id="fnref-2"><a href="#fn-2">2</a></sup>

**Metode paling sederhana:** Dalam riset dan pengujian saya, mengukur langsung perubahan jumlah baris kode ternyata menjadi indikator kekasaran yang sangat efektif. Ironisnya, begitu kita mulai mengoptimalkannya secara khusus, indikator itu [kehilangan maknanya sebagai ukuran](https://en.wikipedia.org/wiki/Goodhart%27s_law).

Dua metrik berikut berasal dari makalah [SlopCodeBench](https://arxiv.org/html/2603.24755v1#A7). Keduanya mampu membedakan dengan baik antara basis kode yang sudah mapan dan kode kasar hasil LLM, sehingga tampak menjanjikan.

**Tingkat kepanjangan (Verbosity):** Berupaya mengukur proporsi baris kode yang berulang dan baris kode yang panjang secara tidak perlu.<sup id="fnref-3"><a href="#fn-3">3</a></sup>

<div class="translation-formula" dir="ltr">
  <code>Verbosity = |AST-Grep flagged lines ∪ clone lines| / LOC</code>
</div>

Artinya, pembilangnya adalah jumlah baris dalam gabungan baris kode yang ditandai AST-Grep dan baris kode yang terduplikasi, sedangkan penyebutnya adalah seluruh baris kode.

**Tingkat erosi (Erosion):** Berupaya mengukur seberapa besar bobot massa sebuah basis kode terpusat pada sedikit fungsi yang besar dan rumit.

<div class="translation-formula" dir="ltr">
  <code>mass(f) = CC(f) × √SLOC(f)</code>
</div>

Di sini, `f` mewakili fungsi, SLOC adalah jumlah baris kode sumber, dan `CC(f)` adalah [kompleksitas siklomatik](https://ieeexplore.ieee.org/document/1702388) fungsi tersebut.

<div class="translation-formula" dir="ltr">
  <code>Erosion = Σ<sub>f: CC(f) &gt; 10</sub> mass(f) / Σ<sub>f</sub> mass(f)</code>
</div>

Tingkat erosi adalah: proporsi jumlah bobot massa fungsi-fungsi dengan kompleksitas siklomatik di atas 10 terhadap jumlah bobot massa seluruh fungsi.

Jika kode yang dihasilkan selama evaluasi SlopCodeBench dibandingkan dengan rata-rata tingkat kepanjangan dan tingkat erosi sekumpulan basis kode yang sudah mapan, perbedaannya sangat mencolok. Rata-rata tingkat kepanjangan basis kode yang sudah mapan adalah `0.15 ± 0.06`, sedangkan kode Agent `0.33 ± 0.10`. Untuk tingkat erosi, basis kode yang sudah mapan `0.31 ± 0.17`, sedangkan kode Agent `0.68 ± 0.20`. Secara rata-rata, tingkat kepanjangan dan erosi kode Agent kira-kira dua kali lipat kode manusia. Setelah itu, saya juga meneliti beberapa proyek saya sendiri yang dikerjakan dengan vibe coding; banyak di antaranya memiliki tingkat kepanjangan hingga `0.4` dan tingkat erosi hingga `0.75`. Jadi, hasil ini kemungkinan besar bukan sekadar artefak dari metode evaluasinya.<sup id="fnref-4"><a href="#fn-4">4</a></sup>

Untuk kembali ke pertanyaan mengapa Agent tidak benar-benar mampu menangani kode kasar sendirian, kita perlu melihat cara SlopCodeBench mengevaluasi. Benchmark pemrograman lain biasanya memberi Agent daftar instruksi lengkap sejak awal, lalu menyiapkan sekumpulan pengujian tersembunyi untuk menilai apakah program memenuhi syarat; SlopCodeBench justru sebaliknya. Benchmark ini mengatur berbagai giliran iterasi instruksi dan pengujian, serta membersihkan konteks model di antara titik pemeriksaan yang berbeda. Ini lebih mendekati proses iteratif manusia saat benar-benar memakai agent pemrograman. Akibatnya, keputusan pemrograman yang buruk terus menumpuk seiring waktu. Jika diukur dengan standar penyelesaian end-to-end yang lengkap, yaitu “semua hasil pengujian di seluruh titik pemeriksaan harus memenuhi syarat”, bahkan model paling canggih pun memiliki tingkat keberhasilan end-to-end penuh sebesar `0%`.<sup id="fnref-5"><a href="#fn-5">5</a></sup> Bagi mereka yang setiap hari dengan senang hati menambahkan puluhan ribu bahkan ratusan ribu baris kode, ini seharusnya menjadi sinyal peringatan. Tentu saja, di sini tetap ada catatan lazim, misalnya pengujian yang mungkin terlalu ketat, atau deskripsi soal tertentu yang agak ambigu; tetapi tren keseluruhannya tetap berlaku.

Semoga setelah memahami metrik-metrik ini, Anda dapat melihat lebih jelas mengapa menilai tingkat kekasaran kode begitu sulit, dan mengapa intuisi serta selera manusia tetap masuk ke dalam proses evaluasi, baik secara tersirat maupun tersurat.

Masih ada beberapa arah yang tampak menjanjikan untuk terus ditelusuri, misalnya tingkat kopling antar fungsi, volume perubahan kode, kohesi, dan sebagainya. Jika Anda juga meneliti evaluasi dan bersedia berbincang, saya senang berdiskusi: [`sebastian@earendil.com`](mailto:sebastian@earendil.com)

## Catatan kaki

1. <span id="fn-1">Ini mengingatkan saya pada sebuah ungkapan: “Mengukur kemajuan pemrograman dengan jumlah baris kode sama seperti mengukur kemajuan membangun pesawat dengan beratnya.”</span> [Kembali ke teks utama](#fnref-1)
2. <span id="fn-2">Saya tidak ingin memaksa siapa pun meninjau jutaan baris kode hanya untuk mendapatkan peringkat penyedia model yang terus berubah.</span> [Kembali ke teks utama](#fnref-2)
3. <span id="fn-3">Aturan di sini adalah sekumpulan heuristik buatan manusia yang diwujudkan melalui [AST-Grep](https://ast-grep.github.io/), yang sekali lagi menunjukkan adanya faktor manusia di dalamnya.</span> [Kembali ke teks utama](#fnref-3)
4. <span id="fn-4">Namun, ada satu proyek terbuka yang terkenal “sangat mengandalkan feeling” dan skornya pada kedua metrik ini tidak terlalu tinggi; ini mungkin karena tingkat kopling antar fungsinya sangat tinggi, dan/atau banyaknya fungsi yang tidak saling terkait menurunkan nilai rata-ratanya.</span> [Kembali ke teks utama](#fnref-4)
5. <span id="fn-5">Belum diuji pada Fable 5.1 atau Astra; sudah diuji pada model seperti GPT 5.6 sol xhigh.</span> [Kembali ke teks utama](#fnref-5)

::: info Catatan penerjemah
Artikel ini adalah terjemahan bahasa Indonesia lengkap dari teks asli Earendil. Terjemahan bahasa Indonesia beserta bagian adaptasinya diterbitkan di bawah [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans) berdasarkan lisensi; jika ada ambiguitas, [teks asli bahasa Inggris](https://earendil.com/posts/measuring-code-sloppiness/) yang menjadi acuan.
:::

## Baca selanjutnya

- [Teks asli bahasa Inggris: If coding is solved, what now?: Measuring the sloppiness of code](https://earendil.com/posts/measuring-code-sloppiness/)
- [Sebelumnya: Undangan untuk memulai korespondensi](/translations/invitation)
- [Kembali: Daftar terjemahan berlisensi resmi](/translations/)
