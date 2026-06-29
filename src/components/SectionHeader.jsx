export default function SectionHeader({ eyebrow, title, subtitle, center }) {
  return (
    <div className={`section-header ${center ? 'section-header--center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  )
}
