import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
import Icon from '../components/Icon.jsx'
import { reasons } from '../data/why.js'

export default function WhySection() {
  return (
    <section className="section section-anchor" id="why">
      <div className="container">
        <Reveal>
          <SectionHeader
            center
            title={<><span className="title-eyebrow">Why Trinovtech</span><span className="gradient-text">Why Choose Us</span></>}
            subtitle="Practical engineering depth for teams that need to build carefully and move quickly."
          />
        </Reveal>
        <div className="grid grid--3">
          {reasons.map((w, i) => (
            <Reveal key={w.slug} delay={(i % 3) * 90}>
              <Tilt>
                <Link to={`/why-choose-us/${w.slug}`} className="card feature-card feature-card--link">
                  <div className="feature-card__icon"><Icon name={w.icon} /></div>
                  <h3>{w.card}</h3>
                  <p>{w.statement}</p>
                  <span className="card__link feature-card__more">Learn more →</span>
                </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
