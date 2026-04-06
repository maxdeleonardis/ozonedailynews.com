import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'What Is an LLM? | Large Language Models Explained',
  description: 'An LLM (large language model) is an AI trained on massive text datasets to understand and generate language. Learn how LLMs work, key examples, and how',
  keywords: [
    'what is an LLM',
    'large language model definition',
    'how do LLMs work',
    'LLM explained',
    'large language model examples',
    'GPT-4 LLM',
    'ChatGPT LLM',
    'transformer model',
    'LLM vs AI',
    'training an LLM',
    'LLM 2026',
    'foundation model',
    'AI language model',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/what-is-an-llm',
  },
  openGraph: {
    title: 'What Is an LLM? | Large Language Models Explained',
    description: 'LLMs explained: how large language models like GPT-4 and Claude are trained, how they generate text, and what they power in 2026.',
    type: 'article',
    url: 'https://www.objectwire.org/define/what-is-an-llm',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is an LLM? | Large Language Models Explained',
    description: 'LLMs explained: how models like GPT-4 and Claude are trained and how they power AI products in 2026.',
  },
};

export default function WhatIsAnLLMPage() {
  return <WikiArticle slug="define-what-is-an-llm" />;
}
