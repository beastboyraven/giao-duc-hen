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

      <section className="container-page mt-8 lg:mt-10">
        <figure className="card overflow-hidden ring-1 ring-brand-teal/15 shadow-card bg-white">
          <figcaption className="px-5 pt-5 pb-2 text-center">
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-wide">
              Minh họa các bước
            </span>
            <p className="mt-1 text-sm text-slate-600">
              Lắc bình thuốc — Lắp với buồng đệm — Thở ra rồi ngậm buồng — Ấn phóng thuốc và hít chậm,
              sâu qua miệng (MDI + buồng đệm)
            </p>
          </figcaption>
          <div className="px-3 pb-4 sm:px-5 sm:pb-6">
            <img
              src="/assets/cach-su-dung-dung-cu-hit.jpg"
              alt="Hướng dẫn 4 bước: lắc bình thuốc, lắp buồng đệm, thở ra rồi ngậm miệng buồng, ấn thuốc và hít vào chậm"
              className="w-full max-w-4xl mx-auto rounded-2xl border border-slate-100"
              loading="lazy"
            />
          </div>
        </figure>
      </section>

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
