import { defineConfig } from 'vitepress'
import { nav as navID, sidebar as sidebarID } from './config/navigation.mjs'
import { nav as navEN, sidebar as sidebarEN } from './config/navigation.en.mjs'
import { miniSearch } from './config/search.mjs'

// URL situs bisa dioverride lewat env saat deploy: PI_SITE_URL=https://domain-anda.com
const siteUrl = (process.env.PI_SITE_URL ?? 'https://buku-pi-dariargakuka.netlify.app').replace(/\/$/, '')
const ogImageUrl = `${siteUrl}/og-image.png`

// Pengelola edisi Bahasa Indonesia/English (identitas terbitan, bukan penulis karya asli).
const editionMaintainer = 'Argakuka'

type Locale = {
  prefix: string
  label: string
  lang: string
  ogLocale: string
  siteName: string
  siteDescription: string
  homeSeoTitle: string
  homeLabel: string
  alternateName: string
  ogImage: string
  ogImageAlt: string
  sectionNames: Record<string, string>
  docFooter: { prev: string; next: string }
  outlineLabel: string
  sidebarMenuLabel: string
  darkModeSwitchLabel: string
  lightModeSwitchTitle: string
  darkModeSwitchTitle: string
  langMenuLabel: string
  returnToTopLabel: string
  skipToContentLabel: string
  lastUpdatedText: string
  searchTranslations: Record<string, unknown>
  footer: { message: string; copyright: string }
}

const footerLinks = (prefix: string, label: string, labels: { toc: string; cases: string; reference: string; translations: string; about: string; lisensi: string }) =>
  `<span class="pi-footer-brand">PI BLUEBOOK</span><span class="pi-footer-links"><a href="${prefix}/guide/">${labels.toc}</a><a href="${prefix}/cases/">${labels.cases}</a><a href="${prefix}/reference/">${labels.reference}</a><a href="${prefix}/translations/">${labels.translations}</a><a href="${prefix}/about">${labels.about}</a><a href="${prefix}/lisensi">${labels.lisensi}</a></span>`

const localeContent: Record<'root' | 'en', Locale> = {
  root: {
    prefix: '',
    label: 'Bahasa Indonesia',
    lang: 'id',
    ogLocale: 'id_ID',
    siteName: 'Bluebook Pi Coding Agent',
    siteDescription:
      'Jalur belajar Pi Coding Agent tidak resmi untuk pemula berbahasa Indonesia: dari instalasi dan tugas pertama yang bisa diverifikasi, sampai menguasai Session, konteks, Skill, Extension, dan alur kerja agent jangka panjang.',
    homeSeoTitle: 'Tutorial Pi Coding Agent Bahasa Indonesia | Dari Pemula ke Alur Kerja Agent yang Terkendali',
    homeLabel: 'Beranda',
    alternateName: 'PI BLUEBOOK (edisi Bahasa Indonesia)',
    ogImage: ogImageUrl,
    ogImageAlt: 'Pi Bluebook: dari tugas pertama yang bisa diverifikasi menuju alur kerja agent yang terkendali',
    sectionNames: {
      about: 'Tentang edisi ini',
      cases: 'Studi kasus',
      guide: 'Jalur utama Bluebook',
      journey: 'Catatan belajar',
      lisensi: 'Lisensi',
      mulai: 'Peta belajar',
      plugins: 'Rekomendasi plugin',
      reference: 'Buku panduan',
      releases: 'Pembaruan versi',
      translations: 'Terjemahan berlisensi',
      tweets: 'Katalog tweet'
    },
    docFooter: { prev: 'Sebelumnya', next: 'Berikutnya' },
    outlineLabel: 'Di halaman ini',
    sidebarMenuLabel: 'Daftar isi',
    darkModeSwitchLabel: 'Tema tampilan',
    lightModeSwitchTitle: 'Beralih ke mode terang',
    darkModeSwitchTitle: 'Beralih ke mode gelap',
    langMenuLabel: 'Ganti bahasa',
    returnToTopLabel: 'Kembali ke atas',
    skipToContentLabel: 'Lompat ke konten',
    lastUpdatedText: 'Terakhir diperbarui',
    searchTranslations: {
      button: { buttonText: 'Cari', buttonAriaLabel: 'Cari di dokumentasi' },
      modal: {
        displayDetails: 'Tampilkan detail',
        backButtonTitle: 'Tutup pencarian',
        noResultsText: 'Tidak ada hasil yang cocok',
        resetButtonTitle: 'Bersihkan pencarian',
        footer: { selectText: 'Pilih', navigateText: 'Navigasi', closeText: 'Tutup' }
      }
    },
    footer: {
      message: footerLinks('', 'id', {
        toc: 'Daftar isi',
        cases: 'Studi kasus',
        reference: 'Buku panduan',
        translations: 'Terjemahan',
        about: 'Tentang edisi ini',
        lisensi: 'Lisensi'
      }),
      copyright: `<span>Edisi Bahasa Indonesia · dikelola Argakuka · <a href="/en/">English edition</a></span>`
    }
  },
  en: {
    prefix: 'en/',
    label: 'English',
    lang: 'en',
    ogLocale: 'en_US',
    siteName: 'Pi Coding Agent Bluebook',
    siteDescription:
      'An unofficial Pi Coding Agent learning path for beginners: from installation and your first verifiable task all the way to Session, Context, Skill, Extension, and long-running agent workflows.',
    homeSeoTitle: 'Pi Coding Agent Tutorial | From Your First Verifiable Task to a Controlled Agent Workflow',
    homeLabel: 'Home',
    alternateName: 'PI BLUEBOOK (English edition)',
    ogImage: `${siteUrl}/og-image-en.png`,
    ogImageAlt: 'Pi Bluebook: from your first verifiable task to a controlled agent workflow',
    sectionNames: {
      about: 'About this edition',
      cases: 'Case studies',
      guide: 'Bluebook main track',
      journey: 'Learning notes',
      lisensi: 'License',
      mulai: 'Learning map',
      plugins: 'Plugin picks',
      reference: 'Reference',
      releases: 'Releases',
      translations: 'Licensed translations',
      tweets: 'Tweet archive'
    },
    docFooter: { prev: 'Previous', next: 'Next' },
    outlineLabel: 'On this page',
    sidebarMenuLabel: 'Table of contents',
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',
    langMenuLabel: 'Change language',
    returnToTopLabel: 'Return to top',
    skipToContentLabel: 'Skip to content',
    lastUpdatedText: 'Last updated',
    searchTranslations: {
      button: { buttonText: 'Search', buttonAriaLabel: 'Search the documentation' },
      modal: {
        displayDetails: 'Display detailed list',
        backButtonTitle: 'Close search',
        noResultsText: 'No results found',
        resetButtonTitle: 'Reset search',
        footer: { selectText: 'select', navigateText: 'navigate', closeText: 'close' }
      }
    },
    footer: {
      message: footerLinks('/en', 'en', {
        toc: 'Table of contents',
        cases: 'Case studies',
        reference: 'Reference',
        translations: 'Translations',
        about: 'About this edition',
        lisensi: 'License'
      }),
      copyright: `<span>English edition · maintained by Argakuka · <a href="/">Edisi Bahasa Indonesia</a></span>`
    }
  }
}

