import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Authors & Contributors',
  description:
    'Meet the journalists, reporters, and editors behind ObjectWire, covering finance, markets, science, technology, anime, gaming, investigations, and',
  alternates: { canonical: 'https://www.objectwire.org/authors' },
  openGraph: {
    title: 'ObjectWire Authors & Contributors',
    description: 'Meet the journalists and editors behind ObjectWire.',
    url: 'https://www.objectwire.org/authors',
    siteName: 'ObjectWire',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'ObjectWire Authors & Contributors',
    description: 'Meet the journalists and editors behind ObjectWire.',
  },
};

const AUTHORS = [
  {
    slug: 'jack-sterling',
    initials: 'JS',
    name: 'Jack Sterling',
    role: 'Reporter',
    department: 'Politics & Investigations',
    location: 'Washington, D.C.',
    bio: 'General assignment reporter covering breaking news, federal investigations, Congress, and the intersection of politics and technology. Bylined on major legislative scoops and deep-dive policy analyses.',
    beats: ['Politics', 'Investigations', 'Breaking News', 'AI Policy', 'Congress'],
    accent: 'bg-black',
    border: 'border-black',
    text: 'text-black',
    quote: 'The story is always in the document.',
  },
  {
    slug: 'max-deleonardis',
    initials: 'MD',
    name: 'Max DeLeonardis',
    role: 'Founding Writer',
    department: 'Science & Technology',
    location: 'Austin, TX',
    bio: 'Founding writer at ObjectWire. NCSU journalism graduate covering biotechnology, CRISPR, medical research, AI hardware, gaming, and the companies shaping the future of human health and emerging tech.',
    beats: ['Biotechnology', 'CRISPR', 'AI Hardware', 'Gaming', 'Emerging Tech'],
    accent: 'bg-gray-800',
    border: 'border-gray-800',
    text: 'text-gray-800',
    quote: 'Peer review is a starting point, not a finish line.',
  },
  {
    slug: 'alfansa',
    initials: 'AL',
    name: 'Alfansa',
    role: 'Finance & Markets Reporter',
    department: 'Finance & Gaming',
    location: 'New York, NY',
    bio: 'Finance & Markets Reporter and Anime & Gaming Editor. Covers payments, fintech, equity markets, crypto infrastructure, My Hero Academia, and the business of gaming culture.',
    beats: ['Finance', 'Fintech', 'Markets', 'Crypto', 'Anime & Gaming'],
    accent: 'bg-blue-700',
    border: 'border-blue-700',
    text: 'text-blue-700',
    quote: 'Markets move on narrative before they move on numbers.',
  },
  {
    slug: 'tina-boyle',
    initials: 'TB',
    name: 'Tina Boyle',
    role: 'Investigations Reporter',
    department: 'Investigations',
    location: 'Washington, D.C.',
    bio: 'Investigations reporter covering federal environmental law, national security, regulatory agencies, and the Trump administration. Led reporting on the first God Squad exemption since 1992 and the Endangered Species Act national security override.',
    beats: ['Investigations', 'Environmental Law', 'National Security', 'Energy Policy', 'Trump Administration'],
    accent: 'bg-green-800',
    border: 'border-green-800',
    text: 'text-green-800',
    quote: 'The document does not lie. The source does.',
  },
];

export default function AuthorsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <div className="border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-10 font-mono uppercase tracking-widest">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-bold">Newsroom</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mb-3 font-mono">
                ObjectWire Newsroom
              </p>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 leading-none mb-5">
                Our<br />Journalists
              </h1>
              <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
                The reporters, editors, and investigators producing ObjectWire&rsquo;s coverage
                of finance, technology, politics, science, and culture.
              </p>
            </div>
            <div className="shrink-0 flex gap-8 md:pb-1">
              <div className="text-right">
                <p className="text-3xl font-black text-gray-900">4</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Journalists</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-gray-900">6+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Beats</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-gray-900">2026</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Author Cards ─────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="space-y-px border border-gray-200">
          {AUTHORS.map((author, i) => (
            <div
              key={author.slug}
              className={`group bg-white hover:bg-gray-50 transition-colors p-8 md:p-10 ${i < AUTHORS.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-7">
                {/* Avatar */}
                <Link href={`/authors/${author.slug}`} className="shrink-0">
                  <div className={`w-16 h-16 ${author.accent} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-black text-xl tracking-tight">{author.initials}</span>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <Link href={`/authors/${author.slug}`}>
                        <h2 className={`text-2xl font-black text-gray-900 tracking-tight group-hover:${author.text} transition-colors`}>
                          {author.name}
                        </h2>
                      </Link>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mt-1">
                        {author.role} &nbsp;·&nbsp; {author.location}
                      </p>
                    </div>
                    <Link
                      href={`/authors/${author.slug}`}
                      className={`shrink-0 text-[10px] font-black uppercase tracking-widest border-b-2 ${author.border} pb-0.5 hover:opacity-60 transition-opacity`}
                    >
                      Full Profile →
                    </Link>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-2xl">
                    {author.bio}
                  </p>

                  {/* Quote */}
                  <p className={`text-xs italic ${author.text} font-medium mb-5 border-l-2 ${author.border} pl-3`}>
                    &ldquo;{author.quote}&rdquo;
                  </p>

                  {/* Beats */}
                  <div className="flex flex-wrap gap-1.5">
                    {author.beats.map((beat) => (
                      <span
                        key={beat}
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white text-gray-600 border border-gray-200"
                      >
                        {beat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Editorial Standards Bar ──────────────────────────────────── */}
      <div className="bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-widest font-black text-gray-500 mb-3">Editorial Principles</p>
              <h3 className="text-xl font-black mb-3">Verified. Source-cited. Correctable.</h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
                All ObjectWire journalists operate under our published editorial standards. Errors are
                corrected prominently. Sources are named where possible. Methods are disclosed.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link href="/editorial-standards" className="text-xs font-black uppercase tracking-widest text-white border border-white px-5 py-2.5 hover:bg-white hover:text-black transition-colors text-center">
                Editorial Standards
              </Link>
              <Link href="/corrections" className="text-xs font-black uppercase tracking-widest text-gray-400 border border-gray-700 px-5 py-2.5 hover:border-white hover:text-white transition-colors text-center">
                Corrections Policy
              </Link>
              <Link href="/about" className="text-xs font-black uppercase tracking-widest text-gray-400 border border-gray-700 px-5 py-2.5 hover:border-white hover:text-white transition-colors text-center">
                About ObjectWire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

