import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function FeatureCard({ to, title, description, icon: Icon, accent = 'teal' }) {
  const accentMap = {
    teal: {
      ring: 'ring-brand-teal/15',
      bg: 'bg-brand-sky',
      text: 'text-brand-teal',
      arrow: 'bg-brand-teal'
    },
    coral: {
      ring: 'ring-brand-coral/15',
      bg: 'bg-rose-50',
      text: 'text-brand-coral',
      arrow: 'bg-brand-coral'
    },
    green: {
      ring: 'ring-emerald-500/15',
      bg: 'bg-brand-green',
      text: 'text-emerald-700',
      arrow: 'bg-emerald-600'
    },
    cream: {
      ring: 'ring-amber-400/20',
      bg: 'bg-brand-cream',
      text: 'text-amber-700',
      arrow: 'bg-amber-500'
    }
  }
  const a = accentMap[accent] || accentMap.teal

  return (
    <Link
      to={to}
      className={[
        'card card-hover p-5 sm:p-6 ring-1 flex flex-col gap-4',
        a.ring
      ].join(' ')}
    >
      <div className={['h-14 w-14 rounded-2xl grid place-items-center', a.bg].join(' ')}>
        {Icon && <Icon size={28} className={a.text} />}
      </div>
      <div className="flex-1">
        <h3 className={['text-base sm:text-lg font-bold', a.text].join(' ')}>{title}</h3>
        <p className="mt-1 text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Xem chi tiết
        </span>
        <span
          className={[
            'h-9 w-9 rounded-full grid place-items-center text-white shadow-soft',
            a.arrow
          ].join(' ')}
        >
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  )
}
