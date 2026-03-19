import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/california/california-tech-layoffs-2026-ai-restructuring-26000-job-cuts';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: "California Tech Sector Announces 26,000+ Job Cuts in Early 2026 Amid AI Restructuring | ObjectWire",
  description:
    "California-based tech companies announced 26,283 job cuts year-to-date through February 2026, according to Challenger, Gray & Christmas — with Amazon, Meta, Workday, Block, and C3.ai all contributing to the wave of AI-driven workforce restructuring.",
  keywords: [
    'California tech layoffs 2026',
    'California 26283 job cuts February 2026',
    'Amazon Meta Workday Block C3.ai layoffs California',
    'AI restructuring tech layoffs California 2026',
    'Challenger Gray Christmas California job cuts 2026',
    'California WARN notices tech layoffs 2026',
    'Bay Area tech layoffs early 2026',
    'Block 4000 layoffs fintech San Francisco 2026',
    'Workday 400 layoffs Pleasanton 2026',
    'Silicon Valley job cuts AI automation 2026',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "California Tech Sector Announces 26,000+ Job Cuts in Early 2026 Amid AI Restructuring",
    description:
      "26,283 tech job cuts announced in California through February 2026. Amazon, Meta, Block, Workday, and C3.ai all contributed — with 20.4% of global tracked cuts directly linked to AI adoption.",
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-18T15:00:00Z',
    modifiedTime: '2026-03-18T15:00:00Z',
    section: 'Technology',
    tags: [
      'California', 'Tech Layoffs', 'AI', 'Amazon', 'Meta', 'Block',
      'Workday', 'C3.ai', 'Silicon Valley', 'Technology', 'Jobs',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "26,000+ California Tech Jobs Cut in Early 2026 — AI Is the Common Thread | ObjectWire",
    description:
      "Amazon, Meta, Block, Workday, and C3.ai all contributed to 26,283 job cuts across California through February 2026. U.S. tech announcements are up 51% year-over-year.",
  },
  other: {
    news_keywords:
      'California tech layoffs 2026, AI restructuring job cuts, Amazon Meta Block Workday layoffs, Silicon Valley layoffs early 2026',
  },
};

// =============================================================================
// PAGE
// =============================================================================

