import type { Metadata } from 'next';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/tech/perplexity/news/perplexity-personal-computer-ai-agent-developer-suite-ask-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'Perplexity Unveils "Personal Computer" AI Agent & Developer Suite at Ask 2026 | ObjectWire',
  description:
    'At its inaugural Ask 2026 developer conference in San Francisco, Perplexity AI revealed "Personal Computer" — a 24/7 autonomous AI agent anchored to a Mac mini — alongside four new developer APIs: Agent, Sandbox, Search, and Embeddings.',
  keywords: [
    'Perplexity Personal Computer AI agent 2026',
    'Perplexity Ask 2026 developer conference',
    'Perplexity Agent API Sandbox API',
    'Perplexity Computer Mac mini 24/7 autonomous',
    'Aravind Srinivas AI operating system',
    'Perplexity Finance Bloomberg FactSet competitor',
    'Perplexity Enterprise SOC 2 Snowflake Databricks',
    'Perplexity Embeddings API semantic search',
    'Perplexity Max $200 per month',
    'AI computer agentic infrastructure 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Perplexity Unveils "Personal Computer" AI Agent & Developer Suite at Ask 2026',
    description:
      'A Mac mini becomes a 24/7 autonomous AI worker. Perplexity released four developer APIs and took direct aim at Bloomberg and FactSet with Perplexity Finance.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Technology',
    tags: ['Perplexity', 'AI Agent', 'Developer Tools', 'Personal Computer', 'Ask 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perplexity Turns Your Mac mini Into a 24/7 AI Worker',
    description:
      'Ask 2026: Perplexity "Personal Computer" runs autonomously on local hardware, issuing objectives on your behalf while you sleep. Plus 4 new APIs.',
  },
};

