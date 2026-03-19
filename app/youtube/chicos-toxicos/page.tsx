import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';

const SLUG = '/youtube/chicos-toxicos';

const members = [
  {
    handle: 'Felipito96',
    name: 'Felipe',
    image: '/youtube/chicos-toxicos/filepito.PNG',
    color: 'border-blue-600',
    labelColor: 'text-blue-600',
    links: [
      { label: 'YouTube', href: 'https://www.youtube.com/@felipito967', style: 'bg-red-100 text-red-700 hover:bg-red-200' },
      { label: 'Instagram', href: 'https://www.instagram.com/felipit096/?hl=en', style: 'bg-pink-100 text-pink-700 hover:bg-pink-200' },
      { label: 'TikTok', href: 'https://www.tiktok.com/@felipito96', style: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
    ],
    snapchat: 'ITSSS.FELIPE',
    bio: 'Felipe is one of the core members of Chicos Toxicos, bringing energy and humor to every video. Known for his engaging personality and willingness to take on any challenge, Felipe has built a strong following across multiple platforms with his authentic approach to content creation.',
  },
  {
    handle: 'Diegovnoboa',
    name: 'Diego',
    image: '/youtube/chicos-toxicos/Diego.PNG',
    color: 'border-teal-600',
    labelColor: 'text-teal-600',
    links: [
      { label: 'YouTube', href: 'https://www.youtube.com/@Diegovnoboa', style: 'bg-red-100 text-red-700 hover:bg-red-200' },
      { label: 'Instagram', href: 'https://www.instagram.com/diegovnoboa/?hl=en', style: 'bg-pink-100 text-pink-700 hover:bg-pink-200' },
      { label: 'TikTok', href: 'https://www.tiktok.com/@diegovnoboa', style: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
    ],
    snapchat: 'DIEGONOBOAA',
    bio: 'Diego is a vital member of Chicos Toxicos, contributing his unique perspective and creative ideas to the group\'s content. His chemistry with Felipe and Brandom creates the dynamic that fans love, and his individual channel showcases his versatility as a content creator.',
  },
  {
    handle: 'DonBrandom',
    name: 'Brandom',
    image: '/youtube/chicos-toxicos/Don Brandon.PNG',
    color: 'border-green-600',
    labelColor: 'text-green-600',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/donbrandom', style: 'bg-pink-100 text-pink-700 hover:bg-pink-200' },
      { label: 'TikTok', href: 'https://www.tiktok.com/@donbrandom', style: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
    ],
    snapchat: 'BRANDON_ZEPEDA',
    bio: 'Brandom rounds out the trio as a core member of Chicos Toxicos. Known as DonBrandom across social media platforms, he brings his own flavor to the group\'s videos and helps create the entertaining content that keeps fans coming back every Toxico Thursday.',
  },
];

const contentTypes = [
  { dot: 'bg-blue-600', title: 'Social Experiments', sub: 'Public reactions & interactions' },
  { dot: 'bg-teal-600', title: 'Comedy Sketches', sub: 'Relatable humor' },
  { dot: 'bg-green-600', title: 'Extreme Challenges', sub: '24-hour & endurance tests' },
  { dot: 'bg-blue-400', title: 'Lifestyle Vlogs', sub: 'Behind-the-scenes content' },
];

const markets = [
  { flag: '🇲🇽', country: 'Mexico', pct: '40%' },
  { flag: '🇨🇴', country: 'Colombia', pct: '15%' },
  { flag: '🇪🇸', country: 'Spain', pct: '12%' },
  { flag: '🇦🇷', country: 'Argentina', pct: '10%' },
  { flag: '🇺🇸', country: 'USA (Latin)', pct: '10%' },
  { flag: '🌎', country: 'Others', pct: '13%' },
];

export const metadata: Metadata = {
  title: 'Chicos Toxicos — Latin YouTuber Entertainment Group | ObjectWire',
  description:
    'Full coverage of Chicos Toxicos, the Latin American YouTuber entertainment group featuring Felipe, Diego, and Brandom. Weekly Toxico Thursdays, Zoo Culture and Bradley Martyn collaborations.',
  keywords: [
    'Chicos Toxicos',
    'Felipito96',
    'Diegovnoboa',
    'DonBrandom',
    'Latin YouTubers',
    'Toxico Thursdays',
    'Zoo Culture',
    'Bradley Martyn',
    'Latin American content creators',
    'Spanish YouTube',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/chicos-toxicos',
  },
  openGraph: {
    title: 'Chicos Toxicos — Latin YouTuber Entertainment Group',
    description:
      'Felipe, Diego, and Brandom deliver new content every Toxico Thursday. Full profile, member breakdowns, and collaboration history on ObjectWire.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/chicos-toxicos',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'YouTube',
    tags: ['Chicos Toxicos', 'Latin YouTube', 'Toxico Thursdays', 'Felipito96'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chicos Toxicos — Latin YouTuber Entertainment Group',
    description:
      'Full profile of Chicos Toxicos: members, schedule, collaborations, and stats.',
  },
};

export default function ChicosToxicosPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Chicos Toxicos — Latin YouTuber Entertainment Group"
        description="Full coverage of Chicos Toxicos, the Latin American YouTuber entertainment group featuring Felipe, Diego, and Brandom."
        author="ObjectWire Editorial"
        publishedTime="2026-02-18T10:00:00Z"
        modifiedTime="2026-02-18T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="YouTube"
        keywords={['Chicos Toxicos', 'Felipito96', 'Diegovnoboa', 'DonBrandom', 'Toxico Thursdays']}
      />

      <div className="min-h-screen bg-[#faf9f6]">

        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'YouTube', item: '/youtube' },
                { name: 'Chicos Toxicos', item: SLUG },
              ]}
            />
          </div>
        </div>

        {/* Hero Banner */}
        <header style={{ background: 'linear-gradient(to right, #15803d, #0f766e, #1d4ed8)' }}>
          <div className="max-w-5xl mx-auto px-4 py-14">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.7rem', fontWeight: 800, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                LATIN ENTERTAINMENT
              </span>
              <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.7rem', fontWeight: 600, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                TOXICO THURSDAYS
              </span>
            </div>

            <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem' }}>
              Chicos Toxicos
              <span style={{ display: 'block', fontSize: 'clamp(0.95rem, 2vw, 1.2rem)', fontWeight: 400, color: 'rgba(255,255,255,0.8)', marginTop: '0.5rem' }}>
                Latin American YouTuber Entertainment Group
              </span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '640px', marginBottom: '1.5rem' }}>
              Latin American YouTuber entertainment group delivering new videos each week on{' '}
              <strong style={{ color: '#fff' }}>Toxico Thursdays</strong>. Featuring Felipe, Diego, and
              Brandom bringing authentic comedy, challenges, and lifestyle content to the
              Spanish-speaking world.
            </p>

            {/* Stats bar */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '1.5rem' }}>
              {[
                { val: 'Weekly', sub: 'Toxico Thursdays' },
                { val: '3', sub: 'Core Members' },
                { val: 'Multi-M', sub: 'Combined Views' },
                { val: 'Active', sub: '2026' },
              ].map((s) => (
                <div key={s.sub} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '10px 18px', minWidth: '100px' }}>
                  <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.25rem', margin: 0 }}>{s.val}</p>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', margin: 0 }}>{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <a href="https://www.youtube.com/@Chicostoxicos/videos" target="_blank" rel="noopener noreferrer"
                style={{ background: '#dc2626', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                📺 Main Channel
              </a>
              <a href="https://www.instagram.com/chicostoxicos" target="_blank" rel="noopener noreferrer"
                style={{ background: '#db2777', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                📸 Instagram
              </a>
              <a href="https://discord.gg/Hr2UUYnGZD" target="_blank" rel="noopener noreferrer"
                style={{ background: '#4f46e5', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                💬 Discord
              </a>
            </div>
          </div>
        </header>

        {/* Main Layout */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* ═══ ARTICLE BODY ═══ */}
            <article className="lg:col-span-2 space-y-12">

              {/* About */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  About Chicos Toxicos
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Chicos Toxicos is a Latin American entertainment group that releases{' '}
                    <strong>new videos every Thursday</strong> as part of their signature{' '}
                    <strong>"Toxico Thursdays"</strong> series. The group consists of three core members —
                    Felipe (Felipito96), Diego (Diegovnoboa), and Brandom (DonBrandom) — who create
                    engaging content that resonates with Spanish-speaking audiences worldwide.
                  </p>
                  <p>
                    The trio has built a strong community across YouTube, Instagram, TikTok, and Snapchat.
                    Their content ranges from comedy sketches and challenges to lifestyle vlogs and
                    collaborations with popular creators in the fitness and entertainment space, including
                    Zoo Culture and Bradley Martyn.
                  </p>
                  <p>
                    Chicos Toxicos has established themselves through consistent upload schedules,
                    authentic personalities, and willingness to collaborate with major names across
                    different industries. Their active Discord community allows fans to connect directly
                    with the group and other supporters worldwide.
                  </p>
                </div>
              </section>

              {/* Members */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5 border-b border-gray-200 pb-2">
                  Group Members
                </h2>
                <div className="space-y-6">
                  {members.map((m) => (
                    <div key={m.handle} className={`border-l-4 ${m.color} bg-white rounded-r-xl border border-l-0 border-gray-200 shadow-sm overflow-hidden`}>
                      <div className="flex gap-0">
                        {/* Member photo */}
                        <div className="relative w-28 shrink-0 sm:w-36">
                          <Image
                            src={m.image}
                            alt={`${m.name} — ${m.handle}`}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 640px) 112px, 144px"
                          />
                        </div>
                        {/* Member info */}
                        <div className="pl-5 pr-5 py-5 flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {m.name}{' '}
                            <span className="font-mono text-sm text-gray-500">({m.handle})</span>
                          </h3>
                          <p className={`${m.labelColor} font-semibold text-sm mb-3`}>Core Member &amp; Content Creator</p>
                          <p className="text-gray-700 text-sm leading-relaxed mb-3">{m.bio}</p>
                          <div className="flex flex-wrap gap-2">
                            {m.links.map((l) => (
                              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                                className={`text-xs px-3 py-1 rounded-full transition-colors ${l.style}`}>
                                {l.label}
                              </a>
                            ))}
                            {m.snapchat && (
                              <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                                👻 {m.snapchat}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Collaborations */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5 border-b border-gray-200 pb-2">
                  Notable Collaborations
                </h2>
                <div className="space-y-5">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Zoo Culture</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Chicos Toxicos has collaborated with Zoo Culture, the popular fitness and lifestyle
                      brand, creating crossover content that brings their comedy style into the fitness
                      community. These collaborations expanded their reach and showcased a different side
                      of the group to a new audience.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Bradley Martyn</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      The group has worked with fitness influencer and entrepreneur Bradley Martyn,
                      one of the biggest names in the fitness YouTube space. These collaborations blend
                      entertainment with fitness content, introducing Chicos Toxicos to Bradley&apos;s
                      massive audience while bringing their unique Latin flavor to the fitness world.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Content Strategy</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Their consistent Toxico Thursdays upload schedule keeps fans engaged week over week,
                      while collaborations across different niches continuously grow their audience beyond
                      the core Spanish-speaking entertainment space.
                    </p>
                  </div>
                </div>
              </section>

              {/* Community */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Community &amp; Platform Presence
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    Chicos Toxicos maintains a strong presence across multiple platforms, ensuring fans
                    can connect wherever they prefer to consume content. With{' '}
                    <strong>Toxico Thursdays</strong> as their consistent upload schedule, fans know
                    exactly when to expect new content each week.
                  </p>
                  <p>
                    The group&apos;s Discord community serves as a central hub for fans to interact with
                    each other and occasionally with the creators themselves. This direct line of
                    communication maintains the authentic, personal connection that sets Chicos Toxicos
                    apart from larger, more corporate creator groups.
                  </p>
                </div>

                <div className="mt-5 bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Individual Channels</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <a href="https://www.youtube.com/@felipito967" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-100">
                      <span className="text-xl">📺</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Felipe&apos;s Channel</p>
                        <p className="text-xs text-gray-500">@felipito967</p>
                      </div>
                    </a>
                    <a href="https://www.youtube.com/@Diegovnoboa" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-100">
                      <span className="text-xl">📺</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Diego&apos;s Channel</p>
                        <p className="text-xs text-gray-500">@Diegovnoboa</p>
                      </div>
                    </a>
                  </div>
                </div>
              </section>

            </article>

            {/* ═══ SIDEBAR ═══ */}
            <aside className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">

                {/* Infobox */}
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div style={{ background: 'linear-gradient(to right, #15803d, #0d9488, #1d4ed8)', padding: '12px 16px', textAlign: 'center' }}>
                    <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', margin: 0 }}>Chicos Toxicos</h2>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.7rem', margin: '2px 0 0' }}>Latin YouTuber Entertainment Group</p>
                  </div>
                  <div className="divide-y divide-gray-100 text-sm">
                    {[
                      { label: 'Members', value: 'Felipe, Diego, Brandom' },
                      { label: 'Schedule', value: 'Toxico Thursdays' },
                      { label: 'Language', value: 'Spanish' },
                      { label: 'Platform', value: 'YouTube, Instagram, TikTok' },
                      { label: 'Market', value: 'Latin America & USA' },
                      { label: 'Collaborators', value: 'Zoo Culture, B. Martyn' },
                      { label: 'Combined Views', value: '500M+' },
                      { label: 'Status', value: 'Active (2026)' },
                    ].map((row) => (
                      <div key={row.label} className="flex px-4 py-2.5 gap-2">
                        <span className="text-gray-500 w-28 shrink-0 text-xs">{row.label}</span>
                        <span className="font-medium text-gray-800 text-xs">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Channel Stats */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-slate-800 px-4 py-3">
                    <h3 className="font-bold text-sm uppercase tracking-wider" style={{ color: '#fff' }}>Channel Statistics</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      { label: 'Total Subscribers', value: '2.5M+' },
                      { label: 'Total Views', value: '500M+' },
                      { label: 'Videos', value: '300+' },
                      { label: 'Years Active', value: '4' },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between px-4 py-2.5 text-xs">
                        <span className="text-gray-500">{row.label}</span>
                        <span className="font-bold text-gray-900">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Types */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Content Types</h3>
                  <div className="space-y-3">
                    {contentTypes.map((c) => (
                      <div key={c.title} className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${c.dot} rounded-full mt-1.5 shrink-0`}></div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{c.title}</p>
                          <p className="text-xs text-gray-500">{c.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Markets */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Top Markets</h3>
                  <div className="space-y-2">
                    {markets.map((m) => (
                      <div key={m.country} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{m.flag} {m.country}</span>
                        <span className="font-bold text-gray-900">{m.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Related Coverage</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/youtube/chicos-toxicos/cristiana-love" className="text-blue-600 hover:underline">→ Cristiana Love</Link></li>
                    <li><Link href="/youtube/chicos-toxicos/sava-schultz" className="text-blue-600 hover:underline">→ Sava Schultz</Link></li>
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
