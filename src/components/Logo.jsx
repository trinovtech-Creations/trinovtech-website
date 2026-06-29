import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// Brand mark for Trinovtech Creations.
// - usePng=true (navbar) shows the real /logo.png, falling back to an SVG
//   recreation if the file is missing.
// - usePng=false (footer) always uses the SVG version, which adapts to white
//   text on the dark footer via CSS.
// Clicking scrolls smoothly to the top of the page.
export default function Logo({ usePng = true }) {
  const [imgOk, setImgOk] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const toTop = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  if (usePng && imgOk) {
    return (
      <a href="/" onClick={toTop} className="brand" aria-label="Trinovtech Creations">
        <img
          src="/logo.png"
          alt="Trinovtech Creations"
          className="brand__img"
          onError={() => setImgOk(false)}
        />
      </a>
    )
  }

  return (
    <a href="#home" onClick={toTop} className="brand" aria-label="Trinovtech Creations">
      <svg className="brand__icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="brandArrow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1e7d5a" />
            <stop offset="1" stopColor="#15694c" />
          </linearGradient>
        </defs>
        <circle cx="22" cy="22" r="20" stroke="#163a5c" strokeWidth="2" opacity="0.28" />
        <circle cx="22" cy="22" r="13.5" stroke="#163a5c" strokeWidth="1.5" opacity="0.18" />
        <path d="M22 7 L33 22 H27 V35 H17 V22 H11 Z" fill="url(#brandArrow)" />
      </svg>
      <span className="brand__word">
        <span className="brand__name">
          TRINOV<span className="brand__accent">TECH</span>
        </span>
        <span className="brand__sub">CREATIONS</span>
      </span>
    </a>
  )
}
