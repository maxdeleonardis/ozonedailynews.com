import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import JackArticle, {
  JackSection,
  JackCaseOverview,
  JackStats,
  JackCallout,
} from '@/components/JackArticle';

const SLUG =
  '/apple/news/apple-march-2026-products-macbook-iphone-17e-ipad-air-m5';

const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/apple/apple-march-2026-products-macbook-iphone-17e-event.jpg';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'Apple Set to Announce at Least Five New Products March 2–4, 2026: MacBook, iPhone 17e, iPad, MacBook Air M5 | ObjectWire',
  description:
    'Apple plans to unveil at least five new hardware products between March 2 and March 4, 2026, via press releases and hands-on Apple Experience events in New York, London, and Shanghai — including a new entry-level MacBook, iPhone 17e, iPad refreshes, and MacBook Air M5.',
  keywords: [
    'Apple March 2026 products announcement',
    'Apple Experience event March 4 2026',
    'new MacBook entry-level 2026 A18 Pro chip',
    'iPhone 17e specs release date 2026',
    'iPad 12th generation A18 chip 2026',
    'iPad Air M4 chip 2026',
    'MacBook Air M5 2026',
    'MacBook Pro M5 Pro M5 Max 2026',
    'Apple five products March 2026',
    'Tim Cook big week March 2026',
    'Apple spring 2026 hardware lineup',
    'Apple no keynote press release March 2026',
    'Mac Studio 2026 update',
    'Apple Studio Display 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      'Apple March 2–4, 2026: Five-Plus Products, No Keynote — MacBook, iPhone 17e, iPad, MacBook Air M5',
    description:
      "Apple's Tim Cook confirmed a 'big week' starting March 2 — five or more products dropped via press releases over three days, with hands-on Apple Experience sessions March 4 in New York, London, and Shanghai.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T16:00:00Z',
    modifiedTime: '2026-03-01T20:00:00Z',
    section: 'Technology',
    tags: [
      'Apple',
      'MacBook',
      'iPhone 17e',
      'iPad',
      'MacBook Air',
      'MacBook Pro',
      'M5',
      'A18',
      'Apple Experience',
      'March 2026',
      'Tim Cook',
      'Technology',
      'Hardware',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Apple Drops Five-Plus Products March 2–4, 2026 — MacBook, iPhone 17e, iPad Air M4, MacBook Air M5',
    description:
      'No keynote. Just press releases, three days, and at least five new products — entry MacBook, iPhone 17e, iPad refreshes, and the full MacBook Air/Pro M5 lineup. Apple Experience hands-on March 4.',
    images: [IMAGE_URL],
  },
};

// ─── Infobox data ─────────────────────────────────────────────────────────────

const eventFacts = [
  { label: 'Announcement Format', value: 'Press releases — no live-streamed keynote' },
  { label: 'March 2 (Mon)',       value: 'Initial product press releases begin' },
  { label: 'March 3 (Tue)',       value: 'Additional announcements via Apple Newsroom' },
  { label: 'March 4 (Wed)',       value: 'Final reveals + Apple Experience hands-on events' },
  { label: 'Event Locations',     value: 'New York, London, Shanghai — 9:00 a.m. ET / local times' },
  { label: 'CEO Confirmation',    value: 'Tim Cook: "A big week ahead. It all starts Monday morning!"' },
  { label: 'Source (Bloomberg)',  value: 'Mark Gurman Power On newsletter, Feb 22, 2026' },
  { label: 'Minimum Products',    value: '5+ hardware items confirmed by supply-chain checks' },
];

