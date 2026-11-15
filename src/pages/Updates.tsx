import { updates } from '../data/updates'

export function Updates() {
  return (
    <article className="page">
      <header className="page-hero">
        <p className="eyebrow">Patch log</p>
        <h1>Updates</h1>
        <p>
          Dated launch-week and late-beta notes players actually feel — codes, raid EXP,
          invasions, arrow pools, and the first Hustle nerf. Full archive lives on the
          in-game change-log posts.
        </p>
      </header>

      <section className="section tight">
        <ol className="phase-list">
          {updates.map((entry) => (
            <li key={entry.date + entry.title} className="phase-item">
              <span className="phase-num">{entry.date.slice(5)}</span>
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </article>
  )
}
