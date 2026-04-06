import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Hedera Team Visits Sam Altman's Offices - ObjectWire.org",
  description: "Sam Altman's visit with Hedera's team sparked significant interest within the tech community, focusing attention on the potential synergies between AI and",
  alternates: {
    canonical: 'https://www.objectwire.org/sam-altman-visits-hedera-team',
  },
};

export default function SamAltmanHederaPage() {
  return <WikiArticle slug="saas-news-sam-altman-visits-hedera-team" />;
}
