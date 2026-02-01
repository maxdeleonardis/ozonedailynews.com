import type { Metadata } from 'next';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import {
  DynamicNewsArticle,
  CaseOverview,
  StatisticsBox,
  ArticleQuote,
} from '@/components/DynamicNewsArticle';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OpenAI vs. Elon Musk: The $134B Lawsuit and unsustainable Burn Rate | ObjectWire',
  description: 'Unsealed emails, the "Lie" diary, and a $14 billion projected loss: A deep dive into the legal and financial crisis hitting OpenAI in 2026.',
  keywords: [
    'OpenAI Lawsuit',
    'Elon Musk vs OpenAI',
    'Sam Altman',
    'Greg Brockman',
    'OpenAI financials',
    'AI burn rate',``
    'Microsoft OpenAI merger',
    'ChatGPT ads',
    'AI national security',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/news/openai-vs-elon-musk-lawsuit-financial-burn-2026',
  },
  openGraph: {
    type: 'article',
    title: 'OpenAI vs. Elon Musk: The $134B Lawsuit and Financial Crisis',
    description: 'Inside the trial of the century and OpenAI\'s desperate pivot to advertisements.',
    publishedTime: '2026-01-31T12:00:00Z',
    section: 'Technology',
    tags: ['OpenAI', 'Elon Musk', 'AI', 'Lawsuit', 'Finance'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Trial of the Century: OpenAI vs Elon Musk',
    description: 'Projected losses of $14B and a $134B fraud claim: OpenAI\'s 2026 outlook.',
  },
};

export default function OpenAILawsuitPage() {
  return (
    <>
      <NewsArticleSchema
        title="OpenAI vs. Elon Musk: The $134B Lawsuit and unsustainable Burn Rate"
        description="The legal battle has moved from theory to evidence, with thousands of pages of unsealed emails and internal documents now public."
        author="ObjectWire Technology Desk"
        authorUrl="https://objectwire.org/team"
        publishedTime="2026-01-31T12:00:00Z"
        modifiedTime="2026-01-31T12:00:00Z"
        articleUrl="https://objectwire.org/news/openai-vs-elon-musk-lawsuit-financial-burn-2026"
        section="Technology"
        keywords={['OpenAI', 'Elon Musk', 'Lawsuit', 'AI Burn Rate']}
      />

      <DynamicNewsArticle
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/news', label: 'News' },
          { href: '/elon-musk', label: 'Elon Musk' },
        ]}
        categories={[
          { label: 'BREAKING', color: 'red' },
          { label: 'FINANCE', color: 'green' },
        ]}
        readTime="10 min read"
        title="OpenAI vs. Elon Musk: Inside the $134B 'Trial of the Century'"
        subtitle="Unsealed diaries, $14B losses, and the desperate pivot to advertisements as the AI giant hits a financial wall"
        heroImage={{
          src: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
          alt: "AI and legal concept",
          caption: "The trial, scheduled for April 2026, could determine the future of AI governance.",
          credit: "Unsplash/Technology Photography"
        }}
        author={{
          name: 'ObjectWire Technology Desk',
          department: 'Legal & Tech Analysis',
          initials: 'OW',
        }}
        publishDate="January 31, 2026"
        relatedArticles={[
          {
            href: '/news/altman-amodei-condemn-ice-shooting-praise-trump',
            category: 'POLITICS',
            categoryColor: 'text-red-600',
            title: 'Altman and Tech Leaders React to Recent Events',
          },
          {
            href: '/microsoft',
            category: 'COMPANY',
            categoryColor: 'text-blue-600',
            title: 'The Microsoft-OpenAI Partnership Explained',
          },
        ]}
      >
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl font-semibold mb-8">
            The legal battle between Elon Musk and OpenAI has escalated into what experts are calling "The Trial of the Century," as unsealed documents reveal a deep rift between the non-profit's original mission and its current for-profit reality.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">I. The Lawsuit: Evidence and "Smoking Guns"</h2>
          <p>
            The legal battle has moved from theory to evidence, with thousands of pages of unsealed emails and internal documents now public. Several key pieces of evidence are taking center stage:
          </p>

          <ul className="space-y-6 my-8">
            <li>
              <strong>The "Lie" Diary:</strong> A central piece of evidence is a private journal entry from OpenAI President Greg Brockman in 2017. In it, he reportedly expressed anxiety about the "lie" of telling Musk they were committed to a non-profit structure while secretly planning a for-profit pivot.
            </li>
            <li>
              <strong>The $134 Billion Calculation:</strong> Musk’s legal team argues his $44 million in initial funding was the "seed" that grew into OpenAI’s $500 billion valuation, asking the court to return "wrongful gains" generated by his backing.
            </li>
            <li>
              <strong>The Microsoft Connection:</strong> Emails from CEO Satya Nadella suggest a "de facto merger" where OpenAI effectively became a Microsoft research lab, violating its non-profit charter.
            </li>
          </ul>

          <ArticleQuote 
            quote="Musk isn't mad about for-profit AI; he's just mad it's not his profit."
            author="OpenAI Defense Counsel"
            title="Official Counter-Suit Filing"
          />

          <h2 className="text-3xl font-bold mt-12 mb-6">II. Financial Crisis: The $14 Billion Burn</h2>
          <p>
            OpenAI’s financial situation is increasingly described as a "high-stakes game of chicken" with the global economy. Despite hitting a revenue run rate of $20 billion, the company is projected to lose <strong>$14 billion</strong> in 2026 alone.
          </p>

          <StatisticsBox 
            title="OpenAI 2026 Financial Projections"
            stats={[
              { label: 'Projected Loss', value: '$14B' },
              { label: 'Sora Ops Cost', value: '$15M/day' },
              { label: 'Revenue Run Rate', value: '$20B' }
            ]}
          />

          <p className="mt-8">
            In a move once called a "last resort" by Sam Altman, OpenAI has officially begun testing <strong>advertisements within ChatGPT</strong>. This shift signals a desperate need for immediate cash flow to offset the costs of building their next-gen models.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">National Security & The "Electron Gap"</h2>
          <p>
            OpenAI recently warned the U.S. government about an "electron gap"—arguing that China is outspending the U.S. on power for AI. They’ve proposed a national goal of 100GW of new energy per year, effectively asking the government to treat AI infrastructure as a national defense priority.
          </p>

          <CaseOverview 
            title="Summary Table: 2026 Outlook"
            items={[
              { label: 'Lawsuit Status', value: 'Trial begins April 27, 2026' },
              { label: 'Financial Health', value: 'Cash depletion expected by late 2026' },
              { label: 'Product Pivot', value: 'Integration of Ads and AI Agents' },
              { label: 'Govt. Goal', value: '100GW energy expansion proposal' }
            ]}
          />

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mt-12">
            <h3 className="text-xl font-bold mb-4">The Federal Backstop</h3>
            <p>
              While the White House has publicly said there will be "no federal bailout for AI," rumors of a "Government Backstop" persist. This would involve the government guaranteeing OpenAI’s massive debts to ensure the U.S. doesn't lose the AI race to China if OpenAI hits a financial wall.
            </p>
          </div>
        </div>
      </DynamicNewsArticle>
    </>
  );
}
