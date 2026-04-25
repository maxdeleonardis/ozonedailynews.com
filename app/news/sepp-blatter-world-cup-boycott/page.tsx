import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Sepp Blatter Calls for World Cup Boycott",
  description: "Former FIFA president Sepp Blatter joins growing chorus calling for boycott of USA 2026 World Cup amid political and organizational concerns.",
  keywords: ["Sepp Blatter", "FIFA", "World Cup 2026", "Boycott", "USA", "Corruption"],
  authors: [{ name: "ObjectWire Editorial Team" }],
  alternates: {
    canonical: 'https://www.objectwire.org/news/sepp-blatter-world-cup-boycott',
  },
  openGraph: {
    title: "Sepp Blatter Calls for World Cup Boycott",
    description: "Former FIFA president Sepp Blatter joins growing chorus calling for boycott of USA 2026 World Cup amid political and organizational concerns.",
    type: 'article',
    url: "https://www.objectwire.org/news/sepp-blatter-world-cup-boycott",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sepp Blatter Calls for World Cup Boycott",
    description: "Former FIFA president Sepp Blatter joins growing chorus calling for boycott of USA 2026 World Cup amid political and organizational concerns.",
  },
};

export default function SeppBlatterBoycottPage() {
  return <WikiArticle slug="news-sepp-blatter-world-cup-boycott" />;
}
