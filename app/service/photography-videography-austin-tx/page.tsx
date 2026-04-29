import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Photography & Videography Services Austin TX | Investigations",
  description: "Professional investigative photography and videography in Austin, Texas. Surveillance documentation, legal evidence, scene photography, and witness documentation.",
  keywords: [
    "Austin photography",
    "Austin videography",
    "surveillance photography Austin",
    "legal documentation Texas",
    "evidence photography Austin",
    "investigative photography Austin TX",
    "scene documentation Austin",
    "video evidence Austin TX",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/service/photography-videography-austin-tx',
  },
  openGraph: {
    title: "Photography & Videography Services Austin TX | Investigations",
    description: "Professional investigative photography and videography in Austin, Texas. Surveillance documentation, legal evidence, scene photography, and witness documentation.",
    type: 'article',
    url: "https://www.objectwire.org/service/photography-videography-austin-tx",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Photography & Videography Services Austin TX | Investigations",
    description: "Professional investigative photography and videography in Austin, Texas. Surveillance documentation, legal evidence, and scene photography.",
  },
};

export default function PhotographyVideographyAustinPage() {
  return (
    <ArticlePage
      title="Investigative Photography and Videography | Austin, Texas"
      subtitle="Professional photo and video documentation for surveillance, legal evidence, scene reconstruction, and witness interviews. Based in Austin, available statewide."
      category="Media Services"
      lastUpdated="April 29, 2026"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/service', label: 'Services' },
        { href: '/service/photography-videography-austin-tx', label: 'Photography and Videography' },
      ]}
      slug="service-photography-videography-austin-tx"
      url="/service/photography-videography-austin-tx"
      infoBox={{
        title: 'Photography and Videography',
        sections: [
          {
            heading: 'Details',
            items: [
              { label: 'Primary Base', value: 'Austin, TX' },
              { label: 'Coverage', value: 'Texas statewide' },
              { label: 'Output', value: 'Timestamped photo and video files' },
              { label: 'Chain of custody', value: 'Available on request' },
            ],
          },
          {
            heading: 'Services',
            list: [
              'Surveillance documentation',
              'Scene photography',
              'Witness documentation',
              'Event documentation',
              'Legal evidence video',
              'Asset photography',
            ],
          },
          {
            heading: 'Related Services',
            links: [
              { href: '/service/surveillance', label: 'Surveillance' },
              { href: '/service/asset-collection', label: 'Asset Recovery' },
              { href: '/service/press-release', label: 'Press Release Services' },
              { href: '/service', label: 'All Services' },
            ],
          },
        ],
      }}
      tableOfContents={[
        { id: 'overview', label: 'Service Overview' },
        { id: 'what-we-document', label: 'What We Document' },
        { id: 'legal-use', label: 'Legal Use of Documentation' },
        { id: 'coverage', label: 'Coverage Area' },
        { id: 'contact', label: 'Get Started' },
      ]}
      relatedLinks={[
        { href: '/service', label: 'All Investigative Services', description: 'full services hub' },
        { href: '/austin-private-detective-agency', label: 'Austin Private Detective Agency', description: 'agency profile' },
        { href: '/service/surveillance', label: 'Surveillance', description: 'covert mobile and stationary surveillance' },
        { href: '/service/asset-collection', label: 'Asset Recovery', description: 'asset location and documentation' },
        { href: '/service/press-release', label: 'Press Release Services', description: 'media and PR writing' },
      ]}
    >
      <Section id="overview" title="Service Overview">
        <p>
          ObjectWire provides professional photography and videography services for investigations,
          legal proceedings, and documentation needs throughout Texas. Our photographers and videographers
          work alongside licensed investigators to ensure all visual documentation is admissible,
          timestamped, and properly chain-of-custody tracked.
        </p>
        <p>
          Photography and videography is a core component of our{' '}
          <Link href="/service/surveillance" className="text-blue-600 hover:text-blue-800 underline">
            surveillance service
          </Link>
          . It is also available as a standalone service for scene documentation, asset photography,
          and event recording. For the full services list, see the{' '}
          <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
            services hub
          </Link>
          .
        </p>
      </Section>

      <Section id="what-we-document" title="What We Document">
        <ul>
          <li>
            <strong>Surveillance footage</strong> — covert photo and video of subject activity for
            infidelity, workers comp, child custody, and corporate cases. See{' '}
            <Link href="/service/surveillance" className="text-blue-600 hover:text-blue-800 underline">
              surveillance services
            </Link>
          </li>
          <li>
            <strong>Scene documentation</strong> — accident scenes, property conditions, and physical
            evidence sites for attorneys and insurance adjusters
          </li>
          <li>
            <strong>Asset photography</strong> — document the condition and location of physical assets
            for estate, divorce, or recovery proceedings. See{' '}
            <Link href="/service/asset-collection" className="text-blue-600 hover:text-blue-800 underline">
              asset recovery services
            </Link>
          </li>
          <li>
            <strong>Witness documentation</strong> — photo and video of witness statements and
            environmental context for case files
          </li>
          <li>
            <strong>Event documentation</strong> — conferences, depositions, and other events requiring
            professional visual records
          </li>
          <li>
            <strong>Press and media</strong> — editorial photography for{' '}
            <Link href="/service/press-release" className="text-blue-600 hover:text-blue-800 underline">
              press releases
            </Link>{' '}
            and media packages
          </li>
        </ul>
      </Section>

      <Section id="legal-use" title="Legal Use of Documentation">
        <p>
          All photo and video files include embedded timestamps. For court use, we provide chain-of-custody
          documentation linking each file to the investigator, date, time, and location of capture.
          Files are delivered in formats compatible with Texas court exhibit requirements. We can
          coordinate directly with your attorney on formatting and exhibit preparation.
        </p>
      </Section>

      <Section id="coverage" title="Coverage Area">
        <p>
          We are based in Austin, Texas and provide photography and videography services throughout
          the state. We travel to Dallas, Houston, San Antonio, and other Texas cities for active cases.
          Travel fees apply outside Central Texas and are disclosed at consultation.
        </p>
      </Section>

      <Section id="contact" title="Get Started">
        <p>
          To discuss a photography or videography engagement, visit the{' '}
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

