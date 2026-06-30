import SectionHeader from '../components/SectionHeader.jsx'
import SolutionCard from '../components/SolutionCard.jsx'
import Reveal from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
import { solutions } from '../data/solutions.js'

export default function SolutionsSection() {
  return (
    <section className="section section-anchor" id="solutions">
      <div className="container">
        <Reveal>
          <SectionHeader
            center
            eyebrow="End-to-End Solutions"
            title="Solutions Built for Scale"
            subtitle="Seamless integration and reliable performance — from concept to production."
          />
        </Reveal>
        <div className="grid grid--3">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 110}>
              <Tilt><SolutionCard solution={s} /></Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
