---
title: 'Pi: Minimal tetapi Efisien'
description: Terjemahan bahasa Indonesia lengkap dari artikel resmi Earendil “Pi, Minimal and Performant”.
prev:
  text: Agent Harness Ada Banyak, tetapi yang Ini Milik Saya
  link: /translations/mine-agent-harness
next:
  text: Pi dan Lefos Resmi Dirilis
  link: /translations/announcing-pi-and-lefos
---

<span class="library-status">Terjemahan berlisensi resmi Earendil · 06</span>

# Pi: Minimal tetapi Efisien

> - **Judul asli** *Pi, Minimal and Performant*
> - **Penulis** Earendil `<rfc@earendil.com>`
> - **Tanggal terbit** 2026-08-04
> - **Alamat asli** [earendil.com/posts/pi-autoresearch-and-databricks](https://earendil.com/posts/pi-autoresearch-and-databricks/)
> - **Catatan lisensi** Diadaptasi dan diterjemahkan dengan izin dari Earendil (*Adapted and translated with permission from Earendil.*)
> - **Lisensi terjemahan** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)

## Keunggulan Pi ada pada minimalisme

AI membuat kode menjadi murah. Akibatnya, banyak perusahaan demi mengejar performa yang lebih baik mulai membangun tool yang semakin besar: prompt yang lebih panjang, orkestrasi yang lebih banyak, lebih banyak lapisan, dan lebih banyak kerumitan. Ini pada dasarnya juga menaikkan biaya penggunaan tool. Pi memilih arah yang berlawanan.

