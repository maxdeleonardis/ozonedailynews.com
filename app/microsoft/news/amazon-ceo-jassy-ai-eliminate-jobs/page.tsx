import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, TagsSection } from '@/components/NewsArticle';

const SLUG = '/microsoft/news/amazon-ceo-jassy-ai-eliminate-jobs';

export const metadata: Metadata = {
  title: 'Amazon CEO Andy Jassy States AI Will Reduce Headcount in Many Long-Standing Roles | ObjectWire',
  description: 'Amazon CEO Andy Jassy said on CNBC that AI will mean fewer humans are needed for many jobs, as Block CEO Jack Dorsey cut 4,000+ employees citing AI efficiency gains.',
  keywords: ['Amazon CEO Andy Jassy AI jobs', 'AI eliminate jobs', 'Block layoffs Jack Dorsey', 'Amazon AI workforce', 'tech layoffs 2026', 'AI job replacement', 'OpenAI Amazon partnership', 'Squawk Box AI interview'],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Amazon CEO Jassy: AI Will Reduce Headcount in Many Roles',
    description: 'Jassy says jobs that relied on human labor for decades will need fewer people. Block cuts 4,000+ employees citing AI.',
    type: 'article', url: `https://www.objectwire.org${SLUG}`, siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'], publishedTime: '2026-03-05T10:00:00Z', modifiedTime: '2026-03-05T10:00:00Z',
    section: 'Technology & Business', tags: ['Amazon', 'Andy Jassy', 'AI', 'Jobs', 'Block', 'Jack Dorsey'],
  },
  twitter: { card: 'summary_large_image', title: 'Amazon CEO Jassy: AI Will Reduce Headcount in Many Roles', description: 'Jobs thrown at humans for decades will need fewer people, Jassy says. Block cuts 4,000+ in AI-driven layoffs.' },
};

export default function AmazonJassyAIJobsPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Amazon CEO Andy Jassy States AI Will Reduce Headcount in Many Long-Standing Roles While Creating New Ones"
        description="Andy Jassy stated on CNBC that AI will mean fewer humans needed for many jobs, while new categories will emerge during the transition."
        author="ObjectWire Technology Desk"
        publishedTime="2026-03-05T10:00:00Z" modifiedTime="2026-03-05T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`} section="Technology & Business"
        keywords={['Amazon', 'Andy Jassy', 'AI jobs', 'Block', 'Jack Dorsey', 'layoffs', 'workforce']}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb items={[{ name: 'Home', item: '/' }, { name: 'Microsoft', item: '/microsoft' }, { name: 'News', item: '/microsoft/news' }]} />
        </div>
      </div>

      <NewsArticle
        title="Amazon CEO Andy Jassy States AI Will Reduce Headcount in Many Long-Standing Roles While Creating New Ones"
        subtitle="The comments followed a $110 billion funding round for OpenAI at a $730 billion valuation, with Amazon committing $50 billion and announcing a multi-year strategic partnership."
        category="Technology & Business" categoryColor="orange" topicTag="technology" publishDate="March 5, 2026" readTime="6 min read"
        author={{ name: 'ObjectWire Technology Desk', role: 'Technology Reporter' }}
        tags={['Amazon', 'Andy Jassy', 'AI', 'Jobs', 'Block', 'Jack Dorsey', 'Layoffs', 'OpenAI', 'Workforce']}
      >

        <p>
          Amazon CEO Andy Jassy stated on CNBC&apos;s Squawk Box that artificial intelligence will mean fewer humans are needed for many jobs that have relied on human labor over the past 20 to 30 years, though he noted new job categories will emerge during the transition. The comments followed a $110 billion funding round for OpenAI at a $730 billion valuation, with Amazon committing $50 billion and announcing a multi-year strategic partnership. Jassy made the remarks hours after Block CEO Jack Dorsey announced plans to reduce Block&apos;s workforce by nearly half, cutting more than 4,000 employees from over 10,000 due to AI-driven efficiency gains. Jassy described the shift as a period where companies navigate changes, with historical precedents like cloud computing creating roles such as cloud solutions architects that did not exist 15 years ago.
        </p>

        <HighlightBox type="key-point" color="orange">
          <strong>Jassy quote:</strong> &ldquo;I do believe that a lot of the jobs that we&apos;ve thrown human beings at for the last 20 or 30 years, you won&apos;t need as many human beings doing those same jobs.&rdquo;
        </HighlightBox>

        <h2>Jassy&apos;s Exact Statements on AI and Workforce Impact</h2>
        <p>
          During the discussion with CNBC&apos;s Andrew Ross Sorkin and OpenAI CEO Sam Altman, Jassy addressed AI&apos;s effect on labor directly. He stated that many existing roles will require fewer people, but also that new jobs will be created as has &ldquo;always happened in every technology shift.&rdquo; He characterized AI as &ldquo;the most transformational technology shift that we&apos;ve seen in our lifetime.&rdquo;
        </p>

        <h2>Context From Prior Amazon Statements on AI and Headcount</h2>
        <p>
          In a June 2025 memo, Jassy wrote that generative AI and agents would change work processes, expecting efficiency gains to reduce Amazon&apos;s total corporate workforce in the coming years. Amazon implemented 14,000 corporate layoffs in October 2025 and 16,000 more in January 2026, totaling roughly 30,000 positions, with Jassy attributing reductions to removing bureaucracy and layers rather than solely AI. In January 2026, Jassy reiterated that jobs in coding, customer service, research, and analytics would see impact over time, while hiring continues in AI, automation, and robotics.
        </p>

        <h2>Block&apos;s Workforce Reduction Tied to AI Efficiency</h2>
        <p>
          Block announced on February 26, 2026, a reduction of more than 4,000 employees, shrinking its headcount from over 10,000 to under 6,000 by the end of Q2 fiscal 2026. Dorsey stated intelligence tools are compounding faster weekly, changing company operations. Shares rose 25 percent in after-hours trading following the announcement. Dorsey predicted most companies would adopt similar efficiency measures within the next year.
        </p>

        <HighlightBox type="stat" color="orange">
          <strong>Tech layoffs 2026:</strong> 26,000 jobs cut in the first two months of 2026, on pace to exceed 2025&apos;s total of 245,000. Amazon alone cut ~30,000 corporate roles since late 2025.
        </HighlightBox>

        <p className="text-sm text-gray-500 mt-6 italic">
          When a CEO says jobs thrown at humans for decades won&apos;t need as many humans anymore, the transition period starts looking a lot like the old normal, just with fewer people on the payroll.
        </p>

        <h2>Related Coverage</h2>
        <ul>
          <li><Link href="/amazon" className="text-blue-600 hover:underline font-medium">Amazon Hub &rarr;</Link></li>
          <li><Link href="/open-ai" className="text-blue-600 hover:underline font-medium">OpenAI Hub &rarr;</Link></li>
          <li><Link href="/microsoft/news/gaming-industry-layoffs-ea-sony-riot-ubisoft-february-2026" className="text-blue-600 hover:underline font-medium">Gaming Industry Sheds Jobs Across EA, Sony, Riot, and Ubisoft &rarr;</Link></li>
        </ul>

        <TagsSection tags={['Amazon', 'Andy Jassy', 'AI', 'Jobs', 'Block', 'Jack Dorsey', 'Layoffs', 'OpenAI', 'Workforce', 'Tech Industry']} />
      </NewsArticle>
    </SEOWrapper>
  );
}
