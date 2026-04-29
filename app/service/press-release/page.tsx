import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, Section } from '@/components/articles/ArticlePage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Press Release Writing & Distribution Services | Austin TX",
  description: "Professional press release writing, distribution, and media relations services in Austin, Texas. Get your news featured in major outlets with expert PR writing.",
  keywords: ["press release Austin", "PR writing Texas", "press release distribution", "media relations Austin", "Austin PR services"],
  alternates: {
    canonical: 'https://www.objectwire.org/service/press-release',
  },
  openGraph: {
    title: "Press Release Writing & Distribution Services | Austin TX",
    description: "Professional press release writing, distribution, and media relations services in Austin, Texas. Get your news featured in major outlets with expert PR writing.",
    type: 'article',
    url: "https://www.objectwire.org/service/press-release",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Press Release Writing & Distribution Services | Austin TX",
    description: "Professional press release writing, distribution, and media relations services in Austin, Texas.",
  },
};

export default function PRBrandingPressReleasePage() {
  return (
    <ArticlePage
      title="Press Release Writing and Distribution | Austin, Texas"
      subtitle="Professional press release writing and media distribution for Austin businesses, startups, and nonprofits."
      category="Media Services"
      lastUpdated="April 29, 2026"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/service', label: 'Services' },
        { href: '/service/press-release', label: 'Press Release Services' },
      ]}
      slug="service-press-release"
      url="/service/press-release"
      infoBox={{
        title: 'Press Release Services',
        sections: [
          {
            heading: 'Details',
            items: [
              { label: 'Primary Base', value: 'Austin, TX' },
              { label: 'Clients', value: 'Businesses, startups, nonprofits' },
              { label: 'Distribution', value: 'Regional and national wire' },
            ],
          },
          {
            heading: 'Services',
            list: [
              'Press release writing',
              'Wire distribution',
              'Media list targeting',
              'Editorial pitching',
              'Crisis communications',
            ],
          },
          {
            heading: 'Related Services',
            links: [
              { href: '/service/photography-videography-austin-tx', label: 'Photography and Videography' },
              { href: '/service', label: 'All Services' },
            ],
          },
        ],
      }}
      tableOfContents={[
        { id: 'overview', label: 'Service Overview' },
        { id: 'what-we-write', label: 'What We Write' },
        { id: 'distribution', label: 'Distribution' },
        { id: 'contact', label: 'Get Started' },
      ]}
      relatedLinks={[
        { href: '/service', label: 'All Services', description: 'full services hub' },
        { href: '/service/photography-videography-austin-tx', label: 'Photography and Videography', description: 'visual assets for press releases' },
      ]}
    >
      <Section id="overview" title="Service Overview">
        <p>
          ObjectWire provides professional press release writing and distribution services for
          businesses, startups, law firms, and nonprofits in Austin, Texas. Our editorial team
          writes press releases that meet AP Style standards and are optimized for wire distribution
          and direct journalist outreach.
        </p>
        <p>
          We are a media organization first, which means we understand what journalists actually
          read and respond to. For visual support, we can pair press release writing with{' '}
          <Link href="/service/photography-videography-austin-tx" className="text-blue-600 hover:text-blue-800 underline">
            professional photography and videography
          </Link>
          . For the full services list, see the{' '}
          <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
            services hub
          </Link>
          .
        </p>
      </Section>

      <Section id="what-we-write" title="What We Write">
        <ul>
          <li><strong>Product and service launches</strong> — announcements formatted for trade press and local media</li>
          <li><strong>Funding announcements</strong> — seed, Series A, and growth round announcements for Austin startups</li>
          <li><strong>Executive appointments</strong> — C-suite and leadership change announcements</li>
          <li><strong>Legal and regulatory matters</strong> — settlement announcements, regulatory approvals, and compliance disclosures</li>
          <li><strong>Events and milestones</strong> — openings, anniversaries, partnerships, and community initiatives</li>
          <li><strong>Crisis communications</strong> — controlled public statements for sensitive situations</li>
        </ul>
      </Section>

      <Section id="distribution" title="Distribution">
        <p>
          We distribute via regional Texas wire services and national newswires depending on your
          target audience. For local Austin coverage, we have direct relationships with Austin
          American-Statesman, Austin Business Journal, and key Austin tech and startup media.
          National distribution is available for stories with broader news value.
        </p>
      </Section>

      <Section id="contact" title="Get Started">
        <p>
          To discuss a press release project, visit the{' '}
          <Link href="/get-help" className="text-blue-600 hover:text-blue-800 underline">
            consultation request page
          </Link>
          . View the full{' '}
          <Link href="/service" className="text-blue-600 hover:text-blue-800 underline">
            services list
          </Link>{' '}
          for all media and investigative services.
        </p>
      </Section>
    </ArticlePage>
  );
}
