import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import Aurora from '../components/Aurora.jsx'

const details = [
  { icon: 'phone', label: 'Call us', value: '+91 73958 81708', hint: 'Mon–Sat, 9am – 7pm', href: 'tel:+917395881708' },
  { icon: 'whatsapp', label: 'WhatsApp', value: '+91 91504 11708', hint: 'Chat with us anytime', href: 'https://wa.me/919150411708', external: true },
  { icon: 'mail', label: 'Email', value: 'info@trinovtech.in', hint: 'We reply within 24 hrs', href: 'mailto:info@trinovtech.in' },
]

export default function ContactSection() {
  return (
    <section className="section section--alt section--aurora section-anchor" id="contact">
      <Aurora />
      <div className="container">
        <Reveal>
          <SectionHeader
            center
            eyebrow="Contact Us"
            title="Let's talk about your project"
            subtitle="Reach out and we'll help you find the right strategy and team — from concept to production."
          />
        </Reveal>

        <div className="grid grid--3 contact-grid">
          {details.map((d, i) => (
            <Reveal key={d.label} delay={(i % 3) * 90}>
              <a
                className="card feature-card contact-card"
                href={d.href}
                {...(d.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <div className="feature-card__icon"><Icon name={d.icon} /></div>
                <span className="contact-card__label">{d.label}</span>
                <p className="contact-card__value">{d.value}</p>
                <span className="contact-card__hint">{d.hint}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
