import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/lawsuit/california-files-againast-amazon-after-emails-reveiled';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'California vs Amazon | Unsealed Emails Reveal Artificial Price Floor Scheme',
  description: "Unsealed court emails from April 20, 2026 show Amazon pressuring Levi's and pet food brands to raise prices on rival sites. Trial begins January 19, 2027 in San Francisco Superior Court.",
  keywords: [
    'California Amazon lawsuit',
    'Amazon antitrust 2026',
    'California vs Amazon price fixing',
    'Amazon artificial price floors',
    'Rob Bonta Amazon lawsuit',
    'Amazon Buy Box antitrust',
    'Levi Strauss Amazon price collusion',
    'Amazon Project Nessie',
    'Amazon unsealed emails 2026',
    'Amazon Walmart price fixing',
    'California antitrust Amazon trial 2027',
    'Amazon price parity policy',
    'Amazon search suppression antitrust',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'California vs Amazon | Unsealed Emails Show Price Floor Scheme',
    description: "Unsealed emails show Amazon flagged Levi's 'styles of concern' when Walmart undercut prices — and Levi's raised Walmart's prices the next day. Trial set for January 2027.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Legal Desk'],
    publishedTime: '2026-04-21T00:00:00Z',
    modifiedTime: '2026-04-21T00:00:00Z',
    section: 'News',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Amazon antitrust lawsuit California 2026' }],
    tags: ['Amazon', 'Antitrust', 'California', 'Rob Bonta', 'Retail'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Unsealed emails show Amazon told Levi's Walmart was selling cheaper — Levi's raised Walmart's price the next day",
    description: "California's antitrust case against Amazon just got a lot more specific. Trial starts January 19, 2027.",
    images: [OG_IMAGE],
  },
};

export default function LawsuitCaliforniaFilesAgainastAmazonAfterEmailsReveiledPage() {
  return <NewsArticleDB slug="lawsuit-california-files-againast-amazon-after-emails-reveiled" />;
}
