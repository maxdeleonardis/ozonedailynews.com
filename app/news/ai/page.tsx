import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/news/ai';

export const metadata: Metadata = {
  title:
    'Anthropic Says Chinese AI Labs Used 24,000 Fake Accounts to Copy Claude | ObjectWire',
  description:
    'Anthropic alleged that DeepSeek, Moonshot AI, and MiniMax used roughly 24,000 fraudulent accounts to prompt Claude more than 16 million times in a coordinated industrial-scale distillation effort to train their own AI systems.',
  keywords: [
    'Anthropic Chinese AI labs fake accounts',
    'DeepSeek copies Claude',
    'Moonshot AI Claude distillation',
    'MiniMax Anthropic',
    'industrial-scale AI distillation',
    'Anthropic Claude stolen outputs',
    'Chinese AI companies Claude',
    '24000 fake accounts Anthropic',
    '16 million Claude prompts',
    'AI model distillation 2026',
    'Anthropic terms of service violation',
    'DeepSeek AI training data',
    'AI intellectual property theft',
    'Claude chatbot abuse',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Anthropic Says Chinese AI Labs Used 24,000 Fake Accounts to Copy Claude',
    description:
      'DeepSeek, Moonshot AI, and MiniMax allegedly prompted Claude over 16 million times through 24,000 fraudulent accounts to siphon outputs for AI training, what Anthropic calls industrial-scale distillation.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'],
    publishedTime: '2026-02-23T12:00:00Z',
    modifiedTime: '2026-02-23T12:00:00Z',
    section: 'AI & Technology',
    tags: ['Anthropic', 'Claude', 'DeepSeek', 'Moonshot AI', 'MiniMax', 'AI', 'China', 'AI distillation'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthropic: Chinese AI Labs Ran 16M Prompts via 24,000 Fake Accounts to Clone Claude',
    description:
      'MiniMax: 13M+ prompts. Moonshot AI: 3.4M+. DeepSeek: 150,000. Anthropic calls it industrial-scale distillation. Full breakdown on ObjectWire.',
  },
};

export default function AnthropicChineseFakeAccountsPage() {
  return <NewsArticleDB slug="news-ai" />;
}
