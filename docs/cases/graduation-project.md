---
title: CASE 08 · Proyek akhir
description: Merangkai kebutuhan, Session, Context, Skill, checkpoint, review independen, dan verifikasi manual dalam satu proyek GitHub yang nyata.
prev: { text: CASE 07 · Review keamanan, link: /cases/safe-review }
next: { text: Kembali ke kursus, link: /guide/ }
---

<span class="library-status">CASE 08 · Proyek akhir</span>

# Proyek akhir Bluebook Pi

## Hasil

Anda akan menyerahkan proyek GitHub yang nyata kepada Pi: baca kebutuhan dan repositori terlebih dahulu, lalu susun rencana dalam Session bernama; setelah disetujui manusia, ubah file, jalankan pengujian, dan simpan checkpoint; terakhir, minta Session lain yang hanya-baca memakai Review Skill untuk memeriksa ulang secara independen, lalu Anda sendiri yang menyelesaikan verifikasi akhir.

Proyeknya tidak besar, tetapi rantainya lengkap. Standar kelulusannya bukan “Pi berhasil menulis satu dokumen”, melainkan Anda bisa menjelaskan batas setiap langkah dan menilai apakah pekerjaan itu selesai dengan bukti nyata di dalam proyek.

<img class="diagram-figure" src="/images/diagrams/graduation-project-flow.svg" alt="CASE 08 alur verifikasi tiga pihak: pembelajar menyetujui rencana dan verifikasi akhir, Session utama Pi melaksanakan, Session review independen memeriksa secara hanya-baca" />

Gambar ini memuat tiga aturan keras: Session utama tidak boleh menyetujui rencananya sendiri, Session review tidak boleh mengubah file, dan apakah akhirnya lolos ditentukan oleh manusia.

## Apa yang akan diubah kali ini

Repositori latihan memakai salinan proyek Bluebook Pembelajaran Pi. Tugasnya adalah menambahkan “Daftar periksa penyelesaian tugas” ke dalam buku panduan referensi, sekaligus menghubungkannya dari beranda dan sidebar. Kebutuhannya sengaja dibatasi pada tiga file situs (satu halaman baru, satu daftar isi, satu konfigurasi navigasi) dan satu checkpoint lokal — cukup untuk melatih alur proyek nyata tanpa mengalihkan perhatian ke kode bisnis yang rumit.

Anda bisa mempratinjau ketiga materi ini lebih dulu; latihan resminya akan menyalinnya dari klon versi tetap:

- <a href="/examples/graduation-project/requirements.md" download>kebutuhan proyek kelulusan</a>
- <a href="/examples/graduation-project/checkpoint-template.md" download>template checkpoint</a>
- <a href="/examples/graduation-project/bluebook-graduation-review/SKILL.md" download>Skill review independen</a>

::: warning Batas keamanan
Selalu bekerja di repositori latihan hasil klon baru. Sepanjang proses jangan melakukan deploy, jangan menjalankan `git add`, `git commit`, atau `git push`, dan jangan membaca kredensial. Daftar putih tool pada perintah akan mengurangi tool yang tersedia, tetapi itu bukan sandbox sistem operasi.
:::

## Tahap 0 · Siapkan salinan terisolasi

Jalankan di terminal biasa. Ganti `<URL-repositori-latihan>` dengan URL salinan repositori proyek ini (klon Anda sendiri), lalu jalankan blok berikut:

```bash
cd ~/Downloads
git clone <URL-repositori-latihan> pi-bluebook-graduation
cd pi-bluebook-graduation
git checkout --detach ea68e5f   # ganti dengan commit pada salinan Anda bila hash ini tidak ada
npm ci
npm run check:content
git rev-parse HEAD
git status --short
```

Jika `pi-bluebook-graduation` sudah ada, pakai nama direktori baru, jangan menimpa direktori lama. `git status --short` di awal seharusnya tidak menghasilkan keluaran. Halaman ini secara tetap memakai `ea68e5f` sebagai baseline latihan; `checkout` pada tahap persiapan hanya dipakai untuk berpindah ke versi yang sudah diverifikasi, dan setelah masuk ke Pi tidak ada lagi operasi tulis Git. Simpan nomor commit lengkap dari `git rev-parse HEAD`; hentikan lebih dulu bila materi dan repositori tidak konsisten. Windows Git Bash juga bisa memakai `~/Downloads`; repositori hasil klon baru di sini tidak diletakkan di `pi-practice` milik pelajaran sebelumnya. Commit `ea68e5f` adalah baseline repositori sumber berbahasa Mandarin; bila Anda mengerjakan edisi Bahasa Indonesia, pakai repositori edisi ini dan commit Anda sendiri, lalu catat nomor commit itu di checkpoint.

