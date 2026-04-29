import { Shield, CalendarCheck, HeartHandshake, BellRing } from 'lucide-react'
import content from '../data/content.json'

const ICONS = [Shield, CalendarCheck, HeartHandshake, BellRing]
const COLORS = [
  { bg: 'bg-emerald-50', text: 'text-emerald-600' },
  { bg: 'bg-sky-50', text: 'text-sky-600' },
  { bg: 'bg-rose-50', text: 'text-rose-500' },
  { bg: 'bg-amber-50', text: 'text-amber-500' }
]

export default function BenefitStrip() {
  return (
    <section className="container-page mt-10 lg:mt-14">
      <div className="card p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 ring-1 ring-slate-100">
        {content.home.benefits.map((b, idx) => {
          const Icon = ICONS[idx % ICONS.length]
          const c = COLORS[idx % COLORS.length]
          return (
            <div
              key={idx}
              className="flex items-center gap-3 p-2 sm:p-3 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              <div className={['h-11 w-11 rounded-xl grid place-items-center shrink-0', c.bg].join(' ')}>
                <Icon size={22} className={c.text} />
              </div>
              <p className="text-sm sm:text-[0.95rem] text-slate-700 leading-snug">{b}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
