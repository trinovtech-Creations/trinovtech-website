import { Link } from 'react-router-dom'
import LegalPage, { LegalSection } from './LegalPage.jsx'

export default function TermsConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="30 June 2026"
      intro="These Terms & Conditions govern your access to and use of the Trinovtech website and services. Please read them carefully."
    >
      <LegalSection n={1} title="Acceptance of Terms">
        <p>
          By accessing or using trinovtech.in (the “Website”) or engaging Trinovtech
          (“Trinovtech”, “we”, “us” or “our”) for any services, you agree to be bound by these
          Terms &amp; Conditions and our <Link to="/privacy-policy">Privacy Policy</Link>. If you do
          not agree, please do not use the Website or our services.
        </p>
      </LegalSection>

      <LegalSection n={2} title="About Us">
        <p>
          Trinovtech is a technology consulting and product-development company offering services
          including artificial intelligence, DevOps &amp; cloud, IoT, embedded and firmware
          engineering, PCB design, and mobile and web application development. The Website
          provides information about these services.
        </p>
      </LegalSection>

      <LegalSection n={3} title="Eligibility">
        <p>
          You must be at least 18 years old and capable of forming a legally binding contract to
          use our Website and services. By using them, you represent that you meet these
          requirements.
        </p>
      </LegalSection>

      <LegalSection n={4} title="Use of the Website">
        <p>You agree to use the Website lawfully and not to:</p>
        <ul>
          <li>violate any applicable law, regulation or third-party right;</li>
          <li>attempt to gain unauthorised access to the Website, servers or networks;</li>
          <li>introduce viruses, malware or any harmful or disruptive code;</li>
          <li>scrape, harvest or collect data from the Website without permission;</li>
          <li>interfere with or disrupt the integrity or performance of the Website; or</li>
          <li>use the Website to transmit unsolicited or unlawful communications.</li>
        </ul>
      </LegalSection>

      <LegalSection n={5} title="Intellectual Property">
        <p>
          All content on the Website — including text, graphics, logos, icons, images, code and
          design — is the property of Trinovtech or its licensors and is protected by applicable
          intellectual-property laws. You may not copy, reproduce, distribute, modify or create
          derivative works from any part of the Website without our prior written consent.
          Ownership of intellectual property created during a client engagement is governed by
          the relevant project agreement.
        </p>
      </LegalSection>

      <LegalSection n={6} title="Services, Proposals & Engagements">
        <p>
          Information on the Website is for general guidance only and does not constitute a
          binding offer. Any project we undertake is governed by a separate written agreement,
          proposal or statement of work specifying scope, deliverables, timelines, fees and
          payment terms. In the event of a conflict, that agreement prevails over these Terms for
          the relevant engagement.
        </p>
      </LegalSection>

      <LegalSection n={7} title="Submissions & Communications">
        <p>
          Any information you submit through the Website (for example, via the contact form) must
          be accurate and lawful. By submitting ideas, feedback or suggestions, you grant us a
          non-exclusive, royalty-free right to use them to operate and improve our services,
          without obligation to you.
        </p>
      </LegalSection>

      <LegalSection n={8} title="Third-Party Links & Services">
        <p>
          The Website may reference or link to third-party websites, tools or technologies. We do
          not control and are not responsible for their content, policies or practices. Your use
          of any third-party service is at your own risk and subject to that party’s terms.
        </p>
      </LegalSection>

      <LegalSection n={9} title="Disclaimer of Warranties">
        <p>
          The Website and its content are provided on an “as is” and “as available” basis,
          without warranties of any kind, whether express or implied, including but not limited
          to warranties of merchantability, fitness for a particular purpose and
          non-infringement. We do not warrant that the Website will be uninterrupted, secure or
          error-free.
        </p>
      </LegalSection>

      <LegalSection n={10} title="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Trinovtech and its directors, employees and
          affiliates shall not be liable for any indirect, incidental, special, consequential or
          punitive damages, or any loss of profits, data, goodwill or business, arising out of or
          in connection with your use of the Website. Nothing in these Terms excludes liability
          that cannot be excluded under applicable law.
        </p>
      </LegalSection>

      <LegalSection n={11} title="Indemnification">
        <p>
          You agree to indemnify and hold harmless Trinovtech from and against any claims,
          liabilities, damages, losses and expenses (including reasonable legal fees) arising out
          of your breach of these Terms or your misuse of the Website.
        </p>
      </LegalSection>

      <LegalSection n={12} title="Privacy">
        <p>
          Your use of the Website is also governed by our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>, which describes how we collect and use
          your information.
        </p>
      </LegalSection>

      <LegalSection n={13} title="Termination">
        <p>
          We may suspend or terminate your access to the Website at any time, without notice, if
          we believe you have violated these Terms or applicable law. Provisions that by their
          nature should survive termination will continue to apply.
        </p>
      </LegalSection>

      <LegalSection n={14} title="Governing Law & Jurisdiction">
        <p>
          These Terms are governed by and construed in accordance with the laws of India. Any
          disputes arising out of or relating to these Terms or the Website shall be subject to
          the exclusive jurisdiction of the courts of Coimbatore, Tamil Nadu, India.
        </p>
      </LegalSection>

      <LegalSection n={15} title="Changes to These Terms">
        <p>
          We may revise these Terms from time to time. The “Last updated” date indicates the most
          recent revision. Your continued use of the Website after changes are posted constitutes
          your acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection n={16} title="Contact Us">
        <p>For questions about these Terms &amp; Conditions, contact us:</p>
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
