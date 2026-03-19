import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';

const SLUG = '/youtube/logan-paul';

const infoboxRows = [
  { label: 'Full Name', value: 'Logan Alexander Paul' },
  { label: 'Born', value: 'April 1, 1995' },
  { label: 'Origin', value: 'Westlake, Ohio, USA' },
  { label: 'YouTube', value: '@LoganPaul (23M+ subs)' },
  { label: 'Podcast', value: 'Impaulsive' },
  { label: 'WWE', value: 'Active (2026)' },
  { label: 'PRIME', value: 'Co-Founder' },
  { label: 'Pokemon', value: 'Collector & Investor' },
  { label: 'Net Worth', value: '$45M+ (est.)' },
  { label: 'Status', value: 'Active (2026)' },
];

const timeline = [
  { year: '2013', event: 'Starts posting on Vine; rapidly grows to millions of followers.' },
  { year: '2015', event: 'Transitions to YouTube, building one of the fastest-growing channels of the era.' },
  { year: '2017', event: 'Becomes one of the most-watched creators on YouTube with daily vlogs.' },
  { year: '2018', event: 'Launches Impaulsive podcast, one of the top podcast properties in the world.' },
  { year: '2021', event: 'Fights Floyd Mayweather in exhibition boxing match; mainstream crossover moment.' },
  { year: '2021', event: 'Co-founds PRIME Hydration with KSI; becomes a billion-dollar brand.' },
  { year: '2022', event: 'Signs with WWE; competes at major events including WrestleMania.' },
  { year: '2022', event: 'Purchases Pikachu Illustrator (1/1) PSA 9 Pokémon card for $5.275M.' },
  { year: '2024', event: 'Featured in Netflix\'s Jake Paul vs. Mike Tyson event; global audience.' },
  { year: '2025', event: 'Sells 1/1 Pikachu Illustrator card at auction for $16M — record-breaking.' },
  { year: '2026', event: 'Continues Impaulsive, PRIME growth, WWE career, and content creation.' },
];

const ventures = [
  {
    name: 'PRIME Hydration',
    accent: 'border-blue-500',
    dot: 'bg-blue-500',
    desc: 'Co-founded with KSI in 2022. PRIME became one of the fastest-growing sports beverage brands in history, generating over $1.2B in revenue within its first two years.',
    link: { href: '/youtube/sidemen/ksi', label: '→ KSI profile: co-founder & PRIME partner' },
  },
  {
    name: 'Impaulsive Podcast',
    accent: 'border-red-500',
    dot: 'bg-red-500',
    desc: 'Launched in 2018, Impaulsive is one of the most listened-to podcasts globally. Features celebrity guests, business discussions, and unfiltered conversation.',
  },
  {
    name: 'WWE Career',
    accent: 'border-yellow-500',
    dot: 'bg-yellow-500',
    desc: 'Signed with WWE in 2022. Has competed at WrestleMania and multiple premium live events, proving himself as a legitimate draw in professional wrestling.',
  },
  {
    name: 'Pokémon Collecting',
    accent: 'border-purple-500',
    dot: 'bg-purple-500',
    desc: 'A well-known Pokémon card collector and investor. Purchased the 1/1 Pikachu Illustrator PSA 9 for $5.275M in 2022, then sold it for $16M in 2025 — a record auction price.',
  },
];

