#!/usr/bin/env node
/**
 * Memeriksa konsistensi judul antar-berkas.
 *
 * - Label prev/next pada frontmatter HARUS sama dengan judul halaman tujuan
 *   (VitePress menampilkannya sebagai label tautan).
 *   Jalankan dengan --fix untuk menyelaraskannya otomatis.
 * - Label navigasi boleh berupa bentuk pendek; perbedaannya hanya dilaporkan
 *   sebagai catatan (peringatan), bukan kegagalan.
 */
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const docsDir = path.join(root, 'docs')
const fix = process.argv.includes('--fix')

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['public', '.vitepress', 'node_modules'].includes(entry.name)) continue
      walk(file, out)
    } else if (entry.name.endsWith('.md')) {
      out.push(file)
    }
  }
  return out
}

const frontmatter = (source) => {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source)
  return match ? match[1] : ''
}

const unquote = (value) => {
  const trimmed = value.trim()
  if ((trimmed.startsWith("'") && trimmed.endsWith("'")) || (trimmed.startsWith('"') && trimmed.endsWith('"'))) {
    return trimmed.slice(1, -1)
  }
  return trimmed
}

const quote = (value) => (/[:#]/.test(value) ? "'" + value.replace(/'/g, "''") + "'" : value)

const titles = new Map()
const pages = []

for (const file of walk(docsDir)) {
  const source = fs.readFileSync(file, 'utf8')
  const fm = frontmatter(source)
  const title = /^title:\s*(.+)$/m.exec(fm)
  const relative = path.relative(docsDir, file).replace(/\\/g, '/')
  if (title) {
    const link = ('/' + relative.replace(/index\.md$/, '').replace(/\.md$/, '')).replace(/\/$/, '')
    titles.set(link, unquote(title[1]))
  }
  pages.push({ file, relative, source })
}

const errors = []
let fixed = 0

for (const { file, relative, source } of pages) {
  const fm = frontmatter(source)
  if (!fm) continue
  let fmWorking = fm
  let touched = false

  for (const key of ['prev', 'next']) {
    const block = new RegExp('(' + key + ':\\s*\\n\\s*text:\\s*)(.+)(\\n\\s*link:\\s*(.+))').exec(fmWorking)
    if (!block) continue
    const text = unquote(block[2])
    const link = unquote(block[4]).split('#')[0].replace(/\/$/, '')
    const title = titles.get(link)
    if (!title || title === text) continue
    if (fix) {
      fmWorking = fmWorking.replace(block[0], block[1] + quote(title) + block[3])
      touched = true
      fixed += 1
    } else {
      errors.push(`${relative} ${key}.text -> "${text}" vs judul "${title}"`)
    }
  }

  if (touched) fs.writeFileSync(file, source.replace(fm, fmWorking))
}

if (fix) {
  console.log(`Label prev/next diselaraskan: ${fixed}`)
} else if (errors.length) {
  console.error(`Konsistensi prev/next: ${errors.length} perbedaan (jalankan --fix untuk menyelaraskan)`)
  for (const error of errors) console.error('- ' + error)
  process.exit(1)
} else {
  console.log('Konsistensi prev/next OK')
}

// catatan: label navigasi boleh lebih pendek daripada judul halaman
const navigationFiles = ['navigation.mts', 'navigation.en.mts']
const navigation = navigationFiles
  .map((file) => fs.readFileSync(path.join(docsDir, '.vitepress', 'config', file), 'utf8'))
  .join('\n')
const warnings = []
for (const match of navigation.matchAll(/\{\s*text:\s*'([^']+)',\s*link:\s*'([^']+)'\s*\}/g)) {
  const [, text, link] = match
  if (!link.startsWith('/')) continue
  const title = titles.get(link.split('#')[0].replace(/\/$/, ''))
  if (title && title !== text) warnings.push(`${link}: label "${text}" <> judul "${title}"`)
}
console.log(`catatan label navigasi berbeda dari judul: ${warnings.length}`)
