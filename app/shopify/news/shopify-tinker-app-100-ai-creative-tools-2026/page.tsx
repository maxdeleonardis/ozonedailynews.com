import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/shopify/news/shopify-tinker-app-100-ai-creative-tools-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1736605804642-b66ad75b1c9c?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Shopify Launches Tinker | Free App With 100+ AI Creative Tools | ObjectWire',
  description:
    'Shopify released Tinker, a free iOS and Android app bundling 100+ AI creative tools for merchants and entrepreneurs. First previewed at Winter 26 Editions, now publicly available.',
  keywords: [
    'Shopify Tinker app',
    'Shopify AI tools 2026',
    'Tinker app iOS Android',
    'Shopify creative tools',
    'Shopify Winter 26 Editions',
    'AI tools for merchants',
    'Shopify free app',
    'ecommerce AI tools 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Shopify Launches Tinker | Free App With 100+ AI Creative Tools | ObjectWire',
    description:
      'Shopify released Tinker, a free mobile app bundling more than 100 specialized AI tools for merchants and entrepreneurs. Available now on iOS and Android.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'E-commerce UI design representing Shopify Tinker AI creative tools app' }],
    publishedTime: '2026-03-30T23:30:00Z',
    modifiedTime: '2026-03-30T23:30:00Z',
    section: 'Tech',
    tags: ['Shopify', 'Tinker', 'AI Tools', 'Ecommerce', 'Mobile App', 'Merchants', 'Entrepreneurs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Launches Tinker | 100+ Free AI Creative Tools',
    description:
      'Shopify released Tinker, a free iOS and Android app with 100+ AI creative tools for merchants, first previewed at Winter 26 Editions.',
    images: [OG_IMAGE],
  },
};

export default function ShopifyNewsShopifyTinkerApp100AiCreativeTools2026Page() {
  return <JackArticleDB slug="shopify-news-shopify-tinker-app-100-ai-creative-tools-2026" />;
}
