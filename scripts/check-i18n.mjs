#!/usr/bin/env node
/**
 * Pemeriksa paritas dua locale (Indonesia di root, English di /en/).
 *
 * Memeriksa:
 *  1. setiap halaman Indonesia punya padanan English (dan sebaliknya)
 *  2. struktur padanan sepadan (heading, blok kode, item daftar, baris tabel)
 *  3. tautan internal di halaman English semuanya berprefix /en
 *  4. tidak ada sisa kalimat Bahasa Indonesia di halaman English (di luar blok kode)
 *
 * Pemakaian: node scripts/check-i18n.mjs [--allow-missing]
 */
import fs from 'node:fs'
import path from 'node:path'

const docsDir = path.resolve('docs')
const enDir = path.join(docsDir, 'en')
const allowMissing = process.argv.includes('--allow-missing')

const SKIP_DIRS = new Set(['public', '.vitepress', 'node_modules', 'en'])

function walk(dir, base, skip, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(entry.name)) continue
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(file, base, skip, out)
    else if (entry.name.endsWith('.md')) out.push(path.relative(base, file).split(path.sep).join('/'))
  }
  return out
}

// Buang path/URL dulu agar nama berkas seperti 07-pi-checkpoint-tugas-panjang.png
// tidak ikut terhitung sebagai sisa kalimat Bahasa Indonesia.
const stripPaths = (text) => text
  .replace(/!?\[[^\]]*\]\([^)]*\)/g, (match) => match.replace(/\([^)]*\)/, '(path)'))
  .replace(/https?:\/\/[^\s)"']+/g, 'url')
  .replace(/\/images\/[^\s)"']+/g, 'path')

const stripped = (text) => stripPaths(text)
  .replace(/^---\r?\n[\s\S]*?\r?\n---/, '')
  .replace(/```[\s\S]*?```/g, '')
  .replace(/`[^`]*`/g, '')

const metrics = (text) => {
  const body = stripped(text)
  return {
    headings: (body.match(/^#{1,6}\s/gm) || []).length,
    fences: (text.match(/^\s*(```|~~~)/gm) || []).length,
    bullets: (body.match(/^\s*[-*]\s/gm) || []).length,
    ordered: (body.match(/^\s*\d+\.\s/gm) || []).length,
    tableRows: (body.match(/^\s*\|/gm) || []).length
  }
}

const ID_STOPWORDS = /\b(berkas|tidak|dengan|untuk|adalah|Anda|yang|dari|pada|akan|sudah|belum|harus|bisa|jika|atau|juga|lebih|setelah|sebelum|halaman|catatan|perintah|materi|tugas|jadwal|berikut|namun|serta|antara|dalam|oleh|ini|itu)\b/

const idPages = walk(docsDir, docsDir, SKIP_DIRS).sort()
const enPages = walk(enDir, enDir, new Set(['node_modules'])).sort()

const errors = []
const notes = []

for (const page of idPages) {
  if (!enPages.includes(page)) errors.push(`English counterpart missing: en/${page}`)
}
for (const page of enPages) {
  if (!idPages.includes(page)) errors.push(`Indonesian counterpart missing: ${page}`)
}

for (const page of enPages) {
  const enText = fs.readFileSync(path.join(enDir, page), 'utf8')
  const idPath = path.join(docsDir, page)

  if (fs.existsSync(idPath)) {
    const a = metrics(fs.readFileSync(idPath, 'utf8'))
    const b = metrics(enText)
    const diffs = Object.keys(a).filter((key) => a[key] !== b[key])
    if (diffs.length) {
      errors.push(`en/${page}: structure mismatch — ${diffs.map((key) => `${key} ${a[key]}→${b[key]}`).join(', ')}`)
    }
  }

  // tautan internal harus berprefix /en
  for (const match of enText.matchAll(/\]\((\/[^)\s]*)\)/g)) {
    const target = match[1]
    if (target.startsWith('/en/') || target.startsWith('/images/') || target.startsWith('/examples/')) continue
    errors.push(`en/${page}: internal link without /en prefix — ${target}`)
  }

  // sisa kalimat Indonesia di prosa
  const prose = stripped(enText).split('\n').filter((line) => !/^\s*$/.test(line))
  const idHits = prose.filter((line) => ID_STOPWORDS.test(line))
  if (idHits.length) notes.push(`en/${page}: ${idHits.length} baris memuat kata Indonesia (perlu ditinjau)`)
}

console.log(`Paritas: ${idPages.length} halaman ID, ${enPages.length} halaman EN`)
if (notes.length && !allowMissing) {
  console.log(`\nCatatan (${notes.length}):`)
  for (const note of notes.slice(0, 15)) console.log(' - ' + note)
}
if (errors.length) {
  console.error(`\nPemeriksaan i18n: ${errors.length} masalah`)
  for (const error of errors.slice(0, 30)) console.error(' - ' + error)
  if (errors.length > 30) console.error(`   … dan ${errors.length - 30} lagi`)
  if (!allowMissing) process.exit(1)
} else {
  console.log('\nPemeriksaan i18n lulus: paritas EN/ID lengkap, tautan berprefix /en, struktur sepadan')
}
