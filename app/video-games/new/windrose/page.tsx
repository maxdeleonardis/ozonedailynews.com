import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/video-games/news/windrose';
const AUTHOR_NAME = 'Alfansa';
const PUBLISH_ISO = '2026-03-06T19:00:00Z';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Windrose Hits 1M Steam Wishlists — Uzbek Pirate Survival Game Breaks Out | ObjectWire',
  description:
    'Windrose Crew\'s debut pirate survival game from Uzbekistan surpassed 1 million Steam wishlists after a viral Steam Next Fest demo peaking at 22,396 concurrent players.',
  keywords: [
    'Windrose game',
    'Windrose Steam wishlists',
    'Windrose Crew',
    'Uzbekistan indie game',
    'pirate survival game 2026',
    'Windrose Steam Next Fest',
    'Windrose demo',
    'Windrose pirate game',
    'indie pirate game',
    'Windrose Crosswind',
    'Windrose co-op PvE',
    'Steam Next Fest 2026',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Windrose Hits 1M Wishlists — Uzbek Pirate Survival Indie Breaks Out',
    description:
      'A small studio from Uzbekistan captured gaming\'s spotlight. Windrose topped Steam Next Fest with 351K wishlists in one week, a 22K player demo peak, and 93% positive reviews.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: PUBLISH_ISO,
    modifiedTime: PUBLISH_ISO,
    section: 'Gaming',
    tags: ['Windrose', 'Indie Games', 'Pirate', 'Survival', 'Steam', 'Uzbekistan'],
    images: [
      {
        url: 'https://www.objectwire.org/entertainment/windrose.PNG',
        width: 1200,
        height: 675,
        alt: 'Windrose pirate survival game key art',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windrose Hits 1M Steam Wishlists — Uzbek Indie Pirate Game Goes Viral',
    description:
      'From Tashkent to the top of Steam Next Fest. 1M wishlists, 22K concurrent demo players, 93% positive, and the #1 Next Fest game ahead of Marathon.',
  },
};

export default function WindrosePage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Windrose Hits 1M Steam Wishlists — Uzbek Pirate Survival Game Breaks Out"
        description="Windrose Crew's debut pirate survival game from Uzbekistan surpassed 1 million Steam wishlists after a viral Steam Next Fest demo peaking at 22,396 concurrent players."
        author={AUTHOR_NAME}
        authorUrl="https://www.objectwire.org/authors/alfansa"
        publishedTime={PUBLISH_ISO}
        modifiedTime={PUBLISH_ISO}
        articleUrl={CANONICAL}
        section="Gaming"
        keywords={[
          'Windrose', 'Steam wishlists', 'pirate survival', 'indie game',
          'Uzbekistan', 'Steam Next Fest', 'co-op PvE', 'Windrose Crew',
        ]}
        imageUrl="https://www.objectwire.org/entertainment/windrose.PNG"
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Video Games', item: '/video-games' },
              { name: 'News', item: '/video-games/news' },
              { name: 'Windrose', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Uzbek Pirate Survival Game Windrose Hits 1M Wishlists"
        subtitle="From Tashkent to the top of Steam Next Fest. Windrose Crew's debut title secured 351,000 wishlists in one week, peaked at 22,396 concurrent demo players, and now sits at 1 million total wishlists — outrunning AAA pirate games along the way."
        category="INDIE SPOTLIGHT"
        categoryColor="orange"
        topicTag="gaming"
        publishDate="March 6, 2026"
        readTime="4 min read"
        author={{
          name: AUTHOR_NAME,
          role: 'Gaming & Entertainment',
        }}
        thumbnail={{
          src: '/entertainment/windrose.PNG',
          alt: 'Windrose pirate survival game — ship sailing through stormy seas',
        }}
        tags={[
          'Windrose',
          'Indie Games',
          'Pirate',
          'Survival',
          'Steam',
          'Co-op',
          'Uzbekistan',
          'Steam Next Fest',
        ]}
        slug="windrose"
        url={SLUG}
      >
        {/* ── THE LEAD ─────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            A Demo That Outran the Giants
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In one of the most unexpected breakout stories of the year, a small independent studio from <strong>Tashkent, Uzbekistan</strong> has captured the global gaming spotlight. <strong>Windrose Crew</strong> officially announced that their debut title, <em>Windrose</em>, surpassed <strong>one million wishlists</strong> on Steam this week, following a viral performance during Steam Next Fest.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The game, which reimagines the Golden Age of Piracy with a gritty survival twist, is being hailed as the &quot;indie answer&quot; to big-budget pirate titles like <em>Sea of Thieves</em> and <em>Skull and Bones</em>.
          </p>

          <HighlightBox type="stat" color="orange">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-orange-400">1M+</div>
                <div className="text-sm text-gray-300">Steam Wishlists</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">22,396</div>
                <div className="text-sm text-gray-300">Demo Peak Players</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">351K</div>
                <div className="text-sm text-gray-300">Next Fest Wishlists</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">93%</div>
                <div className="text-sm text-gray-300">Positive Rating</div>
              </div>
            </div>
          </HighlightBox>
        </section>

        {/* ── YOUTUBE TRAILER ──────────────────────────────────────── */}
        <section>
          <div className="not-prose my-8">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/XEFmJSFgiUU"
                title="Windrose — Official Gameplay Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
              />
            </div>
            <p className="text-center text-xs text-gray-500 mt-2 italic">
              Windrose — Official Gameplay Trailer. Windrose Crew, 2026.
            </p>
          </div>
        </section>

        {/* ── NEXT FEST NUMBERS ────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Steam Next Fest by the Numbers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The momentum began on <strong>February 17, 2026</strong>, when the studio released a free demo. What was intended as a small technical preview quickly snowballed into a cultural moment. The demo reached an impressive <strong>22,396 concurrent players</strong> on February 22 — a figure that reportedly surpassed the Steam launch peaks of several AAA pirate-themed titles, including <em>Assassin&apos;s Creed IV: Black Flag</em>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            According to market analysis by Alinea, Windrose secured over <strong>351,000 new wishlists</strong> during the week-long Next Fest event alone, taking the <strong>#1 spot</strong> ahead of high-profile competitors like Bungie&apos;s Marathon.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-green-400 font-bold mb-2">Demo Peak: 22,396</h3>
              <p className="text-gray-300 text-sm">Surpassed the Steam launch peaks of multiple AAA pirate titles including AC IV: Black Flag.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-blue-400 font-bold mb-2">#1 Next Fest Game</h3>
              <p className="text-gray-300 text-sm">351,000 wishlists in one week — more than Bungie&apos;s Marathon and every other Next Fest competitor.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-orange-400 font-bold mb-2">93% Positive Reviews</h3>
              <p className="text-gray-300 text-sm">&quot;Very Positive&quot; rating praising Souls-lite combat and seamless land-to-naval transitions.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-purple-400 font-bold mb-2">From Uzbekistan</h3>
              <p className="text-gray-300 text-sm">Windrose Crew, based in Tashkent, is now one of the most-wishlisted indie studios on Steam.</p>
            </div>
          </div>

          <HighlightBox type="key-point" color="green">
            <strong>Outrunning the giants:</strong> Windrose&apos;s demo peak of 22,396 concurrent players surpassed the Steam launch peaks of several AAA pirate games. The full game hasn&apos;t even released yet.
          </HighlightBox>
        </section>

        {/* ── FROM CROSSWIND TO WINDROSE ───────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            From &quot;Crosswind&quot; to &quot;Windrose&quot;
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The project&apos;s journey has been one of significant transformation. Originally titled <em>Crosswind</em>, the game was first envisioned as a free-to-play survival MMO. However, in a candid update to fans, the developers announced a pivot to a <strong>buy-to-play, co-op PvE adventure</strong> — a decision the community has overwhelmingly endorsed.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The rebrand to <em>Windrose</em> accompanied a fundamental rethinking of the game&apos;s design: tighter survival mechanics, Souls-inspired melee combat, and seamless transitions between on-foot exploration and open-sea naval warfare. Players in the demo praised the feel of sword fighting on rain-slicked docks before leaping onto their ship to chase down a rival vessel — all without a single loading screen.
          </p>

          <HighlightBox type="quote" color="blue">
            &quot;They listened to everything the community said and rebuilt the vision from the ground up. Going from F2P MMO to buy-to-play co-op PvE was the best decision they could have made.&quot;
            <br />
            <span className="text-sm text-gray-400 mt-2 block">— Steam community review, 93% &quot;Very Positive&quot; consensus</span>
          </HighlightBox>
        </section>

        {/* ── WHAT TO WATCH ───────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What to Watch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            With one million wishlists before a release date has even been announced, Windrose is positioned as one of 2026&apos;s most anticipated indie launches. The studio has hinted at Early Access later this year. If the full game delivers on the demo&apos;s promise — gritty survival, fluid combat, and open-sea piracy without the live-service bloat — Windrose Crew may have the year&apos;s biggest indie hit on their hands. From Tashkent to the top of Steam: the wind is at their back.
          </p>
        </section>

        {/* ── SOURCES ──────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Sources
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wishlist and concurrent player data sourced from SteamDB and Windrose Crew&apos;s official announcement. Next Fest wishlist rankings from Alinea market analysis. Review rating from the Steam store page demo listing.
          </p>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────────── */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/video-games/news/slay-the-spire-2" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-purple-600 uppercase">Indie</span>
              <h3 className="font-semibold text-gray-900 mt-1">Slay the Spire 2 Shatters Steam Records</h3>
              <p className="text-sm text-gray-600 mt-1">430K concurrent players and a crashed Steam cart — Mega Crit&apos;s sequel redefines indie scale.</p>
            </Link>
            <Link href="/video-games/news/marathon-server-slam-steam-concurrent-players-peak-drop-march-2026" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-orange-600 uppercase">Steam</span>
              <h3 className="font-semibold text-gray-900 mt-1">Marathon Server Slam — Steam Player Count</h3>
              <p className="text-sm text-gray-600 mt-1">Bungie&apos;s extraction shooter launch week concurrent player data and analysis.</p>
            </Link>
            <Link href="/video-games/resident-evil-requiem/steam-launch-record-267k-concurrent-players" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-purple-600 uppercase">Steam</span>
              <h3 className="font-semibold text-gray-900 mt-1">RE Requiem Shatters Steam Records — 267K Peak</h3>
              <p className="text-sm text-gray-600 mt-1">Capcom&apos;s open-zone horror hit 267,509 concurrent players on day one.</p>
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
