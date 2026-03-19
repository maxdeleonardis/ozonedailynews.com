import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, Timeline } from '@/components/NewsArticle';

const SLUG = '/video-games/news/gta6-pre-orders-as-take-two-ausures-sony-microsoft-no-more-delay';
const AUTHOR_NAME = 'ObjectWire Gaming Desk';

export const metadata: Metadata = {
  title: 'GTA 6 Pre-Orders Near as PlayStation Database Lists Title IDs — Take-Two Assures Sony & Microsoft No Delay | ObjectWire',
  description:
    'Two Grand Theft Auto VI title IDs appeared in the PlayStation Store backend on March 1, 2026, signaling imminent pre-orders. Separately, Take-Two Interactive reportedly assured Sony and Microsoft the November 19, 2026 release remains firm.',
  keywords: [
    'GTA 6 pre-orders',
    'GTA 6 PlayStation Store',
    'GTA 6 title ID PPSA01547',
    'Grand Theft Auto VI pre-order date',
    'Take-Two GTA 6 no delay',
    'GTA 6 November 2026',
    'GTA 6 release date confirmed',
    'Rockstar Games GTA 6 2026',
    'PlayStation Game Size GTA 6',
    'Take-Two Sony Microsoft assurance',
    'GTA 6 pre-order PS5',
    'GTA VI release date',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'GTA 6 Pre-Orders May Be Imminent — PlayStation Backend Lists Title IDs, Take-Two Assures No Delay',
    description:
      'PlayStation Store backend surfaced two GTA VI title IDs on March 1, 2026. Take-Two has reportedly told Sony and Microsoft the November 19 launch is locked. Everything we know.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-03-02T00:00:00Z',
    modifiedTime: '2026-03-02T00:00:00Z',
    section: 'Video Games',
    tags: ['GTA 6', 'Rockstar Games', 'Take-Two Interactive', 'Pre-Orders', 'PlayStation', 'Xbox'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 Pre-Orders Incoming — PlayStation Database + Take-Two No-Delay Assurance',
    description:
      'Two GTA VI title IDs hit the PlayStation Store backend March 1. Take-Two privately told Sony and Microsoft November 19, 2026 is locked. Full breakdown.',
  },
};

export default function GTA6PreOrdersPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="GTA 6 Pre-Orders Near as PlayStation Database Lists Title IDs — Take-Two Assures Sony & Microsoft No Delay"
        description="Two GTA VI title IDs appeared in the PlayStation Store backend on March 1, 2026. Take-Two Interactive has reportedly told Sony and Microsoft the November 19, 2026 release date will not slip."
        author={AUTHOR_NAME}
        publishedTime="2026-03-02T00:00:00Z"
        modifiedTime="2026-03-02T00:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Video Games"
        keywords={['GTA 6', 'pre-orders', 'Rockstar Games', 'Take-Two', 'PlayStation Store', 'November 2026']}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Video Games', item: '/video-games' },
              { name: 'News', item: '/video-games/news' },
              { name: 'GTA 6 Pre-Orders Update', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="GTA 6 Pre-Orders May Be Imminent as PlayStation Database Lists Title IDs — Take-Two Assures Sony and Microsoft No Further Delay"
        subtitle="Two backend title IDs surfaced in the PlayStation Store on March 1, 2026, while Take-Two Interactive privately told Sony and Microsoft the November 19 release date will not slip."
        category="Video Games"
        categoryColor="orange"
        topicTag="gaming"
        publishDate="March 2, 2026"
        readTime="4 min read"
        breaking
        author={{
          name: AUTHOR_NAME,
          role: 'Gaming Reporter',
        }}
        tags={['GTA 6', 'Rockstar Games', 'Take-Two Interactive', 'Pre-Orders', 'PlayStation', 'Xbox', 'Gaming News']}
      >

        {/* ── INTRO ─────────────────────────────────────────────────────────── */}
        <p>
          Grand Theft Auto VI appears to be edging closer to opening pre-orders after two title IDs for the game were discovered in the PlayStation Store&apos;s backend database on <strong>March 1, 2026</strong>. The IDs — <code>PPSA01547_00</code> and <code>PPSA29660_00</code> — were surfaced by X account <strong>PlayStation Game Size</strong>, an account with a documented track record of identifying backend store changes before official announcements.
        </p>
        <p>
          The discovery arrives alongside a separate report that <strong>Take-Two Interactive</strong> has privately reassured both Sony and Microsoft that GTA VI will ship on its <strong>November 19, 2026</strong> release date — no further delays. The assurance was reported by industry insider <strong>Millie A</strong> on X on February 25, 2026, following Take-Two&apos;s own public reaffirmation of the date during its Q3 fiscal 2026 earnings call.
        </p>

        <HighlightBox type="key-point" color="orange">
          <strong>What happened:</strong> Two GTA VI title IDs added to the PlayStation Store backend on March 1 · Take-Two privately confirmed November 19 to Sony and Microsoft on February 25 · Pre-orders widely expected to open imminently
        </HighlightBox>

        {/* ── STATS ROW ────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8 not-prose">
          {[
            { label: 'Release Date', value: 'Nov 19, 2026' },
            { label: 'Title IDs Found', value: '2 IDs' },
            { label: 'Report Date', value: 'Mar 1, 2026' },
          ].map(stat => (
            <div key={stat.label} className="rounded-xl bg-gradient-to-br from-orange-600 to-red-700 text-white p-4 text-center shadow-lg">
              <div className="text-2xl font-black leading-tight">{stat.value}</div>
              <div className="text-orange-200 text-xs mt-1 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ── PS STORE SECTION ─────────────────────────────────────────────── */}
        <h2>PlayStation Store Backend Listing: What Was Found</h2>
        <p>
          On March 1, 2026, <strong>PlayStation Game Size</strong> — an X account specialising in monitoring changes to Sony&apos;s backend infrastructure — posted that two GTA VI title IDs had been added to the PlayStation database:
        </p>

        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <th className="px-5 py-3 text-left font-bold">Title ID</th>
                <th className="px-5 py-3 text-left font-bold">Platform</th>
                <th className="px-5 py-3 text-left font-bold">Date Added</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-white">
                <td className="px-5 py-3 font-mono font-bold text-orange-700">PPSA01547_00</td>
                <td className="px-5 py-3 text-gray-700">PlayStation 5</td>
                <td className="px-5 py-3 text-gray-600">March 1, 2026</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-5 py-3 font-mono font-bold text-orange-700">PPSA29660_00</td>
                <td className="px-5 py-3 text-gray-700">PlayStation 5</td>
                <td className="px-5 py-3 text-gray-600">March 1, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          PlayStation Game Size wrote on X: <em>&ldquo;Grand Theft Auto VI title IDs have been added to the PlayStation database. I expect we&apos;ll see something about the game soon, probably the start of pre-orders.&rdquo;</em>
        </p>
        <p>
          Two separate title IDs typically correspond to different editions — such as a Standard Edition and a Digital Deluxe or Special Edition. Retailers have not yet confirmed GTA VI edition pricing or bonus content, though Rockstar is expected to offer at minimum a standard and a premium pre-order tier consistent with prior releases.
        </p>

        <HighlightBox type="stat" color="purple">
          <strong>PlayStation Game Size track record:</strong> The account accurately predicted pre-order openings for Spider-Man 2, Final Fantasy VII Rebirth, and Stellar Blade before their official announcements — making its GTA VI call credible.
        </HighlightBox>

        {/* ── TAKE-TWO SECTION ─────────────────────────────────────────────── */}
        <h2>Take-Two Assures Sony and Microsoft: November 19 Is Locked</h2>
        <p>
          Separately, industry insider <strong>Millie A</strong> posted on X on <strong>February 25, 2026</strong>, that Take-Two Interactive had directly notified both Sony and Microsoft that GTA VI will ship on its <strong>November 19, 2026</strong> release date. The report claimed the communication was intended to give platform holders confidence for their own internal planning and marketing commitments.
        </p>
        <p>
          The assurance aligns with Take-Two CEO Strauss Zelnick&apos;s public statements during the company&apos;s Q3 fiscal 2026 earnings call, where he described the November 19 date as <em>&ldquo;firmly committed&rdquo;</em> and said the development team at <strong>Rockstar Games</strong> was in a final polish and certification phase. Take-Two shares rose approximately 4% on the day of the earnings call.
        </p>

        <HighlightBox type="quote" color="blue">
          &ldquo;We are firmly committed to the November 19 date. The team has done extraordinary work and we are very proud of what players are going to experience.&rdquo; — Strauss Zelnick, Take-Two CEO, Q3 FY2026 Earnings Call
        </HighlightBox>

        {/* ── TIMELINE ─────────────────────────────────────────────────────── */}
        <h2>GTA 6 Pre-Order and Release Timeline</h2>
        <Timeline
          events={[
            { time: 'Dec 2023', title: 'Official Trailer 1 Released', description: 'Rockstar releases the first official GTA VI trailer, confirming Florida / Vice City setting and dual protagonists Lucia and Jason.' },
            { time: 'Q3 FY2026 Earnings', title: 'Take-Two Reaffirms November 19', description: 'CEO Strauss Zelnick publicly confirms the November 19, 2026 release date during the earnings call — stock rises ~4%.' },
            { time: 'Feb 25, 2026', title: 'Take-Two Privately Assures Platform Holders', description: 'Industry insider Millie A reports Take-Two told Sony and Microsoft directly: November 19 will not slip.' },
            { time: 'Mar 1, 2026', title: 'PlayStation Store Backend Title IDs Discovered', description: 'PlayStation Game Size identifies PPSA01547_00 and PPSA29660_00 added to the PS Store database — two separate title IDs consistent with a standard and deluxe edition listing.' },
            { time: 'Expected Soon', title: 'Pre-Orders Open', description: 'Analysts and industry watchers expect Rockstar and Take-Two to officially open pre-orders via PlayStation Store, Xbox, and PC storefronts in the near term following the backend appearance.' },
            { time: 'Nov 19, 2026', title: 'GTA VI Global Launch', description: 'Grand Theft Auto VI releases worldwide on PlayStation 5 and Xbox Series X|S. PC version expected to follow.' },
          ]}
        />

        {/* ── WHAT COMES NEXT ──────────────────────────────────────────────── */}
        <h2>What to Expect Next</h2>
        <p>
          The appearance of title IDs in the PlayStation Store backend typically precedes a live storefront listing by days to weeks. If the pattern holds, Rockstar and Take-Two are likely to announce pre-order details — including edition pricing, bonuses, and a possible second gameplay trailer — in the coming days or weeks ahead of the November 19 launch.
        </p>
        <p>
          Rockstar has not released a second major GTA VI trailer since Trailer 1 in December 2023. A pre-order announcement would logically arrive alongside or shortly after a new trailer to maximise conversion. No Xbox-specific backend listings have been reported as of March 2, 2026, though Xbox pre-orders are expected to open simultaneously with PlayStation.
        </p>

        <HighlightBox type="stat" color="green">
          <strong>Scale of expected launch:</strong> GTA V generated over $800M in its first 24 hours in 2013. Analysts project GTA VI could reach $1B+ in opening weekend sales — making any pre-order announcement a major commercial event.
        </HighlightBox>

        {/* ── RELATED ──────────────────────────────────────────────────────── */}
        <div className="not-prose mt-10 border-t border-gray-200 pt-8">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">More GTA 6 & Gaming Coverage</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/video-games/gta-6', label: 'GTA 6 — Full Guide: Release Date, Price & Everything Known' },
              { href: '/video-games/forza-horizon-6', label: 'Forza Horizon 6 — May 19, 2026 Japan Open World' },
              { href: '/video-games/news/my-hero-ultra-rumble-season-15-review', label: 'My Hero Ultra Rumble Season 15 Review' },
              { href: '/video-games/marvels-wolverine', label: "Marvel's Wolverine — What We Know" },
              { href: '/video-games/switch2', label: 'Nintendo Switch 2 — Full Guide' },
              { href: '/video-games/news', label: 'All Video Games News' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 rounded-xl border border-gray-200 p-3 hover:border-orange-400 hover:bg-orange-50 transition-colors group"
              >
                <span className="text-orange-500 group-hover:text-orange-700 text-lg">🎮</span>
                <span className="text-sm font-medium text-gray-800 group-hover:text-orange-700">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

      </NewsArticle>
    </SEOWrapper>
  );
}
