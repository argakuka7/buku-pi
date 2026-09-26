---
title: Tugas berdurasi panjang dan VPS
description: Memahami pertukaran antara menjalankan Pi di komputer lokal dan di VPS, serta merancang checkpoint untuk tugas panjang.
prev:
  text: 'Cara kerja Pi: Dari satu Prompt hingga satu Agent Loop utuh'
  link: /guide/how-pi-works
next:
  text: Izin, isolasi, dan verifikasi
  link: /guide/safety
---

<span class="library-status">MODULE 05 · STEP 13 · bisa dilatih</span>

# Tugas berdurasi panjang dan VPS

Ketika Pi mulai menangani tugas perapian, pemeriksaan, atau build yang memakan waktu berjam-jam, komputer lokal akan menghadapi masalah seperti tertidur saat tutup laptop, perpindahan jaringan, dan jendela terminal yang ditutup. Saya pribadi akhirnya memindahkan sebagian tugas panjang ke VPS, terutama agar lingkungan operasinya lebih stabil dan Mac saya tidak perlu terus dalam keadaan terjaga.

Ini cara pemakaian saya, bukan pilihan wajib untuk semua orang.

::: info Lihat dulu syaratnya
Tanpa VPS yang sudah bisa Anda login sendiri lewat SSH, Anda tidak perlu membeli server untuk pelajaran ini. Selesaikan dulu latihan “checkpoint dan pemulihan” di lokal. Operasi tmux di bawah hanya cocok untuk pembaca yang sudah bisa login ke VPS-nya sendiri; perintah diketik di terminal biasa jarak jauh, bukan di area edit Pi.
:::

::: warning VPS tidak otomatis menjaga tugas di foreground
Jika Anda login ke VPS lewat SSH lalu langsung menjalankan Pi di foreground, proses itu masih bisa berakhir setelah SSH terputus. VPS menyediakan lingkungan yang terus menyala, sedangkan tool terminal persisten seperti `tmux` yang memungkinkan Anda tersambung kembali ke sesi terminal yang sama setelah terputus.
:::

## Tentukan dulu apakah Anda benar-benar memerlukan VPS

Situasi yang cocok untuk tetap di lokal dulu:

- Anda baru mulai belajar Pi dan masih mengerjakan latihan beberapa menit.
- Tugas bergantung pada aplikasi, gambar, atau file privat di lokal.
- Anda belum terbiasa dengan SSH, path file Linux, dan izinnya.

Situasi yang mulai layak mempertimbangkan VPS:

- Tugas perlu berjalan lama dan tidak ingin terganggu oleh mode tidur lokal.
- Materi kerja dapat ditempatkan dengan jelas di direktori proyek jarak jauh, tanpa bergantung pada antarmuka lokal.
- Anda sudah tahu cara membatasi izin, menyimpan sesi, memeriksa proses, dan mencadangkan hasil kerja.

## Stabil di jarak jauh tidak berarti tugasnya andal

VPS tidak otomatis menyelesaikan arah yang melenceng, konteks yang hilang, kredensial yang kurang, atau kualitas keluaran yang tidak memadai. Ia hanya membuat proses lebih mudah terus berjalan. Setiap tugas panjang tetap memerlukan:

1. Hasil antara yang dapat diperiksa.
2. Kondisi berhenti dan penanganan kegagalan yang jelas.
3. Checkpoint berkala, bukan dibiarkan tanpa pengawasan.
4. Verifikasi independen dan pencadangan setelah selesai.

## Mempertahankan sesi terminal dengan tmux

Bagian ini hanya memberikan konsep minimalnya, tidak mencakup pembelian VPS, pengerasan SSH, dan konfigurasi firewall. Di VPS yang sudah memasang `tmux`, Anda dapat membuat sesi terminal bernama:

```bash
tmux new -s pi-work
```

Setelah masuk, pindah ke direktori proyek yang benar lalu jalankan Pi. Untuk pergi sementara tanpa mengakhiri sesi, tekan `Ctrl+B`, lepaskan, lalu tekan `D`. Setelah itu login kembali ke VPS dan jalankan:

