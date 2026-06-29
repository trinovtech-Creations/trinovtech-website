// Technologies we work with — powers the home "Technologies" marquee and the
// /technologies/:slug detail pages. `mono` is the monogram shown in the tile.
export const technologies = [
  {
    slug: 'react', name: 'React', mono: 'Re', category: 'Frontend',
    tagline: 'Component-driven user interfaces that stay fast as they scale.',
    description:
      'React is our default for building interactive web UIs. Its component model, hooks and vast ecosystem let us ship complex, stateful interfaces that stay maintainable.',
    highlights: ['Reusable component architecture', 'Hooks & modern state management', 'SSR/SSG with Next.js', 'Rich ecosystem & tooling'],
    related: ['web-app', 'mobile-app'],
  },
  {
    slug: 'nextjs', name: 'Next.js', mono: 'N', category: 'Frontend',
    tagline: 'The React framework for production — SSR, SSG and edge rendering.',
    description:
      'We reach for Next.js when SEO, performance and developer velocity all matter. Server rendering, file-based routing and image optimisation come built in.',
    highlights: ['Server-side & static rendering', 'File-based routing', 'API routes & middleware', 'Best-in-class Core Web Vitals'],
    related: ['web-app'],
  },
  {
    slug: 'nodejs', name: 'Node.js', mono: 'No', category: 'Backend',
    tagline: 'Non-blocking JavaScript runtime for fast, scalable services.',
    description:
      'Node.js powers our backends and tooling — one language across the stack, an event-driven runtime, and the npm ecosystem for anything you need.',
    highlights: ['Event-driven, non-blocking I/O', 'Shared language across the stack', 'Huge npm ecosystem', 'Great for real-time & APIs'],
    related: ['web-app', 'devops-cloud'],
  },
  {
    slug: 'express', name: 'Express', mono: 'Ex', category: 'Backend',
    tagline: 'Minimal, unopinionated web framework for Node.js APIs.',
    description:
      'Express gives us a lean, flexible foundation for REST APIs and services — middleware where we want it, and nothing we don’t.',
    highlights: ['Lightweight REST APIs', 'Composable middleware', 'Battle-tested & stable', 'Pairs with the MERN stack'],
    related: ['web-app'],
  },
  {
    slug: 'typescript', name: 'TypeScript', mono: 'Ts', category: 'Language',
    tagline: 'Typed JavaScript that catches bugs before they ship.',
    description:
      'We write TypeScript across frontend and backend for safer refactors, better tooling and self-documenting code — confidence that scales with the team.',
    highlights: ['Static type safety', 'First-class editor tooling', 'Safer large-scale refactors', 'Shared types front to back'],
    related: ['web-app', 'mobile-app'],
  },
  {
    slug: 'python', name: 'Python', mono: 'Py', category: 'Language',
    tagline: 'The language of data, AI and rapid automation.',
    description:
      'Python is our go-to for machine learning, data pipelines and automation — readable, batteries-included, and backed by an unmatched scientific ecosystem.',
    highlights: ['ML & data science workflows', 'Rapid scripting & automation', 'Rich scientific libraries', 'Clean, readable codebases'],
    related: ['artificial-intelligence', 'devops-cloud'],
  },
  {
    slug: 'graphql', name: 'GraphQL', mono: 'GQ', category: 'API',
    tagline: 'Ask for exactly the data you need — nothing more.',
    description:
      'GraphQL lets clients fetch precisely the data they need in a single request, which means fewer round-trips and faster product iteration.',
    highlights: ['Typed, self-documenting schema', 'No over- or under-fetching', 'Single endpoint, many clients', 'Great DX with codegen'],
    related: ['web-app'],
  },
  {
    slug: 'mongodb', name: 'MongoDB', mono: 'M', category: 'Database',
    tagline: 'Flexible document database for fast-moving products.',
    description:
      'MongoDB’s document model maps naturally to application objects, letting us iterate quickly while scaling horizontally as data grows.',
    highlights: ['Schema-flexible documents', 'Horizontal scaling & sharding', 'Powerful aggregation pipeline', 'Core of the MERN stack'],
    related: ['web-app'],
  },
  {
    slug: 'postgresql', name: 'PostgreSQL', mono: 'Pg', category: 'Database',
    tagline: 'The world’s most advanced open-source relational database.',
    description:
      'When data integrity and complex querying matter, we choose PostgreSQL — rock-solid ACID guarantees with modern JSON and extension support.',
    highlights: ['Strong ACID guarantees', 'Advanced SQL & indexing', 'JSONB for hybrid models', 'Extensible (PostGIS, etc.)'],
    related: ['web-app', 'devops-cloud'],
  },
  {
    slug: 'redis', name: 'Redis', mono: 'Rd', category: 'Database',
    tagline: 'In-memory data store for caching, queues and real-time.',
    description:
      'Redis adds a blazing-fast in-memory layer for caching, sessions, rate-limiting and pub/sub — the speed boost behind responsive apps.',
    highlights: ['Sub-millisecond caching', 'Pub/sub & streams', 'Queues & rate limiting', 'Session & token storage'],
    related: ['web-app', 'devops-cloud'],
  },
  {
    slug: 'aws', name: 'AWS', mono: 'aws', category: 'Cloud',
    tagline: 'Cloud infrastructure that scales from MVP to enterprise.',
    description:
      'We design, deploy and operate on AWS — compute, storage, networking and managed services — with cost and reliability engineered in from day one.',
    highlights: ['Compute, storage & networking', 'Managed databases & queues', 'IAM & security best practice', 'Cost-optimised architecture'],
    related: ['devops-cloud', 'internet-of-things'],
  },
  {
    slug: 'docker', name: 'Docker', mono: 'Dk', category: 'DevOps',
    tagline: 'Package once, run anywhere — consistent environments.',
    description:
      'Docker containers give us reproducible environments from a developer laptop to production, eliminating “works on my machine” for good.',
    highlights: ['Reproducible environments', 'Lightweight containers', 'Fast CI/CD builds', 'Foundation for Kubernetes'],
    related: ['devops-cloud'],
  },
  {
    slug: 'kubernetes', name: 'Kubernetes', mono: 'K8', category: 'DevOps',
    tagline: 'Production-grade orchestration for containerised workloads.',
    description:
      'Kubernetes runs and heals our containerised services at scale — self-healing, autoscaling and zero-downtime rollouts as standard.',
    highlights: ['Self-healing workloads', 'Horizontal autoscaling', 'Zero-downtime deploys', 'Declarative infrastructure'],
    related: ['devops-cloud'],
  },
  {
    slug: 'tensorflow', name: 'TensorFlow', mono: 'Tf', category: 'AI / ML',
    tagline: 'End-to-end platform for machine learning at scale.',
    description:
      'We build, train and deploy models with TensorFlow — from research notebooks to production inference on cloud, edge and mobile.',
    highlights: ['Deep learning model training', 'Production inference serving', 'Edge & mobile deployment', 'Computer vision & NLP'],
    related: ['artificial-intelligence', 'internet-of-things'],
  },
  {
    slug: 'c-cpp', name: 'C / C++', mono: 'C', category: 'Embedded',
    tagline: 'Close-to-the-metal performance for embedded and systems code.',
    description:
      'C and C++ are the backbone of our firmware and performance-critical systems — deterministic, efficient and in full control of the hardware.',
    highlights: ['Bare-metal firmware', 'Deterministic performance', 'Fine-grained memory control', 'Driver & peripheral code'],
    related: ['mcu-programming', 'rtos-development'],
  },
  {
    slug: 'freertos', name: 'FreeRTOS', mono: 'Fr', category: 'Embedded',
    tagline: 'Real-time operating system for microcontrollers.',
    description:
      'FreeRTOS gives our embedded products deterministic, real-time multitasking on resource-constrained microcontrollers — proven across millions of devices.',
    highlights: ['Real-time task scheduling', 'Tiny memory footprint', 'Inter-task communication', 'Broad MCU support'],
    related: ['rtos-development', 'mcu-programming'],
  },
  {
    slug: 'stm32', name: 'STM32', mono: '32', category: 'Embedded',
    tagline: 'Versatile ARM Cortex-M microcontrollers for any product.',
    description:
      'We build on the STM32 family across the power/performance spectrum — from coin-cell sensors to rich real-time controllers.',
    highlights: ['ARM Cortex-M cores', 'Low-power to high-performance', 'Rich peripheral set', 'From prototype to production'],
    related: ['mcu-programming', 'pcb-designing'],
  },
  {
    slug: 'flutter', name: 'Flutter', mono: 'Fl', category: 'Mobile',
    tagline: 'One codebase, beautiful native apps on every platform.',
    description:
      'Flutter lets us ship pixel-perfect iOS and Android apps from a single codebase, with native performance and a fast, expressive UI toolkit.',
    highlights: ['Single cross-platform codebase', 'Native performance', 'Expressive, custom UI', 'Fast hot-reload development'],
    related: ['mobile-app'],
  },

  // ===== AI / ML =====
  {
    slug: 'pytorch', name: 'PyTorch', mono: 'Pt', category: 'AI / ML',
    tagline: 'Flexible deep-learning framework loved by researchers and shippers alike.',
    description:
      'We prototype and productionise neural networks in PyTorch — its dynamic graph and clean API make experimentation fast and deployment predictable.',
    highlights: ['Dynamic computation graphs', 'Research-to-production workflows', 'GPU-accelerated training', 'Computer vision & NLP models'],
    related: ['artificial-intelligence'],
  },
  {
    slug: 'langchain', name: 'LangChain', mono: 'Lc', category: 'AI / ML',
    tagline: 'Framework for building applications on top of large language models.',
    description:
      'LangChain lets us compose LLMs with tools, memory and data sources to build reliable agents, chatbots and retrieval-augmented apps.',
    highlights: ['LLM orchestration & chains', 'Retrieval-augmented generation (RAG)', 'Tool-using AI agents', 'Vector store integrations'],
    related: ['artificial-intelligence'],
  },
  {
    slug: 'openai-llms', name: 'OpenAI / LLMs', mono: 'AI', category: 'AI / ML',
    tagline: 'State-of-the-art language models powering AI features that feel magical.',
    description:
      'We integrate GPT-class and open LLMs into products — assistants, summarisation, classification and generation — with guardrails for real-world use.',
    highlights: ['GPT & open-model integration', 'Prompt engineering & evaluation', 'Function calling & tool use', 'Safety & cost controls'],
    related: ['artificial-intelligence'],
  },
  {
    slug: 'scikit-learn', name: 'scikit-learn', mono: 'Sk', category: 'AI / ML',
    tagline: 'The workhorse library for classical machine learning in Python.',
    description:
      'For tabular data and classic ML, scikit-learn gives us a consistent, battle-tested toolkit for modelling, evaluation and pipelines.',
    highlights: ['Classification & regression', 'Feature engineering pipelines', 'Model selection & metrics', 'Fast tabular-data modelling'],
    related: ['artificial-intelligence'],
  },

  // ===== Cloud / DevOps =====
  {
    slug: 'azure', name: 'Azure', mono: 'Az', category: 'Cloud',
    tagline: 'Microsoft’s enterprise cloud for compute, data and AI.',
    description:
      'We architect and operate on Microsoft Azure — from App Services and AKS to managed databases — with enterprise security and compliance in mind.',
    highlights: ['App Services & AKS', 'Managed databases', 'Entra ID & enterprise security', 'Hybrid-cloud ready'],
    related: ['devops-cloud'],
  },
  {
    slug: 'gcp', name: 'GCP', mono: 'G', category: 'Cloud',
    tagline: 'Google Cloud — data, AI and planet-scale infrastructure.',
    description:
      'Google Cloud Platform powers our data-heavy and AI workloads, with strong managed services for analytics, Kubernetes and machine learning.',
    highlights: ['GKE & serverless compute', 'BigQuery analytics', 'Vertex AI / ML', 'Global networking'],
    related: ['devops-cloud'],
  },
  {
    slug: 'terraform', name: 'Terraform', mono: 'Tf', category: 'DevOps',
    tagline: 'Infrastructure as code across every cloud.',
    description:
      'We define infrastructure declaratively with Terraform, so environments are versioned, reviewable and reproducible across AWS, Azure and GCP.',
    highlights: ['Declarative infrastructure', 'Multi-cloud provisioning', 'Versioned & reviewable state', 'Repeatable environments'],
    related: ['devops-cloud'],
  },
  {
    slug: 'grafana', name: 'Grafana', mono: 'Gf', category: 'DevOps',
    tagline: 'Beautiful dashboards for metrics, logs and telemetry.',
    description:
      'We visualise system and device telemetry in Grafana — real-time dashboards and alerts that turn raw metrics into operational insight.',
    highlights: ['Real-time dashboards', 'Multi-source data', 'Alerting & thresholds', 'Telemetry visualisation'],
    related: ['internet-of-things', 'devops-cloud'],
  },

  // ===== IoT connectivity =====
  {
    slug: 'mqtt', name: 'MQTT', mono: 'MQ', category: 'IoT',
    tagline: 'Lightweight messaging protocol built for IoT.',
    description:
      'MQTT’s tiny footprint and publish/subscribe model make it our default for reliable device-to-cloud messaging over constrained networks.',
    highlights: ['Low-bandwidth pub/sub', 'Reliable QoS delivery', 'Scales to many devices', 'Works on flaky networks'],
    related: ['internet-of-things'],
  },
  {
    slug: 'aws-iot', name: 'AWS IoT', mono: 'Ai', category: 'IoT',
    tagline: 'Managed cloud platform for connecting and managing devices.',
    description:
      'AWS IoT Core lets us securely connect, manage and ingest data from fleets of devices, with rules and pipelines straight into the AWS ecosystem.',
    highlights: ['Secure device connectivity', 'Fleet management at scale', 'Rules engine & data routing', 'Deep AWS integration'],
    related: ['internet-of-things'],
  },
  {
    slug: 'azure-iot-hub', name: 'Azure IoT Hub', mono: 'Ah', category: 'IoT',
    tagline: 'Cloud gateway for bidirectional IoT device communication.',
    description:
      'Azure IoT Hub gives us secure, two-way communication with devices, plus provisioning and monitoring tied into the Azure platform.',
    highlights: ['Bidirectional messaging', 'Per-device authentication', 'Device provisioning', 'Azure ecosystem integration'],
    related: ['internet-of-things'],
  },

  // ===== Embedded =====
  {
    slug: 'esp32', name: 'ESP32', mono: 'E', category: 'Embedded',
    tagline: 'Wi-Fi + Bluetooth SoC that powers connected products.',
    description:
      'The ESP32 packs dual-core compute, Wi-Fi and Bluetooth into a low-cost module — our go-to for connected sensors and gateways.',
    highlights: ['Integrated Wi-Fi & Bluetooth', 'Dual-core processing', 'Rich peripheral set', 'Low-cost connectivity'],
    related: ['internet-of-things', 'mcu-programming'],
  },
  {
    slug: 'arm-cortex-m', name: 'ARM Cortex-M', mono: 'Cm', category: 'Embedded',
    tagline: 'The microcontroller core behind modern embedded products.',
    description:
      'ARM Cortex-M cores power most of the MCUs we build on — a consistent, efficient architecture from tiny sensors to real-time controllers.',
    highlights: ['Industry-standard MCU core', 'Energy-efficient performance', 'Deterministic interrupts', 'Broad vendor support'],
    related: ['mcu-programming', 'rtos-development'],
  },
  {
    slug: 'avr', name: 'AVR', mono: 'Av', category: 'Embedded',
    tagline: 'Simple, robust 8-bit microcontrollers.',
    description:
      'AVR microcontrollers remain a dependable choice for simple, low-cost embedded control where robustness beats raw horsepower.',
    highlights: ['Simple 8-bit architecture', 'Low-cost & robust', 'Great for simple control', 'Huge community support'],
    related: ['mcu-programming'],
  },
  {
    slug: 'platformio', name: 'PlatformIO', mono: 'Pi', category: 'Embedded',
    tagline: 'Modern build system and IDE for embedded development.',
    description:
      'PlatformIO streamlines our firmware workflow — dependency management, multi-board builds and CI for embedded, all in one toolchain.',
    highlights: ['Unified embedded toolchain', 'Library & dependency manager', 'Multi-board builds', 'CI-friendly firmware'],
    related: ['mcu-programming'],
  },
  {
    slug: 'zephyr', name: 'Zephyr', mono: 'Ze', category: 'Embedded',
    tagline: 'Scalable, secure real-time OS for connected devices.',
    description:
      'Zephyr is our RTOS of choice for richer embedded systems — a modular, secure kernel with networking and broad hardware support.',
    highlights: ['Modular real-time kernel', 'Built-in networking stacks', 'Strong security focus', 'Wide board support'],
    related: ['rtos-development'],
  },
  {
    slug: 'cmsis', name: 'CMSIS', mono: 'Cs', category: 'Embedded',
    tagline: 'Standardised software interface for Cortex-M devices.',
    description:
      'CMSIS gives us a vendor-neutral abstraction over Cortex-M cores, keeping firmware portable and tooling consistent across silicon vendors.',
    highlights: ['Vendor-neutral MCU APIs', 'Portable firmware', 'DSP & NN libraries', 'Consistent tooling'],
    related: ['rtos-development', 'mcu-programming'],
  },
  {
    slug: 'segger', name: 'Segger', mono: 'Sg', category: 'Embedded',
    tagline: 'Professional debug probes and embedded tooling.',
    description:
      'We rely on SEGGER J-Link and tooling for fast, reliable flashing and debugging — essential for serious firmware bring-up and production.',
    highlights: ['J-Link debug & flash', 'Real-time tracing (RTT)', 'Reliable production programming', 'Broad device support'],
    related: ['rtos-development'],
  },

  // ===== Hardware / PCB =====
  {
    slug: 'altium', name: 'Altium', mono: 'Al', category: 'Hardware',
    tagline: 'Professional PCB design from schematic to fabrication.',
    description:
      'Altium Designer is our environment for complex, multi-layer boards — unified schematic, layout and manufacturing output in one tool.',
    highlights: ['Multi-layer PCB layout', 'Unified schematic & layout', 'Signal & power integrity', 'Manufacturing outputs'],
    related: ['pcb-designing'],
  },
  {
    slug: 'kicad', name: 'KiCad', mono: 'Ki', category: 'Hardware',
    tagline: 'Powerful open-source PCB design suite.',
    description:
      'KiCad gives us a capable, open-source path from schematic to gerbers — ideal for open hardware and cost-sensitive projects.',
    highlights: ['Open-source EDA', 'Schematic to gerbers', '3D board preview', 'No licensing lock-in'],
    related: ['pcb-designing'],
  },
  {
    slug: 'eagle', name: 'Eagle', mono: 'Ea', category: 'Hardware',
    tagline: 'Accessible PCB design for compact boards.',
    description:
      'Eagle is a practical choice for smaller boards and rapid prototypes, with a large library ecosystem and tight Fusion integration.',
    highlights: ['Schematic & layout', 'Large parts libraries', 'Great for compact boards', 'Rapid prototyping'],
    related: ['pcb-designing'],
  },
  {
    slug: 'spice', name: 'SPICE', mono: 'Sp', category: 'Hardware',
    tagline: 'Circuit simulation before you ever cut copper.',
    description:
      'We use SPICE simulation to validate analog and power circuits up front — catching issues in software before committing to hardware.',
    highlights: ['Analog circuit simulation', 'Power & signal validation', 'Pre-fabrication checks', 'Fewer board re-spins'],
    related: ['pcb-designing'],
  },
  {
    slug: 'dfm', name: 'DFM', mono: 'DF', category: 'Hardware',
    tagline: 'Design-for-manufacturing checks that keep boards buildable.',
    description:
      'We bake design-for-manufacturing review into our hardware process so your boards are economical, yield-friendly and ready for the fab.',
    highlights: ['Manufacturability review', 'Yield & cost optimisation', 'Fab & assembly constraints', 'Fewer production surprises'],
    related: ['pcb-designing'],
  },
  {
    slug: 'jlcpcb', name: 'JLCPCB', mono: 'JL', category: 'Hardware',
    tagline: 'Fast, affordable PCB fabrication and assembly.',
    description:
      'For quick-turn prototypes and small runs we work with JLCPCB — affordable fabrication and assembly to get boards in hand fast.',
    highlights: ['Quick-turn prototyping', 'Affordable small runs', 'PCB + assembly', 'Fast lead times'],
    related: ['pcb-designing'],
  },

  // ===== Mobile =====
  {
    slug: 'react-native', name: 'React Native', mono: 'RN', category: 'Mobile',
    tagline: 'Native mobile apps from a single React codebase.',
    description:
      'React Native lets us ship genuinely native iOS and Android apps from one React codebase — fast iteration with native performance where it counts.',
    highlights: ['Single cross-platform codebase', 'Truly native components', 'Reuse of React skills', 'Large ecosystem'],
    related: ['mobile-app'],
  },
  {
    slug: 'swift', name: 'Swift', mono: 'Sw', category: 'Mobile',
    tagline: 'Apple’s modern language for fast, safe iOS apps.',
    description:
      'When apps demand the best of iOS, we build natively in Swift — safe, expressive and fully tuned to Apple’s platforms.',
    highlights: ['Native iOS performance', 'Safe, modern language', 'Full platform access', 'SwiftUI interfaces'],
    related: ['mobile-app'],
  },
  {
    slug: 'kotlin', name: 'Kotlin', mono: 'Kt', category: 'Mobile',
    tagline: 'Concise, modern language for native Android.',
    description:
      'Kotlin is our default for native Android — concise, null-safe and fully supported by Google, with Jetpack Compose for modern UIs.',
    highlights: ['Native Android development', 'Null-safety by design', 'Jetpack Compose UI', 'Google-first support'],
    related: ['mobile-app'],
  },
  {
    slug: 'firebase', name: 'Firebase', mono: 'Fb', category: 'Backend',
    tagline: 'Backend-as-a-service to ship apps faster.',
    description:
      'Firebase gives apps an instant backend — auth, realtime data, storage and notifications — so we focus on product, not plumbing.',
    highlights: ['Auth & realtime database', 'Cloud functions & storage', 'Push notifications', 'Analytics out of the box'],
    related: ['mobile-app'],
  },
  {
    slug: 'expo', name: 'Expo', mono: 'Ex', category: 'Mobile',
    tagline: 'The fastest way to build and ship React Native apps.',
    description:
      'Expo accelerates React Native delivery with managed builds, over-the-air updates and a rich SDK — from prototype to store in record time.',
    highlights: ['Managed build & deploy', 'Over-the-air updates', 'Rich device SDK', 'Fast iteration'],
    related: ['mobile-app'],
  },

  // ===== Frontend tooling =====
  {
    slug: 'vite', name: 'Vite', mono: 'Vt', category: 'Frontend',
    tagline: 'Next-generation frontend build tooling — instant and lean.',
    description:
      'Vite powers our frontend builds with instant dev-server startup and lightning-fast hot reload, plus optimised production bundles.',
    highlights: ['Instant dev server', 'Lightning-fast HMR', 'Optimised production builds', 'Modern, minimal config'],
    related: ['web-app'],
  },
]

// Curated subset shown in the home "Technologies" marquee — keeps the showcase
// clean while every technology still has its own page (reachable from service
// tech chips and each tech page's "other technologies" list).
const FEATURED = [
  'react', 'nextjs', 'nodejs', 'express', 'typescript', 'python', 'graphql',
  'mongodb', 'postgresql', 'redis', 'aws', 'docker', 'kubernetes', 'tensorflow',
  'c-cpp', 'freertos', 'stm32', 'flutter',
]
export const featuredTechnologies = technologies.filter((t) => FEATURED.includes(t.slug))

export const getTechnology = (slug) => technologies.find((t) => t.slug === slug)

// Match a free-text tech tag (e.g. a service's "tech" entry) to a technology
// page, case-insensitively. Returns the technology object or undefined.
export const getTechnologyByName = (name) => {
  const n = String(name).trim().toLowerCase()
  return technologies.find((t) => t.name.toLowerCase() === n)
}
