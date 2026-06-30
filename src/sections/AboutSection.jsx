import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
import Icon from '../components/Icon.jsx'
import { pillars } from '../data/about.js'
import { processSteps } from '../data/process.js'

// `limit`/`more` power the Home teaser; `showTimeline` keeps the process
// timeline on the full /about page only.
export default function AboutSection({ limit, more, showTimeline = true }) {
  const items = limit ? pillars.slice(0, limit) : pillars
  return (
    <section className="section section--alt section-anchor" id="about">
      <div className="container">
        <Reveal>
          <SectionHeader
            center
            eyebrow="About Us"
            title="Engineering support for ambitious product teams"
            subtitle="Trinovtech brings together software, embedded, AI, and cloud expertise so you can move from idea to launch with one accountable partner."
          />
        </Reveal>
        <div className="grid grid--3">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <Tilt>
                <Link to={`/about/${p.slug}`} className="card feature-card feature-card--link">
                  <div className="feature-card__icon"><Icon name={p.icon} /></div>
                  <h3>{p.card}</h3>
                  <p>{p.statement}</p>
                  <span className="card__link feature-card__more">Learn more →</span>
                </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>

        {more && (
          <Reveal className="section-more">
            <Link to={more.to} className="btn btn--ghost btn--lg">{more.label}</Link>
          </Reveal>
        )}

        {showTimeline && (
          <>
            <Reveal className="about-process-head">
              <h3 className="about-process-title">How We Take Products Forward</h3>
            </Reveal>
            <div className="timeline">
              {processSteps.map((t, i) => (
                <Reveal as={Link} to={`/how-we-work/${t.slug}`} key={t.slug} delay={i * 120} className="timeline__item timeline__item--link">
                  <div className="timeline__dot">{i + 1}</div>
                  <h3>{t.step}</h3>
                  <p>{t.tagline}</p>
                  <span className="timeline__more">Learn more →</span>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
