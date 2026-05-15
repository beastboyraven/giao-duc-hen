import { Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'
import content from '../data/content.json'
import PageHero from '../components/PageHero.jsx'
import ResponsiveInfographic from '../components/ResponsiveInfographic.jsx'

export default function EquipmentGuidePage({ pageKey }) {
  const page = content.pages[pageKey]
  if (!page || !page.leadImage) {
    return null
  }

  const clean = page.cleanSection

  return (
    <>
      <PageHero
        title={page.title}
        intro={page.intro}
        accent="teal"
        icon={Stethoscope}
      />

      <section className="container-page mt-6 lg:mt-8 mb-10">
        <ResponsiveInfographic
          src={page.leadImage}
          alt={page.title}
        />
      </section>

      {clean && clean.leadImage && (
        <section className="container-page mt-12 mb-12 border-t border-slate-100 pt-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-teal text-center lg:text-left mb-6">
            {clean.title}
          </h2>
          <ResponsiveInfographic src={clean.leadImage} alt={clean.title} />
        </section>
      )}

      <section className="container-page mb-14">
        <div className="card p-5 sm:p-6 ring-1 ring-brand-teal/15 bg-gradient-to-br from-brand-sky via-white to-brand-green/30">
          <p className="text-sm text-slate-700 leading-relaxed">
            Ba mẹ cần được điều dưỡng hoặc bác sĩ chỉ tay thực tế một lần để làm đúng thao tác. Khi không chắc, hãy mang buồng
            đệm / mặt nạ / máy khí dung tái khám để được hướng dẫn lại.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link to="/xu-tri-tai-nha" className="btn-outline !px-4 !py-2 text-sm">
              Xử trí tại nhà
            </Link>
            <Link to="/ve-sinh-ke-hoach" className="btn-outline !px-4 !py-2 text-sm">
              Vệ sinh & kế hoạch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
