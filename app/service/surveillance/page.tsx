import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicePage, ServiceSection } from '@/components/articles/ServicePage';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectwire.org/service/surveillance';

export const metadata: Metadata = {
  title: 'Surveillance Investigations Austin TX | ObjectWire',
  description:
    'Licensed surveillance investigations in Austin, Texas. Covert photo and video documentation for domestic, legal, and corporate cases across Travis County. ObjectWire PI services.',
  keywords: [
    'surveillance investigations Austin TX',
    'covert surveillance Austin Texas',
    'private investigator surveillance Austin',
    'domestic surveillance Austin',
    'corporate surveillance Austin TX',
    'licensed surveillance investigator Texas',
    'surveillance PI Austin',
    'video surveillance investigation Austin',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Surveillance Investigations Austin TX | ObjectWire',
    description:
      'Licensed covert surveillance for domestic, legal, and corporate cases in Austin, Texas. Timestamped photo and video documentation.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surveillance Investigations Austin TX | ObjectWire',
    description: 'Covert surveillance investigations in Austin, TX. Domestic, legal, and corporate cases.',
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Surveillance Investigations',
  description:
    'Covert photo and video surveillance documentation for domestic, legal, and corporate cases in Austin, Texas and Travis County.',
  serviceType: 'Private Investigation — Surveillance',
  areaServed: { '@type': 'City', name: 'Austin', containedInPlace: { '@type': 'State', name: 'Texas' } },
  provider: {
    '@type': 'LocalBusiness',
    name: 'ObjectWire Investigative Services',
    url: 'https://www.objectwire.org/service',
  },
  url: PAGE_URL,
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.objectwire.org' },
    { '@type': 'ListItem', position: 2, name: 'Investigative Services', item: 'https://www.objectwire.org/service' },
    { '@type': 'ListItem', position: 3, name: 'Surveillance', item: PAGE_URL },
  ],
};

