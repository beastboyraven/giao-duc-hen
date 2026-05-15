export function navLinkTo(item) {
  return item.defaultPath || item.path
}

export function isNavItemActive(item, pathname) {
  if (item.children && item.children.length > 0) {
    return (
      pathname === item.path ||
      pathname.startsWith(`${item.path}/`)
    )
  }
  return pathname === item.path
}

export function flattenNavLinks(navigation) {
  const links = []
  for (const item of navigation) {
    if (item.children && item.children.length > 0) {
      links.push({ key: item.path, label: item.label, path: item.path })
      for (const child of item.children) {
        links.push({
          key: child.path,
          label: child.label,
          path: child.path,
          indent: true
        })
      }
    } else {
      links.push({ key: item.path, label: item.label, path: navLinkTo(item) })
    }
  }
  return links
}
