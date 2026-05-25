import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/nav/Breadcrumb';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.ozonenetwork.news/network';

export const metadata: Metadata = {
  title: 'ONN Media Network | 11 Editorial Brands by Ozone Network News',
  description:
    'Ozone Network News LLC operates 11 niche editorial brands covering gaming, finance, startups, cybersecurity, health, science, creator economy, and more. Each brand is led by a dedicated Chief of Staff.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'ONN Media Network | 11 Editorial Brands',
    description:
      'The full Ozone Network News LLC media portfolio. 11 niche editorial brands, each covering one vertical with dedicated leadership.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    section: 'About',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ONN Media Network | 11 Editorial Brands',
    description: '11 niche editorial brands by Ozone Network News LLC.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ozonenetwork.news' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.ozonenetwork.news/about' },
    { '@type': 'ListItem', position: 3, name: 'Network', item: PAGE_URL },
  ],
};

type BrandStatus = 'Live' | 'Phase 1' | 'Phase 2' | 'Phase 3' | 'Phase 4';

interface Brand {
  name: string;
  domain: string;
  url: string;
  vertical: string;
  description: string;
  chiefOfStaff: string;
  status: BrandStatus;
  flagship?: boolean;
}

const BRANDS: Brand[] = [
  {
    name: 'OzoneNews',
    domain: 'ozonenetwork.news',
    url: 'https://www.ozonenetwork.news',
    vertical: 'Gaming · Finance · Startups',
    description:
      'The niched flagship. Original reporting on video games, startup companies, and finance. Hub-and-spoke aggregator for the full ONN network.',
    chiefOfStaff: 'Max DeLeonardis',
    status: 'Live',
    flagship: true,
  },
  {
    name: 'OzoneDaily',
    domain: 'ozonedailynews.com',
    url: 'https://www.ozonedailynews.com',
    vertical: 'Creator Economy',
    description:
      'YouTube, TikTok, creator news, platform policy, viral content, AdSense CPM reports, and subscriber milestones. 5 articles per week.',
    chiefOfStaff: 'Hiring',
    status: 'Live',
  },
  {
    name: 'ObjectiveWire',
    domain: 'objectivewire.org',
    url: 'https://www.objectivewire.org',
    vertical: 'Investigations',
    description:
      'FOIA-sourced reporting, court records, civic watchdog journalism, missing persons, and private intelligence resources for the public.',
    chiefOfStaff: 'Jack Sterling',
    status: 'Live',
  },
  {
    name: 'MicaNewspaper',
    domain: 'micanewspaper.com',
    url: 'https://www.micanewspaper.com',
    vertical: 'Science & Space',
    description:
      'Peer-reviewed research, climate findings, space exploration, NASA missions, and scientific institution news. DOI-sourced.',
    chiefOfStaff: 'Hiring',
    status: 'Phase 1',
  },
  {
    name: 'SageNews',
    domain: 'sagenews.com',
    url: 'https://www.sagenews.com',
    vertical: 'Health & Longevity',
    description:
      'FDA approvals, clinical trial results, longevity research, mental health reporting, and biohacking news. Strict YMYL sourcing standards.',
    chiefOfStaff: 'Hiring',
    status: 'Phase 2',
  },
  {
    name: 'StatusNews',
    domain: 'statusnews.com',
    url: 'https://www.statusnews.com',
    vertical: 'Business & Markets',
    description:
      'Earnings reports, M&A filings, executive profiles, market analysis, and company financial coverage. Home for SpaceX, Starlink, and startup earnings.',
    chiefOfStaff: 'Hiring',
    status: 'Phase 2',
  },
  {
    name: 'CloverHeadlines',
    domain: 'cloverheadlines.com',
    url: 'https://www.cloverheadlines.com',
    vertical: 'Personal Finance',
    description:
      'Interest rate news, consumer debt, deals, investing basics, and personal finance reporting. YMYL-compliant, named authors only.',
    chiefOfStaff: 'Hiring',
    status: 'Phase 2',
  },
  {
    name: 'BasilNews',
    domain: 'basilnews.com',
    url: 'https://www.basilnews.com',
    vertical: 'Food & Agriculture',
    description:
      'Restaurant news, food tech, agriculture markets, supply chain, and culinary culture. From farm economics to fine dining.',
    chiefOfStaff: 'Hiring',
    status: 'Phase 3',
  },
  {
    name: 'OnyxTimes',
    domain: 'onyxtimes.org',
    url: 'https://www.onyxtimes.org',
    vertical: 'Luxury & Fashion',
    description:
      'Fashion week coverage, auction results, film festival reporting, designer profiles, and premium lifestyle news.',
    chiefOfStaff: 'Hiring',
    status: 'Phase 3',
  },
  {
    name: 'ObsidianPaper',
    domain: 'obsidianpaper.com',
    url: 'https://www.obsidianpaper.com',
    vertical: 'Niche TBD',
    description:
      'Domain purchased. Vertical and editorial focus not yet assigned. Will be configured once the niche decision is made.',
    chiefOfStaff: 'Hiring',
    status: 'Phase 3',
  },
  {
    name: 'GroveNews',
    domain: 'grovenews.com',
    url: 'https://www.grovenews.com',
    vertical: 'Local & Real Estate',
    description:
      'City development, zoning decisions, real estate data, and local breaking news. Requires dedicated local editorial investment.',
    chiefOfStaff: 'Hiring',
    status: 'Phase 4',
  },
  {
    name: 'HaloNews',
    domain: 'halonews.com',
    url: 'https://www.halonews.com',
    vertical: 'On Hold',
    description:
      'Cybersecurity and privacy niche under review. Domain owned. Deployment paused until niche and editorial focus are confirmed.',
    chiefOfStaff: 'Hiring',
    status: 'Phase 4',
  },
];

