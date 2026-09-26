import type { DefaultTheme } from 'vitepress'

/** Navigasi global di bilah atas. */
export const nav = [
      { text: 'Beranda', link: '/' },
      {
        text: 'Mulai Belajar',
        items: [
          {
            text: 'Pintu Masuk',
            items: [
              { text: 'Peta belajar: 5 modul, 14 pelajaran', link: '/mulai' },
              { text: 'Sukses pertama dalam 30 menit', link: '/guide/start-here' },
              { text: 'Daftar isi lengkap', link: '/guide/' },
              { text: 'Memilih Pi, OMP, atau Selesai', link: '/reference/pi-forks' },
              { text: 'Mulai dari pengantar', link: '/guide/introduction' },
              { text: 'Cara kerja Pi seutuhnya', link: '/guide/how-pi-works' }
            ]
          },
          {
            text: 'Menuntaskan kursus',
            items: [
              { text: 'CASE 08 · Proyek akhir', link: '/cases/graduation-project' }
            ]
          }
        ]
      },
      {
        text: 'Praktik Langsung',
        items: [
          {
            text: 'Studi kasus & ekstensi',
            items: [
              { text: 'Kumpulan studi kasus', link: '/cases/' },
              { text: 'Rekomendasi & pemilihan plugin', link: '/plugins/' },
              { text: 'Skill, Extension, dan Package', link: '/guide/skills-extensions-packages' }
            ]
          },
          {
            text: 'Pengelolaan & keamanan',
            items: [
              { text: 'Siklus hidup setelah instalasi', link: '/guide/lifecycle-management' },
              { text: 'Izin, isolasi, dan verifikasi', link: '/guide/safety' }
            ]
          }
        ]
      },
      {
        text: 'Cari Solusi',
        items: [
          {
            text: 'Penelusuran cepat',
            items: [
              { text: 'Beranda buku panduan', link: '/reference/' },
              { text: 'Pertanyaan umum (FAQ)', link: '/reference/faq' },
              { text: 'Panduan penanganan masalah', link: '/reference/troubleshooting' },
              { text: 'Istilah populer AI & Agent', link: '/reference/glossary' }
            ]
          }
        ]
      },
      {
        text: 'Materi Lanjutan',
        items: [
          {
            text: 'Artikel & arsip',
            items: [
              { text: 'Terjemahan berlisensi Earendil', link: '/translations/' },
              { text: 'Catatan belajar', link: '/journey/' },
              { text: 'Arsip 98 tweet', link: '/tweets/' }
            ]
          }
        ]
      },
      { text: 'Pembaruan versi', link: '/releases/' }
    ] satisfies DefaultTheme.NavItem[]

