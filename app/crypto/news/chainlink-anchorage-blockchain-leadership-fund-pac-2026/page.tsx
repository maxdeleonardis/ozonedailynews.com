import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/news/chainlink-anchorage-blockchain-leadership-fund-pac-2026';
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Chainlink, Anchorage Launch Blockchain Leadership Fund PAC',
  description:
    'Chainlink Labs and Anchorage Digital joined as founding contributors to the Blockchain Leadership Fund, a new bipartisan hybrid PAC organized by The',
  keywords: [
    'Blockchain Leadership Fund PAC',
    'Chainlink Labs PAC 2026',
    'Anchorage Digital PAC 2026',
    'crypto political action committee 2026',
    'Digital Chamber PAC',
    'CLARITY Act crypto 2026',
    'GENIUS Act stablecoin 2026',
    'Fairshake PAC crypto',
    'crypto midterms 2026',
    'blockchain policy Washington DC',
    'Chainlink Anchorage Digital partnership',
    'crypto lobbying 2026',
    'digital asset policy PAC',
    'hybrid PAC crypto',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Chainlink, Anchorage Launch Blockchain Leadership Fund PAC for 2026 Midterms',
    description:
      'A new bipartisan hybrid PAC backed by Chainlink Labs and Anchorage Digital is targeting the CLARITY Act and GENIUS Act ahead of November 2026, as the',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-31T14:00:00Z',
    modifiedTime: '2026-03-31T14:00:00Z',
    section: 'Finance',
    tags: ['Chainlink', 'Anchorage Digital', 'Crypto Policy', 'PAC', 'CLARITY Act', 'GENIUS Act'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chainlink, Anchorage launch crypto PAC 7 months before midterms',
    description:
      'The Blockchain Leadership Fund is a new bipartisan hybrid PAC backed by Chainlink Labs and Anchorage Digital, targeting the CLARITY Act and GENIUS Act in',
  },
};

export default function CryptoNewsChainlinkAnchorageBlockchainLeadershipFundPac2026Page() {
  return <NewsArticleDB slug="crypto-news-chainlink-anchorage-blockchain-leadership-fund-pac-2026" />;
}
