import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/news/tether-fasset-gold-visa-card-xaut-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Tether and Fasset Launch Gold-Backed Visa Card | XAU₮ 2026',
  description:
    'Tether and Fasset launched the world\'s first gold-backed Visa card on April 27, 2026. XAU₮ holders can now spend physical gold at any Visa merchant worldwide using the new Scudo unit.',
  keywords: [
    'Tether gold Visa card',
    'Fasset XAU gold card',
    'Tether Gold Visa 2026',
    'XAUT Visa card launch',
    'gold-backed crypto card',
    'Fasset Islamic digital bank',
    'Paolo Ardoino gold payments',
    'Tether Gold XAU₮ spending',
    'Scudo unit Tether Gold',
    'gold stablecoin Visa card',
    'Fasset Malaysia banking license',
    'crypto Visa card 2026',
    'gold as medium of exchange crypto',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Tether & Fasset Launch World\'s First Gold-Backed Visa Card',
    description:
      'Physical gold now spendable at millions of merchants worldwide. Tether and Fasset unveiled the XAU₮-powered Visa card on April 27, converting gold to USD at point of sale.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Conan Boyle'],
    publishedTime: '2026-04-28T18:00:00Z',
    modifiedTime: '2026-04-28T18:00:00Z',
    section: 'Crypto',
    tags: ['Tether', 'Fasset', 'Gold', 'Visa', 'Stablecoin'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Credit card held up against a blurred background' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tether Gold is Now Spendable at Any Visa Merchant Worldwide',
    description:
      'Tether and Fasset launched the world\'s first gold-backed Visa card. XAU₮ converts to USD at the point of sale. $2.67B in gold reserves backing it.',
    images: [OG_IMAGE],
  },
};

export default function CryptoNewsTetherFassetGoldVisaCardXaut2026Page() {
  return <NewsArticleDB slug="crypto-news-tether-fasset-gold-visa-card-xaut-2026" />;
}
