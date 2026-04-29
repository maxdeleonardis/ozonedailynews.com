import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Skip Tracing Austin TX | Locate People | Licensed PI",
  description: "Professional skip tracing in Austin, Texas. Locate debtors, witnesses, missing family, and estranged contacts. Licensed PI with fast, accurate results.",
  keywords: [
    "skip tracing Austin TX",
    "skip trace Austin",
    "locate person Austin Texas",
    "find people Austin TX",
    "debt collection skip trace Austin",
    "witness locating Austin TX",
    "fugitive recovery Austin",
    "people finder Austin Texas",
    "locate debtor Austin TX",
    "private investigator skip trace Texas",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/service/skip-tracing-austin-tx',
  },
  openGraph: {
    title: "Skip Tracing Austin TX | Locate People | Licensed PI",
    description: "Professional skip tracing in Austin, Texas. Locate debtors, witnesses, missing family, and estranged contacts. Licensed PI with fast, accurate results.",
    type: 'article',
    url: "https://www.objectwire.org/service/skip-tracing-austin-tx",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Skip Tracing Austin TX | Locate People | Licensed PI",
    description: "Professional skip tracing in Austin, Texas. Locate debtors, witnesses, missing family, and estranged contacts. Licensed PI with fast, accurate results.",
  },
};

