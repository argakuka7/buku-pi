---
title: Rekomendasi Plugin Pi
description: Merapikan plugin, Package, dan tool pendamping dari praktik tweet Pi, serta memberi saran pemilihan berdasarkan kebutuhan, risiko, dan sumber yang dapat diverifikasi saat ini.
prev:
  text: Skill, Extension, dan Pi Package
  link: /guide/skills-extensions-packages
next:
  text: 'Setelah instalasi: pembaruan, logout, dan uninstalasi'
  link: /guide/lifecycle-management
---

<span class="library-status">PLUGIN GUIDE · Mulai dari kebutuhan, bukan paket serba ada</span>

# Rekomendasi Plugin Pi

Dalam tweet-tweet saya, saya sempat menyebut banyak plugin Pi. Setelah semuanya dikumpulkan, kesimpulan terpentingnya bukan “semuanya layak dipasang”, melainkan: **jelaskan dulu apa yang Anda butuhkan, lalu coba hanya satu plugin yang paling mendekati kebutuhan itu.**

Halaman ini merapikan ulang rekomendasi yang berserakan di [arsip tweet](/tweets/04-skills-extensions), dan pada 23 September 2026 memeriksa ulang sumber proyek, pintu masuk instalasi, dan risiko utamanya. Direktori Package Pi berubah dengan cepat, jadi yang disajikan di sini adalah peta pilihan dengan tanggal verifikasi, bukan peringkat permanen atau daftar wajib pasang.

::: warning Lihat kode sumber sebelum memasang Package pihak ketiga
Pi Package dapat menjalankan kode dengan izin pengguna saat ini. Nama yang mengandung `safe`, `permission`, atau `sandbox` juga tidak berarti ia otomatis tepercaya. Pastikan dulu repositori dan pemeliharanya, lalu periksa kode sumber, dependensi, dan izinnya; untuk rekomendasi lama yang sumbernya tidak jelas, halaman ini tidak menyediakan perintah instalasi.
:::

## Level 0: Tugas pertama tanpa plugin

Jika Anda belum menyelesaikan [tugas pertama](/guide/first-task), jangan dulu memasang Package pihak ketiga mana pun. Pi versi asli sudah dapat membaca, menulis, dan mengedit file serta menjalankan perintah, juga menyimpan sesi. Keberhasilan pertama perlu membuktikan bahwa direktori kerja, model, cakupan file, dan alur verifikasi sudah benar, bukan membuktikan berapa banyak plugin yang bisa Anda pasang.

“Plugin apa yang wajib dipasang” adalah pertanyaan yang sering muncul di komunitas, tetapi tidak ada satu set konfigurasi yang cocok untuk semua orang. Paket antarmuka, Plan Mode, sub-Agent, browser, dan sistem izin menyelesaikan masalah yang berbeda; memasang semuanya sekaligus membuat error, konflik pintasan, panggilan model tambahan, dan perubahan izin sulit dilacak penyebabnya.

Setelah menyelesaikan tugas tanpa plugin, gunakan tabel pilihan di bawah untuk mencoba satu per satu.

## Jika hanya ingin memilih satu dulu

