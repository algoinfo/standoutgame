import { useMemo, useState } from 'react'
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
    const list =
      filter === 'All' ? stands : stands.filter((s) => s.rarity === filter)
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
        <h1>Stand rarities</h1>
        <p>
          Rarity tier list — not a power ranking. Official FAQ: there is no definite best
          Stand. Numbers below (base / EX move counts) come from documented ability
          headings from published Stand cards.
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
          Legendary 57.9% / Mythic 37.7% / Pinnacle 4.4%. See the Arrows page for the full
          table.
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
                  <th>Arrows</th>
                </tr>
              </thead>
              <tbody>
                {group.items.map((stand) => (
                  <tr key={stand.name}>
                    <td>{stand.name}</td>
                    <td>{stand.part}</td>
                    <td>{stand.base ?? '—'}</td>
                    <td>{stand.ex ?? '—'}</td>
                    <td>{stand.arrows ?? '—'}</td>
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
