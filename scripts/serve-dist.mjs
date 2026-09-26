#!/usr/bin/env node
/**
 * Server statis kecil untuk pratinjau hasil build.
 *
 * Dipakai sebagai pengganti `vitepress preview` saat konten sedang ditulis:
 * server ini tidak crash bila ada permintaan ke aset yang sudah diganti hash
 * akibat rebuild (kasus itu hanya menghasilkan 404).
 *
 * Pemakaian: node scripts/serve-dist.mjs [distDir] [port]
 */
import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'

const distDir = path.resolve(process.argv[2] ?? 'docs/.vitepress/dist')
const port = Number(process.argv[3] ?? 4173)

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json'
}

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0].split('#')[0])
  const target = path.join(distDir, path.normalize(clean).replace(/^(\.\.[\/])+/, ''))
  const candidates = clean.endsWith('/')
    ? [path.join(target, 'index.html')]
    : [target, target + '.html', path.join(target, 'index.html')]
  for (const candidate of candidates) {
    try {
      if (fs.statSync(candidate).isFile()) return candidate
    } catch {
      // berkas hilang / sedang diganti: coba kandidat berikutnya
    }
  }
  return null
}

const server = http.createServer((req, res) => {
  const notFound = () => {
    try {
      const page = path.join(distDir, '404.html')
      if (fs.existsSync(page)) {
        res.writeHead(404, { 'Content-Type': TYPES['.html'] })
        res.end(fs.readFileSync(page))
        return
      }
    } catch {}
    res.writeHead(404, { 'Content-Type': TYPES['.txt'] })
    res.end('404')
  }

  let file
  try {
    file = resolveFile(req.url ?? '/')
  } catch {
    file = null
  }
  if (!file) return notFound()

  try {
    const body = fs.readFileSync(file)
    res.writeHead(200, {
      'Content-Type': TYPES[path.extname(file)] ?? 'application/octet-stream',
      'Cache-Control': 'no-cache'
    })
    res.end(body)
  } catch {
    notFound()
  }
})

server.on('error', (error) => {
  console.error('server error:', error.message)
  process.exit(1)
})

server.listen(port, () => {
  console.log(`Static preview: http://localhost:${port}/`)
  console.log(`Serving ${distDir}`)
})
