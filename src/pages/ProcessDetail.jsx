import { useParams, Link } from 'react-router-dom'
import { processSteps, getProcessStep } from '../data/process.js'
import Icon from '../components/Icon.jsx'
import Aurora from '../components/Aurora.jsx'
import Reveal from '../components/Reveal.jsx'

export default function ProcessDetail() {
  const { slug } = useParams()
  const step = getProcessStep(slug)

  if (!step) {
    return (
      <section className="section container" style={{ textAlign: 'center', minHeight: '60vh' }}>
        <h1 className="gradient-text" style={{ marginBottom: 16 }}>Step not found</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          This page doesn’t exist or may have moved.
        </p>
        <Link to="/about#about" className="btn btn--primary">Back to About</Link>
      </section>
    )
  }

  const index = processSteps.findIndex((s) => s.slug === step.slug)
  const next = processSteps[index + 1]

  return (
    <article className="pillar">
      <header className="pillar-hero">
        <Aurora variant="brand" />
        <div className="container">
          <nav className="pillar-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span>
            <Link to="/about">About</Link><span aria-hidden="true">/</span>
            <span className="pillar-breadcrumb__current">{step.step}</span>
          </nav>
          <div className="pillar-hero__inner">
            <div className="pillar-hero__icon"><Icon name={step.icon} size={36} /></div>
            <span className="title-eyebrow">Step {index + 1} of {processSteps.length} · How we work</span>
            <h1 className="pillar-hero__statement">{step.step}</h1>
            <p className="pillar-overview" style={{ marginTop: 14 }}>{step.tagline}</p>
          </div>
        </div>
      </header>

      {/* Overview */}
      <section className="section">
        <div className="container container--narrow">
          <Reveal>
            <p className="pillar-overview">{step.overview}</p>
          </Reveal>
        </div>
      </section>

      {/* Activities */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="pillar-sectionhead">
              <span className="title-eyebrow">In this phase</span>
              <h2 className="pillar-h2">What happens during {step.step.toLowerCase()}</h2>
            </div>
          </Reveal>
          <div className="grid grid--3">
            {step.activities.map((a, i) => (
              <Reveal key={a} delay={(i % 3) * 80}>
                <div className="card pillar-point">
                  <span className="pillar-point__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="pillar-point__title">{a}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section">
        <div className="container container--narrow">
          <Reveal>
            <div className="pillar-sectionhead"><span className="title-eyebrow">What you get</span></div>
            <ul className="checklist">
              {step.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal variant="zoom">
            <div className="pillar-cta">
              <h2>{next ? `Next: ${next.step}` : 'Ready to get started?'}</h2>
              <p>{next ? next.tagline : 'Let’s take your product from concept to production.'}</p>
              <div className="pillar-cta__actions">
                {next
                  ? <Link to={`/how-we-work/${next.slug}`} className="btn btn--primary btn--lg">Continue to {next.step}</Link>
                  : <Link to="/#contact" className="btn btn--primary btn--lg">Get in touch</Link>}
                <Link to="/work" className="btn btn--outline btn--lg">See our work</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* All steps */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="pillar-sectionhead"><span className="title-eyebrow">The full process</span></div>
          </Reveal>
          <div className="pillar-other">
            {processSteps.map((s, i) => (
              <Link
                key={s.slug}
                to={`/how-we-work/${s.slug}`}
                className={`card pillar-other__card ${s.slug === step.slug ? 'pillar-other__card--current' : ''}`}
              >
                <span className="pillar-other__icon"><Icon name={s.icon} size={24} /></span>
                <span className="pillar-other__body">
                  <span className="pillar-other__label">{i + 1}. {s.step}</span>
                  <span className="pillar-other__text">{s.tagline}</span>
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
