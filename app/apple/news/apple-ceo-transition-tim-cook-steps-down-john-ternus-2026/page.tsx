import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/apple/news/apple-ceo-transition-tim-cook-steps-down-john-ternus-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Tim Cook Steps Down | Apple Names John Ternus CEO 2026',
  description: 'Apple announced April 20, 2026 that Tim Cook will step down as CEO on September 1, handing the role to hardware chief John Ternus as John Giannandrea',
  keywords: [
    'Tim Cook steps down',
    'Apple CEO change 2026',
    'John Ternus Apple CEO',
    'Apple leadership transition 2026',
    'John Giannandrea leaves Apple',
    'Apple CEO successor',
    'Tim Cook executive chairman',
    'Apple Siri overhaul 2026',
    'Mike Rockwell Siri',
    'Apple WWDC 2026 CEO',
    'Amar Subramanya Apple AI',
    'Apple generative AI strategy',
    'Ternus Apple Silicon',
    'Apple inner circle 2026',
    'Apple CEO announcement April 2026',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Tim Cook Steps Down | Apple Names John Ternus CEO September',
    description: 'Tim Cook becomes Executive Chairman. John Ternus takes the CEO seat. John Giannandrea exits after his April 15 vest. Apple\'s biggest leadership shift in',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-04-21T10:00:00Z',
    modifiedTime: '2026-04-21T10:00:00Z',
    section: 'Tech',
    images: [{ url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=675&fit=crop', width: 1200, height: 675, alt: 'Apple Park headquarters Cupertino leadership transition' }],
    tags: ['Apple', 'Tim Cook', 'John Ternus', 'Tech'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tim Cook steps down. John Ternus is Apple\'s next CEO. September 1.',
    description: 'Apple\'s biggest leadership change in a decade. Ternus inherits the AI mandate. Giannandrea is out.',
    images: ['https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=675&fit=crop'],
  },
};

export default function AppleNewsAppleCeoTransitionTimCookStepsDownJohnTernus2026Page() {
  return <NewsArticleDB slug="apple-news-apple-ceo-transition-tim-cook-steps-down-john-ternus-2026" />;
}
