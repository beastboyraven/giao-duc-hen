import { Link } from 'react-router-dom'
import { Home, Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="container-page py-20 lg:py-28 text-center">
      <span className="badge bg-brand-sky text-brand-teal ring-1 ring-brand-teal/20 mb-4">
        <Compass size={16} />
        Không tìm thấy trang
      </span>
      <h1 className="text-5xl sm:text-7xl font-extrabold text-brand-teal">404</h1>
      <p className="mt-3 text-slate-600 max-w-md mx-auto">
        Trang bạn tìm có thể đã bị di chuyển hoặc không tồn tại. Hãy quay về trang chủ để tiếp
        tục khám phá.
      </p>
      <Link to="/" className="btn-primary mt-6 inline-flex">
        <Home size={18} />
        Về trang chủ
      </Link>
    </section>
  )
}
