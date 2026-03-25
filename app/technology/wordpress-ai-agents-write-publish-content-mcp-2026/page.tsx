import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/technology/wordpress-ai-agents-write-publish-content-mcp-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/news/cursor.PNG';

export const metadata: Metadata = {
  title: 'WordPress.com Lets AI Agents Write and Publish Site Content | ObjectWire',
  description:
    'Automattic announced that WordPress.com now allows AI agents to create, edit, and publish website content through natural language commands, adding 19 new write operations across six content types to its Model Context Protocol server. Claude, ChatGPT, and Cursor can now draft posts, build pages, and manage media through conversation.',
  keywords: [
    'WordPress AI agents write publish content 2026',
    'WordPress.com MCP server AI agents',
    'Automattic AI agent content creation',
    'Model Context Protocol WordPress',
    'Claude ChatGPT Cursor WordPress integration',
    'WordPress natural language commands',
    'AI website builder 2026',
    'WordPress.com write operations AI',
    'agentic AI CMS content management',
    'Automattic MCP server 2026',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: 'WordPress.com Lets AI Agents Write and Publish Site Content',
    description:
      'Automattic added 19 new write operations to WordPress.com\u2019s MCP server \u2014 letting AI agents like Claude, ChatGPT, and Cursor draft posts, build pages, and manage media through natural language.',
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-24T18:00:00Z',
    modifiedTime: '2026-03-24T18:00:00Z',
    section: 'Technology',
    tags: [
      'WordPress', 'Automattic', 'AI Agents', 'MCP', 'Claude',
      'ChatGPT', 'Cursor', 'CMS', 'Technology', 'Web Development',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress.com Now Lets AI Agents Write and Publish Your Website',
    description:
      'Automattic added 19 MCP write operations to WordPress.com. Claude, ChatGPT, and Cursor can now draft blog posts, build landing pages, and fix alt text across your media library \u2014 all through chat.',
    images: [IMAGE_URL],
  },
  other: {
    news_keywords:
      'WordPress AI agents 2026, Automattic MCP server, Claude ChatGPT Cursor WordPress, AI website content creation 2026',
  },
};

export default function WordPressAIMCPPage() {
  return <NewsArticleDB slug="technology-wordpress-ai-agents-write-publish-content-mcp-2026" />;
}
