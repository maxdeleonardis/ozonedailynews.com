import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicePage, ServiceSection } from '@/components/articles/ServicePage';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectwire.org/service/corporate-investigations';

export const metadata: Metadata = {
  title: 'Corporate Investigations Austin TX | ObjectWire',
  description:
    'Licensed corporate investigations in Austin, Texas. Employee misconduct, IP theft, fraud, executive due diligence, and internal threat assessment across Travis County.',
  keywords: [
    'corporate investigations Austin TX',
    'employee misconduct investigation Austin',
    'IP theft investigation Austin Texas',
    'corporate fraud investigation Austin',
    'executive due diligence Austin TX',
    'internal investigation Austin Texas',
    'business fraud PI Austin',
    'corporate PI Austin TX',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Corporate Investigations Austin TX | ObjectWire',
    description: 'Employee misconduct, IP theft, fraud, and executive due diligence investigations in Austin, TX.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Investigations Austin TX | ObjectWire',
    description: 'Corporate fraud, employee misconduct, and IP theft investigations in Austin, TX.',
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate Investigations',
  description: 'Licensed employee misconduct, IP theft, fraud, and executive due diligence investigations for Austin, Texas businesses.',
  serviceType: 'Private Investigation — Corporate',
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
    { '@type': 'ListItem', position: 3, name: 'Corporate Investigations', item: PAGE_URL },
  ],
};

export default function CorporateInvestigationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <ServicePage
        icon="🏢"
        title="Corporate Investigations Austin TX | ObjectWire"
        subtitle="Employee misconduct, IP theft, fraud, and executive due diligence investigations for Austin-area businesses and legal teams."
        category="Investigative Services"
        lastUpdated="May 15, 2026"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/service', label: 'Investigative Services' },
          { href: '/service/corporate-investigations', label: 'Corporate Investigations' },
        ]}
        stats={[
          { value: 'Licensed', label: 'Texas PI' },
          { value: 'Confidential', label: 'Case Handling' },
          { value: 'Court-Ready', label: 'Documentation' },
          { value: 'Free', label: 'Consultation' },
        ]}
        infoRows={[
          { label: 'Type', value: 'Corporate / Business Investigation' },
          { label: 'Clients', value: 'Businesses, legal counsel, HR' },
          { label: 'Scope', value: 'Misconduct, fraud, IP, due diligence' },
          { label: 'Area', value: 'Austin, Travis County, Central Texas' },
        ]}
        tableOfContents={[
          { id: 'what-is', label: 'What Corporate Investigation Covers' },
          { id: 'case-types', label: 'Case Types' },
          { id: 'journalism-connection', label: 'Investigative Journalism Angle' },
          { id: 'process', label: 'How It Works' },
          { id: 'contact', label: 'Start a Case' },
        ]}
        relatedServices={[
          { href: '/service/surveillance', icon: '🎥', label: 'Surveillance', desc: 'Employee activity documentation.' },
          { href: '/service/digital-forensics', icon: '💻', label: 'Digital Forensics', desc: 'Digital communications and data investigations.' },
          { href: '/service/background-checks', icon: '📋', label: 'Background Checks', desc: 'Executive and vendor due diligence.' },
          { href: '/service/workers-compensation-fraud', icon: '🏥', label: 'Workers Comp Fraud', desc: 'Insurance fraud investigation.' },
        ]}
        ctaHeading="Start a Corporate Investigation"
        ctaBody="Initial consultations are confidential. We will assess your case, explain what is achievable, and quote cost before any work begins."
      >
        <ServiceSection id="what-is" title="What Corporate Investigation Covers">
          <p>
            Corporate investigations address internal misconduct, fraud, intellectual property theft,
            and executive or vendor due diligence for Austin-area businesses and legal teams. ObjectWire
            applies the same investigative discipline it uses in its public-interest journalism to private
            corporate engagements.
          </p>
          <p>
            Unlike internal HR investigations, which rely on employee cooperation, a licensed PI
            investigation can gather evidence independently through surveillance, database research,
            and{' '}
            <Link href="/service/digital-forensics" className="text-blue-600 hover:text-blue-800 underline">
              digital forensics
            </Link>
            . This is particularly valuable when a subject is aware they are being investigated and
            may be concealing or destroying evidence.
          </p>
        </ServiceSection>

        <ServiceSection id="case-types" title="Case Types | What We Investigate">
          <ul className="space-y-2">
            <li><strong>Employee misconduct</strong> — time theft, unauthorized outside employment, policy violations, harassment documentation</li>
            <li><strong>Intellectual property theft</strong> — unauthorized removal of trade secrets, proprietary data, client lists, or source code</li>
            <li><strong>Internal fraud</strong> — embezzlement, expense fraud, vendor kickbacks, procurement irregularities</li>
            <li><strong>Executive due diligence</strong> — background and behavior verification before a hire, partnership, or acquisition</li>
            <li><strong>Vendor and contractor fraud</strong> — billing irregularities, phantom invoices, conflict of interest</li>
            <li><strong>Non-compete violations</strong> — documentation of a former employee working for a competitor in violation of a covenant</li>
            <li><strong>Workplace theft</strong> — property and equipment removal, documented through covert surveillance</li>
          </ul>
        </ServiceSection>

        <ServiceSection id="journalism-connection" title="Investigative Journalism | When Corporate Misconduct Is a Public Matter">
          <p>
            ObjectWire is an investigative media company as well as a PI agency. When corporate
            misconduct has public significance, including fraud affecting consumers, environmental
            violations, or systemic labor abuses, we may pursue the story as journalism in addition
            to or separately from a private case.
          </p>
          <p>
            If you have information about corporate wrongdoing that affects the public and want it
            investigated for publication rather than kept private, visit our{' '}
            <Link href="/service/tip-the-newsroom" className="text-blue-600 hover:text-blue-800 underline">
              tip the newsroom
            </Link>{' '}
            page. If your concern is a private business matter requiring confidential investigation,
            this corporate PI service is the appropriate engagement.
          </p>
        </ServiceSection>

        <ServiceSection id="process" title="How It Works | Corporate Case Process">
          <p>
            Every corporate engagement begins with a confidential consultation to establish the scope,
            legal constraints, and deliverables. We work directly with in-house counsel and outside
            legal teams to ensure the investigation is structured to produce evidence that can withstand
            legal scrutiny.
          </p>
          <p>
            Deliverables vary by case type: surveillance produces photo, video, and written reports;
            digital forensics produces documented findings with chain-of-custody records; background
            and due diligence investigations produce written reports with source documentation.
          </p>
        </ServiceSection>

        <ServiceSection id="contact" title="Start a Corporate Investigation">
          <p>
            Initial consultations are confidential. Visit the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              consultation page
            </Link>{' '}
            or see the{' '}
            <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
              full services hub
            </Link>
            .
          </p>
        </ServiceSection>
      </ServicePage>
    </>
  );
}
