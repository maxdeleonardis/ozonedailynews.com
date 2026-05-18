import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const SLUG = '/college/ucla';

export const metadata: Metadata = {
  title: 'UCLA | University of California Los Angeles, Journalism Program',
  description: 'University of California, Los Angeles is a public research university in Westwood, California. UCLA\'s journalism and political science programs have produced leading reporters and investigators.',
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'UCLA | University of California Los Angeles',
    description: 'Public research university in Los Angeles, California. Home to leading journalism, political science, and communications programs.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    section: 'Education',
    tags: ['UCLA', 'University of California Los Angeles', 'Journalism', 'Political Science'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UCLA | University of California Los Angeles',
    description: 'Public research university in LA. Known for journalism, political science, and communications.',
  },
};

export default function UCLACollegePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-6 pt-10 pb-14">
          <nav className="flex items-center gap-2 text-xs text-blue-400 mb-10 font-mono uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/college" className="hover:text-white transition-colors">College</Link>
            <span>/</span>
            <span className="text-blue-200">UCLA</span>
          </nav>

          <p className="text-[10px] uppercase tracking-[0.3em] font-black text-blue-400 mb-3 font-mono">
            University Profile &middot; OzoneNews Education Index
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-4">
            UCLA
          </h1>
          <p className="text-blue-200 text-xl font-medium mb-6">University of California, Los Angeles</p>
          <div className="flex flex-wrap gap-6 text-sm text-blue-300 font-mono">
            <span>📍 Westwood, Los Angeles, California</span>
            <span>🏛 Founded 1919</span>
            <span>🎓 Public Research University</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main */}
          <div className="lg:col-span-8 space-y-10">

            <section className="prose prose-lg max-w-none">
              <h2>About UCLA</h2>
              <p>
                The University of California, Los Angeles is a public research university located in the
                Westwood neighborhood of Los Angeles, California. Founded in 1919 as the Southern Branch
                of the University of California, UCLA has grown into one of the most respected public
                universities in the United States, consistently ranked among the top public institutions
                in the world.
              </p>
              <p>
                UCLA enrolls more than 46,000 students across 13 academic divisions, including the College
                of Letters and Science, the Henry Samueli School of Engineering and Applied Science, and
                the School of Theater, Film and Television. The university operates more than 300 research
                centers and institutes and receives over $1 billion in research funding annually.
              </p>

              <h2>Journalism, Communications &amp; Political Science</h2>
              <p>
                UCLA&rsquo;s Department of Communication and its Political Science program are among the
                most rigorous in the UC system. Political Science graduates have gone on to careers in
                federal policy, investigative reporting, and public affairs, drawing on a curriculum that
                emphasizes legal reasoning, government structure, and empirical research methods.
              </p>
              <p>
                The department&rsquo;s focus on document-based research and primary source analysis
                directly informs the kind of policy journalism practiced at publications like OzoneNews,
                where reporters use court filings, agency records, and congressional documents as the
                foundation of every story.
              </p>

              <h2>OzoneNews Alumni</h2>
              <p>
                <Link href="/authors/tina-boyle" className="text-blue-600 hover:text-blue-800 underline">
                  Tina Boyle
                </Link>
                , OzoneNews&rsquo;s Investigations Reporter, graduated from UCLA with a degree in
                Political Science. Boyle covers federal environmental law, national security policy,
                and the Trump administration from Washington, D.C. Her document-first reporting style
                reflects the analytical framework developed in UCLA&rsquo;s Political Science program.
              </p>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">

            <div className="border border-gray-200 divide-y divide-gray-100">
              {[
                ['Location', 'Los Angeles, CA'],
                ['Founded', '1919'],
                ['Type', 'Public Research University'],
                ['System', 'University of California'],
                ['Enrollment', '~46,000'],
                ['Notable Programs', 'Political Science, Communications, Law, Film'],
              ].map(([label, value]) => (
                <div key={label} className="px-4 py-3">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-0.5">{label}</p>
                  <p className="text-sm text-gray-700">{value}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-950 text-white p-5 space-y-3">
              <p className="text-[10px] uppercase tracking-widest font-black text-blue-400">OzoneNews Alumni</p>
              <Link href="/authors/tina-boyle" className="block text-sm font-semibold text-blue-200 hover:text-white underline transition-colors">
                Tina Boyle, Investigations Reporter &rarr;
              </Link>
            </div>

            <div className="border border-gray-200 p-5">
              <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-3">Related Pages</p>
              <div className="space-y-2">
                <Link href="/college/nyu" className="block text-sm text-blue-600 hover:text-blue-800 underline">NYU &rarr;</Link>
                <Link href="/college/north-carolina-state-university" className="block text-sm text-blue-600 hover:text-blue-800 underline">NC State University &rarr;</Link>
                <Link href="/authors" className="block text-sm text-blue-600 hover:text-blue-800 underline">All OzoneNews Authors &rarr;</Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
