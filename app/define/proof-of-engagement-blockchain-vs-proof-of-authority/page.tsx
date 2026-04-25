import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Proof of Engagement Blockchain vs Proof of Authority | Conse",
  description: "Comprehensive comparison of Proof of Engagement and Proof of Authority blockchain consensus mechanisms. Learn how each works, their benefits, drawbacks,",
  keywords: ["Proof of Engagement", "Proof of Authority", "blockchain consensus", "PoE", "PoA", "cryptocurrency", "blockchain technology", "consensus mechanisms"],
  alternates: {
    canonical: 'https://www.objectwire.org/proof-of-engagement-blockchain-vs-proof-of-authority',
  },
  openGraph: {
    title: "Proof of Engagement Blockchain vs Proof of Authority | Conse",
    description: "Comprehensive comparison of Proof of Engagement and Proof of Authority blockchain consensus mechanisms. Learn how each works, their benefits, drawbacks,",
    type: 'article',
    url: "https://www.objectwire.org/proof-of-engagement-blockchain-vs-proof-of-authority",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Proof of Engagement Blockchain vs Proof of Authority | Conse",
    description: "Comprehensive comparison of Proof of Engagement and Proof of Authority blockchain consensus mechanisms. Learn how each works, their benefits, drawbacks,",
  },
};

export default function ProofOfEngagementVsProofOfAuthorityPage() {
  return <WikiArticle slug="define-proof-of-engagement-blockchain-vs-proof-of-authority" />;
}
