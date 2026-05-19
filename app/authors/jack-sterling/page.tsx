import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AuthorArticlesServer } from '@/components/authors/AuthorArticlesServer';
import AuthorSchema from '@/components/authors/AuthorSchema';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Jack Sterling | Co-Founder & Managing Reporter, OzoneNews',
  description:
    'Jack Sterling is a co-founder and managing reporter at OzoneNews, an independent nonprofit newsroom. He covers federal investigations, Congress, AI policy, and the politics of technology from Washington, D.C.',
  alternates: { canonical: 'https://www.ozonenetwork.news/authors/jack-sterling' },
  openGraph: {
    title: 'Jack Sterling | Co-Founder & Managing Reporter, OzoneNews',
    description: 'Co-Founder and Managing Reporter at OzoneNews. Federal investigations, Congress, AI policy, politics of technology.',
    url: 'https://www.ozonenetwork.news/authors/jack-sterling',
    siteName: 'OzoneNews',
    type: 'profile',
    images: [{ url: 'https://www.ozonenetwork.news/influncer/author/jack_sterling.jpg', width: 800, height: 800, alt: 'Jack Sterling, OzoneNews co-founder and reporter' }],
  },
  twitter: {
    card: 'summary',
    title: 'Jack Sterling | Co-Founder, OzoneNews',
    description: 'Co-founder & managing reporter at OzoneNews. Federal investigations, Congress, AI policy.',
    images: ['https://www.ozonenetwork.news/influncer/author/jack_sterling.jpg'],
  },
};

const BEATS = [
  'Breaking News', 'Politics', 'Investigations', 'Congress',
  'AI Policy', 'Federal Law', 'Gaming', 'Technology',
];

const HIGHLIGHTS = [
  { stat: '3+', label: 'Years Reporting' },
  { stat: '8+', label: 'Beats Covered' },
  { stat: '40+', label: 'Published Articles' },
];

const SOCIAL = [
  {
    label: 'Email',
    href: 'mailto:j.sterling@ozonenetwork.news',
    icon: '\u2709',
  },
];

