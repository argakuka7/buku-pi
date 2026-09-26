---
title: Daftar Istilah Populer AI dan Agent
description: Menjelaskan dengan bahasa manusia 20 konsep inti AI dan Agent yang berulang muncul dalam pembelajaran Pi, lalu menautkannya ke pelajaran dan FAQ terkait.
prev:
  text: Buku panduan penanganan masalah Pi
  link: /reference/troubleshooting
next:
  text: File dan direktori kerja
  link: /guide/files-and-context
---

<span class="library-status">GLOSSARY · Cari di sini saat menemukan istilah</span>

# Daftar Istilah Populer AI dan Agent

Ini bukan ensiklopedia AI yang berusaha “besar dan lengkap”. Edisi pertama hanya menjelaskan 20 istilah yang berulang muncul di isi utama Buku Pi dan 98 catatan pembelajaran, serta langsung memengaruhi keputusan saat memakai Pi.

Setiap istilah dimulai dengan penjelasan bahasa manusia, lalu dijelaskan apa artinya di dalam Pi. Saat perlu praktik, lanjutkan ke pelajaran terkait; keterangan yang menyangkut versi dan batas produk diverifikasi pada **2026-09-11**.

## Pencarian cepat

| Mengenal Pi | Memahami sesi | Memahami proses berjalan | Memperluas Pi |
| --- | --- | --- | --- |
| [Pi](#pi) | [Context](#context) | [Agent Loop](#agent-loop) | [Tool / Tool Call](#tool-tool-call) |
| [Pi Coding Agent](#pi-coding-agent) | [Context Window](#context-window) | [System Prompt](#system-prompt) | [Skill](#skill) |
| [Coding Agent](#coding-agent) | [Session](#session) | [Token](#token) | [Extension](#extension) |
| [Agent Harness](#agent-harness) | [Session Tree](#session-tree) | [Prompt Cache](#prompt-cache) | [Package](#package) |
| [Agent Runtime](#agent-runtime) | [Compaction](#compaction) | [Cache Hit](#cache-hit) | [Sub-agent](#sub-agent) |

## Pi {#pi}

**Penjelasan bahasa manusia:** Pi adalah nama proyek Agent Harness minimalis. Pi Coding Agent yang dijumpai pengguna biasa adalah aplikasi terminalnya, yang menghubungkan model, tool, sesi, dan direktori kerja sehingga model dapat menangani tugas nyata.

**Artinya di dalam Pi:** Pi adalah nama seluruh proyek open source, sekaligus sebutan sehari-hari untuk produk terminalnya. Saat berkata “buka Pi” atau “minta Pi mengubah file”, biasanya yang dimaksud adalah menjalankan perintah `pi` untuk memakai Pi Coding Agent; saat membahas `pi-agent-core` di lapisan bawah, yang dimaksud adalah pustaka runtime Agent yang dipanggil oleh aplikasi. Pi bukan model, dan tidak menyertakan kuota model; ia perlu dihubungkan ke model yang disediakan Provider.

**Terkait:** [Pi Coding Agent](#pi-coding-agent) · [Agent Harness](#agent-harness) · [Apa sebenarnya Pi itu?](/reference/faq#what-is-pi)

## Pi Coding Agent {#pi-coding-agent}

**Penjelasan bahasa manusia:** Pi Coding Agent adalah aplikasi terminal lengkap yang dibangun di atas komponen dasar Pi, dan juga lapisan yang diminta buku ini untuk Anda pasang dan jalankan.

**Artinya di dalam Pi:** Paket npm `@earendil-works/pi-coding-agent` menyediakan perintah `pi`; ia bergantung pada komponen seperti `pi-agent-core`, serta membawa tool bawaan, sesi, dan kemampuan memuat ekstensi. Sehari-hari orang menyingkatnya menjadi “Pi”, tetapi aplikasi yang dapat dipasang ini tidak boleh disamakan dengan paket Agent Core tersendiri; Skill dan Extension opsional juga bukan tubuh aplikasinya. Ia tetap Harness, bukan model yang bertugas melakukan penalaran. [Daftar paket resmi](https://github.com/earendil-works/pi#all-packages)

**Terkait:** [Pi](#pi) · [Coding Agent](#coding-agent) · [Apa perbedaan Pi dan Pi Coding Agent?](/reference/faq#pi-vs-pi-coding-agent)

## Coding Agent {#coding-agent}

**Penjelasan bahasa manusia:** Coding Agent adalah jenis Agent yang menjadikan tugas kode dan file sebagai objek kerja utamanya. Ia dapat membaca proyek, mengubah file, menjalankan perintah, dan terus menyesuaikan diri berdasarkan hasilnya.

**Artinya di dalam Pi:** “Coding” tidak berarti hanya bisa menulis program. Merapikan Markdown, memeriksa konfigurasi, membuat tabel, atau menjalankan build juga bisa termasuk lingkup kerjanya. Perbedaan kuncinya adalah ia dapat memanggil tool nyata untuk memengaruhi direktori kerja, bukan sekadar memberi jawaban obrolan. Karena itu, kendali izin (permission) dan verifikasi hasil lebih penting daripada tanya jawab biasa.

**Terkait:** [Agent Harness](#agent-harness) · [Tool / Tool Call](#tool-tool-call) · [Apa perbedaan Pi dengan Claude Code dan Codex?](/reference/faq#pi-vs-other-agents)

## Agent Harness {#agent-harness}

**Penjelasan bahasa manusia:** Agent Harness adalah sistem yang berjalan di luar model. Ia bertugas menyiapkan instruksi dan konteks, menyediakan tool, menyimpan sesi, dan membuat model serta tool bekerja sama dalam satu loop.

**Artinya di dalam Pi:** Model menentukan “apa yang ingin dilakukan selanjutnya”, sedangkan Harness menentukan tool apa yang dapat dilihat model, bagaimana tool dijalankan, bagaimana hasilnya dikirim kembali, dan bagaimana percakapan disimpan. Model yang sama yang dimasukkan ke Harness berbeda bisa tampil berbeda karena System Prompt, desain tool, dan penyusunan konteksnya berbeda. Posisi inti Pi justru adalah Harness minimalis yang dapat diubah oleh pengguna.

![Pi sebagai Agent Harness, menghubungkan tujuan pengguna, model, tool, file proyek, dan Session.](/images/diagrams/pi-harness-overview.svg)

*Diagram: Harness adalah lapisan di luar model yang bertanggung jawab menata pekerjaan.*

**Terkait:** [Agent Loop](#agent-loop) · [System Prompt](#system-prompt) · [Apa itu Agent Harness?](/translations/what-is-a-harness)

## Agent Runtime {#agent-runtime}

**Penjelasan bahasa manusia:** Agent Runtime adalah lapisan lingkungan dan siklus hidup yang membuat Agent benar-benar berjalan, dengan perhatian pada status tugas, proses eksekusi, cara pemulihan, dan bagaimana ia dipanggil dalam jangka panjang oleh program lain.

**Artinya di dalam Pi:** Pi memiliki komponen Runtime seperti Session, RPC, SDK, dan event yang dapat diperluas, tetapi “Agent Runtime” bukan nama fitur produk jadi yang berdiri sendiri dalam dokumentasi resmi saat ini. Buku Pi memakai istilah ini untuk memahami bagaimana Pi merentang dari satu interaksi terminal ke cara kerja jangka panjang yang dapat disematkan dan dipulihkan; ini tidak berarti menjalankan `pi` otomatis memberi Anda proses latar belakang yang menetap, tugas terjadwal, atau jaminan keamanan tanpa pengawasan.

**Terkait:** [Session](#session) · [Agent Loop](#agent-loop) · [VPS dan tugas panjang](/guide/vps-and-long-running)

## Agent Loop {#agent-loop}

**Penjelasan bahasa manusia:** Agent Loop adalah loop “memahami tujuan → memilih tindakan → memanggil tool → membaca hasil → menentukan langkah berikutnya”. Loop baru berhenti saat tugas selesai, menemui error, atau memerlukan keputusan manusia.

**Artinya di dalam Pi:** Saat Pi membaca file lalu terus mencari, mengubah, dan menjalankan pemeriksaan, rangkaian tindakan itu adalah bagian dari loop. Model tidak merencanakan seluruh proses sekaligus; setiap hasil tool menjadi masukan baru untuk penilaian langkah berikutnya. Loop bisa memberi eksekusi mandiri, tetapi juga bisa berulang kali coba-coba, jadi tugas perlu syarat berhenti yang jelas dan hasil yang dapat diperiksa secara independen.

**Terkait:** [Agent Harness](#agent-harness) · [Tool / Tool Call](#tool-tool-call) · [Keamanan dan verifikasi](/guide/safety)

## System Prompt {#system-prompt}

**Penjelasan bahasa manusia:** System Prompt adalah penjelasan dasar yang ditempatkan pada posisi prioritas lebih tinggi di setiap permintaan, untuk memberi tahu model peran saat ini, tool yang tersedia, dan persyaratan perilaku umum.

**Artinya di dalam Pi:** Pi sengaja menjaga System Prompt bawaan tetap pendek, dan mengizinkan penyesuaian lewat konfigurasi serta Extension. File konteks seperti `AGENTS.md` dan `CLAUDE.md` di dalam proyek akan melengkapi persyaratan proyek, tetapi keduanya bukan izin sistem operasi. System Prompt yang memanjang atau sering berubah juga menambah pemakaian Context dan memengaruhi prefix prompt cache.

**Terkait:** [Context](#context) · [Prompt Cache](#prompt-cache) · [Project Trust bukan sandbox](/guide/safety)

## Token {#token}

**Penjelasan bahasa manusia:** Token adalah satuan ukur yang dipakai model saat memproses masukan dan menghasilkan keluaran. Ia tidak sama dengan aksara Tionghoa atau kata; satu kata, simbol, atau potongan kode bisa dipecah menjadi jumlah Token yang berbeda.

**Artinya di dalam Pi:** System Prompt, penjelasan tool, percakapan, isi file, dan hasil tool semuanya memakai Token masukan, sedangkan balasan model menghasilkan Token keluaran. Token memengaruhi kapasitas konteks, kecepatan, dan kemungkinan biaya API, tetapi “memakai sedikit” tidak sama dengan kualitas tugas yang tinggi. Penilaian hasil tetap harus kembali ke file, pengujian, dan keadaan bisnis yang nyata.

**Terkait:** [Context Window](#context-window) · [Prompt Cache](#prompt-cache) · [Mengapa Pi disebut lebih hemat Token?](/reference/faq#why-pi-uses-fewer-tokens)

## Context {#context}

**Penjelasan bahasa manusia:** Context adalah himpunan masukan yang benar-benar diterima model pada putaran saat ini dan dapat dipakai untuk menilai, mencakup penjelasan sistem, riwayat sesi yang dipilih, isi file, dan hasil tool.

**Artinya di dalam Pi:** Session dapat menyimpan riwayat berbentuk pohon yang lengkap, tetapi model saat ini hanya menerima jalur efektif yang dibangun dari pohon sesi, beserta materi lain yang ditambahkan Harness pada putaran ini. Keberadaan sebuah file di disk tidak berarti model sudah membacanya; kalimat yang diucapkan jauh sebelumnya juga tidak berarti masih ada di Context saat ini. Batasan penting sebaiknya dituangkan ke file yang dapat dibaca ulang.

**Terkait:** [Session](#session) · [Context Window](#context-window) · [Apa perbedaan Context dan Session?](/reference/faq#context-vs-session)

## Context Window {#context-window}

**Penjelasan bahasa manusia:** Context Window adalah rentang konteks maksimum yang dapat diproses model dalam satu permintaan. System Prompt, pesan riwayat, penjelasan tool, hasil tool, dan ruang balasan yang disisihkan semuanya harus dibagi dari kapasitas ini.

**Artinya di dalam Pi:** Setelah tugas panjang terus menambahkan halaman web, log, dan file, ia akan makin mendekati batas atas jendela. Jendela yang besar tidak berarti materi bisa ditumpuk tanpa batas; konten yang tidak relevan tetap menambah waktu pemrosesan dan mengganggu penilaian. Saat mendekati batas, Pi dapat melakukan Compaction, tetapi tujuan, keputusan, dan kemajuan yang benar-benar tidak boleh hilang harus dituliskan lebih dulu ke file.

![Session, file proyek, dan ringkasan pemadatan dirakit oleh Pi menjadi Context saat ini, lalu dikirim ke model.](/images/diagrams/context-session-compaction.svg)

*Diagram: riwayat yang tersimpan di disk tidak sama dengan seluruh masukan yang diterima model pada putaran ini.*

**Terkait:** [Context](#context) · [Compaction](#compaction) · [Apa yang terjadi saat Context Window penuh?](/reference/faq#context-window-full)

## Session {#session}

**Penjelasan bahasa manusia:** Session adalah satu sesi kerja yang disimpan otomatis oleh Pi. Ia mencatat pesan, perubahan model, pemanggilan tool, ringkasan pemadatan, dan struktur branch, sehingga Anda dapat melanjutkan atau meninjau ulang tugas nanti.

**Artinya di dalam Pi:** Secara bawaan Session disimpan per direktori kerja dalam file JSONL lokal, dan dapat dilanjutkan lewat pintu masuk seperti `/resume` dan `pi -c`. Yang disimpannya adalah riwayat sesi, bukan cadangan versi file proyek, dan bukan pula memori jangka panjang yang dijamin berlaku antarproyek. Saat file rusak karena perubahan, Anda tetap harus mengandalkan Git, cadangan, atau materi asli untuk memulihkannya.

**Terkait:** [Session Tree](#session-tree) · [Context](#context) · [Session dan kelanjutannya](/guide/sessions)

## Session Tree {#session-tree}

**Penjelasan bahasa manusia:** Session Tree adalah struktur pohon tempat Pi menyimpan beberapa jalur percakapan dalam satu file sesi yang sama. Kembali ke node lama untuk melanjutkan pertanyaan akan menumbuhkan branch baru, bukan menimpa jalur aslinya.

**Artinya di dalam Pi:** `/tree` dipakai untuk melihat dan berpindah node di dalam Session yang sama; sedangkan `/fork` dan `/clone` akan membuat file Session baru. Context saat ini hanya dibangun di sepanjang jalur efektif yang dipilih, bukan mengirim semua branch yang gagal kepada model sekaligus. Saat meninggalkan branch, Anda juga dapat membuat ringkasan untuk menyimpan informasi yang layak dibawa.

**Terkait:** [Session](#session) · [Context](#context) · [Penjelasan resmi Pi Sessions](https://pi.dev/docs/latest/sessions)

## Compaction {#compaction}

**Penjelasan bahasa manusia:** Compaction adalah mekanisme yang saat konteks memanjang menggantikan sebagian pesan lama dengan ringkasan, sambil mempertahankan konten terbaru yang asli, sehingga terbuka ruang untuk melanjutkan pekerjaan.

**Artinya di dalam Pi:** Pi akan memadatkan secara otomatis saat mendekati batas jendela model, dan juga dapat dipicu manual lewat `/compact`. Pemadatan mengubah representasi konteks yang dikirim ke model setelahnya; ia tidak membatalkan file yang sudah ditulis ke disk, dan ringkasannya juga bisa melewatkan detail. Sebelum memadatkan, simpan dulu tujuan, lingkup, butir yang selesai, dan langkah berikutnya; setelah memadatkan, periksa ulang dari file.

**Terkait:** [Context Window](#context-window) · [Session](#session) · [Konteks dan pemadatan](/guide/context-and-compaction)

## Prompt Cache {#prompt-cache}

**Penjelasan bahasa manusia:** Prompt Cache adalah mekanisme layanan model untuk memakai ulang prefix prompt yang berulang. Saat bagian awal permintaan yang berurutan tetap sama, provider mungkin tidak perlu memproses seluruh masukan dari awal setiap kali.

**Artinya di dalam Pi:** System Prompt yang stabil, definisi tool, dan sesi yang bersifat menambah di akhir membantu pemakaian ulang prefix; berpindah model, mengubah tool, beralih branch, atau melakukan pemadatan semuanya dapat mengubah bagian yang dapat dipakai ulang. Apakah didukung, berapa lama disimpan, dan bagaimana penagihannya ditentukan oleh Provider dan model; Pi hanya dapat menampilkan informasi pemakaian yang diterimanya.

**Terkait:** [Cache Hit](#cache-hit) · [System Prompt](#system-prompt) · [Pengantar prompt cache](/guide/prompt-caching)

## Cache Hit {#cache-hit}

**Penjelasan bahasa manusia:** Cache Hit berarti sebagian masukan permintaan saat ini berhasil memakai ulang cache yang sudah ada. Ia menggambarkan “berapa banyak perhitungan berulang yang dihemat”, bukan nilai untuk kualitas jawaban.

**Artinya di dalam Pi:** Hit yang tinggi dapat menurunkan latensi atau biaya masukan, tetapi keluarannya tetap bisa melewatkan butir; hit yang rendah juga bisa hanya karena baru berganti model, baru memadatkan, atau cache sudah kedaluwarsa. Field cache yang dikembalikan berbagai Provider tidak seragam, dan antarmuka yang tidak menampilkan data hit belum tentu berarti ada kerusakan. Apakah tugas selesai tetap harus diperiksa lewat hasil kerja nyata.

**Terkait:** [Prompt Cache](#prompt-cache) · [Token](#token) · [Mengapa rasio cache hit cukup tinggi?](/reference/faq#why-cache-hit-is-high)

## Tool / Tool Call {#tool-tool-call}

**Penjelasan bahasa manusia:** Tool adalah kemampuan eksternal yang disediakan Harness kepada model, misalnya membaca file atau menjalankan perintah; Tool Call adalah tindakan model memilih dan memanggil kemampuan itu pada suatu langkah.

**Artinya di dalam Pi:** Pi saat ini menyertakan tool bawaan seperti `read`, `bash`, `edit`, `write`, `grep`, `find`, dan `ls`; kondisi pengaktifannya bisa berbeda di sistem dan pengaturan yang berbeda, dan Extension juga dapat mendaftarkan tool baru. Penjelasan tool akan masuk ke Context, dan hasil pemanggilan akan dikirim kembali ke Agent Loop. Tool yang lebih banyak belum tentu lebih baik; izin dan kompleksitas pemilihan juga akan meningkat.

**Terkait:** [Agent Loop](#agent-loop) · [Extension](#extension) · [Mengapa Pi mempertahankan sedikit tool inti?](/reference/faq#why-few-tools)

## Skill {#skill}

**Penjelasan bahasa manusia:** Skill adalah paket kemampuan khusus yang dimuat sesuai kebutuhan, yang mengajarkan Agent cara menyelesaikan satu jenis tugas lewat penjelasan, skrip, bahan referensi, dan sumber daya.

**Artinya di dalam Pi:** Saat dijalankan, Pi biasanya hanya memasukkan nama dan deskripsi Skill ke Context, lalu membaca `SKILL.md` selengkapnya setelah tugasnya cocok; ini disebut pengungkapan bertahap (progressive disclosure). Skill cocok untuk membakukan alur kerja yang sudah terbukti berjalan, tetapi ia bukan lapisan isolasi izin; Skill juga bisa membawa skrip, atau mengarahkan Agent melakukan operasi yang menimbulkan efek samping, jadi sumbernya tetap harus ditinjau sebelum dipakai.

**Terkait:** [Extension](#extension) · [Package](#package) · [Skill, Extension, dan Package](/guide/skills-extensions-packages)

## Extension {#extension}

**Penjelasan bahasa manusia:** Extension adalah kode ekstensi TypeScript yang dimuat ke dalam proses Pi; ia dapat menambah tool, perintah, antarmuka, dan penanganan event, serta mengubah sebagian perilaku saat berjalan.

**Artinya di dalam Pi:** Extension baru layak dipertimbangkan ketika penjelasan teks tidak cukup untuk mencapai tujuan, misalnya perlu mencegat perintah berbahaya, menambah tool khusus, atau menyimpan status ekstensi. Ia berjalan dengan izin pengguna saat ini yang menjalankan Pi, dan dapat mengeksekusi kode apa pun; Extension tingkat proyek dipengaruhi keputusan pemuatan Project Trust, tetapi setelah dimuat ia tidak masuk ke dalam sandbox.

**Terkait:** [Skill](#skill) · [Package](#package) · [Penjelasan resmi Pi Extensions](https://pi.dev/docs/latest/extensions)

## Package {#package}

**Penjelasan bahasa manusia:** Pi Package adalah wadah distribusi yang dapat menggabungkan Extension, Skill, templat prompt, dan tema, lalu memasang serta membagikannya lewat npm atau Git.

**Artinya di dalam Pi:** Package memecahkan masalah “bagaimana mengirim satu set sumber daya”, bukan tingkat kemampuan baru, dan bukan pula wadah aman. Setelah memasang sebuah Package, yang benar-benar dimuat bisa berupa Extension yang dapat dieksekusi, atau Skill yang memengaruhi perilaku Agent. Pemula sebaiknya memastikan kebutuhan nyata, memeriksa sumber dan isinya, lalu mengaktifkan satu sumber daya yang paling mendekati masalah pada satu waktu.

![Skill menangani metode, Extension menangani kemampuan berjalan, Package menangani pengemasan dan distribusi.](/images/diagrams/skill-extension-package.svg)

*Diagram: ketiganya bukan tingkat kemampuan, dan Package juga bukan wadah aman.*

**Terkait:** [Skill](#skill) · [Extension](#extension) · [Rekomendasi plugin](/plugins/)

## Sub-agent {#sub-agent}

**Penjelasan bahasa manusia:** Sub-agent adalah Agent pembantu yang dijalankan atau didelegasikan Agent utama untuk subtugas yang batasnya jelas; biasanya ia memiliki Context sendiri dan menyerahkan hasilnya kembali ke Agent utama untuk digabungkan.

**Artinya di dalam Pi:** Inti Pi saat ini tidak menyertakan fitur Sub-agent; Anda dapat berlatih pembagian kerja memakai Session terpisah, atau mewujudkan delegasi otomatis lewat Extension atau Package pihak ketiga. Beberapa Agent akan menambah biaya pemanggilan model, serah terima, dan penanganan konflik. Paralelisasi baru benar-benar bernilai ketika subtugas dapat diselesaikan secara mandiri, format deliverable-nya jelas, dan ada satu penanggung jawab verifikasi.

**Terkait:** [Context](#context) · [Agent Loop](#agent-loop) · [Bagaimana Subagent membagi kerja](/guide/subagents)

## Dasar dan batas pemeliharaan halaman ini

- [Situs resmi Pi](https://pi.dev/)
- [Petunjuk penggunaan Pi](https://pi.dev/docs/latest/usage)
- [Pi Sessions](https://pi.dev/docs/latest/sessions)
- [Pi Compaction](https://pi.dev/docs/latest/compaction)
- [Pi Skills](https://pi.dev/docs/latest/skills)
- [Pi Extensions](https://pi.dev/docs/latest/extensions)
- [Pi Packages](https://pi.dev/docs/latest/packages)
- [Pi Security](https://pi.dev/docs/latest/security)
- [Apa itu Agent Harness?](/translations/what-is-a-harness)
- [Daftar isi lengkap 98 tweet](/tweets/)

Halaman ini tidak memelihara daftar model, harga, atau status plugin jangka pendek. Saat konsep baru muncul di isi utama, nilai dulu apakah ia akan berulang kali memengaruhi pemahaman, baru putuskan apakah akan ditambahkan; istilah kandidat di luar edisi pertama tidak akan diperluas lebih awal hanya demi melengkapi ensiklopedia AI.