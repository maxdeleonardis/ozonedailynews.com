import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Apple Set to Announce at Least Five New Products in Early March 2026 Via Multi-Day Press Releases | ObjectWire',
  description: 'Apple plans to unveil five-plus hardware products between March 2-4, 2026, including low-cost MacBook, iPhone 17e, iPad updates, and MacBook Air/Pro refreshes with Apple Experience events.',
  keywords: ['Apple March 2026 announcements', 'new MacBook 2026', 'iPhone 17e', 'MacBook Air M5', 'MacBook Pro M5', 'iPad 12th generation', 'iPad Air M4', 'Apple Experience event', 'Tim Cook March 2026', 'Apple spring launch 2026'],
  alternates: { canonical: 'https://www.objectwire.org/microsoft/news/apple-five-new-products-march-2026' },
  openGraph: {
    title: 'Apple Set to Announce Five-Plus New Products in March 2026',
    description: 'Low-cost MacBook, iPhone 17e, iPad refreshes, and MacBook Air/Pro with M5 chips expected March 2-4, 2026.',
    type: 'article', url: 'https://www.objectwire.org/microsoft/news/apple-five-new-products-march-2026', siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'], publishedTime: '2026-03-05T10:00:00Z', modifiedTime: '2026-03-05T10:00:00Z',
    section: 'Technology', tags: ['Apple', 'MacBook', 'iPhone', 'iPad', 'M5', 'WWDC'],
  },
  twitter: { card: 'summary_large_image', title: 'Apple Unveiling Five-Plus Products in March 2026', description: 'New MacBook, iPhone 17e, iPads, and MacBook Air/Pro M5 chips via multi-day press releases.' },
};

export default function AppleMarchProductsPage() {
  return <WikiArticle slug="microsoft-news-apple-five-new-products-march-2026" />;
}
