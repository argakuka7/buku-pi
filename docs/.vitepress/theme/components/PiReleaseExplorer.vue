<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import releaseData from '../../data/pi-releases.json'

type ReleaseSection = {
  title: string
  key: string
  items: string[]
}

type Release = {
  version: string
  date: string
  year: string
  sourceUrl: string
  itemCount: number
  changeTypes: string[]
  topics: string[]
  sections: ReleaseSection[]
}

type Snapshot = {
  meta: {
    sourceUrl: string
    verifiedAt: string
    latestVersion: string
    latestDate: string
    oldestVersion: string
    oldestDate: string
    releaseCount: number
  }
  releases: Release[]
}

const snapshot = releaseData as Snapshot
const route = useRoute()
const query = ref('')
const changeType = ref('all')
const topic = ref('all')
const year = ref('all')
const displayLimit = ref(18)
const explorer = ref<HTMLElement | null>(null)

const stringsID = {
  archive: 'PI RELEASE ARCHIVE',
  verified: 'Catatan resmi diverifikasi pada',
  versions: 'versi resmi',
  ledgerLabel: 'Ringkasan arsip versi',
  range: 'Rentang catatan',
  latest: 'Terbaru saat ini',
  latestNote: 'Mengacu pada Coding Agent Changelog resmi dan versi paket',
  latestChanges: 'Poin utama versi ini',
  source: 'Lihat sumber resmi',
  milestoneTitle: 'Lima titik penting',
  milestoneDeck: 'Dari konteks dan ekosistem ekstensi, keamanan, sampai arah Harness — ikuti evolusi Pi lewat versi-versi representatif.',
  explorerTitle: 'Telusuri semua versi',
  explorerDeck: 'Masukkan nomor versi atau kata kunci, atau persempit dengan tahun, jenis perubahan, dan topik.',
  searchLabel: 'Cari catatan versi',
  searchPlaceholder: 'Contoh: 0.84, konteks, Extension, Windows…',
  typeLabel: 'Jenis perubahan',
  topicLabel: 'Topik',
  yearLabel: 'Tahun',
  all: 'Semua',
  features: 'Fitur baru',
  breaking: 'Perubahan breaking',
  fixed: 'Perbaikan bug',
  changed: 'Penyesuaian perilaku',
  models: 'Model',
  providers: 'Provider',
  sessions: 'Session',
  context: 'Konteks',
  extensions: 'Extension',
  packages: 'Package',
  safety: 'Keamanan',
  interface: 'Antarmuka',
  sdk: 'SDK / CLI',
  platforms: 'Platform',
  results: 'versi cocok',
  empty: 'Tidak ada versi yang cocok. Longgarkan filter, atau pakai kata kunci bahasa Inggris resminya.',
  reset: 'Bersihkan filter',
  changes: 'catatan',
  loadMore: 'Muat lebih banyak',
  remaining: 'belum ditampilkan',
  officialEnglish: 'Rincian di bawah ini sengaja dibiarkan dalam bahasa Inggris resmi agar makna teknisnya tidak berubah.',
  permalink: 'Tautan versi ini',
  overview: 'Keterangan versi',
  added: 'Ditambahkan',
  migration: 'Catatan migrasi',
  deprecated: 'Deprecated',
  removed: 'Dihapus'
}

const stringsEN: Record<string, string> = {
  archive: "PI RELEASE ARCHIVE",
  verified: "Official records verified on",
  versions: "official releases",
  ledgerLabel: "Release archive overview",
  range: "Recorded range",
  latest: "Latest now",
  latestNote: "Based on the official Coding Agent Changelog and package versions",
  latestChanges: "Highlights in this release",
  source: "View the official source",
  milestoneTitle: "Five key milestones",
  milestoneDeck: "From context and the extension ecosystem to safety and the harness era — follow the evolution of Pi through representative releases.",
  explorerTitle: "Search every release",
  explorerDeck: "Enter a version number or keyword, or narrow by year, change type, and topic.",
  searchLabel: "Search release notes",
  searchPlaceholder: "e.g. 0.84, context, Extension, Windows…",
  typeLabel: "Change type",
  topicLabel: "Topic",
  yearLabel: "Year",
  all: "All",
  features: "New features",
  breaking: "Breaking changes",
  fixed: "Bug fixes",
  changed: "Behavior changes",
  models: "Models",
  providers: "Providers",
  sessions: "Session",
  context: "Context",
  extensions: "Extension",
  packages: "Package",
  safety: "Safety",
  interface: "Interface",
  sdk: "SDK / CLI",
  platforms: "Platforms",
  results: "matching releases",
  empty: "No matching releases. Loosen the filters, or use the official English keyword.",
  reset: "Clear filters",
  changes: "entries",
  loadMore: "Load more",
  remaining: "not shown yet",
  officialEnglish: "The details below are kept in the official English wording so the technical meaning stays intact.",
  permalink: "Link to this release",
  overview: "Release notes",
  added: "Added",
  migration: "Migration notes",
  deprecated: "Deprecated",
  removed: "Removed"
}

