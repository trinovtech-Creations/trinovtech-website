// Solution categories. Each has its own /solutions/:slug detail page.
// `services` references service slugs for cross-linking.
export const solutions = [
  {
    slug: 'ai-intelligent-automation',
    icon: 'ai',
    title: 'AI & Intelligent Automation Solutions',
    tagline: 'Automate operations with practical AI',
    description:
      'Build AI-powered assistants, intelligent workflows, document processing, computer vision, predictive analytics, and custom AI agents to automate business operations.',
    points: [
      'AI assistants & custom agents',
      'Document processing & computer vision',
      'Predictive analytics',
      'Intelligent workflow automation',
    ],
    overview:
      'We help businesses put AI to work where it pays off — assistants, agents, vision and analytics embedded directly into real operations. The focus is automation that saves time and cost, not AI for its own sake.',
    approach:
      'We identify the highest-value workflows, ground models in your own data, and build with guardrails, evaluation and human oversight so the automation is reliable enough to trust in production.',
    deliverables: [
      'AI assistants, agents or vision models in production',
      'Retrieval-augmented access to your knowledge',
      'Automated, monitored workflows',
      'Evaluation, guardrails and cost controls',
    ],
    stats: [
      { value: 'LLM', label: 'Assistants & agents' },
      { value: 'RAG', label: 'Grounded in your data' },
      { value: 'Auto', label: 'Hands-off workflows' },
    ],
    services: ['artificial-intelligence', 'generative-ai', 'ai-agents', 'workflow-automation'],
  },
  {
    slug: 'industrial-iot',
    icon: 'factory',
    title: 'Industrial IoT (IIoT) Solutions',
    tagline: 'Connect and optimise the factory floor',
    description:
      'Design connected industrial systems for machine monitoring, predictive maintenance, remote diagnostics, production analytics, and factory automation.',
    points: [
      'Machine monitoring & OEE',
      'Predictive maintenance',
      'Remote diagnostics',
      'Production analytics & automation',
    ],
    overview:
      'We bring Industry 4.0 to the shop floor — instrumenting machines, streaming telemetry to the cloud, and turning it into analytics that cut downtime and improve productivity, even on legacy equipment.',
    approach:
      'We connect existing and new machines through industrial protocols and edge gateways, build a reliable data pipeline, and surface the metrics operations and maintenance teams actually act on.',
    deliverables: [
      'Machine connectivity and edge gateways',
      'Real-time monitoring dashboards',
      'Predictive-maintenance models',
      'Production analytics and alerting',
    ],
    stats: [
      { value: 'IIoT', label: 'Edge-to-cloud' },
      { value: 'OEE', label: 'Live machine metrics' },
      { value: 'ML', label: 'Failure prediction' },
    ],
    services: ['internet-of-things', 'mcu-programming', 'devops-cloud', 'artificial-intelligence'],
  },
  {
    slug: 'embedded-product-engineering',
    icon: 'circuit',
    title: 'Embedded Product Engineering',
    tagline: 'From concept to manufacturable product',
    description:
      'Deliver complete electronic product development including hardware design, PCB development, firmware, RTOS, Embedded Linux, enclosure design, testing, and production support.',
    points: [
      'Hardware & PCB design',
      'Firmware, RTOS & Embedded Linux',
      'Testing & validation',
      'Production support',
    ],
    overview:
      'We take electronic products end to end — architecture, hardware, firmware and the path to manufacture — designed together as one product so nothing is bolted on after the fact.',
    approach:
      'Our engineers co-design the board and firmware around your real constraints — power, environment, connectivity, cost and the manufacturing path — and validate the result before it goes to production.',
    deliverables: [
      'Schematic, PCB layout and bring-up prototype',
      'Production firmware (RTOS or Embedded Linux)',
      'Test, validation and compliance support',
      'Manufacturing handoff package',
    ],
    stats: [
      { value: '10+', label: 'MCU & SoC platforms' },
      { value: 'RTOS', label: 'Real-time firmware' },
      { value: 'DFM', label: 'Manufacture-ready' },
    ],
    services: ['embedded-systems', 'pcb-designing', 'rtos-development', 'hardware-development'],
  },
  {
    slug: 'cloud-devops',
    icon: 'cloud',
    title: 'Cloud & DevOps Solutions',
    tagline: 'Scalable infrastructure, automated delivery',
    description:
      'Build scalable cloud infrastructure, automate CI/CD pipelines, manage Kubernetes environments, optimize cloud costs, and provide 24×7 managed cloud operations.',
    points: [
      'Scalable cloud architecture',
      'CI/CD automation',
      'Kubernetes management',
      '24×7 managed operations',
    ],
    overview:
      'We design, automate and operate cloud infrastructure so your team can focus on product. From clean-sheet architecture to managed operations, every layer is standardised, observable and cost-aware.',
    approach:
      'We codify infrastructure as code, automate build and deploy pipelines, and add observability and cost controls — then operate it day to day so issues are caught early and releases are routine.',
    deliverables: [
      'Reference architecture and IaC',
      'Automated CI/CD pipelines',
      'Kubernetes platform and autoscaling',
      'Monitoring, cost optimisation and on-call',
    ],
    stats: [
      { value: 'IaC', label: 'Repeatable infra' },
      { value: 'CI/CD', label: 'Automated delivery' },
      { value: '24×7', label: 'Managed operations' },
    ],
    services: ['cloud-migration', 'devops-cloud', 'kubernetes', 'managed-cloud'],
  },
  {
    slug: 'custom-software-development',
    icon: 'code',
    title: 'Custom Software Development',
    tagline: 'Software built around your business',
    description:
      'Develop enterprise-grade web portals, business applications, APIs, ERP, CRM, HRMS, and workflow automation platforms tailored to client needs.',
    points: [
      'Web portals & business apps',
      'ERP, CRM & HRMS',
      'APIs & integrations',
      'Workflow automation',
    ],
    overview:
      'We build the software that runs your business — portals, internal platforms and line-of-business applications that replace spreadsheets and disconnected tools with one reliable system of record.',
    approach:
      'We model your domain, design a secure application core, and layer on the integrations, permissions and automation your operations depend on — built to launch quickly and grow cleanly.',
    deliverables: [
      'Tailored business application',
      'Role-based access and audit trails',
      'Integrations with existing systems',
      'Reporting and dashboards',
    ],
    stats: [
      { value: 'ERP', label: 'CRM · HRMS & more' },
      { value: 'API', label: 'Integrated systems' },
      { value: 'RBAC', label: 'Secure by design' },
    ],
    services: ['web-app', 'enterprise-applications', 'apis-integrations', 'workflow-automation'],
  },
  {
    slug: 'saas-product-development',
    icon: 'layers',
    title: 'SaaS Product Development',
    tagline: 'Launch and scale a SaaS product',
    description:
      'Design and build secure, scalable multi-tenant SaaS platforms with subscription billing, role-based access, analytics, and cloud-native architecture.',
    points: [
      'Multi-tenant architecture',
      'Subscription billing',
      'Role-based access & analytics',
      'Cloud-native and scalable',
    ],
    overview:
      'We design and build multi-tenant SaaS products end to end — authentication, subscriptions, role-based access and analytics — architected to onboard customers and scale recurring revenue.',
    approach:
      'We start with a secure multi-tenant core, add billing, permissions and usage analytics, and deploy on cloud-native infrastructure that scales smoothly as your customer base grows.',
    deliverables: [
      'Multi-tenant SaaS platform',
      'Subscription billing and plans',
      'Role-based access and admin',
      'Usage analytics and dashboards',
    ],
    stats: [
      { value: 'Multi', label: 'Tenant by design' },
      { value: 'Billing', label: 'Recurring revenue' },
      { value: 'Scale', label: 'Cloud-native' },
    ],
    services: ['saas-platforms', 'web-app', 'devops-cloud', 'apis-integrations'],
  },
  {
    slug: 'mobile-web-applications',
    icon: 'mobile',
    title: 'Mobile & Web Application Development',
    tagline: 'Great apps on every screen',
    description:
      'Create modern Android, iOS, and web applications with responsive UI, backend integration, cloud connectivity, and real-time synchronization.',
    points: [
      'Native & cross-platform mobile',
      'Responsive web apps',
      'Backend & cloud integration',
      'Real-time synchronisation',
    ],
    overview:
      'We craft performant mobile and web applications with clean UX, solid backends and real-time data — built around real customer journeys and ready to scale.',
    approach:
      'We design the experience, build native or cross-platform apps and responsive web frontends, and connect them to secure, scalable backends with offline support and real-time sync where it matters.',
    deliverables: [
      'iOS, Android and web applications',
      'Secure, scalable backend and APIs',
      'Real-time sync and offline support',
      'App Store / Play deployment',
    ],
    stats: [
      { value: 'iOS', label: 'Android & Web' },
      { value: 'Sync', label: 'Real-time data' },
      { value: 'UX', label: 'Customer-first' },
    ],
    services: ['mobile-app', 'web-app', 'apis-integrations'],
  },
  {
    slug: 'digital-transformation',
    icon: 'migrate',
    title: 'Digital Transformation Consulting',
    tagline: 'Modernise, automate, integrate',
    description:
      'Help organizations modernize legacy systems, migrate to the cloud, automate processes, integrate enterprise applications, and improve operational efficiency.',
    points: [
      'Legacy modernisation',
      'Cloud migration',
      'Process automation',
      'Enterprise integration',
    ],
    overview:
      'We help organisations move from legacy and manual processes to modern, automated, integrated systems — improving efficiency and unlocking data without disrupting the business.',
    approach:
      'We assess your current systems, prioritise high-impact changes, and modernise in phases — migrating to the cloud, automating processes and integrating applications with minimal risk.',
    deliverables: [
      'Modernisation and migration roadmap',
      'Cloud migration execution',
      'Process automation',
      'Integrated enterprise systems',
    ],
    stats: [
      { value: 'Cloud', label: 'Migration & modernise' },
      { value: 'Auto', label: 'Process automation' },
      { value: 'Integrate', label: 'Connected systems' },
    ],
    services: ['cloud-migration', 'workflow-automation', 'enterprise-applications', 'product-consulting'],
  },
  {
    slug: 'smart-connected-products',
    icon: 'chip',
    title: 'Smart Devices & Connected Products',
    tagline: 'Connected products, engineered end to end',
    description:
      'Develop smart meters, telematics devices, gateways, AI edge devices, industrial controllers, medical devices, and IoT-enabled consumer products.',
    points: [
      'Smart meters & telematics',
      'Gateways & AI edge devices',
      'Industrial & medical devices',
      'Connected consumer products',
    ],
    overview:
      'We design and build connected products from silicon to app — smart meters, telematics, gateways, edge-AI and industrial or medical devices engineered for reliability and scale.',
    approach:
      'Hardware, firmware, connectivity and companion apps are designed together so the product is reliable, secure and updatable in the field, and ready for volume manufacturing.',
    deliverables: [
      'Connected device hardware and firmware',
      'Secure connectivity and OTA updates',
      'Edge intelligence where needed',
      'Companion app and cloud dashboard',
    ],
    stats: [
      { value: 'Edge', label: 'On-device intelligence' },
      { value: 'OTA', label: 'Secure updates' },
      { value: 'Scale', label: 'Volume-ready' },
    ],
    services: ['embedded-systems', 'internet-of-things', 'pcb-designing', 'electronic-product-design'],
  },
  {
    slug: 'technology-consulting',
    icon: 'target',
    title: 'Technology Consulting & Product Strategy',
    tagline: 'Confident decisions, clear roadmaps',
    description:
      'Provide architecture consulting, technology selection, feasibility studies, product roadmaps, MVP development, system design, compliance guidance, and engineering leadership.',
    points: [
      'Architecture & technology selection',
      'Feasibility studies & roadmaps',
      'MVP development',
      'Engineering leadership',
    ],
    overview:
      'We provide the technical guidance to shape and de-risk your product — architecture, technology choices, feasibility and a clear, costed roadmap from idea to launch.',
    approach:
      'We assess feasibility, design the architecture, select the right technology and define a roadmap — and can lead the engineering or build the MVP to prove it.',
    deliverables: [
      'Architecture and technology recommendations',
      'Feasibility study and risk assessment',
      'Costed product roadmap',
      'MVP and engineering leadership',
    ],
    stats: [
      { value: 'MVP', label: 'Idea to launch' },
      { value: 'Arch', label: 'System design' },
      { value: 'Roadmap', label: 'Clear & costed' },
    ],
    services: ['product-consulting', 'prototype-development', 'artificial-intelligence', 'web-app'],
  },
]

export const getSolution = (slug) => solutions.find((s) => s.slug === slug)
