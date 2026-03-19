import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/video-games/news/slay-the-spire-2';
const AUTHOR_NAME = 'Alfansa';
const PUBLISH_ISO = '2026-03-06T18:00:00Z';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Shatters Records and Briefly "Slays" Steam — 430K Peak Players | ObjectWire',
  description:
    'Slay the Spire 2 hit 430,456 concurrent Steam players within 24 hours of Early Access launch on March 5, 2026, crashing the Steam cart system and setting the all-time roguelike record.',
  keywords: [
    'Slay the Spire 2 launch',
    'Slay the Spire 2 concurrent players',
    'Slay the Spire 2 Steam record',
    'Mega Crit Slay the Spire 2',
    'Slay the Spire 2 Early Access',
    'roguelike Steam record 2026',
    'Slay the Spire 2 co-op',
    'Slay the Spire 2 Godot Engine',
    'Slay the Spire 2 characters',
    'Steam cart crash March 2026',
    'Slay the Spire 2 review',
    'indie game record 2026',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Slay the Spire 2 Shatters Records — 430K Peak, Steam Cart Crash, 97% Positive Reviews',
    description:
      'Mega Crit\'s sequel hit 430,456 concurrent players within 24 hours, crashed the Steam store for 30 minutes, and set the all-time roguelike concurrent player record.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: PUBLISH_ISO,
    modifiedTime: PUBLISH_ISO,
    section: 'Gaming',
    tags: ['Slay the Spire 2', 'Mega Crit', 'Steam', 'Roguelike', 'Indie Games', 'Early Access'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slay the Spire 2 Hits 430K Concurrent — Crashes Steam, Sets Roguelike Record',
    description:
      'The $24.99 sequel launched into Early Access on March 5, crashed Steam\'s cart system, and peaked at 430,456 concurrent players by day two.',
  },
};

// ─── Franchise comparison data ─────────────────────────────────────────────────
const playerComparison = [
  { game: 'Slay the Spire 2 (2026)', peak: '430,456', color: 'text-green-400', bar: 'w-full' },
  { game: 'Hades 2 EA (2024)', peak: '~100,000', color: 'text-orange-400', bar: 'w-[23%]' },
  { game: 'Balatro (2024)', peak: '~82,000', color: 'text-blue-400', bar: 'w-[19%]' },
  { game: 'Slay the Spire (2025 peak)', peak: '~57,000', color: 'text-purple-400', bar: 'w-[13%]' },
];