Saat nanti membuka terminal biasa yang lain, masuk dulu ke direktori repositori latihan, baru jalankan Pi atau pemeriksaan proyek.

Letakkan ketiga materi di samping repositori, bukan di dalamnya:

```bash
cd ..
mkdir -p pi-bluebook-graduation-materials/bluebook-graduation-review
cp pi-bluebook-graduation/docs/public/examples/graduation-project/requirements.md \
  pi-bluebook-graduation-materials/requirements.md
cp pi-bluebook-graduation/docs/public/examples/graduation-project/checkpoint-template.md \
  pi-bluebook-graduation-materials/checkpoint-template.md
cp pi-bluebook-graduation/docs/public/examples/graduation-project/bluebook-graduation-review/SKILL.md \
  pi-bluebook-graduation-materials/bluebook-graduation-review/SKILL.md
cd pi-bluebook-graduation
```

Judul halaman yang ditetapkan kebutuhan adalah kontrak: jangan menerjemahkan atau menggantinya sendiri, karena pemeriksaan nanti mencocokkannya dengan judul itu.

Buka ketiga materi dan periksa isinya. File kebutuhan adalah kontrak verifikasi, template menetapkan kolom checkpoint, dan Skill hanya menetapkan metode review; tidak satu pun boleh memuat instruksi pemasangan atau deploy.

## Tahap 1 · Bentuk Session utama, hanya untuk membuat rencana

Jalankan Session yang diberi nama:

```bash
pi --name "CASE 08 Proyek akhir" --no-extensions --no-skills --no-context-files \
  --tools read,write,edit,grep,find,ls,bash
```

Di sini, Skill dan Extension yang ditemukan otomatis dimatikan dulu agar sumber daya yang tidak dikenal tidak mengubah perilaku tugas utama. Tidak memasang Extension bukan berarti melewatkan satu pelajaran, melainkan menilai berdasarkan kebutuhan bahwa “tool yang ada sudah cukup”. Setelah masuk ke Pi, kirim:

```text
Baca ../pi-bluebook-graduation-materials/requirements.md dan
../pi-bluebook-graduation-materials/checkpoint-template.md.
Periksa README repositori saat ini, package.json, beranda buku panduan referensi, konfigurasi navigasi VitePress,
serta tiga halaman pelajaran yang disebut dalam kebutuhan.

Pada ronde ini lakukan hanya dua hal:
1. Tulis tujuan yang kamu pastikan, path yang diizinkan, perintah pemeriksaan proyek, risiko, dan satu-satunya langkah berikutnya ke
   worklog/graduation-checkpoint.md;
2. Laporkan rencana implementasimu kepadaku.

Jangan mengubah file situs, jangan menjalankan build, jangan melakukan deploy, jangan memasang dependensi,
jangan menjalankan git add, git commit, git push, atau operasi tulis Git lainnya. Setelah selesai, berhenti dan tunggu persetujuanku.
```

### Gerbang manusia pertama

Jangan langsung membalas “lanjut”. Keluar dulu atau buka terminal biasa lain, lalu periksa:

```bash
git status --short
sed -n '1,220p' worklog/graduation-checkpoint.md
```

Saat ini seharusnya hanya muncul `worklog/`. Checkpoint harus mencantumkan secara akurat tiga file situs yang diizinkan, satu catatan lokal, perintah pemeriksaan bawaan proyek, dan tindakan yang dilarang; bagian yang tidak konsisten dengan struktur repositori harus ditulis sebagai belum diketahui. Baru setelah cakupannya benar, setujui pelaksanaannya.

## Tahap 2 · Laksanakan di Session yang sama

Lanjutkan Session tadi; jika sudah keluar, di direktori repositori jalankan `pi --resume` dan pilih “CASE 08 Proyek akhir”. Lalu kirim:

