---
title: Sepuluh penilaian yang tersisa dari 98 tweet
description: Menyaring sepuluh penilaian yang masih berlaku hingga edisi belajar terbuka 2026 dari catatan belajar Pi.
prev:
  text: 'Pengantar: Mengapa membaca Buku Pi ini'
  link: /guide/introduction
next:
  text: Pedoman dan keterangan edisi belajar terbuka 2026
  link: /guide/edition-2026
---

<span class="library-status">DISTILLED NOTES · 98 catatan → 10 penilaian</span>

# Sepuluh penilaian yang tersisa dari 98 tweet

98 tweet merekam sebuah proses belajar yang berkelanjutan. Di dalamnya ada penilaian yang kemudian dipertahankan, ada juga dugaan yang diperbaiki oleh praktik selanjutnya, harga yang berlaku saat itu, dan status produk jangka pendek.

Halaman ini tidak menulis ulang tweet, dan tidak mengemas pengalaman pribadi langsung menjadi kesimpulan resmi. Ia hanya memuat sepuluh penilaian yang berulang muncul dalam berbagai praktik, konsisten dengan pelajaran buku ini saat ini, dan hingga verifikasi edisi ini masih dapat dijadikan prinsip belajar. Jika ingin melihat proses pembentukannya, Anda dapat kembali ke [daftar isi belajar tweet](/tweets/) untuk membaca teks aslinya.

## 1. Hambatan terbesar pemula sering kali adalah biaya pemakaian, bukan konsep

Memahami Agent, Session, atau Context memerlukan waktu, tetapi yang benar-benar menghentikan banyak orang untuk terus berlatih sering kali adalah tidak adanya cara mengakses model, atau ketidakmampuan memperkirakan berapa kuota yang akan terpakai untuk satu tugas. Sebelum mulai, pastikan dulu login langganan, API Key, saldo, dan limit — itu lebih praktis daripada langsung membandingkan peringkat model.

**Dalam pelajaran:** [Pelajaran 3](/guide/connect-model) selesaikan dulu satu jenis autentikasi yang berfungsi dan satu pemanggilan tanpa file; tugas resmi dimulai dari materi kecil.

## 2. Nilai Pi bukan pada fitur terbanyak, melainkan pada fondasi yang cukup kecil

Pi menghubungkan model, tool, Session, dan konteks; inti tetap terkendali, dan kemampuan lain diperluas sesuai kebutuhan. Ini bukan “belum selesai”, melainkan desain yang mengembalikan hak menentukan alur kerja kepada penggunanya.

**Dalam pelajaran:** pelajari dulu kemampuan bawaan, lalu [bedakan Skill, Extension, dan Package](/guide/skills-extensions-packages); jangan menilai Harness dari jumlah fitur.

## 3. Memasang semua paket lebih dulu akan menghilangkan penilaian sebab-akibat

Setelah menambahkan beberapa plugin sekaligus, sering kali sulit menjelaskan apakah suatu kemampuan berasal dari inti, model, atau salah satu ekstensi; saat terjadi kesalahan pun konfliknya sulit dilacak. Pemula lebih memerlukan lingkungan yang dapat dijelaskan, bukan lingkungan yang tampak serba bisa.

**Dalam pelajaran:** pertahankan konfigurasi minimal, coba satu plugin dalam satu waktu setelah ada kebutuhan nyata; tinggalkan hasil yang dapat diamati sebelum dan sesudah mengaktifkannya.

## 4. Skill harus tumbuh dari pekerjaan yang berulang

Menyimpan Skill orang lain tidak sama dengan membangun alur kerja Anda sendiri. Cara yang lebih andal adalah menyelesaikan beberapa tugas nyata terlebih dahulu, menemukan langkah review, penataan, atau publikasi yang berulang, baru menuliskan metode yang sudah stabil menjadi Skill.

**Dalam pelajaran:** Skill pertama menyaring aturan dari daftar tindakan yang sudah ada, bukan menjelajahi marketplace lebih dulu demi mengejar jumlah.

## 5. Satu urusan memakai satu Session

Login, menulis artikel, mengubah kode, dan tanya jawab seadanya yang semuanya berdesakan di satu Session membuat model menghadapi riwayat yang tidak saling berhubungan. Saat arahnya sudah kacau, terus menjelaskan atau menunggu pemadatan biasanya hanya mempertahankan kekacauan itu.

