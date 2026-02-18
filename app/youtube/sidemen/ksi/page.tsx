import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';

const SLUG = '/youtube/sidemen/ksi';

const infoRows = [
  { label: 'Real Name', value: 'Olajide Olayinka Williams Olatunji' },
  { label: 'Born', value: 'June 19, 1993' },
  { label: 'Origin', value: 'Watford, England, UK' },
  { label: 'Nationality', value: 'British-Nigerian' },
  { label: 'YouTube', value: '@KSI (24M+ subscribers)' },
  { label: 'Boxing Record', value: '6W – 0L – 1D' },
  { label: 'Music', value: 'Multi-Platinum Artist' },
  { label: 'PRIME', value: 'Co-Founder (w/ Logan Paul)' },
  { label: 'Started', value: '2009 (FIFA videos)' },
  { label: 'Sidemen', value: 'Founding Member (2013)' },
  { label: 'Net Worth', value: '$50M+ (est.)' },
  { label: 'Status', value: 'Active (2026)' },
];

const tocItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'youtube', label: 'YouTube Career' },
  { id: 'sidemen', label: 'Sidemen' },
  { id: 'boxing', label: 'Boxing Career' },
  { id: 'music', label: 'Music Career' },
  { id: 'prime', label: 'PRIME Hydration' },
  { id: 'business', label: 'Business Ventures' },
  { id: 'achievements', label: 'Achievements' },
];

const boxingRecord = [
  { opponent: 'Joe Weller', year: '2018', result: 'Win (TKO 3)', event: 'Copper Box Arena' },
  { opponent: 'Logan Paul I', year: '2018', result: 'Draw (split)', event: 'Manchester Arena' },
  { opponent: 'Logan Paul II', year: '2019', result: 'Win (split)', event: 'Staples Center' },
  { opponent: 'Gib', year: '2020', result: 'Win (TKO 1)', event: 'Meridian at Queen Elizabeth' },
  { opponent: 'FaZe Temperrr', year: '2021', result: 'Win (TKO 2)', event: 'OVO Arena Wembley' },
  { opponent: 'Swarmz', year: '2022', result: 'Win (TKO 2)', event: 'OVO Arena Wembley' },
  { opponent: 'Luis Alcaraz Pineda', year: '2022', result: 'Win (TKO 6)', event: 'OVO Arena Wembley' },
];

