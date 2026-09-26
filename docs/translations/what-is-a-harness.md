---
title: Apa itu Agent Harness?
description: Terjemahan bahasa Indonesia lengkap dari artikel resmi Earendil Product “What is a Harness?”.
prev:
  text: Prompt cache pada Agent
  link: /translations/prompt-caching
next:
  text: Agent Harness Ada Banyak, tetapi yang Ini Milik Saya
  link: /translations/mine-agent-harness
---

<span class="library-status">Terjemahan berlisensi resmi Earendil · 04</span>

# Apa itu Agent Harness?

> - **Judul asli** *What is a Harness?*
> - **Penulis** Earendil Product `<rfc@earendil.com>`
> - **Tanggal terbit** 2026-08-20
> - **Alamat asli** [earendil.com/posts/what-is-a-harness](https://earendil.com/posts/what-is-a-harness/)
> - **Catatan lisensi** Diadaptasi dan diterjemahkan dengan izin dari Earendil (*Adapted and translated with permission from Earendil.*)
> - **Lisensi terjemahan** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)

**Harness**—definisi Kamus Cambridge:

*Nomina.* Perlengkapan berupa tali dan sabuk yang digunakan untuk mengendalikan atau menahan orang, hewan, atau benda.

*Verba.* Mengendalikan sesuatu, biasanya untuk memanfaatkan kekuatannya.

—

Ketika mendengar kata harness, hal pertama yang saya ingat adalah set tali dan sabuk yang saya kenakan sebelum memanjat dinding tebing sekolah saat SMP. Sejujurnya, saya hanya pemanjat tebing yang biasa-biasa saja.

![Royal Robbins mendaki El Capitan, sabuk pengaman penuh dengan perlengkapan panjat](/images/translations/royal-robbins-el-capitan-climbing.webp)

