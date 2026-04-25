import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/microsoft-anthropic-mythos-ai-sdl-integration-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Microsoft Embeds Anthropic Mythos AI into SDL Security',
  description: 'Microsoft is integrating Anthropic\'s Claude Mythos Preview into its Security Development Lifecycle, adopting an AI Anthropic says is far ahead of rivals',
  keywords: [
    'Microsoft Anthropic Mythos AI',
    'Anthropic Claude Mythos Preview',
    'Microsoft SDL security framework',
    'Project Glasswing Anthropic',
    'Microsoft vulnerability detection AI',
    'Anthropic cyber AI 2026',
    'Microsoft Security Development Lifecycle',
    'Anthropic zero-day AI',
    'Claude Mythos enterprise security',
    'Microsoft AI software security 2026',
    'Anthropic restricted AI model',
    'Project Glasswing AWS Apple Google',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Microsoft Embeds Anthropic Mythos AI into SDL Security',
    description: 'Anthropic says Mythos Preview is "far ahead of any other AI model in cyber capabilities." Microsoft is the first major tech company to integrate it into',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennen'],
    publishedTime: '2026-04-22T14:00:00Z',
    modifiedTime: '2026-04-22T14:00:00Z',
    section: 'Tech',
    tags: ['Microsoft', 'Anthropic', 'Claude Mythos', 'Project Glasswing', 'Cybersecurity'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Puts Anthropic\'s Most Powerful AI into Its Security Pipeline',
    description: 'Mythos Preview found thousands of zero-days in testing. Microsoft is the first tech giant to embed it into its SDL framework.',
  },
};

export default function MicrosoftNewsMicrosoftAnthropicMythosAiSdlIntegration2026Page() {
  return <NewsArticleDB slug="microsoft-news-microsoft-anthropic-mythos-ai-sdl-integration-2026" />;
}
