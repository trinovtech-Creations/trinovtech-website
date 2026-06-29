import { useParams, Link, useNavigate } from 'react-router-dom'
import { services, getService } from '../data/services.js'
import { getTechnologyByName } from '../data/technologies.js'
import Icon from '../components/Icon.jsx'
import Aurora from '../components/Aurora.jsx'
import Reveal from '../components/Reveal.jsx'

// Shared engagement process — same dependable approach across every service.
const PROCESS = [
  { icon: 'eye', title: 'Discover', text: 'We map your goals, constraints and success metrics before a line of code is written.' },
  { icon: 'gem', title: 'Design', text: 'Architecture, UX and a clear technical plan you sign off on — no surprises later.' },
  { icon: 'gear', title: 'Build', text: 'Agile delivery in tight iterations, with working demos and transparent progress.' },
  { icon: 'rocket', title: 'Launch & Support', text: 'We ship to production and stay on for monitoring, iteration and growth.' },
]

export default function ServiceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = getService(slug)

  if (!service) {
    return (
      <section className="section container" style={{ textAlign: 'center', minHeight: '60vh' }}>
        <h1 className="gradient-text" style={{ marginBottom: 16 }}>Service not found</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          The service you’re looking for doesn’t exist or may have moved.
        </p>
        <Link to="/#services" className="btn btn--primary">View all services</Link>
      </section>
    )
  }

  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <article className="svc">
      {/* Hero */}
      <header className="svc-hero">
        <Aurora variant="brand" />
        <div className="container">
          <nav className="svc-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/#services">Services</Link>
            <span>/</span>
            <span className="svc-breadcrumb__current">{service.title}</span>
          </nav>

          <div className="svc-hero__inner">
            <div className="svc-hero__icon"><Icon name={service.icon} size={40} /></div>
            <span className="title-eyebrow">Our Services</span>
            <h1 className="svc-hero__title gradient-text">{service.title}</h1>
            <p className="svc-hero__tagline">{service.tagline}</p>
            <div className="svc-hero__actions">
              <Link to="/#contact" className="btn btn--primary btn--lg">Start a project</Link>
              <Link to="/#services" className="btn btn--outline btn--lg">All services</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Overview + what's included */}
      <section className="section">
        <div className="container svc-grid">
          <div className="svc-grid__main">
            <Reveal>
              <span className="title-eyebrow">Overview</span>
              <h2 className="svc-h2">What we deliver</h2>
              <p className="svc-lead">{service.description}</p>
            </Reveal>

            <Reveal delay={80}>
              <h3 className="svc-sub">What’s included</h3>
              <ul className="svc-features">
                {service.features.map((f) => (
                  <li key={f} className="svc-feature">
                    <span className="svc-feature__check"><Icon name="shield" size={18} /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Sticky aside */}
          <Reveal variant="left" className="svc-aside">
            <div className="card svc-aside__card">
              <h3>Outcomes you can expect</h3>
              <ul className="svc-outcomes">
                {service.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              {service.tech?.length > 0 && (
                <>
                  <h4 className="svc-aside__techhead">Tech we use</h4>
                  <div className="svc-tags">
                    {service.tech.map((t) => {
                      const match = getTechnologyByName(t)
                      return match ? (
                        <Link key={t} to={`/technologies/${match.slug}`} className="svc-tag svc-tag--link">
                          {t}<span className="svc-tag__arrow" aria-hidden="true">→</span>
                        </Link>
                      ) : (
                        <span key={t} className="svc-tag">{t}</span>
                      )
                    })}
                  </div>
                </>
              )}
              <Link to="/#contact" className="btn btn--primary btn--block">Get a free consultation</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="svc-section-head">
              <span className="title-eyebrow">How we work</span>
              <h2 className="svc-h2">A proven path from idea to launch</h2>
            </div>
          </Reveal>
          <div className="grid grid--4 svc-process">
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 90}>
                <div className="card svc-step">
                  <span className="svc-step__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="svc-step__icon"><Icon name={p.icon} size={26} /></span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section">
        <div className="container">
          <Reveal variant="zoom">
            <div className="svc-cta">
              <Aurora variant="light" />
              <div className="svc-cta__content">
                <h2>Ready to build your {service.title.toLowerCase()} solution?</h2>
                <p>Tell us what you’re working on — we’ll get back within one business day with a clear plan and estimate.</p>
                <div className="svc-cta__actions">
                  <Link to="/#contact" className="btn btn--primary btn--lg">Talk to an expert</Link>
                  <button onClick={() => navigate('/#services')} className="btn btn--ghost btn--lg">Explore more services</button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other services */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="svc-section-head">
              <span className="title-eyebrow">Keep exploring</span>
              <h2 className="svc-h2">Other services</h2>
            </div>
          </Reveal>
          <div className="grid grid--4">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 70}>
                <Link to={`/services/${s.slug}`} className="card service-card svc-other">
                  <div className="service-card__icon"><Icon name={s.icon} /></div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__text">{s.short}</p>
                  <span className="card__link">Learn more →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
