import { mapTips, moreNpcs, priorityNpcs } from '../data/npcs'

export function Npcs() {
  return (
    <article className="page">
      <header className="page-hero">
        <p className="eyebrow">People & places</p>
        <h1>Stand Out NPC Locations</h1>
        <p>
          Oʻahu is crowded. These are the faces that actually change your progression —
          story, storage, raids, Hamon, and weather-gated side chains.
        </p>
      </header>

      <section className="section tight">
        <h2>See first</h2>
        <ul className="info-grid">
          {priorityNpcs.map((npc) => (
            <li key={npc.name} className="info-card">
              <h3>{npc.name}</h3>
              <span className="where">{npc.where}</span>
              <p>{npc.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section tight">
        <h2>Phone map habits</h2>
        <ul className="mistake-list">
          {mapTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="section tight">
        <h2>Also on the board</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Where</th>
                <th>Why talk</th>
              </tr>
            </thead>
            <tbody>
              {moreNpcs.map((npc) => (
                <tr key={npc.name}>
                  <td>
                    {npc.name}
                    {npc.weather ? <span className="tag">{npc.weather}</span> : null}
                  </td>
                  <td>{npc.where}</td>
                  <td>{npc.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  )
}
