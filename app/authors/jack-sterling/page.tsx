import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AuthorArticlesServer } from '@/components/authors/AuthorArticlesServer';
import AuthorSchema from '@/components/authors/AuthorSchema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Jack Sterling, ObjectWire Reporter',
  description:
    'Jack Sterling is a reporter at ObjectWire covering Congress, federal investigations, and AI policy. Reach him through ObjectWire editorial contact.',
  alternates: { canonical: 'https://www.objectwire.org/authors/jack-sterling' },
  openGraph: {
    title: 'Jack Sterling, ObjectWire Reporter',
    description: 'Reporter at ObjectWire covering Congress, federal investigations, and AI policy.',
    url: 'https://www.objectwire.org/authors/jack-sterling',
    siteName: 'ObjectWire',
    type: 'profile',
    images: [{ url: 'https://www.objectwire.org/influncer/author/jack_sterling.jpg', width: 800, height: 800, alt: 'Jack Sterling, ObjectWire reporter' }],
  },
  twitter: {
    card: 'summary',
    title: 'Jack Sterling, ObjectWire Reporter',
    description: 'Reporter at ObjectWire. Congress, federal investigations, AI policy.',
    images: ['https://www.objectwire.org/influncer/author/jack_sterling.jpg'],
  },
};

const BEATS = [
  'Politics', 'Federal Investigations', 'Congress',
  'Breaking News', 'AI Policy', 'National Security', 'White House',
];

const HIGHLIGHTS = [
  { stat: '2', label: 'Years Reporting' },
  { stat: '3+', label: 'Beats Covered' },
  { stat: '14+', label: 'Published Articles' },
];

export default function JackSterlingAuthorPage() {
  return (
    <main className="min-h-screen bg-white">
      <AuthorSchema
        name="Jack Sterling"
        jobTitle="Journalist & Reporter"
        description="Jack Sterling is a journalist at ObjectWire covering breaking news, investigations, federal politics, Congress, and AI policy."
        url="https://www.objectwire.org/authors/jack-sterling"
        knowsAbout={['Politics', 'Federal Investigations', 'Breaking News', 'Congress', 'AI Policy', 'National Security']}
        articleCount={14}
      />

      {/* ── Full-bleed Header ───────────────────────────────────────── */}
      <div className="bg-black text-white">
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
                alt="Jack Sterling, ObjectWire reporter"
                fill
                sizes="(min-width: 768px) 96px, 80px"
                className="object-cover"
                priority
              />
            </div>
            {/* Identity */}
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-2 font-mono">
                ObjectWire · Politics &amp; Investigations
              </p>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3">
                Jack Sterling
              </h1>
              <p className="text-gray-300 text-xl font-medium">Journalist &amp; Reporter</p>
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
          <div className="mt-10 border-l-4 border-white pl-5">
            <p className="text-gray-300 text-lg italic font-light leading-relaxed max-w-2xl">
              &ldquo;The story is always in the document.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── Detail Strip ───────────────────────────────────────────── */}
      <div className="bg-gray-950 text-white border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 text-xs font-mono text-gray-400">
          <span>📍 Washington, D.C.</span>
          <span>🏢 ObjectWire Newsroom</span>
          <span>🗂 Politics &amp; Investigations Desk</span>
          <span>📅 Active Since 2024</span>
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── Sidebar ── */}
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
                ['Organization', 'ObjectWire'],
                ['Desk', 'Politics & Investigations'],
                ['Location', 'Washington, D.C.'],
                ['Joined', '2024'],
              ].map(([label, value]) => (
                <div key={label} className="px-5 py-3 flex justify-between items-baseline gap-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 shrink-0">{label}</p>
                  <p className="text-sm text-gray-700 text-right">{value}</p>
                </div>
              ))}
            </div>

            {/* Editorial */}
            <div className="bg-black text-white p-6 space-y-3">
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400">Standards</h2>
              <Link href="/editorial-standards" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                Editorial Standards →
              </Link>
              <Link href="/corrections" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                Corrections Policy →
              </Link>
              <Link href="/about" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                About ObjectWire →
              </Link>
            </div>
          </aside>

          {/* ── Main column ── */}
          <div className="lg:col-span-8 space-y-12">

            {/* Bio */}
            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b-2 border-black pb-3">
                About Jack Sterling
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  Jack Sterling is a journalist and general assignment reporter at ObjectWire, where he
                  covers the full stretch of federal politics, from day-to-day congressional activity to
                  long-form investigations into how policy decisions reshape markets, infrastructure, and
                  civil institutions.
                </p>
                <p>
                  Sterling has established himself as a reliable first-byline voice on legislative
                  technology policy. His March 2026 report on the <em>AI Data Center Moratorium Act</em> , 
                  introduced by Senator Bernie Sanders and Representative Alexandria Ocasio-Cortez, broke
                  down a landmark progressive challenge to the trillion-dollar AI infrastructure build-out,
                  covering the bill&rsquo;s six pillars, its political prospects, and the industry
                  counteroffensive in real time.
                </p>
                <p>
                  He has also reported on federal court filings disclosing Anthropic&rsquo;s $5 billion
                  revenue milestone, the intersection of gambling regulation and professional sports, and
                  how entertainment technology like Unreal Engine has become embedded in Hollywood
                  production pipelines. His work is document-first, he writes from filings, legislation,
                  and public records before sources and commentary.
                </p>
                <p>
                  Sterling operates from the Politics &amp; Investigations desk. Reporting tips and
                  document leads welcome via ObjectWire&rsquo;s editorial contact.
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
                    label: 'Sanders &amp; AOC Moratorium Act',
                    detail: 'Broke down the AI Data Center Moratorium Act, its six legislative pillars, political prospects, and the tech industry response.',
                    href: '/technology/sanders-aoc-ai-data-center-moratorium-act-march-2026',
                    date: 'March 25, 2026',
                  },
                  {
                    label: 'Anthropic $5B Revenue Disclosure',
                    detail: 'Court filings in a DoD contractor case disclosed Anthropic&rsquo;s full revenue picture for the first time.',
                    href: '/tech/news/anthropic-court-filings-disclose-5-billion-in-total-revenue',
                    date: 'March 12, 2026',
                  },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="block group border border-gray-200 p-5 hover:border-black transition-colors">
                    <p className="text-xs font-mono text-gray-400 mb-1">{item.date}</p>
                    <p className="font-black text-gray-900 text-sm mb-1.5 group-hover:underline" dangerouslySetInnerHTML={{ __html: item.label }} />
                    <p className="text-sm text-gray-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.detail }} />
                  </Link>
                ))}
              </div>
            </section>

            {/* Auto-loading article feed */}
            <section>
              <div className="border-b-2 border-black pb-3 mb-6">
                <Suspense fallback={
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest font-black text-gray-400">All Published Articles</span>
                    <span className="text-[10px] font-mono text-gray-300 animate-pulse">Loading…</span>
                  </div>
                }>
                  {/* Header rendered inside the server component */}
                  <span className="sr-only">Published Articles</span>
                </Suspense>
              </div>
              <Suspense fallback={
                <div className="space-y-4">
                  {[1,2,3].map(i => (
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

      {/* ── Footer strip ── */}
      <div className="border-t-2 border-black mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-mono">© 2026 ObjectWire. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/authors" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">← All Authors</Link>
            <Link href="/about" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">About</Link>
            <Link href="/editorial-standards" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">Standards</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

