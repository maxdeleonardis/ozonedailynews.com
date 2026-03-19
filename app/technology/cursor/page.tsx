import type { Metadata } from 'next';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import JackArticle, {
  JackSection,
  JackCaseOverview,
  JackCallout,
  JackVideo,
} from '@/components/JackArticle';

const SLUG = '/technology/cursor';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/news/cursor.PNG';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'Cursor Hits $2 Billion ARR — Anysphere Doubles Revenue in Three Months | ObjectWire',
  description:
    'Anysphere reported $2 billion in annual recurring revenue for Cursor in February 2026, doubling the $1 billion ARR milestone announced in November 2025 — one of the fastest ARR growth rates in SaaS history.',
  keywords: [
    'Cursor AI code editor ARR 2026',
    'Anysphere $2 billion revenue',
    'Cursor doubles revenue three months',
    'AI developer tools market 2026',
    'Cursor valuation $9 billion',
    'Anysphere funding round 2026',
    'AI code editor subscription pricing',
    'GitHub Copilot Cursor comparison',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Cursor Hits $2 Billion ARR — Anysphere Doubles Revenue in Three Months',
    description:
      'From $1 billion to $2 billion ARR in roughly 90 days. Anysphere\'s Cursor sets one of the fastest recurring revenue acceleration rates in SaaS history.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-02T12:00:00Z',
    modifiedTime: '2026-03-02T12:00:00Z',
    section: 'Technology',
    tags: [
      'Cursor', 'Anysphere', 'AI', 'SaaS', 'Developer Tools',
      'ARR', 'Revenue', 'Technology', 'Code Editor', 'LLM',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cursor Hits $2 Billion ARR in February 2026 — Doubling Revenue in Three Months',
    description:
      'Anysphere\'s Cursor crossed $2 billion ARR in late February 2026, up from $1 billion in November 2025 — roughly 90 days of growth.',
    images: [IMAGE_URL],
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CursorRevenueDoublingPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Cursor Hits $2 Billion ARR — Anysphere Doubles Revenue in Three Months"
        description="Anysphere reported $2 billion in annual recurring revenue for Cursor in February 2026, doubling the $1 billion ARR milestone announced in November 2025 — one of the fastest ARR growth rates in SaaS history."
        author="Jack Wang"
        authorUrl="https://www.objectwire.org/authors/jack-wang"
        publishedTime="2026-03-02T12:00:00Z"
        modifiedTime="2026-03-02T12:00:00Z"
        imageUrl={IMAGE_URL}
        articleUrl={ARTICLE_URL}
        section="Technology"
        keywords={[
          'Cursor $2 billion ARR 2026',
          'Anysphere revenue growth',
          'AI code editor market',
          'SaaS ARR acceleration',
          'Cursor valuation 2026',
        ]}
      />

      <JackArticle
        layout="news"
        title="Cursor Hits $2 Billion ARR — Anysphere Doubles Revenue in Three Months"
        subtitle="Anysphere reported $2 billion in annual recurring revenue for its AI code editor Cursor in February 2026 — doubling the $1 billion milestone announced in November 2025 in roughly 90 days, one of the fastest ARR growth rates recorded in SaaS."
        categoryLabel="Technology"
        categories={[
          { label: 'Technology', color: 'blue' },
          { label: 'SaaS', color: 'green' },
        ]}
        publishDate="March 2, 2026"
        publishDateISO="2026-03-02T12:00:00Z"
        modifiedDateISO="2026-03-02T12:00:00Z"
        readTime="5 min read"
        author={{
          name: 'Jack Wang',
          department: 'ObjectWire Technology Desk',
          url: 'https://www.objectwire.org/authors/jack-wang',
        }}
        heroImage={{
          src: IMAGE_URL,
          alt: 'Cursor AI code editor — Anysphere $2 billion ARR milestone',
          caption: 'Cursor, developed by Anysphere, reached $2 billion in annual recurring revenue in February 2026.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/technology', label: 'Technology' },
          { href: SLUG, label: 'Cursor $2B ARR' },
        ]}
        relatedArticles={[
          {
            href: '/technology',
            category: 'Technology',
            categoryColor: 'text-blue-600',
            title: 'Technology Coverage — ObjectWire',
          },
          {
            href: '/saas',
            category: 'SaaS',
            categoryColor: 'text-green-600',
            title: 'SaaS & Software Coverage — ObjectWire',
          },
          {
            href: '/open-ai',
            category: 'AI',
            categoryColor: 'text-purple-600',
            title: 'OpenAI Coverage — ObjectWire',
          },
          {
            href: '/microsoft',
            category: 'Microsoft',
            categoryColor: 'text-gray-700',
            title: 'Microsoft & GitHub Copilot — ObjectWire',
          },
        ]}
        timeline={[
          { date: '2023', description: 'Anysphere launches Cursor as a fork of Visual Studio Code with embedded AI. Series A at $400M valuation.' },
          { date: '2024', description: 'Series B closes at $2.5B post-money valuation. Enterprise adoption begins scaling.' },
          { date: 'Nov 2025', description: 'Anysphere announces $1 billion ARR milestone.', highlight: true },
          { date: 'Feb 2026', description: 'Bloomberg reports Cursor has reached $2 billion ARR — a doubling in roughly 90 days.', highlight: true },
          { date: 'Early 2026', description: 'Funding round closes. Anysphere valued at $9 billion post-money.' },
        ]}
        documents={[
          { href: 'https://www.bloomberg.com', label: 'Bloomberg — Cursor $2B ARR Report, Feb 2026', icon: '📰' },
        ]}
        accentColor="blue"
        articleUrl={ARTICLE_URL}
        description="Anysphere's Cursor doubled from $1B to $2B ARR in roughly 90 days — one of the fastest ARR growth rates in SaaS history."
        section="Technology"
        keywords={['Cursor ARR 2026', 'Anysphere revenue', 'AI developer tools SaaS']}
        showCorrections
        showEditorialStandards
        footerTagline="When annual recurring revenue doubles to $2 billion in roughly three months, the timeline from zero to two billion starts looking shorter than most release cycles."
        footerLinks={[
          { href: '/technology', label: 'Technology' },
          { href: '/saas', label: 'SaaS' },
        ]}
      >

        {/* ── Lede ─────────────────────────────────────────────── */}
        <p>
          <strong>Anysphere</strong>, the company behind the AI-powered code editor{' '}
          <strong>Cursor</strong>, reported <strong>$2 billion in annual recurring revenue</strong>{' '}
          in February 2026. This figure doubles the <strong>$1 billion ARR</strong> milestone the
          company announced in November 2025. The three-month period between those announcements
          represents one of the fastest revenue growth rates recorded for a
          software-as-a-service business.
        </p>
        <p>
          Cursor operates as a subscription-based developer tool that integrates large language
          models directly into the coding workflow for tasks such as code generation, debugging,
          and refactoring. Revenue comes from individual Pro plans priced at{' '}
          <strong>$20 per month</strong> and higher-tier Business and Enterprise subscriptions. No
          detailed breakdown separating individual versus enterprise contributions has been
          published as of March 2, 2026.
        </p>

        {/* ── Video ────────────────────────────────────────────── */}
        <JackVideo
          videoId="_O-0DZn9tLE"
          title="Cursor Doubles Revenue — $2 Billion ARR 2026"
          caption="Coverage of Cursor reaching $2 billion in annual recurring revenue in February 2026."
          provider="youtube"
        />

        {/* ── Section 1 ────────────────────────────────────────── */}
        <JackSection number={1} title="Revenue Growth Path From Launch to $2 Billion ARR" accentColor="blue">
          <JackCaseOverview
            title="ARR Milestones at a Glance"
            accentColor="blue"
            items={[
              { label: 'Nov 2025:', value: '$1 billion ARR — publicly disclosed by Anysphere.' },
              { label: 'Feb 2026:', value: '$2 billion ARR — reported by Bloomberg.' },
              { label: 'Time between milestones:', value: 'Approximately 90–100 days.' },
              { label: 'Growth rate:', value: '100% ARR increase in a single fiscal quarter — among the fastest in SaaS history.' },
              { label: 'Prior to Nov 2025:', value: 'No equivalent public ARR figures disclosed.' },
            ]}
          />

          <p>
            Anysphere disclosed the $1 billion ARR figure in a company statement issued in
            November 2025. Three months later, in late February 2026,{' '}
            <strong>Bloomberg</strong> reported the ARR had reached $2 billion. This growth
            occurred between roughly mid-November 2025 and the end of February 2026 — a window
            of approximately 90 to 100 days. The pace places Cursor among the
            quickest-scaling enterprise software products in terms of recurring revenue
            acceleration.
          </p>
          <p>
            The company launched Cursor in 2023 as a fork of Visual Studio Code with embedded AI
            capabilities. Subscription revenue began scaling noticeably in 2024 and accelerated
            through 2025 as enterprise teams adopted the tool for production engineering
            workflows.
          </p>
        </JackSection>

        {/* ── Section 2 ────────────────────────────────────────── */}
        <JackSection number={2} title="Valuation Increase Tied to Revenue Trajectory" accentColor="blue">
          <JackCaseOverview
            title="Funding Timeline"
            accentColor="blue"
            items={[
              { label: '2023 Series A:', value: '$400 million post-money valuation.' },
              { label: '2024 Series B:', value: '$2.5 billion post-money valuation.' },
              { label: 'Early 2026 round:', value: '$9 billion post-money valuation.' },
              { label: 'Implied revenue multiple:', value: '~4.5× forward ARR based on $2B ARR.' },
              { label: 'Investor / amount (2026):', value: 'Undisclosed in public sources.' },
            ]}
          />

          <p>
            Anysphere closed a funding round in early 2026 that valued the company at{' '}
            <strong>$9 billion post-money</strong>. This valuation reflects a significant step up
            from the <strong>$2.5 billion</strong> post-money valuation recorded during the 2024
            Series B round. The $9 billion figure implies a forward revenue multiple of
            approximately <strong>4.5 times</strong> based on the $2 billion ARR reported in
            February 2026. Investor names and the exact amount raised in the 2026 round remain
            undisclosed in public sources.
          </p>

          <JackCallout accentColor="blue" label="Valuation Step-Up">
            From $400M to $9B in post-money valuation across three rounds — a 22.5× increase
            since the 2023 Series A, driven almost entirely by ARR acceleration through
            enterprise adoption.
          </JackCallout>
        </JackSection>

        {/* ── Section 3 ────────────────────────────────────────── */}
        <JackSection number={3} title="Product Structure and Subscription Tiers" accentColor="blue">
          <JackCaseOverview
            title="Cursor Pricing Tiers"
            accentColor="blue"
            items={[
              { label: 'Free tier:', value: 'Limited AI usage, no cost.' },
              { label: 'Pro tier:', value: '$20/user/month — removes generation limits, unlocks faster model access.' },
              { label: 'Business tier:', value: '$40/user/month — team management, SOC 2 compliance, priority support.' },
              { label: 'Enterprise:', value: 'Custom pricing negotiated directly with larger organizations.' },
            ]}
          />

          <p>
            Cursor functions as a standalone code editor that supports multiple large language
            models, including <strong>Claude 3.5 Sonnet</strong>, <strong>GPT-4o</strong>, and{' '}
            <strong>o1-preview</strong>. The editor maintains context windows up to{' '}
            <strong>200,000 tokens</strong> and allows inline chat, multi-file editing, and
            automated refactoring.
          </p>
        </JackSection>

        {/* ── Section 4 ────────────────────────────────────────── */}
        <JackSection number={4} title="Reported User and Adoption Metrics" accentColor="blue">
          <p>
            Anysphere stated in late 2025 that Cursor had surpassed{' '}
            <strong>1 million monthly active users</strong>. Reports from early 2026 indicate
            that more than <strong>70 percent of Fortune 500 companies</strong> were either
            testing or actively deploying Cursor within engineering teams. Average daily usage
            among enterprise developers ranges from <strong>4 to 6 hours</strong> per active
            user according to company-published usage data from 2026. These figures have not
            been independently audited in public sources.
          </p>

          <JackCallout accentColor="blue" label="Enterprise Adoption">
            Over 70% of Fortune 500 companies testing or deploying Cursor as of early 2026 —
            a signal that enterprise deal flow, not individual Pro subscriptions, is likely
            driving the bulk of the ARR acceleration.
          </JackCallout>
        </JackSection>

        {/* ── Section 5 ────────────────────────────────────────── */}
        <JackSection number={5} title="Position Within the AI Developer Tools Market" accentColor="blue">
          <JackCaseOverview
            title="Competitive ARR Comparison (2025–2026)"
            accentColor="blue"
            items={[
              { label: 'Cursor (Anysphere):', value: '$2 billion ARR — Feb 2026.' },
              { label: 'GitHub Copilot (Microsoft):', value: '$200M+ ARR in 2024 with 1.3M paid subscribers.' },
              { label: 'Replit:', value: '$100M ARR in 2025 following AI agent feature additions.' },
              { label: 'Codeium:', value: '$1.25B valuation in 2025 — no equivalent ARR figure publicly disclosed.' },
              { label: 'Global AI code market (2025):', value: '$1.2 billion total value, 28.4% CAGR projected through 2030 (Grand View Research).' },
              { label: 'AI software spending (2025):', value: '$64 billion worldwide (Gartner).' },
            ]}
          />

          <p>
            The global AI code generation market reached{' '}
            <strong>$1.2 billion in total value in 2025</strong> and carries a projected
            compound annual growth rate of <strong>28.4 percent through 2030</strong> according
            to Grand View Research. Cursor&apos;s $2 billion ARR alone exceeds the entire
            estimated market size from one year prior — an indication of how rapidly the
            category is expanding beyond initial projections. Worldwide spending on AI software
            overall stood at <strong>$64 billion in 2025</strong> according to Gartner
            forecasts.
          </p>
        </JackSection>

      </JackArticle>
    </SEOWrapper>
  );
}
