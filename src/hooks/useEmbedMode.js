import { useEffect, useState } from 'react'

function detectEmbedded() {
  if (typeof window === 'undefined') return false
  try {
    const params = new URLSearchParams(window.location.search)
    if (params.get('embed') === '1' || params.get('embedded') === '1') {
      return true
    }
    return window.self !== window.top
  } catch {
    return true
  }
}

export function useEmbedMode() {
  const [embedded, setEmbedded] = useState(false)

  useEffect(() => {
    setEmbedded(detectEmbedded())
  }, [])

  return embedded
}
