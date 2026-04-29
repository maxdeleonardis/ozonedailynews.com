import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Private Detective Services Austin TX | Licensed PI Agency",
  description: "ObjectWire is a licensed private detective agency in Austin, Texas. Surveillance, infidelity, missing persons, background checks, skip tracing, and corporate investigations.",
  keywords: [
    "private detective services Austin TX",
    "PI agency Austin Texas",
    "licensed investigator Austin",
    "surveillance Austin TX",
    "infidelity investigation Austin",
    "missing persons Austin",
    "background check Austin",
    "skip tracing Austin TX",
    "corporate investigation Austin",
    "child custody investigation Austin",
    "workers comp investigation Austin",
    "evidence collection Austin TX",
  ],
  alternates: {
    canonical: "https://www.objectwire.org/service",
  },
  openGraph: {
    title: "Private Detective Services Austin TX | Licensed PI Agency",
    description: "ObjectWire is a licensed private detective agency in Austin, Texas. Surveillance, infidelity, missing persons, background checks, skip tracing, and corporate investigations.",
    url: "https://www.objectwire.org/service",
    siteName: "ObjectWire",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Detective Services Austin TX | Licensed PI Agency',
    description: 'Licensed private detective agency in Austin, TX. Surveillance, infidelity investigations, missing persons, background checks, and corporate cases.',
  },
};

