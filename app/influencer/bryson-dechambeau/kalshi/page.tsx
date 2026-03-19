import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';

const SLUG = '/influencer/bryson-dechambeau/kalshi';

const infoboxRows = [
  { label: 'Full Name', value: 'Bryson James Aldrich DeChambeau' },
  { label: 'Born', value: 'September 16, 1993' },
  { label: 'Origin', value: 'Modesto, California, USA' },
  { label: 'Tour', value: 'LIV Golf (Crushers GC)' },
  { label: 'Major Wins', value: '2020 US Open (Winged Foot)' },
  { label: 'YouTube', value: '@BrysonDeChambeau (1M+ subs)' },
  { label: 'Partner', value: 'Kalshi (First Athlete Partner)' },
  { label: 'Deal Announced', value: 'December 2025' },
  { label: 'Market', value: 'KXBRYSONCOURSERECORDS' },
  { label: 'Season', value: 'Course Record Series 2026' },
  { label: 'Market Vol.', value: '$159,000+ (as of Feb 2026)' },
  { label: 'Status', value: 'Active 2026' },
];

const timeline = [
  { year: '2017', event: 'Turns professional. Known early for applying physics and data science to his swing mechanics, earning the nickname "The Scientist."' },
  { year: '2020', event: 'Wins the US Open at Winged Foot in dominant fashion, gaining 40+ lbs of muscle over two years to overpower the course. Becomes a mainstream sports story.' },
  { year: '2021', event: 'Attempts the long drive circuit during the offseason, smashing 400+ yard drives and breaking the PGA Tour distance record. YouTube channel begins gaining traction.' },
  { year: '2022', event: 'Joins LIV Golf. YouTube presence grows around the "Break 50" series, where he challenges iconic courses to shoot under 50 strokes in a single round.' },
  { year: '2023', event: '"Break 50" video at Pebble Beach goes massively viral, attracting millions of non-golf viewers and establishing Bryson as one of the biggest digital media golf personalities.' },
  { year: '2024', event: 'Expands YouTube content to include "Break the Course Record" challenges, documenting real-time attempts to shoot lower than any golfer has at a given course.' },
  { year: 'Dec 2025', event: 'Kalshi announces Bryson DeChambeau as the company\'s first official athlete partner. A dedicated prediction market launches on Kalshi around his 2026 course record YouTube series.' },
  { year: 'Jan 2026', event: 'Kalshi market rule updated: both broken and tied course records count toward strike totals after Bryson ties a course record and the community discusses the definition.' },
  { year: 'Feb 2026', event: 'Market volume exceeds $159,000. Current consensus: 77% chance 3+ course records, 51% chance 4+, 30% chance 5+ in 2026.' },
];

export const metadata: Metadata = {
  title: 'Bryson DeChambeau and Kalshi Partnership | First Kalshi Athlete | ObjectWire',
  description:
    'Bryson DeChambeau became Kalshi\'s first official athlete partner. Explore the prediction market built around his 2026 YouTube course record challenge series, the market odds, and what makes this partnership a first in sports betting.',
  keywords: [
    'Bryson DeChambeau Kalshi',
    'Kalshi first athlete partner',
    'Bryson DeChambeau course record series',
    'Bryson DeChambeau YouTube 2026',
    'Kalshi prediction market golf',
    'KXBRYSONCOURSERECORDS',
    'how many course records will Bryson DeChambeau break',
    'Bryson DeChambeau Break 50',
    'Kalshi sports partnership',
    'Bryson DeChambeau odds',
    'prediction market golf',
    'LIV Golf Bryson DeChambeau',
    'Bryson DeChambeau YouTube channel',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/bryson-dechambeau/kalshi',
  },
  openGraph: {
    title: 'Bryson DeChambeau and Kalshi Partnership | First Kalshi Athlete',
    description:
      'Bryson DeChambeau became Kalshi\'s first official athlete partner. The prediction market around his 2026 YouTube course record series has crossed $159K in volume.',
    url: 'https://www.objectwire.org/influencer/bryson-dechambeau/kalshi',
    siteName: 'ObjectWire',
    type: 'article',
    publishedTime: '2026-02-20T00:00:00Z',
    modifiedTime: '2026-02-20T00:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bryson DeChambeau and Kalshi Partnership | First Kalshi Athlete',
    description:
      'Bryson DeChambeau became Kalshi\'s first official athlete partner. Explore the prediction market built around his 2026 YouTube course record series.',
  },
};

