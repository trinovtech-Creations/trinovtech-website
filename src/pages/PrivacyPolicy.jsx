import LegalPage, { LegalSection } from './LegalPage.jsx'

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="30 June 2026"
      intro="This Privacy Policy explains how Trinovtech collects, uses, discloses and safeguards your information when you visit trinovtech.in or engage our services."
    >
      <LegalSection n={1} title="Introduction">
        <p>
          Trinovtech (“Trinovtech”, “we”, “us” or “our”) is a technology consulting and
          product-development company based in Coimbatore, Tamil Nadu, India. We are committed
          to protecting your privacy and handling your personal data in an open and transparent
          manner. By accessing our website or contacting us, you agree to the practices
          described in this Policy.
        </p>
      </LegalSection>

      <LegalSection n={2} title="Information We Collect">
        <p>We collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Information you provide.</strong> When you submit our contact form or reach
            out to us, we collect your name, email address, subject and the contents of your
            message. If you engage us for a project, we may collect additional business and
            billing details.
          </li>
          <li>
            <strong>Information collected automatically.</strong> Like most websites, we may
            automatically collect technical data such as your IP address, browser type, device
            information, pages viewed, referring URLs and the dates/times of your visits.
          </li>
          <li>
            <strong>Cookies and similar technologies.</strong> We may use cookies and local
            storage to keep the site working, remember preferences and understand how the site
            is used.
          </li>
        </ul>
        <p>We do not knowingly collect sensitive personal data through this website.</p>
      </LegalSection>

      <LegalSection n={3} title="How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul>
          <li>respond to your enquiries and provide the services you request;</li>
          <li>operate, maintain, secure and improve our website and services;</li>
          <li>communicate with you about projects, proposals, updates and support;</li>
          <li>comply with legal obligations and enforce our agreements; and</li>
          <li>analyse usage trends to enhance user experience.</li>
        </ul>
      </LegalSection>

      <LegalSection n={4} title="Legal Bases for Processing">
        <p>
          Where applicable law requires, we process your personal data on the basis of your
          consent, the performance of a contract with you, our legitimate business interests
          (such as securing and improving our services), and compliance with legal obligations.
        </p>
      </LegalSection>

      <LegalSection n={5} title="How We Share Information">
        <p>
          We do not sell your personal information. We may share it only in limited
          circumstances:
        </p>
        <ul>
          <li>
            <strong>Service providers.</strong> With trusted third parties who host our
            infrastructure, store data or help us operate the business, under appropriate
            confidentiality obligations.
          </li>
          <li>
            <strong>Legal requirements.</strong> Where required by law, regulation, legal
            process or governmental request.
          </li>
          <li>
            <strong>Business transfers.</strong> In connection with a merger, acquisition or
            sale of assets, subject to this Policy.
          </li>
        </ul>
      </LegalSection>

      <LegalSection n={6} title="Data Security">
        <p>
          We implement reasonable technical and organisational measures designed to protect your
          information against unauthorised access, alteration, disclosure or destruction.
          However, no method of transmission over the internet or electronic storage is
          completely secure, and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection n={7} title="Data Retention">
        <p>
          We retain personal data only for as long as necessary to fulfil the purposes set out
          in this Policy, including to meet legal, accounting or reporting requirements, after
          which it is deleted or anonymised.
        </p>
      </LegalSection>

      <LegalSection n={8} title="Your Rights">
        <p>
          Subject to applicable law, you may have the right to access, correct, update or delete
          your personal data, to object to or restrict certain processing, and to withdraw
          consent. To exercise any of these rights, contact us using the details below and we
          will respond within a reasonable timeframe.
        </p>
      </LegalSection>

      <LegalSection n={9} title="Cookies">
        <p>
          You can set your browser to refuse some or all cookies, or to alert you when cookies
          are being sent. Some parts of the website may not function properly if you disable
          cookies.
        </p>
      </LegalSection>

      <LegalSection n={10} title="Third-Party Links">
        <p>
          Our website may contain links to third-party sites and services. We are not
          responsible for the privacy practices or content of those third parties, and we
          encourage you to review their privacy policies.
        </p>
      </LegalSection>

      <LegalSection n={11} title="Children’s Privacy">
        <p>
          Our website and services are not directed to children under the age of 18, and we do
          not knowingly collect personal data from children. If you believe a child has provided
          us with personal data, please contact us so we can remove it.
        </p>
      </LegalSection>

      <LegalSection n={12} title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The “Last updated” date at the top
          indicates when it was last revised. Material changes will be posted on this page, and
          your continued use of the website constitutes acceptance of the updated Policy.
        </p>
      </LegalSection>

      <LegalSection n={13} title="Contact Us">
        <p>If you have any questions about this Privacy Policy or our data practices, contact us:</p>
        <ul className="legal-contact">
          <li><strong>Trinovtech</strong></li>
          <li>Site No 15, 2nd St, Sri Amman Ngr, Cheranmangr, Vilankurichi, Coimbatore North, Coimbatore, Tamil Nadu, India — 641035</li>
          <li>Email: <a href="mailto:info@trinovtech.in">info@trinovtech.in</a></li>
          <li>Phone: <a href="tel:+917395881708">+91 73958 81708</a></li>
          <li>WhatsApp: <a href="https://wa.me/919150411708" target="_blank" rel="noopener noreferrer">+91 91504 11708</a></li>
        </ul>
      </LegalSection>
    </LegalPage>
  )
}
