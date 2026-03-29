import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/anthropic-private-equity-10-billion-blackstone-joint-venture-2026';

export const metadata: Metadata = {
  title: "Anthropic & Private Equity: A $10 Billion Play for Enterprise AI Dominance | ObjectWire",
  description:
    "Anthropic is in advanced talks with Blackstone, Hellman & Friedman, and Permira to form a $10 billion AI joint venture that would embed Claude directly into hundreds of PE portfolio companies, as the company simultaneously fights a Department of Defense blacklisting in federal court.",
  keywords: [
    'Anthropic private equity joint venture 2026',
    'Anthropic Blackstone $10 billion AI venture',
    'Anthropic Hellman Friedman Permira deal',
    'Claude AI enterprise integration private equity',
    'Anthropic IPO 2026 private equity',
    'OpenAI TPG Advent Bain Capital joint venture',
    'Anthropic Department of Defense blacklist lawsuit',
    'Anthropic Claude Code enterprise agentic AI',
    'Palantir model AI private equity portfolio',
    'Anthropic Department of War supply chain risk',
    'Anthropic First Fifth Amendment lawsuit DoD',
    'AI arms race private equity 2026',
    'Anthropic $61.5 billion valuation 2026',
    'Claude AI enterprise deployment PE firms',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Anthropic & Private Equity: A $10 Billion Play for Enterprise AI Dominance",
    description:
      "Blackstone, Hellman & Friedman, and Permira are in advanced talks to co-found a $10B AI joint venture with Anthropic, embedding Claude into their trillion-dollar portfolios using the Palantir consulting model. Meanwhile, Anthropic is fighting a federal blacklisting in two courts.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-18T12:00:00Z',
    modifiedTime: '2026-03-18T12:00:00Z',
    section: 'Technology',
    tags: [
      'Anthropic', 'Private Equity', 'Blackstone', 'AI',
      'Joint Venture', 'Claude', 'Enterprise', 'IPO',
      'Department of Defense', 'Legal', 'OpenAI', 'Finance',
    ],
    images: [
      {
        url: 'https://www.objectwire.org/winter-olympics/_Blackstone, Anthropic & Friedman.png',
        alt: 'Blackstone, Anthropic & Hellman Friedman AI joint venture',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Anthropic & Private Equity: A $10 Billion Play for Enterprise AI Dominance",
    description:
      "Blackstone + Anthropic = a $10B AI venture to implant Claude into a trillion-dollar PE portfolio. Simultaneously, Anthropic is suing the federal government over a DoD blacklisting it calls retaliatory. The stakes couldn't be higher.",
  },
  other: {
    news_keywords:
      'Anthropic Blackstone private equity, Anthropic $10 billion joint venture, Claude AI enterprise, Anthropic IPO 2026, Anthropic DoD blacklist lawsuit, OpenAI TPG joint venture, Hellman Friedman Permira AI, Anthropic First Amendment lawsuit',
  },
};

export default function AnthropicPrivateEquityJointVenturePage() {
  return <NewsArticleDB slug="tech-anthropic-private-equity-10-billion-blackstone-joint-venture-2026" />;
}
