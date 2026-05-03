import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HelpfulCTA({
  title = 'Cần thêm thông tin?',
  description = 'Khám phá các nội dung khác để đồng hành cùng bé tốt hơn.',
  primary = { text: 'Về trang chủ', to: '/' },
  secondary = { text: 'Cấp cứu khẩn cấp', to: '/cap-cuu-khan-cap' }
}) {
  return (
    <section className="container-page mt-14">
      <div className="card p-6 sm:p-10 ring-1 ring-brand-teal/15 bg-gradient-to-br from-brand-sky via-white to-brand-green/40">
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-ink">{title}</h3>
            <p className="mt-2 text-slate-600 max-w-2xl leading-relaxed">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link to={primary.to} className="btn-primary">
              {primary.text}
              <ArrowRight size={18} />
            </Link>
            <Link to={secondary.to} className="btn-outline">
              {secondary.text}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
