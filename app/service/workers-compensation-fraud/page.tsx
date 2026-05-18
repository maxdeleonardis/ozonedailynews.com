import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.ozonenetwork.news/service/workers-compensation-fraud';

export const metadata: Metadata = {
  title: 'Workers Compensation Fraud Investigation Austin TX | ObjectWire',
  description:
    'Licensed workers compensation fraud surveillance in Austin, Texas. Claimant documentation for insurers, TPAs, and defense attorneys across Travis County. Admissible, timestamped evidence.',
  keywords: [
    'workers compensation fraud investigation Austin TX',
    'workers comp fraud surveillance Austin',
    'claimant investigation Austin Texas',
    'insurance fraud PI Austin TX',
    'workers comp surveillance Austin',
    'defense attorney investigation Austin TX',
    'insurance defense PI Austin',
    'workers comp fraud Texas investigator',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Workers Compensation Fraud Investigation Austin TX | ObjectWire',
    description: 'Claimant surveillance for insurers and defense attorneys in Austin, TX. Admissible, timestamped documentation.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workers Comp Fraud Investigation Austin TX | ObjectWire',
    description: 'Workers comp fraud surveillance in Austin, TX. Licensed PI, court-ready documentation.',
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Workers Compensation Fraud Investigation',
  description: 'Licensed claimant surveillance for workers compensation fraud cases in Austin, Texas, for insurers, TPAs, and defense attorneys.',
  serviceType: 'Private Investigation — Insurance Fraud',
  areaServed: { '@type': 'City', name: 'Austin', containedInPlace: { '@type': 'State', name: 'Texas' } },
  provider: { '@type': 'LocalBusiness', name: 'ObjectWire Investigative Services', url: 'https://www.ozonenetwork.news/service' },
  url: PAGE_URL,
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ozonenetwork.news' },
    { '@type': 'ListItem', position: 2, name: 'Investigative Services', item: 'https://www.ozonenetwork.news/service' },
    { '@type': 'ListItem', position: 3, name: 'Workers Compensation Fraud', item: PAGE_URL },
  ],
};

export default function WorkersCompFraudPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <ArticlePage
        title="Workers Compensation Fraud Investigation Austin TX | ObjectWire"
        subtitle="Licensed claimant surveillance for insurers, TPAs, and defense attorneys across Austin and Travis County. Admissible, timestamped photo and video documentation."
        category="Investigative Services"
        lastUpdated="May 4, 2026"
        slug="service-workers-compensation-fraud"
        url="/service/workers-compensation-fraud"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/service', label: 'Investigative Services' },
          { href: '/service/workers-compensation-fraud', label: 'Workers Compensation Fraud' },
        ]}
        infoBox={{
          title: 'Workers Comp Fraud Service',
          sections: [
            {
              heading: 'Details',
              items: [
                { label: 'Type', value: 'Insurance Fraud Surveillance' },
                { label: 'Clients', value: 'Insurers, TPAs, defense attorneys' },
                { label: 'Output', value: 'Photo, video, written report' },
                { label: 'Area', value: 'Austin, Travis County, Central Texas' },
              ],
            },
            {
              heading: 'Related Services',
              links: [
                { href: '/service/surveillance', label: 'Surveillance' },
                { href: '/service/corporate-investigations', label: 'Corporate Investigations' },
                { href: '/service/background-checks', label: 'Background Checks' },
              ],
            },
            { heading: 'Start a Case', links: [{ href: '/get-help', label: 'Free Consultation' }] },
          ],
        }}
        tableOfContents={[
          { id: 'what-is', label: 'What Workers Comp Fraud Investigation Covers' },
          { id: 'who-we-work-with', label: 'Who We Work With' },
          { id: 'process', label: 'Investigation Process' },
          { id: 'documentation', label: 'Documentation Standards' },
          { id: 'contact', label: 'Start a Case' },
        ]}
        relatedLinks={[
          { href: '/service', label: 'All Investigative Services', description: 'Full list of case types' },
          { href: '/service/surveillance', label: 'Surveillance', description: 'Covert observation and documentation' },
          { href: '/service/corporate-investigations', label: 'Corporate Investigations', description: 'Employee fraud and misconduct' },
          { href: '/service/background-checks', label: 'Background Checks', description: 'Claimant history and identity research' },
        ]}
        backLink={{ href: '/service', label: 'Investigative Services' }}
      >
        <Section id="what-is" title="What Workers Comp Fraud Investigation Covers">
          <p>
            Workers compensation fraud investigation documents whether a claimant is engaging in physical
            activities inconsistent with their stated injury or disability. ObjectWire conducts these
            cases for insurance carriers, third-party administrators, and defense attorneys handling
            workers compensation litigation in Texas.
          </p>
          <p>
            Texas workers compensation fraud is a significant cost driver for carriers and self-insured
            employers. Covert surveillance that documents a claimant performing activities they claim
            to be unable to do is among the most effective tools for contesting fraudulent claims in
            Texas Department of Insurance Division of Workers Compensation proceedings.
          </p>
        </Section>

        <Section id="who-we-work-with" title="Who We Work With | Insurance and Legal Clients">
          <ul className="space-y-2">
            <li><strong>Insurance carriers</strong> — property-casualty and workers comp carriers investigating suspect claims</li>
            <li><strong>Third-party administrators (TPAs)</strong> — claim management organizations handling self-insured employer accounts</li>
            <li><strong>Defense attorneys</strong> — counsel representing employers or carriers in contested workers comp cases</li>
            <li><strong>Self-insured employers</strong> — Austin-area businesses managing their own workers comp exposure</li>
          </ul>
        </Section>

        <Section id="process" title="Investigation Process | How a Claimant Case Works">
          <p>
            The client provides the claimant's name, last known address, vehicle information, and
            claimed injury details. We establish a surveillance plan based on the claimant's likely
            activity patterns and the specific activities they claim to be unable to perform.
          </p>
          <p>
            Surveillance is conducted on agreed dates — typically 2-4 days per engagement depending
            on case complexity. Investigators operate from vehicles or fixed positions appropriate to
            the subject's home and activity area. All observations are logged in real time with
            timestamps and geolocation data.
          </p>
          <p>
            At case close, the client receives a written investigation report with a chronological
            activity log, all photo and video files with metadata intact, and a chain-of-custody record.
            Reports are formatted for presentation in Texas DWC proceedings and civil depositions.
          </p>
        </Section>

        <Section id="documentation" title="Documentation Standards | Texas DWC Proceedings">
          <p>
            Evidence presented in Texas workers compensation contested case hearings must be lawfully
            obtained and authenticated. ObjectWire surveillance reports are structured to meet these
            requirements. We document investigator identity, equipment used, observation method,
            timestamps, and location for every recorded event.
          </p>
          <p>
            We do not conduct illegal surveillance. All observation is from lawful vantage points in
            public or semi-public spaces. Evidence obtained through any illegal means is inadmissible
            and creates liability for the carrier. Every engagement is scoped to stay within Texas law.
          </p>
        </Section>

        <Section id="contact" title="Start a Workers Comp Fraud Investigation">
          <p>
            To discuss a case, visit the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              consultation page
            </Link>
            . For all services, see the{' '}
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
