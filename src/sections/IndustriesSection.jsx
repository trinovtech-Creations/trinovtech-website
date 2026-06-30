import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
import Icon from '../components/Icon.jsx'
import { industries } from '../data/industries.js'

export default function IndustriesSection() {
  return (
    <section className="section section-anchor" id="industries">
      <div className="container">
        <Reveal>
          <SectionHeader
            center
            title={<><span className="title-eyebrow">Industries</span><span className="gradient-text">Built for your industries</span></>}
            subtitle="Deep domain experience across the sectors where technology makes the biggest difference."
          />
        </Reveal>
        <div className="grid grid--3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 3) * 90}>
              <Tilt>
              <Link to={`/industries/${ind.slug}`} className="card industry-card">
                <div className="industry-card__icon"><Icon name={ind.icon} /></div>
                <h3 className="industry-card__title">{ind.title}</h3>
                <p className="industry-card__text">{ind.description}</p>
                <span className="card__link industry-card__more">Explore →</span>
              </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
