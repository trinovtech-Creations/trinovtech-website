import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Tilt from '../components/Tilt.jsx'
import Icon from '../components/Icon.jsx'
import { projects, projectCategories } from '../data/projects.js'

// The full project library, grouped by category, on the Work page.
export default function ProjectsSection() {
  return (
    <section className="section section-anchor" id="projects">
      <div className="container">
        <Reveal>
          <SectionHeader
            center
            title={<><span className="title-eyebrow">Project Library</span><span className="gradient-text">Projects We Can Build</span></>}
            subtitle="Representative project paths across IoT, embedded, industrial, AI, cloud, and business software."
          />
        </Reveal>
        {projectCategories.map((cat) => (
          <div key={cat} className="service-group">
            <Reveal>
              <h3 className="service-group__title">{cat}</h3>
            </Reveal>
            <div className="grid grid--4">
              {projects.filter((p) => p.category === cat).map((p, i) => (
                <Reveal key={p.slug} delay={(i % 4) * 70}>
                  <Tilt>
                    <Link to={`/projects/${p.slug}`} className="card feature-card feature-card--link">
                      <div className="feature-card__icon"><Icon name={p.icon} /></div>
                      <h3>{p.title}</h3>
                      <p>{p.summary}</p>
                      <span className="card__link feature-card__more">View project →</span>
                    </Link>
                  </Tilt>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
