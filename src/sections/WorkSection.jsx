import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
import Icon from '../components/Icon.jsx'
import { caseStudies } from '../data/caseStudies.js'

// `limit` trims the grid for the Home teaser; `more` renders a "View all" link.
export default function WorkSection({ limit, more }) {
  const items = limit ? caseStudies.slice(0, limit) : caseStudies
  return (
    <section className="section section--alt section-anchor" id="work">
      <div className="container">
        <Reveal>
          <SectionHeader
            center
            eyebrow="Our Work"
            title="Outcomes we’ve engineered"
            subtitle="A look at how we turn complex problems into measurable results — from silicon to cloud."
          />
        </Reveal>
        <div className="grid grid--2">
          {items.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 100}>
              <Tilt>
              <Link to={`/work/${c.slug}`} className="card work-card">
                <div className="work-card__top">
                  <span className="work-card__icon"><Icon name={c.icon} /></span>
                  <span className="work-card__industry">{c.industry}</span>
                </div>
                <h3 className="work-card__title">{c.title}</h3>
                <p className="work-card__text">{c.summary}</p>
                <div className="work-card__stats">
                  {c.results.slice(0, 3).map((r) => (
                    <div key={r.label} className="work-card__stat">
                      <strong className="gradient-text">{r.value}</strong>
                      <span>{r.label}</span>
                    </div>
                  ))}
                </div>
                <span className="card__link work-card__more">Read case study →</span>
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
      </div>
    </section>
  )
}
