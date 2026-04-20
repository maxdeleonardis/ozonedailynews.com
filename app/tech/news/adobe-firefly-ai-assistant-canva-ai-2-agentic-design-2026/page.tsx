import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/news/adobe-firefly-ai-assistant-canva-ai-2-agentic-design-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Adobe Firefly AI Assistant vs Canva AI 2.0 | Agentic Design 2026',
  description: 'Adobe and Canva launched rival agentic AI design systems within hours of each other in April 2026. Firefly AI Assistant orchestrates Creative Cloud, Canva AI 2.0 generates fully editable layered output and connects to Slack, Notion, and HubSpot.',
  keywords: [
    'Adobe Firefly AI Assistant 2026',
    'Canva AI 2.0',
    'agentic AI design tools',
    'Adobe creative agent',
    'Canva AI 2.0 features',
    'Firefly AI Assistant Creative Cloud',
    'Canva agentic design',
    'Adobe vs Canva AI',
    'Canva Create 2026',
    'Adobe Project Moonlight',
    'AI design tools 2026',
    'Canva layered AI output',
    'Firefly AI orchestration',
    'generative AI creative software',
    'Canva Memory Library',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Adobe Firefly AI Assistant vs Canva AI 2.0 | Agentic Design 2026',
    description: 'Adobe and Canva unveiled agentic AI design systems within hours of each other. Firefly AI Assistant runs 100+ skills across Creative Cloud. Canva AI 2.0 generates fully editable layered designs and connects to Slack, Notion, and Gmail.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-21T16:00:00Z',
    modifiedTime: '2026-04-21T16:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Adobe Firefly AI Assistant and Canva AI 2.0 agentic design tools 2026' }],
    tags: ['Adobe', 'Canva', 'AI Design', 'Creative Software'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adobe and Canva Launched Rival AI Agents Within Hours of Each Other',
    description: 'Adobe Firefly AI Assistant vs Canva AI 2.0: the agentic design race just went live.',
    images: [OG_IMAGE],
  },
};

export default function TechNewsAdobeFireflyAiAssistantCanvaAi2AgenticDesign2026Page() {
  return <JackArticleDB slug="tech-news-adobe-firefly-ai-assistant-canva-ai-2-agentic-design-2026" />;
}
