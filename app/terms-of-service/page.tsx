'use client';

import Link from 'next/link';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12 pb-8 border-b-2 border-gray-300">
          <h1 className="text-4xl md:text-5xl font-black text-black mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: December 25, 2025 | Version 2.0</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8 text-gray-800">
          <div>
            <p className="leading-relaxed mb-4">
              Welcome to ObjectWire. These Terms of Service ("Terms") constitute a legally binding agreement between you ("you," "your," or "user") and ObjectWire ("we," "our," "us," or "Company") governing your access to and use of ObjectWire.org, our API services, newsletter subscriptions, and any related services, products, or platforms (collectively, the "Services").
            </p>
            <p className="leading-relaxed">
              By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you must not use our Services.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed mb-3">By creating an account, accessing our Services, or using any portion of our platform, you enter into a binding legal agreement with ObjectWire and agree to comply with these Terms, our Privacy Policy, Editorial Standards, and all applicable laws and regulations.</p>
            <p className="leading-relaxed mb-3">You must be at least 18 years of age (or the age of majority in your jurisdiction) to use our Services. By using the Services, you represent and warrant that you meet this age requirement.</p>
            <p className="leading-relaxed">We reserve the right to modify these Terms at any time. We will notify you of material changes by email or through a prominent notice on our Services at least 30 days before the changes take effect. Your continued use of the Services after the effective date of the revised Terms constitutes acceptance of the changes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">2. Description of Services</h2>
            <p className="leading-relaxed mb-3">
              ObjectWire is a verification-first intelligence platform that provides verified business and technology news and analysis with primary source citations, event-driven reporting on developments affecting business, technology, and policy domains, structured data outputs optimized for search engines and AI-powered answer systems, newsletter subscriptions and content alerts, API access to verified intelligence data and structured content metadata, and citation-grade content designed for integration into research and decision workflows.
            </p>
            <p className="leading-relaxed font-semibold text-red-600 mb-3">
              OBJECTWIRE IS AN INFORMATION AND INTELLIGENCE PLATFORM ONLY. We do not provide investment advice, financial advice, legal advice, tax advice, or any other form of professional advisory services. Content published on ObjectWire is for informational and educational purposes only and should not be construed as recommendations to buy, sell, or hold any securities, assets, or financial instruments.
            </p>
            <p className="leading-relaxed">
              Readers should independently verify all information and consult with qualified professionals (financial advisors, attorneys, accountants) before making any decisions based on ObjectWire content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">3. User Accounts</h2>
            <p className="leading-relaxed mb-3">To access certain features of the Services (newsletter subscriptions, API access, saved preferences), you may create an account by providing accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials (username, password, API keys) and for all activities that occur under your account.</p>
            <p className="leading-relaxed mb-3">You agree to use a strong, unique password; not share your account credentials with others; notify us immediately of any unauthorized access or security breach (security@objectwire.org); and log out of your account when not in use on shared devices.</p>
            <p className="leading-relaxed">We reserve the right to suspend or terminate your account at any time if you violate these Terms, engage in fraudulent activity, abuse our Services, or pose a security risk. Upon termination, your right to access the Services ceases immediately.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">4. Acceptable Use Policy</h2>
            <p className="leading-relaxed mb-3">You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree NOT to violate any applicable laws, infringe upon our or others' intellectual property rights, transmit defamatory or fraudulent material, impersonate any person, engage in hacking or unauthorized access, distribute malware, scrape content without consent, interfere with our Services, reverse engineer our platforms, engage in spam or phishing, or resell our Services without authorization.</p>
            <p className="leading-relaxed">API users must comply with published rate limits and usage quotas. Users may cite or quote ObjectWire content in accordance with fair use principles (up to 200 words with attribution), but wholesale republication or commercial redistribution without licensing is prohibited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">5. Intellectual Property Rights</h2>
            <p className="leading-relaxed mb-3">The Services, including all content, software, code, text, graphics, logos, trademarks, data, metadata, and other materials are owned by ObjectWire or our licensors and protected by copyright, trademark, trade secret, and other intellectual property laws. All rights, title, and interest in ObjectWire Content remain with ObjectWire.</p>
            <p className="leading-relaxed mb-3">Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your personal, academic, or internal business purposes. This license does not permit commercial redistribution, modification, or removal of copyright notices.</p>
            <p className="leading-relaxed">If you believe your work has been infringed, contact our DMCA agent at dmca@objectwire.org with identification of the copyrighted work, the infringing material, your contact information, and a good faith statement that the use is unauthorized.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">6. Payment Terms</h2>
            <p className="leading-relaxed mb-3">Certain features of the Services require payment of subscription fees. Payments are processed through third-party payment processors (Stripe, PayPal). By subscribing, you authorize us to charge your designated payment method on a recurring basis.</p>
            <p className="leading-relaxed mb-3">Subscriptions automatically renew at the end of each billing cycle unless you cancel before the renewal date. You may cancel your subscription at any time through your account settings or by contacting support@objectwire.org. Cancellations take effect at the end of the current billing cycle.</p>
            <p className="leading-relaxed">Subscription fees do not include applicable sales, use, VAT, or other taxes. You are responsible for paying all taxes associated with your subscription.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">7. Disclaimers and Limitations of Liability</h2>
            <p className="leading-relaxed mb-3 font-semibold">
              THE SERVICES ARE PROVIDED FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY. WE DO NOT PROVIDE INVESTMENT, FINANCIAL, LEGAL, TAX, OR OTHER PROFESSIONAL ADVICE. CONTENT ON THE SERVICES SHOULD NOT BE CONSTRUED AS RECOMMENDATIONS OR ENDORSEMENTS OF ANY KIND. READERS ARE SOLELY RESPONSIBLE FOR THEIR OWN DECISIONS.
            </p>
            <p className="leading-relaxed mb-3">While ObjectWire employs rigorous verification standards and editorial processes, we do not guarantee absolute accuracy or completeness of information. Users should independently verify critical information before relying on it.</p>
            <p className="leading-relaxed mb-3">THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, ERROR-FREE, OR WILL MEET YOUR REQUIREMENTS.</p>
            <p className="leading-relaxed">TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM, OR $100 USD IF YOU HAVE NOT MADE ANY PAYMENTS.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">8. Indemnification</h2>
            <p className="leading-relaxed">
              You agree to indemnify, defend, and hold harmless ObjectWire and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, costs, or expenses arising from your violation of these Terms, your use or misuse of the Services, your violation of third-party rights, your violation of applicable laws, content you submit, or unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">9. Dispute Resolution and Governing Law</h2>
            <p className="leading-relaxed mb-3">Before initiating formal proceedings, you agree to contact us at legal@objectwire.org to attempt to resolve any dispute informally. If we cannot resolve disputes through negotiation, all Disputes will be resolved through binding arbitration administered by the American Arbitration Association (AAA) in Travis County, Texas.</p>
            <p className="leading-relaxed mb-3">YOU AGREE TO WAIVE YOUR RIGHT TO A JURY TRIAL AND TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.</p>
            <p className="leading-relaxed">These Terms will be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law principles.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">10. Corrections and Editorial Accountability</h2>
            <p className="leading-relaxed mb-3">ObjectWire maintains a commitment to accuracy and transparency. If you identify factual errors, broken citations, or other issues with published content, please report them to editorial@objectwire.org.</p>
            <p className="leading-relaxed mb-3">We will investigate reported errors promptly and issue corrections or updates as warranted under our Editorial Standards. Corrections are published transparently with notation of the error, the correction, and the date of update.</p>
            <p className="leading-relaxed">In cases where fundamental errors render content unreliable, ObjectWire may retract articles with prominent notice explaining the reason for retraction. Retracted content is preserved for transparency and archival purposes but marked clearly as retracted.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">11. Miscellaneous</h2>
            <p className="leading-relaxed mb-3">These Terms, together with our Privacy Policy and Editorial Standards, constitute the entire agreement between you and ObjectWire and supersede all prior agreements. If any provision is found to be invalid, unenforceable, or illegal, the remaining provisions will continue in full force and effect.</p>
            <p className="leading-relaxed mb-3">We will not be liable for any delay or failure to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, pandemics, or network infrastructure failures.</p>
            <p className="leading-relaxed">Notices to you may be sent to the email address associated with your account or posted on the Services. Notices to us should be sent to legal@objectwire.org or by mail to ObjectWire Legal Department, 2921 E 17th St Building 3, Apt 3205, Austin, TX 78702.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">12. Contact Information</h2>
            <p className="leading-relaxed mb-4">If you have questions, comments, or concerns about these Terms, please contact us:</p>
            <div className="bg-gray-50 p-6 rounded border border-gray-200 space-y-2">
              <p className="text-gray-800"><strong>ObjectWire Legal Team</strong></p>
              <p className="text-gray-800"><strong>Email:</strong> legal@objectwire.org</p>
              <p className="text-gray-800"><strong>Phone:</strong> (575) 495-0323</p>
              <p className="text-gray-800"><strong>Mail:</strong> 2921 E 17th St Building 3, Apt 3205, Austin, TX 78702</p>
            </div>
          </section>

          <p className="text-center font-semibold mt-12">BY USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.</p>
        </div>

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 border-t-2 border-gray-300 flex justify-between">
          <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Editorial Standards
          </Link>
          <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 font-semibold">
            Privacy Policy →
          </Link>
        </div>
      </article>
    </main>
  );
}