```bash
tmux attach -t pi-work
```

Setelah tersambung kembali, periksa dengan mata kepala sendiri apakah Pi masih berjalan, apakah sedang menunggu input, dan periksa hasil antaranya. Bisa tersambung kembali ke tmux hanya membuktikan sesi terminal masih ada, tidak cukup untuk membuktikan tugas Pi tidak gagal.

### Cara mengatasi situasi umum

| Gejala | Langkah berikutnya |
| --- | --- |
| `tmux: command not found` | Jangan terus menyalin perintah; pasang sesuai petunjuk manajer paket resmi sistem VPS, atau lakukan latihan lokal saja dulu |
| Nama sesi `pi-work` sudah ada | Periksa dengan `tmux attach -t pi-work`, jangan membuat sesi bernama sama |
| `can't find session` | Jalankan `tmux ls` untuk memeriksa nama yang sebenarnya; jika tidak ada sesi, artinya sesi lama sudah berakhir |
| Setelah tersambung kembali hanya terlihat shell biasa | Pi sudah keluar atau belum pernah dijalankan; periksa dulu hasil kerja dan log, jangan langsung mengklaim tugas masih berjalan |
| Kombinasi tombol berubah menjadi baris baru biasa | Periksa konfigurasi extended-keys tmux; jangan mengirim tugas multi-baris yang belum selesai secara berturut-turut |

