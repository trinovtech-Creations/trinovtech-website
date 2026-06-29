import { useEffect, useRef, useState } from 'react'

// Animates a numeric value from 0 to target when it scrolls into view.
// Keeps any non-numeric prefix/suffix (e.g. "50+", "24/7", "100%", "∞").
export default function CountUp({ value, duration = 1600 }) {
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)
  const prefix = match ? match[1] : ''
  const target = match ? parseFloat(match[2]) : null
  const suffix = match ? match[3] : ''
  // Preserve the original decimal precision (so "99.9%" doesn't round to "100%").
  const decimals = match && match[2].includes('.') ? match[2].split('.')[1].length : 0
  const [n, setN] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (target === null) return
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setN(target)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - p, 3)
              setN(target * eased)
              if (p < 1) requestAnimationFrame(tick)
              else setN(target)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  if (target === null) return <span>{value}</span>
  return (
    <span ref={ref}>
      {prefix}
      {decimals ? n.toFixed(decimals) : Math.round(n)}
      {suffix}
    </span>
  )
}
