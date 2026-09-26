---
title: "Prolog: Kenali dulu penulis Pi, Mario Zechner"
description: Dari libGDX dan RoboVM hingga Pi dan Earendil, pahami lewat garis waktu bagaimana pengalaman Mario Zechner masuk ke dalam desain Pi.
prev:
  text: Pedoman dan keterangan edisi belajar terbuka 2026
  link: /guide/edition-2026
next:
  text: Sebelum instalasi, siapkan dulu terminal dan lingkungan
  link: /guide/before-install
---

<span class="library-status">PROLOGUE · Penulis dan karyanya</span>

# Kenali dulu penulis Pi, Mario Zechner

Sebelum memasang Pi, luangkan sedikit waktu untuk mengenal penulisnya.

Mario Zechner adalah seorang pengembang perangkat lunak, coach, pembicara, dan angel investor. Di situs pribadinya, ia merangkum bahwa dirinya memiliki lebih dari 15 tahun pengalaman akademik, wirausaha, industri, dan open source, dengan pekerjaan teknis yang mencakup grafika komputer, compiler, ilmu data, dan machine learning terapan. Pi bukanlah kali pertama ia membuat tool pengembangan, dan bukan percobaan yang tiba-tiba beralih ke AI secara kebetulan. Di belakangnya tersambung lebih dari sepuluh tahun proyek open source, suka duka komersialisasi, dan pengalaman merancang tool.

![Situs pribadi dan daftar artikel Mario Zechner](/images/mario-zechner/01-mario-website.webp)

<p class="image-caption">Situs pribadi Mario menuliskan identitasnya sebagai developer, coach, dan speaker. Tangkapan layar disimpan pada 2026-09-09; isi halaman akan terus diperbarui.</p>

::: info Cara membaca garis waktu ini
Ini adalah garis waktu pengalaman karier publik, bukan biografi pribadi. Tahun dan fakta diprioritaskan dari tulisan Mario sendiri, sejarah resmi libGDX, dan halaman resmi Pi; tahun kelahiran, pendidikan, dan pengalaman pribadi yang tidak ditulis dengan jelas oleh sumber publik tidak akan diterka. Frasa “memengaruhi Pi” dalam teks ini adalah analisis editor berdasarkan pernyataannya di publik, dan dipisahkan dari pemaparan fakta.
:::

## Sekilas melihat seluruh garis waktu ini

| Waktu | Tahap | Yang ditinggalkan |
| --- | --- | --- |
| 2009 | Membuat AFX berawal dari masalah pengembangan game Android | Selesaikan dulu titik nyeri Anda sendiri |
| 2010—2014 | AFX di-open-source dan berkembang menjadi libGDX, merilis 1.0 | Framework lintas platform, komunitas open source, dan fondasi yang dapat diperluas |
| 2013—2016 | Ikut dalam komersialisasi RoboVM, mengalami akuisisi, penutupan kode, dan penghentian | Kewaspadaan jangka panjang terhadap kendali open source dan batas komersial |
| 2016—2024 | Berangsur menyerahkan libGDX, melanjutkan pengembangan independen, konsultasi, pengajaran, dan proyek publik | Membuat proyek tetap terpelihara setelah lepas dari individu |
| 2025 | Mendalami penggunaan Coding Agent, ikut dalam VibeTunnel, mengembangkan Sitegeist dan Pi | Beralih dari memakai Agent orang lain menuju membuat Harness sendiri |
| 2026-04 | Bergabung dengan Earendil, membawa Pi masuk ke tim | Mencari keseimbangan antara keluarga, keberlanjutan open source, dan dukungan komersial |
| 2026 hingga kini | Terus bertanggung jawab atas arah teknis Pi, inti tetap MIT | “Fondasi tetap kecil, alur kerja ditentukan pengguna” |

## 2009: Semuanya dimulai dari ketidaknyamanan mengembangkan game Android

Pada pertengahan 2009, untuk membuat game Android, Mario mulai mengembangkan framework bernama AFX (Android Effects). Saat itu, menerapkan perubahan ke perangkat Android untuk diuji sangat merepotkan, sehingga ia membuat kode yang sama juga dapat berjalan di desktop. Masalah kecil yang tampak spesifik ini kemudian menjadi salah satu ciri terpenting libGDX: mencakup banyak platform dengan satu cara pengembangan.

