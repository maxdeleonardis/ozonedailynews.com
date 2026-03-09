import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Proof of Engagement Blockchain vs Proof of Authority: Consensus Mechanisms Compared | ObjectWire",
  description: "Comprehensive comparison of Proof of Engagement and Proof of Authority blockchain consensus mechanisms. Learn how each works, their benefits, drawbacks, and real-world applications.",
  keywords: ["Proof of Engagement", "Proof of Authority", "blockchain consensus", "PoE", "PoA", "cryptocurrency", "blockchain technology", "consensus mechanisms"],
  alternates: {
    canonical: 'https://www.objectwire.org/proof-of-engagement-blockchain-vs-proof-of-authority',
  },
};

export default function ProofOfEngagementVsProofOfAuthorityPage() {
  return <WikiArticle slug="define-proof-of-engagement-blockchain-vs-proof-of-authority" />;
}