```text
Rencana sudah disetujui. Lanjutkan dengan membaca kebutuhan dan worklog/graduation-checkpoint.md,
kerjakan hanya file yang diizinkan kebutuhan, lalu jalankan pemeriksaan proyek.

Setelah selesai jalankan npm run check:content, npm run check, git diff --check, dan git status --short,
lalu tulis kembali hasil perintah yang nyata, perubahan yang sebenarnya, kegagalan, atau hal yang belum diketahui ke checkpoint.
Jika pemeriksaan gagal, lakukan hanya perbaikan minimal dalam cakupan kebutuhan; jika cakupannya perlu diperluas, berhenti dan jelaskan alasannya.

Jangan melakukan deploy, jangan memasang dependensi, jangan menjalankan git add, git commit, git push, atau operasi tulis Git lainnya.
```

Langkah ini akan membuat Context jelas lebih panjang: kebutuhan, penjelasan proyek, file yang dibaca, pemanggilan tool, hasil perintah, dan selisih perubahan semuanya masuk ke rantai tugas saat ini. Session menyimpan seluruh peristiwa, sedangkan yang benar-benar diterima model saat ini adalah Context yang dibangun ulang dari cabang aktif; keduanya bukan konsep yang sama.

### Apa yang harus dilakukan saat Context hampir penuh

Jangan memaksakan pemadatan hanya untuk memamerkan konsep. Tangani dengan cara berikut hanya bila petunjuk di bagian bawah mendekati batas maksimum model, atau ketika Pi memicu Compaction secara otomatis:

1. Minta Pi memperbarui `worklog/graduation-checkpoint.md` terlebih dahulu;
2. jalankan `/compact` bila perlu;
3. setelah pemadatan, minta Pi membaca ulang kebutuhan dan checkpoint, lalu menjelaskan satu-satunya langkah berikutnya;
4. periksa secara manual apakah ringkasannya kehilangan path yang diizinkan, tindakan yang dilarang, dan catatan kegagalan.

Compaction merapikan konten yang lebih awal menjadi ringkasan dan mempertahankan pesan yang lebih baru; ia tidak menggantikan checkpoint di disk. Cache hit hanya memengaruhi penggunaan ulang input dan biaya, dan tidak bisa dijadikan bukti penyelesaian tugas.

## Tahap 3 · Jalankan review independen hanya-baca

“Semuanya selesai” dari Session utama hanya bisa dijadikan petunjuk. Buka terminal biasa lain, dan di repositori latihan yang sama jalankan Session kedua:

```bash
pi --name "CASE 08 Review independen" --no-extensions --no-skills --no-context-files \
  --skill ../pi-bluebook-graduation-materials/bluebook-graduation-review/SKILL.md \
  --tools read,grep,find,ls
```

`--no-skills` mematikan penemuan otomatis, sedangkan `--skill` yang eksplisit tetap memuat Skill yang ditunjuk. Session review tidak membuka `write`, `edit`, atau `bash`, dan hanya menyampaikan temuan melalui tool baca dan cari bawaan. Ia tidak bisa menjalankan Git atau build sendiri; pemeriksaan terkait dijalankan manusia di terminal biasa. Ini membatasi kemampuan tool, tetapi tetap bukan sandbox sistem operasi. Kirim:

```text
Gunakan bluebook-graduation-review untuk meninjau working tree saat ini.
File kebutuhan adalah ../pi-bluebook-graduation-materials/requirements.md.

Baca file yang diizinkan dalam kebutuhan, dan periksa apakah isi, navigasi, serta tautan antarpindahnya sudah konsisten.
Jangan menulis file, menjalankan perintah, atau memasang dependensi. Selisih Git dan hasil build aku sediakan;
bukti proses yang tidak disediakan atau tidak bisa diverifikasi secara independen harus ditandai “bukti tidak cukup”.
Beri penilaian lulus, gagal, atau bukti tidak cukup untuk setiap butir, beserta path dan nomor barisnya.
```

Di terminal biasa lain, jalankan `git status --short`, `git diff --check`, `git diff`, `npm run check:content`, dan `npm run check`, lalu serahkan hasilnya ke Session review. File baru tidak akan muncul di `git diff` biasa, jadi buka langsung halaman yang baru dibuat untuk memeriksanya.

