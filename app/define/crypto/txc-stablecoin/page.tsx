import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "What is $ Texit an Investment a Stablecoin, or Scam?",
  description: "More like a digital mirage right now that could someday form into a real asset. $TXC (TEXITcoin) is a volatile, mineable cryptocurrency hyped as a Texas",
  alternates: {
    canonical: 'https://www.objectwire.org/define/crypto/txc-stablecoin',
  },
  openGraph: {
    title: "What is $ Texit an Investment a Stablecoin, or Scam?",
    description: "More like a digital mirage right now that could someday form into a real asset. $TXC (TEXITcoin) is a volatile, mineable cryptocurrency hyped as a Texas",
    type: 'article',
    url: "https://www.objectwire.org/define/crypto/txc-stablecoin",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "What is $ Texit an Investment a Stablecoin, or Scam?",
    description: "More like a digital mirage right now that could someday form into a real asset. $TXC (TEXITcoin) is a volatile, mineable cryptocurrency hyped as a Texas",
  },
};

export default function TexitCoinPage() {
  return <WikiArticle slug="define-crypto-txc-stablecoin" />;
}
