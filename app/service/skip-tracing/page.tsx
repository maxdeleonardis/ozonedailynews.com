import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectwire.org/service/skip-tracing';

export const metadata: Metadata = {
  title: 'Skip Tracing Austin TX | Locate Debtors and Witnesses | ObjectWire',
  description:
    'Licensed skip tracing in Austin, Texas. Locate debtors, witnesses, defendants, and hard-to-find individuals across Travis County and Central Texas. ObjectWire PI services.',
  keywords: [
    'skip tracing Austin TX',
    'locate debtor Austin Texas',
    'skip trace Austin',
    'find witness Austin TX',
    'locate defendant Austin Texas',
    'skip tracing private investigator Austin',
    'people finder Austin TX',
    'licensed skip tracer Texas',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Skip Tracing Austin TX | Locate Debtors and Witnesses | ObjectWire',
    description: 'Licensed skip tracing in Austin, TX. Locate debtors, witnesses, defendants, and hard-to-find individuals.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skip Tracing Austin TX | ObjectWire',
    description: 'Locate debtors, witnesses, and defendants in Austin, TX. Licensed PI skip trace service.',
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Skip Tracing',
  description: 'Licensed skip tracing to locate debtors, witnesses, defendants, and hard-to-find individuals in Austin, Texas and Central Texas.',
  serviceType: 'Private Investigation — Skip Tracing',
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
    { '@type': 'ListItem', position: 3, name: 'Skip Tracing', item: PAGE_URL },
  ],
};

export default function SkipTracingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <ArticlePage
        title="Skip Tracing Austin TX | ObjectWire"
        subtitle="Licensed skip tracing to locate debtors, witnesses, defendants, and hard-to-find individuals across Austin, Travis County, and Central Texas."
        category="Investigative Services"
        lastUpdated="May 4, 2026"
        slug="service-skip-tracing"
        url="/service/skip-tracing"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/service', label: 'Investigative Services' },
          { href: '/service/skip-tracing', label: 'Skip Tracing' },
        ]}
        infoBox={{
          title: 'Skip Tracing Service',
          sections: [
            {
              heading: 'Details',
              items: [
                { label: 'Type', value: 'Skip Tracing / Locate' },
                { label: 'Subjects', value: 'Debtors, witnesses, defendants, individuals' },
                { label: 'Methods', value: 'Database, field work, digital research' },
                { label: 'Area', value: 'Austin, Travis County, Texas, nationwide' },
              ],
            },
            {
              heading: 'Related Services',
              links: [
                { href: '/service/missing-persons', label: 'Missing Persons' },
                { href: '/service/background-checks', label: 'Background Checks' },
                { href: '/service/corporate-investigations', label: 'Corporate Investigations' },
              ],
            },
            { heading: 'Start a Case', links: [{ href: '/get-help', label: 'Free Consultation' }] },
          ],
        }}
        tableOfContents={[
          { id: 'what-is', label: 'What Skip Tracing Is' },
          { id: 'who-we-locate', label: 'Who We Locate' },
          { id: 'methods', label: 'Methods' },
          { id: 'legal-use', label: 'Legal and Attorney Use Cases' },
          { id: 'contact', label: 'Start a Case' },
        ]}
        relatedLinks={[
          { href: '/service', label: 'All Investigative Services', description: 'Full list of case types' },
          { href: '/service/missing-persons', label: 'Missing Persons', description: 'Locate missing adults and family members' },
          { href: '/service/background-checks', label: 'Background Checks', description: 'Criminal, employment, identity research' },
          { href: '/service/corporate-investigations', label: 'Corporate Investigations', description: 'Locate subjects in business fraud cases' },
        ]}
        backLink={{ href: '/service', label: 'Investigative Services' }}
      >
        <Section id="what-is" title="What Skip Tracing Is">
          <p>
            Skip tracing is the investigative process of locating a person who has moved, changed
            contact information, or is actively avoiding contact. The term originates from the collection
            industry — a debtor who has "skipped" on a debt. Today it applies broadly to any locate work
            where the subject's current address or contact information is unknown.
          </p>
          <p>
            ObjectWire conducts skip tracing for attorneys, creditors, insurance companies, and private
            individuals across Austin and Central Texas. When a subject has specifically moved to avoid
            being found, database searches alone are insufficient — field verification and investigative
            judgment are required.
          </p>
        </Section>

        <Section id="who-we-locate" title="Who We Locate | Skip Trace Case Types">
          <ul className="space-y-2">
            <li><strong>Debtors</strong> — individuals who have moved to avoid debt collection or judgment enforcement</li>
            <li><strong>Witnesses</strong> — persons needed for deposition, statement, or court testimony</li>
            <li><strong>Defendants</strong> — individuals who have moved to avoid service of process</li>
            <li><strong>Bail skip subjects</strong> — defendants who have failed to appear on bond obligations</li>
            <li><strong>Missing persons</strong> — overlapping with our{' '}
              <Link href="/service/missing-persons" className="text-blue-600 hover:text-blue-800 underline">
                missing persons
              </Link>{' '}
              service when a voluntary disappearance is suspected</li>
            <li><strong>Business subjects</strong> — partners, former employees, or contractors who have become unreachable in the context of{' '}
              <Link href="/service/corporate-investigations" className="text-blue-600 hover:text-blue-800 underline">
                corporate investigations
              </Link></li>
          </ul>
        </Section>

        <Section id="methods" title="Methods | How We Locate Subjects">
          <p>
            Skip tracing combines proprietary database research, public records, digital open-source
            intelligence, field interviews with known associates, and physical verification once a
            probable location is identified. We cross-reference utility records, vehicle registration,
            employment filings, and court records to build a current address profile.
          </p>
          <p>
            Where a subject has adopted a different name or alias, our{' '}
            <Link href="/service/digital-forensics" className="text-blue-600 hover:text-blue-800 underline">
              digital forensics
            </Link>{' '}
            capability extends the search to online identity, social media activity, and alias account tracking.
          </p>
        </Section>

        <Section id="legal-use" title="Legal and Attorney Use Cases | Service of Process Support">
          <p>
            Attorneys and process servers frequently engage skip tracing services when a subject has moved
            or is evading service. ObjectWire provides verified current address reports for service of
            process, and can coordinate with process servers once a location is confirmed.
          </p>
          <p>
            We deliver a written locate report with source documentation suitable for use in Texas civil
            proceedings and judgment enforcement actions.
          </p>
        </Section>

        <Section id="contact" title="Start a Skip Trace">
          <p>
            Initial consultations are free. Visit the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              consultation page
            </Link>{' '}
            or see the{' '}
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