*Royal Robbins mendaki El Capitan, dengan sabuk pengaman yang penuh perlengkapan panjat. Foto: [Tom Frost](https://www.frostworksclimbing.com/cool_aid.htm). Gambar digunakan berdasarkan lisensi artikel asli Earendil.*

Namun, jika belakangan ini Anda terus menyimak berita AI, harness yang paling khas di benak Anda mungkin sudah menjadi Agent Harness. Jika demikian, artikel ini bukan untuk Anda.

Artikel ini ditujukan bagi mereka yang penasaran dengan Agent Harness, tetapi belum tahu apa itu, dan selama ini malu untuk bertanya.

Mari kita kembali dulu ke panjat tebing.

Mengapa kita memakai sabuk pengaman saat memanjat? Pertama, sabuk itu menopang dan melindungi Anda. Sabuk pengaman tersambung ke carabiner dan tali, mencegah Anda jatuh, mengendalikan ritme Anda, dan membatasi jalur Anda. Anda juga dapat menggantungkan perlengkapan lain seperti kantong magnesium, peralatan penahan batu, dan quickdraw di sana.

Ketika Anda mendaki berbagai puncak dan memilih jalur yang berbeda, sabuk pengaman itu juga dapat Anda bawa. Anda bahkan dapat menyesuaikan sabuk pengaman serta isi lingkaran perlengkapannya sesuai medan. Sabuk panjat tebing bersifat adaptif; pemain akrobat dan arborist juga memakainya. Siapa pun yang memilikinya dapat membentuknya menjadi sesuatu yang cocok untuk dirinya.

Baik dari struktur maupun fungsinya, sabuk panjat tebing dan Agent Harness memiliki beberapa kesamaan.

## Agent Harness

Seseorang pernah mendeskripsikannya dengan rumus sederhana: Agent = Model + Harness. Harness di sini merujuk pada Agent Harness. Tetapi, apa sebenarnya Agent Harness? Agent Harness memanfaatkan model AI untuk menciptakan AI Agent, yang awalnya terutama digunakan untuk pemrograman. Kini, semua jenis AI Agent memiliki Harness di intinya. Memahami cara kerja Agent Harness juga akan membantu Anda memahami apa sebenarnya AI Agent.

Agent Harness adalah perangkat lunak yang menyediakan lingkungan berjalan bagi model AI. Berbeda dari sebagian besar model AI, Anda sebagai pengguna akhir dapat memiliki Agent Harness sendiri.

Insinyur perangkat lunak biasanya langsung menggunakan Harness seperti [Pi](https://pi.dev/) di terminal komputer. Namun, Harness seperti [OpenClaw](https://openclaw.ai/) juga dapat menggunakan antarmuka yang berbeda, seperti iMessage, aplikasi obrolan, atau surel. Harness kami, [Lefos](https://www.lefos.com/about), terutama berinteraksi melalui surel.

Apa pun antarmuka yang digunakan, Harness biasanya melakukan empat hal:

1. Menyediakan sekumpulan instruksi yang membimbing model AI dalam merespons, yang biasanya disebut “system prompt”.
2. Menjelaskan dan menyediakan sekumpulan tool agar model AI dapat memanggilnya untuk menanggapi permintaan pengguna.
3. Membangun kerangka yang membatasi perilaku model, dengan salah satu pekerjaan intinya adalah membentuk “Agent loop”.
4. Menyediakan lapisan konversi yang penting agar Harness dapat bekerja dengan berbagai model AI yang berbeda.

### 1. System prompt

Sebagian besar model AI sendiri memiliki seperangkat aturan dan panduan yang terbentuk dan disempurnakan secara bertahap selama pelatihan. Salah satu contoh yang terkenal adalah “[dokumen jiwa](https://gist.github.com/Richard-Weiss/efe157692991535403bd7e7fb20b6695)” milik Claude Opus 4.5, yang menjelaskan kepada model apa dirinya dan bagaimana ia harus bertindak.

System prompt dalam AI Harness mirip dengan itu, tetapi tidak tertanam sedalam itu di dalam model. Ia lebih menyerupai instruksi kerja yang diterima karyawan baru pada hari pertama: karyawan itu belum menginternalisasi persyaratannya, tetapi tahu bahwa ia harus mengikutinya saat menjalankan pekerjaan. System prompt akan dimasukkan ke dalam percakapan bersama setiap prompt pengguna, dan sangat penting bagi kemampuan model untuk bertindak dengan tepat dalam konteks Harness tersebut.

### 2. Tool

Tool adalah sekumpulan kemampuan yang ditulis dalam bentuk kode dan dapat “dipanggil” oleh model. Harness tidak hanya menjelaskan tool ini kepada model, tetapi juga menyediakan implementasi perangkat lunaknya. Tool tersebut dapat mencakup tool pencarian web, tool untuk menulis dan menjalankan kode, atau tool untuk menulis surel.

Yang krusial, Harness biasanya tidak menetapkan secara kaku kapan dan bagaimana model harus menggunakan suatu tool. Ia hanya menyediakan tool, menjelaskannya dengan jelas, lalu membiarkan model AI sendiri yang memutuskan kapan dan bagaimana menggunakannya.

### 3. Agent loop

Kini, sebuah model AI sudah berada di dalam Agent Harness dan memiliki seperangkat instruksi serta tool. Andaikan Harness ini bekerja melalui surel, dengan tiga tool: pencarian web, penulisan kode, dan penulisan surel; lalu pengguna meminta Agent membandingkan peringkat dan nilai ujian sekolah dasar setempat, dan memberikan saran. Bagaimana ia akan bertindak?

Pertama, model mencoba memahami permintaan, yaitu “prompt”. Ia menggunakan pengetahuan dan bobot yang diperoleh dari pra-pelatihan untuk memahami apa itu “sekolah dasar”, apa itu “setempat”, dan peringkat apa yang mungkin diperhatikan pengguna. Setelah itu, ia menyusun kueri pencarian web untuk memperoleh data terbaru.

Setelah mendapatkan hasil, model dapat meninjau hasil itu dalam konteks permintaan awal. Ia mungkin menemukan bahwa pencarian pertama tidak memperoleh informasi yang benar, atau informasinya belum cukup, sehingga ia memutuskan sendiri untuk mencari lagi. Model memanggil tool sekali lagi berdasarkan penilaiannya sendiri; inilah contoh pertama yang jelas dari “loop”.

Andaikan data yang relevan sudah terkumpul lengkap, model kemudian memutuskan untuk membuat spreadsheet melalui tool “menulis kode”—pada akhirnya, spreadsheet juga bisa dihasilkan oleh kode. Ia dapat menggunakan tool ini untuk menyelesaikan perhitungan dan memformat hasil agar isinya lebih mudah dipahami. Setelah itu, ia membandingkan spreadsheet dengan permintaan awal. Jika datanya masih belum memuaskan, ia mungkin kembali masuk ke loop dan kembali ke tahap pencarian.

Ketika model menilai materi sudah cukup, ia akan memanggil tool penulisan surel, meninjau dan merangkum temuan, menulis surel, lalu melampirkan spreadsheet dan lampiran lainnya. Model memeriksa hasil akhir dan menilai tugas selesai, lalu Agent loop pun tertutup. Beberapa detik kemudian, pengguna akan menerima surel berisi ringkasan, saran, dan tabel data. Anda dapat melihat seperti apa Agent loop dalam praktik di [sesi Pi ini](https://pi.dev/session/#b23f2459599f8439327f65c90ee95d06).

### 4. Lapisan konversi

Lapisan konversi memungkinkan Harness yang sama bekerja dengan model AI yang berbeda. Sebagian Harness bahkan menggunakan beberapa model dalam satu Agent loop, karena model yang berbeda mungkin unggul dalam tugas yang berbeda.

Lapisan konversi juga krusial karena ia menyerahkan kendali kepada pengguna akhir. Pengguna dapat membuat Harness-nya menggunakan model Anthropic, model OpenAI, atau mengeksplorasi model open-weight yang biasanya memiliki rasio biaya-manfaat—yakni biaya per tugas—yang baik.

Kemampuan konversi ini memindahkan sebagian kekuasaan dan daya ungkit dari laboratorium AI kembali ke tangan pengguna akhir. Jika orang dapat memiliki dan menjalankan Harness di komputernya sendiri secara lokal, mereka dapat mempertahankan otonomi: bebas mengubah tool-nya sendiri, dan juga menyimpan secara lokal sesi-sesi yang seiring waktu membentuk catatan komunikasi manusia-mesin.

Daripada bergantung pada satu aplikasi yang dirilis oleh laboratorium AI tertentu, pengguna dapat memilih untuk menggunakan dan perlahan membangun hubungan dengan Harness-nya sendiri. Pada contoh sebelumnya, pengguna dapat menyerahkan surel yang sama secara terpisah kepada OpenAI, Anthropic, dan model open-weight, lalu membandingkan hasil serta biayanya, dan menyimpan semua jawaban di satu tempat, alih-alih membiarkan tiga jawaban tertinggal di tiga aplikasi yang berbeda.

## Menjadikannya milik Anda

Berbeda dari model AI itu sendiri, Anda dapat memiliki dan mengubah Harness. Seperti halnya sabuk panjat tebing, Anda dapat menjadikannya sebagai tool Anda sendiri. Inilah salah satu alasan orang menyukai Pi.

Pi adalah Agent Harness yang sangat minimalis. System prompt-nya singkat, dan tool bawaannya pun sedikit. Saat digunakan langsung dari kotak, ia sengaja tidak menghalangi antara pengguna dan model. Namun, seiring penggunaan Pi, orang dapat memperluas dan membentuknya sesuai kebutuhan sendiri: mengubah system prompt, atau merancang [Ekstensi](https://pi.dev/packages) yang cocok untuk alur kerja sendiri, lalu membagikan Ekstensi itu kepada orang lain. Saat teks asli ditulis, Ekstensi yang saling dibagikan sesama pengguna Pi telah lebih dari 5.000 buah.

Pi juga merupakan perangkat lunak gratis dan sumber terbuka yang berjalan di laptop Anda sendiri. Ini berarti orang kini dapat memiliki tool yang berada di atas perangkat kerasnya sendiri dan membantunya memanfaatkan AI.

## Harness sumber terbuka yang netral adalah alat otonomi

Harness tidak selalu sumber terbuka dan netral. Agent Harness populer pertama, Claude Code, tidak diciptakan untuk menyediakan lapisan konversi yang tidak bergantung pada model, melainkan agar pengguna dapat memprogram dengan model Claude di komputer lokalnya. Setelah itu, kebangkitan Agent Harness gratis dan sumber terbuka seperti OpenClaw, OpenCode, Hermes, dan Pi sungguh menggembirakan.

Earendil sedang membangun Pi menjadi Harness yang netral, memberikan pilihan kemampuan dan kebebasan kepada para pengguna Pi. Kami juga sedang menjajaki bagaimana manfaat dan otonomi yang dibawa Harness dapat dirasakan oleh lebih banyak orang.

Kini, banyak orang khawatir bahwa perusahaan AI yang makin besar memiliki terlalu banyak kekuasaan dan pengaruh, dan sebagian di antaranya mungkin memilih untuk menghindari AI sepenuhnya. Earendil percaya bahwa kita dapat memperkuat otonomi manusia dengan membangun perangkat lunak dan protokol terbuka, menjembatani perpecahan dan ketidakpahaman, serta memupuk kegembiraan dan pemahaman yang bertahan lama.

Kita tidak dapat mencapai tujuan itu dengan mengabaikan teknologi yang sudah ada saat ini, melainkan harus menatapnya dengan mata terbuka dan memegang kendali dengan erat untuk menungganginya: memastikan bahwa kitalah yang mengayunkan palu, bukan palu yang mengayunkan kita.

::: info Catatan penerjemah
Artikel ini adalah terjemahan bahasa Indonesia lengkap dari teks asli Earendil Product. Gambar pendamping teks asli digunakan sesuai lisensi artikel dan kredit fotografer tetap dicantumkan. Terjemahan bahasa Indonesia beserta bagian adaptasinya diterbitkan di bawah [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans) berdasarkan lisensi; jika ada ambiguitas, [teks asli bahasa Inggris](https://earendil.com/posts/what-is-a-harness/) yang menjadi acuan.
:::

## Baca selanjutnya

- [Teks asli bahasa Inggris: What is a Harness?](https://earendil.com/posts/what-is-a-harness/)
- [Berikutnya: Agent Harness Ada Banyak, tetapi yang Ini Milik Saya](/translations/mine-agent-harness)
