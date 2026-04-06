import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'What Is MCP? | Model Context Protocol Explained 2026',
  description: 'MCP (Model Context Protocol) is an open standard by Anthropic letting AI models connect to external tools and data sources. Learn how MCP works and why it',
  keywords: [
    'what is MCP protocol',
    'model context protocol',
    'MCP explained',
    'MCP Anthropic',
    'model context protocol AI',
    'MCP vs function calling',
    'AI tool use protocol',
    'MCP servers',
    'MCP clients',
    'Claude MCP',
    'MCP tools AI',
    'agentic AI protocols',
    'MCP 2026',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/model-context-protocol',
  },
  openGraph: {
    title: 'What Is MCP? | Model Context Protocol Explained 2026',
    description: 'Model Context Protocol (MCP) explained: how Anthropic\'s open standard lets AI models like Claude connect to external tools, files, and APIs.',
    type: 'article',
    url: 'https://www.objectwire.org/define/model-context-protocol',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is MCP? | Model Context Protocol Explained',
    description: 'MCP lets AI models connect to external tools and data. The open standard from Anthropic powering agentic AI in 2026.',
  },
};

export default function ModelContextProtocolPage() {
  return <WikiArticle slug="define-model-context-protocol" />;
}
