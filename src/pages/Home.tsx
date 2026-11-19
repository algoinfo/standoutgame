import { Link } from 'react-router-dom'
import { rateRows, poolRemoved, storyPoolBlocks, storageNotes } from '../data/arrows'
import { codes, redeemSteps } from '../data/codes'
import { priorityNpcs } from '../data/npcs'
import { rarityBlurb, rarityOrder, stands, type Rarity } from '../data/stands'
import { updates } from '../data/updates'

const active = codes.filter((c) => c.status === 'active')
const expiredCount = codes.filter((c) => c.status === 'expired').length
const standTotal = stands.length

const standsByRarity = rarityOrder.map((rarity) => ({
  rarity,
  blurb: rarityBlurb[rarity],
  entries: stands.filter((s) => s.rarity === rarity),
}))

const hubs = [
  {
    to: '/codes',
    title: 'Stand Out codes',
    blurb: 'Active strings, rewards, redeem path, expiry signals',
  },
  {
    to: '/stands',
    title: 'Stand rarities',
    blurb: `${standTotal} kits with obtain routes and keep notes`,
  },
  {
    to: '/tier-list',
    title: 'Stand Out tier list',
    blurb: 'Rarity ladder keep bands — not an official power ranking',
  },
  {
    to: '/arrows',
    title: 'Arrow rates',
    blurb: 'Lucky / Bizarre rates, focus arrows, pity, D’Arby',
  },
  {
    to: '/npcs',
    title: 'NPC locations',
    blurb: 'Meryl, D’Arby, Lisa Lisa, weather-locked quests',
  },
  {
    to: '/first-hour',
    title: 'Beginner guide',
    blurb: 'First-hour walkthrough — tutorial, EX, bounties, Hamon',
  },
  {
    to: '/raids',
    title: 'Raids',
    blurb: 'Train, Highway Star, 77 Rings stages and shops',
  },
  {
    to: '/updates',
    title: 'Updates',
    blurb: 'Launch-week patches, codes, and balance notes',
  },
]