const expectedProducts = [
  { label: 'Entry-Level MacBook',  value: 'A18 Pro chip, 12.9-inch display, sub-$999 (est. $599)' },
  { label: 'iPhone 17e',           value: 'A19 chip, N1 (Wi-Fi 7 / BT 6), C1X modem — $599' },
  { label: 'iPad 12th Gen',        value: 'A18 or A19 chip — identical external design' },
  { label: 'iPad Air',             value: 'M4 chip upgrade' },
  { label: 'MacBook Air 13" & 15"',value: 'M5 chip' },
  { label: 'MacBook Pro 14" & 16"',value: 'M5 Pro and M5 Max chips' },
  { label: 'Mac Studio (possible)',value: 'First half 2026 expected' },
  { label: 'Studio Display (poss.)',value: 'Long-overdue update — unconfirmed' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AppleMarch2026ProductsPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Apple Set to Announce at Least Five New Products in Early March 2026 Via Multi-Day Press Releases and Special Experience Event"
        description="Apple plans to unveil at least five new hardware products between March 2 and March 4, 2026, through press releases and hands-on Apple Experience events in New York, London, and Shanghai — including a new entry-level MacBook, iPhone 17e, iPad refreshes, and MacBook Air M5."
        author="Alfansa"
        authorUrl="https://www.objectwire.org/team/alfansa"
        publishedTime="2026-03-01T16:00:00Z"
        modifiedTime="2026-03-01T20:00:00Z"
        imageUrl={IMAGE_URL}
        articleUrl={ARTICLE_URL}
        section="Technology"
        keywords={[
          'Apple March 2026 products',
          'Apple Experience event March 4',
          'MacBook entry-level 2026',
          'iPhone 17e A19 chip',
          'iPad Air M4 2026',
          'MacBook Air M5',
          'MacBook Pro M5 Pro',
          'Apple spring 2026 hardware',
        ]}
      />

      <JackArticle
        layout="news"
        title="Apple Set to Announce at Least Five New Products in Early March 2026 Via Multi-Day Press Releases and Special Experience Event"
        subtitle="Apple plans to drop hardware across three consecutive days — March 2, 3, and 4, 2026 — via press releases rather than a keynote, culminating in hands-on Apple Experience sessions in New York, London, and Shanghai. The lineup spans a new entry-level MacBook, iPhone 17e, iPad refreshes, and the full MacBook Air and Pro M5 generation."
        categoryLabel="Technology"
        categories={[
          { label: 'Technology', color: 'blue' },
          { label: 'Apple', color: 'black' },
        ]}
        publishDate="March 1, 2026"
        publishDateISO="2026-03-01T16:00:00Z"
        modifiedDateISO="2026-03-01T20:00:00Z"
        readTime="6 min read"
        author={{
          name: 'Alfansa',
          department: 'ObjectWire Technology Desk',
          url: 'https://www.objectwire.org/team/alfansa',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/apple', label: 'Apple' },
          { href: '/apple/news', label: 'News' },
          { href: SLUG, label: 'Apple March 2026 Products' },
        ]}
        relatedArticles={[
          {
            href: '/apple',
            category: 'Apple',
            categoryColor: 'text-gray-800',
            title: 'Apple Coverage Hub — ObjectWire',
          },
          {
            href: '/tech',
            category: 'Technology',
            categoryColor: 'text-blue-600',
            title: 'Technology Coverage — ObjectWire',
          },
          {
            href: '/microsoft',
            category: 'Technology',
            categoryColor: 'text-blue-600',
            title: 'Microsoft News & Analysis',
          },
          {
            href: '/nvidia',
            category: 'Technology',
            categoryColor: 'text-green-600',
            title: 'Nvidia Coverage — ObjectWire',
          },
        ]}
        timeline={[
          { date: 'Feb 22, 2026', description: "Bloomberg's Mark Gurman reports three-day product blitz — low-cost MacBook 'very likely'." },
          { date: 'Feb 26, 2026', description: 'Tim Cook posts on X: "A big week ahead. It all starts Monday morning!"', highlight: true },
          { date: 'Mar 2, 2026 (Mon)', description: 'First press releases expected — product drops begin on Apple Newsroom.' },
          { date: 'Mar 3, 2026 (Tue)', description: 'Additional product announcements via website updates.' },
          { date: 'Mar 4, 2026 (Wed)', description: 'Final reveals + Apple Experience hands-on events in New York, London, Shanghai at 9:00 a.m. ET.', highlight: true },
        ]}
        documents={[
          { href: 'https://www.macrumors.com', label: 'MacRumors — March 2026 Product Guide', icon: '📰' },
          { href: 'https://www.bloomberg.com', label: "Bloomberg Power On — Mark Gurman, Feb 22, 2026", icon: '📄' },
          { href: 'https://www.apple.com/newsroom', label: 'Apple Newsroom — Official Announcements', icon: '🔗' },
        ]}
        accentColor="black"
        articleUrl={ARTICLE_URL}
        description="Apple is announcing five-plus products March 2–4, 2026 via press releases and Apple Experience events — MacBook, iPhone 17e, iPad, MacBook Air M5, MacBook Pro M5."
        section="Technology"
        keywords={['Apple March 2026', 'MacBook entry-level', 'iPhone 17e', 'iPad Air M4', 'MacBook Air M5', 'Apple Experience event']}
        showCorrections
        showEditorialStandards
        footerTagline="Hardware moves fast. We move with it."
        footerLinks={[
          { href: '/apple', label: 'Apple Hub' },
          { href: '/tech', label: 'Technology Desk' },
        ]}
      >

        {/* ── Lede ─────────────────────────────────────────────── */}
        <p>
          Apple plans to unveil <strong>at least five new hardware products</strong> between{' '}
          <strong>March 2 and March 4, 2026</strong>, through a series of press releases rather
          than a traditional keynote, culminating in hands-on{' '}
          <strong>&quot;Apple Experience&quot;</strong> sessions for media in{' '}
          <strong>New York, London, and Shanghai</strong> on March 4 at 9:00 a.m. ET — per{' '}
          <a href="https://www.macrumors.com" target="_blank" rel="noopener noreferrer">
            MacRumors
          </a>{' '}
          and{' '}
          <a href="https://www.bloomberg.com" target="_blank" rel="noopener noreferrer">
            Bloomberg&apos;s Mark Gurman
          </a>.
        </p>
        <p>
          CEO <strong>Tim Cook</strong> confirmed the timing on February 26 with an X post:{' '}
          <em>&quot;A big week ahead. It all starts Monday morning!&quot;</em> Gurman&apos;s Power
          On newsletter described the three-day stretch as covering hardware, software, and chip
          updates, with a new low-cost MacBook characterized as{' '}
          <strong>&quot;very likely.&quot;</strong>
        </p>

        <JackCallout accentColor="black" label="Format Note">
          No live-streamed keynote is scheduled. All announcements will appear sequentially on
          Apple&apos;s Newsroom site. The Apple Experience events on March 4 are hands-on media
          sessions — not a public presentation.
        </JackCallout>

        <JackCaseOverview
          title="March 2–4 Event at a Glance"
          accentColor="black"
          items={eventFacts}
        />

        {/* ── Section 1 ────────────────────────────────────────── */}
        <JackSection number={1} title="Announcement Format and Timeline" accentColor="black">
          <p>
            Apple is departing from a single-keynote format in favor of a rolling three-day
            announcement cadence:
          </p>
          <JackCaseOverview
            title="Three-Day Schedule"
            accentColor="black"
            items={[
              { label: 'March 2 (Monday):', value: 'Initial press releases expected to begin product drops on Apple Newsroom.' },
              { label: 'March 3 (Tuesday):', value: 'Additional announcements likely via Apple website and Newsroom updates.' },
              { label: 'March 4 (Wednesday):', value: 'Final reveals early, followed by Apple Experience hands-on events — New York at 9:00 a.m. ET, equivalent local times in London and Shanghai.' },
            ]}
          />
          <p>
            The format mirrors how Apple handled some 2020–2021 Mac transitions — quiet Newsroom
            drops without theatrical production. For 2026, the scale is broader: five or more
            products across the full Mac and iOS device lineup, all in one compressed window.
          </p>

          <JackStats
            title="By the Numbers"
            accentColor="black"
            stats={[
              { value: '5+', label: 'Products expected' },
              { value: '3', label: 'Days of announcements' },
              { value: '3', label: 'Apple Experience cities' },
              { value: '0', label: 'Live-stream keynotes' },
            ]}
          />
        </JackSection>

        {/* ── Section 2 ────────────────────────────────────────── */}
        <JackSection number={2} title="Expected Products: New Entry-Level MacBook" accentColor="black">
          <p>
            The most discussed new product is a revived <strong>&quot;MacBook&quot;</strong>{' '}
            branding — an entry-level laptop discontinued years ago and now returning to fill the
            gap below the MacBook Air at a lower price point.
          </p>
          <JackCaseOverview
            title="Entry-Level MacBook — Reported Specs"
            accentColor="black"
            items={[
              { label: 'Chip:', value: 'A18 Pro (from iPhone 16 Pro lineup) — not an M-series Mac chip.' },
              { label: 'Display:', value: '12.9-inch — smaller than MacBook Air 13.6-inch.' },
              { label: 'RAM / Storage:', value: '8GB RAM, 256GB SSD base configuration.' },
              { label: 'Price:', value: 'Sub-$999 target; estimated starting at $599.' },
              { label: 'Colors:', value: 'Multiple options including yellow and green reported.' },
            ]}
          />
          <p>
            The use of an <strong>A18 Pro</strong> rather than an M-series chip is notable —
            it positions this MacBook as an iOS/iPadOS-adjacent device optimized for everyday tasks
            and portability at a price tier Apple has not addressed since the 12-inch MacBook
            was discontinued in 2019.
          </p>
        </JackSection>

        {/* ── Section 3 ────────────────────────────────────────── */}
        <JackSection number={3} title="Expected Products: iPhone 17e" accentColor="black">
          <p>
            The budget-oriented <strong>iPhone 17e</strong> follows the iPhone 16e launched last
            spring, maintaining the same $599 entry price while upgrading internals meaningfully.
          </p>
          <JackCaseOverview
            title="iPhone 17e — Reported Specs"
            accentColor="black"
            items={[
              { label: 'Chip:', value: 'A19 — aligned with the iPhone 17 series.' },
              { label: 'Connectivity chip:', value: 'N1 chip — enables Wi-Fi 7 and Bluetooth 6.' },
              { label: 'Modem:', value: "Apple's C1X — improved 5G and LTE performance." },
              { label: 'Price:', value: '$599 — unchanged from iPhone 16e.' },
              { label: 'Upgrade count:', value: 'Four key spec improvements over predecessor at the same price.' },
            ]}
          />
          <p>
            The C1X modem upgrade is particularly significant — it represents the second generation
            of Apple&apos;s in-house modem, following the C1 that debuted in the iPhone 16e, and
            signals continued progress on eliminating Qualcomm dependency across the lineup.
          </p>
        </JackSection>

        {/* ── Section 4 ────────────────────────────────────────── */}
        <JackSection number={4} title="Expected Products: iPad Updates" accentColor="black">
          <p>
            Two iPad models are anticipated, both carrying identical external designs to current
            generations with internal chip upgrades:
          </p>
          <JackCaseOverview
            title="iPad Refresh — Reported Specs"
            accentColor="black"
            items={[
              { label: 'iPad 12th Gen:', value: 'A18 chip (some reports cite A19) — identical chassis to 11th gen.' },
              { label: 'iPad Air:', value: 'M4 chip upgrade for meaningful performance gains.' },
              { label: 'Design:', value: 'Large edge-to-edge displays and thin bezels continue unchanged.' },
            ]}
          />
          <p>
            The iPad Air moving to M4 narrows the gap with the iPad Pro while keeping the Air line
            meaningfully below Pro pricing — a distinction that matters as Apple&apos;s tablet
            lineup has compressed considerably over recent generations.
          </p>
        </JackSection>

        {/* ── Section 5 ────────────────────────────────────────── */}
        <JackSection number={5} title="Expected Products: MacBook Air and Pro M5 Refreshes" accentColor="black">
          <p>
            The MacBook lineup is due for its M5 generation refresh across both Air and Pro lines:
          </p>
          <JackCaseOverview
            title="MacBook M5 Generation — Reported Specs"
            accentColor="black"
            items={[
              { label: 'MacBook Air 13":', value: 'M5 chip — spring 2026 timing aligns with annual Air refresh cadence.' },
              { label: 'MacBook Air 15":', value: 'M5 chip — parallel update alongside 13-inch.' },
              { label: 'MacBook Pro 14":', value: 'M5 Pro chip — overdue from late 2025 expectations.' },
              { label: 'MacBook Pro 16":', value: 'M5 Max chip — completing the pro laptop lineup.' },
            ]}
          />
          <p>
            The MacBook Pro M5 refresh was widely expected in late 2025 and has carried over into
            this spring window. If both Air and Pro variants land this week, it would represent the
            most complete Mac laptop refresh Apple has executed in a single announcement period.
          </p>
        </JackSection>

        {/* ── Section 6 ────────────────────────────────────────── */}
        <JackSection number={6} title="Additional Possibilities: Mac Studio and Studio Display" accentColor="black">
          <p>
            Beyond the confirmed minimum of five products, reports flag two additional items that
            could join the announcement window:
          </p>
          <ul>
            <li>
              <strong>Mac Studio</strong> — Expected in the first half of 2026, with an M5-class
              chip upgrade. No firm date confirmed but timing aligns with this window — per{' '}
              <a href="https://www.macrumors.com" target="_blank" rel="noopener noreferrer">
                MacRumors February 22 report
              </a>.
            </li>
            <li>
              <strong>Apple Studio Display</strong> — A long-overdue update to the 2022 Studio
              Display, unconfirmed but speculated to accompany any Mac Studio announcement.
            </li>
          </ul>
          <JackCallout accentColor="blue" label="Analyst Note">
            Bloomberg&apos;s Gurman used &quot;very likely&quot; for the low-cost MacBook but was
            less definitive on the Mac Studio and Studio Display for this specific window. Treat
            those two as possible additions rather than confirmed entries in the five-product
            minimum.
          </JackCallout>
        </JackSection>

        {/* ── Section 7 ────────────────────────────────────────── */}
        <JackSection number={7} title="Full Expected Product Summary" accentColor="black">
          <JackCaseOverview
            title="March 2–4, 2026 — Products at a Glance"
            accentColor="black"
            items={expectedProducts}
          />
          <p>
            For ongoing coverage of Apple hardware, chips, and software across the 2026 product
            cycle, see{' '}
            <Link href="/apple" className="font-medium underline hover:opacity-70">
              ObjectWire&apos;s Apple hub
            </Link>{' '}
            and the broader{' '}
            <Link href="/tech" className="font-medium underline hover:opacity-70">
              Technology desk
            </Link>.
          </p>
          <p>
            <em>
              When Apple drops five-plus devices over three quiet days instead of one loud keynote,
              the biggest reveal might just be how efficiently rumors turn into press releases.
            </em>
          </p>
        </JackSection>

      </JackArticle>
    </SEOWrapper>
  );
}
