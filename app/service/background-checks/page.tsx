import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicePage, ServiceSection } from '@/components/articles/ServicePage';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectwire.org/service/background-checks';

export const metadata: Metadata = {
  title: 'Background Check Investigations Austin TX | ObjectWire',
  description:
    'Licensed background check investigations in Austin, Texas. Criminal history, employment verification, identity research, and address history for individuals and businesses across Travis County.',
  keywords: [
    'background check investigation Austin TX',
    'background check private investigator Austin',
    'criminal history check Austin Texas',
    'employment verification Austin TX',
    'identity investigation Austin',
    'tenant background check Austin',
    'business due diligence Austin TX',
    'licensed background investigator Texas',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Background Check Investigations Austin TX | ObjectWire',
    description: 'Criminal history, employment verification, and identity research in Austin, TX. Deeper than consumer background checks.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Background Check Investigations Austin TX | ObjectWire',
    description: 'Deep background checks in Austin, TX. Criminal, employment, identity, address history.',
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Background Check Investigations',
  description: 'Licensed criminal history, employment verification, and identity investigation services in Austin, Texas.',
  serviceType: 'Private Investigation — Background Check',
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
    { '@type': 'ListItem', position: 3, name: 'Background Checks', item: PAGE_URL },
  ],
};

export default function BackgroundChecksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <ServicePage
        icon="📋"
        title="Background Check Investigations Austin TX | ObjectWire"
        subtitle="Criminal history, employment verification, identity research, and address history for individuals and businesses across Austin and Travis County."
        category="Investigative Services"
        lastUpdated="May 15, 2026"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/service', label: 'Investigative Services' },
          { href: '/service/background-checks', label: 'Background Checks' },
        ]}
        stats={[
          { value: 'Deep Research', label: 'Multi-Source' },
          { value: 'Court-Ready', label: 'Reports' },
          { value: 'Nationwide', label: 'Records' },
          { value: 'Free', label: 'Consultation' },
        ]}
        infoRows={[
          { label: 'Type', value: 'Background Investigation' },
          { label: 'Scope', value: 'Criminal, employment, identity, address' },
          { label: 'Use cases', value: 'Personal, business, legal, tenant' },
          { label: 'Area', value: 'Austin, Texas, nationwide records' },
        ]}
        tableOfContents={[
          { id: 'what-is', label: 'What Background Investigation Covers' },
          { id: 'vs-consumer', label: 'vs. Consumer Background Check Services' },
          { id: 'use-cases', label: 'Use Cases' },
          { id: 'what-we-research', label: 'What We Research' },
          { id: 'contact', label: 'Start a Case' },
        ]}
        relatedServices={[
          { href: '/service/skip-tracing', icon: '🗺️', label: 'Skip Tracing', desc: 'Locate subjects with unknown addresses.' },
          { href: '/service/corporate-investigations', icon: '🏢', label: 'Corporate Investigations', desc: 'Executive due diligence and fraud.' },
          { href: '/service/digital-forensics', icon: '💻', label: 'Digital Forensics', desc: 'Online identity and alias research.' },
          { href: '/service/missing-persons', icon: '📍', label: 'Missing Persons', desc: 'Locate missing individuals.' },
        ]}
        ctaHeading="Start a Background Investigation"
        ctaBody="Initial consultations are free and confidential. We will assess your case, explain what is achievable, and quote cost before any work begins."
      >
        <ServiceSection id="what-is" title="What Background Investigation Covers">
          <p>
            A background investigation is a deep, manual research process conducted by a licensed
            investigator. ObjectWire handles background checks for individuals vetting new relationships
            or business partners, businesses conducting pre-hire due diligence, landlords screening tenants,
            and attorneys investigating opposing parties.
          </p>
          <p>
            Our investigations access records and sources that consumer background check services cannot
            reach, and they are conducted by a licensed investigator who can interpret context, flag
            anomalies, and produce a written report rather than a raw data dump.
          </p>
        </ServiceSection>

        <ServiceSection id="vs-consumer" title="vs. Consumer Background Check Services | Why PI Investigation Differs">
          <p>
            Consumer services like Spokeo or BeenVerified aggregate public data and return results in
            seconds. They miss sealed records, out-of-state incidents with inconsistent reporting, alias
            usage, and anything requiring manual verification. A licensed investigator can cross-reference
            multiple databases, verify employment and address history directly, and identify red flags
            that automated systems cannot surface.
          </p>
          <p>
            If what you need is court-ready documentation or a verified narrative rather than a list
            of possibly outdated data points, an investigative background check is the right instrument.
          </p>
        </ServiceSection>

        <ServiceSection id="use-cases" title="Use Cases | Who Commissions Background Investigations">
          <ul className="space-y-2">
            <li><strong>Individuals</strong> — vetting a new romantic partner, business partner, or contractor</li>
            <li><strong>Businesses</strong> — pre-hire due diligence for executives, contractors, or high-trust roles</li>
            <li><strong>Landlords</strong> — tenant screening beyond consumer credit and criminal checks</li>
            <li><strong>Attorneys</strong> — opposing party investigation, witness research, litigation support</li>
            <li><strong>Investors</strong> — partner and principal due diligence before a transaction</li>
            <li><strong>Families</strong> — verifying the background of someone entering a family member's life</li>
          </ul>
        </ServiceSection>

        <ServiceSection id="what-we-research" title="What We Research | Background Investigation Scope">
          <ul className="space-y-2">
            <li><strong>Criminal history</strong> — Texas and multi-state court records, including misdemeanors often missed by consumer services</li>
            <li><strong>Address history</strong> — verified current and prior addresses, including gaps</li>
            <li><strong>Employment verification</strong> — direct verification of claimed employment history</li>
            <li><strong>Identity verification</strong> — confirm identity is as represented, including alias checks</li>
            <li><strong>Civil records</strong> — prior litigation, judgments, liens, bankruptcies</li>
            <li><strong>Digital identity</strong> — in conjunction with{' '}
              <Link href="/service/digital-forensics" className="text-blue-600 hover:text-blue-800 underline">
                digital forensics
              </Link>
              , social media aliases and online presence</li>
            <li><strong>Associates and networks</strong> — known associates relevant to the investigative scope</li>
          </ul>
        </ServiceSection>

        <ServiceSection id="contact" title="Start a Background Investigation">
          <p>
            Initial consultations are free. Visit the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              consultation page
            </Link>{' '}
            to discuss your case. For all services, see the{' '}
            <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
              investigative services hub
            </Link>
            .
          </p>
        </ServiceSection>
      </ServicePage>
    </>
  );
}