const isEN = computed(() => typeof window !== 'undefined' && window.location.pathname.startsWith('/en/'))
const t = computed(() => (isEN.value ? stringsEN : stringsID))

const milestones = [
  {
    family: '0.12',
    version: 'v0.12',
    label: 'Konteks mulai memanjang',
    labelEN: 'Context starts to grow',
    text: 'Context Compaction dan pencatatan asal branch ditambahkan; sesi panjang pertama kali punya dasar untuk bekerja berkelanjutan.',
    textEN: 'Context Compaction and branch-origin tracking arrived; long sessions finally had a foundation for continuous work.'
  },
  {
    family: '0.35',
    version: 'v0.35',
    label: 'Extension menjadi inti',
    labelEN: 'Extension becomes the core',
    text: 'Hooks dan Custom Tools disatukan menjadi Extension, sehingga perluasan kemampuan punya satu pintu masuk.',
    textEN: 'Hooks and Custom Tools were unified into Extension, giving capability growth a single entry point.'
  },
  {
    family: '0.50',
    version: 'v0.50',
    label: 'Ekosistem berbagi terbentuk',
    labelEN: 'A shared ecosystem takes shape',
    text: 'Extension, Skill, Prompt, dan Theme bisa dipasang dan dibagikan lewat Pi Package.',
    textEN: 'Extension, Skill, Prompt, and Theme could be installed and shared through Pi Package.'
  },
  {
    family: '0.79',
    version: 'v0.79',
    label: 'Keamanan & biaya terlihat',
    labelEN: 'Safety and cost become visible',
    text: 'Project Trust dan rasio cache hit masuk ke pengalaman inti; input proyek tidak lagi dipercaya begitu saja.',
    textEN: 'Project Trust and cache hit rate entered the core experience; project input is no longer trusted by default.'
  },
  {
    family: '0.84',
    version: 'v0.84',
    label: 'Menuju Agent Harness',
    labelEN: 'Toward an Agent Harness',
    text: 'Override konteks per direktori, Session jarak jauh, dan kontrol tool membuat Pi makin bebas dikombinasikan.',
    textEN: 'Directory-level context overrides, remote Sessions, and tool control make Pi easier to compose freely.'
  }
]

const typeOptions = ['all', 'features', 'breaking', 'fixed', 'changed']
const topicOptions = [
  'all',
  'models',
  'providers',
  'sessions',
  'context',
  'extensions',
  'packages',
  'safety',
  'interface',
  'sdk',
  'platforms'
]

const synonymMap: Record<string, string[]> = {
  konteks: ['context', 'compaction', 'compact'],
  sesi: ['session', 'resume', 'transcript'],
  ekstensi: ['extension', 'hook'],
  plugin: ['extension', 'package'],
  paket: ['package'],
  model: ['model', 'thinking', 'reasoning'],
  masuk: ['login', 'oauth', 'authentication'],
  login: ['login', 'oauth', 'authentication'],
  keamanan: ['trust', 'permission', 'security', 'credential'],
  izin: ['permission', 'trust'],
  sandbox: ['sandbox'],
  cache: ['cache'],
  tembolok: ['cache'],
  perbaikan: ['fixed', 'fix'],
  tampilan: ['tui', 'editor', 'footer', 'display'],
  antarmuka: ['tui', 'editor', 'footer', 'display'],
  上下文: ['context', 'compaction', 'compact'],
  压缩: ['compaction', 'compact'],
  壓縮: ['compaction', 'compact'],
  会话: ['session', 'resume', 'transcript'],
  會話: ['session', 'resume', 'transcript'],
  工作阶段: ['session', 'resume', 'transcript'],
  工作階段: ['session', 'resume', 'transcript'],
  扩展: ['extension', 'hook'],
  擴充: ['extension', 'hook'],
  插件: ['extension', 'package'],
  外掛: ['extension', 'package'],
  模型: ['model', 'thinking', 'reasoning'],
  登录: ['login', 'oauth', 'authentication'],
  登入: ['login', 'oauth', 'authentication'],
  安全: ['trust', 'permission', 'security', 'credential'],
  缓存: ['cache'],
  快取: ['cache'],
  修复: ['fixed', 'fix'],
  修復: ['fixed', 'fix'],
  界面: ['tui', 'editor', 'footer', 'display'],
  介面: ['tui', 'editor', 'footer', 'display']
}

