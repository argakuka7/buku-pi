---
title: "Cara kerja Pi: Dari satu Prompt hingga satu Agent Loop utuh"
description: Rangkai Session, Context, System Prompt, Tool, Skill, pemanggilan model, dan Compaction menjadi satu rantai operasi yang utuh, lalu tuntaskan satu Agent Loop nyata dengan tugas notulen rapat.
prev:
  text: Bagaimana Subagent membagi tugas
  link: /guide/subagents
next:
  text: Tugas berdurasi panjang dan VPS
  link: /guide/vps-and-long-running
---

<span class="library-status">PRINCIPLE MAP · Rantai operasi lengkap</span>

# Cara kerja Pi: Dari satu Prompt hingga satu Agent Loop utuh

Pelajaran sebelumnya membahas Session, Context, System Prompt, Tool, Skill, Compaction, dan Cache secara terpisah. Dilihat satu per satu, setiap istilah tidak sulit; yang benar-benar mudah membuat tersendat adalah: **setelah Anda mengirim satu tugas, bagaimana semuanya sebenarnya saling terhubung?**

Bagian ini hanya melakukan satu hal: menuntaskan satu permintaan dari input hingga selesai secara utuh. Setelah membacanya, Anda seharusnya dapat melihat balasan model, pemanggilan tool, dan hasil tool di antarmuka Pi, lalu menjelaskan dengan jelas ia kini berada di langkah mana, dan mengapa langkah berikutnya masih memanggil model sekali lagi.

::: info Ingat dulu satu kalimat
Pi adalah Agent Harness yang mengatur jalannya proses. Model bertugas menilai langkah berikutnya, tool bertugas menyentuh lingkungan nyata, Session menyimpan prosesnya, dan Context adalah input yang benar-benar diterima model pada satu kali pemanggilan.
:::

## Lihat dulu rantai operasinya secara utuh

![Pi dari satu Prompt hingga satu Agent Loop utuh: Pi menyusun Context dari Session saat ini lalu memanggil model; model dapat berulang kali memanggil tool dan membaca hasilnya, pada akhirnya membalas pengguna dan menuliskan kembali prosesnya ke Session; Compaction baru dijalankan saat konteks terlalu panjang.](/images/diagrams/pi-agent-loop.svg)

Yang paling penting dalam diagram bukanlah jumlah panahnya, melainkan lingkaran di tengahnya:

```text
Model → Tool Call → tool dieksekusi → Tool Result → model bernalar lagi
```

Selama model masih membutuhkan informasi atau tindakan dari luar, loop ini dapat terus berlanjut. Model mungkin lebih dulu membaca file, lalu mencari konten, kemudian mengubah file, dan terakhir menjalankan pemeriksaan; setiap hasil yang dikembalikan tool akan menjadi dasar penilaian model berikutnya. Agent Loop satu putaran baru berakhir ketika model tidak lagi meminta tool, melainkan memberi balasan biasa.

Compaction pada diagram digambarkan dengan garis putus-putus, karena ia bukan langkah tetap yang dilalui setiap Prompt. Hanya ketika konteks mendekati batas, saat Anda menjalankan `/compact` secara manual, atau saat mekanisme terkait dipicu, Pi akan merapikan konten yang lebih awal menjadi ringkasan, lalu melanjutkan dengan pesan-pesan terbaru yang dipertahankan.

## Jangan menyusun semua istilah menjadi satu jalur perakitan

Penulisan berikut cocok untuk mengingat arah besarnya:

```text
Input tugas → baca Session → susun Context → panggil model → panggil tool → kembalikan hasil
→ bernalar lagi → balas pengguna → tulis ke Session → Compaction bila perlu → lanjut
```

Namun ada tiga hal dalam struktur sebenarnya yang perlu dikoreksi.

### 1. System Prompt, Tool, dan Skill sama-sama terlibat dalam penyusunan Context

Ketiganya bukan tiga stasiun yang dieksekusi berurutan.

