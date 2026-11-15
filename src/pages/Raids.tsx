import { raids, ringsWarning, sideBosses, worldBosses } from '../data/raids'

export function Raids() {
  return (
    <article className="page">
      <header className="page-hero">
        <p className="eyebrow">Pressure content</p>
        <h1>Raids & world bosses</h1>
        <p>
          Donatello’s Bizarre Adventures (Train, Highway Star, 77 Rings), day/night event
          bosses, and quest-tied fights — with shop Chip prices where the board publishes
          them.
        </p>
      </header>

      <section className="section tight">
        <h2>Bizarre Adventures</h2>
        <p>
          Talk to Donatello in the park by the Museum of Oʻahu. Learn Regular before Hard.
          Normal raid EXP +15% as of Nov 15, 2026.
        </p>
        <ul className="stack-list">
          {raids.map((raid) => (
            <li key={raid.name} className="stack-item">
              <h3>{raid.name}</h3>
              <p>{raid.how}</p>
              <ul className="nested">
                {raid.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
              <span className="note">{raid.shopNote}</span>
            </li>
          ))}
        </ul>
        <p className="note-block">{ringsWarning}</p>
      </section>

      <section className="section tight">
        <h2>Day / night events</h2>
        <ul className="info-grid">
          {worldBosses.map((boss) => (
            <li key={boss.name} className="info-card">
              <h3>{boss.name}</h3>
              <span className="where">{boss.window}</span>
              <p>{boss.drops}</p>
              <span className="note">{boss.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section tight">
        <h2>Quest-tied fights</h2>
        <ul className="arrow-list">
          {sideBosses.map((boss) => (
            <li key={boss.name}>
              <div>
                <h3>{boss.name}</h3>
                <p>{boss.route}</p>
                <span className="note">{boss.payout}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
