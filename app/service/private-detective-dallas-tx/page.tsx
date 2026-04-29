import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-dynamic';

const SLUG = '/service/private-detective-dallas-tx';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Private Detective Dallas TX | Licensed PI Services',
  description: 'ObjectWire licensed private detective agency serving Dallas, TX and the DFW Metroplex. Surveillance, infidelity, background checks, skip tracing, and corporate investigations.',
  keywords: [
    'private detective Dallas TX',
    'private investigator Dallas Texas',
    'Dallas PI agency',
    'licensed investigator Dallas',
    'surveillance Dallas TX',
    'infidelity investigation Dallas',
    'background check Dallas TX',
    'skip tracing Dallas',
    'corporate investigation Dallas',
    'child custody investigation Dallas',
    'Dallas County private detective',
    'DFW private investigator',
    'private detective DFW',
    'PI services Dallas Texas',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Private Detective Dallas TX | Licensed PI Services',
    description: 'ObjectWire licensed private detective agency serving Dallas, TX and the DFW Metroplex. Surveillance, infidelity, background checks, skip tracing, and corporate investigations.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    section: 'Investigative Services',
    publishedTime: '2026-04-29T00:00:00Z',
    modifiedTime: '2026-04-29T00:00:00Z',
    tags: ['Private Detective', 'Dallas TX', 'PI Services', 'DFW Metroplex'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Detective Dallas TX | Licensed PI Services',
    description: 'Licensed PI agency serving Dallas, DFW Metroplex, and surrounding counties. Surveillance, infidelity, background checks, corporate cases.',
  },
};

