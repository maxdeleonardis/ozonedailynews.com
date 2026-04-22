import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/amazon/news/amazon-one-medical-glp1-hims-hers-price-war-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Amazon One Medical GLP-1 Plan | Hims & Hers Price War 2026',
  description: 'Amazon One Medical launched a nationwide GLP-1 weight loss program on April 21, 2026, starting at $25/month insured. Hims & Hers stock fell 4-6% on the same-day delivery threat.',
  keywords: [
    'Amazon One Medical GLP-1',
    'Amazon weight loss program 2026',
    'Hims Hers stock HIMS April 2026',
    'Amazon Pharmacy GLP-1 $149',
    'Amazon One Medical vs Hims Hers',
    'Wegovy Amazon delivery',
    'Zepbound Amazon One Medical',
    'Foundayo GLP-1 oral Amazon',
    'Amazon Health AI assistant',
    'GLP-1 same-day delivery Amazon',
    'Hims Hers compounded GLP-1',
    'Amazon telehealth 50 states',
    'GLP-1 price war 2026',
    'Amazon One Medical chronic care',
    'Amazon Prime pharmacy GLP-1',
    'Hims Hers HIMS stock drop',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Amazon One Medical GLP-1 | The $149 Weight Loss Plan Hims & Hers Feared',
    description: 'Amazon launched nationwide GLP-1 coverage April 21, 2026. Same-day delivery in 3,000 cities. Brand-name only. Hims & Hers fell 4-6% before the market closed.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfasa'],
    publishedTime: '2026-04-21T20:00:00Z',
    modifiedTime: '2026-04-21T20:00:00Z',
    section: 'Finance',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Weight loss prescription medication pharmacy pills GLP-1 2026' }],
    tags: ['Amazon', 'Hims & Hers', 'GLP-1', 'Telehealth', 'Weight Loss'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon launched a $149/month GLP-1 plan. HIMS dropped 4-6% the same day.',
    description: 'Same-day delivery. Brand-name only. 50 states. Amazon just entered the one market Hims & Hers thought it owned.',
    images: [OG_IMAGE],
  },
};

export default function AmazonNewsAmazonOneMedicalGlp1HimsHersPriceWar2026Page() {
  return <JackArticleDB slug="amazon-news-amazon-one-medical-glp1-hims-hers-price-war-2026" />;
}
