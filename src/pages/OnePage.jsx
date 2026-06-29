import Hero from '../sections/Hero.jsx'
import ServicesSection from '../sections/ServicesSection.jsx'
import TechSection from '../sections/TechSection.jsx'
import SolutionsSection from '../sections/SolutionsSection.jsx'
import WhySection from '../sections/WhySection.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import CTASection from '../sections/CTASection.jsx'
import ContactSection from '../sections/ContactSection.jsx'
import TechMarquee from '../components/TechMarquee.jsx'

export default function OnePage() {
  return (
    <>
      <Hero />
      <section className="marquee-section section-anchor" id="tech">
        <div className="container marquee-section__label">Technologies we work with — tap to explore</div>
        <TechMarquee />
      </section>
      <ServicesSection />
      <TechSection />
      <SolutionsSection />
      <WhySection />
      <AboutSection />
      <CTASection />
      <ContactSection />
    </>
  )
}