function getBreadcrumbList(
  pagePath: string,
  pageTitle: string,
  canonicalUrl: string,
  locale: Locale
) {
  const cleanPath = pagePath.replace(/\/$/, '')
  if (!cleanPath) return null

  const [section] = cleanPath.split('/')
  const sectionName = locale.sectionNames[section]
  if (!sectionName) return null

  const localeRoot = `${siteUrl}/${locale.prefix}`
  const items = [
    { '@type': 'ListItem', position: 1, name: locale.homeLabel, item: localeRoot },
    {
      '@type': 'ListItem',
      position: 2,
      name: sectionName,
      item: cleanPath === section ? canonicalUrl : `${localeRoot}${section}/`
    }
  ]

  if (cleanPath !== section) {
    items.push({ '@type': 'ListItem', position: 3, name: pageTitle, item: canonicalUrl })
  }

  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: items
  }
}

function themeConfigFor(locale: Locale, nav: unknown, sidebar: unknown) {
  return {
    logo: '/brand-mark.svg',
    siteTitle: 'PI BLUEBOOK',
    nav,
    sidebar,
    outline: { level: [2, 3] as [number, number], label: locale.outlineLabel },
    docFooter: locale.docFooter,
    lastUpdated: {
      formatOptions: { dateStyle: 'medium' as const, timeStyle: 'short' as const },
      text: locale.lastUpdatedText
    },
    sidebarMenuLabel: locale.sidebarMenuLabel,
    darkModeSwitchLabel: locale.darkModeSwitchLabel,
    lightModeSwitchTitle: locale.lightModeSwitchTitle,
    darkModeSwitchTitle: locale.darkModeSwitchTitle,
    langMenuLabel: locale.langMenuLabel,
    returnToTopLabel: locale.returnToTopLabel,
    skipToContentLabel: locale.skipToContentLabel,
    search: {
      provider: 'local' as const,
      options: { miniSearch, translations: locale.searchTranslations }
    },
    footer: locale.footer
  }
}

