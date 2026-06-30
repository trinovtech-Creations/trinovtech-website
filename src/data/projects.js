// Project examples — powers the "Project Library" on the Work page and the
// /projects/:slug detail pages. Each project has a card summary plus a richer
// detail (overview, what it includes, services and tech). These are
// representative project paths, not fabricated client metrics.
// `tech` names match technologies and `services` match service slugs for
// cross-linking.
export const projects = [
  // ===== Energy & Utilities =====
  {
    slug: 'smart-metering-system', icon: 'bolt', category: 'Energy & Utilities',
    title: 'Smart Metering System',
    summary: 'Connected meters that report consumption to the cloud in real time.',
    overview:
      'A connected metering solution that captures electricity, water or gas consumption at the edge and streams it securely to the cloud. Utilities get accurate, real-time readings, remote management and analytics that replace manual meter reads.',
    features: [
      'Edge firmware for accurate metering',
      'Secure device-to-cloud connectivity',
      'Remote configuration and OTA updates',
      'Consumption dashboards and billing export',
    ],
    services: ['internet-of-things', 'mcu-programming', 'devops-cloud'],
    tech: ['ESP32', 'MQTT', 'AWS IoT'],
  },
  {
    slug: 'fuel-monitoring-system', icon: 'tools', category: 'Energy & Utilities',
    title: 'Fuel Monitoring System',
    summary: 'Live fuel-level tracking and theft alerts across tanks and vehicles.',
    overview:
      'A fuel-monitoring platform that tracks tank and vehicle fuel levels in real time, detects unusual drops and raises theft alerts. Operators gain visibility into consumption, refills and losses across the fleet or site.',
    features: [
      'Fuel-level sensing firmware',
      'Theft and anomaly detection',
      'Refill and consumption reports',
      'Alerts and live dashboards',
    ],
    services: ['internet-of-things', 'mcu-programming', 'artificial-intelligence'],
    tech: ['STM32', 'LoRaWAN', 'Grafana'],
  },
  {
    slug: 'smart-water-management-system', icon: 'wave', category: 'Energy & Utilities',
    title: 'Smart Water Management System',
    summary: 'Monitor flow, pressure and leaks across a distributed water network.',
    overview:
      'A water-network monitoring system that instruments flow, pressure and level across distribution points, detects leaks early and helps utilities reduce loss. Field data flows to a central dashboard for operations and planning.',
    features: [
      'Flow, pressure and level sensing',
      'Leak and burst detection',
      'Distributed device connectivity',
      'Operations dashboard and alerts',
    ],
    services: ['internet-of-things', 'mcu-programming', 'devops-cloud'],
    tech: ['ESP32', 'MQTT', 'Node.js'],
  },
  {
    slug: 'water-quality-monitoring-device', icon: 'flask', category: 'Energy & Utilities',
    title: 'Water Quality Monitoring Device',
    summary: 'A connected probe streaming pH, turbidity and contamination data.',
    overview:
      'A connected water-quality probe that continuously measures pH, turbidity, dissolved oxygen and contamination indicators, then streams readings for monitoring and compliance. Designed for rugged, low-maintenance field deployment.',
    features: [
      'Multi-parameter quality sensing',
      'Low-power, rugged hardware',
      'Wireless data streaming',
      'Threshold alerts and logging',
    ],
    services: ['internet-of-things', 'pcb-designing', 'mcu-programming'],
    tech: ['STM32', 'BLE', 'Python'],
  },
  {
    slug: 'smart-street-lighting-system', icon: 'sparkles', category: 'Energy & Utilities',
    title: 'Smart Street Lighting System',
    summary: 'Adaptive, remotely controlled street lighting that cuts energy use.',
    overview:
      'A smart-lighting system that controls and monitors street lights remotely, dims adaptively based on schedule or motion, and reports faults automatically. Cities cut energy use and maintenance costs while improving uptime.',
    features: [
      'Remote control and scheduling',
      'Adaptive and motion-based dimming',
      'Automatic fault reporting',
      'Energy-use analytics',
    ],
    services: ['internet-of-things', 'mcu-programming', 'devops-cloud'],
    tech: ['ESP32', 'LoRaWAN', 'Grafana'],
  },
  {
    slug: 'smart-waste-management-system', icon: 'cube', category: 'Energy & Utilities',
    title: 'Smart Waste Management System',
    summary: 'Fill-level sensing and route optimisation for waste collection.',
    overview:
      'A waste-management platform that senses bin fill levels and optimises collection routes so trucks only visit bins that need emptying. Operators reduce fuel, labour and missed pickups.',
    features: [
      'Bin fill-level sensors',
      'Route optimisation',
      'Collection scheduling',
      'Operations dashboard',
    ],
    services: ['internet-of-things', 'web-app', 'artificial-intelligence'],
    tech: ['ESP32', 'MQTT', 'React'],
  },
  {
    slug: 'building-energy-management-system', icon: 'building', category: 'Energy & Utilities',
    title: 'Building Energy Management System',
    summary: 'Monitor and optimise energy across HVAC, lighting and equipment.',
    overview:
      'A building energy-management system that integrates HVAC, lighting and equipment data to monitor consumption and automate efficiency. Facility teams cut energy waste and get a single view of building performance.',
    features: [
      'HVAC and equipment integration',
      'Energy monitoring and analytics',
      'Automated efficiency rules',
      'Facility dashboards',
    ],
    services: ['internet-of-things', 'web-app', 'devops-cloud'],
    tech: ['Modbus TCP', 'Node.js', 'Grafana'],
  },

  // ===== Mobility & Transportation =====
  {
    slug: 'fleet-management-platform', icon: 'globe', category: 'Mobility & Transportation',
    title: 'Fleet Management Platform',
    summary: 'Track vehicles, drivers and trips with live telematics and reports.',
    overview:
      'A fleet-management platform that combines live vehicle telematics, trip history and driver behaviour into one operations dashboard. Fleet owners cut costs, improve safety and keep customers informed.',
    features: [
      'Live vehicle tracking',
      'Trip and driver analytics',
      'Maintenance and alerts',
      'Web and mobile dashboards',
    ],
    services: ['web-app', 'internet-of-things', 'mobile-app'],
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    slug: 'vehicle-telematics-unit', icon: 'circuit', category: 'Mobility & Transportation',
    title: 'Vehicle Telematics Unit',
    summary: 'An in-vehicle device streaming GPS, CAN and sensor data to the cloud.',
    overview:
      'An in-vehicle telematics unit that reads GPS, CAN-bus and sensor data and streams it to the cloud over cellular. The hardware and firmware foundation for fleet, insurance and connected-vehicle products.',
    features: [
      'GPS and CAN-bus acquisition',
      'Cellular connectivity',
      'Rugged automotive hardware',
      'Secure cloud telemetry',
    ],
    services: ['embedded-systems', 'pcb-designing', 'internet-of-things'],
    tech: ['STM32', '4G LTE', 'MQTT'],
  },
  {
    slug: 'ev-charging-management', icon: 'bolt', category: 'Mobility & Transportation',
    title: 'Electric Vehicle Charging Management',
    summary: 'Manage, monitor and bill EV charging stations from one platform.',
    overview:
      'An EV charging management platform that controls charge points, monitors sessions and handles billing through standard protocols. Operators run reliable charging networks with real-time visibility.',
    features: [
      'Charge-point control (OCPP)',
      'Session monitoring',
      'Billing and payments',
      'Driver app and dashboards',
    ],
    services: ['internet-of-things', 'web-app', 'embedded-systems'],
    tech: ['ESP32', 'OCPP', 'React'],
  },
  {
    slug: 'smart-parking-solution', icon: 'pin', category: 'Mobility & Transportation',
    title: 'Smart Parking Solution',
    summary: 'Real-time bay availability and guidance via connected sensors.',
    overview:
      'A smart-parking solution that detects bay occupancy with connected sensors and guides drivers to free spaces via app and signage. Operators increase utilisation and reduce congestion.',
    features: [
      'Bay occupancy sensing',
      'Real-time availability',
      'Driver guidance app',
      'Occupancy analytics',
    ],
    services: ['internet-of-things', 'mobile-app', 'mcu-programming'],
    tech: ['ESP32', 'LoRaWAN', 'React Native'],
  },
  {
    slug: 'smart-traffic-management-system', icon: 'migrate', category: 'Mobility & Transportation',
    title: 'Smart Traffic Management System',
    summary: 'Adaptive signal control and flow analytics from roadside sensors.',
    overview:
      'A traffic-management system that analyses roadside camera and sensor data to adapt signal timing and surface flow analytics. Cities reduce congestion and improve safety with data-driven control.',
    features: [
      'Vision-based flow detection',
      'Adaptive signal control',
      'Congestion analytics',
      'Operations dashboards',
    ],
    services: ['computer-vision', 'artificial-intelligence', 'devops-cloud'],
    tech: ['Python', 'OpenCV', 'Kubernetes'],
  },
  {
    slug: 'passenger-information-display', icon: 'message', category: 'Mobility & Transportation',
    title: 'Passenger Information Display System',
    summary: 'Real-time arrival and service displays for transit stops.',
    overview:
      'A passenger information system that drives real-time arrival, service and alert displays across transit stops and apps. Riders get accurate information and operators broadcast updates instantly.',
    features: [
      'Real-time arrival data',
      'Display and app delivery',
      'Service alerts and messaging',
      'Central content management',
    ],
    services: ['web-app', 'internet-of-things', 'devops-cloud'],
    tech: ['React', 'Node.js', 'MQTT'],
  },
  {
    slug: 'school-bus-tracking-system', icon: 'users', category: 'Mobility & Transportation',
    title: 'School Bus Tracking System',
    summary: 'Live bus tracking and arrival alerts for parents and schools.',
    overview:
      'A school-bus tracking system that gives parents live location and arrival alerts while schools manage routes and attendance. Improves safety and reduces wait-time anxiety for families.',
    features: [
      'Live GPS bus tracking',
      'Parent arrival alerts',
      'Route and stop management',
      'Onboard attendance',
    ],
    services: ['internet-of-things', 'mobile-app', 'web-app'],
    tech: ['ESP32', 'React Native', 'Firebase'],
  },
  {
    slug: 'gps-asset-tracking-platform', icon: 'target', category: 'Mobility & Transportation',
    title: 'GPS Asset Tracking Platform',
    summary: 'Track high-value assets anywhere with geofencing and alerts.',
    overview:
      'A GPS asset-tracking platform with low-power trackers and a cloud dashboard for locating high-value assets, setting geofences and receiving movement alerts. Works across logistics, rental and field operations.',
    features: [
      'Low-power GPS trackers',
      'Geofencing and alerts',
      'Movement and history',
      'Fleet/asset dashboard',
    ],
    services: ['internet-of-things', 'embedded-systems', 'web-app'],
    tech: ['STM32', 'NB-IoT', 'Node.js'],
  },

  // ===== Industrial & Manufacturing =====
  {
    slug: 'cold-chain-monitoring', icon: 'iot', category: 'Industrial & Manufacturing',
    title: 'Cold Chain Monitoring Solution',
    summary: 'End-to-end temperature and humidity tracking for perishable goods.',
    overview:
      'A cold-chain monitoring solution that tracks temperature and humidity from warehouse to delivery, raising alerts on excursions and proving compliance. Reduces spoilage and protects sensitive goods.',
    features: [
      'Temperature and humidity logging',
      'Excursion alerts',
      'Compliance reporting',
      'End-to-end visibility',
    ],
    services: ['internet-of-things', 'mcu-programming', 'web-app'],
    tech: ['ESP32', 'BLE', 'AWS IoT'],
  },
  {
    slug: 'warehouse-automation-platform', icon: 'cube', category: 'Industrial & Manufacturing',
    title: 'Warehouse Automation Platform',
    summary: 'Coordinate inventory, robotics and workflows across the warehouse.',
    overview:
      'A warehouse-automation platform that coordinates inventory, picking workflows and robotics integration to increase throughput and accuracy. Gives operations a real-time view of the whole floor.',
    features: [
      'Inventory and bin management',
      'Pick/pack workflows',
      'Robotics integration',
      'Real-time operations view',
    ],
    services: ['web-app', 'internet-of-things', 'workflow-automation'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'inventory-management-system', icon: 'layers', category: 'Industrial & Manufacturing',
    title: 'Inventory Management System',
    summary: 'Real-time stock tracking with barcode/RFID and reorder automation.',
    overview:
      'An inventory-management system with barcode and RFID tracking, multi-location stock and automated reordering. Keeps stock accurate and prevents both shortages and overstock.',
    features: [
      'Barcode and RFID tracking',
      'Multi-location stock',
      'Automated reorder points',
      'Reports and analytics',
    ],
    services: ['web-app', 'internet-of-things', 'enterprise-applications'],
    tech: ['React', 'Node.js', 'RFID'],
  },
  {
    slug: 'manufacturing-execution-system', icon: 'factory', category: 'Industrial & Manufacturing',
    title: 'Manufacturing Execution System (MES)',
    summary: 'Track production, quality and traceability across the shop floor.',
    overview:
      'A manufacturing execution system that tracks orders, production, quality and traceability across the shop floor in real time. Connects machines and operators to give full visibility from order to finished goods.',
    features: [
      'Production and order tracking',
      'Quality and traceability',
      'Machine and operator data',
      'OEE and reporting',
    ],
    services: ['enterprise-applications', 'internet-of-things', 'web-app'],
    tech: ['React', 'PostgreSQL', 'OPC UA'],
  },
  {
    slug: 'predictive-maintenance', icon: 'ai', category: 'Industrial & Manufacturing',
    title: 'Predictive Maintenance Platform',
    summary: 'Forecast equipment failures from telemetry with ML models.',
    overview:
      'A predictive-maintenance platform that ingests machine telemetry, detects anomalies and forecasts failures so maintenance happens before breakdowns. Cuts unplanned downtime and extends equipment life.',
    features: [
      'Telemetry ingestion pipeline',
      'Anomaly detection and forecasting',
      'Maintenance scheduling',
      'Risk dashboards and alerts',
    ],
    services: ['artificial-intelligence', 'machine-learning', 'internet-of-things'],
    tech: ['Python', 'TensorFlow', 'Grafana'],
  },
  {
    slug: 'industrial-machine-monitoring', icon: 'gear', category: 'Industrial & Manufacturing',
    title: 'Industrial Machine Monitoring',
    summary: 'Live machine health, OEE and alerts from connected sensors.',
    overview:
      'A machine-monitoring system that connects to industrial equipment to stream health, utilisation and OEE metrics live. Maintenance and operations teams catch issues early and improve productivity.',
    features: [
      'Sensor and PLC integration',
      'OEE and utilisation metrics',
      'Real-time alerts',
      'Historical analytics',
    ],
    services: ['internet-of-things', 'devops-cloud', 'artificial-intelligence'],
    tech: ['Modbus RTU', 'MQTT', 'Grafana'],
  },
  {
    slug: 'scada-dashboard', icon: 'chart', category: 'Industrial & Manufacturing',
    title: 'SCADA Dashboard',
    summary: 'Supervisory control and visualisation for industrial processes.',
    overview:
      'A SCADA dashboard that visualises and supervises industrial processes in real time, integrating PLCs and field devices through standard industrial protocols. Operators monitor and control plant from one screen.',
    features: [
      'Real-time process visualisation',
      'PLC and device integration',
      'Alarms and supervisory control',
      'Historical trends',
    ],
    services: ['internet-of-things', 'web-app', 'enterprise-applications'],
    tech: ['OPC UA', 'React', 'Node.js'],
  },
  {
    slug: 'industrial-iot-gateway', icon: 'server', category: 'Industrial & Manufacturing',
    title: 'Industrial IoT Gateway',
    summary: 'Bridge legacy machines to the cloud with edge processing.',
    overview:
      'An industrial IoT gateway that connects legacy machines and protocols to the cloud, processing and filtering data at the edge. Unlocks data from equipment that was never designed to be connected.',
    features: [
      'Multi-protocol machine connectivity',
      'Edge processing and filtering',
      'Secure cloud forwarding',
      'Remote management',
    ],
    services: ['embedded-linux', 'internet-of-things', 'devops-cloud'],
    tech: ['Embedded Linux', 'MQTT', 'Docker'],
  },
  {
    slug: 'smart-factory-monitoring', icon: 'network', category: 'Industrial & Manufacturing',
    title: 'Smart Factory Monitoring',
    summary: 'Plant-wide visibility into machines, energy and production.',
    overview:
      'A smart-factory monitoring platform that unifies machine, energy and production data into plant-wide dashboards and analytics. Gives leadership a real-time, data-driven view of the whole operation.',
    features: [
      'Plant-wide data unification',
      'Energy and production analytics',
      'Real-time dashboards',
      'Scalable cloud backend',
    ],
    services: ['internet-of-things', 'devops-cloud', 'artificial-intelligence'],
    tech: ['MQTT', 'Grafana', 'Kubernetes'],
  },
  {
    slug: 'remote-equipment-diagnostics', icon: 'tools', category: 'Industrial & Manufacturing',
    title: 'Remote Equipment Diagnostics',
    summary: 'Diagnose and update field equipment remotely to cut site visits.',
    overview:
      'A remote-diagnostics solution that lets engineers inspect, troubleshoot and update field equipment over the network. Cuts costly site visits and improves first-time fix rates.',
    features: [
      'Remote diagnostics and logs',
      'Over-the-air updates',
      'Alerting and ticketing',
      'Secure remote access',
    ],
    services: ['internet-of-things', 'mcu-programming', 'devops-cloud'],
    tech: ['ESP32', 'MQTT', 'Node.js'],
  },

  // ===== AgriTech & Environment =====
  {
    slug: 'smart-irrigation-controller', icon: 'iot', category: 'AgriTech & Environment',
    title: 'Smart Irrigation Controller',
    summary: 'Automated, sensor-driven irrigation that saves water and labour.',
    overview:
      'A smart-irrigation controller that waters crops automatically based on soil moisture, weather and schedules. Growers save water and labour while improving yield consistency.',
    features: [
      'Soil-moisture and weather inputs',
      'Automated zone control',
      'Mobile scheduling and overrides',
      'Water-usage analytics',
    ],
    services: ['internet-of-things', 'mcu-programming', 'mobile-app'],
    tech: ['ESP32', 'LoRaWAN', 'React Native'],
  },
  {
    slug: 'agriculture-iot-platform', icon: 'network', category: 'AgriTech & Environment',
    title: 'Agriculture IoT Platform',
    summary: 'Field sensors and analytics for precision farming decisions.',
    overview:
      'An agriculture IoT platform that aggregates field sensor data — soil, climate, crop — and turns it into precision-farming insights. Helps growers optimise inputs and increase yield.',
    features: [
      'Field sensor networks',
      'Crop and soil analytics',
      'Long-range connectivity',
      'Grower dashboards',
    ],
    services: ['internet-of-things', 'artificial-intelligence', 'mcu-programming'],
    tech: ['STM32', 'LoRaWAN', 'Python'],
  },
  {
    slug: 'livestock-monitoring-solution', icon: 'eye', category: 'AgriTech & Environment',
    title: 'Livestock Monitoring Solution',
    summary: 'Wearable trackers for animal health, location and behaviour.',
    overview:
      'A livestock-monitoring solution using wearable trackers to monitor animal health, location and behaviour, alerting farmers to issues early. Improves herd health and reduces losses.',
    features: [
      'Low-power animal wearables',
      'Health and activity tracking',
      'Location and geofencing',
      'Alerts and herd dashboard',
    ],
    services: ['embedded-systems', 'internet-of-things', 'mobile-app'],
    tech: ['Nordic nRF52', 'BLE', 'Firebase'],
  },
  {
    slug: 'air-quality-monitoring-network', icon: 'wave', category: 'AgriTech & Environment',
    title: 'Air Quality Monitoring Network',
    summary: 'Distributed sensors mapping air quality in real time.',
    overview:
      'A distributed air-quality monitoring network that measures pollutants across a city or site and maps them in real time. Supports environmental compliance and public health decisions.',
    features: [
      'Multi-pollutant sensing',
      'Distributed sensor network',
      'Real-time mapping',
      'Trends and alerts',
    ],
    services: ['internet-of-things', 'mcu-programming', 'devops-cloud'],
    tech: ['ESP32', 'MQTT', 'Grafana'],
  },
  {
    slug: 'environmental-monitoring-station', icon: 'globe', category: 'AgriTech & Environment',
    title: 'Environmental Monitoring Station',
    summary: 'Rugged stations logging weather and environmental data.',
    overview:
      'A rugged environmental monitoring station that logs weather and environmental parameters in remote locations and reports over long-range or cellular links. Built for years of unattended operation.',
    features: [
      'Multi-parameter logging',
      'Rugged, low-power hardware',
      'Long-range/cellular reporting',
      'Data portal and export',
    ],
    services: ['embedded-systems', 'internet-of-things', 'pcb-designing'],
    tech: ['STM32', 'LoRaWAN', 'Node.js'],
  },

  // ===== Smart Buildings & Access =====
  {
    slug: 'home-automation-platform', icon: 'building', category: 'Smart Buildings & Access',
    title: 'Home Automation Platform',
    summary: 'Control lighting, climate and devices from one connected app.',
    overview:
      'A home-automation platform that unifies lighting, climate and devices under one app with scenes, schedules and voice control. Built on interoperable standards so it works across brands.',
    features: [
      'Unified device control',
      'Scenes and automations',
      'Matter/standards support',
      'Mobile and voice control',
    ],
    services: ['internet-of-things', 'mobile-app', 'embedded-systems'],
    tech: ['ESP32', 'Matter', 'Flutter'],
  },
  {
    slug: 'smart-door-access-control', icon: 'shield', category: 'Smart Buildings & Access',
    title: 'Smart Door Access Control',
    summary: 'Secure, app- and card-based access with audit logging.',
    overview:
      'A smart access-control system supporting app, card and PIN entry with full audit logging and remote management. Secures doors while making access convenient for admins and users.',
    features: [
      'Card, app and PIN access',
      'Remote lock management',
      'Full audit logging',
      'Roles and schedules',
    ],
    services: ['internet-of-things', 'web-app', 'embedded-systems'],
    tech: ['ESP32', 'NFC', 'React'],
  },
  {
    slug: 'smart-attendance-system', icon: 'clock', category: 'Smart Buildings & Access',
    title: 'Smart Attendance System',
    summary: 'Automated attendance via RFID, app or biometrics.',
    overview:
      'A smart-attendance system that records attendance via RFID, app or biometrics and syncs to HR and payroll. Eliminates manual registers and gives real-time presence data.',
    features: [
      'RFID/app/biometric check-in',
      'Real-time attendance',
      'HR/payroll integration',
      'Reports and exports',
    ],
    services: ['internet-of-things', 'web-app', 'enterprise-applications'],
    tech: ['ESP32', 'RFID', 'Node.js'],
  },
  {
    slug: 'visitor-management-system', icon: 'users', category: 'Smart Buildings & Access',
    title: 'Visitor Management System',
    summary: 'Digital check-in, badging and host notifications for sites.',
    overview:
      'A visitor-management system that digitises check-in, prints badges and notifies hosts automatically. Improves security and gives a professional, contactless front-desk experience.',
    features: [
      'Digital visitor check-in',
      'Badge printing',
      'Host notifications',
      'Visitor logs and reports',
    ],
    services: ['web-app', 'enterprise-applications', 'apis-integrations'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'face-recognition-attendance', icon: 'eye', category: 'Smart Buildings & Access',
    title: 'Face Recognition Attendance',
    summary: 'Touchless attendance using on-device face recognition.',
    overview:
      'A touchless attendance system that uses on-device face recognition for fast, hygienic check-in. Runs at the edge for privacy and works without cards or contact.',
    features: [
      'On-device face recognition',
      'Touchless check-in',
      'Edge privacy processing',
      'HR/attendance integration',
    ],
    services: ['computer-vision', 'artificial-intelligence', 'embedded-linux'],
    tech: ['OpenCV', 'Python', 'Raspberry Pi'],
  },

  // ===== AI Vision & Surveillance =====
  {
    slug: 'ai-video-analytics-platform', icon: 'eye', category: 'AI Vision & Surveillance',
    title: 'AI Video Analytics Platform',
    summary: 'Detect events, objects and anomalies across video streams.',
    overview:
      'An AI video-analytics platform that processes camera streams to detect objects, events and anomalies in real time. Turns existing CCTV into a source of actionable insight.',
    features: [
      'Object and event detection',
      'Anomaly and intrusion alerts',
      'Multi-camera processing',
      'Search and analytics',
    ],
    services: ['computer-vision', 'artificial-intelligence', 'devops-cloud'],
    tech: ['OpenCV', 'PyTorch', 'Kubernetes'],
  },
  {
    slug: 'cctv-health-monitoring-system', icon: 'shield', category: 'AI Vision & Surveillance',
    title: 'CCTV Health Monitoring System',
    summary: 'Monitor camera uptime, tampering and feed quality at scale.',
    overview:
      'A CCTV health-monitoring system that continuously checks camera uptime, feed quality and tampering across large deployments. Ensures cameras are actually working when you need them.',
    features: [
      'Uptime and feed checks',
      'Tamper and blur detection',
      'Fleet-wide monitoring',
      'Alerts and reports',
    ],
    services: ['computer-vision', 'devops-cloud', 'web-app'],
    tech: ['Python', 'FastAPI', 'Grafana'],
  },
  {
    slug: 'ai-surveillance-solution', icon: 'target', category: 'AI Vision & Surveillance',
    title: 'AI Surveillance Solution',
    summary: 'Smart surveillance with detection, alerts and search.',
    overview:
      'An AI surveillance solution that adds intelligent detection, real-time alerts and fast video search to security operations. Helps teams respond faster and review footage efficiently.',
    features: [
      'Intelligent detection',
      'Real-time alerting',
      'Fast video search',
      'Edge or cloud deployment',
    ],
    services: ['computer-vision', 'artificial-intelligence', 'devops-cloud'],
    tech: ['OpenCV', 'TensorFlow', 'Docker'],
  },

  // ===== Healthcare =====
  {
    slug: 'medical-device-monitoring-platform', icon: 'shield', category: 'Healthcare',
    title: 'Medical Device Monitoring Platform',
    summary: 'Securely monitor connected medical devices and alerts.',
    overview:
      'A medical-device monitoring platform that securely connects devices, streams readings and surfaces clinical alerts. Built with privacy and reliability at the core.',
    features: [
      'Secure device connectivity',
      'Clinical alerting',
      'Privacy-first data handling',
      'Clinician dashboards',
    ],
    services: ['internet-of-things', 'web-app', 'devops-cloud'],
    tech: ['BLE', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'remote-patient-monitoring-system', icon: 'wave', category: 'Healthcare',
    title: 'Remote Patient Monitoring System',
    summary: 'Track vitals from home with wearables and clinician dashboards.',
    overview:
      'A remote patient-monitoring system that captures vitals from home wearables and presents them to clinicians with alerts. Extends care beyond the clinic and catches issues early.',
    features: [
      'Wearable vitals capture',
      'Clinician dashboards',
      'Threshold-based alerts',
      'Secure patient data',
    ],
    services: ['embedded-systems', 'mobile-app', 'artificial-intelligence'],
    tech: ['Nordic nRF52', 'Flutter', 'Firebase'],
  },
  {
    slug: 'hospital-asset-tracking', icon: 'pin', category: 'Healthcare',
    title: 'Hospital Asset Tracking',
    summary: 'Locate equipment and assets across the hospital in real time.',
    overview:
      'A hospital asset-tracking system that locates equipment in real time using BLE/RFID tags and a floor-aware dashboard. Saves staff time and reduces lost or hoarded equipment.',
    features: [
      'BLE/RFID asset tags',
      'Real-time location',
      'Floor-aware dashboard',
      'Utilisation analytics',
    ],
    services: ['internet-of-things', 'web-app', 'embedded-systems'],
    tech: ['BLE', 'RFID', 'React'],
  },
  {
    slug: 'laboratory-information-management-system', icon: 'flask', category: 'Healthcare',
    title: 'Laboratory Information Management System',
    summary: 'Manage samples, tests and results with full traceability.',
    overview:
      'A LIMS that manages samples, tests, results and instruments with end-to-end traceability and compliance. Streamlines lab workflows and protects data integrity.',
    features: [
      'Sample and test tracking',
      'Results and reporting',
      'Instrument integration',
      'Audit trails and compliance',
    ],
    services: ['enterprise-applications', 'web-app', 'apis-integrations'],
    tech: ['React', 'Django', 'PostgreSQL'],
  },

  // ===== Education =====
  {
    slug: 'learning-management-system', icon: 'users', category: 'Education',
    title: 'Learning Management System (LMS)',
    summary: 'Courses, content and progress tracking for learners at scale.',
    overview:
      'A learning-management system for delivering courses, content and assessments with progress tracking and analytics. Scales smoothly to large, concurrent learner communities.',
    features: [
      'Course and content delivery',
      'Assessments and grading',
      'Progress analytics',
      'Web and mobile access',
    ],
    services: ['web-app', 'mobile-app', 'devops-cloud'],
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    slug: 'online-examination-platform', icon: 'message', category: 'Education',
    title: 'Online Examination Platform',
    summary: 'Secure online tests with proctoring and instant scoring.',
    overview:
      'An online examination platform with secure delivery, proctoring and instant scoring at scale. Handles high concurrency during exam windows reliably.',
    features: [
      'Secure exam delivery',
      'Proctoring and anti-cheat',
      'Instant scoring',
      'High-concurrency scaling',
    ],
    services: ['web-app', 'devops-cloud', 'artificial-intelligence'],
    tech: ['React', 'Node.js', 'Redis'],
  },
  {
    slug: 'stem-learning-hardware-platform', icon: 'chip', category: 'Education',
    title: 'STEM Learning Hardware Platform',
    summary: 'Hands-on electronics kits with a guided learning app.',
    overview:
      'A STEM learning platform pairing hands-on electronics hardware with a guided app, so learners build real circuits and code. Brings engineering to life in classrooms and at home.',
    features: [
      'Hands-on electronics kit',
      'Guided learning app',
      'Project-based curriculum',
      'Progress tracking',
    ],
    services: ['embedded-systems', 'pcb-designing', 'mobile-app'],
    tech: ['ESP32', 'Arduino', 'Flutter'],
  },
  {
    slug: 'interactive-coding-education-kit', icon: 'code', category: 'Education',
    title: 'Interactive Coding Education Kit',
    summary: 'A coding kit that teaches programming through real hardware.',
    overview:
      'An interactive coding-education kit that teaches programming by controlling real hardware and visual feedback. Makes abstract coding concepts tangible and fun.',
    features: [
      'Hardware-driven coding',
      'Visual feedback',
      'Guided lessons',
      'Beginner to advanced paths',
    ],
    services: ['embedded-systems', 'web-app', 'product-consulting'],
    tech: ['Raspberry Pi', 'Python', 'React'],
  },

  // ===== Enterprise & Business Software =====
  {
    slug: 'erp-system', icon: 'building', category: 'Enterprise & Business Software',
    title: 'ERP System',
    summary: 'Unify finance, inventory and operations in one platform.',
    overview:
      'An ERP system that unifies finance, inventory, sales and operations into one platform with role-based access and reporting. Replaces disconnected tools with a single source of truth.',
    features: [
      'Finance and inventory',
      'Sales and operations',
      'Role-based access',
      'Reporting and dashboards',
    ],
    services: ['enterprise-applications', 'web-app', 'apis-integrations'],
    tech: ['React', 'Django', 'PostgreSQL'],
  },
  {
    slug: 'crm-platform', icon: 'users', category: 'Enterprise & Business Software',
    title: 'CRM Platform',
    summary: 'Manage leads, deals and customers with automation and insights.',
    overview:
      'A CRM platform to manage leads, deals and customer relationships with pipeline automation and analytics. Helps teams sell more and keep customers longer.',
    features: [
      'Lead and deal pipelines',
      'Customer 360 view',
      'Automation and reminders',
      'Sales analytics',
    ],
    services: ['enterprise-applications', 'web-app', 'workflow-automation'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'hrms-solution', icon: 'gem', category: 'Enterprise & Business Software',
    title: 'HRMS Solution',
    summary: 'Employee records, leave, attendance and onboarding in one place.',
    overview:
      'An HRMS that centralises employee records, leave, attendance and onboarding with self-service for staff. Streamlines HR operations and improves the employee experience.',
    features: [
      'Employee records',
      'Leave and attendance',
      'Onboarding workflows',
      'Employee self-service',
    ],
    services: ['enterprise-applications', 'web-app', 'workflow-automation'],
    tech: ['React', 'Node.js', 'MySQL'],
  },
  {
    slug: 'payroll-management-system', icon: 'chart', category: 'Enterprise & Business Software',
    title: 'Payroll Management System',
    summary: 'Automated payroll, taxes and payslips with compliance built in.',
    overview:
      'A payroll-management system that automates salary, tax and payslip processing with compliance rules built in. Reduces errors and the manual effort of every pay cycle.',
    features: [
      'Automated payroll runs',
      'Tax and compliance',
      'Payslip generation',
      'Integrations with HR/finance',
    ],
    services: ['enterprise-applications', 'workflow-automation', 'web-app'],
    tech: ['Django', 'PostgreSQL', 'React'],
  },
  {
    slug: 'document-management-system', icon: 'layers', category: 'Enterprise & Business Software',
    title: 'Document Management System',
    summary: 'Store, version and search documents with access control.',
    overview:
      'A document-management system to store, version, search and control access to documents across an organisation. Brings order and security to scattered files.',
    features: [
      'Versioned document store',
      'Full-text search',
      'Access control',
      'Audit and retention',
    ],
    services: ['enterprise-applications', 'web-app', 'apis-integrations'],
    tech: ['React', 'Node.js', 'Elasticsearch'],
  },
  {
    slug: 'project-management-platform', icon: 'workflow', category: 'Enterprise & Business Software',
    title: 'Project Management Platform',
    summary: 'Plan, track and collaborate on projects and tasks.',
    overview:
      'A project-management platform for planning, tracking and collaborating on work with boards, timelines and reporting. Keeps teams aligned and projects on schedule.',
    features: [
      'Boards and timelines',
      'Tasks and assignments',
      'Collaboration and comments',
      'Progress reporting',
    ],
    services: ['web-app', 'saas-platforms', 'workflow-automation'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'helpdesk-ticketing-system', icon: 'message', category: 'Enterprise & Business Software',
    title: 'Helpdesk & Ticketing System',
    summary: 'Manage support tickets with SLAs, routing and analytics.',
    overview:
      'A helpdesk and ticketing system that captures, routes and resolves support requests with SLAs and analytics. Improves response times and customer satisfaction.',
    features: [
      'Multi-channel tickets',
      'Routing and SLAs',
      'Knowledge base',
      'Support analytics',
    ],
    services: ['web-app', 'enterprise-applications', 'workflow-automation'],
    tech: ['React', 'Node.js', 'Redis'],
  },
  {
    slug: 'procurement-management-system', icon: 'cube', category: 'Enterprise & Business Software',
    title: 'Procurement Management System',
    summary: 'Streamline purchasing, approvals and supplier orders.',
    overview:
      'A procurement-management system that streamlines requisitions, approvals and supplier orders with full spend visibility. Controls cost and removes purchasing bottlenecks.',
    features: [
      'Requisitions and approvals',
      'Supplier and PO management',
      'Spend visibility',
      'Audit trails',
    ],
    services: ['enterprise-applications', 'web-app', 'workflow-automation'],
    tech: ['React', 'Django', 'PostgreSQL'],
  },
  {
    slug: 'vendor-management-portal', icon: 'network', category: 'Enterprise & Business Software',
    title: 'Vendor Management Portal',
    summary: 'Onboard, evaluate and manage vendors in one portal.',
    overview:
      'A vendor-management portal to onboard, evaluate and manage suppliers with documents, compliance and performance tracking. Centralises vendor relationships and reduces risk.',
    features: [
      'Vendor onboarding',
      'Document and compliance',
      'Performance scoring',
      'Self-service portal',
    ],
    services: ['enterprise-applications', 'web-app', 'apis-integrations'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'customer-self-service-portal', icon: 'globe', category: 'Enterprise & Business Software',
    title: 'Customer Self-Service Portal',
    summary: 'Let customers manage accounts, orders and support themselves.',
    overview:
      'A customer self-service portal where customers manage accounts, orders and support without contacting staff. Reduces support load and improves customer experience.',
    features: [
      'Account and order management',
      'Self-service support',
      'Secure authentication',
      'Knowledge and FAQs',
    ],
    services: ['web-app', 'enterprise-applications', 'apis-integrations'],
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'saas-subscription-management', icon: 'infinity', category: 'Enterprise & Business Software',
    title: 'SaaS Subscription Management Platform',
    summary: 'Plans, billing and usage metering for SaaS products.',
    overview:
      'A subscription-management platform handling plans, billing, usage metering and dunning for SaaS products. Lets you monetise and scale recurring revenue cleanly.',
    features: [
      'Plans and pricing',
      'Recurring billing',
      'Usage metering',
      'Dunning and analytics',
    ],
    services: ['saas-platforms', 'web-app', 'apis-integrations'],
    tech: ['React', 'Node.js', 'Supabase'],
  },
  {
    slug: 'api-integration-platform', icon: 'braces', category: 'Enterprise & Business Software',
    title: 'API Integration Platform',
    summary: 'Connect apps and data with reusable, monitored integrations.',
    overview:
      'An API integration platform to connect apps and data through reusable, monitored integrations and event pipelines. Removes brittle point-to-point glue between systems.',
    features: [
      'Reusable integrations',
      'Event pipelines and webhooks',
      'Monitoring and retries',
      'Auth and rate limiting',
    ],
    services: ['apis-integrations', 'workflow-automation', 'devops-cloud'],
    tech: ['Node.js', 'GraphQL', 'Kafka'],
  },

  // ===== Cloud & DevOps =====
  {
    slug: 'cloud-migration-modernization', icon: 'migrate', category: 'Cloud & DevOps',
    title: 'Cloud Migration & Modernization Project',
    summary: 'Move and modernise legacy workloads to the cloud with low risk.',
    overview:
      'A cloud migration and modernization engagement that assesses, re-architects and moves legacy workloads to the cloud with minimal downtime. Cuts cost and unlocks scalability.',
    features: [
      'Assessment and planning',
      'Re-architecture',
      'Phased migration',
      'Cost and security optimisation',
    ],
    services: ['cloud-migration', 'devops-cloud', 'infrastructure-automation'],
    tech: ['AWS', 'Terraform', 'Docker'],
  },
  {
    slug: 'devops-cicd-automation-platform', icon: 'infinity', category: 'Cloud & DevOps',
    title: 'DevOps CI/CD Automation Platform',
    summary: 'Automated build, test and deploy pipelines across services.',
    overview:
      'A DevOps platform that standardises build, test and deploy pipelines across services with observability built in. Teams ship faster and more reliably.',
    features: [
      'CI/CD pipelines as code',
      'Automated testing',
      'Zero-downtime deploys',
      'Monitoring and rollback',
    ],
    services: ['devops-cloud', 'kubernetes', 'infrastructure-automation'],
    tech: ['GitHub Actions', 'Docker', 'Kubernetes'],
  },
  {
    slug: 'kubernetes-infrastructure-deployment', icon: 'cube', category: 'Cloud & DevOps',
    title: 'Kubernetes Infrastructure Deployment',
    summary: 'Production-grade Kubernetes platforms with autoscaling.',
    overview:
      'A production-grade Kubernetes deployment with autoscaling, observability and security baked in. Gives teams a reliable platform to run containerised workloads at scale.',
    features: [
      'Cluster design and setup',
      'Autoscaling and self-healing',
      'Observability and security',
      'GitOps delivery',
    ],
    services: ['kubernetes', 'devops-cloud', 'infrastructure-automation'],
    tech: ['Kubernetes', 'Terraform', 'Prometheus'],
  },

  // ===== AI & Analytics =====
  {
    slug: 'ai-chatbot-virtual-assistant', icon: 'message', category: 'AI & Analytics',
    title: 'AI Chatbot & Virtual Assistant',
    summary: 'LLM-powered assistants grounded in your own knowledge base.',
    overview:
      'An LLM-powered chatbot and virtual assistant grounded in your own knowledge base, with guardrails and tool use. Automates support and Q&A with accurate, cited answers.',
    features: [
      'Retrieval-augmented answers',
      'Tool and API actions',
      'Guardrails and safety',
      'Web and channel integration',
    ],
    services: ['generative-ai', 'ai-agents', 'apis-integrations'],
    tech: ['LangChain', 'OpenAI API', 'FastAPI'],
  },
  {
    slug: 'ai-document-processing-system', icon: 'robot', category: 'AI & Analytics',
    title: 'AI Document Processing System',
    summary: 'Extract, classify and route data from documents automatically.',
    overview:
      'An AI document-processing system that extracts, classifies and routes data from forms, invoices and documents automatically. Removes manual data entry and speeds up workflows.',
    features: [
      'Document extraction (OCR/NLP)',
      'Classification and routing',
      'Human-in-the-loop review',
      'System integrations',
    ],
    services: ['nlp', 'artificial-intelligence', 'workflow-automation'],
    tech: ['Python', 'Hugging Face Transformers', 'FastAPI'],
  },
  {
    slug: 'predictive-analytics-dashboard', icon: 'network', category: 'AI & Analytics',
    title: 'Predictive Analytics Dashboard',
    summary: 'Forecast trends and risks with models behind a live dashboard.',
    overview:
      'A predictive-analytics dashboard that surfaces forecasts and risk scores from machine-learning models in a live, interactive interface. Helps teams act on what is likely to happen next.',
    features: [
      'Forecasting models',
      'Risk scoring',
      'Interactive dashboards',
      'Automated refresh',
    ],
    services: ['machine-learning', 'artificial-intelligence', 'web-app'],
    tech: ['Python', 'scikit-learn', 'React'],
  },
  {
    slug: 'business-intelligence-dashboard', icon: 'chart', category: 'AI & Analytics',
    title: 'Business Intelligence Dashboard',
    summary: 'Self-serve dashboards that turn data into decisions.',
    overview:
      'A business-intelligence solution with self-serve dashboards and pipelines that turn raw data into clear, shareable insight. Gives every team data they can actually use.',
    features: [
      'Data pipelines and modelling',
      'Self-serve dashboards',
      'Shareable reports',
      'Scheduled refresh',
    ],
    services: ['web-app', 'devops-cloud', 'apis-integrations'],
    tech: ['Metabase', 'PostgreSQL', 'Apache Airflow'],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)

export const projectCategories = [...new Set(projects.map((p) => p.category))]
