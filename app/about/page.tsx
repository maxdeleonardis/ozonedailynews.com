import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumb } from '@/components/nav/Breadcrumb';

// Static evergreen page — rendered at build time, no Supabase round-trip.
export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.ozonenetwork.news/about';

export const metadata: Metadata = {
  title: 'About OzoneNews | Ozone Network News LLC',
  description:
    'Ozone Network News LLC is an independent, self-funded newsroom delivering verified, source-cited reporting. Read our mission, ownership, funding, and',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'About OzoneNews | Ozone Network News LLC',
    description: 'Independent, self-funded newsroom. Verified, source-cited reporting. No advertising, no political donations.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    section: 'About',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About OzoneNews | Ozone Network News LLC',
    description: 'Independent, self-funded newsroom. Verified, source-cited reporting.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ozonenetwork.news' },
    { '@type': 'ListItem', position: 2, name: 'About', item: PAGE_URL },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': PAGE_URL,
  url: PAGE_URL,
  name: 'About OzoneNews | Ozone Network News LLC',
  description: 'Ozone Network News LLC is an independent, self-funded newsroom. Ownership, funding, and editorial independence disclosure.',
  publisher: {
    '@type': 'NewsMediaOrganization',
    name: 'OzoneNews',
    legalName: 'Ozone Network News LLC',
    url: 'https://www.ozonenetwork.news',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* ── Hero ── */}
      <div className="bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-6 pb-16">
          <div className="container mx-auto px-0 max-w-5xl pt-0">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'About', item: '/about' },
              ]}
            />
          </div>
          <div className="mt-8 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-4 font-mono">
              Ownership &amp; Funding Disclosure
            </p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              About Ozone Network News
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              We exist to publish verified, source-cited reporting. We are not owned by, controlled by,
              or financially tied to any corporation, political party, government, or private investor.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/editorial-standards"
                className="px-4 py-2 bg-white text-gray-950 text-sm font-bold hover:bg-gray-200 transition-colors"
              >
                Editorial Standards
              </Link>
              <Link
                href="/corrections"
                className="px-4 py-2 border border-gray-600 text-gray-300 text-sm font-bold hover:border-gray-400 hover:text-white transition-colors"
              >
                Corrections Policy
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 border border-gray-600 text-gray-300 text-sm font-bold hover:border-gray-400 hover:text-white transition-colors"
              >
                Submit a Tip
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Key facts strip ── */}
      <div className="bg-gray-900 text-white border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-black">2026</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">Founded</p>
            </div>
            <div>
              <p className="text-3xl font-black">450+</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">Published Articles</p>
            </div>
            <div>
              <p className="text-3xl font-black">Austin, TX</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">Headquarters</p>
            </div>
            <div>
              <p className="text-3xl font-black">LLC</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">Ozone Network News LLC</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Three trust columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="border-t-4 border-gray-900 dark:border-white pt-5">
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white mb-3">Our Mission</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              OzoneNews covers three niches: video games, startup companies, and finance. Every article
              is produced by a named reporter and traced to a primary source: SEC disclosures,
              company earnings, game studio announcements, or named on-record sources. We are the
              intel desk for builders, investors, and players.
            </p>
          </div>
          <div className="border-t-4 border-gray-900 dark:border-white pt-5">
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white mb-3">Ownership</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              OzoneNews is published by <strong className="text-gray-900 dark:text-white">Ozone Network News LLC</strong>,
              organized and headquartered in Austin, Texas. There are no outside shareholders, parent
              companies, or holding entities. Editorial decisions are made by named editors whose bios
              are public on our{' '}
              <Link href="/authors" className="text-blue-600 hover:text-blue-800 underline">authors page</Link>.
            </p>
          </div>
          <div className="border-t-4 border-gray-900 dark:border-white pt-5">
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white mb-3">Funding</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Self-funded by its founders and staff. We accept no advertising, sponsored content, native
              ads, affiliate commissions, political donations, or government grants tied to coverage. No
              outside party influences our reporting. If our funding model ever changes, we will disclose
              it here before any change takes effect.
            </p>
          </div>
        </div>

        {/* Editorial independence block */}
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 mb-16">
          <h2 className="text-xl font-black tracking-tight text-gray-900 dark:text-white mb-4">Editorial Independence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Editorial decisions at OzoneNews are made independently of all commercial relationships.
                Sponsored content, when it exists, is clearly labeled and separated from our editorial
                operation. No advertiser, sponsor, or donor can request, alter, or block a story.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                News and analysis are clearly labeled and never blended without disclosure. Opinion is
                designated explicitly and always attributed to a named writer.
              </p>
            </div>
            <div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#10003;</span> Every article carries a named author with a public bio</li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#10003;</span> Every factual claim is sourced to a primary document or named source</li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#10003;</span> Errors corrected publicly, timestamped, original text preserved</li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#10003;</span> No AI-generated copy published without full human editorial review</li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">&#10003;</span> Source identities protected on request</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Link href="/editorial-standards" className="text-sm text-blue-600 hover:text-blue-800 underline font-medium">
              Full Editorial Standards
            </Link>
            <Link href="/corrections" className="text-sm text-blue-600 hover:text-blue-800 underline font-medium">
              Corrections Policy
            </Link>
          </div>
        </div>

        {/* Masthead */}
        <div className="mb-16">
          <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white mb-2">Our Reporters</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            All OzoneNews reporters publish under their real names with full bios, beats, and public contact paths.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <Link href="/authors/jack-sterling" className="group border border-gray-200 dark:border-gray-800 p-5 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-mono">Reporter</p>
              <p className="font-black text-gray-900 dark:text-white text-lg group-hover:underline">Jack Sterling</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Congress, federal investigations, AI policy, Washington D.C.</p>
              <p className="text-xs text-blue-600 mt-3 group-hover:underline">View profile →</p>
            </Link>

            <Link href="/authors/tina-boyle" className="group border border-gray-200 dark:border-gray-800 p-5 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-mono">Investigations Reporter</p>
              <p className="font-black text-gray-900 dark:text-white text-lg group-hover:underline">Tina Boyle</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Environmental law, national security, regulatory agencies</p>
              <p className="text-xs text-blue-600 mt-3 group-hover:underline">View profile →</p>
            </Link>

            <Link href="/authors/max-deleonardis" className="group border border-gray-200 dark:border-gray-800 p-5 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-mono">Founding Writer</p>
              <p className="font-black text-gray-900 dark:text-white text-lg group-hover:underline">Max DeLeonardis</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Gaming, Finance &amp; Startups Desk</p>
              <div className="flex items-center gap-3 mt-2">
                <a href="https://x.com/ozonedailynews" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 underline">@ozonedailynews</a>
                <a href="https://www.linkedin.com/in/maximillion-deleonardis" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 underline">LinkedIn</a>
              </div>
              <p className="text-xs text-blue-600 mt-2 group-hover:underline">View profile →</p>
            </Link>

          </div>
          <div className="mt-5">
            <Link href="/authors" className="text-sm text-blue-600 hover:text-blue-800 underline font-medium">
              View full masthead
            </Link>
          </div>
        </div>

        {/* ONN Network teaser */}
        <div className="mb-16 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold font-mono mb-3">Ozone Network News LLC</p>
          <h2 className="text-xl font-black tracking-tight text-gray-900 dark:text-white mb-3">The ONN Media Network</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-5">
            ONN operates 11 niche editorial brands. Each domain covers one vertical with a dedicated Chief of Staff.
            The flagship aggregates across the network without duplicating content.
            Three brands are live. Eight are in the launch pipeline.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {['OzoneNews', 'OzoneDaily', 'ObjectiveWire', 'BasilNews', 'MicaNewspaper', 'CloverHeadlines', 'ObsidianPaper', 'OnyxTimes', 'StatusNews', 'SageNews', 'GroveNews'].map(b => (
              <span key={b} className="text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 font-bold">{b}</span>
            ))}
          </div>
          <Link href="/network" className="inline-block px-5 py-2.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-bold hover:opacity-90 transition-opacity">
            View all 11 brands and open roles
          </Link>
        </div>

        {/* AI policy */}
        <div className="mb-16 border-l-4 border-gray-300 dark:border-gray-700 pl-6">
          <h2 className="text-xl font-black tracking-tight text-gray-900 dark:text-white mb-3">AI and Technology Policy</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            AI tools are used internally for research assistance, transcription, and first-draft structuring.
            AI is <strong className="text-gray-900 dark:text-white">never</strong> used to generate published
            article copy without full human editorial review and rewrite. Every published sentence is the
            product of a named human reporter who is accountable for it.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            We do not use AI to fabricate quotes, invent sources, or produce synthetic data. Predictable
            LLM transition phrases are explicitly banned by our style guide. See our{' '}
            <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 underline">
              editorial standards
            </Link>{' '}
            for the full AI policy.
          </p>
        </div>

        {/* Tips & Contact */}
        <div className="bg-gray-950 text-white p-8 mb-16">
          <h2 className="text-xl font-black tracking-tight mb-4">Contact the Newsroom</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Tips &amp; Investigations</p>
              <a href="mailto:tips@ozonenetwork.news" className="text-sm text-blue-400 hover:text-blue-300 underline">tips@ozonenetwork.news</a>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">Source identities protected. Document leads welcome.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Corrections</p>
              <a href="mailto:corrections@ozonenetwork.news" className="text-sm text-blue-400 hover:text-blue-300 underline">corrections@ozonenetwork.news</a>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">Errors corrected publicly and timestamped.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Press &amp; General</p>
              <a href="mailto:editorial@ozonenetwork.news" className="text-sm text-blue-400 hover:text-blue-300 underline">editorial@ozonenetwork.news</a>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">2921 E 17th St Bldg 3, Austin, TX 78702</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-5">
            <Link href="/contact" className="inline-block px-5 py-2.5 bg-white text-gray-950 text-sm font-bold hover:bg-gray-200 transition-colors mr-3">
              Contact Form
            </Link>
            <Link href="/corrections" className="inline-block px-5 py-2.5 border border-gray-600 text-gray-300 text-sm font-bold hover:border-gray-400 hover:text-white transition-colors">
              Submit a Correction
            </Link>
          </div>
        </div>

        {/* Updates to this page */}
        <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
          This disclosure page is maintained directly in the OzoneNews codebase. Material changes
          (ownership, funding model, leadership) are committed to the public repository and dated in
          the change log. Last updated: May 20, 2026.
        </p>

      </div>
    </main>
  );
}
