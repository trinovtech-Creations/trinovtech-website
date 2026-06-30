import { useParams, Link } from 'react-router-dom'
import { getServiceFeature, slugifyFeature } from '../data/services.js'
import Icon from '../components/Icon.jsx'
import Aurora from '../components/Aurora.jsx'
import Reveal from '../components/Reveal.jsx'

export default function FeatureDetail() {
  const { slug, feature } = useParams()
  const match = getServiceFeature(slug, feature)

  if (!match) {
    return (
      <section className="section container" style={{ textAlign: 'center', minHeight: '60vh' }}>
        <h1 className="gradient-text" style={{ marginBottom: 16 }}>Capability not found</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          This page doesn’t exist or may have moved.
        </p>
        <Link to="/services" className="btn btn--primary">View all services</Link>
      </section>
    )
  }

  const { service, title } = match
  const others = service.features.filter((f) => f !== title)

  return (
    <article className="pillar">
      <header className="pillar-hero">
        <Aurora variant="brand" />
        <div className="container">
          <nav className="pillar-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span>
            <Link to="/services">Services</Link><span aria-hidden="true">/</span>
            <Link to={`/services/${service.slug}`}>{service.title}</Link><span aria-hidden="true">/</span>
            <span className="pillar-breadcrumb__current">{title}</span>
          </nav>
          <div className="pillar-hero__inner">
            <div className="pillar-hero__icon"><Icon name={service.icon} size={36} /></div>
            <span className="title-eyebrow">{service.title} · What’s included</span>
            <h1 className="pillar-hero__statement">{title}</h1>
          </div>
        </div>
      </header>

      {/* Overview */}
      <section className="section">
        <div className="container container--narrow">
          <Reveal>
            <p className="pillar-overview">
              {title} is one of the core capabilities we deliver as part of our{' '}
              <Link to={`/services/${service.slug}`} className="td-textlink">{service.title}</Link> service.
              {' '}{service.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Outcomes */}
      {service.outcomes?.length > 0 && (
        <section className="section section--alt">
          <div className="container container--narrow">
            <Reveal>
              <div className="pillar-sectionhead"><span className="title-eyebrow">What you get</span></div>
              <ul className="checklist">
                {service.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal variant="zoom">
            <div className="pillar-cta">
              <h2>Need {title.toLowerCase()}?</h2>
              <p>Tell us what you’re building — we’ll bring the right approach and a clear plan.</p>
              <div className="pillar-cta__actions">
                <Link to="/#contact" className="btn btn--primary btn--lg">Get in touch</Link>
                <Link to={`/services/${service.slug}`} className="btn btn--outline btn--lg">Back to {service.title}</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other capabilities in this service */}
      {others.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <Reveal>
              <div className="pillar-sectionhead"><span className="title-eyebrow">Also included in {service.title}</span></div>
            </Reveal>
            <div className="pillar-other">
              {others.map((f) => (
                <Link key={f} to={`/services/${service.slug}/${slugifyFeature(f)}`} className="card pillar-other__card">
                  <span className="pillar-other__icon"><Icon name={service.icon} size={24} /></span>
                  <span className="pillar-other__body">
                    <span className="pillar-other__label">{f}</span>
                  </span>
                  <span className="pillar-other__arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
