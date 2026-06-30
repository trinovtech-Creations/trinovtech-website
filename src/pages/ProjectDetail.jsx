import { useParams, Link } from 'react-router-dom'
import { projects, getProject } from '../data/projects.js'
import { processSteps } from '../data/process.js'
import Icon from '../components/Icon.jsx'
import Aurora from '../components/Aurora.jsx'
import Reveal from '../components/Reveal.jsx'

const benefits = [
  { icon: 'gear', title: 'One accountable team', text: 'Hardware, firmware, cloud, web and AI handled under a single engineering plan — no finger-pointing between vendors.' },
  { icon: 'chart', title: 'Built to scale', text: 'Architected to grow from prototype to production without painful, costly rewrites later.' },
  { icon: 'shield', title: 'Quality built in', text: 'Reviews, testing and security fundamentals are part of the build, not bolted on at the end.' },
  { icon: 'bolt', title: 'Flexible engagement', text: 'Bring in exactly the expertise you need — for a prototype, a full build or long-term support.' },
]

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) {
    return (
      <section className="section container" style={{ textAlign: 'center', minHeight: '60vh' }}>
        <h1 className="gradient-text" style={{ marginBottom: 16 }}>Project not found</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          This project doesn’t exist or may have moved.
        </p>
        <Link to="/work" className="btn btn--primary">Back to Work</Link>
      </section>
    )
  }

  const related = projects.filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 3)

  return (
    <article className="pillar">
      <header className="pillar-hero">
        <Aurora variant="brand" />
        <div className="container">
          <nav className="pillar-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span>
            <Link to="/work">Work</Link><span aria-hidden="true">/</span>
            <span className="pillar-breadcrumb__current">{project.title}</span>
          </nav>
          <div className="pillar-hero__inner">
            <div className="pillar-hero__icon"><Icon name={project.icon} size={36} /></div>
            <span className="title-eyebrow">{project.category}</span>
            <h1 className="pillar-hero__statement">{project.title}</h1>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container container--narrow">
          <Reveal>
            <p className="pillar-overview">{project.overview}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="pillar-sectionhead">
              <span className="title-eyebrow">What it includes</span>
              <h2 className="pillar-h2">Key capabilities</h2>
            </div>
          </Reveal>
          <div className="grid grid--2">
            {project.features.map((f, i) => (
              <Reveal key={f} delay={(i % 2) * 80}>
                <div className="card pillar-point">
                  <span className="pillar-point__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="pillar-point__title">{f}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="pillar-sectionhead">
              <span className="title-eyebrow">How we build it</span>
              <h2 className="pillar-h2">From concept to production</h2>
            </div>
          </Reveal>
          <div className="timeline">
            {processSteps.map((p, i) => (
              <Reveal as={Link} to={`/how-we-work/${p.slug}`} key={p.slug} delay={i * 120} className="timeline__item timeline__item--link">
                <div className="timeline__dot">{i + 1}</div>
                <h3>{p.step}</h3>
                <p>{p.tagline}</p>
                <span className="timeline__more">Learn more →</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="pillar-sectionhead">
              <span className="title-eyebrow">Why build it with us</span>
              <h2 className="pillar-h2">What you get working with Trinovtech</h2>
            </div>
          </Reveal>
          <div className="grid grid--2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 90}>
                <div className="card feature-card">
                  <div className="feature-card__icon"><Icon name={b.icon} /></div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal variant="zoom">
            <div className="pillar-cta">
              <h2>Want to build something like this?</h2>
              <p>Tell us about your project — we’ll help you scope and build it.</p>
              <div className="pillar-cta__actions">
                <Link to="/#contact" className="btn btn--primary btn--lg">Get in touch</Link>
                <Link to="/services" className="btn btn--outline btn--lg">Explore services</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <div className="pillar-other">
              {related.map((o) => (
                <Link key={o.slug} to={`/projects/${o.slug}`} className="card pillar-other__card">
                  <span className="pillar-other__icon"><Icon name={o.icon} size={24} /></span>
                  <span className="pillar-other__body">
                    <span className="pillar-other__label">{o.title}</span>
                    <span className="pillar-other__text">{o.summary}</span>
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