const indexedReleases = snapshot.releases.map((release) => ({
  release,
  searchText: normalizeText([
    release.version,
    release.date,
    ...release.topics,
    ...release.sections.flatMap((section) => [section.title, ...section.items])
  ].join(' '))
}))

const years = computed(() => [...new Set(snapshot.releases.map((release) => release.year))])
const latestRelease = snapshot.releases[0]
const latestHighlights = computed(() => {
  const prioritySections = latestRelease.sections.filter((section) =>
    ['features', 'added', 'changed'].includes(section.key)
  )
  const pool = prioritySections.length ? prioritySections : latestRelease.sections
  return pool.flatMap((section) => section.items).slice(0, 3)
})

const filteredReleases = computed(() => {
  const terms = normalizeText(query.value).split(/\s+/).filter(Boolean)

  return indexedReleases
    .filter(({ release, searchText }) => {
      if (year.value !== 'all' && release.year !== year.value) return false
      if (changeType.value !== 'all' && !release.changeTypes.includes(changeType.value)) return false
      if (topic.value !== 'all' && !release.topics.includes(topic.value)) return false

      return terms.every((term) => {
        if (searchText.includes(term)) return true
        return (synonymMap[term] || []).some((synonym) => searchText.includes(synonym))
      })
    })
    .map(({ release }) => release)
})

const visibleReleases = computed(() => filteredReleases.value.slice(0, displayLimit.value))
const remainingCount = computed(() => Math.max(0, filteredReleases.value.length - displayLimit.value))

watch([query, changeType, topic, year], () => {
  displayLimit.value = 18
})

onMounted(() => {
  const hash = decodeURIComponent(window.location.hash.slice(1))
  if (!hash.startsWith('release-v')) return

  const release = snapshot.releases.find((entry) => releaseId(entry.version) === hash)
  if (!release) return

  query.value = release.version
  nextTick(() => document.getElementById(hash)?.scrollIntoView({ block: 'start' }))
})

function normalizeText(value: string) {
  return value.normalize('NFKC').toLowerCase().trim()
}

function releaseId(version: string) {
  return `release-v${version.replace(/[^a-z\d]+/gi, '-')}`
}

function sectionLabel(section: ReleaseSection) {
  const label = (t.value as Record<string, string>)[section.key]
  return label || section.title
}

function setMilestone(family: string) {
  query.value = family
  changeType.value = 'all'
  topic.value = 'all'
  year.value = 'all'
  nextTick(() => explorer.value?.scrollIntoView({ block: 'start', behavior: 'smooth' }))
}

function resetFilters() {
  query.value = ''
  changeType.value = 'all'
  topic.value = 'all'
  year.value = 'all'
}
</script>

