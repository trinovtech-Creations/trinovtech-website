import Hero from '../sections/Hero.jsx'
import ServicesSection from '../sections/ServicesSection.jsx'
import SolutionsSection from '../sections/SolutionsSection.jsx'
import WorkSection from '../sections/WorkSection.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import CTASection from '../sections/CTASection.jsx'
import ContactSection from '../sections/ContactSection.jsx'
import TechMarquee from '../components/TechMarquee.jsx'

// Overview homepage: hero + trimmed teasers that each link to their full page.
export default function Home() {
  return (
    <>
      <Hero />
      <section className="marquee-section section-anchor" id="tech">
        <div className="container marquee-section__label">Technologies we work with — tap to explore</div>
        <TechMarquee />
      </section>
      <ServicesSection limit={4} more={{ to: '/services', label: 'View all services →' }} />
      <SolutionsSection limit={3} more={{ to: '/solutions', label: 'View all solutions →' }} />
      <WorkSection limit={2} more={{ to: '/work', label: 'View all work →' }} />
      <AboutSection limit={3} showTimeline={false} more={{ to: '/about', label: 'More about us →' }} />
      <CTASection />
      <ContactSection />
    </>
  )
}
