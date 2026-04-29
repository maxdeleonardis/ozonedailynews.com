import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Child Custody Investigation Austin TX | Licensed PI",
  description: "Confidential child custody investigations in Austin, Texas. Surveillance, evidence documentation, and parental verification for family court cases.",
  keywords: [
    "child custody investigation Austin TX",
    "custody surveillance Austin",
    "parental investigation Austin Texas",
    "family court PI Austin",
    "child welfare investigation Austin",
    "custody evidence Austin TX",
    "custodial parent surveillance Austin",
    "child custody PI Texas",
    "parenting time investigation Austin",
    "family law investigator Austin TX",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/service/child-custody-investigations-austin-tx',
  },
  openGraph: {
    title: "Child Custody Investigation Austin TX | Licensed PI",
    description: "Confidential child custody investigations in Austin, Texas. Surveillance, evidence documentation, and parental verification for family court cases.",
    type: 'article',
    url: "https://www.objectwire.org/service/child-custody-investigations-austin-tx",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Child Custody Investigation Austin TX | Licensed PI",
    description: "Confidential child custody investigations in Austin, Texas. Surveillance, evidence documentation, and parental verification for family court cases.",
  },
};

export default function ChildCustodyAustinPage() {
  return (
    <ArticlePage
      title="Child Custody Investigation | Austin, Texas"
      subtitle="Confidential surveillance and parental verification for family court cases in Travis County and throughout Texas."
      category="Investigative Services"
      lastUpdated="April 29, 2026"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/service', label: 'Services' },
        { href: '/service/child-custody-investigations-austin-tx', label: 'Child Custody Investigations' },
      ]}
      slug="service-child-custody-investigations-austin-tx"
      url="/service/child-custody-investigations-austin-tx"
      infoBox={{
        title: 'Child Custody Investigation',
        sections: [
          {
            heading: 'Details',
            items: [
              { label: 'Primary Base', value: 'Austin, TX' },
              { label: 'Court', value: 'Travis County Family Court' },
              { label: 'Coverage', value: 'Texas statewide (travel available)' },
              { label: 'Output', value: 'Photo, video, written report' },
            ],
          },
          {
            heading: 'Investigation Types',
            list: [
              'Parenting-time violation',
              'Hazardous home environment',
              'Unauthorized relocation',
              'New partner background',
              'Substance abuse documentation',
              'Neglect documentation',
            ],
          },
          {
            heading: 'Related Services',
            links: [
              { href: '/service/surveillance', label: 'Surveillance' },
              { href: '/service/infidelity', label: 'Infidelity Investigations' },
              { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks' },
              { href: '/service', label: 'All Services' },
            ],
          },
        ],
      }}
      tableOfContents={[
        { id: 'overview', label: 'Service Overview' },
        { id: 'what-we-investigate', label: 'What We Investigate' },
        { id: 'process', label: 'How It Works' },
        { id: 'court-use', label: 'Using Evidence in Court' },
        { id: 'coverage', label: 'Coverage Area' },
        { id: 'contact', label: 'Get Started' },
      ]}
      relatedLinks={[
        { href: '/service', label: 'All Investigative Services', description: 'full services hub' },
        { href: '/austin-private-detective-agency', label: 'Austin Private Detective Agency', description: 'agency profile' },
        { href: '/service/surveillance', label: 'Surveillance', description: 'covert photo and video documentation' },
        { href: '/service/infidelity', label: 'Infidelity Investigations', description: 'often overlaps with custody cases' },
        { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks', description: 'new partner or household member screening' },
      ]}
    >
      <Section id="overview" title="Service Overview">
        <p>
          Child custody investigations help parents, guardians, and attorneys obtain documented
          evidence of a co-parent's behavior, home environment, or compliance with court-ordered
          parenting arrangements. ObjectWire conducts these cases with licensed investigators using
          covert{' '}
          <Link href="/service/surveillance" className="text-blue-600 hover:text-blue-800 underline">
            surveillance
          </Link>{' '}
          and field documentation.
        </p>
        <p>
          We are based in Austin and work regularly with Travis County Family Court cases. For the
          full range of services, see the{' '}
          <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
            services hub
          </Link>
          . For agency background, see the{' '}
          <Link href="/austin-private-detective-agency" className="text-blue-600 hover:text-blue-800 underline">
            Austin Private Detective Agency
          </Link>{' '}
          page.
        </p>
      </Section>

      <Section id="what-we-investigate" title="What We Investigate">
        <ul>
          <li>
            <strong>Parenting-time violations</strong> — document a parent failing to follow the
            court-ordered custody schedule, including late returns, early pickups, or complete no-shows
          </li>
          <li>
            <strong>Hazardous home environment</strong> — document living conditions, frequent
            visitors, or activities that may expose children to risk
          </li>
          <li>
            <strong>Unauthorized relocation</strong> — verify whether a parent has moved the children
            outside the permitted geographic area without court approval
          </li>
          <li>
            <strong>New partner or household member</strong> — run a{' '}
            <Link href="/service/background-check-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              background check
            </Link>{' '}
            on a new adult living in or regularly present at the children's residence
          </li>
          <li>
            <strong>Substance abuse</strong> — document behavior or activity consistent with alcohol
            or drug use during parenting time
          </li>
          <li>
            <strong>Neglect</strong> — document patterns of late school pickups, missed appointments,
            or other evidence of inadequate supervision
          </li>
        </ul>
        <p>
          If your situation also involves a suspected affair, child custody investigations often
          overlap with{' '}
          <Link href="/service/infidelity" className="text-blue-600 hover:text-blue-800 underline">
            infidelity investigations
          </Link>
          . We can run both in a single engagement.
        </p>
      </Section>

      <Section id="process" title="How It Works">
        <ol>
          <li>
            <strong>Consultation</strong> — you describe the custody arrangement, your concerns, and
            what you need documented. We explain what is achievable and the legal bounds that apply
          </li>
          <li>
            <strong>Subject research</strong> — we establish known locations, vehicles, and schedules
            to optimize surveillance planning
          </li>
          <li>
            <strong>Surveillance</strong> — licensed investigators conduct covert mobile and stationary
            observation during relevant time windows
          </li>
          <li>
            <strong>Report</strong> — all photo and video evidence is compiled with a written narrative
            formatted for Texas family court use
          </li>
        </ol>
      </Section>

      <Section id="court-use" title="Using Evidence in Court">
        <p>
          Evidence gathered by a licensed PI is admissible in Texas family court proceedings provided
          it was obtained lawfully. We format all reports to Texas Rules of Evidence standards and
          coordinate directly with your family law attorney to ensure the documentation supports
          your specific legal argument.
        </p>
        <p>
          We are familiar with Travis County Family Court procedures and can advise on what types of
          evidence tend to carry weight in custody modification hearings versus initial custody
          determinations.
        </p>
      </Section>

      <Section id="coverage" title="Coverage Area">
        <p>
          We are based in Austin, Texas and primarily handle Travis County family court cases. We are
          available for child custody investigation work in Dallas, Houston, San Antonio, and elsewhere
          in Texas with travel arrangements discussed at consultation.
        </p>
      </Section>

      <Section id="contact" title="Get Started">
        <p>
          All consultations are confidential and free. To discuss your case, visit the{' '}
          <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
            consultation request page
          </Link>
          . View the full{' '}
          <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
            services list
          </Link>{' '}
          for other investigative options.
        </p>
      </Section>
    </ArticlePage>
  );
}
