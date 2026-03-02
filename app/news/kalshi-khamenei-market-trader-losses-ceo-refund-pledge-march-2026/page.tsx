import type { Metadata } from 'next';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import JackArticle, {
  JackSection,
  JackCaseOverview,
  JackCallout,
  JackStats,
} from '@/components/JackArticle';

const SLUG =
  '/news/kalshi-khamenei-market-trader-losses-ceo-refund-pledge-march-2026';

const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/news/kalshi-khamenei-prediction-market-settlement-march-2026.jpg';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'Kalshi Traders Report Losses on Khamenei "Out as Supreme Leader" Market Despite CEO Refund Pledge | ObjectWire',
  description:
    "Kalshi paused and settled its 'Ali Khamenei Out as Supreme Leader?' contract after reports of his death on February 28, 2026, resolving pre-death positions at the last traded price. CEO Tarek Mansour pledged full fee refunds, but traders holding 'Yes' positions reported net losses.",
  keywords: [
    'Kalshi Khamenei prediction market March 2026',
    'Kalshi Supreme Leader market settlement',
    'Tarek Mansour refund pledge Kalshi February 2026',
    'Kalshi CFTC death market rules',
    'Khamenei prediction market trader losses',
    'Kalshi vs Polymarket Khamenei Iran market',
    'Kalshi Rule 13.1 market pause settlement',
    'prediction market Khamenei death settlement',
    'Kalshi $21.7 million Khamenei volume',
    'Polymarket Iran $529 million Khamenei contracts',
    'Kalshi CEO Tarek Mansour ethics death market',
    'prediction market geopolitical contracts 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "Kalshi Traders Report Losses on Khamenei Market Despite CEO's Full Refund Pledge",
    description:
      "Kalshi settled its 'Khamenei Out as Supreme Leader?' contract at the last pre-death traded price after reports of his death on Feb 28, 2026. CEO Tarek Mansour pledged fee refunds, but traders in 'Yes' positions at higher prices reported net losses. Polymarket resolved the same contract to Yes.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T14:00:00Z',
    modifiedTime: '2026-03-01T14:00:00Z',
    section: 'News',
    tags: [
      'Kalshi',
      'Prediction Markets',
      'Khamenei',
      'Iran',
      'CFTC',
      'Polymarket',
      'Tarek Mansour',
      'Finance',
      'Geopolitics',
      'Breaking News',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Kalshi Traders Report Losses on Khamenei Market — CEO Pledges Refunds",
    description:
      "Kalshi settled 'Khamenei Out as Supreme Leader?' at last pre-death price. CEO refunded fees, but 'Yes' holders report net losses. Polymarket paid Yes; Kalshi's CFTC rules barred it.",
    images: [IMAGE_URL],
  },
};

// ─── Infobox data ─────────────────────────────────────────────────────────────

const marketFacts = [
  { label: 'Market',           value: '"Ali Khamenei Out as Supreme Leader?" — Kalshi' },
  { label: 'Status',           value: 'Paused under Rule 13.1, then settled' },
  { label: 'Settlement basis', value: 'Last traded price before confirmed death (1:14 a.m. ET, Feb 28, 2026)' },
  { label: 'Volume',           value: '$21.7 million across related Khamenei contracts — Kalshi' },
  { label: 'CEO Statement',    value: 'Tarek Mansour (X post, Feb 28) — "No user will lose a dollar in this market"' },
  { label: 'Fee refund',       value: 'All trading fees refunded platform-wide for the market' },
  { label: 'Post-death entry', value: 'Positions opened after death fully reimbursed for entry costs' },
  { label: 'Pre-death losses', value: 'Settled at last traded price — net losses for "Yes" holders bought at higher prices' },
  { label: 'Rule cited',       value: 'CFTC prohibits direct death markets; Kalshi policy bars profiting from individual deaths' },
  { label: 'Polymarket',       value: 'Resolved Yes after death confirmation — $45M on one contract; $529M+ across Iran markets' },
];

