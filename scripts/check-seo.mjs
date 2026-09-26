import fs from 'node:fs'
import path from 'node:path'

const distDir = path.resolve('docs/.vitepress/dist')
// Situs punya dua locale: Indonesia di root, English di /en/.
const siteUrl = (process.env.PI_SITE_URL ?? 'https://pi-bluebook-id.pages.dev').replace(/\/$/, '')
const sourceSiteUrl = 'https://pi.xiaomovps.com'

const requiredAssets = [
  'apple-touch-icon.png',
  'brand-mark.svg',
  'favicon-48.png',
  'icon-192.png',
  'icon-512.png',
  'og-image.png',
  'site.webmanifest',
  'sitemap.xml'
]

const htmlFiles = []

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name)
    if (entry.isDirectory() && entry.name !== 'assets') walk(filePath)
    if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== '404.html') {
      htmlFiles.push(filePath)
    }
  }
}

const count = (content, fragment) => content.split(fragment).length - 1

function fail(message) {
  console.error(`SEO check failed: ${message}`)
  process.exitCode = 1
}

for (const asset of requiredAssets) {
  if (!fs.existsSync(path.join(distDir, asset))) fail(`missing ${asset}`)
}

walk(distDir)

const notFoundHtml = fs.readFileSync(path.join(distDir, '404.html'), 'utf8')
if (
  count(notFoundHtml, 'name="robots"') !== 1 ||
  !notFoundHtml.includes('name="robots" content="noindex, nofollow"') &&
    !notFoundHtml.includes('name="robots" content="noindex, follow"')
) {
  fail('404 page must have one noindex robots directive')
}

for (const filePath of htmlFiles) {
  const html = fs.readFileSync(filePath, 'utf8')
  const normalizedPath = path.relative(distDir, filePath).replaceAll('\\', '/')
  const isEN = normalizedPath.startsWith('en/')
  const expectedLanguage = isEN ? 'en' : 'id'
  const expectedOgLocale = isEN ? 'en_US' : 'id_ID'
  const requiredFragments = [
    'rel="canonical"',
    'property="og:image"',
    'property="og:locale"',
    'name="twitter:image"',
    'name="twitter:card" content="summary_large_image"',
    'type="application/ld+json"'
  ]

  for (const fragment of requiredFragments) {
    if (count(html, fragment) !== 1) {
      fail(`${normalizedPath} has ${count(html, fragment)} occurrences of ${fragment}`)
    }
  }

  if (!html.includes(`<html lang="${expectedLanguage}"`)) {
    fail(`${normalizedPath} has the wrong html language (expected ${expectedLanguage})`)
  }
  if (!html.includes(`property="og:locale" content="${expectedOgLocale}"`)) {
    fail(`${normalizedPath} has the wrong Open Graph locale (expected ${expectedOgLocale})`)
  }

  const alternateLinks = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)">/g)]
  const alternateLanguages = new Set(alternateLinks.map((match) => match[1]))
  for (const language of ['id', 'en', 'x-default']) {
    if (!alternateLanguages.has(language)) {
      fail(`${normalizedPath} is missing the ${language} alternate`)
    }
  }

  for (const [, language, href] of alternateLinks) {
    if (language === 'x-default') continue
    const targetUrl = new URL(href)
    if (targetUrl.origin !== new URL(siteUrl).origin) continue
    const cleanPath = decodeURIComponent(targetUrl.pathname)
    const targetFile = cleanPath.endsWith('/')
      ? path.join(distDir, cleanPath, 'index.html')
      : path.join(distDir, `${cleanPath}.html`)
    if (!fs.existsSync(targetFile)) {
      fail(`${normalizedPath} points to missing ${language} alternate ${cleanPath}`)
    }
  }

  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
  if (!jsonLdMatch) continue

  try {
    const data = JSON.parse(jsonLdMatch[1])
    if (normalizedPath === 'index.html' || normalizedPath === 'en/index.html') {
      if (
        data['@type'] !== 'WebSite' ||
        !String(data.alternateName ?? '').startsWith('PI BLUEBOOK') ||
        data.inLanguage !== expectedLanguage
      ) {
        fail(`${normalizedPath} home page WebSite data is incomplete`)
      }
    } else {
      const graphTypes = new Set(data['@graph']?.map((item) => item['@type']))
      const webPage = data['@graph']?.find((item) => item['@type'] === 'WebPage')
      if (
        !graphTypes.has('WebPage') ||
        !graphTypes.has('BreadcrumbList') ||
        webPage?.inLanguage !== expectedLanguage
      ) {
        fail(`${normalizedPath} is missing WebPage or BreadcrumbList data`)
      }
      if (normalizedPath === 'about.html' || normalizedPath === 'en/about.html') {
        const expectedUrl = `${siteUrl}/${isEN ? 'en/' : ''}about`
        const person = data['@graph']?.find((item) => item['@type'] === 'Person')
        const breadcrumb = data['@graph']?.find((item) => item['@type'] === 'BreadcrumbList')
        if (
          webPage?.url !== expectedUrl ||
          webPage?.mainEntity?.['@id'] !== `${expectedUrl}#translator` ||
          person?.['@id'] !== `${expectedUrl}#translator` ||
          !String(person?.name ?? '').startsWith('Argakuka') ||
          !person?.url ||
          breadcrumb?.itemListElement?.at(-1)?.item !== expectedUrl ||
          !html.includes(`rel="canonical" href="${expectedUrl}"`) ||
          !html.includes('property="og:type" content="article"')
        ) {
          fail(`${normalizedPath} has incomplete edition profile SEO data`)
        }
      }
    }
  } catch (error) {
    fail(`${normalizedPath} has invalid JSON-LD: ${error.message}`)
  }
}

const sitemap = fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf8')
const sitemapUrlCount = count(sitemap, '<url>')
if (sitemapUrlCount !== htmlFiles.length) {
  fail(`sitemap has ${sitemapUrlCount} URLs for ${htmlFiles.length} indexable pages`)
}

if (!process.exitCode) {
  console.log(`SEO check passed: ${htmlFiles.length} indexable pages (id + en)`)
}
