import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/saas/news/shopify-agentic-storefronts-chatgpt-default-march-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectwire.org/shopify/shopify.PNG';

export const metadata: Metadata = {
  title: "Shopify Agentic Storefronts | ChatGPT Default 2026",
  description:
    'Shopify auto-syndicates products into ChatGPT for all U.S. merchants by late March 2026. OpenAI shelved Instant Checkout over tax complexity and a 14% consumer trust floor.',
  keywords: [
    'Shopify agentic storefronts ChatGPT 2026',
    'Shopify ChatGPT product discovery default',
    'Shopify merchant ChatGPT syndication March 2026',
    'OpenAI Instant Checkout scale back 2026',
    'agentic commerce Shopify OpenAI',
    'ChatGPT shopping Shopify integration',
    'Shopify AI product recommendations ChatGPT',
    'Shopify admin agentic storefronts opt-out',
    'OpenAI in-chat checkout abandoned tax complexity',
    'AI retail discovery engine 2026',
    'Shopify catalog LLM syndication',
    'ChatGPT buy button checkout 2026',
    'agentic commerce consumer trust data',
    'Shopify merchants ChatGPT late March 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: "Shopify Activates 'Agentic Storefronts' by Default in ChatGPT",
    description:
      "Shopify's millions of merchants will have their products auto-syndicated into ChatGPT starting late March 2026, no app install required. But in-chat checkout is already dead. Tax complexity, inventory sync failures, and a 14% consumer trust problem killed it.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-18T14:00:00Z',
    modifiedTime: '2026-03-18T14:00:00Z',
    section: 'Tech',
    tags: ['Shopify', 'ChatGPT', 'OpenAI', 'Agentic Commerce', 'Instant Checkout', 'E-Commerce'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Shopify Agentic Storefronts ChatGPT integration 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shopify Activates 'Agentic Storefronts' by Default in ChatGPT",
    description:
      "Discovery is now default, but checkout is dead. Shopify auto-syndicates products into ChatGPT starting late March 2026. OpenAI quietly killed in-chat payments over tax complexity, inventory chaos, and a 14% consumer trust floor.",
    images: [OG_IMAGE],
  },
};

export default function ShopifyAgenticStorefrontsChatGPTPage() {
  return <NewsArticleDB slug="saas-news-shopify-agentic-storefronts-chatgpt-default-march-2026" />;
}