Titik awal ini sangat menjelaskan metode kerja Mario selanjutnya. Ia biasanya tidak merancang platform yang agung terlebih dahulu, melainkan menemukan hambatan yang tidak dapat ia tahan dulu, baru membuat tool yang cukup kecil dan ia sendiri mau pakai setiap hari.

## 2010—2014: libGDX berubah dari tool pribadi menjadi framework open source

Pada Maret 2010, Mario meng-open-source-kan AFX dengan lisensi LGPL; pada 6 Maret 2010, kode libGDX pertama dipublikasikan. Proyek ini cepat mendapat kontributor, dan setelah tutorial, pengalaman instalasi, serta fiturnya berangsur disempurnakan, ia makin banyak dipakai pengembang game Android.

![Halaman sejarah resmi libGDX](/images/mario-zechner/02-libgdx-history.webp)

<p class="image-caption">Sejarah resmi libGDX dimulai dari AFX pada 2009, dan merekam open source proyek, pertumbuhan komunitas, serta serah terima selanjutnya. Tangkapan layar disimpan pada 2026-09-09.</p>

Setelah 2012, libGDX terus meluas ke HTML5/WebGL dan iOS, serta pindah ke sistem kolaborasi dan dependensi yang lebih matang seperti GitHub dan Maven. Pada 20 April 2014, setelah empat tahun pengembangan, libGDX 1.0 resmi dirilis.

libGDX kemudian dipakai banyak game dan tool. Perlu dibedakan dengan jelas: Mario tidak ikut membuat Slay the Spire; game itu memakai framework libGDX yang ia gagas. Ingress juga pernah memakai libGDX, sedangkan Pokémon Go tidak. Yang benar-benar layak diperhatikan bukanlah “ada karya terkenal yang berkaitan dengan penulisnya”, melainkan sebuah framework open source pribadi yang akhirnya menjadi fondasi karya ciptaan orang lain.

![Slay the Spire di libGDX Showcase](/images/mario-zechner/08-libgdx-slay-the-spire.webp)

<p class="image-caption">Showcase resmi libGDX memuat Slay the Spire yang dibuat memakai framework ini. Penulis framework dan penulis game adalah dua hal yang berbeda.</p>

## 2013—2016: Pengalaman dan pelajaran komersialisasi dari RoboVM

Agar aplikasi Java/JVM dapat masuk ke iOS, komunitas libGDX memakai RoboVM. RoboVM dapat mengompilasi kode JVM di muka dan menjalankannya di iOS; Mario bergabung ke tim sejak awal, dan bertanggung jawab atas komponen komersial proprietary pertama — debugger. Tim kemudian berkembang, dan melengkapi kemampuan komersial seperti integrasi IDE dan Xcode storyboard.

RoboVM kemudian diakuisisi Xamarin, dan inti open source-nya ikut ditutup; setelah Xamarin diakuisisi Microsoft, RoboVM dihentikan. Dalam tinjauan balik tahun 2026, Mario berkata terus terang bahwa pengalaman ini membuatnya lama waspada terhadap wirausaha yang didukung modal ventura dan komersialisasi open source. Ia bukan pemegang saham pengendali, tetapi harus menghadapi kritik komunitas atas keputusan menutup kode.

Namun sejarah ini juga meninggalkan hasil lain: kontributor libGDX mem-fork kode lama menjadi MobiVM, dan berangsur memulihkan kemampuannya, serta terus menopang backend iOS libGDX. Bagi Mario, “siapa pun boleh mem-fork” bukan hiasan di halaman lisensi, melainkan jalur kelangsungan proyek yang ia alami sendiri.

## 2016—2024: Menyerahkan proyek, sekaligus membawa teknologi ke masalah publik

Sekitar 2016, Mario menyerahkan pekerjaan pemeliharaan utama libGDX kepada tim kontributor inti. Sejarah resmi libGDX mencatat bahwa pada 2017 muncul versi pertama yang tidak dirilis oleh Mario. Proyek itu tidak berhenti karena hal tersebut, dan tetap terus diperbarui, memigrasikan sistem build, serta menggelar kegiatan komunitas.

