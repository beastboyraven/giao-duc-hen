import { Stethoscope, Droplets, SprayCan, Wind, Sparkles } from 'lucide-react'
import content from '../data/content.json'
import PageHero from '../components/PageHero.jsx'
import ContentSection from '../components/ContentSection.jsx'
import HelpfulCTA from '../components/HelpfulCTA.jsx'

const ICONS = [SprayCan, Droplets, Wind, Sparkles]

export default function CachSuDungDungCuHit() {
  const page = content.pages['cach-su-dung-dung-cu-hit']
  return (
    <>
      <PageHero
        title={page.title}
        intro={page.intro}
        badge="Chủ đề 05"
        accent="teal"
        icon={Stethoscope}
      />

      <section className="container-page mt-10 grid gap-5 md:grid-cols-2">
        {page.sections.map((s, i) => (
          <ContentSection
            key={i}
            index={i}
            heading={s.heading}
            content={s.content}
            icon={ICONS[i % ICONS.length]}
            variant="step"
          />
        ))}
      </section>

      <HelpfulCTA
        title="Cần ba mẹ thực hành đúng kỹ thuật"
        description="Nếu chưa rõ thao tác, hãy nhờ điều dưỡng hoặc bác sĩ hướng dẫn trực tiếp ở lần tái khám gần nhất."
        primary={{ text: 'Vệ sinh & Kế hoạch', to: '/ve-sinh-ke-hoach' }}
        secondary={{ text: 'Xử trí tại nhà', to: '/xu-tri-tai-nha' }}
      />
    </>
  )
}
