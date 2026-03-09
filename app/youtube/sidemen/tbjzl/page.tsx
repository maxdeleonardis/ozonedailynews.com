import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "TBJZL (Tobi Brown) — Sidemen Athlete & Positive Energy Icon | ObjectWire",
  description: "Complete profile of TBJZL (Tobi Brown): Sidemen member's infectious laugh, athletic charity match performances, positive energy, Nigerian-British heritage, and 5M+ subscribers. 2026 coverage.",
  keywords: [
    "TBJZL",
    "Tobi Brown",
    "TBJZL Sidemen",
    "Tobi Brown charity match",
    "TBJZL athletic ability",
    "TBJZL infectious laugh",
    "Tobi Brown 2026",
    "TBJZL Nigerian British",
    "TBJZL positive energy",
    "Tobi Brown football"
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/tbjzl',
  },
  openGraph: {
    title: 'TBJZL (Tobi Brown) — Sidemen Athlete & Positive Vibes',
    description: 'Full profile of TBJZL: infectious laugh, charity match athleticism, positive energy, and Nigerian-British representation in UK content creation.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/sidemen/tbjzl',
    siteName: 'ObjectWire',
    section: 'YouTube',
  },
};

export default function TBJZLPage() {
  return <WikiArticle slug="youtube-sidemen-tbjzl" />;
}
