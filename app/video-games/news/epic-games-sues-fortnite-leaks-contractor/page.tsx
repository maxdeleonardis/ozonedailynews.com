import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/video-games/news/epic-games-sues-fortnite-leaks-contractor';
const AUTHOR_NAME = 'Alfansa';
const PUBLISH_ISO = '2026-03-06T22:15:00Z';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Epic Games Sues Contractor Who Ran Fortnite Leaks Account | ObjectWire',
  description:
    'Epic Games filed a lawsuit on March 5 against former contractor Hayden Cohen, who allegedly ran the "AdiraInfo" Fortnite leaks account on X and Discord while working inside the company.',
  keywords: [
    'Epic Games lawsuit',
    'Fortnite leaks contractor',
    'Hayden Cohen Fortnite',
    'AdiraInfo Fortnite leaks',
    'Epic Games Adira lawsuit',
    'Fortnite leaks account sued',
    'Epic Games contractor NDA',
    'Fortnite collaboration leaks',
    'Epic Games federal lawsuit',
    'Fortnite insider leaks 2026',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Epic Games Sues Contractor Who Ran Fortnite Leaks Account',
    description:
      'Former contractor Hayden Cohen allegedly operated the "AdiraInfo" leaks account on X and Discord, leaking a dozen unreleased Fortnite collaborations "for clout."',
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
    title: 'Epic Games Sues Fortnite Leaks Contractor — "For Clout"',
    description:
      'Hayden Cohen allegedly ran the AdiraInfo leaks account while working as an Epic contractor, disclosing 12+ unreleased collaborations.',
  },
};

export default function EpicSuesFortniteLeakerPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Epic Games Sues Contractor Who Ran Fortnite Leaks Account"
        description="Epic Games filed a lawsuit on March 5 against former contractor Hayden Cohen, who allegedly ran the AdiraInfo Fortnite leaks account while working inside the company."
        author={AUTHOR_NAME}
        authorUrl="https://www.objectwire.org/authors/alfansa"
        publishedTime={PUBLISH_ISO}
        modifiedTime={PUBLISH_ISO}
        articleUrl={CANONICAL}
        section="Gaming"
        keywords={['Epic Games', 'Fortnite', 'lawsuit', 'leaks', 'Hayden Cohen', 'AdiraInfo']}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Video Games', item: '/video-games' },
              { name: 'News', item: '/video-games/news' },
              { name: 'Epic Sues Fortnite Leaker', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Epic Games Sues Contractor Who Ran Fortnite Leaks Account"
        subtitle='Former contractor Hayden Cohen allegedly operated under the pseudonyms "Adira" and "AdiraInfo" on X and Discord, leaking details of more than a dozen unreleased collaborations "for clout" — a phrase now in a federal court filing.'
        category="GAMING"
        categoryColor="blue"
        topicTag="gaming"
        publishDate="March 6, 2026"
        readTime="3 min read"
        breaking
        author={{
          name: AUTHOR_NAME,
          role: 'Gaming & Entertainment',
        }}
        tags={['Epic Games', 'Fortnite', 'Lawsuit', 'Leaks', 'Legal', 'Contractor']}
        slug="epic-games-sues-fortnite-leaks-contractor"
        url={SLUG}
      >
        {/* ── THE LAWSUIT ──────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            The Lawsuit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Epic Games</strong> filed a lawsuit on <strong>March 5</strong> against a former contractor who allegedly ran a prolific Fortnite leaks account while working inside the company, according to a statement the studio posted through its official newsroom account on X.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The defendant, <strong>Hayden Cohen</strong>, operated under the pseudonyms <strong>&quot;Adira&quot;</strong> and <strong>&quot;AdiraInfo&quot;</strong> on X and Discord, where he disclosed details about more than a dozen unreleased collaborations over the course of several weeks. Epic accused Cohen of leaking the information <strong>&quot;for clout&quot;</strong> — a phrase that has now appeared in a federal court filing.
          </p>

          <HighlightBox type="stat" color="blue">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400">12+</div>
                <div className="text-sm text-gray-300">Collabs Leaked</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">Mar 5</div>
                <div className="text-sm text-gray-300">Lawsuit Filed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">&quot;For Clout&quot;</div>
                <div className="text-sm text-gray-300">In Federal Filing</div>
              </div>
            </div>
          </HighlightBox>
        </section>

        {/* ── THE ALLEGATIONS ──────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Inside Access, Outside Disclosure
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            According to the complaint, Cohen had access to internal development systems and unreleased content as part of his contractor role at Epic. Rather than honouring his NDA, he allegedly funnelled details about upcoming brand collaborations, skin releases, and event timings to his &quot;AdiraInfo&quot; accounts, building a substantial following in the Fortnite leaks community.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Epic&apos;s filing claims the leaks caused &quot;irreparable harm&quot; to the company&apos;s marketing plans, brand partner relationships, and the carefully orchestrated surprise reveals that are central to Fortnite&apos;s cultural strategy. The studio is seeking damages and an injunction barring Cohen from further disclosures.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-blue-400 font-bold mb-2">The Accounts</h3>
              <p className="text-gray-300 text-sm">&quot;Adira&quot; and &quot;AdiraInfo&quot; on X and Discord — built a following leaking unreleased Fortnite content.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-orange-400 font-bold mb-2">The Damage</h3>
              <p className="text-gray-300 text-sm">Epic claims &quot;irreparable harm&quot; to marketing plans and brand partner relationships.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-pink-400 font-bold mb-2">NDA Breach</h3>
              <p className="text-gray-300 text-sm">Cohen had signed a non-disclosure agreement as a standard condition of his contractor role.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-green-400 font-bold mb-2">What Epic Wants</h3>
              <p className="text-gray-300 text-sm">Monetary damages and an injunction barring further disclosure of confidential information.</p>
            </div>
          </div>

          <HighlightBox type="quote" color="purple">
            &quot;The defendant used his insider access not for professional purposes but for clout — building a social media following at the expense of Epic Games and its partners.&quot;
            <br />
            <span className="text-sm text-gray-400 mt-2 block">— Epic Games federal court filing (paraphrased)</span>
          </HighlightBox>
        </section>

        {/* ── WHAT TO WATCH ───────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What to Watch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The case is one of the highest-profile leak-related lawsuits in gaming since Epic&apos;s previous actions against Fortnite cheat developers. It signals that studios are increasingly willing to pursue legal action not just against hackers, but against insiders who exploit privileged access for social media influence. The outcome could set a precedent for how the industry handles contractor-driven leaks.
          </p>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────────── */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/video-games/news/rockstar-gta6-psn-profile-exploit" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">GTA 6</span>
              <h3 className="font-semibold text-gray-900 mt-1">Rockstar Pulls GTA 6 IDs from PS Store</h3>
              <p className="text-sm text-gray-600 mt-1">Title IDs removed after fans exploited a profile glitch to fake &quot;Recently Played.&quot;</p>
            </Link>
            <Link href="/video-games/news/arc-raiders-discord-plaintext-security" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-pink-600 uppercase">Security</span>
              <h3 className="font-semibold text-gray-900 mt-1">Arc Raiders Logged Discord DMs in Plaintext</h3>
              <p className="text-sm text-gray-600 mt-1">Embark Studios announces emergency hotfix after security researcher disclosure.</p>
            </Link>
            <Link href="/video-games/news/gta6-pre-orders-as-take-two-ausures-sony-microsoft-no-more-delay" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-blue-600 uppercase">GTA 6</span>
              <h3 className="font-semibold text-gray-900 mt-1">GTA 6 Pre-Orders &amp; Take-Two Update</h3>
              <p className="text-sm text-gray-600 mt-1">Take-Two assures Sony and Microsoft — no more delays.</p>
            </Link>
          </div>
        </section>
      </NewsArticle>
    </SEOWrapper>
  );
}
