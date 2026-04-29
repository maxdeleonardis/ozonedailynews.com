import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Asset Recovery Services Austin TX | Licensed Investigator",
  description: "Licensed asset recovery and documentation services in Austin, Texas. Professional photography, videography, and evidence documentation for legal cases.",
  keywords: [
    "asset recovery Austin TX",
    "asset investigation Austin",
    "asset documentation Texas",
    "PI asset services Austin",
    "investigative documentation Austin",
    "asset location Austin TX",
    "financial asset investigation Texas",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/service/asset-collection',
  },
  openGraph: {
    title: "Asset Recovery Services Austin TX | Licensed Investigator",
    description: "Licensed asset recovery and documentation services in Austin, Texas. Professional photography, videography, and evidence documentation for legal cases.",
    type: 'article',
    url: "https://www.objectwire.org/service/asset-collection",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Asset Recovery Services Austin TX | Licensed Investigator",
    description: "Licensed asset recovery and documentation services in Austin, Texas. Professional photography, videography, and evidence documentation for legal cases.",
  },
};

export default function AssetCollectionPage() {
  return (
    <ArticlePage
      title="Asset Recovery and Documentation | Austin, Texas"
      subtitle="Licensed investigators documenting and locating assets for legal cases, estate proceedings, and debt recovery throughout Texas."
      category="Investigative Services"
      lastUpdated="April 29, 2026"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/service', label: 'Services' },
        { href: '/service/asset-collection', label: 'Asset Recovery' },
      ]}
      slug="service-asset-collection"
      url="/service/asset-collection"
      infoBox={{
        title: 'Asset Recovery',
        sections: [
          {
            heading: 'Details',
            items: [
              { label: 'Primary Base', value: 'Austin, TX' },
              { label: 'Coverage', value: 'Texas statewide' },
              { label: 'Output', value: 'Photo, video, written report' },
            ],
          },
          {
            heading: 'Services',
            list: [
              'Asset location and documentation',
              'Property photography',
              'Vehicle and equipment records',
              'Estate asset inventory',
              'Judgment recovery support',
            ],
          },
          {
            heading: 'Related Services',
            links: [
              { href: '/service/skip-tracing-austin-tx', label: 'Skip Tracing' },
              { href: '/service/corporate-investigations-austin-tx', label: 'Corporate Investigations' },
              { href: '/service/photography-videography-austin-tx', label: 'Photography and Videography' },
              { href: '/service', label: 'All Services' },
            ],
          },
        ],
      }}
      tableOfContents={[
        { id: 'overview', label: 'Service Overview' },
        { id: 'who-uses', label: 'Who Uses This Service' },
        { id: 'coverage', label: 'Coverage Area' },
        { id: 'contact', label: 'Get Started' },
      ]}
      relatedLinks={[
        { href: '/service', label: 'All Investigative Services', description: 'full services hub' },
        { href: '/service/skip-tracing-austin-tx', label: 'Skip Tracing', description: 'locate people tied to assets' },
        { href: '/service/corporate-investigations-austin-tx', label: 'Corporate Investigations', description: 'fraud and embezzlement cases' },
        { href: '/service/photography-videography-austin-tx', label: 'Photography and Videography', description: 'professional documentation' },
      ]}
    >
      <Section id="overview" title="Service Overview">
        <p>
          ObjectWire provides asset recovery and documentation services for attorneys, creditors,
          estate administrators, and businesses in Texas. We locate, photograph, and document assets
          for legal proceedings, judgment recovery, estate inventories, and insurance matters.
        </p>
        <p>
          Asset work frequently combines with{' '}
          <Link href="/service/skip-tracing-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
            skip tracing
          </Link>{' '}
          (to locate the person holding the asset) and{' '}
          <Link href="/service/photography-videography-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
            professional photography
          </Link>{' '}
          (to document condition and location). For corporate fraud and embezzlement matters, see{' '}
          <Link href="/service/corporate-investigations-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
            corporate investigations
          </Link>
          .
        </p>
      </Section>

      <Section id="who-uses" title="Who Uses This Service">
        <ul>
          <li><strong>Creditors and debt collectors</strong> — locate assets available for levy or garnishment after a Texas judgment</li>
          <li><strong>Attorneys</strong> — document asset positions for divorce, probate, or business dissolution proceedings</li>
          <li><strong>Estate administrators</strong> — inventory and photograph estate property across multiple locations</li>
          <li><strong>Insurance adjusters</strong> — document asset condition for claims or disputes</li>
          <li><strong>Businesses</strong> — recover or document company assets following employee theft or contract breach</li>
        </ul>
      </Section>

      <Section id="coverage" title="Coverage Area">
        <p>
          We are based in Austin, Texas and serve clients statewide. We travel to Dallas, Houston,
          San Antonio, and other Texas cities for asset documentation engagements. Travel fees apply
          outside Central Texas and are disclosed at consultation.
        </p>
      </Section>

      <Section id="contact" title="Get Started">
        <p>
          To discuss an asset recovery or documentation case, visit the{' '}
          <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
            consultation request page
          </Link>
          . View the full{' '}
          <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
            services list
          </Link>{' '}
          for all investigative and media services.
        </p>
      </Section>
    </ArticlePage>
  );
}
