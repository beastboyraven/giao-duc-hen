import { Link } from 'react-router-dom'
import { Home as HomeIcon, Activity, ListChecks, AlertTriangle, Siren, ArrowRight } from 'lucide-react'
import content from '../data/content.json'
import PageHero from '../components/PageHero.jsx'
import PageLeadImage from '../components/PageLeadImage.jsx'
import ContentSection from '../components/ContentSection.jsx'
import HelpfulCTA from '../components/HelpfulCTA.jsx'

const ICONS = [Activity, ListChecks, AlertTriangle]
const VARIANTS = ['default', 'step', 'warning']

export default function XuTriTaiNha() {
  const page = content.pages['xu-tri-tai-nha']
  return (
    <>
      <PageHero
        title={page.title}
        intro={page.intro}
        accent="green"
        icon={HomeIcon}
      />

      <PageLeadImage
        src="/assets/XuTriTaiNha.png"
        alt="Minh họa xử trí tại nhà khi trẻ lên cơn hen"
      />

      <section className="container-page mt-10 grid gap-5 md:grid-cols-2">
        {page.sections.map((s, i) => (
          <ContentSection
            key={i}
            index={i}
            heading={s.heading}
            content={s.content}
            icon={ICONS[i % ICONS.length]}
            variant={VARIANTS[i % VARIANTS.length]}
          />
        ))}

        <Link
          to="/cap-cuu-khan-cap"
          className="card card-hover flex flex-col gap-4 p-5 sm:p-6 ring-1 ring-rose-200/60 bg-gradient-to-br from-rose-50 to-white"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100">
            <Siren size={28} className="text-rose-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-rose-700">Dấu hiệu nguy hiểm</h3>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              Khi cần đi cấp cứu — nhận biết sớm, xử trí đúng.
            </p>
          </div>
          <div className="flex items-center justify-between border-t border-rose-100 pt-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-rose-600">
              Xem ngay
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-rose-500 text-white shadow-soft">
              <ArrowRight size={16} />
            </span>
          </div>
        </Link>
      </section>

      <HelpfulCTA
        title="Đừng quên kế hoạch điều trị"
        description="Tuân thủ thuốc dự phòng và tái khám đúng hẹn giúp bé hạn chế lên cơn hen."
        primary={{ text: 'Vệ sinh & Kế hoạch', to: '/ve-sinh-ke-hoach' }}
        secondary={{ text: 'Hướng dẫn dụng cụ hít', to: '/huong-dan-dung-cu-hit/ong-ngam' }}
      />
    </>
  )
}
