import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';

const SLUG = '/influencer/diamond-gym';

const infoboxRows = [
  { label: 'Full Name', value: 'Diamond Gym' },
  { label: 'Location', value: 'Maplewood, NJ, USA' },
  { label: 'Type', value: 'Private Strength & Bodybuilding Gym' },
  { label: 'Known For', value: 'Elite physique athletes, influencer training hub' },
  { label: 'Website', value: 'diamondgym.pro' },
  { label: 'Notable Visitors', value: 'Logan Paul, Tren Twins & more' },
  { label: 'Status', value: 'Active (2026)' },
];

const timeline = [
  { year: 'Est.', event: 'Diamond Gym founded in Maplewood, NJ as a serious strength and physique training facility.' },
  { year: '2022', event: 'Begins attracting elite bodybuilders and fitness content creators to its floor.' },
  { year: '2023', event: 'Tren Twins (Christian & Michael Gaiera) film training sessions at Diamond Gym, footage goes viral.' },
  { year: '2024', event: 'A wave of YouTube fitness influencers feature the gym in content — visibility skyrockets.' },
  { year: '2025', event: 'Logan Paul trains at Diamond Gym; footage circulates across fitness media.' },
  { year: '2026', event: 'Diamond Gym stands as one of the most recognized private gyms in the northeastern US influencer fitness scene.' },
];

const notableVisitors = [
  {
    name: 'Logan Paul',
    accent: 'border-indigo-500',
    dot: 'bg-indigo-500',
    desc: 'The WWE star, PRIME co-founder, and YouTube icon has been seen training at Diamond Gym — adding significant mainstream attention to the facility. Paul\'s presence reflects the gym\'s growing reputation beyond regional bodybuilding circles.',
    link: { href: '/youtube/logan-paul', label: '→ Read the full Logan Paul profile on ObjectWire' },
  },
  {
    name: 'The Tren Twins',
    accent: 'border-green-600',
    dot: 'bg-green-600',
    desc: 'Christian and Michael Gaiera — the viral Michigan-born bodybuilding duo — have trained at Diamond Gym and filmed content there. Given their massive following and no-filter style, their visits have directly contributed to the gym\'s online reputation.',
    link: { href: '/influencer/tren-twins', label: '→ Read the full Tren Twins profile on ObjectWire' },
  },
  {
    name: 'Fitness & Bodybuilding Influencers',
    accent: 'border-red-500',
    dot: 'bg-red-500',
    desc: 'Beyond Logan Paul and the Tren Twins, a myriad of fitness creators, competitive bodybuilders, and social media athletes have passed through Diamond Gym\'s doors — each adding to its status as a destination gym in the Northeast.',
  },
];

