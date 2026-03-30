import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/news/world-foundation-wld-token-sale-65-million-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1629193382974-f478714dba26?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'World Foundation Sells $65M in WLD Tokens Near All-Time Low | ObjectWire',
  description:
    'The World Foundation sold 239 million WLD tokens for $65 million through OTC deals as Worldcoin trades more than 97% below its all-time high.',
  keywords: [
    'World Foundation WLD token sale 2026',
    'Worldcoin WLD OTC sale',
    'WLD token price all-time low',
    'World Foundation fundraising 2026',
    'Worldcoin biometric identity protocol',
    'WLD token 65 million',
    'crypto OTC deal 2026',
    'World Foundation nonprofit',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'World Foundation Sells $65M in WLD Tokens Near All-Time Low | ObjectWire',
    description:
      'The World Foundation sold 239 million WLD tokens for $65 million through OTC deals as Worldcoin trades more than 97% below its all-time high.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [{ url: `https://www.objectwire.org${OG_IMAGE}`, width: 1200, height: 675, alt: 'Worldcoin WLD token' }],
    publishedTime: '2026-03-30T16:00:00Z',
    modifiedTime: '2026-03-30T16:00:00Z',
    section: 'Crypto',
    tags: ['Worldcoin', 'WLD', 'World Foundation', 'Crypto', 'OTC', 'Token Sale', 'Biometric'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Foundation Sells $65M in WLD Tokens Near All-Time Low',
    description:
      'The World Foundation sold 239 million WLD tokens for $65M through OTC deals. WLD is down more than 97% from its all-time high.',
    images: [`https://www.objectwire.org${OG_IMAGE}`],
  },
};

export default function TrumpNewsWorldFoundationWldTokenSale65Million2026Page() {
  return <NewsArticleDB slug="trump-news-world-foundation-wld-token-sale-65-million-2026" />;
}
