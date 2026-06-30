import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Reveal from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
import { services, serviceCategories } from '../data/services.js'

const ServiceGrid = ({ items }) => (
  <div className="grid grid--4">
    {items.map((s, i) => (
      <Reveal key={s.slug} delay={(i % 4) * 90}>
        <Tilt><ServiceCard service={s} /></Tilt>
      </Reveal>
    ))}
  </div>
)

// `limit` trims to a flat teaser for the Home page; without it, the full page
// shows every service grouped under its category. `more` renders a "View all" link.
export default function ServicesSection({ limit, more }) {
  return (
    <section className="section section-anchor" id="services">
      <div className="container">
        <Reveal>
          <SectionHeader
            center
            title={<><span className="title-eyebrow">What We Do</span><span className="gradient-text">Our Services</span></>}
            subtitle="Engineering services across the product stack — AI, cloud, IoT, firmware, PCB, mobile, and web."
          />
        </Reveal>

        {limit ? (
          <ServiceGrid items={services.slice(0, limit)} />
        ) : (
          serviceCategories.map((cat) => (
            <div key={cat} className="service-group">
              <Reveal>
                <h3 className="service-group__title">{cat}</h3>
              </Reveal>
              <ServiceGrid items={services.filter((s) => s.category === cat)} />
            </div>
          ))
        )}

        {more && (
          <Reveal className="section-more">
            <Link to={more.to} className="btn btn--ghost btn--lg">{more.label}</Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}
