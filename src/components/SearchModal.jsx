import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { buildSearchItems, filterSearchItems } from '../utils/searchIndex.js'

export default function SearchModal({ open, onClose }) {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const [query, setQuery] = useState('')

  const allItems = useMemo(() => buildSearchItems(), [])
  const results = useMemo(() => filterSearchItems(allItems, query), [allItems, query])

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = ''
      return undefined
    }
    setQuery('')
    const t = window.setTimeout(() => inputRef.current?.focus(), 50)
    document.body.style.overflow = 'hidden'
    return () => {
      window.clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const handlePick = (path) => {
    onClose()
    navigate(path)
  }

  if (!open || typeof document === 'undefined') {
    return null
  }

  const overlay = (
    <div
      className="fixed inset-0 z-[120] flex items-start justify-center p-4 pt-[12vh] sm:pt-[15vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Tìm kiếm nội dung"
    >
      <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} aria-hidden />
      <div className="relative z-10 w-full max-w-lg rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200 overflow-hidden">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
          <Search size={22} className="text-brand-teal shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm theo chủ đề, ví dụ: hen, buồng đệm, cấp cứu..."
            className="min-w-0 flex-1 border-0 bg-transparent text-base text-brand-ink placeholder:text-slate-400 focus:outline-none focus:ring-0"
            autoComplete="off"
          />
          <button
            type="button"
            aria-label="Đóng"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-slate-500 hover:bg-slate-100"
          >
            <X size={22} />
          </button>
        </div>

        <div className="max-h-[min(60vh,420px)] overflow-y-auto">
          {query.trim().length === 0 && (
            <p className="px-4 py-6 text-center text-sm text-slate-500">
              Gõ từ khóa để tìm trong các trang Hen là gì, xử trí tại nhà, dấu hiệu nguy hiểm…
            </p>
          )}
          {query.trim().length > 0 && results.length === 0 && (
            <p className="px-4 py-6 text-center text-sm text-slate-600">
              Không có kết quả phù hợp. Thử từ khóa khác.
            </p>
          )}
          {query.trim().length > 0 &&
            results.map((it, idx) => (
              <button
                key={`${it.path}-${idx}-${it.title}`}
                type="button"
                onClick={() => handlePick(it.path)}
                className="flex w-full flex-col gap-0.5 border-b border-slate-50 px-4 py-3 text-left transition-colors hover:bg-brand-sky/60 last:border-0"
              >
                <span className="font-semibold text-brand-ink">{it.title}</span>
                {it.snippet && (
                  <span className="line-clamp-2 text-sm text-slate-600">{it.snippet}</span>
                )}
              </button>
            ))}
        </div>

        <div className="border-t border-slate-100 px-4 py-2 text-xs text-slate-500">
          Nhấn <kbd className="rounded bg-slate-100 px-1">Esc</kbd> để đóng
        </div>
      </div>
    </div>
  )

  return createPortal(overlay, document.body)
}
