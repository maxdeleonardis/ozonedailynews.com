import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/video-games/news/crimson-desert';
const AUTHOR_NAME = 'Alfansa';
const PUBLISH_ISO = '2026-03-06T20:00:00Z';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Crimson Desert Hits 3 Million Wishlists Before March 19 Launch | ObjectWire',
  description:
    'Pearl Abyss\'s open-world action RPG Crimson Desert crossed 3 million wishlists across PC, PS5, Xbox Series X|S, and Mac ahead of its March 19, 2026 release — rivaling Elden Ring and Starfield pre-launch numbers.',
  keywords: [
    'Crimson Desert wishlists',
    'Crimson Desert release date',
    'Crimson Desert March 19 2026',
    'Pearl Abyss Crimson Desert',
    'Crimson Desert 3 million wishlists',
    'Crimson Desert open world',
    'Crimson Desert Kliff Greymanes',
    'Crimson Desert vs Elden Ring wishlists',
    'Crimson Desert Pywel',
    'Crimson Desert single player',
    'Pearl Abyss Black Desert',
    'Crimson Desert map size Skyrim',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Crimson Desert Hits 3M Wishlists — Pearl Abyss RPG Rivals Elden Ring Pre-Launch Hype',
    description:
      '3 million wishlists across PC, PS5, Xbox, and Mac. A map twice Skyrim\'s size. Pearl Abyss pivots from MMO to single-player action RPG ahead of March 19 launch.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: PUBLISH_ISO,
    modifiedTime: PUBLISH_ISO,
    section: 'Gaming',
    tags: ['Crimson Desert', 'Pearl Abyss', 'RPG', 'Open World', 'PS5', 'Xbox', 'Steam'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crimson Desert — 3M Wishlists Before March 19 Launch',
    description:
      'Pearl Abyss\'s single-player pivot rivals Elden Ring and Starfield in pre-launch wishlists. Open world twice Skyrim\'s size. Launches March 19.',
  },
};

const wishlistComparison = [
  { game: 'Starfield (2023)', wishlists: '3.1M', bar: 'w-full' },
  { game: 'Crimson Desert (2026)', wishlists: '3.0M+', bar: 'w-[97%]', highlight: true },
  { game: 'Elden Ring (2022)', wishlists: '2.8M', bar: 'w-[90%]' },
  { game: 'Cyberpunk 2077 (2020)', wishlists: '2.5M', bar: 'w-[81%]' },
];

