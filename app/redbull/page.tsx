import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Red Bull GmbH - Global Energy Drink Company & Sports Empire | ObjectWire",
  description: "Comprehensive profile of Red Bull GmbH, the Austrian energy drink giant. Explore the company history, products, sports empire including F1 teams and football clubs, financials, and global operations.",
  alternates: {
    canonical: 'https://www.objectwire.org/redbull',
  },
  keywords: ['Red Bull', 'Red Bull GmbH', 'energy drink', 'Dietrich Mateschitz', 'Formula 1', 'RB Leipzig', 'extreme sports', 'Krating Daeng'],
};

export default function RedBullWikiPage() {
  return <WikiArticle slug="redbull" />;
}
