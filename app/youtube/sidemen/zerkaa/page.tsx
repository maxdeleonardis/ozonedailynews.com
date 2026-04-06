import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Zerkaa (Josh Bradley) | Sidemen Leader & GTA RP Pioneer",
  description: "Complete profile of Zerkaa (Josh Bradley): Sidemen leadership, GTA RP content, relationship with Freya Nightingale, business acumen, and group",
  keywords: [
    "Zerkaa",
    "Josh Bradley",
    "Zerkaa Sidemen leader",
    "Josh Bradley Freya Nightingale",
    "Zerkaa GTA roleplay",
    "Zerkaa 2026",
    "Josh Bradley GTA RP",
    "Zerkaa Sidemen dad",
    "Josh Bradley business ventures",
    "Zerkaa engagement"
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen/zerkaa',
  },
  openGraph: {
    title: 'Zerkaa (Josh Bradley) | Sidemen Leader & GTA RP Creator',
    description: 'Full profile of Zerkaa: Sidemen leadership, GTA RP mastery, engagement to Freya Nightingale, business operations, and group stability role.',
    type: 'article',
    url: 'https://www.objectwire.org/youtube/sidemen/zerkaa',
    siteName: 'ObjectWire',
    section: 'YouTube',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zerkaa (Josh Bradley) | Sidemen Leader & GTA RP Creator',
    description: 'Full profile of Zerkaa: Sidemen leadership, GTA RP mastery, engagement to Freya Nightingale, business operations, and group stability role.',
  },
};

export default function ZerkaaPage() {
  return <ArticlePageDB slug="youtube-sidemen-zerkaa" />;
}
