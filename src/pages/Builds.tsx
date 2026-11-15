import {
  billyIntroTasks,
  hamonSteps,
  hermitPurpleSteps,
  statRules,
  vampireNotes,
} from '../data/builds'

export function Builds() {
  return (
    <article className="page">
      <header className="page-hero">
        <p className="eyebrow">Longer projects</p>
        <h1>Hamon, Vampire, Hermit Purple</h1>
        <p>
          Sub-abilities run beside your Stand. Lisa Lisa’s training checklist, Billy’s
          Hermit Purple route, Stone Mask Vampire, and early stat advice.
        </p>
      </header>

      <section className="section tight">
        <h2>Stat spend (cap 50)</h2>
        <p>Three points per level. Open Stats with M. Reset if a spread fails.</p>
        <ul className="info-grid">
          {statRules.map((stat) => (
            <li key={stat.name} className="info-card">
              <h3>{stat.name}</h3>
              <p>{stat.when}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section tight">
        <h2>Hamon Training (Lisa Lisa)</h2>
        <p>
          Volcano summit · ~10,000 Coins. After Jonathan Hamon, boards branch Caesar and
          Zeppeli (wine glass, water run, vampires, planting). Zeppeli Hamon shipped Nov
          10. Launch patch: Life-Giving Overdrive can heal/revive allies.
        </p>
        <ol className="phase-list">
          {hamonSteps.map((step, index) => (
            <li key={step.title} className="phase-item">
              <span className="phase-num">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section tight">
        <h2>Billy intro tasks (older builds)</h2>
        <p>
          Prefer Lisa Lisa above for the current board. Keep this checklist if Billy still
          offers the hospital chain on your server.
        </p>
        <ol className="steps">
          {billyIntroTasks.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="section tight">
        <h2>Hermit Purple</h2>
        <p>
          Quest Stand — not an arrow roll. Requires Jonathan Hamon + empty Stand slot.
          Store keepers at D’Arby first.
        </p>
        <ol className="steps">
          {hermitPurpleSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="section tight">
        <h2>Vampire</h2>
        <ul className="mistake-list">
          {vampireNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="section tight">
        <h2>Gang / FSA side note</h2>
        <p>
          Creating a gang costs ~25,000 Coins. Base plants grow 2× (Rokakaka 3×). Food
          Safety Agency can raid illegal Rokakaka — resist for a SWAT defense payout
          (coins, Arrow Parts, fertilizer, seed). Invasions now matchmake by level/region
          (Nov 15).
        </p>
      </section>
    </article>
  )
}
