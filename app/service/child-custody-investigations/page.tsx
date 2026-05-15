import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicePage, ServiceSection } from '@/components/articles/ServicePage';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectwire.org/service/child-custody-investigations';

export const metadata: Metadata = {
  title: 'Child Custody Investigations Austin TX | ObjectWire',
  description:
    'Licensed child custody investigations in Austin, Texas. Parental surveillance and behavior documentation for Travis County family court. Confidential, court-ready evidence.',
  keywords: [
    'child custody investigation Austin TX',
    'custody PI Austin Texas',
    'parental surveillance Austin',
    'family court investigation Austin TX',
    'child custody evidence Austin',
    'divorce investigation children Austin',
    'parenting plan investigation Austin TX',
    'licensed custody investigator Texas',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Child Custody Investigations Austin TX | ObjectWire',
    description: 'Licensed parental surveillance and behavior documentation for Travis County family court. Confidential, court-ready.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Child Custody Investigations Austin TX | ObjectWire',
    description: 'Child custody PI in Austin, TX. Family court evidence, parental surveillance, licensed investigator.',
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Child Custody Investigations',
  description: 'Licensed parental surveillance and documentation for child custody proceedings in Travis County Family Court, Austin, Texas.',
  serviceType: 'Private Investigation — Child Custody',
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
    { '@type': 'ListItem', position: 3, name: 'Child Custody Investigations', item: PAGE_URL },
  ],
};

export default function ChildCustodyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <ServicePage
        icon="⚖️"
        title="Child Custody Investigations Austin TX | ObjectWire"
        subtitle="Licensed parental surveillance and behavior documentation for Travis County family court proceedings. Admissible, timestamped evidence."
        category="Investigative Services"
        lastUpdated="May 15, 2026"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/service', label: 'Investigative Services' },
          { href: '/service/child-custody-investigations', label: 'Child Custody Investigations' },
        ]}
        stats={[
          { value: 'Family Court', label: 'Evidence' },
          { value: 'Licensed', label: 'Texas PI' },
          { value: 'Confidential', label: 'Case Handling' },
          { value: 'Free', label: 'Consultation' },
        ]}
        infoRows={[
          { label: 'Type', value: 'Family Court Investigation' },
          { label: 'Court', value: 'Travis County Family Court' },
          { label: 'Output', value: 'Photo, video, written report' },
          { label: 'Use', value: 'Custody modification, parenting plan disputes' },
        ]}
        tableOfContents={[
          { id: 'what-is', label: 'What Child Custody Investigation Covers' },
          { id: 'what-we-document', label: 'What We Document' },
          { id: 'texas-family-law', label: 'Texas Family Law Context' },
          { id: 'working-with-attorneys', label: 'Working With Your Attorney' },
          { id: 'contact', label: 'Start a Case' },
        ]}
        relatedServices={[
          { href: '/service/surveillance', icon: '🎥', label: 'Surveillance', desc: 'Covert observation and documentation.' },
          { href: '/service/infidelity-investigations', icon: '🔍', label: 'Infidelity Investigations', desc: 'Domestic partner cases.' },
          { href: '/service/background-checks', icon: '📋', label: 'Background Checks', desc: 'Criminal, employment, identity research.' },
          { href: '/service/digital-forensics', icon: '💻', label: 'Digital Forensics', desc: 'Communications and online behavior.' },
        ]}
        ctaHeading="Start a Child Custody Investigation"
        ctaBody="Initial consultations are free and confidential. We will assess your case, explain what is achievable, and quote cost before any work begins."
      >
        <ServiceSection id="what-is" title="What Child Custody Investigation Covers">
          <p>
            A child custody investigation documents parental behavior, living conditions, and activities
            relevant to a custody modification, initial custody determination, or violation of an existing
            parenting plan. ObjectWire handles these cases for private individuals and family law attorneys
            across Austin and Travis County.
          </p>
          <p>
            The standard in Texas custody proceedings is the <strong>best interest of the child</strong>.
            Evidence that speaks to a parent's fitness, stability, sobriety, or compliance with a court
            order is directly relevant to that standard. A properly documented investigation can support
            or contest a custody modification petition before Travis County Family Court.
          </p>
        </ServiceSection>

        <ServiceSection id="what-we-document" title="What We Document | Evidence Types">
          <ul className="space-y-2">
            <li><strong>Living environment</strong> — condition, safety, and appropriateness of the subject parent's home</li>
            <li><strong>Parenting behavior</strong> — how the parent interacts with and supervises children during observed periods</li>
            <li><strong>Substance use</strong> — documented indicators of alcohol or drug use in the presence of children</li>
            <li><strong>New partners and household members</strong> — who is present in the home and around the children</li>
            <li><strong>Parenting plan compliance</strong> — documentation of violations including unauthorized travel, missed exchanges, or contempt of order</li>
            <li><strong>Digital communications</strong> — via our{' '}
              <Link href="/service/digital-forensics" className="text-blue-600 hover:text-blue-800 underline">
                digital forensics
              </Link>{' '}
              service, where communications between parties are in dispute</li>
          </ul>
        </ServiceSection>

        <ServiceSection id="texas-family-law" title="Texas Family Law Context | Travis County Family Court">
          <p>
            Texas family courts issue custody orders based on the best interest of the child standard
            under the Texas Family Code. Evidence of parental unfitness, instability, or contempt of
            an existing order can support a petition for modification or enforcement. Courts require
            that evidence be lawfully obtained, properly authenticated, and presented through admissible
            means.
          </p>
          <p>
            ObjectWire investigators are familiar with the evidentiary requirements of Travis County
            Family Court proceedings. Our written reports are structured to support attorney presentation
            in court, including source documentation and chain-of-custody records.
          </p>
        </ServiceSection>

        <ServiceSection id="working-with-attorneys" title="Working With Your Family Law Attorney">
          <p>
            We work directly with family law attorneys in Travis County on litigation-bound cases. If
            you are represented, we recommend discussing your investigative needs with your attorney
            before engaging us — this ensures the investigation is scoped to produce evidence that is
            specifically useful for your legal strategy.
          </p>
          <p>
            If you are not yet represented, we can provide a case report that an attorney can evaluate
            when advising you on whether to pursue a custody modification.
          </p>
        </ServiceSection>

        <ServiceSection id="contact" title="Start a Child Custody Investigation">
          <p>
            Initial consultations are free and confidential. Visit the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              consultation page
            </Link>{' '}
            or see the{' '}
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
