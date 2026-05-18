import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/disney/news/bob-iger-thrive-capital-josh-kushner-advisor-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Bob Iger Joins Thrive Capital | Josh Kushner $15B VC Firm 2026',
  description: 'Bob Iger officially rejoins Thrive Capital as advisor on April 23, 2026, one month after handing Disney CEO reins to Josh D\'Amaro. Iger to mentor founders and guide investments in OpenAI-backed $15B VC firm.',
  keywords: [
    'Bob Iger Thrive Capital 2026',
    'Bob Iger after Disney',
    'Bob Iger Josh Kushner advisor',
    'Thrive Capital $15 billion fund',
    'Bob Iger Disney retirement 2026',
    'Josh D\'Amaro Disney CEO',
    'Thrive Capital OpenAI investment',
    'Bob Iger VC career',
    'Bob Iger conflict of interest Disney Thrive',
    'Josh Kushner Thrive Capital portfolio',
    'Bob Iger A24 investment',
    'Disney new leadership 2026',
    'Dana Walden Disney president',
    'Bob Iger senior advisor Disney',
    'Thrive Capital OpenAI generative AI',
    'Bob Iger post-Disney plans',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Bob Iger Joins Thrive Capital | Josh Kushner\'s $15B VC Firm',
    description: 'One month after exiting Disney, Bob Iger returns to Thrive Capital to guide investments in OpenAI, A24, Spotify, and the generative AI era.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Wang'],
    publishedTime: '2026-04-23T14:00:00Z',
    modifiedTime: '2026-04-23T14:00:00Z',
    section: 'Entertainment',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Bob Iger returns to Thrive Capital as advisor after leaving Disney CEO role in 2026' }],
    tags: ['Bob Iger', 'Thrive Capital', 'Josh Kushner', 'Disney'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bob Iger Is Back in VC — Joins Thrive Capital\'s $15B Firm',
    description: 'One month after leaving Disney, Iger rejoins Josh Kushner\'s Thrive Capital to guide OpenAI, A24, and next-gen media bets.',
    images: [OG_IMAGE],
  },
};

export default function DisneyNewsBobIgerThriveCapitalJoshKushnerAdvisor2026Page() {
  return <NewsArticleDB slug="disney-news-bob-iger-thrive-capital-josh-kushner-advisor-2026" />;
}
