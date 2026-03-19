import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/elon-musk/spacex-xai-merger-1-75-trillion-ipo-orbital-ai-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: "SpaceX-xAI Merger Sets Stage for $1.75 Trillion AI Powerhouse — IPO Targets Summer 2026 | ObjectWire",
  description:
    "SpaceX completed an all-stock acquisition of xAI on February 2, 2026, valued at $1.25 trillion. Elon Musk has declared SpaceX will surpass all AI rivals combined within years. A $1.75 trillion IPO targeting Nasdaq is expected June/July 2026, while 9 of xAI's 11 co-founders have departed.",
  keywords: [
    'SpaceX xAI merger 2026',
    'SpaceX IPO $1.75 trillion 2026',
    'Elon Musk SpaceX AI dominance',
    'xAI SpaceX acquisition February 2026',
    'SpaceX Orbital Data Centers AI',
    'Sentient Sun project SpaceX',
    'Grok SpaceX xAI merger',
    'SpaceX Nasdaq IPO summer 2026',
    'xAI co-founders departed 2026',
    'Musk surpass DeepMind AI prediction',
    'SpaceX $1.25 trillion valuation merger',
    'SpaceX vertical integration AI compute',
    'Tony Wu Zihang Dai xAI departure',
    'Gibson Dunn SpaceX IPO counsel',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "SpaceX-xAI Merger Sets Stage for $1.75 Trillion AI Powerhouse",
    description:
      "SpaceX absorbed xAI in a $1.25 trillion all-stock deal on February 2, 2026. Musk says SpaceX will surpass DeepMind and every other AI lab combined. A Nasdaq IPO at $1.75 trillion valuation is targeting June/July 2026. But 9 of xAI's 11 co-founders have already walked.",
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-18T18:00:00Z',
    modifiedTime: '2026-03-18T18:00:00Z',
    section: 'Technology',
    tags: [
      'SpaceX', 'xAI', 'Elon Musk', 'IPO', 'AI', 'Grok',
      'Orbital Data Centers', 'Merger', 'Technology', 'Space',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "SpaceX-xAI Merger: $1.75T IPO, Orbital AI, and 9 of 11 Co-Founders Gone | ObjectWire",
    description:
      "After absorbing xAI in February 2026, Musk says SpaceX will 'far exceed everyone else combined' in AI. A $1.75T Nasdaq IPO is targeting summer 2026. But the talent picture at xAI is turbulent: 9 of 11 co-founders have left.",
  },
  other: {
    news_keywords:
      'SpaceX xAI merger, Elon Musk AI, SpaceX IPO 2026, Orbital Data Centers, Sentient Sun, Grok, xAI co-founders departures, $1.75 trillion valuation, DeepMind, SpaceX Nasdaq',
  },
};

// =============================================================================
// DATA
// =============================================================================

const ipoDetails = [
  { metric: 'Projected Valuation',   value: '$1.5T – $1.75T' },
  { metric: 'Potential Capital Raise', value: '$30B – $50B (potential world record)' },
  { metric: 'Target Date',           value: 'June / July 2026' },
  { metric: 'Listing Exchange',      value: 'Likely Nasdaq' },
  { metric: 'Lead Legal Counsel',    value: 'Gibson Dunn & Crutcher' },
  { metric: 'Merger Date',           value: 'February 2, 2026 (all-stock acquisition)' },
  { metric: 'Merger Valuation',      value: '$1.25 trillion (combined entity at closing)' },
];

// =============================================================================
// PAGE
// =============================================================================

export default function SpaceXxAIMergerIPOPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="SpaceX-xAI Merger Sets Stage for $1.75 Trillion AI Powerhouse — IPO Targets Summer 2026"
        description="SpaceX completed an all-stock acquisition of xAI on February 2, 2026, valued at $1.25 trillion. Elon Musk has declared SpaceX will surpass all AI rivals combined within years. A $1.75 trillion Nasdaq IPO is expected June/July 2026 as 9 of xAI's 11 original co-founders have departed."
        author="ObjectWire Technology Desk"
        publishedTime="2026-03-18T18:00:00Z"
        modifiedTime="2026-03-18T18:00:00Z"
        imageUrl="https://www.objectwire.org/images/spacex-xai-og.jpg"
        articleUrl={FULL_URL}
        section="Technology"
        keywords={[
          'SpaceX xAI merger 2026',
          'SpaceX IPO $1.75 trillion',
          'Elon Musk AI dominance prediction',
          'Orbital Data Centers SpaceX',
          'xAI co-founders departed 2026',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Elon Musk', item: '/elon-musk' },
              { name: 'SpaceX-xAI Merger', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="SpaceX-xAI Merger Sets Stage for $1.75 Trillion AI Powerhouse"
        subtitle="Musk says SpaceX will 'far exceed everyone else combined' in AI. A Nasdaq IPO targeting $1.75 trillion is set for summer 2026. But 9 of xAI's 11 co-founders have already left."
        category="Technology"
        categoryColor="blue"
        topicTag="technology"
        publishDate="March 18, 2026"
        readTime="6 min read"
        breaking
        author={{
          name: 'ObjectWire Technology Desk',
          role: 'Technology Reporter',
        }}
        tags={[
          'SpaceX', 'xAI', 'Elon Musk', 'IPO', 'AI', 'Grok',
          'Orbital Data Centers', 'Merger', 'Technology', 'Space',
          'Breaking News',
        ]}
        slug="spacex-xai-merger-1-75-trillion-ipo-orbital-ai-2026"
        url={FULL_URL}
      >

        {/* Lede */}
        <p>
          <strong>HAWTHORNE, CA</strong> —{' '}
          <Link href="/elon-musk" className="text-blue-700 font-medium hover:underline">
            Elon Musk
          </Link>{' '}
          has declared that SpaceX is destined to become the world&apos;s most dominant force
          in artificial intelligence. In a series of bold statements on{' '}
          <strong>March 16, 2026</strong>, Musk predicted that within a few years, SpaceX&apos;s
          AI achievements would{' '}
          <em>&quot;far exceed everyone else combined&quot;</em> — including industry leaders
          like Alphabet&apos;s Google DeepMind. The claim arrives on the heels of a sweeping
          corporate restructuring that has fused Musk&apos;s aerospace empire with his AI
          ambitions, and positioned the combined entity for what could become the
          largest IPO in history.
        </p>

        <HighlightBox type="key-point" color="blue">
          <strong>At a Glance:</strong> SpaceX completed an all-stock acquisition of xAI on
          February 2, 2026 — valued at $1.25 trillion. Internal valuations for the combined
          entity have since climbed to $1.75 trillion as markets reprice SpaceX as an
          AI-infrastructure play. A Nasdaq IPO targeting $30–50 billion in capital is tracking
          for June or July 2026.
        </HighlightBox>

        {/* The Merger */}
        <h2>The Merger: Vertical Integration of Space and Silicon</h2>
        <p>
          On <strong>February 2, 2026</strong>, SpaceX completed an all-stock acquisition of
          xAI — which had previously absorbed the{' '}
          <Link href="/tech" className="text-blue-700 font-medium hover:underline">
            X social media platform
          </Link>
          . The deal valued the combined entity at <strong>$1.25 trillion</strong>, folding the
          Grok chatbot, the X data firehose, and xAI&apos;s research talent directly into the
          aerospace giant under a single corporate umbrella.
        </p>
        <p>
          The strategic logic is straightforward but audacious. Musk argues that Earth-based
          data centers are approaching a <strong>&quot;power wall&quot;</strong> — a hard
          ceiling on AI compute capacity imposed by terrestrial power grid constraints. By
          merging the two companies, he intends to use{' '}
          <Link href="/elon-musk/spacex" className="text-blue-700 font-medium hover:underline">
            Starship
          </Link>{' '}
          to launch <strong>Orbital Data Centers (ODCs)</strong> that leverage constant solar
          energy and the natural cooling of space to power massive AI clusters at a scale
          impossible on the terrestrial grid.
        </p>

        <HighlightBox type="quote" color="purple">
          &quot;Within a few years, SpaceX&apos;s AI achievements will far exceed everyone
          else combined — including Google DeepMind.&quot; — Elon Musk, March 16, 2026
        </HighlightBox>

        {/* Sentient Sun */}
        <h2>The &quot;Sentient Sun&quot; Project</h2>
        <p>
          At the center of SpaceX&apos;s AI infrastructure ambitions is a classified-but-leaked
          initiative internally called the <strong>&quot;Sentient Sun&quot; project</strong>.
          The initiative aims to build space-based compute at a scale that is physically
          impossible within terrestrial power constraints, with a target of adding{' '}
          <strong>100 gigawatts of AI compute capacity</strong> via satellite constellations
          within the next three years.
        </p>
        <p>
          The proposition draws directly on SpaceX&apos;s existing Starlink constellation
          and Starship launch cadence. Unlike terrestrial data centers — which require
          new power plants, transmission infrastructure, and cooling systems — ODCs would be
          supplied by continuous solar exposure and cooled passively by the thermal sink of
          space. Musk has described this as the only realistic path to &quot;gigawatt-class
          AI&quot; without waiting a decade for grid expansion.
        </p>

        {/* IPO Table */}
        <h2>The $1.75 Trillion IPO</h2>
        <p>
          The market has responded to the merger with a significant re-rating. SpaceX is
          reportedly preparing for a public listing with internal valuations now climbing
          toward <strong>$1.75 trillion</strong> as analysts reprice the company&apos;s
          identity from an aerospace contractor to a vertically integrated AI-infrastructure
          platform.
        </p>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="px-4 py-3 font-semibold">Metric</th>
                <th className="px-4 py-3 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {ipoDetails.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-semibold text-gray-700 text-xs whitespace-nowrap">{row.metric}</td>
                  <td className="px-4 py-3 font-bold text-blue-700 text-xs">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          If realized, a $30–50 billion capital raise would eclipse Saudi Aramco&apos;s 2019
          IPO — the current record holder at approximately $29.4 billion — making SpaceX&apos;s
          listing the largest in history.
        </p>

        {/* Talent Flux */}
        <h2>Internal Rebuilding: The &quot;Foundations Up&quot; Strategy</h2>
        <p>
          The transition has not been without significant friction. As of March 18, 2026,{' '}
          <strong>9 of xAI&apos;s 11 original co-founders have departed</strong> the company,
          including key technical figures <strong>Tony Wu</strong> and{' '}
          <strong>Zihang Dai</strong> — researchers who were central to Grok&apos;s early
          architecture and training methodology.
        </p>
        <p>
          Musk publicly acknowledged the &quot;talent flux&quot; on X, stating that xAI{' '}
          <em>&quot;was not built right the first time around&quot;</em> and is currently
          being redesigned from the <em>foundations up</em> to align with the rigid,
          milestone-based engineering culture of SpaceX. The framing signals a deliberate
          cultural reset rather than a retention failure — Musk is choosing SpaceX&apos;s
          operational philosophy over xAI&apos;s research lab culture.
        </p>

        <HighlightBox type="stat" color="orange">
          <strong>9 of 11</strong> original xAI co-founders have departed following the
          SpaceX merger, including Tony Wu and Zihang Dai. Musk says xAI &quot;was not built
          right the first time&quot; and is rebuilding from the foundations up.
        </HighlightBox>

        {/* SpaceX vs The World */}
        <h2>SpaceX vs. The &quot;Chatbot&quot; Giants</h2>
        <p>
          Musk&apos;s confidence that SpaceX will &quot;surpass DeepMind&quot; hinges on a
          deliberate redefinition of what AI competition actually means. Rather than measuring
          labs by benchmark scores or model size, Musk is pointing to three structural
          advantages:
        </p>

        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            {
              icon: '🚀',
              title: 'Physical AI',
              detail: "SpaceX's lead in autonomous rocketry and Starlink constellation management provides a real-world testing ground for AI that 'interacts with the physical universe' rather than generating text.",
              color: 'bg-blue-50 border-blue-200',
            },
            {
              icon: '📡',
              title: 'Data Advantage',
              detail: "Integration with X provides a real-time, global data stream that Musk claims gives Grok a 'truth-seeking' edge over closed systems like OpenAI or Google.",
              color: 'bg-purple-50 border-purple-200',
            },
            {
              icon: '🛰️',
              title: 'Compute Sovereignty',
              detail: "By owning the rockets, satellites, and AI models, Musk is creating a vertically integrated 'sovereign' system that doesn't rely on third-party cloud providers or terrestrial power grids.",
              color: 'bg-green-50 border-green-200',
            },
          ].map((item) => (
            <div key={item.title} className={`rounded-xl border p-5 ${item.color}`}>
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <p>
          Whether the strategy works depends on factors no one can model cleanly: whether
          Starship achieves the launch cadence needed to populate orbital compute clusters,
          whether the talent lost in xAI&apos;s co-founder exodus can be replaced, and whether
          &quot;physical AI&quot; proves to be a more durable moat than the transformer-scale
          advantages held by{' '}
          <Link href="/open-ai" className="text-blue-700 font-medium hover:underline">
            OpenAI
          </Link>{' '}
          and{' '}
          <Link href="/google" className="text-blue-700 font-medium hover:underline">
            Google DeepMind
          </Link>
          . For now, the market is voting yes — at $1.75 trillion.
        </p>

      </NewsArticle>
    </SEOWrapper>
  );
}
