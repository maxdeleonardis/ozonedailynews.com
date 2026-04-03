import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/open-ai/news/chatgpt-brand-apps-realtor-sephora-in-platform-commerce';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Realtor.com, Sephora Launch ChatGPT Apps | In-Platform Commerce Race',
  description:
    "Realtor.com and Sephora launched dedicated apps inside ChatGPT this week, joining a growing wave of brands building conversational commerce directly within OpenAI's platform as it pivots toward product discovery.",
  keywords: [
    'Realtor.com ChatGPT app 2026',
    'Sephora ChatGPT app beauty',
    'ChatGPT brand apps commerce',
    'OpenAI in-platform shopping',
    'ChatGPT conversational commerce',
    'OpenAI product discovery 2026',
    'brands building ChatGPT apps',
    'ChatGPT real estate search',
    'Sephora AI shopping assistant',
    'OpenAI commerce strategy 2026',
    'ChatGPT app ecosystem brands',
    'conversational shopping AI',
    'OpenAI Shopify commerce integration',
    'AI product discovery brands',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Realtor.com, Sephora Launch ChatGPT Apps | In-Platform Commerce Race',
    description:
      "Two major consumer brands built dedicated apps inside ChatGPT in a single week. OpenAI's platform is becoming a commerce destination, and brands are racing to claim their spot.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-04-02T14:00:00Z',
    modifiedTime: '2026-04-02T14:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Digital shopping interface on a phone screen' }],
    tags: ['OpenAI', 'ChatGPT', 'Realtor.com', 'Sephora', 'Commerce', 'AI Shopping', 'Brand Apps'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Realtor.com, Sephora Launch Inside ChatGPT | Brands Race to Build',
    description:
      "Two major brands built ChatGPT apps in one week. OpenAI is no longer just an AI assistant. It's becoming a commerce platform. Here's what that means.",
    images: [OG_IMAGE],
  },
};

export default function OpenAiNewsChatgptBrandAppsRealtorSephoraInPlatformCommercePage() {
  return <NewsArticleDB slug="open-ai-news-chatgpt-brand-apps-realtor-sephora-in-platform-commerce" />;
}
