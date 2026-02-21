import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';

const SLUG = '/influencer/tren-twins';

const infoboxRows = [
  { label: 'Full Names', value: 'Christian & Michael Gaiera' },
  { label: 'Born', value: 'April 2, 2001' },
  { label: 'Origin', value: 'Michigan, USA' },
  { label: 'Occupation', value: 'Fitness Influencers, Bodybuilders' },
  { label: 'YouTube', value: '@TrenTwins (4M+ subs)' },
  { label: 'TikTok', value: '@TrenTwins' },
  { label: 'Mike Height', value: '~5\'6"' },
  { label: 'Chris Height', value: '~5\'7"' },
  { label: 'Weight', value: '~185–215 lbs each' },
  { label: 'Brand Partner', value: 'YoungLA' },
  { label: 'Status', value: 'Active (2026)' },
];

const timeline = [
  { year: '2001', event: 'Christian and Michael Gaiera born April 2 in Michigan. Identical twins.' },
  { year: '2019', event: 'Both enroll in college — Michael studying data analytics, Christian pre-med.' },
  { year: '2020', event: 'Begin serious competitive lifting and document their training online.' },
  { year: '2022', event: 'Go viral on YouTube and TikTok with high-intensity training and twin banter, amassing millions of followers.' },
  { year: '2022', event: 'Sign sponsorship deal with YoungLA, the fitness apparel brand.' },
  { year: '2023', event: 'Christian hospitalized after consuming excessive caffeine and pre-workout supplements — they speak openly about the incident.' },
  { year: '2023', event: 'Collaborate with Chris Bumstead (4× Classic Physique Olympia champion) and Jay Cutler (4× Mr. Olympia).' },
  { year: '2024', event: 'Channel surpasses 4M subscribers; brand partnerships and merchandise expand.' },
  { year: '2025', event: 'Remain one of the most influential fitness duos online, known for honesty about PED use.' },
  { year: '2026', event: 'Continuing content creation, YoungLA partnership, and competitive bodybuilding appearances.' },
];

const ventures = [
  {
    name: 'YoungLA Partnership',
    accent: 'border-yellow-500',
    dot: 'bg-yellow-500',
    desc: 'The Tren Twins are among the biggest faces of YoungLA, a California-based fitness apparel brand popular among gym culture. Their authentic, raw content style aligns directly with YoungLA\'s brand identity targeting serious lifters and gym-goers.',
    link: { href: '/clothing/young-la', label: '→ Read our full YoungLA brand coverage' },
  },
  {
    name: 'YouTube & TikTok',
    accent: 'border-red-500',
    dot: 'bg-red-500',
    desc: 'Their YouTube channel features heavy compound lifts, gym Q&As, and twin dynamic banter. TikTok clips of their explosive training sessions regularly go viral, attracting an audience beyond traditional fitness communities.',
  },
  {
    name: 'Chris Bumstead Collab',
    accent: 'border-blue-500',
    dot: 'bg-blue-500',
    desc: 'Collaborated with Chris Bumstead, the reigning 4× Classic Physique Olympia champion. The crossover brought their content to a serious competitive bodybuilding audience and vice versa.',
  },
  {
    name: 'Jay Cutler Collab',
    accent: 'border-green-500',
    dot: 'bg-green-500',
    desc: 'Trained and appeared with 4× Mr. Olympia Jay Cutler, one of the most iconic professional bodybuilders in history. The collaboration validated their standing in the serious bodybuilding world.',
  },
];

