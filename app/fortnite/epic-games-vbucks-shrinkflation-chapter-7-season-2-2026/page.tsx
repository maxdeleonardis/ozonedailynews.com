import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/fortnite/epic-games-vbucks-shrinkflation-chapter-7-season-2-2026';
const AUTHOR_NAME = 'Conan Boyle';
const AUTHOR_URL = 'https://www.objectwire.org/authors/conan-boyle';

export const metadata: Metadata = {
  title: "Epic Games Implements Fortnite 'Shrinkflation' — V-Bucks Purchasing Power Drops 20–25% | ObjectWire",
  description:
    "Epic Games has reduced the V-Bucks included in every paid bundle effective March 19, 2026, while keeping dollar prices unchanged. The $8.99 pack drops from 1,000 to 800 V-Bucks — a 20% cut — coinciding with the launch of Fortnite Chapter 7 Season 2.",
  keywords: [
    'Fortnite V-Bucks shrinkflation 2026',
    'Epic Games V-Bucks reduction March 2026',
    'Fortnite V-Bucks price change Chapter 7 Season 2',
    'Fortnite Chapter 7 Season 2 V-Bucks',
    'Epic Games shrinkflation V-Bucks bundles',
    'V-Bucks purchasing power drop 20 percent',
    'Fortnite Battle Pass V-Bucks 800 2026',
    'Epic Games operational costs Fortnite 2026',
    'BoycottVBucks hashtag March 2026',
    'Andre Balta GDC 2026 Fortnite',
    'Fortnite 650 million monthly active players 2026',
    'V-Bucks bundle size reduction 2026',
    'free-to-play currency shrinkflation gaming',
    'Fortnite Crew subscription V-Bucks April 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Epic Games Implements Fortnite 'Shrinkflation' — V-Bucks Purchasing Power Drops 20–25%",
    description:
      "Epic keeps prices the same but slashes V-Bucks quantities by up to 20% across every bundle, effective March 19, 2026. The $8.99 starter pack goes from 1,000 to 800 V-Bucks. Battle Pass V-Bucks rewards also cut in half.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-03-18T18:00:00Z',
    modifiedTime: '2026-03-18T18:00:00Z',
    section: 'Gaming',
    tags: [
      'Fortnite', 'Epic Games', 'V-Bucks', 'Shrinkflation', 'Gaming',
      'Chapter 7 Season 2', 'Battle Pass', 'Copyright', 'Free-to-Play',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fortnite V-Bucks Shrinkflation: Same Price, 20% Fewer Bucks — Effective March 19 | ObjectWire",
    description:
      "Epic Games cuts V-Bucks quantities by 20–25% across all bundles while keeping prices unchanged. The $8.99 pack drops from 1,000 to 800 V-Bucks. #BoycottVBucks tops 1.2M mentions in 24 hours.",
  },
  other: {
    news_keywords:
      'Fortnite V-Bucks shrinkflation, Epic Games, V-Bucks reduction, Chapter 7 Season 2, Battle Pass, BoycottVBucks, free-to-play gaming 2026, gaming currency inflation',
  },
};

// =============================================================================
// DATA
// =============================================================================

const packChanges = [
  { price: '$0.50 → $0.99', vbucks: '50 V-Bucks → 50 V-Bucks', change: '~100% price increase per V-Buck', color: 'text-red-700', changeColor: 'bg-red-100 text-red-700' },
  { price: '$8.99', vbucks: '1,000 → 800 V-Bucks', change: '−20%', color: 'text-red-700', changeColor: 'bg-red-100 text-red-700' },
  { price: '$22.99', vbucks: '2,800 → 2,400 V-Bucks', change: '−14.3%', color: 'text-orange-700', changeColor: 'bg-orange-100 text-orange-700' },
  { price: '$36.99', vbucks: '5,000 → 4,500 V-Bucks', change: '−10%', color: 'text-yellow-700', changeColor: 'bg-yellow-100 text-yellow-700' },
  { price: '$89.99', vbucks: '13,500 → 12,500 V-Bucks', change: '−7.4%', color: 'text-yellow-700', changeColor: 'bg-yellow-100 text-yellow-700' },
];

const historicalChanges = [
  { date: 'November 2022', event: 'Regional pricing adjustments in select markets following currency fluctuations.' },
  { date: 'July 2023', event: 'Battle Pass V-Bucks cost increased from 950 to 1,000 V-Bucks.' },
  { date: 'January 2025', event: 'Bonus V-Bucks in select bundles cut by 10–15% in response to Apple App Store fee changes.' },
  { date: 'March 19, 2026', event: 'Largest single reduction in V-Bucks per dollar since the currency launched in 2017. All standard bundles cut 7–20%.' },
];

// =============================================================================
// PAGE
// =============================================================================

export default function FortniteVBucksShrinkflationPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Epic Games Implements Fortnite 'Shrinkflation' — V-Bucks Purchasing Power Drops 20–25%"
        description="Epic Games has reduced the V-Bucks included in every paid bundle effective March 19, 2026, while keeping dollar prices unchanged. The $8.99 pack drops from 1,000 to 800 V-Bucks — a 20% cut."
        author={AUTHOR_NAME}
        authorUrl={AUTHOR_URL}
        publishedTime="2026-03-18T18:00:00Z"
        modifiedTime="2026-03-18T18:00:00Z"
        imageUrl="https://www.objectwire.org/images/fortnite-og.jpg"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Gaming"
        keywords={[
          'Fortnite V-Bucks shrinkflation 2026',
          'Epic Games V-Bucks reduction March 2026',
          'Fortnite Chapter 7 Season 2 V-Bucks',
          'BoycottVBucks March 2026',
          'free-to-play currency inflation gaming',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Fortnite', item: '/fortnite' },
              { name: "Epic Games V-Bucks Shrinkflation", item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Epic Games Implements Fortnite 'Shrinkflation' as V-Bucks Purchasing Power Drops 20–25%"
        subtitle="Same price. Fewer bucks. Epic cuts V-Bucks quantities across every bundle as Fortnite Chapter 7 Season 2 launches — and the internet responds with 1.2 million #BoycottVBucks mentions in 24 hours."
        category="Gaming"
        categoryColor="purple"
        topicTag="gaming"
        publishDate="March 18, 2026"
        readTime="6 min read"
        author={{
          name: AUTHOR_NAME,
          role: 'Gaming Reporter',
          authorSlug: 'conan-boyle',
          bio: "Conan Boyle is ObjectWire's founding writer, covering gaming, technology, and emerging culture from Austin, Texas.",
        }}
        tags={[
          'Fortnite', 'Epic Games', 'V-Bucks', 'Shrinkflation',
          'Chapter 7 Season 2', 'Battle Pass', 'Copyright',
          'Free-to-Play', 'Gaming Economy', 'GDC 2026',
        ]}
        slug="epic-games-vbucks-shrinkflation-chapter-7-season-2-2026"
        url={SLUG}
      >

        {/* Lede */}
        <p>
          <strong>Epic Games</strong> has quietly executed the largest single cut to{' '}
          <strong>Fortnite&apos;s</strong> in-game currency since V-Bucks launched in 2017.
          Effective <strong>March 19, 2026</strong> — the same day as the Fortnite{' '}
          <strong>Chapter 7 Season 2</strong> rollout — every standard V-Bucks bundle now
          delivers fewer bucks for the same dollar price, a tactic widely known as{' '}
          <em>shrinkflation</em>. The company confirmed the change in a March 18 blog post
          titled <em>&quot;Keeping Fortnite Sustainable in 2026.&quot;</em>
        </p>
        <p>
          The flagship entry-level pack — $8.99 for 1,000 V-Bucks — now delivers{' '}
          <strong>800 V-Bucks</strong>, a 20% reduction. At the top end, the $89.99 bundle
          drops from 13,500 to 12,500 V-Bucks (−7.4%). The smallest micro-transaction tier,
          previously $0.50 for 50 V-Bucks, has been repriced to <strong>$0.99 for 50 V-Bucks</strong>,
          effectively doubling the cost per V-Buck in that tier.
        </p>

        <HighlightBox type="key-point" color="purple">
          <strong>The Short Version:</strong> Starting March 19, 2026, you get fewer V-Bucks for
          the same real-world money across every bundle. The biggest cut hits the $8.99 starter
          pack (−20%). Epic cites 650 million monthly active players and "rising operational
          costs" across seven game modes as the rationale.
        </HighlightBox>

        {/* V-Bucks Pack Changes Table */}
        <h2>Breakdown of V-Bucks Pack Changes — Effective March 19, 2026</h2>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="px-4 py-3 font-semibold">Price</th>
                <th className="px-4 py-3 font-semibold">Before → After</th>
                <th className="px-4 py-3 font-semibold">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {packChanges.map((row) => (
                <tr key={row.price} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-gray-900 text-xs">{row.price}</td>
                  <td className={`px-4 py-3 font-semibold text-xs ${row.color}`}>{row.vbucks}</td>
                  <td className="px-4 py-3 text-xs">
                    <span className={`font-bold px-2 py-0.5 rounded-full ${row.changeColor}`}>{row.change}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          The Fortnite Crew subscription remains at <strong>$11.99/month</strong>, but the
          monthly V-Bucks grant drops from 1,000 to <strong>800 V-Bucks</strong> starting with
          the April 2026 billing cycle.
        </p>

        {/* YouTube Shorts Embed */}
        <h2>Watch: Reaction to the V-Bucks Change</h2>
        <div className="not-prose my-6 flex justify-center">
          <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-sm" style={{ paddingBottom: '177.78%' }}>
            <iframe
              src="https://www.youtube.com/embed/sbLXqslt0gY"
              title="Fortnite V-Bucks Shrinkflation Reaction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Battle Pass Rebalancing */}
        <h2>Battle Pass and Pass Rebalancing Adjustments</h2>
        <p>
          To offset the reduced currency flow for dedicated players, Epic simultaneously lowered
          the V-Bucks cost of the main <strong>Battle Pass from 1,000 to 800 V-Bucks</strong>.
          However, the V-Bucks awarded upon 100% Battle Pass completion also drops — from{' '}
          <strong>1,500 V-Bucks (1,000 base + 500 bonus) to 800 V-Bucks total</strong>.
        </p>
        <p>
          This preserves the long-standing <em>&quot;self-funding loop&quot;</em> — players who
          complete the pass can still afford the next season&apos;s pass — but it eliminates the
          net-positive V-Bucks carryover that gave dedicated players a small surplus each season.
          Under the old system, grinding to 100% yielded 500 V-Bucks profit. Under the new
          system, the loop is exactly break-even.
        </p>

        <HighlightBox type="stat" color="orange">
          <strong>Before:</strong> Complete the Battle Pass → earn 1,500 V-Bucks → spend 1,000
          on next pass → <strong>+500 V-Bucks net profit per season.</strong>
          <br />
          <strong>After March 19:</strong> Complete the Battle Pass → earn 800 V-Bucks → spend
          800 on next pass → <strong>±0 V-Bucks. Break-even only.</strong>
        </HighlightBox>

        {/* Epic's Rationale */}
        <h2>Epic&apos;s Stated Rationale: Operational Costs and Ecosystem Growth</h2>
        <p>
          Epic&apos;s March 18 blog post cites <em>&quot;significant increases in the cost of
          running Fortnite&quot;</em> as the primary driver. The company now operates Fortnite
          across <strong>seven distinct game modes</strong>: Battle Royale, LEGO Fortnite, Rocket
          Racing, Fortnite Festival, Ballistic, UEFN-created islands, and Save the World — all
          hosted on Unreal Engine 5 infrastructure.
        </p>
        <p>
          Monthly active players reached <strong>650 million in January 2026</strong>, up from
          540 million in January 2025 — a 20% year-over-year increase — according to Epic&apos;s
          latest earnings disclosure. The server and bandwidth bill that comes with running a
          metaverse-scale platform for 650 million users is considerable.
        </p>
        <p>
          Senior Director of Ecosystem Growth <strong>Andre Balta</strong>, speaking at GDC 2026
          on March 11, 2026, told <em>The Verge</em> that the adjustment reflects{' '}
          <em>&quot;a direct correlation to the rising operational costs of maintaining a
          multi-platform metaverse.&quot;</em>
        </p>

        {/* Market Reaction */}
        <h2>Market Reaction and Player Sentiment</h2>
        <p>
          The announcement triggered immediate backlash across social platforms. The hashtag{' '}
          <strong>#BoycottVBucks</strong> reached{' '}
          <strong>1.2 million mentions on X within 24 hours</strong> of the March 18 blog post.
          Community threads on the Fortnite subreddit and Discord servers filled rapidly with
          players calculating their effective purchasing-power loss and debating whether the{' '}
          <Link href="/fortnite" className="text-purple-700 font-medium hover:underline">
            Fortnite
          </Link>{' '}
          ecosystem could sustain a boycott long enough to prompt a rollback.
        </p>
        <p>
          Epic has countered by highlighting the{' '}
          <strong>20% Epic Rewards cash-back program</strong>, which remains unchanged for
          purchases made directly through the Epic Games Store, PC launcher, web store, or mobile
          app (where permitted). Rewards earned before March 19, 2026, retain their original
          value and can offset future purchases at the new exchange rate.
        </p>

        <HighlightBox type="quote" color="blue">
          &quot;When 650 million monthly players see 200 fewer V-Bucks for the same $8.99, the
          only thing shrinking faster than the bundles might be the window between announcement
          and boycott thread.&quot;
        </HighlightBox>

        {/* Historical Context */}
        <h2>Historical Context of In-Game Currency Adjustments</h2>
        <div className="not-prose my-4">
          <div className="relative border-l-2 border-purple-300 pl-6 space-y-6">
            {historicalChanges.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[33px] w-4 h-4 rounded-full bg-purple-400 border-2 border-white" />
                <p className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">{item.date}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Broader Implications */}
        <h2>Broader Implications for Free-to-Play Economies</h2>
        <p>
          The adjustment arrives as free-to-play titles face rising server, bandwidth, and
          content-development costs industry-wide. Fortnite&apos;s monthly active user base grew
          20% year-over-year in 2025, while global data-center energy costs for major platforms
          increased an estimated <strong>32%</strong> in the same period — a cost pressure that
          Fortnite is unlikely to be alone in absorbing.
        </p>
        <p>
          Epic has not disclosed whether similar adjustments are planned for{' '}
          <Link href="/rocket-league" className="text-purple-700 font-medium hover:underline">
            Rocket League
          </Link>{' '}
          or Fall Guys, both of which use V-Bucks equivalents. The Fortnite change sets a
          precedent: when a platform reaches 650 million monthly users, the question of{' '}
          <strong>who pays for that scale</strong> — the developer or the player base — has been
          answered, at least for now, by quietly shrinking the bundle.
        </p>

      </NewsArticle>
    </SEOWrapper>
  );
}
