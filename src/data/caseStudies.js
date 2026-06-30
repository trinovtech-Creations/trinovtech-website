// Solution examples / portfolio. These are representative project scenarios;
// replace them with real client work and verified metrics when available.
// `tech` entries match technology names so they link to /technologies/:slug;
// `services` match service slugs.
export const caseStudies = [
  {
    slug: 'predictive-maintenance-platform',
    icon: 'ai',
    industry: 'Manufacturing',
    title: 'Predictive Maintenance Platform',
    summary:
      'An AI and IoT platform concept for detecting equipment risk early using machine telemetry and predictive models.',
    challenge:
      'The client’s production line suffered costly, unpredictable machine breakdowns. Maintenance was reactive, and sensor data sat unused across disconnected systems.',
    solution:
      'We unified the machine telemetry into a cloud pipeline and trained ML models to detect anomalies and forecast failures. A real-time dashboard surfaces risk scores and schedules maintenance proactively.',
    duration: '4 months',
    services: ['artificial-intelligence', 'internet-of-things', 'devops-cloud'],
    tech: ['Python', 'TensorFlow', 'AWS', 'Docker', 'Grafana'],
    results: [
      { value: 'AI', label: 'Failure-risk scoring' },
      { value: 'IoT', label: 'Telemetry pipeline' },
      { value: 'Live', label: 'Monitoring dashboard' },
    ],
  },
  {
    slug: 'connected-energy-monitoring',
    icon: 'iot',
    industry: 'Energy & Utilities',
    title: 'Connected Energy Monitoring',
    summary:
      'An end-to-end IoT architecture for smart energy monitoring, from embedded firmware to cloud analytics.',
    challenge:
      'A utilities provider needed real-time visibility into distributed energy assets, but had no reliable way to collect and act on field data at scale.',
    solution:
      'We designed the sensor firmware and secure device-to-cloud connectivity, then built dashboards with alerting so operators can monitor consumption and respond to anomalies instantly.',
    duration: '6 months',
    services: ['internet-of-things', 'mcu-programming', 'artificial-intelligence'],
    tech: ['ESP32', 'MQTT', 'AWS IoT', 'Node.js', 'Grafana'],
    results: [
      { value: 'MQTT', label: 'Device messaging' },
      { value: 'OTA', label: 'Remote updates' },
      { value: 'Cloud', label: 'Analytics dashboard' },
    ],
  },
  {
    slug: 'wearable-health-device',
    icon: 'chip',
    industry: 'Healthcare',
    title: 'Wearable Health Device',
    summary:
      'A low-power wearable product path combining PCB design, RTOS firmware, Bluetooth sync, and a mobile companion app.',
    challenge:
      'A MedTech startup had a prototype concept but needed production-ready hardware and firmware that maximised battery life without sacrificing accuracy.',
    solution:
      'We delivered the schematic and multi-layer PCB, wrote real-time firmware on an ARM Cortex-M MCU, and built a cross-platform app with secure Bluetooth sync and offline support.',
    duration: '5 months',
    services: ['pcb-designing', 'rtos-development', 'mobile-app'],
    tech: ['STM32', 'FreeRTOS', 'C / C++', 'Flutter', 'Firebase'],
    results: [
      { value: 'PCB', label: 'Prototype-ready board' },
      { value: 'RTOS', label: 'Real-time firmware' },
      { value: 'App', label: 'Mobile companion' },
    ],
  },
  {
    slug: 'logistics-tracking-platform',
    icon: 'globe',
    industry: 'Logistics',
    title: 'Logistics Tracking Platform',
    summary:
      'A real-time track-and-trace web and mobile platform approach for fleet visibility and shipment operations.',
    challenge:
      'Manual status updates and siloed tools meant customers had no reliable visibility into shipments, driving up support load.',
    solution:
      'We built a MERN-stack platform with live GPS tracking, role-based dashboards and a driver mobile app — deployed on autoscaling cloud infrastructure with zero-downtime releases.',
    duration: '7 months',
    services: ['web-app', 'mobile-app', 'devops-cloud'],
    tech: ['React', 'Node.js', 'MongoDB', 'React Native', 'Kubernetes'],
    results: [
      { value: 'GPS', label: 'Live tracking' },
      { value: 'RBAC', label: 'Role dashboards' },
      { value: 'Cloud', label: 'Scalable deploys' },
    ],
  },
  {
    slug: 'interactive-learning-platform',
    icon: 'users',
    industry: 'EduTech',
    title: 'Interactive Learning Console',
    summary:
      'A web and mobile learning platform blueprint with live classrooms, assessments, and a real-time teacher console.',
    challenge:
      'An education provider was outgrowing off-the-shelf tools — they needed live classes, assessments and a single console for educators to track learner progress under heavy concurrent load.',
    solution:
      'We built a MERN-stack platform with live virtual classrooms, interactive assessments and an analytics console for teachers. AI-assisted recommendations personalise each learner’s path, and autoscaling cloud infrastructure keeps sessions smooth at peak.',
    duration: '6 months',
    services: ['web-app', 'mobile-app', 'artificial-intelligence', 'devops-cloud'],
    tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
    results: [
      { value: 'Live', label: 'Virtual classrooms' },
      { value: 'AI', label: 'Learning assistance' },
      { value: 'Scale', label: 'Cloud architecture' },
    ],
  },
]

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug)
