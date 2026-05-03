import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import content from '../data/content.json'

export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const overlay = (
    <div
      className={[
        'lg:hidden fixed inset-0 z-[100]',
        'transition-opacity duration-300 ease-out',
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      ].join(' ')}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-slate-900/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={[
          'absolute top-0 right-0 flex h-full min-h-[100dvh] w-[86%] max-w-sm flex-col',
          'bg-white shadow-2xl ring-1 ring-slate-200/80',
          'transform transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full'
        ].join(' ')}
        role="dialog"
        aria-modal="true"
        aria-label="Menu điều hướng"
      >
        <div className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-5 h-16">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="" className="h-8 w-8 object-contain" />
            <span className="font-extrabold text-brand-teal">{content.site.name}</span>
          </div>
          <button
            type="button"
            aria-label="Đóng menu"
            onClick={onClose}
            className="h-10 w-10 inline-flex items-center justify-center rounded-full text-brand-teal hover:bg-brand-sky"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto bg-white p-3">
          {content.navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                [
                  'block px-4 py-3 rounded-2xl text-base font-medium',
                  isActive
                    ? 'bg-brand-sky text-brand-teal'
                    : 'text-slate-800 hover:bg-slate-100 bg-white'
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="shrink-0 border-t border-slate-100 bg-white px-5 py-4">
          <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-900 ring-1 ring-emerald-200/60">
            {content.home.hero.badge}
          </div>
        </div>
      </aside>
    </div>
  )

  if (typeof document === 'undefined') {
    return null
  }

  return createPortal(overlay, document.body)
}
