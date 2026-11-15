export type PageSeo = {
  title: string
  description: string
  path: string
}

const siteName = 'stand out'

export function siteOrigin() {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }
  return 'https://standoutgame.wiki'
}

export const defaultSeo: PageSeo = {
  title: 'stand out — Roblox codes, guides & Stand database',
  description:
    'Independent Stand Out Roblox guides: working codes, first-hour walkthrough, arrow rates, Stand rarities, raids, Hamon and Vampire builds, NPC locations, and patch notes.',
  path: '/',
}

export const routeSeo: Record<string, PageSeo> = {
  '/': defaultSeo,
  '/codes': {
    title: 'Stand Out codes (November 2026) — stand out',
    description:
      'Active Stand Out Roblox codes: RELEASE, launch rewards, milestone strings, redeem steps on the Phone Gifts app, and expired codes.',
    path: '/codes',
  },
  '/guide': {
    title: 'Stand Out guides hub — stand out',
    description:
      'Stand Out guide index: where to start as a new player, raid and quest walkthroughs, progression, Stand rarity pages, and database shortcuts.',
    path: '/guide',
  },
  '/first-hour': {
    title: 'Stand Out beginner guide: first hour — stand out',
    description:
      'Stand Out first-hour guide: Hey Ya tutorial, first Mysterious Arrow, PC controls, EX meter, stats, Usagi hospital story, bounties, Hamon, Huber travel, and stuck-quest fixes.',
    path: '/first-hour',
  },
  '/arrows': {
    title: 'Stand Out arrows: rates, focus arrows & pity — stand out',
    description:
      'Stand Out Mysterious, Lucky, and Bizarre Arrow rates, Part 3 and Part 5 focus arrows, story pool blocks, crafting, D’Arby storage, and reroll pity rules.',
    path: '/arrows',
  },
  '/stands': {
    title: 'Stand Out Stand rarities & roster — stand out',
    description:
      'Stand Out Stand database by rarity: Pinnacle, Mythical, Legendary, Epic, Rare, Evolution and Quest routes, kit counts, and off-pool Stands.',
    path: '/stands',
  },
  '/npcs': {
    title: 'Stand Out NPC locations — stand out',
    description:
      'Stand Out NPC guide: Meryl, D’Arby, Donatello, Lisa Lisa, Billy, weather-locked quests, bounty givers, and Phone map tips.',
    path: '/npcs',
  },
  '/raids': {
    title: 'Stand Out raids & bosses — stand out',
    description:
      'Stand Out Bizarre Adventures: Train Raid, Highway Star, 77 Rings stages, Jotaro and DIO world bosses, quest fights, and Chip shops.',
    path: '/raids',
  },
  '/builds': {
    title: 'Stand Out Hamon, Vampire & stats — stand out',
    description:
      'Stand Out builds: stat points, Lisa Lisa Hamon training, Vampire Stone Mask, Hermit Purple unlock, and mid-game gang notes.',
    path: '/builds',
  },
  '/updates': {
    title: 'Stand Out updates & patch notes — stand out',
    description:
      'Stand Out launch-week update timeline: codes, raid EXP, invasions, balance changes, and system fixes with dated notes.',
    path: '/updates',
  },
}

export function seoForPath(pathname: string): PageSeo {
  const clean = pathname.replace(/\/$/, '') || '/'
  return routeSeo[clean] ?? {
    ...defaultSeo,
    title: `${siteName} — Stand Out Roblox guides`,
    path: clean,
  }
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

export function applySeo(seo: PageSeo) {
  const origin = siteOrigin()
  const url = `${origin}${seo.path === '/' ? '/' : seo.path}`
  document.title = seo.title
  upsertMeta('name', 'description', seo.description)
  upsertMeta('name', 'robots', 'index,follow,max-image-preview:large')
  upsertMeta(
    'name',
    'keywords',
    'Stand Out, Roblox, Stand Out codes, Stand Out guide, Stands, Hamon, raids',
  )
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:site_name', siteName)
  upsertMeta('property', 'og:title', seo.title)
  upsertMeta('property', 'og:description', seo.description)
  upsertMeta('property', 'og:url', url)
  upsertMeta('name', 'twitter:card', 'summary')
  upsertMeta('name', 'twitter:title', seo.title)
  upsertMeta('name', 'twitter:description', seo.description)
  upsertLink('canonical', url)
  upsertJsonLd('seo-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: origin,
    description: defaultSeo.description,
    inLanguage: 'en',
  })
  upsertJsonLd('seo-webpage-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: seo.title,
    description: seo.description,
    url,
    isPartOf: { '@type': 'WebSite', name: siteName, url: origin },
  })
}
