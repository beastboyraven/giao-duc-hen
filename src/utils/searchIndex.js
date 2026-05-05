import content from '../data/content.json'

function fold(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export function buildSearchItems() {
  const items = []

  items.push({
    path: '/',
    title: content.site.name,
    snippet: content.site.tagline
  })

  for (const nav of content.navigation) {
    if (nav.path === '/') continue

    const slug = nav.path.replace(/^\//, '')
    const page = content.pages[slug]
    if (!page) continue

    items.push({
      path: nav.path,
      title: page.title,
      snippet: page.intro || ''
    })

    const sections = page.sections || []
    for (const sec of sections) {
      const firstLine = Array.isArray(sec.content) && sec.content.length ? sec.content[0] : ''
      items.push({
        path: nav.path,
        title: `${page.title}: ${sec.heading}`,
        snippet: firstLine
      })
    }
  }

  return items
}

export function filterSearchItems(items, rawQuery) {
  const q = fold(rawQuery.trim())
  if (!q) return []

  const words = q.split(/\s+/).filter(Boolean)
  return items.filter((it) => {
    const hay = fold(`${it.title} ${it.snippet}`)
    return words.every((w) => hay.includes(w))
  })
}

export { fold }