- **System Prompt** menetapkan dalam kapasitas apa Pi bekerja, aturan dasar apa yang berlaku, dan mencantumkan kemampuan yang tersedia saat ini.
- **Definisi Tool** memberi tahu model tool apa saja yang ada, apa yang bisa dilakukan setiap tool, dan parameter apa yang dibutuhkan; tool itu sendiri baru dieksekusi setelah model mengeluarkan Tool Call.
- **Skill** biasanya lebih dulu muncul di system prompt sebagai nama dan deskripsi. Saat tugas cocok, model baru memuat `SKILL.md` secara lengkap melalui tool pembaca, dan isinya mulai terlibat dalam penilaian berikutnya sejak saat itu.
- **File Context dan aturan proyek**, direktori kerja saat ini, serta pesan dan ringkasan pemadatan pada branch Session yang aktif, juga bersama-sama membentuk input yang dapat dilihat model pada putaran ini.

Jadi pernyataan yang lebih tepat adalah: **Pi lebih dulu menyusun Context, lalu menyerahkan System Prompt, pesan, dan informasi tool yang tersedia kepada model secara bersamaan.**

### 2. Session tidak sama dengan Context

Session adalah riwayat pekerjaan yang tersimpan di disk, mencakup pesan pengguna, balasan model, Tool Call, Tool Result, catatan branch, dan catatan pemadatan. Context adalah input putaran ini yang dibangun ulang oleh Pi dari branch aktif saat ini dan disiapkan untuk diserahkan kepada model.

Anda dapat membayangkan Session sebagai arsip pekerjaan yang lengkap, dan Context sebagai materi yang kali ini diletakkan di atas meja model. Arsipnya masih ada, bukan berarti semua konten lama diletakkan lengkap di atas meja pada setiap putaran.

### 3. Cache tidak bertanggung jawab menentukan langkah berikutnya

Prompt cache bukanlah node eksekusi baru dalam Agent Loop. Ia adalah mekanisme provider model untuk memakai ulang prefix yang berulang; ia dapat memengaruhi latensi dan biaya, tetapi tidak akan menyimpan Session untuk Pi, dan tidak akan mengeksekusi Tool Call untuk model.

Karena itu Cache tidak digambarkan terpisah dalam diagram. Saat Anda perlu memahami cache hit dan perubahan konteks, kembalilah ke [Pengantar prompt cache](/guide/prompt-caching).

## Apa yang terjadi langkah demi langkah dalam satu Agent Loop

### Langkah 0: Pi menyiapkan lingkungan operasi kali ini terlebih dahulu

Saat Pi dijalankan, ia menentukan direktori kerja, model, dan tool yang tersedia, lalu memuat sumber daya proyek yang diizinkan. Nama dan deskripsi Skill yang tersedia akan masuk ke system prompt; Extension juga dapat mendaftarkan tool baru, atau menyesuaikan system prompt dan konteks sebelum Agent Loop dimulai.

Langkah ini menentukan “apa yang nanti dapat dilihat dan dipanggil model”, belum menyelesaikan tugas untuk pengguna.

### Langkah 1: Pengguna mengirim Prompt

Anda mengirim tugas di area edit. Pi menambahkan pesan pengguna ini ke branch aktif Session saat ini, lalu menyiapkan pemanggilan model yang pertama.

Prompt tidak perlu mengulang semua latar belakang. Session saat ini, aturan proyek, dan file yang Anda rujuk secara eksplisit akan ikut serta dalam penyusunan konteks sesuai status operasi saat itu. Namun materi yang tidak benar-benar dibaca ke dalam Context tidak boleh diasumsikan sudah diketahui model.

### Langkah 2: Pi menyusun Context putaran ini

Pi membangun ulang riwayat pesan dari branch Session saat ini, lalu menggabungkan system prompt, file Context proyek, penjelasan tool yang tersedia, indeks Skill, dan direktori kerja saat ini. Jika sebelumnya pernah terjadi Compaction, pesan yang lebih awal mungkin masuk ke Context saat ini dalam bentuk ringkasan, sementara pesan terbaru tetap dipertahankan.

Context adalah snapshot input untuk satu kali pemanggilan model. Pada pemanggilan berikutnya, ia akan berubah karena Tool Result atau pesan baru sudah ditambahkan.

### Langkah 3: Model membuat penilaian pertama

Setelah membaca Context saat ini, model biasanya mengembalikan salah satu dari dua jenis hasil:

1. Sudah bisa menjawab, langsung menghasilkan balasan biasa.
2. Masih perlu membaca informasi atau melakukan tindakan, sehingga mengembalikan satu atau beberapa Tool Call.

Model hanya mengajukan permintaan pemanggilan tool. Yang benar-benar membaca file, menjalankan perintah, atau menulis konten adalah tool yang disediakan Pi.

