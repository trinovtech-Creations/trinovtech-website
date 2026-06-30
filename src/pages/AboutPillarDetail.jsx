import { useParams, Link } from 'react-router-dom'
import { pillars, getPillar } from '../data/about.js'
import Icon from '../components/Icon.jsx'
import Aurora from '../components/Aurora.jsx'
import Reveal from '../components/Reveal.jsx'

export default function AboutPillarDetail() {
  const { slug } = useParams()
  const pillar = getPillar(slug)

  if (!pillar) {
    return (
      <section className="section container" style={{ textAlign: 'center', minHeight: '60vh' }}>
        <h1 className="gradient-text" style={{ marginBottom: 16 }}>Page not found</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          This page doesn’t exist or may have moved.
        </p>
        <Link to="/#about" className="btn btn--primary">Back to About</Link>
      </section>
    )
  }

  const others = pillars.filter((p) => p.slug !== pillar.slug)
  const isValues = pillar.slug === 'values'

  return (
    <article className="pillar">
      {/* Hero */}
      <header className="pillar-hero">
        <Aurora variant="brand" />
        <div className="container">
          <nav className="pillar-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span>
            <Link to="/#about">About</Link><span aria-hidden="true">/</span>
            <span className="pillar-breadcrumb__current">{pillar.card}</span>
          </nav>
          <div className="pillar-hero__inner">
            <div className="pillar-hero__icon"><Icon name={pillar.icon} size={36} /></div>
            <span className="title-eyebrow">{pillar.label}</span>
            <h1 className="pillar-hero__statement">{pillar.statement}</h1>
          </div>
        </div>
      </header>

      {/* Overview */}
      <section className="section">
        <div className="container container--narrow">
          <Reveal>
            <p className="pillar-overview">{pillar.overview}</p>
          </Reveal>
        </div>
      </section>

      {/* Points — principles or core values */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="pillar-sectionhead">
              <span className="title-eyebrow">{isValues ? 'What we stand for' : 'How we live it'}</span>
              <h2 className="pillar-h2">{isValues ? 'Our core values' : `Putting our ${pillar.card.toLowerCase()} into practice`}</h2>
            </div>
          </Reveal>
          <div className={`grid ${isValues ? 'grid--3' : 'grid--2'}`}>
            {pillar.points.map((pt, i) => (
              <Reveal key={pt.title} delay={(i % 3) * 80}>
                <div className="card pillar-point">
                  <span className="pillar-point__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="pillar-point__title">{pt.title}</h3>
                  <p className="pillar-point__text">{pt.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal variant="zoom">
            <div className="pillar-cta">
              <h2>Let’s build something great together</h2>
              <p>See how our {pillar.card.toLowerCase()} translates into the products we deliver.</p>
              <div className="pillar-cta__actions">
                <Link to="/#contact" className="btn btn--primary btn--lg">Get in touch</Link>
                <Link to="/#work" className="btn btn--outline btn--lg">See our work</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other pillars */}
      <section className="section section--alt">
        <div className="container">
          <div className="pillar-other">
            {others.map((o) => (
              <Link key={o.slug} to={`/about/${o.slug}`} className="card pillar-other__card">
                <span className="pillar-other__icon"><Icon name={o.icon} size={24} /></span>
                <span className="pillar-other__body">
                  <span className="pillar-other__label">{o.label}</span>
                  <span className="pillar-other__text">{o.statement}</span>
                </span>
                <span className="pillar-other__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
