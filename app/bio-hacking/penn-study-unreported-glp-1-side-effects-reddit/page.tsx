import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/bio-hacking/penn-study-unreported-glp-1-side-effects-reddit';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1523299174285-a59d80640155?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Penn Study Finds Unreported GLP-1 Side Effects in Reddit',
  description: 'University of Pennsylvania researchers used AI to analyze 410,000 Reddit posts and found underreported GLP-1 side effects including reproductive symptoms',
  keywords: [
    'GLP-1 side effects Reddit study',
    'Penn GLP-1 Reddit research',
    'semaglutide side effects unreported',
    'tirzepatide side effects Reddit',
    'Ozempic side effects menstrual',
    'Wegovy side effects Reddit',
    'GLP-1 reproductive side effects',
    'GLP-1 temperature complaints',
    'Ozempic menstrual irregularities',
    'Mounjaro side effects 2026',
    'Zepbound side effects study',
    'GLP-1 AI Reddit analysis',
    'Nature Health GLP-1 study',
    'Novo Nordisk side effects scrutiny',
    'Eli Lilly tirzepatide safety',
    'GLP-1 weight loss drug safety 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Penn Study Finds Unreported GLP-1 Side Effects in',
    description: 'AI analyzed 410K Reddit posts from 67K users. 43.5% reported side effects. Reproductive symptoms and temperature complaints emerged as underreported.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-11T23:00:00Z',
    modifiedTime: '2026-04-11T23:00:00Z',
    section: 'Science',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'White pharmaceutical capsules representing GLP-1 weight loss medications' }],
    tags: ['GLP-1', 'Ozempic', 'Wegovy', 'Semaglutide', 'Penn', 'Reddit', 'Side Effects'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Penn AI Study | GLP-1 Side Effects Hidden in 410K Reddit',
    description: '43.5% of users reported side effects. Reproductive symptoms and temperature complaints largely absent from clinical trials. Published in Nature Health.',
    images: [OG_IMAGE],
  },
};

export default function BioHackingPennStudyUnreportedGlp1SideEffectsRedditPage() {
  return <NewsArticleDB slug="bio-hacking-penn-study-unreported-glp-1-side-effects-reddit" />;
}
