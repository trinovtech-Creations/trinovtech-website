import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
import Icon from '../components/Icon.jsx'
import { pillars } from '../data/about.js'

const timeline = [
  { year: 'Concept', text: 'We start by understanding your goals and identifying growth opportunities.' },
  { year: 'Design', text: 'We architect scalable, reliable solutions tailored to your needs.' },
  { year: 'Build', text: 'Senior engineers deliver with quality assurance built in at every step.' },
  { year: 'Production', text: 'From concept to production — with managed support that keeps you running.' },
]

export default function AboutSection() {
  return (
    <section className="section section--alt section-anchor" id="about">
      <div className="container">
        <Reveal>
          <SectionHeader
            center
            eyebrow="About Us"
            title="Building reliable technology for modern businesses"
            subtitle="On-demand expertise to reduce costs and speed up development — from concept to production."
          />
        </Reveal>
        <div className="grid grid--3">
          {pillars.map((p, i) => (
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

        <Reveal className="about-process-head">
          <h3 className="about-process-title">From Concept to Production</h3>
        </Reveal>
        <div className="timeline">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 120} className="timeline__item">
              <div className="timeline__dot">{i + 1}</div>
              <h3>{t.year}</h3>
              <p>{t.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
