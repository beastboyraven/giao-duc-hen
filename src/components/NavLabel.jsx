export default function NavLabel({ item, stacked = true, align = 'center' }) {
  const lines = item.navLines
  const isLeft = align === 'left'
  const alignCls = isLeft ? 'text-left' : 'text-center'
  const stackFlex = isLeft ? 'items-start' : 'items-center'

  if (stacked && Array.isArray(lines) && lines.length >= 2) {
    return (
      <span
        className={[
          'flex flex-col justify-center gap-0 leading-[1.22] text-inherit',
          stackFlex,
          alignCls
        ].join(' ')}
      >
        <span className="block font-semibold tracking-tight">{lines[0]}</span>
        <span className="block font-medium tracking-tight opacity-90">{lines[1]}</span>
      </span>
    )
  }
  return (
    <span className={['block leading-tight font-semibold text-inherit', alignCls].join(' ')}>
      {item.label}
    </span>
  )
}
