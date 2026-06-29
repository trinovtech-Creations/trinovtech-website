import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="card service-card" aria-label={`${service.title} — learn more`}>
      <div className="service-card__icon"><Icon name={service.icon} /></div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__text">{service.short}</p>
      <span className="card__link service-card__more">Learn more →</span>
    </Link>
  )
}
