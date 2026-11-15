import { Link } from 'react-router-dom'
import {
  bountyNotes,
  bountyTiers,
  controls,
  exNotes,
  firstHourIntro,
  hamonNotes,
  heyYaSteps,
  sandArrowNote,
  skillExamples,
  statNotes,
  storyNotes,
  stuckNotes,
  toc,
  travelNotes,
} from '../data/firstHour'

export function FirstHour() {
  return (
    <article className="page">
      <header className="page-hero">
        <p className="eyebrow">First-hour walkthrough</p>
        <h1>{firstHourIntro.title}</h1>
        <p>{firstHourIntro.lead}</p>
      </header>

      <section className="section tight">
        <p>{firstHourIntro.body}</p>
        <p className="note-block">{firstHourIntro.quick}</p>
      </section>

      <nav className="section tight first-hour-toc" aria-label="On this page">
        <h2>On this page</h2>
        <ol className="steps">
          {toc.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ol>
      </nav>

      <section id="hey-ya" className="section tight">
        <h2>Hey Ya tutorial: How to get your first Stand</h2>
        <p>
          The tutorial starts as soon as you spawn. It teaches movement and basic combat,
          and it is the only way to get your first Stand without luck.
        </p>
        <ol className="phase-list">
          {heyYaSteps.map((step, index) => (
            <li key={step.title} className="phase-item">
              <span className="phase-num">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <p>
          Your Stand is random. Common early pulls include The Grateful Dead and Beyond the
          Sea. More Mysterious Arrows come from the storyline; using another one rolls a
          different Stand.
        </p>
        <p className="note-block">{sandArrowNote}</p>
      </section>

      <section id="controls" className="section tight">
        <h2>Stand Out controls (PC keybinds)</h2>
        <p>
          The tutorial only covers a few of these keys. The rest unlock as you reach the
          systems that use them. Moves also behave differently with the Stand summoned.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Key</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {controls.map((row) => (
                <tr key={row.key}>
                  <td>
                    <kbd>{row.key}</kbd>
                  </td>
                  <td>{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="ex" className="section tight">
        <h2>Stand skills, EX moves and the EX meter</h2>
        <ul className="mistake-list">
          {exNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <div className="table-wrap" style={{ marginTop: '1.25rem' }}>
          <table>
            <thead>
              <tr>
                <th>Slot</th>
                <th>The Grateful Dead</th>
                <th>Beyond the Sea</th>
              </tr>
            </thead>
            <tbody>
              {skillExamples.map((row) => (
                <tr key={row.slot}>
                  <td>{row.slot}</td>
                  <td>{row.grateful}</td>
                  <td>{row.sea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="stats" className="section tight">
        <h2>Leveling up and spending stat points</h2>
        <ul className="mistake-list">
          {statNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section id="story" className="section tight">
        <h2>Storyline quests: Usagi, the hospital and Diamatch</h2>
        <ul className="mistake-list">
          {storyNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section id="bounties" className="section tight">
        <h2>Bounties: How the phone missions work</h2>
        <ul className="mistake-list">
          {bountyNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <div className="table-wrap" style={{ marginTop: '1.25rem' }}>
          <table>
            <thead>
              <tr>
                <th>Bounty tier</th>
                <th>Level range</th>
              </tr>
            </thead>
            <tbody>
              {bountyTiers.map((row) => (
                <tr key={row.tier}>
                  <td>{row.tier}</td>
                  <td>{row.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="hamon" className="section tight">
        <h2>How to unlock Hamon: Billy, Lisa Lisa and the Ripple Training Mask</h2>
        <ul className="mistake-list">
          {hamonNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <p style={{ marginTop: '1rem' }}>
          More detail → <Link to="/builds">Builds (Hamon & Vampire)</Link>
        </p>
      </section>

      <section id="travel" className="section tight">
        <h2>Fast travel with Huber, resets and throwables</h2>
        <ul className="mistake-list">
          {travelNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section id="stuck" className="section tight">
        <h2>Stuck quest in Stand Out: Switch servers</h2>
        <ul className="mistake-list">
          {stuckNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="section tight">
        <div className="route-grid">
          <Link to="/guide" className="route-link">
            <span className="route-index">Hub</span>
            <h3>All guides</h3>
            <p>Quests taxonomy, villa notes, raid and build indexes.</p>
          </Link>
          <Link to="/builds" className="route-link">
            <span className="route-index">Next</span>
            <h3>Hamon checklist</h3>
            <p>Lisa Lisa breaths, Hermit Purple, Vampire mask.</p>
          </Link>
          <Link to="/codes" className="route-link">
            <span className="route-index">Freebies</span>
            <h3>Codes</h3>
            <p>Redeem launch and milestone strings on the Phone.</p>
          </Link>
        </div>
      </section>
    </article>
  )
}
