import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "What is $ Texit an Investment a Stablecoin, or Scam? - ObjectWire.org",
  description: "More like a digital mirage right now that could someday form into a real asset. $TXC (TEXITcoin) is a volatile, mineable cryptocurrency hyped as a Texas independence token.",
  alternates: {
    canonical: 'https://www.objectwire.org/define/crypto/txc-stablecoin',
  },
};

export default function TexitCoinPage() {
  return <WikiArticle slug="define-crypto-txc-stablecoin" />;
}
