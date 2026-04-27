import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/finance/news/bhp-corex-yuan-iron-ore-index-cmrg-de-dollarization-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'BHP COREX Index Deal | Yuan Iron Ore Pricing, De-Dollarization 2026',
  description:
    'BHP agreed to a 26% COREX yuan-linked index weighting in long-term iron ore contracts with China Mineral Resources Group, the first Big Four miner to accept Chinese portside pricing benchmarks.',
  keywords: [
    'BHP COREX index agreement 2026',
    'BHP yuan iron ore pricing',
    'China iron ore yuan settlement CMRG',
    'COREX 61% portside index BHP',
    'BHP Jimblebar fines China contract',
    'iron ore de-dollarization 2026',
    'petroyuan iron ore pricing',
    'BHP China Mineral Resources Group deal',
    'Hormuz toll yuan payment IRGC',
    'petroyuan vs petrodollar 2026',
    'iron ore yuan pricing impact steel mills',
    'BHP 1.8% vessel rebate China',
    'Platts Argus iron ore benchmark replacement',
    'renminbi commodity pricing 2026',
    'BHP Q2 revenue COREX impact',
    'Rio Tinto Vale yuan pricing pressure',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'BHP Breaks Ranks | Yuan-Linked COREX Index Enters Iron Ore Contracts for First Time',
    description:
      'BHP agreed a 26% COREX portside weighting in Jimblebar fines contracts with CMRG through FY2027. The first Big Four miner concession to Chinese yuan benchmarks lands as the Hormuz toll forces RMB reserves across global shipping.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-26T22:00:00Z',
    modifiedTime: '2026-04-26T22:00:00Z',
    section: 'Finance',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Iron ore mining operations representing BHP\'s new yuan-linked COREX index deal with China Mineral Resources Group',
      },
    ],
    tags: ['BHP', 'Iron Ore', 'Yuan', 'COREX Index', 'De-Dollarization', 'China'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BHP Accepts Yuan-Linked Pricing for Iron Ore | First Big Four Miner to Concede to COREX Index',
    description:
      '26% COREX weighting in Jimblebar fines contracts. 1.8% vessel rebate to settle the port-ban dispute. The Hormuz toll is forcing global shipping into RMB reserves — now it\'s hitting mining contracts too.',
    images: [OG_IMAGE],
  },
};

export default function FinanceNewsBhpCorexYuanIronOreIndexCmrgDeDollarization2026Page() {
  return <NewsArticleDB slug="finance-news-bhp-corex-yuan-iron-ore-index-cmrg-de-dollarization-2026" />;
}
