import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-dynamic';

const SLUG = '/service/private-detective-houston-tx';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Private Detective Houston TX | Licensed PI Services',
  description: 'ObjectWire licensed private detective agency serving Houston, TX. Surveillance, infidelity, background checks, skip tracing, and corporate investigations in Harris County.',
  keywords: [
    'private detective Houston TX',
    'private investigator Houston Texas',
    'Houston PI agency',
    'licensed investigator Houston',
    'surveillance Houston TX',
    'infidelity investigation Houston',
    'background check Houston TX',
    'skip tracing Houston',
    'corporate investigation Houston',
    'child custody investigation Houston',
    'Harris County private detective',
    'Houston Texas investigator',
    'PI services Houston',
    'detective agency Houston TX',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Private Detective Houston TX | Licensed PI Services',
    description: 'ObjectWire licensed private detective agency serving Houston, TX. Surveillance, infidelity, background checks, skip tracing, and corporate investigations in Harris County.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    section: 'Investigative Services',
    publishedTime: '2026-04-29T00:00:00Z',
    modifiedTime: '2026-04-29T00:00:00Z',
    tags: ['Private Detective', 'Houston TX', 'PI Services', 'Harris County'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Detective Houston TX | Licensed PI Services',
    description: 'Licensed PI agency serving Houston, Harris County, and Greater Houston. Surveillance, infidelity, background checks, corporate cases.',
  },
};

