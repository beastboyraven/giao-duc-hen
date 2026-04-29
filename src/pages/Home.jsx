import { Link } from 'react-router-dom'
import {
  Wind,
  Siren,
  Stethoscope,
  Home as HomeIcon,
  ShieldCheck,
  BookOpenCheck,
  HeartPulse,
  Sparkles
} from 'lucide-react'
import content from '../data/content.json'
import CTAButton from '../components/CTAButton.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import BenefitStrip from '../components/BenefitStrip.jsx'

const FEATURE_ICONS = [Wind, Siren, Stethoscope, HomeIcon]
const FEATURE_ACCENTS = ['teal', 'coral', 'green', 'cream']

export default function Home() {
  const { hero, featureCards } = content.home

  return (
    <>
      <section className="relative overflow-hidden bg-hero-soft">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-brand-tealLight/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-10 h-80 w-80 rounded-full bg-brand-coral/20 blur-3xl"
        />

        <div className="container-page py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fadeUp">
            <span className="badge bg-white text-brand-teal ring-1 ring-brand-teal/20 shadow-soft mb-5">
              <Sparkles size={16} />
              {content.site.organization}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-ink leading-[1.05] text-balance">
              <span className="text-brand-teal">BA MẸ CÙNG CON</span>
              <br />
              <span className="text-brand-coral">QUẢN LÝ HEN</span>
            </h1>

            <p className="mt-5 text-lg text-slate-600 max-w-xl leading-relaxed">
              {hero.subtitle}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-2 text-emerald-800 font-medium ring-1 ring-emerald-300/40">
              <ShieldCheck size={18} className="text-emerald-600" />
              {hero.badge}
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <CTAButton to={hero.primaryButton.path} icon={Wind} variant="primary">
                {hero.primaryButton.text}
              </CTAButton>
              <CTAButton to={hero.secondaryButton.path} icon={Siren} variant="secondary">
                {hero.secondaryButton.text}
              </CTAButton>
            </div>
          </div>

          <div className="relative animate-fadeUp" style={{ animationDelay: '120ms' }}>
            <div className="relative mx-auto max-w-lg">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-sky to-brand-green/70 blur-2xl opacity-70"
              />
              <img
                src="/assets/family-hero.png"
                alt="Gia đình hạnh phúc cùng bé quản lý hen"
                className="w-full h-auto object-contain drop-shadow-xl"
                loading="eager"
              />
              <img
                src="/assets/shield-medical.png"
                alt=""
                aria-hidden
                className="hidden sm:block absolute -right-4 bottom-6 w-24 lg:w-28 animate-floatY"
              />
              <img
                src="/assets/inhaler-cute.png"
                alt=""
                aria-hidden
                className="hidden sm:block absolute -left-6 top-10 w-20 lg:w-24 animate-floatY"
                style={{ animationDelay: '0.6s' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page mt-12 lg:mt-16">
        <div className="flex items-end justify-between mb-6 sm:mb-8">
          <div>
            <p className="text-sm font-semibold text-brand-coral uppercase tracking-wide">
              Khám phá nhanh
            </p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-brand-ink">
              Bốn chủ đề ba mẹ cần biết
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {featureCards.map((c, idx) => (
            <FeatureCard
              key={c.path}
              to={c.path}
              title={c.title}
              description={c.description}
              icon={FEATURE_ICONS[idx % FEATURE_ICONS.length]}
              accent={FEATURE_ACCENTS[idx % FEATURE_ACCENTS.length]}
            />
          ))}
        </div>
      </section>

      <BenefitStrip />

      <section className="container-page mt-14 lg:mt-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold text-brand-teal uppercase tracking-wide">
              Vì sao tin tưởng?
            </p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-brand-ink">
              Đồng hành cùng phụ huynh - Dựa trên y khoa thực hành
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Nội dung được biên soạn từ tài liệu chuyên khoa của Bệnh viện Nhi Đồng 1, trình bày
              dễ hiểu để ba mẹ an tâm chăm sóc bé mỗi ngày.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                { icon: BookOpenCheck, text: 'Nội dung biên soạn từ tài liệu y khoa' },
                { icon: HeartPulse, text: 'Đồng hành cùng phụ huynh' },
                { icon: Stethoscope, text: 'Hướng dẫn dễ hiểu, ngắn gọn' },
                { icon: ShieldCheck, text: 'Cập nhật thực tế lâm sàng' }
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-white ring-1 ring-slate-100 shadow-card"
                >
                  <span className="h-10 w-10 rounded-xl bg-brand-sky grid place-items-center shrink-0">
                    <item.icon size={20} className="text-brand-teal" />
                  </span>
                  <span className="text-sm text-slate-700 leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="card p-6 sm:p-8 ring-1 ring-brand-teal/15 bg-gradient-to-br from-white via-white to-brand-sky">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-10 w-10 rounded-xl bg-brand-teal text-white grid place-items-center">
                  <Stethoscope size={20} />
                </span>
                <h3 className="font-bold text-brand-ink">Lời nhắn từ bác sĩ</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                "Hen là bệnh có thể kiểm soát tốt nếu ba mẹ hiểu đúng và kiên trì. Hãy đồng hành
                cùng bé từ những việc nhỏ nhất - đúng thuốc, đúng giờ, đúng cách."
              </p>
              <div className="mt-5 flex items-center gap-3">
                <img
                  src="/assets/logo.png"
                  alt=""
                  className="h-10 w-10 object-contain rounded-full ring-1 ring-slate-100"
                />
                <div>
                  <p className="font-semibold text-brand-ink text-sm">Đội ngũ chuyên khoa Hô hấp</p>
                  <p className="text-xs text-slate-500">Bệnh viện Nhi Đồng 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page mt-14 lg:mt-20 mb-6">
        <div className="card p-6 sm:p-10 ring-1 ring-brand-coral/15 bg-gradient-to-br from-rose-50 via-white to-brand-cream">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <p className="text-sm font-semibold text-brand-coral uppercase tracking-wide">
                Lưu ý quan trọng
              </p>
              <h3 className="mt-1 text-2xl font-bold text-brand-ink">
                Khi nào cần đưa bé đi cấp cứu?
              </h3>
              <p className="mt-2 text-slate-600 max-w-2xl leading-relaxed">
                Nhận biết sớm các dấu hiệu nguy hiểm để xử trí kịp thời. Đừng chần chừ - bé luôn
                cần được an toàn trước tiên.
              </p>
            </div>
            <Link to="/cap-cuu-khan-cap" className="btn-secondary">
              <Siren size={18} />
              Xem dấu hiệu nguy hiểm
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
