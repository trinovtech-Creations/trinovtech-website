import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'

const whyChoose = [
  { icon: 'rocket', title: 'Reliable Delivery', text: 'We ship on time with predictable, transparent execution from kickoff to launch.' },
  { icon: 'users', title: 'Client-Centric Approach', text: 'Your goals drive every decision — we partner closely at every stage.' },
  { icon: 'chart', title: 'Scalable Solutions', text: 'Architectures built to grow seamlessly from MVP to enterprise scale.' },
  { icon: 'gear', title: 'Seamless Execution', text: 'End-to-end ownership with smooth integration across your stack.' },
  { icon: 'shield', title: 'Quality Assured', text: 'Rigorous testing and code standards that keep performance reliable.' },
  { icon: 'bolt', title: 'On-Demand Expertise', text: 'Tap senior talent instantly to reduce cost and speed up development.' },
]

export default function WhySection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            center
            title={<><span className="title-eyebrow">Why Trinovtech</span><span className="gradient-text">Why Choose Us</span></>}
            subtitle="A partner you can rely on at every stage of the journey."
          />
        </Reveal>
        <div className="grid grid--3">
          {whyChoose.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 90}>
              <div className="card feature-card">
                <div className="feature-card__icon"><Icon name={w.icon} /></div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
