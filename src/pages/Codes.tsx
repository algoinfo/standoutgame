import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  codeContext,
  codeFaqs,
  codeSources,
  codes,
  codesLastCheckedLabel,
  codesMonthYear,
  redeemFailReasons,
  redeemSteps,
} from '../data/codes'

export function Codes() {
  const [copied, setCopied] = useState<string | null>(null)

  async function copyCode(code: string) {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(code)
      window.setTimeout(() => setCopied(null), 1600)
    } catch {
      setCopied(null)
    }
  }

  const active = codes.filter((c) => c.status === 'active')
  const expired = codes.filter((c) => c.status === 'expired')

  return (
    <article className="page">
      <header className="page-hero">
        <p className="eyebrow">Freebies · daily check</p>
        <h1>Stand Out Codes ({codesMonthYear})</h1>
        <p>
          Working Stand Out Roblox codes, rewards, redeem steps, expiry signals, and where
          the next string usually drops. Last checked: {codesLastCheckedLabel}. Status
          follows the official Trello Active / Expired columns; reward text is
          cross-checked against live guides when amounts disagree.
        </p>
      </header>

      <section className="section tight">
        <h2>Before you redeem</h2>
        <ul className="mistake-list">
          {codeContext.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section tight">
        <h2>How to redeem Stand Out codes</h2>
        <ol className="steps">
          {redeemSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="note-block">
          Need the Phone walkthrough first? Use the{' '}
          <Link to="/first-hour">Stand Out first-hour guide</Link> before burning time on
          Gifts errors.
        </p>
      </section>

      <section className="section tight">
        <h2>Still working</h2>
        <p className="note-block">
          {active.length} active string{active.length === 1 ? '' : 's'} on the Trello Active
          board as of {codesLastCheckedLabel}. Copy, redeem on a fresh server, then Claim.
        </p>
        <ul className="code-list">
          {active.map((entry) => (
            <li key={entry.code} className="code-row">
              <div>
                <code>{entry.code}</code>
                <p>
                  <strong>Reward:</strong> {entry.reward}
                </p>
                {entry.since ? (
                  <span className="note">Listed since {entry.since}</span>
                ) : null}
                {entry.expiryEstimate ? (
                  <span className="note">Expiry estimate: {entry.expiryEstimate}</span>
                ) : null}
                {entry.howToJudgeDead ? (
                  <span className="note">Dead when: {entry.howToJudgeDead}</span>
                ) : null}
                {entry.note ? <span className="note">{entry.note}</span> : null}
              </div>
              <button type="button" className="btn btn-small" onClick={() => copyCode(entry.code)}>
                {copied === entry.code ? 'Copied' : 'Copy'}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="section tight">
        <h2>What each code is for</h2>
        <p>
          Stand Out codes almost always pay Stand arrows — the items that roll or reroll
          your kit. Mysterious Arrows feed the wide early pool, Lucky Arrows raise Epic+
          odds, and Bizarre Arrows concentrate on Legendary / Mythical / Pinnacle. Dalas and
          Arrow Parts show up on apology or milestone strings. After you Claim, park a kit
          you still like at D’Arby before you spend arrows; see{' '}
          <Link to="/arrows">Stand Out arrow rates</Link> and the{' '}
          <Link to="/stands">Stand rarities roster</Link> before you burn a Bizarre on a
          random chase.
        </p>
        <p>
          If a guide lists a different Dalas total than another guide, this page keeps both
          figures instead of inventing a “correct” middle value. Redeem text in Discord is
          the ground truth when the board is vague.
        </p>
      </section>

      <section className="section tight">
        <h2>Where to find the next Stand Out code</h2>
        <ul className="stack-list">
          {codeSources.map((source) => (
            <li key={source.name} className="stack-item">
              <h3>{source.name}</h3>
              <p>{source.detail}</p>
            </li>
          ))}
        </ul>
        <p className="note-block">
          After a new string drops, refresh this page’s Last checked date only after a real
          board re-check — do not invent codes. Patch notes that mention codes also land on{' '}
          <Link to="/updates">Stand Out updates</Link>.
        </p>
      </section>

      <section className="section tight">
        <h2>Common redeem failures</h2>
        <ul className="stack-list">
          {redeemFailReasons.map((item) => (
            <li key={item.title} className="stack-item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section tight">
        <h2>Expired Stand Out codes</h2>
        <p className="note-block">
          Kept for searchers hitting old YouTube overlays. Do not farm these — they are
          dead on the live board as of {codesLastCheckedLabel}.
        </p>
        <ul className="code-list muted">
          {expired.map((entry) => (
            <li key={entry.code} className="code-row">
              <div>
                <code>{entry.code}</code>
                <p>
                  <strong>Was:</strong> {entry.reward}
                </p>
                {entry.expiryEstimate ? (
                  <span className="note">Window: {entry.expiryEstimate}</span>
                ) : null}
                {entry.howToJudgeDead ? (
                  <span className="note">Marked dead: {entry.howToJudgeDead}</span>
                ) : null}
                {entry.note ? <span className="note">{entry.note}</span> : null}
              </div>
              <span className="badge">Expired</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section tight">
        <h2>Stand Out codes FAQ</h2>
        <ul className="stack-list">
          {codeFaqs.map((item) => (
            <li key={item.q} className="stack-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </li>
          ))}
        </ul>
      </section>

      <p className="note-block">
        Last checked: {codesLastCheckedLabel}. Independent fan page — not affiliated with
        Studio Umbra: Europa or Roblox.
      </p>
    </article>
  )
}
