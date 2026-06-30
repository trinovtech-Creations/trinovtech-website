// Mission / Vision / Values — powers the About section cards and the
// /about/:slug detail pages.
export const pillars = [
  {
    slug: 'mission',
    icon: 'target',
    card: 'Mission',
    label: 'Our Mission',
    statement:
      'To help businesses identify opportunities for top growth and implement the right strategies through reliable engineering — from concept to production.',
    overview:
      'We exist to make great technology accessible. By giving businesses on-demand access to senior engineering talent across the full stack — silicon to cloud — we help them move faster, spend smarter and build products that last.',
    points: [
      { title: 'Reduce cost & risk', text: 'On-demand senior expertise means you get the right skills exactly when you need them, without the overhead of building a large in-house team.' },
      { title: 'Ship faster', text: 'Lean, focused delivery in tight iterations gets working products into the market sooner.' },
      { title: 'Engineer for reliability', text: 'Quality and testing are built in at every step, so what we ship holds up in the real world.' },
      { title: 'Partner end to end', text: 'From the first idea to production and ongoing support, we stay with you across the whole journey.' },
    ],
  },
  {
    slug: 'vision',
    icon: 'eye',
    card: 'Vision',
    label: 'Our Vision',
    statement:
      'To be the trusted technology partner for companies building the next generation of digital and embedded products.',
    overview:
      'We see a future where every ambitious business — regardless of size — can build world-class digital and embedded products. Our vision is to be the dependable partner that makes that possible, combining deep engineering with genuine care for our clients’ success.',
    points: [
      { title: 'A partner, not a vendor', text: 'We invest in long-term relationships and treat your goals as our own.' },
      { title: 'Technology that lasts', text: 'We build maintainable, scalable systems designed to grow with you for years, not months.' },
      { title: 'Innovation with purpose', text: 'We adopt new technology where it creates real value — never for its own sake.' },
      { title: 'Global standards, local commitment', text: 'World-class engineering practices delivered with the responsiveness of a close-knit team.' },
    ],
  },
  {
    slug: 'values',
    icon: 'gem',
    card: 'Values',
    label: 'Our Values',
    statement:
      'Integrity, quality, and a relentless client-centric focus in everything we deliver.',
    overview:
      'Our values shape how we work every day — with each other and with our clients. They’re the standard we hold ourselves to, from the first conversation to long after launch.',
    points: [
      { title: 'Integrity', text: 'We are honest and transparent — clear timelines, clear costs and no surprises.' },
      { title: 'Quality', text: 'We hold a high bar for engineering excellence and never cut corners that matter.' },
      { title: 'Client-centric', text: 'Your success is how we measure ours; we optimise for your outcomes.' },
      { title: 'Ownership', text: 'We treat your product as if it were our own and take responsibility end to end.' },
      { title: 'Curiosity', text: 'We keep learning and bring fresh thinking to every problem we tackle.' },
      { title: 'Reliability', text: 'We do what we say we will — dependable delivery you can plan around.' },
    ],
  },
]

export const getPillar = (slug) => pillars.find((p) => p.slug === slug)
