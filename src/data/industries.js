// Industries Trinovtech serves. `services` references service slugs for cross-linking.
export const industries = [
  {
    slug: 'healthcare-medtech',
    icon: 'shield',
    title: 'Healthcare & MedTech',
    description:
      'Secure, compliant software and connected medical devices — from patient platforms and telehealth to wearables and diagnostics.',
    tagline: 'Technology that improves care and keeps patient data safe.',
    overview:
      'We help healthcare and medical-device companies build secure, reliable products — connected devices, telehealth platforms and clinical software engineered for accuracy, privacy and uptime.',
    challenges: [
      'Strict data privacy and security requirements',
      'Integrating devices, apps and clinical systems',
      'Reliability for safety-critical use',
      'Long, costly hardware development cycles',
    ],
    capabilities: [
      'Connected medical & wearable devices',
      'Telehealth and patient platforms',
      'Secure, privacy-first data handling',
      'AI-assisted diagnostics and analytics',
    ],
    services: ['artificial-intelligence', 'internet-of-things', 'mobile-app', 'pcb-designing'],
  },
  {
    slug: 'manufacturing-iiot',
    icon: 'gear',
    title: 'Manufacturing & Industrial IoT',
    description:
      'Smart factories and connected equipment — predictive maintenance, real-time telemetry and edge-to-cloud control systems.',
    tagline: 'Connect the factory floor and turn machine data into decisions.',
    overview:
      'We bring Industry 4.0 to the shop floor — instrumenting machines, streaming telemetry to the cloud and applying analytics so you can predict failures, cut downtime and optimise production.',
    challenges: [
      'Unplanned downtime and reactive maintenance',
      'Legacy equipment with no connectivity',
      'Siloed, unused machine data',
      'Real-time control and reliability at scale',
    ],
    capabilities: [
      'Predictive maintenance with ML',
      'Edge-to-cloud telemetry pipelines',
      'Real-time dashboards and alerting',
      'Custom firmware and gateways',
    ],
    services: ['internet-of-things', 'mcu-programming', 'devops-cloud', 'artificial-intelligence'],
  },
  {
    slug: 'fintech-banking',
    icon: 'chart',
    title: 'Fintech & Banking',
    description:
      'Scalable, secure financial platforms — payments, dashboards, analytics and automation built for trust and compliance.',
    tagline: 'Secure, scalable platforms your customers can bank on.',
    overview:
      'We build financial products that demand the highest standards of security and reliability — payment systems, dashboards, analytics and automation engineered to scale and to earn trust.',
    challenges: [
      'Security, fraud and regulatory compliance',
      'High availability and transaction integrity',
      'Scaling under unpredictable load',
      'Integrating with legacy banking systems',
    ],
    capabilities: [
      'Secure web & mobile banking apps',
      'Payments and transaction systems',
      'Analytics, reporting and automation',
      'Cloud infrastructure built for uptime',
    ],
    services: ['web-app', 'devops-cloud', 'artificial-intelligence', 'mobile-app'],
  },
  {
    slug: 'retail-ecommerce',
    icon: 'building',
    title: 'Retail & E-commerce',
    description:
      'High-performance storefronts, mobile apps and inventory systems that scale through peak demand and convert browsers to buyers.',
    tagline: 'Fast, scalable commerce built for peak demand.',
    overview:
      'We build commerce experiences that perform — storefronts, mobile apps, inventory and order systems that stay fast under peak load and turn visitors into loyal customers.',
    challenges: [
      'Traffic spikes during peak sales',
      'Conversion and performance pressure',
      'Inventory and order synchronisation',
      'Personalisation at scale',
    ],
    capabilities: [
      'High-performance web storefronts',
      'iOS & Android shopping apps',
      'Inventory & order management',
      'Autoscaling cloud infrastructure',
    ],
    services: ['web-app', 'mobile-app', 'devops-cloud', 'artificial-intelligence'],
  },
  {
    slug: 'logistics-supply-chain',
    icon: 'rocket',
    title: 'Logistics & Supply Chain',
    description:
      'Track-and-trace platforms, fleet telemetry and route intelligence that bring visibility and efficiency to operations.',
    tagline: 'End-to-end visibility from warehouse to doorstep.',
    overview:
      'We give logistics operators real-time visibility and control — track-and-trace platforms, fleet telemetry, driver apps and route intelligence that cut costs and delight customers.',
    challenges: [
      'No real-time visibility into shipments',
      'Manual, error-prone status updates',
      'Fleet and asset tracking at scale',
      'Rising customer-support load',
    ],
    capabilities: [
      'Real-time track-and-trace platforms',
      'Fleet & asset telemetry',
      'Driver and operations mobile apps',
      'Route and delivery intelligence',
    ],
    services: ['internet-of-things', 'web-app', 'mobile-app', 'devops-cloud'],
  },
  {
    slug: 'energy-utilities',
    icon: 'bolt',
    title: 'Energy & Utilities',
    description:
      'Smart metering, remote monitoring and analytics for energy generation, distribution and consumption at scale.',
    tagline: 'Smart, connected infrastructure for a sustainable grid.',
    overview:
      'We help energy and utility providers monitor and optimise distributed assets — smart metering, remote monitoring and analytics that improve efficiency, reliability and sustainability.',
    challenges: [
      'Monitoring distributed assets in the field',
      'Reliable connectivity in harsh environments',
      'Turning meter data into actionable insight',
      'Scaling device fleets and data pipelines',
    ],
    capabilities: [
      'Smart metering and sensor firmware',
      'Remote monitoring and control',
      'Consumption analytics and forecasting',
      'Secure device-to-cloud connectivity',
    ],
    services: ['internet-of-things', 'mcu-programming', 'artificial-intelligence', 'devops-cloud'],
  },
  {
    slug: 'edutech-elearning',
    icon: 'users',
    title: 'EduTech & E-learning',
    description:
      'Engaging learning platforms, virtual classrooms and assessment tools built for growing learner communities.',
    tagline: 'Learning experiences that engage and scale.',
    overview:
      'We build education technology that learners love — interactive courses, virtual classrooms, assessments and analytics, engineered to stay fast and reliable as your audience grows.',
    challenges: [
      'Keeping learners engaged and retained',
      'Scaling to many concurrent users',
      'Live classes and rich interactivity',
      'Tracking progress and outcomes',
    ],
    capabilities: [
      'Web & mobile learning platforms',
      'Virtual classrooms and live sessions',
      'Assessments and progress analytics',
      'AI tutoring and personalisation',
    ],
    services: ['web-app', 'mobile-app', 'artificial-intelligence', 'devops-cloud'],
  },
]

export const getIndustry = (slug) => industries.find((i) => i.slug === slug)
