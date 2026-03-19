import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';

const SLUG = '/influencer/yellz0';

const infoboxRows = [
  { label: 'Full Name', value: 'Aniela Verbin' },
  { label: 'Known As', value: 'Yellz0' },
  { label: 'Born', value: 'November 5, 2000' },
  { label: 'Age', value: '25 years old' },
  { label: 'Origin', value: 'Pennsylvania, USA' },
  { label: 'Nationality', value: 'American' },
  { label: 'Occupation', value: 'Social Media Influencer, Model, Content Creator' },
  { label: 'Hair', value: 'Blonde (dark roots)' },
  { label: 'Eyes', value: 'Dark Brown' },
  { label: 'Bra Size', value: 'DDD' },
  { label: 'Platforms', value: 'TikTok, Instagram, YouTube, OnlyFans, Patreon' },
  { label: 'Status', value: 'Active (2026)' },
];

const timeline = [
  { year: '2000', event: 'Aniela Verbin born November 5 in Pennsylvania, USA.' },
  { year: '2018', event: 'Begins establishing an online presence through early social media platforms.' },
  { year: '2020', event: 'TikTok growth accelerates during pandemic; lip-sync and lifestyle content gains traction.' },
  { year: '2021', event: 'Crosses 1 million TikTok followers; expands to Instagram modeling content.' },
  { year: '2022', event: 'Goes viral following a widely shared "Got Milk?" catcall story, handled with humor on her platforms.' },
  { year: '2022', event: 'Launches Patreon and OnlyFans for exclusive modeling content.' },
  { year: '2023', event: 'YouTube channel growth accelerates; begins collaborating with other digital creators.' },
  { year: '2024', event: 'Recognized as one of the rising lifestyle and fitness-adjacent influencers in her demographic.' },
  { year: '2025', event: 'Continues multi-platform expansion with millions of followers across TikTok and Instagram.' },
  { year: '2026', event: 'Remains active across all platforms; ongoing modeling work and content creation.' },
];

