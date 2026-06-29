// Branded route-transition overlay. Shows the logo-mark with a pulsing ring
// and an indeterminate progress bar while `show` is true, then fades out.
export default function PageLoader({ show }) {
  return (
    <div
      className={`page-loader ${show ? 'is-active' : 'is-done'}`}
      role="status"
      aria-live="polite"
      aria-hidden={!show}
    >
      <div className="page-loader__inner">
        <div className="page-loader__mark">
          <span className="page-loader__ring" />
          <img src="/logo-mark.png" alt="Trinovtech" className="page-loader__logo" />
        </div>
        <div className="page-loader__bar"><span /></div>
        <span className="page-loader__sr">Loading…</span>
      </div>
    </div>
  )
}
