#!/usr/bin/env node
/**
 * Menyelaraskan anchor hasil terjemahan.
 *
 * Tautan lama memakai anchor Bahasa Mandarin (mis. #konteks-dan-pemadatan versi Mandarin). Setelah judul
 * diterjemahkan, anchor berubah. Skrip ini memetakan anchor lama -> anchor baru memakai
 * posisi judul yang sama pada berkas sumber Bahasa Mandarin (ORIG_DIR).
 *
 * Pemakaian:
 *   ORIG_DIR=/path/ke/pi-bluebook-main/docs node scripts/normalize-anchors.mjs [--dry]
 */
import fs from 'node:fs'
import path from 'node:path'

const projectRoot = process.cwd()
const docsDir = path.join(projectRoot, 'docs')
const origDir = process.env.ORIG_DIR

if (!origDir || !fs.existsSync(origDir)) {
  console.error('ORIG_DIR harus menunjuk ke direktori docs sumber (Bahasa Mandarin).')
  process.exit(1)
}

const dryRun = process.argv.includes('--dry')

const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g
const slugify = (str) =>
  String(str)
    .normalize('NFKD')
    .replace(rCombining, '')
    .replace(rControl, '')
    .replace(rSpecial, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/^(\d)/, '_$1')
    .toLowerCase()

function walkMd(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'public' || entry.name === '.vitepress') continue
      walkMd(file, out)
    } else if (entry.name.endsWith('.md')) {
      out.push(file)
    }
  }
  return out
}

/** Ambil daftar id judul (urut) dari sebuah berkas markdown. */
function headings(file, { stripExplicit = false } = {}) {
  const source = fs.readFileSync(file, 'utf8')
  const ids = []
  const seen = new Map()
  let inFence = false

  for (const line of source.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence
      continue
    }
    if (inFence) continue
    const match = /^(#{1,6})\s+(.*)$/.exec(line)
    if (!match) continue

    const raw = match[2].trim()
    const explicit = /\{#([^}]+)\}\s*$/.exec(raw)
    if (explicit) {
      ids.push({ text: raw.replace(/\s*\{[^}]+\}\s*$/, '').trim(), id: explicit[1] })
      continue
    }
    const text = raw.replace(/\s*\{[^}]+\}\s*$/, '').trim()
    let id = slugify(text)
    if (seen.has(id)) {
      const next = (seen.get(id) ?? 0) + 1
      seen.set(id, next)
      id = `${id}-${next}`
    }
    seen.set(id, seen.get(id) ?? 0)
    ids.push({ text, id })
  }

  if (stripExplicit) return ids.map((heading) => heading.id)
  return ids
}

const changed = []
const problems = []

for (const file of walkMd(docsDir)) {
  const relative = path.relative(docsDir, file)
  const origFile = path.join(origDir, relative)
  if (!fs.existsSync(origFile)) {
    problems.push(`tidak ada berkas sumber untuk ${relative}`)
    continue
  }

  const origIds = headings(origFile, { stripExplicit: true })
  const newIds = headings(file, { stripExplicit: true })

  if (origIds.length !== newIds.length) {
    problems.push(`jumlah judul berbeda di ${relative}: sumber ${origIds.length} vs hasil ${newIds.length}`)
    continue
  }

  const map = new Map()
  for (let i = 0; i < origIds.length; i += 1) {
    if (origIds[i] !== newIds[i]) map.set(origIds[i], newIds[i])
  }
  if (!map.size) continue

  if (map.size) changed.push({ relative, map })
}

// Bangun indeks anchor per berkas target agar bisa memetakan lintas-halaman.
const anchorMaps = new Map()
for (const { relative, map } of changed) anchorMaps.set(relative.replace(/\.md$/, ''), map)

function resolveTargetFile(fromRelative, target) {
  const withoutFragment = target.split('#')[0].split('?')[0]
  if (!withoutFragment) return fromRelative.replace(/\.md$/, '')
  if (withoutFragment.startsWith('/')) return withoutFragment.replace(/^\//, '').replace(/\/$/, '')
  return path.posix.join(path.posix.dirname(fromRelative.replace(/\.md$/, '')), withoutFragment).replace(/\\/g, '/')
}

let rewritten = 0

for (const file of walkMd(docsDir)) {
  const relative = path.relative(docsDir, file)
  let source = fs.readFileSync(file, 'utf8')
  const before = source

  source = source.replace(
    /(\]|href=)(\(|")([^)"']*#[^)"']+)(\)|")/g,
    (full, lead, quoteStart, target, quoteEnd) => {
      const hashIndex = target.indexOf('#')
      if (hashIndex === -1) return full
      const linkPath = target.slice(0, hashIndex)
      const fragment = target.slice(hashIndex + 1)
      if (!fragment) return full

      const targetKey = resolveTargetFile(relative, linkPath === '' ? '' : linkPath)
      const map = anchorMaps.get(targetKey) || anchorMaps.get(targetKey.replace(/^\//, ''))
      if (!map) return full

      const decoded = (() => {
        try {
          return decodeURIComponent(fragment)
        } catch {
          return fragment
        }
      })()

      const replacement = map.get(fragment) || map.get(decoded)
      if (!replacement) return full

      rewritten += 1
      const newFragment = fragment === decoded ? replacement : encodeURIComponent(replacement)
      return `${lead}${quoteStart}${linkPath}#${newFragment}${quoteEnd}`
    }
  )

  if (source !== before) {
    if (!dryRun) fs.writeFileSync(file, source)
    console.log(`anchor diperbarui: ${relative}`)
  }
}

console.log(`---`)
console.log(`berkas dengan judul berubah: ${changed.length}, tautan anchor ditulis ulang: ${rewritten}`)
if (problems.length) {
  console.log('catatan:')
  for (const problem of problems) console.log(`- ${problem}`)
}
