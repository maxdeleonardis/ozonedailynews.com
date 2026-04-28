import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/saas/news/ai-usage-based-pricing-hubspot-salesforce-workday-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'AI Usage-Based Pricing 2026 | HubSpot, Salesforce, Workday Shift',
  description:
    'HubSpot, Salesforce, Workday, and ServiceNow have moved to usage-based AI pricing in 2026. Goldman Sachs analysts call it "selling a unit of labor." 74% of SaaS suppliers have adopted the model.',
  keywords: [
    'AI usage-based pricing 2026',
    'SaaS AI pricing shift 2026',
    'HubSpot outcome-based pricing AI agent',
    'Salesforce agentic work units',
    'Workday Flex Credits AI',
    'ServiceNow hybrid AI pricing',
    'Adobe Firefly credit pricing',
    'AI tax SaaS prices 2026',
    'GitHub Copilot credit model',
    'Goldman Sachs AI pricing report',
    'per-seat to consumption SaaS model',
    'SaaS price increase 2025 2026',
    'Stripe usage-based pricing report',
    'AI agent pricing enterprise software',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'HubSpot, Salesforce, Workday Abandon Per-Seat Pricing for AI',
    description:
      '74% of SaaS suppliers now use usage-based pricing. Goldman Sachs analysts say companies are "selling a unit of labor." SaaS prices up 8-12% in 2025 from the AI tax.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-28T23:00:00Z',
    modifiedTime: '2026-04-28T23:00:00Z',
    section: 'Tech',
    tags: ['SaaS', 'HubSpot', 'Salesforce', 'Workday', 'AI Pricing'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Data dashboard showing usage metrics and cost analytics' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Is Killing Per-Seat Pricing | The AI Usage Shift Explained',
    description:
      'HubSpot cut its AI agent price by 50% and went outcome-based. Salesforce has "agentic work units." Workday has "Flex Credits." 74% of suppliers have made the switch.',
    images: [OG_IMAGE],
  },
};

export default function SaasNewsAiUsageBasedPricingHubspotSalesforceWorkday2026Page() {
  return <NewsArticleDB slug="saas-news-ai-usage-based-pricing-hubspot-salesforce-workday-2026" />;
}
