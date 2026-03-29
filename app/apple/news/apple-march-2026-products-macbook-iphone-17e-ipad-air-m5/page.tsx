import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG =
  '/apple/news/apple-march-2026-products-macbook-iphone-17e-ipad-air-m5';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/apple/apple-march-2026-products-macbook-iphone-17e-event.jpg';

export const metadata: Metadata = {
  title:
    'Apple Set to Announce at Least Five New Products March 2–4, 2026: MacBook, iPhone 17e, iPad, MacBook Air M5 | ObjectWire',
  description:
    'Apple plans to unveil at least five new hardware products between March 2 and March 4, 2026, via press releases and hands-on Apple Experience events in New York, London, and Shanghai, including a new entry-level MacBook, iPhone 17e, iPad refreshes, and MacBook Air M5.',
  keywords: [
    'Apple March 2026 products announcement',
    'Apple Experience event March 4 2026',
    'new MacBook entry-level 2026 A18 Pro chip',
    'iPhone 17e specs release date 2026',
    'iPad 12th generation A18 chip 2026',
    'iPad Air M4 chip 2026',
    'MacBook Air M5 2026',
    'MacBook Pro M5 Pro M5 Max 2026',
    'Apple five products March 2026',
    'Tim Cook big week March 2026',
    'Apple spring 2026 hardware lineup',
    'Apple no keynote press release March 2026',
    'Mac Studio 2026 update',
    'Apple Studio Display 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      'Apple March 2–4, 2026: Five-Plus Products, No Keynote, MacBook, iPhone 17e, iPad, MacBook Air M5',
    description:
      "Apple's Tim Cook confirmed a 'big week' starting March 2, five or more products dropped via press releases over three days, with hands-on Apple Experience sessions March 4 in New York, London, and Shanghai.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T16:00:00Z',
    modifiedTime: '2026-03-01T20:00:00Z',
    section: 'Technology',
    tags: [
      'Apple',
      'MacBook',
      'iPhone 17e',
      'iPad',
      'MacBook Air',
      'MacBook Pro',
      'M5',
      'A18',
      'Apple Experience',
      'March 2026',
      'Tim Cook',
      'Technology',
      'Hardware',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Apple Drops Five-Plus Products March 2–4, 2026, MacBook, iPhone 17e, iPad Air M4, MacBook Air M5',
    description:
      'No keynote. Just press releases, three days, and at least five new products, entry MacBook, iPhone 17e, iPad refreshes, and the full MacBook Air/Pro M5 lineup. Apple Experience hands-on March 4.',
    images: [IMAGE_URL],
  },
};

export default function AppleMarch2026ProductsPage() {
  return <JackArticleDB slug="apple-news-apple-march-2026-products-macbook-iphone-17e-ipad-air-m5" />;
}
