import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import SolutionCard from '../components/SolutionCard.jsx'
import Reveal from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
import { solutions } from '../data/solutions.js'

// `limit` trims the grid for the Home teaser; `more` renders a "View all" link.
export default function SolutionsSection({ limit, more }) {
  const items = limit ? solutions.slice(0, limit) : solutions
  return (
    <section className="section section-anchor" id="solutions">
      <div className="container">
        <Reveal>
          <SectionHeader
            center
            eyebrow="End-to-End Solutions"
            title="Solutions for Real Product Challenges"
            subtitle="Integrated engineering for connected devices, managed cloud platforms, and custom business applications."
          />
        </Reveal>
        <div className="grid grid--3">
          {items.map((s, i) => (
            <Reveal key={s.slug} delay={i * 110}>
              <Tilt><SolutionCard solution={s} /></Tilt>
            </Reveal>
          ))}
        </div>
        {more && (
          <Reveal className="section-more">
            <Link to={more.to} className="btn btn--ghost btn--lg">{more.label}</Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}