const STATUS_STYLES: Record<BrandStatus, string> = {
  Live: 'bg-green-900/50 text-green-400 border border-green-800',
  'Phase 1': 'bg-blue-900/50 text-blue-400 border border-blue-800',
  'Phase 2': 'bg-yellow-900/50 text-yellow-400 border border-yellow-800',
  'Phase 3': 'bg-orange-900/50 text-orange-400 border border-orange-800',
  'Phase 4': 'bg-gray-800 text-gray-400 border border-gray-700',
};

export default function NetworkPage() {
  const liveCount = BRANDS.filter(b => b.status === 'Live').length;
  const totalCount = BRANDS.length;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <div className="bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-6 pb-16">
          <div className="container mx-auto px-0 max-w-5xl pt-0">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'About', item: '/about' },
                { name: 'Network', item: '/network' },
              ]}
            />
          </div>
          <div className="mt-8 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-4 font-mono">
              Ozone Network News LLC
            </p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              The ONN Media Network
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              {totalCount} niche editorial brands. One codebase. Each domain covers a single vertical
              with dedicated leadership. Google rewards topical authority, so we build it brand by brand.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-3xl font-black text-white">{liveCount}</span>
                <span className="text-gray-500 ml-2 uppercase tracking-widest text-xs font-bold">Live now</span>
              </div>
              <div>
                <span className="text-3xl font-black text-white">{totalCount - liveCount}</span>
                <span className="text-gray-500 ml-2 uppercase tracking-widest text-xs font-bold">In pipeline</span>
              </div>
              <div>
                <span className="text-3xl font-black text-white">{totalCount}</span>
                <span className="text-gray-500 ml-2 uppercase tracking-widest text-xs font-bold">Total brands</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flagship — full-width feature card */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-5 font-mono">Flagship</p>
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h2 className="text-3xl font-black text-white">OzoneNews</h2>
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${STATUS_STYLES['Live']}`}>Live</span>
              </div>
              <a
                href="https://www.ozonenetwork.news"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 underline font-mono"
              >
                ozonenetwork.news
              </a>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed max-w-xl">
                The niched flagship. Original reporting on video games, startup companies, and finance.
                Acts as the hub-and-spoke aggregator for the full ONN network, surfacing sub-brand
                content via non-duplicating cards.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Gaming', 'Finance', 'Startups'].map(p => (
                  <span key={p} className="text-xs bg-white/10 text-white px-2 py-1 font-bold">{p}</span>
                ))}
              </div>
            </div>
            <div className="md:text-right shrink-0">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Chief of Staff</p>
              <p className="text-sm font-black text-white">Max DeLeonardis</p>
              <Link
                href="/authors/max-deleonardis"
                className="text-xs text-blue-400 hover:text-blue-300 underline"
              >
                View profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-brand grid */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white mb-2">
          Sub-Brand Brands
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10 max-w-2xl">
          Each brand is run as an independent editorial operation on a dedicated domain, sharing the same
          codebase and static JSON content pipeline. Authority flows bidirectionally between sub-brands and
          the flagship hub.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {BRANDS.filter(b => !b.flagship).map(brand => (
            <div
              key={brand.domain}
              className="border border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mb-1">
                      {brand.vertical}
                    </p>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white">{brand.name}</h3>
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded shrink-0 ${STATUS_STYLES[brand.status]}`}>
                    {brand.status}
                  </span>
                </div>
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-800 underline font-mono"
                >
                  {brand.domain}
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                  {brand.description}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">Chief of Staff</p>
                  <p className={`text-sm font-bold ${brand.chiefOfStaff === 'Hiring' ? 'text-gray-400' : 'text-gray-900 dark:text-white'}`}>
                    {brand.chiefOfStaff}
                  </p>
                </div>
                {brand.chiefOfStaff === 'Hiring' && (
                  <a
                    href="mailto:editorial@ozonenetwork.news"
                    className="text-xs text-blue-600 hover:text-blue-800 underline"
                  >
                    Apply
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gray-950 text-white p-10">
          <h2 className="text-2xl font-black tracking-tight mb-3">Lead a Desk</h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xl mb-6">
            Each sub-brand in the pipeline needs a Chief of Staff: an editor who owns the beat, sets
            the publishing calendar, recruits reporters, and maintains editorial standards. This is a
            founding role for each brand.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:editorial@ozonenetwork.news"
              className="px-5 py-2.5 bg-white text-gray-950 text-sm font-bold hover:bg-gray-200 transition-colors"
            >
              editorial@ozonenetwork.news
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 border border-gray-600 text-gray-300 text-sm font-bold hover:border-gray-400 hover:text-white transition-colors"
            >
              Contact Form
            </Link>
          </div>
        </div>

        {/* Footer nav */}
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-4 text-sm">
          <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">About OzoneNews</Link>
          <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 underline">Editorial Standards</Link>
          <Link href="/authors" className="text-blue-600 hover:text-blue-800 underline">Full Masthead</Link>
          <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">Contact</Link>
        </div>
      </div>
    </main>
  );
}
