import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search } from 'lucide-react'
import content from '../data/content.json'
import MobileMenu from './MobileMenu.jsx'
import SearchModal from './SearchModal.jsx'
import NavLabel from './NavLabel.jsx'
import { useEmbedMode } from '../hooks/useEmbedMode.js'

export default function Header() {
  const embedded = useEmbedMode()
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
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
      <div className="container-page flex items-center justify-between gap-2 sm:gap-3 min-h-16 lg:min-h-[4.75rem]">
        {embedded ? (
          <span className="block w-0 shrink-0 overflow-hidden" aria-hidden />
        ) : (
          <Link
            to="/"
            className="flex items-center gap-2.5 lg:gap-3.5 min-w-0 shrink-0 py-1"
            title={content.site.name}
          >
            <img
              src="/assets/logo.png"
              alt=""
              className="h-11 w-11 lg:h-14 lg:w-14 shrink-0 object-contain"
              width="56"
              height="56"
              loading="eager"
            />
            <span className="font-extrabold text-brand-teal text-lg sm:text-xl lg:text-2xl tracking-tight leading-tight">
              {content.site.name}
            </span>
          </Link>
        )}

        <nav className="hidden lg:flex flex-1 items-stretch justify-center gap-0 xl:gap-0.5 min-w-0 px-1">
          {content.navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                ['nav-link', isActive ? 'active' : ''].join(' ')
              }
            >
              <NavLabel item={item} stacked />
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <button
            type="button"
            aria-label="Tìm kiếm"
            onClick={() => {
              setOpen(false)
              setSearchOpen(true)
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:text-brand-teal hover:bg-brand-sky transition-colors"
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

      <MobileMenu open={open} onClose={() => setOpen(false)} embedded={embedded} />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
