import { Home as HomeIcon, Activity, ListChecks, AlertTriangle } from 'lucide-react'
import content from '../data/content.json'
import PageHero from '../components/PageHero.jsx'
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
        badge="Chủ đề 02"
        accent="green"
        icon={HomeIcon}
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
      </section>

      <HelpfulCTA
        title="Đừng quên kế hoạch điều trị"
        description="Tuân thủ thuốc dự phòng và tái khám đúng hẹn giúp bé hạn chế lên cơn hen."
        primary={{ text: 'Vệ sinh & Kế hoạch', to: '/ve-sinh-ke-hoach' }}
        secondary={{ text: 'Cách dùng dụng cụ hít', to: '/cach-su-dung-dung-cu-hit' }}
      />
    </>
  )
}