export const metadata: Metadata = {
  title: 'Tren Twins (Christian & Michael Gaiera) — Fitness Influencers & YoungLA Athletes | ObjectWire',
  description:
    'Full profile of the Tren Twins — Christian and Michael Gaiera. Michigan-born identical twins who became viral fitness influencers, bodybuilders, and YoungLA brand athletes. Their rise, controversies, and impact on gym culture.',
  keywords: [
    'Tren Twins',
    'Christian Gaiera',
    'Michael Gaiera',
    'Tren Twins YouTube',
    'Tren Twins fitness',
    'YoungLA Tren Twins',
    'Tren Twins bodybuilding',
    'Tren Twins steroids',
    'Tren Twins Chris Bumstead',
    'Tren Twins gym',
    'fitness influencers',
    'Tren Twins TikTok',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/tren-twins',
  },
  openGraph: {
    title: 'Tren Twins — Christian & Michael Gaiera | Fitness Influencers & YoungLA Athletes',
    description:
      'Profile of the Tren Twins: viral fitness influencers, YoungLA brand athletes, and one of the most talked-about duos in gym culture. Honest, raw, and built different.',
    type: 'article',
    url: 'https://www.objectwire.org/influencer/tren-twins',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'Influencer',
    tags: ['Tren Twins', 'Fitness', 'Bodybuilding', 'YoungLA', 'YouTube', 'Influencer'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tren Twins — Christian & Michael Gaiera | Fitness Influencers',
    description:
      'Full profile of the Tren Twins: Michigan-born bodybuilders, YoungLA athletes, and some of the most authentic fitness creators on the internet.',
  },
};

export default function TrenTwinsPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Tren Twins (Christian & Michael Gaiera) — Fitness Influencers & YoungLA Athletes"
        description="Full profile of the Tren Twins — Christian and Michael Gaiera. Michigan-born identical twins who became viral fitness influencers, bodybuilders, and YoungLA brand athletes."
        author="ObjectWire Editorial"
        publishedTime="2026-02-20T10:00:00Z"
        modifiedTime="2026-02-20T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Influencer"
        keywords={['Tren Twins', 'Christian Gaiera', 'Michael Gaiera', 'YoungLA', 'fitness influencer', 'bodybuilding']}
      />

      <div className="min-h-screen bg-[#faf9f6]">

        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'Influencer', item: '/influencer' },
                { name: 'Tren Twins', item: SLUG },
              ]}
            />
          </div>
        </div>

        {/* Hero Banner */}
        <header style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #16a34a 100%)' }}>
          <div className="max-w-5xl mx-auto px-4 py-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Thumbnail */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden border-4 shrink-0" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                <Image
                  src="/influncer/tren_twins_wiki.PNG"
                  alt="Tren Twins — Christian and Michael Gaiera"
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
                    Fitness · Bodybuilding · YoungLA
                  </span>
                </div>

                <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.5rem' }}>
                  Tren Twins
                  <span style={{ display: 'block', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: 400, color: 'rgba(255,255,255,0.8)', marginTop: '0.4rem' }}>
                    Christian &amp; Michael Gaiera · Fitness Influencers · YoungLA Athletes
                  </span>
                </h1>

                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '600px', marginBottom: '1.2rem' }}>
                  Michigan-born identical twins who built a fitness empire on raw authenticity,
                  manic energy, and physiques that defy their compact frames. The Tren Twins
                  are among the most talked-about names in gym culture.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <a href="https://www.youtube.com/@TrenTwins" target="_blank" rel="noopener noreferrer"
                    style={{ background: '#dc2626', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    📺 YouTube
                  </a>
                  <a href="https://www.tiktok.com/@trentwins" target="_blank" rel="noopener noreferrer"
                    style={{ background: '#0f172a', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    🎵 TikTok
                  </a>
                  <a href="https://www.instagram.com/thetrentwins" target="_blank" rel="noopener noreferrer"
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Who Are the Tren Twins?</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    <strong>Christian and Michael Gaiera</strong>, collectively known as the <strong>Tren Twins</strong>,
                    are identical twin brothers born on <strong>April 2, 2001</strong>, in Michigan. Before social
                    media fame, both brothers were college athletes — Michael studied data analytics while Christian
                    was enrolled in a pre-med program. They abandoned traditional academic trajectories to pursue
                    fitness content creation full time.
                  </p>
                  <p>
                    Their moniker is a deliberate double entendre: <em>"Tren"</em> is a reference to
                    Trenbolone, a powerful anabolic steroid commonly discussed in bodybuilding circles, and
                    the word <em>"train"</em> — a nod to their grueling workout regimen. The name immediately
                    signals their no-filter approach to fitness content.
                  </p>
                  <p>
                    Despite being relatively short by bodybuilding standards — Mike at approximately
                    <strong> 5&apos;6"</strong> and Chris at <strong>5&apos;7"</strong> — both brothers carry
                    an estimated <strong>185 to 215 lbs</strong> of dense muscle mass. Their strength is
                    disproportionate to their stature; both regularly bench press over <strong>400 lbs</strong>.
                  </p>

                  {/* Comparison Table */}
                  <div className="not-prose mt-6 overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr style={{ background: '#0f172a', color: '#fff' }}>
                          <th className="px-4 py-3 text-left font-semibold">Feature</th>
                          <th className="px-4 py-3 text-left font-semibold">Michael Gaiera</th>
                          <th className="px-4 py-3 text-left font-semibold">Christian Gaiera</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {[
                          ['Height', '~5\'6"', '~5\'7"'],
                          ['Weight', '~185–215 lbs', '~185–215 lbs'],
                          ['College Focus', 'Data Analytics', 'Pre-Med'],
                          ['Known For', 'Calmer energy, training form', 'Manic energy, caffeine incident'],
                          ['Birth Order', 'Twin', 'Twin'],
                        ].map(([feature, mike, chris]) => (
                          <tr key={feature} className="even:bg-gray-50">
                            <td className="px-4 py-2.5 font-semibold text-gray-700">{feature}</td>
                            <td className="px-4 py-2.5 text-gray-600">{mike}</td>
                            <td className="px-4 py-2.5 text-gray-600">{chris}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* WHAT */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">What Do They Do?</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    The Tren Twins produce fitness and lifestyle content centered on <strong>heavy compound
                    lifting</strong>, <strong>bodybuilding culture</strong>, and unfiltered commentary on the
                    fitness industry. Their YouTube channel features gym sessions, Q&amp;As, challenge videos,
                    and collaborations with elite bodybuilders. On TikTok, short clips of their superhuman
                    strength and back-and-forth banter routinely go viral.
                  </p>
                  <p>
                    A defining characteristic of their content is <strong>raw authenticity</strong>. Unlike
                    many fitness creators who curate a polished, aspirational image, the Tren Twins embrace
                    chaos — arguing mid-rep, making each other laugh during max lifts, and openly discussing
                    topics that most fitness influencers avoid.
                  </p>
                  <p>
                    They are also professional brand athletes. Their highest-profile partnership is with
                    <strong> YoungLA</strong>, a California-based fitness apparel brand. The twins embody
                    YoungLA&apos;s identity: unapologetically muscular, gym-obsessed, and accessible
                    to everyday lifters.
                  </p>
                </div>

                <div className="not-prose mt-6 border-l-4 border-yellow-500 pl-5 py-4 bg-white rounded-r-xl shadow-sm border border-l-0 border-gray-100">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <h3 className="font-bold text-gray-900">Brand Partnership: YoungLA</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The Tren Twins are among the flagship faces of YoungLA — a fitness apparel brand
                    gaining serious traction in gym culture. Their content authentically integrates
                    YoungLA gear without feeling forced, a natural fit given their shared audience demographic.
                  </p>
                  <Link href="/clothing/young-la" className="inline-block mt-2 text-yellow-700 hover:underline text-xs font-semibold">
                    → Read our full YoungLA brand profile and coverage
                  </Link>
                </div>

                {/* Ventures */}
                <div className="space-y-4 mt-6">
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

              {/* WHERE */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Where Did They Come From?</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    The Gaiera brothers are originally from <strong>Michigan</strong>, where they grew up
                    as athletes. Both played college football before transitioning their competitive drive
                    from the field to the gym floor.
                  </p>
                  <p>
                    Their digital footprint grew from <strong>YouTube and TikTok</strong>, with their
                    breakout moment arriving in <strong>2022</strong> when several training videos went
                    viral. The platform shift from college sports to social media fitness content was
                    rapid — within months they had millions of followers, which led directly to their
                    YoungLA deal and high-profile bodybuilding collaborations.
                  </p>
                  <p>
                    Today, they operate from the broader gym and fitness content ecosystem in the United
                    States, frequently appearing at fitness expos, brand events, and bodybuilding competitions
                    alongside household names in the sport.
                  </p>
                </div>
              </section>

              {/* WHY */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Why Are They Famous?</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    The Tren Twins became famous for a combination of factors that are difficult to
                    manufacture: <strong>elite-level physiques, genuine twin chemistry, and a refusal
                    to pretend</strong>. In a fitness content world full of polished motivational
                    content, their chaotic energy and brutal honesty stood out immediately.
                  </p>
                  <p>
                    A major component of their notoriety is their <strong>openness about
                    performance-enhancing drug (PED) use</strong>. While most fitness influencers
                    claim natural status or stay deliberately vague, the Tren Twins have discussed
                    steroid use publicly. This has polarized audiences — some praise their
                    transparency, while others argue they normalize dangerous substances to a young,
                    impressionable fanbase.
                  </p>
                  <p>
                    The twins have also been candid about the <strong>risks of their lifestyle</strong>.
                    In a widely-covered incident, <strong>Christian was hospitalized</strong> after
                    consuming excessive amounts of caffeine and pre-workout supplements. Rather than
                    hiding the event, they shared it openly — a decision that paradoxically increased
                    their credibility with fans who value authenticity over image management.
                  </p>
                  <p>
                    Their <strong>strength-to-size ratio</strong> also plays a role. Bench pressing
                    over 400 lbs at 5&apos;6" and 5&apos;7" is a visually striking, memorable feat
                    that clips well on social media and invites debate — both essential ingredients
                    for viral fitness content.
                  </p>
                </div>

                {/* Controversy callout */}
                <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Controversies &amp; Controversies</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'PED Transparency', detail: 'Openly discussed steroid use — praised for honesty, criticized for potential influence on young audiences.' },
                      { label: 'Caffeine Hospitalization', detail: 'Christian was hospitalized after extreme stimulant intake. Addressed publicly without apology or spin.' },
                      { label: 'Name Controversy', detail: 'The "Tren" moniker directly references Trenbolone, a Schedule III controlled substance in the US.' },
                    ].map((c) => (
                      <div key={c.label} className="flex gap-3 text-sm">
                        <span className="text-red-600 font-bold shrink-0">⚠</span>
                        <div>
                          <span className="font-semibold text-gray-900">{c.label}: </span>
                          <span className="text-gray-600">{c.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

            </article>

            {/* ═══ SIDEBAR ═══ */}
            <aside className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">

                {/* Infobox */}
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e3a5f, #16a34a)', padding: '0' }}>
                    <div className="relative w-full h-48">
                      <Image
                        src="/influncer/tren_twins_wiki.PNG"
                        alt="Tren Twins — Christian and Michael Gaiera"
                        fill
                        className="object-cover object-top"
                        sizes="300px"
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 50%)' }} />
                      <div style={{ position: 'absolute', bottom: '10px', left: '14px', right: '14px' }}>
                        <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>Tren Twins</h2>
                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.7rem', margin: '2px 0 0' }}>Christian &amp; Michael Gaiera · Born April 2, 2001</p>
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

                {/* YoungLA CTA */}
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">Brand Partner</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    The Tren Twins are leading athletes for <strong>YoungLA</strong> — one of the fastest-growing
                    fitness apparel brands in the US.
                  </p>
                  <Link href="/clothing/young-la" className="block text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xs py-2.5 px-4 rounded-lg transition-colors">
                    → YoungLA Full Coverage
                  </Link>
                </div>

                {/* Career Timeline */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Career Timeline</h3>
                  <div className="space-y-3">
                    {timeline.map((t) => (
                      <div key={t.year + t.event.slice(0, 10)} className="flex gap-3 text-xs">
                        <span className="text-green-700 font-bold w-10 shrink-0">{t.year}</span>
                        <span className="text-gray-600 leading-relaxed">{t.event}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Coverage */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Related Coverage</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/clothing/young-la" className="text-blue-600 hover:underline">→ YoungLA Brand Profile</Link></li>
                    <li><Link href="/influencer" className="text-blue-600 hover:underline">→ Influencer Hub</Link></li>
                    <li><Link href="/influencer/iman-gadzhi" className="text-blue-600 hover:underline">→ Iman Gadzhi Profile</Link></li>
                    <li><Link href="/youtube" className="text-blue-600 hover:underline">→ YouTube Coverage</Link></li>
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
