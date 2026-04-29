import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Infidelity Investigation Austin TX | Cheating Spouse PI",
  description: "Confidential infidelity and cheating spouse investigations in Austin, Texas. Licensed PI agency providing documented photographic and video evidence.",
  keywords: [
    "infidelity investigation Austin TX",
    "cheating spouse investigation Austin",
    "Austin infidelity PI",
    "cheating partner investigation Texas",
    "marital investigation Austin",
    "unfaithful spouse investigation Austin",
    "domestic investigation Austin TX",
    "private detective infidelity Austin",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/service/infidelity',
  },
  openGraph: {
    title: "Infidelity Investigation Austin TX | Cheating Spouse PI",
    description: "Confidential infidelity and cheating spouse investigations in Austin, Texas. Licensed PI agency providing documented photographic and video evidence.",
    type: 'article',
    url: "https://www.objectwire.org/service/infidelity",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Infidelity Investigation Austin TX | Cheating Spouse PI",
    description: "Confidential infidelity and cheating spouse investigations in Austin, Texas. Licensed PI agency providing documented photographic and video evidence.",
  },
};

export default function InfidelityPage() {
  return (
    <ArticlePage
      title="Infidelity Investigation | Austin, Texas"
      subtitle="Confidential cheating spouse and domestic partner investigations with documented photographic and video evidence. Based in Austin, available statewide."
      category="Investigative Services"
      lastUpdated="April 29, 2026"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/service', label: 'Services' },
        { href: '/service/infidelity', label: 'Infidelity Investigations' },
      ]}
      slug="service-infidelity"
      url="/service/infidelity"
      infoBox={{
        title: 'Infidelity Investigation',
        sections: [
          {
            heading: 'Details',
            items: [
              { label: 'Primary Base', value: 'Austin, TX' },
              { label: 'Coverage', value: 'Texas statewide (travel available)' },
              { label: 'Output', value: 'Photo, video, written report' },
              { label: 'Confidentiality', value: 'Full case confidentiality' },
            ],
          },
          {
            heading: 'Common Case Types',
            list: [
              'Cheating spouse confirmation',
              'Dating partner verification',
              'Hidden relationship investigation',
              'Cohabitation verification',
              'Pre-divorce evidence gathering',
            ],
          },
          {
            heading: 'Related Services',
            links: [
              { href: '/service/surveillance', label: 'Surveillance' },
              { href: '/service/child-custody-investigations-austin-tx', label: 'Child Custody' },
              { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks' },
              { href: '/service', label: 'All Services' },
            ],
          },
        ],
      }}
      tableOfContents={[
        { id: 'overview', label: 'Service Overview' },
        { id: 'what-we-document', label: 'What We Document' },
        { id: 'process', label: 'How It Works' },
        { id: 'evidence', label: 'Evidence Delivered' },
        { id: 'divorce-legal', label: 'Divorce and Legal Use' },
        { id: 'coverage', label: 'Coverage Area' },
        { id: 'contact', label: 'Get Started' },
      ]}
      relatedLinks={[
        { href: '/service', label: 'All Investigative Services', description: 'full services hub' },
        { href: '/austin-private-detective-agency', label: 'Austin Private Detective Agency', description: 'agency profile' },
        { href: '/service/surveillance', label: 'Surveillance Services', description: 'covert photo and video documentation' },
        { href: '/service/child-custody-investigations-austin-tx', label: 'Child Custody Investigations', description: 'family court evidence' },
        { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks', description: 'verify a partner\'s history' },
        { href: '/service/fact-finding-and-evidence-collection', label: 'Evidence Collection', description: 'fact-finding for legal cases' },
      ]}
    >
      <Section id="overview" title="Service Overview">
        <p>
          ObjectWire conducts confidential infidelity investigations for clients in Austin, Texas and
          throughout the state. Our investigators use covert{' '}
          <Link href="/service/surveillance" className="text-blue-600 hover:text-blue-800 underline">
            surveillance
          </Link>{' '}
          to document a partner's activity, movements, and associations. All evidence is
          timestamped, compiled into a written report, and delivered directly to the client.
        </p>
        <p>
          We handle these cases with complete discretion. The subject is never contacted, tipped off, or
          made aware of the investigation. For background on the agency and how we operate, see the{' '}
          <Link href="/austin-private-detective-agency" className="text-blue-600 hover:text-blue-800 underline">
            Austin Private Detective Agency
          </Link>{' '}
          page.
        </p>
      </Section>

      <Section id="what-we-document" title="What We Document">
        <p>
          Infidelity investigations focus on obtaining clear, usable evidence of the activity in question.
          Depending on your case, this may include:
        </p>
        <ul>
          <li>Physical meetings between the subject and a third party</li>
          <li>Time spent at undisclosed locations — hotels, residences, or workplaces</li>
          <li>Vehicle activity, including travel routes and destinations</li>
          <li>Cohabitation patterns if relevant to a divorce or custody proceeding</li>
          <li>Confirmation of identity of individuals the subject is meeting</li>
        </ul>
        <p>
          We do not record private conversations or access personal devices. All documentation is
          gathered from lawful vantage points in compliance with Texas state law.
        </p>
      </Section>

      <Section id="process" title="How It Works">
        <ol>
          <li>
            <strong>Free consultation</strong> — you describe the situation and what you need confirmed.
            We explain what is realistically achievable and what the process looks like.
          </li>
          <li>
            <strong>Subject research</strong> — we verify known locations, vehicles, and patterns
            before fieldwork begins. This reduces the hours needed in the field.
          </li>
          <li>
            <strong>Surveillance</strong> — licensed investigators conduct covert mobile or stationary
            surveillance. Sessions are logged with timestamps and location notes.
          </li>
          <li>
            <strong>Report delivery</strong> — all photo and video evidence is compiled with a written
            narrative. You receive the full package at case close.
          </li>
        </ol>
      </Section>

      <Section id="evidence" title="Evidence Delivered">
        <p>At case close, clients receive:</p>
        <ul>
          <li>Written investigator report with date, time, and location for each observation</li>
          <li>High-resolution photographs where applicable</li>
          <li>Video footage with embedded timestamps</li>
          <li>Chain-of-custody documentation for court use, available on request</li>
        </ul>
        <p>
          Evidence is formatted to Texas Rules of Evidence standards. If your case is headed toward
          divorce proceedings, we coordinate directly with your attorney to ensure the documentation
          is structured appropriately for Travis County Family Court or courts in other Texas jurisdictions.
        </p>
      </Section>

      <Section id="divorce-legal" title="Divorce and Legal Use">
        <p>
          Texas is a no-fault divorce state, which means documented infidelity is not required to obtain
          a divorce. However, evidence of an affair can affect the outcome of property division and
          spousal support decisions in some cases, particularly where marital assets were spent on the
          relationship. Consult a Texas family law attorney for advice specific to your situation.
        </p>
        <p>
          If child custody is also in question, infidelity investigation often overlaps with{' '}
          <Link href="/service/child-custody-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
            child custody investigation
          </Link>
          , where we can document a parent's living situation, associates, and daily routine in the same
          engagement.
        </p>
      </Section>

      <Section id="coverage" title="Coverage Area">
        <p>
          Our investigators are based in Austin, Texas and cover Travis County, Williamson County, Hays
          County, and surrounding areas. We are also available for cases in Dallas, Houston, San Antonio,
          and other Texas cities with applicable travel arrangements. Contact us to discuss out-of-area
          cases.
        </p>
      </Section>

      <Section id="contact" title="Get Started">
        <p>
          All consultations are confidential and free. To discuss your case, visit the{' '}
          <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
            consultation request page
          </Link>
          . You can also review the full list of{' '}
          <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
            investigative services
          </Link>{' '}
          we offer.
        </p>
      </Section>
    </ArticlePage>
  );
}