export default function CrimsonDesertPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Crimson Desert Hits 3 Million Wishlists Before March 19 Launch"
        description="Pearl Abyss's open-world action RPG Crimson Desert crossed 3 million wishlists across PC, PS5, Xbox Series X|S, and Mac ahead of its March 19, 2026 release."
        author={AUTHOR_NAME}
        authorUrl="https://www.objectwire.org/authors/alfansa"
        publishedTime={PUBLISH_ISO}
        modifiedTime={PUBLISH_ISO}
        articleUrl={CANONICAL}
        section="Gaming"
        keywords={[
          'Crimson Desert', 'Pearl Abyss', 'wishlists', 'open world RPG',
          'March 19 2026', 'Kliff', 'Greymanes', 'Pywel',
        ]}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Video Games', item: '/video-games' },
              { name: 'News', item: '/video-games/news' },
              { name: 'Crimson Desert', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Crimson Desert Hits 3 Million Wishlists Before March 19 Launch"
        subtitle="Pearl Abyss's open-world action RPG stands alongside Elden Ring and Starfield as one of the most wishlisted games in Steam history — and the release date is still two weeks away."
        category="GAMING"
        categoryColor="pink"
        topicTag="gaming"
        publishDate="March 6, 2026"
        readTime="4 min read"
        author={{
          name: AUTHOR_NAME,
          role: 'Gaming & Entertainment',
        }}
        tags={[
          'Crimson Desert',
          'Pearl Abyss',
          'RPG',
          'Open World',
          'PS5',
          'Xbox',
          'Steam',
          'Single Player',
        ]}
        slug="crimson-desert"
        url={SLUG}
      >
        {/* ── THE LEAD ─────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            3 Million and Climbing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pearl Abyss&apos;s open-world action RPG <strong>Crimson Desert</strong> has crossed <strong>3 million wishlists</strong> across PC, PlayStation 5, Xbox Series X|S, and Mac, the South Korean studio announced on social media this week. &quot;3 million wishlists! A huge thank you for making Crimson Desert one of your most anticipated games,&quot; the official account wrote. &quot;We&apos;re in the final countdown to March 19 — prepare yourselves for the world of Pywel!&quot;
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The milestone places the title among the most wishlisted games in Steam history, according to Forbes, putting it in the company of <em>Elden Ring</em>&apos;s 2.8 million and <em>Starfield</em>&apos;s 3.1 million pre-launch wishlists. With two weeks still remaining before the <strong>March 19</strong> release, the count is expected to climb further.
          </p>

          <HighlightBox type="stat" color="pink">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-pink-400">3M+</div>
                <div className="text-sm text-gray-300">Wishlists</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-400">Mar 19</div>
                <div className="text-sm text-gray-300">Launch Date</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-400">2× Skyrim</div>
                <div className="text-sm text-gray-300">Map Size</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-400">4 Platforms</div>
                <div className="text-sm text-gray-300">PC · PS5 · Xbox · Mac</div>
              </div>
            </div>
          </HighlightBox>
        </section>

        {/* ── YOUTUBE TRAILER ──────────────────────────────────────── */}
        <section>
          <div className="not-prose my-8">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/P6IktWbA5C8"
                title="Crimson Desert — Official Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
              />
            </div>
            <p className="text-center text-xs text-gray-500 mt-2 italic">
              Crimson Desert — Official Trailer. Pearl Abyss, 2026.
            </p>
          </div>
        </section>

        {/* ── WISHLIST COMPARISON ──────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Among the Most Wishlisted Games Ever
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Crimson Desert&apos;s pre-launch wishlist count now sits in rare company. Here&apos;s how it compares to other blockbuster RPGs at the same stage:
          </p>

          <div className="space-y-3 my-6">
            {wishlistComparison.map((entry) => (
              <div key={entry.game} className={`rounded-lg border p-4 ${entry.highlight ? 'bg-pink-950 border-pink-700' : 'bg-gray-900 border-gray-700'}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-medium text-sm ${entry.highlight ? 'text-pink-200' : 'text-white'}`}>{entry.game}</span>
                  <span className={`font-bold ${entry.highlight ? 'text-pink-400' : 'text-blue-400'}`}>{entry.wishlists}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className={`h-2 rounded-full ${entry.bar} ${entry.highlight ? 'bg-pink-500' : 'bg-blue-500'}`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SINGLE-PLAYER PIVOT ─────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            A Sprawling Single-Player Departure
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Crimson Desert marks a sharp pivot for Pearl Abyss, the studio behind the microtransaction-heavy MMO <em>Black Desert Online</em>. The game follows protagonist <strong>Kliff</strong> and his mercenary band, the <strong>Greymanes</strong>, across the continent of <strong>Pywel</strong> in what the studio describes as a fully single-player experience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            During a presentation earlier this year, Pearl Abyss said the game&apos;s open-world playable area is at least <strong>twice the size of Skyrim</strong>, with a total map surpassing that of <em>Red Dead Redemption 2</em>. The shift from live-service MMO to narrative-driven single-player RPG signals a studio betting everything on a premium experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-pink-400 font-bold mb-2">Single-Player Focus</h3>
              <p className="text-gray-300 text-sm">No microtransactions, no live service. A fully narrative-driven action RPG from an MMO studio.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-blue-400 font-bold mb-2">Map Scale</h3>
              <p className="text-gray-300 text-sm">Playable area 2× Skyrim. Total map larger than Red Dead Redemption 2.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-orange-400 font-bold mb-2">Kliff &amp; the Greymanes</h3>
              <p className="text-gray-300 text-sm">A mercenary band story across the continent of Pywel — personal stakes, not world-ending prophecy.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-green-400 font-bold mb-2">4-Platform Launch</h3>
              <p className="text-gray-300 text-sm">Day-one release on PC, PS5, Xbox Series X|S, and Mac — no timed exclusivity.</p>
            </div>
          </div>

          <HighlightBox type="quote" color="blue">
            &quot;3 million wishlists! A huge thank you for making Crimson Desert one of your most anticipated games. We&apos;re in the final countdown to March 19 — prepare yourselves for the world of Pywel!&quot;
            <br />
            <span className="text-sm text-gray-400 mt-2 block">— Crimson Desert official social media</span>
          </HighlightBox>
        </section>

        {/* ── WHAT TO WATCH ───────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What to Watch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The question now is whether Pearl Abyss can convert 3 million wishlists into first-week sales that rival the Elden Ring–Starfield tier. With no early review copies confirmed yet, launch-day reception will be critical. If the studio delivers on its promise of a premium, single-player action RPG at this scale — no live-service strings attached — Crimson Desert could be 2026&apos;s biggest new IP launch.
          </p>
        </section>

        {/* ── SOURCES ──────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Sources
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wishlist milestone from Pearl Abyss official social media. Historical wishlist comparisons from Forbes. Map size claims from Pearl Abyss presentation, reported by GamingBolt (March 4, 2026).
          </p>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────────── */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/video-games/news/windrose" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-orange-600 uppercase">Indie</span>
              <h3 className="font-semibold text-gray-900 mt-1">Windrose Hits 1M Wishlists</h3>
              <p className="text-sm text-gray-600 mt-1">Uzbek pirate survival game went viral at Steam Next Fest with 22K concurrent demo players.</p>
            </Link>
            <Link href="/video-games/news/slay-the-spire-2" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-purple-600 uppercase">Indie</span>
              <h3 className="font-semibold text-gray-900 mt-1">Slay the Spire 2 — 430K Peak</h3>
              <p className="text-sm text-gray-600 mt-1">Mega Crit&apos;s sequel crashed the Steam cart system and set the all-time roguelike record.</p>
            </Link>
            <Link href="/video-games/resident-evil-requiem/steam-launch-record-267k-concurrent-players" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-purple-600 uppercase">Steam</span>
              <h3 className="font-semibold text-gray-900 mt-1">RE Requiem — 267K Steam Peak</h3>
              <p className="text-sm text-gray-600 mt-1">Capcom&apos;s open-zone horror shattered franchise records on day one.</p>
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
