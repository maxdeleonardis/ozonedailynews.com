import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';

const SLUG = '/youtube/chicos-toxicos/cristiana-love';

const infoboxRows = [
  { label: 'Known As', value: 'Cristiana Love' },
  { label: 'Instagram', value: '@cristiana.love' },
  { label: 'Role', value: 'Content Creator / Personality' },
  { label: 'Associated', value: 'Chicos Toxicos' },
  { label: 'Content', value: 'TikTok, Instagram Reels' },
  { label: 'Language', value: 'Spanish' },
  { label: 'Market', value: 'Latin America & USA' },
  { label: 'Status', value: 'Active (2026)' },
];

export const metadata: Metadata = {
  title: 'Cristiana Love — Chicos Toxicos Personality | ObjectWire',
  description:
    'Cristiana Love is a prominent figure within the Chicos Toxicos community, known for her humorous TikTok videos, fan engagement, and charismatic presence in the Latin entertainment space.',
  keywords: [
    'Cristiana Love',
    'cristiana.love',
    'Chicos Toxicos',
    'Latin influencer',
    'TikTok creator',
    'Instagram personality',
    'Latin entertainment',
    'Felipito96',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/chicos-toxicos/cristiana-love',
  },
  openGraph: {
    title: 'Cristiana Love — Chicos Toxicos Personality',
    description:
      'Full profile of Cristiana Love, prominent figure in the Chicos Toxicos community. TikTok videos, fan interactions, and her role in the Latin content creator space.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/chicos-toxicos/cristiana-love',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'YouTube',
    tags: ['Cristiana Love', 'Chicos Toxicos', 'Latin Entertainment', 'TikTok'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cristiana Love — Chicos Toxicos Personality | ObjectWire',
    description:
      'Profile of Cristiana Love: her role in Chicos Toxicos, TikTok presence, fan interactions, and content style.',
  },
};

export default function CristianaLovePage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Cristiana Love — Chicos Toxicos Personality"
        description="Cristiana Love is a prominent figure within the Chicos Toxicos community, known for her humorous TikTok videos and fan engagement."
        author="ObjectWire Editorial"
        publishedTime="2026-02-18T10:00:00Z"
        modifiedTime="2026-02-18T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="YouTube"
        keywords={['Cristiana Love', 'Chicos Toxicos', 'TikTok', 'Latin Entertainment']}
      />

      <div className="min-h-screen bg-[#faf9f6]">

        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'YouTube', item: '/youtube' },
                { name: 'Chicos Toxicos', item: '/youtube/chicos-toxicos' },
                { name: 'Cristiana Love', item: SLUG },
              ]}
            />
          </div>
        </div>

        {/* Hero Banner */}
        <header style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777, #f97316)' }}>
          <div className="max-w-5xl mx-auto px-4 py-14">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.7rem', fontWeight: 800, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                CHICOS TOXICOS
              </span>
              <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.7rem', fontWeight: 600, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                LATIN ENTERTAINMENT
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Thumbnail */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 shrink-0" style={{ borderColor: 'rgba(255,255,255,0.5)' }}>
                <Image
                  src="/youtube/chicos-toxicos/crisitana.love.PNG"
                  alt="Cristiana Love"
                  fill
                  className="object-cover object-top"
                  sizes="128px"
                  priority
                />
              </div>

              <div>
                <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.5rem' }}>
                  Cristiana Love
                  <span style={{ display: 'block', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: 400, color: 'rgba(255,255,255,0.8)', marginTop: '0.4rem' }}>
                    Content Creator · Chicos Toxicos Personality
                  </span>
                </h1>

                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '580px', marginBottom: '1.2rem' }}>
                  A prominent figure in the <strong style={{ color: '#fff' }}>Chicos Toxicos</strong> universe —
                  known for charismatic fan interactions, humorous TikTok content, and representing the
                  chaotic fun that defines the group&apos;s culture.
                </p>

                {/* Quick links */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <a
                    href="https://www.instagram.com/cristiana.love"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: '#db2777', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    📸 Instagram
                  </a>
                  <a
                    href="/youtube/chicos-toxicos"
                    style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(255,255,255,0.3)' }}
                  >
                    ← Chicos Toxicos
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Overview
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Cristiana Love is a content creator and social media personality best known for her
                    prominent role within the <strong>Chicos Toxicos</strong> community. She has cultivated
                    a dedicated following across Instagram and TikTok, where her authentic personality
                    and comedic approach to content have made her a fan favorite in the Latin
                    entertainment space.
                  </p>
                  <p>
                    Her association with Chicos Toxicos — the Latin American entertainment group
                    featuring Felipe (Felipito96), Diego (Diegovnoboa), and Brandom (DonBrandom) —
                    has amplified her visibility and connected her with millions of fans across the
                    Spanish-speaking world. She embodies the chaotic, fun energy that defines the
                    Chicos Toxicos brand.
                  </p>
                </div>
              </section>

              {/* Content & Style */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Content &amp; Style
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Cristiana&apos;s content primarily revolves around the Chicos Toxicos culture —
                    capturing the spontaneous, humorous moments that emerge from the group&apos;s world.
                    Her TikTok videos frequently showcase relatable reactions, comedic interactions,
                    and behind-the-scenes glimpses into the Latin creator community.
                  </p>
                  <p>
                    On Instagram, she maintains an active presence through Reels and stories that
                    engage directly with her fanbase. Her approachable, candid style resonates
                    strongly with younger Latin audiences who value authenticity over polished,
                    corporate content.
                  </p>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      accent: 'border-purple-500',
                      title: 'TikTok Videos',
                      desc: 'Humorous clips capturing the chaos and fun of the Chicos Toxicos universe, often going viral within the Latin community.',
                    },
                    {
                      accent: 'border-pink-500',
                      title: 'Fan Engagement',
                      desc: 'Known for actively responding to fans and creating content that directly acknowledges her community.',
                    },
                    {
                      accent: 'border-orange-500',
                      title: 'Instagram Reels',
                      desc: 'Short-form lifestyle and entertainment content that showcases her personality beyond just the Chicos Toxicos context.',
                    },
                    {
                      accent: 'border-rose-500',
                      title: 'Collaborative Content',
                      desc: 'Regular appearances and features in Chicos Toxicos content, cross-pollinating audiences and expanding reach.',
                    },
                  ].map((c) => (
                    <div key={c.title} className={`border-l-4 ${c.accent} pl-4 py-3 bg-white rounded-r-lg shadow-sm border border-l-0 border-gray-100`}>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">{c.title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Chicos Toxicos Connection */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Connection to Chicos Toxicos
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Cristiana Love&apos;s connection to Chicos Toxicos is central to her public identity.
                    She frequently appears in content adjacent to the group&apos;s weekly{' '}
                    <strong>Toxico Thursdays</strong> series and is considered part of the broader
                    Chicos Toxicos extended universe — a circle of personalities who share the group&apos;s
                    comedic sensibility and audience.
                  </p>
                  <p>
                    Her presence adds a distinct dimension to the Chicos Toxicos community: while
                    the core trio handles the main YouTube channel, personalities like Cristiana
                    contribute to the ecosystem through their own platforms, creating a network
                    of interlocking content that keeps fans engaged throughout the week — not just
                    on Thursdays.
                  </p>
                </div>

                <div className="mt-5 bg-purple-50 border border-purple-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Related Profiles</h3>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      { name: 'Felipe (Felipito96)', href: 'https://www.youtube.com/@felipito967', color: 'border-blue-400' },
                      { name: 'Diego (Diegovnoboa)', href: 'https://www.youtube.com/@Diegovnoboa', color: 'border-teal-400' },
                      { name: 'Brandom (DonBrandom)', href: 'https://www.instagram.com/donbrandom', color: 'border-green-400' },
                    ].map((p) => (
                      <a
                        key={p.name}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`border-l-4 ${p.color} pl-3 py-2 bg-white rounded-r-lg text-sm font-semibold text-gray-800 hover:shadow-md transition-shadow block`}
                      >
                        {p.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-3">
                    <Link href="/youtube/chicos-toxicos" className="text-purple-600 hover:underline text-sm font-medium">
                      → View full Chicos Toxicos profile
                    </Link>
                  </div>
                </div>
              </section>

              {/* Instagram Embed */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Instagram Profile
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Follow Cristiana Love on Instagram for her latest content, Reels, and behind-the-scenes moments.
                </p>
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <iframe
                    src="https://www.instagram.com/cristiana.love/embed"
                    width="100%"
                    height="480"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                    title="Cristiana Love Instagram Profile"
                    className="block"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  Content embedded from{' '}
                  <a href="https://www.instagram.com/cristiana.love" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
                    instagram.com/cristiana.love
                  </a>
                </p>
              </section>

            </article>

            {/* ═══ SIDEBAR ═══ */}
            <aside className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">

                {/* Infobox */}
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  {/* Profile photo header */}
                  <div style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777, #f97316)', padding: '16px', textAlign: 'center' }}>
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2" style={{ borderColor: 'rgba(255,255,255,0.5)' }}>
                      <Image
                        src="/youtube/chicos-toxicos/crisitana.love.PNG"
                        alt="Cristiana Love profile photo"
                        fill
                        className="object-cover object-top"
                        sizes="80px"
                      />
                    </div>
                    <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', margin: 0 }}>Cristiana Love</h2>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.7rem', margin: '2px 0 0' }}>@cristiana.love</p>
                  </div>
                  <div className="divide-y divide-gray-100 text-sm">
                    {infoboxRows.map((row) => (
                      <div key={row.label} className="flex px-4 py-2.5 gap-2">
                        <span className="text-gray-500 w-24 shrink-0 text-xs">{row.label}</span>
                        <span className="font-medium text-gray-800 text-xs">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-100">
                    <a
                      href="https://www.instagram.com/cristiana.love"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center text-xs font-semibold py-2 rounded-lg bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors"
                    >
                      📸 Follow on Instagram
                    </a>
                  </div>
                </div>

                {/* Platforms */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Platforms</h3>
                  <div className="space-y-2">
                    {[
                      { platform: 'Instagram', handle: '@cristiana.love', href: 'https://www.instagram.com/cristiana.love', color: 'bg-pink-50 text-pink-700 border-pink-200' },
                      { platform: 'TikTok', handle: 'Chicos Toxicos Content', href: 'https://www.tiktok.com', color: 'bg-gray-50 text-gray-700 border-gray-200' },
                    ].map((p) => (
                      <a
                        key={p.platform}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between px-3 py-2 rounded-lg border text-xs transition-opacity hover:opacity-80 ${p.color}`}
                      >
                        <span className="font-semibold">{p.platform}</span>
                        <span className="opacity-70">{p.handle}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Content Focus */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Content Focus</h3>
                  <div className="space-y-2">
                    {[
                      { dot: 'bg-purple-500', label: 'TikTok Humor' },
                      { dot: 'bg-pink-500', label: 'Fan Interactions' },
                      { dot: 'bg-orange-500', label: 'Instagram Reels' },
                      { dot: 'bg-rose-500', label: 'Chicos Toxicos Culture' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2 text-sm">
                        <div className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`} />
                        <span className="text-gray-700">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Coverage */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Related Coverage</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/youtube/chicos-toxicos" className="text-purple-600 hover:underline">→ Chicos Toxicos Group</Link></li>
                    <li><Link href="/youtube" className="text-purple-600 hover:underline">→ YouTube Hub</Link></li>
                    <li><Link href="/influencer" className="text-purple-600 hover:underline">→ Influencer Coverage</Link></li>
                    <li><Link href="/entertainment" className="text-purple-600 hover:underline">→ Entertainment News</Link></li>
                  </ul>
                </div>

                {/* Meta */}
                <div className="text-xs text-gray-400 space-y-1 px-1">
                  <p>Published: February 18, 2026</p>
                  <p>Author: ObjectWire Editorial</p>
                  <p>Category: YouTube · Latin Entertainment</p>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </div>
    </SEOWrapper>
  );
}
