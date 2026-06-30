import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { services, getService } from '../data/services.js'
import { solutions, getSolution } from '../data/solutions.js'
import { industries, getIndustry } from '../data/industries.js'
import { technologies, getTechnology } from '../data/technologies.js'
import { caseStudies, getCaseStudy } from '../data/caseStudies.js'
import { pillars, getPillar } from '../data/about.js'
import { reasons, getReason } from '../data/why.js'

const SITE = {
  name: 'Trinovtech',
  url: 'https://trinovtech.in',
  title: 'Trinovtech - Software, Embedded, IoT, AI & Cloud Solutions',
  description:
    'Trinovtech builds software, embedded systems, IoT platforms, AI features, mobile apps, and cloud solutions for startups and businesses.',
  image: 'https://trinovtech.in/logo.png',
  phone: '+91 73958 81708',
  email: 'info@trinovtech.in',
  address:
    'Site No 15, 2nd St, Sri Amman Ngr, Cheranmangr, Vilankurichi, Coimbatore, Tamil Nadu 641035, India',
}

const STATIC_SEO = {
  '/': {
    title: SITE.title,
    description: SITE.description,
    keywords:
      'Trinovtech, software development company Coimbatore, IoT development, embedded systems, AI development, cloud solutions, mobile app development, web app development',
  },
  '/services': {
    title: 'Services - AI, IoT, Cloud, Embedded, Mobile & Web | Trinovtech',
    description:
      'Explore Trinovtech services across artificial intelligence, DevOps, cloud, IoT, MCU programming, RTOS, PCB design, mobile apps, and web apps.',
    keywords: 'AI services, IoT services, cloud services, embedded development, PCB design, mobile app development, web app development',
  },
  '/solutions': {
    title: 'Solutions - Embedded IoT, Managed Cloud & SaaS Apps | Trinovtech',
    description:
      'Trinovtech delivers integrated engineering solutions for connected devices, managed cloud platforms, and custom SaaS or enterprise applications.',
    keywords: 'embedded IoT solutions, managed cloud services, SaaS application development, enterprise application development',
  },
  '/work': {
    title: 'Project Examples - What Trinovtech Can Build',
    description:
      'See representative Trinovtech project examples across AI, IoT, embedded systems, cloud platforms, mobile apps, and web applications.',
    keywords: 'Trinovtech projects, IoT project examples, AI project examples, embedded project examples, web app examples',
  },
  '/about': {
    title: 'About Trinovtech - Product Engineering Partner',
    description:
      'Learn about Trinovtech, a technology consulting and product development company helping teams build reliable digital and embedded products.',
    keywords: 'about Trinovtech, technology consulting company, product development company, Coimbatore technology company',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Trinovtech',
    description: 'Read the Trinovtech privacy policy for website visitors and customers.',
    noindex: true,
  },
  '/terms': {
    title: 'Terms and Conditions | Trinovtech',
    description: 'Read the terms and conditions for using Trinovtech services and website.',
    noindex: true,
  },
}

const clean = (value = '') => String(value).replace(/\s+/g, ' ').trim()
const truncate = (value, max = 155) => {
  const text = clean(value)
  if (text.length <= max) return text
  return `${text.slice(0, max - 1).trim()}...`
}

