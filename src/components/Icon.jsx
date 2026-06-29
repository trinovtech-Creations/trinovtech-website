// Unified professional line-icon set, themed in the brand navy→green gradient.
// Usage: <Icon name="cloud" />   |   <Icon name="twitter" mono />  (currentColor)
// Render <IconDefs /> once near the app root so icons can reference the gradient.

const PATHS = {
  ai: (
    <>
      <rect x="8" y="8" width="8" height="8" rx="1.5" />
      <rect x="10.5" y="10.5" width="3" height="3" rx="0.5" />
      <path d="M10 8V5M14 8V5M10 19v-3M14 19v-3M8 10H5M8 14H5M19 10h-3M19 14h-3" />
    </>
  ),
  iot: (
    <>
      <circle cx="12" cy="12" r="1.4" />
      <path d="M9 9a4.5 4.5 0 0 0 0 6M15 9a4.5 4.5 0 0 1 0 6" />
      <path d="M6.5 6.5a8 8 0 0 0 0 11M17.5 6.5a8 8 0 0 1 0 11" />
    </>
  ),
  cloud: <path d="M7.5 18a4 4 0 0 1-.3-8 5 5 0 0 1 9.6-1.4A3.8 3.8 0 0 1 17 18Z" />,
  chip: (
    <>
      <rect x="6" y="8" width="12" height="8" rx="1" />
      <path d="M10 8v8M14 8v8M8 16v2M12 16v2M16 16v2M8 8V6M12 8V6M16 8V6" />
    </>
  ),
  timer: (
    <>
      <circle cx="12" cy="13" r="7" />
      <path d="M12 13V9.5M12 13l3 1.5" />
      <path d="M9.5 3h5M12 3v3" />
    </>
  ),
  circuit: (
    <>
      <circle cx="6.5" cy="7" r="1.5" />
      <circle cx="17.5" cy="7" r="1.5" />
      <circle cx="17.5" cy="17" r="1.5" />
      <path d="M8 7h5l2 2v6.5M6.5 8.5V14l3 3h6.5" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M11 18h2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" />
    </>
  ),
  tools: (
    <>
      <path d="M15.5 7.5a3.5 3.5 0 0 1 4.4-4.4l-2.6 2.6 1.5 1.5 2.6-2.6a3.5 3.5 0 0 1-4.4 4.4l-7.1 7.1a2 2 0 1 1-2.8-2.8z" />
    </>
  ),
  building: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-3h4v3" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 3c3 1.6 5 5 5 9l-2.4 2.4H9.4L7 12c0-4 2-7.4 5-9Z" />
      <circle cx="12" cy="10" r="1.6" />
      <path d="M9.4 14.4 7 17M14.6 14.4 17 17M10.5 18c-.6 1-.6 2 0 3M13.5 18c.6 1 .6 2 0 3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M15.5 6.4a3 3 0 0 1 0 5.7M16 14.2a5.5 5.5 0 0 1 4.5 4.8" />
    </>
  ),
  chart: (
    <>
      <path d="M5 5v14h14" />
      <path d="M8 14l3-3 2 2 4.5-4.5" />
      <path d="M14.5 8.5H18v3.5" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.6M12 18.4V21M21 12h-2.6M5.6 12H3M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8M18.4 18.4l-1.8-1.8M7.4 7.4 5.6 5.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  bolt: <path d="M13 3 5 13h6l-2 8 8-11h-6z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  gem: (
    <>
      <path d="M6 3h12l3 5-9 13L3 8z" />
      <path d="M3 8h18M9 3l-1 5 4 13 4-13-1-5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  whatsapp: (
    <>
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M16.5 7.5v.01" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V16M7.5 7.5v.01M11 16v-5.5M11 13a2 2 0 0 1 4 0V16" />
    </>
  ),
  twitter: <path d="M5 5l14 14M19 5 5 19" />,
  tiktok: (
    <>
      <path d="M14 4v9.5a3.5 3.5 0 1 1-3-3.47" />
      <path d="M14 4a4.5 4.5 0 0 0 4.5 4.5" />
    </>
  ),
  dot: <circle cx="12" cy="12" r="3" />,
}

export function IconDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <linearGradient id="tnt-icon-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#163a5c" />
          <stop offset="1" stopColor="#1e7d5a" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Icon({ name, size = 24, mono = false, className = '' }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={mono ? 'currentColor' : 'url(#tnt-icon-grad)'}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name] || PATHS.dot}
    </svg>
  )
}
