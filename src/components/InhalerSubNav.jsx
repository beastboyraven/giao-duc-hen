import { NavLink } from 'react-router-dom'
import content from '../data/content.json'

const INHALER_NAV = content.navigation.find((n) => n.children && n.children.length > 0)

export default function InhalerSubNav() {
  if (!INHALER_NAV || !INHALER_NAV.children) {
    return null
  }

  return (
    <nav
      className="container-page -mt-2 mb-6"
      aria-label="Loại hướng dẫn dụng cụ hít"
    >
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-50 ring-1 ring-slate-100">
        {INHALER_NAV.children.map((child) => (
          <NavLink
            key={child.path}
            to={child.path}
            className={({ isActive }) =>
              [
                'flex-1 min-w-[9rem] text-center rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors',
                isActive
                  ? 'bg-brand-teal text-white shadow-sm'
                  : 'text-slate-700 hover:bg-white hover:text-brand-teal'
              ].join(' ')
            }
          >
            {child.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
