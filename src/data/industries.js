// Industries Trinovtech serves. `services` references service slugs for cross-linking.
export const industries = [
  {
    slug: 'manufacturing-iiot',
    icon: 'factory',
    title: 'Manufacturing',
    description:
      'Smart factories and connected equipment — IIoT, predictive maintenance and factory automation that turn machine data into decisions.',
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
      'Industrial IoT (IIoT) platforms',
      'Predictive maintenance with ML',
      'Factory automation and control',
      'Real-time dashboards and alerting',
    ],
    services: ['internet-of-things', 'mcu-programming', 'devops-cloud', 'artificial-intelligence'],
  },
  {
    slug: 'automotive',
    icon: 'circuit',
    title: 'Automotive',
    description:
      'Connected-vehicle technology — telematics, EV systems and fleet management built on robust embedded engineering.',
    tagline: 'Engineering for the connected, electric vehicle era.',
    overview:
      'We build automotive technology from the embedded layer up — telematics units, EV control and monitoring systems, and fleet platforms that connect vehicles to the cloud reliably and securely.',
    challenges: [
      'Reliability and safety requirements',
      'Real-time vehicle connectivity',
      'EV power and battery management',
      'Integrating vehicles with cloud platforms',
    ],
    capabilities: [
      'Telematics and connected vehicles',
      'EV control and monitoring systems',
      'Fleet management platforms',
      'Automotive-grade embedded firmware',
    ],
    services: ['internet-of-things', 'embedded-systems', 'mcu-programming', 'mobile-app'],
  },
  {
    slug: 'smart-cities',
    icon: 'building',
    title: 'Smart Cities',
    description:
      'Connected urban infrastructure — traffic management and smart infrastructure that make cities more efficient and liveable.',
    tagline: 'Connected infrastructure for smarter, more liveable cities.',
    overview:
      'We help cities and integrators deploy connected infrastructure — traffic management, environmental sensing and smart utilities — with the device, edge and cloud engineering to run it at city scale.',
    challenges: [
      'Large-scale, distributed device fleets',
      'Reliable connectivity across the city',
      'Integrating diverse systems and vendors',
      'Turning sensor data into action',
    ],
    capabilities: [
      'Traffic and mobility management',
      'Smart infrastructure and sensing',
      'City-scale IoT platforms',
      'Analytics and operations dashboards',
    ],
    services: ['internet-of-things', 'devops-cloud', 'artificial-intelligence', 'web-app'],
  },
  {
    slug: 'healthcare-medtech',
    icon: 'shield',
    title: 'Healthcare',
    description:
      'Secure, compliant software and connected medical devices — medical IoT, healthcare software and remote monitoring.',
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
      'Medical IoT and connected devices',
      'Healthcare software and telehealth',
      'Remote patient monitoring',
      'AI-assisted diagnostics and analytics',
    ],
    services: ['artificial-intelligence', 'internet-of-things', 'mobile-app', 'pcb-designing'],
  },
  {
    slug: 'edutech-elearning',
    icon: 'users',
    title: 'Education (EdTech)',
    description:
      'Engaging learning technology — learning platforms, STEM solutions and LMS built for growing learner communities.',
    tagline: 'Learning experiences that engage and scale.',
    overview:
      'We build education technology that learners love — learning platforms, STEM and lab solutions, and LMS systems engineered to stay fast and reliable as your audience grows.',
    challenges: [
      'Keeping learners engaged and retained',
      'Scaling to many concurrent users',
      'Live classes and rich interactivity',
      'Tracking progress and outcomes',
    ],
    capabilities: [
      'Web & mobile learning platforms',
      'STEM and interactive lab solutions',
      'Learning management systems (LMS)',
      'AI tutoring and personalisation',
    ],
    services: ['web-app', 'mobile-app', 'artificial-intelligence', 'devops-cloud'],
  },
  {
    slug: 'retail-ecommerce',
    icon: 'globe',
    title: 'Retail & E-Commerce',
    description:
      'High-performance commerce — POS systems, inventory management and AI analytics that scale through peak demand.',
    tagline: 'Fast, scalable commerce built for peak demand.',
    overview:
      'We build commerce experiences that perform — storefronts, POS, inventory and order systems that stay fast under peak load and turn visitors into loyal customers.',
    challenges: [
      'Traffic spikes during peak sales',
      'Conversion and performance pressure',
      'Inventory and order synchronisation',
      'Personalisation at scale',
    ],
    capabilities: [
      'Web storefronts and POS systems',
      'Inventory and order management',
      'AI analytics and personalisation',
      'Autoscaling cloud infrastructure',
    ],
    services: ['web-app', 'mobile-app', 'devops-cloud', 'artificial-intelligence'],
  },
  {
    slug: 'logistics-supply-chain',
    icon: 'rocket',
    title: 'Logistics & Supply Chain',
    description:
      'Visibility and efficiency — fleet tracking and warehouse automation that bring control to operations.',
    tagline: 'End-to-end visibility from warehouse to doorstep.',
    overview:
      'We give logistics operators real-time visibility and control — fleet tracking, warehouse automation, driver apps and route intelligence that cut costs and delight customers.',
    challenges: [
      'No real-time visibility into shipments',
      'Manual, error-prone status updates',
      'Fleet and asset tracking at scale',
      'Rising customer-support load',
    ],
    capabilities: [
      'Real-time fleet tracking',
      'Warehouse automation',
      'Driver and operations mobile apps',
      'Route and delivery intelligence',
    ],
    services: ['internet-of-things', 'web-app', 'mobile-app', 'devops-cloud'],
  },
  {
    slug: 'transportation',
    icon: 'migrate',
    title: 'Transportation',
    description:
      'Connected mobility — public transport systems and passenger information systems that keep people moving.',
    tagline: 'Smarter systems to keep people and transit moving.',
    overview:
      'We build transportation technology — public transport management, ticketing and real-time passenger information systems — connecting vehicles, stops and riders through reliable software and devices.',
    challenges: [
      'Real-time tracking across fleets',
      'Accurate passenger information',
      'Integrating ticketing and operations',
      'Reliability for public services',
    ],
    capabilities: [
      'Public transport management',
      'Passenger information systems',
      'Ticketing and operations platforms',
      'Vehicle tracking and telemetry',
    ],
    services: ['internet-of-things', 'web-app', 'mobile-app', 'devops-cloud'],
  },
  {
    slug: 'energy-utilities',
    icon: 'bolt',
    title: 'Energy & Utilities',
    description:
      'Connected infrastructure — smart metering, energy monitoring and grid solutions at scale.',
    tagline: 'Smart, connected infrastructure for a sustainable grid.',
    overview:
      'We help energy and utility providers monitor and optimise distributed assets — smart metering, energy monitoring and grid analytics that improve efficiency, reliability and sustainability.',
    challenges: [
      'Monitoring distributed assets in the field',
      'Reliable connectivity in harsh environments',
      'Turning meter data into actionable insight',
      'Scaling device fleets and data pipelines',
    ],
    capabilities: [
      'Smart metering and sensor firmware',
      'Energy monitoring and control',
      'Grid analytics and forecasting',
      'Secure device-to-cloud connectivity',
    ],
    services: ['internet-of-things', 'mcu-programming', 'artificial-intelligence', 'devops-cloud'],
  },
  {
    slug: 'oil-gas',
    icon: 'tools',
    title: 'Oil & Gas',
    description:
      'Rugged industrial technology — remote asset monitoring and industrial automation for demanding environments.',
    tagline: 'Reliable monitoring and automation for harsh environments.',
    overview:
      'We build technology for the energy sector that holds up in the field — remote asset monitoring, industrial automation and analytics that improve safety, uptime and efficiency.',
    challenges: [
      'Remote, harsh operating environments',
      'Connectivity in the field',
      'Safety and reliability requirements',
      'Monitoring distributed assets',
    ],
    capabilities: [
      'Remote asset monitoring',
      'Industrial automation and control',
      'Edge gateways and rugged firmware',
      'Predictive analytics and alerting',
    ],
    services: ['internet-of-things', 'embedded-systems', 'devops-cloud', 'artificial-intelligence'],
  },
  {
    slug: 'agritech',
    icon: 'iot',
    title: 'Agriculture (AgriTech)',
    description:
      'Precision agriculture — smart irrigation, precision farming and IoT sensors that boost yield and cut waste.',
    tagline: 'Data-driven farming, from sensor to harvest.',
    overview:
      'We build AgriTech that puts data to work in the field — smart irrigation, precision farming and IoT sensor networks that help growers increase yield while saving water and inputs.',
    challenges: [
      'Connectivity in remote fields',
      'Low-power, long-life devices',
      'Turning sensor data into decisions',
      'Rugged hardware for the outdoors',
    ],
    capabilities: [
      'Smart irrigation systems',
      'Precision farming platforms',
      'Low-power IoT sensor networks',
      'Yield and crop analytics',
    ],
    services: ['internet-of-things', 'mcu-programming', 'artificial-intelligence', 'mobile-app'],
  },
  {
    slug: 'construction',
    icon: 'blueprint',
    title: 'Construction',
    description:
      'Connected job sites — site monitoring and equipment tracking that improve safety and efficiency.',
    tagline: 'Visibility and control across the job site.',
    overview:
      'We bring connectivity to construction — site monitoring, equipment and asset tracking, and management software that improve safety, reduce loss and keep projects on schedule.',
    challenges: [
      'Tracking equipment and assets on site',
      'Safety monitoring and compliance',
      'Connectivity on temporary sites',
      'Coordinating people and resources',
    ],
    capabilities: [
      'Site monitoring and safety',
      'Equipment and asset tracking',
      'Project and resource management',
      'IoT sensors and dashboards',
    ],
    services: ['internet-of-things', 'mobile-app', 'web-app', 'artificial-intelligence'],
  },
  {
    slug: 'fintech-banking',
    icon: 'chart',
    title: 'Banking & Financial Services',
    description:
      'Scalable, secure financial platforms — FinTech platforms and secure applications built for trust and compliance.',
    tagline: 'Secure, scalable platforms your customers can bank on.',
    overview:
      'We build financial products that demand the highest standards of security and reliability — FinTech platforms, payments and secure applications engineered to scale and to earn trust.',
    challenges: [
      'Security, fraud and regulatory compliance',
      'High availability and transaction integrity',
      'Scaling under unpredictable load',
      'Integrating with legacy banking systems',
    ],
    capabilities: [
      'Secure FinTech platforms',
      'Payments and transaction systems',
      'Web and mobile banking apps',
      'Analytics, reporting and automation',
    ],
    services: ['web-app', 'devops-cloud', 'artificial-intelligence', 'mobile-app'],
  },
  {
    slug: 'insurance',
    icon: 'target',
    title: 'Insurance',
    description:
      'Modern insurance technology — claims automation and AI-powered processing that speed up decisions.',
    tagline: 'Faster, smarter claims and underwriting.',
    overview:
      'We help insurers modernise core workflows — automating claims, applying AI to documents and risk, and building secure customer platforms that cut processing time and cost.',
    challenges: [
      'Slow, manual claims processing',
      'Document-heavy workflows',
      'Fraud detection and risk',
      'Legacy core systems',
    ],
    capabilities: [
      'Claims automation',
      'AI-powered document processing',
      'Customer and agent platforms',
      'Risk and fraud analytics',
    ],
    services: ['artificial-intelligence', 'workflow-automation', 'web-app', 'enterprise-applications'],
  },
  {
    slug: 'telecommunications',
    icon: 'network',
    title: 'Telecommunications',
    description:
      'Carrier-grade software — network monitoring and OSS/BSS applications that keep networks running.',
    tagline: 'Software that keeps networks running and revenue flowing.',
    overview:
      'We build telecom software at scale — network monitoring, OSS/BSS applications and customer platforms — engineered for the reliability and throughput carriers depend on.',
    challenges: [
      'Massive scale and throughput',
      'Real-time network monitoring',
      'Complex OSS/BSS integration',
      'High availability requirements',
    ],
    capabilities: [
      'Network monitoring and analytics',
      'OSS/BSS applications',
      'Customer self-service platforms',
      'Scalable cloud infrastructure',
    ],
    services: ['devops-cloud', 'web-app', 'enterprise-applications', 'infrastructure-automation'],
  },
  {
    slug: 'hospitality',
    icon: 'gem',
    title: 'Hospitality',
    description:
      'Guest-first technology — hotel management systems and smart rooms that elevate the guest experience.',
    tagline: 'Technology that elevates every guest experience.',
    overview:
      'We build hospitality technology that delights guests and streamlines operations — hotel management systems, smart-room controls and booking platforms connected end to end.',
    challenges: [
      'Integrating booking, PMS and devices',
      'Consistent guest experience',
      'Smart-room reliability',
      'Operational efficiency',
    ],
    capabilities: [
      'Hotel management systems',
      'Smart rooms and IoT controls',
      'Booking and guest platforms',
      'Operations dashboards',
    ],
    services: ['web-app', 'internet-of-things', 'mobile-app', 'saas-platforms'],
  },
  {
    slug: 'real-estate',
    icon: 'pin',
    title: 'Real Estate',
    description:
      'Connected property technology — property management and smart buildings that add value and efficiency.',
    tagline: 'Smarter buildings and seamless property management.',
    overview:
      'We build PropTech that connects buildings and the people who manage them — property management platforms and smart-building systems that cut cost and improve experience.',
    challenges: [
      'Managing distributed properties',
      'Integrating building systems',
      'Energy and operational efficiency',
      'Tenant experience',
    ],
    capabilities: [
      'Property management platforms',
      'Smart-building automation',
      'IoT sensing and controls',
      'Tenant and owner portals',
    ],
    services: ['web-app', 'internet-of-things', 'mobile-app', 'saas-platforms'],
  },
  {
    slug: 'pharmaceuticals',
    icon: 'flask',
    title: 'Pharmaceuticals',
    description:
      'Regulated production technology — manufacturing automation and compliance systems for life sciences.',
    tagline: 'Automation and compliance for regulated production.',
    overview:
      'We build technology for pharma manufacturing and operations — automation, monitoring and compliance systems engineered for traceability, quality and regulatory requirements.',
    challenges: [
      'Strict regulatory compliance',
      'Traceability and audit trails',
      'Quality and process control',
      'Integrating equipment and systems',
    ],
    capabilities: [
      'Manufacturing automation',
      'Compliance and traceability systems',
      'Process monitoring and control',
      'Quality analytics',
    ],
    services: ['internet-of-things', 'enterprise-applications', 'devops-cloud', 'manufacturing-support'],
  },
  {
    slug: 'consumer-electronics',
    icon: 'chip',
    title: 'Consumer Electronics',
    description:
      'Connected products — smart devices and connected products engineered from silicon to app.',
    tagline: 'Smart, connected products people love to use.',
    overview:
      'We take consumer electronic products from concept to shelf — hardware, firmware, connectivity and companion apps — engineered for cost, reliability and a great user experience.',
    challenges: [
      'Cost and time-to-market pressure',
      'Hardware, firmware and app integration',
      'Reliability at volume',
      'Connectivity and updates',
    ],
    capabilities: [
      'Smart device design',
      'Connected products and apps',
      'Firmware and PCB engineering',
      'Manufacturing-ready hardware',
    ],
    services: ['embedded-systems', 'pcb-designing', 'internet-of-things', 'electronic-product-design'],
  },
  {
    slug: 'aerospace-defense',
    icon: 'rocket',
    title: 'Aerospace & Defense',
    description:
      'Mission-critical engineering — embedded systems and secure communication for demanding requirements.',
    tagline: 'Dependable engineering for mission-critical systems.',
    overview:
      'We build robust, real-time embedded systems and secure communication for aerospace and defense — engineered for reliability, determinism and the highest assurance.',
    challenges: [
      'Hard real-time and reliability',
      'Security and secure communication',
      'Certification and assurance',
      'Long product lifecycles',
    ],
    capabilities: [
      'Real-time embedded systems',
      'Secure communication',
      'Safety- and mission-critical firmware',
      'Rigorous testing and validation',
    ],
    services: ['embedded-systems', 'rtos-development', 'pcb-designing', 'testing-validation'],
  },
  {
    slug: 'marine-shipping',
    icon: 'globe',
    title: 'Marine & Shipping',
    description:
      'Connected vessels — vessel monitoring and fleet analytics that improve safety and efficiency at sea.',
    tagline: 'Visibility and analytics across the fleet, at sea.',
    overview:
      'We build marine technology that connects vessels to shore — monitoring, telemetry and fleet analytics engineered to operate reliably in remote, harsh maritime environments.',
    challenges: [
      'Connectivity at sea',
      'Harsh marine environments',
      'Monitoring distributed vessels',
      'Fuel and route efficiency',
    ],
    capabilities: [
      'Vessel monitoring systems',
      'Fleet analytics and telemetry',
      'Rugged edge devices',
      'Ship-to-shore platforms',
    ],
    services: ['internet-of-things', 'embedded-systems', 'devops-cloud', 'artificial-intelligence'],
  },
  {
    slug: 'mining',
    icon: 'cube',
    title: 'Mining',
    description:
      'Safer, smarter operations — equipment monitoring and worker safety systems for tough conditions.',
    tagline: 'Connected operations and safety for tough conditions.',
    overview:
      'We build mining technology that improves safety and productivity — equipment monitoring, worker-safety systems and analytics engineered for remote, rugged operations.',
    challenges: [
      'Worker safety in hazardous sites',
      'Remote, harsh environments',
      'Monitoring heavy equipment',
      'Connectivity underground and onsite',
    ],
    capabilities: [
      'Equipment monitoring',
      'Worker safety systems',
      'Rugged IoT and edge devices',
      'Operations analytics',
    ],
    services: ['internet-of-things', 'embedded-systems', 'artificial-intelligence', 'devops-cloud'],
  },
  {
    slug: 'warehousing',
    icon: 'server',
    title: 'Warehousing',
    description:
      'Automated fulfilment — inventory automation and robotics integration that speed up the warehouse.',
    tagline: 'Faster, smarter, more automated warehouses.',
    overview:
      'We modernise the warehouse — inventory automation, robotics integration and real-time tracking that increase throughput, accuracy and efficiency across fulfilment operations.',
    challenges: [
      'Manual, slow inventory processes',
      'Integrating robotics and systems',
      'Real-time stock accuracy',
      'Scaling fulfilment throughput',
    ],
    capabilities: [
      'Inventory automation',
      'Robotics integration',
      'Real-time tracking and WMS',
      'Operations analytics',
    ],
    services: ['internet-of-things', 'web-app', 'artificial-intelligence', 'workflow-automation'],
  },
  {
    slug: 'media-entertainment',
    icon: 'eye',
    title: 'Media & Entertainment',
    description:
      'Streaming at scale — OTT platforms and streaming solutions that deliver content to millions.',
    tagline: 'Deliver content to every screen, at scale.',
    overview:
      'We build media platforms that scale — OTT and streaming solutions, content management and recommendation engines engineered to deliver smooth experiences to large audiences.',
    challenges: [
      'Streaming quality at scale',
      'Multi-device delivery',
      'Content management and rights',
      'Engagement and recommendations',
    ],
    capabilities: [
      'OTT and streaming platforms',
      'Multi-device apps',
      'Content management systems',
      'Recommendation and analytics',
    ],
    services: ['web-app', 'mobile-app', 'cloud-native', 'devops-cloud'],
  },
  {
    slug: 'government-public-sector',
    icon: 'building',
    title: 'Government & Public Sector',
    description:
      'Citizen-first digital services — e-Governance, citizen services and smart infrastructure.',
    tagline: 'Reliable digital services for citizens and cities.',
    overview:
      'We build digital government — e-Governance platforms, citizen-service portals and smart infrastructure — engineered for accessibility, security and the reliability public services demand.',
    challenges: [
      'Accessibility and inclusion',
      'Security and data protection',
      'Integrating legacy systems',
      'Reliability at public scale',
    ],
    capabilities: [
      'e-Governance platforms',
      'Citizen-service portals',
      'Smart infrastructure',
      'Secure, scalable cloud systems',
    ],
    services: ['web-app', 'enterprise-applications', 'internet-of-things', 'devops-cloud'],
  },
]

export const getIndustry = (slug) => industries.find((i) => i.slug === slug)
