import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  faq,
  outsidePool,
  rarityBlurb,
  rarityCounts,
  rarityOrder,
  stands,
  type Rarity,
} from '../data/stands'

export function Stands() {
  const [filter, setFilter] = useState<Rarity | 'All'>('All')

  const grouped = useMemo(() => {
    const list = filter === 'All' ? stands : stands.filter((s) => s.rarity === filter)
    return rarityOrder
      .map((rarity) => ({
        rarity,
        items: list.filter((s) => s.rarity === rarity),
      }))
      .filter((group) => group.items.length > 0)
  }, [filter])

  return (
    <article className="page">
      <header className="page-hero">
        <p className="eyebrow">Database</p>
        <h1>Stand Out Stands: Rarities & Roster</h1>
        <p>
          Full Stand Out Stand database by rarity — obtain routes, keep-or-reroll notes, kit
          counts, and off-pool / evolution paths. This is a rarity roster, not an official
          power ranking (game FAQ: no definite best Stand). For a keep-focused ladder, see
          the <Link to="/tier-list">Stand Out tier list</Link>.
        </p>
      </header>

      <section className="section tight">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Rarity</th>
                <th>Arrow-pool count</th>
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
        <p className="note-block">
          Lucky Arrow: Epic 42.5% / Legendary 34% / Mythic 22.1% / Pinnacle 1.5%. Bizarre:
          Legendary 57.9% / Mythic 37.7% / Pinnacle 4.4%. Board snapshot Nov 15, 2026 — see{' '}
          <Link to="/arrows">Stand Out arrow rates</Link> for the full table.
        </p>
      </section>

      <div className="filter-bar" role="tablist" aria-label="Filter by rarity">
        <button
          type="button"
          className={filter === 'All' ? 'chip active' : 'chip'}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        {rarityOrder.map((rarity) => (
          <button
            key={rarity}
            type="button"
            className={filter === rarity ? 'chip active' : 'chip'}
            onClick={() => setFilter(rarity)}
          >
            {rarity}
          </button>
        ))}
      </div>

      {grouped.map((group) => (
        <section key={group.rarity} className="section tight">
          <header className="tier-head">
            <h2>
              {group.rarity}
              <span className="count">{group.items.length}</span>
            </h2>
            <p>{rarityBlurb[group.rarity]}</p>
          </header>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Stand</th>
                  <th>Part</th>
                  <th>Base</th>
                  <th>EX</th>
                  <th>How to get</th>
                  <th>Keep?</th>
                </tr>
              </thead>
              <tbody>
                {group.items.map((stand) => (
                  <tr key={stand.name}>
                    <td>{stand.name}</td>
                    <td>{stand.part}</td>
                    <td>{stand.base ?? '—'}</td>
                    <td>{stand.ex ?? '—'}</td>
                    <td>{stand.obtain ?? stand.arrows ?? '—'}</td>
                    <td>{stand.keepNote ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <section className="section tight">
        <h2>Outside the arrow pool</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Stand</th>
                <th>Tier</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {outsidePool.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td>{row.tier}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section tight">
        <h2>Stand storage tip</h2>
        <p>
          Before any reroll, park the equipped Stand at D’Arby. Using a Chip while another
          Stand is equipped overwrites the equipped kit. Pair this roster with{' '}
          <Link to="/codes">Stand Out codes</Link> when you need more Mysterious / Lucky /
          Bizarre arrows.
        </p>
      </section>

      <section className="section tight">
        <h2>FAQ</h2>
        <ul className="stack-list">
          {faq.map((item) => (
            <li key={item.q} className="stack-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
