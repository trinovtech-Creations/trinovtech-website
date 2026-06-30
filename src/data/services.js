// Services offered by Trinovtech, grouped into core categories. Each service
// has its own /services/:slug detail page; `category` powers the grouped layout
// on the Services page and the home teaser.
export const services = [
  // ===== AI & Data Intelligence =====
  {
    slug: 'artificial-intelligence',
    icon: 'ai',
    category: 'AI & Data Intelligence',
    title: 'Artificial Intelligence',
    short: 'Smart automation, ML models and AI-driven products that turn data into decisions.',
    tagline: 'Turn your data into practical AI features that predict, assist and automate.',
    description:
      'We design and deploy AI/ML solutions — from predictive analytics and computer vision to natural language processing and generative AI assistants — engineered for real product workflows.',
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
    tech: ['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'OpenAI API', 'scikit-learn'],
  },
  {
    slug: 'generative-ai',
    icon: 'sparkles',
    category: 'AI & Data Intelligence',
    title: 'Generative AI',
    short: 'LLM-powered assistants, content and copilots built into your product.',
    tagline: 'Put generative AI to work inside real product workflows — safely.',
    description:
      'We build generative AI features on top of leading and open models — assistants, copilots, summarisation and retrieval-augmented apps — with grounding, guardrails and evaluation for production use.',
    features: [
      'LLM assistants & copilots',
      'Retrieval-augmented generation (RAG)',
      'Prompt engineering & evaluation',
      'Guardrails, safety & cost control',
    ],
    outcomes: [
      'Answer from your own data with grounded, cited responses',
      'Automate drafting, summarising and Q&A at scale',
      'Ship AI features with safety and cost under control',
    ],
    tech: ['LangChain', 'LlamaIndex', 'OpenAI API', 'Hugging Face Transformers', 'Ollama', 'Python'],
  },
  {
    slug: 'ai-agents',
    icon: 'robot',
    category: 'AI & Data Intelligence',
    title: 'AI Agents',
    short: 'Autonomous, tool-using agents that complete multi-step tasks.',
    tagline: 'Agents that reason, use tools and get real work done.',
    description:
      'We design AI agents that plan, call tools and APIs, and act across multi-step workflows — with the orchestration, memory and oversight needed to run them reliably.',
    features: [
      'Tool- and API-using agents',
      'Multi-step task orchestration',
      'Memory & state management',
      'Human-in-the-loop oversight',
    ],
    outcomes: [
      'Automate complex workflows end to end',
      'Connect AI to your existing tools and data',
      'Keep control with review and guardrails',
    ],
    tech: ['LangChain', 'LlamaIndex', 'OpenAI API', 'Python', 'FastAPI', 'Redis'],
  },
  {
    slug: 'machine-learning',
    icon: 'network',
    category: 'AI & Data Intelligence',
    title: 'Machine Learning',
    short: 'Custom models for prediction, classification and recommendation.',
    tagline: 'Models tuned to your data and your decisions.',
    description:
      'From data pipelines to deployed models, we build and operate machine learning for forecasting, classification, recommendation and anomaly detection — with evaluation and monitoring built in.',
    features: [
      'Predictive & forecasting models',
      'Classification & recommendation',
      'Feature engineering & pipelines',
      'Model deployment & monitoring',
    ],
    outcomes: [
      'Predict demand, churn or failures before they happen',
      'Turn raw data into reliable, repeatable predictions',
      'Keep models accurate with monitoring and retraining',
    ],
    tech: ['Python', 'scikit-learn', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy'],
  },
  {
    slug: 'computer-vision',
    icon: 'eye',
    category: 'AI & Data Intelligence',
    title: 'Computer Vision',
    short: 'Detection, recognition and inspection from images and video.',
    tagline: 'Give your product the ability to see and understand.',
    description:
      'We build computer-vision systems for detection, recognition, tracking and quality inspection — running in the cloud or on the edge for real-time performance.',
    features: [
      'Object detection & tracking',
      'Image classification & OCR',
      'Visual quality inspection',
      'Edge & on-device vision',
    ],
    outcomes: [
      'Automate visual inspection and reduce defects',
      'Extract structured data from images and video',
      'Run vision in real time, on-device where needed',
    ],
    tech: ['OpenCV', 'PyTorch', 'TensorFlow', 'Python', 'Raspberry Pi', 'NumPy'],
  },
  {
    slug: 'nlp',
    icon: 'message',
    category: 'AI & Data Intelligence',
    title: 'Natural Language Processing',
    short: 'Understand, classify and extract meaning from text and speech.',
    tagline: 'Turn unstructured language into structured value.',
    description:
      'We apply NLP to classify, extract and summarise text and speech — from document understanding and search to sentiment, entities and intent.',
    features: [
      'Text classification & sentiment',
      'Entity & information extraction',
      'Semantic search & summarisation',
      'Speech-to-text pipelines',
    ],
    outcomes: [
      'Automate document and ticket processing',
      'Make content searchable by meaning, not keywords',
      'Surface insight from text you already have',
    ],
    tech: ['Hugging Face Transformers', 'spaCy', 'Python', 'LangChain', 'Elasticsearch', 'PyTorch'],
  },

  // ===== IoT & Embedded Engineering =====
  {
    slug: 'internet-of-things',
    icon: 'iot',
    category: 'IoT & Embedded Engineering',
    title: 'IoT Solutions',
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
    slug: 'embedded-systems',
    icon: 'chip',
    category: 'IoT & Embedded Engineering',
    title: 'Embedded Systems',
    short: 'Custom embedded products from silicon selection to firmware.',
    tagline: 'Embedded products engineered from the ground up.',
    description:
      'We design complete embedded systems — MCU and architecture selection, schematic and firmware — balancing power, performance and cost for your product.',
    features: [
      'MCU & architecture selection',
      'Firmware & driver development',
      'Sensor & peripheral integration',
      'Power & performance optimisation',
    ],
    outcomes: [
      'Bring custom hardware products to life reliably',
      'Balance cost, power and performance from the start',
      'De-risk hardware with experienced embedded engineers',
    ],
    tech: ['STM32', 'ESP32', 'Nordic nRF52', 'Embedded C', 'FreeRTOS', 'PlatformIO'],
  },
  {
    slug: 'mcu-programming',
    icon: 'code',
    category: 'IoT & Embedded Engineering',
    title: 'Firmware Development',
    short: 'Bare-metal and firmware development for microcontroller platforms.',
    tagline: 'Lean, deterministic firmware that gets the most out of every microcontroller.',
    description:
      'Low-level firmware engineering across ARM Cortex, ESP32, STM32 and AVR — optimised for power, performance and deterministic behaviour.',
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
    tech: ['ARM Cortex-M', 'STM32', 'ESP32', 'AVR', 'Embedded C', 'PlatformIO'],
  },
  {
    slug: 'embedded-linux',
    icon: 'terminal',
    category: 'IoT & Embedded Engineering',
    title: 'Embedded Linux',
    short: 'Custom Linux for gateways, HMIs and capable edge devices.',
    tagline: 'Full Linux power, tailored to your device.',
    description:
      'We build custom embedded Linux images and board support for gateways, HMIs and edge computers — lean, secure and production-ready with Yocto or Buildroot.',
    features: [
      'Custom Linux distributions',
      'Board support & device drivers',
      'Bootloader & secure boot',
      'Edge applications & services',
    ],
    outcomes: [
      'Run rich applications on capable edge devices',
      'Ship lean, secure, reproducible Linux images',
      'Bridge hardware and cloud on one platform',
    ],
    tech: ['Embedded Linux', 'Yocto Project', 'Buildroot', 'U-Boot', 'Qt Framework', 'Raspberry Pi'],
  },
  {
    slug: 'rtos-development',
    icon: 'timer',
    category: 'IoT & Embedded Engineering',
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
    tech: ['FreeRTOS', 'Zephyr RTOS', 'ARM Cortex-M', 'Embedded C', 'ARM CMSIS', 'Segger'],
  },
  {
    slug: 'pcb-designing',
    icon: 'circuit',
    category: 'IoT & Embedded Engineering',
    title: 'PCB Design',
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
    tech: ['Altium', 'KiCad', 'Autodesk Eagle', 'LTspice', 'DFM', 'JLCPCB'],
  },
  {
    slug: 'hardware-development',
    icon: 'tools',
    category: 'IoT & Embedded Engineering',
    title: 'Hardware Development',
    short: 'Full electronics development from concept to working hardware.',
    tagline: 'Electronics engineered from concept to working hardware.',
    description:
      'We take electronic products from concept and architecture through schematic, layout, bring-up and validation — delivering working, manufacturable hardware.',
    features: [
      'Concept & architecture',
      'Schematic & PCB layout',
      'Component selection & sourcing',
      'Bring-up & validation',
    ],
    outcomes: [
      'Turn a product idea into working hardware',
      'Make confident component and architecture choices',
      'Reach a validated, manufacturable design',
    ],
    tech: ['Altium', 'KiCad', 'STM32', 'ESP32', 'LTspice', 'JLCPCB'],
  },

  // ===== Cloud & DevOps =====
  {
    slug: 'cloud-migration',
    icon: 'migrate',
    category: 'Cloud & DevOps',
    title: 'Cloud Migration',
    short: 'Move workloads to the cloud with minimal risk and downtime.',
    tagline: 'Migrate to the cloud without the disruption.',
    description:
      'We plan and execute cloud migrations — assessing workloads, re-architecting where it pays off, and moving you to AWS, Azure or GCP with minimal downtime.',
    features: [
      'Migration assessment & planning',
      'Re-architecture & re-platforming',
      'Data & workload migration',
      'Cost & security optimisation',
    ],
    outcomes: [
      'Move to the cloud with minimal downtime',
      'Cut infrastructure cost and overhead',
      'Modernise legacy workloads safely',
    ],
    tech: ['AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'Kubernetes'],
  },
  {
    slug: 'cloud-native',
    icon: 'cloud',
    category: 'Cloud & DevOps',
    title: 'Cloud-Native Applications',
    short: 'Scalable, resilient apps built for the cloud from day one.',
    tagline: 'Applications designed to scale and heal in the cloud.',
    description:
      'We build cloud-native applications with containers, microservices and managed services — elastic, resilient and cost-efficient from the first deploy.',
    features: [
      'Microservices architecture',
      'Containers & orchestration',
      'Managed & serverless services',
      'Autoscaling & resilience',
    ],
    outcomes: [
      'Scale smoothly with demand',
      'Stay resilient with self-healing infrastructure',
      'Pay for what you use with elastic design',
    ],
    tech: ['Kubernetes', 'Docker', 'AWS', 'Nginx', 'Terraform', 'Node.js'],
  },
  {
    slug: 'managed-cloud',
    icon: 'shield',
    category: 'Cloud & DevOps',
    title: 'Managed Cloud Services',
    short: 'We run and optimise your cloud so your team can focus on product.',
    tagline: 'Your cloud, expertly operated and optimised.',
    description:
      'We operate your cloud environment day to day — monitoring, security, backups and cost optimisation — so your team can focus on building product, not plumbing.',
    features: [
      'Monitoring & incident response',
      'Security & patching',
      'Backups & disaster recovery',
      'Cost optimisation',
    ],
    outcomes: [
      'Keep systems reliable without an ops team',
      'Stay secure and patched continuously',
      'Control cloud spend with ongoing optimisation',
    ],
    tech: ['AWS', 'Azure', 'GCP', 'Grafana', 'Prometheus', 'Terraform'],
  },
  {
    slug: 'kubernetes',
    icon: 'cube',
    category: 'Cloud & DevOps',
    title: 'Kubernetes',
    short: 'Production-grade container orchestration and platform engineering.',
    tagline: 'Run containers reliably at any scale.',
    description:
      'We design, deploy and operate Kubernetes platforms — autoscaling, zero-downtime deploys and self-healing workloads — on managed or self-hosted clusters.',
    features: [
      'Cluster design & setup',
      'Zero-downtime deployments',
      'Autoscaling & self-healing',
      'Observability & security',
    ],
    outcomes: [
      'Deploy without downtime',
      'Scale workloads automatically',
      'Operate containers with confidence',
    ],
    tech: ['Kubernetes', 'Docker', 'Terraform', 'Nginx', 'Prometheus', 'AWS'],
  },
  {
    slug: 'devops-cloud',
    icon: 'infinity',
    category: 'Cloud & DevOps',
    title: 'DevOps',
    short: 'CI/CD, automation and observability for resilient delivery.',
    tagline: 'Ship faster with automated, observable delivery.',
    description:
      'We build CI/CD pipelines, automate infrastructure and add observability so your teams ship faster and more reliably on AWS, Azure or GCP.',
    features: [
      'CI/CD Pipeline Automation',
      'Infrastructure as Code',
      'Containerization',
      'Monitoring & Observability',
    ],
    outcomes: [
      'Release confidently with repeatable pipelines',
      'Cut toil with automated infrastructure',
      'Catch issues early with full-stack monitoring',
    ],
    tech: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Ansible', 'Grafana'],
  },
  {
    slug: 'infrastructure-automation',
    icon: 'server',
    category: 'Cloud & DevOps',
    title: 'Infrastructure Automation',
    short: 'Versioned, reproducible infrastructure as code.',
    tagline: 'Infrastructure that is versioned, reviewable and repeatable.',
    description:
      'We codify your infrastructure with Terraform and Ansible — provisioning, configuration and environments defined as code, reviewable and reproducible every time.',
    features: [
      'Infrastructure as code',
      'Automated provisioning',
      'Configuration management',
      'Repeatable environments',
    ],
    outcomes: [
      'Spin up environments in minutes, not days',
      'Eliminate configuration drift',
      'Review infrastructure like application code',
    ],
    tech: ['Terraform', 'Ansible', 'Docker', 'AWS', 'GitHub Actions', 'Linux Server Administration'],
  },

  // ===== Software Engineering =====
  {
    slug: 'web-app',
    icon: 'globe',
    category: 'Software Engineering',
    title: 'Web Applications',
    short: 'Scalable web applications built on modern stacks like MERN.',
    tagline: 'Scalable web platforms — from MVP to production — on the modern stack.',
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
  {
    slug: 'mobile-app',
    icon: 'mobile',
    category: 'Software Engineering',
    title: 'Mobile Applications',
    short: 'Native and cross-platform mobile apps with great UX.',
    tagline: 'Fast, usable mobile apps built around real customer journeys.',
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
      'Support smooth, offline-capable user experiences',
      'Go live faster with handled App Store / Play submissions',
    ],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
  },
  {
    slug: 'saas-platforms',
    icon: 'layers',
    category: 'Software Engineering',
    title: 'SaaS Platforms',
    short: 'Multi-tenant SaaS products with billing, auth and analytics.',
    tagline: 'Launch and scale a SaaS product end to end.',
    description:
      'We build multi-tenant SaaS platforms — authentication, subscriptions, role-based access and analytics — architected to onboard customers and scale revenue.',
    features: [
      'Multi-tenant architecture',
      'Auth & role-based access',
      'Subscriptions & billing',
      'Usage analytics & admin',
    ],
    outcomes: [
      'Launch a SaaS product customers can sign up to',
      'Onboard tenants securely and at scale',
      'Monetise with subscriptions and usage billing',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'Redis', 'AWS'],
  },
  {
    slug: 'enterprise-applications',
    icon: 'building',
    category: 'Software Engineering',
    title: 'Enterprise Applications',
    short: 'Secure, integrated systems for complex business operations.',
    tagline: 'Robust software for serious business operations.',
    description:
      'We build secure, integrated enterprise applications — workflows, role-based access, reporting and integrations — engineered for reliability and compliance.',
    features: [
      'Complex business workflows',
      'Role-based access & audit',
      'System integrations',
      'Reporting & dashboards',
    ],
    outcomes: [
      'Digitise and streamline core operations',
      'Integrate the systems your business relies on',
      'Meet security and compliance requirements',
    ],
    tech: ['React', 'Node.js', 'Django', 'PostgreSQL', 'Docker', 'Azure'],
  },
  {
    slug: 'apis-integrations',
    icon: 'braces',
    category: 'Software Engineering',
    title: 'APIs & Integrations',
    short: 'Robust APIs and integrations that connect your systems.',
    tagline: 'Connect your tools, data and partners reliably.',
    description:
      'We design and build REST and GraphQL APIs and integrations — connecting your products to third-party services, payment, and internal systems with reliability and security.',
    features: [
      'REST & GraphQL APIs',
      'Third-party integrations',
      'Webhooks & event pipelines',
      'Auth, rate limiting & docs',
    ],
    outcomes: [
      'Connect the systems your business depends on',
      'Expose clean, documented APIs to partners',
      'Automate data flow between tools',
    ],
    tech: ['Node.js', 'Express', 'GraphQL', 'FastAPI', 'Kafka', 'Redis'],
  },
  {
    slug: 'workflow-automation',
    icon: 'workflow',
    category: 'Software Engineering',
    title: 'Workflow Automation',
    short: 'Automate manual processes and connect your business tools.',
    tagline: 'Replace manual busywork with reliable automation.',
    description:
      'We automate repetitive business processes — data movement, approvals, notifications and integrations — so your team spends time on work that matters.',
    features: [
      'Process automation',
      'System-to-system data flow',
      'Scheduled & event-driven jobs',
      'Notifications & approvals',
    ],
    outcomes: [
      'Eliminate repetitive manual work',
      'Reduce errors with consistent automation',
      'Free your team for higher-value work',
    ],
    tech: ['Node.js', 'Python', 'FastAPI', 'Kafka', 'Apache Airflow', 'Redis'],
  },

  // ===== Product Engineering =====
  {
    slug: 'electronic-product-design',
    icon: 'blueprint',
    category: 'Product Engineering',
    title: 'Electronic Product Design',
    short: 'End-to-end electronic product design from concept to production.',
    tagline: 'From product concept to a design ready for the factory.',
    description:
      'We take electronic products through the full design journey — requirements, architecture, electronics, firmware and enclosure considerations — to a production-ready design.',
    features: [
      'Requirements & architecture',
      'Electronics & firmware design',
      'Mechanical & enclosure input',
      'Design for cost & manufacture',
    ],
    outcomes: [
      'Turn a product concept into a buildable design',
      'Align electronics, firmware and mechanics early',
      'Reach production with fewer surprises',
    ],
    tech: ['Altium', 'KiCad', 'STM32', 'Embedded C', 'LTspice', 'JLCPCB'],
  },
  {
    slug: 'prototype-development',
    icon: 'rocket',
    category: 'Product Engineering',
    title: 'Prototype Development',
    short: 'Working prototypes to prove out your product quickly.',
    tagline: 'Get a working prototype in hand, fast.',
    description:
      'We build functional prototypes — hardware and firmware — so you can validate your concept, test with users and de-risk the product before committing to production.',
    features: [
      'Rapid hardware prototyping',
      'Proof-of-concept firmware',
      'Iterative design & test',
      'Bill-of-materials guidance',
    ],
    outcomes: [
      'Validate your concept with real hardware',
      'De-risk the product before production',
      'Iterate quickly on a working prototype',
    ],
    tech: ['ESP32', 'STM32', 'Arduino', 'Raspberry Pi', 'KiCad', 'PlatformIO'],
  },
  {
    slug: 'testing-validation',
    icon: 'flask',
    category: 'Product Engineering',
    title: 'Testing & Validation',
    short: 'Verify hardware and firmware meet spec before they ship.',
    tagline: 'Prove your product works — before it reaches customers.',
    description:
      'We design and run test and validation for hardware and firmware — functional, environmental and reliability testing — so products meet spec and hold up in the field.',
    features: [
      'Functional & boundary testing',
      'Environmental & reliability tests',
      'Test fixtures & automation',
      'Firmware validation',
    ],
    outcomes: [
      'Catch defects before customers do',
      'Prove products meet their specification',
      'Improve field reliability and reduce returns',
    ],
    tech: ['Oscilloscope & Logic Analyzer', 'JTAG Debugging', 'Python', 'GDB', 'Embedded C', 'Valgrind'],
  },
  {
    slug: 'emi-emc-support',
    icon: 'wave',
    category: 'Product Engineering',
    title: 'EMI/EMC Support',
    short: 'Design and debugging support to pass EMI/EMC compliance.',
    tagline: 'Pass compliance without endless re-spins.',
    description:
      'We help your hardware meet EMI/EMC requirements — design review, layout guidance and pre-compliance debugging — so products pass certification with fewer iterations.',
    features: [
      'EMC-aware design review',
      'PCB layout & grounding guidance',
      'Pre-compliance debugging',
      'Mitigation & filtering',
    ],
    outcomes: [
      'Reduce costly certification re-spins',
      'Find and fix emissions issues early',
      'Reach compliance with confidence',
    ],
    tech: ['Altium', 'KiCad', 'LTspice', 'Oscilloscope & Logic Analyzer', 'SPICE', 'DFM'],
  },
  {
    slug: 'manufacturing-support',
    icon: 'factory',
    category: 'Product Engineering',
    title: 'Manufacturing Support',
    short: 'Bridge the gap from prototype to volume production.',
    tagline: 'From working prototype to repeatable production.',
    description:
      'We support the transition to manufacturing — DFM, production files, test setup and supplier coordination — so your product builds reliably at volume.',
    features: [
      'Design for manufacture (DFM)',
      'Production & assembly files',
      'Production test setup',
      'Supplier & fab coordination',
    ],
    outcomes: [
      'Move from prototype to volume smoothly',
      'Improve yield and reduce build cost',
      'Coordinate fab and assembly with confidence',
    ],
    tech: ['DFM', 'JLCPCB', 'Altium', 'KiCad', 'Oscilloscope & Logic Analyzer', 'JTAG Debugging'],
  },
  {
    slug: 'product-consulting',
    icon: 'target',
    category: 'Product Engineering',
    title: 'Product Consulting',
    short: 'Technical guidance to shape and de-risk your product.',
    tagline: 'Expert guidance from idea to roadmap.',
    description:
      'We provide technical product consulting — architecture, technology selection, feasibility and roadmap — to help you make confident decisions and de-risk your build.',
    features: [
      'Technical feasibility',
      'Architecture & tech selection',
      'Roadmap & estimation',
      'Risk & cost assessment',
    ],
    outcomes: [
      'Make confident technical decisions early',
      'De-risk your product before you build',
      'Get a clear, costed roadmap to launch',
    ],
    tech: ['Python', 'React', 'AWS', 'STM32', 'Docker', 'PostgreSQL'],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)

// Ordered list of service categories (for grouped layouts).
export const serviceCategories = [...new Set(services.map((s) => s.category))]
