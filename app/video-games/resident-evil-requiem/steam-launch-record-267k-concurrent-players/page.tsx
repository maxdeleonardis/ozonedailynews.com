import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/video-games/resident-evil-requiem/steam-launch-record-267k-concurrent-players';
const AUTHOR_NAME = 'ObjectWire Gaming Desk';
const PUBLISH_ISO = '2026-03-06T16:00:00Z';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Resident Evil Requiem Shatters Steam Records — 267K Concurrent Players at Launch | ObjectWire',
  description:
    'Resident Evil Requiem hit 267,509 concurrent Steam players on launch day February 27, 2026, nearly doubling Village and beating the RE4 remake record by 100,000 players.',
  keywords: [
    'Resident Evil Requiem Steam record',
    'Resident Evil Requiem concurrent players',
    'Resident Evil Requiem PC launch 2026',
    'RE Requiem 267k Steam players',
    'Capcom Resident Evil Requiem sales',
    'Resident Evil Requiem SteamDB',
    'Resident Evil franchise Steam record',
    'RE Requiem vs RE4 remake players',
    'Resident Evil Requiem open zone horror',
    'Capcom survival horror 2026',
    'Resident Evil 9 launch numbers',
    'RE Requiem Steam charts',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Resident Evil Requiem Shatters Series Records — 267K Peak on Steam',
    description:
      '267,509 concurrent players. Nearly 100K above RE4 remake. More than double Village. Fourth most-played game on Steam at peak. Capcom\'s open-zone horror gamble pays off.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: PUBLISH_ISO,
    modifiedTime: PUBLISH_ISO,
    section: 'Gaming',
    tags: ['Resident Evil', 'Capcom', 'Steam', 'PC Gaming', 'Horror', 'Requiem'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RE Requiem Hits 267K on Steam — Biggest Resident Evil Launch Ever',
    description:
      'Capcom\'s ninth mainline entry obliterates franchise records. 267,509 concurrent players, nearly doubling Village and beating RE4 remake by 100K.',
  },
};

// ─── Steam record comparison ──────────────────────────────────────────────────
const steamRecords = [
  { game: 'Resident Evil Requiem (2026)', peak: '267,509', color: 'text-green-400', bar: 'w-full' },
  { game: 'RE4 Remake (2023)', peak: '168,191', color: 'text-blue-400', bar: 'w-[63%]' },
  { game: 'RE Village (2021)', peak: '106,631', color: 'text-purple-400', bar: 'w-[40%]' },
  { game: 'RE2 Remake (2019)', peak: '74,227', color: 'text-orange-400', bar: 'w-[28%]' },
  { game: 'RE3 Remake (2020)', peak: '60,293', color: 'text-red-400', bar: 'w-[23%]' },
];

export default function RERequiemSteamLaunchPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Resident Evil Requiem Shatters Steam Records — 267K Concurrent Players at Launch"
        description="Resident Evil Requiem hit 267,509 concurrent Steam players on launch day February 27, 2026, nearly doubling Village and beating the RE4 remake record by 100,000 players."
        author={AUTHOR_NAME}
        authorUrl="https://www.objectwire.org/team"
        publishedTime={PUBLISH_ISO}
        modifiedTime={PUBLISH_ISO}
        articleUrl={CANONICAL}
        section="Gaming"
        keywords={[
          'Resident Evil Requiem', 'Steam record', 'Capcom', 'concurrent players',
          'PC launch', 'survival horror', 'RE4 remake', 'SteamDB',
        ]}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Video Games', item: '/video-games' },
              { name: 'Resident Evil Requiem', item: '/video-games/resident-evil-requiem' },
              { name: 'Steam Launch Record', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Resident Evil Requiem Shatters Series Records in Terrifyingly Successful PC Launch"
        subtitle="267,509 concurrent Steam players on day one — nearly 100,000 above the RE4 remake record and more than double Resident Evil Village. Capcom's open-zone horror gamble is paying off."
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
          'Resident Evil',
          'Capcom',
          'Steam',
          'PC Gaming',
          'Horror',
          'Requiem',
          'SteamDB',
        ]}
        slug="steam-launch-record-267k-concurrent-players"
        url={SLUG}
      >
        {/* ── THE LEAD ─────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            A New Peak for Horror
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Capcom has officially cemented its ninth mainline entry as a historic titan of the genre. <strong>Resident Evil Requiem</strong>, which launched on <strong>February 27, 2026</strong>, has not only met expectations but obliterated the franchise&apos;s previous all-time Steam records within hours of release.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As the clock struck midnight on launch day, Steam users flooded the servers. According to data from <strong>SteamDB</strong>, the game achieved a staggering peak of <strong>267,509 concurrent players</strong>.
          </p>

          <HighlightBox type="stat" color="purple">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-400">267,509</div>
                <div className="text-sm text-gray-300">Peak Concurrent</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">+100K</div>
                <div className="text-sm text-gray-300">Above RE4 Remake</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">2.5×</div>
                <div className="text-sm text-gray-300">Village&apos;s Peak</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">#4</div>
                <div className="text-sm text-gray-300">On All of Steam</div>
              </div>
            </div>
          </HighlightBox>
        </section>

        {/* ── FRANCHISE RECORDS ────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Franchise Dominance: Every RE Steam Record Broken
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To put the &quot;Requiem&quot; surge into perspective: it eclipsed the previous record held by the <strong>Resident Evil 4 remake</strong> (168,191) by nearly 100,000 players, more than doubled the launch peak of 2021&apos;s <strong>Resident Evil Village</strong> (106,631), and at its height was the <strong>fourth most-played game on all of Steam</strong>, trailing only the evergreen giants Counter-Strike 2, Dota 2, and PUBG.
          </p>

          <div className="space-y-3 my-6">
            {steamRecords.map((entry) => (
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
        </section>

        {/* ── WHY IT WORKED ───────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Open-Zone Horror Worked
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The &quot;survival horror&quot; pioneer has found a massive new audience on PC. Capcom&apos;s shift toward more ambitious, <strong>open-zone horror</strong> — larger interconnected environments that replace the corridor-crawl formula — is paying off in dividends. Players have praised the balance between exploration freedom and the series&apos; signature tension.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-green-400 font-bold mb-2">Open-Zone Design</h3>
              <p className="text-gray-300 text-sm">Larger, interconnected areas replace linear corridors while preserving resource scarcity and environmental dread.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-blue-400 font-bold mb-2">RE Engine Maturity</h3>
              <p className="text-gray-300 text-sm">Years of iteration on the RE Engine deliver photorealistic horror at high frame rates on mid-range hardware.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-orange-400 font-bold mb-2">PC Optimization</h3>
              <p className="text-gray-300 text-sm">Strong day-one PC performance with DLSS, FSR, and ray tracing support drove Steam adoption.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-purple-400 font-bold mb-2">Franchise Momentum</h3>
              <p className="text-gray-300 text-sm">The RE4 remake and Village built massive PC audience trust. Requiem inherited a primed install base.</p>
            </div>
          </div>

          <HighlightBox type="quote" color="blue">
            &quot;Capcom proved you can make horror bigger without making it less scary. The open zones create a different kind of dread — you never know what&apos;s around the next corner because there are so many corners.&quot;
            <br />
            <span className="text-sm text-gray-400 mt-2 block">— PC gaming critic on Requiem&apos;s design</span>
          </HighlightBox>
        </section>

        {/* ── WHAT IT MEANS ───────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What This Means for Capcom
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The 267K peak is not just a vanity number. Steam concurrent players directly correlate with sales velocity, and these numbers suggest Requiem is on track to become the <strong>fastest-selling Resident Evil game ever</strong> on PC. Capcom&apos;s stock rose 4.2% on the Tokyo Stock Exchange the morning after launch.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            With console numbers still to be reported, total launch sales across PS5, Xbox Series X|S, and PC could position Requiem among Capcom&apos;s top three best-selling titles of all time alongside Monster Hunter: World and the RE4 remake.
          </p>

          <HighlightBox type="key-point" color="green">
            <strong>Top of the charts:</strong> At peak, Requiem was the #4 most-played game on all of Steam — behind only Counter-Strike 2, Dota 2, and PUBG. No single-player horror game has ever reached the platform&apos;s top five.
          </HighlightBox>
        </section>

        {/* ── SOURCES ──────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Sources
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Concurrent player data sourced from SteamDB. Historical franchise peaks verified against SteamDB records for RE4 Remake, RE Village, RE2 Remake, and RE3 Remake. Capcom stock movement from Tokyo Stock Exchange public data.
          </p>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────────── */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/video-games/resident-evil-requiem" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-purple-600 uppercase">Hub</span>
              <h3 className="font-semibold text-gray-900 mt-1">Resident Evil Requiem</h3>
              <p className="text-sm text-gray-600 mt-1">Everything about Capcom&apos;s next chapter — release date, gameplay details, and latest news.</p>
            </Link>
            <Link href="/video-games/forza-horizon-6" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">Gaming</span>
              <h3 className="font-semibold text-gray-900 mt-1">Forza Horizon 6</h3>
              <p className="text-sm text-gray-600 mt-1">Everything about Playground Games&apos; open-world racer set in Japan.</p>
            </Link>
            <Link href="/video-games/news/gta6-pre-orders-as-take-two-ausures-sony-microsoft-no-more-delay" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-blue-600 uppercase">Gaming</span>
              <h3 className="font-semibold text-gray-900 mt-1">GTA 6 Pre-Orders &amp; Take-Two Update</h3>
              <p className="text-sm text-gray-600 mt-1">PlayStation Store database update and Take-Two&apos;s assurance to Sony and Microsoft.</p>
            </Link>
            <Link href="/video-games/news/marathon-server-slam-steam-concurrent-players-peak-drop-march-2026" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-orange-600 uppercase">Steam</span>
              <h3 className="font-semibold text-gray-900 mt-1">Marathon Server Slam — Steam Player Count</h3>
              <p className="text-sm text-gray-600 mt-1">Bungie&apos;s extraction shooter Steam concurrent player data and analysis.</p>
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
