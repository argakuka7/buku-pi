import DefaultTheme from 'vitepress/theme'
import { defineAsyncComponent, h, nextTick, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import PiNotFound from './components/PiNotFound.vue'
import './custom.css'

const entrySelector = '.tweet-entry:not(.tweet-entry-featured)'
const entriesPerPage = 5

// String arsip tweet per locale (root = Indonesia, /en/ = English).
const tweetStringsID = {
  toolsLabel: 'Alat baca artikel tahap ini',
  titlePrefix: 'Artikel tahap ini',
  unit: 'artikel',
  perPageNote: 'Setiap halaman menampilkan',
  directorySummary: 'Buka daftar judul, lalu langsung lompat ke salah satunya',
  paginationLabel: 'Paginasi artikel',
  paginationLabelBottom: 'Paginasi artikel (bagian bawah)',
  previous: 'Sebelumnya',
  next: 'Berikutnya',
  pageAria: 'Halaman',
  untitled: 'Catatan tanpa judul'
}

const tweetStringsEN = {
  toolsLabel: 'Reading tools for this stage',
  titlePrefix: 'Articles in this stage',
  unit: 'articles',
  perPageNote: 'Each page shows',
  directorySummary: 'Open the title list and jump straight to an entry',
  paginationLabel: 'Article pagination',
  paginationLabelBottom: 'Article pagination (bottom)',
  previous: 'Previous',
  next: 'Next',
  pageAria: 'Page',
  untitled: 'Untitled entry'
}

function strings() {
  return typeof window !== 'undefined' && window.location.pathname.startsWith('/en/')
    ? tweetStringsEN
    : tweetStringsID
}

function hashTarget() {
  try {
    return document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
  } catch {
    // A malformed URL fragment must not prevent the archive from rendering.
    return null
  }
}

let activeRenderPage: ((page: number, shouldScroll: boolean) => void) | null = null

function openHashTarget(shouldScroll = false) {
  if (!window.location.hash) return

  const target = hashTarget()
  const entry = target?.closest<HTMLElement>('.tweet-entry')
  if (!entry) return

  const page = entry.dataset.archivePage
  if (page !== undefined && activeRenderPage) {
    activeRenderPage(Number(page), false)
  }

  window.requestAnimationFrame(() => {
    if (shouldScroll) entry.scrollIntoView({ block: 'start' })
  })
}

function enhanceTweetArchive() {
  const entries = Array.from(document.querySelectorAll<HTMLElement>(entrySelector))
  if (!entries.length) {
    activeRenderPage = null
    document.querySelectorAll('.tweet-archive-tools, .tweet-pagination').forEach((el) => el.remove())
    return
  }

  document.querySelectorAll('.tweet-archive-tools, .tweet-pagination').forEach((el) => el.remove())

  const pageCount = Math.ceil(entries.length / entriesPerPage)
  let currentPage = 0

  for (const [index, entry] of entries.entries()) {
    entry.classList.remove('is-collapsed', 'is-expanded')
    entry.querySelector('.tweet-toggle')?.remove()
    entry.dataset.archivePage = String(Math.floor(index / entriesPerPage))
  }

  const tools = document.createElement('section')
  tools.className = 'tweet-archive-tools'
  tools.setAttribute('aria-label', strings().toolsLabel)

  const heading = document.createElement('div')
  heading.className = 'tweet-archive-tools__heading'

  const title = document.createElement('strong')
  title.textContent = `${strings().titlePrefix} · ${entries.length} ${strings().unit}`

  const note = document.createElement('span')
  note.className = 'tweet-archive-tools__note'
  note.textContent = `${strings().perPageNote} ${entriesPerPage} ${strings().unit}`

  heading.append(title, note)

  const directory = document.createElement('details')
  directory.className = 'tweet-quick-index'

  const summary = document.createElement('summary')
  summary.textContent = strings().directorySummary

  const list = document.createElement('ol')
  for (const entry of entries) {
    const item = document.createElement('li')
    const link = document.createElement('a')
    const entryTitle = entry.querySelector('h2')?.textContent?.trim() || strings().untitled
    link.href = `#${entry.id}`
    link.textContent = entryTitle
    link.addEventListener('click', () => {
      const targetPage = Number(entry.dataset.archivePage || 0)
      renderPage(targetPage, false)
      directory.open = false
    })
    item.append(link)
    list.append(item)
  }

  directory.append(summary, list)

  function createPagination(position: 'top' | 'bottom') {
    const pagination = document.createElement('nav')
    pagination.className = `tweet-pagination tweet-pagination--${position}`
    pagination.setAttribute(
      'aria-label',
      position === 'top' ? strings().paginationLabel : strings().paginationLabelBottom
    )

    const previous = document.createElement('button')
    previous.type = 'button'
    previous.dataset.direction = 'previous'
    previous.textContent = strings().previous
    previous.addEventListener('click', () => renderPage(currentPage - 1, true))

    const pages = document.createElement('div')
    pages.className = 'tweet-pagination__pages'

    for (let page = 0; page < pageCount; page += 1) {
      const pageButton = document.createElement('button')
      pageButton.type = 'button'
      pageButton.dataset.page = String(page)
      pageButton.textContent = String(page + 1)
      pageButton.setAttribute('aria-label', `${strings().pageAria} ${page + 1}`)
      pageButton.addEventListener('click', () => renderPage(page, true))
      pages.append(pageButton)
    }

    const next = document.createElement('button')
    next.type = 'button'
    next.dataset.direction = 'next'
    next.textContent = strings().next
    next.addEventListener('click', () => renderPage(currentPage + 1, true))

    pagination.append(previous, pages, next)
    return pagination
  }

  const topPagination = createPagination('top')
  const bottomPagination = createPagination('bottom')

  function renderPage(page: number, shouldScroll: boolean) {
    currentPage = Math.max(0, Math.min(page, pageCount - 1))

    for (const [index, entry] of entries.entries()) {
      entry.classList.toggle(
        'is-paged-out',
        Math.floor(index / entriesPerPage) !== currentPage
      )
    }

    for (const pagination of document.querySelectorAll<HTMLElement>('.tweet-pagination')) {
      const previous = pagination.querySelector<HTMLButtonElement>('[data-direction="previous"]')
      const next = pagination.querySelector<HTMLButtonElement>('[data-direction="next"]')
      if (previous) previous.disabled = currentPage === 0
      if (next) next.disabled = currentPage === pageCount - 1

      for (const pageButton of pagination.querySelectorAll<HTMLButtonElement>('[data-page]')) {
        const isCurrent = Number(pageButton.dataset.page) === currentPage
        pageButton.classList.toggle('is-current', isCurrent)
        if (isCurrent) {
          pageButton.setAttribute('aria-current', 'page')
        } else {
          pageButton.removeAttribute('aria-current')
        }
      }
    }

    if (shouldScroll) {
      window.requestAnimationFrame(() => {
        tools.scrollIntoView({ block: 'start', behavior: 'smooth' })
      })
    }
  }

  activeRenderPage = renderPage

  tools.append(heading, directory, topPagination)
  entries[0].insertAdjacentElement('beforebegin', tools)
  entries.at(-1)?.insertAdjacentElement('afterend', bottomPagination)

  const initialEntry = hashTarget()?.closest<HTMLElement>('.tweet-entry')
  const initialPage = initialEntry ? Number(initialEntry.dataset.archivePage || 0) : 0
  renderPage(initialPage, false)
  openHashTarget(true)
}

function scheduleEnhancement() {
  nextTick(() => window.requestAnimationFrame(() => {
    enhanceTweetArchive()
    localizePermalinks()
  }))
}

// VitePress hardcodes the heading anchor aria-label as English
// `Permalink to "..."`. Rewrite it for the Indonesian edition; the
// English edition keeps the default.
function localizePermalinks() {
  if (window.location.pathname.startsWith('/en/')) return
  const anchors = document.querySelectorAll('.header-anchor')
  for (const anchor of anchors) {
    const heading = anchor.parentElement
    const text = (heading?.textContent || '').replace(/\u200B/g, '').trim()
    if (text) anchor.setAttribute('aria-label', `Tautan permanen ke "${text}"`)
  }
}

// Layout pembungkus: mengisi slot #not-found milik tema bawaan dengan halaman 404 sendiri.
const PiLayout = (props: any, { slots }: any) =>
  h((DefaultTheme as any).Layout, props, {
    ...slots,
    'not-found': () => h(PiNotFound)
  })

export default {
  extends: DefaultTheme,
  NotFound: PiNotFound,
  Layout: PiLayout,
  enhanceApp({ app }) {
    app.component(
      'PiReleaseExplorer',
      defineAsyncComponent(() => import('./components/PiReleaseExplorer.vue'))
    )
    if (typeof window === 'undefined') return
    // VitePress also decodes the fragment while rendering language links.
    // Drop an invalid incoming fragment before those components render.
    const normalizeHash = () => {
      try {
        decodeURIComponent(window.location.hash)
      } catch {
        window.history.replaceState(
          window.history.state, '', window.location.pathname + window.location.search
        )
      }
    }
    normalizeHash()
    window.addEventListener('hashchange', normalizeHash)
  },
  setup() {
    const route = useRoute()
    const onHashChange = () => openHashTarget(true)

    onMounted(() => {
      scheduleEnhancement()
      watch(() => route.path, scheduleEnhancement)
      window.addEventListener('hashchange', onHashChange)
    })
    onUnmounted(() => {
      window.removeEventListener('hashchange', onHashChange)
      activeRenderPage = null
    })
  }
}