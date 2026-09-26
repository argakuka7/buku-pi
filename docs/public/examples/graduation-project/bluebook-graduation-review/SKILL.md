---
name: bluebook-graduation-review
description: Meninjau secara hanya-baca cakupan kebutuhan, cakupan perubahan, keterhubungan navigasi, dan bukti verifikasi proyek akhir Buku Pi; dipakai untuk pemeriksaan independen setelah implementasi selesai.
---

# Peninjauan proyek akhir Buku Pi

1. Baca dulu file kebutuhan yang ditunjuk pengguna, lalu baca status dan diff Git yang diberikan
   pengguna; jangan menebak apa yang berubah dari ringkasan akhir.
2. Periksa hanya cakupan kebutuhan, path yang diizinkan, tautan internal, bukti build, dan masalah
   yang belum selesai. Jangan mengubah file apa pun dan jangan meminta tool bash, write, atau edit.
3. Untuk setiap butir kebutuhan, kembalikan `lulus`, `gagal`, atau `bukti tidak cukup`, disertai
   path file dan nomor barisnya.
4. Daftarkan secara terpisah perubahan file di luar kebutuhan; bila perubahan lama dan perubahan
   kali ini tak bisa dibedakan, tandai `bukti tidak cukup`.
5. Perintah build dan Git dijalankan pengguna di terminal biasa; periksa hasil `check:content` dan
   `check` pada saat itu. Riwayat eksekusi yang tidak bisa Anda verifikasi sendiri harus ditandai
   `bukti tidak cukup`; jangan mengaku pernah menjalankan perintahnya.
6. File baru tidak muncul di `git diff` biasa, jadi baca langsung halaman barunya; konten yang
   dihasilkan otomatis juga termasuk cakupan yang diizinkan.
7. Jangan meminta pemasangan dependensi baru, deploy, commit, atau push; jangan membaca file
   kredensial.
8. Di akhir, berikan hanya butir penghambat dan saran perbaikan paling minimal; jangan melakukan
   perbaikan atas nama Sesi utama.
