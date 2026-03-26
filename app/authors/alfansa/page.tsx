import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { AuthorArticlesServer } from '@/components/AuthorArticlesServer';
import AuthorSchema from '@/components/AuthorSchema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Alfansa â€” Finance & Markets Reporter | ObjectWire',
  description:
    'Alfansa is ObjectWire\'s Finance & Markets Reporter and Anime & Gaming Editor, based in New York. Covering payments, fintech, markets, My Hero Academia, and gaming culture.',
  alternates: { canonical: 'https://www.objectwire.org/authors/alfansa' },
  openGraph: {
    title: 'Alfansa | ObjectWire Finance & Markets Reporter',
    description: 'Finance & Markets Reporter and Anime & Gaming Editor at ObjectWire. Covering fintech, payments, MHA, and gaming economics.',
    url: 'https://www.objectwire.org/authors/alfansa',
    siteName: 'ObjectWire',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Alfansa â€” Finance & Markets Reporter',
    description: 'Finance & Anime & Gaming dual-desk at ObjectWire. New York.',
  },
};

const BEATS = [
  'Finance', 'Markets', 'Fintech', 'Payments',
  'Crypto', 'Anime & Gaming', 'My Hero Academia', 'Gaming Economics',
];

const HIGHLIGHTS = [
  { stat: '2+', label: 'Years Reporting' },
  { stat: '8', label: 'Beats Covered' },
  { stat: '18+', label: 'Published Articles' },
];

