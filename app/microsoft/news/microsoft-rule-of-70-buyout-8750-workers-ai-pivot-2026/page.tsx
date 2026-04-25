import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/microsoft-rule-of-70-buyout-8750-workers-ai-pivot-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Microsoft Rule of 70 Buyout | 8,750 Workers in AI Pivot 2026',
  description: 'Microsoft offers voluntary retirement buyouts to 8,750 U.S. workers using the "Rule of 70" formula — age plus tenure equals 70 — in its first-ever buyout',
  keywords: [
    'Microsoft Rule of 70 buyout 2026',
    'Microsoft voluntary retirement 8750 workers',
    'Microsoft layoffs AI pivot 2026',
    'Microsoft Amy Coleman memo buyout',
    'Microsoft workforce reduction AI',
    'Mustafa Suleyman Microsoft AI chief',
    'Microsoft $98 billion capex AI 2026',
    'Microsoft hiring freeze Azure sales 2026',
    'Microsoft Rule of 70 eligibility formula',
    'Microsoft Copilot AI team hiring',
    'tech layoffs 2026 Microsoft Oracle Amazon',
    'Microsoft bonus decoupling stock grants',
    'Microsoft performance review five options',
    'Microsoft 51 year history first buyout',
    'Microsoft AI-first workforce strategy',
    'Microsoft vs Oracle Amazon layoffs 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Microsoft\'s First-Ever Buyout | "Rule of 70" Targets 8,750 Workers in AI Pivot',
    description: 'Microsoft uses age-plus-tenure math to clear mid-career veterans and make room for AI-native engineers. $98B capex, Copilot expansion, and a new',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Wang'],
    publishedTime: '2026-04-23T20:00:00Z',
    modifiedTime: '2026-04-23T20:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Microsoft office building representing Rule of 70 voluntary buyout program AI workforce pivot 2026' }],
    tags: ['Microsoft', 'Layoffs', 'AI Pivot', 'Mustafa Suleyman'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft "Rule of 70" Buyout Targets 8,750 Workers in AI Pivot',
    description: 'Age + tenure = 70 or more? You\'re eligible to leave Microsoft with a check. The company\'s first-ever buyout is also its clearest signal that the AI era',
    images: [OG_IMAGE],
  },
};

export default function MicrosoftNewsMicrosoftRuleOf70Buyout8750WorkersAiPivot2026Page() {
  return <NewsArticleDB slug="microsoft-news-microsoft-rule-of-70-buyout-8750-workers-ai-pivot-2026" />;
}
