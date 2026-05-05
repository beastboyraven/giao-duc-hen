import { Wind } from 'lucide-react'
import content from '../data/content.json'
import PageHero from '../components/PageHero.jsx'
import PageLeadImage from '../components/PageLeadImage.jsx'
import ContentSection from '../components/ContentSection.jsx'
import HelpfulCTA from '../components/HelpfulCTA.jsx'

export default function HenLaGi() {
  const page = content.pages['hen-la-gi']
  return (
    <>
      <PageHero
        title={page.title}
        intro={page.intro}
        accent="teal"
        icon={Wind}
      />

      <PageLeadImage
        src="/assets/HenLaGi.png"
        alt="Minh họa: hen là gì — đường thở và kiểm soát hen"
      />

      <section className="container-page mt-10 grid gap-5 md:grid-cols-2">
        {page.sections.map((s, i) => (
          <ContentSection key={i} index={i} heading={s.heading} content={s.content} />
        ))}
      </section>

      <HelpfulCTA
        title="Bé có dấu hiệu cần lưu ý?"
        description="Nếu bé ho tái đi tái lại, khò khè hoặc khó thở, ba mẹ hãy đưa bé đi khám chuyên khoa để được tư vấn kế hoạch điều trị phù hợp."
        primary={{ text: 'Cách xử trí tại nhà', to: '/xu-tri-tai-nha' }}
        secondary={{ text: 'Dấu hiệu nguy hiểm', to: '/cap-cuu-khan-cap' }}
      />
    </>
  )
}
