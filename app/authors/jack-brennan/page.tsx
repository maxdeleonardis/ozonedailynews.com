import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AuthorArticlesServer } from '@/components/authors/AuthorArticlesServer';
import AuthorSchema from '@/components/authors/AuthorSchema';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Jack Brennan | Creator & Influencer Reporter, OzoneNews',
  description:
    'Jack Brennan is OzoneNews\'s Creator & Influencer Reporter, covering digital creator economics, social platforms, and the influencer industry from New York.',
  alternates: { canonical: 'https://www.ozonenetwork.news/authors/jack-brennan' },
  openGraph: {
    title: 'Jack Brennan | Creator & Influencer Reporter, OzoneNews',
    description: 'Creator & Influencer Reporter at OzoneNews. Covering digital creator economics, TikTok, Instagram, YouTube, and platform policy.',
    url: 'https://www.ozonenetwork.news/authors/jack-brennan',
    siteName: 'OzoneNews',
    type: 'profile',
    images: [{ url: 'https://www.ozonenetwork.news/influncer/author/jack_brennen.JPG', width: 800, height: 800, alt: 'Jack Brennan, OzoneNews Creator reporter' }],
  },
  twitter: {
    card: 'summary',
    title: 'Jack Brennan | OzoneNews Creator & Influencer',
    description: 'Creator & Influencer reporter at OzoneNews. Digital media, platform economics, social commerce.',
    images: ['https://www.ozonenetwork.news/influncer/author/jack_brennen.JPG'],
  },
};

const BEATS = [
  'Creator Economy', 'Influencer Profiles', 'TikTok',
  'Instagram', 'YouTube', 'Platform Policy',
  'Social Commerce', 'Digital Media',
];

const HIGHLIGHTS = [
  { stat: '2+', label: 'Years Reporting' },
  { stat: '8', label: 'Beats Covered' },
  { stat: '20+', label: 'Creator Profiles' },
];

