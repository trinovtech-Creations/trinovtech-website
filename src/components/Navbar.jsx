import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'

const links = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'services', label: 'Services', to: '/services' },
  { id: 'solutions', label: 'Solutions', to: '/solutions' },
  { id: 'work', label: 'Work', to: '/work' },
  { id: 'about', label: 'About', to: '/about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname

  // Highlight the nav item for the current route. `/services/:slug` etc. keep
  // their parent ("Services") highlighted; Home only matches the exact root.
  const isActive = (to) => (to === '/' ? path === '/' : path.startsWith(to))

  // Add a solid background once the page is scrolled past the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // "Contact Us" jumps to the contact block, which lives on every main page.
  // On a page without one (e.g. a detail page), fall back to Home's contact.
  const goContact = (e) => {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else navigate('/#contact')
  }

  // Lock body scroll and close on Escape while the mobile drawer is open.
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
          aria-hidden="true"
        />

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary">
          {links.map((l, i) => (
            <Link
              key={l.id}
              to={l.to}
              className={`nav__link ${isActive(l.to) ? 'active' : ''}`}
              style={{ '--i': i }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a href="/#contact" className="btn btn--primary nav__cta" style={{ '--i': links.length }} onClick={goContact}>Contact Us</a>
        </nav>
      </div>
    </header>
  )
}
