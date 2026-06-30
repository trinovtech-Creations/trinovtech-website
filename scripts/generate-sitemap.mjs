// Generates public/sitemap.xml from the site data. Runs as part of `npm run
// build`, so the sitemap always matches the current pages.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { services } from '../src/data/services.js'
import { solutions } from '../src/data/solutions.js'
import { industries } from '../src/data/industries.js'
import { technologies } from '../src/data/technologies.js'
import { caseStudies } from '../src/data/caseStudies.js'
import { projects } from '../src/data/projects.js'
import { pillars } from '../src/data/about.js'
import { reasons } from '../src/data/why.js'
import { processSteps } from '../src/data/process.js'

const SITE = 'https://trinovtech.in'
const lastmod = new Date().toISOString().slice(0, 10)

// Indexable routes. Privacy/Terms are intentionally excluded (noindex).
const staticPaths = ['/', '/services', '/solutions', '/work', '/about']
const dynamicPaths = [
  ...services.map((s) => `/services/${s.slug}`),
  ...solutions.map((s) => `/solutions/${s.slug}`),
  ...technologies.map((t) => `/technologies/${t.slug}`),
  ...caseStudies.map((c) => `/work/${c.slug}`),
  ...projects.map((p) => `/projects/${p.slug}`),
  ...industries.map((i) => `/industries/${i.slug}`),
  ...pillars.map((p) => `/about/${p.slug}`),
  ...reasons.map((r) => `/why-choose-us/${r.slug}`),
  ...processSteps.map((s) => `/how-we-work/${s.slug}`),
]

const paths = [...staticPaths, ...dynamicPaths]

const body = paths
  .map((p) => {
    const priority = p === '/' ? '1.0' : staticPaths.includes(p) ? '0.8' : '0.6'
    return `  <url>\n    <loc>${SITE}${p}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  })
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`

const out = resolve(dirname(fileURLToPath(import.meta.url)), '../public/sitemap.xml')
writeFileSync(out, xml)
console.log(`sitemap.xml written with ${paths.length} URLs`)
