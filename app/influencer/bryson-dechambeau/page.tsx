import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';

const SLUG = '/influencer/bryson-dechambeau';

const infoboxRows = [
  { label: 'Full Name', value: 'Bryson James Aldrich DeChambeau' },
  { label: 'Born', value: 'September 16, 1993' },
  { label: 'Origin', value: 'Modesto, California, USA' },
  { label: 'Nickname', value: '"The Mad Scientist"' },
  { label: 'Tour', value: 'LIV Golf (2022–present)' },
  { label: 'Former Tour', value: 'PGA Tour (2016–2022)' },
  { label: 'Turned Pro', value: '2016' },
  { label: 'Majors', value: '2× US Open (2020, 2024)' },
  { label: 'Drive Avg.', value: '320+ yards' },
  { label: 'Weight', value: '~240 lbs (transformed)' },
  { label: 'YouTube', value: '@BrysonDeChambeau' },
  { label: 'Status', value: 'Active (2026)' },
];

const timeline = [
  { year: '1993', event: 'Born September 16 in Modesto, California.' },
  { year: '2015', event: 'Wins NCAA Division I individual title at SMU; becomes only the fifth player to win both the NCAA title and US Amateur in the same year.' },
  { year: '2016', event: 'Turns professional. Joins the PGA Tour.' },
  { year: '2018', event: 'Wins his first PGA Tour event. Known for single-length irons and hyper-analytical approach — earns the nickname "The Mad Scientist."' },
  { year: '2019', event: 'Undergoes dramatic physical transformation — gains ~40 lbs of muscle through intense training and nutrition overhaul.' },
  { year: '2020', event: 'Wins the US Open at Winged Foot, one of the most brutal courses in the world, in dominant fashion. Major #1.' },
  { year: '2022', event: 'Defects from the PGA Tour to join LIV Golf, becoming one of the most high-profile defectors.' },
  { year: '2024', event: 'Wins the US Open at Pinehurst No. 2 in a dramatic playoff over Rory McIlroy. Major #2.' },
  { year: '2025', event: 'Continues competing on LIV Golf; builds YouTube audience documenting training, golf content, and celebrity collaborations.' },
  { year: '2026', event: 'One of the most recognizable figures in golf — bridging professional sport and online content culture.' },
];

const ventures = [
  {
    name: 'LIV Golf',
    accent: 'border-green-600',
    dot: 'bg-green-600',
    desc: 'DeChambeau was among the first and most prominent PGA Tour players to join LIV Golf in 2022. His move helped legitimize the breakaway league and sparked one of the most contentious debates in modern golf history.',
  },
  {
    name: 'YouTube & Content Creation',
    accent: 'border-red-500',
    dot: 'bg-red-500',
    desc: 'DeChambeau has built a growing YouTube channel documenting his training process, course management, and challenges. He has collaborated with athletes across sports — including NBA superstar Steph Curry — making him a crossover figure between professional golf and online entertainment.',
  },
  {
    name: 'Physical Transformation',
    accent: 'border-blue-500',
    dot: 'bg-blue-500',
    desc: 'Few stories in golf have captured attention like DeChambeau\'s body transformation. He added approximately 40 lbs of muscle between 2019 and 2020, revolutionizing how athletes and fans think about the relationship between physical fitness and golf performance.',
  },
  {
    name: 'Single-Length Irons',
    accent: 'border-purple-500',
    dot: 'bg-purple-500',
    desc: 'A signature of his scientific approach: DeChambeau uses irons all built to the same length, a concept derived from his physics-based analysis of the golf swing. Dismissed by traditionalists, his results have forced the golf world to take the approach seriously.',
  },
];

