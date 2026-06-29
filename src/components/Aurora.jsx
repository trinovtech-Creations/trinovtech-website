// Ambient animated gradient backdrop — softly drifting blurred blobs.
// variant: 'brand' (navy/green on light) | 'light' (white glows on dark).
export default function Aurora({ variant = 'brand' }) {
  return (
    <div className={`aurora aurora--${variant}`} aria-hidden="true">
      <span className="aurora__blob aurora__blob--1" />
      <span className="aurora__blob aurora__blob--2" />
      <span className="aurora__blob aurora__blob--3" />
    </div>
  )
}
