import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Arrows } from './pages/Arrows'
import { Builds } from './pages/Builds'
import { Codes } from './pages/Codes'
import { FirstHour } from './pages/FirstHour'
import { Guide } from './pages/Guide'
import { Home } from './pages/Home'
import { Npcs } from './pages/Npcs'
import { Raids } from './pages/Raids'
import { Stands } from './pages/Stands'
import { TierList } from './pages/TierList'
import { Updates } from './pages/Updates'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="codes" element={<Codes />} />
        <Route path="guide" element={<Guide />} />
        <Route path="first-hour" element={<FirstHour />} />
        <Route path="arrows" element={<Arrows />} />
        <Route path="stands" element={<Stands />} />
        <Route path="tier-list" element={<TierList />} />
        <Route path="npcs" element={<Npcs />} />
        <Route path="raids" element={<Raids />} />
        <Route path="builds" element={<Builds />} />
        <Route path="updates" element={<Updates />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
