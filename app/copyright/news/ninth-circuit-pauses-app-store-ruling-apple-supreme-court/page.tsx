import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/copyright/news/ninth-circuit-pauses-app-store-ruling-apple-supreme-court';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Ninth Circuit Pauses App Store Ruling as Apple Heads to',
  description: 'The Ninth Circuit granted Apple a stay on its App Store contempt ruling while the company prepares a Supreme Court petition, pausing enforcement of the',
  keywords: [
    'Apple Supreme Court App Store',
    'Ninth Circuit stay Apple Epic Games',
    'Apple App Store ruling paused 2026',
    'Apple Supreme Court petition Epic',
    'App Store 27 percent commission stay',
    'Epic Games Apple Supreme Court 2026',
    'Apple contempt ruling stay',
    'App Store external payment injunction',
    'Apple Epic Games antitrust Supreme Court',
    'Ninth Circuit Apple stay order',
    'App Store developer payment rules',
    'Apple Epic Games legal battle 2026',
    'Supreme Court App Store review',
    'Apple App Store anti-steering injunction',
    'Epic Games Fortnite Apple lawsuit',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Ninth Circuit Pauses App Store Ruling as Apple Heads to',
    description: 'Apple wins a stay on the App Store contempt ruling while it petitions the Supreme Court. Epic Games calls it a "delay tactic."',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Tina Boyle'],
    publishedTime: '2026-04-08T21:00:00Z',
    modifiedTime: '2026-04-08T21:00:00Z',
    section: 'Tech',
    tags: ['Apple', 'Epic Games', 'Supreme Court', 'App Store', 'Ninth Circuit', 'Antitrust'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apple Heads to Supreme Court Over App Store Ruling',
    description: 'Ninth Circuit grants stay on the 27% commission contempt finding. Epic Games fires back. The case now hinges on whether the Supreme Court takes it up.',
  },
};

export default function CopyrightNewsNinthCircuitPausesAppStoreRulingAppleSupremeCourtPage() {
  return <NewsArticleDB slug="copyright-news-ninth-circuit-pauses-app-store-ruling-apple-supreme-court" />;
}
