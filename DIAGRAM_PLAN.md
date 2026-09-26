# Daftar Penempatan Diagram FAQ dan Istilah Populer

`docs/diagrams/` menyimpan naskah HTML mandiri dari Diagram Design; SVG yang dirujuk situs berada di `docs/public/images/diagrams/`. Semua diagram memakai gaya `pi-bluebook` yang ditentukan `.diagram-design` di direktori akar proyek.

| Diagram | Lokasi penyisipan utama | Lokasi pemakaian ulang | Masalah yang dipecahkan |
| --- | --- | --- | --- |
| `pi-harness-overview` | FAQ “Sebenarnya apa itu Pi?” | Istilah populer “Agent Harness” | Menempatkan tanggung jawab model, tool, file, Session, dan Pi dalam satu diagram |
| `local-agent-model` | FAQ “Apakah Agent lokal dan model lokal itu hal yang sama?” | Belum dipakai ulang | Membedakan lokasi Agent berjalan dan lokasi model melakukan inferensi |
| `context-session-compaction` | FAQ “Apa perbedaan Context dan Session?” | Setelah istilah populer “Context Window” | Membedakan riwayat lengkap, input ronde ini, file proyek, dan ringkasan pemadatan |
| `skill-extension-package` | FAQ “Apa perbedaan Skill, Extension, dan Package?” | Setelah istilah populer “Package” | Menjelaskan metode, kemampuan runtime, dan wadah distribusi lewat jalur pilihan |
| `project-trust-boundary` | FAQ “Apakah Project Trust adalah sandbox?” | Belum dipakai ulang | Membedakan gerbang pemuatan sumber daya proyek dan batas isolasi sistem operasi |
| `graduation-project-flow` | CASE 08 “Proyek Kelulusan Buku Pi Pi” | Belum dipakai ulang | Memperjelas tanggung jawab dan gerbang verifikasi pelajar, Session utama, dan Session review read-only |

Beranda buku panduan referensi sudah menyelesaikan navigasi dan perbandingan lewat tabel; tahap ini tidak menambah diagram agar tidak mengulang penyajian.