export const metadata: Metadata = {
  title: 'KSI (JJ Olatunji) — YouTuber, Boxer, Musician & PRIME Co-Founder | ObjectWire',
  description:
    'Complete profile of KSI (JJ Olatunji): Sidemen founding member, professional boxer with a 6-0-1 record, multi-platinum recording artist, and co-founder of PRIME Hydration. ObjectWire coverage hub.',
  keywords: [
    'KSI',
    'JJ Olatunji',
    'Sidemen',
    'KSI boxing record',
    'PRIME Hydration',
    'KSI music',
    'UK YouTuber',
    'KSI rapper',
    'KSI Logan Paul',
    'KSI net worth',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/ksi',
  },
  openGraph: {
    title: 'KSI (JJ Olatunji) — YouTuber, Boxer, Musician & PRIME Co-Founder',
    description:
      'Full profile of KSI: from FIFA videos to professional boxing, chart-topping music, and co-founding PRIME Hydration with Logan Paul.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/sidemen/ksi',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'YouTube',
    tags: ['KSI', 'Sidemen', 'PRIME', 'Boxing', 'Music'],
    images: [
      {
        url: 'https://www.objectwire.org/sidemen/ksi-talking-head.gif',
        width: 800,
        height: 600,
        alt: 'KSI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KSI (JJ Olatunji) | ObjectWire',
    description: 'Full profile of KSI: YouTube, boxing, music, PRIME Hydration, and Sidemen.',
    images: ['https://www.objectwire.org/sidemen/ksi-talking-head.gif'],
  },
};

export default function KSIPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="KSI (JJ Olatunji) — YouTuber, Boxer, Musician & PRIME Co-Founder"
        description="Complete profile of KSI (JJ Olatunji): Sidemen founding member, professional boxer, multi-platinum artist, and co-founder of PRIME Hydration."
        author="ObjectWire Editorial"
        publishedTime="2026-02-18T10:00:00Z"
        modifiedTime="2026-02-18T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="YouTube"
        keywords={['KSI', 'JJ Olatunji', 'Sidemen', 'PRIME Hydration', 'KSI boxing', 'KSI music']}
      />

      <div className="min-h-screen bg-[#faf9f6]">

        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'YouTube', item: '/youtube' },
                { name: 'Sidemen', item: '/youtube/sidemen' },
                { name: 'KSI', item: SLUG },
              ]}
            />
          </div>
        </div>

        {/* Page title bar */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              KSI{' '}
              <span className="text-base font-normal text-gray-500">(JJ Olatunji)</span>
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              British YouTuber · Professional Boxer · Musician · Entrepreneur
            </p>
          </div>
        </div>

        {/* Wikipedia-style layout */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-10">

            {/* ═══ MAIN CONTENT (3 cols) ═══ */}
            <main className="lg:col-span-3 space-y-10">

              {/* Table of Contents */}
              <nav className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <p className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3">Contents</p>
                <ol className="grid sm:grid-cols-2 gap-1 text-sm">
                  {tocItems.map((item, i) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                        {i + 1}. {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Overview */}
              <section id="overview">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    <strong>KSI</strong> (born <strong>Olajide Olayinka Williams Olatunji</strong> on June 19, 1993) is a
                    British-Nigerian YouTuber, professional boxer, recording artist, and entrepreneur from Watford, England.
                    He is best known as a founding member of the <Link href="/youtube/sidemen" className="text-blue-600 hover:underline">Sidemen</Link>,
                    the UK&apos;s most successful YouTube collective, and as the co-founder of{' '}
                    <strong>PRIME Hydration</strong> alongside <Link href="/youtube/logan-paul" className="text-blue-600 hover:underline">Logan Paul</Link>.
                  </p>
                  <p>
                    KSI began his YouTube career in 2009 uploading FIFA gaming commentary videos before rapidly expanding into vlogs,
                    challenges, and viral content. He has accumulated over <strong>24 million subscribers</strong> on his main channel,
                    making him one of the most-subscribed British YouTubers of all time.
                  </p>
                  <p>
                    Beyond YouTube, KSI has established himself as a legitimate professional boxer with a record of{' '}
                    <strong>6 wins, 0 losses, and 1 draw</strong>, a multi-platinum recording artist with collaborations
                    spanning artists like Lil Wayne, Rick Ross, and Anne-Marie, and a co-founder of PRIME Hydration — a
                    sports beverage brand that generated over <strong>$1.2 billion in revenue</strong> within its first two
                    years on the market.
                  </p>
                </div>
              </section>

              {/* YouTube Career */}
              <section id="youtube">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">YouTube Career</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    KSI launched his YouTube channel in 2009 at the age of 15, initially uploading FIFA gaming videos and
                    commentary. His energetic personality, comedic timing, and willingness to respond directly to comments
                    and fan feedback helped him rapidly grow his audience during YouTube&apos;s early gaming era.
                  </p>
                  <p>
                    By 2012, KSI had diversified his content into vlogs, challenges, and reaction videos, capitalizing on
                    the growing demand for personality-driven content rather than pure gameplay. His controversial and
                    often self-deprecating humor consistently drove views and engagement.
                  </p>
                  <p>
                    His channel today spans gaming, music videos, boxing highlights, vlogs, and cross-content with fellow
                    Sidemen members. KSI&apos;s second channel, <strong>JJ Olatunji</strong>, supplements the main channel
                    with more personal, unfiltered content.
                  </p>
                </div>

                <div className="mt-5 grid sm:grid-cols-3 gap-4">
                  {[
                    { stat: '24M+', label: 'Main Channel Subscribers' },
                    { stat: '7B+', label: 'Total Channel Views' },
                    { stat: '2009', label: 'Year Channel Launched' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
                      <p className="text-2xl font-black text-red-600">{s.stat}</p>
                      <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sidemen */}
              <section id="sidemen">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Sidemen</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    In 2013, KSI co-founded the <Link href="/youtube/sidemen" className="text-blue-600 hover:underline">Sidemen</Link> —
                    a collective of seven British YouTubers that quickly became the UK&apos;s most-watched and commercially
                    successful creator group. Alongside KSI, the founding members include Miniminter, Zerkaa, TBJZL, Behzinga,
                    Vikkstar123, and W2S.
                  </p>
                  <p>
                    The Sidemen produce weekly collaborative videos, host charity football matches that routinely attract
                    over 50,000 live attendees, and operate the Sides brand — including clothing, food (Sides restaurants),
                    and entertainment ventures. Their combined subscriber count across all channels exceeds{' '}
                    <strong>100 million subscribers</strong>.
                  </p>
                  <p>
                    KSI is widely regarded as the Sidemen&apos;s breakout star, having achieved the greatest mainstream
                    crossover through his boxing career, music, and business ventures. However, all seven members have
                    independently built multi-million subscriber channels and separate business interests.
                  </p>
                </div>
              </section>

              {/* Boxing Career */}
              <section id="boxing">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Boxing Career</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    KSI&apos;s boxing career began as a response to online feuds but quickly evolved into a legitimate
                    athletic pursuit. His 2018 amateur fight against fellow YouTuber <strong>Joe Weller</strong> — which
                    he won via TKO in the third round — generated millions of views and proved that creator boxing events
                    could draw mainstream audiences.
                  </p>
                  <p>
                    This led to two monumental bouts against <Link href="/youtube/logan-paul" className="text-blue-600 hover:underline">Logan Paul</Link>,
                    first ending in a controversial split draw at Manchester Arena in August 2018, then a rematch in November
                    2019 at the Staples Center in Los Angeles — which KSI won by split decision. Both events broke pay-per-view
                    records for online streaming and drew mainstream sports media coverage.
                  </p>
                  <p>
                    KSI continued his boxing career with victories over FaZe Temperrr, Swarmz, and professional boxer
                    Luis Alcaraz Pineda, demonstrating a commitment to improving as a fighter rather than simply cashing
                    in on celebrity matchmaking.
                  </p>
                </div>

                {/* Boxing record table */}
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-sm border-collapse bg-white shadow-sm rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-gray-900 text-white">
                        <th className="text-left px-4 py-3 font-semibold">Opponent</th>
                        <th className="text-left px-4 py-3 font-semibold">Year</th>
                        <th className="text-left px-4 py-3 font-semibold">Result</th>
                        <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Venue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {boxingRecord.map((bout, i) => (
                        <tr key={bout.opponent} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 font-medium text-gray-900">{bout.opponent}</td>
                          <td className="px-4 py-3 text-gray-600">{bout.year}</td>
                          <td className="px-4 py-3">
                            <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${bout.result.startsWith('Win') ? 'bg-green-100 text-green-700' : bout.result.startsWith('Draw') ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                              {bout.result}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-gray-500 hidden sm:table-cell text-xs">{bout.event}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-gray-100 font-bold">
                        <td className="px-4 py-3 text-gray-900" colSpan={2}>Record</td>
                        <td className="px-4 py-3 text-green-700" colSpan={2}>6W – 0L – 1D</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </section>

              {/* Music Career */}
              <section id="music">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Music Career</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    KSI&apos;s music career began as a comedic extension of his YouTube brand but evolved into a
                    commercially successful and critically recognised body of work. His early tracks such as
                    <strong> &quot;Lamborghini&quot;</strong> (featuring P Money) and subsequent singles demonstrated that
                    he could produce music that resonated beyond his YouTube audience.
                  </p>
                  <p>
                    His 2020 single <strong>&quot;Lighter&quot;</strong> featuring Nathan Dawe peaked at number one on
                    the UK Singles Chart, making KSI the first UK YouTuber to achieve a number one record. He has since
                    released multiple studio albums and collaborated with established artists including{' '}
                    <strong>Lil Wayne, Rick Ross, Anne-Marie, Yungblud</strong>, and others.
                  </p>
                  <p>
                    KSI has headlined sold-out UK arena tours and performed at major festivals, blurring the lines
                    between internet celebrity and mainstream music artist. His music videos consistently accumulate
                    hundreds of millions of views on YouTube.
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    { title: '"Lighter" ft. Nathan Dawe', note: 'UK #1 single, 2020' },
                    { title: '"Holiday" ft. Tom Grennan', note: 'Top 5 UK hit' },
                    { title: '"Down Like That" ft. Rick Ross, Lil Baby, S-X', note: 'International collab, 2019' },
                    { title: '"Lamborghini" ft. P Money', note: 'Breakthrough track' },
                    { title: 'All Over The Place (Album)', note: '2021 studio album' },
                    { title: 'DISSIMULATION (Album)', note: '2020 debut album — UK Top 10' },
                  ].map((track) => (
                    <div key={track.title} className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm shadow-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full shrink-0" />
                      <span className="font-semibold text-gray-900">{track.title}</span>
                      <span className="text-gray-500 ml-auto text-xs shrink-0">{track.note}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* PRIME Hydration */}
              <section id="prime">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">PRIME Hydration</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    In January 2022, KSI and{' '}
                    <Link href="/youtube/logan-paul" className="text-blue-600 hover:underline">Logan Paul</Link> — former rivals
                    who had fought two boxing matches — co-founded <strong>PRIME Hydration</strong>, a sports drink and
                    hydration brand. The partnership between two of the internet&apos;s biggest personalities created one of
                    the fastest-growing consumer beverage brands in history.
                  </p>
                  <p>
                    PRIME generated over <strong>$1.2 billion in revenue within its first two years</strong>, a remarkable
                    achievement for any consumer product, let alone one launched by content creators without traditional
                    distribution infrastructure. Products routinely sold out in major retailers including Walmart, Costco, and ASDA.
                  </p>
                  <p>
                    The brand secured headline sponsorship deals with major sports organizations, including the{' '}
                    <strong>UFC</strong>, <strong>Arsenal FC</strong>, <strong>LA Dodgers</strong>, and{' '}
                    <strong>Patrick Mahomes</strong>, dramatically expanding brand recognition beyond the creators&apos;
                    existing audiences.
                  </p>
                </div>

                <div className="mt-5 bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">PRIME — Key Milestones</h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    {[
                      { label: 'Founded', value: 'January 2022' },
                      { label: 'Co-Founders', value: 'KSI & Logan Paul' },
                      { label: 'Year-2 Revenue', value: '$1.2B+' },
                      { label: 'Key Partners', value: 'UFC, Arsenal FC, LA Dodgers' },
                      { label: 'Products', value: 'Hydration, Energy, Ice Pop' },
                      { label: 'Retail', value: 'Walmart, Costco, ASDA, Target' },
                    ].map((f) => (
                      <div key={f.label} className="flex gap-2">
                        <span className="text-gray-500 w-28 shrink-0">{f.label}:</span>
                        <span className="font-semibold text-gray-800">{f.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Business Ventures */}
              <section id="business">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Business Ventures</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Beyond PRIME, KSI has invested in and co-founded several businesses alongside his Sidemen partners.
                    The Sidemen collectively own and operate <strong>Sides</strong>, a fast-casual restaurant chain in
                    the UK, as well as a merchandise and clothing line.
                  </p>
                  <p>
                    KSI is also a partner in <strong>Misfits Boxing</strong>, a promotional company for influencer and
                    exhibition boxing events that he co-founded in 2020. The company has promoted numerous high-profile
                    creator boxing cards across the UK and US, capitalising on the mainstream appetite for the format
                    that his fights against Logan Paul helped create.
                  </p>
                </div>

                <div className="mt-5 space-y-4">
                  {[
                    {
                      name: 'PRIME Hydration',
                      tag: 'Co-Founder',
                      color: 'border-blue-500',
                      dot: 'bg-blue-500',
                      desc: 'Co-founded with Logan Paul. $1.2B+ revenue in year two. Partnerships with UFC, Arsenal FC, and Patrick Mahomes.',
                    },
                    {
                      name: 'Misfits Boxing',
                      tag: 'Co-Founder',
                      color: 'border-red-500',
                      dot: 'bg-red-500',
                      desc: 'Creator boxing promotional company. Has hosted over a dozen events featuring influencers and professional boxers.',
                    },
                    {
                      name: 'Sides Restaurant',
                      tag: 'Co-Owner (Sidemen)',
                      color: 'border-yellow-500',
                      dot: 'bg-yellow-500',
                      desc: 'Fast-casual chicken restaurant chain in the UK, co-owned by all seven Sidemen members.',
                    },
                    {
                      name: 'Sidemen Clothing',
                      tag: 'Co-Owner',
                      color: 'border-gray-500',
                      dot: 'bg-gray-500',
                      desc: 'Official Sidemen merchandise and apparel brand, sold globally via the Sidemen online store.',
                    },
                  ].map((v) => (
                    <div key={v.name} className={`border-l-4 ${v.color} pl-5 py-4 bg-white rounded-r-xl shadow-sm border border-l-0 border-gray-100`}>
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-2 h-2 rounded-full ${v.dot}`} />
                        <h3 className="font-bold text-gray-900">{v.name}</h3>
                        <span className="text-xs text-gray-400 ml-1">— {v.tag}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Achievements */}
              <section id="achievements">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">Achievements</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: '🏆', title: 'UK #1 Single', sub: '"Lighter" — first UK YouTuber to achieve a chart #1' },
                    { icon: '🥊', title: 'Undefeated Boxer', sub: '6W–0L–1D professional boxing record' },
                    { icon: '📺', title: '24M+ Subscribers', sub: "One of the UK's most-subscribed YouTubers" },
                    { icon: '💧', title: '$1.2B Brand', sub: 'PRIME Hydration — fastest-growing beverage in history' },
                    { icon: '🎵', title: 'Multi-Platinum', sub: 'Multiple platinum certifications across UK & internationally' },
                    { icon: '⚽', title: 'Sidemen Charity Matches', sub: 'Sold out 90,000-capacity Wembley Stadium (2023)' },
                  ].map((a) => (
                    <div key={a.title} className="bg-white border border-gray-200 rounded-xl p-4 flex gap-3 items-start shadow-sm">
                      <span className="text-2xl">{a.icon}</span>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{a.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{a.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </main>

            {/* ═══ SIDEBAR INFOBOX (1 col) ═══ */}
            <aside className="lg:col-span-1 mt-8 lg:mt-0">
              <div className="sticky top-6 space-y-5">

                {/* Infobox with thumbnail */}
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  {/* Thumbnail */}
                  <div className="relative w-full bg-black" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src="/sidemen/ksi-talking-head.gif"
                      alt="KSI (JJ Olatunji)"
                      fill
                      className="object-cover object-top"
                      sizes="320px"
                      unoptimized
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }} />
                    <div style={{ position: 'absolute', bottom: '10px', left: '12px', right: '12px' }}>
                      <p style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', margin: 0, lineHeight: 1.2 }}>KSI</p>
                      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.68rem', margin: '2px 0 0' }}>Olajide Olayinka Williams Olatunji</p>
                    </div>
                  </div>

                  {/* Info rows */}
                  <div className="divide-y divide-gray-100 text-sm">
                    {infoRows.map((row) => (
                      <div key={row.label} className="flex px-3 py-2.5 gap-2">
                        <span className="text-gray-500 w-24 shrink-0 text-xs">{row.label}</span>
                        <span className="font-medium text-gray-800 text-xs">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick links */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-3">Official Links</h3>
                  <ul className="space-y-2">
                    {[
                      { label: '📺 YouTube', href: 'https://www.youtube.com/@KSI', color: 'text-red-600' },
                      { label: '📸 Instagram', href: 'https://www.instagram.com/ksi', color: 'text-pink-600' },
                      { label: '𝕏 Twitter / X', href: 'https://twitter.com/KSI', color: 'text-gray-800' },
                      { label: '🎵 Spotify', href: 'https://open.spotify.com/artist/1nzgtKYFckznkcVMiEJKAp', color: 'text-green-600' },
                      { label: '💧 PRIME Hydration', href: 'https://www.drinkprime.com', color: 'text-blue-600' },
                    ].map((link) => (
                      <li key={link.label}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer"
                          className={`text-xs font-medium ${link.color} hover:underline`}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related people */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-3">Related Profiles</h3>
                  <ul className="space-y-2 text-xs">
                    <li><Link href="/youtube/logan-paul" className="text-blue-600 hover:underline">→ Logan Paul (PRIME co-founder)</Link></li>
                    <li><Link href="/youtube/sidemen" className="text-blue-600 hover:underline">→ Sidemen (group profile)</Link></li>
                    <li><Link href="/youtube" className="text-blue-600 hover:underline">→ YouTube Hub</Link></li>
                    <li><Link href="/influencer" className="text-blue-600 hover:underline">→ Influencer Coverage</Link></li>
                    <li><Link href="/entertainment" className="text-blue-600 hover:underline">→ Entertainment News</Link></li>
                  </ul>
                </div>

                {/* Meta */}
                <div className="text-xs text-gray-400 space-y-1 px-1">
                  <p>Published: February 18, 2026</p>
                  <p>Author: ObjectWire Editorial</p>
                  <p>Category: YouTube · Sidemen</p>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </div>
    </SEOWrapper>
  );
}
