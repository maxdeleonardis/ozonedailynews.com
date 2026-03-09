import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Yeat - Rage Rap Pioneer & Chart-Topping Artist | ObjectWire",
  description:
    "Complete profile of Yeat, the rage rap phenomenon dominating modern hip-hop. Discography, tour dates, streaming stats, and latest news.",
  keywords: [
    "Yeat",
    "rage rap",
    "hip-hop",
    "Sorry Bout That",
    "Lyfestyle",
    "streaming artist",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/artists/yeat',
  },
};

export default function YeatPage() {
  return <WikiArticle slug="artists-yeat" />;
}
