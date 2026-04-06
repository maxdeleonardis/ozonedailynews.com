import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG =
  "/technology/alibaba/wukong-ai-agent-enterprise-platform-march-2026";
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    "Alibaba Launches Wukong AI Agent Platform for Enterprises",
  description:
    "Alibaba has launched Wukong, an enterprise AI platform that coordinates multiple autonomous agents to handle complex business tasks through a single",
  keywords: [
    "Alibaba Wukong AI agent platform enterprise March 2026",
    "Alibaba agentic AI enterprise China 2026",
    "Wukong AI multi-agent platform Alibaba",
    "Alibaba enterprise AI platform launch",
    "China agentic AI market 2026",
    "Alibaba Cloud AI agent orchestration",
    "Alibaba AI business automation Wukong",
    "multi-agent AI enterprise software China",
    "Alibaba AI strategy 2026",
    "Wukong AI single interface enterprise agents",
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "Alibaba Launches Wukong AI Agent Platform for Enterprises",
    description:
      "Alibaba's new Wukong platform coordinates multiple autonomous AI agents to handle complex business tasks through a single interface, marking the company's",
    type: "article",
    url: FULL_URL,
    siteName: "ObjectWire",
    images: [
      {
        url: "https://www.objectwire.org/entertainment/alibaba.PNG",
        width: 1200,
        height: 630,
        alt: "Alibaba Wukong AI Agent Platform",
      },
    ],
    publishedTime: "2026-03-18T12:00:00Z",
    modifiedTime: "2026-03-18T12:00:00Z",
    section: "Technology",
    tags: [
      "Alibaba",
      "Wukong",
      "AI Agents",
      "Enterprise AI",
      "China Tech",
      "Agentic AI",
      "Alibaba Cloud",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alibaba Launches Wukong AI Agent Platform for Enterprises",
    description:
      "Alibaba's Wukong platform coordinates multiple autonomous agents for complex business tasks through a single interface, the company's boldest agentic AI",
    images: ["https://www.objectwire.org/entertainment/alibaba.PNG"],
  },
  other: {
    news_keywords:
      "Alibaba Wukong, AI agent platform, enterprise agentic AI, China AI market 2026, Alibaba Cloud AI",
  },
};

export default function AlibabaWukongPage() {
  return <ArticlePageDB slug="technology-alibaba-wukong-ai-agent-enterprise-platform-march-2026" />;
}
