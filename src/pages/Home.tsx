import { Link } from 'react-router-dom'
import { codes } from '../data/codes'
import { rarityCounts } from '../data/stands'
import { updates } from '../data/updates'

const active = codes.filter((c) => c.status === 'active')
const expiredCount = codes.filter((c) => c.status === 'expired').length
const standTotal = rarityCounts.reduce((sum, row) => sum + row.count, 0)

const hubs = [
  {
    to: '/stands',
    title: 'Stand database',
    blurb: `${standTotal}+ documented Stands with rarity and kit counts`,
  },
  {
    to: '/stands',
    title: 'Tier list',
    blurb: 'Rarity tiers and which arrows can return them',
  },
  {
    to: '/first-hour',
    title: 'Beginner guide',
    blurb: 'First-hour walkthrough — tutorial, EX, bounties, Hamon',
  },
  {
    to: '/guide',
    title: 'Quests hub',
    blurb: 'Story, sides, Space Oddity, bounty examples',
  },
  {
    to: '/arrows',
    title: 'Stand arrows',
    blurb: 'Lucky / Bizarre rates, focus arrows, pity, D’Arby',
  },
  {
    to: '/raids',
    title: 'Raids',
    blurb: 'Train, Highway Star, 77 Rings stages and shops',
  },
  {
    to: '/builds',
    title: 'Hamon & Vampire',
    blurb: 'Lisa Lisa checklist, Billy notes, Stone Mask, Hermit Purple',
  },
  {
    to: '/updates',
    title: 'Updates',
    blurb: 'Launch-week patches, codes, and balance notes',
  },
]

const guideCards = [
  {
    to: '/first-hour',
    label: 'Beginner Guide',
    title: 'First-hour walkthrough',
    blurb:
      'Full page: Hey Ya, controls, EX posing, stats, Usagi → hospital, bounties, Hamon, Huber, stuck-quest fix.',
  },
  {
    to: '/guide',
    label: 'Quest Guide',
    title: 'Sides, bounties & Space Oddity',
    blurb:
      'Level 20 side gate, 45-minute bounties, Big Business, Statue of Sorrow, Jojosapiens survey chain.',
  },
  {
    to: '/raids',
    label: 'Raid Guide',
    title: 'Train, Highway Star & 77 Rings',
    blurb:
      'Donatello starts each Bizarre Adventure — drop tables, Chip shops, Tarkus and frozen mountain.',
  },
  {
    to: '/arrows',
    label: 'Arrow Guide',
    title: 'Rates, pools and pity',
    blurb:
      'Published Lucky/Bizarre %, Part 3/5 focus arrows, story pool blocks, storage slots.',
  },
  {
    to: '/builds',
    label: 'Progression',
    title: 'Stats, Hamon, Vampire',
    blurb:
      'Ability / Health / Damage spend, Lisa Lisa training, Billy alpha tasks, Emerald Roka notes.',
  },
  {
    to: '/stands',
    label: 'Stand Guide',
    title: 'Rarities & off-pool routes',
    blurb:
      'Pinnacle through Quest, Opal Roka evolutions, removed-for-rework list, FAQ.',
  },
  {
    to: '/npcs',
    label: 'NPC Guide',
    title: 'Who to find on Oʻahu',
    blurb: 'Meryl, D’Arby, Donatello, Lisa Lisa, weather-locked Blackmore and Old Lady.',
  },
  {
    to: '/codes',
    label: 'Codes',
    title: 'Active redeem strings',
    blurb: 'RELEASE, launch-night codes, 50KLIKES — new-server tips and redeem path.',
  },
]

const featured = [
  { name: 'Star Platinum', meta: 'Pinnacle · Part 3' },
  { name: 'The World', meta: 'Pinnacle · Part 3' },
  { name: 'King Crimson', meta: 'Pinnacle · Part 5' },
]

const homeUpdates = updates.slice(0, 3)

