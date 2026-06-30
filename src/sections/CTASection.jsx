import Reveal from '../components/Reveal.jsx'
import Aurora from '../components/Aurora.jsx'

export default function CTASection() {
  return (
    <section className="cta-banner">
      <div className="container">
        <Reveal variant="zoom" className="cta-banner__inner">
          <Aurora variant="light" />
          <div className="cta-banner__content">
            <h2>Ready to turn your idea into a working product?</h2>
            <p>Bring Trinovtech into the build for practical engineering support across software, hardware, AI, and cloud.</p>
          </div>
          <a href="#contact" className="btn btn--primary btn--lg btn--shine">Get Started</a>
        </Reveal>
      </div>
    </section>
  )
}
