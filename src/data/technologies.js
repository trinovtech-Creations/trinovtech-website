// Technologies we work with — powers the home "Technologies" marquee and the
// /technologies/:slug detail pages. `mono` is the monogram shown in the tile.
// Grouped by `category`; every entry gets its own detail page.
export const technologies = [
  // ===== Artificial Intelligence & Machine Learning =====
  {
    slug: 'python', name: 'Python', mono: 'Py', category: 'Artificial Intelligence & Machine Learning',
    tagline: 'The language of data, AI and rapid automation.',
    description:
      'Python is our go-to for machine learning, data pipelines and automation — readable, batteries-included, and backed by an unmatched scientific ecosystem.',
    highlights: ['ML & data science workflows', 'Rapid scripting & automation', 'Rich scientific libraries', 'Clean, readable codebases'],
    related: ['artificial-intelligence', 'devops-cloud'],
  },
  {
    slug: 'tensorflow', name: 'TensorFlow', mono: 'Tf', category: 'Artificial Intelligence & Machine Learning',
    tagline: 'End-to-end platform for machine learning at scale.',
    description:
      'We build, train and deploy models with TensorFlow — from research notebooks to production inference on cloud, edge and mobile.',
    highlights: ['Deep learning model training', 'Production inference serving', 'Edge & mobile deployment', 'Computer vision & NLP'],
    related: ['artificial-intelligence', 'internet-of-things'],
  },
  {
    slug: 'pytorch', name: 'PyTorch', mono: 'Pt', category: 'Artificial Intelligence & Machine Learning',
    tagline: 'Flexible deep-learning framework loved by researchers and shippers alike.',
    description:
      'We prototype and productionise neural networks in PyTorch — its dynamic graph and clean API make experimentation fast and deployment predictable.',
    highlights: ['Dynamic computation graphs', 'Research-to-production workflows', 'GPU-accelerated training', 'Vision & NLP models'],
    related: ['artificial-intelligence'],
  },
  {
    slug: 'opencv', name: 'OpenCV', mono: 'Cv', category: 'Artificial Intelligence & Machine Learning',
    tagline: 'The standard library for computer vision.',
    description:
      'OpenCV gives us a fast, proven toolkit for image and video processing — detection, tracking and on-device vision from cloud to edge.',
    highlights: ['Image & video processing', 'Detection & tracking', 'Real-time on edge', 'Pairs with deep learning'],
    related: ['artificial-intelligence', 'internet-of-things'],
  },
  {
    slug: 'scikit-learn', name: 'scikit-learn', mono: 'Sk', category: 'Artificial Intelligence & Machine Learning',
    tagline: 'The workhorse library for classical machine learning in Python.',
    description:
      'For tabular data and classic ML, scikit-learn gives us a consistent, battle-tested toolkit for modelling, evaluation and pipelines.',
    highlights: ['Classification & regression', 'Feature engineering pipelines', 'Model selection & metrics', 'Fast tabular-data modelling'],
    related: ['artificial-intelligence'],
  },
  {
    slug: 'huggingface', name: 'Hugging Face Transformers', mono: 'Hf', category: 'Artificial Intelligence & Machine Learning',
    tagline: 'State-of-the-art transformer models, ready to use.',
    description:
      'We tap the Hugging Face ecosystem for pretrained transformers — fine-tuning and deploying NLP, vision and speech models without starting from scratch.',
    highlights: ['Pretrained model hub', 'Fine-tuning workflows', 'NLP, vision & speech', 'Fast time-to-value'],
    related: ['artificial-intelligence'],
  },
  {
    slug: 'langchain', name: 'LangChain', mono: 'Lc', category: 'Artificial Intelligence & Machine Learning',
    tagline: 'Framework for building applications on top of large language models.',
    description:
      'LangChain lets us compose LLMs with tools, memory and data sources to build reliable agents, chatbots and retrieval-augmented apps.',
    highlights: ['LLM orchestration & chains', 'Retrieval-augmented generation', 'Tool-using AI agents', 'Vector store integrations'],
    related: ['artificial-intelligence'],
  },
  {
    slug: 'llamaindex', name: 'LlamaIndex', mono: 'Li', category: 'Artificial Intelligence & Machine Learning',
    tagline: 'Data framework for connecting LLMs to your own knowledge.',
    description:
      'LlamaIndex helps us ingest, index and query private data so LLM apps answer from your documents with accurate, grounded retrieval.',
    highlights: ['Document ingestion & indexing', 'RAG over private data', 'Flexible query engines', 'Grounded, cited answers'],
    related: ['artificial-intelligence'],
  },
  {
    slug: 'ollama', name: 'Ollama', mono: 'Ol', category: 'Artificial Intelligence & Machine Learning',
    tagline: 'Run open language models locally and on the edge.',
    description:
      'Ollama lets us run open LLMs on local or on-prem hardware — useful when privacy, cost or offline operation rule out hosted APIs.',
    highlights: ['Local & on-prem LLMs', 'Privacy-preserving inference', 'No per-token cost', 'Offline-capable AI'],
    related: ['artificial-intelligence'],
  },
  {
    slug: 'openai-llms', name: 'OpenAI API', mono: 'AI', category: 'Artificial Intelligence & Machine Learning',
    tagline: 'Modern language models powering useful AI assistants and automation.',
    description:
      'We integrate GPT-class models into products — assistants, summarisation, classification and generation — with guardrails for real-world use.',
    highlights: ['GPT model integration', 'Prompt engineering & evaluation', 'Function calling & tool use', 'Safety & cost controls'],
    related: ['artificial-intelligence'],
  },

  // ===== Data Engineering & Analytics =====
  {
    slug: 'pandas', name: 'Pandas', mono: 'Pd', category: 'Data Engineering & Analytics',
    tagline: 'Fast, expressive data wrangling in Python.',
    description:
      'Pandas is our default for cleaning, transforming and analysing tabular data — the first step in nearly every data and ML pipeline we build.',
    highlights: ['Tabular data wrangling', 'Cleaning & transformation', 'Time-series analysis', 'Feeds ML pipelines'],
    related: ['artificial-intelligence'],
  },
  {
    slug: 'numpy', name: 'NumPy', mono: 'Np', category: 'Data Engineering & Analytics',
    tagline: 'The numerical foundation of the Python data stack.',
    description:
      'NumPy gives us fast vectorised arrays and math that underpin Pandas, scikit-learn and deep-learning frameworks — the bedrock of scientific Python.',
    highlights: ['Vectorised array math', 'High-performance compute', 'Foundation for ML libs', 'Linear algebra & stats'],
    related: ['artificial-intelligence'],
  },
  {
    slug: 'spark', name: 'Apache Spark', mono: 'Sp', category: 'Data Engineering & Analytics',
    tagline: 'Distributed engine for large-scale data processing.',
    description:
      'When data outgrows a single machine, Spark lets us process and transform it across a cluster — batch and streaming analytics at scale.',
    highlights: ['Distributed processing', 'Batch & streaming', 'Big-data ETL', 'ML at scale (MLlib)'],
    related: ['devops-cloud'],
  },
  {
    slug: 'kafka', name: 'Apache Kafka', mono: 'Kf', category: 'Data Engineering & Analytics',
    tagline: 'Distributed event streaming for high-throughput data.',
    description:
      'Kafka backs our event-driven and data-heavy systems — durable, high-throughput streaming that decouples services and powers real-time pipelines.',
    highlights: ['High-throughput streaming', 'Durable event log', 'Decoupled services', 'Real-time data pipelines'],
    related: ['devops-cloud', 'internet-of-things'],
  },
  {
    slug: 'elasticsearch', name: 'Elasticsearch', mono: 'Es', category: 'Data Engineering & Analytics',
    tagline: 'Search and analytics over data at scale.',
    description:
      'Elasticsearch powers fast full-text search, log analytics and observability — querying huge datasets in near real time.',
    highlights: ['Full-text search', 'Log & event analytics', 'Near real-time queries', 'Scales horizontally'],
    related: ['devops-cloud', 'web-app'],
  },
  {
    slug: 'grafana', name: 'Grafana', mono: 'Gf', category: 'Data Engineering & Analytics',
    tagline: 'Beautiful dashboards for metrics, logs and telemetry.',
    description:
      'We visualise system and device telemetry in Grafana — real-time dashboards and alerts that turn raw metrics into operational insight.',
    highlights: ['Real-time dashboards', 'Multi-source data', 'Alerting & thresholds', 'Telemetry visualisation'],
    related: ['internet-of-things', 'devops-cloud'],
  },
  {
    slug: 'kibana', name: 'Kibana', mono: 'Kb', category: 'Data Engineering & Analytics',
    tagline: 'Visual exploration for the Elastic stack.',
    description:
      'Kibana lets us explore and visualise Elasticsearch data — dashboards, log analysis and drill-downs for search-driven observability.',
    highlights: ['Elastic data visualisation', 'Log exploration', 'Interactive dashboards', 'Search-driven insight'],
    related: ['devops-cloud'],
  },
  {
    slug: 'prometheus', name: 'Prometheus', mono: 'Pm', category: 'Data Engineering & Analytics',
    tagline: 'Metrics and monitoring built for dynamic systems.',
    description:
      'Prometheus collects and stores time-series metrics from our services and devices, with powerful queries and alerting for reliable operations.',
    highlights: ['Time-series metrics', 'PromQL querying', 'Alerting rules', 'Cloud-native monitoring'],
    related: ['devops-cloud', 'internet-of-things'],
  },
  {
    slug: 'airflow', name: 'Apache Airflow', mono: 'Af', category: 'Data Engineering & Analytics',
    tagline: 'Orchestrate data pipelines as code.',
    description:
      'Airflow schedules and monitors our data workflows as code — dependable, observable pipelines for ETL and ML orchestration.',
    highlights: ['Workflow orchestration', 'Pipelines as code', 'Scheduling & retries', 'Observability & monitoring'],
    related: ['devops-cloud', 'artificial-intelligence'],
  },
  {
    slug: 'metabase', name: 'Metabase', mono: 'Mb', category: 'Data Engineering & Analytics',
    tagline: 'Self-serve business intelligence and dashboards.',
    description:
      'Metabase gives teams friendly, no-SQL access to their data — dashboards and questions that turn databases into decisions.',
    highlights: ['Self-serve analytics', 'No-SQL question builder', 'Shareable dashboards', 'Fast BI setup'],
    related: ['web-app', 'devops-cloud'],
  },

  // ===== IoT Platforms & Connectivity =====
  {
    slug: 'mqtt', name: 'MQTT', mono: 'MQ', category: 'IoT Platforms & Connectivity',
    tagline: 'Lightweight messaging protocol built for IoT.',
    description:
      'MQTT’s tiny footprint and publish/subscribe model make it our default for reliable device-to-cloud messaging over constrained networks.',
    highlights: ['Low-bandwidth pub/sub', 'Reliable QoS delivery', 'Scales to many devices', 'Works on flaky networks'],
    related: ['internet-of-things'],
  },
  {
    slug: 'coap', name: 'CoAP', mono: 'Co', category: 'IoT Platforms & Connectivity',
    tagline: 'Web-like protocol for constrained IoT devices.',
    description:
      'CoAP brings REST-style interaction to tiny, low-power devices — efficient request/response over UDP for resource-constrained nodes.',
    highlights: ['REST-style for devices', 'Lightweight over UDP', 'Low-power friendly', 'Built for constrained nodes'],
    related: ['internet-of-things'],
  },
  {
    slug: 'lwm2m', name: 'LwM2M', mono: 'Lw', category: 'IoT Platforms & Connectivity',
    tagline: 'Device management standard for IoT fleets.',
    description:
      'LwM2M standardises provisioning, monitoring and firmware updates for connected devices — manageable fleets at scale.',
    highlights: ['Remote device management', 'Firmware updates (FOTA)', 'Standardised objects', 'Efficient over CoAP'],
    related: ['internet-of-things'],
  },
  {
    slug: 'modbus-rtu', name: 'Modbus RTU', mono: 'Mr', category: 'IoT Platforms & Connectivity',
    tagline: 'Serial fieldbus standard for industrial devices.',
    description:
      'Modbus RTU connects sensors, PLCs and meters over RS-485 — the dependable serial backbone of industrial and energy systems.',
    highlights: ['RS-485 serial fieldbus', 'PLC & meter integration', 'Industrial-grade reliability', 'Widely supported'],
    related: ['internet-of-things'],
  },
  {
    slug: 'modbus-tcp', name: 'Modbus TCP', mono: 'Mt', category: 'IoT Platforms & Connectivity',
    tagline: 'Modbus over Ethernet for networked industrial gear.',
    description:
      'Modbus TCP carries the trusted Modbus protocol over Ethernet, bridging industrial equipment into modern IP networks and gateways.',
    highlights: ['Modbus over Ethernet', 'IP-network integration', 'Gateway-friendly', 'Industrial interoperability'],
    related: ['internet-of-things'],
  },
  {
    slug: 'opc-ua', name: 'OPC UA', mono: 'Op', category: 'IoT Platforms & Connectivity',
    tagline: 'Secure, platform-independent industrial interoperability.',
    description:
      'OPC UA is the backbone of Industry 4.0 connectivity — secure, modelled data exchange between machines, edge and cloud.',
    highlights: ['Industry 4.0 standard', 'Secure data modelling', 'Machine-to-cloud', 'Vendor-independent'],
    related: ['internet-of-things'],
  },
  {
    slug: 'bacnet', name: 'BACnet', mono: 'Bc', category: 'IoT Platforms & Connectivity',
    tagline: 'The protocol of building automation systems.',
    description:
      'BACnet connects HVAC, lighting and building controls — our path to integrating smart-building and energy-management systems.',
    highlights: ['Building automation', 'HVAC & lighting control', 'Smart-building integration', 'Open industry standard'],
    related: ['internet-of-things'],
  },
  {
    slug: 'zigbee', name: 'Zigbee', mono: 'Zb', category: 'IoT Platforms & Connectivity',
    tagline: 'Low-power mesh networking for smart devices.',
    description:
      'Zigbee’s self-healing mesh connects low-power sensors and smart-home devices reliably across a space without heavy infrastructure.',
    highlights: ['Low-power mesh', 'Self-healing networks', 'Smart-home devices', 'Long battery life'],
    related: ['internet-of-things'],
  },
  {
    slug: 'thread', name: 'Thread', mono: 'Th', category: 'IoT Platforms & Connectivity',
    tagline: 'IP-based mesh networking for the smart home.',
    description:
      'Thread brings robust, IP-based mesh networking to low-power devices — the connectivity layer behind Matter smart-home products.',
    highlights: ['IP-based mesh', 'Low-power & reliable', 'No single point of failure', 'Foundation for Matter'],
    related: ['internet-of-things'],
  },
  {
    slug: 'matter', name: 'Matter', mono: 'Ma', category: 'IoT Platforms & Connectivity',
    tagline: 'The unifying standard for smart-home interoperability.',
    description:
      'Matter lets devices from any brand work together — we build products that interoperate across Apple, Google and Amazon ecosystems.',
    highlights: ['Cross-ecosystem compatibility', 'Works with major hubs', 'Built on Thread/Wi-Fi', 'Future-proof smart home'],
    related: ['internet-of-things'],
  },

  // ===== Wireless Communication =====
  {
    slug: 'wifi', name: 'Wi-Fi', mono: 'Wf', category: 'Wireless Communication',
    tagline: 'High-bandwidth wireless for connected products.',
    description:
      'Wi-Fi gives connected products fast, ubiquitous local connectivity — ideal for gateways, cameras and data-rich edge devices.',
    highlights: ['High-bandwidth links', 'Ubiquitous infrastructure', 'Gateways & cameras', 'Local & cloud connectivity'],
    related: ['internet-of-things'],
  },
  {
    slug: 'ble', name: 'Bluetooth Low Energy (BLE)', mono: 'BL', category: 'Wireless Communication',
    tagline: 'Low-energy wireless for devices and wearables.',
    description:
      'Bluetooth Low Energy powers short-range connectivity for wearables, sensors and phone-connected products — efficient pairing with minimal power.',
    highlights: ['Low-power wireless', 'Phone & app connectivity', 'Sensors & wearables', 'Efficient pairing'],
    related: ['internet-of-things', 'mcu-programming'],
  },
  {
    slug: 'lorawan', name: 'LoRaWAN', mono: 'Lo', category: 'Wireless Communication',
    tagline: 'Long-range, low-power connectivity for IoT fleets.',
    description:
      'LoRaWAN lets battery-powered sensors talk over kilometres with minimal power — our pick for wide-area, low-data IoT deployments.',
    highlights: ['Long-range coverage', 'Years on battery', 'Low-data telemetry', 'Wide-area IoT networks'],
    related: ['internet-of-things'],
  },
  {
    slug: 'nb-iot', name: 'NB-IoT', mono: 'Nb', category: 'Wireless Communication',
    tagline: 'Cellular connectivity for low-power devices.',
    description:
      'NB-IoT uses licensed cellular spectrum for deep-coverage, low-power telemetry — great for meters and sensors in hard-to-reach places.',
    highlights: ['Licensed cellular IoT', 'Deep indoor coverage', 'Low power & cost', 'Carrier-grade reliability'],
    related: ['internet-of-things'],
  },
  {
    slug: 'lte-m', name: 'LTE-M', mono: 'Lm', category: 'Wireless Communication',
    tagline: 'Cellular IoT with mobility and higher throughput.',
    description:
      'LTE-M offers low-power cellular connectivity with mobility and voice support — suited to trackers and moving assets.',
    highlights: ['Low-power cellular', 'Mobility support', 'Higher throughput than NB-IoT', 'Asset tracking'],
    related: ['internet-of-things'],
  },
  {
    slug: '4g-lte', name: '4G LTE', mono: '4G', category: 'Wireless Communication',
    tagline: 'Reliable broadband cellular for connected devices.',
    description:
      '4G LTE provides dependable, high-bandwidth cellular links for gateways, cameras and devices that need real-time cloud connectivity anywhere.',
    highlights: ['Broadband cellular', 'Wide availability', 'Real-time data', 'Gateways & cameras'],
    related: ['internet-of-things'],
  },
  {
    slug: '5g', name: '5G', mono: '5G', category: 'Wireless Communication',
    tagline: 'Ultra-fast, low-latency connectivity for next-gen products.',
    description:
      '5G unlocks high-bandwidth, low-latency use cases — from connected vehicles to industrial automation and rich edge applications.',
    highlights: ['Ultra-low latency', 'Massive bandwidth', 'Dense device support', 'Edge & industrial use'],
    related: ['internet-of-things'],
  },
  {
    slug: 'nfc', name: 'NFC', mono: 'Nf', category: 'Wireless Communication',
    tagline: 'Tap-to-connect short-range communication.',
    description:
      'NFC enables tap interactions for pairing, payments and access — a simple, secure bridge between phones and devices.',
    highlights: ['Tap-to-pair', 'Secure access & payments', 'Simple provisioning', 'Phone-to-device bridge'],
    related: ['internet-of-things'],
  },
  {
    slug: 'rfid', name: 'RFID', mono: 'Rf', category: 'Wireless Communication',
    tagline: 'Wireless identification and tracking.',
    description:
      'RFID powers contactless identification and inventory tracking — the backbone of logistics, access control and asset management.',
    highlights: ['Contactless tracking', 'Inventory & logistics', 'Access control', 'Passive & active tags'],
    related: ['internet-of-things', 'logistics-supply-chain'],
  },
  {
    slug: 'uwb', name: 'UWB', mono: 'Uw', category: 'Wireless Communication',
    tagline: 'Centimetre-precise positioning and ranging.',
    description:
      'Ultra-wideband enables precise indoor positioning and secure ranging — for access, asset tracking and spatial-aware products.',
    highlights: ['Centimetre accuracy', 'Secure ranging', 'Indoor positioning', 'Spatial awareness'],
    related: ['internet-of-things'],
  },

  // ===== Embedded Systems =====
  {
    slug: 'stm32', name: 'STM32', mono: '32', category: 'Embedded Systems',
    tagline: 'Versatile ARM Cortex-M microcontrollers for any product.',
    description:
      'We build on the STM32 family across the power/performance spectrum — from coin-cell sensors to rich real-time controllers.',
    highlights: ['ARM Cortex-M cores', 'Low-power to high-performance', 'Rich peripheral set', 'Prototype to production'],
    related: ['mcu-programming', 'pcb-designing'],
  },
  {
    slug: 'esp32', name: 'ESP32', mono: 'E', category: 'Embedded Systems',
    tagline: 'Wi-Fi + Bluetooth SoC that powers connected products.',
    description:
      'The ESP32 packs dual-core compute, Wi-Fi and Bluetooth into a low-cost module — our go-to for connected sensors and gateways.',
    highlights: ['Integrated Wi-Fi & Bluetooth', 'Dual-core processing', 'Rich peripheral set', 'Low-cost connectivity'],
    related: ['internet-of-things', 'mcu-programming'],
  },
  {
    slug: 'nxp-lpc', name: 'NXP LPC Series', mono: 'Lpc', category: 'Embedded Systems',
    tagline: 'Robust ARM microcontrollers for industrial products.',
    description:
      'NXP LPC microcontrollers give us dependable Cortex-M compute with strong peripherals for industrial and consumer embedded designs.',
    highlights: ['ARM Cortex-M family', 'Industrial reliability', 'Rich peripherals', 'Long-term availability'],
    related: ['mcu-programming', 'pcb-designing'],
  },
  {
    slug: 'renesas-ra', name: 'Renesas RA Series', mono: 'Ra', category: 'Embedded Systems',
    tagline: 'Low-power Arm MCUs with strong security.',
    description:
      'Renesas RA microcontrollers pair efficient Cortex-M cores with hardware security — a solid base for secure, low-power products.',
    highlights: ['Efficient Cortex-M cores', 'Hardware security', 'Low-power operation', 'Flexible peripherals'],
    related: ['mcu-programming', 'pcb-designing'],
  },
  {
    slug: 'nordic-nrf52', name: 'Nordic nRF52', mono: 'nrf', category: 'Embedded Systems',
    tagline: 'Bluetooth LE SoC for wireless products.',
    description:
      'The Nordic nRF52 series is our default for BLE products — low-power radios and Cortex-M compute for wearables and connected devices.',
    highlights: ['Integrated BLE radio', 'Ultra-low power', 'Wearable-ready', 'Strong SDK & tooling'],
    related: ['internet-of-things', 'mcu-programming'],
  },
  {
    slug: 'raspberry-pi', name: 'Raspberry Pi', mono: 'RP', category: 'Embedded Systems',
    tagline: 'Versatile single-board computer for edge and gateways.',
    description:
      'The Raspberry Pi is our go-to single-board computer for IoT gateways, edge AI and rapid prototypes — Linux power in a compact, affordable board.',
    highlights: ['Linux edge computing', 'IoT gateways', 'On-device AI inference', 'Fast prototyping'],
    related: ['internet-of-things', 'mcu-programming'],
  },
  {
    slug: 'beaglebone', name: 'BeagleBone Black', mono: 'Bb', category: 'Embedded Systems',
    tagline: 'Open single-board computer with real-time I/O.',
    description:
      'BeagleBone Black combines Linux with programmable real-time units (PRUs) — handy when edge compute needs deterministic I/O.',
    highlights: ['Linux + real-time PRUs', 'Rich I/O & expansion', 'Open hardware', 'Industrial prototyping'],
    related: ['internet-of-things', 'mcu-programming'],
  },
  {
    slug: 'arduino', name: 'Arduino', mono: 'Ar', category: 'Embedded Systems',
    tagline: 'The fastest path from idea to working prototype.',
    description:
      'Arduino lets us validate hardware concepts quickly — an approachable ecosystem ideal for prototypes and proof-of-concept builds.',
    highlights: ['Rapid prototyping', 'Huge ecosystem', 'Approachable tooling', 'Sensor & actuator shields'],
    related: ['mcu-programming', 'internet-of-things'],
  },
  {
    slug: 'microchip-pic', name: 'Microchip PIC', mono: 'Pic', category: 'Embedded Systems',
    tagline: 'Dependable microcontrollers for cost-sensitive products.',
    description:
      'Microchip PIC MCUs remain a robust, economical choice for simple, high-reliability embedded control across long product lifecycles.',
    highlights: ['Cost-effective control', 'High reliability', 'Long availability', 'Broad peripheral range'],
    related: ['mcu-programming', 'pcb-designing'],
  },
  {
    slug: 'msp430', name: 'TI MSP430', mono: 'Ms', category: 'Embedded Systems',
    tagline: 'Ultra-low-power MCUs for battery products.',
    description:
      'The TI MSP430 family excels at ultra-low-power sensing — squeezing years of battery life out of measurement and monitoring devices.',
    highlights: ['Ultra-low power', 'Long battery life', 'Mixed-signal sensing', 'Energy-harvesting friendly'],
    related: ['mcu-programming', 'internet-of-things'],
  },

  // ===== Embedded Software =====
  {
    slug: 'embedded-c', name: 'Embedded C', mono: 'eC', category: 'Embedded Software',
    tagline: 'The core language of firmware development.',
    description:
      'Embedded C is the foundation of our firmware — deterministic, efficient, close-to-the-metal code that drives microcontrollers and peripherals.',
    highlights: ['Bare-metal firmware', 'Deterministic timing', 'Direct hardware control', 'Driver development'],
    related: ['mcu-programming', 'rtos-development'],
  },
  {
    slug: 'c-cpp', name: 'C / C++', mono: 'C', category: 'Embedded Software',
    tagline: 'Close-to-the-metal performance for embedded and systems code.',
    description:
      'C and C++ are the backbone of our firmware and performance-critical systems — deterministic, efficient and in full control of the hardware.',
    highlights: ['Systems & firmware code', 'Deterministic performance', 'Fine-grained memory control', 'Driver & peripheral code'],
    related: ['mcu-programming', 'rtos-development'],
  },
  {
    slug: 'rust', name: 'Rust', mono: 'Rs', category: 'Embedded Software',
    tagline: 'Memory-safe systems programming without a garbage collector.',
    description:
      'We reach for Rust where safety and performance both matter — eliminating whole classes of bugs in systems and embedded code.',
    highlights: ['Memory safety guarantees', 'No garbage collector', 'Fearless concurrency', 'Growing embedded support'],
    related: ['mcu-programming', 'devops-cloud'],
  },
  {
    slug: 'cmsis', name: 'ARM CMSIS', mono: 'Cs', category: 'Embedded Software',
    tagline: 'Standardised software interface for Cortex-M devices.',
    description:
      'CMSIS gives us a vendor-neutral abstraction over Cortex-M cores, keeping firmware portable and tooling consistent across silicon vendors.',
    highlights: ['Vendor-neutral MCU APIs', 'Portable firmware', 'DSP & NN libraries', 'Consistent tooling'],
    related: ['rtos-development', 'mcu-programming'],
  },
  {
    slug: 'zephyr', name: 'Zephyr RTOS', mono: 'Ze', category: 'Embedded Software',
    tagline: 'Scalable, secure real-time OS for connected devices.',
    description:
      'Zephyr is our RTOS of choice for richer embedded systems — a modular, secure kernel with networking and broad hardware support.',
    highlights: ['Modular real-time kernel', 'Built-in networking stacks', 'Strong security focus', 'Wide board support'],
    related: ['rtos-development'],
  },
  {
    slug: 'freertos', name: 'FreeRTOS', mono: 'Fr', category: 'Embedded Software',
    tagline: 'Real-time operating system for microcontrollers.',
    description:
      'FreeRTOS gives embedded products deterministic, real-time multitasking on resource-constrained microcontrollers.',
    highlights: ['Real-time task scheduling', 'Tiny memory footprint', 'Inter-task communication', 'Broad MCU support'],
    related: ['rtos-development', 'mcu-programming'],
  },
  {
    slug: 'azure-rtos', name: 'Azure RTOS', mono: 'Az', category: 'Embedded Software',
    tagline: 'Industrial-grade RTOS with a rich middleware stack.',
    description:
      'Azure RTOS (ThreadX) brings a safety-certified real-time kernel plus networking, USB and file systems for connected industrial devices.',
    highlights: ['Safety-certified kernel', 'Networking & USB stacks', 'Small footprint', 'Azure IoT integration'],
    related: ['rtos-development', 'internet-of-things'],
  },
  {
    slug: 'embedded-linux', name: 'Embedded Linux', mono: 'eL', category: 'Embedded Software',
    tagline: 'Full Linux for capable edge devices and gateways.',
    description:
      'Embedded Linux powers our richer devices — gateways, HMIs and edge computers that need networking, displays and a full software stack.',
    highlights: ['Edge & gateway compute', 'Networking & displays', 'Rich software stack', 'Custom distributions'],
    related: ['internet-of-things', 'mcu-programming'],
  },
  {
    slug: 'yocto', name: 'Yocto Project', mono: 'Yo', category: 'Embedded Software',
    tagline: 'Build your own custom embedded Linux distribution.',
    description:
      'The Yocto Project lets us craft lean, reproducible Linux images tailored to a product — exactly the packages and configuration it needs.',
    highlights: ['Custom Linux images', 'Reproducible builds', 'Lean, secure footprint', 'Production-grade'],
    related: ['internet-of-things'],
  },
  {
    slug: 'buildroot', name: 'Buildroot', mono: 'Br', category: 'Embedded Software',
    tagline: 'Simple, fast embedded Linux image builder.',
    description:
      'Buildroot generates compact embedded Linux root filesystems quickly — a pragmatic choice when a product needs a small, focused image.',
    highlights: ['Fast image builds', 'Small root filesystems', 'Straightforward config', 'Great for simpler devices'],
    related: ['internet-of-things'],
  },

  // ===== Linux & System Programming =====
  {
    slug: 'bash', name: 'Bash Scripting', mono: 'Sh', category: 'Linux & System Programming',
    tagline: 'Automation glue for Linux systems and pipelines.',
    description:
      'Bash scripting automates our build, deploy and device-provisioning tasks — the dependable glue across Linux tooling and CI.',
    highlights: ['System automation', 'Build & deploy scripts', 'Device provisioning', 'CI/CD glue'],
    related: ['devops-cloud'],
  },
  {
    slug: 'device-drivers', name: 'Device Driver Development', mono: 'Dd', category: 'Linux & System Programming',
    tagline: 'Bridging custom hardware to the operating system.',
    description:
      'We write Linux and bare-metal device drivers to expose custom peripherals to software — the critical link between silicon and applications.',
    highlights: ['Linux & bare-metal drivers', 'Custom peripheral support', 'Kernel-space development', 'Hardware bring-up'],
    related: ['mcu-programming', 'internet-of-things'],
  },
  {
    slug: 'u-boot', name: 'U-Boot', mono: 'Ub', category: 'Linux & System Programming',
    tagline: 'The universal bootloader for embedded Linux.',
    description:
      'U-Boot initialises hardware and boots the kernel on our embedded Linux devices — customised for reliable, secure startup.',
    highlights: ['Embedded boot process', 'Hardware initialisation', 'Secure & verified boot', 'Custom board support'],
    related: ['internet-of-things'],
  },
  {
    slug: 'busybox', name: 'BusyBox', mono: 'Bx', category: 'Linux & System Programming',
    tagline: 'The Swiss-army knife of embedded Linux utilities.',
    description:
      'BusyBox packs essential Unix utilities into a tiny binary — minimal, efficient userspace for resource-constrained Linux devices.',
    highlights: ['Tiny utility footprint', 'Essential Unix tools', 'Minimal userspace', 'Embedded-friendly'],
    related: ['internet-of-things'],
  },
  {
    slug: 'qt', name: 'Qt Framework', mono: 'Qt', category: 'Linux & System Programming',
    tagline: 'Cross-platform UIs for embedded and desktop.',
    description:
      'Qt powers rich graphical interfaces on embedded HMIs and desktop apps — one C++/QML codebase across screens and platforms.',
    highlights: ['Embedded HMI & desktop UI', 'C++ / QML', 'Cross-platform', 'Touch-friendly interfaces'],
    related: ['internet-of-things', 'web-app'],
  },
  {
    slug: 'posix', name: 'POSIX', mono: 'Px', category: 'Linux & System Programming',
    tagline: 'Portable foundations for systems software.',
    description:
      'We build on POSIX APIs for portable, predictable systems programming — processes, threads, IPC and I/O that work across Unix-like platforms.',
    highlights: ['Portable system APIs', 'Threads & processes', 'IPC & signals', 'Cross-platform Unix'],
    related: ['mcu-programming'],
  },
  {
    slug: 'gdb', name: 'GDB', mono: 'Gd', category: 'Linux & System Programming',
    tagline: 'The debugger for systems and embedded code.',
    description:
      'GDB is central to our debugging — stepping through native and remote targets to track down the trickiest systems and firmware bugs.',
    highlights: ['Native & remote debugging', 'Breakpoints & watchpoints', 'Embedded target support', 'Crash analysis'],
    related: ['mcu-programming'],
  },
  {
    slug: 'cmake', name: 'CMake', mono: 'Cm', category: 'Linux & System Programming',
    tagline: 'Cross-platform build system generator.',
    description:
      'CMake manages our C/C++ builds across platforms and toolchains — reproducible, scalable build configuration for native and embedded code.',
    highlights: ['Cross-platform builds', 'Toolchain management', 'Scalable C/C++ projects', 'CI-friendly'],
    related: ['mcu-programming', 'devops-cloud'],
  },
  {
    slug: 'makefile', name: 'Makefile', mono: 'Mk', category: 'Linux & System Programming',
    tagline: 'Time-tested build automation for native code.',
    description:
      'Makefiles give us precise, dependable control over build steps — a lightweight, ubiquitous foundation for compiling systems software.',
    highlights: ['Precise build control', 'Dependency tracking', 'Lightweight & ubiquitous', 'Embedded toolchains'],
    related: ['mcu-programming'],
  },
  {
    slug: 'valgrind', name: 'Valgrind', mono: 'Vg', category: 'Linux & System Programming',
    tagline: 'Find memory leaks and bugs before they ship.',
    description:
      'Valgrind helps us catch memory leaks, invalid access and threading bugs in native code — hardening systems software before release.',
    highlights: ['Memory leak detection', 'Invalid-access checks', 'Thread error detection', 'Profiling support'],
    related: ['mcu-programming'],
  },

  // ===== PCB & Electronics Design =====
  {
    slug: 'altium', name: 'Altium Designer', mono: 'Al', category: 'PCB & Electronics Design',
    tagline: 'Professional PCB design from schematic to fabrication.',
    description:
      'Altium Designer is our environment for complex, multi-layer boards — unified schematic, layout and manufacturing output in one tool.',
    highlights: ['Multi-layer PCB layout', 'Unified schematic & layout', 'Signal & power integrity', 'Manufacturing outputs'],
    related: ['pcb-designing'],
  },
  {
    slug: 'kicad', name: 'KiCad', mono: 'Ki', category: 'PCB & Electronics Design',
    tagline: 'Powerful open-source PCB design suite.',
    description:
      'KiCad gives us a capable, open-source path from schematic to gerbers — ideal for open hardware and cost-sensitive projects.',
    highlights: ['Open-source EDA', 'Schematic to gerbers', '3D board preview', 'No licensing lock-in'],
    related: ['pcb-designing'],
  },
  {
    slug: 'eagle', name: 'Autodesk Eagle', mono: 'Ea', category: 'PCB & Electronics Design',
    tagline: 'Accessible PCB design for compact boards.',
    description:
      'Eagle is a practical choice for smaller boards and rapid prototypes, with a large library ecosystem and tight Fusion integration.',
    highlights: ['Schematic & layout', 'Large parts libraries', 'Great for compact boards', 'Rapid prototyping'],
    related: ['pcb-designing'],
  },
  {
    slug: 'orcad', name: 'OrCAD', mono: 'Or', category: 'PCB & Electronics Design',
    tagline: 'Industry-standard schematic capture and PCB layout.',
    description:
      'OrCAD supports complex, high-reliability board designs — strong schematic capture, simulation and layout for demanding electronics.',
    highlights: ['Schematic capture', 'High-reliability layout', 'Integrated simulation', 'Industry standard'],
    related: ['pcb-designing'],
  },
  {
    slug: 'ltspice', name: 'LTspice', mono: 'Lt', category: 'PCB & Electronics Design',
    tagline: 'High-performance analog circuit simulation.',
    description:
      'We validate analog and power circuits in LTspice before fabrication — catching issues in simulation to avoid costly board re-spins.',
    highlights: ['Analog & power simulation', 'Fast SPICE engine', 'Pre-fabrication checks', 'Free & widely used'],
    related: ['pcb-designing'],
  },
  {
    slug: 'proteus', name: 'Proteus', mono: 'Pr', category: 'PCB & Electronics Design',
    tagline: 'Simulate circuits and microcontrollers together.',
    description:
      'Proteus lets us co-simulate schematics with microcontroller firmware — validating hardware and code together before building.',
    highlights: ['Circuit + MCU co-sim', 'Firmware validation', 'Schematic & PCB', 'Fast design iteration'],
    related: ['pcb-designing', 'mcu-programming'],
  },
  {
    slug: 'easyeda', name: 'EasyEDA', mono: 'Ee', category: 'PCB & Electronics Design',
    tagline: 'Browser-based PCB design and quick fabrication.',
    description:
      'EasyEDA streamlines simple boards from schematic to order — handy for fast prototypes with integrated parts and fabrication.',
    highlights: ['Browser-based EDA', 'Integrated parts library', 'Quick-turn fabrication', 'Great for prototypes'],
    related: ['pcb-designing'],
  },
  {
    slug: 'stm32cubemx', name: 'STM32CubeMX', mono: 'Cx', category: 'PCB & Electronics Design',
    tagline: 'Graphical configuration for STM32 peripherals.',
    description:
      'STM32CubeMX accelerates STM32 bring-up — visually configuring clocks, pins and peripherals and generating initialisation code.',
    highlights: ['Visual pin & clock config', 'Peripheral setup', 'Code generation', 'Faster MCU bring-up'],
    related: ['mcu-programming', 'pcb-designing'],
  },
  {
    slug: 'jtag', name: 'JTAG Debugging', mono: 'Jt', category: 'PCB & Electronics Design',
    tagline: 'Hardware-level debugging and programming.',
    description:
      'JTAG gives us direct, hardware-level access for flashing, debugging and boundary-scan testing during firmware bring-up and production.',
    highlights: ['Flash & debug access', 'Boundary-scan testing', 'Firmware bring-up', 'Production programming'],
    related: ['mcu-programming', 'pcb-designing'],
  },
  {
    slug: 'logic-analyzer', name: 'Oscilloscope & Logic Analyzer', mono: 'La', category: 'PCB & Electronics Design',
    tagline: 'Seeing real signals to debug real hardware.',
    description:
      'Oscilloscopes and logic analyzers let us observe actual signals and bus traffic — essential for debugging timing, protocols and analog behaviour.',
    highlights: ['Signal & timing analysis', 'Protocol decoding', 'Hardware debugging', 'Analog & digital'],
    related: ['pcb-designing', 'mcu-programming'],
  },
  {
    slug: 'spice', name: 'SPICE', mono: 'Si', category: 'PCB & Electronics Design',
    tagline: 'Circuit simulation before you ever cut copper.',
    description:
      'We use SPICE simulation to validate analog and power circuits up front — catching issues in software before committing to hardware.',
    highlights: ['Analog circuit simulation', 'Power & signal validation', 'Pre-fabrication checks', 'Fewer board re-spins'],
    related: ['pcb-designing'],
  },
  {
    slug: 'dfm', name: 'DFM', mono: 'DF', category: 'PCB & Electronics Design',
    tagline: 'Design-for-manufacturing checks that keep boards buildable.',
    description:
      'We bake design-for-manufacturing review into our hardware process so your boards are economical, yield-friendly and ready for the fab.',
    highlights: ['Manufacturability review', 'Yield & cost optimisation', 'Fab & assembly constraints', 'Fewer production surprises'],
    related: ['pcb-designing'],
  },
  {
    slug: 'jlcpcb', name: 'JLCPCB', mono: 'JL', category: 'PCB & Electronics Design',
    tagline: 'Fast, affordable PCB fabrication and assembly.',
    description:
      'For quick-turn prototypes and small runs we work with JLCPCB — affordable fabrication and assembly to get boards in hand fast.',
    highlights: ['Quick-turn prototyping', 'Affordable small runs', 'PCB + assembly', 'Fast lead times'],
    related: ['pcb-designing'],
  },

  // ===== Cloud Platforms =====
  {
    slug: 'aws', name: 'Amazon Web Services (AWS)', mono: 'aws', category: 'Cloud Platforms',
    tagline: 'Cloud infrastructure that scales from MVP to enterprise.',
    description:
      'We design, deploy and operate on AWS — compute, storage, networking and managed services — with cost and reliability engineered in from day one.',
    highlights: ['Compute, storage & networking', 'Managed databases & queues', 'IAM & security best practice', 'Cost-optimised architecture'],
    related: ['devops-cloud', 'internet-of-things'],
  },
  {
    slug: 'azure', name: 'Microsoft Azure', mono: 'Az', category: 'Cloud Platforms',
    tagline: 'Microsoft’s enterprise cloud for compute, data and AI.',
    description:
      'We architect and operate on Microsoft Azure — from App Services and AKS to managed databases — with enterprise security and compliance in mind.',
    highlights: ['App Services & AKS', 'Managed databases', 'Entra ID & enterprise security', 'Hybrid-cloud ready'],
    related: ['devops-cloud'],
  },
  {
    slug: 'gcp', name: 'Google Cloud Platform (GCP)', mono: 'G', category: 'Cloud Platforms',
    tagline: 'Google Cloud — data, AI and planet-scale infrastructure.',
    description:
      'Google Cloud Platform powers our data-heavy and AI workloads, with strong managed services for analytics, Kubernetes and machine learning.',
    highlights: ['GKE & serverless compute', 'BigQuery analytics', 'Vertex AI / ML', 'Global networking'],
    related: ['devops-cloud'],
  },
  {
    slug: 'digitalocean', name: 'DigitalOcean', mono: 'Do', category: 'Cloud Platforms',
    tagline: 'Developer-friendly cloud for straightforward deployments.',
    description:
      'DigitalOcean gives us simple, cost-effective cloud hosting — droplets, managed databases and Kubernetes without enterprise overhead.',
    highlights: ['Simple cloud hosting', 'Managed databases', 'Predictable pricing', 'Developer-friendly'],
    related: ['devops-cloud', 'web-app'],
  },
  {
    slug: 'cloudflare', name: 'Cloudflare', mono: 'Cf', category: 'Cloud Platforms',
    tagline: 'Global edge network, security and performance.',
    description:
      'Cloudflare protects and accelerates our applications — CDN, DNS, DDoS protection and edge compute for fast, secure delivery worldwide.',
    highlights: ['Global CDN & DNS', 'DDoS protection', 'Edge compute (Workers)', 'Web performance & security'],
    related: ['devops-cloud', 'web-app'],
  },
  {
    slug: 'firebase', name: 'Firebase', mono: 'Fb', category: 'Cloud Platforms',
    tagline: 'Backend-as-a-service to ship apps faster.',
    description:
      'Firebase gives apps an instant backend — auth, realtime data, storage and notifications — so we focus on product, not plumbing.',
    highlights: ['Auth & realtime database', 'Cloud functions & storage', 'Push notifications', 'Analytics out of the box'],
    related: ['mobile-app', 'web-app'],
  },
  {
    slug: 'supabase', name: 'Supabase', mono: 'Sb', category: 'Cloud Platforms',
    tagline: 'Open-source Firebase alternative on Postgres.',
    description:
      'Supabase gives apps an instant Postgres backend with auth, storage and realtime — the speed of BaaS with the power of SQL.',
    highlights: ['Postgres backend', 'Auth & row-level security', 'Realtime subscriptions', 'Open-source'],
    related: ['web-app', 'mobile-app'],
  },
  {
    slug: 'vercel', name: 'Vercel', mono: 'Vc', category: 'Cloud Platforms',
    tagline: 'The platform for frontend and edge deployment.',
    description:
      'Vercel deploys our frontends and serverless functions globally with zero config — instant previews and edge performance for web apps.',
    highlights: ['Frontend & edge hosting', 'Instant preview deploys', 'Serverless functions', 'Global performance'],
    related: ['web-app'],
  },
  {
    slug: 'netlify', name: 'Netlify', mono: 'Nl', category: 'Cloud Platforms',
    tagline: 'Continuous deployment for modern web apps.',
    description:
      'Netlify automates build and deploy for static and JAMstack sites — Git-driven workflows, previews and edge delivery out of the box.',
    highlights: ['Git-driven deploys', 'Deploy previews', 'Serverless functions', 'Edge CDN'],
    related: ['web-app'],
  },
  {
    slug: 'hostinger', name: 'Hostinger', mono: 'Ho', category: 'Cloud Platforms',
    tagline: 'Affordable hosting for sites and small apps.',
    description:
      'Hostinger provides cost-effective web hosting and domains — a practical home for marketing sites and small applications.',
    highlights: ['Affordable web hosting', 'Domains & email', 'Managed environment', 'Quick site launch'],
    related: ['web-app'],
  },

  // ===== DevOps & Containerization =====
  {
    slug: 'docker', name: 'Docker', mono: 'Dk', category: 'DevOps & Containerization',
    tagline: 'Package once, run anywhere — consistent environments.',
    description:
      'Docker containers give us reproducible environments from a developer laptop to production, eliminating “works on my machine” for good.',
    highlights: ['Reproducible environments', 'Lightweight containers', 'Fast CI/CD builds', 'Foundation for Kubernetes'],
    related: ['devops-cloud'],
  },
  {
    slug: 'kubernetes', name: 'Kubernetes', mono: 'K8', category: 'DevOps & Containerization',
    tagline: 'Production-grade orchestration for containerised workloads.',
    description:
      'Kubernetes runs and heals our containerised services at scale — self-healing, autoscaling and zero-downtime rollouts as standard.',
    highlights: ['Self-healing workloads', 'Horizontal autoscaling', 'Zero-downtime deploys', 'Declarative infrastructure'],
    related: ['devops-cloud'],
  },
  {
    slug: 'github-actions', name: 'GitHub Actions', mono: 'GA', category: 'DevOps & Containerization',
    tagline: 'CI/CD pipelines that live next to your code.',
    description:
      'We automate builds, tests and deployments with GitHub Actions — pipelines defined as code, triggered on every push, keeping delivery fast and repeatable.',
    highlights: ['CI/CD as code', 'Automated test & deploy', 'Rich action ecosystem', 'Tight GitHub integration'],
    related: ['devops-cloud'],
  },
  {
    slug: 'gitlab-ci', name: 'GitLab CI/CD', mono: 'Gl', category: 'DevOps & Containerization',
    tagline: 'Integrated pipelines across the full DevOps lifecycle.',
    description:
      'GitLab CI/CD ties source, pipelines and deployment together — a single platform for building, testing and shipping software.',
    highlights: ['End-to-end pipelines', 'Built-in registry', 'Auto DevOps', 'Self-hosted option'],
    related: ['devops-cloud'],
  },
  {
    slug: 'jenkins', name: 'Jenkins', mono: 'Jk', category: 'DevOps & Containerization',
    tagline: 'Extensible automation server for any pipeline.',
    description:
      'For complex or self-hosted delivery, Jenkins gives us a battle-tested, plugin-rich automation server to orchestrate builds and deployments at scale.',
    highlights: ['Flexible pipelines', 'Huge plugin ecosystem', 'Self-hosted control', 'Scales to large teams'],
    related: ['devops-cloud'],
  },
  {
    slug: 'terraform', name: 'Terraform', mono: 'Te', category: 'DevOps & Containerization',
    tagline: 'Infrastructure as code across every cloud.',
    description:
      'We define infrastructure declaratively with Terraform, so environments are versioned, reviewable and reproducible across AWS, Azure and GCP.',
    highlights: ['Declarative infrastructure', 'Multi-cloud provisioning', 'Versioned & reviewable state', 'Repeatable environments'],
    related: ['devops-cloud'],
  },
  {
    slug: 'ansible', name: 'Ansible', mono: 'An', category: 'DevOps & Containerization',
    tagline: 'Agentless automation for configuration and deployment.',
    description:
      'Ansible automates server configuration and app deployment with simple, declarative playbooks — no agents, reproducible every time.',
    highlights: ['Agentless automation', 'Declarative playbooks', 'Config management', 'Repeatable deployments'],
    related: ['devops-cloud'],
  },
  {
    slug: 'nginx', name: 'Nginx', mono: 'Nx', category: 'DevOps & Containerization',
    tagline: 'High-performance web server, proxy and load balancer.',
    description:
      'Nginx fronts our applications as a fast reverse proxy and load balancer — TLS termination, caching and routing for reliable delivery.',
    highlights: ['Reverse proxy & LB', 'TLS termination', 'Caching & routing', 'High concurrency'],
    related: ['devops-cloud', 'web-app'],
  },
  {
    slug: 'linux-server-admin', name: 'Linux Server Administration', mono: 'Lx', category: 'DevOps & Containerization',
    tagline: 'Reliable, secure operation of production servers.',
    description:
      'We provision, harden and maintain Linux servers — users, networking, security and monitoring for dependable production systems.',
    highlights: ['Provisioning & hardening', 'Networking & firewalls', 'Monitoring & backups', 'Security best practice'],
    related: ['devops-cloud'],
  },
  {
    slug: 'git', name: 'Git', mono: 'Gt', category: 'DevOps & Containerization',
    tagline: 'Version control at the heart of every project.',
    description:
      'Git underpins how we collaborate — branching, reviews and history that keep every project traceable and every change reviewable.',
    highlights: ['Distributed version control', 'Branching & reviews', 'Full change history', 'Team collaboration'],
    related: ['devops-cloud', 'web-app'],
  },

  // ===== Web Development =====
  {
    slug: 'react', name: 'React', mono: 'Re', category: 'Web Development',
    tagline: 'Component-driven user interfaces that stay fast as they scale.',
    description:
      'React is our default for building interactive web UIs. Its component model, hooks and vast ecosystem let us ship complex, stateful interfaces that stay maintainable.',
    highlights: ['Reusable component architecture', 'Hooks & modern state management', 'SSR/SSG with Next.js', 'Rich ecosystem & tooling'],
    related: ['web-app', 'mobile-app'],
  },
  {
    slug: 'nextjs', name: 'Next.js', mono: 'N', category: 'Web Development',
    tagline: 'The React framework for production — SSR, SSG and edge rendering.',
    description:
      'We reach for Next.js when SEO, performance and developer velocity all matter. Server rendering, file-based routing and image optimisation come built in.',
    highlights: ['Server-side & static rendering', 'File-based routing', 'API routes & middleware', 'Performance-focused delivery'],
    related: ['web-app'],
  },
  {
    slug: 'vue', name: 'Vue.js', mono: 'Vu', category: 'Web Development',
    tagline: 'Approachable, performant framework for web interfaces.',
    description:
      'Vue gives us a gentle, reactive component model with excellent performance — a great fit for dashboards and apps that need to ship quickly.',
    highlights: ['Reactive component model', 'Gentle learning curve', 'Great performance', 'Composition API'],
    related: ['web-app'],
  },
  {
    slug: 'tailwind', name: 'Tailwind CSS', mono: 'Tw', category: 'Web Development',
    tagline: 'Utility-first CSS for building modern UIs fast.',
    description:
      'Tailwind lets us style directly in markup with utility classes, keeping designs consistent and shipping polished interfaces without fighting stylesheets.',
    highlights: ['Utility-first styling', 'Consistent design tokens', 'No CSS sprawl', 'Rapid UI iteration'],
    related: ['web-app'],
  },
  {
    slug: 'typescript', name: 'TypeScript', mono: 'Ts', category: 'Web Development',
    tagline: 'Typed JavaScript that catches bugs before they ship.',
    description:
      'We write TypeScript across frontend and backend for safer refactors, better tooling and self-documenting code — confidence that scales with the team.',
    highlights: ['Static type safety', 'First-class editor tooling', 'Safer large-scale refactors', 'Shared types front to back'],
    related: ['web-app', 'mobile-app'],
  },
  {
    slug: 'graphql', name: 'GraphQL', mono: 'GQ', category: 'Web Development',
    tagline: 'Ask for exactly the data you need — nothing more.',
    description:
      'GraphQL lets clients fetch precisely the data they need in a single request, which means fewer round-trips and faster product iteration.',
    highlights: ['Typed, self-documenting schema', 'No over- or under-fetching', 'Single endpoint, many clients', 'Great DX with codegen'],
    related: ['web-app'],
  },
  {
    slug: 'vite', name: 'Vite', mono: 'Vt', category: 'Web Development',
    tagline: 'Next-generation frontend build tooling — instant and lean.',
    description:
      'Vite powers our frontend builds with instant dev-server startup and lightning-fast hot reload, plus optimised production bundles.',
    highlights: ['Instant dev server', 'Lightning-fast HMR', 'Optimised production builds', 'Modern, minimal config'],
    related: ['web-app'],
  },

  // ===== Backend & Databases =====
  {
    slug: 'nodejs', name: 'Node.js', mono: 'No', category: 'Backend & Databases',
    tagline: 'Non-blocking JavaScript runtime for fast, scalable services.',
    description:
      'Node.js powers our backends and tooling — one language across the stack, an event-driven runtime, and the npm ecosystem for anything you need.',
    highlights: ['Event-driven, non-blocking I/O', 'Shared language across the stack', 'Huge npm ecosystem', 'Great for real-time & APIs'],
    related: ['web-app', 'devops-cloud'],
  },
  {
    slug: 'express', name: 'Express', mono: 'Ex', category: 'Backend & Databases',
    tagline: 'Minimal, unopinionated web framework for Node.js APIs.',
    description:
      'Express gives us a lean, flexible foundation for REST APIs and services — middleware where we want it, and nothing we don’t.',
    highlights: ['Lightweight REST APIs', 'Composable middleware', 'Battle-tested & stable', 'Pairs with the MERN stack'],
    related: ['web-app'],
  },
  {
    slug: 'django', name: 'Django', mono: 'Dj', category: 'Backend & Databases',
    tagline: 'Batteries-included Python framework for robust backends.',
    description:
      'Django speeds up backend delivery with an ORM, admin, auth and security baked in — ideal for data-driven applications that need to be solid from day one.',
    highlights: ['ORM & migrations', 'Built-in admin & auth', 'Secure by default', 'Rapid backend delivery'],
    related: ['web-app', 'artificial-intelligence'],
  },
  {
    slug: 'fastapi', name: 'FastAPI', mono: 'Fa', category: 'Backend & Databases',
    tagline: 'High-performance Python APIs with automatic docs.',
    description:
      'FastAPI is our choice for fast, typed Python services — async performance, automatic OpenAPI docs and clean validation, perfect for ML and data APIs.',
    highlights: ['Async high performance', 'Typed request validation', 'Automatic OpenAPI docs', 'Great for ML serving'],
    related: ['web-app', 'artificial-intelligence'],
  },
  {
    slug: 'mongodb', name: 'MongoDB', mono: 'M', category: 'Backend & Databases',
    tagline: 'Flexible document database for fast-moving products.',
    description:
      'MongoDB’s document model maps naturally to application objects, letting us iterate quickly while scaling horizontally as data grows.',
    highlights: ['Schema-flexible documents', 'Horizontal scaling & sharding', 'Powerful aggregation pipeline', 'Core of the MERN stack'],
    related: ['web-app'],
  },
  {
    slug: 'postgresql', name: 'PostgreSQL', mono: 'Pg', category: 'Backend & Databases',
    tagline: 'The world’s most advanced open-source relational database.',
    description:
      'When data integrity and complex querying matter, we choose PostgreSQL — rock-solid ACID guarantees with modern JSON and extension support.',
    highlights: ['Strong ACID guarantees', 'Advanced SQL & indexing', 'JSONB for hybrid models', 'Extensible (PostGIS, etc.)'],
    related: ['web-app', 'devops-cloud'],
  },
  {
    slug: 'mysql', name: 'MySQL', mono: 'Sq', category: 'Backend & Databases',
    tagline: 'The world’s most popular open-source relational database.',
    description:
      'MySQL is a dependable, widely supported relational database we use for transactional applications that need proven reliability and broad hosting support.',
    highlights: ['Proven reliability', 'Wide hosting support', 'Strong transactional model', 'Mature tooling'],
    related: ['web-app'],
  },
  {
    slug: 'redis', name: 'Redis', mono: 'Rd', category: 'Backend & Databases',
    tagline: 'In-memory data store for caching, queues and real-time.',
    description:
      'Redis adds a blazing-fast in-memory layer for caching, sessions, rate-limiting and pub/sub — the speed boost behind responsive apps.',
    highlights: ['Sub-millisecond caching', 'Pub/sub & streams', 'Queues & rate limiting', 'Session & token storage'],
    related: ['web-app', 'devops-cloud'],
  },

  // ===== Mobile Development =====
  {
    slug: 'flutter', name: 'Flutter', mono: 'Fl', category: 'Mobile Development',
    tagline: 'One codebase, beautiful native apps on every platform.',
    description:
      'Flutter lets us ship pixel-perfect iOS and Android apps from a single codebase, with native performance and a fast, expressive UI toolkit.',
    highlights: ['Single cross-platform codebase', 'Native performance', 'Expressive, custom UI', 'Fast hot-reload development'],
    related: ['mobile-app'],
  },
  {
    slug: 'react-native', name: 'React Native', mono: 'RN', category: 'Mobile Development',
    tagline: 'Native mobile apps from a single React codebase.',
    description:
      'React Native lets us ship genuinely native iOS and Android apps from one React codebase — fast iteration with native performance where it counts.',
    highlights: ['Single cross-platform codebase', 'Truly native components', 'Reuse of React skills', 'Large ecosystem'],
    related: ['mobile-app'],
  },
  {
    slug: 'swift', name: 'Swift', mono: 'Sw', category: 'Mobile Development',
    tagline: 'Apple’s modern language for fast, safe iOS apps.',
    description:
      'When apps demand the best of iOS, we build natively in Swift — safe, expressive and fully tuned to Apple’s platforms.',
    highlights: ['Native iOS performance', 'Safe, modern language', 'Full platform access', 'SwiftUI interfaces'],
    related: ['mobile-app'],
  },
  {
    slug: 'kotlin', name: 'Kotlin', mono: 'Kt', category: 'Mobile Development',
    tagline: 'Concise, modern language for native Android.',
    description:
      'Kotlin is our default for native Android — concise, null-safe and fully supported by Google, with Jetpack Compose for modern UIs.',
    highlights: ['Native Android development', 'Null-safety by design', 'Jetpack Compose UI', 'Google-first support'],
    related: ['mobile-app'],
  },
  {
    slug: 'expo', name: 'Expo', mono: 'Ep', category: 'Mobile Development',
    tagline: 'The fastest way to build and ship React Native apps.',
    description:
      'Expo accelerates React Native delivery with managed builds, over-the-air updates and a rich SDK — from prototype to store in record time.',
    highlights: ['Managed build & deploy', 'Over-the-air updates', 'Rich device SDK', 'Fast iteration'],
    related: ['mobile-app'],
  },

  // ===== IoT cloud platforms (carried over) =====
  {
    slug: 'aws-iot', name: 'AWS IoT', mono: 'Ai', category: 'IoT Platforms & Connectivity',
    tagline: 'Managed cloud platform for connecting and managing devices.',
    description:
      'AWS IoT Core lets us securely connect, manage and ingest data from fleets of devices, with rules and pipelines straight into the AWS ecosystem.',
    highlights: ['Secure device connectivity', 'Fleet management at scale', 'Rules engine & data routing', 'Deep AWS integration'],
    related: ['internet-of-things'],
  },
  {
    slug: 'azure-iot-hub', name: 'Azure IoT Hub', mono: 'Ah', category: 'IoT Platforms & Connectivity',
    tagline: 'Cloud gateway for bidirectional IoT device communication.',
    description:
      'Azure IoT Hub gives us secure, two-way communication with devices, plus provisioning and monitoring tied into the Azure platform.',
    highlights: ['Bidirectional messaging', 'Per-device authentication', 'Device provisioning', 'Azure ecosystem integration'],
    related: ['internet-of-things'],
  },

  // ===== Embedded tooling (carried over) =====
  {
    slug: 'arm-cortex-m', name: 'ARM Cortex-M', mono: 'Cm', category: 'Embedded Systems',
    tagline: 'The microcontroller core behind modern embedded products.',
    description:
      'ARM Cortex-M cores power most of the MCUs we build on — a consistent, efficient architecture from tiny sensors to real-time controllers.',
    highlights: ['Industry-standard MCU core', 'Energy-efficient performance', 'Deterministic interrupts', 'Broad vendor support'],
    related: ['mcu-programming', 'rtos-development'],
  },
  {
    slug: 'avr', name: 'AVR', mono: 'Av', category: 'Embedded Systems',
    tagline: 'Simple, robust 8-bit microcontrollers.',
    description:
      'AVR microcontrollers remain a dependable choice for simple, low-cost embedded control where robustness beats raw horsepower.',
    highlights: ['Simple 8-bit architecture', 'Low-cost & robust', 'Great for simple control', 'Huge community support'],
    related: ['mcu-programming'],
  },
  {
    slug: 'platformio', name: 'PlatformIO', mono: 'Pi', category: 'Embedded Software',
    tagline: 'Modern build system and IDE for embedded development.',
    description:
      'PlatformIO streamlines our firmware workflow — dependency management, multi-board builds and CI for embedded, all in one toolchain.',
    highlights: ['Unified embedded toolchain', 'Library & dependency manager', 'Multi-board builds', 'CI-friendly firmware'],
    related: ['mcu-programming'],
  },
  {
    slug: 'segger', name: 'Segger', mono: 'Sg', category: 'Embedded Software',
    tagline: 'Professional debug probes and embedded tooling.',
    description:
      'We rely on SEGGER J-Link and tooling for fast, reliable flashing and debugging — essential for serious firmware bring-up and production.',
    highlights: ['J-Link debug & flash', 'Real-time tracing (RTT)', 'Reliable production programming', 'Broad device support'],
    related: ['rtos-development'],
  },
]

// Curated subset shown in the home "Technologies" marquee — a diverse slice
// across categories. Every technology still has its own page (reachable from
// service tech chips and each tech page's "other technologies" list).
const FEATURED = [
  'python', 'tensorflow', 'pytorch', 'opencv', 'langchain',
  'kafka', 'grafana', 'mqtt', 'zigbee', 'matter',
  'lorawan', 'ble', '5g', 'stm32', 'esp32',
  'raspberry-pi', 'freertos', 'zephyr', 'embedded-linux', 'altium',
  'kicad', 'aws', 'azure', 'gcp', 'docker',
  'kubernetes', 'react', 'nextjs', 'nodejs', 'flutter',
]
export const featuredTechnologies = technologies.filter((t) => FEATURED.includes(t.slug))

export const getTechnology = (slug) => technologies.find((t) => t.slug === slug)

// Match a free-text tech tag (e.g. a service's "tech" entry) to a technology
// page, case-insensitively. Returns the technology object or undefined.
export const getTechnologyByName = (name) => {
  const n = String(name).trim().toLowerCase()
  return technologies.find((t) => t.name.toLowerCase() === n)
}