export const metadata: Metadata = {
  title: 'Bryson DeChambeau — "The Mad Scientist" | 2× US Open Champion & LIV Golf Star | ObjectWire',
  description:
    'Full profile of Bryson DeChambeau: 2× US Open champion (2020, 2024), LIV Golf star, and one of the most analytically gifted — and physically transformed — golfers in history. Career, controversies, YouTube content, and more.',
  keywords: [
    'Bryson DeChambeau',
    'Bryson DeChambeau LIV Golf',
    'Bryson DeChambeau US Open',
    'Bryson DeChambeau 2024',
    'The Mad Scientist golf',
    'Bryson DeChambeau body transformation',
    'Bryson DeChambeau YouTube',
    'Bryson DeChambeau Steph Curry',
    'Bryson DeChambeau single length irons',
    'LIV Golf 2026',
    'Bryson DeChambeau net worth',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/bryson-dechambeau',
  },
  openGraph: {
    title: 'Bryson DeChambeau — The Mad Scientist | 2× US Open Champion & LIV Golf Star',
    description:
      'Full profile of Bryson DeChambeau: from NCAA phenom to 2× US Open champion and LIV Golf icon. Physics-based game, dramatic body transformation, and a growing content creator footprint.',
    type: 'article',
    url: 'https://www.objectwire.org/influencer/bryson-dechambeau',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'Influencer',
    tags: ['Bryson DeChambeau', 'LIV Golf', 'US Open', 'Golf', 'Influencer', 'Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bryson DeChambeau — 2× US Open Champion, LIV Golf Star & "The Mad Scientist"',
    description:
      'Full profile of Bryson DeChambeau on ObjectWire. Career, body transformation, LIV Golf, YouTube content, and his US Open legacy.',
  },
};

export default function BrysonDeChambauPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Bryson DeChambeau — The Mad Scientist | 2× US Open Champion & LIV Golf Star"
        description="Full profile of Bryson DeChambeau: 2× US Open champion, LIV Golf competitor, and one of the most analytically driven athletes in professional sports."
        author="ObjectWire Editorial"
        publishedTime="2026-02-20T12:00:00Z"
        modifiedTime="2026-02-20T12:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Influencer"
        keywords={['Bryson DeChambeau', 'US Open', 'LIV Golf', 'golf', 'Mad Scientist', 'body transformation']}
      />

      <div className="min-h-screen bg-[#faf9f6]">

        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'Influencer', item: '/influencer' },
                { name: 'Bryson DeChambeau', item: SLUG },
              ]}
            />
          </div>
        </div>

        {/* Hero Banner */}
        <header style={{ background: '#1a1a1a', borderBottom: '4px solid #111' }}>
          <div className="max-w-5xl mx-auto px-4 py-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.7rem', fontWeight: 800, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Influencer
                  </span>
                  <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.7rem', fontWeight: 600, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Golf · LIV · Content Creator
                  </span>
                </div>

                <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.5rem' }}>
                  Bryson DeChambeau
                  <span style={{ display: 'block', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: 400, color: 'rgba(255,255,255,0.8)', marginTop: '0.4rem' }}>
                    &ldquo;The Mad Scientist&rdquo; · 2× US Open Champion · LIV Golf
                  </span>
                </h1>

                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '640px', marginBottom: '1.2rem' }}>
                  A physics graduate who turned golf into a laboratory experiment — and won two US Opens
                  doing it. Bryson DeChambeau is the most analytically driven, physically transformed,
                  and culturally polarizing figure in modern professional golf.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <a href="https://www.youtube.com/@BrysonDeChambeau" target="_blank" rel="noopener noreferrer"
                    style={{ background: '#dc2626', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    📺 YouTube
                  </a>
                  <a href="https://twitter.com/b_dechambeau" target="_blank" rel="noopener noreferrer"
                    style={{ background: '#0f172a', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    𝕏 Twitter / X
                  </a>
                  <a href="https://www.instagram.com/brysondechambeau" target="_blank" rel="noopener noreferrer"
                    style={{ background: '#db2777', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    📸 Instagram
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    <strong>Bryson James Aldrich DeChambeau</strong> (born September 16, 1993) is an American
                    professional golfer competing on <strong>LIV Golf</strong>. Nicknamed{' '}
                    <em>&ldquo;The Mad Scientist,&rdquo;</em> DeChambeau is one of the most distinctive figures
                    in the history of professional golf — an athlete who approaches the sport through the lens of
                    physics, biomechanics, and data-driven experimentation.
                  </p>
                  <p>
                    A physics major at Southern Methodist University (SMU), DeChambeau has consistently applied
                    scientific principles to his game in ways that challenge convention: single-length irons,
                    a dramatically altered swing plane, and one of the most publicized body transformations
                    in professional sports — adding approximately <strong>40 lbs of muscle</strong> to
                    become one of the longest hitters in world golf history at over <strong>320 yards
                    per drive</strong>.
                  </p>
                  <p>
                    He is a <strong>two-time US Open champion</strong>, having won at Winged Foot in 2020 and
                    Pinehurst No. 2 in 2024 — the latter in a dramatic playoff victory over Rory McIlroy that
                    instantly became one of the most memorable moments in major championship history.
                  </p>
                </div>
              </section>

              {/* Video Embed */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Watch: Bryson DeChambeau &amp; Steph Curry</h2>
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-black">
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src="https://www.youtube.com/embed/mluOWlA6GGo?start=3463"
                      title="Bryson DeChambeau and Steph Curry"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">Bryson DeChambeau featuring NBA superstar Steph Curry · via YouTube</p>
              </section>

              {/* The Transformation */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">The Body Transformation</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    No story in recent golf history captured mainstream attention quite like DeChambeau&apos;s
                    physical transformation. Between 2019 and 2020, he added roughly <strong>40 pounds
                    of muscle</strong>, going from a typical tour player&apos;s physique to something
                    closer to an NFL linebacker. The result was a driving game unlike anything the sport
                    had seen — consistently hitting <strong>320 to 340 yards</strong> off the tee,
                    reducing par-5s to drive-and-chip scenarios and making long par-4s obsolete.
                  </p>
                  <p>
                    Critics argued the approach was unsustainable and exposed him to injury risk.
                    Supporters saw it as a glimpse of the future — that athleticism, long ignored in
                    a sport that prized technical precision over raw power, was about to become golf&apos;s
                    biggest performance advantage. His 2020 US Open win at Winged Foot — a course
                    specifically designed to punish overpowering — answered many of those critics directly.
                  </p>
                </div>

                <div className="mt-5 bg-green-50 border border-green-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">By the Numbers</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { label: 'Weight gained (2019–20)', value: '~40 lbs of muscle' },
                      { label: 'Avg. driving distance', value: '320+ yards' },
                      { label: 'US Open wins', value: '2 (2020, 2024)' },
                      { label: 'Turned professional', value: '2016' },
                      { label: 'NCAA titles', value: '1 (2015, SMU)' },
                      { label: 'US Amateur wins', value: '1 (2015)' },
                    ].map((f) => (
                      <div key={f.label} className="flex gap-2 text-sm">
                        <span className="text-gray-500 w-44 shrink-0">{f.label}:</span>
                        <span className="font-semibold text-gray-900">{f.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Career & Ventures */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-gray-900 pb-2">Career &amp; Ventures</h2>
                <div className="space-y-4">
                  {ventures.map((v) => (
                    <div key={v.name} className={`border-l-4 ${v.accent} pl-5 py-4 bg-white rounded-r-xl shadow-sm border border-l-0 border-gray-100`}>
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-2 h-2 rounded-full ${v.dot}`} />
                        <h3 className="font-bold text-gray-900">{v.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* LIV Golf */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">LIV Golf &amp; The Tour Split</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    In 2022, DeChambeau became one of the most high-profile defectors from the PGA Tour
                    when he joined <strong>LIV Golf</strong>, the Saudi-backed breakaway league that
                    upended professional golf&apos;s established order. His move — alongside Phil Mickelson,
                    Dustin Johnson, and Brooks Koepka — triggered one of the most contentious episodes
                    in the sport&apos;s modern history.
                  </p>
                  <p>
                    For DeChambeau, the decision was motivated by financial incentive, schedule flexibility,
                    and a team-format structure that aligned with his desire to compete differently.
                    The format, featuring shotgun starts and no-cut 54-hole tournaments, drew criticism
                    from traditionalists — but LIV&apos;s continued existence and growing production
                    value has forced the golf establishment to reckon with its presence.
                  </p>
                  <p>
                    Crucially, DeChambeau remained eligible for major championships through LIV —
                    a fact that mattered enormously when he claimed his <strong>second US Open title
                    at Pinehurst in 2024</strong>.
                  </p>
                </div>
              </section>

              {/* 2024 US Open */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">2024 US Open — Pinehurst No. 2</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    The 2024 US Open at Pinehurst No. 2 provided one of the defining moments of DeChambeau&apos;s
                    career and a story that transcended golf entirely. Going into the final round, he faced
                    a head-to-head battle with <strong>Rory McIlroy</strong> — arguably the game&apos;s most
                    popular player and a man who had not won a major in a decade.
                  </p>
                  <p>
                    DeChambeau&apos;s closing round was a masterclass under pressure. He held off McIlroy
                    over the closing holes to win his second US Open, cementing his position not just as a
                    LIV outlier but as a legitimate major champion on the biggest stages in golf. The victory
                    silenced a significant portion of his critics and reignited debate about his place
                    in the game&apos;s elite conversation.
                  </p>
                  <p>
                    For the broader golf world, the result was bittersweet — McIlroy&apos;s near-miss
                    continued his major drought, while DeChambeau&apos;s win handed LIV Golf its most
                    credible argument yet.
                  </p>
                </div>
              </section>

              {/* Content Creator */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Content Creator &amp; Crossover Appeal</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Beyond the tour, DeChambeau has embraced the role of content creator — building a
                    YouTube channel and social media presence that documents his training, course strategy,
                    and off-course personality. His collaborations with athletes outside golf have
                    expanded his audience significantly.
                  </p>
                  <p>
                    Among his most notable crossover moments is a collaboration with <strong>NBA legend
                    Steph Curry</strong> — a pairing that blends two of sport&apos;s most analytically
                    minded competitors. DeChambeau&apos;s willingness to engage with athletes, fans, and
                    content creators across disciplines positions him as more than a golfer: he is
                    a sports personality with genuine cultural reach.
                  </p>
                </div>
              </section>

            </article>

            {/* ═══ SIDEBAR ═══ */}
            <aside className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">

                {/* Infobox */}
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div style={{ background: '#1a1a1a' }}>
                    <div className="px-4 py-5">
                      <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>Bryson DeChambeau</h2>
                      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.72rem', margin: '3px 0 0' }}>&ldquo;The Mad Scientist&rdquo; · 2× US Open Champion</p>
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

                {/* Major Wins */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Major Championships</h3>
                  <div className="space-y-3">
                    {[
                      { title: '2020 US Open', detail: 'Winged Foot GC · Dominant wire-to-wire victory', color: 'bg-green-50 border-green-100 text-green-700' },
                      { title: '2024 US Open', detail: 'Pinehurst No. 2 · Playoff win over Rory McIlroy', color: 'bg-blue-50 border-blue-100 text-blue-700' },
                    ].map((m) => (
                      <div key={m.title} className={`p-3 ${m.color} border rounded-lg`}>
                        <p className="font-bold text-gray-900 text-xs">{m.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{m.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Timeline */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Career Timeline</h3>
                  <div className="space-y-3">
                    {timeline.map((t) => (
                      <div key={t.year + t.event.slice(0, 10)} className="flex gap-3 text-xs">
                        <span className="text-emerald-700 font-bold w-10 shrink-0">{t.year}</span>
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
                    <li><Link href="/formula-1" className="text-blue-600 hover:underline">→ Formula 1 Coverage</Link></li>
                    <li><Link href="/news" className="text-blue-600 hover:underline">→ Latest News</Link></li>
                  </ul>
                </div>

                {/* Meta */}
                <div className="text-xs text-gray-400 space-y-1 px-1">
                  <p>Published: February 20, 2026</p>
                  <p>Author: ObjectWire Editorial</p>
                  <p>Category: Influencer · Golf · Sports</p>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </div>
    </SEOWrapper>
  );
}
