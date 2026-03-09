import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/video-games/new/crimson-desert/console-footage-pushback';
const AUTHOR_NAME = 'Alfansa';
const PUBLISH_ISO = '2026-03-06T21:30:00Z';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Crimson Desert Dev Pushes Back on Claims of Hiding Console Footage | ObjectWire',
  description:
    'Pearl Abyss responds to fan accusations that the studio is deliberately hiding PS5 and Xbox Series X|S footage of Crimson Desert ahead of its March 19, 2026 launch.',
  keywords: [
    'Crimson Desert console footage',
    'Crimson Desert PS5 gameplay',
    'Crimson Desert Xbox footage',
    'Pearl Abyss Crimson Desert controversy',
    'Crimson Desert March 19 launch',
    'Crimson Desert console performance',
    'Crimson Desert PC vs console',
    'Pearl Abyss response',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Crimson Desert Dev Pushes Back on Claims of Hiding Console Footage',
    description:
      'With March 19 two weeks away, Pearl Abyss addresses growing fan frustration over the absence of PS5 and Xbox gameplay footage for Crimson Desert.',
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
    title: 'Crimson Desert Dev Responds to Console Footage Accusations',
    description:
      'Pearl Abyss pushes back after fans accuse the studio of deliberately withholding PS5 and Xbox gameplay ahead of March 19 launch.',
  },
};

export default function CrimsonDesertConsoleFootagePage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Crimson Desert Dev Pushes Back on Claims of Hiding Console Footage"
        description="Pearl Abyss responds to fan accusations that the studio is deliberately hiding PS5 and Xbox Series X|S footage of Crimson Desert ahead of its March 19, 2026 launch."
        author={AUTHOR_NAME}
        authorUrl="https://www.objectwire.org/authors/alfansa"
        publishedTime={PUBLISH_ISO}
        modifiedTime={PUBLISH_ISO}
        articleUrl={CANONICAL}
        section="Gaming"
        keywords={['Crimson Desert', 'console footage', 'Pearl Abyss', 'PS5', 'Xbox', 'controversy']}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Video Games', item: '/video-games' },
              { name: 'Crimson Desert', item: '/video-games/new/crimson-desert' },
              { name: 'Console Footage Controversy', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Crimson Desert Dev Pushes Back on Claims of Hiding Console Footage"
        subtitle="With the March 19 launch just over two weeks away, Pearl Abyss finds itself in an increasingly testy exchange with fans demanding to see PS5 and Xbox gameplay before committing to a purchase."
        category="GAMING"
        categoryColor="pink"
        topicTag="gaming"
        publishDate="March 6, 2026"
        readTime="3 min read"
        author={{
          name: AUTHOR_NAME,
          role: 'Gaming & Entertainment',
        }}
        tags={['Crimson Desert', 'Pearl Abyss', 'PS5', 'Xbox', 'Console', 'Controversy']}
        slug="crimson-desert-console-footage"
        url={SLUG}
      >
        {/* ── THE LEAD ─────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Where Is the Console Footage?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            With <strong>Crimson Desert&apos;s March 19 launch</strong> just over two weeks away, Pearl Abyss finds itself in an increasingly testy exchange with fans demanding to see console gameplay. Every trailer, every gameplay showcase, every hands-on preview to date has been captured on <strong>PC</strong>. Not a single frame of PS5 or Xbox Series X|S footage has been officially released — and the community has noticed.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Accusations of &quot;hiding&quot; console performance have grown louder across Reddit, ResetEra, and social media. The concern is familiar: gamers burned by <em>Cyberpunk 2077</em>&apos;s console debacle in 2020 are wary of any studio that shows only its best foot forward on high-end hardware.
          </p>

          <HighlightBox type="key-point" color="pink">
            <strong>The accusation:</strong> Fans claim Pearl Abyss is deliberately withholding PS5 and Xbox Series X|S footage to prevent unfavourable comparisons to the PC version ahead of pre-orders.
          </HighlightBox>
        </section>

        {/* ── PEARL ABYSS RESPONDS ────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Pearl Abyss Pushes Back
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In response to the mounting criticism, Pearl Abyss posted a statement this week pushing back on the characterisation. The studio said console optimisation is &quot;ongoing and on track&quot; and that the decision to showcase PC footage reflects the studio&apos;s desire to present the game at its &quot;highest visual fidelity&quot; during marketing — not to deceive buyers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The studio pointed to their track record with <em>Black Desert Online</em>, which launched on PlayStation and Xbox with solid console performance after a PC-first marketing cycle. They also noted that console review copies will be distributed ahead of launch, giving media outlets time to evaluate performance before the March 19 street date.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-pink-400 font-bold mb-2">Studio&apos;s Position</h3>
              <p className="text-gray-300 text-sm">PC footage reflects &quot;highest visual fidelity&quot; for marketing. Console optimisation is on track for day-one launch.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-orange-400 font-bold mb-2">Fan Concern</h3>
              <p className="text-gray-300 text-sm">Post-Cyberpunk 2077 wariness. Players want PS5/Xbox footage before committing to pre-orders.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-blue-400 font-bold mb-2">Review Copies</h3>
              <p className="text-gray-300 text-sm">Pearl Abyss confirmed console review copies will ship to media before the March 19 launch.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-green-400 font-bold mb-2">BDO Precedent</h3>
              <p className="text-gray-300 text-sm">Black Desert Online launched with solid console performance after a PC-first marketing approach.</p>
            </div>
          </div>

          <HighlightBox type="quote" color="blue">
            &quot;We understand the concern. Console builds are on track and review copies will be in media hands before launch. We chose to market with PC footage because it represents the best the game can look — not because we&apos;re hiding anything.&quot;
            <br />
            <span className="text-sm text-gray-400 mt-2 block">— Pearl Abyss statement (paraphrased)</span>
          </HighlightBox>
        </section>

        {/* ── WHAT TO WATCH ───────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What to Watch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The clock is ticking. With <strong>3 million wishlists</strong> across all platforms, a significant portion of Crimson Desert&apos;s audience is on console. If Pearl Abyss doesn&apos;t release official PS5 or Xbox footage before March 19, the conversation will only intensify. Console review embargoes lifting before street date will be the make-or-break moment — either validating the studio&apos;s confidence or confirming the community&apos;s worst fears.
          </p>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────────── */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/video-games/new/crimson-desert" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-pink-600 uppercase">RPG</span>
              <h3 className="font-semibold text-gray-900 mt-1">Crimson Desert — 3M Wishlists</h3>
              <p className="text-sm text-gray-600 mt-1">Pearl Abyss&apos;s action RPG rivals Elden Ring and Starfield pre-launch numbers.</p>
            </Link>
            <Link href="/video-games/new/windrose/release-date-holdoff" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-orange-600 uppercase">Indie</span>
              <h3 className="font-semibold text-gray-900 mt-1">Windrose Holds Off on Release Date</h3>
              <p className="text-sm text-gray-600 mt-1">Despite 1M wishlists, Windrose Crew prioritizes quality over a rushed date.</p>
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
