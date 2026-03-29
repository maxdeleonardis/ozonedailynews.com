import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/open-ai/openai-aws-pentagon-classified-ai-deal-march-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: "OpenAI Signs Landmark AWS Deal for Classified Pentagon AI | ObjectWire",
  description:
    "OpenAI finalized an agreement with Amazon Web Services on March 17, 2026, to deploy its models across classified U.S. defense and intelligence infrastructure, filling the void left by Anthropic's February 2026 removal as a Department of War supplier.",
  keywords: [
    'OpenAI AWS Pentagon classified AI deal March 2026',
    'OpenAI Department of War contract 2026',
    'OpenAI AWS GovCloud classified regions',
    'OpenAI Frontier autonomous AI agents government',
    'Anthropic supply chain risk DoW February 2026',
    'OpenAI red lines no autonomous weapons surveillance',
    'Amazon OpenAI $50 billion partnership February 2026',
    'OpenAI Microsoft Azure exclusivity dispute',
    'OpenAI federal government expansion 2026',
    'OpenAI defense classified contract $30 billion revenue 2026',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "OpenAI Signs Landmark AWS Deal for Classified Pentagon AI | With Three 'Red Lines'",
    description:
      "OpenAI moved into classified government AI work via AWS on March 17, 2026, after Anthropic was removed as a DoW supplier in February. The deal brings OpenAI Frontier to secret-level U.S. defense infrastructure, but bans autonomous weapons and domestic surveillance.",
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-18T12:00:00Z',
    modifiedTime: '2026-03-18T12:00:00Z',
    section: 'Technology',
    tags: [
      'OpenAI', 'AWS', 'Amazon', 'Pentagon', 'Defense', 'AI',
      'Classified', 'Anthropic', 'Microsoft', 'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "OpenAI Signs Classified Pentagon AI Deal via AWS | ObjectWire",
    description:
      "OpenAI is in classified government AI, filling the Anthropic vacuum. The AWS-routed deal gives the DoW access to OpenAI Frontier with three hard limits: no autonomous weapons, no domestic surveillance, no edge deployment.",
  },
  other: {
    news_keywords:
      'OpenAI AWS Pentagon deal, classified AI defense contract, Anthropic DoW supply chain risk, OpenAI Frontier government',
  },
};

export default function OpenAIAWSPentagonPage() {
  return <NewsArticleDB slug="open-ai-openai-aws-pentagon-classified-ai-deal-march-2026" />;
}
