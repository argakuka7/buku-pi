---
title: Pertanyaan Umum Pi (FAQ)
description: Menjawab 20 pertanyaan Pi yang paling sering diajukan pemula, sekaligus menghubungkannya dengan penjelasan istilah populer, kursus alur utama, dan materi resmi.
prev:
  text: Buku panduan referensi
  link: /reference/
next:
  text: Buku panduan penanganan masalah Pi
  link: /reference/troubleshooting
---

<span class="library-status">FAQ · Temukan dulu masalahnya, baru lanjut belajar</span>

# Pertanyaan Umum Pi (FAQ)

Halaman ini mengutamakan kesimpulan, bukan menyalin ulang tutorial lengkap di halaman yang sama. Setelah menemukan pertanyaan yang sama dengan Anda, baca dulu jawaban singkatnya, lalu ikuti “Baca lanjutan” untuk masuk ke istilah populer atau pelajaran terkait.

Jawaban yang menyangkut produk Pi, tool, Provider, izin, dan perilaku versi diverifikasi pada **2026-09-11**. Jika antarmuka sebenarnya tidak sesuai dengan halaman ini, jadikan [dokumentasi resmi Pi terbaru](https://pi.dev/docs/latest) dan `pi --help` di komputer Anda sebagai acuan.

## Pencarian cepat

### Mengenal Pi

1. [Apa sebenarnya Pi?](#what-is-pi)
2. [Apa perbedaan Pi dan Pi Coding Agent?](#pi-vs-pi-coding-agent)
3. [Apa perbedaan Pi dengan Claude Code dan Codex?](#pi-vs-other-agents)
4. [Apa sebenarnya Agent Harness?](#what-is-agent-harness)
5. [Mengapa Pi dirancang sesederhana ini?](#why-pi-is-minimal)
6. [Mengapa Pi hanya mempertahankan sedikit tool inti?](#why-few-tools)

### Model, biaya, dan menjalankan secara lokal

7. [Apakah Pi sudah menyertakan model?](#does-pi-include-models)
8. [Model apa saja yang bisa digunakan Pi?](#which-models)
9. [Apakah Agent lokal dan model lokal itu hal yang sama?](#local-agent-vs-local-model)
10. [Mengapa Pi disebut lebih hemat token?](#why-pi-uses-fewer-tokens)
11. [Mengapa rasio cache hit Pi sering kali cukup tinggi?](#why-cache-hit-is-high)

### Sesi dan konteks

12. [Apa perbedaan Context dan Session?](#context-vs-session)
13. [Apa yang terjadi ketika Context Window penuh?](#context-window-full)
14. [Apakah Compaction menghapus riwayat obrolan sebelumnya?](#does-compaction-delete-history)
15. [Apakah Pi punya memori jangka panjang?](#does-pi-have-long-term-memory)

### Ekstensi dan keamanan

16. [Apa perbedaan Skill, Extension, dan Package?](#skill-extension-package)
17. [Bagaimana memilih antara Skill dan MCP?](#skill-vs-mcp)
18. [Apakah Extension makin banyak makin baik?](#more-extensions-better)
19. [Apakah aman memasang plugin pihak ketiga di Pi?](#are-third-party-packages-safe)
20. [Apakah Project Trust itu sandbox?](#is-project-trust-a-sandbox)

## Apa sebenarnya Pi? {#what-is-pi}

**Jawaban singkat: Pi adalah Agent Harness terminal yang minimalis dan dapat diperluas, bukan model bahasa besar.**

Pi bertugas menghubungkan model, tool, Session, Context, dan direktori kerja, sehingga model dapat membaca file, menjalankan perintah, dan terus mengerjakan tugas. Yang benar-benar melakukan penalaran adalah model yang Anda hubungkan melalui Provider; Pi bertanggung jawab mengatur keseluruhan proses kerja ini.

![Pi menghubungkan tujuan pengguna dengan model, tool, file proyek, dan Session, serta bertanggung jawab mengatur seluruh proses kerja.](/images/diagrams/pi-harness-overview.svg)

*Diagram: model bertugas menilai, Pi bertugas mengubah penilaian itu menjadi pekerjaan yang dapat dijalankan, disimpan, dan diverifikasi.*

**Baca lanjutan:** [Pi](/reference/glossary#pi) · [Agent Harness](/reference/glossary#agent-harness) · [Pengantar: Mengapa membaca Buku Pi ini](/guide/introduction)

## Apa perbedaan Pi dan Pi Coding Agent? {#pi-vs-pi-coding-agent}

**Jawaban singkat: Dalam percakapan sehari-hari, “Pi” sering merujuk pada program terminal yang Anda buka; ketika membahas struktur kode sumber, Pi adalah keseluruhan proyek, Pi Coding Agent adalah aplikasi yang sebenarnya kita pasang, dan Pi Agent Core di lapisan bawah adalah komponen yang diandalkannya.**

[Repositori resmi](https://github.com/earendil-works/pi#all-packages) mencantumkan paket-paket ini secara terpisah: `@earendil-works/pi-agent-core` menangani Agent loop, pemanggilan tool, dan pengelolaan status; `@earendil-works/pi-ai` menyediakan antarmuka model; `@earendil-works/pi-tui` menyediakan komponen antarmuka terminal. `@earendil-works/pi-coding-agent` dibangun di atas komponen-komponen dasar tersebut dan menyediakan perintah `pi`, tool bawaan untuk file dan perintah, sesi, serta pintu masuk penggunaan lengkap untuk memuat Skill, Extension, dan sumber daya lainnya. [Petunjuk instalasi resmi](https://pi.dev/docs/latest/quickstart) memasang paket Coding Agent inilah untuk pengguna umum. Hubungan antar paket di atas diverifikasi pada **14 September 2026**.

Karena itu, **Pi Coding Agent tidak sama dengan paket `pi-agent-core` yang berdiri sendiri**; ia juga bukan produk yang baru bisa dirakit setelah “memasang core dulu, lalu memasang beberapa plugin pihak ketiga secara manual”. Ekstensi dan Skill dapat ditambahkan belakangan sesuai kebutuhan. Saat mengikuti langkah-langkah operasional dalam buku ini, “menjalankan Pi” berarti menjalankan Pi Coding Agent yang sudah terpasang; pemisahan antara paket core dan aplikasi terminal baru diperlukan ketika membahas arsitektur atau mengembangkan SDK.

**Baca lanjutan:** [Pi Coding Agent](/reference/glossary#pi-coding-agent) · [Memasang Pi](/guide/install-pi) · [Repositori resmi Pi](https://github.com/earendil-works/pi)

## Apa perbedaan Pi dengan Claude Code dan Codex? {#pi-vs-other-agents}

**Jawaban singkat: Ketiganya sama-sama bisa membawa model ke pekerjaan nyata, tetapi kemampuan bawaan, batas produk, dan cara kustomisasinya berbeda; tidak bisa hanya dibuat peringkat “siapa yang lebih kuat”.**

Orientasi inti Pi adalah tetap kecil, dengan menyerahkan pilihan alur kerja seperti subagent, mode perencanaan, dan pop-up izin kepada pengguna untuk dilengkapi melalui Extension, Package, atau lingkungan isolasi eksternal. Fitur Claude Code dan Codex akan terus diperbarui; perbandingan yang sungguh-sungguh sebaiknya menetapkan tanggal, model, tugas, izin, dan kriteria verifikasi, bukan mencampuradukkan kemampuan model dengan kemampuan Harness.

**Baca lanjutan:** [Coding Agent](/reference/glossary#coding-agent) · [Sepuluh penilaian yang masih berlaku](/guide/lasting-principles)

## Apa sebenarnya Agent Harness? {#what-is-agent-harness}

**Jawaban singkat: Itu adalah lapisan perangkat lunak di luar model yang bertugas “mengatur pekerjaan”.**

Harness menyiapkan system prompt dan Context, menjelaskan tool yang tersedia kepada model, menjalankan Tool Call yang dipilih model, mengirimkan hasilnya kembali ke Agent Loop, dan menyimpan Session. Model yang sama, ketika dipindahkan ke Harness yang berbeda, bisa tampil berbeda karena cara pengaturan ini berbeda.

**Baca lanjutan:** [Agent Harness](/reference/glossary#agent-harness) · [Apa itu Agent Harness?](/translations/what-is-a-harness)

## Mengapa Pi dirancang sesederhana ini? {#why-pi-is-minimal}

**Jawaban singkat: Ini adalah pilihan orientasi produk, bukan “belum selesai dikerjakan”.**

Pi menjaga core tetap kecil, membiarkan pengguna memilih model, tool, dan alur kerja sesuai kebutuhan nyata, sekaligus mengurangi Context bawaan dan perilaku tersembunyi. Konsekuensinya, pengguna harus lebih memahami apa yang mereka pasang, izin apa yang dibuka, dan bagaimana hasil akhirnya diverifikasi.

**Baca lanjutan:** [Prinsip desain resmi Pi](https://pi.dev/docs/latest/usage#design-principles) · [Sepuluh penilaian yang masih berlaku](/guide/lasting-principles)

## Mengapa Pi hanya mempertahankan sedikit tool inti? {#why-few-tools}

**Jawaban singkat: Sedikit tool bawaan membuat alur kerja dasar lebih mudah dipahami, dan mengurangi penjelasan tool yang harus dipilih serta diproses model pada setiap putaran.**

Saat ini Pi menyertakan tool seperti `read`, `bash`, `edit`, `write`, `grep`, `find`, dan `ls`; yang paling sering dirangkum adalah empat kemampuan inti yaitu membaca, menulis, mengedit, dan menjalankan perintah; di Windows juga muncul pintu masuk PowerShell. Jangan mengartikan “sederhana secara bawaan” sebagai “selamanya hanya ada empat tool bawaan”; kemampuan baru yang dibutuhkan dapat ditambahkan melalui Extension.

**Baca lanjutan:** [Tool / Tool Call](/reference/glossary#tool-tool-call) · [Petunjuk penggunaan Pi](https://pi.dev/docs/latest/usage#tool-options)

## Apakah Pi sudah menyertakan model? {#does-pi-include-models}

**Jawaban singkat: Tidak. Memasang Pi tidak berarti Anda sudah mendapatkan model atau kuota pemanggilan.**

Pi bertanggung jawab mengatur alur kerja Agent, sedangkan penalaran sebenarnya dilakukan oleh model yang disediakan Provider. Sebelum mulai menggunakan, Anda tetap perlu membangun koneksi yang bisa dipakai melalui login langganan yang didukung, API Key, perutean model lokal, atau Provider kustom.

**Baca lanjutan:** [Login akun dan pengaturan model](/guide/connect-model) · [Pi Providers](https://pi.dev/docs/latest/providers)

## Model apa saja yang bisa digunakan Pi? {#which-models}

**Jawaban singkat: Gunakan model yang didukung katalog bawaan Pi saat ini atau Provider yang Anda konfigurasi; tidak disarankan memelihara tabel lengkap tipe model di FAQ karena cepat kedaluwarsa.**

Jalankan `/model` untuk melihat pilihan yang benar-benar tersedia di lingkungan saat ini; Anda juga bisa memperluasnya melalui cara model kustom dan Provider yang didukung resmi. Saat memilih model, pertimbangkan sekaligus jenis tugas, kestabilan, biaya, kecepatan, dan Context Window, jangan hanya melihat papan peringkat.

**Baca lanjutan:** [Login akun dan pengaturan model](/guide/connect-model) · [Pi Providers](https://pi.dev/docs/latest/providers)

## Apakah Agent lokal dan model lokal itu hal yang sama? {#local-agent-vs-local-model}

**Jawaban singkat: Bukan, keduanya menggambarkan dua lokasi yang berbeda.**

Agent lokal berarti proses Pi berjalan di komputer atau server Anda; model lokal berarti penalaran juga dilakukan di perangkat keras yang Anda kendalikan. Anda bisa menjalankan Pi secara lokal dan terhubung ke model cloud, atau membuat Pi lokal terhubung ke model lokal melalui llama.cpp dan sejenisnya; lokasi file dan lokasi penalaran harus dinilai secara terpisah.

![Pi yang berjalan lokal dapat terhubung ke Provider dan model cloud, atau melalui antarmuka lokal terhubung ke model yang berjalan di perangkat keras milik sendiri.](/images/diagrams/local-agent-model.svg)

*Diagram: Tanyakan dulu di mana Agent berjalan, lalu di mana model melakukan penalaran.*

**Baca lanjutan:** [Agent Harness](/reference/glossary#agent-harness) · [Panduan llama.cpp Pi](https://pi.dev/docs/latest/llama-cpp)

## Mengapa Pi disebut lebih hemat token? {#why-pi-uses-fewer-tokens}

**Jawaban singkat: Bukan karena Pi punya teknologi yang otomatis menghilangkan token, melainkan karena System Prompt bawaan, alur kerja dasar, dan ekstensi sesuai kebutuhannya dirancang cukup hemat.**

Skill menggunakan pemuatan bertahap, dan prefix yang stabil juga dapat memanfaatkan Prompt Cache bila Provider mendukungnya. Namun, membaca file besar, menumpuk hasil tool, atau mengaktifkan banyak ekstensi sekaligus tetap akan menghabiskan Context; biaya sebenarnya harus mengacu pada catatan penagihan penyedia layanan model saat ini.

**Baca lanjutan:** [Token](/reference/glossary#token) · [Skill](/reference/glossary#skill) · [Pengantar prompt caching](/guide/prompt-caching)

## Mengapa rasio cache hit Pi sering kali cukup tinggi? {#why-cache-hit-is-high}

**Jawaban singkat: Prefix yang stabil dalam sesi berkelanjutan berpeluang digunakan ulang oleh Provider, tetapi tidak setiap model mengembalikan data cache yang sama.**

Prompt dasar Pi yang lebih pendek, penjelasan tool yang relatif stabil, dan Session yang bersifat append-only membantu mempertahankan prefix yang sama; mengganti model, menyesuaikan tool, mengubah branch lama, atau menjalankan Compaction semuanya dapat mengubah cache. Rasio hit yang tinggi tidak berarti jawabannya benar; hasil kerja tetap harus diverifikasi secara independen.

**Baca lanjutan:** [Prompt Cache](/reference/glossary#prompt-cache) · [Cache Hit](/reference/glossary#cache-hit) · [Prompt caching di dalam Agent](/translations/prompt-caching)

## Apa perbedaan Context dan Session? {#context-vs-session}

**Jawaban singkat: Session adalah struktur sesi lengkap yang tersimpan, sedangkan Context adalah input yang benar-benar dikirimkan ke model pada putaran saat ini.**

Session Pi dapat berisi beberapa branch, hasil tool, dan catatan pemadatan; model saat ini hanya melihat konten yang dibangun dari jalur terpilih beserta materi lain yang ditambahkan pada putaran ini. Karena itu, “riwayatnya masih ada” tidak berarti “model sekarang masih bisa melihat semua detail”.

![Session menyimpan riwayat lengkap; Pi menyusun Context saat ini dari jalur terpilih, file proyek, dan ringkasan pemadatan, lalu mengirimkannya ke model.](/images/diagrams/context-session-compaction.svg)

*Diagram: Session bertugas menyimpan, Context menentukan apa yang benar-benar bisa dilihat model pada putaran ini.*

**Baca lanjutan:** [Context](/reference/glossary#context) · [Session](/reference/glossary#session) · [Session dan melanjutkan pekerjaan](/guide/sessions)

## Apa yang terjadi ketika Context Window penuh? {#context-window-full}

**Jawaban singkat: Model tidak bisa terus menerima konten baru tanpa batas; Pi biasanya perlu memadatkan riwayat yang lebih awal atau menyusun ulang tugas.**

Pi menentukan kapan Compaction otomatis dijalankan berdasarkan jendela model dan ruang balasan yang disisihkan, dan pengguna juga dapat menjalankan `/compact` secara manual. Jika tugas sudah tercampur banyak konten yang tidak relevan, memulai Session baru mungkin lebih jelas daripada berulang kali memadatkan; apa pun caranya, tuliskan dulu status penting ke file.

**Baca lanjutan:** [Context Window](/reference/glossary#context-window) · [Compaction](/reference/glossary#compaction) · [Konteks dan pemadatan](/guide/context-and-compaction)

## Apakah Compaction menghapus riwayat obrolan sebelumnya? {#does-compaction-delete-history}

**Jawaban singkat: Dalam implementasi Pi saat ini, Compaction terutama mengubah representasi riwayat lama yang dikirim ke model selanjutnya; itu tidak sama dengan menghapus seluruh file Session begitu saja.**

Pi menuliskan ringkasan pemadatan dan batas yang dipertahankan; sesi asli tetap dipakai untuk mencatat struktur riwayat. Namun, yang dilihat model selanjutnya adalah ringkasan ditambah teks asli terkini; detail awal mungkin tidak masuk ke dalam ringkasan. Pemadatan juga tidak memulihkan atau membatalkan file di disk, jadi keputusan penting tetap harus disimpan terpisah ke disk dan diperiksa ulang.

**Baca lanjutan:** [Compaction](/reference/glossary#compaction) · [Mekanisme pemadatan di Pi](/translations/compaction-in-pi) · [Pi Compaction](https://pi.dev/docs/latest/compaction)

## Apakah Pi punya memori jangka panjang? {#does-pi-have-long-term-memory}

**Jawaban singkat: Pi secara native memiliki Session yang dapat dipulihkan, tetapi jangan menyamakannya dengan sistem Memory jangka panjang yang otomatis merapikan pengalaman antar tugas.**

Session memungkinkan Anda melanjutkan riwayat pekerjaan yang sama, dan Context menentukan apa yang bisa dilihat model pada putaran ini; untuk mempertahankan preferensi dan pengalaman lintas Session dan lintas proyek, biasanya diperlukan file, Skill, Extension buatan sendiri, atau Package pihak ketiga. Pengetahuan penting sebaiknya disimpan sebagai file proyek yang dapat dibaca, ditinjau, dan dikelola versinya.

**Baca lanjutan:** [Session](/reference/glossary#session) · [Context](/reference/glossary#context) · [Sesi yang tidak dapat Anda bawa serta](/translations/session-portability)

## Apa perbedaan Skill, Extension, dan Package? {#skill-extension-package}

**Jawaban singkat: Skill mengajarkannya cara melakukannya, Extension menambah atau mengubah kemampuan menjalankan, dan Package bertugas mengemas serta mendistribusikan sumber daya tersebut.**

Jalankan dulu kebutuhan yang sama secara manual sampai berhasil, lalu rapikan proses yang berulang menjadi Skill; kembangkan atau pasang Extension hanya ketika memang ada kemampuan eksekusi yang kurang; pertimbangkan Package saat hendak memakainya lintas proyek atau membagikannya kepada orang lain. Ketiganya tidak memiliki hubungan tingkat dari rendah ke tinggi.

![Saat kekurangan metode, pilih Skill; saat kekurangan kemampuan menjalankan, pertimbangkan Extension; saat perlu distribusi, barulah gunakan Package.](/images/diagrams/skill-extension-package.svg)

*Diagram: Pastikan dulu kebutuhan nyata, baru tentukan apakah perlu kemampuan kode dan distribusi.*

**Baca lanjutan:** [Skill](/reference/glossary#skill) · [Extension](/reference/glossary#extension) · [Package](/reference/glossary#package)

## Bagaimana memilih antara Skill dan MCP? {#skill-vs-mcp}

**Jawaban singkat: Tentukan dulu apakah yang Anda kurang adalah “metode mengerjakan sesuatu”, atau antarmuka tool eksternal yang perlu dipanggil secara stabil.**

Proses tetap, standar pemeriksaan, dan materi referensi sebaiknya ditulis sebagai Skill; untuk pekerjaan yang sudah bisa dituntaskan dengan jelas oleh CLI yang ada, biarkan dulu Pi membaca bantuan dan memanggil CLI tersebut. Core Pi saat ini tidak menyertakan MCP secara bawaan; hanya ketika memang perlu mengekspos kemampuan eksternal secara terstruktur dan bersedia menanggung biaya penjelasan tool, autentikasi, dan pemeliharaan, barulah sambungkan MCP melalui Extension atau Package.

**Baca lanjutan:** [Skill](/reference/glossary#skill) · [Tool / Tool Call](/reference/glossary#tool-tool-call) · [Skill, Extension, dan Package](/guide/skills-extensions-packages)

## Apakah Extension makin banyak makin baik? {#more-extensions-better}

**Jawaban singkat: Tidak. Bertambahnya jumlah sekaligus menambah biaya terkait asal-usul, izin, kompatibilitas, dan penelusuran masalah.**

Extension dapat mendaftarkan tool, mengubah prompt, atau mencegat event saat berjalan; ketika beberapa ekstensi diaktifkan bersama, sulit menentukan hasil itu sebenarnya disebabkan oleh yang mana. Pertahankan konfigurasi seminimal mungkin dulu, dan setelah muncul kebutuhan nyata, tambahkan satu per satu, lalu catat terpisah gejalanya sebelum diaktifkan, sesudah diaktifkan, dan setelah dinonaktifkan kembali.

**Baca lanjutan:** [Extension](/reference/glossary#extension) · [Rekomendasi plugin dan cara memilihnya](/plugins/) · [Extension pertama](/guide/first-extension)

## Apakah aman memasang plugin pihak ketiga di Pi? {#are-third-party-packages-safe}

**Jawaban singkat: Tidak bisa dianggap aman begitu saja; “bisa dipasang” hanya berarti formatnya kompatibel, bukan berarti asal-usul, kode, dan izinnya sudah lolos pemeriksaan.**

Extension berjalan dengan izin pengguna saat ini dan dapat mengeksekusi kode apa pun; Skill juga bisa mengarahkan Agent menjalankan skrip atau menimbulkan efek samping. Sebelum memasang, periksa penulis, repositori, sumber daya yang sebenarnya disertakan, dependensi, dan izinnya; saat menangani file penting, gunakan izin paling minimal, cadangan, atau lingkungan terisolasi, dan setelah pemasangan lakukan verifikasi kecil yang bisa dibalik.

**Baca lanjutan:** [Package](/reference/glossary#package) · [Izin, isolasi, dan verifikasi](/guide/safety) · [Penjelasan keamanan Pi Packages](https://pi.dev/docs/latest/packages)

## Apakah Project Trust itu sandbox? {#is-project-trust-a-sandbox}

**Jawaban singkat: Bukan. Project Trust hanya mengendalikan apakah pengaturan, sumber daya, Package, dan Extension tingkat proyek dimuat.**

Begitu Anda mulai bekerja di dalam direktori, tool bawaan Pi dan Extension yang sudah dimuat tetap berjalan dengan izin pengguna saat ini; file konteks seperti `AGENTS.md` dan `CLAUDE.md` juga memiliki aturan pemuatan tersendiri. Untuk benar-benar mengisolasi proyek yang tidak tepercaya, diperlukan container, mesin virtual, akun terbatas, atau batas tingkat sistem operasi lainnya; tidak bisa hanya mengandalkan “menolak kepercayaan”.

![Project Trust hanya menentukan apakah sumber daya proyek dimuat; kemampuan file, perintah, dan jaringan Pi tetap dibatasi oleh akun, container, atau mesin virtual.](/images/diagrams/project-trust-boundary.svg)

*Diagram: Trust mengatur “apakah dimuat”, lingkungan isolasi mengatur “apa yang bisa dilakukan”.*

**Baca lanjutan:** [Pi Security](https://pi.dev/docs/latest/security) · [Izin, isolasi, dan verifikasi](/guide/safety)

## Belum menemukan jawabannya?

Gunakan dulu pencarian di situs dengan kata kunci bahasa Indonesia atau Inggris, misalnya “konteks / Context”, “pemadatan / Compaction”, “subagent / Sub-agent”. Jika pertanyaannya memerlukan langkah operasional lengkap, kembalilah ke [alur utama Buku Pi](/guide/); jika pertanyaan itu berasal dari penggunaan nyata dan belum tercakup di halaman ini, jelaskan versi yang dipakai, lokasi tindakan, hasil yang diharapkan, dan gejala sebenarnya di kanal Issues repositori proyek.
