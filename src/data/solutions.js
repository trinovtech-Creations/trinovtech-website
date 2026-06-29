// Solution categories (mirrors trinovtech.in solutions section)
export const solutions = [
  {
    slug: 'embedded-systems-iot',
    icon: 'circuit',
    title: 'Embedded Systems & IoT',
    tagline: 'From concept to production',
    description:
      'Custom embedded hardware and firmware paired with secure IoT connectivity — sensor nodes, gateways and cloud dashboards engineered for reliability at scale.',
    points: [
      'Custom firmware & hardware design',
      'Secure device-to-cloud connectivity',
      'Edge analytics & OTA updates',
      'Industrial-grade reliability',
    ],
    overview:
      'We take embedded products from a napkin sketch to a manufacturable, field-ready system. Hardware, firmware, connectivity and cloud are designed together — as one product — so nothing is bolted on after the fact.',
    approach:
      'Our engineers co-design the board and the firmware against your real-world constraints: power budget, environment, cost and certification. The result is a deterministic system you can deploy by the thousand and update safely in the field.',
    deliverables: [
      'Schematic, PCB layout and a bring-up prototype',
      'Production firmware with a secure OTA pipeline',
      'Device provisioning and a cloud telemetry dashboard',
      'Documentation and manufacturing handoff package',
    ],
    stats: [
      { value: '10+', label: 'MCU & SoC platforms' },
      { value: '99.9%', label: 'Field uptime targeted' },
      { value: 'OTA', label: 'Secure remote updates' },
    ],
    services: ['internet-of-things', 'mcu-programming', 'pcb-designing', 'rtos-development'],
  },
  {
    slug: 'managed-cloud-services',
    icon: 'shield',
    title: 'Managed Cloud Services',
    tagline: 'Built for scale and uptime',
    description:
      'End-to-end cloud management — architecture, migration, automation and 24/7 operations — so your infrastructure stays secure, cost-efficient and always available.',
    points: [
      'Cloud architecture & migration',
      'Cost optimization',
      'Automated scaling & backups',
      '24/7 monitoring & support',
    ],
    overview:
      'We run your cloud so your team can run your product. From a clean-sheet architecture to lifting an existing estate, we standardise, automate and observe every layer of your infrastructure.',
    approach:
      'We start with a review of your architecture, cost and risk, then codify everything as infrastructure-as-code. Automated pipelines, scaling and backups remove the manual toil, while round-the-clock monitoring keeps you ahead of incidents.',
    deliverables: [
      'Reference architecture and migration plan',
      'Infrastructure-as-code and CI/CD pipelines',
      'Cost-optimisation and right-sizing report',
      'Monitoring, alerting and on-call runbooks',
    ],
    stats: [
      { value: '24/7', label: 'Monitoring & support' },
      { value: '~40%', label: 'Typical cost reduction' },
      { value: '3', label: 'Clouds: AWS · Azure · GCP' },
    ],
    services: ['devops-cloud', 'web-app', 'artificial-intelligence'],
  },
  {
    slug: 'saas-enterprise-applications',
    icon: 'chart',
    title: 'SaaS & Enterprise Applications',
    tagline: 'Seamless integration, reliable performance',
    description:
      'Multi-tenant SaaS platforms and enterprise applications with robust integrations, role-based access and analytics — built to streamline operations end to end.',
    points: [
      'Multi-tenant SaaS platforms',
      'Enterprise system integration',
      'Role-based access & security',
      'Analytics & reporting',
    ],
    overview:
      'We design and build the software that runs your business — multi-tenant SaaS products for your customers, or internal platforms that replace spreadsheets and disconnected tools with one reliable system of record.',
    approach:
      'We model your domain, design a secure multi-tenant core, then layer on the integrations, permissions and analytics your operations depend on. Everything is built to scale cleanly from your first customer to your thousandth.',
    deliverables: [
      'Multi-tenant application architecture',
      'Role-based access control and audit trails',
      'Integrations with your existing systems & APIs',
      'Dashboards, analytics and reporting',
    ],
    stats: [
      { value: 'Multi', label: 'Tenant by design' },
      { value: 'RBAC', label: 'Granular access control' },
      { value: 'MVP→∞', label: 'Scales with you' },
    ],
    services: ['web-app', 'devops-cloud', 'mobile-app', 'artificial-intelligence'],
  },
]

export const getSolution = (slug) => solutions.find((s) => s.slug === slug)
