import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Background Check Investigations Austin TX | Licensed PI",
  description: "Comprehensive background check investigations in Austin, Texas. Criminal history, employment verification, identity checks, and asset research for individuals and businesses.",
  keywords: [
    "background check Austin TX",
    "background investigation Austin",
    "criminal background check Austin",
    "employment verification Austin TX",
    "identity verification Austin",
    "background screening Austin Texas",
    "tenant background check Austin",
    "business background check Austin TX",
    "pre-employment screening Austin",
    "private investigator background check Texas",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/service/background-check-investigations-austin-tx',
  },
  openGraph: {
    title: "Background Check Investigations Austin TX | Licensed PI",
    description: "Comprehensive background check investigations in Austin, Texas. Criminal history, employment verification, identity checks, and asset research.",
    type: 'article',
    url: "https://www.objectwire.org/service/background-check-investigations-austin-tx",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Background Check Investigations Austin TX | Licensed PI",
    description: "Comprehensive background check investigations in Austin, Texas. Criminal history, employment verification, identity checks, and asset research.",
  },
};

export default function BackgroundCheckAustinPage() {
  return (
    <ArticlePage
      title="Background Check Investigations | Austin, Texas"
      subtitle="Comprehensive criminal, employment, identity, and asset background checks for individuals and businesses. Based in Austin, available statewide."
      category="Investigative Services"
      lastUpdated="April 29, 2026"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/service', label: 'Services' },
        { href: '/service/background-check-investigations-austin-tx', label: 'Background Checks' },
      ]}
      slug="service-background-check-investigations-austin-tx"
      url="/service/background-check-investigations-austin-tx"
      infoBox={{
        title: 'Background Check Service',
        sections: [
          {
            heading: 'Details',
            items: [
              { label: 'Primary Base', value: 'Austin, TX' },
              { label: 'Coverage', value: 'Texas statewide' },
              { label: 'Turnaround', value: 'Varies by scope' },
              { label: 'Output', value: 'Written report' },
            ],
          },
          {
            heading: 'Check Types',
            list: [
              'Criminal history',
              'Employment verification',
              'Identity verification',
              'Tenant screening',
              'Business partner due diligence',
              'Asset and financial research',
            ],
          },
          {
            heading: 'Related Services',
            links: [
              { href: '/service/skip-tracing-austin-tx', label: 'Skip Tracing' },
              { href: '/service/corporate-investigations-austin-tx', label: 'Corporate Investigations' },
              { href: '/service/infidelity', label: 'Infidelity Investigations' },
              { href: '/service', label: 'All Services' },
            ],
          },
        ],
      }}
      tableOfContents={[
        { id: 'overview', label: 'Service Overview' },
        { id: 'check-types', label: 'Types of Background Checks' },
        { id: 'who-uses', label: 'Who Uses This Service' },
        { id: 'process', label: 'How It Works' },
        { id: 'coverage', label: 'Coverage Area' },
        { id: 'contact', label: 'Get Started' },
      ]}
      relatedLinks={[
        { href: '/service', label: 'All Investigative Services', description: 'full services hub' },
        { href: '/austin-private-detective-agency', label: 'Austin Private Detective Agency', description: 'agency profile' },
        { href: '/service/skip-tracing-austin-tx', label: 'Skip Tracing', description: 'locate people when records are stale' },
        { href: '/service/corporate-investigations-austin-tx', label: 'Corporate Investigations', description: 'deeper employee or partner investigations' },
        { href: '/service/infidelity', label: 'Infidelity Investigations', description: 'verify a partner\'s history and activity' },
      ]}
    >
      <Section id="overview" title="Service Overview">
        <p>
          ObjectWire conducts comprehensive background check investigations for individuals, businesses,
          landlords, and attorneys throughout Texas. Our investigators go beyond automated database
          lookups to verify records directly, surface gaps or inconsistencies, and deliver a complete
          written report.
        </p>
        <p>
          We are based in Austin, TX and serve clients across Texas. For the full list of investigative
          services we offer, see the{' '}
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

      <Section id="check-types" title="Types of Background Checks">
        <ul>
          <li>
            <strong>Criminal history</strong> — Texas DPS records, county court searches, federal
            district court filings, and sex offender registry checks
          </li>
          <li>
            <strong>Employment verification</strong> — confirm actual job titles, dates of employment,
            and reason for departure. Identifies resume fraud and fabricated credentials
          </li>
          <li>
            <strong>Identity verification</strong> — confirm a person is who they say they are, including
            alias and name-change research
          </li>
          <li>
            <strong>Tenant screening</strong> — criminal, eviction, and rental history for landlords and
            property managers in the Austin area
          </li>
          <li>
            <strong>Business partner due diligence</strong> — financial history, litigation records,
            business registration history, and bankruptcy research on prospective partners or vendors
          </li>
          <li>
            <strong>Asset and financial research</strong> — property ownership, vehicle records, and
            known asset holdings for individuals or entities
          </li>
        </ul>
      </Section>

      <Section id="who-uses" title="Who Uses This Service">
        <ul>
          <li><strong>Individuals</strong> — verify a new partner, caregiver, or household contact</li>
          <li><strong>Landlords and property managers</strong> — screen tenants before signing a lease</li>
          <li><strong>Small business owners</strong> — vet employees, contractors, and business partners</li>
          <li><strong>Attorneys</strong> — research opposing parties, witnesses, and expert witnesses</li>
          <li><strong>Insurance companies</strong> — verify claimant history and identity</li>
          <li>
            <strong>Corporate clients</strong> — deeper due diligence than HR systems provide. See also{' '}
            <Link href="/service/corporate-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
              corporate investigations
            </Link>
          </li>
        </ul>
      </Section>

      <Section id="process" title="How It Works">
        <ol>
          <li>
            <strong>Consultation</strong> — you tell us who needs checking and what scope you need.
            We explain what is searchable, what is not, and what the report will include
          </li>
          <li>
            <strong>Research</strong> — our investigators run manual record checks across county, state,
            and federal databases. We do not rely solely on commercial background check aggregators
          </li>
          <li>
            <strong>Verification</strong> — key findings are confirmed directly where possible
            rather than reported as raw database hits
          </li>
          <li>
            <strong>Report</strong> — a structured written report is delivered with source citations
            for every finding
          </li>
        </ol>
        <p>
          If the subject cannot be located through initial records, we can add a{' '}
          <Link href="/service/skip-tracing-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
            skip trace
          </Link>{' '}
          to update their current address and contact information.
        </p>
      </Section>

      <Section id="coverage" title="Coverage Area">
        <p>
          We are based in Austin, Texas and serve clients statewide. Background check research is
          largely records-based and does not require physical presence, so we handle cases across all
          Texas counties. For cases requiring in-person verification in Dallas, Houston, San Antonio,
          or other cities, we can travel or arrange local resources.
        </p>
      </Section>

      <Section id="contact" title="Get Started">
        <p>
          To request a background check investigation, visit the{' '}
          <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
            consultation request page
          </Link>
          . All consultations are free and confidential. View the{' '}
          <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
            full services list
          </Link>{' '}
          for other investigative options.
        </p>
      </Section>
    </ArticlePage>
  );
}