export default function JackSterlingAuthorPage() {
  return (
    <main className="min-h-screen bg-white">
      <AuthorSchema
        name="Jack Sterling"
        jobTitle="Co-Founder & Managing Reporter"
        description="Jack Sterling is a co-founder and managing reporter at OzoneNews, an independent nonprofit newsroom. He covers federal investigations, Congress, AI policy, and the politics of technology from Washington, D.C."
        url="https://www.ozonenetwork.news/authors/jack-sterling"
        image="https://www.ozonenetwork.news/influncer/author/jack_sterling.jpg"
        knowsAbout={['Breaking News', 'Politics', 'Investigations', 'Congress', 'AI Policy', 'Federal Law', 'Gaming', 'Technology']}
        alumniOf={[{ name: 'New York University', department: 'Journalism' }]}
        location={{ city: 'Washington', region: 'DC' }}
        articleCount={40}
      />

      {/* Header */}
      <div className="bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-12 font-mono uppercase tracking-widest">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/authors" className="hover:text-gray-300 transition-colors">Authors</Link>
            <span>/</span>
            <span className="text-gray-400">Jack Sterling</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end gap-8">
            {/* Avatar */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 ring-2 ring-white relative bg-white">
              <Image
                src="/influncer/author/jack_sterling.jpg"
                alt="Jack Sterling, OzoneNews reporter"
                fill
                sizes="(min-width: 768px) 96px, 80px"
                className="object-cover"
                priority
              />
            </div>
            {/* Identity */}
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-2 font-mono">
                Co-Founder &middot; OzoneNews
              </p>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3">
                Jack Sterling
              </h1>
              <p className="text-gray-300 text-xl font-medium">Co-Founder &amp; Managing Reporter</p>
            </div>
            {/* Stats */}
            <div className="flex gap-8 md:pb-1 shrink-0">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="text-right">
                  <p className="text-3xl font-black">{h.stat}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-0.5">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote bar */}
          <div className="mt-10 border-l-4 border-gray-500 pl-5">
            <p className="text-gray-300 text-lg italic font-light leading-relaxed max-w-2xl">
              &ldquo;The story is always in the document.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Detail Strip */}
      <div className="bg-gray-900 text-white border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 text-xs font-mono text-gray-400">
          <span>📍 Washington, D.C.</span>
          <span>🎓 NYU, Journalism</span>
          <span>🗂 Politics &amp; Investigations Desk</span>
          <span>📅 Co-Founder &middot; 2026</span>
          <a
            href="mailto:j.sterling@ozonenetwork.news"
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            ✉ j.sterling@ozonenetwork.news
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-7">
            {/* Beats */}
            <div className="border border-gray-200 p-6">
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-4">Coverage Beats</h2>
              <div className="flex flex-wrap gap-2">
                {BEATS.map((beat) => (
                  <span key={beat} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-gray-100 text-gray-700 border border-gray-200">
                    {beat}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="border border-gray-200 divide-y divide-gray-100">
              {[
                ['Organization', 'OzoneNews (Nonprofit)'],
                ['Role', 'Co-Founder & Managing Reporter'],
                ['Desk', 'Politics & Investigations'],
                ['Education', 'NYU, Journalism'],
                ['Location', 'Washington, D.C.'],
                ['Joined', '2026'],
              ].map(([label, value]) => (
                <div key={label} className="px-5 py-3 flex justify-between items-baseline gap-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 shrink-0">{label}</p>
                  <p className="text-sm text-gray-700 text-right">{value}</p>
                </div>
              ))}
            </div>

            {/* Editorial */}
            <div className="bg-gray-950 text-white p-6 space-y-3">
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-500">Standards</h2>
              <Link href="/editorial-standards" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                Editorial Standards &rarr;
              </Link>
              <Link href="/corrections" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                Corrections Policy &rarr;
              </Link>
              <Link href="/about" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                About OzoneNews &rarr;
              </Link>
            </div>
          </aside>

          {/* Main column */}
          <div className="lg:col-span-8 space-y-12">

            {/* Bio */}
            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b-2 border-gray-900 pb-3">
                About Jack Sterling
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  Jack Sterling is a co-founder and managing reporter at{' '}
                  <a href="/about" className="text-blue-600 hover:text-blue-800 underline">OzoneNews</a>,
                  an independent nonprofit newsroom organized under Section 501(c) of the Internal Revenue Code.
                  Based in Washington, D.C., Sterling covers federal investigations, Congress, and the
                  intersection of politics and technology, with a particular focus on AI regulation,
                  antitrust enforcement, and legislative oversight of the major technology platforms.
                </p>
                <p>
                  A graduate of{' '}
                  <a href="/college/nyu" className="text-blue-600 hover:text-blue-800 underline">New York University&rsquo;s</a>{' '}
                  journalism program, Sterling brings a document-first approach to every story. His
                  reporting draws on court filings, congressional records, lobbying disclosures, and
                  direct sourcing from federal agencies and legislative offices.
                </p>
                <p>
                  Sterling&rsquo;s gaming coverage applies the same investigative rigor to the
                  video game industry: tracking studio financials, analyzing earnings call transcripts,
                  and reporting on the business decisions behind major releases including GTA VI,
                  the Nintendo Switch 2 launch, and Gran Turismo&rsquo;s competitive licensing structure.
                </p>
                <p>
                  As co-founder, Sterling oversees OzoneNews&rsquo;s editorial independence policies,
                  source protection standards, and the newsroom&rsquo;s nonprofit governance structure.
                  The newsroom accepts no advertising, sponsored content, or political donations.
                  Tips and document leads can be directed to{' '}
                  <a href="mailto:j.sterling@ozonenetwork.news" className="text-blue-600 hover:text-blue-800 underline">j.sterling@ozonenetwork.news</a>.
                </p>
              </div>
            </section>

            {/* Recent Highlights */}
            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b border-gray-200 pb-3">
                Recent Highlights
              </h2>
              <div className="space-y-4">
                {[
                  {
                    label: 'GTA 6 Release Date | Everything Confirmed 2026',
                    detail: 'Comprehensive breakdown of every confirmed detail: map, story, characters, platforms, and the Fall 2026 release window.',
                    href: '/video-games/gta-6/release-date-everything-confirmed-2026',
                    date: 'May 11, 2026',
                  },
                  {
                    label: 'Nintendo Switch 2 vs Steam Deck OLED 2026',
                    detail: 'Full hardware, game library, and value comparison between Nintendo\'s new console and Valve\'s flagship handheld.',
                    href: '/video-games/switch2/switch2-vs-steam-deck-oled-2026',
                    date: 'May 11, 2026',
                  },
                  {
                    label: 'Take-Two Earnings Before GTA VI Preorders',
                    detail: 'Financial analysis of Take-Two Interactive heading into the most anticipated earnings call in gaming history.',
                    href: '/video-games/gta-6/take-two-earnings-looming-before-preorders',
                    date: 'May 2026',
                  },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="block group border border-gray-200 p-5 hover:border-gray-900 transition-colors">
                    <p className="text-xs font-mono text-gray-400 mb-1">{item.date}</p>
                    <p className="font-black text-gray-900 text-sm mb-1.5 group-hover:underline">{item.label}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Auto-loading article feed */}
            <section>
              <div className="border-b-2 border-gray-900 pb-3 mb-6">
                <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">All Published Articles</p>
              </div>
              <Suspense fallback={
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-16 bg-gray-100 animate-pulse rounded" />
                  ))}
                </div>
              }>
                <AuthorArticlesServer authorSlug="jack-sterling" authorName="Jack Sterling" />
              </Suspense>
            </section>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t-2 border-gray-900 mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-mono">&copy; 2026 OzoneNews. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/authors" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">&larr; All Authors</Link>
            <Link href="/about" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">About</Link>
            <Link href="/editorial-standards" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">Standards</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
