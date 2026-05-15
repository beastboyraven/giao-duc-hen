import { Siren } from 'lucide-react'
import content from '../data/content.json'
import PageHero from '../components/PageHero.jsx'
import DangerSignPair from '../components/DangerSignPair.jsx'

export default function CapCuuKhanCap() {
  const page = content.pages['cap-cuu-khan-cap']
  return (
    <>
      <PageHero
        title={page.title}
        intro={page.intro}
        accent="coral"
        icon={Siren}
      />

      <DangerSignPair />

      <section className="container-page mt-12 mb-6">
        <div className="card p-6 sm:p-8 ring-1 ring-rose-300/30 bg-gradient-to-br from-rose-50 via-white to-brand-cream">
          <h3 className="text-xl font-bold text-rose-700">Lời khuyên cho ba mẹ</h3>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-rose-500 shrink-0" />
              Luôn mang theo thuốc cắt cơn của bé khi ra ngoài.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-rose-500 shrink-0" />
              Ghi nhớ thông tin liên hệ bác sĩ và cơ sở y tế gần nhất khi cần.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-rose-500 shrink-0" />
              Hướng dẫn người chăm bé biết cách dùng thuốc cắt cơn.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-rose-500 shrink-0" />
              Bình tĩnh - bé sẽ bình tĩnh hơn khi thấy ba mẹ vững vàng.
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
