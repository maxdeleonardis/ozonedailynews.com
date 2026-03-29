import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Vikkstar123 (Vikram Barn) | Warzone Legend & Gaming Entrepreneur | ObjectWire",
  description: "Complete profile of Vikkstar123 (Vikram Barn): Warzone dominance, business ventures, Minecraft legacy, poker career, and entrepreneurial success. 7M+ subscribers. 2026 coverage.",
  keywords: [
    "Vikkstar123",
    "Vikram Barn",
    "Vikkstar Warzone",
    "Vikkstar business ventures",
    "Vikram Barn entrepreneur",
    "Vikkstar 2026",
    "Vikkstar poker",
    "Minecraft Vikkstar",
    "Vikkstar tournaments",
    "Sidemen Vikkstar"
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/vikkstar',
  },
  openGraph: {
    title: 'Vikkstar123 (Vikram Barn) | Gaming Empire & Business Success',
    description: 'Full profile of Vikkstar: Warzone tournament wins, business investments, Minecraft dominance, poker career, and entrepreneurial ventures.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/sidemen/vikkstar',
    siteName: 'ObjectWire',
    section: 'YouTube',
  },
};

export default function VikkstarPage() {
  return <ArticlePageDB slug="youtube-sidemen-vikkstar" />;
}