export const metadata: Metadata = {
  title: 'Logan Paul — YouTuber, WWE Star & Entrepreneur | ObjectWire',
  description:
    'Full profile of Logan Paul: YouTube career, Impaulsive podcast, PRIME Hydration, WWE appearances, and his record-breaking Pokémon card collection. ObjectWire coverage hub.',
  keywords: [
    'Logan Paul',
    'Logan Paul YouTube',
    'Impaulsive podcast',
    'PRIME Hydration',
    'Logan Paul WWE',
    'Logan Paul Pokemon card',
    'Pikachu Illustrator',
    'Logan Paul net worth',
    'Logan Paul influencer',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/logan-paul',
  },
  openGraph: {
    title: 'Logan Paul — YouTuber, WWE Star & Entrepreneur',
    description:
      'Complete profile of Logan Paul: from Vine star to WWE champion, PRIME co-founder, and record-breaking Pokémon card investor.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/logan-paul',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'YouTube',
    tags: ['Logan Paul', 'YouTube', 'WWE', 'PRIME', 'Impaulsive', 'Pokemon'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logan Paul — YouTuber, WWE Star & Entrepreneur | ObjectWire',
    description:
      'Full profile of Logan Paul: YouTube, PRIME Hydration, WWE, Impaulsive, and $16M Pikachu card.',
  },
};

export default function LoganPaulPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Logan Paul — YouTuber, WWE Star & Entrepreneur"
        description="Full profile of Logan Paul: from Vine star to WWE champion, PRIME co-founder, Impaulsive host, and record-breaking Pokémon card investor."
        author="ObjectWire Editorial"
        publishedTime="2026-02-18T10:00:00Z"
        modifiedTime="2026-02-18T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="YouTube"
        keywords={['Logan Paul', 'PRIME', 'Impaulsive', 'WWE', 'Pokemon', 'Pikachu Illustrator']}
      />

      <div className="min-h-screen bg-[#faf9f6]">

        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'YouTube', item: '/youtube' },
                { name: 'Logan Paul', item: SLUG },
              ]}
            />
          </div>
        </div>

        {/* Hero Banner */}
        <header style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #3730a3 40%, #be123c 100%)' }}>
          <div className="max-w-5xl mx-auto px-4 py-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Thumbnail */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden border-4 shrink-0" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                <Image
                  src="/youtube/logan-paul.PNG"
                  alt="Logan Paul"
                  fill
                  className="object-cover object-top"
                  sizes="144px"
                  priority
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.7rem', fontWeight: 800, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    YouTube
                  </span>
                  <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.7rem', fontWeight: 600, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    WWE · PRIME · Impaulsive
                  </span>
                </div>

                <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.5rem' }}>
                  Logan Paul
                  <span style={{ display: 'block', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: 400, color: 'rgba(255,255,255,0.8)', marginTop: '0.4rem' }}>
                    YouTuber · WWE Star · Co-Founder of PRIME · Impaulsive Host
                  </span>
                </h1>

                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '600px', marginBottom: '1.2rem' }}>
                  One of the most recognizable names on the internet. Logan Paul built an empire
                  spanning YouTube, podcasting, professional wrestling, beverage brands, and
                  record-breaking Pokémon card investments.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <a href="https://www.youtube.com/channel/UCG8rbF3g2AMX70yOd8vqIZg" target="_blank" rel="noopener noreferrer"
                    style={{ background: '#dc2626', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    📺 YouTube
                  </a>
                  <a href="https://www.instagram.com/loganpaul" target="_blank" rel="noopener noreferrer"
                    style={{ background: '#db2777', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    📸 Instagram
                  </a>
                  <a href="https://twitter.com/LoganPaul" target="_blank" rel="noopener noreferrer"
                    style={{ background: '#0f172a', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    𝕏 Twitter / X
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Layout */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* ═══ ARTICLE BODY ═══ */}
            <article className="lg:col-span-2 space-y-12">

              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    <strong>Logan Alexander Paul</strong> (born April 1, 1995) is an American content creator,
                    entertainer, entrepreneur, and professional wrestler. He first gained prominence on Vine
                    before transitioning to YouTube, where he built one of the platform&apos;s most-watched
                    channels with over <strong>23 million subscribers</strong>.
                  </p>
                  <p>
                    Paul is the co-founder of <strong>PRIME Hydration</strong> alongside KSI, one of the
                    fastest-growing sports beverage brands in history. He hosts the <strong>Impaulsive</strong>{' '}
                    podcast, a top-ranked show known for celebrity interviews and unfiltered conversation.
                    He is also an active WWE competitor, having headlined premium live events including
                    WrestleMania.
                  </p>
                  <p>
                    Paul is a prominent Pokémon card collector. In 2022 he purchased the ultra-rare
                    <strong> 1/1 Pikachu Illustrator PSA 9</strong> for $5.275 million. In 2025, he sold
                    the card at auction for <strong>$16 million</strong> — setting a new world record for
                    the most expensive Pokémon card ever sold.
                  </p>
                </div>
              </section>

              {/* Career & Ventures */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5 border-b border-gray-200 pb-2">
                  Career &amp; Ventures
                </h2>
                <div className="space-y-4">
                  {ventures.map((v) => (
                    <div key={v.name} className={`border-l-4 ${v.accent} pl-5 py-4 bg-white rounded-r-xl shadow-sm border border-l-0 border-gray-100`}>
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-2 h-2 rounded-full ${v.dot}`} />
                        <h3 className="font-bold text-gray-900">{v.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                      {v.link && (
                        <Link href={v.link.href} className="inline-block mt-2 text-blue-600 hover:underline text-xs font-semibold">
                          {v.link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Pokemon Record */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Record-Breaking Pokémon Card Sale
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Logan Paul&apos;s most iconic off-camera moment came in 2022 when he wore the{' '}
                    <strong>1/1 Pikachu Illustrator PSA 9</strong> around his neck at WrestleMania —
                    a card widely considered the holy grail of Pokémon collecting. He had acquired
                    it for $5.275 million, setting a world record at the time.
                  </p>
                  <p>
                    In 2025, Paul sold the card at a high-profile auction for{' '}
                    <strong>$16 million</strong>, nearly tripling his investment and cementing the
                    Pikachu Illustrator&apos;s status as the most valuable Pokémon card in existence.
                    The sale attracted global media coverage and solidified Paul&apos;s reputation
                    as a serious collectibles investor.
                  </p>
                </div>

                <div className="mt-5 bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Pikachu Illustrator — Key Facts</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { label: 'Card', value: 'Pikachu Illustrator (1/1)' },
                      { label: 'Grade', value: 'PSA 9 (Mint)' },
                      { label: 'Purchase Price', value: '$5.275M (2022)' },
                      { label: 'Sale Price', value: '$16M (2025)' },
                      { label: 'Return', value: '~3× in 3 years' },
                      { label: 'Record', value: 'Most expensive Pokémon card ever' },
                    ].map((f) => (
                      <div key={f.label} className="flex gap-2 text-sm">
                        <span className="text-gray-500 w-32 shrink-0">{f.label}:</span>
                        <span className="font-semibold text-gray-900">{f.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-yellow-200">
                    <Link href="/influencer/news/logan-paul-sells-pokemon-card-16-million" className="text-yellow-700 hover:underline text-sm font-semibold">
                      → Read full article: Logan Paul Sells Pikachu Illustrator for $16M
                    </Link>
                  </div>
                </div>
              </section>

              {/* Impaulsive */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Impaulsive Podcast
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Launched in 2018, <strong>Impaulsive</strong> quickly became one of the world&apos;s
                    most-listened-to podcasts. Paul hosts alongside co-hosts Mike Majlak and George
                    Janko (and formerly SteveWillDoIt), featuring a mix of celebrity interviews,
                    entrepreneurship discussions, and personal revelations.
                  </p>
                  <p>
                    The show has hosted figures ranging from Floyd Mayweather and Dana White to
                    politicians and tech founders, reflecting Paul&apos;s growing influence beyond
                    traditional YouTube demographics.
                  </p>
                </div>
                <div className="mt-4 border border-gray-200 rounded-xl p-4 bg-white">
                  <Link href="/influencer/steve-will-do-it-kicked-of-logan-paul-s-podcast-making-an-official-return-to-youtube" className="text-blue-600 hover:underline text-sm font-semibold">
                    → SteveWillDoIt Removed From Impaulsive — Official Return to YouTube
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">Related: ObjectWire coverage of the Impaulsive shakeup</p>
                </div>
              </section>

              {/* WWE */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  WWE Career
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Logan Paul signed with WWE in 2022 and quickly proved himself as more than a
                    celebrity guest. He competed at WrestleMania 38 alongside The Miz, and has since
                    challenged for and won championships. Paul brings theatricality and mainstream
                    visibility to WWE, drawing audiences unfamiliar with traditional wrestling programming.
                  </p>
                  <p>
                    His WWE run is considered one of the most successful celebrity-to-wrestler
                    transitions in the company&apos;s history, with matches receiving critical praise
                    for their quality relative to his limited in-ring experience.
                  </p>
                </div>
              </section>

            </article>

            {/* ═══ SIDEBAR ═══ */}
            <aside className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">

                {/* Infobox */}
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #3730a3, #be123c)', padding: '0' }}>
                    <div className="relative w-full h-44">
                      <Image
                        src="/youtube/logan-paul.PNG"
                        alt="Logan Paul"
                        fill
                        className="object-cover object-top"
                        sizes="300px"
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(30,27,75,0.85) 0%, transparent 50%)' }} />
                      <div style={{ position: 'absolute', bottom: '10px', left: '14px', right: '14px' }}>
                        <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>Logan Paul</h2>
                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.7rem', margin: '2px 0 0' }}>@LoganPaul · 23M+ Subscribers</p>
                      </div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-100 text-sm">
                    {infoboxRows.map((row) => (
                      <div key={row.label} className="flex px-4 py-2.5 gap-2">
                        <span className="text-gray-500 w-24 shrink-0 text-xs">{row.label}</span>
                        <span className="font-medium text-gray-800 text-xs">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Latest News */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Latest Coverage</h3>
                  <div className="space-y-3">
                    <Link href="/influencer/news/logan-paul-sells-pokemon-card-16-million" className="block group">
                      <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-lg hover:shadow-sm transition-shadow">
                        <p className="font-semibold text-gray-900 text-xs group-hover:text-yellow-700">Logan Paul Sells 1/1 Pikachu Illustrator for $16M</p>
                        <p className="text-xs text-gray-500 mt-0.5">Record-breaking Pokémon auction</p>
                      </div>
                    </Link>
                    <Link href="/influencer/steve-will-do-it-kicked-of-logan-paul-s-podcast-making-an-official-return-to-youtube" className="block group">
                      <div className="p-3 bg-red-50 border border-red-100 rounded-lg hover:shadow-sm transition-shadow">
                        <p className="font-semibold text-gray-900 text-xs group-hover:text-red-700">SteveWillDoIt Removed from Impaulsive</p>
                        <p className="text-xs text-gray-500 mt-0.5">Podcast shakeup & YouTube return</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Career Timeline (condensed) */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Career Timeline</h3>
                  <div className="space-y-3">
                    {timeline.map((t) => (
                      <div key={t.year + t.event.slice(0, 10)} className="flex gap-3 text-xs">
                        <span className="text-indigo-600 font-bold w-10 shrink-0">{t.year}</span>
                        <span className="text-gray-600 leading-relaxed">{t.event}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Coverage */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Related Coverage</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/youtube" className="text-blue-600 hover:underline">→ YouTube Hub</Link></li>
                    <li><Link href="/influencer" className="text-blue-600 hover:underline">→ Influencer Coverage</Link></li>
                    <li><Link href="/entertainment" className="text-blue-600 hover:underline">→ Entertainment News</Link></li>
                    <li><Link href="/news" className="text-blue-600 hover:underline">→ Latest News</Link></li>
                  </ul>
                </div>

                {/* Meta */}
                <div className="text-xs text-gray-400 space-y-1 px-1">
                  <p>Published: February 18, 2026</p>
                  <p>Author: ObjectWire Editorial</p>
                  <p>Category: YouTube · Influencer</p>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </div>
    </SEOWrapper>
  );
}
