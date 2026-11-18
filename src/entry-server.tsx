import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App'
import { headTagsHtml, seoForPath } from './seo'

export function render(url: string) {
  const pathname = url.replace(/\/$/, '') || '/'
  const seo = seoForPath(pathname)
  const html = renderToString(
    <StaticRouter location={pathname}>
      <AppRoutes />
    </StaticRouter>,
  )
  return {
    html,
    head: headTagsHtml(seo),
    seo,
  }
}

export { routeSeo } from './seo'
