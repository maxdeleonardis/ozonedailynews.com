import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/winter-olympics/usa/alysa-liu';

export const metadata: Metadata = {
  title: 'Alysa Liu - Olympic Gold Medalist, Figure Skater | Milano Cortina 2026 | ObjectWire',
  description:
    "Full biography of Alysa Liu, American figure skater and 2026 Olympic gold medalist. California-born Chinese-American skater who ended a 20-year U.S. medal drought in women's singles with a score of 233.17 at Milano Cortina.",
  keywords: [
    'Alysa Liu',
    'Alysa Liu Olympic gold',
    'Alysa Liu figure skating',
    'Milano Cortina 2026',
    'Winter Olympics 2026',
    'Team USA figure skating',
    "women's singles figure skating",
    'Alysa Liu biography',
    'Alysa Liu age',
    'Alysa Liu score',
    '20-year medal drought',
    'American figure skater',
    'Chinese-American skater',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/usa/alysa-liu',
  },
  openGraph: {
    title: 'Alysa Liu - Olympic Gold Medalist | Milano Cortina 2026',
    description:
      "Full biography of Alysa Liu, 2026 Olympic gold medalist in women's singles figure skating. She ended a 20-year American medal drought with a breathtaking 233.17-point performance at Milano Cortina.",
    type: 'article',
    url: 'https://www.objectwire.org/winter-olympics/usa/alysa-liu',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Olympic Bureau'],
    section: 'Winter Olympics',
    images: [
      {
        url: 'https://www.objectwire.org/winter-olympics/b7e3a3821e924c2c81fb95df11f52884~tplv-jj85edgx6n-image-origin.jpeg',
        width: 1200,
        height: 630,
        alt: 'Alysa Liu - Olympic gold medalist at Milano Cortina 2026',
      },
    ],
    tags: ['Alysa Liu', 'Figure Skating', 'Winter Olympics', 'Team USA', 'Olympic Gold', 'Milano Cortina 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alysa Liu - Olympic Gold Medalist | Milano Cortina 2026',
    description:
      "America's 20-year figure skating drought ended when Alysa Liu scored 233.17 points at the 2026 Winter Olympics. Full biography and coverage.",
    images: [
      'https://www.objectwire.org/winter-olympics/b7e3a3821e924c2c81fb95df11f52884~tplv-jj85edgx6n-image-origin.jpeg',
    ],
  },
};

export default function AlysaLiuPage() {
  return <WikiArticle slug="winter-olympics-usa-alysa-liu" />;
}