export default function PrivateDetectiveDallasPage() {
  return (
    <ArticlePage
      title="Private Detective Dallas TX | ObjectWire Investigations"
      subtitle="Licensed private detective services serving Dallas, the DFW Metroplex, and Dallas County. Domestic, legal, and corporate cases handled with full confidentiality."
      category="Investigative Services"
      lastUpdated="April 29, 2026"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/service', label: 'Services' },
        { href: SLUG, label: 'Dallas TX' },
      ]}
      slug="service-private-detective-dallas-tx"
      url={SLUG}
      tableOfContents={[
        { id: 'overview', label: 'Service Area Overview' },
        { id: 'services', label: 'Services Available in Dallas' },
        { id: 'coverage', label: 'DFW Coverage Area' },
        { id: 'cases', label: 'Common Case Types' },
        { id: 'process', label: 'How We Work Remotely' },
        { id: 'contact', label: 'Start a Case' },
      ]}
      infoBox={{
        title: 'Dallas Service Area',
        sections: [
          {
            heading: 'Location',
            items: [
              { label: 'Primary County', value: 'Dallas County' },
              { label: 'Adjacent Counties', value: 'Collin, Denton, Tarrant' },
              { label: 'Home Base', value: 'Austin, TX' },
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
              'Background Checks',
              'Skip Tracing',
              'Child Custody',
              'Workers Comp Fraud',
              'Corporate Investigations',
              'Evidence Collection',
            ],
          },
          {
            heading: 'Contact',
            items: [
              { label: 'Consult', value: 'Confidential, no obligation' },
              { label: 'Response', value: 'Within 24 hours' },
            ],
          },
        ],
      }}
      relatedLinks={[
        { href: '/service', label: 'Full Services List', description: 'all investigative services' },
        { href: '/service/private-detective-houston-tx', label: 'Private Detective Houston TX', description: 'Houston and Harris County service area' },
        { href: '/service/private-detective-austin-tx', label: 'Private Detective Austin TX', description: 'Austin home base' },
        { href: '/austin-private-detective-agency', label: 'About the Agency', description: 'agency profile and licensing' },
        { href: '/service/surveillance', label: 'Surveillance Services', description: 'covert photo and video evidence' },
        { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks', description: 'criminal, employment, identity' },
        { href: '/service/skip-tracing-austin-tx', label: 'Skip Tracing', description: 'locate people and debtors' },
        { href: '/service/corporate-investigations-austin-tx', label: 'Corporate Investigations', description: 'fraud, misconduct, due diligence' },
      ]}
    >
      <Section id="overview" title="Private Detective Services in Dallas, TX">
        <p>
          ObjectWire is a licensed private detective agency based in Austin, Texas, with active case
          operations in Dallas and throughout the DFW Metroplex. We serve Dallas-area clients on
          domestic, legal support, and corporate investigation matters, deploying field investigators
          on-site when required and handling research and documentation remotely where appropriate.
        </p>
        <p>
          Dallas County and the surrounding DFW Metroplex represent one of the fastest-growing corporate
          and residential markets in the United States. The 14th Civil District Court, the Dallas County
          Family District Courts, and federal courts in the Northern District of Texas routinely involve
          matters requiring licensed investigative support. We prepare evidence packages formatted for
          admissibility in all of these venues.
        </p>
        <p>
          For full agency licensing information, see the{' '}
          <Link href="/austin-private-detective-agency" className="text-blue-600 hover:text-blue-800 underline">
            Austin Private Detective Agency
          </Link>{' '}
          page. For our complete list of services, visit the{' '}
          <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
            Services hub
          </Link>
          .
        </p>
      </Section>

      <Section id="services" title="Services Available in Dallas">
        <p>
          All core investigative services are available to Dallas-area clients. Fieldwork is dispatched
          from our Austin base or handled by vetted contract investigators licensed in Texas operating in
          the DFW Metroplex.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
          {[
            { href: '/service/surveillance', label: 'Surveillance', desc: 'Covert photo and video surveillance in Dallas neighborhoods, the Metroplex suburbs, and corporate campuses.' },
            { href: '/service/infidelity', label: 'Infidelity Investigations', desc: 'Cheating spouse and partner investigations with timestamped documentation.' },
            { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks', desc: 'Criminal history, employment verification, and identity research for Dallas employers and attorneys.' },
            { href: '/service/skip-tracing-austin-tx', label: 'Skip Tracing', desc: 'Locate debtors, witnesses, and estranged contacts across Dallas County and the DFW Metroplex.' },
            { href: '/service/child-custody-investigations-austin-tx', label: 'Child Custody', desc: 'Evidence gathering for Dallas County Family Court and Collin County proceedings.' },
            { href: '/service/workers-compensation-investigations-austin-tx', label: 'Workers Comp Fraud', desc: 'Claimant surveillance for DFW employers, insurers, and defense firms.' },
            { href: '/service/corporate-investigations-austin-tx', label: 'Corporate Investigations', desc: 'Employee misconduct, IP theft, and due diligence for Dallas tech, financial, and telecom firms.' },
            { href: '/service/fact-finding-and-evidence-collection', label: 'Evidence Collection', desc: 'Witness interviews, document verification, and fact-finding for civil and criminal litigation.' },
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

      <Section id="coverage" title="DFW Metroplex Coverage Area">
        <p>
          Our Dallas coverage spans Dallas County and its immediate neighboring counties across the
          DFW Metroplex. We serve clients in central Dallas as well as suburban and outlying communities:
        </p>
        <ul>
          <li><strong>Central Dallas</strong> — Downtown, Uptown, Deep Ellum, Oak Cliff, Bishop Arts</li>
          <li><strong>North Dallas</strong> — Highland Park, University Park, Preston Hollow, Addison</li>
          <li><strong>Collin County</strong> — Plano, Frisco, McKinney, Allen, Murphy</li>
          <li><strong>Denton County</strong> — Denton, Flower Mound, Lewisville, Grapevine</li>
          <li><strong>Tarrant County</strong> — Fort Worth, Arlington, Bedford, Euless, Hurst</li>
          <li><strong>Rockwall and Kaufman Counties</strong> — eastern Metroplex outlying areas</li>
          <li><strong>Ellis County</strong> — Waxahachie and southern suburbs</li>
        </ul>
        <p>
          For cases requiring sustained multi-day fieldwork in the Dallas area, we coordinate locally
          to ensure timely on-site presence. All investigators operating on our behalf carry valid Texas
          PI licenses and operate under our agency supervision.
        </p>
      </Section>

      <Section id="cases" title="Common Dallas Case Types">
        <p>
          The DFW Metroplex is home to over 20 Fortune 500 company headquarters and one of the largest
          family court systems in Texas. The most common cases we handle for Dallas clients:
        </p>
        <ul>
          <li>
            <strong>Corporate and technology investigations</strong> — Dallas hosts AT&T, Texas Instruments,
            Southwest Airlines, Kimberly-Clark, and a growing tech and financial services sector. Employee
            misconduct, competitive intelligence, and fraud cases are among the most frequent. See{' '}
            <Link href="/service/corporate-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              Corporate Investigations
            </Link>
            .
          </li>
          <li>
            <strong>Dallas County and Collin County family court</strong> — Child custody disputes and
            divorce proceedings frequently require third-party surveillance evidence. We prepare
            documentation to meet Dallas County Family Court evidentiary standards. See{' '}
            <Link href="/service/child-custody-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              Child Custody Investigations
            </Link>
            .
          </li>
          <li>
            <strong>Infidelity and domestic surveillance</strong> — Marital infidelity and partner
            surveillance cases in Dallas and the Metroplex suburbs. All fieldwork is covert with
            full documentation. See{' '}
            <Link href="/service/infidelity" className="text-blue-600 hover:text-blue-800 underline">
              Infidelity Investigations
            </Link>
            .
          </li>
          <li>
            <strong>Skip tracing across the DFW Metroplex</strong> — Locating debtors, witnesses, and
            missing persons across a metro area of 7+ million requires experience with public records
            across multiple county databases. See{' '}
            <Link href="/service/skip-tracing-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              Skip Tracing
            </Link>
            .
          </li>
          <li>
            <strong>Background investigations for employers</strong> — Dallas-area employers in finance,
            healthcare, and logistics frequently require pre-hire and vendor background checks. See{' '}
            <Link href="/service/background-check-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              Background Check Investigations
            </Link>
            .
          </li>
        </ul>
      </Section>

      <Section id="process" title="How We Work with Dallas Clients">
        <p>
          All engagements begin with a confidential consultation by phone, video, or secure message.
          No obligation, no upfront commitment. We assess the facts of your case, explain what
          investigative approach is realistic, and provide a written scope and fee estimate before
          any work begins.
        </p>
        <p>
          For Dallas cases requiring physical fieldwork, we dispatch licensed investigators to the
          DFW Metroplex. For research-based cases (background checks, skip tracing, document
          verification), all work is conducted remotely and delivered securely within 3-5 business
          days.
        </p>
        <p>
          Evidence packages are formatted for admissibility in Texas civil proceedings. Reports include
          timestamped media, GPS-referenced activity logs where applicable, and written summaries
          suitable for attorney use in Dallas County, Collin County, and Tarrant County courts.
        </p>
        <p>
          We also serve clients in{' '}
          <Link href="/service/private-detective-houston-tx" className="text-blue-600 hover:text-blue-800 underline">
            Houston and Harris County
          </Link>{' '}
          and throughout Texas from our{' '}
          <Link href="/service/private-detective-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
            Austin home base
          </Link>
          .
        </p>
      </Section>

      <Section id="contact" title="Start a Case in Dallas">
        <p>
          To open a case or request a consultation for a Dallas or DFW matter, contact ObjectWire
          Investigations directly. All inquiries are confidential. We respond to all case inquiries
          within 24 hours.
        </p>
        <p>
          Our{' '}
          <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
            full services list
          </Link>{' '}
          covers every investigative capability we offer. For general agency information, licensing,
          and background, see the{' '}
          <Link href="/austin-private-detective-agency" className="text-blue-600 hover:text-blue-800 underline">
            Austin Private Detective Agency
          </Link>{' '}
          page.
        </p>
        <p>
          ObjectWire Investigations is licensed under the State of Texas, operating in compliance
          with Texas Occupations Code Chapter 1702 governing private security and investigations.
        </p>
      </Section>
    </ArticlePage>
  );
}
