import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/deepseek/news/deepseek-v4-model-late-april-launch-huawei-ascend-chips';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1711721399281-02806b65d91b?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'DeepSeek V4 Model to Launch Late April on Huawei Chips',
  description: 'DeepSeek founder Liang Wenfeng confirmed the V4 AI model will arrive in late April 2026, running on Huawei Ascend processors after months of delays and a',
  keywords: [
    'DeepSeek V4 launch date',
    'DeepSeek V4 model April 2026',
    'Liang Wenfeng DeepSeek founder',
    'Huawei Ascend AI chips',
    'DeepSeek Huawei pivot',
    'Cambricon Technologies AI',
    'Huawei 950PR chip orders',
    'DeepSeek R1 successor',
    'China AI frontier model',
    'US export controls AI chips',
    'DeepSeek V4 delayed',
    'Alibaba ByteDance Tencent Huawei chips',
    'Chinese AI ecosystem 2026',
    'DeepSeek Nvidia AMD withheld',
    'China domestic AI hardware',
    'DeepSeek V4 benchmark',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'DeepSeek Founder Says V4 Model Launches Late April on',
    description: 'After months of missed deadlines, Liang Wenfeng confirmed V4 arrives late April. DeepSeek rewrote its model stack for Huawei Ascend, deliberately',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-11T23:45:00Z',
    modifiedTime: '2026-04-11T23:45:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Close-up of server motherboard components representing AI chip hardware' }],
    tags: ['DeepSeek', 'Liang Wenfeng', 'Huawei', 'AI Chips', 'V4 Model', 'China AI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepSeek V4 Launches Late April | Built on Huawei, Not',
    description: 'Liang Wenfeng confirms late April for V4. DeepSeek rewrote its stack for Huawei Ascend. Alibaba, ByteDance, Tencent ordered hundreds of thousands of 950PR',
    images: [OG_IMAGE],
  },
};

export default function TechDeepseekNewsDeepseekV4ModelLateAprilLaunchHuaweiAscendChipsPage() {
  return <NewsArticleDB slug="tech-deepseek-news-deepseek-v4-model-late-april-launch-huawei-ascend-chips" />;
}
