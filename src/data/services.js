// Services offered by Trinovtech (mirrors trinovtech.in service menu)
export const services = [
  {
    slug: 'artificial-intelligence',
    icon: 'ai',
    title: 'Artificial Intelligence',
    short: 'Smart automation, ML models and AI-driven products that turn data into decisions.',
    tagline: 'Turn your data into intelligent products that learn, predict and automate.',
    description:
      'We design and deploy AI/ML solutions — from predictive analytics and computer vision to natural language processing and generative AI assistants — engineered for real-world reliability and scale.',
    features: [
      'Machine Learning & Predictive Analytics',
      'Computer Vision & Image Processing',
      'Natural Language Processing',
      'Generative AI & LLM Integration',
    ],
    outcomes: [
      'Automate manual, repetitive workflows and cut operating cost',
      'Surface predictive insights from data you already collect',
      'Ship AI features customers actually trust in production',
    ],
    tech: ['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'OpenAI / LLMs', 'scikit-learn'],
  },
  {
    slug: 'devops-cloud',
    icon: 'cloud',
    title: 'DevOps & Cloud',
    short: 'Managed cloud, CI/CD and infrastructure automation for resilient delivery.',
    tagline: 'Ship faster and sleep better with automated, observable cloud infrastructure.',
    description:
      'We build cloud-native platforms with automated pipelines, containerization and observability so your teams ship faster with confidence on AWS, Azure or GCP.',
    features: [
      'CI/CD Pipeline Automation',
      'Kubernetes & Containerization',
      'Infrastructure as Code',
      'Monitoring & Observability',
    ],
    outcomes: [
      'Release multiple times a day with zero-downtime deploys',
      'Cut cloud spend with right-sized, automated infrastructure',
      'Catch issues early with full-stack monitoring and alerts',
    ],
    tech: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    slug: 'internet-of-things',
    icon: 'iot',
    title: 'Internet of Things',
    short: 'Connected devices and platforms from sensor to cloud dashboard.',
    tagline: 'Connect your hardware to the cloud — securely, reliably, at scale.',
    description:
      'End-to-end IoT systems — device firmware, secure connectivity, edge processing and cloud dashboards — built for industrial and consumer deployments.',
    features: [
      'Device-to-Cloud Connectivity',
      'Edge Computing',
      'Real-time Telemetry Dashboards',
      'Secure Provisioning & OTA Updates',
    ],
    outcomes: [
      'Monitor and control fleets of devices from a single dashboard',
      'Reduce field visits with remote OTA updates and diagnostics',
      'Make decisions in real time from live sensor telemetry',
    ],
    tech: ['MQTT', 'ESP32', 'AWS IoT', 'Azure IoT Hub', 'Node.js', 'Grafana'],
  },
  {
    slug: 'mcu-programming',
    icon: 'chip',
    title: 'MCU Programming',
    short: 'Bare-metal and firmware development for microcontroller platforms.',
    tagline: 'Lean, deterministic firmware that gets the most out of every microcontroller.',
    description:
      'Low-level firmware engineering across ARM Cortex, ESP32, STM32 and AVR — optimized for power, performance and deterministic behavior.',
    features: [
      'Bare-metal Firmware',
      'Peripheral & Driver Development',
      'Low-power Optimization',
      'Bootloaders & OTA',
    ],
    outcomes: [
      'Extend battery life with aggressive low-power design',
      'Bring custom hardware to life with reliable drivers',
      'Update fielded devices safely with robust bootloaders',
    ],
    tech: ['ARM Cortex-M', 'STM32', 'ESP32', 'AVR', 'C / C++', 'PlatformIO'],
  },
  {
    slug: 'rtos-development',
    icon: 'timer',
    title: 'RTOS Development',
    short: 'Real-time operating system design for time-critical embedded systems.',
    tagline: 'Deterministic, real-time software for systems where timing is everything.',
    description:
      'We architect deterministic, real-time embedded software on FreeRTOS, Zephyr and bare-metal schedulers for mission-critical applications.',
    features: [
      'FreeRTOS & Zephyr',
      'Task Scheduling & Concurrency',
      'Real-time Performance Tuning',
      'Safety-critical Design',
    ],
    outcomes: [
      'Meet hard real-time deadlines with predictable scheduling',
      'Run complex concurrent tasks without race conditions',
      'Build toward safety-critical certification with confidence',
    ],
    tech: ['FreeRTOS', 'Zephyr', 'ARM Cortex-M', 'C / C++', 'CMSIS', 'Segger'],
  },
  {
    slug: 'pcb-designing',
    icon: 'circuit',
    title: 'PCB Designing',
    short: 'Schematic capture, layout and prototyping for custom hardware.',
    tagline: 'From schematic to manufacturable board — hardware engineered to ship.',
    description:
      'From schematic to manufacturable boards — multi-layer PCB layout, signal integrity, DFM review and prototype bring-up for your hardware products.',
    features: [
      'Schematic Capture',
      'Multi-layer PCB Layout',
      'Signal Integrity & DFM',
      'Prototype Bring-up',
    ],
    outcomes: [
      'Move from idea to working prototype without the guesswork',
      'Avoid costly re-spins with DFM and signal-integrity review',
      'Get manufacture-ready files your fab can build right away',
    ],
    tech: ['Altium', 'KiCad', 'Eagle', 'SPICE', 'DFM', 'JLCPCB'],
  },
  {
    slug: 'mobile-app',
    icon: 'mobile',
    title: 'Mobile App',
    short: 'Native and cross-platform mobile apps with great UX.',
    tagline: 'Beautiful, fast mobile apps your users keep coming back to.',
    description:
      'We craft performant iOS, Android and cross-platform apps (React Native / Flutter) with clean UX, offline support and seamless backend integration.',
    features: [
      'iOS & Android Native',
      'React Native & Flutter',
      'Offline-first Architecture',
      'App Store Deployment',
    ],
    outcomes: [
      'Launch on iOS and Android from a single codebase',
      'Keep users engaged with smooth, offline-capable UX',
      'Go live faster with handled App Store / Play submissions',
    ],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
  },
  {
    slug: 'web-app',
    icon: 'globe',
    title: 'Web App',
    short: 'Scalable web applications built on modern stacks like MERN.',
    tagline: 'Scalable web platforms — from MVP to enterprise — on the modern stack.',
    description:
      'Full-stack web applications using React, Node.js, Express and MongoDB — responsive, secure and built to scale from MVP to enterprise.',
    features: [
      'MERN Stack Development',
      'Responsive UI/UX',
      'REST & GraphQL APIs',
      'Cloud Deployment',
    ],
    outcomes: [
      'Validate your idea quickly with a production-ready MVP',
      'Scale confidently with secure, well-architected APIs',
      'Delight users with fast, responsive interfaces on any device',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Vite'],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
