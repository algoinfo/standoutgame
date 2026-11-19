import {
  arrowCatalog,
  poolRemoved,
  rateRows,
  storageNotes,
  storyPoolBlocks,
} from '../data/arrows'

export function Arrows() {
  return (
    <article className="page">
      <header className="page-hero">
        <p className="eyebrow">Systems</p>
        <h1>Stand Out Arrows: Rates & Pity</h1>
        <p>
          Five rollable arrows, Part focus crafts, the Part 9 rock, published Lucky/Bizarre
          rates, story-pool blocks, and D’Arby storage. Rates reflect the November 15, 2026
          board snapshot.
        </p>
      </header>

      <section className="section tight">
        <h2>Arrow catalog</h2>
        <ul className="stack-list">
          {arrowCatalog.map((arrow) => (
            <li key={arrow.name} className="stack-item">
              <h3>
                {arrow.name} <span className="tag">{arrow.role}</span>
              </h3>
              <p>{arrow.detail}</p>
              <span className="note">{arrow.shop}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section tight">
        <h2>Published craft rates</h2>
        <p>
          Mysterious has no rarity %. Lucky and Bizarre numbers are game-printed tier odds —
          not per-Stand weights.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Rarity</th>
                <th>Mysterious</th>
                <th>Lucky</th>
                <th>Bizarre</th>
              </tr>
            </thead>
            <tbody>
              {rateRows.map((row) => (
                <tr key={row.rarity}>
                  <td>{row.rarity}</td>
                  <td>{row.mysterious}</td>
                  <td>{row.lucky}</td>
                  <td>{row.bizarre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section tight">
        <h2>Storyline pool blocks</h2>
        <ul className="mistake-list">
          {storyPoolBlocks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section tight">
        <h2>Removed pending rework</h2>
        <ul className="stand-grid">
          {poolRemoved.map((stand) => (
            <li key={stand.name} className="stand-item">
              <strong>{stand.name}</strong>
              <span>
                {stand.tier} · {stand.note}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section tight">
        <h2>Rerolls, chips, slots</h2>
        <ul className="mistake-list">
          {storageNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <p className="note-block">
          Pity (Nov 14): neither of your previous two Stands can return. Oct 20 already
          blocked rolling previous + current in one pull (Super Fly loop fix).
        </p>
      </section>
    </article>
  )
}