export default function BrysonKalshiPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Bryson DeChambeau and Kalshi Partnership | First Kalshi Athlete"
        description="Bryson DeChambeau became Kalshi's first official athlete partner. Explore the prediction market built around his 2026 YouTube course record challenge series."
        author="ObjectWire Editorial"
        publishedTime="2026-02-20T00:00:00Z"
        modifiedTime="2026-02-20T00:00:00Z"
        articleUrl="https://www.objectwire.org/influencer/bryson-dechambeau/kalshi"
        section="Influencer"
        keywords={[
          'Bryson DeChambeau Kalshi',
          'Kalshi first athlete',
          'course record series',
          'prediction market golf',
          'KXBRYSONCOURSERECORDS',
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-5xl mx-auto px-4 py-2">
          <Breadcrumb
            items={[
              { name: 'Home', item: 'https://www.objectwire.org' },
              { name: 'Influencer', item: 'https://www.objectwire.org/influencer' },
              { name: 'Bryson DeChambeau', item: 'https://www.objectwire.org/influencer/bryson-dechambeau' },
              { name: 'Kalshi Partnership', item: 'https://www.objectwire.org/influencer/bryson-dechambeau/kalshi' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <div
        className="relative py-14 px-4 text-white"
        style={{ background: 'linear-gradient(135deg, #0a1f0a 0%, #1a3d1a 40%, #00793a 100%)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Partnership
            </span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              First Kalshi Athlete
            </span>
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Prediction Market
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
            Bryson DeChambeau and Kalshi Partnership
          </h1>
          <p className="text-xl text-green-200 font-semibold mb-2">First Kalshi Athlete</p>
          <p className="text-gray-300 max-w-2xl text-base">
            How a two-time US Open contender, YouTube golf sensation, and CFTC-regulated prediction
            market platform came together to create one of the most novel sports sponsorships of 2025.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 rounded-lg px-4 py-3 text-center">
              <div className="text-2xl font-bold text-green-300">77%</div>
              <div className="text-xs text-gray-300 mt-1">3+ Course Records<br />(Feb 2026 consensus)</div>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-3 text-center">
              <div className="text-2xl font-bold text-yellow-300">51%</div>
              <div className="text-xs text-gray-300 mt-1">4+ Course Records<br />(Feb 2026 consensus)</div>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-3 text-center">
              <div className="text-2xl font-bold text-white">$159K+</div>
              <div className="text-xs text-gray-300 mt-1">Market Volume<br />(as of Feb 2026)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Article column */}
          <div className="lg:col-span-2 space-y-8">

            {/* Who is Bryson */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-600 pb-2 mb-4">
                Who Is Bryson DeChambeau?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bryson James Aldrich DeChambeau is one of professional golf&apos;s most polarizing and
                fascinating figures. Born September 16, 1993, in Modesto, California, DeChambeau turned
                pro in 2017 after winning the NCAA Championship and US Amateur title in the same
                calendar year, a feat matched only by Jack Nicklaus.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                What separates DeChambeau from virtually every other tour professional is his
                obsessive, scientific approach to the sport. He earned a physics degree from Southern
                Methodist University and applied biomechanics, kinetics, and data analytics to every
                aspect of his game, earning the nickname &quot;The Scientist.&quot; He built every iron club
                to the same length, optimized launch angles with lab precision, and spent two years
                adding nearly 40 pounds of muscle to become the longest driver on the PGA Tour.
              </p>
              <p className="text-gray-700 leading-relaxed">
                His 2020 US Open victory at Winged Foot captivated the sports world. While the course
                was set up as the toughest finish in major history, DeChambeau overpowered it by
                driving past the rough entirely, turning a brutally penal layout into a par-4 and
                par-5 festival. He won by six strokes in what many consider one of the most
                physically dominant performances in major championship history.
              </p>
            </section>

            {/* YouTube empire */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-600 pb-2 mb-4">
                The YouTube Empire: Break 50 and Beyond
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                DeChambeau&apos;s digital presence is as significant as his on-course career. His YouTube
                channel, @BrysonDeChambeau, grew rapidly around the concept of high-stakes, data-driven
                golf challenges. The anchor of that content is the &quot;Break 50&quot; series, where Bryson
                attempts to shoot better than 50 strokes over 18 holes at iconic courses.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The format is compelling because it merges athletic spectacle with genuine uncertainty.
                Even a US Open champion trying to shoot sub-50 at Augusta or Pebble Beach is not a
                certainty, which makes each video a real-stakes drama campaign. The Pebble Beach Break
                50 video alone drew millions of views from fans who had never previously followed golf
                content.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Building on that success, DeChambeau launched the &quot;Break the Course Record&quot; series,
                where he targets specific course records, round histories, and track data at courses
                across the country. The challenge: shoot a score equal to or lower than any golfer has
                ever posted at that venue. The series continued in 2026 under the formal title
                &quot;Course Record Series&quot; and became the foundation of the Kalshi partnership.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-green-900 font-semibold text-sm">
                  Content Format Note
                </p>
                <p className="text-green-800 text-sm mt-1">
                  The Course Record Series documents full 18-hole rounds with real-time shot tracking,
                  caddie communications, strategy breakdowns, and post-round analytics. Episodes run
                  20 to 45 minutes and are optimized for non-golf audiences through storytelling
                  rather than coverage-style commentary.
                </p>
              </div>
            </section>

            {/* Kalshi partnership */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-600 pb-2 mb-4">
                Bryson DeChambeau Becomes Kalshi&apos;s First Athlete Partner
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In December 2025, Kalshi announced Bryson DeChambeau as the company&apos;s first official
                athlete partner. The announcement marked a milestone for Kalshi, the CFTC-regulated
                event contracts platform, as it moved to establish itself within the broader sports
                sponsorship ecosystem rather than remaining purely a financial infrastructure company.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kalshi operates legal prediction markets in the United States under regulatory oversight
                by the Commodity Futures Trading Commission (CFTC). Unlike offshore sportsbooks or grey
                market prediction platforms, Kalshi&apos;s contracts are fully regulated event derivatives,
                making the DeChambeau partnership a significant moment: it was the first time a
                regulated US prediction market signed an active professional athlete to a sponsorship deal.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The fit is intuitive. DeChambeau has built his entire brand around data, probability,
                and quantified precision. A prediction market platform, which fundamentally trades on
                probabilistic outcomes, aligns directly with how Bryson publicly approaches his sport.
                He is not just an endorser slapping a logo on content. The partnership generates an
                actual market with real financial stakes built around his YouTube series.
              </p>
              <div className="bg-gray-900 text-white rounded-xl p-6 my-6">
                <h3 className="text-green-400 font-bold text-lg mb-3">The Kalshi Market: KXBRYSONCOURSERECORDS</h3>
                <p className="text-gray-300 text-sm mb-4">
                  The primary market tied to the partnership asks: <em>&quot;How many course records will
                  Bryson DeChambeau break in his course record series on YouTube during 2026?&quot;</em>
                </p>
                <div className="border border-gray-700 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-green-800">
                        <th className="px-4 py-2 text-left text-green-200">Outcome</th>
                        <th className="px-4 py-2 text-right text-green-200">Consensus (Feb 2026)</th>
                        <th className="px-4 py-2 text-right text-green-200">Yes Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr className="bg-gray-800">
                        <td className="px-4 py-3 font-semibold text-white">3+ course records</td>
                        <td className="px-4 py-3 text-right text-green-400 font-bold">77%</td>
                        <td className="px-4 py-3 text-right text-gray-300">79c</td>
                      </tr>
                      <tr className="bg-gray-900">
                        <td className="px-4 py-3 font-semibold text-white">4+ course records</td>
                        <td className="px-4 py-3 text-right text-yellow-400 font-bold">51%</td>
                        <td className="px-4 py-3 text-right text-gray-300">60c</td>
                      </tr>
                      <tr className="bg-gray-800">
                        <td className="px-4 py-3 font-semibold text-white">5+ course records</td>
                        <td className="px-4 py-3 text-right text-orange-400 font-bold">30%</td>
                        <td className="px-4 py-3 text-right text-gray-300">30c</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 text-xs mt-3">
                  Market volume: $159,000+ as of February 2026. Market opened December 16, 2025.
                  Closes December 31, 2026, or earlier if outcome occurs. Series ID: KXBRYSONCOURSERECORDS-26.
                </p>
              </div>
            </section>

            {/* Rule update / market mechanics */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-600 pb-2 mb-4">
                The January Rule Update: Ties Now Count
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                On January 14, 2026, Kalshi updated the market rules to clarify that both broken and
                tied course records count toward the strike totals. The update followed a specific
                episode in which Bryson matched (tied) a course record rather than beating it outright.
                DeChambeau addressed the result on-camera, stating that a tie qualified as a course
                record for purposes of his series.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The rule change generated significant discussion in the Kalshi community because
                traders who had purchased &quot;No&quot; contracts under the original definition (only outright
                breaks count) were materially affected. Kalshi noted that &quot;No contract holders were
                compensated for their loss&quot; following the rules update.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The episode illustrated both the opportunities and complexities of building prediction
                markets around active content creators: outcomes are shaped by the creator&apos;s own
                definitions and real-time decisions, not just a statistical third-party outcome.
                Kalshi&apos;s transparent handling and compensation addressed the community concern, though
                it underscored the unique governance challenge of athlete-linked contracts.
              </p>
            </section>

            {/* Why this matters */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-600 pb-2 mb-4">
                Why This Partnership Matters for Sports and Prediction Markets
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Bryson x Kalshi partnership is a structural first in US sports. No CFTC-regulated
                prediction market had previously signed an active professional athlete. Kalshi had
                already expanded into sports event contracts covering golf majors, football championships,
                and other outcomes, but the DeChambeau deal moved the relationship from platform to
                participant: an athlete co-creating a market around their own content calendar.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The implications extend beyond a single sponsorship. If athlete-linked prediction
                markets gain traction, they present a new monetization layer for sports content
                creators, particularly those on YouTube and other direct-to-consumer platforms where
                sponsorship traditionally takes the form of shoutouts and product integrations rather
                than financial instruments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For Bryson specifically, the partnership amplifies his &quot;scientist meets athlete&quot; brand.
                He routinely shares shot data, practice metrics, and physical performance numbers with
                his audience. A prediction market built on quantified outcomes of his YouTube series
                is the natural extension of that brand architecture.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h4 className="font-bold text-blue-900 mb-2">For Kalshi</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>First athlete partnership announcement</li>
                    <li>Direct access to Bryson&apos;s 1M+ YouTube audience</li>
                    <li>Sports content-driven market volume ($159K+ in weeks)</li>
                    <li>Brand positioning in golf and YouTube demographics</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h4 className="font-bold text-green-900 mb-2">For Bryson</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>Aligns with data-driven personal brand</li>
                    <li>Financial instrument tied to YouTube content value</li>
                    <li>Audience engagement layer beyond traditional sponsorships</li>
                    <li>Markets create ongoing narrative around each episode</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The course record series */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-600 pb-2 mb-4">
                The Course Record Series: How It Works
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Each episode in the Course Record Series follows a consistent format. Bryson selects
                a course with a documented course record, researches the history, and plays a full
                18-hole round with his caddie and a small production team. The video documents the
                attempt in real time, including club selections, wind and elevation calculations,
                and swing data from Trackman or comparable launch monitors.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For Kalshi&apos;s market purposes, a course record counts if Bryson scores equal to or
                lower than the course record at the hosting venue, consistent with his YouTube
                series&apos; own definition. As of the January 2026 rule update, tied scores count
                equally with outright records.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The market specifically covers rounds uploaded to his course record YouTube series
                playlist during the 2026 calendar year. Exhibition rounds, LIV Golf tournament
                rounds, and other content not uploaded to the series playlist are excluded. This
                creates a defined, verifiable, and creator-controlled outcome environment.
              </p>
            </section>

            {/* Meta footer */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-8">
              <div className="flex flex-wrap justify-between gap-4 text-xs text-gray-500">
                <span>Published: February 20, 2026</span>
                <span>Section: Influencer / Partnerships</span>
                <span>Author: ObjectWire Editorial</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Kalshi', 'Bryson DeChambeau', 'Prediction Markets', 'Golf', 'LIV Golf', 'YouTube Golf', 'KXBRYSONCOURSERECORDS'].map((tag) => (
                  <span key={tag} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">

            {/* Infobox */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div
                className="px-4 py-3 text-white font-bold text-sm"
                style={{ background: 'linear-gradient(90deg, #0a1f0a, #00793a)' }}
              >
                Bryson x Kalshi: Key Facts
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {infoboxRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-3 py-2 font-semibold text-gray-600 whitespace-nowrap">{row.label}</td>
                      <td className="px-3 py-2 text-gray-800">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Kalshi market CTA */}
            <div className="bg-green-900 text-white rounded-xl p-5">
              <h3 className="font-bold text-lg mb-2 text-green-300">Live on Kalshi</h3>
              <p className="text-green-100 text-sm mb-3">
                The KXBRYSONCOURSERECORDS market is live and regulated by the CFTC. Trade the outcome
                of Bryson&apos;s 2026 YouTube course record series.
              </p>
              <a
                href="https://kalshi.com/markets/kxbrysoncourserecords/bryson-course-records/kxbrysoncourserecords-26"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-400 hover:bg-green-300 text-green-950 font-bold py-2 px-4 rounded-lg text-sm transition-colors"
              >
                View Market on Kalshi
              </a>
              <p className="text-green-400 text-xs mt-2 text-center">Series: KXBRYSONCOURSERECORDS</p>
            </div>

            {/* Market odds snapshot */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gray-800 text-white px-4 py-3 font-bold text-sm">
                Market Odds Snapshot
              </div>
              <div className="p-4 space-y-3">
                {[
                  { label: '3+ course records', pct: 77, color: 'bg-green-500' },
                  { label: '4+ course records', pct: 51, color: 'bg-yellow-400' },
                  { label: '5+ course records', pct: 30, color: 'bg-orange-400' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>{item.label}</span>
                      <span className="font-bold">{item.pct}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-2 ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
                <p className="text-xs text-gray-400 mt-2">As of February 2026. $159K+ volume.</p>
              </div>
            </div>

            {/* Career timeline */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div
                className="px-4 py-3 text-white font-bold text-sm"
                style={{ background: 'linear-gradient(90deg, #1a3d1a, #00793a)' }}
              >
                Timeline
              </div>
              <ol className="p-4 space-y-3">
                {timeline.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-green-600 font-bold text-xs w-16 shrink-0 pt-0.5">{item.year}</span>
                    <span className="text-gray-700 text-xs leading-relaxed">{item.event}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Related coverage */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">Related Coverage</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/influencer" className="text-green-700 hover:underline">
                    All Influencer Profiles
                  </Link>
                </li>
                <li>
                  <Link href="/finance" className="text-green-700 hover:underline">
                    Finance and Markets
                  </Link>
                </li>
                <li>
                  <Link href="/sports" className="text-green-700 hover:underline">
                    Sports Coverage
                  </Link>
                </li>
              </ul>
            </div>

          </aside>
        </div>
      </div>
    </SEOWrapper>
  );
}
