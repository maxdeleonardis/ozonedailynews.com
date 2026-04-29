import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Workers Compensation Investigation Austin TX | PI Services",
  description: "Licensed workers compensation fraud investigations in Austin, Texas. Surveillance and evidence collection for insurance companies and legal teams.",
  keywords: [
    "workers compensation investigation Austin TX",
    "workers comp fraud investigation Austin",
    "work injury surveillance Austin",
    "workers comp PI Texas",
    "insurance fraud investigation Austin TX",
    "workers comp surveillance Austin",
    "workers comp fraud Austin Texas",
    "workplace injury investigation Austin",
    "claimant surveillance Austin TX",
    "insurance defense investigation Texas",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/service/workers-compensation-investigations-austin-tx',
  },
  openGraph: {
    title: "Workers Compensation Investigation Austin TX | PI Services",
    description: "Licensed workers compensation fraud investigations in Austin, Texas. Surveillance and evidence collection for insurance companies and legal teams.",
    type: 'article',
    url: "https://www.objectwire.org/service/workers-compensation-investigations-austin-tx",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Workers Compensation Investigation Austin TX | PI Services",
    description: "Licensed workers compensation fraud investigations in Austin, Texas. Surveillance and evidence collection for insurance companies and legal teams.",
  },
};

export default function WorkersCompAustinPage() {
  return (
    <ArticlePage
      title="Workers Compensation Investigation | Austin, Texas"
      subtitle="Claimant surveillance and fraud documentation for insurance carriers, employers, and defense attorneys throughout Texas."
      category="Investigative Services"
      lastUpdated="April 29, 2026"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/service', label: 'Services' },
        { href: '/service/workers-compensation-investigations-austin-tx', label: 'Workers Comp Investigations' },
      ]}
      slug="service-workers-compensation-investigations-austin-tx"
      url="/service/workers-compensation-investigations-austin-tx"
      infoBox={{
        title: 'Workers Comp Investigation',
        sections: [
          {
            heading: 'Details',
            items: [
              { label: 'Primary Base', value: 'Austin, TX' },
              { label: 'Coverage', value: 'Texas statewide (travel available)' },
              { label: 'Clients', value: 'Insurers, employers, defense attorneys' },
              { label: 'Output', value: 'Video, photo, written report' },
            ],
          },
          {
            heading: 'Investigation Types',
            list: [
              'Claimant activity surveillance',
              'Physical capability documentation',
              'Secondary employment investigation',
              'Social media verification',
              'Scene reconstruction',
            ],
          },
          {
            heading: 'Related Services',
            links: [
              { href: '/service/surveillance', label: 'Surveillance' },
              { href: '/service/fact-finding-and-evidence-collection', label: 'Evidence Collection' },
              { href: '/service/corporate-investigations-austin-tx', label: 'Corporate Investigations' },
              { href: '/service', label: 'All Services' },
            ],
          },
        ],
      }}
      tableOfContents={[
        { id: 'overview', label: 'Service Overview' },
        { id: 'fraud-indicators', label: 'Common Fraud Indicators' },
        { id: 'process', label: 'Investigation Process' },
        { id: 'deliverables', label: 'Deliverables' },
        { id: 'coverage', label: 'Coverage Area' },
        { id: 'contact', label: 'Get Started' },
      ]}
      relatedLinks={[
        { href: '/service', label: 'All Investigative Services', description: 'full services hub' },
        { href: '/austin-private-detective-agency', label: 'Austin Private Detective Agency', description: 'agency profile' },
        { href: '/service/surveillance', label: 'Surveillance Services', description: 'covert photo and video documentation' },
        { href: '/service/corporate-investigations-austin-tx', label: 'Corporate Investigations', description: 'broader employee fraud cases' },
        { href: '/service/fact-finding-and-evidence-collection', label: 'Evidence Collection', description: 'scene documentation and research' },
      ]}
    >
      <Section id="overview" title="Service Overview">
        <p>
          Workers compensation fraud costs Texas employers and insurers significant money each year.
          ObjectWire investigates claimants on behalf of insurance carriers, employers, and defense
          attorneys by conducting covert{' '}
          <Link href="/service/surveillance" className="text-blue-600 hover:text-blue-800 underline">
            surveillance
          </Link>{' '}
          to document physical activity, secondary employment, or behavior inconsistent with a
          reported injury.
        </p>
        <p>
          We are based in Austin, TX and work throughout Texas. For the full services list, see the{' '}
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

      <Section id="fraud-indicators" title="Common Fraud Indicators">
        <p>
          We investigate cases where one or more of the following patterns is suspected:
        </p>
        <ul>
          <li>Claimant performing physical activities (lifting, running, construction work) inconsistent with reported injury severity</li>
          <li>Claimant working a second job while collecting total disability benefits</li>
          <li>Social media posts showing physical activity that contradicts the claim</li>
          <li>Injury reported immediately after a disciplinary action or termination notice</li>
          <li>Witness accounts inconsistent with the official accident report</li>
          <li>Claimant seen operating machinery, equipment, or vehicles they claim they cannot use</li>
        </ul>
      </Section>

      <Section id="process" title="Investigation Process">
        <ol>
          <li>
            <strong>Case intake</strong> — you provide the claim details, known claimant information,
            and what specific activity you need documented. We assess what surveillance approach is
            most likely to produce useful results
          </li>
          <li>
            <strong>Subject pre-check</strong> — we verify current address, vehicle, and daily patterns
            before fieldwork begins, reducing wasted surveillance time
          </li>
          <li>
            <strong>Surveillance</strong> — licensed investigators conduct covert mobile and stationary
            surveillance during relevant time windows, such as when the claimant claims they are
            incapacitated
          </li>
          <li>
            <strong>Social media review</strong> — we cross-reference findings with the claimant's
            public social media activity
          </li>
          <li>
            <strong>Report</strong> — all video and photographic evidence is compiled with a written
            narrative. Reports are formatted for use in Texas Division of Workers' Compensation
            proceedings and civil court
          </li>
        </ol>
      </Section>

      <Section id="deliverables" title="Deliverables">
        <ul>
          <li>Video footage with embedded timestamps showing claimant activity</li>
          <li>Photographic documentation where applicable</li>
          <li>Written investigator report with date, time, location, and narrative for each observation</li>
          <li>Chain-of-custody documentation for court or hearing use on request</li>
        </ul>
        <p>
          We coordinate directly with defense attorneys and claims adjusters to ensure the report
          format matches what is needed for Texas Workers' Compensation Commission proceedings or
          civil litigation.
        </p>
      </Section>

      <Section id="coverage" title="Coverage Area">
        <p>
          We are based in Austin, Texas and conduct workers comp investigations throughout the state.
          We travel to Dallas, Houston, San Antonio, and other Texas cities for active cases. Travel
          fees apply for cases outside Central Texas and are disclosed upfront at consultation.
        </p>
      </Section>

      <Section id="contact" title="Get Started">
        <p>
          To open a workers compensation investigation, visit the{' '}
          <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
            consultation request page
          </Link>
          . All consultations are confidential. View the full{' '}
          <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
            services list
          </Link>{' '}
          for other investigative options.
        </p>
      </Section>
    </ArticlePage>
  );
}
