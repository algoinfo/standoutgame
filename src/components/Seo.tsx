import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { applySeo, seoForPath } from '../seo'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const GA_MEASUREMENT_ID = 'G-H9B0Z6E7X5'

export function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    applySeo(seoForPath(pathname))
    window.gtag?.('config', GA_MEASUREMENT_ID, {
      page_path: pathname,
    })
  }, [pathname])

  return null
}
