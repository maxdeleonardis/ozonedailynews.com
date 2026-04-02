import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { AuthorArticlesServer } from '@/components/AuthorArticlesServer';
import AuthorSchema from '@/components/AuthorSchema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Jack Brennan | Investigations Reporter | ObjectWire',
  description:
    'Jack Brennan is ObjectWire\'s investigations reporter covering federal environmental policy, national security law, regulatory agencies, and the Trump administration. Based in Washington, D.C.',
  alternates: { canonical: 'https://www.objectwire.org/authors/jack-brennan' },
  openGraph: {
    title: 'Jack Brennan | Investigations Reporter | ObjectWire',
    description: 'Investigations reporter covering environmental law, national security, federal regulatory agencies, and the Trump administration at ObjectWire.',
    url: 'https://www.objectwire.org/authors/jack-brennan',
    siteName: 'ObjectWire',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Jack Brennan | Investigations',
    description: 'ObjectWire investigations reporter. Federal environmental law, national security, regulatory agencies.',
  },
};

const BEATS = [
  'Investigations', 'Environmental Law', 'National Security',
  'Federal Agencies', 'Trump Administration', 'Energy Policy',
  'Regulatory Affairs', 'Congress',
];

const HIGHLIGHTS = [
  { stat: '2+', label: 'Years Reporting' },
  { stat: '8+', label: 'Beats Covered' },
  { stat: '10+', label: 'Published Articles' },
];

export default function JackBrennanAuthorPage() {
  return (
    <main className="min-h-screen bg-white">
      <AuthorSchema
        name="Jack Brennan"
        jobTitle="Investigations Reporter"
        description="Jack Brennan is ObjectWire's investigations reporter covering federal environmental policy, national security law, the Endangered Species Act, regulatory agencies, and the Trump administration."
        url="https://www.objectwire.org/authors/jack-brennan"
        knowsAbout={['Environmental Law', 'National Security', 'Federal Agencies', 'Energy Policy', 'Regulatory Affairs', 'Investigations']}
        location={{ city: 'Washington', region: 'D.C.' }}
        articleCount={10}
      />

      {/* Header */}
      <div className="bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-14">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-12 font-mono uppercase tracking-widest">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/authors" className="hover:text-gray-300 transition-colors">Authors</Link>
            <span>/</span>
            <span className="text-gray-400">Jack Brennan</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end gap-8">
            {/* Avatar */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shrink-0">
              <span className="text-black font-black text-2xl tracking-tight">JB</span>
            </div>
            {/* Identity */}
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-2 font-mono">
                ObjectWire &middot; Investigations
              </p>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3">
                Jack Brennan
              </h1>
              <p className="text-gray-300 text-xl font-medium">Investigations Reporter</p>
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
              &ldquo;The document does not lie. The source does.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Detail Strip */}
      <div className="bg-gray-950 text-white border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 text-xs font-mono text-gray-400">
          <span>📍 Washington, D.C.</span>
          <span>🏢 ObjectWire Newsroom</span>
          <span>🗂 Investigations Desk</span>
          <span>📅 Active Since 2024</span>
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
                ['Organization', 'ObjectWire'],
                ['Desk', 'Investigations'],
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
                Editorial Standards &rarr;
              </Link>
              <Link href="/corrections" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                Corrections Policy &rarr;
              </Link>
              <Link href="/about" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                About ObjectWire &rarr;
              </Link>
            </div>
          </aside>

          {/* Main column */}
          <div className="lg:col-span-8 space-y-12">

            {/* Bio */}
            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b-2 border-black pb-3">
                About Jack Brennan
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  Jack Brennan is ObjectWire&rsquo;s investigations reporter, covering the intersection of
                  federal law, environmental regulation, and national security policy from Washington, D.C.
                  His reporting focuses on how executive-branch decisions reshape statutory protections
                  that took decades to build, using court filings, agency records, and congressional
                  documents as primary sources.
                </p>
                <p>
                  Brennan&rsquo;s inaugural major investigation documented the Trump administration&rsquo;s
                  March 2026 invocation of the Endangered Species Act&rsquo;s never-before-used national
                  security exemption clause, forcing the Endangered Species Committee &mdash; the &ldquo;God
                  Squad&rdquo; &mdash; to convene for the first time since 1992 and vote unanimously to
                  exempt all Gulf of Mexico oil drilling from ESA enforcement. The piece charted the
                  three-week timeline from Defense Secretary Pete Hegseth&rsquo;s March 13 DOJ filing to
                  the unanimous March 31 vote, and laid out the existential stakes for the 51 remaining
                  Rice&rsquo;s whales.
                </p>
                <p>
                  Brennan&rsquo;s approach is forensic: he leads with what the documents say, identifies
                  the named actors responsible, and reconstructs each decision in the order it was made.
                  He does not speculate about motive when act and consequence are sufficient.
                </p>
                <p>
                  He operates out of the ObjectWire Investigations Desk. Tips and document leads can be
                  directed to ObjectWire&rsquo;s editorial contact channel.
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
                    label: 'God Squad Exempts Gulf of Mexico from ESA',
                    detail: 'The Endangered Species Committee voted unanimously March 31 to override ESA protections for all Gulf oil drilling, citing the Iran war and Strait of Hormuz closure.',
                    href: '/trump/god-squad-gulf-drilling-esa-exemption',
                    date: 'March 31, 2026',
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
                <AuthorArticlesServer authorSlug="jack-brennan" authorName="Jack Brennan" />
              </Suspense>
            </section>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t-2 border-gray-900 mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-mono">&copy; 2026 ObjectWire. All rights reserved.</p>
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