**Dalam pelajaran:** [buat Session terpisah yang dapat dicari untuk setiap tugas](/guide/sessions); saat melenceng, kembali ke titik percabangan, atau segera buka sesi baru.

## 6. Session dapat disimpan, bukan berarti model selalu mengingat semua isinya {#session-and-context}

Session menyimpan struktur riwayat yang dapat terus diproses; Context yang dilihat model pada setiap putaran hanyalah sebagian yang dibangun darinya. Riwayat lengkap tetap ada di file, tetapi itu tidak menjamin setiap detail lama selalu berada di jendela konteks saat ini.

**Dalam pelajaran:** tuliskan tujuan, batasan, keputusan, dan langkah berikutnya yang benar-benar tidak boleh hilang ke dalam file checkpoint; jangan menggantungkan tugas jangka panjang hanya pada ingatan percakapan.

## 7. Pemadatan dan prompt cache harus dipahami secara terpisah {#compaction-and-cache}

Pemadatan bertujuan menggantikan sebagian riwayat lama dengan ringkasan saat konteks mendekati batas; prompt cache adalah mekanisme penyedia layanan untuk memakai ulang prefix yang stabil sekaligus menagihnya. Satu kali pemadatan dapat mengubah prefix dan menurunkan cache hit saat itu, tetapi keduanya bukan fitur yang sama, dan angka cache tidak dapat dipakai untuk menilai kualitas tugas.

**Dalam pelajaran:** modul tiga membahas [pemadatan](/guide/context-and-compaction) dan [prompt cache](/guide/prompt-caching) secara terpisah; verifikasi tetap kembali ke file, batasan, dan hasil akhir.

## 8. Subagent pertama-tama adalah metode pembagian tugas, bukan tombol bawaan

Pi secara default tidak mengabadikan subagent ke dalam inti. Yang benar-benar penting adalah apakah Anda dapat memecah pencarian, penataan, eksekusi, dan pemeriksaan ulang menjadi tugas dengan batas yang jelas, serta menjelaskan bagaimana setiap hasil dikembalikan. Tanpa kemampuan itu, menambah jumlah Agent hanya akan memperbesar biaya dan kerugian komunikasi.

**Dalam pelajaran:** [latih pembagian tugas dan serah terima dengan dua sesi terpisah](/guide/subagents) terlebih dahulu, baru putuskan apakah akan memasang ekstensi multi-Agent.

## 9. Prompt menentukan cakupan, sistem operasi menentukan izin

“Hanya ubah direktori ini” dapat membantu model memahami batas tugas, tetapi bukan isolasi teknis. Tool dan Extension Pi berjalan dengan izin yang dimiliki proses saat ini; saat menghadapi kode dan materi yang tidak tepercaya, diperlukan langkah isolasi yang sungguhan seperti container, mesin virtual, atau akun khusus.

**Dalam pelajaran:** [Project Trust tidak dianggap sebagai sandbox](/guide/safety); kredensial sensitif tidak masuk ke prompt, tangkapan layar, atau repositori, dan operasi berbahaya dibatasi oleh lingkungan eksternal.

## 10. Pernyataan selesai tidak dapat menggantikan verifikasi independen

Agent berkata “sudah selesai” hanya berarti ia telah membuat penilaian. Apakah file ada, isinya lengkap, perintahnya berhasil, dan versi online diperbarui, harus diperiksa dengan bukti yang tidak bergantung pada pernyataan itu.

**Dalam pelajaran:** setiap pelajaran menetapkan tanda selesai yang terlihat; perubahan penting harus membaca hasil kerja, menjalankan pemeriksaan, dan mencocokkan status akhir.

## Batas antara arsip dan bluebook

Tweet tetap mempertahankan tanggal publikasi, ungkapan asli, dan perubahan pemahaman; tidak ditulis ulang hanya karena halaman ini ada. Konten yang menyangkut model spesifik, harga, masa gratis, status plugin, dan rekomendasi jangka pendek juga tidak akan diangkat menjadi kesimpulan jangka panjang.

Sepuluh penilaian di halaman ini akan ditinjau seiring edisi resmi; situs web dapat menambah bukti atau memperbaiki pernyataan, tetapi tidak akan membengkak menjadi peringkat dengan mengikuti setiap perubahan ekosistem.

## Lanjut membaca

- [Pedoman dan keterangan edisi belajar terbuka 2026](/guide/edition-2026)
- [Arsip asli 98 tweet](/tweets/)
- [Alur utama Buku Pi](/guide/)
