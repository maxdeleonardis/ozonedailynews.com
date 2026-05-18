import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';



const SLUG = '/open-ai';

export const metadata: Metadata = {
  title: 'OpenAI News | ChatGPT, GPT-5, AI Research 2026',
  description: 'Latest OpenAI news: ChatGPT updates, GPT-5, Sora, AI safety research, and business developments. Verified reporting from OzoneNews News.',
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'OpenAI News | ChatGPT & AI Research 2026',
    description: 'Comprehensive coverage of OpenAI, ChatGPT, GPT-5, and the latest AI research breakthroughs.',
    type: 'website',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews News',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenAI News | ChatGPT & AI Research 2026',
    description: 'Latest OpenAI and ChatGPT news from OzoneNews News.',
  },
};

export default function OpenAIPage() {
  return <ArticlePageDB slug="open-ai" />;
}