| Kebutuhan nyata Anda | Lihat yang mana | Mengapa | Saran saya |
| --- | --- | --- | --- |
| Melihat model, konteks, token, biaya, dan status Git kapan saja | [pi-footer](#pi-footer) | Informasi terpusat, paling cepat terasa manfaatnya | **Pilihan pertama pemula**; muat sementara dulu |
| Ingin keluaran terminal, Diff, Mermaid, dan status tampil lebih lengkap | [pi-cc-extensions](#pi-cc-extensions) | Satu paket mencakup banyak detail interaksi | Coba terpisah dari plugin peningkatan antarmuka lainnya |
| Ingin membuat perencanaan hanya-baca dulu, baru mengizinkan perubahan | [pi-plan-mode](#pi-plan-mode) | Hanya menambah satu tahap kerja yang jelas | Lebih cocok sebagai plugin kedua daripada sub-Agent |
| Ingin menganotasi rencana dan perbedaan kode di browser | [Plannotator](#plannotator) | Menempatkan umpan balik manusia pada lokasi yang konkret | Fiturnya cukup berat; pasang setelah pemakaian stabil |
| Ingin Pi mengoperasikan browser | [Tiga opsi browser](#pilih-satu-plugin-browser) | Cara koneksi dan batas izin ketiganya berbeda | **Pilih satu saja**, pakai akun uji dulu |
| Ingin operasi berbahaya melewati penilaian aturan atau konfirmasi | [Sistem izin](#permission-system) | Menambah aturan allow, deny, ask | Tidak dapat menggantikan container atau sandbox sistem |
| Ingin menyerahkan eksplorasi atau peninjauan ke Agent paralel | [Sub-Agent](#subagents) | Dapat mengisolasi konteks dan memproses secara paralel | Kemampuan lanjutan; pahami dulu model dan biayanya |
| Ingin bereksperimen berulang secara otomatis untuk mengoptimalkan satu metrik terukur | [pi-autoresearch](#pi-autoresearch) | Cocok untuk tugas dengan perintah tes dan skor yang jelas | Gunakan hanya di branch atau worktree terpisah |
| Ingin merender diagram, sketsa arsitektur, atau antarmuka interaktif secara langsung | [pi-generative-ui](#pi-generative-ui) | Cocok untuk hasil yang bersifat visual | Periksa dulu dependensi sistem |
| Ingin menyambung ke Pi yang sedang berjalan dari ponsel | [remote-pi](#remote-pi) | Operasi jarak jauh itu praktis | Pilihan eksperimental; nilai dulu risiko relay dan kredensial |

Jika Anda belum tahu apa yang kurang, jangan memasang apa pun dulu. Selesaikan [tugas pertama](/guide/first-task), temui satu masalah konkret yang berulang, lalu kembali ke sini untuk memilih.

::: tip Saat plugin sudah bermasalah, jangan terus menumpuk instalasi
Untuk [Extension gagal dimuat](/reference/troubleshooting#extension-failed), periksa dulu lokasi pemuatan dan baseline yang bersih; bila beberapa plugin bermasalah bersamaan, pulihkan satu per satu menurut [plugin saling bertabrakan](/reference/troubleshooting#resource-conflict). Pada tahap diagnosis, ubah hanya satu variabel dalam satu waktu.
:::

## Level 1: Peningkatan antarmuka yang cocok dicoba lebih dulu

### pi-footer: Bilah status {#pi-footer}

`pi-footer` memusatkan model, Provider, tingkat penalaran, pemakaian konteks, token, biaya, dan status Git di bagian bawah. Ia paling cocok untuk situasi “saya selalu ingin tahu Pi saat ini sebenarnya memakai apa dan berapa banyak konteks yang tersisa”.

- Sumber yang diverifikasi saat ini: [wobondar/pi-footer](https://github.com/wobondar/pi-footer)
- Cocok untuk: memantau status sehari-hari, mengendalikan biaya, dan segera menyadari konteks yang terlalu panjang.
- Perhatian: ada lebih dari satu proyek dengan nama sama, jadi jangan mencari hanya berdasarkan namanya saat memasang.

Coba dulu sementara:

```bash
pi -e npm:pi-footer
```

Setelah memastikan tidak menutupi area input dan font serta ikon tampil normal, barulah pasang permanen:

```bash
pi install npm:pi-footer
```

### pi-cc-extensions: Paket pengalaman terminal {#pi-cc-extensions}

`pi-cc-extensions` lebih menyerupai sekumpulan peningkatan antarmuka: keluaran terformat, Diff rich text, Mermaid, serta tampilan konteks dan status terkumpul dalam satu Package.

- Sumber yang diverifikasi saat ini: [minuque/pi-cc-extensions](https://github.com/minuque/pi-cc-extensions)
- Cocok untuk: sering membaca perbedaan kode, diagram, dan keluaran yang panjang.
- Perhatian: cakupannya cukup luas. Nonaktifkan dulu plugin footer, bilah status, dan pemercantik keluaran lainnya untuk menghindari render ganda atau konflik pintasan.

```bash
pi -e npm:pi-cc-extensions
```

Jika sudah puas, jalankan:

```bash
pi install npm:pi-cc-extensions
```

## Level 2: Pilih sesuai tugas

### pi-plan-mode: Perencanaan hanya-baca yang ringan {#pi-plan-mode}

`@narumitw/pi-plan-mode` menambahkan tahap `/plan` yang hanya-baca, sehingga Pi lebih dulu menjelajah, menjernihkan, dan menuliskan rencana yang dapat dilaksanakan, baru kembali ke mode normal untuk mengubah file. Ia cocok untuk situasi “perubahan cukup besar, tetapi belum membutuhkan antarmuka peninjauan di browser”.

- Sumber yang diverifikasi saat ini: [narumiruna/pi-extensions · pi-plan-mode](https://github.com/narumiruna/pi-extensions/tree/main/packages/pi-plan-mode)
- Cocok untuk: refactor, perubahan lintas file, dan tugas yang perlu memastikan batasnya terlebih dahulu.
- Perhatian: Plan Mode membatasi tahap kerja saat ini, bukan isolasi izin sistem; setelah keluar dari tahap perencanaan, perubahan nyatanya tetap harus diperiksa.

Muat sekali di proyek uji terlebih dahulu:

```bash
pi -e npm:@narumitw/pi-plan-mode
```

Ajukan hanya satu tugas perencanaan, pastikan ia tidak mengubah file dan rencananya mampu menunjukkan file target serta cara verifikasinya, barulah putuskan apakah akan memasang secara permanen.

### Plannotator: Perencanaan visual dan peninjauan kode {#plannotator}

Plannotator menambahkan persetujuan rencana di browser, anotasi balasan, dan peninjauan perbedaan kode untuk Pi. Ia cocok untuk proyek yang lebih besar yang membutuhkan “Agent menyerahkan rencana dulu, manusia memberi catatan per item, baru kemudian dijalankan”.

- Sumber yang diverifikasi saat ini: [backnotprop/plannotator](https://github.com/backnotprop/plannotator)
- Package saat ini: [`@plannotator/pi-extension`](https://pi.dev/packages/%40plannotator/pi-extension)
- Cocok untuk: perubahan besar, peninjauan oleh banyak orang, dan tugas yang perlu menempatkan umpan balik pada paragraf atau baris kode tertentu.
- Perhatian: ia akan menjalankan antarmuka peninjauan di browser dan menambah lebih banyak pintu masuk operasi daripada Plan Mode murni terminal; saat baru mulai belajar Pi, belum perlu memasangnya lebih dulu.

Coba dulu sementara Package npm saat ini:

```bash
pi -e npm:@plannotator/pi-extension
```

Setelah memastikan halaman peninjauan di browser dapat terbuka, umpan balik dapat kembali ke sesi saat ini, dan tidak ada proses latar yang tidak diperlukan yang tertinggal setelah keluar, barulah pasang permanen.

### Plugin browser: pilih hanya satu {#pilih-satu-plugin-browser}

Ketiga opsi ini bukan sekadar “kuat, sedang, lemah”, melainkan tiga jalur yang berbeda. Jangan memasang semuanya sekaligus lalu membandingkan, karena akan sulit menentukan plugin mana yang mengendalikan browser.

| Proyek | Skenario yang lebih cocok | Prasyarat dan batas | Sumber saat ini |
| --- | --- | --- | --- |
| `pi-browser-harness` | Operasi web sehari-hari, menginginkan kemampuan yang cukup lengkap | Otomasi browser sendiri dapat membaca halaman dan menjalankan operasi; gunakan dulu akun uji dan lingkungan non-sensitif | [amankumarsingh77/pi-browser-harness](https://github.com/amankumarsingh77/pi-browser-harness) |
| `pi-agent-browser-native` | Menginginkan jembatan native yang lebih ringan | Perlu memasang `agent-browser` hulu terlebih dahulu, dan memenuhi syarat versi Pi yang dicatat proyek | [fitchmultz/pi-agent-browser-native](https://github.com/fitchmultz/pi-agent-browser-native) |
| `pi-chrome` | Ingin menyambungkan ke Chrome asli yang sudah ada | Ekstensi Chrome memerlukan izin yang cukup luas seperti tab dan skrip; jangan menyambungkan ke akun utama yang biasa dipakai terlebih dahulu | [tianrendong/pi-chrome](https://github.com/tianrendong/pi-chrome) |

Urutan pilihan saya: untuk tugas web biasa, lihat `pi-browser-harness` dulu; jika sudah memakai `agent-browser`, pertimbangkan jembatan native; dan hanya saat benar-benar membutuhkan sesi Chrome yang ada, barulah pertimbangkan `pi-chrome`.

Sebelum memasang, masuk ke masing-masing repositori dan baca prasyarat terbarunya. Saat verifikasi, berikan hanya satu tugas halaman tanpa data sensitif, misalnya: “Buka halaman uji, baca judulnya, jangan kirimkan formulir apa pun.”

### pi-generative-ui: Antarmuka generatif {#pi-generative-ui}

`pi-generative-ui` dapat merender diagram, sketsa arsitektur, sketsa antarmuka, dan sejenisnya menjadi jendela interaktif; cocok untuk tugas yang “lebih baik digambarkan langsung daripada dijelaskan dengan teks”.

- Sumber yang diverifikasi saat ini: [Michaelliv/pi-generative-ui](https://github.com/Michaelliv/pi-generative-ui)
- Cocok untuk: diagram data, arsitektur sistem, prototipe interaktif, dan penjelasan visual.
- Perhatian: dependensi runtime untuk macOS, Linux, dan Windows berbeda; khususnya Windows, periksa dulu syarat .NET dan WebView2 yang dicantumkan proyek.

```bash
pi -e npm:pi-generative-ui
```

### pi-autoresearch: Siklus eksperimen otomatis {#pi-autoresearch}

`pi-autoresearch` akan terus mengubah, menjalankan tes, dan mencatat hasil di sekitar satu tujuan yang dapat diukur, lalu mempertahankan eksperimen yang lebih baik. Ia cocok untuk masalah dengan metode pengukuran yang jelas seperti performa, akurasi, dan ukuran build, tetapi tidak cocok untuk tujuan tanpa standar penilaian seperti “membuat proyek secara keseluruhan lebih baik”.

- Sumber yang diverifikasi saat ini: [davebcn87/pi-autoresearch](https://github.com/davebcn87/pi-autoresearch)
- Cocok untuk: eksperimen yang memiliki perintah tes tetap, metrik yang jelas, dan kode yang dapat di-rollback.
- Batas penting: proyeknya sendiri menyarankan menjalankannya di branch atau worktree terpisah serta ruang kerja yang bersih, dan secara eksplisit mengingatkan risiko izin pengguna penuh.

```bash
pi -e npm:pi-autoresearch
```

Lakukan dulu eksperimen maksimal tiga putaran di repositori kecil, pastikan ia meninggalkan catatan eksperimen dan tidak mengubah file di luar cakupan, barulah pertimbangkan pemasangan permanen.

### pi-extension-doctor: Diagnostik ekstensi {#pi-extension-doctor}

`pi-extension-doctor` adalah tool diagnostik hanya-baca yang dipicu oleh perintah, untuk menemukan konflik ekstensi dan API yang kedaluwarsa. Ia tidak mengubah “plugin bermasalah” secara otomatis menjadi “sudah diperbaiki”, tetapi dapat membantu mempersempit ruang pencarian masalah.

- Sumber yang diverifikasi saat ini: [dmae97/pi-extension-doctor](https://github.com/dmae97/pi-extension-doctor)
- Cocok untuk: sudah memasang banyak Extension dan muncul error pemuatan atau konflik perilaku.
- Perhatian: paket saat ini mensyaratkan Node.js 22.19.0 atau lebih baru; periksa dulu versi mesin Anda dan penjelasan terbaru proyek.

```bash
pi -e npm:pi-extension-doctor
```

### remote-pi: Kontrol jarak jauh {#remote-pi}

`remote-pi` memungkinkan ponsel atau perangkat lain tersambung ke Pi dari jarak jauh; cocok untuk memantau tugas panjang atau melanjutkan operasi saat meninggalkan komputer.

- Sumber yang diverifikasi saat ini: [jacobaraujo7/remote_pi](https://github.com/jacobaraujo7/remote_pi)
- Cocok untuk: pengguna yang sudah memahami sesi, izin, dan risiko akses jarak jauh.
- Perhatian: solusi jarak jauh mungkin melewati jaringan eksternal atau layanan relay. Baca dengan jelas aliran data, cara autentikasi, dan penjelasan keamanan repositori; jangan langsung mencobanya di sesi yang memuat kredensial produksi.

```bash
pi -e npm:remote-pi
```

Extension SSH resmi, `pi-mobile`, Pi Web, dan `tmux + Tailscale` juga muncul di tweet, tetapi masing-masing termasuk contoh resmi, klien, atau alur kerja jarak jauh, sehingga tidak boleh dicampur dengan Package biasa menjadi satu “daftar peringkat plugin”.

## Level 3: Sistem izin dan sub-Agent, pasang terakhir

<a id="permission-system"></a>

### @gotgenes/pi-permission-system: Aturan izin

`@gotgenes/pi-permission-system` dapat menetapkan aturan `allow`, `deny`, `ask`, dan sejenisnya untuk operasi tool, Shell, MCP, Skill, dan sub-Agent; cocok untuk pengguna yang sudah tahu tindakan mana yang ingin dicegat.

- Sumber yang diverifikasi saat ini: [gotgenes/pi-permission-system](https://github.com/gotgenes/pi-permission-system)
- Package saat ini: [`@gotgenes/pi-permission-system`](https://pi.dev/packages/%40gotgenes/pi-permission-system)
- Cocok untuk: menambahkan aturan konfirmasi dan penolakan yang dapat ditinjau ulang pada alur kerja yang stabil.
- Batas penting: plugin izin itu sendiri juga berjalan di dalam proses Pi, sehingga tidak dapat menjadi batas keamanan sistem operasi, dan tidak dapat menggantikan akun terpisah, container, atau mesin virtual.

Jika hanya khawatir tugas pertama salah mengubah file, gunakan dulu direktori latihan kosong, Git, dan verifikasi manual. Muat sistem izin sementara hanya setelah Anda dapat menuliskan satu aturan yang jelas beserta tesnya; jangan langsung percaya hanya karena nama paketnya mengandung `permission`.

<a id="subagents"></a>

### Sub-Agent: pasang terakhir

Sub-Agent dapat menempatkan eksplorasi, implementasi, atau peninjauan ke dalam konteks terpisah, dan juga menjalankan tugas secara paralel. Di komunitas terdapat beberapa implementasi dengan nama yang mirip tetapi antarmuka, cara penjadwalan, dan kemampuan persistensinya berbeda; semuanya juga menghasilkan panggilan model tambahan, dan mungkin memakai model bawaan yang berbeda dari sesi utama Anda.

- Satu solusi yang saat ini masih aktif: [tintinweb/pi-subagents](https://github.com/tintinweb/pi-subagents)
- Cocok untuk: subtugas yang dapat dijelaskan dan diverifikasi secara mandiri, serta pemrosesan paralelnya memang bisa mempersingkat waktu.
- Tidak cocok untuk: tugas pertama, tujuan berlingkup kabur seperti “membuat seluruh proyek bagus”, dan situasi ketika Anda belum memahami biaya model serta konteks sesi.

Sebelum memasang sub-Agent apa pun, Anda harus memastikan empat hal: Provider dan model mana yang dipanggilnya secara bawaan; apakah diizinkan berjalan di latar belakang; tool apa saja yang dapat dipakai subtugas; dan bagaimana menemukan hasil nyatanya setelah gagal atau dihentikan. Buku Pi akan melanjutkan pembahasan pembagian tanggung jawab di [Bagaimana sub-Agent membagi kerja](/guide/subagents), bukan memberikan jawaban “wajib pasang” tanpa syarat di halaman ini.

## Disebut di tweet, tetapi belum diberi perintah instalasi

Nama-nama berikut pernah muncul dalam tweet lama:

- `safe-coder`
- `pi-permission-gate`
- `pi-protected-paths`
- `pi-sandbox`
- `pi-permission-modes`
- `pi-browser-cdp-extension`

Kebutuhan yang diwakilinya tetap penting: membatasi perintah berbahaya, melindungi path sensitif, mengisolasi lingkungan eksekusi, dan mengendalikan browser. Namun verifikasi putaran ini tidak memetakan setiap nama secara unik ke satu sumber saat ini yang masih dapat dipastikan. Di sini hanya jejak pencariannya yang dipertahankan; perintah instalasi tidak diberikan langsung berdasarkan tweet lama.

Jika tujuannya keamanan, gunakan dulu izin akun sistem, direktori uji terpisah, branch Git atau worktree, container, serta Project Trust bawaan Pi dan parameter penonaktifan sumber daya. “Plugin keamanan” pihak ketiga hanya dapat menjadi lapisan tambahan, bukan pengganti batas-batas ini.

## Ini adalah Skill atau tool mandiri, bukan plugin

Di tweet juga pernah direkomendasikan Skill seperti `browser-tools`, `brave-search`, `youtube-transcript`, `gmcli`, `gdcli`, dan `transcribe`. Skill terutama menyediakan penjelasan kerja dan sumber daya pendamping; ia mungkin memanggil tool, tetapi tidak sama dengan Extension yang berjalan di dalam proses Pi.

Sedangkan Pi Desktop, Pi Web, `pi-mobile`, Steel Browser, dan `tmux + Tailscale + Pi` adalah klien, layanan browser, atau alur kerja gabungan. Semuanya bernilai, hanya saja tidak seharusnya dikelola dengan metode “memasang plugin” yang sama. Baca dulu [Skill, Extension, dan Pi Package](/guide/skills-extensions-packages), baru tentukan jenis kemampuan mana yang benar-benar Anda butuhkan.

## Tabel lengkap proyek yang disebut di tweet

Agar nama-nama dalam catatan asli tidak tercecer dan hilang, berikut disusun indeks pencarian menurut tema. **“Sudah tercatat” hanya berarti pernah disebut di tweet, bukan berarti halaman ini sudah memastikan sumber instalasinya saat ini.**

| Tema | Proyek yang muncul di tweet | Cara halaman ini menanganinya |
| --- | --- | --- |
| Antarmuka dan pemantauan konteks | `pi-footer`, `pi-cc-extensions`, `pi-generative-ui`, `pi-context-view` | Tiga yang pertama sudah punya sumber saat ini; `pi-context-view` menunggu pemeriksaan ulang |
| Browser dan web | `pi-browser-harness`, `pi-agent-browser-native`, `pi-chrome`, `pi-browser-cdp-extension`, `pi-web-access` | Tiga Extension browser sudah dirapikan menurut jalurnya; dua yang terakhir sementara dijadikan jejak sejarah |
| Perencanaan, sub-Agent, dan alur kerja | `pi-plan-mode`, `pi-subagents`, Plannotator, `pi-autoresearch`, `pi-extension-doctor` | Plan Mode dan Plannotator sudah dipisahkan menurut bobotnya; sub-Agent hanya diberi kandidat lanjutan dan pemeriksaan sebelum pemasangan |
| Kontrol jarak jauh | `remote-pi`, `pi-telegram`, Pi Web, `pi-mobile`, Extension SSH resmi | Hanya `remote-pi` yang diperlakukan sebagai Package eksperimental; sisanya dirapikan terpisah sebagai klien atau solusi jarak jauh |
| Pemadatan konteks | `pi-smart-compact`, `pi-context`, `pi-press`, Hypa | Dipertahankan di [tweet konteks](/tweets/03-sessions-context), nanti akan dibuat pengujian horizontal tersendiri |
| Memori jangka panjang | `pi-memory`, `pi-hermes-memory`, `pi-honcho`, `pi-hindsight` | Termasuk kemampuan berdampak besar; untuk sementara tidak langsung merekomendasikan pemasangan hanya berdasarkan deskripsi fitur |
| Keamanan dan izin | `@gotgenes/pi-permission-system`, `safe-coder`, `pi-permission-gate`, `pi-protected-paths`, `pi-sandbox`, `pi-permission-modes` | Hanya sumber saat ini dari yang pertama yang dipastikan; nama lainnya tetap menjadi jejak sejarah dan tidak dipasang berdasarkan tweet lama |
| Perangkat lunak menarik dan khusus | `pi-arcade`, `pi-unity` | Dipertahankan sebagai studi kasus ekosistem, tidak dimasukkan ke daftar pemasangan pertama untuk pemula |

Tabel ini juga menjelaskan mengapa “Top 20 plugin” tidak bisa dibuat begitu saja: plugin memori jangka panjang, kontrol jarak jauh, browser, dan izin semuanya secara signifikan memperluas batas data dan eksekusi, sehingga membutuhkan pengujian langsung dan pemeriksaan ancaman tersendiri.

## Instalasi dan verifikasi: lalui lima langkah ini

1. **Pastikan sumber**: buka repositori, periksa pemelihara, pembaruan terakhir, README, lisensi, dependensi, dan string instalasinya.
2. **Muat sementara dulu**: bila mendukung Package npm, utamakan `pi -e npm:nama-paket`, jangan langsung memasang permanen.
3. **Lakukan satu tes saja**: berikan satu tugas tunggal yang dapat diamati di direktori kosong atau proyek uji, dan jangan menyambungkan akun produksi.
4. **Periksa efek samping**: pastikan file baru, koneksi jaringan, izin browser, pintasan, dan antarmuka tidak melampaui perkiraan.
5. **Baru putuskan untuk menyimpannya**: pakai `pi install` hanya jika ada nilai berkelanjutan; bila tidak diperlukan, hapus dengan string sumber yang sama.

Perintah pengelolaan yang umum dipakai:

```bash
pi list
pi install npm:pi-footer
pi remove npm:pi-footer
```

Untuk batas lengkap pemasangan, pembaruan, penonaktifan, dan penghapusan data lokal, lihat [Manajemen siklus hidup setelah instalasi](/guide/lifecycle-management). Aturan resmi dan peringatan keamanan Package mengacu pada [dokumentasi Pi Packages](https://pi.dev/docs/latest/packages).

## Bagaimana saya akan terus memelihara daftar ini

Apakah sebuah proyek masih dipelihara, string instalasi, dan dependensi semuanya bisa berubah. Sumber saat ini di halaman ini terakhir diverifikasi pada **23 September 2026**. Setiap kali diperbarui, saya akan mencatat secara terpisah:

- **Penilaian praktik dari tweet**: mengapa saat itu direkomendasikan, dan masalah apa yang diselesaikan.
- **Verifikasi sumber saat ini**: apakah repositorinya tunggal, apakah cara pemasangannya masih berlaku, dan apakah baru-baru ini masih dipelihara.
- **Saran Buku Pi**: hari ini lebih cocok untuk siapa, bagaimana sebaiknya mencobanya, dan dalam kondisi apa jangan memasangnya.

Dengan begitu, tweet mempertahankan garis waktu yang nyata, sedangkan halaman rekomendasi bertugas memberi pilihan yang dapat dijalankan saat ini.