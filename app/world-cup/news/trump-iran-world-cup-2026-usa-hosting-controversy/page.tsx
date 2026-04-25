import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/world-cup/news/trump-iran-world-cup-2026-usa-hosting-controversy';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectwire.org/world-cup/worldcup-usa-drama-strikes.jpg';

export const metadata: Metadata = {
  title: 'Trump Iran Comments | World Cup USA Hosting Controversy',
  description:
    "Trump raised Iran as a security threat to the 2026 World Cup on US soil. FIFA's statutes prohibit excluding qualified nations on political grounds, and",
  keywords: [
    'Trump Iran World Cup 2026',
    'World Cup USA hosting controversy',
    'FIFA Iran 2026 World Cup',
    'Trump World Cup security Iran',
    'FIFA non-discrimination policy',
    'Iran qualify 2026 World Cup',
    'World Cup 2026 United States controversy',
    'FIFA host country rules',
    'Trump FIFA World Cup ban',
    'Iran FIFA World Cup eligibility',
    'World Cup 2026 political controversy',
    'FIFA statutes participation rights',
    'Trump 2026 World Cup comments',
    'US hosting World Cup Iran security',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: "Trump Iran Comments | World Cup 2026 USA Hosting Controversy",
    description:
      "Trump has flagged Iran as a security risk for 2026 World Cup matches on US soil. FIFA says its statutes prevent it from blocking qualified nations on",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfansa'],
    publishedTime: '2026-04-08T10:30:00Z',
    modifiedTime: '2026-04-08T10:30:00Z',
    section: 'Sports',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'World Cup 2026 USA hosting controversy Trump Iran' }],
    tags: ['FIFA World Cup 2026', 'Donald Trump', 'Iran', 'USA Hosting', 'FIFA Statutes', 'World Cup Controversy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump vs. FIFA on Iran | The World Cup 2026 Hosting Crisis',
    description: "Iran qualified. Trump flagged them as a security risk. FIFA says it can't ban them. Here's where things stand.",
    images: [OG_IMAGE],
  },
};

export default function WorldCupNewsTrumpIranWorldCup2026UsaHostingControversyPage() {
  return <NewsArticleDB slug="world-cup-news-trump-iran-world-cup-2026-usa-hosting-controversy" />;
}
