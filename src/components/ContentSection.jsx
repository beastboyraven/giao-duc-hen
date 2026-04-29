import { Check } from 'lucide-react'

export default function ContentSection({
  heading,
  content = [],
  index = 0,
  variant = 'default',
  icon: Icon
}) {
  const isWarning = variant === 'warning'
  const isStep = variant === 'step'

  const accentMap = {
    default: {
      ring: 'ring-brand-teal/15',
      title: 'text-brand-teal',
      bullet: 'text-brand-teal',
      head: 'bg-brand-sky'
    },
    warning: {
      ring: 'ring-rose-300/40',
      title: 'text-rose-600',
      bullet: 'text-rose-500',
      head: 'bg-rose-50'
    },
    step: {
      ring: 'ring-emerald-300/30',
      title: 'text-emerald-700',
      bullet: 'text-emerald-600',
      head: 'bg-brand-green'
    }
  }
  const a = accentMap[variant] || accentMap.default

  return (
    <article
      className={[
        'card p-5 sm:p-7 ring-1 animate-fadeUp',
        a.ring
      ].join(' ')}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <header className="flex items-center gap-3 mb-4">
        <div className={['h-11 w-11 rounded-2xl grid place-items-center', a.head].join(' ')}>
          {Icon ? (
            <Icon size={22} className={a.title} />
          ) : (
            <span className={['font-bold', a.title].join(' ')}>{String(index + 1).padStart(2, '0')}</span>
          )}
        </div>
        <h2 className={['text-lg sm:text-xl font-bold', a.title].join(' ')}>{heading}</h2>
      </header>

      <ul className="space-y-3">
        {content.map((line, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-700">
            {isStep ? (
              <span
                className={[
                  'mt-0.5 h-6 w-6 rounded-full text-xs font-bold grid place-items-center shrink-0 text-white',
                  'bg-emerald-600'
                ].join(' ')}
              >
                {i + 1}
              </span>
            ) : isWarning ? (
              <span className="mt-2 h-2 w-2 rounded-full bg-rose-500 shrink-0" />
            ) : (
              <Check size={18} className={['mt-0.5 shrink-0', a.bullet].join(' ')} />
            )}
            <span className="leading-relaxed">{line}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