export default function PrivateDetectiveHoustonPage() {
  return (
    <ArticlePage
      title="Private Detective Houston TX | ObjectWire Investigations"
      subtitle="Licensed private detective services serving Houston, Harris County, and the Greater Houston area. Domestic, legal, and corporate cases handled with full confidentiality."
      category="Investigative Services"
      lastUpdated="April 29, 2026"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/service', label: 'Services' },
        { href: SLUG, label: 'Houston TX' },
      ]}
      slug="service-private-detective-houston-tx"
      url={SLUG}
      tableOfContents={[
        { id: 'overview', label: 'Service Area Overview' },
        { id: 'services', label: 'Services Available in Houston' },
        { id: 'coverage', label: 'Coverage Area' },
        { id: 'cases', label: 'Common Case Types' },
        { id: 'process', label: 'How We Work Remotely' },
        { id: 'contact', label: 'Start a Case' },
      ]}
      infoBox={{
        title: 'Houston Service Area',
        sections: [
          {
            heading: 'Location',
            items: [
              { label: 'Primary County', value: 'Harris County' },
              { label: 'Adjacent Counties', value: 'Fort Bend, Montgomery, Brazoria' },
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
        { href: '/service/private-detective-dallas-tx', label: 'Private Detective Dallas TX', description: 'Dallas and DFW service area' },
        { href: '/service/private-detective-austin-tx', label: 'Private Detective Austin TX', description: 'Austin home base' },
        { href: '/austin-private-detective-agency', label: 'About the Agency', description: 'agency profile and licensing' },
        { href: '/service/surveillance', label: 'Surveillance Services', description: 'covert photo and video evidence' },
        { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks', description: 'criminal, employment, identity' },
        { href: '/service/skip-tracing-austin-tx', label: 'Skip Tracing', description: 'locate people and debtors' },
        { href: '/service/corporate-investigations-austin-tx', label: 'Corporate Investigations', description: 'fraud, misconduct, due diligence' },
      ]}
    >
      <Section id="overview" title="Private Detective Services in Houston, TX">
        <p>
          ObjectWire is a licensed private detective agency based in Austin, Texas, with active case operations
          in Houston and throughout Harris County. We serve clients in the Greater Houston area on domestic,
          legal support, and corporate investigation matters, deploying field investigators on-site when
          required and handling research and documentation remotely where appropriate.
        </p>
        <p>
          Houston is the fourth-largest city in the United States, with one of the most complex legal and
          corporate environments in Texas. Harris County District Courts, the Harris County Family Law Center,
          and the United States District Court for the Southern District of Texas all handle cases requiring
          third-party investigative support. We have direct experience preparing evidence packages for
          proceedings in all of these venues.
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

      <Section id="services" title="Services Available in Houston">
        <p>
          All core investigative services are available to Houston-area clients. Fieldwork is dispatched
          from our Austin base or handled by vetted contract investigators licensed in Texas operating in
          the Greater Houston area.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
          {[
            { href: '/service/surveillance', label: 'Surveillance', desc: 'Covert photo and video surveillance in Houston neighborhoods, business districts, and the Medical Center.' },
            { href: '/service/infidelity', label: 'Infidelity Investigations', desc: 'Cheating spouse and partner investigations with timestamped documentation.' },
            { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks', desc: 'Criminal history, employment verification, and identity research for Houston employers and attorneys.' },
            { href: '/service/skip-tracing-austin-tx', label: 'Skip Tracing', desc: 'Locate debtors, witnesses, and estranged contacts across Harris County and Greater Houston.' },
            { href: '/service/child-custody-investigations-austin-tx', label: 'Child Custody', desc: 'Evidence gathering for Harris County Family Law Court proceedings.' },
            { href: '/service/workers-compensation-investigations-austin-tx', label: 'Workers Comp Fraud', desc: 'Claimant surveillance for Houston employers, insurers, and law firms.' },
            { href: '/service/corporate-investigations-austin-tx', label: 'Corporate Investigations', desc: 'Employee misconduct, IP theft, and fraud investigations for Houston energy, healthcare, and tech firms.' },
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

      <Section id="coverage" title="Coverage Area | Houston and Harris County">
        <p>
          Our Houston coverage area spans Harris County and its immediate neighboring counties. We serve
          clients in central Houston as well as outlying communities and suburbs including:
        </p>
        <ul>
          <li><strong>Central Houston</strong> — Downtown, Midtown, Montrose, Heights, Museum District</li>
          <li><strong>West Houston</strong> — Galleria, Memorial, Energy Corridor, Katy</li>
          <li><strong>Southwest</strong> — Sugar Land, Missouri City, Stafford, Pearland</li>
          <li><strong>North Houston</strong> — The Woodlands, Spring, Humble, Kingwood</li>
          <li><strong>East Houston</strong> — Baytown, Pasadena, Clear Lake, League City</li>
          <li><strong>Fort Bend County</strong> — Richmond, Rosenberg, Fulshear</li>
          <li><strong>Montgomery County</strong> — Conroe, Magnolia, Willis</li>
        </ul>
        <p>
          For cases requiring sustained multi-day fieldwork in Houston, we coordinate locally to ensure
          timely on-site presence. All investigators operating on our behalf carry valid Texas PI licenses
          and operate under our agency supervision.
        </p>
      </Section>

      <Section id="cases" title="Common Houston Case Types">
        <p>
          Houston's size, industry mix, and legal infrastructure drive a distinct case mix compared to
          other Texas cities. The most common cases we handle for Houston clients:
        </p>
        <ul>
          <li>
            <strong>Energy sector corporate investigations</strong> — Houston hosts the headquarters of
            Chevron, ExxonMobil, Shell, BP, Halliburton, and hundreds of mid-size energy firms. Employee
            misconduct, trade secret misappropriation, and vendor fraud are recurring case types.
            See{' '}
            <Link href="/service/corporate-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              Corporate Investigations
            </Link>
            .
          </li>
          <li>
            <strong>Workers compensation fraud</strong> — Harris County accounts for a significant share
            of Texas workers comp claims. We conduct claimant surveillance and activity verification for
            insurers, self-insured employers, and defense law firms. See{' '}
            <Link href="/service/workers-compensation-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              Workers Comp Fraud Investigations
            </Link>
            .
          </li>
          <li>
            <strong>Harris County Family Law cases</strong> — Child custody disputes, divorce proceedings,
            and protective order support involving surveillance evidence. The Harris County Family Law
            Center processes thousands of contested cases annually. See{' '}
            <Link href="/service/child-custody-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              Child Custody Investigations
            </Link>
            .
          </li>
          <li>
            <strong>Skip tracing and debt recovery</strong> — The Houston metro is one of the largest
            debtor populations in the country. We locate individuals across Harris County and Greater
            Houston for creditors, attorneys, and process servers. See{' '}
            <Link href="/service/skip-tracing-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              Skip Tracing
            </Link>
            .
          </li>
          <li>
            <strong>Infidelity and domestic surveillance</strong> — Marital infidelity investigations
            and partner surveillance are handled with full discretion. Timestamped evidence is prepared
            to meet Texas family court standards. See{' '}
            <Link href="/service/infidelity" className="text-blue-600 hover:text-blue-800 underline">
              Infidelity Investigations
            </Link>
            .
          </li>
        </ul>
      </Section>

      <Section id="process" title="How We Work with Houston Clients">
        <p>
          All engagements begin with a confidential consultation — by phone, video, or secure message.
          No obligation, no upfront commitment. We assess the facts of your case, explain what
          investigative approach is realistic given your jurisdiction and timeline, and provide a
          written scope and fee estimate before any work begins.
        </p>
        <p>
          For Houston cases requiring physical fieldwork, we dispatch licensed investigators to
          Harris County. For research-based cases (background checks, skip tracing, document
          verification), all work is conducted remotely and delivered securely. Most remote
          deliverables are turned around within 3-5 business days.
        </p>
        <p>
          Evidence packages are formatted for admissibility in Texas civil proceedings. Reports
          include timestamped media, GPS-referenced activity logs where applicable, and written
          summaries suitable for attorney use.
        </p>
        <p>
          We also serve clients in{' '}
          <Link href="/service/private-detective-dallas-tx" className="text-blue-600 hover:text-blue-800 underline">
            Dallas and the DFW Metroplex
          </Link>{' '}
          and across Texas from our{' '}
          <Link href="/service/private-detective-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
            Austin home base
          </Link>
          .
        </p>
      </Section>

      <Section id="contact" title="Start a Case in Houston">
        <p>
          To open a case or request a consultation for a Houston, TX matter, contact ObjectWire
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