Pi resmi saat ini menyarankan tmux 3.5 dan lebih baru mengaktifkan `extended-keys` dan `csi-u`, untuk membedakan `Enter`, `Shift+Enter`, dan `Ctrl+Enter`. Mengubah `~/.tmux.conf` akan memengaruhi lingkungan terminal jarak jauh Anda; baca dulu [pengaturan tmux resmi](https://pi.dev/docs/latest/tmux), jangan mengubah konfigurasi yang ada secara membabi buta demi pelajaran ini.

## Satu deskripsi tugas panjang yang dapat dipakai ulang

```text
Tujuan: rapikan artikel di direktori source, buat daftar isi.
Cakupan: hanya baca source, hanya tulis output.
Hasil antara: setiap 20 artikel diproses, perbarui output/progress.md.
Kondisi berhenti: berhenti saat menemukan file rusak, perlu login, atau hendak mengakses direktori lain.
Verifikasi: berikan jumlah file, daftar kegagalan, file yang dihasilkan, dan perintah pemeriksaan ulang.
```

Jika batas-batas ini belum berjalan mulus di lokal, memindahkannya ke VPS hanya akan membuat proses debug makin jauh. Validasi dulu dengan sampel kecil, baru pindahkan alur kerja yang sama ke jarak jauh.

## Praktik lokal: melanjutkan dari checkpoint setelah terputus

Unduh tiga bahan fiktif yang sangat pendek dan templat progres. Perintah berikut diketik di terminal biasa lokal; pertama, kembali ke direktori latihan Anda sendiri:

```bash
cd ~/Downloads/pi-practice
pwd
mkdir -p long-task/source long-task/output
for name in article-a article-b article-c; do
  curl -fL "https://pi-bluebook-id.pages.dev/examples/long-task/source/${name}.md" \
    -o "long-task/source/${name}.md"
done
curl -fL https://pi-bluebook-id.pages.dev/examples/long-task/progress-template.md \
  -o long-task/progress.md
```

Jalankan `find long-task -type f -print`. Sebelum latihan pertama dimulai, seharusnya hanya terlihat tiga bahan `source` dan `progress.md`, serta `long-task/output/` harus kosong. Jika di direktori sudah ada keluaran lama, gunakan nama direktori baru; jangan memakai `mkdir -p` untuk melanjutkan penambahan secara menimpa, karena hasil dari sesi sebelumnya akan terhitung dua kali.

Setelah memastikan `pwd` diakhiri nama direktori latihan Anda, mulai sesi pertama di terminal biasa:

```bash
pi --name "Latihan checkpoint - langkah pertama"
```

Setelah melihat bilah status Pi masih menunjuk ke direktori latihan yang sama, minta Pi hanya mengerjakan artikel pertama dan memperbarui checkpoint. Dalam tugas ini, wajibkan setiap artikel memakai heading level dua di indeks agar pemeriksaan jumlah nanti lebih mudah:

```text
Baca long-task/progress.md dan long-task/source/article-a.md.
Di long-task/output/index.md, gunakan “## nama file” sebagai heading level dua; pada baris berikutnya tulis judul teks asli dan ringkasan satu kalimat,
lalu perbarui jumlah item selesai, file yang sudah diproses, dan langkah berikutnya di long-task/progress.md.
Kerjakan hanya artikel ini, lalu berhenti dan tunggu verifikasi saya.
```

Ketik `/quit` untuk keluar dari Pi, lalu buka `long-task/output/index.md` dan `long-task/progress.md` secara independen. Pastikan jumlah item selesai adalah 1, daftar yang sudah diproses hanya berisi `article-a.md`, dan langkah berikutnya menunjuk ke file yang belum diproses. Setelah itu, di terminal biasa yang sama, pastikan `pwd`, lalu mulai sesi baru:

```bash
pwd
pi --name "Latihan checkpoint - pemulihan"
```

Setelah bilah status masih menunjuk ke direktori latihan yang sama, kirim:

```text
Baca long-task/progress.md terlebih dahulu, lalu daftarkan file di long-task/source yang belum diproses.
Selesaikan file yang tersisa satu per satu; di long-task/output/index.md tetap gunakan “## nama file” sebagai heading level dua,
dan setiap kali satu artikel selesai, perbarui long-task/output/index.md dan long-task/progress.md sekaligus.
Jangan mengulang file yang sudah tercatat selesai. Jika menemukan file rusak atau tidak dapat dibaca, catat ke daftar kegagalan lalu berhenti.
```

Terakhir, periksa jumlahnya di terminal biasa:

```bash
find long-task/source -type f -name '*.md' | wc -l
grep -c '^## ' long-task/output/index.md
```

Kedua angka seharusnya bernilai `3`, dan jumlah item selesai, file yang sudah diproses, serta daftar kegagalan di `long-task/progress.md` harus sesuai dengan file yang sebenarnya. Angka yang cocok tetap tidak berarti ringkasannya benar, jadi buka teks asli dan indeks satu per satu untuk dicocokkan.

![Ilustrasi: Si Hitam membandingkan papan klip dengan alat ukur bulat, dengan label checkpoint dan progres](/images/07-pi-checkpoint-tugas-panjang.webp)

Periksa tiga sinyal independen sekaligus: jumlah file sumber, jumlah entri indeks, dan file progres yang mencatat tiga artikel selesai dengan daftar kegagalan kosong. Setelah ketiganya cocok, cocokkan isi ringkasan artikel satu per satu; angka yang sama hanya membuktikan tidak ada celah jumlah yang mencolok.

## Verifikasi pelajaran ini

- Anda dapat menilai dari `long-task/progress.md` apa yang sudah diproses dan apa langkah berikutnya, bukan bergantung pada pengakuan sesi lama.
- Setelah terputus, tidak ada yang berulang atau terlewat dari tiga bahan, dan item yang gagal tidak diam-diam dilewati.
- Jika memakai VPS, Anda dapat lepas dari tmux, tersambung kembali ke sesi yang sama, dan membedakan “terminal masih ada” dengan “tugas sudah selesai”.

### Referensi

- [Pi dengan tmux](https://pi.dev/docs/latest/tmux)

Keterangan terkait tmux diverifikasi pada 2026-09-09.

tmux dapat mempertahankan sesi terminal, tetapi tidak akan otomatis memulihkan Pi setelah VPS reboot, proses crash, atau kehabisan memori. Mengenai perintah dan siklus hidup sesi tmux itu sendiri, lihat juga [manual resmi tmux](https://github.com/tmux/tmux/wiki/Getting-Started).
