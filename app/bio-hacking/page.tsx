import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/bio-hacking';

export const metadata: Metadata = {
  title: "Bio-Hacking Hub | Human Enhancement, Longevity",
  description:
    "Complete coverage of the bio-hacking movement, from Bryan Johnson's Blueprint protocol to looksmaxxing, peptides, nootropics, and the extreme measures",
  keywords: [
    'bio-hacking biohacking 2026',
    'Bryan Johnson Blueprint longevity protocol',
    'looksmaxxing cosmetic surgery enhancement',
    'Clavicular looksmaxxing founder',
    'human performance optimization biohacking',
    'longevity hacking anti-aging protocols',
    'peptides nootropics cognitive enhancement',
    'biohacking supplements longevity stack',
    'cosmetic surgery optimization trends',
    'Bryan Johnson reverse aging protocol',
    'human enhancement technology biohacking',
    'looksmaxxing surgery optimization 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Bio-Hacking Hub | Human Enhancement, Longevity",
    description:
      "From Bryan Johnson's $2M/year longevity protocol to the looksmaxxing movement pushing cosmetic surgery to extremes, comprehensive coverage of the",
    type: 'website',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bio-Hacking Hub: From Bryan Johnson to Looksmaxxing",
    description:
      "The complete guide to human optimization, longevity protocols, performance enhancement, and the extreme cosmetic procedures reshaping modern",
  },
};

export default function BioHackingHubPage() {
  return <WikiArticle slug="bio-hacking" />;
}
