import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/news/anchorage-digital-tron-institutional-custody-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1578286788444-8c1487fcd823?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Anchorage Digital Adds TRON to U.S. Institutional',
  description:
    'Anchorage Digital, the only U.S. federally chartered crypto bank, has integrated TRON blockchain. Institutional TRX custody, TRC-20 support, and staking',
  keywords: [
    'Anchorage Digital TRON integration',
    'TRON institutional custody 2026',
    'Anchorage Digital TRX',
    'TRON TRC-20 institutional',
    'Anchorage Digital federally chartered crypto bank',
    'TRON stablecoin settlement',
    'TRON USDT stablecoin',
    'Justin Sun SEC settlement',
    'TRON regulatory reset 2026',
    'Nathan McCauley Anchorage Digital',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Anchorage Digital Integrates TRON | Institutional TRX',
    description:
      'The only U.S. federally chartered crypto bank has added TRON to its regulated platform, offering institutional-grade TRX custody with TRC-20 and staking',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [
      {
        url: `https://www.objectwire.org${OG_IMAGE}`,
        width: 1200,
        height: 675,
        alt: 'Anchorage Digital TRON institutional custody 2026',
      },
    ],
    publishedTime: '2026-03-30T12:00:00Z',
    section: 'Crypto',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anchorage Digital Adds TRON | First Regulated U.S. TRX',
    description:
      'Anchorage Digital has integrated TRON into its federally chartered crypto bank platform. TRX custody is live now, with TRC-20 and staking coming in later',
    images: [`https://www.objectwire.org${OG_IMAGE}`],
  },
};

export default function CryptoNewsAnchorageDigitalTronInstitutionalCustody2026Page() {
  return <NewsArticleDB slug="crypto-news-anchorage-digital-tron-institutional-custody-2026" />;
}