export default function CaliforniaTechLayoffs2026Page() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="California Tech Sector Announces 26,000+ Job Cuts in Early 2026 Amid AI Restructuring"
        description="California-based tech companies announced 26,283 job cuts year-to-date through February 2026, per Challenger, Gray & Christmas, as AI-driven restructuring accelerates in the Bay Area and Silicon Valley."
        author="ObjectWire Technology Desk"
        publishedTime="2026-03-18T15:00:00Z"
        modifiedTime="2026-03-18T15:00:00Z"
        imageUrl="https://www.objectwire.org/images/california-tech-layoffs-og.jpg"
        articleUrl={FULL_URL}
        section="Technology"
        keywords={[
          'California tech layoffs 2026',
          'AI restructuring job cuts Silicon Valley',
          'Amazon Meta Block Workday C3.ai layoffs California',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'California', item: '/california' },
              { name: 'Tech Layoffs 2026', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="California Tech Sector Announces Thousands of Job Cuts in Early 2026 Amid AI Restructuring"
        subtitle="26,283 positions eliminated year-to-date through February — Amazon, Meta, Block, Workday, and C3.ai all contributing as AI automation reshapes Silicon Valley's workforce."
        category="Technology"
        categoryColor="red"
        topicTag="technology"
        publishDate="March 18, 2026"
        readTime="5 min read"
        author={{
          name: 'ObjectWire Technology Desk',
          role: 'Technology Reporter',
        }}
        tags={[
          'California', 'Tech Layoffs', 'AI', 'Amazon', 'Meta', 'Block',
          'Workday', 'C3.ai', 'Silicon Valley', 'Technology', 'Jobs',
        ]}
        slug={SLUG}
        url={SLUG}
      >

        {/* Video embed */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-2xl">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/6PhS3XdHylg"
                title="California Tech Layoffs 2026 — AI Restructuring Coverage"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Lede */}
        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
          California-based technology companies announced{' '}
          <strong>26,283 job cuts</strong> year-to-date through February 2026, according
          to data from <strong>Challenger, Gray &amp; Christmas</strong> — ranking the
          state among the highest in the nation for workforce reductions and cementing
          early 2026 as one of the most disruptive restructuring periods for Silicon Valley
          in recent memory.
        </p>

        {/* Stat highlight */}
        <HighlightBox type="stat" color="orange">
          <strong>26,283</strong> job cuts announced in California through February 2026 —
          including <strong>8,286 in January</strong> and <strong>17,997 in February</strong>.
          U.S. tech announcements are up <strong>51%</strong> from the same period in 2025.
        </HighlightBox>

        {/* Monthly breakdown */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          California Layoff Announcements: Monthly Breakdown
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-red-700 text-white">
                <th className="px-4 py-3 text-left font-semibold">Period</th>
                <th className="px-4 py-3 text-left font-semibold">California Cuts</th>
                <th className="px-4 py-3 text-left font-semibold">National Tech Total</th>
                <th className="px-4 py-3 text-left font-semibold">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['January 2026', '8,286', '108,435 (all sectors)', 'Challenger, Gray & Christmas'],
                ['February 2026', '17,997', '~24,895 (tech)', 'Challenger, Gray & Christmas'],
                ['YTD Feb 2026 (California)', '26,283', '33,330 (U.S. tech)', 'Challenger, Gray & Christmas'],
                ['YTD mid-March 2026 (global tech)', '—', '45,363–56,431', 'RationalFX / TrueUp'],
              ].map(([period, ca, nat, src]) => (
                <tr key={period} className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{period}</td>
                  <td className="px-4 py-3 text-gray-700">{ca}</td>
                  <td className="px-4 py-3 text-gray-700">{nat}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{src}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Major companies */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Major Company Cuts with California Impact
        </h2>

        <div className="space-y-4 mb-8">
          {[
            {
              company: 'Amazon',
              hq: 'Bay Area offices',
              cuts: '16,000 nationwide (Jan 2026)',
              detail: 'Corporate positions eliminated as part of broader annual restructuring, with Bay Area offices included in the reduction.',
              color: 'border-orange-400',
            },
            {
              company: 'Block',
              hq: 'San Francisco, CA',
              cuts: '~4,000 (40% of workforce, Feb 2026)',
              detail: 'Fintech company cited AI-assisted operations as justification for the largest proportional cut of any firm in the wave — eliminating 40% of its workforce.',
              color: 'border-red-500',
            },
            {
              company: 'Meta Platforms',
              hq: 'Menlo Park, CA',
              cuts: 'Hundreds in California (ongoing)',
              detail: 'Reductions in Reality Labs and other divisions, including Bay Area sites, as part of multi-quarter restructuring focused on AI prioritization.',
              color: 'border-blue-400',
            },
            {
              company: 'Workday',
              hq: 'Pleasanton, CA',
              cuts: '~400 (2% of workforce, Feb 2026)',
              detail: 'Pleasanton-based enterprise software firm cut approximately 400 roles, focused on customer support, following earlier reductions tied to AI efficiency gains.',
              color: 'border-purple-400',
            },
            {
              company: 'C3.ai',
              hq: 'Redwood City, CA',
              cuts: '71 (WARN notice filed)',
              detail: 'Filed a California EDD WARN notice for 71 local layoffs at its Redwood City HQ: 18 data scientists and 45 engineers among those affected.',
              color: 'border-gray-400',
            },
            {
              company: 'Pinterest',
              hq: 'San Francisco / Palo Alto, CA',
              cuts: '118 (WARN notice filed)',
              detail: 'California EDD WARN notice documented 118 cuts across San Francisco and Palo Alto offices.',
              color: 'border-pink-400',
            },
            {
              company: 'Google',
              hq: 'Sunnyvale, CA',
              cuts: '77 in Sunnyvale (WARN notice)',
              detail: 'WARN notice filed with California EDD for 77 Sunnyvale cuts as part of ongoing team restructuring.',
              color: 'border-green-400',
            },
          ].map(({ company, hq, cuts, detail, color }) => (
            <div key={company} className={`border-l-4 ${color} bg-white border border-gray-200 rounded-r-xl p-5 shadow-sm`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className="font-bold text-gray-900 text-lg">{company}</h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{hq}</span>
                  <span className="bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded">{cuts}</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        {/* AI link */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          The AI Connection: Automation Driving Structural Cuts
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          According to Challenger, Gray &amp; Christmas, <strong>20.4% of global tracked
          cuts</strong> in early 2026 are directly linked to AI adoption — with companies
          explicitly citing automation efficiency in customer support, engineering, and
          data roles as the reason for eliminating positions. This marks a shift from
          earlier restructuring waves, where macroeconomic conditions and over-hiring
          during the pandemic era were the primary stated causes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          California WARN filings — mandatory 60-day notices to the Employment Development
          Department for layoffs of 50 or more at a single location — document the
          specificity of the impact: data scientists and engineers are disproportionately
          represented in the cuts at firms like C3.ai, where AI tools are now handling
          tasks that previously required large teams.
        </p>

        <HighlightBox type="key-point" color="purple">
          <strong>20.4%</strong> of global tracked job cuts in early 2026 are directly
          attributed to AI adoption — companies citing automation in customer support,
          engineering, and data roles. California EDD WARN notices confirm data scientists
          and engineers as disproportionately affected categories.
        </HighlightBox>

        {/* National context */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          National and Historical Context
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          U.S. tech job announcements totaled <strong>33,330 through February 2026</strong> —
          up <strong>51% from the same period in 2025</strong>. California, as the
          headquarters state for the majority of the country&apos;s largest technology
          employers, accounts for a substantial share of that national total. Global tech
          cuts tracked through mid-March reached between 45,363 (RationalFX) and 56,431
          (TrueUp) depending on methodology and which announcements are included.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Oracle has separately signaled potential thousands of additional cuts to redirect
          capital toward AI data center infrastructure, with California operations likely
          to be included given the company&apos;s Austin-relocated headquarters still
          maintains significant California technical headcount.
        </p>

        {/* Related */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Related Coverage
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/nvidia/news/nvidia-engineer-inference-budget-token-salary-gtc-2026" className="text-blue-600 hover:underline font-medium">
                NVIDIA to Grant Engineers &apos;Inference Budgets&apos; Worth 50% of Base Salary
              </Link>
            </li>
            <li>
              <Link href="/tech" className="text-blue-600 hover:underline font-medium">
                ObjectWire Tech Coverage
              </Link>
            </li>
          </ul>
        </div>

      </NewsArticle>
    </SEOWrapper>
  );
}
