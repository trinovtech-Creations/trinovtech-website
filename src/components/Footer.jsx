import { Link, useNavigate } from 'react-router-dom'
import { services } from '../data/services.js'
import { solutions } from '../data/solutions.js'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'

// Social profiles. Update the handle/URLs to your real accounts.
const socials = [
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/trinovtech' },
  { label: 'WhatsApp', icon: 'whatsapp', href: 'https://wa.me/919150411708' },
  { label: 'X', icon: 'twitter', href: 'https://x.com/trinovtech' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/trinovtech' },
]

export default function Footer() {
  const navigate = useNavigate()

  // Contact lives at the bottom of every main page — scroll to it, or fall
  // back to Home's contact block from a page that doesn't have one.
  const goContact = (e) => {
    e.preventDefault()
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else navigate('/#contact')
  }

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p className="footer__tagline">
            Technology consulting and product development company building software,
            embedded systems, IoT platforms, AI features, and cloud solutions.
          </p>
          <div className="footer__social">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                <Icon name={s.icon} mono size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/solutions#industries">Industries</Link>
          <Link to="/work">Our Work</Link>
          <Link to="/about">About Us</Link>
          <Link to="/about#why">Why Choose Us</Link>
          <a href="/#contact" onClick={goContact}>Contact</a>
        </div>

        <div className="footer__col">
          <h4>Solutions</h4>
          {solutions.slice(0, 6).map((s) => (
            <Link key={s.slug} to={`/solutions/${s.slug}`}>{s.title}</Link>
          ))}
          <Link to="/solutions" className="footer__more">All solutions →</Link>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          {services.slice(0, 6).map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`}>{s.title}</Link>
          ))}
          <Link to="/services" className="footer__more">All services →</Link>
        </div>

        <div className="footer__col footer__col--contact">
          <h4>Get in touch</h4>
          <a
            className="footer__contact-item footer__contact-item--addr"
            href="https://www.google.com/maps/search/?api=1&query=Site+No+15+2nd+St+Sri+Amman+Nagar+Cheranmangr+Vilankurichi+Coimbatore+Tamil+Nadu+641035"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="pin" mono size={18} />
            <span>
              Site No 15, 2nd St, Sri Amman Ngr, Cheranmangr, Vilankurichi,
              Coimbatore North, Coimbatore, Tamil Nadu, India — 641035
            </span>
          </a>
          <a className="footer__contact-item" href="tel:+917395881708">
            <Icon name="phone" mono size={18} /><span>+91 73958 81708</span>
          </a>
          <a className="footer__contact-item" href="https://wa.me/919150411708" target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" mono size={18} /><span>+91 91504 11708</span>
          </a>
          <a className="footer__contact-item" href="mailto:info@trinovtech.in">
            <Icon name="mail" mono size={18} /><span>info@trinovtech.in</span>
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© 2026 Trinovtech. All rights reserved.</p>
        <div className="footer__legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  )
}
