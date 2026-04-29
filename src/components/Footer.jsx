import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, QrCode, Building2, Heart } from 'lucide-react'
import content from '../data/content.json'

export default function Footer() {
  const f = content.footer
  return (
    <footer className="mt-16 bg-gradient-to-b from-white to-brand-sky/60 border-t border-slate-100">
      <div className="container-page py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/assets/logo.png" alt="" className="h-10 w-10 object-contain" />
            <div>
              <p className="font-extrabold text-brand-teal">{content.site.name}</p>
              <p className="text-xs text-slate-500">{content.site.tagline}</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            <Building2 size={16} className="inline -mt-1 mr-1 text-brand-teal" />
            {f.organization}
          </p>
          <p className="text-sm text-slate-600 mt-2 inline-flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 text-brand-teal shrink-0" />
            <span>{f.address}</span>
          </p>
          <p className="text-sm text-slate-600 mt-2 inline-flex items-center gap-2">
            <Phone size={16} className="text-brand-teal" />
            {f.phone}
          </p>
          <p className="text-sm text-slate-600 mt-2 inline-flex items-center gap-2">
            <Mail size={16} className="text-brand-teal" />
            {f.email}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-brand-ink mb-4">Liên kết nhanh</h4>
          <ul className="space-y-2 text-sm">
            {content.navigation.map((n) => (
              <li key={n.path}>
                <Link
                  to={n.path}
                  className="text-slate-600 hover:text-brand-teal transition-colors"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-brand-ink mb-4">Mã QR</h4>
          <div className="flex items-center gap-4">
            <div className="h-24 w-24 rounded-2xl border-2 border-dashed border-brand-teal/40 grid place-items-center bg-white">
              <QrCode size={44} className="text-brand-teal" />
            </div>
            <p className="text-sm text-slate-600 max-w-[180px]">{f.qrText}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p className="inline-flex items-center gap-1">
            <Heart size={14} className="text-brand-coral" />
            {f.note}
          </p>
          <p>© {new Date().getFullYear()} {f.organization}. Phi lợi nhuận - Phục vụ cộng đồng.</p>
        </div>
      </div>
    </footer>
  )
}
