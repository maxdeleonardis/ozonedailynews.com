import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/technology/news/kimi-k2-moonshot-ai-open-weights-gpt-5-benchmark-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80';

export const metadata: Metadata = {
  title: 'Kimi K2.6 | Moonshot AI Open-Weights Model Beats GPT-5.4',
  description:
    'Moonshot AI releases Kimi K2.6, a 1-trillion parameter open-weights model that outscores GPT-5.4 and Claude Opus 4.6 on SWE-Bench Pro, BrowseComp, and',
  keywords: [
    'Kimi K2.6 Moonshot AI open weights 2026',
    'Kimi K2.6 vs GPT-5.4 benchmark',
    'Moonshot AI 1 trillion parameter model',
    'Kimi K2.6 SWE-Bench Pro 58.6',
    'Kimi K2.6 HuggingFace download',
    'Moonshot AI $18 billion valuation 2026',
    'Kimi K2.6 BrowseComp agent benchmark',
    'open weights AI model 2026 best',
    'Kimi K2.6 vs Claude Opus 4.6',
    'Moonshot AI API $0.95 per million tokens',
    'Kimi K2.6 Mixture of Experts MoE architecture',
    'Kimi K2.6 262144 context window',
    'Moonshot AI $1 billion fundraise 2026',
    'open source AI beats GPT-5 2026',
    'Kimi K2.6 12 hour autonomous coding session',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Kimi K2.6 | Moonshot AI\'s Open-Weights Model Beats GPT-5.4 on Every Agentic Benchmark',
    description:
      '54.0% on Humanity\'s Last Exam, 58.6% on SWE-Bench Pro, 86.3% on BrowseComp. Moonshot AI\'s 1T-parameter open-weights model is free to download and costs',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfasa'],
    publishedTime: '2026-04-21T18:00:00Z',
    modifiedTime: '2026-04-21T18:00:00Z',
    section: 'Technology',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Abstract neural network visualization representing a large AI model',
      },
    ],
    tags: ['Kimi K2.6', 'Moonshot AI', 'Open Source AI', 'GPT-5', 'AI Benchmarks'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kimi K2.6 Beats GPT-5.4 on Coding and Agents. It\'s Free to Download.',
    description:
      '1T parameters, 262K context, $0.95 API pricing. Moonshot AI just ended the era of closed-source AI dominance.',
    images: [OG_IMAGE],
  },
};

export default function TechnologyNewsKimiK2MoonshotAiOpenWeightsGpt5Benchmark2026Page() {
  return <JackArticleDB slug="technology-news-kimi-k2-moonshot-ai-open-weights-gpt-5-benchmark-2026" />;
}
