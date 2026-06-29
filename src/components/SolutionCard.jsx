import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function SolutionCard({ solution }) {
  return (
    <Link to={`/solutions/${solution.slug}`} className="card solution-card" aria-label={`${solution.title} — learn more`}>
      <div className="solution-card__icon"><Icon name={solution.icon} /></div>
      <h3 className="solution-card__title">{solution.title}</h3>
      <span className="solution-card__subtitle">{solution.tagline}</span>
      <p className="solution-card__text">{solution.description}</p>
      <ul className="solution-card__points">
        {solution.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <span className="card__link solution-card__more">Explore solution →</span>
    </Link>
  )
}
