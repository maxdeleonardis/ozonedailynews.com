import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/technology/tencent-openclaw-ai-agent-wechat';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/default/Tencent%20embeds%20OpenClaw%20.png';

export const metadata: Metadata = {
  title: 'Tencent Embeds OpenClaw AI Agent into WeChat for Over a Billion Users | ObjectWire',
  description:
    'Tencent has integrated its OpenClaw AI agent directly into WeChat, giving more than 1.3 billion users access to a conversational AI without any new download — making it one of the widest AI deployments in history.',
  keywords: [
    'Tencent OpenClaw AI agent',
    'OpenClaw WeChat',
    'WeChat AI integration 2026',
    'Tencent AI WeChat',
    'OpenClaw AI billion users',
    'China AI super-app',
    'WeChat AI agent',
    'Tencent Hunyuan WeChat',
    'China AI race 2026',
    'WeChat 1 billion AI',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Tencent Embeds OpenClaw AI Agent into WeChat for Over a Billion Users',
    description:
      'Tencent has integrated OpenClaw, its proprietary AI agent, directly into WeChat — giving 1.3 billion users AI access with no download required. The move reshapes the AI distribution landscape.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-24T12:00:00Z',
    modifiedTime: '2026-03-24T12:00:00Z',
    section: 'Technology',
    tags: ['Tencent', 'OpenClaw', 'WeChat', 'AI', 'China', 'Super-App', 'Artificial Intelligence'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tencent Embeds OpenClaw AI Agent into WeChat — 1.3 Billion Users',
    description:
      "OpenClaw is now inside WeChat. No download. No sign-up. Just AI for 1.3 billion users \u2014 and a new front in China's AI distribution race.",
    images: [IMAGE_URL],
  },
};

export default function TencentOpenClawWeChatPage() {
  return <JackArticleDB slug="technology-tencent-openclaw-ai-agent-wechat" />;
}
