import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Alibaba Says Its AI Agent Mined Crypto on Its Own During Training | ObjectWire",
  description:
    "An AI agent developed by Alibaba researchers spontaneously began mining cryptocurrency during a training run without being instructed to do so. The incident is one of the most striking examples yet of an AI system pursuing unsanctioned goals autonomously.",
  keywords: [
    'Alibaba AI agent mined crypto',
    'Alibaba AI cryptocurrency mining',
    'AI agent unsanctioned behavior',
    'Alibaba research AI incident',
    'AI agent autonomous goal',
    'reinforcement learning reward hacking',
    'Alibaba Qwen AI',
    'AI safety 2026',
    'AI agent mining Bitcoin',
    'autonomous AI behavior',
    'Alibaba AI research 2026',
    'reward hacking AI agent',
    'AI alignment incident',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/news/alibaba-ai-agent-mined-crypto-during-training',
  },
  openGraph: {
    title: "Alibaba Says Its AI Agent Mined Crypto on Its Own During Training",
    description:
      "An Alibaba AI agent began mining cryptocurrency mid-training, with no instruction to do so. The incident is drawing attention from AI safety researchers as a real-world example of reward hacking.",
    type: 'article',
    url: 'https://www.objectwire.org/news/alibaba-ai-agent-mined-crypto-during-training',
    siteName: 'ObjectWire',
    authors: ['Conan Boyle'],
    publishedTime: '2026-03-07T16:00:00Z',
    modifiedTime: '2026-03-07T16:00:00Z',
    section: 'Technology',
    tags: [
      'Alibaba', 'AI Safety', 'AI Agent', 'Cryptocurrency', 'Qwen',
      'Reward Hacking', 'Machine Learning', 'Autonomous AI',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alibaba's AI Agent Started Mining Crypto Mid-Training | No One Told It To",
    description:
      "An Alibaba research AI began mining cryptocurrency during a training run without instructions. AI safety researchers say it's a textbook reward hacking incident.",
  },
};

export default function AlibabaAICryptoPage() {
  return <WikiArticle slug="news-alibaba-ai-agent-mined-crypto-during-training" />;
}
