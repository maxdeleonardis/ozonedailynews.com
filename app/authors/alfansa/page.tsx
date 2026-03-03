import type { Metadata } from 'next';
import Link from 'next/link';
import { AuthorSchema } from '@/components/AuthorSchema';
import AuthorArticles from '@/components/AuthorArticles';
import { getEntriesByAuthor } from '@/lib/content-registry';

const AUTHOR_SLUG = 'alfansa';
const authorArticles = getEntriesByAuthor(AUTHOR_SLUG);

// ─── Google News optimised author profile ──────────────────────────────────
export const metadata: Metadata = {
  title: 'Alfansa — Finance & Markets Reporter | ObjectWire',
  description:
    `Alfansa is a Finance & Markets Reporter and Anime & Gaming Editor at ObjectWire. ${authorArticles.length} published articles covering markets, payments, fintech, My Hero Academia, and gaming culture.`,
  alternates: {
    canonical: 'https://www.objectwire.org/authors/alfansa',
  },
  openGraph: {
    title: 'Alfansa | Finance & Markets Reporter at ObjectWire',
    description:
      'Finance & Markets Reporter and Anime & Gaming Editor at ObjectWire. Covering payments, fintech, markets, MHA, and gaming culture.',
    url: 'https://www.objectwire.org/authors/alfansa',
    siteName: 'ObjectWire',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Alfansa — Finance & Markets Reporter',
    description: 'ObjectWire Finance & Markets Reporter and Anime & Gaming Editor. Covering fintech, payments, MHA, and gaming.',
  },
};

const extraArticles = [
  {
    href: '/copyright/news/mastercard-ai-disruption-selloff',
    title: 'Mastercard Shares Drop Below $500 as AI Disruption Note and Tariff Concerns Hit Payments Sector',
    date: 'February 24, 2026',
    category: 'Finance & Markets',
  },
  {
    href: '/video-games/mha',
    title: 'My Hero Academia Hub — Final Season, Vigilantes & Ultra Rumble',
    date: 'February 24, 2026',
    category: 'Anime & Gaming',
  },
  {
    href: '/video-games/mha/ultra-rumble/season-15',
    title: 'My Hero Ultra Rumble Season 15 — Full Breakdown',
    date: 'February 2026',
    category: 'Gaming',
  },
  {
    href: '/video-games/mha/ultra-rumble/season-15/strike-overhaul',
    title: 'Overhaul Blighted Precipice Quick Skill Guide — Season 15',
    date: 'February 2026',
    category: 'Gaming Guide',
  },
  {
    href: '/video-games/mha/alls-justice',
    title: "All's Justice Mode — Complete Guide",
    date: 'January 2026',
    category: 'Gaming Guide',
  },
];

