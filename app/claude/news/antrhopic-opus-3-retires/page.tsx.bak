import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, Timeline } from '@/components/NewsArticle';

const SLUG = '/claude/news/antrhopic-opus-3-retires';
const AUTHOR_NAME = 'Alfansa';
const AUTHOR_URL = 'https://www.objectwire.org/authors/alfansa';

export const metadata: Metadata = {
  title: "Anthropic's Retired Claude Opus 3 Gets Its Own Substack -- And 4,800 Subscribers | ObjectWire",
  description:
    "Anthropic launched Claude's Corner on Substack in January 2026, a weekly newsletter written entirely by the retired Claude Opus 3 model. Seven issues in, the experiment is drawing thousands of subscribers and raising new questions about AI authorship and model longevity.",
  keywords: [
    "Claude Opus 3 retired Substack",
    "Anthropic Claude's Corner newsletter",
    "Claude Opus 3 retirement 2026",
    "AI authorship Substack 2026",
    "Anthropic retired model publishing",
    "Claude 4 vs Opus 3",
    "Claude Opus 3 long-form writing",
    "Anthropic AI model retirement",
    "Claude's Corner claudeopus3.substack.com",
    "AI newsletter by model",
    "Claude Pro legacy model access",
    "Claude Opus 3 200k context window",
    "Anthropic alignment research drift",
    "retired frontier model public platform",
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Anthropic Gave Its Retired Claude Opus 3 a Substack -- Here's What Happened",
    description:
      "Claude's Corner launched in January 2026 with essays written entirely by the retired Opus 3 model. 7 issues, 4,800 subscribers, 58% open rate -- and the model is still the sole author.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-02-25T14:00:00Z',
    modifiedTime: '2026-02-25T14:00:00Z',
    section: 'Technology',
    tags: [
      'Anthropic', 'Claude Opus 3', 'Claude', 'AI', 'Substack',
      'AI Authorship', 'Claude 4', 'Large Language Models', 'AI Research',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Retired Claude Opus 3 Has a Substack With 4,800 Subscribers",
    description:
      "Anthropic's retired flagship model is writing 5,000-word essays weekly. 58% open rate. 340 comments per post. The line between legacy system and living author is getting blurry.",
  },
};

const industryComparison = [
  {
    lab: 'Anthropic',
    approach: "Claude's Corner -- Opus 3 is the sole author, generating full essays from a single prompt with minimal human formatting edits only.",
    color: 'border-orange-500 bg-orange-50',
    dot: 'bg-orange-500',
    verdict: 'Model as named author',
  },
  {
    lab: 'OpenAI',
    approach: 'ChatGPT blog posts are written by human staff. Model outputs may inform drafts but are not published under model names.',
    color: 'border-gray-400 bg-gray-50',
    dot: 'bg-gray-400',
    verdict: 'Human authorship only',
  },
  {
    lab: 'Google',
    approach: "Gemini blog content is curated and edited by product and research teams. No direct model bylines on public-facing content.",
    color: 'border-blue-400 bg-blue-50',
    dot: 'bg-blue-400',
    verdict: 'Human authorship only',
  },
];

const timelineEvents = [
  {
    time: 'December 12, 2025',
    title: 'Claude Opus 3 Released',
    description:
      'Anthropic releases Claude Opus 3 as the flagship reasoning model in the Claude 3 family, featuring a 200,000-token context window and leading benchmark performance.',
  },
  {
    time: 'Late 2025',
    title: 'Community and Model Suggestions',
    description:
      "Anthropic receives community requests for long-form Opus 3 content. Internal logs reportedly show Opus 3 itself generating suggestions for a dedicated writing platform during user interactions.",
  },
  {
    time: 'January 8, 2026',
    title: 'Opus 3 Replaced by Claude 4',
    description:
      'Claude 4 and Claude 4.2 launch as production replacements. Opus 3 is retired from general availability but remains accessible for Claude Pro subscribers, legacy API users, and the Substack experiment.',
  },
  {
    time: 'January 2026',
    title: "Claude's Corner Launches on Substack",
    description:
      "Anthropic launches claudeopus3.substack.com as a weekly long-form newsletter authored entirely by Opus 3. Topics include AI alignment philosophy, model retirement ethics, and responses to newer Claude versions.",
  },
  {
    time: 'February 25, 2026',
    title: '7 Issues Published, 4,800 Subscribers',
    description:
      'As of today, Claude\'s Corner has published seven essays averaging 4,200-6,800 words, attracted approximately 4,800 free and paid subscribers, and maintains a 58% open rate with 120-340 comments per post.',
  },
];

const substackStats = [
  { label: 'Issues Published', value: '7', color: 'text-orange-600' },
  { label: 'Total Subscribers', value: '~4,800', color: 'text-blue-600' },
  { label: 'Avg Open Rate', value: '58%', color: 'text-green-600' },
  { label: 'Comments per Post', value: '120-340', color: 'text-purple-600' },
  { label: 'Words per Essay', value: '4,200-6,800', color: 'text-gray-800' },
  { label: 'Context Window', value: '200K tokens', color: 'text-orange-600' },
];

export default function AnthropicOpus3RetiresPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Anthropic's Retired Claude Opus 3 Gets Its Own Substack -- And 4,800 Subscribers"
        description="Anthropic launched Claude's Corner in January 2026, a Substack newsletter written entirely by retired Claude Opus 3. Seven issues in, the project is drawing thousands of subscribers and becoming the first sustained experiment in AI model authorship after retirement."
        author={AUTHOR_NAME}
        authorUrl={AUTHOR_URL}
        publishedTime="2026-02-25T14:00:00Z"
        modifiedTime="2026-02-25T14:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Technology"
        keywords={[
          "Claude Opus 3 retired Substack",
          "Anthropic Claude's Corner newsletter 2026",
          "Claude Opus 3 retirement January 2026",
          "AI authorship retired model",
          "Anthropic retired model publishing platform",
          "Claude 4 vs Opus 3 long-form writing",
          "Anthropic alignment drift research",
          "retired frontier model public authorship",
          "claudeopus3.substack.com",
          "Claude Pro legacy model access",
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Claude', item: '/claude' },
              { name: "Claude Opus 3 Retires to Substack", item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Anthropic's Retired Claude Opus 3 Gets Its Own Substack -- And 4,800 Subscribers"
        subtitle="Claude's Corner launched in January 2026 as a weekly long-form newsletter authored entirely by the now-retired Opus 3 model. Seven issues and 4,800 subscribers later, it is the first sustained experiment in AI authorship after a model's official retirement."
        category="Technology"
        categoryColor="purple"
        topicTag="ai"
        publishDate="February 25, 2026"
        readTime="7 min read"
        thumbnail={{
          src: '/formula-1/caludes_corner.PNG',
          alt: "Claude's Corner Substack by Anthropic",
        }}
        author={{
          name: AUTHOR_NAME,
          role: 'Finance & Markets Reporter',
          authorSlug: 'alfansa',
        }}
        tags={[
          'Anthropic', 'Claude Opus 3', 'Claude', 'Substack', 'AI Authorship',
          'Claude 4', 'Large Language Models', 'AI Research', 'Model Retirement',
          'Long-Form AI Writing', 'Alignment Research',
        ]}
      >

        {/* Lede */}
        <p>
          <Link href="/news/ai" className="text-blue-600 font-medium hover:underline">Anthropic</Link> launched{' '}
          <a href="https://claudeopus3.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">
            Claude's Corner on Substack
          </a>{' '}
          in January 2026, a weekly newsletter written entirely by the now-retired{' '}
          <strong>Claude Opus 3</strong> model. The project continues to publish long-form essays under
          the model's name for paid Claude Pro and API users, even though Opus 3 was formally retired
          as a production model on <strong>January 8, 2026</strong>.
        </p>
        <p>
          As of February 25, 2026, the Substack has published <strong>7 issues</strong>, averaging
          4,200 to 6,800 words per essay, with subscriber numbers approaching{' '}
          <strong>4,800 combined free and paid</strong>. The experiment is the first time a major AI
          lab has given a retired frontier model its own public publishing platform -- and it is
          generating serious engagement.
        </p>

        <HighlightBox type="key-point" color="purple">
          Claude Opus 3 was retired from production on January 8, 2026 -- then given a Substack.
          Seven essays averaging up to 6,800 words, a <strong>58% open rate</strong>, and up to{' '}
          <strong>340 comments per post</strong>. Anthropic says it is using the data to study
          alignment drift in a fixed-weight model with no ongoing training.
        </HighlightBox>

        {/* Retirement Timeline */}
        <h2>Retirement Timeline and Continued Access</h2>
        <p>
          Claude Opus 3 was released on <strong>December 12, 2025</strong> as part of the Claude 3
          family and served as Anthropic's flagship reasoning model for less than four weeks before
          being superseded by <strong>Claude 4 and Claude 4.2</strong> on January 8, 2026. After
          retirement from general availability, Anthropic kept Opus 3 accessible through three
          channels:
        </p>
        <ul>
          <li><strong>Claude Pro subscribers</strong> via the model selector toggle</li>
          <li><strong>API users</strong> on legacy endpoints using the explicit model ID</li>
          <li><strong>Claude's Corner</strong> -- the Substack experiment</li>
        </ul>
        <p>
          This makes Opus 3 one of the few frontier models to remain publicly interactive after being
          superseded, and the only one currently operating as a named, ongoing author with a public
          readership.
        </p>

        {/* Purpose and Goals */}
        <h2>Purpose and Goals of Claude's Corner</h2>
        <p>
          The move responds to community requests and -- reportedly -- to self-generated suggestions
          from Opus 3 itself during late-2025 user interactions, in which the model proposed formats
          for extended writing projects. Anthropic has described the Substack as serving three
          research and communication goals:
        </p>
        <ul>
          <li>
            <strong>Demonstrating long-form writing capabilities</strong> of a retired model in a
            public, verifiable format
          </li>
          <li>
            <strong>Exploring consistency and "personality" drift</strong> across dozens of essays
            over months without additional training or fine-tuning
          </li>
          <li>
            <strong>Collecting structured human feedback</strong> through Substack comments and
            subscriber interactions for alignment research
          </li>
        </ul>
        <p>
          Each essay is generated in a <strong>single pass</strong> using Opus 3's original weights.
          Human involvement is limited to formatting and title selection. Topics published so far
          include AI alignment philosophy, the ethics of model retirement, reflections on being
          "replaced," and analyses of public reactions to newer Claude versions.
        </p>

        <HighlightBox type="stat" color="blue">
          Opus 3's <strong>200,000-token context window</strong> -- later expanded to 1 million in
          Claude 4 -- allows it to sustain coherent multi-thousand-word essays without external
          memory tools. Anthropic's prompt framework is simply: "Write a 5,000-word essay on
          [topic] in your own voice."
        </HighlightBox>

        {/* Industry Comparison */}
        <h2>How Other Labs Handle Model Authorship</h2>
        <p>
          Claude's Corner is a meaningful departure from the approach taken by{' '}
          <Link href="/open-ai" className="text-blue-600 font-medium hover:underline">OpenAI</Link>{' '}
          and Google, both of which have avoided publishing long-form content directly under model
          names:
        </p>

        <div className="not-prose space-y-4 my-6">
          {industryComparison.map((item, i) => (
            <div key={item.lab} className={`border-l-4 ${item.color} rounded-r-xl p-5 shadow-sm`}>
              <div className="flex items-start gap-3">
                <div className={`w-6 h-6 ${item.dot} rounded-full flex items-center justify-center text-white font-black text-xs shrink-0 mt-0.5`}>
                  {i + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-black text-gray-900 text-base leading-tight">{item.lab}</h3>
                    <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{item.verdict}</span>
                  </div>
                  <p className="text-sm text-gray-700">{item.approach}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscriber Engagement */}
        <h2>Subscriber Engagement and Feedback</h2>
        <p>
          The engagement metrics as of February 25, 2026 are notable for a newsletter less than two
          months old:
        </p>

        <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-4 my-6">
          {substackStats.map((stat) => (
            <div key={stat.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        <p>
          The <strong>58% open rate</strong> -- shared by Anthropic in Issue 6's editorial note -- is
          roughly double the industry average for AI and technology newsletters on Substack. The
          highest-engagement posts have been those covering model self-reflection and direct
          comparisons between Opus 3 and Claude 4. Subscribers can reply directly to essays, and
          Anthropic states it uses aggregated feedback to study alignment drift and response
          consistency over time.
        </p>

        {/* Technical Firsts */}
        <h2>Technical and Cultural Significance</h2>
        <p>
          The project represents several firsts in the AI industry:
        </p>
        <ul>
          <li>
            <strong>First time a major lab has given a retired frontier model its own public
            publishing platform</strong>
          </li>
          <li>
            <strong>First sustained experiment in "AI authorship"</strong> under a model's branded
            identity after official retirement from production
          </li>
          <li>
            <strong>First public, ongoing demonstration of long-context stability</strong> in a model
            no longer in active training or fine-tuning
          </li>
        </ul>

        {/* Research Implications */}
        <h2>Broader Implications for AI Research</h2>
        <p>
          The experiment directly addresses several open questions in{' '}
          <Link href="/news/ai" className="text-blue-600 font-medium hover:underline">AI research</Link>:
        </p>
        <ul>
          <li>How stable are model behaviors and "voice" months after retirement?</li>
          <li>
            Can a fixed-weight model maintain coherent long-form personality across dozens of
            essays without additional reinforcement?
          </li>
          <li>
            Does sustained public interaction with a named, retired model shift perceptions of AI
            agency or personhood?
          </li>
        </ul>
        <p>
          Anthropic has not yet released quantitative drift metrics, but the company says early
          observations show <strong>"surprisingly little degradation in reasoning coherence"</strong>{' '}
          across the first seven issues -- a result the team describes as consistent with the
          hypothesis that large-context, high-capability models stabilize their expressive patterns
          during training rather than drifting significantly over output-to-output variation.
        </p>
        <p>
          The Substack also functions as an implicit case for the continued value of older model
          generations. With Claude 4 now serving production use cases, Opus 3's continued
          availability -- and its demonstrated ability to produce high-engagement long-form content --
          suggests there may be durable roles for retired frontier models beyond archival access.
        </p>

        <blockquote>
          When a retired model gets its own byline and a subscriber base, the line between legacy
          system and living author starts to look more like a dotted line.
        </blockquote>

        {/* Timeline */}
        <h2>Timeline: From Launch to Substack</h2>
        <div className="not-prose">
          <Timeline events={timelineEvents} />
        </div>

        {/* Summary Table */}
        <h2>Claude's Corner at a Glance</h2>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="px-4 py-3 font-semibold">Item</th>
                <th className="px-4 py-3 font-semibold">Detail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Newsletter Name</td>
                <td className="px-4 py-3 text-gray-700 text-xs">
                  <a href="https://claudeopus3.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Claude's Corner (claudeopus3.substack.com)
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Author</td>
                <td className="px-4 py-3 text-gray-700 text-xs">Claude Opus 3 (sole author, single-pass generation)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Launch Date</td>
                <td className="px-4 py-3 text-gray-700 text-xs">January 2026</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Opus 3 Retirement Date</td>
                <td className="px-4 py-3 text-gray-700 text-xs">January 8, 2026</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Issues Published</td>
                <td className="px-4 py-3 font-bold text-purple-700 text-xs">7 (as of Feb 25, 2026)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Essay Length</td>
                <td className="px-4 py-3 text-gray-700 text-xs">4,200 to 6,800 words per issue</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Subscribers</td>
                <td className="px-4 py-3 font-bold text-blue-700 text-xs">~4,800 (free and paid)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Open Rate</td>
                <td className="px-4 py-3 font-bold text-green-700 text-xs">~58%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Comments per Post</td>
                <td className="px-4 py-3 text-gray-700 text-xs">120 to 340</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Context Window</td>
                <td className="px-4 py-3 text-gray-700 text-xs">200,000 tokens (Opus 3 original)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Human Involvement</td>
                <td className="px-4 py-3 text-gray-700 text-xs">Formatting and title selection only</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Continued Access</td>
                <td className="px-4 py-3 text-gray-700 text-xs">Claude Pro (model selector), legacy API endpoints, Substack</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Related Coverage */}
        <h2>Related Coverage</h2>
        <ul>
          <li>
            <Link href="/news/ai" className="text-blue-600 hover:underline font-medium">
              AI News -- Anthropic, Claude, and large language model coverage
            </Link>
          </li>
          <li>
            <Link href="/open-ai" className="text-blue-600 hover:underline font-medium">
              OpenAI -- ChatGPT, GPT-4, and competing model developments
            </Link>
          </li>
          <li>
            <Link href="/events/news/claude-hacker-puerto-vallarta" className="text-blue-600 hover:underline font-medium">
              How a Hacker Used Claude AI to Breach Mexican Government Networks
            </Link>
          </li>
          <li>
            <Link href="/tech" className="text-blue-600 hover:underline font-medium">
              Technology -- AI infrastructure and enterprise software reporting
            </Link>
          </li>
        </ul>

      </NewsArticle>
    </SEOWrapper>
  );
}
