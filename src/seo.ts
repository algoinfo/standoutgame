import { codeFaqs } from './data/codes'
import { LAST_CHECKED_ISO } from './data/siteMeta'
import { faq as standsFaq } from './data/stands'

export type PageSeo = {
  title: string
  description: string
  path: string
  dateModified?: string
  breadcrumbs?: { name: string; path: string }[]
  faq?: { q: string; a: string }[]
  includeVideoGame?: boolean
}

const siteName = 'stand out'
export const OG_IMAGE_PATH = '/og-cover.jpg'

export const SITE_ORIGIN = 'https://standoutgame.wiki'

export function siteOrigin() {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }
  return SITE_ORIGIN
}

export function absoluteUrl(path: string, origin = SITE_ORIGIN) {
  return `${origin}${path === '/' ? '/' : path}`
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function crumbTrail(seo: PageSeo) {
  const trail = seo.breadcrumbs ?? [
    { name: 'Home', path: '/' },
    ...(seo.path === '/' ? [] : [{ name: seo.title.split('–')[0].trim(), path: seo.path }]),
  ]
  return trail
}

function buildJsonLdGraph(seo: PageSeo, origin: string) {
  const url = absoluteUrl(seo.path, origin)
  const modified = seo.dateModified ?? LAST_CHECKED_ISO
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      name: siteName,
      url: origin,
      description: defaultSeo.description,
      inLanguage: 'en',
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: seo.title,
      description: seo.description,
      dateModified: modified,
      isPartOf: { '@id': `${origin}/#website` },
      inLanguage: 'en',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: crumbTrail(seo).map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path, origin),
      })),
    },
  ]

  if (seo.includeVideoGame) {
    graph.push({
      '@type': 'VideoGame',
      name: 'Stand Out',
      url: 'https://www.roblox.com/games/128828638194450/STAND-OUT',
      genre: ['Action', 'Adventure', 'RPG'],
      gamePlatform: 'Roblox',
      datePublished: '2026-11-14',
      author: { '@type': 'Organization', name: 'Studio Umbra: Europa' },
      description:
        'Roblox Stand battler that launched 2026-11-14 19:00 UTC. Independent guides on standoutgame.wiki cover codes, Stands, arrows, and raids.',
    })
  }

  if (seo.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: seo.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

/** Build-time / SSR head tags so crawlers see title, canonical, og, and JSON-LD without JS. */
export function headTagsHtml(seo: PageSeo, origin = SITE_ORIGIN) {
  const url = absoluteUrl(seo.path, origin)
  const ogImage = absoluteUrl(OG_IMAGE_PATH, origin)
  const graph = buildJsonLdGraph(seo, origin)

  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="robots" content="index,follow,max-image-preview:large" />`,
    `<meta name="author" content="${escapeHtml(siteName)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteName)}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(url)}" />`,
    `<meta property="og:image" content="${escapeHtml(ogImage)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(ogImage)}" />`,
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
    `<script type="application/ld+json" id="seo-jsonld">${JSON.stringify(graph)}</script>`,
  ].join('\n    ')
}

const homeFaq = [
  {
    q: 'Is there a best Stand?',
    a: 'The game FAQ says no definite best Stand. Rarity only gates which arrow can return a kit — it is not a published damage ranking.',
  },
  {
    q: 'How do I redeem codes?',
    a: 'Finish the tutorial, get the Phone from Meryl, press Z → Gifts (Codes), paste the string, Redeem → Claim. Launch-night codes often need a new server.',
  },
  {
    q: 'Can I reroll without losing everything?',
    a: 'Park the current Stand at D’Arby storage first. Using a Chip while another Stand is equipped overwrites the equipped kit for good.',
  },
  {
    q: 'Why can’t I roll Super Fly / Rolling Stones early?',
    a: 'Before story clear, the pool blocks several “bad progression” kits. Settings can re-enable some with a hard-PvE warning.',
  },
]

export const defaultSeo: PageSeo = {
  title: 'Stand Out Roblox: Codes, Stands & Guides (November 2026) – stand out',
  description:
    'Independent Stand Out Roblox guides: working codes, first-hour walkthrough, arrow rates, Stand rarities, raids, Hamon and Vampire builds, NPC locations, and patch notes.',
  path: '/',
  dateModified: LAST_CHECKED_ISO,
  breadcrumbs: [{ name: 'Home', path: '/' }],
  faq: homeFaq,
  includeVideoGame: true,
}

export const routeSeo: Record<string, PageSeo> = {
  '/': defaultSeo,
  '/codes': {
    title: 'Stand Out Codes (November 2026) – stand out',
    description:
      'Active Stand Out Roblox codes with rewards, redeem steps, expiry signals, Discord/Trello sources, failed-redeem fixes, expired list, and FAQ. Last checked daily.',
    path: '/codes',
    dateModified: LAST_CHECKED_ISO,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Stand Out codes', path: '/codes' },
    ],
    faq: codeFaqs,
  },
  '/guide': {
    title: 'Stand Out Guides Hub (November 2026) – stand out',
    description:
      'Stand Out guide index: where to start as a new player, raid and quest walkthroughs, progression, Stand rarity pages, and database shortcuts.',
    path: '/guide',
    dateModified: LAST_CHECKED_ISO,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Guides', path: '/guide' },
    ],
  },
  '/first-hour': {
    title: 'Stand Out Beginner Guide: First Hour (November 2026) – stand out',
    description:
      'Stand Out first-hour guide: Hey Ya tutorial, first Mysterious Arrow, PC controls, EX meter, stats, Usagi hospital story, bounties, Hamon, Huber travel, and stuck-quest fixes.',
    path: '/first-hour',
    dateModified: LAST_CHECKED_ISO,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'First hour', path: '/first-hour' },
    ],
  },
  '/arrows': {
    title: 'Stand Out Arrows: Rates & Pity (November 2026) – stand out',
    description:
      'Stand Out Mysterious, Lucky, and Bizarre Arrow rates, Part 3 and Part 5 focus arrows, story pool blocks, crafting, D’Arby storage, and reroll pity rules.',
    path: '/arrows',
    dateModified: LAST_CHECKED_ISO,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Arrow rates', path: '/arrows' },
    ],
  },
  '/stands': {
    title: 'Stand Out Stands: Rarities & Roster (November 2026) – stand out',
    description:
      'Stand Out Stand database by rarity: obtain routes, keep-or-reroll notes, Pinnacle through Quest kits, Evolution paths, and FAQ.',
    path: '/stands',
    dateModified: LAST_CHECKED_ISO,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Stand rarities', path: '/stands' },
    ],
    faq: standsFaq,
  },
  '/tier-list': {
    title: 'Stand Out Tier List (November 2026) – stand out',
    description:
      'Stand Out rarity tier list and keep-or-reroll notes. Not an official power ranking — maps arrow-pool tiers, Evolution routes, and early-game keep advice.',
    path: '/tier-list',
    dateModified: LAST_CHECKED_ISO,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Stand Out tier list', path: '/tier-list' },
    ],
  },
  '/npcs': {
    title: 'Stand Out NPC Locations (November 2026) – stand out',
    description:
      'Stand Out NPC guide: Meryl, D’Arby, Donatello, Lisa Lisa, Billy, weather-locked quests, bounty givers, and Phone map tips.',
    path: '/npcs',
    dateModified: LAST_CHECKED_ISO,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'NPC locations', path: '/npcs' },
    ],
  },
  '/raids': {
    title: 'Stand Out Raids & Bosses (November 2026) – stand out',
    description:
      'Stand Out Bizarre Adventures: Train Raid, Highway Star, 77 Rings stages, Jotaro and DIO world bosses, quest fights, and Chip shops.',
    path: '/raids',
    dateModified: LAST_CHECKED_ISO,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Raids', path: '/raids' },
    ],
  },
  '/builds': {
    title: 'Stand Out Hamon, Vampire & Stats (November 2026) – stand out',
    description:
      'Stand Out builds: stat points, Lisa Lisa Hamon training, Vampire Stone Mask, Hermit Purple unlock, and mid-game gang notes.',
    path: '/builds',
    dateModified: LAST_CHECKED_ISO,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Builds', path: '/builds' },
    ],
  },
  '/updates': {
    title: 'Stand Out Updates & Patch Notes (November 2026) – stand out',
    description:
      'Stand Out launch-week update timeline: codes, raid EXP, invasions, balance changes, and system fixes with dated notes.',
    path: '/updates',
    dateModified: LAST_CHECKED_ISO,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Updates', path: '/updates' },
    ],
  },
}

export function seoForPath(pathname: string): PageSeo {
  const clean = pathname.replace(/\/$/, '') || '/'
  return (
    routeSeo[clean] ?? {
      ...defaultSeo,
      title: `Stand Out Roblox Guides – ${siteName}`,
      path: clean,
      includeVideoGame: false,
      faq: undefined,
    }
  )
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function removeMeta(attr: 'name' | 'property', key: string) {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove()
}

export function applySeo(seo: PageSeo) {
  const origin = siteOrigin()
  const url = absoluteUrl(seo.path, origin)
  const ogImage = absoluteUrl(OG_IMAGE_PATH, origin)
  document.title = seo.title
  upsertMeta('name', 'description', seo.description)
  upsertMeta('name', 'robots', 'index,follow,max-image-preview:large')
  removeMeta('name', 'keywords')
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:site_name', siteName)
  upsertMeta('property', 'og:title', seo.title)
  upsertMeta('property', 'og:description', seo.description)
  upsertMeta('property', 'og:url', url)
  upsertMeta('property', 'og:image', ogImage)
  upsertMeta('property', 'og:image:width', '1200')
  upsertMeta('property', 'og:image:height', '630')
  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', seo.title)
  upsertMeta('name', 'twitter:description', seo.description)
  upsertMeta('name', 'twitter:image', ogImage)
  upsertLink('canonical', url)
  document.getElementById('seo-webpage-jsonld')?.remove()
  upsertJsonLd('seo-jsonld', buildJsonLdGraph(seo, origin) as unknown as Record<string, unknown>)
}