export default function JackBrennanAuthorPage() {
  return (
    <main className="min-h-screen bg-white">
      <AuthorSchema
        name="Jack Brennan"
        jobTitle="Creator & Influencer Reporter"
        description="Jack Brennan is OzoneNews's Creator & Influencer Reporter, documenting the economics, culture, and policy landscape of the digital creator industry from New York."
        url="https://www.ozonenetwork.news/authors/jack-brennan"
        image="https://www.ozonenetwork.news/influncer/author/jack_brennen.JPG"
        sameAs={[
          'https://www.facebook.com/jack.brennan.3158',
        ]}
        knowsAbout={['Creator Economy', 'Influencer Marketing', 'TikTok', 'Instagram', 'YouTube', 'Platform Policy', 'Social Commerce', 'Digital Media']}
        location={{ city: 'New York', region: 'NY' }}
        articleCount={20}
      />

      {/* Header */}
      <div className="bg-purple-950 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-purple-400 mb-12 font-mono uppercase tracking-widest">
            <Link href="/" className="hover:text-purple-200 transition-colors">Home</Link>
            <span className="text-purple-700">/</span>
            <Link href="/authors" className="hover:text-purple-200 transition-colors">Authors</Link>
            <span className="text-purple-700">/</span>
            <span className="text-purple-300">Jack Brennan</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end gap-8">
            {/* Avatar */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 ring-2 ring-purple-400 relative bg-purple-800">
              <Image
                src="/influncer/author/jack_brennen.JPG"
                alt="Jack Brennan, OzoneNews Creator reporter"
                fill
                sizes="(min-width: 768px) 96px, 80px"
                className="object-cover"
                priority
              />
            </div>
            {/* Identity */}
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-purple-500 mb-2 font-mono">
                Creator &amp; Influencer Reporter &middot; OzoneNews
              </p>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3">
                Jack Brennan
              </h1>
              <p className="text-purple-200 text-xl font-medium">Creator Economy &middot; Platform Policy &middot; Influencer Profiles</p>
            </div>
            {/* Stats */}
            <div className="flex gap-8 md:pb-1 shrink-0">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="text-right">
                  <p className="text-3xl font-black">{h.stat}</p>
                  <p className="text-[10px] uppercase tracking-widest text-purple-500 font-bold mt-0.5">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote bar */}
          <div className="mt-10 border-l-4 border-purple-600 pl-5">
            <p className="text-purple-200 text-lg italic font-light leading-relaxed max-w-2xl">
              &ldquo;Every follower count is a business story waiting to be told.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Detail Strip */}
      <div className="bg-purple-900 text-white border-b border-purple-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 text-xs font-mono text-purple-300">
          <span>📍 New York, NY</span>
          <span>📱 Creator &amp; Influencer Desk</span>
          <span>🎥 Platform Policy &amp; Social Commerce</span>
          <span>📅 Reporter since 2024</span>
          <a
            href="mailto:j.brennan@ozonenetwork.news"
            className="text-purple-300 hover:text-purple-100 underline transition-colors"
          >
            ✉ j.brennan@ozonenetwork.news
          </a>
          <a
            href="https://www.facebook.com/jack.brennan.3158"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            f Facebook
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-7">
            {/* Beats */}
            <div className="border border-purple-100 p-6">
              <h2 className="text-[10px] uppercase tracking-widest font-black text-purple-400 mb-4">Coverage Beats</h2>
              <div className="flex flex-wrap gap-2">
                {BEATS.map((beat) => (
                  <span key={beat} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-purple-50 text-purple-700 border border-purple-100">
                    {beat}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="border border-gray-200 divide-y divide-gray-100">
              {[
                ['Organization', 'OzoneNews (Nonprofit)'],
                ['Desk', 'Creator & Influencer'],
                ['Location', 'New York, NY'],
                ['Joined', '2024'],
              ].map(([label, value]) => (
                <div key={label} className="px-5 py-3 flex justify-between items-baseline gap-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 shrink-0">{label}</p>
                  <p className="text-sm text-gray-700 text-right">{value}</p>
                </div>
              ))}
            </div>

            {/* Contact & Social */}
            <div className="border border-purple-100 px-5 py-4">
              <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-3">Contact &amp; Social</p>
              <div className="space-y-2">
                <a
                  href="mailto:j.brennan@ozonenetwork.news"
                  className="block text-sm text-blue-600 hover:text-blue-800 underline transition-colors"
                >
                  ✉ j.brennan@ozonenetwork.news
                </a>
                <a
                  href="https://www.facebook.com/jack.brennan.3158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 hover:text-blue-800 underline transition-colors"
                >
                  f Facebook
                </a>
              </div>
            </div>

            {/* Editorial */}
            <div className="bg-purple-950 text-white p-6 space-y-3">
              <h2 className="text-[10px] uppercase tracking-widest font-black text-purple-600">Standards</h2>
              <Link href="/editorial-standards" className="block text-sm font-semibold hover:text-purple-300 transition-colors">
                Editorial Standards &rarr;
              </Link>
              <Link href="/corrections" className="block text-sm font-semibold hover:text-purple-300 transition-colors">
                Corrections Policy &rarr;
              </Link>
              <Link href="/about" className="block text-sm font-semibold hover:text-purple-300 transition-colors">
                About OzoneNews &rarr;
              </Link>
            </div>
          </aside>

          {/* Main column */}
          <div className="lg:col-span-8 space-y-12">

            {/* Bio */}
            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b-2 border-purple-900 pb-3">
                About Jack Brennan
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  Jack Brennan is OzoneNews&rsquo;s Creator &amp; Influencer Reporter, documenting
                  the economics, culture, and policy landscape of the digital creator industry from
                  New York. Brennan covers the full spectrum of the{' '}
                  <Link href="/influencer" className="text-blue-600 hover:text-blue-800 underline">creator economy</Link>:
                  platform monetization structures, influencer career trajectories, brand deal economics,
                  TikTok and Instagram algorithmic shifts, and the regulatory pressures reshaping
                  how platforms compensate and moderate creators.
                </p>
                <p>
                  His creator profiles are structured as real biographical records: verified follower
                  counts, geographic origin, platform history, revenue streams, and brand affiliations
                  sourced from public filings, platform disclosures, and direct creator statements.
                  Brennan does not speculate about private income; he reports what creators and platforms
                  have disclosed publicly.
                </p>
                <p>
                  On the policy side, Brennan tracks congressional scrutiny of TikTok&rsquo;s ownership
                  structure, FTC enforcement actions against undisclosed sponsorships, and the evolving
                  legal frameworks governing influencer contracts. His work connects individual creator
                  stories to the macro forces reshaping digital media economics.
                </p>
                <p>
                  Creator leads, profile pitches, and tips can be directed to{' '}
                  <a href="mailto:j.brennan@ozonenetwork.news" className="text-blue-600 hover:text-blue-800 underline">j.brennan@ozonenetwork.news</a>.
                </p>
              </div>
            </section>

            {/* Recent Highlights */}
            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b border-purple-100 pb-3">
                Recent Profiles
              </h2>
              <div className="space-y-4">
                {[
                  {
                    label: 'Megan Marie | Creator Profile',
                    detail: 'Full biographical profile: platforms, follower counts, brand partnerships, and creator career timeline.',
                    href: '/influencer/megan-marie',
                    date: '2026',
                  },
                  {
                    label: 'Miranda Marie | Creator Profile',
                    detail: 'Platform history, content categories, social handles, and creator economy positioning.',
                    href: '/influencer/miranda-marie',
                    date: '2026',
                  },
                  {
                    label: 'Mika Lafuente | Creator Profile',
                    detail: 'International creator profile with verified follower metrics and brand collaboration history.',
                    href: '/influencer/mika-lafuente',
                    date: '2026',
                  },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="block group border border-purple-100 p-5 hover:border-purple-600 transition-colors">
                    <p className="text-xs font-mono text-purple-400 mb-1">{item.date}</p>
                    <p className="font-black text-gray-900 text-sm mb-1.5 group-hover:underline">{item.label}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Auto-loading article feed */}
            <section>
              <div className="border-b-2 border-purple-900 pb-3 mb-6">
                <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">All Published Articles</p>
              </div>
              <Suspense fallback={
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="h-16 bg-purple-50 animate-pulse rounded" />
                  ))}
                </div>
              }>
                <AuthorArticlesServer authorSlug="jack-brennan" authorName="Jack Brennan" />
              </Suspense>
            </section>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t-2 border-purple-900 mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-mono">&copy; 2026 OzoneNews. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/authors" className="text-xs font-semibold text-purple-600 hover:text-purple-900 transition-colors">&larr; All Authors</Link>
            <Link href="/about" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">About</Link>
            <Link href="/editorial-standards" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">Standards</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

