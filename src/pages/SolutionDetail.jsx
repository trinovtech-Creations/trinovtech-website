import { useParams, Link } from 'react-router-dom'
import { solutions, getSolution } from '../data/solutions.js'
import { getService } from '../data/services.js'
import Icon from '../components/Icon.jsx'
import Aurora from '../components/Aurora.jsx'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'

export default function SolutionDetail() {
  const { slug } = useParams()
  const solution = getSolution(slug)

  if (!solution) {
    return (
      <section className="section container" style={{ textAlign: 'center', minHeight: '60vh' }}>
        <h1 className="gradient-text" style={{ marginBottom: 16 }}>Solution not found</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          The solution you’re looking for doesn’t exist or may have moved.
        </p>
        <Link to="/#solutions" className="btn btn--primary">View all solutions</Link>
      </section>
    )
  }

  const index = solutions.findIndex((s) => s.slug === solution.slug)
  const others = solutions.filter((s) => s.slug !== solution.slug)
  const relatedServices = (solution.services || []).map(getService).filter(Boolean)

  return (
    <article className="sol">
      {/* ===== Modern split hero ===== */}
      <header className="sol-hero">
        <Aurora variant="brand" />
        <div className="container">
          <nav className="sol-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">—</span>
            <Link to="/#solutions">Solutions</Link>
            <span aria-hidden="true">—</span>
            <span className="sol-breadcrumb__current">{solution.title}</span>
          </nav>

          <div className="sol-hero__grid">
            <div className="sol-hero__lead">
              <span className="sol-eyebrow">
                <span className="sol-eyebrow__index">{String(index + 1).padStart(2, '0')}</span>
                <span className="sol-eyebrow__icon"><Icon name={solution.icon} size={18} /></span>
                Solutions
              </span>
              <h1 className="sol-display">{solution.title}</h1>
              <p className="sol-hero__tagline">{solution.tagline}</p>
              <p className="sol-hero__desc">{solution.description}</p>

              <ul className="sol-hero__chips">
                {solution.points.map((p) => (
                  <li key={p} className="sol-chip"><Icon name="dot" size={12} />{p}</li>
                ))}
              </ul>

              <div className="sol-hero__actions">
                <Link to="/#contact" className="btn btn--primary btn--lg">Discuss your project</Link>
                <Link to="/#solutions" className="sol-textlink">All solutions →</Link>
              </div>
            </div>

            {/* Modern spec card */}
            <aside className="sol-hero__card">
              <div className="sol-hero__cardhead">
                <span className="sol-hero__icontile"><Icon name={solution.icon} size={32} /></span>
                <span className="sol-hero__badge">{solution.tagline}</span>
              </div>
              <span className="sol-hero__cardlabel">By the numbers</span>
              <ul className="sol-hero__stats">
                {(solution.stats || []).map((st) => (
                  <li key={st.label}>
                    <span className="sol-hero__statval"><CountUp value={st.value} /></span>
                    <span className="sol-hero__statlbl">{st.label}</span>
                  </li>
                ))}
              </ul>
              <Link to="/#contact" className="btn btn--primary btn--block sol-hero__cardcta">Start a conversation</Link>
            </aside>
          </div>
        </div>
      </header>

      {/* ===== Overview & approach: classic two-column prose ===== */}
      <section className="section">
        <div className="container">
          <div className="sol-prose">
            <Reveal>
              <div className="sol-prose__col">
                <h2 className="sol-h2">Overview</h2>
                <p>{solution.overview}</p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="sol-prose__col">
                <h2 className="sol-h2">Our approach</h2>
                <p>{solution.approach}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== What's included: classic numbered index list ===== */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="sol-sectionhead">
              <span className="sol-kicker">Capabilities</span>
              <h2 className="sol-h2 sol-h2--lg">What this solution includes</h2>
            </div>
          </Reveal>
          <ol className="sol-index">
            {solution.points.map((p, i) => (
              <Reveal as="li" key={p} className="sol-index__item" delay={i * 70}>
                <span className="sol-index__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="sol-index__text">{p}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Deliverables: hairline list ===== */}
      <section className="section section--alt">
        <div className="container sol-deliver">
          <Reveal>
            <div className="sol-deliver__head">
              <span className="sol-kicker">Deliverables</span>
              <h2 className="sol-h2">What you receive</h2>
              <p className="sol-deliver__note">Tangible outputs at the end of the engagement — nothing left to interpretation.</p>
            </div>
          </Reveal>
          <Reveal variant="left" className="sol-deliver__list">
            <ul>
              {solution.deliverables.map((d) => (
                <li key={d}>
                  <Icon name="shield" size={18} />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ===== Related services cross-link ===== */}
      {relatedServices.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal>
              <div className="sol-sectionhead">
                <span className="sol-kicker">Powered by</span>
                <h2 className="sol-h2">Services behind this solution</h2>
              </div>
            </Reveal>
            <div className="sol-services">
              {relatedServices.map((sv, i) => (
                <Reveal as={Link} key={sv.slug} to={`/services/${sv.slug}`} className="sol-service" delay={i * 60}>
                  <span className="sol-service__icon"><Icon name={sv.icon} size={22} /></span>
                  <span className="sol-service__body">
                    <span className="sol-service__title">{sv.title}</span>
                    <span className="sol-service__short">{sv.short}</span>
                  </span>
                  <span className="sol-service__arrow">→</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== Classic CTA ===== */}
      <section className="section">
        <div className="container">
          <Reveal variant="zoom">
            <div className="sol-cta">
              <span className="sol-kicker">Let’s build it</span>
              <h2 className="sol-display sol-display--sm">Ready to put {solution.title} to work?</h2>
              <p>Share your goals and we’ll come back within one business day with a clear, costed plan.</p>
              <div className="sol-cta__actions">
                <Link to="/#contact" className="btn btn--primary btn--lg">Talk to our team</Link>
                <Link to="/#solutions" className="btn btn--outline btn--lg">Explore solutions</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Other solutions: classic list ===== */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <h2 className="sol-h2" style={{ marginBottom: 8 }}>Other solutions</h2>
          </Reveal>
          <div className="sol-other">
            {others.map((o) => (
              <Link key={o.slug} to={`/solutions/${o.slug}`} className="sol-other__row">
                <span className="sol-other__icon"><Icon name={o.icon} size={24} /></span>
                <span className="sol-other__text">
                  <span className="sol-other__title">{o.title}</span>
                  <span className="sol-other__tag">{o.tagline}</span>
                </span>
                <span className="sol-other__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