export const metadata: Metadata = {
  title: 'Diamond Gym — Maplewood, NJ | Where Elite Fitness Influencers Train | ObjectWire',
  description:
    'Diamond Gym in Maplewood, NJ has become one of the most talked-about training facilities in the US fitness influencer scene. Logan Paul, the Tren Twins, and dozens of elite athletes have trained here. Full profile, history, and video.',
  keywords: [
    'Diamond Gym',
    'Diamond Gym Maplewood NJ',
    'Diamond Gym New Jersey',
    'Logan Paul Diamond Gym',
    'Tren Twins Diamond Gym',
    'fitness influencer gym NJ',
    'best gym New Jersey',
    'bodybuilding gym Maplewood',
    'diamondgym.pro',
    'elite gym New Jersey',
    'influencer training gym',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/diamond-gym',
  },
  openGraph: {
    title: 'Diamond Gym — Maplewood, NJ | Where Elite Fitness Influencers Train',
    description:
      'Diamond Gym in Maplewood, NJ: the private gym where Logan Paul, the Tren Twins, and a wave of fitness influencers have trained. Full profile on ObjectWire.',
    type: 'article',
    url: 'https://www.objectwire.org/influencer/diamond-gym',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'Influencer',
    tags: ['Diamond Gym', 'Maplewood NJ', 'Logan Paul', 'Tren Twins', 'Fitness', 'Bodybuilding', 'New Jersey'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diamond Gym, Maplewood NJ — Logan Paul, Tren Twins & Elite Influencers Train Here',
    description:
      'The New Jersey gym that became a destination for the biggest names in fitness content. Full profile on ObjectWire.',
  },
};

export default function DiamondGymPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Diamond Gym — Maplewood, NJ | Where Elite Fitness Influencers Train"
        description="Diamond Gym in Maplewood, NJ has become one of the most talked-about training facilities in the US fitness influencer scene. Logan Paul, the Tren Twins, and dozens of elite athletes have trained here."
        author="ObjectWire Editorial"
        publishedTime="2026-02-20T10:00:00Z"
        modifiedTime="2026-02-20T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Influencer"
        keywords={['Diamond Gym', 'Maplewood NJ', 'Logan Paul', 'Tren Twins', 'fitness influencer gym']}
      />

      <div className="min-h-screen bg-[#faf9f6]">

        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'Influencer', item: '/influencer' },
                { name: 'Diamond Gym', item: SLUG },
              ]}
            />
          </div>
        </div>

        {/* Hero Banner */}
        <header style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #7c3aed 100%)' }}>
          <div className="max-w-5xl mx-auto px-4 py-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Thumbnail */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden border-4 shrink-0" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                <Image
                  src="/influncer/Diamond Gym.PNG"
                  alt="Diamond Gym Maplewood NJ"
                  fill
                  className="object-cover object-center"
                  sizes="144px"
                  priority
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.7rem', fontWeight: 800, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Influencer
                  </span>
                  <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.7rem', fontWeight: 600, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Maplewood, NJ · Fitness · Bodybuilding
                  </span>
                </div>

                <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.5rem' }}>
                  Diamond Gym
                  <span style={{ display: 'block', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: 400, color: 'rgba(255,255,255,0.8)', marginTop: '0.4rem' }}>
                    Maplewood, New Jersey · Elite Strength &amp; Physique Training
                  </span>
                </h1>

                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '600px', marginBottom: '1.2rem' }}>
                  A private gym in Maplewood, NJ that has quietly become one of the most
                  recognizable training destinations in the US fitness influencer scene —
                  hosting the likes of Logan Paul, the Tren Twins, and a wave of elite
                  athletes and content creators.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <a href="https://diamondgym.pro/" target="_blank" rel="noopener noreferrer"
                    style={{ background: '#7c3aed', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    🏋️ Visit diamondgym.pro
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

              {/* WHAT */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">What Is Diamond Gym?</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    <strong>Diamond Gym</strong> is a private strength and physique training facility
                    located in <strong>Maplewood, New Jersey</strong>. Unlike commercial chain gyms,
                    Diamond Gym operates as a destination for serious athletes — offering the kind of
                    heavy-duty equipment, atmosphere, and culture that competitive bodybuilders and
                    strength athletes seek out.
                  </p>
                  <p>
                    The gym has earned a reputation as one of the premier <strong>bodybuilding and
                    physique-focused gyms in the northeastern United States</strong>. Its environment
                    is built around performance — thick barbells, heavy-duty platforms, and a culture
                    that attracts people who are serious about the craft of building muscle.
                  </p>
                  <p>
                    In recent years, Diamond Gym has transcended its local reputation to become a
                    recognized name in <strong>fitness influencer culture</strong>. A growing number
                    of social media athletes, YouTube fitness creators, and professional competitors
                    have trained at the facility — bringing it to millions of viewers across platforms.
                  </p>
                </div>
              </section>

              {/* YouTube Embed */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Diamond Gym — Watch</h2>
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-black">
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src="https://www.youtube.com/embed/QU_E4j_Iz-k"
                      title="Diamond Gym — Maplewood NJ"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">Diamond Gym, Maplewood NJ — via YouTube</p>
              </section>

              {/* WHERE */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Where Is Diamond Gym?</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Diamond Gym is located in <strong>Maplewood, New Jersey</strong> — a township in
                    Essex County, approximately 14 miles west of Manhattan. Its proximity to New York City
                    makes it accessible to a broad pool of athletes, trainers, and content creators
                    operating in the tri-state area.
                  </p>
                  <p>
                    The Northeast corridor has a deep history with competitive bodybuilding — New Jersey
                    in particular has produced and hosted numerous professional-level physique athletes.
                    Diamond Gym fits squarely within that tradition, offering an environment where serious
                    lifters can train at the highest level without the distractions of a commercial gym floor.
                  </p>
                  <p>
                    For full location details, membership information, and hours, visit their official
                    website at{' '}
                    <a href="https://diamondgym.pro/" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-semibold hover:underline">
                      diamondgym.pro
                    </a>.
                  </p>
                </div>
              </section>

              {/* WHO */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Who Has Trained at Diamond Gym?</h2>
                <div className="prose prose-lg max-w-none mb-6">
                  <p>
                    Diamond Gym has hosted a wide range of elite fitness athletes and social media
                    personalities. The facility has become a pilgrimage site for serious lifters looking
                    to train in an environment that matches their intensity — and for content creators
                    seeking a gym backdrop that carries credibility with their audience.
                  </p>
                </div>

                <div className="space-y-4">
                  {notableVisitors.map((v) => (
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

              {/* WHEN */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">When Did Diamond Gym Rise to Prominence?</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Diamond Gym&apos;s rise in the content creator and influencer fitness world accelerated
                    significantly around <strong>2022–2023</strong>, as a new wave of YouTube and TikTok
                    fitness creators began documenting their training at specific destination gyms rather
                    than generic commercial facilities.
                  </p>
                  <p>
                    The <strong>Tren Twins</strong>, whose content exploded virally in 2022, were among
                    the early high-profile creators to feature training footage shot at Diamond Gym.
                    Their association with the facility helped cement its identity as a gym for
                    <em> real</em> lifters — not a backdrop, but an actual serious training environment.
                  </p>
                  <p>
                    By <strong>2025</strong>, when <strong>Logan Paul</strong> was documented training
                    at the facility, Diamond Gym had firmly established itself as a destination in the
                    fitness influencer circuit. Paul&apos;s visit brought the gym to a mainstream audience
                    well beyond the core bodybuilding community.
                  </p>
                  <p>
                    As of <strong>2026</strong>, Diamond Gym continues to attract elite athletes and
                    content creators, with its online visibility growing in tandem with the broader
                    fitness content economy.
                  </p>
                </div>
              </section>

              {/* WHY */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Why Do Elite Athletes Train at Diamond Gym?</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    The appeal of Diamond Gym for elite athletes and influencers comes down to a few
                    factors that are increasingly rare in the modern fitness landscape:
                  </p>
                  <ul>
                    <li>
                      <strong>Equipment built for serious lifting.</strong> Commercial gyms have trended
                      toward cardio machines and general fitness. Diamond Gym is equipped for heavy
                      compound work — the type that builds the physiques that populate fitness social media.
                    </li>
                    <li>
                      <strong>Culture and environment.</strong> There is a reason top-level bodybuilders
                      seek out specific gyms. The energy of a room full of serious athletes is difficult
                      to replicate, and Diamond Gym provides it.
                    </li>
                    <li>
                      <strong>Location.</strong> Sitting in the greater New York metropolitan area,
                      Diamond Gym is accessible to a concentrated population of professional athletes,
                      trainers, and media personalities.
                    </li>
                    <li>
                      <strong>Content credentials.</strong> For fitness creators, training at a gym
                      with genuine credibility adds to the authenticity of their content — and Diamond
                      Gym&apos;s growing name recognition in the bodybuilding community provides exactly that.
                    </li>
                  </ul>
                  <p>
                    The gym represents a broader trend in fitness culture: a shift away from anonymous
                    big-box gyms toward destination training facilities with identity, culture, and
                    community — places where serious athletes feel they belong.
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Visit Diamond Gym</h3>
                    <p className="text-xs text-gray-600">Maplewood, New Jersey · Serious athletes only.</p>
                  </div>
                  <a
                    href="https://diamondgym.pro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm py-2.5 px-6 rounded-lg transition-colors"
                  >
                    diamondgym.pro →
                  </a>
                </div>
              </section>

            </article>

            {/* ═══ SIDEBAR ═══ */}
            <aside className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">

                {/* Infobox */}
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e3a5f, #7c3aed)', padding: '0' }}>
                    <div className="relative w-full h-48">
                      <Image
                        src="/influncer/Diamond Gym.PNG"
                        alt="Diamond Gym Maplewood NJ"
                        fill
                        className="object-cover object-center"
                        sizes="300px"
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 50%)' }} />
                      <div style={{ position: 'absolute', bottom: '10px', left: '14px', right: '14px' }}>
                        <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>Diamond Gym</h2>
                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.7rem', margin: '2px 0 0' }}>Maplewood, NJ · Elite Training</p>
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
                    <div className="flex px-4 py-2.5 gap-2">
                      <span className="text-gray-500 w-24 shrink-0 text-xs">Website</span>
                      <a href="https://diamondgym.pro/" target="_blank" rel="noopener noreferrer" className="font-medium text-purple-700 text-xs hover:underline">diamondgym.pro</a>
                    </div>
                  </div>
                </div>

                {/* Notable Visitors Quick Links */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Notable Athletes</h3>
                  <div className="space-y-3">
                    <Link href="/youtube/logan-paul" className="block group">
                      <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-lg hover:shadow-sm transition-shadow">
                        <p className="font-semibold text-gray-900 text-xs group-hover:text-indigo-700">Logan Paul</p>
                        <p className="text-xs text-gray-500 mt-0.5">WWE Star · PRIME · Impaulsive Host</p>
                      </div>
                    </Link>
                    <Link href="/influencer/tren-twins" className="block group">
                      <div className="p-3 bg-green-50 border border-green-100 rounded-lg hover:shadow-sm transition-shadow">
                        <p className="font-semibold text-gray-900 text-xs group-hover:text-green-700">The Tren Twins</p>
                        <p className="text-xs text-gray-500 mt-0.5">Christian &amp; Michael Gaiera · YoungLA</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Timeline</h3>
                  <div className="space-y-3">
                    {timeline.map((t) => (
                      <div key={t.year + t.event.slice(0, 10)} className="flex gap-3 text-xs">
                        <span className="text-purple-600 font-bold w-10 shrink-0">{t.year}</span>
                        <span className="text-gray-600 leading-relaxed">{t.event}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Coverage */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Related Coverage</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/youtube/logan-paul" className="text-blue-600 hover:underline">→ Logan Paul Profile</Link></li>
                    <li><Link href="/influencer/tren-twins" className="text-blue-600 hover:underline">→ Tren Twins Profile</Link></li>
                    <li><Link href="/influencer" className="text-blue-600 hover:underline">→ Influencer Hub</Link></li>
                    <li><Link href="/youtube" className="text-blue-600 hover:underline">→ YouTube Hub</Link></li>
                    <li><Link href="/news" className="text-blue-600 hover:underline">→ Latest News</Link></li>
                  </ul>
                </div>

                {/* Meta */}
                <div className="text-xs text-gray-400 space-y-1 px-1">
                  <p>Published: February 20, 2026</p>
                  <p>Author: ObjectWire Editorial</p>
                  <p>Category: Influencer · Fitness</p>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </div>
    </SEOWrapper>
  );
}
