import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { technologies, getTechnology } from '../data/technologies.js'
import { getService } from '../data/services.js'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import Typewriter from '../components/Typewriter.jsx'

// Human-readable classification derived from a technology's category.
const TECH_TYPES = {
  Frontend: 'UI framework / library',
  Backend: 'Backend technology',
  Language: 'Programming language',
  API: 'API technology',
  Database: 'Database',
  Cloud: 'Cloud platform',
  DevOps: 'DevOps tooling',
  'AI / ML': 'AI / ML framework',
  Embedded: 'Embedded technology',
  IoT: 'IoT technology',
  Mobile: 'Mobile framework',
  Hardware: 'Hardware / EDA tool',
}

export default function TechDetail() {
  const { slug } = useParams()
  const tech = getTechnology(slug)
  // Which spec breakout popover is open: 'used' | 'caps' | null.
  const [open, setOpen] = useState(null)
  useEffect(() => setOpen(null), [slug])

  if (!tech) {
    return (
      <section className="section container" style={{ textAlign: 'center', minHeight: '60vh' }}>
        <h1 className="gradient-text" style={{ marginBottom: 16 }}>Technology not found</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          We couldn’t find that technology — it may have moved.
        </p>
        <Link to="/" className="btn btn--primary">Back home</Link>
      </section>
    )
  }

  const related = (tech.related || []).map(getService).filter(Boolean)
  const others = technologies.filter((t) => t.slug !== tech.slug)

  // "Pairs with": other technologies we use on the same services, ranked by how
  // many services they share with this one.
  const relatedSlugs = new Set(tech.related || [])
  const pairsWith = technologies
    .filter((t) => t.slug !== tech.slug)
    .map((t) => ({ tech: t, shared: (t.related || []).filter((r) => relatedSlugs.has(r)).length }))
    .filter((x) => x.shared > 0)
    .sort((a, b) => b.shared - a.shared)
    .slice(0, 4)
    .map((x) => x.tech)

  return (
    <article className="td">
      {/* ===== Terminal hero ===== */}
      <header className="td-hero">
        <div className="container">
          <div className="td-window">
            <div className="td-window__bar">
              <span className="td-dot td-dot--r" />
              <span className="td-dot td-dot--y" />
              <span className="td-dot td-dot--g" />
              <span className="td-window__path">~/technologies/{tech.slug}</span>
            </div>

            <div className="td-window__body">
              <nav className="td-breadcrumb" aria-label="Breadcrumb">
                <Link to="/">home</Link><span>/</span>
                <Link to="/#tech">technologies</Link><span>/</span>
                <span className="td-breadcrumb__current">{tech.slug}</span>
              </nav>

              <div className="td-hero__head">
                <span className="td-mono-tile">{tech.mono}</span>
                <div className="td-hero__meta">
                  <span className="td-tag">{tech.category}</span>
                  <h1 className="td-title">{tech.name}</h1>
                </div>
              </div>

              <p className="td-prompt"><span className="td-caret">$</span> <Typewriter key={tech.slug} text={tech.tagline} /></p>

              <div className="td-hero__actions">
                <Link to="/#contact" className="btn btn--primary btn--lg">Build with {tech.name}</Link>
                <Link to="/#tech" className="td-textlink">← all technologies</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Overview + spec card ===== */}
      <section className="section">
        <div className="container td-grid">
          <div className="td-grid__main">
            <Reveal>
              <p className="td-comment">// overview</p>
              <p className="td-lead">{tech.description}</p>
            </Reveal>

            <Reveal delay={80}>
              <p className="td-comment" style={{ marginTop: 36 }}>// what we build with it</p>
              <ul className="td-checklist">
                {tech.highlights.map((h) => (
                  <li key={h}><span className="td-check">▸</span>{h}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal variant="left" className="td-aside">
            <div className="td-spec">
              <p className="td-spec__title">// at a glance</p>
              <dl className="td-spec__list">
                <div><dt>category</dt><dd>{tech.category}</dd></div>
                <div><dt>type</dt><dd>{TECH_TYPES[tech.category] || 'Technology'}</dd></div>

                <div>
                  <dt>used_in</dt>
                  <dd>
                    <button
                      type="button"
                      className="td-breakout__trigger"
                      aria-expanded={open === 'used'}
                      disabled={related.length === 0}
                      onClick={() => setOpen(open === 'used' ? null : 'used')}
                    >
                      <CountUp value={`${related.length} service${related.length === 1 ? '' : 's'}`} />
                      {related.length > 0 && <span className="td-breakout__chev" aria-hidden="true">▾</span>}
                    </button>
                    {open === 'used' && (
                      <div className="td-breakout" role="menu">
                        {related.map((sv) => (
                          <Link key={sv.slug} to={`/services/${sv.slug}`} className="td-breakout__item" onClick={() => setOpen(null)}>
                            <span className="td-breakout__icon"><Icon name={sv.icon} size={16} mono /></span>
                            {sv.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </dd>
                </div>

                <div>
                  <dt>capabilities</dt>
                  <dd>
                    <button
                      type="button"
                      className="td-breakout__trigger"
                      aria-expanded={open === 'caps'}
                      onClick={() => setOpen(open === 'caps' ? null : 'caps')}
                    >
                      {tech.highlights.length} focus areas
                      <span className="td-breakout__chev" aria-hidden="true">▾</span>
                    </button>
                    {open === 'caps' && (
                      <div className="td-breakout" role="menu">
                        {tech.highlights.map((h) => (
                          <span key={h} className="td-breakout__item td-breakout__item--static">
                            <span className="td-breakout__bullet">▸</span>{h}
                          </span>
                        ))}
                      </div>
                    )}
                  </dd>
                </div>
              </dl>
              {open && <button className="td-breakout__scrim" aria-label="Close" onClick={() => setOpen(null)} />}

              {pairsWith.length > 0 && (
                <div className="td-spec__pairs">
                  <p className="td-spec__subtitle">// often paired with</p>
                  <div className="td-pairs">
                    {pairsWith.map((t) => (
                      <Link key={t.slug} to={`/technologies/${t.slug}`} className="td-pair">
                        <span className="td-pair__mono">{t.mono}</span>{t.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <Link to="/#contact" className="btn btn--primary btn--block td-spec__cta">Start a project</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Related services ===== */}
      {related.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <Reveal>
              <p className="td-comment">// powers these services</p>
              <h2 className="td-h2">Where we use {tech.name}</h2>
            </Reveal>
            <div className="td-services">
              {related.map((sv, i) => (
                <Reveal as={Link} key={sv.slug} to={`/services/${sv.slug}`} className="td-service" delay={i * 60}>
                  <span className="td-service__icon"><Icon name={sv.icon} size={24} /></span>
                  <span className="td-service__body">
                    <span className="td-service__title">{sv.title}</span>
                    <span className="td-service__short">{sv.short}</span>
                  </span>
                  <span className="td-service__arrow">→</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section className="section">
        <div className="container">
          <Reveal variant="zoom">
            <div className="td-cta">
              <p className="td-comment td-comment--light">// let’s ship something</p>
              <h2 className="td-cta__title">Have a project that needs {tech.name}?</h2>
              <p className="td-cta__text">Tell us what you’re building — we’ll bring the right stack and a clear plan.</p>
              <Link to="/#contact" className="btn btn--lg td-cta__btn">Talk to our engineers</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Explore other technologies ===== */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <p className="td-comment">// explore the stack</p>
            <h2 className="td-h2">Other technologies</h2>
          </Reveal>
          <div className="td-chips">
            {others.map((t, i) => (
              <Link key={t.slug} to={`/technologies/${t.slug}`} className="td-chip" style={{ '--i': i }}>
                <span className="td-chip__mono">{t.mono}</span>
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
