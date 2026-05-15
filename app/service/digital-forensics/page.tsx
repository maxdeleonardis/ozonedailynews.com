import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicePage, ServiceSection } from '@/components/articles/ServicePage';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectwire.org/service/digital-forensics';

export const metadata: Metadata = {
  title: 'Digital Forensics Austin TX | Online Investigation | ObjectWire',
  description:
    'Licensed digital forensics investigations in Austin, Texas. Online harassment, identity fraud, social media aliases, catfishing, dark-web exposure, and account activity investigation across Travis County.',
  keywords: [
    'digital forensics Austin TX',
    'online harassment investigation Austin',
    'catfishing investigation Austin Texas',
    'identity fraud investigation Austin TX',
    'social media alias investigation Austin',
    'dark web investigation Austin Texas',
    'digital PI Austin TX',
    'OSINT investigation Austin',
    'online investigation private investigator Austin',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Digital Forensics Austin TX | ObjectWire',
    description: 'Licensed online investigation: harassment, catfishing, identity fraud, alias accounts, and dark-web exposure in Austin, TX.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Forensics Austin TX | ObjectWire',
    description: 'Online harassment, catfishing, identity fraud, and alias investigation in Austin, TX.',
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Forensics Investigation',
  description: 'Licensed digital forensics covering online harassment, identity fraud, social media aliases, catfishing, and dark-web exposure in Austin, Texas.',
  serviceType: 'Private Investigation — Digital Forensics',
  areaServed: { '@type': 'City', name: 'Austin', containedInPlace: { '@type': 'State', name: 'Texas' } },
  provider: { '@type': 'LocalBusiness', name: 'ObjectWire Investigative Services', url: 'https://www.objectwire.org/service' },
  url: PAGE_URL,
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.objectwire.org' },
    { '@type': 'ListItem', position: 2, name: 'Investigative Services', item: 'https://www.objectwire.org/service' },
    { '@type': 'ListItem', position: 3, name: 'Digital Forensics', item: PAGE_URL },
  ],
};

