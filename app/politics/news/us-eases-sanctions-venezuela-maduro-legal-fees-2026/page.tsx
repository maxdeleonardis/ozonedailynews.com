import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/politics/news/us-eases-sanctions-venezuela-maduro-legal-fees-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'US Eases Venezuela Sanctions | Maduro Legal Fees Approved',
  description:
    'The US Treasury modified Venezuela sanctions to allow Maduro and Cilia Flores to fund their federal drug trafficking defense. Judge Hellerstein warned constitutional counsel rights are paramount.',
  keywords: [
    'Venezuela sanctions eased Maduro 2026',
    'Maduro legal fees OFAC license',
    'Venezuela drug trafficking prosecution',
    'Cilia Flores indictment 2026',
    'OFAC Venezuela amended license',
    'Jay Clayton US Attorney Maduro',
    'Barry Pollack Maduro defense',
    'Judge Alvin Hellerstein Venezuela',
    'Maduro Sixth Amendment right to counsel',
    'Venezuela US diplomatic relations 2026',
    'Maduro federal charges New York',
    'US Venezuela diplomacy sanctions 2026',
    'Maduro motion to dismiss withdrawn',
    'Kyle Wirshba Maduro prosecutor',
    'Venezuela OFAC Treasury 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'US Eases Venezuela Sanctions to Fund Maduro\'s Defense',
    description:
      'Treasury\'s OFAC issued amended licenses allowing Venezuela to cover Maduro and Flores\'s legal costs. Defense withdrew dismissal motion. Trial hearing set in 60 days.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Marcus Webb'],
    publishedTime: '2026-04-25T14:00:00Z',
    modifiedTime: '2026-04-25T14:00:00Z',
    section: 'Politics',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Federal courthouse exterior representing Maduro drug trafficking case in Manhattan' }],
    tags: ['Venezuela', 'Nicolas Maduro', 'OFAC', 'US Sanctions', 'Federal Prosecution'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'US Lets Venezuela Pay Maduro\'s Legal Fees | Sanctions Modified',
    description:
      'Treasury amended OFAC licenses so Venezuela can fund Maduro\'s drug trafficking defense. Judge questioned whether Maduro still poses any national security threat.',
    images: [OG_IMAGE],
  },
};

export default function PoliticsNewsUsEasesSanctionsVenezuelaMaduroLegalFees2026Page() {
  return <NewsArticleDB slug="politics-news-us-eases-sanctions-venezuela-maduro-legal-fees-2026" />;
}
