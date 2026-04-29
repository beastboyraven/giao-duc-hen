import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function PageHero({
  title,
  intro,
  badge,
  accent = 'teal',
  icon: Icon
}) {
  const accentMap = {
    teal: 'from-brand-sky via-white to-white',
    coral: 'from-rose-50 via-white to-white',
    green: 'from-brand-green via-white to-white',
    cream: 'from-brand-cream via-white to-white'
  }
  const bg = accentMap[accent] || accentMap.teal

  return (
    <section className={['bg-gradient-to-b', bg].join(' ')}>
      <div className="container-page py-10 lg:py-14">
        <nav className="text-sm text-slate-500 inline-flex items-center gap-1 mb-4">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-brand-teal">
            <Home size={14} />
            Trang chủ
          </Link>
          <ChevronRight size={14} />
          <span className="text-slate-700 font-medium">{title}</span>
        </nav>

        <div className="flex items-start gap-4 lg:gap-6">
          {Icon && (
            <div className="hidden sm:grid h-16 w-16 lg:h-20 lg:w-20 rounded-3xl bg-white shadow-soft place-items-center shrink-0">
              <Icon size={36} className="text-brand-teal" />
            </div>
          )}
          <div className="flex-1">
            {badge && (
              <span className="badge bg-white text-brand-teal ring-1 ring-brand-teal/20 mb-3">
                {badge}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-ink text-balance">
              {title}
            </h1>
            {intro && (
              <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
                {intro}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
