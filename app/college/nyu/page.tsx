import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const SLUG = '/college/nyu';

export const metadata: Metadata = {
  title: 'NYU | New York University, Journalism Program',
  description: 'New York University is a private research university in New York City. NYU\'s journalism program at the Arthur L. Carter Journalism Institute is one of the most respected in the United States.',
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'NYU | New York University, Journalism Program',
    description: 'Private research university in New York City. NYU\'s journalism institute trains reporters in investigative, political, and technology journalism.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'ObjectWire',
    section: 'Education',
    tags: ['NYU', 'New York University', 'Journalism', 'Arthur L. Carter Journalism Institute'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NYU | New York University, Journalism Program',
    description: 'Private research university in NYC. Home to the Arthur L. Carter Journalism Institute.',
  },
};

export default function NYUCollegePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-purple-950 text-white">
        <div className="max-w-4xl mx-auto px-6 pt-10 pb-14">
          <nav className="flex items-center gap-2 text-xs text-purple-300 mb-10 font-mono uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/college" className="hover:text-white transition-colors">College</Link>
            <span>/</span>
            <span className="text-purple-100">NYU</span>
          </nav>

          <p className="text-[10px] uppercase tracking-[0.3em] font-black text-purple-400 mb-3 font-mono">
            University Profile &middot; ObjectWire Education Index
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-4">
            NYU
          </h1>
          <p className="text-purple-200 text-xl font-medium mb-6">New York University</p>
          <div className="flex flex-wrap gap-6 text-sm text-purple-300 font-mono">
            <span>📍 Greenwich Village, New York City</span>
            <span>🏛 Founded 1831</span>
            <span>🎓 Private Research University</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main */}
          <div className="lg:col-span-8 space-y-10">

            <section className="prose prose-lg max-w-none">
              <h2>About New York University</h2>
              <p>
                New York University is a private research university headquartered in Greenwich Village,
                Manhattan. Founded in 1831, NYU is one of the largest private universities in the United
                States, enrolling more than 60,000 students across 20 schools and colleges. The university
                operates campuses in New York City, Abu Dhabi, and Shanghai, and maintains study-away sites
                in more than a dozen cities worldwide.
              </p>
              <p>
                NYU is consistently ranked among the top research universities globally, with particular
                strength in law, business, the arts, and the social sciences. Its location in New York City,
                the global center of media, finance, and technology, gives students direct access to
                professional networks and primary sources that few universities can match.
              </p>

              <h2>The Arthur L. Carter Journalism Institute</h2>
              <p>
                NYU&rsquo;s journalism program is housed in the Arthur L. Carter Journalism Institute,
                named after the co-founder of Goldman Sachs and former publisher of The Nation. The
                institute is consistently ranked among the top journalism schools in the United States,
                known for producing reporters who cover federal politics, investigative beats, and
                technology policy at the highest level.
              </p>
              <p>
                The program emphasizes the primacy of primary source reporting: court documents,
                congressional filings, regulatory agency records, and direct sourcing from named
                individuals in positions of authority. This document-first framework produces
                journalists who resist speculation in favor of what the record shows.
              </p>

              <h2>ObjectWire Alumni</h2>
              <p>
                <Link href="/authors/jack-sterling" className="text-blue-600 hover:text-blue-800 underline">
                  Jack Sterling
                </Link>
                , ObjectWire&rsquo;s reporter covering breaking news, federal investigations, Congress,
                and AI policy, graduated from NYU&rsquo;s journalism program. Based in Washington, D.C.,
                Sterling&rsquo;s document-first approach to reporting on federal policy, technology
                regulation, and gaming industry finance reflects the Carter Institute&rsquo;s core
                methodology.
              </p>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">

            <div className="border border-gray-200 divide-y divide-gray-100">
              {[
                ['Location', 'New York City, NY'],
                ['Founded', '1831'],
                ['Type', 'Private Research University'],
                ['Enrollment', '~60,000'],
                ['Journalism School', 'Arthur L. Carter Journalism Institute'],
                ['Notable Programs', 'Journalism, Law, Business, Film, Arts'],
              ].map(([label, value]) => (
                <div key={label} className="px-4 py-3">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-0.5">{label}</p>
                  <p className="text-sm text-gray-700">{value}</p>
                </div>
              ))}
            </div>

            <div className="bg-purple-950 text-white p-5 space-y-3">
              <p className="text-[10px] uppercase tracking-widest font-black text-purple-400">ObjectWire Alumni</p>
              <Link href="/authors/jack-sterling" className="block text-sm font-semibold text-purple-200 hover:text-white underline transition-colors">
                Jack Sterling, Reporter &rarr;
              </Link>
            </div>

            <div className="border border-gray-200 p-5">
              <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-3">Related Pages</p>
              <div className="space-y-2">
                <Link href="/college/ucla" className="block text-sm text-blue-600 hover:text-blue-800 underline">UCLA &rarr;</Link>
                <Link href="/college/north-carolina-state-university" className="block text-sm text-blue-600 hover:text-blue-800 underline">NC State University &rarr;</Link>
                <Link href="/authors" className="block text-sm text-blue-600 hover:text-blue-800 underline">All ObjectWire Authors &rarr;</Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
