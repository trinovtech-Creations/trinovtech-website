import { Link, useNavigate, useLocation } from 'react-router-dom'
import { services } from '../data/services.js'
import { solutions } from '../data/solutions.js'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  // Route-aware in-page section link (works from detail pages too).
  const SectionLink = ({ id, children }) => (
    <a
      href={`/#${id}`}
      onClick={(e) => {
        e.preventDefault()
        if (location.pathname === '/' && location.hash === `#${id}`) {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        } else {
          navigate(`/#${id}`)
        }
      }}
    >
      {children}
    </a>
  )

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p className="footer__tagline">
            Technology consulting and product development company building innovative,
            scalable, and reliable digital solutions for modern businesses.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><Icon name="instagram" mono size={18} /></a>
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" mono size={18} /></a>
            <a href="#" aria-label="Twitter"><Icon name="twitter" mono size={18} /></a>
            <a href="#" aria-label="TikTok"><Icon name="tiktok" mono size={18} /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <SectionLink id="home">Home</SectionLink>
          <SectionLink id="about">About Us</SectionLink>
          <SectionLink id="solutions">Solutions</SectionLink>
          <SectionLink id="services">Services</SectionLink>
          <SectionLink id="contact">Contact</SectionLink>
        </div>

        <div className="footer__col">
          <h4>Solutions</h4>
          {solutions.map((s) => (
            <Link key={s.slug} to={`/solutions/${s.slug}`}>{s.title}</Link>
          ))}
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`}>{s.title}</Link>
          ))}
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
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Condition</a>
        </div>
      </div>
    </footer>
  )
}
