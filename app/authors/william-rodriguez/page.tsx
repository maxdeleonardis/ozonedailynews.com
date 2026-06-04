import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { AuthorArticlesServer } from '@/components/authors/AuthorArticlesServer';
import AuthorSchema from '@/components/authors/AuthorSchema';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'William Rodriguez | Staff Writer, OzoneNews',
  description:
    'William Rodriguez is a staff writer at OzoneNews covering news, technology, gaming, and culture. He focuses on investigative features and product analysis across major tech beats.',
  alternates: { canonical: 'https://www.ozonenetwork.news/authors/william-rodriguez' },
  openGraph: {
    title: 'William Rodriguez | Staff Writer, OzoneNews',
    description: 'Staff writer at OzoneNews covering news, technology, gaming, and culture.',
    url: 'https://www.ozonenetwork.news/authors/william-rodriguez',
    siteName: 'OzoneNews',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'William Rodriguez | Staff Writer, OzoneNews',
    description: 'Staff writer at OzoneNews covering news, technology, gaming, and culture.',
  },
};

const BEATS = [
  'News', 'Technology', 'Gaming', 'Culture', 'Entertainment',
];

const HIGHLIGHTS = [
  { stat: '1+', label: 'Years at OzoneNews' },
  { stat: '5+', label: 'Beats Covered' },
  { stat: '10+', label: 'Published Articles' },
];

const SOCIAL = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61556778031552',
    icon: 'f',
  },
];

export default function WilliamRodriguezAuthorPage() {
  return (
    <main className="min-h-screen bg-white">
      <AuthorSchema
        name="William Rodriguez"
        jobTitle="Staff Writer"
        description="William Rodriguez is a staff writer at OzoneNews covering news, technology, gaming, and culture."
        url="https://www.ozonenetwork.news/authors/william-rodriguez"
        sameAs={[
          'https://www.facebook.com/profile.php?id=61556778031552',
        ]}
        knowsAbout={['News', 'Technology', 'Gaming', 'Culture', 'Entertainment']}
        location={{ city: 'United States', region: '' }}
        articleCount={10}
      />

      {/* Full-bleed Header */}
      <div className="bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-12 font-mono uppercase tracking-widest">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/authors" className="hover:text-gray-300 transition-colors">Authors</Link>
            <span>/</span>
            <span className="text-gray-400">William Rodriguez</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end gap-8">
            {/* Avatar */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 ring-2 ring-white bg-indigo-700 flex items-center justify-center">
              <span className="text-white font-black text-3xl tracking-tight">WR</span>
            </div>
            {/* Identity */}
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-2 font-mono">
                Staff Writer &middot; OzoneNews
              </p>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3">
                William Rodriguez
              </h1>
              <p className="text-gray-300 text-xl font-medium">Staff Writer</p>
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
              &ldquo;Every story deserves to be told accurately.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Detail Strip */}
      <div className="bg-gray-900 text-white border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 text-xs font-mono text-gray-400">
          <span>📝 Staff Writer &middot; 2025</span>
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              {s.icon} {s.label}
            </a>
          ))}
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
                ['Organization', 'OzoneNews'],
                ['Role', 'Staff Writer'],
                ['Joined', '2025'],
              ].map(([label, value]) => (
                <div key={label} className="px-5 py-3 flex justify-between items-baseline gap-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 shrink-0">{label}</p>
                  <p className="text-sm text-gray-700 text-right">{value}</p>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="border border-gray-200 divide-y divide-gray-100">
              <div className="px-5 py-3">
                <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-3">Social Profiles</p>
                <div className="space-y-2">
                  {SOCIAL.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-blue-600 hover:text-blue-800 underline transition-colors"
                    >
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </div>
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
                About William Rodriguez
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  William Rodriguez is a staff writer at{' '}
                  <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">OzoneNews</Link>,
                  contributing news coverage across technology, gaming, entertainment, and culture verticals.
                  He brings a direct reporting style focused on verified facts, primary sources, and reader clarity.
                </p>
                <p>
                  Rodriguez&rsquo;s coverage spans the fast-moving intersection of consumer technology, digital
                  culture, and gaming. His work at OzoneNews upholds the publication&rsquo;s commitment to
                  accuracy-first journalism, sourcing named individuals, official statements, and documented records
                  before publication.
                </p>
              </div>
            </section>

            {/* Auto-loading article feed */}
            <section>
              <div className="border-b-2 border-gray-900 pb-3 mb-6">
                <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">All Published Articles</p>
              </div>
              <Suspense fallback={
                <div className="space-y-4">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="h-16 bg-gray-100 animate-pulse rounded" />
                  ))}
                </div>
              }>
                <AuthorArticlesServer authorSlug="william-rodriguez" authorName="William Rodriguez" />
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
