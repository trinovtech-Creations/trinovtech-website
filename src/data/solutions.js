// Solution categories (mirrors trinovtech.in solutions section)
export const solutions = [
  {
    slug: 'embedded-systems-iot',
    icon: 'circuit',
    title: 'Embedded Systems & IoT',
    tagline: 'From concept to production',
    description:
      'Custom embedded hardware and firmware paired with secure IoT connectivity — sensor nodes, gateways, and dashboards engineered for real-world deployment.',
    points: [
      'Custom firmware & hardware design',
      'Secure device-to-cloud connectivity',
      'Edge analytics & OTA updates',
      'Industrial-grade reliability',
    ],
    overview:
      'We take embedded products from a napkin sketch to a manufacturable, field-ready system. Hardware, firmware, connectivity and cloud are designed together — as one product — so nothing is bolted on after the fact.',
    approach:
      'Our engineers co-design the board and firmware around your real-world constraints: power budget, environment, connectivity, cost, and manufacturing path. The result is a deterministic system that can be tested, deployed, and updated safely in the field.',
    deliverables: [
      'Schematic, PCB layout and a bring-up prototype',
      'Production firmware with a secure OTA pipeline',
      'Device provisioning and a cloud telemetry dashboard',
      'Documentation and manufacturing handoff package',
    ],
    stats: [
      { value: '10+', label: 'MCU & SoC platforms' },
      { value: 'Edge', label: 'Device-side intelligence' },
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
      'Cloud architecture, migration, automation, and operational support so your infrastructure is secure, observable, and cost-aware.',
    points: [
      'Cloud architecture & migration',
      'Cost optimization',
      'Automated scaling & backups',
      'Monitoring, alerts & support',
    ],
    overview:
      'We run your cloud so your team can run your product. From a clean-sheet architecture to lifting an existing estate, we standardise, automate and observe every layer of your infrastructure.',
    approach:
      'We start with a review of your architecture, cost, and risk, then codify the infrastructure. Automated pipelines, scaling, backups, and observability reduce manual toil and help your team catch issues early.',
    deliverables: [
      'Reference architecture and migration plan',
      'Infrastructure-as-code and CI/CD pipelines',
      'Cost-optimisation and right-sizing report',
      'Monitoring, alerting and on-call runbooks',
    ],
    stats: [
      { value: 'IaC', label: 'Repeatable infrastructure' },
      { value: 'CI/CD', label: 'Automated delivery' },
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
      'We model your domain, design a secure application core, then layer on the integrations, permissions, and analytics your operations depend on. The product is built so the first version can launch quickly and grow cleanly over time.',
    deliverables: [
      'Multi-tenant application architecture',
      'Role-based access control and audit trails',
      'Integrations with your existing systems & APIs',
      'Dashboards, analytics and reporting',
    ],
    stats: [
      { value: 'Multi', label: 'Tenant by design' },
      { value: 'RBAC', label: 'Granular access control' },
      { value: 'MVP', label: 'Ready to grow' },
    ],
    services: ['web-app', 'devops-cloud', 'mobile-app', 'artificial-intelligence'],
  },
]

export const getSolution = (slug) => solutions.find((s) => s.slug === slug)