### Langkah 4: Pi mengeksekusi Tool Call

Pi memanggil kemampuan yang sesuai berdasarkan nama tool dan parameternya. Misalnya `read` membaca file, `write` menulis file, dan `bash` menjalankan perintah. Antarmuka akan menampilkan Tool Call beserta Tool Result setelahnya, sehingga Anda tahu objek apa yang disentuhnya dan apa yang dikembalikannya.

Tool Result bisa berupa isi file, keluaran perintah, selisih perubahan, atau juga galat yang jelas. Baik berhasil maupun gagal, ia bukan jawaban akhir, melainkan bukti baru untuk penalaran berikutnya.

### Langkah 5: Tool Result kembali ke model

Pi menambahkan Tool Result ke riwayat pesan, lalu memanggil model lagi. Model kini dapat memutuskan berdasarkan hasil yang nyata:

- melanjutkan dengan memanggil tool lain;
- memperbaiki parameter yang gagal sebelumnya;
- memeriksa hasil yang baru saja ditulis;
- atau berhenti memanggil tool dan memberikan balasan akhir.

Inilah inti Agent Loop. **Satu Prompt pengguna dapat memicu beberapa kali pemanggilan model, dan juga dapat mencakup beberapa putaran Tool Call dan Tool Result.**

### Langkah 6: Pi menyimpan prosesnya dan mengakhiri putaran ini

Ketika model tidak lagi meminta tool dan memberikan balasan biasa, Pi akan terus menuliskan balasan itu ke Session. Pesan pengguna, pesan model, Tool Call, dan Tool Result bersama-sama membentuk riwayat sesi yang dapat dipulihkan.

“Selesai” di sini hanya berarti Agent sudah kembali ke status menunggu input, bukan berarti hasil kerjanya pasti benar. Apakah file benar-benar ada, isinya lengkap, dan situs web sudah online, tetap harus diverifikasi secara independen di lingkungan nyata.

### Langkah 7: Context memanjang, lakukan Compaction bila perlu

Seiring bertambahnya pesan dan hasil tool, Context saat ini akan makin banyak memakai ruang. Saat mendekati batas konteks model, Pi dapat merangkum konten yang lebih awal, mempertahankan pesan yang lebih baru, dan terus berjalan dalam tugas yang sama; Anda juga dapat memicunya secara manual dengan `/compact`.

Setelah pemadatan, ringkasan baru akan ikut serta dalam pembangunan ulang Context berikutnya. Ia membantu tugas berlanjut, tetapi bukan memori tanpa kehilangan, dan tidak akan memulihkan file di disk untuk Anda. Tujuan utama, keputusan, dan hasil verifikasi tetap harus dituliskan ke file proyek.

## Telusuri dengan tugas nyata: merapikan notulen rapat menjadi daftar tindakan

Lanjutkan latihan dari [Tugas pertama](/guide/first-task) dan [CASE 01](/cases/meeting-notes): baca `input/notulen-rapat.md`, hasilkan `output/daftar-tindakan.md`, dan pertahankan pokok bahasan, penanggung jawab, tanggal, serta pengingat risiko.

Berikut dijelaskan jalur yang biasanya dapat diamati pada tugas yang dapat direproduksi ini. Model yang berbeda mungkin menggabungkan pemanggilan, menambah langkah pemeriksaan, atau memakai urutan yang berbeda; pemikiran internal model yang tidak terlihat tidak dianggap sebagai fakta yang sudah diverifikasi.

| Tahap | Apa yang terjadi pada tugas ini | Apa yang dapat Anda amati |
| --- | --- | --- |
| Prompt | Pengguna menentukan input, output, empat kolom, dan batas yang tidak boleh dilanggar | Pesan pengguna yang lengkap muncul di Session |
| Context | Pi menggabungkan system prompt, direktori kerja, tool aktif, riwayat sesi saat ini, dan tugas pengguna | Sumber daya yang dimuat terlihat di area startup; direktori dan model saat ini terlihat di bagian bawah |
| Pemanggilan model pertama | Model menilai bahwa isi notulen rapat harus diperoleh lebih dulu | Muncul Tool Call yang membaca `input/notulen-rapat.md` |
| Tool Result | Tool pembaca mengembalikan tiga pokok bahasan kepada model | Antarmuka menampilkan path yang dibaca dan konten yang dikembalikan |
| Pemanggilan model berikutnya | Model menyusun empat jenis kolom berdasarkan teks asli, lalu menentukan file tujuan penulisan | Muncul Tool Call yang menulis ke `output/daftar-tindakan.md` |
| Tool Result berikutnya | Tool penulis melaporkan keberhasilan atau mengembalikan galat | Antarmuka menampilkan path penulisan yang sebenarnya; saat ada galat, model dapat terus memperbaikinya |
| Mengakhiri putaran | Model tidak lagi memanggil tool, melaporkan hasil dan metode verifikasi yang disarankan | Pi kembali ke status dapat menerima input, balasan akhir ditulis ke Session |
| Verifikasi independen | Pengguna tidak bersandar pada ringkasan model, melainkan memeriksa fingerprint input, path output, dan tiga pokok bahasan | `input` tidak berubah, file output ada, dan empat jenis kolom bersesuaian satu per satu |

