// "Why Choose Us" reasons — powers the Why Choose Us section cards and the
// /why-choose-us/:slug detail pages.
export const reasons = [
  {
    slug: 'product-focused-delivery',
    icon: 'rocket',
    card: 'Product-Focused Delivery',
    label: 'Why Trinovtech',
    statement: 'We connect technical decisions to launch goals, user needs, timelines, and budget.',
    overview:
      'Engineering only matters when it ships something people use. We keep every decision tied to the outcome you care about — getting a working product in front of users — and we make the trade-offs between scope, time, and cost explicit so you stay in control.',
    points: [
      { title: 'Outcome over output', text: 'We measure progress by working features and real user value, not lines of code or hours logged.' },
      { title: 'Clear trade-offs', text: 'When timelines and scope collide, we lay out the options and their cost so you can decide with full information.' },
      { title: 'Launch-ready thinking', text: 'Deployment, monitoring, and handover are planned from day one, not bolted on at the end.' },
    ],
  },
  {
    slug: 'close-collaboration',
    icon: 'users',
    card: 'Close Collaboration',
    label: 'Why Trinovtech',
    statement: 'Clear communication, practical recommendations, and a team that works with your priorities.',
    overview:
      'You should never wonder where your project stands. We work as an extension of your team with frequent updates, honest recommendations, and a direct line to the engineers actually building your product.',
    points: [
      { title: 'Regular, plain-language updates', text: 'You get steady progress reports you can actually act on — no jargon, no surprises.' },
      { title: 'Direct access to engineers', text: 'Talk to the people doing the work, not a layer of account managers in between.' },
      { title: 'Your priorities lead', text: 'We adapt the plan around your business goals as they evolve, not a fixed contract.' },
    ],
  },
  {
    slug: 'built-to-scale',
    icon: 'chart',
    card: 'Built to Scale',
    label: 'Why Trinovtech',
    statement: 'We design systems that can grow from prototype to production without painful rewrites.',
    overview:
      'A prototype that can’t grow becomes tomorrow’s rebuild. We architect for the path ahead — choosing foundations that handle more users, more data, and more features without forcing you to start over.',
    points: [
      { title: 'Architecture with headroom', text: 'We pick patterns and infrastructure that stretch from MVP to scale without a rewrite.' },
      { title: 'Maintainable foundations', text: 'Clean structure and documentation keep the codebase easy to extend as your team grows.' },
      { title: 'Cost-aware scaling', text: 'Systems are designed to grow efficiently so your infrastructure spend tracks real usage.' },
    ],
  },
  {
    slug: 'full-stack-execution',
    icon: 'gear',
    card: 'Full-Stack Execution',
    label: 'Why Trinovtech',
    statement: 'Hardware, firmware, cloud, web, mobile, and AI work together under one engineering plan.',
    overview:
      'Connected products fail at the seams between disciplines. Because we cover the whole stack in-house, the hardware, firmware, cloud, and apps are designed to fit together — one team, one plan, fewer integration surprises.',
    points: [
      { title: 'One accountable team', text: 'No finger-pointing between separate hardware and software vendors — it’s all us.' },
      { title: 'Designed to integrate', text: 'Device, firmware, backend, and app are planned together so the pieces connect cleanly.' },
      { title: 'End-to-end ownership', text: 'From silicon to cloud dashboard, a single team owns how the product behaves.' },
    ],
  },
  {
    slug: 'quality-mindset',
    icon: 'shield',
    card: 'Quality Mindset',
    label: 'Why Trinovtech',
    statement: 'Reviews, testing, security basics, and maintainable code are part of the build, not an afterthought.',
    overview:
      'Quality is cheaper when it’s built in. We bake reviews, testing, and security fundamentals into the development process so problems are caught early — before they reach your users or your bill.',
    points: [
      { title: 'Testing as you build', text: 'Automated and manual testing run alongside development, not in a rushed final phase.' },
      { title: 'Code review by default', text: 'Every meaningful change is reviewed, keeping quality and knowledge spread across the team.' },
      { title: 'Security fundamentals', text: 'Sensible security practices are applied from the start, not patched in after launch.' },
    ],
  },
  {
    slug: 'flexible-expertise',
    icon: 'bolt',
    card: 'Flexible Expertise',
    label: 'Why Trinovtech',
    statement: 'Bring in the exact skills you need for a build, prototype, integration, or long-term support.',
    overview:
      'You shouldn’t have to hire a full department to ship one product. We plug in the precise expertise a project needs — for a short prototype, a full build, a tricky integration, or ongoing support — and scale up or down as it changes.',
    points: [
      { title: 'On-demand specialists', text: 'Access embedded, cloud, AI, or mobile expertise exactly when the project calls for it.' },
      { title: 'Scale up or down', text: 'Add capacity for a push and ease off afterward, without long-term hiring overhead.' },
      { title: 'Right-sized engagements', text: 'From a quick prototype to long-term partnership, the engagement fits the need.' },
    ],
  },
]

export const getReason = (slug) => reasons.find((r) => r.slug === slug)