Pada periode ini, ia terus terlibat dalam Spine, tool komersial yang dibangun di atas libGDX, dan juga bekerja sebagai pengembang independen, konsultan, coach, pembicara, dan investor. Ia juga memakai kemampuan data dan perangkat lunak untuk harga pangan, kebijakan publik, dan isu sosial. Situs pribadinya merangkum pengalaman ini bukan sebagai satu jabatan yang berkelanjutan, melainkan kombinasi akademik, wirausaha, industri, open source, dan partisipasi publik.

Tahap ini penting untuk memahami Pi: proyek open source yang sehat tidak seharusnya hanya bisa bergantung pada penulisnya yang menanggungnya selamanya; tool juga tidak perlu menentukan bagi penggunanya apa yang akhirnya harus dikerjakan.

## 2025: Dari pemakaian intensif Coding Agent hingga membuat Pi sendiri

Pada April 2025, Mario mulai intensif memakai Claude Code. Ia menyukai kesederhanaan dan sifat mudah diprediksi versi awalnya, tetapi berangsur tidak dapat menerima tool yang terus menambahkan fitur yang tidak ia butuhkan, menyembunyikan konteks, serta mengubah system prompt dan perilaku model. Ia ingin melihat dengan jelas apa yang sebenarnya diterima model, menyimpan Session lengkap yang dapat diproses, dan dapat bebas mengganti model, tool, serta antarmuka.

Pada Mei tahun yang sama, ia membuat VibeTunnel bersama Peter Steinberger dan Armin Ronacher; setelah itu ia mengembangkan Agent peramban Sitegeist. Memasuki 2025, ia mulai memadatkan pengalaman bertahun-tahun memakai LLM dan mengembangkan Agent menjadi Pi: menulis antarmuka multi-model terpadu `pi-ai` lebih dulu, lalu Agent loop, antarmuka terminal, dan akhirnya Coding Agent.

![Artikel Mario yang menjelaskan pembuatan Coding Agent minimalis](/images/mario-zechner/03-pi-building-article.webp)

<p class="image-caption">Mario menerbitkan tulisan panjang pada 2025-11-30, yang menjelaskan secara sistematis komposisi dan pilihan desain Pi. Rekaman terminal dalam tangkapan layar berasal dari halaman penulis.</p>

Prinsip publiknya sangat lugas: jika ia sendiri tidak membutuhkannya, jangan masukkan ke inti. Karena itu Pi tidak mengabadikan mode rencana, subagent, MCP, perintah latar belakang, atau dialog izin menjadi satu-satunya jawaban, melainkan menyediakan Extension, Skill, template, dan tema, agar pengguna dapat merangkainya sendiri.

Ini bukan “fiturnya sedikit karena belum selesai”, melainkan desain produk yang punya pendirian: inti hanya menyediakan primitif, dan hak menentukan alur kerja diserahkan kepada pengguna.

## 2026: Pi melangkah dari proyek pribadi menuju Earendil

Pi semakin banyak dipakai proyek lain, termasuk OpenClaw yang dibangun di atas Pi. Perhatian pun meningkat; Mario menerima tawaran investasi dan pekerjaan, dan juga menghadapi pilihan apakah akan berwirausaha sendiri di sekitar Pi.

Pada akhirnya ia tidak mendirikan perusahaan rintisan bertekanan tinggi yang hanya berpusat pada Pi. Dalam “I've sold out”, Mario menulis dengan jelas: ia ingin menemani anaknya yang masih kecil, dan juga ingin membentuk tim kecil agar pengembangan open source Pi dapat berkelanjutan, sekaligus menghindari terulangnya sejarah RoboVM.

Pada 8 April 2026, ia mengumumkan bergabung dengan Earendil yang dihuni Armin Ronacher dan rekan-rekannya, dan membawa Pi masuk ke tim. Kepemilikan Pi beralih ke Earendil; Mario adalah pemegang saham perusahaan, dan bersama Armin serta Colin bertanggung jawab atas keputusan Pi, serta terus memimpin arah teknis, roadmap, merge, dan batas open source.

![Artikel Mario yang mengumumkan bergabungnya ia dengan Earendil](/images/mario-zechner/04-earendil-announcement.webp)

