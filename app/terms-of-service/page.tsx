import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_CONFIG.name}`,
  description: `Terms of Service for ${SITE_CONFIG.name} — the rules governing your use of our site and services.`,
  alternates: { canonical: `${SITE_CONFIG.url}/terms-of-service` },
};

export default function TermsOfServicePage() {
  const year = new Date().getFullYear();

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif font-bold text-3xl sm:text-4xl text-gray-900 mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-gray-500 mb-10">
        Last updated: May 30, 2026 &nbsp;·&nbsp; {SITE_CONFIG.legalName}
      </p>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="font-serif font-bold text-xl text-gray-900 mb-3">Acceptance of Terms</h2>
          <p>
            By accessing or using {SITE_CONFIG.name} (the "Site"), operated by {SITE_CONFIG.legalName}
            ("we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree,
            do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-xl text-gray-900 mb-3">Use of the Site</h2>
          <p className="mb-3">You agree to use this Site only for lawful purposes. You may not:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reproduce, republish, or redistribute editorial content without written permission</li>
            <li>Scrape or systematically download content via automated means without prior written consent</li>
            <li>Use the Site to transmit spam, malware, or any content that violates applicable law</li>
            <li>Attempt to gain unauthorized access to any portion of the Site or its infrastructure</li>
            <li>Impersonate any person, organization, or editorial staff member</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif font-bold text-xl text-gray-900 mb-3">Intellectual Property</h2>
          <p>
            All content published on this Site — including articles, headlines, images, graphics, and source code —
            is the property of {SITE_CONFIG.legalName} or its licensors and is protected by United States and
            international copyright law. Brief quotations with attribution and a link to the original article
            are permitted under fair use.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-xl text-gray-900 mb-3">User Accounts</h2>
          <p>
            If you create an account, you are responsible for maintaining the confidentiality of your login credentials
            and for all activity that occurs under your account. You agree to notify us immediately at{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-blue-600 underline hover:text-blue-800">
              {SITE_CONFIG.email}
            </a>{' '}
            if you suspect unauthorized use of your account.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-xl text-gray-900 mb-3">Editorial Independence</h2>
          <p>
            {SITE_CONFIG.name} maintains full editorial independence. Content published on this Site is produced
            under our{' '}
            <Link href="/editorial-standards" className="text-blue-600 underline hover:text-blue-800">
              Editorial Standards
            </Link>{' '}
            and is not influenced by advertisers, sponsors, or external parties. We accept no payment for editorial
            coverage.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-xl text-gray-900 mb-3">Disclaimers</h2>
          <p className="mb-3">
            Content on this Site is provided for informational purposes only. Nothing published constitutes
            legal, financial, medical, or professional advice. Readers should seek qualified professional
            counsel before acting on any information published here.
          </p>
          <p>
            The Site is provided "as is" without warranty of any kind. We do not guarantee the accuracy,
            completeness, or timeliness of all content, and we disclaim all liability for errors or omissions.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-xl text-gray-900 mb-3">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, {SITE_CONFIG.legalName} shall not be liable
            for any indirect, incidental, special, consequential, or punitive damages arising from your use
            of, or inability to use, this Site or its content.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-xl text-gray-900 mb-3">Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Texas, United States, without regard to
            conflict of law principles. Any disputes arising from these Terms shall be resolved in the
            courts of Travis County, Texas.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-xl text-gray-900 mb-3">Changes to These Terms</h2>
          <p>
            We may update these Terms at any time. Continued use of the Site after changes are posted
            constitutes acceptance of the revised Terms. Material changes will be reflected in the
            "Last updated" date at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="font-serif font-bold text-xl text-gray-900 mb-3">Contact</h2>
          <p>
            Questions about these Terms:{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-blue-600 underline hover:text-blue-800">
              {SITE_CONFIG.email}
            </a>
          </p>
        </section>

        <p className="text-xs text-gray-400 border-t pt-6">
          &copy; {year} {SITE_CONFIG.legalName}. See also:{' '}
          <Link href="/privacy-policy" className="underline hover:text-gray-600">Privacy Policy</Link>
          {' '}·{' '}
          <Link href="/editorial-standards" className="underline hover:text-gray-600">Editorial Standards</Link>
          {' '}·{' '}
          <Link href="/corrections" className="underline hover:text-gray-600">Corrections Policy</Link>
        </p>
      </div>
    </main>
  );
}