export function Home() {
  return (
    <>
      <section className="hero hero-compact">
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <p className="hero-kicker">Roblox · now live since November 14, 2026</p>
            <h1 className="hero-brand">
              stand out
              <span className="hero-brand-sub"> field notes</span>
            </h1>
            <p className="hero-lead">
              Independent fan guides for the Roblox Stand battler. Browse documented
              Stands, arrow rates, codes, raids, Hamon routes, and the dated update
              timeline.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" to="/first-hour">
                First-hour walkthrough
              </Link>
              <Link className="btn btn-ghost" to="/stands">
                Browse all Stands →
              </Link>
            </div>
            <p className="hero-stats">
              61,937 playing · 2,345,790 visits · 97.6% approval — sampled 2026-11-15 02:24
              UTC
            </p>
          </div>

          <aside className="home-codes-panel">
            <div className="home-codes-head">
              <h2>Codes status</h2>
              <p>
                {active.length} active · {expiredCount} expired
              </p>
            </div>
            <ul className="home-codes-list">
              {active.map((entry) => (
                <li key={entry.code}>
                  <code>{entry.code}</code>
                  <span>{entry.reward}</span>
                </li>
              ))}
            </ul>
            <p className="home-codes-foot">
              Launch-night / milestone codes often need new servers. PLAYTEST is expired.
            </p>
            <Link className="home-codes-link" to="/codes">
              See all codes →
            </Link>
          </aside>
        </div>
      </section>

      <section className="section tight">
        <ul className="hub-tiles">
          {hubs.map((hub) => (
            <li key={hub.title}>
              <Link to={hub.to}>
                <strong>{hub.title}</strong>
                <span>{hub.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <header className="section-head section-head-row">
          <div>
            <h2>Stand database</h2>
            <p>
              <Link to="/stands">Tier list by rarity →</Link> {standTotal} Stands · data
              checked November 15, 2026
            </p>
          </div>
        </header>

        <div className="home-db-grid">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Rarity</th>
                  <th>Stands</th>
                </tr>
              </thead>
              <tbody>
                {rarityCounts.map((row) => (
                  <tr key={row.rarity}>
                    <td>{row.rarity}</td>
                    <td>{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="featured-block">
            <h3>Featured Stands</h3>
            <ul className="featured-list">
              {featured.map((stand) => (
                <li key={stand.name}>
                  <strong>{stand.name}</strong>
                  <span>{stand.meta}</span>
                </li>
              ))}
            </ul>
            <Link className="home-codes-link" to="/stands">
              Every Stand page →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <header className="section-head section-head-row">
          <div>
            <h2>Guides</h2>
            <p>
              <Link to="/guide">Guides hub →</Link> {guideCards.length} in-depth pages
            </p>
          </div>
        </header>
        <ul className="guide-feed">
          {guideCards.map((card) => (
            <li key={card.title}>
              <Link to={card.to}>
                <span className="guide-label">{card.label}</span>
                <strong>{card.title}</strong>
                <p>{card.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <header className="section-head section-head-row">
          <div>
            <h2>Latest updates</h2>
            <p>
              <Link to="/updates">Full update log →</Link>
            </p>
          </div>
        </header>
        <ul className="update-feed">
          {homeUpdates.map((entry) => (
            <li key={entry.date + entry.title}>
              <time>{entry.date}</time>
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section home-about">
        <header className="section-head">
          <h2>About Stand Out</h2>
        </header>
        <div className="home-about-grid">
          <div>
            <h3>What to know first</h3>
            <p>
              Stand Out is a Roblox Stand-battler that went live on November 14, 2026 at
              19:00 UTC. On its first day the Roblox games API reported 61,937 players in
              game, 2,345,790 visits and a 97.6% approval rating when sampled 2026-11-15
              02:24 UTC. The game covers Stands, combat, quests, gang wars, items,
              locations and other systems. Mechanics can change between patches.
            </p>
          </div>
          <div className="home-about-links">
            <h3>Keep progressing</h3>
            <ul>
              <li>
                <Link to="/stands">All Stands</Link>
              </li>
              <li>
                <Link to="/npcs">Quests & NPCs</Link>
              </li>
              <li>
                <Link to="/codes">Codes status</Link>
              </li>
              <li>
                <Link to="/arrows">Arrow rates</Link>
              </li>
              <li>
                <Link to="/raids">Raids</Link>
              </li>
              <li>
                <Link to="/builds">Hamon & Vampire</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