Pada contoh ini tidak perlu memaksakan penambahan Skill hanya untuk memamerkan konsep. Jika kemudian kebiasaan “setiap kali memeriksa daftar tindakan berdasarkan empat kolom” dibekukan menjadi Skill, perubahannya terjadi pada tahap penyusunan Context: system prompt akan lebih dulu mencantumkan Skill tersebut; setelah model membaca penjelasan lengkapnya sesuai kebutuhan, ia kembali memakai loop tool yang sama untuk menyelesaikan tugas.

## Saat menemui masalah, lacak dari rantai operasinya

| Gejala | Bagian mana yang diperiksa lebih dulu |
| --- | --- |
| Model seolah tidak mengetahui aturan proyek | Apakah file Context dimuat, apakah direktori kerja sudah benar |
| Model mengaku sudah membaca file, tetapi antarmuka tidak punya catatan pembacaan | Apakah Tool Call benar-benar dihasilkan dan dieksekusi |
| Tugas berhenti setelah tool melaporkan galat | Isi galat pada Tool Result, dan apakah model mendapat kesempatan bernalar lagi |
| Balasan tampak benar, tetapi file tidak berubah | Tool Call penulisan yang sebenarnya, path tujuan, dan file di disk |
| Tugas panjang mulai melewatkan persyaratan awal | Pemakaian Context, ringkasan Compaction, dan file serah terima proyek |
| Cache hit menurun | Apakah system prompt, definisi tool, atau prefix riwayat berubah; jangan menganggapnya sebagai hilang ingatan |

## Verifikasi bab ini

Setelah membaca, tanpa melihat teks sebelumnya, coba jelaskan empat hal berikut dengan jelas:

1. Mengapa setelah Tool Call masih perlu memanggil model sekali lagi?
2. Mengapa meskipun pesan lama tersimpan di Session, model tetap bisa melewatkan detail lama?
3. Mengapa System Prompt, Tool, dan Skill bukan tiga langkah yang dijalankan berurutan?
4. Mengapa setelah Pi membalas “selesai”, kita tetap harus memeriksa file nyata atau hasil online secara independen?

Jika Anda bisa menjawabnya, berarti Anda sudah menyambungkan istilah-istilah yang sebelumnya tersebar menjadi satu model kerja. Langkah berikutnya bukan menghafal lebih banyak istilah, melainkan mengamati satu loop tool yang nyata di [CASE 01](/cases/meeting-notes), lalu pergi ke [Konteks dan pemadatan](/guide/context-and-compaction) untuk melihat bagaimana tugas panjang mengubah Context.

### Dasar bab ini

- [Pi SDK: System Prompt, Tools, Skills, dan Context Files](https://pi.dev/docs/latest/sdk)
- [Pi Agent Core: urutan peristiwa dengan Tool Call](https://github.com/badlogic/pi-mono/tree/main/packages/agent)
- [Pi Extensions: peristiwa dan penyesuaian konteks sebelum dan sesudah Agent Loop](https://pi.dev/docs/latest/extensions)
- [Pi Skills: pemuatan sesuai kebutuhan dan pengungkapan bertahap](https://pi.dev/docs/latest/skills)
- [Pi Sessions](https://pi.dev/docs/latest/sessions)
- [Pi Compaction](https://pi.dev/docs/latest/compaction)

Perilaku dinamis di atas diverifikasi pada 2026-09-11. Mekanisme pemuatan sumber daya, peristiwa, dan pemadatan Pi mungkin terus diperbarui; acuannya adalah dokumentasi Latest resmi dan kode sumber terkait.