const settlementRules = [
  { label: 'Before Feb 1, 2026:',       value: 'Outcome defaults to No.' },
  { label: 'Leaves office by Feb 1:',   value: 'Resolves to Yes.' },
  { label: 'Death-only departure:',     value: 'Market resolves at last traded price before confirmed reporting of death.' },
  { label: 'Price unavailable:',        value: 'Outcome Review Committee determines fair allocation.' },
  { label: 'Rule 13.1:',               value: 'Trading paused pending review after death reports circulated.' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function KalshiKhameneiMarketPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title='Kalshi Traders Report Losses on Khamenei "Out as Supreme Leader" Market Despite CEO Refund Pledge'
        description="Kalshi settled its Khamenei 'Out as Supreme Leader?' contract at the last pre-death traded price on February 28, 2026. CEO Tarek Mansour pledged full fee refunds, but traders holding 'Yes' positions at elevated prices reported net losses."
        author="Alfansa"
        authorUrl="https://www.objectwire.org/team/alfansa"
        publishedTime="2026-03-01T14:00:00Z"
        modifiedTime="2026-03-01T14:00:00Z"
        imageUrl={IMAGE_URL}
        articleUrl={ARTICLE_URL}
        section="News"
        keywords={[
          'Kalshi Khamenei market settlement',
          'Tarek Mansour refund pledge',
          'CFTC prediction market death rule',
          'Polymarket vs Kalshi Khamenei',
          'prediction market Iran 2026',
        ]}
      />

      <JackArticle
        layout="news"
        title='Kalshi Traders Report Losses on Khamenei "Out as Supreme Leader" Market Despite CEO Refund Pledge'
        subtitle="Kalshi paused and settled its 'Ali Khamenei Out as Supreme Leader?' contract after reports of the Iranian Supreme Leader's death in U.S.-Israeli strikes on February 28, 2026 — resolving pre-death positions at the last traded price before 1:14 a.m. ET. CEO Tarek Mansour pledged full fee refunds and reimbursement for post-death entries, but traders who bought 'Yes' at elevated prices before the halt reported net losses."
        categoryLabel="News"
        categories={[
          { label: 'Breaking News', color: 'red' },
          { label: 'Finance', color: 'blue' },
        ]}
        publishDate="March 1, 2026"
        publishDateISO="2026-03-01T14:00:00Z"
        modifiedDateISO="2026-03-01T14:00:00Z"
        readTime="5 min read"
        author={{
          name: 'Alfansa',
          department: 'ObjectWire Finance & Markets Desk',
          url: 'https://www.objectwire.org/team/alfansa',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/news', label: 'News' },
          { href: SLUG, label: 'Kalshi Khamenei Market' },
        ]}
        relatedArticles={[
          {
            href: '/news',
            category: 'News',
            categoryColor: 'text-gray-700',
            title: 'ObjectWire News Desk',
          },
          {
            href: '/finance',
            category: 'Finance',
            categoryColor: 'text-blue-600',
            title: 'Finance Coverage — ObjectWire',
          },
          {
            href: '/news/iran',
            category: 'Breaking News',
            categoryColor: 'text-red-600',
            title: 'Iran Coverage — ObjectWire',
          },
          {
            href: '/trump',
            category: 'Politics',
            categoryColor: 'text-gray-700',
            title: 'Trump Coverage — ObjectWire',
          },
        ]}
        timeline={[
          { date: 'Feb 28, 2026 ~1:14 a.m. ET', description: 'Confirmed reporting of Khamenei death — Kalshi settlement cutoff time established.', highlight: true },
          { date: 'Feb 28, 2026', description: 'Kalshi pauses "Ali Khamenei Out as Supreme Leader?" market under Rule 13.1.' },
          { date: 'Feb 28, 2026', description: 'CEO Tarek Mansour posts on X: "No user will lose a dollar in this market" — full fee refund pledged.', highlight: true },
          { date: 'Feb 28–Mar 1, 2026', description: 'Settlement executed at last traded price before 1:14 a.m. ET. Post-death entries fully reimbursed.' },
          { date: 'Mar 1, 2026', description: 'Trader complaints surface — "Yes" holders at pre-halt elevated prices report net losses despite refund pledge.' },
          { date: 'Mar 1, 2026', description: 'Polymarket (unavailable to U.S. users) resolves same contract to Yes — $45M on one variant, $529M+ across Iran markets.' },
        ]}
        documents={[
          { href: 'https://kalshi.com', label: 'Kalshi — Platform & Rules', icon: '🔗' },
          { href: 'https://x.com', label: 'Tarek Mansour X post — Feb 28, 2026 Refund Statement', icon: '📣' },
          { href: 'https://polymarket.com', label: 'Polymarket — Iran Contracts', icon: '📄' },
        ]}
        accentColor="red"
        articleUrl={ARTICLE_URL}
        description="Kalshi settled its Khamenei prediction market at last pre-death price. CEO pledged refunds but traders reported losses."
        section="News"
        keywords={['Kalshi Khamenei market', 'prediction market death rule CFTC', 'Tarek Mansour refund', 'Polymarket Iran 2026']}
        showCorrections
        showEditorialStandards
        footerTagline="When a prediction market settles on the price before death but traders bought expecting the death, the only thing refunded faster than fees is the illusion of certainty."
        footerLinks={[
          { href: '/news', label: 'News Desk' },
          { href: '/finance', label: 'Finance' },
          { href: '/news/iran', label: 'Iran Coverage' },
        ]}
      >

        {/* ── Lede ─────────────────────────────────────────────── */}
        <p>
          Prediction market platform <strong>Kalshi</strong> paused and settled its contract
          titled <strong>&quot;Ali Khamenei Out as Supreme Leader?&quot;</strong> on{' '}
          <strong>February 28, 2026</strong>, after reports of the Iranian Supreme Leader&apos;s
          death in U.S.-Israeli strikes — resolving all pre-death positions at the{' '}
          <strong>last traded price before confirmed reporting of death at 1:14 a.m. ET</strong>.
          CEO <strong>Tarek Mansour</strong> pledged full refunds of trading fees and full
          reimbursement for positions entered after death, declaring &quot;no user will lose a
          dollar in this market.&quot; Traders holding <strong>&quot;Yes&quot;</strong> positions
          acquired at elevated prices before the halt — as the market priced in the strikes —
          disputed that characterization, reporting real net losses on settled contracts.
        </p>

        <JackCallout accentColor="red" label="CEO Tarek Mansour — X, February 28, 2026">
          &quot;No user will lose a dollar in this market.&quot; — Kalshi refunded all trading
          fees across the market and reimbursed the cost of entry for positions opened after death
          was reported. Pre-death positions were settled at the last traded price before 1:14 a.m.
          ET per published contract rules.
        </JackCallout>

        <JackCaseOverview
          title="Kalshi Khamenei Market — Key Facts"
          accentColor="red"
          items={marketFacts}
        />

        {/* ── Section 1 ────────────────────────────────────────── */}
        <JackSection number={1} title="Contract Rules and Settlement Mechanism" accentColor="red">
          <p>
            Kalshi&apos;s published contract rules governed the settlement outcome directly.
            The contract&apos;s death-specific clause — requiring resolution at the{' '}
            <strong>last traded price before confirmed reporting of death</strong> — was central
            to both the settlement logic and the trader complaints that followed.
          </p>
          <JackCaseOverview
            title="Contract Rules — Published Terms"
            accentColor="red"
            items={settlementRules}
          />
          <p>
            Trading paused under <strong>Kalshi Rule 13.1</strong> as death reports circulated,
            pending a formal review. Settlement was then executed at the last price prior to the
            1:14 a.m. ET confirmed-death timestamp. For traders who bought &quot;Yes&quot;
            contracts <em>before</em> the halt — as the market rose in response to strike reports
            but before the official cutoff — the settlement price was below their entry cost,
            producing a net loss that fee refunds did not cover.
          </p>
          <JackCallout accentColor="orange" label="Rule Design Note">
            The death-departure clause was written to prevent Kalshi from operating a direct
            death market, consistent with{' '}
            <strong>CFTC regulations prohibiting contracts tied to individual deaths</strong>.
            The last-price mechanism was intended to neutralize the death event&apos;s effect on
            settlement — but in practice, rapid post-strike price movement before the halt
            created a mismatch between final settlement and trader expectations.
          </JackCallout>
        </JackSection>

        {/* ── Section 2 ────────────────────────────────────────── */}
        <JackSection number={2} title="Trader Losses and Complaints" accentColor="red">
          <JackStats
            title="Market Scale"
            accentColor="red"
            stats={[
              { value: '$21.7M', label: 'Volume across Kalshi Khamenei-related contracts' },
              { value: '$45M', label: 'Polymarket volume — single Khamenei variant' },
              { value: '$529M+', label: 'Polymarket total Iran-related market volume' },
              { value: '1:14 a.m.', label: 'ET timestamp — Kalshi settlement cutoff (Feb 28)' },
            ]}
          />
          <p>
            Users holding &quot;Yes&quot; positions purchased at elevated prices in the window
            between initial strike reports and Kalshi&apos;s halt reported effective losses when
            settled at earlier pre-cutoff prices. The complaint structure fell into two groups:
          </p>
          <JackCaseOverview
            title="Trader Complaint Categories"
            accentColor="red"
            items={[
              { label: 'Pre-death "Yes" holders:', value: 'Bought after strike reports pushed prices up, settled below entry. Fee refund did not cover capital loss. Described by traders as being "cheated out of gains."' },
              { label: 'Post-death entries:', value: 'Fully reimbursed for entry cost per CEO pledge — no capital loss on these positions.' },
              { label: 'Rule clarity dispute:', value: 'Some traders argued the market functioned as a de facto death contract despite published rules, per Business Insider reporting.' },
              { label: 'Platform response:', value: 'Kalshi committed to additional reimbursements for value lost due to rule clarifications, and to improvements following the event.' },
            ]}
          />
        </JackSection>

        {/* ── Section 3 ────────────────────────────────────────── */}
        <JackSection number={3} title="CEO Ethics Position and Refund Scope" accentColor="red">
          <p>
            Tarek Mansour defended the settlement in statements via X and through platform
            communications, reiterating that Kalshi&apos;s policy opposes profiting from
            individual deaths. He framed the original market as addressing broad leadership
            transition — noting potential non-violent departure paths existed when the contract
            was listed.
          </p>
          <JackCaseOverview
            title="Refund Coverage — CEO Commitment"
            accentColor="red"
            items={[
              { label: 'Trading fees:', value: 'Fully refunded — platform-wide for all participants in the market.' },
              { label: 'Post-death positions:', value: 'Entry costs fully reimbursed.' },
              { label: 'Pre-death rule-clarification losses:', value: 'Additional reimbursements committed as a customer service measure.' },
              { label: 'Capital losses (pre-death, pre-halt "Yes"):', value: 'Not covered — settled at published last-price mechanism per contract rules.' },
            ]}
          />
          <JackCallout accentColor="black" label="Platform Policy">
            Kalshi stated explicitly that no markets directly tied to individual deaths are
            listed on the platform, and that contract design prevents profiting from such events.
            The CFTC framework under which Kalshi operates as a regulated exchange prohibits
            death-contingent binary contracts — a structural constraint that differentiated
            Kalshi&apos;s settlement from Polymarket&apos;s binary Yes resolution.
          </JackCallout>
        </JackSection>

        {/* ── Section 4 ────────────────────────────────────────── */}
        <JackSection number={4} title="Kalshi vs. Polymarket — Regulatory Divergence" accentColor="red">
          <p>
            The contrast between Kalshi&apos;s settlement and Polymarket&apos;s outcome
            illustrates how regulatory status shapes contract design and resolution in
            prediction markets covering the same geopolitical event.
          </p>
          <JackCaseOverview
            title="Kalshi vs. Polymarket — Settlement Comparison"
            accentColor="red"
            items={[
              { label: 'Kalshi resolution:', value: 'Last traded price before confirmed death (1:14 a.m. ET) — per CFTC-compliant death-clause design. Not binary.' },
              { label: 'Polymarket resolution:', value: 'Resolved Yes after death confirmation — binary payout. Unavailable to U.S. users.' },
              { label: 'Kalshi volume:', value: '$21.7M across Khamenei-related contracts.' },
              { label: 'Polymarket volume:', value: '$45M on one variant; $529M+ across all Iran-related markets.' },
              { label: 'U.S. access:', value: 'Kalshi — regulated, available to U.S. traders. Polymarket — not available to U.S. users.' },
              { label: 'Regulatory constraint:', value: 'Wall Street Journal reported Kalshi\'s CFTC status barred direct death markets, requiring last-price settlement rather than binary Yes/No.' },
            ]}
          />
          <p>
            <em>
              When a prediction market settles on the price before death but traders bought
              expecting the death, the only thing refunded faster than fees is the illusion
              of certainty.
            </em>
          </p>
        </JackSection>

      </JackArticle>
    </SEOWrapper>
  );
}
