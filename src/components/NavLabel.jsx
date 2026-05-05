export default function NavLabel({ item, stacked = true }) {
  const lines = item.navLines
  if (stacked && Array.isArray(lines) && lines.length >= 2) {
    return (
      <span className="flex flex-col items-center justify-center gap-0 text-center leading-[1.2]">
        <span className="block font-medium tracking-tight">{lines[0]}</span>
        <span className="block font-medium tracking-tight opacity-95">{lines[1]}</span>
      </span>
    )
  }
  return <span className="block text-center leading-tight">{item.label}</span>
}
