import { Link } from 'react-router-dom'
import { databaseHelp, guidesCatalog } from '../data/guidesHub'
import {
  bountyExamples,
  questTypes,
  sideQuestHighlights,
  spaceOddity,
} from '../data/quests'

export function Guide() {
  return (
    <article className="page">
      <header className="page-hero">
        <p className="eyebrow">Guides</p>
        <h1>Stand Out guides</h1>
        <p>
          Live since November 14, 2026 — nothing here is a locked playtest build anymore.
          Use this index to pick a walkthrough or jump straight into a database page.
        </p>
      </header>

      <section className="section tight">
        <h2>Where to start</h2>
        <div className="start-split">
          <div className="start-panel start-panel-new">
            <span className="start-tag">Never played</span>
            <h3>Open the game, then read once</h3>
            <p>
              Stand Out is free and public. There is no invite window and no paid unlock —
              fake Robux “access” listings are scams (dev warning Oct 12). Before your first
              hour, read the dedicated walkthrough: tutorial arrow, Mysterious / Lucky /
              Bizarre pools, the pity rule that blocks your previous two Stands, and how to
              redeem RELEASE.
            </p>
            <Link className="btn btn-primary" to="/first-hour">
              First-hour walkthrough
            </Link>
          </div>
          <div className="start-panel start-panel-return">
            <span className="start-tag">Past the tutorial</span>
            <h3>Skip the intro — use the tables</h3>
            <p>
              Already holding a Stand and arrows? Jump the first-hour page and use the
              catalog below, or open a database sheet when you need a single number
              (rates, NPC pin, raid shop). Patch notes live under Updates when something
              feels wrong after a hotfix.
            </p>
            <div className="start-panel-actions">
              <Link className="btn btn-ghost" to="/arrows">
                Arrow rates
              </Link>
              <Link className="btn btn-ghost" to="/updates">
                Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <header className="section-head">
          <h2>Guide catalog</h2>
          <p>
            Eight hubs on this site. Start with the first-hour walkthrough if you just
            spawned; use the rest for raids, quests, builds, and databases.
          </p>
        </header>
        <ol className="guide-catalog">
          {guidesCatalog.map((guide, index) => (
            <li key={guide.title}>
              <Link to={guide.to}>
                <span className="catalog-num">{String(index + 1).padStart(2, '0')}</span>
                <div className="catalog-body">
                  <span className="catalog-kind">{guide.kind}</span>
                  <strong>{guide.title}</strong>
                  <p>{guide.blurb}</p>
                </div>
                <time>{guide.updated}</time>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section id="quests" className="section">
        <header className="section-head">
          <h2>Quest snapshot</h2>
          <p>
            Short board-style taxonomy — full NPC pins and raid stages live on their own
            pages.
          </p>
        </header>
        <ul className="info-grid">
          {questTypes.map((q) => (
            <li key={q.name} className="info-card">
              <h3>{q.name}</h3>
              <p>{q.detail}</p>
            </li>
          ))}
        </ul>
        <div className="table-wrap" style={{ marginTop: '1.5rem' }}>
          <table>
            <thead>
              <tr>
                <th>Side quest</th>
                <th>Giver</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {sideQuestHighlights.map((q) => (
                <tr key={q.name}>
                  <td>{q.name}</td>
                  <td>{q.giver}</td>
                  <td>{q.reward}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="section tight">
          <h3>Space Oddity → Jojosapiens</h3>
          <p>{spaceOddity.intro}</p>
          <ol className="steps">
            {spaceOddity.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="note">{spaceOddity.alt}</p>
        </div>
        <div className="section tight">
          <h3>Sample bounty constraints</h3>
          <ul className="mistake-list">
            {bountyExamples.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <header className="section-head">
          <h2>No guide for your stuck point?</h2>
          <p>
            Most answers sit in dated tables, not long prose. Open the sheet that matches
            the question.
          </p>
        </header>
        <ul className="db-help-grid">
          {databaseHelp.map((block) => (
            <li key={block.title}>
              <h3>{block.title}</h3>
              <p>{block.blurb}</p>
              <div className="db-help-links">
                {block.links.map((link) => (
                  <Link key={link.to} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section home-about">
        <header className="section-head">
          <h2>How numbers are handled</h2>
        </header>
        <p>
          Figures reflect developer-published values at the snapshot date printed on each
          page (currently November 15, 2026). Where the game prints no number, pages say so
          instead of inventing one. Prefer the{' '}
          <Link to="/updates">update log</Link> when a hotfix lands mid-session.
        </p>
        <ul className="home-about-links" style={{ marginTop: '1rem' }}>
          <li>
            <Link to="/first-hour">First-hour walkthrough</Link>
          </li>
          <li>
            <Link to="/stands">Stand database</Link>
          </li>
          <li>
            <Link to="/codes">Codes status</Link>
          </li>
          <li>
            <Link to="/updates">Updates</Link>
          </li>
        </ul>
      </section>
    </article>
  )
}
