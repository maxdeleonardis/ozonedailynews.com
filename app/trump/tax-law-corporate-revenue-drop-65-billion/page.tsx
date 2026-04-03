import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/tax-law-corporate-revenue-drop-65-billion';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1585922321747-3adc9f3c31e4?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Trump Tax Law | Corporate Revenue Down $65B, Analysis Finds',
  description:
    'A Bloomberg analysis of the 50 largest U.S. public companies found the Trump tax law cut federal corporate tax revenue by $65 billion annually, concentrated at Amazon, Walmart, and Verizon.',
  keywords: [
    'Trump tax law corporate revenue 2026',
    'Trump tax cuts $65 billion analysis',
    'Bloomberg corporate tax study 2026',
    'Amazon tax savings 2026',
    'corporate tax rate 21 percent impact',
    'bonus depreciation tax revenue',
    'QBI deduction pass-through entities',
    'repatriation holiday offshore cash',
    '2026 refund supercycle IRS',
    'Walmart Verizon tax savings 2026',
    'Tax Cuts and Jobs Act revenue impact',
    'S&P 500 federal income tax 2026',
    'Senate Finance Committee Warren tax hearing',
    'national debt ceiling corporate tax gap',
    'Trump supply-side tax policy GDP growth',
    'corporate tax carryforward 2026',
    'expanded child tax credit refund 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Trump Tax Law | $65B Corporate Revenue Drop, Analysis Finds',
    description:
      'Bloomberg study of 50 major U.S. firms shows Amazon saved $12.4B, Walmart $8.2B, and Verizon $6.1B annually, accounting for nearly 40% of a $65 billion federal revenue shortfall.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-02T14:00:00Z',
    modifiedTime: '2026-04-02T14:00:00Z',
    section: 'Politics',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'United States Capitol Building, Washington D.C.' }],
    tags: ['Trump', 'Tax Law', 'Corporate Tax', 'Bloomberg', 'Amazon', 'IRS'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump Tax Law Cut Corporate Revenue by $65B, Bloomberg Finds',
    description: 'Amazon saved $12.4B. Walmart saved $8.2B. Verizon saved $6.1B. Together: 40% of a $65B federal gap.',
    images: [OG_IMAGE],
  },
};

export default function TrumpTaxLawCorporateRevenueDrop65BillionPage() {
  return <JackArticleDB slug="trump-tax-law-corporate-revenue-drop-65-billion" />;
}
