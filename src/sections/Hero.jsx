import { Link } from 'react-router-dom'
import CountUp from '../components/CountUp.jsx'
import Icon from '../components/Icon.jsx'
import Aurora from '../components/Aurora.jsx'
import { services } from '../data/services.js'
import { technologies } from '../data/technologies.js'
import { industries } from '../data/industries.js'
import { caseStudies } from '../data/caseStudies.js'
import { projects } from '../data/projects.js'

// Real counts pulled from the site data, each linking to where you can explore it.
// Counts are floored to the nearest ten for a clean "N+" figure that never
// overstates; Technologies rounds up to its 130+ marketing figure.
const floorTen = (n) => Math.floor(n / 10) * 10
const stats = [
  { value: `${floorTen(services.length)}+`, label: 'Services', to: '/services' },
  { value: `${Math.ceil(technologies.length / 10) * 10}+`, label: 'Technologies', to: '/#tech' },
  { value: `${industries.length}`, label: 'Industries', to: '/solutions#industries' },
  { value: `${floorTen(caseStudies.length + projects.length)}+`, label: 'Project Examples', to: '/work' },
]

export default function Hero() {
  return (
    <section className="hero section-anchor" id="home">
      <Aurora />
      <div className="hero__grid-bg" />
      <div className="hero__glow" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow hero__eyebrow">
            <span className="pulse-dot" /> Technology Consulting & Product Development
          </span>
          <h1 className="hero__title">
            We build reliable{' '}
            <span className="gradient-text gradient-text--anim">digital and embedded products</span> from concept to production
          </h1>
          <p className="hero__subtitle">
            Trinovtech helps startups and businesses turn ideas into production-ready software,
            connected devices, AI features, cloud platforms, and mobile experiences. Work with
            focused engineers across the full stack: hardware, firmware, backend, frontend, and cloud.
          </p>
          <div className="hero__actions">
            <Link to="/services" className="btn btn--primary btn--lg btn--shine">Explore</Link>
            <a href="#contact" className="btn btn--ghost btn--lg">Get Started</a>
          </div>
          <div className="hero__stats">
            {stats.map((s) => (
              <Link key={s.label} to={s.to} className="hero__stat">
                <strong className="gradient-text"><CountUp value={s.value} /></strong>
                <span>{s.label} <span className="hero__stat-arrow" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
        <div className="hero__visual">
          <div className="orbit">
            <div className="orbit__ring orbit__ring--1" />
            <div className="orbit__ring orbit__ring--2" />
            <span className="orbit__logo-glow" />
            <img className="orbit__logo" src="/logo-mark.png" alt="Trinovtech" />
            <span className="orbit__chip orbit__chip--1"><Icon name="ai" size={16} /> AI</span>
            <span className="orbit__chip orbit__chip--2"><Icon name="cloud" size={16} /> Cloud</span>
            <span className="orbit__chip orbit__chip--3"><Icon name="iot" size={16} /> IoT</span>
            <span className="orbit__chip orbit__chip--4"><Icon name="globe" size={16} /> Web</span>
            <span className="orbit__chip orbit__chip--5"><Icon name="mobile" size={16} /> Mobile</span>
            <span className="orbit__chip orbit__chip--6"><Icon name="chip" size={16} /> Embedded</span>
            <span className="orbit__chip orbit__chip--7"><Icon name="gear" size={16} /> DevOps</span>
            <span className="orbit__chip orbit__chip--8"><Icon name="circuit" size={16} /> Firmware</span>
          </div>
        </div>
      </div>
    </section>
  )
}
