import { CalendarCheck, Sparkles, Leaf, ClipboardList } from 'lucide-react'
import content from '../data/content.json'
import PageHero from '../components/PageHero.jsx'
import ContentSection from '../components/ContentSection.jsx'
import HelpfulCTA from '../components/HelpfulCTA.jsx'

const ICONS = [Sparkles, Leaf, ClipboardList]

export default function VeSinhKeHoach() {
  const page = content.pages['ve-sinh-ke-hoach']
  return (
    <>
      <PageHero
        title={page.title}
        intro={page.intro}
        badge="Chủ đề 04"
        accent="cream"
        icon={CalendarCheck}
      />

      <section className="container-page mt-10 grid gap-5 md:grid-cols-2">
        {page.sections.map((s, i) => (
          <ContentSection
            key={i}
            index={i}
            heading={s.heading}
            content={s.content}
            icon={ICONS[i % ICONS.length]}
          />
        ))}
      </section>

      <HelpfulCTA
        title="Tìm hiểu cách dùng dụng cụ hít đúng cách"
        description="Dùng đúng kỹ thuật giúp thuốc vào phổi tốt hơn và giảm tác dụng phụ."
        primary={{ text: 'Hướng dẫn dụng cụ hít', to: '/cach-su-dung-dung-cu-hit' }}
        secondary={{ text: 'Xử trí tại nhà', to: '/xu-tri-tai-nha' }}
      />
    </>
  )
}
