import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Hedera vs Solana For Decentralized Apps - ObjectWire.org",
  description: "Hedera and Solana represent two prominent platforms in the rapidly evolving landscape of decentralized applications (dApps).",
  alternates: {
    canonical: 'https://www.objectwire.org/hedera-vs-solana-for-dapps',
  },
};

export default function HederaVsSolanaPage() {
  return <WikiArticle slug="define-hedera-vs-solana-for-dapps" />;
}
