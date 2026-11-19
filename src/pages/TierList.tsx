import { Link } from 'react-router-dom'
import { rarityBlurb, stands } from '../data/stands'
import { CONTENT_MONTH_YEAR, LAST_CHECKED_LABEL } from '../data/siteMeta'

const keepPriority = [
  {
    band: 'S — chase / keep immediately',
    detail:
      'Pinnacle arrow results (King Crimson, Star Platinum, The World) and intentional Evolution / Quest targets. Official FAQ still says there is no definite best Stand — this band only means the kit is scarce or quest-gated.',
    rarities: ['Pinnacle', 'Evolution', 'Quest'] as const,
  },
  {
    band: 'A — strong keeps while climbing',
    detail:
      'Mythical arrow results. Already Lucky/Bizarre territory on the Nov 15 board snapshot. Learn the kit; store before burning more Bizarre pity.',
    rarities: ['Mythical'] as const,
  },
  {
    band: 'B — mid keeps / story clearers',
    detail:
      'Legendary kits reachable on Mysterious, Lucky, and Bizarre. Good enough to push story and raids without forcing Pinnacle.',
    rarities: ['Legendary'] as const,
  },
  {
    band: 'C — bridge Epics',
    detail:
      'Epic is out of the Bizarre pool. Keep a kit you understand while farming Lucky; do not treat Epic as a failed account.',
    rarities: ['Epic'] as const,
  },
  {
    band: 'D — tutors / temporary Rares',
    detail:
      'Mysterious-only Rares (including Hey Ya!). Use them to learn controls and EX, then store before Lucky crafts.',
    rarities: ['Rare'] as const,
  },
]

export function TierList() {
  return (
    <article className="page">
      <header className="page-hero">
        <p className="eyebrow">Rarity ladder · {CONTENT_MONTH_YEAR}</p>
        <h1>Stand Out Tier List</h1>
        <p>
          A Stand Out tier list mapped to published rarity tiers and obtain routes — not a
          damage ranking. Game FAQ: there is no definite best Stand. Last content pass:{' '}
          {LAST_CHECKED_LABEL}. Full kit table lives on{' '}
          <Link to="/stands">Stand Out Stands: Rarities & Roster</Link>.
        </p>
      </header>

      <section className="section tight">
        <h2>How to read this list</h2>
        <ul className="mistake-list">
          <li>Bands follow arrow-pool scarcity and quest gates, not invented DPS numbers.</li>
          <li>
            Lucky / Bizarre percentages cited elsewhere on this site are from the Nov 15,
            2026 board snapshot — see <Link to="/arrows">arrow rates</Link>.
          </li>
          <li>Always park a liked kit at D’Arby before rerolling.</li>
        </ul>
      </section>

      {keepPriority.map((band) => (
        <section key={band.band} className="section tight">
          <header className="tier-head">
            <h2>{band.band}</h2>
            <p>{band.detail}</p>
          </header>
          {band.rarities.map((rarity) => {
            const items = stands.filter((s) => s.rarity === rarity)
            return (
              <div key={rarity} className="stack-item" style={{ marginBottom: '1rem' }}>
                <h3>
                  {rarity} <span className="count">{items.length}</span>
                </h3>
                <p className="note-block">{rarityBlurb[rarity]}</p>
                <ul className="mistake-list">
                  {items.map((stand) => (
                    <li key={stand.name}>
                      <strong>{stand.name}</strong> — {stand.obtain ?? stand.arrows}.{' '}
                      {stand.keepNote}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </section>
      ))}

      <section className="section tight">
        <h2>Related searches this page answers</h2>
        <p>
          Players searching “Stand Out tier list”, “Stand Out stands”, and “Stand Out stand
          tier list” usually want rarity + obtain + keep advice in one place. Storage
          questions (“Stand Out stand storage”) are covered via D’Arby notes on the{' '}
          <Link to="/arrows">arrows</Link> page; Discord drops for new codes sit on{' '}
          <Link to="/codes">Stand Out codes</Link>.
        </p>
      </section>

      <section className="section tight">
        <h2>Next steps</h2>
        <ul className="mistake-list">
          <li>
            <Link to="/stands">Open the full Stand database</Link>
          </li>
          <li>
            <Link to="/codes">Grab active codes for more arrows</Link>
          </li>
          <li>
            <Link to="/first-hour">First-hour walkthrough if you just launched</Link>
          </li>
        </ul>
      </section>
    </article>
  )
}
