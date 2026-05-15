export default function DangerSignPair() {
  return (
    <section className="container-page mt-6 lg:mt-8 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
        <img
          src="/assets/DauHieuNguyHiem.png"
          alt="Dấu hiệu nguy hiểm khi hen nặng"
          width={600}
          height={700}
          className="block h-auto w-full rounded-3xl ring-1 ring-slate-100 shadow-card"
          loading="lazy"
          decoding="async"
        />
        <img
          src="/assets/DauHieuNguyHiem_2.png"
          alt="Cần làm gì ngay khi trẻ hen nặng"
          width={600}
          height={700}
          className="block h-auto w-full rounded-3xl ring-1 ring-slate-100 shadow-card"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}
