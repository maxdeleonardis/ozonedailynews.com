import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectwire.org/service/missing-persons';

export const metadata: Metadata = {
  title: 'Missing Persons Investigations Austin TX | ObjectWire',
  description:
    'Licensed missing persons investigations in Austin, Texas. Locate missing adults, runaways, and estranged family members across Travis County and Central Texas. ObjectWire PI services.',
  keywords: [
    'missing persons investigation Austin TX',
    'locate missing person Austin Texas',
    'missing adult Austin',
    'runaway investigation Austin TX',
    'find missing person Texas',
    'private investigator missing persons Austin',
    'estranged family member Austin',
    'skip trace missing person Austin TX',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Missing Persons Investigations Austin TX | ObjectWire',
    description: 'Licensed investigators locate missing adults, runaways, and estranged family members in Austin and Central Texas.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Missing Persons Investigations Austin TX | ObjectWire',
    description: 'Locate missing adults and runaways in Austin, TX. Licensed PI, confidential.',
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Missing Persons Investigations',
  description: 'Licensed investigations to locate missing adults, runaways, and estranged family members in Austin, Texas and Central Texas.',
  serviceType: 'Private Investigation — Missing Persons',
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
    { '@type': 'ListItem', position: 3, name: 'Missing Persons', item: PAGE_URL },
  ],
};

export default function MissingPersonsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <ArticlePage
        title="Missing Persons Investigations Austin TX | ObjectWire"
        subtitle="Licensed investigators locate missing adults, runaways, and estranged family members across Austin, Travis County, and Central Texas."
        category="Investigative Services"
        lastUpdated="May 4, 2026"
        slug="service-missing-persons"
        url="/service/missing-persons"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/service', label: 'Investigative Services' },
          { href: '/service/missing-persons', label: 'Missing Persons' },
        ]}
        infoBox={{
          title: 'Missing Persons Service',
          sections: [
            {
              heading: 'Details',
              items: [
                { label: 'Type', value: 'Missing Persons / Locate' },
                { label: 'Subjects', value: 'Adults, runaways, estranged family' },
                { label: 'Area', value: 'Austin, Travis County, Central Texas' },
                { label: 'Methods', value: 'Database research, field work, skip trace' },
              ],
            },
            {
              heading: 'Related Services',
              links: [
                { href: '/service/skip-tracing', label: 'Skip Tracing' },
                { href: '/service/background-checks', label: 'Background Checks' },
                { href: '/service/digital-forensics', label: 'Digital Forensics' },
              ],
            },
            { heading: 'Start a Case', links: [{ href: '/get-help', label: 'Free Consultation' }] },
          ],
        }}
        tableOfContents={[
          { id: 'what-is', label: 'What Missing Persons Investigation Covers' },
          { id: 'case-types', label: 'Case Types' },
          { id: 'methods', label: 'Investigation Methods' },
          { id: 'law-enforcement', label: 'PI vs. Law Enforcement' },
          { id: 'coverage', label: 'Coverage Area' },
          { id: 'contact', label: 'Start a Case' },
        ]}
        relatedLinks={[
          { href: '/service', label: 'All Investigative Services', description: 'Full list of case types' },
          { href: '/service/skip-tracing', label: 'Skip Tracing', description: 'Locate debtors, witnesses, and defendants' },
          { href: '/service/background-checks', label: 'Background Checks', description: 'Identity and address history research' },
          { href: '/service/digital-forensics', label: 'Digital Forensics', description: 'Online identity and social media investigation' },
        ]}
        backLink={{ href: '/service', label: 'Investigative Services' }}
      >
        <Section id="what-is" title="What Missing Persons Investigation Covers">
          <p>
            A missing persons investigation locates individuals who have left without explanation,
            cut contact voluntarily, or whose whereabouts are unknown. ObjectWire handles these cases
            for families, attorneys, and individuals across Austin and Central Texas using a combination
            of database research, field investigation, and{' '}
            <Link href="/service/skip-tracing" className="text-blue-600 hover:text-blue-800 underline">
              skip tracing
            </Link>
            .
          </p>
          <p>
            We investigate adult missing persons, teenage runaways, estranged family members, birth
            parent searches, and individuals lost contact through life transitions. Every case is
            handled with confidentiality and sensitivity to the circumstances.
          </p>
        </Section>

        <Section id="case-types" title="Case Types | Who We Locate">
          <ul className="space-y-2">
            <li><strong>Missing adults</strong> — adults who have left without explanation or lost contact with family</li>
            <li><strong>Runaways</strong> — minors who have left home; coordinated carefully given legal constraints</li>
            <li><strong>Estranged family members</strong> — parents, siblings, adult children who have cut contact</li>
            <li><strong>Birth parent and adoptee searches</strong> — reconnecting biological family members</li>
            <li><strong>Witnesses and defendants</strong> — legal locate work in conjunction with{' '}
              <Link href="/service/skip-tracing" className="text-blue-600 hover:text-blue-800 underline">
                skip tracing
              </Link>
            </li>
            <li><strong>Debtors and judgment subjects</strong> — locate for attorneys and collection matters</li>
          </ul>
        </Section>

        <Section id="methods" title="Investigation Methods | How We Find People">
          <p>
            We use a layered approach: proprietary database research, public records analysis, social
            media investigation via our{' '}
            <Link href="/service/digital-forensics" className="text-blue-600 hover:text-blue-800 underline">
              digital forensics
            </Link>{' '}
            capability, field interviews, and physical surveillance once a location is identified.
          </p>
          <p>
            Database research includes utility records, address history, vehicle registration, employment
            history, and known associate networks. Digital investigation covers social media activity,
            alias accounts, and online communications where accessible through lawful means.
          </p>
        </Section>

        <Section id="law-enforcement" title="PI vs. Law Enforcement | When to Call Each">
          <p>
            Law enforcement handles criminal missing persons cases, particularly those involving minors
            and foul play. Private investigators fill the gap for voluntary absences, estrangements,
            civil locate matters, and cases where law enforcement does not have capacity to actively
            investigate. A private investigator can also supplement an open law enforcement case with
            additional field work and evidence gathering.
          </p>
          <p>
            If you believe a missing person may be in danger or a victim of a crime, contact Austin
            Police Department or Travis County Sheriff first. We can coordinate with an active law
            enforcement investigation where appropriate.
          </p>
        </Section>

        <Section id="coverage" title="Coverage Area | Austin and Central Texas">
          <p>
            Primary coverage: Austin and Travis County. Extended coverage across Williamson, Hays,
            Bastrop, and Caldwell Counties. Out-of-state locate work is available on a case-by-case
            basis through our network of licensed investigators.
          </p>
        </Section>

        <Section id="contact" title="Start a Missing Persons Case">
          <p>
            Initial consultations are free and confidential. Visit the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              consultation page
            </Link>{' '}
            to discuss your case. For all services, see the{' '}
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
