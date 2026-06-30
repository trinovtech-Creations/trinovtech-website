// How we work — the four phases of a Trinovtech engagement. Powers the process
// timeline (About page + project pages) and the /how-we-work/:slug detail pages.
export const processSteps = [
  {
    slug: 'discover',
    step: 'Discover',
    icon: 'target',
    tagline: 'Understand the goal, the users and the path to launch.',
    overview:
      'We start every engagement by understanding what success looks like — the business goal, the users, the constraints and the technical path to a working product. This is where we de-risk the project before a line of code is written, so everyone is aligned on what we are building and why.',
    activities: [
      'Goal, scope and success-criteria workshops',
      'User, stakeholder and requirement discovery',
      'Technical feasibility and constraint analysis',
      'Architecture options and technology selection',
      'Timeline, estimate and risk assessment',
    ],
    deliverables: [
      'A clear, shared product definition',
      'A proposed architecture and tech stack',
      'A costed roadmap with milestones',
    ],
  },
  {
    slug: 'design',
    step: 'Design',
    icon: 'blueprint',
    tagline: 'Shape the architecture and experience around real needs.',
    overview:
      'With the goal clear, we design the solution — the system architecture, the user experience, the hardware plan or the cloud foundation — around your real requirements. The result is a solid blueprint the build phase can follow with confidence.',
    activities: [
      'System and software architecture',
      'UX / UI and interaction design',
      'Hardware, firmware or cloud design',
      'Data models and integration design',
      'Security and scalability planning',
    ],
    deliverables: [
      'Architecture and design documentation',
      'UI / UX prototypes where relevant',
      'A validated, build-ready plan',
    ],
  },
  {
    slug: 'build',
    step: 'Build',
    icon: 'code',
    tagline: 'Develop in focused iterations with quality built in.',
    overview:
      'Our engineers build the product in focused iterations, with testing, code reviews and clear progress updates at every step. Quality and reliability are part of the process — not an afterthought bolted on at the end.',
    activities: [
      'Iterative development sprints',
      'Code review on every change',
      'Automated and manual testing',
      'Continuous integration and delivery',
      'Regular demos and progress updates',
    ],
    deliverables: [
      'Working, tested increments you can see',
      'Maintainable, documented code',
      'A production-ready product',
    ],
  },
  {
    slug: 'launch',
    step: 'Launch',
    icon: 'rocket',
    tagline: 'Deploy, hand over and keep improving after go-live.',
    overview:
      'We help you launch — deploying to production, handing over cleanly and monitoring the product once it reaches real users. Our relationship continues after go-live with support, iteration and the optimisation that keeps the product healthy.',
    activities: [
      'Production deployment and release',
      'Monitoring, alerting and observability',
      'Documentation and knowledge handover',
      'Post-launch support and iteration',
      'Scaling and optimisation',
    ],
    deliverables: [
      'A live product in production',
      'Monitoring and support in place',
      'A plan for the next iteration',
    ],
  },
]

export const getProcessStep = (slug) => processSteps.find((s) => s.slug === slug)
