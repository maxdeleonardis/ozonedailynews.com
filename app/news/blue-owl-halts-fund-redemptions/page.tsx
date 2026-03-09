import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Blue Owl Halts Fund Redemptions, Sparking Private Credit Selloff | ObjectWire",
  description: "Blue Owl Capital permanently halts quarterly redemptions for retail private credit fund OBDC II amid $1.4B asset sale, triggering selloff across private credit markets.",
  alternates: {
    canonical: 'https://www.objectwire.org/news/blue-owl-halts-fund-redemptions',
  },
  keywords: ['Blue Owl Capital', 'fund redemptions', 'private credit', 'OBDC II', 'BDC', 'alternative assets', 'liquidity crisis', 'Blackstone', 'Mohamed El-Erian'],
};

export default function BlueOwlRedemptionsPage() {
  return <WikiArticle slug="news-blue-owl-halts-fund-redemptions" />;
}
