import { useParams, Link } from 'react-router-dom'
import { caseStudies, getCaseStudy } from '../data/caseStudies.js'
import { getService } from '../data/services.js'
import { getTechnologyByName } from '../data/technologies.js'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = getCaseStudy(slug)

  if (!study) {
    return (
      <section className="section container" style={{ textAlign: 'center', minHeight: '60vh' }}>
        <h1 className="gradient-text" style={{ marginBottom: 16 }}>Project example not found</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          This project example doesn’t exist or may have moved.
        </p>
        <Link to="/#work" className="btn btn--primary">View all work</Link>
      </section>
    )
  }

  const services = (study.services || []).map(getService).filter(Boolean)
  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2)

  return (
    <article className="cs">
      {/* Hero */}
      <header className="cs-hero">
        <div className="container">
          <nav className="cs-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span>
            <Link to="/#work">Work</Link><span aria-hidden="true">/</span>
            <span className="cs-breadcrumb__current">{study.title}</span>
          </nav>
          <div className="cs-hero__inner">
            <span className="cs-tag"><Icon name={study.icon} size={16} /> {study.industry}</span>
            <h1 className="cs-hero__title gradient-text">{study.title}</h1>
            <p className="cs-hero__summary">{study.summary}</p>
            <div className="cs-hero__meta">
              <span><strong>Duration</strong> {study.duration}</span>
              <span><strong>Services</strong> {services.map((s) => s.title).join(', ')}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Capabilities band */}
      <section className="cs-results">
        <div className="container cs-results__row">
          {study.results.map((r) => (
            <div key={r.label} className="cs-result">
              <span className="cs-result__value"><CountUp value={r.value} /></span>
              <span className="cs-result__label">{r.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="section">
        <div className="container cs-grid">
          <Reveal className="cs-block">
            <span className="title-eyebrow">The Challenge</span>
            <p>{study.challenge}</p>
          </Reveal>
          <Reveal delay={90} className="cs-block">
            <span className="title-eyebrow">Our Solution</span>
            <p>{study.solution}</p>
          </Reveal>
        </div>
      </section>

      {/* Tech stack */}
      {study.tech?.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <Reveal>
              <span className="title-eyebrow">Technology</span>
              <h2 className="cs-h2">The stack behind it</h2>
            </Reveal>
            <div className="cs-tech">
              {study.tech.map((t) => {
                const match = getTechnologyByName(t)
                return match ? (
                  <Link key={t} to={`/technologies/${match.slug}`} className="cs-tech__chip cs-tech__chip--link">
                    <span className="cs-tech__mono">{match.mono}</span>{t}
                  </Link>
                ) : (
                  <span key={t} className="cs-tech__chip">{t}</span>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal variant="zoom">
            <div className="cs-cta">
              <h2>Have a similar challenge?</h2>
              <p>Let’s talk about how Trinovtech can shape the right technical path for your business.</p>
              <div className="cs-cta__actions">
                <Link to="/#contact" className="btn btn--primary btn--lg">Start a project</Link>
                <Link to="/#work" className="btn btn--outline btn--lg">See more work</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other case studies */}
      <section className="section section--alt">
        <div className="container">
          <Reveal><h2 className="cs-h2" style={{ marginBottom: 24 }}>More project examples</h2></Reveal>
          <div className="grid grid--2">
            {others.map((c) => (
              <Link key={c.slug} to={`/work/${c.slug}`} className="card work-card">
                <div className="work-card__top">
                  <span className="work-card__icon"><Icon name={c.icon} /></span>
                  <span className="work-card__industry">{c.industry}</span>
                </div>
                <h3 className="work-card__title">{c.title}</h3>
                <p className="work-card__text">{c.summary}</p>
                <span className="card__link work-card__more">Read example →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
