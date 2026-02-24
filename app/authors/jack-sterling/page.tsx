import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jack Sterling — Journalist & Reporter | ObjectWire',
  description:
    'Jack Sterling is a journalist and reporter at ObjectWire, covering breaking news, investigations, politics, and general assignment reporting.',
  alternates: {
    canonical: 'https://www.objectwire.org/authors/jack-sterling',
  },
  openGraph: {
    title: 'Jack Sterling | Journalist at ObjectWire',
    description:
      'Breaking news, investigations, and general assignment reporting at ObjectWire.',
    url: 'https://www.objectwire.org/authors/jack-sterling',
    siteName: 'ObjectWire',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Jack Sterling — Journalist',
    description: 'ObjectWire journalist. Breaking news, investigations, general assignment.',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jack Sterling',
  jobTitle: 'Journalist & Reporter',
  description:
    'Journalist and reporter at ObjectWire covering breaking news, investigations, and general assignment stories.',
  url: 'https://www.objectwire.org/authors/jack-sterling',
  worksFor: {
    '@type': 'Organization',
    name: 'ObjectWire',
    url: 'https://www.objectwire.org',
  },
  knowsAbout: [
    'Breaking News',
    'Investigative Journalism',
    'Politics',
    'Business',
    'General Assignment Reporting',
    'Source Verification',
  ],
};

const articles: { href: string; title: string; date: string; category: string }[] = [
  // Articles will populate here as coverage grows
];

export default function JackSterlingAuthorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

        {/* Top nav */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 py-4">
            <Link href="/authors" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              ← All Authors
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            {/* Banner */}
            <div className="h-32 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-16 w-20 h-20 bg-blue-400 rounded-full blur-2xl" />
                <div className="absolute bottom-2 right-20 w-28 h-28 bg-slate-400 rounded-full blur-3xl" />
              </div>
              <div className="absolute bottom-3 right-6 text-white/20 text-5xl font-black select-none tracking-tighter">
                OBJECTWIRE
              </div>
            </div>

            <div className="relative px-8 pb-8">
              {/* Avatar */}
              <div className="relative -mt-16 mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-600 to-blue-800 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <radialGradient id="jsSkin" cx="50%" cy="40%">
                          <stop offset="0%" stopColor="#F0D5B8" />
                          <stop offset="100%" stopColor="#DEB896" />
                        </radialGradient>
                        <linearGradient id="jsHair" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#4A3728" />
                          <stop offset="100%" stopColor="#2C1F14" />
                        </linearGradient>
                      </defs>

                      {/* Background */}
                      <circle cx="100" cy="100" r="100" fill="#E8EEF4" />

                      {/* Neck */}
                      <ellipse cx="100" cy="148" rx="26" ry="24" fill="url(#jsSkin)" />

                      {/* Head */}
                      <ellipse cx="100" cy="88" rx="44" ry="52" fill="url(#jsSkin)" />

                      {/* Hair - short, professional */}
                      <path d="M 56 70 Q 50 38 100 32 Q 150 38 144 70 Q 140 52 100 48 Q 60 52 56 70" fill="url(#jsHair)" />
                      <ellipse cx="58" cy="68" rx="16" ry="14" fill="url(#jsHair)" />
                      <ellipse cx="142" cy="68" rx="16" ry="14" fill="url(#jsHair)" />

                      {/* Ears */}
                      <ellipse cx="56" cy="88" rx="7" ry="12" fill="url(#jsSkin)" />
                      <ellipse cx="144" cy="88" rx="7" ry="12" fill="url(#jsSkin)" />

                      {/* Eyebrows */}
                      <path d="M 70 72 Q 82 69 90 72" stroke="#2C1F14" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                      <path d="M 110 72 Q 118 69 130 72" stroke="#2C1F14" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                      {/* Eyes */}
                      <ellipse cx="78" cy="82" rx="8" ry="6.5" fill="white" />
                      <ellipse cx="122" cy="82" rx="8" ry="6.5" fill="white" />
                      <circle cx="78" cy="83" r="4" fill="#3D2B1A" />
                      <circle cx="122" cy="83" r="4" fill="#3D2B1A" />
                      <circle cx="79" cy="81" r="1.5" fill="white" opacity="0.8" />
                      <circle cx="123" cy="81" r="1.5" fill="white" opacity="0.8" />

                      {/* Nose */}
                      <path d="M 100 76 L 98 96" stroke="#C09878" strokeWidth="1.5" fill="none" />
                      <path d="M 95 97 Q 100 101 105 97" stroke="#C09878" strokeWidth="2" fill="none" strokeLinecap="round" />

                      {/* Mouth - professional, composed */}
                      <path d="M 85 110 Q 100 117 115 110" stroke="#8B6347" strokeWidth="2" fill="none" strokeLinecap="round" />

                      {/* Professional collar */}
                      <path d="M 58 152 L 74 158 L 86 146 L 100 150 L 114 146 L 126 158 L 142 152 L 142 200 L 58 200 Z" fill="#1E3A5F" />
                      <path d="M 86 146 L 93 158 L 100 150 L 107 158 L 114 146" fill="#2D5382" />
                      {/* Tie */}
                      <path d="M 99 150 L 97 168 L 100 174 L 103 168 L 101 150 Z" fill="#C0392B" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Name & title */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-1">Jack Sterling</h1>
                <p className="text-xl text-blue-700 font-semibold mb-1">
                  Journalist &amp; Reporter
                </p>
                <p className="text-gray-500 text-sm">ObjectWire</p>

                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    📰 Breaking News
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                    🔍 Investigations
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                    🏛️ Politics
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    📋 General Assignment
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">

                  {/* Bio */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">About Jack Sterling</h2>
                    <div className="text-gray-700 space-y-3 leading-relaxed">
                      <p>
                        Jack Sterling is a journalist and reporter at ObjectWire, covering breaking
                        news, investigations, and general assignment stories across business, politics,
                        and public affairs. He brings a commitment to accuracy, source verification,
                        and fair-minded reporting to every story he covers.
                      </p>
                      <p>
                        His work is grounded in the conviction that good journalism delivers verified
                        facts without bias — presenting multiple perspectives and letting readers draw
                        their own conclusions. He approaches every story with thorough preparation and
                        genuine curiosity.
                      </p>
                    </div>
                  </div>

                  {/* Articles */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Articles</h2>
                    {articles.length > 0 ? (
                      <ul className="space-y-4">
                        {articles.map((a) => (
                          <li key={a.href} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                            <Link href={a.href} className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
                              {a.title}
                            </Link>
                            <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                              <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium">{a.category}</span>
                              <span>{a.date}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-sm italic">
                        Coverage will appear here as published.
                      </p>
                    )}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Coverage Areas</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>📰 Breaking news</li>
                      <li>🔍 Investigative reporting</li>
                      <li>🏛️ Politics &amp; public affairs</li>
                      <li>💼 Business &amp; industry</li>
                      <li>📋 General assignment</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Editorial Standards</h3>
                    <p className="text-sm text-gray-700">
                      All ObjectWire reporting follows our{' '}
                      <Link href="/editorial-standards" className="text-blue-600 hover:underline">
                        editorial guidelines
                      </Link>
                      . Jack&apos;s work is independently reported and fact-checked before publication.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">All Authors</h3>
                    <Link href="/authors" className="text-blue-600 hover:underline text-sm">
                      View full ObjectWire team →
                    </Link>
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
