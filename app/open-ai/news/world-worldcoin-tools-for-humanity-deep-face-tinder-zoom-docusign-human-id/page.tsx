import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/open-ai/news/world-worldcoin-tools-for-humanity-deep-face-tinder-zoom-docusign-human-id';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'World ID Expands | Deep Face, Tinder Human Badge, Zoom',
  description: 'Tools for Humanity launches World ID integrations with Tinder, Zoom, and DocuSign using Deep Face tech and the Orb iris scanner. 18M users. The digital',
  keywords: [
    'World ID 2026',
    'Worldcoin Deep Face',
    'Tools for Humanity World',
    'World ID Tinder Human Badge',
    'World ID Zoom verified human',
    'World ID DocuSign bot signatures',
    'Orb iris scanner human verification',
    'deepfake prevention 2026',
    'AI human identity verification',
    'World ID 18 million users',
    'human proof identity crypto',
    'Sam Altman Worldcoin 2026',
    'World ID integrations mainstream apps',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'World ID Expands | Deep Face, Tinder, Zoom, DocuSign Human',
    description: '18 million iris scans. Deep Face tech on Zoom. Human Badge on Tinder. Bot-proof DocuSign signatures. World exits crypto and becomes mainstream security',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-18T00:00:00Z',
    modifiedTime: '2026-04-18T00:00:00Z',
    section: 'Tech',
    tags: ['World ID', 'Worldcoin', 'Deepfake', 'AI Identity'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World ID goes mainstream | Tinder, Zoom, DocuSign',
    description: 'The Orb iris scanner becomes everyday security infrastructure. Deep Face prevents AI impersonation on video calls. 18M users already enrolled.',
  },
};

export default function OpenAiNewsWorldWorldcoinToolsForHumanityDeepFaceTinderZoomDocusignHumanIdPage() {
  return <JackArticleDB slug="open-ai-news-world-worldcoin-tools-for-humanity-deep-face-tinder-zoom-docusign-human-id" />;
}
