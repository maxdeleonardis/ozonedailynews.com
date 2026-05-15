import type { Metadata } from 'next';
import Link from 'next/link';
import { ServicePage, ServiceSection } from '@/components/articles/ServicePage';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectwire.org/service/infidelity-investigations';

export const metadata: Metadata = {
  title: 'Infidelity Investigations Austin TX | Cheating Spouse PI | ObjectWire',
  description:
    'Licensed infidelity investigations in Austin, Texas. Cheating spouse and domestic partner cases with timestamped photo and video evidence. Confidential, court-ready documentation.',
  keywords: [
    'infidelity investigation Austin TX',
    'cheating spouse investigation Austin',
    'cheating partner Austin Texas',
    'infidelity private investigator Austin',
    'adultery investigation Austin TX',
    'domestic investigation Austin',
    'cheating spouse PI Austin',
    'licensed infidelity investigator Texas',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Infidelity Investigations Austin TX | ObjectWire',
    description: 'Licensed cheating spouse and domestic partner investigations in Austin, TX. Timestamped evidence, full confidentiality.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infidelity Investigations Austin TX | ObjectWire',
    description: 'Cheating spouse PI in Austin, TX. Confidential, court-ready, licensed investigators.',
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Infidelity Investigations',
  description: 'Licensed cheating spouse and domestic partner investigations in Austin, Texas with timestamped evidence for divorce and family court proceedings.',
  serviceType: 'Private Investigation — Infidelity',
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
    { '@type': 'ListItem', position: 3, name: 'Infidelity Investigations', item: PAGE_URL },
  ],
};

export default function InfidelityInvestigationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <ServicePage
        icon="🔍"
        title="Infidelity Investigations Austin TX"
        subtitle="Licensed cheating spouse and domestic partner investigations in Austin and Travis County. Confidential, timestamped evidence for divorce proceedings and family court."
        category="Investigative Services"
        lastUpdated="May 15, 2026"
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/service', label: 'Investigative Services' },
          { href: '/service/infidelity-investigations', label: 'Infidelity Investigations' },
        ]}
        stats={[
          { value: 'Confidential', label: 'Case Handling' },
          { value: 'Timestamped', label: 'Photo & Video' },
          { value: 'Court-Ready', label: 'Documentation' },
          { value: 'Free', label: 'Consultation' },
        ]}
        infoRows={[
          { label: 'Type', value: 'Domestic / Infidelity' },
          { label: 'Output', value: 'Photo, video, written report' },
          { label: 'Area', value: 'Austin / Travis County' },
          { label: 'Use', value: 'Divorce, separation, peace of mind' },
          { label: 'License', value: 'Texas Occ. Code Ch. 1702' },
        ]}
        tableOfContents={[
          { id: 'what-is', label: 'What Infidelity Investigation Covers' },
          { id: 'what-we-document', label: 'What We Document' },
          { id: 'process', label: 'How It Works' },
          { id: 'divorce-proceedings', label: 'Divorce and Legal Proceedings' },
          { id: 'confidentiality', label: 'Confidentiality' },
          { id: 'contact', label: 'Start a Case' },
        ]}
        relatedServices={[
          { href: '/service/surveillance', icon: '🎥', label: 'Surveillance', desc: 'Covert observation and documentation.' },
          { href: '/service/child-custody-investigations', icon: '⚖️', label: 'Child Custody', desc: 'Family court evidence and parental surveillance.' },
          { href: '/service/digital-forensics', icon: '💻', label: 'Digital Forensics', desc: 'Account activity and online communications.' },
          { href: '/service/background-checks', icon: '📋', label: 'Background Checks', desc: 'Criminal history and identity research.' },
        ]}
        ctaHeading="Start an Infidelity Investigation"
        ctaBody="Initial consultations are free and confidential. We will discuss what you know, what you need to prove, and what is achievable under Texas family law."
      >
        <ServiceSection id="what-is" title="What Infidelity Investigation Covers">
          <p>
            An infidelity investigation documents whether a spouse or domestic partner is engaging
            in an undisclosed relationship. ObjectWire conducts these cases with full confidentiality
            for private individuals, divorce attorneys, and family law firms across Austin and Travis County.
          </p>
          <p>
            Suspicion alone is not enough for court proceedings or informed personal decisions. A properly
            documented infidelity investigation produces admissible, timestamped evidence that can support
            divorce filings, property division arguments, and custody proceedings under Texas family law.
          </p>
        </ServiceSection>

        <ServiceSection id="what-we-document" title="What We Document | Evidence Types">
          <ul className="space-y-2">
            <li><strong>Physical meetings</strong> — covert surveillance of the subject at locations relevant to the case</li>
            <li><strong>Vehicle and location tracking</strong> — lawful monitoring of movement patterns</li>
            <li><strong>Third-party identification</strong> — documentation of persons the subject meets</li>
            <li><strong>Timeline reconstruction</strong> — establishing when, where, and how often meetings occurred</li>
            <li><strong>Digital activity</strong> — in conjunction with our{' '}
              <Link href="/service/digital-forensics" className="text-blue-600 hover:text-blue-800 underline">
                digital forensics
              </Link>{' '}
              service, account communications, messaging patterns, and hidden profiles</li>
          </ul>
        </ServiceSection>

        <ServiceSection id="process" title="How It Works | Case Process">
          <p>
            The process begins with a free confidential consultation. We discuss what you know, what
            you need to prove, and what evidence standards apply to your specific situation under
            Texas family law. We set realistic expectations before any work begins.
          </p>
          <p>
            Field work is conducted by a licensed investigator using professional-grade recording
            equipment. You receive a written case report with a chronological activity log, full photo
            and video file set, and chain-of-custody documentation suitable for use in Texas court
            proceedings or divorce negotiations.
          </p>
        </ServiceSection>

        <ServiceSection id="divorce-proceedings" title="Divorce and Legal Proceedings | Texas Family Law">
          <p>
            Texas is a community property state with fault-based divorce provisions. Documented infidelity
            can be relevant to property division and, in limited circumstances, spousal support rulings.
            Evidence must be lawfully obtained to be admissible. ObjectWire evidence is gathered within
            the bounds of Texas law and structured to withstand attorney scrutiny.
          </p>
          <p>
            We work directly with divorce and family law attorneys in Travis County when cases are heading
            to litigation. Our written reports are formatted to meet Texas Rules of Evidence requirements
            for documentary evidence.
          </p>
        </ServiceSection>

        <ServiceSection id="confidentiality" title="Confidentiality | How We Handle Your Case">
          <p>
            Infidelity cases are handled with strict confidentiality. We do not discuss client matters
            with third parties. Case files are delivered directly to the client or, where authorized,
            to the client's attorney. We do not retain copies of case files beyond project close unless
            specifically requested for ongoing matters.
          </p>
        </ServiceSection>

        <ServiceSection id="contact" title="Start an Infidelity Investigation">
          <p>
            Initial consultations are free and confidential. Visit the{' '}
            <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
              consultation page
            </Link>{' '}
            to discuss your case. For all available services, see the{' '}
            <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
              investigative services hub
            </Link>
            .
          </p>
        </ServiceSection>
      </ServicePage>
    </>
  );
}