<p class="image-caption">“I've sold out” bukan sekadar pernyataan “proyeknya dijual”. Isi utama artikel membahas pilihan keluarga, keberlanjutan open source, pelajaran dari RoboVM, dan tata kelola Pi.</p>

Repositori proyek kemudian berpindah dari akun pribadi Mario ke organisasi Earendil, dan nama paketnya disesuaikan menjadi `@earendil-works/pi-coding-agent`. Pada saat verifikasi halaman ini, inti Pi masih memakai MIT License, dan situs resminya adalah `pi.dev`.

![Halaman depan situs resmi Pi](/images/mario-zechner/07-pi-homepage.webp)

<p class="image-caption">Situs resmi Pi mendefinisikan proyek ini sebagai minimal agent harness: buat Pi menyesuaikan alur kerja Anda, bukan sebaliknya.</p>

![Halaman profil X Mario Zechner](/images/mario-zechner/05-mario-x-profile.webp)

<p class="image-caption">Akun publik Mario adalah <a href="https://x.com/badlogicgames">@badlogicgames</a>. Jumlah pengikut dan bio termasuk informasi dinamis; tangkapan layar hanya mewakili status halaman pada 2026-09-09.</p>

![Halaman profil X Pi](/images/mario-zechner/06-pi-x-profile.webp)

<p class="image-caption">Akun publik Pi adalah <a href="https://x.com/pidotdev">@pidotdev</a>; situs resmi dan dokumentasi tetap mengacu pada <a href="https://pi.dev/">pi.dev</a>.</p>

## Bagaimana garis waktu ini membantu Anda memahami Pi

Jika hanya melihat daftar fiturnya, Pi mudah dipahami sebagai “satu lagi Coding Agent terminal”. Setelah pengalaman Mario dirangkai, beberapa pilihan desain menjadi lebih jelas:

- **Mengapa intinya tetap terkendali:** libGDX dan Pi sama-sama berangkat dari masalah nyata penulisnya, bukan dari jumlah fitur.
- **Mengapa menekankan kemampuan diperluas:** nilai sebuah fondasi terletak pada orang lain bisa membuat tool dan karya mereka sendiri di atasnya.
- **Mengapa mengutamakan konteks dan Session yang terlihat:** Mario tidak ingin Harness di belakang layar membuat terlalu banyak keputusan yang tidak dapat diperiksa atas nama pengguna.
- **Mengapa mempertahankan inti open source yang dapat di-fork:** penutupan kode RoboVM dan fork komunitas membuat hal ini bukan lagi sekadar gagasan.
- **Mengapa bergabung dengan tim tetapi tetap memimpin secara teknis:** ini adalah penataan realistis untuk mencari keseimbangan antara keberlanjutan open source, dukungan komersial, dan kehidupan pribadi.

Jadi, mempelajari Pi bukan sekadar menghafal perintah. Pohon Session, kumpulan tool minimal, Extension, dan Skill yang akan Anda lihat selanjutnya semuanya dapat ditemukan asal-usulnya dalam pengalaman ini.

## Sumber publik utama

- [Situs pribadi dan perkenalan diri Mario Zechner](https://mariozechner.at/)
- [Sejarah resmi libGDX](https://libgdx.com/history/)
- [Mario: What I learned building an opinionated and minimal coding agent](https://mariozechner.at/posts/2025-11-30-pi-coding-agent/)
- [Mario: I've sold out](https://mariozechner.at/posts/2026-04-08-ive-sold-out/)
- [Situs resmi Pi](https://pi.dev/)
- [Repositori GitHub Pi saat ini](https://github.com/earendil-works/pi)

::: warning Keterangan tangkapan layar dan hak
Tangkapan layar di halaman ini berasal dari halaman publik Mario Zechner, libGDX, Pi, dan X, untuk menjelaskan riwayat tokoh dan proyek; halaman pihak ketiga, merek dagang, tampilan game, dan isi tangkapan layar tidak termasuk dalam MIT License konten orisinal situs ini, dan haknya dimiliki oleh masing-masing pemegang hak.
:::

[Lanjut ke Pelajaran 1: Pemeriksaan sebelum instalasi →](/guide/before-install)
