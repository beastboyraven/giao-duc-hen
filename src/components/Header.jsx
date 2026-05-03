import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search } from 'lucide-react'
import content from '../data/content.json'
import MobileMenu from './MobileMenu.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-40 transition-all duration-300',
        scrolled ? 'glass shadow-sm' : 'bg-white/70 backdrop-blur'
      ].join(' ')}
    >
      <div className="container-page flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2 lg:gap-3 shrink-0">
          <img
            src="/assets/logo.png"
            alt="Bệnh viện Nhi Đồng 1"
            className="h-9 w-9 lg:h-11 lg:w-11 object-contain"
            loading="eager"
          />
          <span className="font-extrabold text-brand-teal text-lg lg:text-xl tracking-tight">
            {content.site.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {content.navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                ['nav-link', isActive ? 'active' : ''].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Tìm kiếm"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:text-brand-teal hover:bg-brand-sky transition-colors"
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            aria-label="Mở menu"
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-teal hover:bg-brand-sky transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
