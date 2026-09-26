<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'

// Halaman 404 untuk navigasi di dalam aplikasi (rute tidak dikenal).
// docs/404.md menyediakan versi HTML statis untuk pemuatan langsung / tanpa JS.
const route = useRoute()
const isEN = computed(() => route.path.startsWith('/en/'))

const ID_TEXT = {
  badge: 'ERROR 404 · HALAMAN TIDAK DITEMUKAN',
  title: 'Halaman tidak ditemukan',
  intro:
    'Alamat yang Anda buka tidak ada atau sudah berpindah. Coba salah satu jalur berikut, atau buka pencarian dengan pintasan ⌘K / Ctrl+K.',
  links: [
    { href: '/mulai', text: 'Peta belajar', note: '5 modul dan 14 pelajaran dalam satu halaman' },
    { href: '/guide/', text: 'Alur utama Buku Pi', note: 'daftar isi lengkap jalur belajar' },
    { href: '/reference/', text: 'Buku panduan referensi', note: 'FAQ, penanganan masalah, dan daftar istilah' },
    { href: '/cases/', text: 'Daftar studi kasus', note: 'delapan latihan berurutan dengan daftar periksa' }
  ],
  footerBefore: 'Halaman berbahasa Inggris tersedia di ',
  footerLink: { href: '/en/', text: 'edisi English' },
  footerAfter: '.'
}

const EN_TEXT = {
  badge: 'ERROR 404 · PAGE NOT FOUND',
  title: 'Page not found',
  intro:
    'The address you opened does not exist or has moved. Try one of the following routes, or open search with the ⌘K / Ctrl+K shortcut.',
  links: [
    { href: '/en/mulai', text: 'Learning map', note: '5 modules and 14 lessons on one page' },
    { href: '/en/guide/', text: 'Buku Pi main track', note: 'the complete table of contents for the learning path' },
    { href: '/en/reference/', text: 'Reference guide', note: 'FAQ, troubleshooting, and the glossary' },
    { href: '/en/cases/', text: 'Case study list', note: 'eight exercises in order with checklists' }
  ],
  footerBefore: 'The Indonesian edition starts at ',
  footerLink: { href: '/', text: 'the main page' },
  footerAfter: '.'
}

const text = computed(() => (isEN.value ? EN_TEXT : ID_TEXT))
</script>

<template>
  <div class="pi-404">
    <span class="library-status">{{ text.badge }}</span>
    <h1>{{ text.title }}</h1>
    <p class="pi-404-text">{{ text.intro }}</p>
    <ul class="pi-404-links">
      <li v-for="link in text.links" :key="link.href">
        <a :href="link.href">{{ link.text }}</a>
        <span>{{ link.note }}</span>
      </li>
    </ul>
    <p class="pi-404-text">
      {{ text.footerBefore }}<a :href="text.footerLink.href">{{ text.footerLink.text }}</a>{{ text.footerAfter }}
    </p>
  </div>
</template>

<style scoped>
.pi-404 {
  max-width: 760px;
  margin: 0 auto;
  padding: 64px 32px 120px;
}

.pi-404 h1 {
  margin: 0 0 16px;
  font-family: var(--pi-font-serif);
  font-size: clamp(2.1rem, 4vw, 2.85rem);
  font-style: italic;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.2;
}

.pi-404-text {
  margin: 0 0 24px;
  color: var(--pi-muted);
  line-height: 1.8;
}

.pi-404-links {
  margin: 0 0 28px;
  padding: 0;
  border: 1px solid var(--pi-line);
  background: var(--pi-paper-strong);
  list-style: none;
}

.pi-404-links li {
  padding: 14px 18px;
  border-bottom: 1px solid var(--pi-line);
}

.pi-404-links li:last-child {
  border-bottom: 0;
}

.pi-404-links a {
  color: var(--pi-blue-dark);
  font-weight: 600;
}

.pi-404-links span {
  display: block;
  color: var(--pi-muted);
  font-size: 0.9rem;
}
</style>
