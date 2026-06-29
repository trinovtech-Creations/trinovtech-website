import SectionHeader from '../components/SectionHeader.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { services } from '../data/services.js'

export default function ServicesSection() {
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
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 90}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
