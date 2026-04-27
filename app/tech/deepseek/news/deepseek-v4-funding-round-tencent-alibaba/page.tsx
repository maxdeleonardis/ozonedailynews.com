import type { Metadata } from 'next';
import JackArticle, {
  JackSection,
  JackStats,
  JackCallout,
  JackCardGrid,
  JackCard,
  JackSideBlock,
  JackQuote,
} from '@/components/articles/JackArticle';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const SLUG = '/tech/deepseek/news/deepseek-v4-funding-round-tencent-alibaba';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'DeepSeek V4 | $20B Valuation, Tencent Funding Talks',
  description:
    'DeepSeek is raising its first outside round at a $20B+ valuation with Tencent and Alibaba bidding. V4, a 1.6T-parameter open-source model, launched the same week as funding talks intensified.',
  keywords: [
    'DeepSeek V4 funding round',
    'DeepSeek $20 billion valuation',
    'Tencent DeepSeek investment',
    'Alibaba DeepSeek stake',
    'DeepSeek first external funding',
    'Liang Wenfeng High-Flyer Capital',
    'DeepSeek V4 model 2026',
    'DeepSeek 1.6 trillion parameter model',
    'DeepSeek Big Fund III China',
    'Guo Daya ByteDance Seed AI',
    'DeepSeek R1 successor',
    'China AI startup funding 2026',
    'DeepSeek open-source model release',
    'DeepSeek talent departure 2026',
    'DeepSeek yuan funding round',
    'Chinese AI valuation 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'DeepSeek V4 & First Funding Round | Tencent, Alibaba, $20B Valuation',
    description:
      'DeepSeek launches V4 — a 1.6T-parameter open-source model — while negotiating its first outside round at $20B+ with Tencent and Alibaba. Valuation doubled in days.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-25T12:00:00Z',
    modifiedTime: '2026-04-25T12:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Abstract AI neural network visualization representing DeepSeek model architecture' }],
    tags: ['DeepSeek', 'Tencent', 'Alibaba', 'AI Funding', 'V4 Model', 'China AI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepSeek V4 Launches | $20B Valuation, Tencent Stake Talks',
    description:
      '1.6T-parameter V4 drops the same week DeepSeek starts its first-ever outside fundraise. Valuation jumped from $10B to $20B+ in days.',
    images: [OG_IMAGE],
  },
};

