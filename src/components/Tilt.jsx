import { useRef } from 'react'

// Only enable the mouse-driven 3D tilt on devices with a fine, hovering pointer
// (desktops) — never on touch screens, where it would fight with scrolling.
const canTilt =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Wraps children in a perspective container and tilts them toward the pointer.
export default function Tilt({ children, max = 8, className = '' }) {
  const inner = useRef(null)

  if (!canTilt) return <div className={`tilt ${className}`}>{children}</div>

  const onMove = (e) => {
    const el = inner.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width // 0 → 1 across
    const py = (e.clientY - r.top) / r.height // 0 → 1 down
    el.style.setProperty('--rx', `${((0.5 - py) * max).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${((px - 0.5) * max).toFixed(2)}deg`)
  }

  const reset = () => {
    const el = inner.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div className={`tilt ${className}`} onPointerMove={onMove} onPointerLeave={reset}>
      <div className="tilt__inner" ref={inner}>{children}</div>
    </div>
  )
}