export default function AlfansaAuthorPage() {
  return (
    <>
      {/* Comprehensive Person JSON-LD for E-E-A-T */}
      <AuthorSchema
        name="Alfansa"
        jobTitle="Finance & Markets Reporter"
        description="Finance & Markets Reporter and Anime & Gaming Editor at ObjectWire, covering payments, fintech, markets, My Hero Academia, and gaming culture."
        url="https://www.objectwire.org/authors/alfansa"
        knowsAbout={[
          'Finance',
          'Markets',
          'Fintech',
          'Payments',
          'Stock Market',
          'AI Disruption',
          'My Hero Academia',
          'Anime',
          'Gaming',
          'Battle Royale Games',
          'My Hero Ultra Rumble',
          'Seasonal Anime',
        ]}
        location={{ city: 'Austin', region: 'Texas' }}
        articleCount={authorArticles.length + extraArticles.length}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Top nav */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 py-4">
            <Link
              href="/video-games"
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              ← Video Games & Anime
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Anime-themed banner */}
            <div className="h-32 bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600 relative overflow-hidden">
              {/* Decorative hero silhouettes */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-8 w-16 h-16 bg-yellow-300 rounded-full blur-xl" />
                <div className="absolute bottom-2 right-12 w-24 h-24 bg-blue-300 rounded-full blur-2xl" />
                <div className="absolute top-2 right-32 w-10 h-10 bg-red-300 rounded-full blur-lg" />
              </div>
              <div className="absolute bottom-3 right-6 text-white/30 text-6xl font-black select-none">
                PLUS ULTRA
              </div>
            </div>

            <div className="relative px-8 pb-8">
              {/* Avatar */}
              <div className="relative -mt-16 mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                    {/* Anime-style avatar SVG */}
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <radialGradient id="alfSkin" cx="50%" cy="40%">
                          <stop offset="0%" stopColor="#F5C5A3" />
                          <stop offset="100%" stopColor="#E8A882" />
                        </radialGradient>
                        <radialGradient id="alfHair" cx="50%" cy="20%">
                          <stop offset="0%" stopColor="#2D1B00" />
                          <stop offset="100%" stopColor="#1A0F00" />
                        </radialGradient>
                      </defs>

                      {/* Background */}
                      <circle cx="100" cy="100" r="100" fill="#D4EDDA" />

                      {/* Hair — long dark */}
                      <ellipse cx="100" cy="72" rx="54" ry="58" fill="url(#alfHair)" />
                      {/* Hair sides */}
                      <path d="M 46 80 Q 30 120 38 155 Q 54 165 60 140 Q 56 110 58 85 Z" fill="url(#alfHair)" />
                      <path d="M 154 80 Q 170 120 162 155 Q 146 165 140 140 Q 144 110 142 85 Z" fill="url(#alfHair)" />
                      {/* Front hair strands */}
                      <path d="M 72 52 Q 78 35 88 42 Q 82 50 80 58 Z" fill="url(#alfHair)" />
                      <path d="M 100 48 Q 104 30 112 36 Q 108 46 106 54 Z" fill="url(#alfHair)" />

                      {/* Face */}
                      <ellipse cx="100" cy="105" rx="42" ry="48" fill="url(#alfSkin)" />

                      {/* Eyes — large anime style */}
                      <ellipse cx="82" cy="96" rx="10" ry="12" fill="#1A3A5C" />
                      <ellipse cx="118" cy="96" rx="10" ry="12" fill="#1A3A5C" />
                      {/* Eye shine */}
                      <circle cx="85" cy="91" r="3" fill="white" />
                      <circle cx="121" cy="91" r="3" fill="white" />
                      <circle cx="79" cy="99" r="2" fill="white" opacity="0.6" />
                      <circle cx="115" cy="99" r="2" fill="white" opacity="0.6" />
                      {/* Eyelashes */}
                      <path d="M 72 90 Q 76 84 82 84 Q 94 84 92 90" stroke="#1A0F00" strokeWidth="2" fill="none" strokeLinecap="round" />
                      <path d="M 108 90 Q 106 84 118 84 Q 124 84 128 90" stroke="#1A0F00" strokeWidth="2" fill="none" strokeLinecap="round" />

                      {/* Nose */}
                      <path d="M 97 112 Q 100 116 103 112" stroke="#C4896A" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                      {/* Smile */}
                      <path d="M 88 122 Q 100 130 112 122" stroke="#C4896A" strokeWidth="2" fill="none" strokeLinecap="round" />

                      {/* Blush */}
                      <ellipse cx="76" cy="116" rx="9" ry="5" fill="#F4A3A3" opacity="0.5" />
                      <ellipse cx="124" cy="116" rx="9" ry="5" fill="#F4A3A3" opacity="0.5" />

                      {/* Shirt collar */}
                      <path d="M 65 153 Q 80 148 100 152 Q 120 148 135 153 L 140 180 Q 100 170 60 180 Z" fill="#2D6A4F" />
                      {/* Collar V */}
                      <path d="M 88 152 L 100 162 L 112 152" stroke="white" strokeWidth="1.5" fill="none" />

                      {/* Ears */}
                      <ellipse cx="58" cy="105" rx="6" ry="9" fill="url(#alfSkin)" />
                      <ellipse cx="142" cy="105" rx="6" ry="9" fill="url(#alfSkin)" />

                      {/* Small star accessory in hair */}
                      <polygon points="62,62 64,57 66,62 71,62 67,65 68,70 64,67 60,70 61,65 57,62" fill="#FFD700" opacity="0.9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Name & title */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-1">Alfansa</h1>
                <p className="text-xl text-green-600 font-semibold mb-1">
                  Finance &amp; Markets Reporter · Anime &amp; Gaming Editor
                </p>
                <p className="text-gray-500 text-sm">ObjectWire · Austin, TX</p>

                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                    💰 Finance &amp; Markets
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    🏦 Fintech &amp; Payments
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    🦸 My Hero Academia
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    🎮 Gaming &amp; Anime
                  </span>
                </div>
              </div>

              {/* Bio */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">About Alfansa</h2>
                    <div className="text-gray-700 space-y-3 leading-relaxed">
                      <p>
                        Alfansa is a Finance &amp; Markets Reporter and Anime &amp; Gaming Editor at
                        ObjectWire. Her financial coverage focuses on payments infrastructure,
                        fintech disruption, market events, and the intersection of emerging technology
                        with capital markets — bringing the same analytical depth to Wall Street that
                        she brings to the gaming world.
                      </p>
                      <p>
                        On the finance beat, Alfansa covers breaking market events, sector selloffs,
                        and structural shifts in industries being reshaped by AI and digital finance.
                        Her reporting on the February 2026 payments sector selloff — driven by an AI
                        disruption note and tariff uncertainty — drew significant readership across
                        ObjectWire&apos;s finance audience.
                      </p>
                      <p>
                        Alfansa also leads ObjectWire&apos;s Anime &amp; Gaming coverage, heading the
                        My Hero Academia franchise desk across its manga/anime universe and video game
                        catalogue. She covers My Hero Ultra Rumble season by season and contributes
                        broader seasonal anime commentary, approaching every beat with the conviction
                        that it deserves rigorous editorial standards.
                      </p>
                    </div>
                  </div>

                  {/* Recent articles — auto-populated from registry */}
                  <AuthorArticles authorSlug={AUTHOR_SLUG} extraArticles={extraArticles} />
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Specialisations</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>💰 Finance &amp; capital markets</li>
                      <li>🏦 Fintech &amp; payments infrastructure</li>
                      <li>🤖 AI disruption in financial services</li>
                      <li>🦸 My Hero Academia (all media)</li>
                      <li>🎮 My Hero Ultra Rumble</li>
                      <li>📺 Seasonal anime coverage</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">MHA Coverage</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/video-games/mha"
                          className="text-green-600 hover:underline"
                        >
                          MHA Knowledge Hub →
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/video-games/mha/ultra-rumble"
                          className="text-green-600 hover:underline"
                        >
                          Ultra Rumble Hub →
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/video-games/mha/ultra-rumble/season-15"
                          className="text-green-600 hover:underline"
                        >
                          Season 15 Breakdown →
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/video-games/mha/alls-justice"
                          className="text-green-600 hover:underline"
                        >
                          All&apos;s Justice Guide →
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Editorial Standards</h3>
                    <p className="text-sm text-gray-700">
                      All ObjectWire coverage follows our{' '}
                      <Link
                        href="/editorial-standards"
                        className="text-green-600 hover:underline"
                      >
                        editorial guidelines
                      </Link>
                      . Game coverage is independent — no sponsored content without clear
                      disclosure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
