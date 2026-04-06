import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/copyright/meta/news/new-mexico-jury-meta-375m-consumer-protection-verdict-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'New Mexico Jury Orders Meta to Pay $375M for Deceiving Teens',
  description:
    'A New Mexico jury found Meta violated state consumer protection law by making false and misleading statements about the safety of its platforms for',
  keywords: [
    'Meta $375 million verdict New Mexico',
    'Meta teen safety lawsuit 2026',
    'New Mexico Meta consumer protection',
    'Raúl Torrez Meta lawsuit',
    'Meta Unfair Practices Act verdict',
    'Meta deceiving teenagers',
    'Meta Instagram teen safety verdict',
    'social media child safety lawsuit 2026',
    'Meta jury verdict 2026',
    'New Mexico attorney general Meta',
    'Meta unconscionable trade practices',
    'Meta Santa Fe verdict',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'New Mexico Jury Orders Meta to Pay $375M for Deceiving Teens',
    description:
      'After one day of deliberation, a Santa Fe jury found Meta liable on two counts under New Mexico\'s Unfair Practices Act, concluding the company made false',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-25T20:00:00Z',
    modifiedTime: '2026-03-25T20:00:00Z',
    section: 'Law & Technology',
    tags: ['Meta', 'New Mexico', 'Lawsuit', 'Teen Safety', 'Consumer Protection', 'Facebook', 'Instagram', 'Verdict'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '$375M. One Day of Deliberation. New Mexico Jury Finds Meta Deceived Teens.',
    description:
      'The jury sided with New Mexico AG Raúl Torrez on both counts, false statements and "unconscionable" trade practices, in one of the first state verdict',
  },
};

export default function NewMexicoMetaVerdictPage() {
  return <JackArticleDB slug="copyright-meta-news-new-mexico-jury-meta-375m-consumer-protection-verdict-2026" />;
}
