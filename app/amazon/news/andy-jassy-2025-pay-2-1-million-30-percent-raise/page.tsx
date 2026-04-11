import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/amazon/news/andy-jassy-2025-pay-2-1-million-30-percent-raise';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1643083348068-f81ae31d055a?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Amazon CEO Andy Jassy 2025 Pay Rises 30% to $2.1M',
  description: 'Amazon CEO Andy Jassy earned $2.1 million in total compensation for 2025, a 30% increase driven by rising security costs. His unvested stock is worth $242 million.',
  keywords: [
    'how much does Amazon CEO Jassy make',
    'Andy Jassy salary 2025',
    'Andy Jassy compensation 2025',
    'Amazon CEO pay 2025',
    'Andy Jassy $2.1 million',
    'Andy Jassy stock awards',
    'Amazon proxy statement 2025',
    'Andy Jassy security costs',
    'Amazon CEO total compensation',
    'Amazon executive pay 2025',
    'Andy Jassy net worth 2026',
    'Amazon 30000 layoffs CEO pay',
    'Brian Olsavsky compensation',
    'Matt Garman AWS pay',
    'Amazon $200 billion capex AI',
    'Amazon median employee pay 2025',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Amazon CEO Andy Jassy 2025 Pay Rises 30% to $2.1 Million',
    description: 'Jassy\'s base salary stayed flat at $365K for the 4th year. Security and travel costs drove the increase. $242M in unvested stock. Amazon cutting 30,000 jobs.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-11T22:00:00Z',
    modifiedTime: '2026-04-11T22:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Amazon Spheres headquarters in Seattle where CEO Andy Jassy leads the company' }],
    tags: ['Amazon', 'Andy Jassy', 'CEO Pay', 'Executive Compensation', 'Tech', 'AI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon CEO Jassy Pay Rises 30% to $2.1M | $242M Unvested Stock',
    description: 'Base salary flat at $365K for 4th year. Security costs drove the increase. Meanwhile, Amazon cuts 30,000 jobs and plans $200B AI capex for 2026.',
    images: [OG_IMAGE],
  },
};

export default function AmazonNewsAndyJassy2025Pay21Million30PercentRaisePage() {
  return <NewsArticleDB slug="amazon-news-andy-jassy-2025-pay-2-1-million-30-percent-raise" />;
}
