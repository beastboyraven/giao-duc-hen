export default function PageLeadImage({ src, alt, className = '' }) {
  return (
    <section className={['container-page mt-6 lg:mt-8', className].filter(Boolean).join(' ')}>
      <div className="card overflow-hidden ring-1 ring-slate-100 bg-white shadow-card">
        <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
      </div>
    </section>
  )
}
