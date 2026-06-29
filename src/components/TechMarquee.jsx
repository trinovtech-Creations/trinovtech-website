import { Link } from 'react-router-dom'
import { featuredTechnologies as technologies } from '../data/technologies.js'

export default function TechMarquee() {
  // Duplicate the list so the track can loop seamlessly.
  const row = [...technologies, ...technologies]
  return (
    <div className="marquee">
      <div className="marquee__track">
        {row.map((t, i) => (
          <Link
            className="marquee__item"
            key={i}
            to={`/technologies/${t.slug}`}
            aria-hidden={i >= technologies.length ? 'true' : undefined}
            tabIndex={i >= technologies.length ? -1 : undefined}
          >
            <span className="marquee__dot" />
            {t.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