export default function SkipTracingAustinPage() {
  return (
    <ArticlePage
      title="Skip Tracing | Austin, Texas"
      subtitle="Locate debtors, witnesses, defendants, and estranged contacts. Licensed investigators with accurate results across Texas."
      category="Investigative Services"
      lastUpdated="April 29, 2026"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/service', label: 'Services' },
        { href: '/service/skip-tracing-austin-tx', label: 'Skip Tracing' },
      ]}
      slug="service-skip-tracing-austin-tx"
      url="/service/skip-tracing-austin-tx"
      infoBox={{
        title: 'Skip Tracing',
        sections: [
          {
            heading: 'Details',
            items: [
              { label: 'Primary Base', value: 'Austin, TX' },
              { label: 'Coverage', value: 'Texas statewide' },
              { label: 'Turnaround', value: 'Often 24–72 hours' },
              { label: 'Output', value: 'Current address, phone, contacts' },
            ],
          },
          {
            heading: 'Common Uses',
            list: [
              'Debt collection',
              'Witness location',
              'Legal document service',
              'Missing persons',
              'Fugitive locate',
              'Estate and probate',
            ],
          },
          {
            heading: 'Related Services',
            links: [
              { href: '/missing-persons', label: 'Missing Persons Investigations' },
              { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks' },
              { href: '/service/fact-finding-and-evidence-collection', label: 'Evidence Collection' },
              { href: '/service', label: 'All Services' },
            ],
          },
        ],
      }}
      tableOfContents={[
        { id: 'overview', label: 'Service Overview' },
        { id: 'who-needs', label: 'Who Uses Skip Tracing' },
        { id: 'methods', label: 'How We Locate People' },
        { id: 'deliverables', label: 'What You Receive' },
        { id: 'legal', label: 'Legal Compliance' },
        { id: 'coverage', label: 'Coverage Area' },
        { id: 'contact', label: 'Get Started' },
      ]}
      relatedLinks={[
        { href: '/service', label: 'All Investigative Services', description: 'full services hub' },
        { href: '/austin-private-detective-agency', label: 'Austin Private Detective Agency', description: 'agency profile' },
        { href: '/missing-persons', label: 'Missing Persons Investigations', description: 'full missing persons cases' },
        { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks', description: 'criminal and employment history' },
        { href: '/service/fact-finding-and-evidence-collection', label: 'Evidence Collection', description: 'witness interviews and case research' },
      ]}
    >
      <Section id="overview" title="Service Overview">
        <p>
          Skip tracing is the process of locating a person who has moved, changed contact information,
          or is deliberately avoiding contact. ObjectWire conducts skip trace investigations for
          attorneys, debt collectors, process servers, businesses, and private individuals throughout
          Texas.
        </p>
        <p>
          We are based in Austin, TX and handle skip traces across the state. For full missing persons
          investigations, see the{' '}
          <Link href="/missing-persons" className="text-blue-600 hover:text-blue-800 underline">
            missing persons
          </Link>{' '}
          page. For the full list of services, see the{' '}
          <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
            services hub
          </Link>
          .
        </p>
      </Section>

      <Section id="who-needs" title="Who Uses Skip Tracing">
        <ul>
          <li><strong>Attorneys and law firms</strong> — locate witnesses for deposition, defendants for service, or parties who have become unreachable</li>
          <li><strong>Process servers</strong> — obtain a current address when previous attempts have failed</li>
          <li><strong>Debt collectors and creditors</strong> — locate debtors who have moved without forwarding information</li>
          <li><strong>Landlords</strong> — locate former tenants who skipped out on rent or damages</li>
          <li><strong>Families</strong> — reconnect with estranged relatives or locate a missing family member. See also{' '}
            <Link href="/missing-persons" className="text-blue-600 hover:text-blue-800 underline">
              missing persons investigations
            </Link>
          </li>
          <li><strong>Estate attorneys and probate courts</strong> — locate heirs and beneficiaries who cannot be reached through normal channels</li>
          <li><strong>Bail bondsmen</strong> — locate defendants who have failed to appear</li>
        </ul>
      </Section>

      <Section id="methods" title="How We Locate People">
        <p>
          Our skip trace process draws on multiple data sources and investigative methods:
        </p>
        <ul>
          <li>Public records: property ownership, voter registration, court filings, business licenses</li>
          <li>Utility and service connection records</li>
          <li>Social media presence and online footprint analysis</li>
          <li>Vehicle registration and DMV records where accessible</li>
          <li>
            <Link href="/service/background-check-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              Background research
            </Link>{' '}
            on known associates, relatives, and employers
          </li>
          <li>Field verification of identified addresses</li>
        </ul>
        <p>
          We do not use illegal data access methods. All research is conducted within the bounds of
          the Fair Credit Reporting Act (FCRA), the Driver's Privacy Protection Act (DPPA), and
          applicable Texas statutes.
        </p>
      </Section>

      <Section id="deliverables" title="What You Receive">
        <p>A completed skip trace delivers:</p>
        <ul>
          <li>Current confirmed address (or best-available address with confidence rating)</li>
          <li>Current phone number(s) where available</li>
          <li>Associated contacts and known addresses in the past 12–24 months</li>
          <li>Employer information where discoverable</li>
          <li>Source citations for all findings</li>
        </ul>
      </Section>

      <Section id="legal" title="Legal Compliance">
        <p>
          Skip tracing must be conducted within the bounds of federal and Texas state law. We comply
          fully with the FCRA, DPPA, and Texas Privacy Act. We do not access non-public databases
          without proper authorization, and we do not conduct skip traces for purposes that violate
          federal stalking or harassment statutes.
        </p>
        <p>
          Clients must have a legitimate permissible purpose. We verify this at intake. For agency
          licensing details, see the{' '}
          <Link href="/austin-private-detective-agency" className="text-blue-600 hover:text-blue-800 underline">
            Austin Private Detective Agency
          </Link>{' '}
          page.
        </p>
      </Section>

      <Section id="coverage" title="Coverage Area">
        <p>
          We are based in Austin, Texas and handle skip traces across the state. Most skip trace
          work is records-based and does not require physical presence at the subject's location,
          which means we can serve clients in Dallas, Houston, San Antonio, and all other Texas cities
          without travel costs. Dedicated service area pages for major Texas cities are coming soon.
        </p>
      </Section>

      <Section id="contact" title="Get Started">
        <p>
          To request a skip trace, visit the{' '}
          <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
            consultation request page
          </Link>
          . Turnaround for most skip traces is 24–72 hours. Complex cases may take longer. All
          consultations are free and confidential.
        </p>
      </Section>
    </ArticlePage>
  );
}
