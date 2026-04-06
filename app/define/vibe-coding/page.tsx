import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'What Is Vibe Coding? | AI-Assisted Programming Trend',
  description: 'Vibe coding is a programming approach where developers describe intent in natural language and let AI generate the code. Learn what vibe coding is, tools',
  keywords: [
    'what is vibe coding',
    'vibe coding definition',
    'vibe coding explained',
    'vibe coding AI',
    'AI coding tools',
    'natural language programming',
    'Cursor vibe coding',
    'GitHub Copilot vibe coding',
    'vibe coding vs traditional coding',
    'Andrej Karpathy vibe coding',
    'AI-assisted programming',
    'vibe coding 2026',
    'no-code AI development',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/vibe-coding',
  },
  openGraph: {
    title: 'What Is Vibe Coding? | AI-Assisted Programming Trend',
    description: 'Vibe coding explained: the AI-first coding style coined by Andrej Karpathy, tools that enable it, and the debate about its future in software development.',
    type: 'article',
    url: 'https://www.objectwire.org/define/vibe-coding',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Vibe Coding? | AI-Assisted Programming',
    description: 'Vibe coding: describe intent in plain English, let AI write the code. The trend Andrej Karpathy made famous in 2025.',
  },
};

export default function VibeCodingPage() {
  return <WikiArticle slug="define-vibe-coding" />;
}
