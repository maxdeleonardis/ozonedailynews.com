import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectwire.org/service';

export const metadata: Metadata = {
  title: 'Investigative Services Austin TX | ObjectWire',
  description:
    'ObjectWire is an Austin-based investigative media company. Licensed PI services, investigative journalism, document review, and newsroom tips. Serving Travis County and Central Texas.',
  keywords: [
    'investigative services Austin TX',
    'private investigator Austin Texas',
    'Austin PI agency',
    'investigative journalism Austin',
    'surveillance Austin Texas',
    'missing persons Austin',
    'digital forensics Austin',
    'background check Austin TX',
    'corporate investigations Austin',
    'skip tracing Austin Texas',
    'tip the newsroom Austin',
    'FOIA Austin Texas',
    'ObjectWire investigative services',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Investigative Services Austin TX | ObjectWire',
    description:
      'Austin investigative media company. Licensed PI services and investigative journalism. Surveillance, missing persons, digital forensics, background checks, corporate investigations, FOIA, and newsroom tips.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investigative Services Austin TX | ObjectWire',
    description:
      'Austin PI and investigative journalism services. Surveillance, missing persons, digital forensics, and newsroom tips.',
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'ObjectWire Investigative Services',
  description:
    'Austin-based investigative media company offering licensed private investigator services including surveillance, missing persons, digital forensics, background checks, infidelity investigations, skip tracing, child custody, workers compensation fraud, and corporate investigations.',
  url: PAGE_URL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.2672,
    longitude: -97.7431,
  },
  areaServed: [
    { '@type': 'City', name: 'Austin', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'AdministrativeArea', name: 'Travis County' },
    { '@type': 'AdministrativeArea', name: 'Williamson County' },
    { '@type': 'AdministrativeArea', name: 'Hays County' },
  ],
  knowsAbout: [
    'Private Investigation',
    'Surveillance',
    'Digital Forensics',
    'Missing Persons',
    'Background Checks',
    'Corporate Investigations',
    'Investigative Journalism',
    'FOIA',
    'Source Protection',
    'Whistleblower Reporting',
    'Public Records',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Investigative Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Surveillance Investigations', url: 'https://www.objectwire.org/service/surveillance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infidelity Investigations', url: 'https://www.objectwire.org/service/infidelity-investigations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Missing Persons Investigations', url: 'https://www.objectwire.org/service/missing-persons' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Background Check Investigations', url: 'https://www.objectwire.org/service/background-checks' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Skip Tracing', url: 'https://www.objectwire.org/service/skip-tracing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Child Custody Investigations', url: 'https://www.objectwire.org/service/child-custody-investigations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workers Compensation Fraud', url: 'https://www.objectwire.org/service/workers-compensation-fraud' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Investigations', url: 'https://www.objectwire.org/service/corporate-investigations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Forensics', url: 'https://www.objectwire.org/service/digital-forensics' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Investigative Reporting', url: 'https://www.objectwire.org/service/investigative-reporting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Newsroom Tip Submission', url: 'https://www.objectwire.org/service/tip-the-newsroom' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Document Review and FOIA', url: 'https://www.objectwire.org/service/document-review' } },
    ],
  },
  sameAs: ['https://www.objectwire.org'],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.objectwire.org' },
    { '@type': 'ListItem', position: 2, name: 'Investigative Services', item: PAGE_URL },
  ],
};

