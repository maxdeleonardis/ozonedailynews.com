import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

const SLUG = '/news';

export const metadata: Metadata = {
  title: 'News | Tech, AI & Science Breaking Coverage 2026',
  description: 'Breaking news in tech, AI, science, and finance. Every story source-cited and fact-checked. No aggregation. ObjectWire.',
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'News | Tech, AI & Science Breaking Coverage 2026',
    description: 'Breaking news in tech, AI, science, and finance. Every story source-cited and fact-checked. No aggregation. ObjectWire.',
    type: 'website',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News | Tech, AI & Science Breaking Coverage 2026',
    description: 'Breaking news in tech, AI, science, and finance. Every story source-cited and fact-checked. No aggregation. ObjectWire.',
  },
};

export default function Page() {
  return <ArticlePageDB slug="news" />;
}