export const metadata: Metadata = {
  title: 'Yellz0 (Aniela Verbin) - Social Media Influencer & Model | ObjectWire',
  description:
    'Full biography of Yellz0, real name Aniela Verbin. Pennsylvania-born TikTok star, model, and content creator known for lifestyle content, her signature blonde look, and millions of followers across social media.',
  keywords: [
    'Yellz0',
    'Aniela Verbin',
    'Yellz0 TikTok',
    'Yellz0 Instagram',
    'Yellz0 YouTube',
    'Yellz0 OnlyFans',
    'Yellz0 real name',
    'Yellz0 age',
    'Yellz0 bra size',
    'Yellz0 measurements',
    'Yellz0 model',
    'social media influencer',
    'TikTok model',
    'Pennsylvania influencer',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/yellz0',
  },
  openGraph: {
    title: 'Yellz0 (Aniela Verbin) - TikTok Star, Model & Content Creator',
    description:
      'Profile of Yellz0: real name Aniela Verbin. Pennsylvania-born TikTok star, lifestyle model, and one of social media\'s most recognizable faces. Full biography, facts, and coverage.',
    type: 'article',
    url: 'https://www.objectwire.org/influencer/yellz0',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'Influencer',
    tags: ['Yellz0', 'TikTok', 'Model', 'Influencer', 'Social Media', 'Aniela Verbin'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yellz0 (Aniela Verbin) - TikTok Star & Model',
    description:
      'Full profile of Yellz0, real name Aniela Verbin. Pennsylvania-born TikTok influencer, model, and content creator.',
  },
};

export default function Yellz0Page() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Yellz0 (Aniela Verbin) - Social Media Influencer & Model"
        description="Full biography of Yellz0, real name Aniela Verbin. Pennsylvania-born TikTok star, model, and content creator known for lifestyle content and millions of followers across social media."
        author="ObjectWire Editorial"
        publishedTime="2026-02-20T10:00:00Z"
        modifiedTime="2026-02-20T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Influencer"
        keywords={['Yellz0', 'Aniela Verbin', 'TikTok', 'model', 'influencer', 'social media']}
      />

      <div className="min-h-screen bg-[#faf9f6]">

        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'Influencer', item: '/influencer' },
                { name: 'Yellz0', item: SLUG },
              ]}
            />
          </div>
        </div>

        {/* Hero Banner */}
        <header style={{ background: 'linear-gradient(135deg, #1a0533 0%, #4a0e6b 40%, #c026d3 100%)' }}>
          <div className="max-w-5xl mx-auto px-4 py-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Thumbnail */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden border-4 shrink-0" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                <Image
                  src="/influncer/yellz0_what_cup_size.PNG"
                  alt="Yellz0 Aniela Verbin"
                  fill
                  className="object-cover object-top"
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
                    TikTok · Model · Lifestyle
                  </span>
                </div>

                <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.5rem' }}>
                  Yellz0
                  <span style={{ display: 'block', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: 400, color: 'rgba(255,255,255,0.8)', marginTop: '0.4rem' }}>
                    Aniela Verbin · TikTok Star · Model · Content Creator
                  </span>
                </h1>

                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '600px', marginBottom: '1.2rem' }}>
                  Pennsylvania-born social media influencer who built a multi-million follower
                  presence through TikTok, Instagram, and YouTube. Known for her striking look,
                  lifestyle content, and authentic personality online.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <a href="https://www.youtube.com/@yellz0" target="_blank" rel="noopener noreferrer"
                    style={{ background: '#dc2626', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    📺 YouTube
                  </a>
                  <a href="https://www.tiktok.com/@yellz0" target="_blank" rel="noopener noreferrer"
                    style={{ background: '#0f172a', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    🎵 TikTok
                  </a>
                  <a href="https://www.instagram.com/yellz0" target="_blank" rel="noopener noreferrer"
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

              {/* WHO */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Who Is Yellz0?</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    <strong>Aniela Verbin</strong>, widely known by her online alias <strong>Yellz0</strong>,
                    is an American social media influencer, model, and digital content creator born on{' '}
                    <strong>November 5, 2000</strong>, in <strong>Pennsylvania, United States</strong>. At 25
                    years old, she has established herself as one of the more recognizable faces in the
                    lifestyle and model-influencer space, amassing millions of followers across TikTok,
                    Instagram, YouTube, Patreon, and OnlyFans.
                  </p>
                  <p>
                    She is best known for her <strong>lip-sync videos</strong>, <strong>response content</strong>,
                    and <strong>lifestyle photography</strong> across TikTok and Instagram. Her aesthetic,
                    defined by <strong>blonde hair with dark roots</strong> and <strong>dark brown eyes</strong>,
                    has become a signature look that resonates strongly with her audience demographic.
                  </p>
                  <p>
                    Beyond standard short-form content, Yellz0 operates as a professional model. She
                    participates in both mainstream lifestyle shoots and subscription-based exclusive
                    content through platforms like <strong>OnlyFans</strong> and <strong>Patreon</strong>,
                    where she offers a more personal view of her creative work to paying subscribers.
                  </p>
                </div>
              </section>

              {/* FEATURED VIDEO */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Featured Video</h2>
                <p className="text-gray-600 text-sm mb-4">Watch Yellz0 in action, one of her most-viewed videos on YouTube.</p>
                <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src="https://www.youtube.com/embed/PNa7V8DQ1E0"
                    title="Yellz0 Featured YouTube Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  />
                </div>
              </section>

              {/* WHAT SHE DOES */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Content & Career</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Yellz0&apos;s content output spans multiple formats and platforms. On <strong>TikTok</strong>,
                    her primary platform for viral growth, she produces lip-sync performances, response
                    videos, and candid lifestyle moments. Her delivery, often humorous and self-aware,
                    consistently connects with audiences looking for relatable, unfiltered content from a
                    creator they find genuinely entertaining.
                  </p>
                  <p>
                    On <strong>Instagram</strong>, her presence is more curated, showcasing professional
                    modeling shots and lifestyle photography that highlight her aesthetic brand. The platform
                    has allowed her to attract brand partnership opportunities and grow a secondary audience
                    separate from her more casual TikTok following.
                  </p>
                  <p>
                    Her <strong>YouTube channel</strong> offers longer-form content, giving fans a deeper
                    look at her personality beyond the short-form clips. She also collaborates with fellow
                    influencers in the digital space, frequently appearing in crossover content that expands
                    her reach into adjacent creator communities.
                  </p>
                </div>

                <div className="not-prose mt-6 border-l-4 border-purple-500 pl-5 py-4 bg-white rounded-r-xl shadow-sm border border-l-0 border-gray-100">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <h3 className="font-bold text-gray-900">Multi-Platform Presence</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Yellz0 operates simultaneously across TikTok, Instagram, YouTube, Patreon, and OnlyFans,
                    a diversified content strategy that insulates her audience reach from any single platform&apos;s
                    algorithm or policy changes.
                  </p>
                </div>

                {/* Platform breakdown cards */}
                <div className="space-y-4 mt-6">
                  {[
                    {
                      name: 'TikTok',
                      accent: 'border-gray-900',
                      dot: 'bg-gray-900',
                      desc: 'Her primary platform for viral growth. Lip-syncs, response videos, and candid lifestyle clips routinely reach millions of views. Her humor and self-awareness are a defining feature of her TikTok identity.',
                    },
                    {
                      name: 'Instagram',
                      accent: 'border-pink-500',
                      dot: 'bg-pink-500',
                      desc: 'A more polished modeling portfolio and lifestyle photography showcase. Instagram functions as Yellz0\'s professional modeling presence and is used to attract brand partnerships.',
                    },
                    {
                      name: 'YouTube',
                      accent: 'border-red-500',
                      dot: 'bg-red-500',
                      desc: 'Longer-form content that gives subscribers a deeper look into her personality and daily life. YouTube also serves as a searchable archive that drives evergreen traffic to her brand.',
                      link: { href: 'https://www.youtube.com/@yellz0', label: '→ Watch Yellz0 on YouTube', external: true },
                    },
                    {
                      name: 'OnlyFans & Patreon',
                      accent: 'border-blue-500',
                      dot: 'bg-blue-500',
                      desc: 'Subscription-based platforms where Yellz0 shares exclusive modeling content for paying subscribers. These platforms represent a significant revenue stream outside of ad-supported social media.',
                    },
                  ].map((v) => (
                    <div key={v.name} className={`border-l-4 ${v.accent} pl-5 py-4 bg-white rounded-r-xl shadow-sm border border-l-0 border-gray-100`}>
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-2 h-2 rounded-full ${v.dot}`} />
                        <h3 className="font-bold text-gray-900">{v.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                      {v.link && (
                        <a href={v.link.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-red-600 hover:underline text-xs font-semibold">
                          {v.link.label}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ORIGIN */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Background & Origins</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Aniela Verbin grew up in <strong>Pennsylvania</strong>, a state not typically associated
                    with the Los Angeles or New York content creator hubs, but one that produced a creator who
                    has more than held her own against coast-based competition. Her Midwestern roots arguably
                    contribute to a relatability factor that resonates with broad American audiences who aren&apos;t
                    always represented in influencer culture dominated by major metro creators.
                  </p>
                  <p>
                    She began building her online presence in the late 2010s, with growth accelerating significantly
                    around <strong>2020–2021</strong> during the TikTok boom. The platform&apos;s algorithmic
                    ability to surface new creators allowed her to rapidly build a following without the gate-keeping
                    that characterized earlier social media models.
                  </p>
                  <p>
                    Her <strong>aesthetic identity</strong>, blonde hair with dark roots and dark brown eyes,
                    became a consistent visual brand across platforms, creating instant recognizability in
                    crowded social media feeds.
                  </p>
                </div>
              </section>

              {/* WHY FAMOUS */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Why Is Yellz0 Famous?</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Yellz0&apos;s rise to social media prominence is the product of a few things working
                    simultaneously: a <strong>visually distinctive look</strong>, a comfortable and
                    entertaining on-camera presence, and a content strategy that mixes humor with
                    genuine lifestyle authenticity.
                  </p>
                  <p>
                    One of her most widely cited viral moments involved a story she shared about a unique
                    catcall experience at a park. A man reportedly used the phrase <strong>&quot;Got Milk?&quot;</strong>
                    as a pickup line, which she recounted with characteristic humor on her platforms. The story
                    spread organically across social media, introducing her to audiences who had not previously
                    come across her content, and demonstrated her ability to turn real-life moments into
                    shareable, entertaining narratives.
                  </p>
                  <p>
                    Her combination of <strong>gym-adjacent lifestyle content</strong>, modeling aesthetics,
                    and down-to-earth personality has carved out a distinct niche in the influencer ecosystem,
                    one that bridges fitness culture, lifestyle content, and modeling without fully committing
                    to any single category.
                  </p>
                </div>

                {/* Bra size FAQ section - H4 targeting SEO query */}
                <div className="not-prose mt-8 bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-base" id="what-bra-size-does-yellz0-wear">
                    What Bra Size Does Yellz0 Wear?
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="relative w-full sm:w-48 h-52 sm:h-52 rounded-lg overflow-hidden border border-purple-200 shrink-0">
                      <Image
                        src="/influncer/yellz0_what_cup_size.PNG"
                        alt="Yellz0 bra size Aniela Verbin measurements"
                        fill
                        className="object-cover object-top"
                        sizes="192px"
                      />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        Yellz0 wears a <strong>DDD bra size</strong>. This is one of the most frequently searched
                        physical stats about the creator, reflecting the significant attention her physique receives
                        from her fanbase and the broader internet audience.
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        A DDD (also written as <strong>E</strong> in European sizing) cup is categorized as a
                        full-bust size. Combined with her blonde aesthetic and fitness-adjacent lifestyle content,
                        her figure is a frequent discussion point in communities dedicated to tracking influencer
                        measurements and physical characteristics.
                      </p>
                      <p className="text-gray-500 text-xs italic">
                        Source: Publicly available social media information and community-verified records.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* VIRAL MOMENTS */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Viral Moments & Public Image</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Yellz0&apos;s public image has been shaped as much by individual moments as by the
                    sustained body of her work. Her humor in handling the viral &quot;Got Milk?&quot; catcall
                    story exemplifies how she navigates public attention: with self-awareness and a willingness
                    to lean into the absurdity of internet fame rather than resist it.
                  </p>
                  <p>
                    Her collaborations with other influencers in the lifestyle and digital creator space have
                    also expanded her profile, introducing her content to audiences she would not have reached
                    organically. In the ecosystem of &quot;gym-adjacent&quot; content creators, she occupies a
                    space where fitness aesthetics, lifestyle, and personality intersect.
                  </p>
                  <p>
                    Unlike many creators who carefully manage their image toward a single professional direction,
                    Yellz0 has maintained an accessible personality that feels consistent whether she is posting
                    a polished modeling shot on Instagram or a casual response video on TikTok. This consistency
                    across formats builds trust and reduces follower churn.
                  </p>
                </div>
              </section>

            </article>

            {/* ═══ SIDEBAR ═══ */}
            <aside className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">

                {/* Infobox */}
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div style={{ background: 'linear-gradient(135deg, #1a0533, #4a0e6b, #c026d3)', padding: '0' }}>
                    <div className="relative w-full h-56">
                      <Image
                        src="/influncer/yellz0_what_cup_size.PNG"
                        alt="Yellz0 Aniela Verbin"
                        fill
                        className="object-cover object-top"
                        sizes="300px"
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,5,51,0.90) 0%, transparent 50%)' }} />
                      <div style={{ position: 'absolute', bottom: '10px', left: '14px', right: '14px' }}>
                        <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>Yellz0</h2>
                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.7rem', margin: '2px 0 0' }}>Aniela Verbin · Born November 5, 2000</p>
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

                {/* YouTube CTA */}
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">Watch Yellz0</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    Subscribe to Yellz0&apos;s YouTube channel for her latest videos, vlogs, and collaborations.
                  </p>
                  <a
                    href="https://www.youtube.com/@yellz0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors"
                  >
                    📺 YouTube Channel
                  </a>
                </div>

                {/* Career Timeline */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Career Timeline</h3>
                  <div className="space-y-3">
                    {timeline.map((t) => (
                      <div key={t.year + t.event.slice(0, 10)} className="flex gap-3 text-xs">
                        <span className="text-purple-700 font-bold w-10 shrink-0">{t.year}</span>
                        <span className="text-gray-600 leading-relaxed">{t.event}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Coverage */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Related Coverage</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/influencer" className="text-blue-600 hover:underline">→ Influencer Hub</Link></li>
                    <li><Link href="/influencer/tren-twins" className="text-blue-600 hover:underline">→ Tren Twins Profile</Link></li>
                    <li><Link href="/influencer/iman-gadzhi" className="text-blue-600 hover:underline">→ Iman Gadzhi Profile</Link></li>
                    <li><Link href="/youtube" className="text-blue-600 hover:underline">→ YouTube Coverage</Link></li>
                    <li><Link href="/social" className="text-blue-600 hover:underline">→ Social Media Hub</Link></li>
                    <li><Link href="/news" className="text-blue-600 hover:underline">→ Latest News</Link></li>
                  </ul>
                </div>

                {/* Meta */}
                <div className="text-xs text-gray-400 space-y-1 px-1">
                  <p>Published: February 20, 2026</p>
                  <p>Author: ObjectWire Editorial</p>
                  <p>Category: Influencer · Lifestyle · Model</p>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </div>
    </SEOWrapper>
  );
}
