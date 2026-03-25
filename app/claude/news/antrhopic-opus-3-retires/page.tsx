import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/claude/news/antrhopic-opus-3-retires';

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
    authors: ['Connan Boyle'],
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

export default function AnthropicOpus3RetiresPage() {
  return <NewsArticleDB slug="claude-news-antrhopic-opus-3-retires" />;
}
