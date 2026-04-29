import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Surveillance Investigation Austin TX | Covert and Legal Cases",
  description: "Licensed covert surveillance in Austin, TX for infidelity, child custody, workers comp, and corporate cases. Admissible photo and video evidence. Call now.",
  keywords: [
    "surveillance Austin TX",
    "covert surveillance Austin",
    "surveillance investigation Texas",
    "private surveillance Austin",
    "workers comp surveillance Austin",
    "child custody surveillance Texas",
    "corporate surveillance Austin",
    "infidelity surveillance Austin TX",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/service/surveillance',
  },
  openGraph: {
    title: "Surveillance Investigation Austin TX | Covert and Legal Cases",
    description: "Licensed covert surveillance in Austin, TX for infidelity, child custody, workers comp, and corporate cases. Admissible photo and video evidence.",
    type: 'article',
    url: "https://www.objectwire.org/service/surveillance",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Surveillance Investigation Austin TX | Covert and Legal Cases",
    description: "Licensed covert surveillance in Austin, TX for infidelity, child custody, workers comp, and corporate cases. Admissible photo and video evidence.",
  },
};

export default function SurveillancePage() {
  return (
    <ArticlePage
      title="Surveillance Investigation | Austin, Texas"
      subtitle="Covert photo and video surveillance for domestic, legal, and corporate cases throughout Austin and Travis County."
      category="Investigative Services"
      lastUpdated="April 29, 2026"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/service', label: 'Services' },
        { href: '/service/surveillance', label: 'Surveillance' },
      ]}
      slug="service-surveillance"
      url="/service/surveillance"
      infoBox={{
        title: 'Surveillance Service',
        sections: [
          {
            heading: 'Details',
            items: [
              { label: 'Location', value: 'Austin, TX' },
              { label: 'Coverage', value: 'Travis County + Central Texas' },
              { label: 'Output', value: 'Photo + Video + Written Report' },
              { label: 'Admissibility', value: 'Texas civil and family court' },
            ],
          },
          {
            heading: 'Case Types',
            list: [
              'Infidelity / Cheating Spouse',
              'Child Custody Verification',
              'Workers Comp Fraud',
              'Corporate Employee Misconduct',
              'Insurance Defense',
              'Legal Support',
            ],
          },
          {
            heading: 'Related Services',
            links: [
              { href: '/service/infidelity', label: 'Infidelity Investigations' },
              { href: '/service/child-custody-investigations-austin-tx', label: 'Child Custody' },
              { href: '/service/workers-compensation-investigations-austin-tx', label: 'Workers Comp Fraud' },
              { href: '/service', label: 'All Services' },
            ],
          },
        ],
      }}
      tableOfContents={[
        { id: 'overview', label: 'Service Overview' },
        { id: 'case-types', label: 'Case Types' },
        { id: 'process', label: 'How It Works' },
        { id: 'evidence', label: 'Evidence and Deliverables' },
        { id: 'legal', label: 'Legal Boundaries' },
        { id: 'contact', label: 'Get Started' },
      ]}
      relatedLinks={[
        { href: '/service', label: 'All Investigative Services', description: 'full services hub' },
        { href: '/austin-private-detective-agency', label: 'Austin Private Detective Agency', description: 'agency profile and background' },
        { href: '/service/infidelity', label: 'Infidelity Investigations', description: 'cheating spouse surveillance' },
        { href: '/service/child-custody-investigations-austin-tx', label: 'Child Custody Investigations', description: 'family court evidence' },
        { href: '/service/workers-compensation-investigations-austin-tx', label: 'Workers Comp Fraud', description: 'claimant surveillance' },
        { href: '/service/corporate-investigations-austin-tx', label: 'Corporate Investigations', description: 'employee misconduct and fraud' },
      ]}
    >
      <Section id="overview" title="Service Overview">
        <p>
          ObjectWire conducts covert surveillance operations in Austin, Texas and throughout Travis County
          for domestic, legal, and corporate clients. All fieldwork is performed by licensed private
          investigators using professional-grade photo and video equipment. Results are compiled into a
          written case report with timestamped media attached.
        </p>
        <p>
          Surveillance is the most commonly requested service we provide. It underpins several other case
          types including{' '}
          <Link href="/service/infidelity" className="text-blue-600 hover:text-blue-800 underline">
            infidelity investigations
          </Link>
          ,{' '}
          <Link href="/service/child-custody-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
            child custody verification
          </Link>
          , and{' '}
          <Link href="/service/workers-compensation-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
            workers compensation fraud
          </Link>
          . For the full range of services we offer, see the{' '}
          <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
            services hub
          </Link>
          .
        </p>
      </Section>

      <Section id="case-types" title="Surveillance Case Types">
        <p>We handle surveillance for the following categories of cases in the Austin area:</p>
        <ul>
          <li>
            <strong>Infidelity and domestic cases</strong> — confirm or rule out a cheating spouse or
            partner with documented, timestamped video evidence. See the{' '}
            <Link href="/service/infidelity" className="text-blue-600 hover:text-blue-800 underline">
              infidelity investigations
            </Link>{' '}
            page for full details.
          </li>
          <li>
            <strong>Child custody</strong> — document parenting-time violations, hazardous home conditions,
            or non-compliance with court orders. See{' '}
            <Link href="/service/child-custody-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              child custody investigations
            </Link>
            .
          </li>
          <li>
            <strong>Workers compensation fraud</strong> — activity surveillance on claimants performing
            physical tasks inconsistent with reported injuries. Used by insurance carriers and defense
            attorneys. See{' '}
            <Link href="/service/workers-compensation-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              workers comp fraud investigations
            </Link>
            .
          </li>
          <li>
            <strong>Corporate employee misconduct</strong> — confirm or rule out unauthorized secondary
            employment, non-compete violations, or theft of company property and time.
          </li>
          <li>
            <strong>Insurance defense</strong> — document claimant activity for personal injury, disability,
            or liability cases in Travis County.
          </li>
          <li>
            <strong>Legal support</strong> — attorney-directed surveillance for active Texas civil or
            criminal defense matters.
          </li>
        </ul>
      </Section>

      <Section id="process" title="How It Works">
        <p>
          Every surveillance engagement follows a structured process designed to protect the client, the
          investigator, and the integrity of the evidence:
        </p>
        <ol>
          <li>
            <strong>Consultation</strong> — free, confidential. We review the case, what you need documented,
            and what is achievable legally and practically.
          </li>
          <li>
            <strong>Subject research</strong> — we verify subject identity, known locations, vehicles,
            and daily patterns before fieldwork begins. This reduces billable surveillance hours.
          </li>
          <li>
            <strong>Field surveillance</strong> — investigators conduct mobile or stationary surveillance
            from public vantage points using high-resolution cameras and video equipment.
          </li>
          <li>
            <strong>Documentation</strong> — all captures are timestamped and geotagged. A written log
            is maintained throughout each surveillance session.
          </li>
          <li>
            <strong>Case report</strong> — a complete written report with attached photo and video evidence
            is delivered at case close. Reports are formatted for use in Texas court proceedings.
          </li>
        </ol>
      </Section>

      <Section id="evidence" title="Evidence and Deliverables">
        <p>
          At the conclusion of a surveillance engagement, clients receive:
        </p>
        <ul>
          <li>Written investigator report with date, time, location, and narrative for each observation</li>
          <li>High-resolution photographs where applicable</li>
          <li>Video footage with embedded timestamps</li>
          <li>Chain-of-custody documentation upon request for court matters</li>
        </ul>
        <p>
          Evidence is formatted to meet Texas Rules of Evidence standards for admissibility in civil
          and family court proceedings. We coordinate directly with your attorney if the case is
          litigation-bound.
        </p>
      </Section>

      <Section id="legal" title="Legal Boundaries">
        <p>
          All surveillance is conducted from public spaces or locations where our investigator has lawful
          right to be. We do not conduct audio recording of private conversations, place tracking devices
          without proper legal authority, or perform any activity that constitutes a violation of
          Texas Penal Code or federal wiretap statutes.
        </p>
        <p>
          Evidence gathered outside these bounds is inadmissible in Texas courts and can expose clients
          to civil liability. Our investigators are trained to stay within legal limits while still
          producing the most useful evidence possible for your case.
        </p>
        <p>
          For background on agency licensing and compliance, see the{' '}
          <Link href="/austin-private-detective-agency" className="text-blue-600 hover:text-blue-800 underline">
            Austin Private Detective Agency
          </Link>{' '}
          page.
        </p>
      </Section>

      <Section id="contact" title="Get Started">
        <p>
          To discuss a surveillance case, visit the{' '}
          <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
            consultation request page
          </Link>
          . All consultations are free and confidential. If you are unsure whether surveillance is the
          right approach for your situation, we will tell you honestly — including if another service
          such as a{' '}
          <Link href="/service/background-check-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
            background check
          </Link>{' '}
          or{' '}
          <Link href="/service/skip-tracing-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
            skip trace
          </Link>{' '}
          would better serve your needs.
        </p>
      </Section>
    </ArticlePage>
  );
}
