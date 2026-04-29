import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTAButton({ to, children, variant = 'primary', icon: Icon, className = '' }) {
  const cls = variant === 'secondary' ? 'btn-secondary' : variant === 'outline' ? 'btn-outline' : 'btn-primary'
  return (
    <Link to={to} className={[cls, 'group', className].join(' ')}>
      {Icon && <Icon size={20} className="shrink-0" />}
      <span>{children}</span>
      <ArrowRight
        size={18}
        className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  )
}