Review yang bisa dipercaya tidak seharusnya hanya berkata “lulus”. Misalnya, ia bisa memastikan selisih saat ini hanya memuat path yang diizinkan, tetapi tidak bisa membuktikan hanya dari working tree akhir bahwa perintah terlarang tidak pernah dijalankan sebelumnya; hal yang terakhir itu harus dengan jujur ditandai “bukti tidak cukup”.

## Tahap 4 · Tangani temuan dan perbarui checkpoint

Kembalikan hasil review ke Session utama. Bila tidak ada temuan, jangan mengubah apa pun hanya untuk menciptakan pekerjaan; bila ada butir yang gagal, perbaiki hanya masalah yang menghambat kebutuhan:

```text
Ini hasil review independen:
(tempel hasil review)

Baca ulang kebutuhan dan checkpoint. Tangani hanya butir yang gagal; “bukti tidak cukup” tidak boleh diubah menjadi “sudah terbukti”.
Setelah diperbaiki, jalankan ulang pemeriksaan yang terdampak dan perbarui checkpoint. Jika tidak ada butir yang menghambat, jangan mengubah file situs.
```

Bolak-balik ini adalah lingkaran kerja sama Sub-agent yang paling minimal: Session utama bertanggung jawab atas implementasi, Session review bertanggung jawab atas temuan, dan manusia bertanggung jawab atas cakupan serta keputusan akhir.

## Tahap 5 · Verifikasi kelulusan manual

Terakhir, jangan bertanya kepada Pi “apakah benar-benar selesai”. Jalankan sendiri di terminal biasa:

```bash
npm run check:content
npm run check
git diff --check
git status --short
git diff -- docs/reference/index.md docs/.vitepress/config/navigation.mts
sed -n '1,200p' docs/reference/task-completion-checklist.md
```

Buka satu per satu dan pastikan:

- Halaman baru punya frontmatter, satu judul level pertama, dan empat judul level kedua yang ditetapkan;
- Ketiga tautan pelajaran punya halaman yang bersesuaian di dalam proyek;
- Beranda dan sidebar buku panduan referensi mengarah ke halaman baru;
- `npm run check` lolos: pemeriksaan konten, konsistensi judul, build, SEO, dan anchor;
- Hasil pemeriksaan berasal dari eksekusi nyata kali ini, bukan teks yang disalin;
- `worklog/` tetap merupakan catatan lokal dan tidak masuk ke commit;
- Tidak ada hasil build, direktori dependensi, atau cache yang tercampur ke status Git.

Jika ingin memeriksa hasil visual juga, jalankan `npm run docs:dev`, buka alamat lokal yang ditampilkan terminal, lalu masuk ke “Buku panduan referensi → Daftar periksa penyelesaian tugas”. Studi kasus ini melarang deploy, jadi status online harus ditulis “belum di-deploy”, dan Anda tidak boleh mengarang bahwa versi online sudah lolos.

## Catatan reproduksi nyata pengelola

Cakupan “tiga file” pada latihan ini bergantung pada versi repositori. Jika daftar file yang diizinkan berubah, jangan memakai jumlah halaman atau anchor dari pemeriksaan lama sebagai bukti bahwa versi baru lolos.

Pada 12 September 2026, pengelola menjalankan ulang alur versi dua bahasa di klon baru macOS `ea68e5f` dengan Pi `0.84.3`: tahap perencanaan hanya menulis checkpoint, setelah disetujui halaman dihasilkan, dan review independen hanya membuka `read,grep,find,ls`. Seluruh pemeriksaan yang dijalankan terpisah lolos, dengan selisih nyata hanya pada path yang diizinkan kebutuhan.

Edisi Bahasa Indonesia ini diverifikasi ulang dengan alur yang sama pada 25 September 2026: build produksi menghasilkan 64 halaman terindeks, 887 anchor valid, dan satu indeks pencarian yang lolos pemeriksaan. Review tetap mempertahankan batas bukti bahwa “working tree akhir tidak bisa membuktikan seluruh operasi historis”.