const startPath = [
  {
    step: '01',
    title: 'Tutorial → first arrow',
    body: 'Clear Hey Ya’s shore tutorial for a Mysterious Arrow, open it from M → Inventory → USE, summon with E, then learn your kit before spending more arrows.',
    to: '/first-hour',
    link: 'First-hour walkthrough →',
  },
  {
    step: '02',
    title: 'Story → Phone → bounties',
    body: 'Follow Usagi into Iko Iko, take the Phone from Meryl, push the hospital beat, then farm Petyr’s 45-minute bounties for Mysterious Arrows and Coins.',
    to: '/guide',
    link: 'Quests & bounties →',
  },
  {
    step: '03',
    title: 'Hamon, storage, stronger arrows',
    body: 'Unlock Hamon via Billy → Lisa Lisa, park extras at D’Arby before you reroll, then craft Lucky (3×) or Bizarre (9×) when you are ready to chase higher tiers.',
    to: '/builds',
    link: 'Progression notes →',
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

const systems = [
  {
    title: 'Arrow economy',
    body: 'Mysterious Arrows awaken and reroll. Lucky (3 Mysterious) skips Rare. Bizarre (9 Mysterious) skips Rare + Epic and carries the best published Pinnacle rate (4.4%). Part 3 / Part 5 focus arrows chase specific kits.',
    to: '/arrows',
  },
  {
    title: 'Bizarre Adventures',
    body: 'Donatello (Museum park) opens Train, Highway Star, and 77 Rings raids. Clear stages for tokens, Chip shops, and boss drops that feed mid-game progression.',
    to: '/raids',
  },
  {
    title: 'Sub-abilities',
    body: 'Hamon (Lisa Lisa) and Vampire (Stone Mask) unlock when you empty a Stand slot with Emerald Roka. Hermit Purple still needs Jonathan Hamon + Billy’s request.',
    to: '/builds',
  },
  {
    title: 'Gang wars & map',
    body: 'Gang create costs 25,000 Coins. Bases grow Rokakaka faster. Weather locks some NPC routes — Blackmore and Old Lady only appear under their conditions.',
    to: '/npcs',
  },
]

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

const featured: { name: string; rarity: Rarity; meta: string }[] = [
  { name: 'Star Platinum', rarity: 'Pinnacle', meta: 'Part 3 · 5 base · 4 EX' },
  { name: 'The World', rarity: 'Pinnacle', meta: 'Part 3 · 4 base · 4 EX' },
  { name: 'King Crimson', rarity: 'Pinnacle', meta: 'Part 5 · 9 base · 4 EX' },
  { name: 'Highway Star', rarity: 'Mythical', meta: 'Part 4 · raid namesake' },
  { name: "Heaven's Door", rarity: 'Mythical', meta: 'Part 4 · SOUL / REALITY' },
  { name: 'Hermit Purple', rarity: 'Evolution', meta: 'Billy quest · not an arrow roll' },
]

const homeUpdates = updates.slice(0, 6)

function kitLabel(base?: number | null, ex?: number | null) {
  if (base == null && ex == null) return null
  const parts = []
  if (base != null) parts.push(`${base} abilities`)
  if (ex != null) parts.push(`${ex} EX`)
  return parts.join(' · ')
}

export function Home() {
  return (
    <>
      <section className="hero hero-compact">
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <p className="hero-kicker">Roblox · now live since November 14, 2026</p>
            <h1 className="hero-brand">Stand Out Roblox: Codes, Stands & Guides</h1>
            <p className="hero-brand-sub">field notes</p>
            <p className="hero-lead">
              Independent fan guides for the Roblox Stand battler. Browse all{' '}
              {standTotal} documented Stands with rarity and kit counts, published arrow
              rates, active codes, raid routes, Hamon unlocks, and the dated launch-week
              update timeline.
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
                  {entry.note ? <em className="home-codes-note">{entry.note}</em> : null}
                </li>
              ))}
            </ul>
            <ol className="home-codes-steps">
              {redeemSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
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
        <header className="section-head">
          <h2>Start here</h2>
          <p>Three checkpoints that cover most of the first session on Oʻahu.</p>
        </header>
        <ol className="home-start-path">
          {startPath.map((item) => (
            <li key={item.step}>
              <span className="home-start-step">{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link className="home-codes-link" to={item.to}>
                  {item.link}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <header className="section-head section-head-row">
          <div>
            <h2>Stand database</h2>
            <p>
              <Link to="/stands">Full rarity pages →</Link> {standTotal} Stands · data
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
                  <th>Lucky</th>
                  <th>Bizarre</th>
                </tr>
              </thead>
              <tbody>
                {standsByRarity.map((row) => {
                  const rates = rateRows.find((r) => r.rarity === row.rarity)
                  return (
                    <tr key={row.rarity}>
                      <td>{row.rarity}</td>
                      <td>{row.entries.length}</td>
                      <td>{rates?.lucky ?? '—'}</td>
                      <td>{rates?.bizarre ?? '—'}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="featured-block">
            <h3>Featured kits</h3>
            <ul className="featured-list">
              {featured.map((stand) => (
                <li key={stand.name}>
                  <strong>{stand.name}</strong>
                  <span>
                    {stand.rarity} · {stand.meta}
                  </span>
                </li>
              ))}
            </ul>
            <Link className="home-codes-link" to="/stands">
              Every Stand page →
            </Link>
          </div>
        </div>

        <div className="home-rarity-blocks">
          {standsByRarity.map((group) => (
            <article key={group.rarity} className="home-rarity-block">
              <header>
                <h3>
                  {group.rarity}{' '}
                  <span>
                    ({group.entries.length})
                  </span>
                </h3>
                <p>{group.blurb}</p>
              </header>
              <ul>
                {group.entries.map((stand) => (
                  <li key={stand.name}>
                    <strong>{stand.name}</strong>
                    <span>
                      {stand.part}
                      {kitLabel(stand.base, stand.ex)
                        ? ` · ${kitLabel(stand.base, stand.ex)}`
                        : ''}
                      {stand.arrows ? ` · ${stand.arrows}` : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <header className="section-head section-head-row">
          <div>
            <h2>How Stands work</h2>
            <p>
              <Link to="/arrows">Arrow rates & pools →</Link>
            </p>
          </div>
        </header>
        <div className="home-systems-grid">
          <article>
            <h3>Arrow ladder</h3>
            <p>
              Mysterious Arrow is the base awaken / reroll. Craft Lucky from 3 Mysterious
              (skips Rare) or Bizarre from 9 (skips Rare + Epic). Rates above are rarity
              buckets — the game does not publish per-Stand weights.
            </p>
            <ul className="home-bullet-list">
              {storyPoolBlocks.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Storage & removal</h3>
            <ul className="home-bullet-list">
              {storageNotes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Off the live pool</h3>
            <p>
              Four kits were pulled for rework on October 29. Evolution / Quest routes
              never come from a blind arrow.
            </p>
            <ul className="home-bullet-list">
              {poolRemoved.map((row) => (
                <li key={row.name}>
                  <strong>{row.name}</strong> — {row.tier}. {row.note}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <header className="section-head">
          <h2>Systems snapshot</h2>
          <p>The other loops that sit beside Stand rolling on launch week.</p>
        </header>
        <ul className="home-systems-cards">
          {systems.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <Link className="home-codes-link" to={item.to}>
                Open guide →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <header className="section-head section-head-row">
          <div>
            <h2>Priority NPCs</h2>
            <p>
              <Link to="/npcs">Full NPC directory →</Link>
            </p>
          </div>
        </header>
        <ul className="home-npc-grid">
          {priorityNpcs.map((npc) => (
            <li key={npc.name}>
              <strong>{npc.name}</strong>
              <span className="home-npc-where">{npc.where}</span>
              <p>{npc.role}</p>
            </li>
          ))}
        </ul>
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
              <Link to="/updates">Full update log →</Link> {updates.length} dated entries
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

      <section className="section">
        <header className="section-head">
          <h2>Quick FAQ</h2>
          <p>Short answers players ask most on day one.</p>
        </header>
        <dl className="home-faq">
          {homeFaq.map((item) => (
            <div key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
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
              02:24 UTC. The map is set in a Part 9–inspired Oʻahu, with Stands, combat,
              quests, gang wars, items, locations, and sub-abilities. Specific mechanics
              and arrow pools can change between patches — every figure on this site is
              stamped to the snapshot dates on each page.
            </p>
            <p className="home-about-extra">
              This site is an independent fan guide. It is not affiliated with the
              developers or Roblox. Use the official experience for live economy numbers
              when a shop price or rate disagrees with an older note.
            </p>
          </div>
          <div className="home-about-links">
            <h3>Keep progressing</h3>
            <ul>
              <li>
                <Link to="/stands">Stand rarities & roster</Link>
              </li>
              <li>
                <Link to="/tier-list">Stand Out tier list</Link>
              </li>
              <li>
                <Link to="/first-hour">First-hour walkthrough</Link>
              </li>
              <li>
                <Link to="/npcs">NPC locations</Link>
              </li>
              <li>
                <Link to="/codes">Stand Out codes</Link>
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
              <li>
                <Link to="/updates">Update log</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