const routeFromPath = (pathname) => {
  const normalized = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
  const parts = normalized.split('/').filter(Boolean)
  if (parts.length === 0) return STATIC_SEO['/']

  const [section, slug] = parts
  if (parts.length === 1 && STATIC_SEO[normalized]) return STATIC_SEO[normalized]

  if (section === 'services' && slug) {
    const service = getService(slug)
    if (!service) return null
    return {
      title: `${service.title} Services | Trinovtech`,
      description: truncate(service.description),
      keywords: [service.title, service.short, ...(service.tech || [])].join(', '),
      type: 'service',
    }
  }

  if (section === 'solutions' && slug) {
    const solution = getSolution(slug)
    if (!solution) return null
    return {
      title: `${solution.title} Solutions | Trinovtech`,
      description: truncate(solution.description),
      keywords: [solution.title, solution.tagline, ...(solution.points || [])].join(', '),
      type: 'solution',
    }
  }

  if (section === 'industries' && slug) {
    const industry = getIndustry(slug)
    if (!industry) return null
    return {
      title: `${industry.title} Technology Solutions | Trinovtech`,
      description: truncate(industry.description),
      keywords: [industry.title, industry.tagline, ...(industry.capabilities || [])].join(', '),
      type: 'industry',
    }
  }

  if (section === 'technologies' && slug) {
    const tech = getTechnology(slug)
    if (!tech) return null
    return {
      title: `${tech.name} Development Expertise | Trinovtech`,
      description: truncate(tech.description),
      keywords: [tech.name, tech.category, tech.tagline, ...(tech.highlights || [])].join(', '),
      type: 'technology',
    }
  }

  if (section === 'work' && slug) {
    const study = getCaseStudy(slug)
    if (!study) return null
    return {
      title: `${study.title} Project Example | Trinovtech`,
      description: truncate(study.summary),
      keywords: [study.title, study.industry, ...(study.tech || [])].join(', '),
      type: 'article',
    }
  }

  if (section === 'about' && slug) {
    const pillar = getPillar(slug)
    if (!pillar) return null
    return {
      title: `${pillar.label} - ${pillar.card} | Trinovtech`,
      description: truncate(pillar.statement),
      keywords: ['Trinovtech', pillar.card, pillar.label].join(', '),
    }
  }

  if (section === 'why-choose-us' && slug) {
    const reason = getReason(slug)
    if (!reason) return null
    return {
      title: `${reason.card} | Why Choose Trinovtech`,
      description: truncate(reason.statement),
      keywords: ['why choose Trinovtech', reason.card, 'technology partner'].join(', '),
    }
  }

  return null
}

const ensureMeta = (selector, create) => {
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = create()
    document.head.appendChild(tag)
  }
  return tag
}

const setMeta = (name, content) => {
  if (!content) return
  const tag = ensureMeta(`meta[name="${name}"]`, () => {
    const el = document.createElement('meta')
    el.setAttribute('name', name)
    return el
  })
  tag.setAttribute('content', content)
}

const setProperty = (property, content) => {
  if (!content) return
  const tag = ensureMeta(`meta[property="${property}"]`, () => {
    const el = document.createElement('meta')
    el.setAttribute('property', property)
    return el
  })
  tag.setAttribute('content', content)
}

const setLink = (rel, href) => {
  const tag = ensureMeta(`link[rel="${rel}"]`, () => {
    const el = document.createElement('link')
    el.setAttribute('rel', rel)
    return el
  })
  tag.setAttribute('href', href)
}

const pageJsonLd = (pathname, seo, canonical) => {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: SITE.image,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address,
      addressLocality: 'Coimbatore',
      addressRegion: 'Tamil Nadu',
      postalCode: '641035',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.instagram.com/trinovtech',
      'https://x.com/trinovtech',
      'https://www.linkedin.com/company/trinovtech',
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': seo.type === 'article' ? 'Article' : 'WebPage',
    name: seo.title,
    headline: seo.title,
    description: seo.description,
    url: canonical,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE.image,
      },
    },
  }

  return pathname === '/' ? [organization, website, webpage] : [webpage]
}

export default function SEO() {
  const { pathname } = useLocation()

  const seo = useMemo(() => {
    const match = routeFromPath(pathname)
    return match || {
      title: SITE.title,
      description: SITE.description,
      noindex: true,
    }
  }, [pathname])

  useEffect(() => {
    const canonicalPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
    const canonical = `${SITE.url}${canonicalPath}`
    const description = truncate(seo.description || SITE.description)
    const title = seo.title || SITE.title

    document.title = title
    setMeta('description', description)
    setMeta('robots', seo.noindex ? 'noindex, nofollow' : 'index, follow')
    setMeta('keywords', seo.keywords || STATIC_SEO['/'].keywords)
    setMeta('author', SITE.name)
    setMeta('theme-color', '#163a5c')

    setProperty('og:site_name', SITE.name)
    setProperty('og:type', seo.type === 'article' ? 'article' : 'website')
    setProperty('og:title', title)
    setProperty('og:description', description)
    setProperty('og:url', canonical)
    setProperty('og:image', SITE.image)
    setProperty('og:locale', 'en_IN')

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', SITE.image)

    setLink('canonical', canonical)

    const schema = ensureMeta('script[type="application/ld+json"][data-seo="page"]', () => {
      const el = document.createElement('script')
      el.setAttribute('type', 'application/ld+json')
      el.setAttribute('data-seo', 'page')
      return el
    })
    schema.textContent = JSON.stringify(pageJsonLd(canonicalPath, { ...seo, title, description }, canonical))
  }, [pathname, seo])

  return null
}

export const seoRoutes = {
  services,
  solutions,
  industries,
  technologies,
  caseStudies,
  pillars,
  reasons,
}
