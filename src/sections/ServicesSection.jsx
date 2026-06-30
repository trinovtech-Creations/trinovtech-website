import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Reveal from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
import { services } from '../data/services.js'

// `limit` trims the grid for the Home teaser; `more` renders a "View all" link.
export default function ServicesSection({ limit, more }) {
  const items = limit ? services.slice(0, limit) : services
  return (
    <section className="section section-anchor" id="services">
      <div className="container">
        <Reveal>
          <SectionHeader
            center
            title={<><span className="title-eyebrow">What We Do</span><span className="gradient-text">Our Services</span></>}
            subtitle="On-demand expertise across the full technology spectrum — from silicon to cloud."
          />
        </Reveal>
        <div className="grid grid--4">
          {items.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 90}>
              <Tilt><ServiceCard service={s} /></Tilt>
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
