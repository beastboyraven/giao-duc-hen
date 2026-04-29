import { Siren, AlertTriangle, Phone, Ambulance } from 'lucide-react'
import content from '../data/content.json'
import PageHero from '../components/PageHero.jsx'
import ContentSection from '../components/ContentSection.jsx'

export default function CapCuuKhanCap() {
  const page = content.pages['cap-cuu-khan-cap']
  return (
    <>
      <PageHero
        title={page.title}
        intro={page.intro}
        badge="Chủ đề 03 - Khẩn cấp"
        accent="coral"
        icon={Siren}
      />

      <section className="container-page mt-6">
        <div className="card p-5 sm:p-6 ring-2 ring-rose-300/40 bg-gradient-to-br from-rose-50 to-white">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-rose-100 grid place-items-center shrink-0 animate-pulseSoft">
              <AlertTriangle size={28} className="text-rose-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-rose-700">
                Đưa bé đi cấp cứu ngay nếu xuất hiện dấu hiệu nguy hiểm
              </h3>
              <p className="text-slate-700 text-sm sm:text-base mt-1">
                Không trì hoãn. An toàn của bé là trên hết.
              </p>
            </div>
            <a
              href={`tel:${content.footer.phone.replace(/\s|\(|\)/g, '')}`}
              className="btn-secondary"
            >
              <Phone size={18} />
              Gọi {content.footer.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="container-page mt-8 grid gap-5 md:grid-cols-2">
        {page.sections.map((s, i) => (
          <ContentSection
            key={i}
            index={i}
            heading={s.heading}
            content={s.content}
            variant={i === 0 ? 'warning' : 'step'}
            icon={i === 0 ? AlertTriangle : Ambulance}
          />
        ))}
      </section>

      <section className="container-page mt-12 mb-6">
        <div className="card p-6 sm:p-8 ring-1 ring-rose-300/30 bg-gradient-to-br from-rose-50 via-white to-brand-cream">
          <h3 className="text-xl font-bold text-rose-700">Lời khuyên cho ba mẹ</h3>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-rose-500" />
              Luôn mang theo thuốc cắt cơn của bé khi ra ngoài.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-rose-500" />
              Ghi nhớ số điện thoại bác sĩ và cơ sở y tế gần nhất.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-rose-500" />
              Hướng dẫn người chăm bé biết cách dùng thuốc cắt cơn.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-rose-500" />
              Bình tĩnh - bé sẽ bình tĩnh hơn khi thấy ba mẹ vững vàng.
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
