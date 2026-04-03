import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Cloudflare, Inc. | Internet Infrastructure, CDN, Cybersecurity & Developer Platform | ObjectWire',
  description:
    "Cloudflare is one of the world's largest internet infrastructure companies, providing CDN, DDoS mitigation, cybersecurity, Zero Trust networking, and edge computing to over 332,000 paying customers, protecting 21.3% of all websites as of early 2026.",
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
    canonical: 'https://www.objectwire.org/cloudflare',
  },
  openGraph: {
    title: 'Cloudflare, Inc. | Internet Infrastructure, CDN & Cybersecurity',
    description:
      "Cloudflare protects 21.3% of all websites on the internet, operates in 330+ cities across 125+ countries, and blocks 215 billion cyber threats per day. Revenue reached $2.168B in FY 2025.",
    type: 'article',
    url: 'https://www.objectwire.org/cloudflare',
    siteName: 'ObjectWire',
    images: ['/default/cloudflare/cloudflare.PNG'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloudflare, Inc. | ObjectWire',
    description:
      'CDN, DDoS mitigation, Zero Trust networking, and edge computing for the modern internet.',
    images: ['/default/cloudflare/cloudflare.PNG'],
  },
};

export default function CloudflarePage() {
  return <ArticlePageDB slug="cloudflare" />;
}
