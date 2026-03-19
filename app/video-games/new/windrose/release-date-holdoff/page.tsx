import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/video-games/new/windrose/release-date-holdoff';
const AUTHOR_NAME = 'Alfansa';
const PUBLISH_ISO = '2026-03-06T21:00:00Z';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Windrose Dev Holds Off on Release Date Despite 1M Wishlists | ObjectWire',
  description:
    'Windrose Crew says the pirate survival game won\'t get a release date until the studio is confident the build meets its quality bar, despite crossing 1 million Steam wishlists.',
  keywords: [
    'Windrose release date',
    'Windrose Crew update',
    'Windrose 1 million wishlists',
    'Windrose launch delay',
    'Windrose early access date',
    'Windrose pirate game 2026',
    'Windrose Steam release',
    'indie game release strategy',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Windrose Dev Holds Off on Release Date Despite 1M Wishlists',
    description:
      'Despite crossing 1M wishlists and going viral at Steam Next Fest, Windrose Crew says they won\'t announce a date until the build is ready.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: PUBLISH_ISO,
    modifiedTime: PUBLISH_ISO,
    section: 'Gaming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windrose Dev Holds Off on Release Date Despite 1M Wishlists',
    description:
      'Windrose Crew prioritizes quality over hype — no release date despite 1M wishlists and a viral Next Fest demo.',
  },
};

export default function WindroseReleaseDatePage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Windrose Dev Holds Off on Release Date Despite 1M Wishlists"
        description="Windrose Crew says they won't announce a release date until the build meets their quality bar, despite crossing 1 million Steam wishlists."
        author={AUTHOR_NAME}
        authorUrl="https://www.objectwire.org/authors/alfansa"
        publishedTime={PUBLISH_ISO}
        modifiedTime={PUBLISH_ISO}
        articleUrl={CANONICAL}
        section="Gaming"
        keywords={['Windrose', 'release date', 'indie game', 'Steam wishlists', 'Windrose Crew']}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Video Games', item: '/video-games' },
              { name: 'Windrose', item: '/video-games/new/windrose' },
              { name: 'Release Date Update', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Windrose Dev Holds Off on Release Date Despite 1M Wishlists"
        subtitle="Windrose Crew says the million-wishlist milestone won't rush them into announcing a date. The Uzbek studio is prioritizing quality over hype — a rare move in an industry addicted to countdown clocks."
        category="GAMING"
        categoryColor="orange"
        topicTag="gaming"
        publishDate="March 6, 2026"
        readTime="3 min read"
        author={{
          name: AUTHOR_NAME,
          role: 'Gaming & Entertainment',
        }}
        tags={['Windrose', 'Indie Games', 'Release Date', 'Steam', 'Windrose Crew']}
        slug="windrose-release-date-holdoff"
        url={SLUG}
      >
        {/* ── THE LEAD ─────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            A Million Wishlists, No Date
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most studios would race to capitalise on a million-wishlist milestone with an immediate release date announcement. <strong>Windrose Crew</strong> is not most studios. In a community update posted this week, the Tashkent-based developer confirmed that despite crossing <strong>1 million Steam wishlists</strong> and dominating Steam Next Fest, they will not announce a release date until they are confident the build meets their quality bar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            &quot;We know everyone wants a date. We want to give you one,&quot; the team wrote. &quot;But we&apos;d rather be the studio that launched a great game late than a broken one on time. The demo showed you what we&apos;re capable of — the full game needs to exceed that.&quot;
          </p>

          <HighlightBox type="key-point" color="orange">
            <strong>The stance:</strong> Windrose Crew will not commit to a release window until internal quality benchmarks are met. The studio cited the negative industry trend of rushed launches as something they refuse to repeat.
          </HighlightBox>
        </section>

        {/* ── WHY IT MATTERS ──────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why the Hold Matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Windrose&apos;s viral Next Fest demo peaked at <strong>22,396 concurrent players</strong> and secured a <strong>93% positive</strong> rating. That kind of momentum creates immense pressure to strike while the iron is hot. But the studio is acutely aware of cautionary tales — games like <em>Skull and Bones</em> that buckled under expectations after rushed launches.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The decision to hold off also signals confidence. A million wishlists represent a guaranteed audience; the studio doesn&apos;t need a hype-driven countdown timer to ensure a strong launch. Instead, they&apos;re banking on the demo&apos;s reputation to carry awareness until the game is genuinely ready.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-green-400 font-bold mb-2">Quality Over Speed</h3>
              <p className="text-gray-300 text-sm">Internal milestones must be hit before any public date commitment. No artificial deadlines.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-blue-400 font-bold mb-2">Guaranteed Audience</h3>
              <p className="text-gray-300 text-sm">1M wishlists mean the launch audience is locked in regardless of when the date drops.</p>
            </div>
          </div>

          <HighlightBox type="quote" color="blue">
            &quot;We&apos;d rather be the studio that launched a great game late than a broken one on time. The demo showed you what we&apos;re capable of — the full game needs to exceed that.&quot;
            <br />
            <span className="text-sm text-gray-400 mt-2 block">— Windrose Crew community update</span>
          </HighlightBox>
        </section>

        {/* ── WHAT TO WATCH ───────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What to Watch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The studio hinted that development updates will continue &quot;regularly&quot; and that additional gameplay footage is in the pipeline. Without a confirmed window, market analysts expect an Early Access launch in <strong>late 2026</strong> at the earliest. For now, the million-strong wishlist army waits.
          </p>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────────── */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/video-games/new/windrose" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-orange-600 uppercase">Indie</span>
              <h3 className="font-semibold text-gray-900 mt-1">Windrose Hits 1M Wishlists</h3>
              <p className="text-sm text-gray-600 mt-1">How an Uzbek pirate survival game went viral at Steam Next Fest.</p>
            </Link>
            <Link href="/video-games/new/crimson-desert" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-pink-600 uppercase">RPG</span>
              <h3 className="font-semibold text-gray-900 mt-1">Crimson Desert — 3M Wishlists</h3>
              <p className="text-sm text-gray-600 mt-1">Pearl Abyss&apos;s open-world RPG rivals Elden Ring pre-launch numbers.</p>
            </Link>
            <Link href="/video-games/news/slay-the-spire-2" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-purple-600 uppercase">Indie</span>
              <h3 className="font-semibold text-gray-900 mt-1">Slay the Spire 2 — 430K Peak</h3>
              <p className="text-sm text-gray-600 mt-1">Mega Crit&apos;s sequel crashed Steam and set the roguelike record.</p>
            </Link>
          </div>
        </section>
      </NewsArticle>
    </SEOWrapper>
  );
}