export default function SurveillancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <ServicePage
        icon="🎥"
        title="Surveillance Investigations Austin TX"
        subtitle="Licensed covert surveillance for domestic, legal, and corporate cases across Austin and Travis County. Timestamped photo and video documentation."
        category="Investigative Services"
        lastUpdated="May 15, 2026"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/service', label: 'Investigative Services' },
          { href: '/service/surveillance', label: 'Surveillance' },
        ]}
        stats={[
          { value: 'Licensed', label: 'Texas PI Agency' },
          { value: 'Covert', label: 'Photo & Video' },
          { value: 'Court-Ready', label: 'Documentation' },
          { value: 'Free', label: 'Consultation' },
        ]}
        infoRows={[
          { label: 'Type', value: 'Covert Surveillance' },
          { label: 'Output', value: 'Photo, video, written report' },
          { label: 'Area', value: 'Austin / Travis County' },
          { label: 'Use Cases', value: 'Domestic, legal, insurance, corporate' },
          { label: 'License', value: 'Texas Occ. Code Ch. 1702' },
        ]}
        tableOfContents={[
          { id: 'what-is', label: 'What Surveillance Covers' },
          { id: 'use-cases', label: 'Use Cases' },
          { id: 'process', label: 'How It Works' },
          { id: 'evidence', label: 'Evidence Standards' },
          { id: 'coverage', label: 'Coverage Area' },
          { id: 'contact', label: 'Start a Case' },
        ]}
        relatedServices={[
          { href: '/service/infidelity-investigations', icon: '🔍', label: 'Infidelity Investigations', desc: 'Domestic partner cases with timestamped evidence.' },
          { href: '/service/child-custody-investigations', icon: '⚖️', label: 'Child Custody', desc: 'Family court evidence and parental surveillance.' },
          { href: '/service/workers-compensation-fraud', icon: '🏥', label: 'Workers Comp Fraud', desc: 'Claimant surveillance for insurers and defense counsel.' },
          { href: '/service/corporate-investigations', icon: '🏢', label: 'Corporate Investigations', desc: 'Employee misconduct and fraud documentation.' },
        ]}
        ctaHeading="Start a Surveillance Case"
        ctaBody="Initial consultations are free and confidential. We will assess your case, explain what is achievable, and quote cost before any field work begins."
      >
        <ServiceSection id="what-is" title="What Surveillance Investigation Covers">
          <p>
            Surveillance investigation is the systematic, covert observation and documentation of a
            subject&apos;s activities, movements, and behavior. ObjectWire conducts surveillance for private
            individuals, law firms, insurance companies, and corporations across Austin and Travis County.
          </p>
          <p>
            Our investigators use professional-grade still and video recording equipment. Every surveillance
            engagement produces timestamped, geotagged documentation compiled into a written case report.
            All work is conducted by licensed investigators under{' '}
            <Link href="/austin-private-detective-agency" className="text-blue-600 hover:text-blue-800 underline">
              Texas Occupations Code Chapter 1702
            </Link>
            .
          </p>
        </ServiceSection>

        <ServiceSection id="use-cases" title="Use Cases | When Clients Request Surveillance">
          <ul className="space-y-3 list-none pl-0">
            {([
              { label: 'Infidelity and domestic cases', href: '/service/infidelity-investigations', linkText: 'infidelity investigation', pre: 'Documenting a partner&apos;s activities as part of an ' },
              { label: 'Child custody disputes', href: '/service/child-custody-investigations', linkText: 'family court evidence', pre: 'Observing parental behavior for ' },
              { label: 'Workers compensation fraud', href: '/service/workers-compensation-fraud', linkText: 'insurers and defense attorneys', pre: 'Documenting claimant activity for ' },
              { label: 'Corporate misconduct', href: '/service/corporate-investigations', linkText: 'corporate investigations', pre: 'Employee activity and IP removal as part of ' },
            ] as const).map(({ label, href, linkText, pre }) => (
              <li key={label} className="flex items-start gap-3 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <span className="text-blue-600 font-black shrink-0 mt-0.5">→</span>
                <span><strong>{label}</strong>{' '}{pre}
                  <Link href={href} className="text-blue-600 hover:text-blue-800 underline">{linkText}</Link>.
                </span>
              </li>
            ))}
            <li className="flex items-start gap-3 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <span className="text-blue-600 font-black shrink-0 mt-0.5">→</span>
              <span><strong>Legal proceedings</strong> — evidence collection for depositions, civil litigation, and restraining order support.</span>
            </li>
            <li className="flex items-start gap-3 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <span className="text-blue-600 font-black shrink-0 mt-0.5">→</span>
              <span><strong>Insurance defense</strong> — claimant fraud documentation for civil defense attorneys.</span>
            </li>
          </ul>
        </ServiceSection>

        <ServiceSection id="process" title="How It Works | Surveillance Case Process">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
            {([
              { step: '01', title: 'Free Consultation', desc: 'Confidential discussion of your case, subject, and objectives. No commitment required.' },
              { step: '02', title: 'Case Brief', desc: 'Scope, legal parameters, timeline, and cost agreed before any field work starts.' },
              { step: '03', title: 'Field Surveillance', desc: 'Covert observation with professional photo and video equipment. Written activity log maintained throughout.' },
              { step: '04', title: 'Report Delivery', desc: 'Written case report, full media file set, and chain-of-custody record suitable for court use.' },
            ] as const).map(({ step, title, desc }) => (
              <div key={step} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <div className="text-blue-600 font-black text-xs tracking-widest mb-2 font-mono">STEP {step}</div>
                <h3 className="font-black text-gray-900 dark:text-white mb-1">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </ServiceSection>

        <ServiceSection id="evidence" title="Evidence Standards | Court-Ready Documentation">
          <p>
            Texas courts require that evidence be lawfully obtained, authenticated, and presented with
            a clear chain of custody to be admissible. Every ObjectWire surveillance report is structured
            to meet this standard, documenting investigator identity, timestamps, observation locations,
            and equipment used.
          </p>
          <p>
            We do not conduct illegal surveillance, including recording inside private spaces without
            consent where prohibited by Texas law. We operate strictly within the bounds of what a
            licensed investigator may lawfully observe in public or semi-public spaces.
          </p>
        </ServiceSection>

        <ServiceSection id="coverage" title="Coverage Area | Austin and Travis County">
          <p>
            Primary coverage: <strong>Austin, Travis County</strong>. We also regularly take cases in
            Williamson County, Hays County, Round Rock, Cedar Park, Georgetown, San Marcos, Kyle, Buda,
            Pflugerville, and Leander. Out-of-area cases handled with travel fees disclosed at consultation.
          </p>
        </ServiceSection>

        <ServiceSection id="contact" title="Start a Surveillance Case">
          <p>
            Initial consultations are free and confidential. To discuss your case, visit the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              consultation page
            </Link>
            {' '}or see the{' '}
            <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
              full services hub
            </Link>
            {' '}for other case types.
          </p>
        </ServiceSection>
      </ServicePage>
    </>
  );
}
