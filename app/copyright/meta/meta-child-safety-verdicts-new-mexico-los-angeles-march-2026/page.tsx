import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/copyright/meta/meta-child-safety-verdicts-new-mexico-los-angeles-march-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const IMAGE_URL = '/default/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg';

export const metadata: Metadata = {
  title: 'Meta Hit with Double Blow in Historic Child Safety Verdicts',
  description:
    'Two separate juries in New Mexico and Los Angeles found Meta Platforms liable for harming children on the same day, a $375 million civil penalty in New',
  keywords: [
    'Meta child safety verdict 2026',
    'Meta $375 million fine New Mexico',
    'Meta Los Angeles addiction lawsuit',
    'Operation MetaPhile New Mexico',
    'Meta Instagram child exploitation',
    'Meta YouTube addictive design verdict',
    'Kaley GM Meta lawsuit',
    'Raul Torrez Meta trial',
    'Meta liable children harm',
    'social media child safety law 2026',
    'Section 230 child safety',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Meta Hit with Double Blow in Historic Child Safety Verdicts',
    description:
      'On a single day, juries in New Mexico and Los Angeles delivered twin liability verdicts against Meta, $375M for child exploitation algorithms and $3M for',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-25T18:00:00Z',
    modifiedTime: '2026-03-25T18:00:00Z',
    section: 'Law & Technology',
    tags: ['Meta', 'Child Safety', 'Lawsuit', 'Verdict', 'New Mexico', 'Los Angeles', 'Instagram', 'Facebook', 'YouTube', 'Tech Law'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta Hit with Double Blow in Historic Child Safety Verdicts',
    description:
      '$375M in New Mexico. $3M in Los Angeles. Two juries on the same day find Meta liable for harming children, the first jury verdicts to ever pierce social',
    images: [IMAGE_URL],
  },
};

export default function MetaChildSafetyVerdictsPage() {
  return <NewsArticleDB slug="copyright-meta-meta-child-safety-verdicts-new-mexico-los-angeles-march-2026" />;
}