export default function AlfansaAuthorPage() {
  return (
    <main className="min-h-screen bg-white">
      <AuthorSchema
        name="Alfansa"
        jobTitle="Finance & Markets Reporter"
        description="Alfansa covers finance, markets, fintech, and payments at ObjectWire while also serving as the publication's Anime & Gaming Editor."
        url="https://www.objectwire.org/authors/alfansa"
        knowsAbout={['Finance', 'Markets', 'Fintech', 'Payments', 'Crypto', 'My Hero Academia', 'Gaming']}
        location={{ city: 'New York', region: 'NY' }}
        articleCount={18}
      />

      {/* â”€â”€ Full-bleed Header â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="bg-blue-950 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-blue-400 mb-12 font-mono uppercase tracking-widest">
            <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <span className="text-blue-700">/</span>
            <Link href="/authors" className="hover:text-blue-200 transition-colors">Authors</Link>
            <span className="text-blue-700">/</span>
            <span className="text-blue-300">Alfansa</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end gap-8">
            {/* Avatar */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 border-2 border-blue-400 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white font-black text-2xl tracking-tight">AL</span>
            </div>
            {/* Identity */}
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-blue-500 mb-2 font-mono">
                Finance & Markets Reporter Â· ObjectWire
              </p>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3">
                Alfansa
              </h1>
              <p className="text-blue-200 text-xl font-medium">Finance &amp; Markets Â· Anime &amp; Gaming Editor</p>
            </div>
            {/* Stats */}
            <div className="flex gap-8 md:pb-1 shrink-0">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="text-right">
                  <p className="text-3xl font-black">{h.stat}</p>
                  <p className="text-[10px] uppercase tracking-widest text-blue-500 font-bold mt-0.5">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote bar */}
          <div className="mt-10 border-l-4 border-blue-600 pl-5">
            <p className="text-blue-200 text-lg italic font-light leading-relaxed max-w-2xl">
              &ldquo;Markets move on narrative before they move on numbers.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* â”€â”€ Detail Strip â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="bg-blue-900 text-white border-b border-blue-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 text-xs font-mono text-blue-300">
          <span>ðŸ“ New York, NY</span>
          <span>ðŸ’° Finance &amp; Markets Desk</span>
          <span>ðŸŽ® Anime &amp; Gaming Editor</span>
          <span>ðŸ“… Reporter since 2023</span>
        </div>
      </div>

      {/* â”€â”€ Body â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* â”€â”€ Sidebar â”€â”€ */}
          <aside className="lg:col-span-4 space-y-7">
            {/* Beats */}
            <div className="border border-blue-100 p-6">
              <h2 className="text-[10px] uppercase tracking-widest font-black text-blue-400 mb-4">Coverage Beats</h2>
              <div className="flex flex-wrap gap-2">
                {BEATS.map((beat) => (
                  <span key={beat} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-100">
                    {beat}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="border border-gray-200 divide-y divide-gray-100">
              {[
                ['Organization', 'ObjectWire'],
                ['Primary Desk', 'Finance & Markets'],
                ['Secondary Desk', 'Anime & Gaming'],
                ['Location', 'New York, NY'],
                ['Joined', '2023'],
              ].map(([label, value]) => (
                <div key={label} className="px-5 py-3 flex justify-between items-baseline gap-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 shrink-0">{label}</p>
                  <p className="text-sm text-gray-700 text-right">{value}</p>
                </div>
              ))}
            </div>

            {/* Editorial */}
            <div className="bg-blue-950 text-white p-6 space-y-3">
              <h2 className="text-[10px] uppercase tracking-widest font-black text-blue-600">Standards</h2>
              <Link href="/editorial-standards" className="block text-sm font-semibold hover:text-blue-300 transition-colors">
                Editorial Standards â†’
              </Link>
              <Link href="/corrections" className="block text-sm font-semibold hover:text-blue-300 transition-colors">
                Corrections Policy â†’
              </Link>
              <Link href="/about" className="block text-sm font-semibold hover:text-blue-300 transition-colors">
                About ObjectWire â†’
              </Link>
            </div>
          </aside>

          {/* â”€â”€ Main column â”€â”€ */}
          <div className="lg:col-span-8 space-y-12">

            {/* Bio */}
            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b-2 border-blue-900 pb-3">
                About Alfansa
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  Alfansa is ObjectWire&rsquo;s Finance &amp; Markets Reporter and Anime &amp; Gaming
                  Editor based in New York. With dual-desk responsibilities, Alfansa covers the
                  intersection of global capital markets and cultural media â€” tracking how payments
                  infrastructure, fintech valuations, and crypto policy shape the broader economy
                  alongside in-depth reporting on gaming culture and anime.
                </p>
                <p>
                  On the finance side, Alfansa&rsquo;s reporting emphasizes the competitive dynamics of
                  payment networks, corporate restructurings in response to AI disruption, and the
                  regulatory landscape for digital assets. Alfansa was among the first to document
                  Mastercard&rsquo;s rapid stock selloff following the emergence of AI-powered financial
                  systems threatening traditional card-processing revenue.
                </p>
                <p>
                  As Anime &amp; Gaming Editor, Alfansa brings the same quantitative rigor to entertainment
                  coverage. Whether analyzing My Hero Academia&rsquo;s manga circulation figures, the
                  economics of Shonen Jump&rsquo;s digital transition, or the production budgets behind
                  major animes&rsquo; global streaming deals, the reporting connects cultural phenomena
                  to financial outcomes.
                </p>
                <p>
                  Alfansa&rsquo;s work reflects ObjectWire&rsquo;s founding belief that finance and
                  culture are inseparable narratives â€” the same macro forces reshaping Wall Street also
                  reshape how stories are told, consumed, and monetized worldwide.
                </p>
              </div>
            </section>

            {/* Recent Highlights */}
            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b border-blue-100 pb-3">
                Recent Highlights
              </h2>
              <div className="space-y-4">
                {[
                  {
                    label: 'Mastercard AI Disruption Selloff',
                    detail: 'AI-powered alternatives threaten card-processing revenue â€” Mastercard stock response, analyst reaction, and fintech implications.',
                    href: '/copyright/news/mastercard-ai-disruption-selloff',
                    date: 'March 2026',
                  },
                  {
                    label: 'My Hero Academia â€” Final Arc Analysis',
                    detail: 'Comprehensive breakdown of the Final War arc, Deku\'s quirk evolution, and the manga\'s commercial legacy.',
                    href: '/entertainment/anime/my-hero-academia-final-arc',
                    date: 'February 2026',
                  },
                  {
                    label: 'Crypto Regulation 2026 Outlook',
                    detail: 'SEC, DOJ, and global regulatory postures heading into a pivotal year for digital asset oversight.',
                    href: '/finance/crypto',
                    date: 'January 2026',
                  },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="block group border border-blue-100 p-5 hover:border-blue-600 transition-colors">
                    <p className="text-xs font-mono text-blue-400 mb-1">{item.date}</p>
                    <p className="font-black text-gray-900 text-sm mb-1.5 group-hover:underline">{item.label}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Auto-loading article feed */}
            <section>
              <div className="border-b-2 border-blue-900 pb-3 mb-6">
                <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">All Published Articles</p>
              </div>
              <Suspense fallback={
                <div className="space-y-4">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="h-16 bg-blue-50 animate-pulse rounded" />
                  ))}
                </div>
              }>
                <AuthorArticlesServer authorSlug="alfansa" authorName="Alfansa" />
              </Suspense>
            </section>
          </div>
        </div>
      </div>

      {/* â”€â”€ Footer strip â”€â”€ */}
      <div className="border-t-2 border-blue-900 mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-mono">Â© 2026 ObjectWire. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/authors" className="text-xs font-semibold text-blue-600 hover:text-blue-900 transition-colors">â† All Authors</Link>
            <Link href="/about" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">About</Link>
            <Link href="/editorial-standards" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">Standards</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

