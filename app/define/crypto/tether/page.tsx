import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Tether (USDT) | What Is It? Stablecoin, Reserves & History',
  description:
    'Tether (USDT) is the world\'s largest stablecoin by market cap, pegged 1:1 to the US dollar. Learn how Tether works, its reserve backing, Tether Gold',
  keywords: [
    'Tether',
    'USDT',
    'stablecoin',
    'Tether Investments',
    'Tether Gold',
    'XAUT',
    'cryptocurrency',
    'crypto stablecoin',
    'dollar pegged crypto',
    'Tether reserves',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/crypto/tether',
  },
  openGraph: {
    title: 'Tether (USDT) | World\'s Largest Stablecoin',
    description:
      'Full profile of Tether: how it works, its reserve structure, Tether Gold (XAUT), controversies, and its expanding investment arm.',
    type: 'article',
    url: 'https://www.objectwire.org/define/crypto/tether',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tether (USDT) | World\'s Largest Stablecoin',
    description: 'How Tether works, what backs it, and why it matters for the entire crypto market.',
  },
};

export default function TetherPage() {
  return <WikiArticle slug="define-crypto-tether" />;
}
