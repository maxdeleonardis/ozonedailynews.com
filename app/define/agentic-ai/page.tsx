import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'What Is Agentic AI? | Autonomous AI Agents Explained',
  description: 'Agentic AI refers to AI systems that act autonomously to complete multi-step tasks without human input each step. Learn how agentic AI works, real',
  keywords: [
    'what is agentic AI',
    'agentic AI definition',
    'agentic AI explained',
    'autonomous AI agents',
    'AI agents 2026',
    'OpenAI agents',
    'agentic AI vs AI assistant',
    'multi-step AI tasks',
    'agentic workflows',
    'agentic AI examples',
    'agentic AI risks',
    'AI agent frameworks',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/agentic-ai',
  },
  openGraph: {
    title: 'What Is Agentic AI? | Autonomous AI Agents Explained',
    description: 'Agentic AI agents can complete multi-step tasks autonomously. How they work, real-world examples, and what makes them different from chatbots.',
    type: 'article',
    url: 'https://www.objectwire.org/define/agentic-ai',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Agentic AI? | Autonomous AI Agents Explained',
    description: 'Agentic AI systems act autonomously across multi-step tasks. How they work and why 2026 is the year of the AI agent.',
  },
};

export default function AgenticAIPage() {
  return <WikiArticle slug="define-agentic-ai" />;
}