/** Sidebar per bagian. Urutan belajar diatur di sini, bukan di config utama. */
export const sidebar = {
      '/guide/': [
        {
          text: 'Buku Pi',
          collapsed: true,
          items: [
            { text: 'Daftar isi lengkap', link: '/guide/' },
            { text: 'Sukses pertama dalam 30 menit', link: '/guide/start-here' },
            { text: 'Pengantar · Mengapa membaca buku ini', link: '/guide/introduction' },
            { text: 'Sepuluh penilaian yang masih berlaku', link: '/guide/lasting-principles' },
            { text: 'Catatan pemakaian & penjelasan edisi ini', link: '/guide/edition-2026' },
            { text: 'Prolog · Mario Zechner, pencipta Pi', link: '/guide/mario-zechner' }
          ]
        },
        {
          text: 'Modul 1 · Instalasi & pengaturan dasar',
          collapsed: true,
          items: [
            { text: '1. Pemeriksaan sebelum instalasi', link: '/guide/before-install' },
            { text: '2. Memasang dan menjalankan Pi', link: '/guide/install-pi' },
            { text: 'Catatan pemasangan di Windows', link: '/guide/windows-setup' },
            { text: '3. Login & pengaturan model', link: '/guide/connect-model' },
            { text: '4. Mulai dari direktori latihan', link: '/guide/ready-to-work' },
            { text: 'Perawatan · pembaruan, keluar, dan uninstal', link: '/guide/lifecycle-management' }
          ]
        },
        {
          text: 'Modul 2 · Menuntaskan tugas nyata',
          collapsed: true,
          items: [
            { text: '5. Tugas pertama', link: '/guide/first-task' },
            { text: '6. File & direktori kerja', link: '/guide/files-and-context' },
            { text: '7. Menyimpan & melanjutkan sesi', link: '/guide/sessions' }
          ]
        },
        {
          text: 'Modul 3 · Tugas panjang & konteks',
          collapsed: true,
          items: [
            { text: '8. Konteks & pemadatan', link: '/guide/context-and-compaction' },
            { text: '9. Dasar-dasar prompt cache', link: '/guide/prompt-caching' }
          ]
        },
        {
          text: 'Modul 4 · Memperluas Pi Anda',
          collapsed: true,
          items: [
            { text: '10. Skill, Extension, dan Package', link: '/guide/skills-extensions-packages' },
            { text: '11. Kebutuhan & verifikasi Extension', link: '/guide/first-extension' },
            { text: '12. Pembagian kerja antar subagent', link: '/guide/subagents' }
          ]
        },
        {
          text: 'Rangkaian prinsip',
          collapsed: true,
          items: [
            { text: 'Dari Prompt ke Agent Loop', link: '/guide/how-pi-works' }
          ]
        },
        {
          text: 'Modul 5 · Alur kerja yang stabil',
          collapsed: true,
          items: [
            { text: '13. Tugas jangka panjang & VPS', link: '/guide/vps-and-long-running' },
            { text: '14. Izin, isolasi, dan verifikasi', link: '/guide/safety' }
          ]
        },
        {
          text: 'Penutup & penanganan masalah',
          collapsed: true,
          items: [
            { text: 'CASE 08 · Proyek akhir', link: '/cases/graduation-project' },
            { text: 'Panduan penanganan masalah Pi', link: '/reference/troubleshooting' }
          ]
        }
      ],
      '/cases/': [
        {
          text: 'Mulai berpraktik',
          collapsed: true,
          items: [
            { text: 'Kumpulan studi kasus & cara pakainya', link: '/cases/' },
            { text: 'Daftar isi lengkap Buku Pi', link: '/guide/' }
          ]
        },
        {
          text: 'Latihan tunggal · CASE 01–07',
          collapsed: true,
          items: [
            { text: 'CASE 01 · Daftar tindakan dari notulen rapat', link: '/cases/meeting-notes' },
            { text: 'CASE 02 · Sebelum & sesudah pemadatan', link: '/cases/compaction-before-after' },
            { text: 'CASE 03 · Skill pertama', link: '/cases/first-skill' },
            { text: 'CASE 04 · Extension paling minimal', link: '/cases/first-extension' },
            { text: 'CASE 05 · Dua jalur review independen', link: '/cases/independent-review' },
            { text: 'CASE 06 · Memulihkan dari checkpoint', link: '/cases/checkpoint-recovery' },
            { text: 'CASE 07 · Review keamanan sebelum tugas', link: '/cases/safe-review' }
          ]
        },
        {
          text: 'Latihan penerapan',
          collapsed: true,
          items: [
            { text: 'Dari bahan mentah ke draf yang bisa diperiksa', link: '/cases/content-workflow' },
            { text: 'Memperbaiki program kecil', link: '/cases/code-repair' }
          ]
        },
        {
          text: 'Penutup terpadu',
          collapsed: true,
          items: [
            { text: 'CASE 08 · Proyek akhir Buku Pi', link: '/cases/graduation-project' }
          ]
        },
        {
          text: 'Saat menghadapi masalah',
          collapsed: true,
          items: [{ text: 'Panduan penanganan masalah Pi', link: '/reference/troubleshooting' }]
        }
      ],
      '/plugins/': [
        {
          text: 'Memilih & memahami',
          collapsed: true,
          items: [
            { text: 'Ikhtisar rekomendasi & cara memilih', link: '/plugins/' },
            { text: 'Skill, Extension, dan Package', link: '/guide/skills-extensions-packages' }
          ]
        },
        {
          text: 'Latihan praktik',
          collapsed: true,
          items: [
            { text: 'CASE 03 · Skill pertama', link: '/cases/first-skill' },
            { text: 'CASE 04 · Extension paling minimal', link: '/cases/first-extension' }
          ]
        },
        {
          text: 'Pengelolaan & penelusuran masalah',
          collapsed: true,
          items: [
            { text: 'Siklus hidup setelah instalasi', link: '/guide/lifecycle-management' },
            { text: 'Extension gagal dimuat', link: '/reference/troubleshooting#extension-failed' },
            { text: 'Plugin saling berbenturan', link: '/reference/troubleshooting#resource-conflict' },
            { text: 'Izin, isolasi, dan verifikasi', link: '/guide/safety' }
          ]
        },
        {
          text: 'Catatan asli',
          collapsed: true,
          items: [{ text: 'Tweet tentang Skill & Extension', link: '/tweets/04-skills-extensions' }]
        }
      ],
      '/reference/': [
        {
          text: 'Penelusuran cepat',
          collapsed: true,
          items: [
            { text: 'Indeks topik', link: '/reference/' },
            { text: 'Memilih Pi, OMP, atau Selesai', link: '/reference/pi-forks' },
            { text: 'Pertanyaan umum (FAQ)', link: '/reference/faq' },
            { text: 'Panduan penanganan masalah Pi', link: '/reference/troubleshooting' },
            { text: 'Istilah populer AI & Agent', link: '/reference/glossary' }
          ]
        },
        {
          text: 'Memahami mekanisme kerja',
          collapsed: true,
          items: [
            { text: 'Dari Prompt ke Agent Loop', link: '/guide/how-pi-works' },
            { text: 'File & direktori kerja', link: '/guide/files-and-context' },
            { text: 'Session & kelanjutannya', link: '/guide/sessions' },
            { text: 'Konteks & pemadatan', link: '/guide/context-and-compaction' },
            { text: 'Prompt cache', link: '/guide/prompt-caching' }
          ]
        },
        {
          text: 'Kemampuan & batas',
          collapsed: true,
          items: [
            { text: 'Skill, Extension, dan Package', link: '/guide/skills-extensions-packages' },
            { text: 'Rekomendasi & pemilihan plugin', link: '/plugins/' },
            { text: 'Subagent', link: '/guide/subagents' },
            { text: 'Izin, isolasi, dan verifikasi', link: '/guide/safety' }
          ]
        },
        {
          text: 'Lanjut belajar',
          collapsed: true,
          items: [
            { text: 'Daftar isi lengkap Buku Pi', link: '/guide/' },
            { text: '8 studi kasus praktik', link: '/cases/' }
          ]
        }
      ],
      '/releases/': [
        {
          text: 'Arsip versi',
          collapsed: false,
          items: [
            { text: 'Semua pembaruan versi', link: '/releases/' },
            { text: 'Memperbarui Pi dengan aman', link: '/guide/lifecycle-management' },
            { text: 'Panduan penanganan masalah', link: '/reference/troubleshooting' }
          ]
        },
        {
          text: 'Lanjut memahami',
          collapsed: false,
          items: [
            { text: 'Cara kerja Pi seutuhnya', link: '/guide/how-pi-works' },
            { text: 'Penilaian yang tersisa dari 98 tweet', link: '/guide/lasting-principles' },
            { text: 'Catatan asli iterasi versi', link: '/tweets/01-meet-pi#post-2092265777214951636' }
          ]
        }
      ],
      '/translations/': [
        {
          text: 'Daftar terjemahan',
          collapsed: true,
          items: [
            { text: 'Ikhtisar sebelas terjemahan berlisensi', link: '/translations/' }
          ]
        },
        {
          text: 'Session & konteks',
          collapsed: true,
          items: [
            { text: 'Sesi yang tak bisa dibawa pergi', link: '/translations/session-portability' },
            { text: 'Mekanisme pemadatan di Pi', link: '/translations/compaction-in-pi' },
            { text: 'Prompt cache pada Agent', link: '/translations/prompt-caching' }
          ]
        },
        {
          text: 'Harness & Pi',
          collapsed: true,
          items: [
            { text: 'Apa itu Agent Harness?', link: '/translations/what-is-a-harness' },
            { text: 'Harness ini milik saya', link: '/translations/mine-agent-harness' },
            { text: 'Pi: minimalis tapi efisien', link: '/translations/pi-minimal-performant' }
          ]
        },
        {
          text: 'Pengumuman & renungan panjang',
          collapsed: true,
          items: [
            { text: 'Pi dan Lefos resmi dirilis', link: '/translations/announcing-pi-and-lefos' },
            { text: 'Renungan atas pengumuman hari ini', link: '/translations/announcement-reflection' },
            { text: 'Posisi unggul', link: '/translations/the-high-ground' },
            { text: 'Undangan untuk memulai korespondensi', link: '/translations/invitation' }
          ]
        },
        {
          text: 'Kualitas & penilaian kode',
          collapsed: true,
          items: [
            { text: 'Mengukur tingkat kekasaran kode', link: '/translations/measuring-code-sloppiness' }
          ]
        },
        {
          text: 'Kembali ke Buku Pi',
          collapsed: true,
          items: [
            { text: 'Dari Prompt ke Agent Loop', link: '/guide/how-pi-works' },
            { text: 'Indeks topik buku panduan', link: '/reference/' }
          ]
        }
      ],
      '/journey/': [
        {
          text: 'Catatan belajar',
          collapsed: true,
          items: [
            { text: 'Tulisan di luar Buku Pi', link: '/journey/' },
            { text: 'Mengapa sesi & konteks tetap di tangan kita', link: '/journey/why-pi-keeps-context-editable' },
            { text: 'Arsip 98 tweet', link: '/tweets/' }
          ]
        },
        {
          text: 'Tahap belajar',
          collapsed: true,
          items: [
            { text: '1. Mengenal Pi dari rasa penasaran', link: '/tweets/01-meet-pi' },
            { text: '2. Tuntaskan dulu tugas pertama', link: '/tweets/02-first-tasks' },
            { text: '3. Memahami Session & konteks', link: '/tweets/03-sessions-context' },
            { text: '4. Skill & Extension', link: '/tweets/04-skills-extensions' },
            { text: '5. Membuat subagent belajar berbagi tugas', link: '/tweets/05-subagents-research' },
            { text: '6. Menjadikan Pi alur kerja jangka panjang', link: '/tweets/06-long-running' }
          ]
        },
        {
          text: 'Kembali ke kesimpulan saat ini',
          collapsed: true,
          items: [
            { text: 'Sepuluh penilaian yang masih berlaku', link: '/guide/lasting-principles' },
            { text: 'Daftar isi lengkap Buku Pi', link: '/guide/' }
          ]
        }
      ],
      '/tweets/': [
        {
          text: 'Catatan belajar',
          collapsed: true,
          items: [
            { text: 'Tulisan di luar Buku Pi', link: '/journey/' },
            { text: 'Mengapa sesi & konteks tetap di tangan kita', link: '/journey/why-pi-keeps-context-editable' },
            { text: 'Arsip 98 tweet', link: '/tweets/' }
          ]
        },
        {
          text: 'Tahap belajar',
          collapsed: true,
          items: [
            { text: '1. Mengenal Pi dari rasa penasaran', link: '/tweets/01-meet-pi' },
            { text: '2. Tuntaskan dulu tugas pertama', link: '/tweets/02-first-tasks' },
            { text: '3. Memahami Session & konteks', link: '/tweets/03-sessions-context' },
            { text: '4. Skill & Extension', link: '/tweets/04-skills-extensions' },
            { text: '5. Membuat subagent belajar berbagi tugas', link: '/tweets/05-subagents-research' },
            { text: '6. Menjadikan Pi alur kerja jangka panjang', link: '/tweets/06-long-running' }
          ]
        },
        {
          text: 'Kembali ke kesimpulan saat ini',
          collapsed: true,
          items: [
            { text: 'Sepuluh penilaian yang masih berlaku', link: '/guide/lasting-principles' },
            { text: 'Daftar isi lengkap Buku Pi', link: '/guide/' }
          ]
        }
      ]
    } satisfies DefaultTheme.Sidebar
