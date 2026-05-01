import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


export const metadata: Metadata = {
  title: "Davos 2026: World Economic Forum Annual Meeting | Key",
  description: "Complete coverage of the 2026 World Economic Forum in Davos, Switzerland. AI governance, climate action, global economic outlook, and tech industry",
  keywords: [
    "Davos 2026",
    "World Economic Forum",
    "WEF 2026",
    "Davos Switzerland",
    "global leaders summit",
    "AI regulation",
    "climate change",
    "economic forum",
    "Klaus Schwab",
    "Great Reset",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/davos',
  },
  openGraph: {
    title: "Davos 2026: World Economic Forum Annual Meeting Coverage",
    description: "Inside the 2026 World Economic Forum in Davos - AI governance, tech leaders, and global economic policy discussions.",
    type: "article",
    url: "https://www.objectwire.org/davos",
    images: [
      {
        url: "https://www.objectwire.org/images/davos-2026-og.jpg",
        width: 1200,
        height: 630,
        alt: "Davos 2026 World Economic Forum",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davos 2026: World Economic Forum Annual Meeting Coverage',
    description: 'Inside the 2026 World Economic Forum in Davos - AI governance, tech leaders, and global economic policy discussions.',
  },
};

export default function DavosPage() {
  return <WikiArticle slug="events-davos" />;
}
