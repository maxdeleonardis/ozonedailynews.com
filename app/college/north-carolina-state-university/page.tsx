import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const SLUG = '/college/north-carolina-state-university';

export const metadata: Metadata = {
  title: 'NC State | North Carolina State University, Journalism Program',
  description: 'North Carolina State University is a public land-grant research university in Raleigh, NC. NC State\'s journalism and communications programs are known for science and technology reporting.',
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'NC State | North Carolina State University',
    description: 'Public land-grant research university in Raleigh, North Carolina. Known for journalism, science communication, and engineering programs.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    section: 'Education',
    tags: ['NC State', 'North Carolina State University', 'Journalism', 'Science Communication'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NC State | North Carolina State University',
    description: 'Public land-grant research university in Raleigh, NC. Known for journalism and science communication.',
  },
};

export default function NCStateCollegePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-red-900 text-white">
        <div className="max-w-4xl mx-auto px-6 pt-10 pb-14">
          <nav className="flex items-center gap-2 text-xs text-red-300 mb-10 font-mono uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/college" className="hover:text-white transition-colors">College</Link>
            <span>/</span>
            <span className="text-red-100">NC State</span>
          </nav>

          <p className="text-[10px] uppercase tracking-[0.3em] font-black text-red-400 mb-3 font-mono">
            University Profile &middot; OzoneNews Education Index
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-4">
            NC State
          </h1>
          <p className="text-red-200 text-xl font-medium mb-6">North Carolina State University</p>
          <div className="flex flex-wrap gap-6 text-sm text-red-300 font-mono">
            <span>📍 Raleigh, North Carolina</span>
            <span>🏛 Founded 1887</span>
            <span>🎓 Public Land-Grant University</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main */}
          <div className="lg:col-span-8 space-y-10">

            <section className="prose prose-lg max-w-none">
              <h2>About North Carolina State University</h2>
              <p>
                North Carolina State University is a public land-grant research university located in
                Raleigh, North Carolina. Founded in 1887, NC State is the largest university in North
                Carolina with more than 37,000 students enrolled across 12 colleges offering over
                300 undergraduate, graduate, and doctoral programs.
              </p>
              <p>
                NC State is particularly recognized for its programs in engineering, computer science,
                agriculture, and life sciences. The university is a founding member of the Research
                Triangle, a technology and research hub comprising NC State, Duke University, and the
                University of North Carolina at Chapel Hill, one of the most concentrated research
                corridors in the United States.
              </p>

              <h2>Journalism &amp; Science Communication</h2>
              <p>
                NC State&rsquo;s journalism program, housed within the College of Humanities and Social
                Sciences, combines traditional reporting disciplines with a strong emphasis on science
                and technology communication. This cross-disciplinary approach produces journalists
                capable of covering technically complex beats, including biotechnology, AI hardware,
                medical research, and emerging technologies.
              </p>
              <p>
                The program&rsquo;s proximity to NC State&rsquo;s engineering and life sciences
                departments gives journalism students direct access to primary research sources:
                named researchers, published studies, and laboratory contexts that are otherwise
                difficult for reporters to access without scientific grounding.
              </p>

              <h2>OzoneNews Alumni</h2>
              <p>
                <Link href="/authors/max-deleonardis" className="text-blue-600 hover:text-blue-800 underline">
                  Max DeLeonardis
                </Link>
                , OzoneNews&rsquo;s founding writer and Science &amp; Technology Reporter, graduated from
                NC State&rsquo;s journalism program. Based in Austin, Texas, DeLeonardis covers
                biotechnology, CRISPR, medical research, AI hardware, video games, and emerging
                technologies. His primary-source discipline, sourcing named researchers and official
                regulatory filings before any speculation, reflects NC State&rsquo;s science journalism
                framework.
              </p>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">

            <div className="border border-gray-200 divide-y divide-gray-100">
              {[
                ['Location', 'Raleigh, NC'],
                ['Founded', '1887'],
                ['Type', 'Public Land-Grant University'],
                ['System', 'UNC System'],
                ['Enrollment', '~37,000'],
                ['Notable Programs', 'Journalism, Engineering, Computer Science, Biotech'],
              ].map(([label, value]) => (
                <div key={label} className="px-4 py-3">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-0.5">{label}</p>
                  <p className="text-sm text-gray-700">{value}</p>
                </div>
              ))}
            </div>

            <div className="bg-red-900 text-white p-5 space-y-3">
              <p className="text-[10px] uppercase tracking-widest font-black text-red-400">OzoneNews Alumni</p>
              <Link href="/authors/max-deleonardis" className="block text-sm font-semibold text-red-200 hover:text-white underline transition-colors">
                Max DeLeonardis, Science &amp; Tech Writer &rarr;
              </Link>
            </div>

            <div className="border border-gray-200 p-5">
              <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-3">Related Pages</p>
              <div className="space-y-2">
                <Link href="/college/ucla" className="block text-sm text-blue-600 hover:text-blue-800 underline">UCLA &rarr;</Link>
                <Link href="/college/nyu" className="block text-sm text-blue-600 hover:text-blue-800 underline">NYU &rarr;</Link>
                <Link href="/authors" className="block text-sm text-blue-600 hover:text-blue-800 underline">All OzoneNews Authors &rarr;</Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
