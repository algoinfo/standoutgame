import { useState } from 'react'
import { codeContext, codes, redeemSteps } from '../data/codes'

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
        <p className="eyebrow">Freebies</p>
        <h1>Codes (November 2026)</h1>
        <p>
          Four strings still pay out in the live build. Release-night and like-milestone
          codes usually need a fresh server. PLAYTEST is dead.
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
        <h2>Redeem path</h2>
        <ol className="steps">
          {redeemSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="section tight">
        <h2>Still working</h2>
        <ul className="code-list">
          {active.map((entry) => (
            <li key={entry.code} className="code-row">
              <div>
                <code>{entry.code}</code>
                <p>{entry.reward}</p>
                {entry.since ? <span className="note">Listed since {entry.since}</span> : null}
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
        <h2>Expired</h2>
        <ul className="code-list muted">
          {expired.map((entry) => (
            <li key={entry.code} className="code-row">
              <div>
                <code>{entry.code}</code>
                <p>{entry.reward}</p>
                {entry.note ? <span className="note">{entry.note}</span> : null}
              </div>
              <span className="badge">Expired</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
