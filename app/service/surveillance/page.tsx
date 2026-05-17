import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

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
      <ArticlePage
        title="Surveillance Investigations Austin TX | ObjectWire"
        subtitle="Licensed covert surveillance for domestic, legal, and corporate cases across Austin and Travis County. Timestamped photo and video documentation."
        category="Investigative Services"
        lastUpdated="May 4, 2026"
        slug="service-surveillance"
        url="/service/surveillance"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/service', label: 'Investigative Services' },
          { href: '/service/surveillance', label: 'Surveillance' },
        ]}
        infoBox={{
          title: 'Surveillance Service',
          sections: [
            {
              heading: 'Details',
              items: [
                { label: 'Type', value: 'Covert Surveillance' },
                { label: 'Output', value: 'Photo, video, written report' },
                { label: 'Area', value: 'Austin, Travis County, Central Texas' },
                { label: 'Use cases', value: 'Domestic, legal, insurance, corporate' },
              ],
            },
            {
              heading: 'Related Services',
              links: [
                { href: '/service/infidelity-investigations', label: 'Infidelity Investigations' },
                { href: '/service/child-custody-investigations', label: 'Child Custody Investigations' },
                { href: '/service/workers-compensation-fraud', label: 'Workers Comp Fraud' },
                { href: '/service/corporate-investigations', label: 'Corporate Investigations' },
              ],
            },
            { heading: 'Start a Case', links: [{ href: '/get-help', label: 'Free Consultation' }] },
          ],
        }}
        tableOfContents={[
          { id: 'what-is', label: 'What Surveillance Investigation Covers' },
          { id: 'use-cases', label: 'Use Cases' },
          { id: 'process', label: 'How It Works' },
          { id: 'evidence', label: 'Evidence Standards' },
          { id: 'coverage', label: 'Coverage Area' },
          { id: 'contact', label: 'Start a Case' },
        ]}
        relatedLinks={[
          { href: '/service', label: 'All Investigative Services', description: 'Full list of case types we handle' },
          { href: '/service/infidelity-investigations', label: 'Infidelity Investigations', description: 'Cheating spouse and domestic partner cases' },
          { href: '/service/child-custody-investigations', label: 'Child Custody Investigations', description: 'Family court evidence and parental surveillance' },
          { href: '/service/workers-compensation-fraud', label: 'Workers Comp Fraud', description: 'Claimant surveillance for insurers and defense counsel' },
          { href: '/service/corporate-investigations', label: 'Corporate Investigations', description: 'Employee misconduct and fraud surveillance' },
        ]}
        backLink={{ href: '/service', label: 'Investigative Services' }}
      >
        <Section id="what-is" title="What Surveillance Investigation Covers">
          <p>
            Surveillance investigation is the systematic, covert observation and documentation of a
            subject's activities, movements, and behavior. ObjectWire conducts surveillance for private
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
        </Section>

        <Section id="use-cases" title="Use Cases | When Clients Request Surveillance">
          <ul className="space-y-2">
            <li><strong>Infidelity and domestic cases</strong> — documenting a spouse or partner's activities as part of a{' '}
              <Link href="/service/infidelity-investigations" className="text-blue-600 hover:text-blue-800 underline">
                infidelity investigation
              </Link>
            </li>
            <li><strong>Child custody disputes</strong> — observing parental behavior for{' '}
              <Link href="/service/child-custody-investigations" className="text-blue-600 hover:text-blue-800 underline">
                family court evidence
              </Link>
            </li>
            <li><strong>Workers compensation fraud</strong> — documenting claimant physical activity for{' '}
              <Link href="/service/workers-compensation-fraud" className="text-blue-600 hover:text-blue-800 underline">
                insurers and defense attorneys
              </Link>
            </li>
            <li><strong>Corporate misconduct</strong> — employee activity, unauthorized meetings, IP removal as part of{' '}
              <Link href="/service/corporate-investigations" className="text-blue-600 hover:text-blue-800 underline">
                corporate investigations
              </Link>
            </li>
            <li><strong>Legal proceedings</strong> — evidence collection for depositions, civil litigation, and restraining order support</li>
            <li><strong>Insurance defense</strong> — claimant fraud documentation for civil defense attorneys</li>
          </ul>
        </Section>

        <Section id="process" title="How It Works | Surveillance Case Process">
          <p>
            The process begins with a free confidential consultation. We establish the subject, location
            parameters, objectives, and legal constraints applicable to your case. We do not begin field
            work without a clear brief of what admissible evidence looks like for your specific situation.
          </p>
          <p>
            Field surveillance is conducted over agreed-upon windows — typically a single day, multi-day,
            or ongoing periodic basis depending on case needs. Investigators maintain a written activity
            log and capture photo and video evidence at key moments. All media is preserved in original
            format with metadata intact.
          </p>
          <p>
            At case close, you receive a written report with a chronological summary of observations,
            full photo and video file set, and a chain-of-custody record suitable for court submission.
          </p>
        </Section>

        <Section id="evidence" title="Evidence Standards | Court-Ready Documentation">
          <p>
            Texas courts require that evidence be lawfully obtained, authenticated, and presented with
            a clear chain of custody to be admissible. Every ObjectWire surveillance report is structured
            to meet this standard. We document investigator identity, timestamps, observation locations,
            and equipment used.
          </p>
          <p>
            We do not conduct illegal surveillance, including recording inside private spaces without
            consent where prohibited by Texas law. We operate strictly within the bounds of what a
            licensed investigator may lawfully observe in public or semi-public spaces. Clients who
            present illegally obtained material to us do not receive case support.
          </p>
        </Section>

        <Section id="coverage" title="Coverage Area | Austin and Travis County">
          <p>
            Primary coverage: <strong>Austin, Travis County</strong>. We also regularly take cases in
            Williamson County, Hays County, Round Rock, Cedar Park, Georgetown, San Marcos, Kyle, Buda,
            Pflugerville, and Leander. Out-of-area cases are handled with travel disclosed at consultation.
          </p>
        </Section>

        <Section id="contact" title="Start a Surveillance Case">
          <p>
            Initial consultations are free and confidential. To discuss your case, visit the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              consultation page
            </Link>
            . To review all available services, see the{' '}
            <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
              investigative services hub
            </Link>
            .
          </p>
        </Section>
      </ArticlePage>
    </>
  );
}
