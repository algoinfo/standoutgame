import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')
const templatePath = path.join(dist, 'index.html')

function stripManagedHead(template) {
  return template
    .replace(/<title>[^<]*<\/title>\s*/i, '')
    .replace(/<meta\s+name="description"[^>]*>\s*/gi, '')
    .replace(/<meta\s+name="robots"[^>]*>\s*/gi, '')
    .replace(/<meta\s+name="keywords"[^>]*>\s*/gi, '')
    .replace(/<meta\s+name="author"[^>]*>\s*/gi, '')
    .replace(/<meta\s+property="og:[^"]*"[^>]*>\s*/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>\s*/gi, '')
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, '')
    .replace(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>\s*/gi, '')
}

function applyTemplate(template, bodyHtml, headHtml) {
  let page = stripManagedHead(template)
  if (!page.includes('</head>')) {
    throw new Error('dist/index.html is missing </head>')
  }
  if (!page.includes('<div id="root"></div>')) {
    throw new Error('dist/index.html is missing empty #root placeholder')
  }
  page = page.replace('</head>', `    ${headHtml}\n  </head>`)
  page = page.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`)
  return page
}

function outPathFor(routePath) {
  if (routePath === '/') return path.join(dist, 'index.html')
  // Cloudflare Pages pretty URLs: /codes.html → /codes (no trailing slash)
  return path.join(dist, `${routePath.slice(1)}.html`)
}

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Missing ${templatePath}. Run vite build first.`)
  }

  const template = fs.readFileSync(templatePath, 'utf8')
  const { render, routeSeo } = await vite.ssrLoadModule('/src/entry-server.tsx')
  const paths = Object.keys(routeSeo)

  if (paths.length === 0) {
    throw new Error('No routes found in routeSeo')
  }

  for (const routePath of paths) {
    const { html, head } = render(routePath)
    if (!html || html.length < 40) {
      throw new Error(`Prerender produced empty HTML for ${routePath}`)
    }
    if (!head.includes('<title>')) {
      throw new Error(`Prerender produced empty head for ${routePath}`)
    }
    const page = applyTemplate(template, html, head)
    const out = outPathFor(routePath)
    fs.mkdirSync(path.dirname(out), { recursive: true })
    fs.writeFileSync(out, page)
    console.log(`prerender ${routePath} → ${path.relative(dist, out)} (${html.length} chars body)`)
  }
} finally {
  await vite.close()
}
