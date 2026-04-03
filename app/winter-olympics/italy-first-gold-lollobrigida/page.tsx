import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Italy Wins First Gold as Milano Cortina Olympics Open - Lollobrigida Sets Record | ObjectWire",
  description: "Francesca Lollobrigida set an Olympic record in women's 3,000-meter speed skating on her 35th birthday, thrilling the home crowd and securing Italy's first gold medal at the Milano Cortina 2026 Winter Olympics.",
  keywords: [
    "Francesca Lollobrigida",
    "Italy gold medal",
    "Milano Cortina 2026",
    "speed skating",
    "Olympic record",
    "3000m speed skating",
    "Winter Olympics 2026",
    "Italy Olympics",
  ],
  openGraph: {
    title: "Italy Wins First Gold: Lollobrigida's Birthday Olympic Record",
    description: "Francesca Lollobrigida thrills home crowd with Olympic record in 3,000m speed skating on her 35th birthday",
    type: "article",
    url: "https://www.objectwire.org/winter-olympics/italy-first-gold-lollobrigida",
    publishedTime: '2026-02-08T17:00:00Z',
    modifiedTime: '2026-02-08T17:00:00Z',
    authors: ['Connan Boyle'],
    images: [
      {
        url: "https://www.objectwire.org/lollobrigida-gold-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Francesca Lollobrigida celebrates gold medal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Italy's First Gold: Lollobrigida Sets Olympic Record on Birthday",
    description: "35-year-old Francesca Lollobrigida wins 3,000m speed skating gold with Olympic record",
  },
  alternates: {
    canonical: "https://www.objectwire.org/winter-olympics/italy-first-gold-lollobrigida",
  },
};

export default function ItalyFirstGoldPage() {
  return <NewsArticleDB slug="winter-olympics-italy-first-gold-lollobrigida" />;
}
