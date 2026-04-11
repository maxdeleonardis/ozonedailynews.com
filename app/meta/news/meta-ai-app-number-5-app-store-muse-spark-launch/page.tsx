import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/meta/news/meta-ai-app-number-5-app-store-muse-spark-launch';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1757310998309-87a97e562ee5?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Meta AI App Surges to No. 5 on App Store After Muse Spark',
  description: 'Meta launched Muse Spark, the first AI model from Superintelligence Labs led by Alexandr Wang, pushing the Meta AI app to No. 5 on the App Store with Instagram integration coming next.',
  keywords: [
    'Meta AI app App Store',
    'Muse Spark AI model',
    'Meta Superintelligence Labs',
    'Alexandr Wang Meta',
    'Meta AI Muse Spark launch',
    'Meta AI app ranking 2026',
    'Muse Spark Instagram',
    'Meta AI multimodal model',
    'Meta AI Contemplating Mode',
    'Instagram AI photo editing Restyle',
    'Meta AI vs ChatGPT',
    'Meta AI WhatsApp Messenger',
    'Ray-Ban Meta AI glasses',
    'Meta AI image generation',
    'Muse Spark reasoning model',
    'Meta AI app download 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Meta AI App Surges to No. 5 on App Store After Muse Spark Launch',
    description: 'Muse Spark, the first model from Meta Superintelligence Labs, powers a multimodal AI assistant rolling out to Instagram, WhatsApp, Messenger, and Ray-Ban glasses.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-11T23:50:00Z',
    modifiedTime: '2026-04-11T23:50:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Smartphone screen displaying AI app icons including Meta AI' }],
    tags: ['Meta', 'Muse Spark', 'Alexandr Wang', 'App Store', 'Instagram', 'AI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta AI Hits No. 5 on App Store | Muse Spark Launches',
    description: 'First model from Meta Superintelligence Labs. Multimodal, Contemplating Mode, Instagram integration next. Alexandr Wang leads the push.',
    images: [OG_IMAGE],
  },
};

export default function MetaNewsMetaAiAppNumber5AppStoreMuseSparkLaunchPage() {
  return <NewsArticleDB slug="meta-news-meta-ai-app-number-5-app-store-muse-spark-launch" />;
}
