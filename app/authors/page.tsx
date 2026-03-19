import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';

export const metadata: Metadata = {
  title: 'Authors & Contributors | ObjectWire',
  description:
    'Meet the journalists, reporters, and editors behind ObjectWire — covering finance, markets, science, technology, anime, gaming, investigations, and breaking news.',
  alternates: {
    canonical: 'https://www.objectwire.org/authors',
  },
  openGraph: {
    title: 'ObjectWire Authors & Contributors',
    description:
      'Meet the journalists and editors behind ObjectWire — finance, markets, science, technology, anime, gaming, and breaking news.',
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

// ─── Author data ──────────────────────────────────────────────────────────────

const authors = [
  {
    slug: 'alfansa',
    name: 'Alfansa',
    role: 'Finance & Markets Reporter · Anime & Gaming Editor',
    location: 'Austin, TX',
    bio: 'Covers payments, fintech, market events, and the intersection of AI with financial services. Also leads ObjectWire\'s My Hero Academia and gaming desk, covering Ultra Rumble season by season.',
    beats: ['💰 Finance & Markets', '🏦 Fintech & Payments', '🦸 Anime & Gaming'],
    gradient: 'from-emerald-600 via-green-500 to-cyan-600',
    initial: 'A',
    avatarBg: 'from-green-400 to-emerald-600',
    roleColor: 'text-emerald-600',
    badgeBg: 'bg-emerald-50 border-emerald-200',
    featured: true,
    recentArticle: {
      href: '/copyright/news/mastercard-ai-disruption-selloff',
      title: 'Mastercard Shares Drop Below $500 as AI Disruption Note and Tariff Concerns Hit Payments Sector',
      category: 'Finance',
    },
  },
  {
    slug: 'conan-boyle',
    name: 'Conan Boyle',
    role: 'Founding Writer & Science Journalist',
    location: 'Austin, TX',
    bio: 'NCSU journalism graduate specialising in biotechnology, CRISPR gene editing, medical research breakthroughs, and emerging technologies. Founding writer at ObjectWire.',
    beats: ['🔬 Biotechnology', '🧬 CRISPR & Gene Editing', '💊 Medical Research', '🤖 Emerging Tech'],
    gradient: 'from-purple-600 via-blue-600 to-teal-600',
    initial: 'C',
    avatarBg: 'from-purple-400 to-blue-500',
    roleColor: 'text-purple-600',
    badgeBg: 'bg-purple-50 border-purple-200',
    featured: true,
    recentArticle: null,
  },
  {
    slug: 'jack-sterling',
    name: 'Jack Sterling',
    role: 'Journalist & Reporter',
    location: 'ObjectWire',
    bio: 'General assignment journalist covering breaking news, investigations, politics, and business. Committed to accuracy, source verification, and fair-minded reporting.',
    beats: ['📰 Breaking News', '🔍 Investigations', '🏛️ Politics', '📋 General Assignment'],
    gradient: 'from-slate-800 via-blue-900 to-slate-800',
    initial: 'J',
    avatarBg: 'from-slate-600 to-blue-800',
    roleColor: 'text-blue-700',
    badgeBg: 'bg-blue-50 border-blue-200',
    featured: false,
    recentArticle: null,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AuthorsPage() {
  return (
    <>
      <NewsArticleSchema
        title="Authors & Contributors | ObjectWire"
        description="Meet the journalists, reporters, and editors behind ObjectWire."
        author="ObjectWire Editorial Team"
        publishedTime="2026-01-01T00:00:00Z"
        modifiedTime="2026-02-24T00:00:00Z"
        articleUrl="https://www.objectwire.org/authors"
        section="About"
        keywords={['ObjectWire authors', 'ObjectWire journalists', 'ObjectWire team']}
      />

      <div className="min-h-screen bg-[#faf9f6]">

        {/* ── Header ──────────────────────────────────────────────── */}
        <header style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1e293b 100%)' }}>
          <div className="max-w-5xl mx-auto px-4 py-14 text-center">
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              ObjectWire
            </p>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem' }}>
              Authors &amp; Contributors
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto 1.5rem' }}>
              The journalists, reporters, and editors behind ObjectWire&apos;s verified,
              source-cited reporting.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <Link href="/"
                style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '7px 16px', borderRadius: '8px', fontWeight: 600, fontSize: '0.8rem', textDecoration: 'none' }}>
                ObjectWire Home
              </Link>
              <Link href="/editorial-standards"
                style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', padding: '7px 16px', borderRadius: '8px', fontWeight: 600, fontSize: '0.8rem', textDecoration: 'none' }}>
                Editorial Standards
              </Link>
            </div>
          </div>
        </header>

        {/* ── Author Grid ─────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 py-14">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {authors.map((author) => (
              <Link
                key={author.slug}
                href={`/authors/${author.slug}`}
                className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300"
              >
                {/* Card banner */}
                <div className={`h-20 bg-gradient-to-r ${author.gradient} relative`}>
                  {author.featured && (
                    <span className="absolute top-3 right-3 bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      ★ Featured
                    </span>
                  )}
                </div>

                <div className="px-6 pb-6">
                  {/* Avatar */}
                  <div className={`-mt-10 mb-4 w-20 h-20 rounded-full bg-gradient-to-br ${author.avatarBg} p-0.5 shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-2xl font-black text-gray-700">{author.initial}</span>
                    </div>
                  </div>

                  {/* Name & role */}
                  <h2 className="text-xl font-bold text-gray-900 mb-0.5 group-hover:text-blue-700 transition-colors">
                    {author.name}
                  </h2>
                  <p className={`text-sm font-semibold mb-1 ${author.roleColor}`}>
                    {author.role}
                  </p>
                  <p className="text-xs text-gray-400 mb-3">{author.location}</p>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {author.bio}
                  </p>

                  {/* Beats */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {author.beats.map((beat) => (
                      <span key={beat} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        {beat}
                      </span>
                    ))}
                  </div>

                  {/* Recent article */}
                  {author.recentArticle && (
                    <div className={`rounded-lg border p-3 ${author.badgeBg}`}>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Latest Article
                      </p>
                      <p className="text-xs font-semibold text-gray-800 line-clamp-2">
                        {author.recentArticle.title}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-4 text-sm font-semibold text-blue-600 group-hover:underline flex items-center gap-1">
                    View profile →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Editorial note ──────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Our Editorial Commitment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed mb-5">
              Every ObjectWire author operates under the same editorial principles: verified
              sourcing, factual accuracy, clear separation of news and opinion, and full
              transparency about corrections. No sponsored content without explicit disclosure.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/editorial-standards" className="text-blue-600 hover:underline font-medium">
                Read Our Editorial Standards →
              </Link>
              <Link href="/corrections" className="text-blue-600 hover:underline font-medium">
                Corrections Policy →
              </Link>
              <Link href="/about" className="text-blue-600 hover:underline font-medium">
                About ObjectWire →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
