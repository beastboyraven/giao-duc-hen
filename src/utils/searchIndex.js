import content from '../data/content.json'
import { navLinkTo } from './navUtils.js'

function fold(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function addPageItems(items, path, page) {
  if (!page) {
    return
  }

  items.push({
    path,
    title: page.title,
    snippet: page.intro || ''
  })

  const sections = page.sections || []
  for (const sec of sections) {
    const firstLine = Array.isArray(sec.content) && sec.content.length ? sec.content[0] : ''
    items.push({
      path,
      title: `${page.title}: ${sec.heading}`,
      snippet: firstLine
    })
  }
}

const INHALER_TAB_PAGES = {
  '/huong-dan-dung-cu-hit/ong-ngam': 'mdi-ong-ngam',
  '/huong-dan-dung-cu-hit/mat-na': 'su-dung-mat-na',
  '/huong-dan-dung-cu-hit/ve-sinh-buong-dem': 've-sinh-buong-dem'
}

export function buildSearchItems() {
  const items = []

  items.push({
    path: '/',
    title: content.site.name,
    snippet: content.site.tagline
  })

  for (const nav of content.navigation) {
    if (nav.path === '/') {
      continue
    }

    if (nav.children && nav.children.length > 0) {
      for (const child of nav.children) {
        const pageKey = INHALER_TAB_PAGES[child.path]
        const page = pageKey ? content.pages[pageKey] : null
        addPageItems(items, child.path, page)
      }
      continue
    }

    const slug = nav.path.replace(/^\//, '')
    const page = content.pages[slug]
    addPageItems(items, navLinkTo(nav), page)
  }

  return items
}

export function filterSearchItems(items, rawQuery) {
  const q = fold(rawQuery.trim())
  if (!q) {
    return []
  }

  const words = q.split(/\s+/).filter(Boolean)
  return items.filter((it) => {
    const hay = fold(`${it.title} ${it.snippet}`)
    return words.every((w) => hay.includes(w))
  })
}

export { fold }
