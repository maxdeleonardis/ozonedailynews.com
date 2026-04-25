import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = 'articlepage-test';
const URL_PATH = '/articlepage/test';
const FULL_URL = `https://www.objectwire.org${URL_PATH}`;

export const metadata: Metadata = {
  title: 'Red Bull GmbH | Global Energy Drink Company & Sports Empire',
  description:
    'Comprehensive profile of Red Bull GmbH, the Austrian energy drink giant. Explore the company history, products, sports empire including F1 teams and',
  alternates: {
    canonical: FULL_URL,
  },
  keywords: [
    'Red Bull',
    'Red Bull GmbH',
    'energy drink',
    'Dietrich Mateschitz',
    'Formula 1',
    'RB Leipzig',
    'extreme sports',
    'Krating Daeng',
  ],
  openGraph: {
    title: "Red Bull GmbH | Global Energy Drink Company & Sports Empire",
    description: "Comprehensive profile of Red Bull GmbH, the Austrian energy drink giant. Explore the company history, products, sports empire including F1 teams and",
    type: 'article',
    url: 'https://www.objectwire.org',
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Red Bull GmbH | Global Energy Drink Company & Sports Empire",
    description: "Comprehensive profile of Red Bull GmbH, the Austrian energy drink giant. Explore the company history, products, sports empire including F1 teams and",
  },
};

export default function ArticlePageTestPage() {
  return <ArticlePageDB slug="articlepage-test" />;
}
