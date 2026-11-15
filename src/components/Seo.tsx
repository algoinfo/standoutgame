import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { applySeo, seoForPath } from '../seo'

export function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    applySeo(seoForPath(pathname))
  }, [pathname])

  return null
}