<template>
  <div class="pi-release-explorer">
    <section class="release-hero" aria-labelledby="release-archive-title">
      <div class="release-hero__main">
        <p class="release-kicker">{{ t.archive }}</p>
        <h2 id="release-archive-title">{{ t.latest }} <span>v{{ snapshot.meta.latestVersion }}</span></h2>
        <p class="release-latest-date">{{ snapshot.meta.latestDate }} · {{ t.latestNote }}</p>
        <div class="release-highlights">
          <p>{{ t.latestChanges }}</p>
          <ul>
            <li v-for="item in latestHighlights" :key="item">{{ item }}</li>
          </ul>
        </div>
        <a class="release-source-link" :href="latestRelease.sourceUrl" target="_blank" rel="noreferrer">
          {{ t.source }} <span aria-hidden="true">↗</span>
        </a>
      </div>
      <dl class="release-ledger" :aria-label="t.ledgerLabel">
        <div>
          <dt>{{ t.versions }}</dt>
          <dd>{{ snapshot.meta.releaseCount }}</dd>
        </div>
        <div>
          <dt>{{ t.range }}</dt>
          <dd>v{{ snapshot.meta.oldestVersion }}—v{{ snapshot.meta.latestVersion }}</dd>
        </div>
        <div>
          <dt>{{ t.verified }}</dt>
          <dd>{{ snapshot.meta.verifiedAt }}</dd>
        </div>
      </dl>
    </section>

    <section class="release-milestones" aria-labelledby="release-milestones-title">
      <header>
        <p>EVOLUTION MAP</p>
        <h2 id="release-milestones-title">{{ t.milestoneTitle }}</h2>
        <span>{{ t.milestoneDeck }}</span>
      </header>
      <div class="release-milestone-grid">
        <button
          v-for="(milestone, index) in milestones"
          :key="milestone.family"
          type="button"
          @click="setMilestone(milestone.family)"
        >
          <span class="release-milestone__index">0{{ index + 1 }}</span>
          <b>{{ milestone.version }}</b>
          <strong>{{ isEN ? milestone.labelEN : milestone.label }}</strong>
          <small>{{ isEN ? milestone.textEN : milestone.text }}</small>
        </button>
      </div>
    </section>

    <section ref="explorer" class="release-browser" aria-labelledby="release-browser-title">
      <header class="release-browser__header">
        <div>
          <p>QUERY THE ARCHIVE</p>
          <h2 id="release-browser-title">{{ t.explorerTitle }}</h2>
        </div>
        <span>{{ t.explorerDeck }}</span>
      </header>

      <div class="release-controls">
        <label class="release-search">
          <span>{{ t.searchLabel }}</span>
          <span class="release-search__field">
            <span aria-hidden="true">⌕</span>
            <input v-model="query" type="search" :placeholder="t.searchPlaceholder">
          </span>
        </label>

        <fieldset>
          <legend>{{ t.typeLabel }}</legend>
          <div class="release-filter-row">
            <button
              v-for="option in typeOptions"
              :key="option"
              type="button"
              :class="{ 'is-active': changeType === option }"
              :aria-pressed="changeType === option"
              @click="changeType = option"
            >
              {{ (t as Record<string, string>)[option] }}
            </button>
          </div>
        </fieldset>

        <fieldset>
          <legend>{{ t.topicLabel }}</legend>
          <div class="release-filter-row release-filter-row--topics">
            <button
              v-for="option in topicOptions"
              :key="option"
              type="button"
              :class="{ 'is-active': topic === option }"
              :aria-pressed="topic === option"
              @click="topic = option"
            >
              {{ (t as Record<string, string>)[option] }}
            </button>
          </div>
        </fieldset>

        <fieldset>
          <legend>{{ t.yearLabel }}</legend>
          <div class="release-filter-row">
            <button
              type="button"
              :class="{ 'is-active': year === 'all' }"
              :aria-pressed="year === 'all'"
              @click="year = 'all'"
            >
              {{ t.all }}
            </button>
            <button
              v-for="option in years"
              :key="option"
              type="button"
              :class="{ 'is-active': year === option }"
              :aria-pressed="year === option"
              @click="year = option"
            >
              {{ option }}
            </button>
          </div>
        </fieldset>
      </div>

      <div class="release-result-bar" aria-live="polite">
        <strong>{{ filteredReleases.length }} {{ t.results }}</strong>
        <button v-if="query || changeType !== 'all' || topic !== 'all' || year !== 'all'" type="button" @click="resetFilters">
          {{ t.reset }}
        </button>
      </div>

      <div v-if="visibleReleases.length" class="release-list">
        <article
          v-for="(release, index) in visibleReleases"
          :id="releaseId(release.version)"
          :key="release.version"
          class="release-record"
        >
          <details :open="index === 0 && displayLimit === 18">
            <summary>
              <span class="release-record__version">v{{ release.version }}</span>
              <span class="release-record__date">{{ release.date }}</span>
              <span class="release-record__count">{{ release.itemCount }} {{ t.changes }}</span>
              <span class="release-record__toggle" aria-hidden="true">＋</span>
            </summary>
            <div class="release-record__body">
              <p class="release-record__note">{{ t.officialEnglish }}</p>
              <section v-for="section in release.sections" :key="`${release.version}-${section.title}`">
                <h3><span>{{ sectionLabel(section) }}</span><small>{{ section.title }}</small></h3>
                <ul>
                  <li v-for="item in section.items" :key="item">{{ item }}</li>
                </ul>
              </section>
              <footer>
                <a :href="release.sourceUrl" target="_blank" rel="noreferrer">{{ t.source }} ↗</a>
                <a :href="`#${releaseId(release.version)}`">{{ t.permalink }} #</a>
              </footer>
            </div>
          </details>
        </article>
      </div>

      <div v-else class="release-empty">
        <span aria-hidden="true">∅</span>
        <p>{{ t.empty }}</p>
        <button type="button" @click="resetFilters">{{ t.reset }}</button>
      </div>

      <button v-if="remainingCount" class="release-load-more" type="button" @click="displayLimit += 18">
        <span>{{ t.loadMore }}</span>
        <small>{{ remainingCount }} {{ t.remaining }}</small>
      </button>
    </section>
  </div>
</template>
