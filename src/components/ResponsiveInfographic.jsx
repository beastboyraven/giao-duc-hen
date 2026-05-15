/**
 * Ước lượng file dọc từ ảnh ngang: /assets/Foo.jpg -> /assets/Foo_portrait.png
 */
function inferPortraitSrc(landscapeSrc) {
  if (!landscapeSrc || typeof landscapeSrc !== 'string') {
    return null
  }
  const base = landscapeSrc.replace(/\.(jpg|jpeg|png|webp)$/i, '')
  return `${base}_portrait.png`
}

export default function ResponsiveInfographic({
  src,
  alt,
  portraitSrc,
  showMobileHint
}) {
  const resolvedPortrait =
    portraitSrc !== undefined ? portraitSrc : inferPortraitSrc(src)
  const hasPortrait = Boolean(resolvedPortrait)

  const hintEnabled =
    showMobileHint !== undefined ? showMobileHint : !hasPortrait

  return (
    <figure className="rounded-3xl bg-slate-50/90 ring-1 ring-slate-100 shadow-card overflow-hidden">
      <div
        className={
          hasPortrait
            ? ''
            : 'overflow-x-auto overscroll-x-contain lg:overflow-visible scroll-smooth [scrollbar-width:thin]'
        }
      >
        <picture>
          {hasPortrait && (
            <source
              media="(max-width: 1023px)"
              srcSet={resolvedPortrait}
              type="image/png"
            />
          )}
          <img
            src={src}
            alt={alt}
            width={1200}
            height={800}
            sizes="(max-width: 1023px) 100vw, min(100vw, 80rem)"
            className={
              hasPortrait
                ? 'block h-auto w-full max-w-full select-none'
                : 'block h-auto w-full min-w-[560px] sm:min-w-[640px] lg:min-w-0 lg:max-w-full select-none'
            }
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      {hintEnabled && (
        <figcaption className="border-t border-slate-100/80 px-3 py-2 text-center text-[11px] text-slate-500 lg:hidden">
          Vuốt ngang để xem đủ các bước trên ảnh minh họa.
        </figcaption>
      )}
    </figure>
  )
}
