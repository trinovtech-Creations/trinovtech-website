import { Link } from 'react-router-dom'
import CountUp from '../components/CountUp.jsx'
import Icon from '../components/Icon.jsx'
import Aurora from '../components/Aurora.jsx'

const stats = [
  { value: '8', label: 'Engineering Specialties' },
  { value: '3', label: 'Product Layers' },
  { value: '1', label: 'End-to-End Partner' },
  { value: '100%', label: 'Outcome Focused' },
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
              <div key={s.label} className="hero__stat">
                <strong className="gradient-text"><CountUp value={s.value} /></strong>
                <span>{s.label}</span>
              </div>
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
          </div>
        </div>
      </div>
    </section>
  )
}
