import { Link } from 'react-router-dom'
import CountUp from '../components/CountUp.jsx'
import Icon from '../components/Icon.jsx'
import Aurora from '../components/Aurora.jsx'

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '8', label: 'Core Specialties' },
  { value: '24/7', label: 'Managed Support' },
  { value: '100%', label: 'Client Focused' },
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
            We help you identify opportunities for{' '}
            <span className="gradient-text gradient-text--anim">top growth</span> and implement the right strategies
          </h1>
          <p className="hero__subtitle">
            Trinovtech is a technology consulting and product development company dedicated to
            building innovative, scalable, and reliable digital solutions for modern businesses.
            On-demand expertise to reduce costs and speed up development.
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