export default function ServiceHubPage() {
  return (
    <ArticlePage
      title="Private Detective Services | Austin, Texas"
      subtitle="Licensed investigative services for domestic, legal, and corporate cases in Austin, TX and throughout Travis County."
      category="Investigative Services"
      lastUpdated="April 29, 2026"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/service', label: 'Services' },
      ]}
      slug="service"
      url="/service"
      infoBox={{
        title: 'ObjectWire Investigations',
        sections: [
          {
            heading: 'Location',
            items: [
              { label: 'City', value: 'Austin, Texas' },
              { label: 'County', value: 'Travis County' },
              { label: 'Region', value: 'Central Texas' },
            ],
          },
          {
            heading: 'License',
            items: [
              { label: 'Status', value: 'Licensed PI Agency' },
              { label: 'Jurisdiction', value: 'State of Texas' },
            ],
          },
          {
            heading: 'Services',
            list: [
              'Surveillance',
              'Infidelity Investigations',
              'Missing Persons',
              'Background Checks',
              'Skip Tracing',
              'Child Custody',
              'Workers Comp Fraud',
              'Corporate Investigations',
              'Evidence Collection',
              'Investigative Photography',
            ],
          },
          {
            heading: 'Contact',
            links: [{ href: '/get-help', label: 'Request a Consultation' }],
          },
        ],
      }}
      tableOfContents={[
        { id: 'overview', label: 'Agency Overview' },
        { id: 'investigative-services', label: 'Investigative Services' },
        { id: 'domestic', label: 'Domestic Cases' },
        { id: 'corporate', label: 'Corporate Cases' },
        { id: 'media-services', label: 'Media Services' },
        { id: 'coverage-area', label: 'Coverage Area' },
        { id: 'service-areas', label: 'Texas Service Areas' },
        { id: 'contact', label: 'Contact' },
      ]}
      relatedLinks={[
        { href: '/austin-private-detective-agency', label: 'Austin Private Detective Agency', description: 'full agency profile' },
        { href: '/service/private-detective-austin-tx', label: 'Private Detective Austin TX', description: 'Austin city service hub' },
        { href: '/service/private-detective-houston-tx', label: 'Private Detective Houston TX', description: 'Houston and Harris County' },
        { href: '/service/private-detective-dallas-tx', label: 'Private Detective Dallas TX', description: 'Dallas and DFW Metroplex' },
        { href: '/missing-persons', label: 'Missing Persons Investigations', description: 'locate missing adults and runaways' },
        { href: '/service/surveillance', label: 'Surveillance Services', description: 'covert photo and video evidence' },
        { href: '/service/infidelity', label: 'Infidelity Investigations', description: 'cheating spouse cases' },
        { href: '/service/background-check-investigations-austin-tx', label: 'Background Check Investigations', description: 'criminal, employment, identity' },
        { href: '/service/skip-tracing-austin-tx', label: 'Skip Tracing', description: 'locate people and debtors' },
        { href: '/service/child-custody-investigations-austin-tx', label: 'Child Custody Investigations', description: 'family court evidence' },
        { href: '/service/corporate-investigations-austin-tx', label: 'Corporate Investigations', description: 'employee misconduct and fraud' },
      ]}
    >
      <Section id="overview" title="Agency Overview">
        <p>
          ObjectWire is a licensed private detective agency based in Austin, Texas, serving clients throughout
          Travis County, Williamson County, and the broader Central Texas region. We operate across two practice
          areas: investigative services for domestic, legal, and corporate clients, and professional media services
          including investigative photography, videography, and press relations.
        </p>
        <p>
          All fieldwork is conducted by licensed investigators operating under Texas state PI regulations.
          Every engagement begins with a confidential consultation. Evidence we gather is documented to meet
          admissibility standards for Texas civil and family court proceedings.
        </p>
        <p>
          For a full profile of the agency and its capabilities, see the{' '}
          <Link href="/austin-private-detective-agency" className="text-blue-600 hover:text-blue-800 underline">
            Austin Private Detective Agency
          </Link>{' '}
          page.
        </p>
      </Section>

      <Section id="investigative-services" title="Investigative Services">
        <p>
          Our investigative practice covers domestic cases, legal support work, and corporate engagements.
          All active cases are handled with strict confidentiality. Below is the full list of services with
          links to dedicated pages covering each in detail.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
          {[
            { href: '/service/surveillance', label: 'Surveillance', desc: 'Covert photo and video surveillance for domestic, legal, and corporate cases.' },
            { href: '/service/infidelity', label: 'Infidelity Investigations', desc: 'Cheating spouse and domestic partner investigations with documented evidence.' },
            { href: '/missing-persons', label: 'Missing Persons', desc: 'Locate missing adults, runaways, and estranged family members.' },
            { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks', desc: 'Criminal history, employment verification, and identity research.' },
            { href: '/service/skip-tracing-austin-tx', label: 'Skip Tracing', desc: 'Locate debtors, witnesses, and estranged contacts quickly and accurately.' },
            { href: '/service/child-custody-investigations-austin-tx', label: 'Child Custody', desc: 'Surveillance and parental verification evidence for family court.' },
            { href: '/service/workers-compensation-investigations-austin-tx', label: 'Workers Comp Fraud', desc: 'Claimant surveillance and evidence collection for insurance and legal teams.' },
            { href: '/service/corporate-investigations-austin-tx', label: 'Corporate Investigations', desc: 'Employee misconduct, IP theft, fraud, and due diligence.' },
            { href: '/service/fact-finding-and-evidence-collection', label: 'Evidence Collection', desc: 'Fact-finding, witness interviews, and documentation for legal cases.' },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="block border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-sm transition-all group"
            >
              <span className="font-semibold text-blue-600 group-hover:text-blue-800 underline block mb-1">{label}</span>
              <span className="text-sm text-gray-600">{desc}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="domestic" title="Domestic Cases">
        <p>
          The majority of our caseload involves domestic matters: infidelity investigations, child custody
          verification, missing persons searches, and restraining-order support. These cases require
          discretion, speed, and documentation precise enough to hold up in Travis County Family Court.
        </p>
        <p>
          Common domestic case types we handle in the Austin area:
        </p>
        <ul>
          <li>
            <Link href="/service/infidelity" className="text-blue-600 hover:text-blue-800 underline">Cheating spouse surveillance</Link>{' '}
            — confirm or rule out infidelity with timestamped photo and video evidence
          </li>
          <li>
            <Link href="/service/child-custody-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">Child custody verification</Link>{' '}
            — document parenting-time violations or hazardous home environments
          </li>
          <li>
            <Link href="/missing-persons" className="text-blue-600 hover:text-blue-800 underline">Missing persons</Link>{' '}
            — locate missing adults, runaways, and estranged family
          </li>
          <li>
            <Link href="/service/background-check-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">Background checks</Link>{' '}
            — verify a new partner or household member's identity and criminal history
          </li>
        </ul>
      </Section>

      <Section id="corporate" title="Corporate Cases">
        <p>
          We serve Austin-area businesses, law firms, and insurance carriers with a range of corporate
          investigative services. Austin's rapid tech-sector growth has made IP theft, non-compete violations,
          and employee fraud increasingly common. Our team documents these cases in a format suitable for
          Texas state and federal civil litigation.
        </p>
        <ul>
          <li>
            <Link href="/service/workers-compensation-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">Workers compensation fraud</Link>{' '}
            — claimant surveillance and activity documentation
          </li>
          <li>
            <Link href="/service/corporate-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">Corporate fraud and misconduct</Link>{' '}
            — embezzlement, IP theft, and non-compete violations
          </li>
          <li>
            <Link href="/service/fact-finding-and-evidence-collection" className="text-blue-600 hover:text-blue-800 underline">Legal support and evidence collection</Link>{' '}
            — witness interviews, scene documentation, and case research
          </li>
          <li>
            <Link href="/service/skip-tracing-austin-tx" className="text-blue-600 hover:text-blue-800 underline">Skip tracing</Link>{' '}
            — locate debtors, missing witnesses, and defendants
          </li>
        </ul>
      </Section>

      <Section id="media-services" title="Media Services">
        <p>
          In addition to investigative work, ObjectWire provides professional media services to businesses,
          law firms, and individuals in the Austin area. These include:
        </p>
        <ul>
          <li>
            <Link href="/service/photography-videography-austin-tx" className="text-blue-600 hover:text-blue-800 underline">Investigative photography and videography</Link>{' '}
            — scene documentation, surveillance recording, and legal evidence capture
          </li>
          <li>
            <Link href="/service/press-release" className="text-blue-600 hover:text-blue-800 underline">Press release writing and distribution</Link>{' '}
            — professional PR writing and media placement
          </li>
          <li>
            <Link href="/service/asset-collection" className="text-blue-600 hover:text-blue-800 underline">Asset documentation</Link>{' '}
            — inventory, condition photography, and valuation support
          </li>
        </ul>
      </Section>

      <Section id="coverage-area" title="Coverage Area | Austin and Central Texas">
        <p>
          Our investigators are based in Austin and cover the full Central Texas region including Travis County,
          Williamson County, Hays County, Bastrop County, and Caldwell County. We routinely work cases
          in Round Rock, Cedar Park, Georgetown, San Marcos, Kyle, Buda, Pflugerville, and Leander.
        </p>
        <p>
          We also operate statewide, serving clients in Houston, Dallas, and other Texas cities. See the
          Texas Service Areas section below for city-specific coverage details.
        </p>
      </Section>

      <Section id="service-areas" title="Texas Service Areas">
        <p>
          ObjectWire Investigations serves clients across Texas. While Austin is our home base, we deploy
          investigators and handle cases in all major Texas metro areas. Dedicated city pages with
          court-specific guidance and local case context:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 not-prose">
          {[
            {
              href: '/service/private-detective-austin-tx',
              label: 'Austin, TX',
              badge: 'Home Base',
              desc: 'Travis County, Williamson County, and all of Central Texas. Same-day dispatch available.',
            },
            {
              href: '/service/private-detective-houston-tx',
              label: 'Houston, TX',
              badge: 'Service Area',
              desc: 'Harris County, Fort Bend, Montgomery, and Greater Houston. Energy sector and Harris County Family Court.',
            },
            {
              href: '/service/private-detective-dallas-tx',
              label: 'Dallas, TX',
              badge: 'Service Area',
              desc: 'Dallas County, Collin County, DFW Metroplex. Corporate investigations and Dallas Family Court.',
            },
          ].map(({ href, label, badge, desc }) => (
            <Link
              key={href}
              href={href}
              className="block border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-blue-600 group-hover:text-blue-800 underline">{label}</span>
                <span className="text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">{badge}</span>
              </div>
              <span className="text-sm text-gray-600">{desc}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Request a Consultation">
        <p>
          All consultations are confidential. To discuss your case, visit our{' '}
          <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
            contact and consultation page
          </Link>
          . Initial consultations are free. We will outline what is achievable, what the process looks like,
          and provide a cost estimate before any work begins.
        </p>
        <p>
          For full background on the agency, including our approach to evidence standards and confidentiality
          policy, see the{' '}
          <Link href="/austin-private-detective-agency" className="text-blue-600 hover:text-blue-800 underline">
            Austin Private Detective Agency
          </Link>{' '}
          page.
        </p>
      </Section>
    </ArticlePage>
  );
}