export default defineConfig({
  lang: 'id',
  title: localeContent.root.siteName,
  description: localeContent.root.siteDescription,
  cleanUrls: true,
  // tidak boleh menggagalkan build. check:content + check:pages tetap memverifikasi tautan.
  // HAPUS baris ini (kembali ketat) setelah seluruh konten /en/ selesai.
  srcExclude: ['public/**/*.md'],
  sitemap: {
    hostname: siteUrl,
    // Halaman 404 tidak diindeks, jadi tidak perlu masuk sitemap. URL di sini relatif ("404", "en/404").
    transformItems: (items) => items.filter((item) => !/^(?:.*\/)?404\/?$/.test(item.url))
  },

  lastUpdated: true,
  vite: {
    build: {
      // Satu-satunya chunk >500 kB adalah indeks pencarian lokal per-locale
      // (@localSearchIndex*), yang di-load malas saat modal pencarian dibuka,
      // bukan bagian dari first-load. Naikkan batas warning untuk kasus itu.
      chunkSizeWarningLimit: 1000
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#f4f1e9' }],
    ['meta', { name: 'author', content: editionMaintainer }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large' }],
    ['link', { rel: 'icon', href: '/brand-mark.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/favicon-48.png', type: 'image/png', sizes: '48x48' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }]
  ],
  locales: {
    root: {
      label: localeContent.root.label,
      lang: localeContent.root.lang,
      link: '/',
      title: localeContent.root.siteName,
      description: localeContent.root.siteDescription,
      themeConfig: themeConfigFor(localeContent.root, navID, sidebarID)
    },
    en: {
      label: localeContent.en.label,
      lang: localeContent.en.lang,
      link: '/en/',
      title: localeContent.en.siteName,
      description: localeContent.en.siteDescription,
      themeConfig: themeConfigFor(localeContent.en, navEN, sidebarEN)
    }
  },
  themeConfig: {
    // VitePress membangun indeks pencarian dari config akar; label UI per locale
    // disediakan oleh themeConfig masing-masing locale di atas.
    search: { provider: 'local' as const, options: { miniSearch } },
    logo: '/brand-mark.svg',
    siteTitle: 'PI BLUEBOOK'
  },
  transformHead({ page }) {
    return page === '404.md'
      ? [['meta', { name: 'robots', content: 'noindex, follow' }]]
      : []
  },
  transformPageData(pageData) {
    const isEN = pageData.relativePath.startsWith('en/')
    const locale = isEN ? localeContent.en : localeContent.root
    const localePath = isEN ? pageData.relativePath.slice(localeContent.en.prefix.length) : pageData.relativePath
    const pagePath = localePath.replace(/index\.md$/, '').replace(/\.md$/, '')
    const canonicalUrl = new URL(`${locale.prefix}${pagePath}`, `${siteUrl}/`).href
    const idUrl = new URL(pagePath, `${siteUrl}/`).href
    const enUrl = new URL(`en/${pagePath}`, `${siteUrl}/`).href
    const isHome = localePath === 'index.md'
    const isAbout = localePath === 'about.md'
    const isSectionIndex = isHome || localePath.endsWith('/index.md')
    const pageTitle = isHome ? locale.homeSeoTitle : `${pageData.title} | ${locale.siteName}`
    const pageDescription = pageData.frontmatter.description || locale.siteDescription
    const breadcrumb = getBreadcrumbList(pagePath, pageData.title, canonicalUrl, locale)
    const structuredData = isHome
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${canonicalUrl}#website`,
          name: locale.siteName,
          alternateName: locale.alternateName,
          url: canonicalUrl,
          description: pageDescription,
          inLanguage: locale.lang,
          translator: { '@type': 'Person', name: editionMaintainer }
        }
      : {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              '@id': canonicalUrl,
              url: canonicalUrl,
              name: pageData.title,
              description: pageDescription,
              inLanguage: locale.lang,
              ...(isAbout ? { mainEntity: { '@id': `${canonicalUrl}#translator` } } : {}),
              ...(breadcrumb ? { breadcrumb: { '@id': breadcrumb['@id'] } } : {})
            },
            ...(isAbout
              ? [
                  {
                    '@type': 'Person',
                    '@id': `${canonicalUrl}#translator`,
                    name: editionMaintainer,
                    url: siteUrl
                  }
                ]
              : []),
            ...(breadcrumb ? [breadcrumb] : [])
          ]
        }

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['link', { rel: 'alternate', hreflang: locale.lang, href: canonicalUrl }],
      ['link', { rel: 'alternate', hreflang: isEN ? 'id' : 'en', href: isEN ? idUrl : enUrl }],
      ['link', { rel: 'alternate', hreflang: 'x-default', href: idUrl }],
      ['meta', { property: 'og:type', content: isSectionIndex ? 'website' : 'article' }],
      ['meta', { property: 'og:site_name', content: locale.siteName }],
      ['meta', { property: 'og:locale', content: locale.ogLocale }],
      ['meta', { property: 'og:locale:alternate', content: isEN ? 'id_ID' : 'en_US' }],
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { property: 'og:image', content: locale.ogImage }],
      ['meta', { property: 'og:image:type', content: 'image/png' }],
      ['meta', { property: 'og:image:width', content: '1200' }],
      ['meta', { property: 'og:image:height', content: '630' }],
      ['meta', { property: 'og:image:alt', content: locale.ogImageAlt }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: pageTitle }],
      ['meta', { name: 'twitter:description', content: pageDescription }],
      ['meta', { name: 'twitter:image', content: locale.ogImage }],
      ['meta', { name: 'twitter:image:alt', content: locale.ogImageAlt }],
      ['script', { type: 'application/ld+json' }, JSON.stringify(structuredData)]
    )
  }
})
