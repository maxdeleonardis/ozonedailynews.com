import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/define/democrate/dhs-funding-shutdown-senate-democrats-counteroffer-march-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Democrats Send DHS Funding Proposal Amid 32-Day Partial Shutdown | ObjectWire',
  description:
    'Senate Democrats delivered their latest counteroffer to the White House on Monday night to fund the Department of Homeland Security, as the partial government shutdown stretched into its 32nd day. Senate Majority Leader John Thune said the offer "didn\'t change much."',
  keywords: [
    'Democrats DHS funding proposal March 2026',
    'partial government shutdown 32 days DHS',
    'Senate Democrats counteroffer White House DHS',
    'John Thune DHS funding shutdown',
    'Department of Homeland Security shutdown March 2026',
    'government shutdown DHS funding lapse February 2026',
    'Senate Democrats White House budget negotiations',
    'government shutdown 2026',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: 'Democrats Send DHS Funding Proposal Amid 32-Day Partial Shutdown',
    description:
      'Senate Democrats sent their latest counteroffer to fund the Department of Homeland Security as the partial shutdown entered its 32nd day — but Senate Majority Leader John Thune said it "didn\'t change much from where we were."',
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-18T12:30:00Z',
    modifiedTime: '2026-03-18T12:30:00Z',
    section: 'Politics',
    tags: [
      'Democrats', 'DHS', 'Government Shutdown', 'Senate', 'John Thune',
      'Department of Homeland Security', 'Politics', 'U.S. Congress', 'White House',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Democrats Send DHS Funding Proposal Amid 32-Day Partial Shutdown | ObjectWire',
    description:
      'Senate Democrats sent the White House a new DHS funding counteroffer on Monday — but Thune says it "didn\'t change much." The partial shutdown is now in its 32nd day.',
  },
  other: {
    news_keywords:
      'DHS shutdown, Senate Democrats counteroffer, government shutdown March 2026, John Thune, Department of Homeland Security funding',
  },
};

export default function DHSShutdownDemocratsPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Democrats Send DHS Funding Proposal Amid 32-Day Partial Shutdown"
        description="Senate Democrats delivered their latest counteroffer to the White House on Monday night to fund the Department of Homeland Security, as the partial shutdown stretched into its 32nd day with no resolution in sight."
        author="ObjectWire Politics Desk"
        publishedTime="2026-03-18T12:30:00Z"
        modifiedTime="2026-03-18T12:30:00Z"
        articleUrl={FULL_URL}
        section="Politics"
        keywords={[
          'Democrats DHS funding proposal March 2026',
          'partial government shutdown 32 days DHS',
          'Senate Democrats counteroffer White House',
          'John Thune DHS shutdown',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Define', item: '/define' },
              { name: 'Democrats', item: '/define/democrate' },
              { name: 'DHS Shutdown Counteroffer', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Democrats Send DHS Funding Proposal Amid Month-Long Shutdown"
        subtitle="Senate Democrats delivered their latest counteroffer to the White House on Monday night to fund the Department of Homeland Security — but Senate Majority Leader John Thune said it 'didn't change much from where we were.'"
        category="Politics"
        categoryColor="blue"
        topicTag="politics"
        publishDate="March 18, 2026"
        readTime="4 min read"
        author={{
          name: 'ObjectWire Politics Desk',
          role: 'Politics Reporter',
        }}
        tags={[
          'Democrats', 'DHS', 'Government Shutdown', 'Senate',
          'John Thune', 'Department of Homeland Security', 'Politics',
          'U.S. Congress', 'White House',
        ]}
        slug={SLUG}
        url={SLUG}
      >
        {/* Lede */}
        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
          <strong>WASHINGTON</strong> — Senate Democrats delivered their latest counteroffer to
          the White House on <strong>Monday night</strong> to fund the{' '}
          <strong>Department of Homeland Security</strong>, as the partial shutdown of the sprawling
          agency stretched into its <strong>32nd day</strong> with no resolution in sight. The proposal,
          confirmed by a White House official and two other people with knowledge of the matter, is
          the latest in a series of offers the two parties have exchanged since funding lapsed on{' '}
          <strong>February 14</strong>.
        </p>

        <HighlightBox type="key-point" color="blue">
          The White House said it is <strong>"currently reviewing"</strong> the Democratic offer —
          but Senate Majority Leader <strong>John Thune</strong> told reporters Tuesday that it{' '}
          <strong>"didn't change much from where we were."</strong>
        </HighlightBox>

        {/* Timeline */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          How the Shutdown Reached Day 32
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The partial government shutdown began when DHS funding lapsed at midnight on{' '}
          <strong>February 14, 2026</strong>, after Congress failed to reach agreement on a
          spending bill before the deadline. The breakdown has kept large portions of the
          department in limbo for over a month, affecting agencies including{' '}
          <strong>U.S. Customs and Border Protection (CBP)</strong>,{' '}
          <strong>Immigration and Customs Enforcement (ICE)</strong>,{' '}
          <strong>FEMA</strong>, and the{' '}
          <strong>Transportation Security Administration (TSA)</strong> — whose workers
          have continued reporting to duty without regular paychecks.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="px-4 py-3 text-left font-semibold">Date</th>
                <th className="px-4 py-3 text-left font-semibold">Event</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Feb. 14, 2026', 'DHS funding lapses at midnight — partial shutdown begins'],
                ['Feb. 15–28, 2026', 'Initial round of offers and counteroffers exchanged between parties'],
                ['Early March 2026', 'Negotiations stall; no public progress reported for nearly two weeks'],
                ['March 16, 2026 (Mon.)', 'Senate Democrats deliver latest counteroffer to White House'],
                ['March 17, 2026 (Tue.)', 'White House says it is "reviewing" the offer; Thune says little changed'],
                ['March 18, 2026', 'Shutdown enters its 32nd day — no resolution announced'],
              ].map(([date, event]) => (
                <tr key={date} className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">{date}</td>
                  <td className="px-4 py-3 text-gray-700">{event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Thune response */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Thune: Offer Didn't Change Much
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Senate Majority Leader <strong>John Thune</strong> (R-SD), speaking to reporters on Tuesday,
          offered the clearest public signal yet that the two sides remain far apart. His
          characterisation — that the Democratic proposal "didn't change much from where we were" —
          suggests that the offer did not close the gap on the core sticking points that have
          deadlocked the talks throughout February and into March.
        </p>

        <figure className="border-l-4 border-blue-500 pl-6 my-8 bg-blue-50 py-4 pr-4 rounded-r-lg">
          <blockquote className="text-lg italic text-gray-800 leading-relaxed">
            &quot;It didn&apos;t change much from where we were.&quot;
          </blockquote>
          <figcaption className="mt-3 text-sm font-semibold text-gray-600">
            — Senate Majority Leader John Thune, Tuesday March 17, 2026
          </figcaption>
        </figure>

        <p className="text-gray-700 leading-relaxed mb-6">
          Thune's remarks track a pattern that has defined the negotiations: each new offer has
          been received, reviewed, and ultimately described by the opposing side as insufficient
          movement. The White House's parallel statement — that it is "currently reviewing" the
          Democratic proposal — is consistent with language it has used at each prior stage of the
          standoff, leaving open the question of whether a final agreement is close or weeks away.
        </p>

        {/* Stakes */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What's at Stake
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The Department of Homeland Security is one of the largest civilian agencies in the federal
          government, with a workforce of roughly <strong>260,000 employees</strong> and a budget that
          covers border security, disaster response, aviation security, cybersecurity, and immigration
          enforcement. A prolonged funding lapse creates compounding operational disruptions across
          each of those functions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {[
            {
              icon: '✈️',
              agency: 'TSA',
              impact: 'Airport screeners continue working without pay, raising concerns about staffing levels and potential sick-outs at major airports.',
            },
            {
              icon: '🌊',
              agency: 'FEMA',
              impact: 'Disaster preparedness and active relief operations are disrupted; grant disbursements to states may be delayed.',
            },
            {
              icon: '🛂',
              agency: 'CBP & ICE',
              impact: 'Border and immigration enforcement operations continue under "essential personnel" rules but with reduced administrative capacity.',
            },
            {
              icon: '🔐',
              agency: 'CISA',
              impact: 'Cybersecurity and critical infrastructure protection activities may be curtailed, increasing vulnerability windows.',
            },
          ].map(({ icon, agency, impact }) => (
            <div key={agency} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="font-bold text-gray-900 mb-1">{agency}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{impact}</p>
            </div>
          ))}
        </div>

        {/* Background */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Background: The Core Dispute
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          While specific details of the Democratic proposal were not made public, the core
          disagreements in the DHS budget talks have centred on several flashpoint
          areas:
        </p>
        <ul className="space-y-3 mb-6 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <span>
              <strong>Border enforcement spending levels</strong> — Republicans have pushed for
              significantly higher allocations for wall construction and detention capacity;
              Democrats have resisted what they describe as funding for hardline immigration
              measures.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <span>
              <strong>FEMA disaster relief</strong> — Democrats sought carve-outs to fully protect
              ongoing disaster relief operations; Republicans have framed this as an attempt to
              expand the bill's scope.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <span>
              <strong>Rider provisions</strong> — Both sides have attached unrelated policy riders
              to their proposals that the other side has rejected as non-starters.
            </span>
          </li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-6">
          Monday night's Democratic counteroffer represents the latest attempt to move those
          positions incrementally. Whether it succeeded in doing so meaningfully — or whether,
          as Thune suggested, it was largely a repackaging of earlier proposals — will determine
          how quickly, or slowly, the two sides can reach a deal.
        </p>

        {/* What's next */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          What Comes Next
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          With the White House reviewing the offer and Thune's remarks suggesting limited
          progress, the shutdown appears set to extend at minimum into the coming week. Congress
          is not in session through the end of the week, which may further slow the pace of
          formal negotiations.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Pressure on both parties has been building as TSA screeners and other essential DHS
          workers approach 35 days without regular pay — the point at which historical precedent
          suggests workforce attrition begins to accelerate and operational disruptions become more
          visible to the travelling public.
        </p>
        <p className="text-gray-700 leading-relaxed">
          ObjectWire will continue monitoring negotiations as talks develop.
        </p>
      </NewsArticle>
    </SEOWrapper>
  );
}
