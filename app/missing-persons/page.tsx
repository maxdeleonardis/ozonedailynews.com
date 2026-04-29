import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Missing Persons Investigation Austin TX | Licensed PI",
  description: "Licensed private detectives in Austin, Texas handling missing persons cases. Locate missing adults, runaways, and estranged family members. Confidential.",
  keywords: [
    "missing persons investigation Austin TX",
    "find missing person Austin",
    "locate missing person Texas",
    "missing adult investigation Austin",
    "runaway investigation Austin TX",
    "estranged family search Austin",
    "private detective missing persons Texas",
    "locate missing adult Austin",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/missing-persons',
  },
  openGraph: {
    title: "Missing Persons Investigation Austin TX | Licensed PI",
    description: "Licensed private detectives in Austin, Texas handling missing persons cases. Locate missing adults, runaways, and estranged family members. Confidential.",
    type: 'article',
    url: "https://www.objectwire.org/missing-persons",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Missing Persons Investigation Austin TX | Licensed PI",
    description: "Licensed private detectives in Austin, Texas handling missing persons cases. Locate missing adults, runaways, and estranged family members. Confidential.",
  },
};

export default function MissingPersonsPage() {
  return (
    <ArticlePage
      title="Missing Persons Investigation | Austin, Texas"
      subtitle="Licensed private investigators locating missing adults, runaways, and estranged family members. Based in Austin, available throughout Texas."
      category="Investigative Services"
      lastUpdated="April 29, 2026"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/service', label: 'Services' },
        { href: '/missing-persons', label: 'Missing Persons' },
      ]}
      slug="missing-persons"
      url="/missing-persons"
      infoBox={{
        title: 'Missing Persons',
        sections: [
          {
            heading: 'Details',
            items: [
              { label: 'Primary Base', value: 'Austin, TX' },
              { label: 'Coverage', value: 'Texas statewide (travel available)' },
              { label: 'Works With', value: 'Families, attorneys, law firms' },
              { label: 'Note', value: 'Complements, does not replace, law enforcement' },
            ],
          },
          {
            heading: 'Case Types',
            list: [
              'Missing adults',
              'Runaways',
              'Estranged family members',
              'Locate individuals for legal service',
              'Cold case supplemental research',
            ],
          },
          {
            heading: 'Related Services',
            links: [
              { href: '/service/skip-tracing-austin-tx', label: 'Skip Tracing' },
              { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks' },
              { href: '/service/fact-finding-and-evidence-collection', label: 'Evidence Collection' },
              { href: '/service', label: 'All Services' },
            ],
          },
        ],
      }}
      tableOfContents={[
        { id: 'overview', label: 'Service Overview' },
        { id: 'case-types', label: 'Case Types' },
        { id: 'process', label: 'How It Works' },
        { id: 'law-enforcement', label: 'Working With Law Enforcement' },
        { id: 'coverage', label: 'Coverage Area' },
        { id: 'contact', label: 'Get Started' },
      ]}
      relatedLinks={[
        { href: '/service', label: 'All Investigative Services', description: 'full services hub' },
        { href: '/austin-private-detective-agency', label: 'Austin Private Detective Agency', description: 'agency profile' },
        { href: '/service/skip-tracing-austin-tx', label: 'Skip Tracing', description: 'locate people and debtors' },
        { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks', description: 'identity and criminal history' },
        { href: '/service/fact-finding-and-evidence-collection', label: 'Evidence Collection', description: 'fact-finding for legal cases' },
      ]}
    >
      <Section id="overview" title="Service Overview">
        <p>
          ObjectWire handles missing persons cases for families, attorneys, and legal teams throughout
          Texas. We locate missing adults, runaway teens, and estranged family members using a combination
          of{' '}
          <Link href="/service/skip-tracing-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
            skip tracing
          </Link>
          ,{' '}
          <Link href="/service/background-check-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
            background research
          </Link>
          , field investigation, and public records analysis.
        </p>
        <p>
          Missing persons investigations require a combination of persistence, discretion, and sensitivity.
          We understand that behind every case is a family or individual in a difficult situation. We work
          quickly and keep clients informed throughout. For agency background, see the{' '}
          <Link href="/austin-private-detective-agency" className="text-blue-600 hover:text-blue-800 underline">
            Austin Private Detective Agency
          </Link>{' '}
          page.
        </p>
      </Section>

      <Section id="case-types" title="Case Types">
        <ul>
          <li>
            <strong>Missing adults</strong> — locate adults who have gone missing voluntarily or
            involuntarily, including those with mental health conditions, substance dependency, or
            who are fleeing domestic situations
          </li>
          <li>
            <strong>Runaways</strong> — locate minors who have left home, coordinating findings
            with families and, where appropriate, law enforcement
          </li>
          <li>
            <strong>Estranged family members</strong> — reconnect with parents, siblings, or children
            lost to time, relocation, or family breakdown
          </li>
          <li>
            <strong>Legal locate</strong> — find individuals who need to be served with legal documents,
            located for depositions, or identified as heirs or beneficiaries in estate matters
          </li>
          <li>
            <strong>Cold case supplemental research</strong> — provide families with independent
            investigative support on stalled or closed law enforcement missing persons cases
          </li>
        </ul>
      </Section>

      <Section id="process" title="How It Works">
        <ol>
          <li>
            <strong>Intake</strong> — you provide known details about the subject: last known location,
            contacts, habits, vehicle, online presence, and employment history
          </li>
          <li>
            <strong>Records and digital research</strong> — we analyze public records, social media,
            utility registrations, court filings, and other data sources to build a location profile
          </li>
          <li>
            <strong>Skip tracing</strong> — systematic use of{' '}
            <Link href="/service/skip-tracing-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              skip trace methods
            </Link>{' '}
            to identify current address, phone, and associated contacts
          </li>
          <li>
            <strong>Field investigation</strong> — where records lead to a physical location, we
            conduct in-person verification before reporting back to the client
          </li>
          <li>
            <strong>Report</strong> — findings are delivered in a written report. Depending on the case,
            this may include a confirmed current address, contact information, or circumstantial context
          </li>
        </ol>
      </Section>

      <Section id="law-enforcement" title="Working With Law Enforcement">
        <p>
          A private investigator's missing persons work complements law enforcement but does not replace
          it. If your missing person case involves a potential crime, contact Austin Police Department
          or Travis County Sheriff before engaging a private investigator. APD's non-emergency line is
          (512) 974-5000.
        </p>
        <p>
          In cases where law enforcement has closed or stalled a missing persons report, we can conduct
          independent investigation and share findings with investigators on request. We operate within
          Texas law and do not obstruct or interfere with active police investigations.
        </p>
      </Section>

      <Section id="coverage" title="Coverage Area">
        <p>
          We are based in Austin, Texas and primarily serve Travis County and surrounding areas including
          Williamson, Hays, Bastrop, and Caldwell counties. We are available for cases in Dallas,
          Houston, San Antonio, and other Texas cities with travel arrangements discussed at consultation.
          Dedicated service area pages for Dallas and Houston are coming soon.
        </p>
      </Section>

      <Section id="contact" title="Get Started">
        <p>
          To discuss a missing persons case, visit the{' '}
          <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
            consultation request page
          </Link>
          . All consultations are free and confidential. View the full{' '}
          <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
            services list
          </Link>{' '}
          for other investigative services we offer.
        </p>
      </Section>
    </ArticlePage>
  );
}