const SERVICES = [
  { href: '/service/surveillance', label: 'Surveillance', desc: 'Covert photo and video documentation for domestic, legal, and corporate cases.' },
  { href: '/service/infidelity-investigations', label: 'Infidelity Investigations', desc: 'Cheating spouse and domestic partner cases with timestamped evidence.' },
  { href: '/service/missing-persons', label: 'Missing Persons', desc: 'Locate missing adults, runaways, and estranged family members.' },
  { href: '/service/background-checks', label: 'Background Checks', desc: 'Criminal history, employment verification, and identity research.' },
  { href: '/service/skip-tracing', label: 'Skip Tracing', desc: 'Locate debtors, witnesses, defendants, and estranged contacts.' },
  { href: '/service/child-custody-investigations', label: 'Child Custody Investigations', desc: 'Parental surveillance and verification for Travis County family court.' },
  { href: '/service/workers-compensation-fraud', label: 'Workers Compensation Fraud', desc: 'Claimant surveillance for insurers and defense attorneys.' },
  { href: '/service/corporate-investigations', label: 'Corporate Investigations', desc: 'Employee misconduct, IP theft, fraud, and executive due diligence.' },
  { href: '/service/digital-forensics', label: 'Digital Forensics', desc: 'Online harassment, identity fraud, social media aliases, and dark-web exposure.' },
];

const JOURNALISM_SERVICES = [
  { href: '/service/investigative-reporting', label: 'Investigative Reporting', desc: 'Published accountability journalism on public figures, institutions, and matters of public interest.' },
  { href: '/service/tip-the-newsroom', label: 'Tip the Newsroom', desc: 'Submit a confidential tip. We protect sources and pursue stories the public deserves to know.' },
  { href: '/service/document-review', label: 'Document Review and FOIA', desc: 'Submit public records, FOIA responses, or leaked materials for investigative analysis.' },
];

