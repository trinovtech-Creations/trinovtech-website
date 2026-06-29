import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'

const values = [
  { icon: 'target', title: 'Mission', text: 'To help businesses identify opportunities for top growth and implement the right strategies through reliable engineering.' },
  { icon: 'eye', title: 'Vision', text: 'To be the trusted technology partner for companies building the next generation of digital and embedded products.' },
  { icon: 'gem', title: 'Values', text: 'Integrity, quality, and a relentless client-centric focus in everything we deliver.' },
]

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
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="card feature-card">
                <div className="feature-card__icon"><Icon name={v.icon} /></div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
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