export default function SlayTheSpire2LaunchPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title='Slay the Spire 2 Shatters Records and Briefly "Slays" Steam — 430K Peak Players'
        description="Slay the Spire 2 hit 430,456 concurrent Steam players within 24 hours of Early Access launch, crashing the Steam cart system and setting the all-time roguelike record."
        author={AUTHOR_NAME}
        authorUrl="https://www.objectwire.org/authors/alfansa"
        publishedTime={PUBLISH_ISO}
        modifiedTime={PUBLISH_ISO}
        articleUrl={CANONICAL}
        section="Gaming"
        keywords={[
          'Slay the Spire 2', 'Steam record', 'Mega Crit', 'roguelike',
          'Early Access', 'concurrent players', 'Godot Engine', 'co-op',
        ]}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Video Games', item: '/video-games' },
              { name: 'News', item: '/video-games/news' },
              { name: 'Slay the Spire 2', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title='Slay the Spire 2 Shatters Records and Briefly "Slays" Steam'
        subtitle="430,456 concurrent players within 24 hours. Steam's cart system crashed for 30 minutes. Overwhelmingly Positive reviews at 97%. Mega Crit's $24.99 sequel just redefined indie scale."
        category="GAMING"
        categoryColor="purple"
        topicTag="gaming"
        publishDate="March 6, 2026"
        readTime="4 min read"
        breaking
        author={{
          name: AUTHOR_NAME,
          role: 'Gaming & Entertainment',
        }}
        tags={[
          'Slay the Spire 2',
          'Mega Crit',
          'Steam',
          'Roguelike',
          'Indie Games',
          'Early Access',
          'Godot Engine',
        ]}
        slug="slay-the-spire-2"
        url={SLUG}
      >
        {/* ── THE LEAD ─────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            A Historic Launch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In a launch day that can only be described as a &quot;critical hit,&quot; Mega Crit&apos;s highly anticipated sequel <strong>Slay the Spire 2</strong> officially entered Steam Early Access on Thursday, March 5, 2026. The demand was so overwhelming it physically buckled Valve&apos;s storefront, causing the global cart system to crash for approximately 30 minutes as hundreds of thousands of players rushed to purchase the $24.99 title.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Within its first hour the sequel surpassed <strong>100,000 concurrent players</strong>, but the momentum didn&apos;t stop there. By the 24-hour mark on Friday, March 6, the game reached a staggering peak of <strong>430,456 concurrent players</strong>.
          </p>

          <HighlightBox type="stat" color="purple">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-400">430,456</div>
                <div className="text-sm text-gray-300">Peak Concurrent</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">~8×</div>
                <div className="text-sm text-gray-300">Original&apos;s All-Time Peak</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">97%</div>
                <div className="text-sm text-gray-300">Positive Reviews</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">30 min</div>
                <div className="text-sm text-gray-300">Steam Cart Crash</div>
              </div>
            </div>
          </HighlightBox>
        </section>

        {/* ── RECORDS BROKEN ───────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The New Roguelike King
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This peak is nearly <strong>eight times</strong> higher than the original game&apos;s all-time record of roughly 57,000 set in late 2025. Slay the Spire 2 now holds the record for the <strong>highest-ever concurrent player count for a roguelike on Steam</strong>, surpassing recent heavyweights like Hades 2 and Balatro. On its first full day it sat atop the Steam Sales Chart, even outperforming Bungie&apos;s Marathon in both revenue and active players.
          </p>

          <div className="space-y-3 my-6">
            {playerComparison.map((entry) => (
              <div key={entry.game} className="bg-gray-900 rounded-lg border border-gray-700 p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium text-sm">{entry.game}</span>
                  <span className={`font-bold ${entry.color}`}>{entry.peak}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className={`bg-purple-500 h-2 rounded-full ${entry.bar}`} />
                </div>
              </div>
            ))}
          </div>

          <HighlightBox type="key-point" color="green">
            <strong>Dethroning the giants:</strong> On its first full day, Slay the Spire 2 topped the Steam Sales Chart and outperformed Bungie&apos;s Marathon in both revenue and active players on the platform.
          </HighlightBox>
        </section>

        {/* ── DAY ONE EXPERIENCE ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The Day-One Experience
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Despite the initial store crashes, the game itself launched to <strong>&quot;Overwhelmingly Positive&quot;</strong> reviews — a 97% positive rating. The reception is a vindication for Mega Crit, which famously migrated development to the <strong>Godot Engine</strong> following 2023&apos;s Unity pricing controversy. Early reports suggest the move was a masterstroke, with users praising &quot;silky smooth&quot; performance and improved Steam Deck battery life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-green-400 font-bold mb-2">5 Characters at Launch</h3>
              <p className="text-gray-300 text-sm">Returning trio Ironclad, Silent, and Defect join newcomers <strong>The Necrobinder</strong> and <strong>The Regent</strong>.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-blue-400 font-bold mb-2">4-Player Co-op</h3>
              <p className="text-gray-300 text-sm">Surprise online co-op mode lets squads coordinate routes and watch teammates&apos; combats in real time.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-purple-400 font-bold mb-2">Godot Engine</h3>
              <p className="text-gray-300 text-sm">Post-Unity migration delivers smooth performance, faster load times, and better Steam Deck battery life.</p>
            </div>
          </div>

          <HighlightBox type="quote" color="blue">
            &quot;Mega Crit didn&apos;t just port their game to a new engine — they rebuilt the foundation and came out with something that feels better in every way. The co-op alone would have justified the sequel.&quot;
            <br />
            <span className="text-sm text-gray-400 mt-2 block">— Early Access reviewer, 97% &quot;Overwhelmingly Positive&quot; consensus</span>
          </HighlightBox>
        </section>

        {/* ── TECHNICAL ALERT ──────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Technical Alert: Known Launch-Day Fixes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While the game is polished, some users have reported &quot;instant crash&quot; or &quot;black screen&quot; issues on startup. The community has identified two reliable workarounds:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-gray-700">
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th className="text-left p-3 border-b border-gray-700">Fix</th>
                  <th className="text-left p-3 border-b border-gray-700">Steps</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700 bg-gray-900">
                  <td className="p-3 font-semibold text-orange-400">OpenGL Fix</td>
                  <td className="p-3">Steam &rarr; Properties &rarr; Launch Options &rarr; enter <code className="bg-gray-800 px-1.5 py-0.5 rounded text-green-400">--rendering-driver opengl3</code></td>
                </tr>
                <tr className="bg-gray-900/50">
                  <td className="p-3 font-semibold text-orange-400">Admin Fix</td>
                  <td className="p-3">Right-click Steam &rarr; &quot;Run as Administrator&quot; (Windows users)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            In a charming nod to the original&apos;s Early Access days, several cards still feature &quot;MS Paint-style&quot; placeholder art. Mega Crit plans to update all art across the 1–2 year Early Access development cycle.
          </p>
        </section>

        {/* ── WHAT TO WATCH ───────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What to Watch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            With 430K concurrent players on day one of <em>Early Access</em>, the full 1.0 launch could push Slay the Spire 2 into territory previously reserved for free-to-play titans. The 4-player co-op is already driving Twitch viewership past 300K, and the community modding scene — a pillar of the original&apos;s longevity — has not even begun. Mega Crit has delivered a critical hit on the roguelike genre; now the question is how high the ceiling goes.
          </p>
        </section>

        {/* ── SOURCES ──────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Sources
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Concurrent player data sourced from SteamDB. Review rating from the Steam store page. Historical roguelike peaks verified against SteamDB records for Hades 2, Balatro, and Slay the Spire. Marathon revenue comparison based on SteamSpy estimates and Steam Sales Chart placement.
          </p>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────────── */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/video-games/resident-evil-requiem/steam-launch-record-267k-concurrent-players" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-purple-600 uppercase">Steam</span>
              <h3 className="font-semibold text-gray-900 mt-1">RE Requiem Shatters Steam Records — 267K Peak</h3>
              <p className="text-sm text-gray-600 mt-1">Capcom&apos;s open-zone horror hit 267,509 concurrent players on day one.</p>
            </Link>
            <Link href="/video-games/news/marathon-server-slam-steam-concurrent-players-peak-drop-march-2026" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-orange-600 uppercase">Steam</span>
              <h3 className="font-semibold text-gray-900 mt-1">Marathon Server Slam — Steam Player Count</h3>
              <p className="text-sm text-gray-600 mt-1">Bungie&apos;s extraction shooter launch week concurrent player data.</p>
            </Link>
            <Link href="/video-games/news/gta6-pre-orders-as-take-two-ausures-sony-microsoft-no-more-delay" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-blue-600 uppercase">Gaming</span>
              <h3 className="font-semibold text-gray-900 mt-1">GTA 6 Pre-Orders &amp; Take-Two Update</h3>
              <p className="text-sm text-gray-600 mt-1">PlayStation Store database update and Take-Two&apos;s assurance on timing.</p>
            </Link>
            <Link href="/video-games/forza-horizon-6" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">Gaming</span>
              <h3 className="font-semibold text-gray-900 mt-1">Forza Horizon 6</h3>
              <p className="text-sm text-gray-600 mt-1">Everything about Playground Games&apos; open-world racer set in Japan.</p>
            </Link>
            <Link href="/video-games" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">Hub</span>
              <h3 className="font-semibold text-gray-900 mt-1">Video Games Hub</h3>
              <p className="text-sm text-gray-600 mt-1">All ObjectWire gaming coverage — reviews, news, and analysis.</p>
            </Link>
          </div>
        </section>
      </NewsArticle>
    </SEOWrapper>
  );
}
