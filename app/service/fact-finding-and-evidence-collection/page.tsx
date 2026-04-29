import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Evidence Collection Austin TX | Fact-Finding Investigation",
  description: "Licensed fact-finding and evidence collection in Austin, Texas. Personal injury, insurance fraud, harassment, and criminal defense investigations.",
  keywords: [
    "evidence collection Austin TX",
    "fact-finding investigation Austin",
    "PI evidence gathering Texas",
    "legal evidence collection Austin",
    "insurance fraud investigation Austin",
    "harassment investigation Austin TX",
    "criminal defense investigation Austin",
    "personal injury investigation Texas",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/service/fact-finding-and-evidence-collection',
  },
  openGraph: {
    title: "Evidence Collection Austin TX | Fact-Finding Investigation",
    description: "Licensed fact-finding and evidence collection in Austin, Texas. Personal injury, insurance fraud, harassment, and criminal defense investigations.",
    type: 'article',
    url: "https://www.objectwire.org/service/fact-finding-and-evidence-collection",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Evidence Collection Austin TX | Fact-Finding Investigation",
    description: "Licensed fact-finding and evidence collection in Austin, Texas. Personal injury, insurance fraud, harassment, and criminal defense investigations.",
  },
};

export default function FactFindingPage() {
  return (
    <ArticlePage
      title="Fact-Finding and Evidence Collection | Austin, Texas"
      subtitle="Licensed investigators gathering facts, interviewing witnesses, and documenting evidence for legal cases throughout Texas."
      category="Investigative Services"
      lastUpdated="April 29, 2026"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/service', label: 'Services' },
        { href: '/service/fact-finding-and-evidence-collection', label: 'Evidence Collection' },
      ]}
      slug="service-fact-finding-and-evidence-collection"
      url="/service/fact-finding-and-evidence-collection"
      infoBox={{
        title: 'Evidence Collection',
        sections: [
          {
            heading: 'Details',
            items: [
              { label: 'Primary Base', value: 'Austin, TX' },
              { label: 'Coverage', value: 'Texas statewide (travel available)' },
              { label: 'Works With', value: 'Attorneys, firms, individuals' },
              { label: 'Output', value: 'Written report + documentation' },
            ],
          },
          {
            heading: 'Case Types',
            list: [
              'Personal injury',
              'Insurance fraud',
              'Harassment allegations',
              'Property disputes',
              'Criminal defense support',
              'Civil litigation support',
            ],
          },
          {
            heading: 'Related Services',
            links: [
              { href: '/service/surveillance', label: 'Surveillance' },
              { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks' },
              { href: '/service/skip-tracing-austin-tx', label: 'Skip Tracing' },
              { href: '/service', label: 'All Services' },
            ],
          },
        ],
      }}
      tableOfContents={[
        { id: 'overview', label: 'Service Overview' },
        { id: 'case-types', label: 'Case Types' },
        { id: 'what-we-do', label: 'What Investigators Do' },
        { id: 'attorney-work', label: 'Working With Attorneys' },
        { id: 'coverage', label: 'Coverage Area' },
        { id: 'contact', label: 'Get Started' },
      ]}
      relatedLinks={[
        { href: '/service', label: 'All Investigative Services', description: 'full services hub' },
        { href: '/austin-private-detective-agency', label: 'Austin Private Detective Agency', description: 'agency profile' },
        { href: '/service/surveillance', label: 'Surveillance', description: 'covert photo and video evidence' },
        { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks', description: 'criminal and employment history' },
        { href: '/service/skip-tracing-austin-tx', label: 'Skip Tracing', description: 'locate witnesses and defendants' },
        { href: '/service/corporate-investigations-austin-tx', label: 'Corporate Investigations', description: 'fraud and misconduct' },
      ]}
    >
      <Section id="overview" title="Service Overview">
        <p>
          ObjectWire provides fact-finding and evidence collection services for attorneys, law firms,
          insurance companies, and private individuals throughout Texas. Our investigators research case
          backgrounds, locate and interview witnesses, document scenes, and compile findings into a
          written report suitable for use in Texas civil and criminal proceedings.
        </p>
        <p>
          We are based in Austin and primarily serve Travis County clients, but we are available for
          cases in Dallas, Houston, San Antonio, and elsewhere in Texas. For more on the agency, see the{' '}
          <Link href="/austin-private-detective-agency" className="text-blue-600 hover:text-blue-800 underline">
            Austin Private Detective Agency
          </Link>{' '}
          page.
        </p>
      </Section>

      <Section id="case-types" title="Case Types">
        <p>We support fact-finding and evidence collection for the following types of cases:</p>
        <ul>
          <li>
            <strong>Personal injury</strong> — scene documentation, witness location, accident
            reconstruction support, and third-party research for plaintiffs and defense
          </li>
          <li>
            <strong>Insurance fraud</strong> — investigate claimants, document inconsistencies,
            and provide evidence to support denial or litigation. Also see{' '}
            <Link href="/service/workers-compensation-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              workers compensation fraud investigations
            </Link>
          </li>
          <li>
            <strong>Harassment allegations</strong> — document incidents, locate witnesses, and
            gather evidence for restraining orders or civil harassment suits
          </li>
          <li>
            <strong>Property disputes</strong> — boundary documentation, neighbor activity records,
            and witness statements for Texas civil court
          </li>
          <li>
            <strong>Criminal defense</strong> — locate alibi witnesses, document crime scenes,
            and research case facts independently of law enforcement
          </li>
          <li>
            <strong>Civil litigation support</strong> — attorney-directed fact development for
            active Texas civil cases
          </li>
        </ul>
      </Section>

      <Section id="what-we-do" title="What Investigators Do">
        <p>Depending on the case, our investigators will:</p>
        <ul>
          <li>
            Locate and conduct recorded or written interviews with witnesses, neighbors, or
            third-party contacts
          </li>
          <li>
            Photograph and video-document scenes, property, or conditions relevant to the case
          </li>
          <li>
            Research public records, court filings, business registrations, and property records
          </li>
          <li>
            Conduct{' '}
            <Link href="/service/background-check-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              background checks
            </Link>{' '}
            on key individuals
          </li>
          <li>
            Perform{' '}
            <Link href="/service/skip-tracing-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              skip traces
            </Link>{' '}
            to locate unavailable witnesses or defendants
          </li>
          <li>
            Compile all findings into a structured written report with supporting documentation
          </li>
        </ul>
      </Section>

      <Section id="attorney-work" title="Working With Attorneys">
        <p>
          A significant portion of our fact-finding work is attorney-directed. Texas civil litigation
          attorneys use us to develop case facts independently of what opposing counsel has gathered,
          to locate witnesses before depositions, and to investigate claimants or defendants in ways
          that are impractical for in-house legal staff.
        </p>
        <p>
          We can operate under attorney-client privilege when engaged directly by counsel. Reports can
          be formatted to match the requirements of specific courts or filing deadlines. We are familiar
          with Travis County District Court processes and work regularly with Austin-area law firms.
        </p>
      </Section>

      <Section id="coverage" title="Coverage Area">
        <p>
          Primary coverage is Austin, Texas and Travis County. We are available for cases in Dallas,
          Houston, San Antonio, Waco, and elsewhere in Texas with travel arrangements discussed at
          consultation. Dedicated service area pages for major Texas cities are coming soon.
        </p>
      </Section>

      <Section id="contact" title="Get Started">
        <p>
          To discuss a fact-finding or evidence collection engagement, visit the{' '}
          <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
            consultation request page
          </Link>
          . All consultations are free and confidential. View the full{' '}
          <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
            services hub
          </Link>{' '}
          for everything we offer.
        </p>
      </Section>
    </ArticlePage>
  );
}