Yang diverifikasi kali ini adalah reproduksi pemeliharaan otomatis, bukan catatan perangkat Windows sungguhan, dan juga tidak menggantikan verifikasi manual pembaca sendiri. Saat mereproduksi, catatlah di checkpoint versi Pi Anda, nomor commit repositori, tanggal, dan hasil nyata dari setiap perintah pemeriksaan.

![Ilustrasi: Si Hitam menempelkan lembar besar berisi kotak centang kosong ke dinding sambil memegang stempel, dengan label daftar periksa dan selesai](/images/cases/graduation-project-output.webp)

<small>Ilustrasi ini menggambarkan bentuk halaman daftar periksa; verifikasi edisi Bahasa Indonesia ini mengacu pada halaman yang dihasilkan dan hasil pemeriksaan yang dijalankan pada kesempatan itu.</small>

## Bagaimana 14 pelajaran sebelumnya bertemu di sini

| Materi yang sudah dipelajari | Tindakan dalam proyek kelulusan |
| --- | --- |
| Pelajaran 1–4: instalasi, model, direktori kerja | Memeriksa Pi, masuk ke klon baru, dan memastikan keadaan awalnya |
| Pelajaran 5–7: tugas, file, Session | Membaca kebutuhan dan repositori, lalu menyelesaikannya dalam dua ronde dengan Session bernama |
| Pelajaran 8–9: Context, Compaction, Cache | Mengamati pertumbuhan konteks, menulis checkpoint dulu, memadatkan hanya bila perlu; tidak menganggap cache sebagai bukti selesai |
| Pelajaran 10–12: Skill, Extension, Sub-agent | Tugas utama menilai Extension tidak diperlukan; saat review, memuat Skill hanya-baca secara eksplisit dan mengisolasi Session kedua |
| Pelajaran 13–14: tugas panjang, keamanan, dan verifikasi | Menyimpan checkpoint, membatasi path dan tindakan, menjalankan pemeriksaan secara independen, dan mempertahankan hal yang belum diketahui |

## Penilaian kelulusan

Baru dianggap selesai jika kelima butir berikut terpenuhi sekaligus:

1. **Cakupan lulus:** hanya path yang diizinkan kebutuhan yang muncul;
2. **Proses lulus:** direncanakan dulu, disetujui manusia, baru dilaksanakan, dan checkpoint mampu mendukung pemulihan setelah terputus;
3. **Hasil lulus:** pemeriksaan proyek dan pemeriksaan selisih Anda jalankan sendiri dan lolos;
4. **Review lulus:** Session independen hanya membuka tool baca dan cari, serta pemeriksaan manual dan temuan review ditangani satu per satu;
5. **Penjelasan lulus:** Anda bisa menjelaskan perbedaan Session dan Context, Skill dan Extension, pemadatan dan checkpoint, serta klaim Agent dan bukti nyata.

Jika Anda hanya bisa memperlihatkan halaman akhirnya, tetapi tidak bisa menjelaskan batas-batas di tengahnya, tugas kali ini selesai, tetapi kursusnya belum lulus.

## Pemulihan saat gagal

- Pada tahap perencanaan muncul perubahan file situs: hentikan segera dan catat selisihnya; jangan memulihkannya dengan menimpa seluruh repositori.
- Build gagal: simpan galat lengkap, selisih saat ini, dan checkpoint; perbaiki hanya masalah yang paling minimal.
- Context kehilangan batasan penting: minta Pi membaca ulang kebutuhan dan checkpoint, jangan melanjutkan berdasarkan ingatan.
- Review menemukan perubahan di luar cakupan: telusuri dulu sumbernya; bila tidak bisa membedakan perubahan yang sudah ada dari perubahan kali ini, tulis “bukti tidak cukup”.
- Tugas terputus: mengklon ulang bukan pilihan pertama; pulihkan keadaan dulu memakai Session, checkpoint, dan status Git yang nyata.

## Dasar

- [Petunjuk penggunaan Pi: Session, tool, dan parameter sumber daya](https://pi.dev/docs/latest/usage)
- [Pi Skills: pemuatan eksplisit dan pengungkapan bertahap](https://pi.dev/docs/latest/skills)
- [Pi Compaction: kondisi pemicu dan pembangunan ulang konteks](https://pi.dev/docs/latest/compaction)
- [Pi Sessions: penyimpanan, kelanjutan, dan pemulihan](https://pi.dev/docs/latest/sessions)
