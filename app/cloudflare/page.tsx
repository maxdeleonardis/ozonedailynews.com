import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


export const metadata: Metadata = {
  title: 'Cloudflare | CDN, Zero Trust, DDoS & Internet Security',
  description:
    'Cloudflare provides CDN, DDoS mitigation, Zero Trust networking, and edge computing to 332,000+ customers, protecting 21.3% of all websites. Revenue',
  keywords: [
    'Cloudflare',
    'Cloudflare CDN',
    'Cloudflare DDoS protection',
    'Cloudflare Workers',
    'Cloudflare Zero Trust',
    'Cloudflare WAF',
    '1.1.1.1 DNS',
    'Matthew Prince',
    'Michelle Zatlyn',
    'NET stock',
    'internet infrastructure',
    'cybersecurity',
    'edge computing',
    'content delivery network',
  ],
  alternates: {
    canonical: 'https://www.ozonenetwork.news/cloudflare',
  },
  openGraph: {
    title: 'Cloudflare | CDN, Zero Trust, DDoS Protection & Security',
    description:
      "Cloudflare protects 21.3% of all websites on the internet, operates in 330+ cities across 125+ countries, and blocks 215 billion cyber threats per day.",
    type: 'article',
    url: 'https://www.ozonenetwork.news/cloudflare',
    siteName: 'ObjectWire',
    images: ['/default/cloudflare/cloudflare.PNG'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloudflare | CDN, Zero Trust, DDoS Protection & Security',
    description:
      'CDN, DDoS mitigation, Zero Trust networking, and edge computing for the modern internet.',
    images: ['/default/cloudflare/cloudflare.PNG'],
  },
};

export default function CloudflarePage() {
  return <ArticlePageDB slug="cloudflare" />;
}
