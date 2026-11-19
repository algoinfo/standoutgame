import { Outlet } from 'react-router-dom'
import { LAST_CHECKED_LABEL } from '../data/siteMeta'
import { Nav } from './Nav'
import { Seo } from './Seo'

export function Layout() {
  return (
    <div className="shell">
      <Seo />
      <div className="atmosphere" aria-hidden />
      <Nav />
      <main className="main" id="main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>
          stand out — independent fan guides for the Roblox Stand battler. Not affiliated
          with Roblox Corporation or the game developers. Mechanics change between patches;
          confirm rewards and rates in-game. Last checked: {LAST_CHECKED_LABEL}.
        </p>
      </footer>
    </div>
  )
}