export default function ServicesHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <ArticlePage
        title="Investigative Services | ObjectWire Austin"
        subtitle="ObjectWire is an Austin-based investigative media company. We publish accountability journalism and take private cases, applying the same investigative discipline to both."
        category="Investigative Services"
        lastUpdated="May 4, 2026"
        slug="service"
        url="/service"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/service', label: 'Investigative Services' },
        ]}
        infoBox={{
          title: 'ObjectWire Investigations',
          sections: [
            {
              heading: 'Agency',
              items: [
                { label: 'Location', value: 'Austin, Texas' },
                { label: 'Jurisdiction', value: 'Travis County + Central Texas' },
                { label: 'License', value: 'Texas Occupations Code Ch. 1702' },
                { label: 'Type', value: 'Investigative Media Company + PI Services' },
              ],
            },
            {
              heading: 'PI Services',
              list: SERVICES.map((s) => s.label),
            },
            {
              heading: 'Media Services',
              list: JOURNALISM_SERVICES.map((s) => s.label),
            },
            {
              heading: 'Start a Case',
              links: [{ href: '/get-help', label: 'Request a Consultation' }],
            },
          ],
        }}
        tableOfContents={[
          { id: 'who-we-are', label: 'Who We Are' },
          { id: 'journalism-services', label: 'Media and Journalism Services' },
          { id: 'pi-services', label: 'PI Services' },
          { id: 'approach', label: 'How We Work' },
          { id: 'coverage', label: 'Coverage Area' },
          { id: 'licensing', label: 'Licensing' },
          { id: 'contact', label: 'Start a Case' },
        ]}
        relatedLinks={[
          ...JOURNALISM_SERVICES.map((s) => ({ href: s.href, label: s.label, description: s.desc })),
          ...SERVICES.map((s) => ({ href: s.href, label: s.label, description: s.desc })),
        ]}
        backLink={{ href: '/', label: 'ObjectWire' }}
      >
        <Section id="who-we-are" title="Who We Are | Investigative Media Company">
          <p>
            ObjectWire is an Austin-based investigative media company. Our primary mission is publishing
            source-cited accountability journalism on public figures, institutions, and stories the public
            deserves to know. We also take private cases, applying the same investigative discipline we bring
            to journalism to matters for individuals, attorneys, insurers, and businesses.
          </p>
          <p>
            Every investigative engagement is assigned to a licensed investigator operating under{' '}
            <strong>Texas Occupations Code Chapter 1702</strong>. We are locally operated, not a franchise.
            Our investigators know Austin, Travis County courts, and the evidentiary standards that govern
            what gets admitted in Texas civil and family proceedings.
          </p>
          <p>
            To request a free confidential consultation, visit the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              contact and consultation page
            </Link>
            . For our full investigative news coverage, visit the{' '}
            <Link href="/investigations" className="text-blue-600 hover:text-blue-800 underline">
              investigations section
            </Link>
            .
          </p>
        </Section>

        <Section id="journalism-services" title="Media and Journalism Services | Public Interest Reporting">
          <p>
            ObjectWire's primary identity is investigative journalism. We investigate, verify, and publish
            stories that hold people in power accountable. Our journalism services are available to sources,
            whistleblowers, and members of the public who have information that belongs in the public record.
          </p>
          <ul className="space-y-3 mt-3">
            {JOURNALISM_SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-blue-600 hover:text-blue-800 underline font-semibold">
                  {s.label}
                </Link>
                <span className="text-gray-700"> — {s.desc}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            Journalism engagements are editorially independent. We decide what to publish based on public
            interest, not client payment. Results of journalism investigations become public record. For
            private, confidential case work, see PI services below.
          </p>
        </Section>

        <Section id="pi-services" title="PI Services | Private Investigative Case Work">
          <p>
            PI services are private, confidential, and deliver results directly to the client. Findings
            remain with the client and are not published unless the client authorizes it. Cost is agreed in
            advance. All work is performed by licensed investigators under Texas Occupations Code Chapter 1702.
          </p>
          <ul className="space-y-3 mt-3">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-blue-600 hover:text-blue-800 underline font-semibold">
                  {s.label}
                </Link>
                <span className="text-gray-700"> — {s.desc}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="approach" title="How We Work | Case Process">
          <p>
            Every case begins with a <strong>free confidential consultation</strong>. We assess what is
            achievable, what evidence standards apply, and what a realistic timeline and cost looks like
            before any work begins. We do not take cases we cannot deliver on.
          </p>
          <p>
            Field work is conducted with professional-grade recording equipment. All documentation is
            timestamped, geotagged where applicable, and compiled into a written case report suitable for
            use in Texas court proceedings. We coordinate directly with attorneys on litigation-bound cases.
          </p>
          <p>
            Digital investigations are documented in a chain-of-custody format. Every case is handled
            with full confidentiality. We do not discuss client matters with third parties under any
            circumstances.
          </p>
        </Section>

        <Section id="coverage" title="Coverage Area | Austin and Central Texas">
          <p>
            Our investigators operate throughout <strong>Travis County</strong>, Williamson County, Hays
            County, Bastrop County, and Caldwell County. We routinely take cases in Round Rock, Cedar Park,
            Georgetown, San Marcos, Kyle, Buda, Pflugerville, and Leander.
          </p>
          <p>
            Out-of-area cases are handled on a case-by-case basis with travel fees disclosed at consultation.
          </p>
        </Section>

        <Section id="licensing" title="Licensing | Texas Occupations Code Ch. 1702">
          <p>
            All investigative work is conducted in compliance with{' '}
            <strong>Texas Occupations Code Chapter 1702</strong>, which governs private security and
            investigations in the state. Investigators are individually licensed through the Texas
            Department of Public Safety.
          </p>
          <p>
            We do not engage in illegal surveillance, unauthorized access, or any activity prohibited
            under Texas or federal law. Evidence gathered outside legal bounds is inadmissible and
            exposes clients to civil liability. Every engagement is structured to stay within legal
            limits while producing the most useful possible documentation.
          </p>
        </Section>

        <Section id="contact" title="Start a Case | Free Consultation">
          <p>
            Initial consultations are free and confidential. To discuss your case, visit the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              consultation page
            </Link>{' '}
            or review individual service pages for more detail on each case type.
          </p>
        </Section>
      </ArticlePage>
    </>
  );
}