export default function PerplexityPersonalComputerPage() {
  return (
    <NewsArticle
      title='Perplexity Unveils "Personal Computer" AI Agent & Developer Suite'
      subtitle='At its inaugural Ask 2026 conference in San Francisco, Perplexity declared "AI is the computer" — and unveiled a Mac mini-anchored autonomous agent, four new developer APIs, and a direct attack on Bloomberg Terminal.'
      category="Technology"
      categoryColor="blue"
      topicTag="technology"
      publishDate="March 12, 2026"
      readTime="6 min read"
      breaking
      author={{
        name: 'Jack Wang',
        role: 'Technology Desk',
        authorSlug: 'jack-wang',
      }}
      tags={[
        'Perplexity',
        'AI Agent',
        'Personal Computer',
        'Ask 2026',
        'Aravind Srinivas',
        'Developer APIs',
        'Perplexity Finance',
        'Mac mini',
        'Agentic AI',
        'Enterprise AI',
      ]}
      slug="perplexity-personal-computer-ai-agent-developer-suite-ask-2026"
      url={SLUG}
    >

      {/* ── LOCATION & CONTEXT ─────────────────────────────────────────── */}
      <p>
        <strong>SAN FRANCISCO, CA</strong> — In a repurposed North Beach church on March 11,
        2026, Perplexity AI held its first-ever developer conference, <strong>Ask 2026</strong>.
        The setting was theatrical by design. CEO <strong>Aravind Srinivas</strong> opened the
        event with a single declarative line: <em>&quot;AI is the computer.&quot;</em>
      </p>
      <p>
        What followed was the most expansive product release in Perplexity&apos;s history — a
        hardware-software hybrid called <strong>Personal Computer</strong>, a suite of four
        developer APIs opening its &quot;Agentic&quot; infrastructure to the public, and a
        direct assault on the financial data industry.
      </p>

      {/* ── LEAD: PERSONAL COMPUTER ────────────────────────────────────── */}
      <h2>Your Mac mini as an &quot;Always-On&quot; Worker</h2>
      <p>
        Despite its name, <strong>Personal Computer</strong> is not new hardware. It is a
        sophisticated software layer that transforms a user-supplied Mac mini into a 24/7
        autonomous digital proxy — anchoring Perplexity&apos;s cloud-based{' '}
        <strong>Perplexity Computer</strong> platform (launched in February) to local hardware
        for persistent, always-on execution.
      </p>
      <p>
        The distinction from existing cloud-only agents is meaningful: because the process runs
        on local hardware, it can access the file system, read from local apps, and respond to
        real-time triggers — not just browser-based tasks.
      </p>

      <HighlightBox type="quote" color="blue">
        &quot;A traditional operating system takes instructions; an AI operating system takes
        objectives.&quot; — Aravind Srinivas, CEO of Perplexity
      </HighlightBox>

      {/* ── HOW IT WORKS ───────────────────────────────────────────────── */}
      <h2>How Personal Computer Works</h2>

      <h3>Continuous Operation</h3>
      <p>
        The agent runs <strong>24 hours a day, 7 days a week</strong> on the host Mac mini. This
        allows it to monitor triggers — incoming emails, Slack messages, calendar events — and
        finish assigned tasks while the user is asleep or away from their desk. It does not
        require the user to be present or have any window open.
      </p>

      <h3>Local-Cloud Hybrid Architecture</h3>
      <p>
        Personal Computer merges <strong>local file access</strong> and desktop application
        integrations (Notion, GitHub, Salesforce) with Perplexity&apos;s cloud orchestration
        layer — which routes tasks across <strong>20+ frontier models</strong>, including Claude
        4.5, GPT-5.2, and Gemini 2.0, depending on the task type and complexity.
      </p>

      <h3>Remote Control from Any Device</h3>
      <p>
        Once configured, users issue &quot;objectives&quot; to their Personal Computer from any
        mobile device or browser. The agent interprets the objective, breaks it into steps,
        selects the appropriate tools and models, and executes — reporting back when complete or
        when it needs human input.
      </p>

      {/* ── DEVELOPER APIs ─────────────────────────────────────────────── */}
      <h2>New Tools for Developers: Four Agentic APIs</h2>
      <p>
        Alongside the consumer product, Perplexity opened its agentic infrastructure to the
        developer community via four new APIs — each targeting a specific layer of autonomous
        workflow construction.
      </p>

      <h3>Agent API</h3>
      <p>
        A managed runtime for multi-step agentic tasks. Rather than building separate model
        routers and search layers, developers get a <strong>single endpoint</strong> for
        orchestration and tool execution. Perplexity handles routing, retries, and context
        management internally.
      </p>

      <h3>Sandbox API</h3>
      <p>
        The most technically significant release of the conference. The Sandbox API provides{' '}
        <strong>isolated Kubernetes containers</strong> — Python, JavaScript, and SQL — where
        agents can safely execute code, generate charts, and transform data in a fully stateful
        environment. Each sandbox is ephemeral and scoped to a session, preventing cross-task
        contamination.
      </p>

      <HighlightBox type="key-point" color="green">
        The Sandbox API is the key missing piece for production agentic systems: a safe place for
        AI-generated code to actually run — with auditability, isolation, and statefulness built in
        from the ground up.
      </HighlightBox>

      <h3>Search API (Updated)</h3>
      <p>
        The Search API now features <strong>span-level labeling</strong>, which returns more
        precise, granular snippets rather than full document blocks. For teams building
        Retrieval-Augmented Generation (RAG) pipelines, this directly reduces token costs by
        returning only the relevant portion of a source — not the surrounding context.
      </p>

      <h3>Embeddings API</h3>
      <p>
        A new web-scale retrieval model that Perplexity claims outperforms Google&apos;s latest
        embeddings on specific semantic search benchmarks. The model was trained on Perplexity&apos;s
        own web index, optimized for real-time retrieval rather than static document search.
      </p>

      {/* ── ENTERPRISE & FINANCE ───────────────────────────────────────── */}
      <h2>Enterprise Expansion & Finance: Taking On Bloomberg</h2>
      <p>
        Perplexity is aggressively targeting its <strong>$200/month Max</strong> and Enterprise
        tiers with deep data integrations that move well beyond general-purpose AI search.
      </p>

      <h3>Computer for Enterprise</h3>
      <p>
        The enterprise tier of Personal Computer adds <strong>SOC 2 Type II compliance</strong>{' '}
        and native connectors for Snowflake, Databricks, and HubSpot — making it deployable
        within organizations with strict data-handling requirements and existing data warehouse
        infrastructure.
      </p>

      <h3>Perplexity Finance</h3>
      <p>
        The most direct competitive move of the conference. Under the &quot;Computer&quot;
        umbrella, Perplexity Finance now provides access to <strong>40+ live financial tools</strong>,
        including SEC filings, Coinbase price feeds, and LSEG data — enabling the autonomous
        construction of Excel models and dashboards without a human analyst in the loop.
      </p>

      <HighlightBox type="key-point" color="orange">
        Bloomberg Terminal costs approximately $24,000/year per seat. Perplexity Finance, bundled
        within a $200/month Max subscription, is a direct value-proposition attack on how
        financial analysts access structured market data.
      </HighlightBox>

      {/* ── SUBSCRIPTION REALITY TABLE ─────────────────────────────────── */}
      <h2>The "Personal Computer" Subscription Reality</h2>

      {/* Inline table — no DataTable component needed */}
      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#1d4ed8', color: '#fff' }}>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Feature</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Details</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Price', 'Included for Perplexity Max ($200/month) or Enterprise users'],
              ['Hardware Requirement', 'User-supplied Mac mini (M-series recommended)'],
              ['Availability', 'Waitlist only as of March 12, 2026'],
              ['Safety', 'Kill Switch included · Full audit logs for every session'],
              ['Cloud Models', '20+ frontier models: Claude 4.5, GPT-5.2, Gemini 2.0'],
              ['App Integrations', 'Notion, GitHub, Salesforce, Snowflake, Databricks, HubSpot'],
              ['Finance Tools', '40+ live tools: SEC filings, Coinbase, LSEG data'],
              ['Compliance', 'SOC 2 Type II (Enterprise tier)'],
            ].map(([feature, detail], i) => (
              <tr
                key={i}
                style={{ background: i % 2 === 0 ? '#f8fafc' : '#fff', borderBottom: '1px solid #e2e8f0' }}
              >
                <td style={{ padding: '10px 14px', fontWeight: 600, whiteSpace: 'nowrap' }}>{feature}</td>
                <td style={{ padding: '10px 14px', color: '#374151' }}>{detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── WHAT IT MEANS ──────────────────────────────────────────────── */}
      <h2>What This Means</h2>
      <p>
        Personal Computer is Perplexity&apos;s clearest answer yet to the question of what an
        AI company ultimately becomes: not a chatbot, not a search engine, but an{' '}
        <strong>always-on execution layer</strong> for knowledge work. The product is still in
        waitlist mode and depends on users already owning a Mac mini, which constrains near-term
        adoption — but the architecture is the more significant story.
      </p>
      <p>
        By opening its Agent and Sandbox APIs to developers, Perplexity is also making a bet
        that the next generation of agentic software will be built on top of a unified
        orchestration + search + execution stack — rather than developers assembling these
        layers from separate providers.
      </p>
      <p>
        Whether enterprise teams adopt Perplexity Finance as a Bloomberg alternative will be
        the real commercial test. At $200/month versus $2,000/month, the price pressure is
        undeniable. The question is whether the data freshness, reliability, and depth of live
        financial feeds can match incumbent offerings at scale.
      </p>

      <HighlightBox type="stat" color="blue">
        Ask 2026 marks Perplexity&apos;s first developer conference — a signal that the company
        is no longer positioning itself as only a consumer product, but as infrastructure for
        the next generation of autonomous software.
      </HighlightBox>

    </NewsArticle>
  );
}
