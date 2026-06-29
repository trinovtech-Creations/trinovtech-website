import Reveal from '../components/Reveal.jsx'
import Aurora from '../components/Aurora.jsx'

export default function CTASection() {
  return (
    <section className="cta-banner">
      <div className="container">
        <Reveal variant="zoom" className="cta-banner__inner">
          <Aurora variant="light" />
          <div className="cta-banner__content">
            <h2>Ready to build something reliable?</h2>
            <p>On-demand expertise to reduce costs and speed up development — from concept to production.</p>
          </div>
          <a href="#contact" className="btn btn--primary btn--lg btn--shine">Get Started</a>
        </Reveal>
      </div>
    </section>
  )
}
