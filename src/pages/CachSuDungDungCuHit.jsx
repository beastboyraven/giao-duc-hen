import { Stethoscope, Droplets, SprayCan, Wind, Sparkles } from 'lucide-react'
import content from '../data/content.json'
import PageHero from '../components/PageHero.jsx'
import PageLeadImage from '../components/PageLeadImage.jsx'
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
        accent="teal"
        icon={Stethoscope}
      />

      <PageLeadImage
        src="/assets/CachSuDungDungCuHit.png"
        alt="Hướng dẫn 4 bước dùng MDI với buồng đệm: lắc bình, lắp buồng, thở ra rồi ngậm miệng, ấn thuốc và hít chậm"
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
