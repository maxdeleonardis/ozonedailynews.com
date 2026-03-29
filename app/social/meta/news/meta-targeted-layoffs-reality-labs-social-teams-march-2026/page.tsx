import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/social/meta/news/meta-targeted-layoffs-reality-labs-social-teams-march-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/default/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg';

export const metadata: Metadata = {
  title: 'Meta Begins "Targeted" Cuts Across Reality Labs and Social Teams | ObjectWire',
  description:
    'Meta Platforms launched a new wave of job cuts on March 25, 2026, targeting hundreds of employees across Reality Labs, social media teams, and recruiting, a strategic pivot toward its $135 billion AI infrastructure build-out.',
  keywords: [
    'Meta layoffs 2026',
    'Meta Reality Labs cuts',
    'Meta job cuts March 2026',
    'Meta restructuring 2026',
    'Meta AI infrastructure',
    'Meta 20 percent reduction',
    'Reality Labs metaverse layoffs',
    'Meta Platforms strategic cuts',
    'Meta social team layoffs',
    'Meta recruiting cuts 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Meta Begins "Targeted" Cuts Across Reality Labs and Social Teams',
    description:
      'Meta has begun a targeted round of layoffs hitting Reality Labs, social media teams, and recruiting, a strategic shift away from the metaverse and toward a $135 billion AI infrastructure investment.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-25T12:00:00Z',
    modifiedTime: '2026-03-25T12:00:00Z',
    section: 'Technology',
    tags: ['Meta', 'Layoffs', 'Reality Labs', 'AI', 'Mark Zuckerberg', 'Metaverse', 'Restructuring', 'Tech Jobs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta Cuts Hundreds Across Reality Labs and Social Teams',
    description:
      'Meta\'s new layoff wave hits Reality Labs, social media, and recruiting, as the company pivots its capital from the metaverse to a $135B AI build-out.',
    images: [IMAGE_URL],
  },
};

export default function MetaLayoffsMarch2026Page() {
  return <NewsArticleDB slug="social-meta-news-meta-targeted-layoffs-reality-labs-social-teams-march-2026" />;
}
