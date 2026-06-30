import Icon from './Icon.jsx'

// Fixed WhatsApp + Call buttons pinned to the bottom-right on every page.
export default function FloatingActions() {
  return (
    <div className="float-actions" aria-label="Quick contact">
      <a
        className="float-actions__btn float-actions__btn--whatsapp"
        href="https://wa.me/919150411708"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        data-tip="Chat on WhatsApp"
      >
        <Icon name="whatsapp" mono size={26} />
      </a>
      <a
        className="float-actions__btn float-actions__btn--call"
        href="tel:+917395881708"
        aria-label="Call us"
        data-tip="Call us"
      >
        <Icon name="phone" mono size={24} />
      </a>
    </div>
  )
}
