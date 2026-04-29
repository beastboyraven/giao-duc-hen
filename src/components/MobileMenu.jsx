import { useEffect } from 'react'
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

  return (
    <div
      className={[
        'lg:hidden fixed inset-0 z-50 transition-opacity duration-300',
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      ].join(' ')}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      <aside
        className={[
          'absolute top-0 right-0 h-full w-[86%] max-w-sm bg-white shadow-2xl',
          'transform transition-transform duration-300',
          open ? 'translate-x-0' : 'translate-x-full'
        ].join(' ')}
        role="dialog"
        aria-label="Menu điều hướng"
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100">
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

        <nav className="p-3">
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
                    : 'text-slate-700 hover:bg-slate-50'
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-5 mt-4">
          <div className="rounded-2xl bg-brand-green/60 px-4 py-3 text-sm text-emerald-800">
            {content.home.hero.badge}
          </div>
        </div>
      </aside>
    </div>
  )
}
