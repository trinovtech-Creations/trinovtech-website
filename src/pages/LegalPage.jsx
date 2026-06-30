import { Link } from 'react-router-dom'

// Shared layout for legal/policy documents (Privacy Policy, Terms, etc.).
export default function LegalPage({ title, updated, intro, children }) {
  return (
    <article className="legal">
      <header className="legal-hero">
        <div className="container">
          <nav className="legal-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="legal-breadcrumb__current">{title}</span>
          </nav>
          <h1 className="legal-hero__title gradient-text">{title}</h1>
          {updated && <p className="legal-hero__meta">Last updated: {updated}</p>}
          {intro && <p className="legal-hero__intro">{intro}</p>}
        </div>
      </header>

      <section className="section">
        <div className="container container--narrow legal-body">{children}</div>
      </section>
    </article>
  )
}

// Small helper for a titled section inside a legal document.
export function LegalSection({ n, title, children }) {
  return (
    <section className="legal-section">
      <h2 className="legal-section__title">
        {n != null && <span className="legal-section__num">{n}.</span>}
        {title}
      </h2>
      {children}
    </section>
  )
}