export default function DigitalForensicsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <ServicePage
        icon="💻"
        title="Digital Forensics Austin TX | ObjectWire"
        subtitle="Licensed online investigation covering harassment, catfishing, identity fraud, social media aliases, and dark-web exposure across Austin and Travis County."
        category="Investigative Services"
        lastUpdated="May 15, 2026"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/service', label: 'Investigative Services' },
          { href: '/service/digital-forensics', label: 'Digital Forensics' },
        ]}
        stats={[
          { value: 'OSINT', label: 'Capability' },
          { value: 'Licensed', label: 'Texas PI' },
          { value: 'Chain of Custody', label: 'Documentation' },
          { value: 'Free', label: 'Consultation' },
        ]}
        infoRows={[
          { label: 'Type', value: 'Digital / Online Investigation' },
          { label: 'Methods', value: 'OSINT, database research, alias tracking' },
          { label: 'Scope', value: 'Social media, dark web, communications' },
          { label: 'Output', value: 'Written report, chain-of-custody documentation' },
        ]}
        tableOfContents={[
          { id: 'what-is', label: 'What Digital Forensics Investigation Covers' },
          { id: 'case-types', label: 'Case Types' },
          { id: 'methods', label: 'Methods | OSINT and Research Techniques' },
          { id: 'journalism', label: 'Digital Investigation in Our Journalism' },
          { id: 'contact', label: 'Start a Case' },
        ]}
        relatedServices={[
          { href: '/service/background-checks', icon: '📋', label: 'Background Checks', desc: 'Identity and alias verification.' },
          { href: '/service/corporate-investigations', icon: '🏢', label: 'Corporate Investigations', desc: 'Digital evidence in corporate fraud.' },
          { href: '/service/surveillance', icon: '🎥', label: 'Surveillance', desc: 'Covert photo and video documentation.' },
          { href: '/service/missing-persons', icon: '📍', label: 'Missing Persons', desc: 'Online identity in locate investigations.' },
        ]}
        ctaHeading="Start a Digital Forensics Case"
        ctaBody="Initial consultations are free and confidential. We will assess your case, explain what is achievable, and quote cost before any work begins."
      >
        <ServiceSection id="what-is" title="What Digital Forensics Investigation Covers">
          <p>
            Digital forensics investigation uncovers online activity, hidden identities, and digital
            evidence relevant to a case. ObjectWire applies open-source intelligence (OSINT), proprietary
            database research, and social media investigation to private cases, and uses the same
            methodology in its{' '}
            <Link href="/service/investigative-reporting" className="text-blue-600 hover:text-blue-800 underline">
              investigative journalism
            </Link>
            .
          </p>
          <p>
            Digital investigation is rarely a standalone service. It most often runs alongside{' '}
            <Link href="/service/background-checks" className="text-blue-600 hover:text-blue-800 underline">
              background checks
            </Link>
            ,{' '}
            <Link href="/service/infidelity-investigations" className="text-blue-600 hover:text-blue-800 underline">
              infidelity investigations
            </Link>
            ,{' '}
            <Link href="/service/corporate-investigations" className="text-blue-600 hover:text-blue-800 underline">
              corporate investigations
            </Link>
            , and{' '}
            <Link href="/service/missing-persons" className="text-blue-600 hover:text-blue-800 underline">
              missing persons
            </Link>{' '}
            cases to extend the investigation into the subject's digital life.
          </p>
        </ServiceSection>

        <ServiceSection id="case-types" title="Case Types | Digital Investigation Scope">
          <ul className="space-y-2">
            <li><strong>Online harassment</strong> — identifying the person or persons behind anonymous harassment accounts</li>
            <li><strong>Catfishing and romance fraud</strong> — verifying whether an online identity is real and who is behind it</li>
            <li><strong>Identity fraud</strong> — documenting whether a person is using a false identity online or in financial contexts</li>
            <li><strong>Social media alias research</strong> — finding accounts a subject operates under names other than their legal name</li>
            <li><strong>Dark-web exposure</strong> — determining whether a person's or company's data, credentials, or identity appear on dark-web markets</li>
            <li><strong>Digital infidelity evidence</strong> — account activity, messaging patterns, and hidden profiles in domestic cases</li>
            <li><strong>IP theft digital trail</strong> — documenting unauthorized data transfers and communications in corporate cases</li>
          </ul>
        </ServiceSection>

        <ServiceSection id="methods" title="Methods | OSINT and Digital Research Techniques">
          <p>
            Our digital investigations use open-source intelligence (OSINT) techniques: systematic
            research across social media platforms, public databases, domain registration records,
            archived web content, username correlation across platforms, image reverse search, and
            geolocation metadata analysis from publicly shared images.
          </p>
          <p>
            We do not conduct unauthorized access to accounts, devices, or private systems. Every
            technique used is within the bounds of Texas and federal law. Evidence gathered through
            illegal access is inadmissible and creates criminal liability. All findings are documented
            in a chain-of-custody format suitable for use in Texas civil, criminal, or family court
            proceedings.
          </p>
        </ServiceSection>

        <ServiceSection id="journalism" title="Digital Investigation in Our Journalism">
          <p>
            ObjectWire's investigative journalism team uses the same digital research techniques on
            matters of public interest. When we investigate public figures, institutions, or corporations,
            digital OSINT is a core part of how we verify identities, trace relationships, and
            corroborate document trails.
          </p>
          <p>
            If you have a tip involving digital evidence of wrongdoing by a public figure or institution,
            visit our{' '}
            <Link href="/service/tip-the-newsroom" className="text-blue-600 hover:text-blue-800 underline">
              tip the newsroom
            </Link>{' '}
            page. If your matter is private and requires confidential investigation, this digital
            forensics service is the right engagement.
          </p>
        </ServiceSection>

        <ServiceSection id="contact" title="Start a Digital Forensics Case">
          <p>
            Initial consultations are free and confidential. Visit the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              consultation page
            </Link>{' '}
            or see the{' '}
            <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
              full services hub
            </Link>
            .
          </p>
        </ServiceSection>
      </ServicePage>
    </>
  );
}
