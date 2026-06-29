import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'solutions', label: 'Solutions' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scrollspy: highlight the nav link for the section currently in view.
  useEffect(() => {
    const ids = [...links.map((l) => l.id), 'contact']
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length || typeof IntersectionObserver === 'undefined') return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  // Navigate to a home-page section from any route. On the home page this just
  // updates the hash (App's ScrollManager handles the smooth scroll); from a
  // detail page it routes home first, then scrolls.
  const goSection = (e, id) => {
    e.preventDefault()
    setOpen(false)
    if (location.pathname === '/' && location.hash === `#${id}`) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id}`)
    }
  }

  // Lock body scroll and close on Escape while the mobile drawer is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Logo />

        <button
          className={`hamburger ${open ? 'hamburger--active' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <div
          className={`nav__scrim ${open ? 'nav__scrim--show' : ''}`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`/#${l.id}`}
              className={`nav__link ${active === l.id ? 'active' : ''}`}
              style={{ '--i': i }}
              onClick={(e) => goSection(e, l.id)}
            >
              {l.label}
            </a>
          ))}
          <a href="/#contact" className="btn btn--primary nav__cta" style={{ '--i': links.length }} onClick={(e) => goSection(e, 'contact')}>Contact Us</a>
        </nav>
      </div>
    </header>
  )
}
