import { useParams, Link } from 'react-router-dom'
import { industries, getIndustry } from '../data/industries.js'
import { getService } from '../data/services.js'
import { caseStudies } from '../data/caseStudies.js'
import Icon from '../components/Icon.jsx'
import Aurora from '../components/Aurora.jsx'
import Reveal from '../components/Reveal.jsx'

export default function IndustryDetail() {
  const { slug } = useParams()
  const industry = getIndustry(slug)

  if (!industry) {
    return (
      <section className="section container" style={{ textAlign: 'center', minHeight: '60vh' }}>
        <h1 className="gradient-text" style={{ marginBottom: 16 }}>Industry not found</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          This industry doesn’t exist or may have moved.
        </p>
        <Link to="/#industries" className="btn btn--primary">View all industries</Link>
      </section>
    )
  }

  const services = (industry.services || []).map(getService).filter(Boolean)
  const others = industries.filter((i) => i.slug !== industry.slug)
  // Case studies whose industry keyword appears in this industry's title.
  const relatedWork = caseStudies.filter((c) =>
    industry.title.toLowerCase().includes(c.industry.split(' ')[0].toLowerCase())
  )

  return (
    <article className="ind">
      {/* Hero */}
      <header className="ind-hero">
        <Aurora variant="brand" />
        <div className="container">
          <nav className="ind-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span>
            <Link to="/#industries">Industries</Link><span aria-hidden="true">/</span>
            <span className="ind-breadcrumb__current">{industry.title}</span>
          </nav>
          <div className="ind-hero__inner">
            <div className="ind-hero__icon"><Icon name={industry.icon} size={36} /></div>
            <span className="title-eyebrow">Industries</span>
            <h1 className="ind-hero__title gradient-text">{industry.title}</h1>
            <p className="ind-hero__tagline">{industry.tagline}</p>
            <p className="ind-hero__overview">{industry.overview}</p>
            <Link to="/#contact" className="btn btn--primary btn--lg">Discuss your project</Link>
          </div>
        </div>
      </header>

      {/* Challenges + How we help */}
      <section className="section">
        <div className="container ind-grid">
          <Reveal className="ind-col">
            <span className="title-eyebrow">The Challenges</span>
            <h2 className="ind-h2">What this industry faces</h2>
            <ul className="ind-list ind-list--challenge">
              {industry.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={90} className="ind-col">
            <span className="title-eyebrow">How We Help</span>
            <h2 className="ind-h2">What we deliver</h2>
            <ul className="ind-list ind-list--help">
              {industry.capabilities.map((c) => (
                <li key={c}><Icon name="shield" size={18} />{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Services for this industry */}
      {services.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <Reveal>
              <div className="ind-sectionhead">
                <span className="title-eyebrow">Capabilities</span>
                <h2 className="ind-h2">Services for {industry.title}</h2>
              </div>
            </Reveal>
            <div className="grid grid--4">
              {services.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 4) * 70}>
                  <Link to={`/services/${s.slug}`} className="card service-card">
                    <div className="service-card__icon"><Icon name={s.icon} /></div>
                    <h3 className="service-card__title">{s.title}</h3>
                    <p className="service-card__text">{s.short}</p>
                    <span className="card__link service-card__more">Learn more →</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related case studies */}
      {relatedWork.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal>
              <div className="ind-sectionhead">
                <span className="title-eyebrow">Proof</span>
                <h2 className="ind-h2">Related work</h2>
              </div>
            </Reveal>
            <div className="grid grid--2">
              {relatedWork.map((c) => (
                <Link key={c.slug} to={`/work/${c.slug}`} className="card work-card">
                  <div className="work-card__top">
                    <span className="work-card__icon"><Icon name={c.icon} /></span>
                    <span className="work-card__industry">{c.industry}</span>
                  </div>
                  <h3 className="work-card__title">{c.title}</h3>
                  <p className="work-card__text">{c.summary}</p>
                  <span className="card__link work-card__more">Read case study →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section section--alt">
        <div className="container">
          <Reveal variant="zoom">
            <div className="ind-cta">
              <h2>Building for {industry.title.toLowerCase()}?</h2>
              <p>Tell us about your project — we’ll bring the right expertise and a clear plan.</p>
              <div className="ind-cta__actions">
                <Link to="/#contact" className="btn btn--primary btn--lg">Talk to our team</Link>
                <Link to="/#industries" className="btn btn--outline btn--lg">All industries</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other industries */}
      <section className="section">
        <div className="container">
          <Reveal><h2 className="ind-h2" style={{ marginBottom: 24 }}>Other industries</h2></Reveal>
          <div className="ind-other">
            {others.map((o) => (
              <Link key={o.slug} to={`/industries/${o.slug}`} className="ind-other__row">
                <span className="ind-other__icon"><Icon name={o.icon} size={22} /></span>
                <span className="ind-other__text">{o.title}</span>
                <span className="ind-other__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
