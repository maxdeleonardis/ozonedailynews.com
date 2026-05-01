import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.


const SLUG = '/copyright/news/ex-human-files-lawsuit-against-apple';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1657868203197-627e5ab86e19?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Ex-Human Sues Apple | $500K Withheld, Vibe Coding Crackdown',
  description:
    'AI startup Ex-Human has sued Apple for withholding approximately $500,000 in earned revenue after removing its apps Botify AI and Photify AI. The lawsuit',
  keywords: [
    'Ex-Human sues Apple',
    'Apple vibe coding crackdown',
    'Botify AI Photify AI removed App Store',
    'Apple App Store Guideline 2.5.2',
    'Anything app Apple removal Dhruv Amin',
    'Replit Apple App Store blocked',
    'Vibecode Apple App Store',
    'Apple AI app developer tools',
    'vibe coding apps iPhone',
    'Apple App Store anticompetitive',
    'Apple withholds developer revenue',
    'no-code AI apps App Store 2026',
    'Apple app removal lawsuit',
    'AI app builder App Store policy',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Ex-Human Sues Apple | $500K Withheld, Vibe Coding Crackdown',
    description:
      'Ex-Human accuses Apple of removing Botify AI and Photify AI without clear justification and withholding $500K in earned revenue. Meanwhile Apple has',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-03T08:00:00Z',
    modifiedTime: '2026-04-03T08:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Apple App Store icon — vibe coding lawsuit' }],
    tags: ['Apple', 'Ex-Human', 'Vibe Coding', 'App Store', 'Lawsuit', 'AI', 'Replit', 'Anything'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ex-Human Sues Apple | $500K Withheld, Vibe Coding Apps',
    description:
      'Botify AI, Photify AI, Anything, Replit, and Vibecode all hit. Apple cites Guideline 2.5.2. Ex-Human says Apple withheld $500K and gave no concrete reason.',
    images: [OG_IMAGE],
  },
};

export default function CopyrightNewsExHumanFilesLawsuitAgainstApplePage() {
  return <JackArticleDB slug="copyright-news-ex-human-files-lawsuit-against-apple" />;
}
