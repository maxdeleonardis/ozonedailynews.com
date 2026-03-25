import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/saas/news/shopify-agentic-storefronts-chatgpt-default-march-2026';

export const metadata: Metadata = {
  title: "Shopify Activates 'Agentic Storefronts' by Default in ChatGPT — March 2026 | ObjectWire",
  description:
    "Shopify notified its millions of merchants on March 11, 2026 that 'Agentic Storefronts' will be activated by default for all eligible U.S. stores in late March — automatically syndicating products into ChatGPT conversations. Meanwhile, OpenAI has quietly walked back in-chat Instant Checkout.",
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
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Shopify Activates 'Agentic Storefronts' by Default in ChatGPT",
    description:
      "Shopify's millions of merchants will have their products auto-syndicated into ChatGPT starting late March 2026 — no app install required. But in-chat checkout is already dead. Tax complexity, inventory sync failures, and a 14% consumer trust problem killed it.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-03-18T14:00:00Z',
    modifiedTime: '2026-03-18T14:00:00Z',
    section: 'Technology',
    tags: [
      'Shopify', 'ChatGPT', 'OpenAI', 'Agentic Commerce',
      'E-Commerce', 'AI', 'Retail', 'SaaS', 'Merchants',
      'Instant Checkout', 'Product Discovery',
    ],
    images: [
      {
        url: 'https://www.objectwire.org/shopify/shopify.PNG',
        alt: 'Shopify Agentic Storefronts ChatGPT Integration 2026',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shopify Activates 'Agentic Storefronts' by Default in ChatGPT",
    description:
      "Discovery is now default — but checkout is dead. Shopify auto-syndicates products into ChatGPT starting late March 2026. OpenAI quietly killed in-chat payments over tax complexity, inventory chaos, and a 14% consumer trust floor.",
  },
  other: {
    news_keywords:
      'Shopify ChatGPT agentic storefronts, Shopify AI discovery default, OpenAI Instant Checkout cancelled, agentic commerce 2026, Shopify merchant AI syndication, ChatGPT shopping integration, Shopify admin AI settings',
  },
};

export default function ShopifyAgenticStorefrontsChatGPTPage() {
  return <NewsArticleDB slug="saas-news-shopify-agentic-storefronts-chatgpt-default-march-2026" />;
}
