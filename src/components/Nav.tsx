import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/codes', label: 'Stand Out codes' },
  { to: '/guide', label: 'Guide' },
  { to: '/first-hour', label: 'First hour' },
  { to: '/arrows', label: 'Arrow rates' },
  { to: '/stands', label: 'Stand rarities' },
  { to: '/tier-list', label: 'Tier list' },
  { to: '/npcs', label: 'NPC locations' },
  { to: '/raids', label: 'Raids' },
  { to: '/builds', label: 'Builds' },
  { to: '/updates', label: 'Updates' },
]

export function Nav() {
  return (
    <header className="site-nav">
      <NavLink to="/" className="brand" end>
        <span className="brand-mark" aria-hidden />
        <span className="brand-name">stand out</span>
      </NavLink>
      <nav className="nav-links" aria-label="Primary">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <a
        className="nav-play"
        href="https://www.roblox.com/games/128828638194450/STAND-OUT"
        target="_blank"
        rel="noreferrer"
      >
        Play
      </a>
    </header>
  )
}
