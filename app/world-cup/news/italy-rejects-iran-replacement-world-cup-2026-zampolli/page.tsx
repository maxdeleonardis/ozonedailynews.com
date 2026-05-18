import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/world-cup/news/italy-rejects-iran-replacement-world-cup-2026-zampolli';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Italy Rejects Iran Replacement Proposal | 2026 World Cup Controversy',
  description: 'Italy\'s government and Olympic officials slam as "shameful" a U.S. proposal by envoy Paolo Zampolli to replace Iran at the 2026 FIFA World Cup. Italy\'s sporting integrity vs. geopolitical crisis explained.',
  keywords: [
    'Italy rejects Iran replacement World Cup 2026',
    'Italy World Cup 2026 controversy',
    'Paolo Zampolli FIFA proposal',
    'Iran World Cup 2026 security',
    'Italy did not qualify World Cup',
    'FIFA Iran replacement rules',
    'Luciano Buonfiglio CONI statement',
    'Iran Group G 2026 World Cup',
    'Italy Azzurri World Cup 2026',
    'Trump FIFA World Cup Iran ban',
    'Iran Los Angeles Seattle World Cup',
    'FIFA Infantino Iran coming',
    'World Cup 2026 geopolitical crisis',
    'Italy Bosnia qualifying loss',
    'FIFA replacement team Asia qualifier',
    '2026 World Cup 48-team field',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Italy Rejects "Shameful" Proposal to Replace Iran at 2026 World Cup',
    description: 'Italy\'s government calls a U.S. backdoor entry proposal "shameful." With Iran\'s security status unresolved 50 days out, the 2026 World Cup faces its biggest geopolitical crisis yet.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Wang'],
    publishedTime: '2026-04-23T16:00:00Z',
    modifiedTime: '2026-04-23T16:00:00Z',
    section: 'World Cup',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Soccer ball on stadium pitch representing Italy Iran 2026 FIFA World Cup controversy' }],
    tags: ['Italy', 'Iran', 'FIFA', '2026 World Cup'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Italy Calls Iran Replacement Proposal "Shameful" | World Cup 2026',
    description: 'U.S. envoy Paolo Zampolli asked Trump and Infantino to hand Italy Iran\'s World Cup spot. Italy said no. FIFA said Iran is "coming for sure."',
    images: [OG_IMAGE],
  },
};

export default function WorldCupNewsItalyRejectsIranReplacementWorldCup2026ZampolliPage() {
  return <NewsArticleDB slug="world-cup-news-italy-rejects-iran-replacement-world-cup-2026-zampolli" />;
}