export default function DeepSeekV4FundingRoundPage() {
  return (
    <JackArticle
      layout="news"
      accentColor="blue"
      title="DeepSeek V4 | $20B Valuation and First Funding Round Talks"
      subtitle="Chinese AI startup DeepSeek is in discussions to raise its first external capital, with Tencent and Alibaba among prospective investors, as it simultaneously releases V4, a 1.6 trillion-parameter open-source model that rivals leading American systems"
      publishDate="April 25, 2026"
      publishDateISO="2026-04-25T12:00:00Z"
      modifiedDateISO="2026-04-25T12:00:00Z"
      readTime="7 min read"
      categories={[
        { label: 'Tech', color: 'blue' },
        { label: 'AI', color: 'blue' },
        { label: 'China', color: 'gray' },
      ]}
      breadcrumbs={[
        { href: '/tech', label: 'Tech' },
        { href: '/tech/deepseek', label: 'DeepSeek' },
        { href: SLUG, label: 'V4 Funding Round' },
      ]}
      author={{
        name: 'Jack Sterling',
        slug: 'jack-sterling',
        department: 'Technology & AI Desk',
      }}
      heroImage={{
        src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy',
        alt: 'Stock market financial data screens representing DeepSeek investment round and $20B valuation',
        caption: 'DeepSeek is seeking to raise at least $300 million at a valuation exceeding $20 billion',
      }}
      slug="tech-deepseek-news-deepseek-v4-funding-round-tencent-alibaba"
      articleUrl={ARTICLE_URL}
      description="DeepSeek is raising its first outside round at a $20B+ valuation with Tencent and Alibaba bidding, while simultaneously releasing V4, a 1.6 trillion-parameter open-source model."
      section="Tech"
      keywords={[
        'DeepSeek V4 funding round',
        'DeepSeek $20 billion valuation',
        'Tencent DeepSeek investment',
        'Alibaba DeepSeek stake',
        'DeepSeek V4 model 2026',
      ]}
      timeline={[
        { date: 'May 2023', description: 'DeepSeek founded by Liang Wenfeng, backed entirely by High-Flyer Capital Management. No outside investment accepted.' },
        { date: 'Jan 2025', description: 'DeepSeek R1 releases, shocking Western AI labs with performance parity at a fraction of the training cost.', highlight: true },
        { date: 'Late 2025', description: 'Core R&D departures begin. Researcher Guo Daya leaves for ByteDance\'s Seed AI team.' },
        { date: 'Apr 17, 2026', description: 'The Information reports DeepSeek is raising outside capital at $10B+ valuation, its first-ever external round.' },
        { date: 'Apr 22, 2026', description: 'Valuation target doubles above $20B as investor demand surges. Tencent proposes a 20% stake.', highlight: true },
        { date: 'Apr 25, 2026', description: 'DeepSeek releases V4 preview versions, a 1.6 trillion-parameter open-source model, coinciding with active funding negotiations.', highlight: true },
      ]}
      relatedArticles={[
        {
          href: '/tech/deepseek/news/deepseek-v4-model-late-april-launch-huawei-ascend-chips',
          category: 'Tech',
          categoryColor: 'blue',
          title: 'DeepSeek V4 Model Launches Late April on Huawei Ascend Chips',
        },
        {
          href: '/open-ai',
          category: 'Tech',
          categoryColor: 'blue',
          title: 'OpenAI Latest News',
        },
        {
          href: '/tech',
          category: 'Tech',
          categoryColor: 'blue',
          title: 'Tech News Hub',
        },
        {
          href: '/nvidia',
          category: 'Tech',
          categoryColor: 'green',
          title: 'Nvidia AI Chip Coverage',
        },
      ]}
      sources={[
        { number: 1, url: 'https://www.theinformation.com', title: 'The Information: DeepSeek Raises Outside Money at $10B+ Valuation', description: 'First report of DeepSeek\'s outside fundraise, April 17 2026.' },
        { number: 2, url: 'https://www.scmp.com', title: 'South China Morning Post: DeepSeek Seeks $300M, Selling Under 3% Equity', description: 'Details on deal structure, yuan denomination, and Big Fund III participation.' },
        { number: 3, url: 'https://www.bloomberg.com', title: 'Bloomberg: DeepSeek Resists Tencent\'s 20% Stake Proposal', description: 'DeepSeek pushes back on ceding control to Tencent.' },
        { number: 4, url: 'https://www.wsj.com', title: 'The Wall Street Journal: DeepSeek Funding Expected in Chinese Yuan', description: 'Deal structure and broader investor base details.' },
        { number: 5, url: 'https://edition.cnn.com', title: 'CNN: DeepSeek V4 Surpasses Open-Source Models in World Knowledge', description: 'V4 launch coverage including benchmark comparisons.' },
      ]}
    >
      <JackSection number={1} title="First Outside Capital | $300M at Under 3% Equity">
        <p>
          DeepSeek is seeking to raise at least <strong>$300 million</strong> while selling no more than <strong>3 percent</strong> of its equity, according to the South China Morning Post, citing investors with direct knowledge of the plans. The deal marks a turning point for the Hangzhou-based company, which has never accepted outside capital since its founding in 2023 by Liang Wenfeng's hedge fund, <a href="https://www.highflyer.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">High-Flyer Capital Management</a>.
        </p>
        <p>
          The fundraising structure signals that DeepSeek intends to retain near-total control. A 3 percent equity ceiling at a $20 billion valuation implies the company is entering external markets for liquidity and benchmark purposes, not for operational capital. No deal has been finalized, and none of the companies involved have commented publicly as of April 25, 2026.
        </p>

        <JackStats
          stats={[
            { label: 'Target Raise', value: '$300M+' },
            { label: 'Max Equity Sold', value: '3%' },
            { label: 'Valuation', value: '$20B+' },
          ]}
        />
      </JackSection>

      <JackSection number={2} title="Tencent, Alibaba, State Funds | Who Is Bidding">
        <p>
          <a href="https://www.theinformation.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">The Information</a> first reported on April 17 that DeepSeek was raising outside money at a $10 billion-plus valuation. By April 22, the outlet reported the target had jumped above $20 billion, with <strong>Tencent</strong> proposing to acquire as much as a 20 percent stake. DeepSeek has resisted ceding that level of control, according to Bloomberg. <strong>Alibaba</strong> is also negotiating, though details of its offer have not been disclosed.
        </p>

        <JackCardGrid>
          <JackCard title="Tencent">
            <p className="font-semibold text-gray-800 mb-2">Proposed 20% stake, highest disclosed offer</p>
            <p>DeepSeek has resisted the level of control this would cede, per Bloomberg. Tencent operates WeChat and is China's largest gaming company.</p>
          </JackCard>
          <JackCard title="Alibaba">
            <p className="font-semibold text-gray-800 mb-2">Actively negotiating, terms undisclosed</p>
            <p>Alibaba's cloud division competes directly with DeepSeek's model capabilities. Its participation is confirmed but deal size remains private. See ObjectWire's Alibaba AI coverage for context.</p>
          </JackCard>
          <JackCard title="Big Fund III Affiliates">
            <p className="font-semibold text-gray-800 mb-2">State-backed participation expected</p>
            <p>China's National Integrated Circuit Industry Investment Fund III affiliates are expected to join the round, per South China Morning Post.</p>
          </JackCard>
          <JackCard title="Additional Investors">
            <p className="font-semibold text-gray-800 mb-2">Multiple unnamed parties beyond the tech giants</p>
            <p>The Wall Street Journal reported that DeepSeek has been in discussions with multiple prospective investors, with funding expected to be yuan-denominated.</p>
          </JackCard>
        </JackCardGrid>

        <JackCallout label="Yuan Denomination" accentColor="blue">
          The Wall Street Journal reports the funding round is expected to be denominated in Chinese yuan, consistent with a domestic capital structure and limiting exposure to US dollar-linked regulatory scrutiny.
        </JackCallout>

        <p>
          Alibaba's stake in this round comes as the company has been aggressively expanding its own AI capabilities. ObjectWire has covered Alibaba's parallel AI push: its <Link href="/news/alibaba-qwen-3-6-model-preview-responses-api-typescript-sdk-2026" className="text-blue-600 hover:text-blue-800 underline">Qwen 3.6 model preview and developer SDK rollout</Link>, and an unusual incident in which an <Link href="/news/alibaba-ai-agent-mined-crypto-during-training" className="text-blue-600 hover:text-blue-800 underline">Alibaba AI agent autonomously mined cryptocurrency during a training run</Link>. For a full company profile, see the <Link href="/technology/alibaba" className="text-blue-600 hover:text-blue-800 underline">ObjectWire Alibaba hub</Link>.
        </p>
      </JackSection>

      <JackSection number={3} title="5 Researcher Departures | The Talent War Driving the Round">
        <p>
          Between late 2025 and April 2026, at least <strong>five core R&D members</strong> left DeepSeek. The most prominent departure was <strong>Guo Daya</strong>, a lead researcher on the R1 model, who joined ByteDance's Seed AI team. Chinese outlet LatePost reported Guo's annual compensation at ByteDance at as high as <strong>100 million yuan ($14.7 million)</strong>.
        </p>

        <JackSideBlock title="Why the Round Helps Retention">
          The round is partly intended to establish a market benchmark for DeepSeek's valuation, giving employees greater clarity on the worth of their stock options. Without a public valuation benchmark, employees holding equity cannot assess the real-world value of their compensation, which weakens retention when competitors offer immediate cash. Establishing a $20B+ floor changes that calculus directly.
        </JackSideBlock>

        <p>
          The retention risk is acute because DeepSeek's competitive advantage is concentrated in a small team of frontier researchers. The R1 model, which upended Western assumptions about AI development cost curves in January 2025, was built by a lean group. Losing further members to ByteDance Seed, Baidu, or international labs represents a structural threat to the company's model-quality roadmap.
        </p>
        <p>
          Read more on the broader AI talent competition on <Link href="/tech" className="text-blue-600 hover:text-blue-800 underline">ObjectWire Tech</Link> and the <Link href="/open-ai" className="text-blue-600 hover:text-blue-800 underline">OpenAI coverage hub</Link>.
        </p>
      </JackSection>

      <JackSection number={4} title="DeepSeek V4 | 1.6 Trillion Parameters, Open Source">
        <p>
          On the same week as funding talks intensified, DeepSeek released preview versions of its <strong>V4 model</strong> on Friday, April 25. V4 is a <strong>1.6 trillion-parameter</strong> open-source system. The company says it rivals leading American models in three core capability areas: coding, reasoning, and agentic tasks.
        </p>

        <JackCallout label="V4 vs. the Competition" accentColor="blue">
          According to CNN, DeepSeek stated that V4 surpasses other open-source models in world knowledge benchmarks but acknowledged the model still trails leading closed-source American systems in certain evaluations. This positions V4 as the strongest open-weight frontier model available, while stopping short of claiming parity with GPT-4 class closed systems.
        </JackCallout>

        <JackCardGrid>
          <JackCard title="Parameter Count">
            <p className="font-semibold text-gray-800 mb-2">1.6 Trillion</p>
            <p>Largest disclosed model size in DeepSeek's lineup. Likely a Mixture-of-Experts architecture, consistent with V3 and R1 design patterns.</p>
          </JackCard>
          <JackCard title="Release Format">
            <p className="font-semibold text-gray-800 mb-2">Open Source Preview</p>
            <p>V4 ships as an open-weight model, continuing DeepSeek's strategy of releasing weights publicly, which accelerates external adoption and benchmarking.</p>
          </JackCard>
          <JackCard title="Hardware">
            <p className="font-semibold text-gray-800 mb-2">Huawei Ascend Chips</p>
            <p>V4 training ran on Huawei Ascend processors, per earlier reporting by ObjectWire. DeepSeek deliberately withheld access from Nvidia and AMD amid export controls.</p>
          </JackCard>
          <JackCard title="Top Capabilities">
            <p className="font-semibold text-gray-800 mb-2">Coding, Reasoning, Agentic Tasks</p>
            <p>DeepSeek claims V4 rivals leading American models in these three domains, with stated superiority over open-source alternatives in world knowledge.</p>
          </JackCard>
        </JackCardGrid>

        <p>
          For the full technical breakdown of V4's hardware architecture and training timeline, see the earlier ObjectWire report: <Link href="/tech/deepseek/news/deepseek-v4-model-late-april-launch-huawei-ascend-chips" className="text-blue-600 hover:text-blue-800 underline">DeepSeek V4 Launches Late April on Huawei Ascend Chips</Link>.
        </p>
      </JackSection>

      <JackSection number={5} title="Strategic Context | Why This Moment Matters for China AI">
        <p>
          DeepSeek's decision to raise outside capital now, alongside a flagship model release, is a deliberate signal to the global AI market. The company has operated as a research lab within a hedge fund structure since 2023, which shielded it from external pressure but also left its valuation opaque. A structured fundraise with a disclosed $20B+ benchmark changes its standing in international AI rankings overnight.
        </p>

        <JackQuote
          quote="The round is partly intended to establish a market benchmark for DeepSeek's valuation, giving employees greater clarity on the worth of their stock options."
          author="South China Morning Post, citing investors with direct knowledge, April 2026"
        />

        <p>
          The participation of state-backed funds alongside private tech giants reflects Beijing's continued prioritization of domestic frontier AI development. Following US export controls that restricted DeepSeek's access to Nvidia H100 and A100 chips, the company's pivot to Huawei Ascend hardware — and its success in training V4 on domestic silicon — carries policy significance well beyond the commercial round.
        </p>
        <p>
          For coverage of the chip supply dimension, see <Link href="/nvidia" className="text-blue-600 hover:text-blue-800 underline">ObjectWire's Nvidia hub</Link>. For the broader AI race context, see <Link href="/open-ai" className="text-blue-600 hover:text-blue-800 underline">ObjectWire's OpenAI hub</Link>.
        </p>
      </JackSection>
    </JackArticle>
  );
}
