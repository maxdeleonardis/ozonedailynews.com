import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Winter Olympics 2026 Closing Ceremony | Everything You Need',
  description:
    'The 2026 Milano Cortina Winter Olympics closing ceremony takes place February 22 at the Verona Arena. Date, time, performers, how to watch, the Olympic',
  keywords: [
    'Winter Olympics 2026 closing ceremony',
    'Milano Cortina 2026 closing',
    'Verona Arena ceremony',
    'Olympics closing ceremony February 22',
    'Beauty in Action',
    'Roberto Bolle',
    'Achille Lauro',
    '2030 French Alps Olympics',
    'Olympic flag handoff',
    'how to watch closing ceremony',
  ],
  openGraph: {
    title: 'Winter Olympics 2026 Closing Ceremony | Date, Time',
    description:
      'Everything you need to know about the Milano Cortina 2026 closing ceremony at the Verona Arena on February 22, performers, flag handoff to 2030, medal',
    type: 'article',
    publishedTime: '2026-02-22T10:00:00Z',
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/final-ceremony',
    images: [
      {
        url: 'https://www.objectwire.org/winter-olympics-2026-og.jpg',
        width: 1200,
        height: 630,
        alt: '2026 Milano Cortina Winter Olympics Closing Ceremony at the Verona Arena',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winter Olympics 2026 Closing Ceremony | Everything You Need',
    description:
      'Feb 22 · Verona Arena · 2:30 PM ET · Roberto Bolle, Achille Lauro, Olympic flag to France. The full guide.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/final-ceremony',
  },
};

export default function ClosingCeremonyPage() {
  return <WikiArticle slug="winter-olympics-final-ceremony" />;
}
