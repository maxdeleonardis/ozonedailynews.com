import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/github/news/gitlab-duo-agent-platform-aws-bedrock-multi-cloud-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?w=1200&q=80';

export const metadata: Metadata = {
  title: 'GitLab Duo Agent Platform | AWS Bedrock Multi-Cloud 2026',
  description:
    'GitLab extends its Duo Agent Platform to AWS Bedrock on April 21, 2026, one week after a Google Cloud Vertex AI deal. GitLab Credits replace per-seat pricing at $1 per credit.',
  keywords: [
    'GitLab Duo Agent Platform AWS Bedrock 2026',
    'GitLab multi-cloud DevSecOps strategy',
    'GitLab AWS Bedrock integration April 2026',
    'GitLab Google Cloud Vertex AI partnership',
    'GitLab Duo Agent Platform general availability',
    'GitLab Credits consumption pricing model',
    'GitLab BYOM bring your own model',
    'GitLab AWS Marketplace spend commitment',
    'GitLab agentic DevSecOps platform',
    'GitLab Pipeline Fixer agent CI/CD',
    'GitLab Security Analyst agent vulnerability remediation',
    'GitLab Planner agent epic breakdown',
    'GitLab vs GitHub AI DevSecOps 2026',
    'enterprise AI coding agents 2026',
    'GitLab in-VPC inference data residency',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'GitLab Duo Agents Now Run on AWS Bedrock | Multi-Cloud DevSecOps 2026',
    description:
      'Seven days after Google Cloud, GitLab brings Duo Agents to AWS Bedrock. GitLab Credits replace per-seat pricing. Enterprise inference never leaves the customer VPC.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfasa'],
    publishedTime: '2026-04-21T16:00:00Z',
    modifiedTime: '2026-04-21T16:00:00Z',
    section: 'Tech',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Abstract cloud infrastructure connecting AI agent nodes across AWS and Google Cloud',
      },
    ],
    tags: ['GitLab', 'AWS', 'DevSecOps', 'AI Agents', 'Cloud'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GitLab Hits AWS Bedrock, One Week After Google Cloud, $1 Per AI Credit',
    description:
      'GitLab Duo Agents now run inside customer AWS accounts. No new contracts, no per-seat fees. If you have AWS budget, you already have GitLab AI budget.',
    images: [OG_IMAGE],
  },
};

export default function GithubNewsGitlabDuoAgentPlatformAwsBedrockMultiCloud2026Page() {
  return <JackArticleDB slug="github-news-gitlab-duo-agent-platform-aws-bedrock-multi-cloud-2026" />;
}