Pi adalah Harness pemrograman yang sengaja memilih jalur minimalis. Saat pertama dipakai, ia hanya memiliki 4 tool, dan [system prompt](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/src/core/system-prompt.ts#L121-L159) beserta definisi tool-nya bila digabung berjumlah kurang dari 1.000 token. Gagasan di baliknya: sebagian besar pekerjaan bisa diselesaikan dengan kemampuan dasar; jika Anda butuh lebih, bangunlah sendiri.

Semakin banyak bukti menunjukkan bahwa desain Pi bukan hanya lebih bersih, tetapi juga lebih murah dan berperforma lebih baik. Pengguna menemukan bahwa Pi asli pun dapat menghasilkan hasil terdepan di industri, bahkan tanpa memasang Extension yang disesuaikan dengan alur kerja dan kebutuhan pribadi. Studi kasus Databricks dan Shopify di bawah ini sama-sama memperoleh hasil yang ideal.

## Studi kasus

### Databricks: biaya per tugas

Databricks baru-baru ini membagikan sebuah riset: [Menguji agent pemrograman pada basis kode berjuta baris milik Databricks](https://www.databricks.com/blog/benchmarking-coding-agents-databricks-multi-million-line-codebase). Mereka ingin mengetahui agent pemrograman mana yang berkinerja terbaik pada tugas pemrograman nyata, serta bagaimana kinerja tugas berubah seiring harga.

Untuk menghindari pengaruh [benchmark eksternal yang sudah terlalu jenuh](https://arxiv.org/html/2602.16763v3), mereka membuat benchmark internal berdasarkan pekerjaan yang sering dilakukan para engineer di timnya. Hasilnya sesuai dengan perkiraan kami, tetapi mungkin mengejutkan banyak orang di industri ini. Menurut mereka, Harness yang dipakai untuk memanggil model sangat memengaruhi biaya dan kualitas; dalam banyak kasus, Harness sederhana seperti Pi tampil paling baik pada beban kerja mereka.

![Perbandingan biaya dan tingkat kelulusan tugas pada benchmark agent pemrograman Databricks](/images/translations/databricks-cost-per-task.webp)

*Perbandingan biaya dan tingkat kelulusan tugas pada benchmark agent pemrograman Databricks. Grafis: [Databricks](https://www.databricks.com/blog/benchmarking-coding-agents-databricks-multi-million-line-codebase). Gambar digunakan dengan izin dari artikel asli Earendil.*

Dengan Opus 4.8, xhigh, Pi meraih tingkat kelulusan keseluruhan tertinggi, namun dengan biaya yang jauh lebih rendah daripada Claude Code dan Codex.

#### Harness minimalis, hasilnya terukur

Keunggulan Pi adalah ia tidak membungkus model dengan banyak pengaturan bawaan dan instruksi, lalu membiarkannya tersesat dalam [hierarki instruksi](https://openai.com/index/the-instruction-hierarchy/). Pi sebisa mungkin tidak menghalangi model, sementara tim dapat menambahkan hal yang benar-benar dibutuhkan alur kerja mereka.

Riset Databricks sangat mencerahkan karena membandingkan model dan Harness secara terpisah.

Mereka melaporkan: pada tingkat pemikiran (thinking level) yang sama, ketika model yang sama dijalankan melalui Harness yang berbeda, biaya per tugas berbeda secara signifikan—dalam beberapa kasus lebih dari dua kali lipat—tetapi kualitasnya tetap. Kami menyebut ciri ini sebagai “disiplin konteks” Pi. Konteks yang dikirim Pi setiap giliran kira-kira tiga kali lebih sedikit; Pi mengelola konteks dengan lebih baik, mempertahankan working set yang lebih ringkas, dan menyelesaikan tugas dalam lebih sedikit giliran.

Kami setuju bahwa analisis biaya harus mempertimbangkan ekonomi engineering end-to-end, bukan hanya harga per token. Hal yang sama berlaku di tingkat model. Misalnya, kami mengamati bahwa menjalankan alur kerja rumit dengan Haiku 4.5 sering kali lebih mahal daripada Sonnet 4.6, terutama ketika melibatkan eksekusi kode. Sebabnya sederhana: yang pertama memerlukan lebih banyak giliran untuk berhasil menyelesaikan tugas.

Kini, kami melihat fenomena yang sama di tingkat Harness: model yang kuat dan berharga satuan lebih tinggi yang dipadukan dengan Harness berperforma tinggi bisa jadi lebih murah daripada kombinasi sebaliknya.

### Shopify membangun Pi Autoresearch: dapat diperluas lebih unggul daripada membengkak

Minimalisme adalah bagian dari inti filosofi Pi. Minimalisme berhasil karena ia tidak sama dengan kekakuan. Kenyataannya, Pi adalah salah satu infrastruktur Agent pertama yang dibangun untuk dapat diperluas dan mengedit dirinya sendiri, sekaligus digunakan secara luas.

Praktik Shopify memberi validasi eksternal lain yang berharga bagi desain Pi. Dalam [artikel Shopify Engineering](https://shopify.engineering/autoresearch), David Cortés menjelaskan bagaimana ia langsung membangun `pi-autoresearch` sebagai Pi Extension: cukup meminta Pi “membuat sebuah Autoresearch Extension”. Pi akan membaca dokumentasi Extension-nya sendiri, lalu mulai membangun alur kerja baru dari sana.

Autoresearch adalah loop otonom yang memakai agent pemrograman untuk melakukan optimasi. Setelah Anda mengusulkan perubahan, ia menjalankan eksperimen, lalu mencari tahu mana yang berhasil dan mana yang menyebabkan regresi. Selama tujuannya dapat diukur, ia mampu membuang eksperimen yang menimbulkan regresi dan terus meningkatkan hasil.

Bagi Shopify dan [pengguna lain](https://x.com/pidotdev/status/2080616483072225778?s=20), Autoresearch Extension dengan cepat menjadi tool produktivitas internal yang penting. Kasus yang dilaporkan Shopify antara lain: kecepatan unit test meningkat 300 kali, kecepatan pemasangan komponen React meningkat 20%, waktu build beberapa proyek berkurang, bahkan performa pnpm pun ikut membaik.

![Antarmuka catatan eksperimen proyek pi-autoresearch milik Shopify](/images/translations/shopify-autoresearch.webp)

*Antarmuka catatan eksperimen proyek `pi-autoresearch` milik Shopify. Sumber gambar: [davebcn87/pi-autoresearch](https://github.com/davebcn87/pi-autoresearch), digunakan dengan izin dari artikel asli Earendil.*

Poin pentingnya, Pi tidak membangun semua tool itu ke dalam produknya. Yang dilakukannya adalah membuat pengguna dapat membangunnya dengan sangat mudah. Pi tidak berasumsi bahwa vendor paling memahami alur kerja Anda lalu mencoba memasukkan setiap tool ke dalam produk; ia berasumsi bahwa Anda yang paling mengenal diri sendiri, dan menyerahkan kemampuan perluasan kepada Anda agar Anda dapat membentuk cara kerja Anda sendiri.

## Mengapa jalur minimalis lebih unggul saat ini

Sekitar setahun lalu, orang masih bisa berpendapat bahwa Harness bawaan memiliki keunggulan struktural karena model dibangun di sekitarnya. Namun argumen itu semakin melemah.

Model terdepan saat ini umumnya mampu memahami dan bertindak dalam lingkungan pemrograman berupa terminal atau yang mirip terminal. Langkah Anthropic yang baru-baru ini memangkas system prompt Claude Code hingga 80% adalah sinyal yang jelas. Karena itu, pertanyaannya bergeser dari “seberapa bawaan Harness bagi model” menjadi “bagaimana Harness mengelola konteks, menghindari redundansi, dan bertindak melalui kemampuan dasar yang bersih”. Model membutuhkan antarmuka lingkungan yang jelas, dan juga Harness yang tidak menyia-nyiakan konteks.

Pi menawarkan tepat hal-hal itu: overhead prompt dan konteks berulang yang lebih sedikit, biaya operasional yang lebih murah, serta abstraksi tidak perlu yang lebih sedikit. Karena Pi dapat diperluas, Anda tidak kehilangan kemampuan, melainkan memperoleh pilihan. Anda baru menambahkan kerumitan ke dalam sistem ketika kerumitan itu “membuktikan bahwa dirinya layak dipertahankan”.

Model lokal juga berkembang pesat, dan Earendil sangat optimistis terhadap potensinya. Disiplin konteks Pi sangat bernilai di sini. Jendela konteks model lokal biasanya lebih kecil, dan [prefill](/translations/prompt-caching) bisa memakan waktu lama, sehingga menjaga prefiks prompt yang stabil menjadi penting. Disiplin konteks berarti tidak mengubah konteks kecuali pengguna secara eksplisit memintanya, sehingga menghindari prefill ulang yang bisa berlangsung beberapa menit.

System prompt dan set tool bawaan yang minimalis, ditambah disiplin konteks ini, menjadikan Pi Harness yang ideal untuk model lokal.

Pi sedang membuktikan bahwa ia mampu melakukannya sekaligus: lebih murah, lebih minimalis, dan juga lebih efisien.

::: info Catatan penerjemah
Artikel ini adalah terjemahan bahasa Indonesia lengkap dari teks asli Earendil; gambar studi kasus dari artikel asli digunakan dengan izin dari artikel tersebut dan tetap mencantumkan pembuat grafis serta sumber proyeknya. Versi, hasil benchmark, dan status proyek dalam artikel mengacu pada tanggal terbit teks asli. Terjemahan bahasa Indonesia beserta bagian adaptasinya diterbitkan di bawah [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans) berdasarkan lisensi; jika ada ambiguitas, [teks asli bahasa Inggris](https://earendil.com/posts/pi-autoresearch-and-databricks/) yang menjadi acuan.
:::

## Baca selanjutnya

- [Teks asli bahasa Inggris: Pi, Minimal and Performant](https://earendil.com/posts/pi-autoresearch-and-databricks/)
- [Sebelumnya: Agent Harness Ada Banyak, tetapi yang Ini Milik Saya](/translations/mine-agent-harness)
- [Berikutnya: Pi dan Lefos resmi dirilis](/translations/announcing-pi-and-lefos)
