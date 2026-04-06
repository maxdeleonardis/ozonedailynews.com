import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/bio-hacking/bianca-dias-bbl-death-brazil-insurance-shift';

export const metadata: Metadata = {
  title: "Bianca Dias and the BBL Crisis: How 'Complication Insurance' Is Adding a 30% Safety Tax to Cosmetic Surgery",
  description:
    "On February 19, 2026, in São Paulo, Brazil's mandatory complication insurance policy for elective procedures went into effect, raising BBL costs by 30%",
  keywords: [
    'Bianca Dias BBL death São Paulo 2026',
    'BBL complication insurance Brazil mandatory',
    'Brazilian butt lift safety tax 30 percent',
    'cosmetic surgery insurance requirements 2026',
    'BBL death rate Brazil procedure risk',
    'complication insurance elective surgery EU Brazil',
    'Brazilian butt lift price increase insurance',
    'BBL safety crisis cosmetic surgery 2026',
    'elective surgery insurance mandate Brazil',
    'cosmetic procedure complication coverage cost',
    'BBL mortality rate insurance policy Brazil',
    'beauty surgery safety tax mandatory insurance',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Bianca Dias and the BBL Crisis: The 30% 'Safety Tax' Reshaping Cosmetic Surgery",
    description:
      "Brazil's new mandatory complication insurance for BBLs is driving procedure costs up 30%. It's meant to save lives. It's also creating a two-tier system",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: ['/bio-hacking/pexels-pixabay-289290.jpg'],
    publishedTime: '2026-02-20T15:00:00Z',
    modifiedTime: '2026-02-20T15:00:00Z',
    section: 'Health & Bio-Hacking',
    tags: ['Bianca Dias', 'BBL', 'Brazil', 'Cosmetic Surgery', 'Insurance', 'Health Policy', 'São Paulo'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Brazil Just Added a 30% 'Safety Tax' to BBLs | And It Started with Bianca Dias",
    description:
      "Mandatory complication insurance for elective surgery is now law in Brazil. BBL prices are up 30%. The question: does pricing risk out of reach make it",
  },
};

export default function BiancaDiasBBLPage() {
  return <NewsArticleDB slug="bio-hacking-bianca-dias-bbl-death-brazil-insurance-shift" />;
}
