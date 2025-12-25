'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12 pb-8 border-b-2 border-gray-300">
          <h1 className="text-4xl md:text-5xl font-black text-black mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: December 25, 2025 | Version 2.0</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8 text-gray-800">
          <div>
            <p className="leading-relaxed mb-4">
              ObjectWire ("we," "our," or "us") operates as a verification-first intelligence platform providing cited business and technology analysis. This Privacy Policy describes how we collect, use, disclose, and protect your personal information when you access or use our services, including ObjectWire.org, our API services, newsletter subscriptions, and any related services (collectively, the "Services").
            </p>
            <p className="leading-relaxed">
              By accessing or using our Services, you acknowledge that you have read, understood, and agree to this Privacy Policy. If you do not agree with any part of this Privacy Policy, you must not use our Services.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed mb-3">We collect information you voluntarily provide when you register for an account or newsletter subscription, submit content or feedback, contact customer support, or participate in surveys or reader engagement activities. This information may include your name, email address, username and password (encrypted), payment information (processed securely through third-party payment processors), professional affiliation, job title, company name, communication preferences, and any other information you choose to provide.</p>
            <p className="leading-relaxed mb-3">When you access our Services, we automatically collect certain technical and usage information including your IP address, browser type and version, operating system, device identifiers, pages visited, articles viewed, search queries, time spent on pages, approximate geographic location, and information from cookies and tracking technologies. API users' request logs, authentication tokens, query parameters, and response times are also collected for service optimization and security purposes.</p>
            <p className="leading-relaxed">We may receive information about you from analytics and performance monitoring services, payment processors, and public databases for content verification. We do not purchase personal data from data brokers or use third-party data for targeted advertising. As an intelligence platform, we collect, analyze, and publish information from publicly available sources including government filings, public company disclosures, news articles, public records, and social media posts by public figures.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-3">We use the information we collect to provide, maintain, and improve our Services; personalize content recommendations based on your reading history and interests; process transactions and deliver subscriptions; respond to your requests and feedback; develop new features and enhance content quality; and conduct research and analysis to improve editorial relevance and accuracy.</p>
            <p className="leading-relaxed mb-3">We use your information for communication purposes including sending newsletters, content alerts, and notifications based on your preferences; providing customer support and technical assistance; sending administrative messages about account updates and security alerts; and responding to your inquiries.</p>
            <p className="leading-relaxed mb-3">We employ your information for security and fraud prevention by detecting and preventing fraud and security incidents, verifying identity and authenticating users, monitoring for unauthorized access or misuse, complying with legal obligations, enforcing our Terms of Service, and investigating and resolving disputes.</p>
            <p className="leading-relaxed">We analyze usage patterns and trends to improve user experience, generate aggregated and anonymized statistics and reports, measure content performance, conduct A/B testing, and understand which topics and formats serve readers most effectively.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">3. How We Share Your Information</h2>
            <p className="leading-relaxed mb-3 font-semibold">
              We do not sell your personal information to third parties. We do not use your personal information for targeted advertising.
            </p>
            <p className="leading-relaxed mb-3">We may share your information with trusted third-party service providers who assist us in operating our Services, including cloud hosting and infrastructure providers (AWS, Vercel, Cloudflare), payment processors (Stripe, PayPal), email delivery platforms, analytics services with IP anonymization enabled, and customer support platforms. These providers are contractually obligated to protect your information and use it only for specified purposes.</p>
            <p className="leading-relaxed mb-3">If ObjectWire is involved in a merger, acquisition, reorganization, or similar transaction, your information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have regarding your information.</p>
            <p className="leading-relaxed mb-3">We may disclose your information if required by law or in response to subpoenas, court orders, government or regulatory requests, national security or law enforcement requirements, protection of our rights or property, investigation of fraud or violations of our Terms, or prevention of imminent harm to persons or property.</p>
            <p className="leading-relaxed">We may share aggregated, anonymized, or de-identified data that cannot reasonably be used to identify you. Any content you post publicly on our Services may be viewed, indexed, and republished by third parties, including search engines.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">4. Data Retention</h2>
            <p className="leading-relaxed mb-3">We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Account data is retained as long as your account is active or as needed to provide Services. Published editorial content is retained indefinitely for archival and reference purposes. Usage logs and analytics data are typically retained for 24-36 months, then aggregated or deleted. Marketing and communication data is retained until you unsubscribe or request deletion. Data required for legal compliance, dispute resolution, and security purposes is retained for the duration required by applicable law or regulation.</p>
            <p className="leading-relaxed">You may request deletion of your personal information at any time by contacting privacy@objectwire.org, subject to legal retention requirements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">5. Your Privacy Rights</h2>
            <p className="leading-relaxed mb-3">Depending on your jurisdiction, you may have rights including access to your personal information and the ability to request a copy in a portable, machine-readable format; correction or update of inaccurate or incomplete personal information; deletion (right to be forgotten) of your personal information subject to legal retention obligations; objection to certain processing or request for restriction of processing; and opt-out of marketing emails at any time.</p>
            <p className="leading-relaxed mb-3">You may manage cookie preferences through your browser settings or our cookie preference center, though disabling certain cookies may limit functionality. Our Services currently do not respond to Do Not Track (DNT) signals, but you may configure your browser to block tracking technologies.</p>
            <p className="leading-relaxed">To exercise your rights, contact us at privacy@objectwire.org with a description of your request and sufficient information to verify your identity. We will respond within the timeframe required by applicable law (typically 30 days).</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">6. International Data Transfers</h2>
            <p className="leading-relaxed mb-3">ObjectWire operates primarily in the United States. If you access our Services from outside the United States, your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate.</p>
            <p className="leading-relaxed">We implement appropriate safeguards for international data transfers, including Standard Contractual Clauses (SCCs) approved by the European Commission, adequacy decisions for transfers to jurisdictions with adequate data protection, Data Processing Agreements (DPAs) with service providers, and encryption and security controls for data in transit and at rest. By using our Services, you consent to the transfer of your information to the United States and other jurisdictions as described in this Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">7. Data Security</h2>
            <p className="leading-relaxed mb-3">We implement industry-standard technical, administrative, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. Technical safeguards include encryption of data in transit (TLS 1.2+) and at rest (AES-256), secure authentication mechanisms (bcrypt password hashing, OAuth 2.0 for API access), regular security assessments and vulnerability scanning, intrusion detection and prevention systems, and automated security updates and patch management.</p>
            <p className="leading-relaxed mb-3">Administrative safeguards include role-based access control (RBAC) limiting employee access to personal data, confidentiality and non-disclosure agreements with employees and contractors, regular security training and awareness programs, incident response and data breach notification procedures, and vendor security assessments.</p>
            <p className="leading-relaxed">Despite our efforts, no security system is impenetrable. We cannot guarantee absolute security of your information. If you believe your account has been compromised, contact us immediately at security@objectwire.org. In the event of a data breach affecting your personal information, we will notify you and applicable authorities as required by law, typically within 72 hours of discovery.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="leading-relaxed mb-3">Essential cookies are required for the Services to function properly (authentication, security, session management, load balancing) and cannot be disabled without affecting functionality. Functional cookies enable enhanced functionality and personalization (language preferences, saved searches, content bookmarks, theme selection). Analytics cookies help us understand how users interact with our Services. We do not use advertising or tracking cookies for targeted advertising purposes.</p>
            <p className="leading-relaxed mb-3">We use limited third-party analytics services to understand aggregate user behavior, configured with IP anonymization enabled and data sharing with third parties disabled where possible. You can manage cookie preferences through your browser settings, our cookie preference center, or browser extensions that block tracking cookies. For more information about cookies and how to control them, visit www.allaboutcookies.org.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">9. Children's Privacy</h2>
            <p className="leading-relaxed">Our Services are not directed to children under the age of 16 (or the applicable age of majority in your jurisdiction). We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information promptly. If you believe we have collected information from a child, contact us immediately at privacy@objectwire.org.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">10. Third-Party Links and Services</h2>
            <p className="leading-relaxed">Our Services contain links to third-party websites and services (primary sources, cited references, related content). This Privacy Policy does not apply to third-party services. We are not responsible for the privacy practices of third parties. When you click on external links, you leave ObjectWire and are subject to the privacy policies of those external sites. We encourage you to review the privacy policies of any third-party services you access.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">11. California Privacy Rights (CCPA/CPRA)</h2>
            <p className="leading-relaxed mb-3">If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) including the right to know what categories and specific pieces of personal information we have collected, the sources from which it was collected, the purposes for which it is used, and the categories of third parties with whom it is shared.</p>
            <p className="leading-relaxed mb-3">You have the right to delete your personal information subject to certain exceptions, the right to opt-out of sale or sharing (we do not sell personal information as defined under California law), the right to correct inaccurate personal information, the right to limit use of sensitive personal information (we do not collect or use sensitive personal information beyond those necessary to provide our Services), and the right to non-discrimination for exercising your privacy rights.</p>
            <p className="leading-relaxed">To exercise these rights, contact us at privacy@objectwire.org or (575) 495-0323. We will verify your identity before processing requests. You may designate an authorized agent to submit requests on your behalf by providing written authorization.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">12. European Union and UK Privacy Rights (GDPR/UK GDPR)</h2>
            <p className="leading-relaxed mb-3">If you are located in the European Union or United Kingdom, you have rights under the General Data Protection Regulation (GDPR) and UK GDPR. We process your personal information based on consent (you have given explicit consent for specific processing purposes), contract (processing is necessary to fulfill a contract with you), legal obligation (processing is required to comply with applicable laws), or legitimate interests (processing is necessary for our legitimate business interests).</p>
            <p className="leading-relaxed mb-3">Your rights include the right to access copies of your personal information, the right to rectification (correction of inaccurate or incomplete information), the right to erasure (deletion subject to legal retention obligations), the right to restriction of processing in certain circumstances, the right to data portability (receive your personal information in a structured, machine-readable format), the right to object to processing based on legitimate interests or for direct marketing purposes, the right to withdraw consent at any time without affecting the lawfulness of prior processing, and the right to lodge a complaint with your local data protection authority (supervisory authority).</p>
            <p className="leading-relaxed">We have designated a privacy contact for data protection inquiries. Contact our privacy team at dpo@objectwire.org. We retain personal information only as long as necessary for the purposes set out in this Privacy Policy and as required by applicable law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">13. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed mb-3">We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or business operations. When we make changes, we will update the "Last Updated" date at the top of this Privacy Policy, notify you by email or through a prominent notice on our Services if changes are material, and obtain your consent if required by applicable law (e.g., for expanded data collection or new processing purposes).</p>
            <p className="leading-relaxed">We encourage you to review this Privacy Policy periodically. Your continued use of our Services after changes become effective constitutes acceptance of the updated Privacy Policy, unless the changes require explicit consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">14. Contact Us</h2>
            <p className="leading-relaxed mb-4">If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
            <div className="bg-gray-50 p-6 rounded border border-gray-200 space-y-2">
              <p className="text-gray-800"><strong>ObjectWire Privacy Team</strong></p>
              <p className="text-gray-800"><strong>Email:</strong> privacy@objectwire.org</p>
              <p className="text-gray-800"><strong>Phone:</strong> (575) 495-0323</p>
              <p className="text-gray-800"><strong>Mail:</strong> 2921 E 17th St Building 3, Apt 3205, Austin, TX 78702</p>
              <p className="text-gray-800 mt-3"><strong>For data protection inquiries specific to the EU/UK:</strong> dpo@objectwire.org</p>
              <p className="text-gray-800"><strong>For security incidents:</strong> security@objectwire.org</p>
              <p className="text-gray-800"><strong>For editorial corrections or content issues:</strong> editorial@objectwire.org</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">15. Definitions</h2>
            <p className="leading-relaxed mb-3">"Personal Information" means information that identifies, relates to, describes, or could reasonably be linked to you, either directly or indirectly.</p>
            <p className="leading-relaxed mb-3">"Services" means ObjectWire.org, our API services, newsletter subscriptions, and any related services, products, or platforms operated by ObjectWire.</p>
            <p className="leading-relaxed mb-3">"We," "Our," "Us" refers to ObjectWire and its affiliates, subsidiaries, and related entities.</p>
            <p className="leading-relaxed">"You," "Your" refers to the individual accessing or using our Services.</p>
          </section>

          <p className="text-center text-sm text-gray-600 mt-12 pt-6 border-t border-gray-300">This Privacy Policy is effective as of the date stated above and governs our collection, use, and disclosure of your personal information. We are committed to protecting your privacy while delivering verified, citation-grade intelligence.</p>
        </div>

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 border-t-2 border-gray-300 flex justify-between">
          <Link href="/terms-of-service" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Terms of Service
          </Link>
          <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 font-semibold">
            Editorial Standards →
          </Link>
        </div>
      </article>
    </main>
  );
}
