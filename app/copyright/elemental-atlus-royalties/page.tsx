import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, Timeline, TagsSection } from '@/components/NewsArticle';

const SLUG = '/copyright/elemental-atlus-royalties';

export const metadata: Metadata = {
  title: 'Elemental Royalty (ELE) Completes Merger, Lists Nasdaq & Offers Tokenized Gold Dividends | ObjectWire',
  description:
    'Elemental Altus Royalties and EMX Royalty completed their merger on November 13, 2025. The merged company now trades as ELE on TSX Venture Exchange and introduced a groundbreaking dividend payable in Tether Gold (XAUT) — the first of its kind for a publicly listed gold company.',
  keywords: [
    'Elemental Royalty Corporation',
    'Elemental Altus Royalties',
    'ELE',
    'EMX Royalty',
    'Tether Gold',
    'XAUT',
    'tokenized gold dividend',
    'gold royalty company',
    'TSX Venture Exchange',
    'Tether Investments',
    'ELEMF',
    'gold royalty merger 2025',
    'crypto gold dividend',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/copyright/elemental-atlus-royalties',
  },
  openGraph: {
    title: 'Elemental Royalty Completes Merger & Introduces Tokenized Gold Dividends',
    description:
      'The first publicly listed gold company to pay dividends in tokenized gold. Elemental Royalty (ELE) merged with EMX, raised $100M from Tether Investments, and announced XAUT-denominated quarterly dividends.',
    type: 'article',
    url: 'https://www.objectwire.org/copyright/elemental-atlus-royalties',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-02-18T10:00:00Z',
    modifiedTime: '2026-02-18T10:00:00Z',
    section: 'Finance',
    tags: ['Elemental Royalty', 'ELE', 'Tether Gold', 'XAUT', 'Gold Royalty', 'EMX'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elemental Royalty (ELE): Merged, Listed, and Paying Dividends in Tokenized Gold',
    description:
      'Elemental Royalty and EMX completed their merger in Nov 2025. Now they\'re the first public gold company offering dividends in Tether Gold (XAUT). Full breakdown on ObjectWire.',
  },
};

const timelineEvents = [
  {
    time: 'Sept 4, 2025',
    title: 'Definitive Arrangement Agreement Signed',
    description: 'Elemental Altus Royalties and EMX Royalty sign merger terms. EMX shareholders to receive 0.2822 Elemental Altus shares per EMX share.',
  },
  {
    time: 'Nov 13, 2025',
    title: 'Merger Completes via Court-Approved Plan',
    description: 'Plan of arrangement completed under the Business Corporations Act (British Columbia). Former Elemental Altus and EMX shareholders own ~51% and ~49% respectively.',
  },
  {
    time: 'Nov 13, 2025',
    title: 'Tether Investments US$100M Private Placement',
    description: '7,502,502 shares issued to Tether Investments S.A. de C.V. at C$18.38 per share.',
  },
  {
    time: 'Nov 14, 2025',
    title: 'Trading Begins Under New Ticker (ELE)',
    description: 'Shares begin trading on TSX Venture Exchange as ELE and OTCQX Best Market as ELEMF. New CUSIP: 28620K106; ISIN: CA28620K1066.',
  },
  {
    time: 'Feb 17, 2026',
    title: 'Inaugural Dividend Policy Announced',
    description: 'US$0.12/share annually (US$0.03/quarter). First record date end of Q1 2026. First public gold company to offer dividends payable in Tether Gold (XAUT).',
  },
];

export default function ElementalRoyaltiesPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Elemental Royalty Corporation (ELE) Completes Merger, Lists on Nasdaq, and Introduces Tokenized Gold Dividend Option"
        description="Elemental Altus Royalties and EMX Royalty completed their merger on November 13, 2025. Now trading as ELE, the company introduced the first-ever tokenized gold dividend for a publicly listed gold company, payable in Tether Gold (XAUT)."
        author="ObjectWire Editorial"
        publishedTime="2026-02-18T10:00:00Z"
        modifiedTime="2026-02-18T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Finance"
        keywords={['Elemental Royalty', 'ELE', 'EMX Royalty', 'Tether Gold', 'XAUT', 'tokenized gold dividend', 'gold royalty merger']}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Copyright', item: '/copyright' },
              { name: 'Elemental Royalty & Tether Gold', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Elemental Royalty (ELE) Completes Merger, Lists on TSX, and Introduces Tokenized Gold Dividend"
        subtitle="The first publicly listed gold company to offer dividends payable in Tether Gold (XAUT) — a watershed moment for blockchain-based commodity finance."
        category="Finance"
        categoryColor="green"
        topicTag="finance"
        publishDate="February 18, 2026"
        readTime="6 min read"
        breaking={true}
        author={{
          name: 'ObjectWire Editorial',
          role: 'Financial Desk',
        }}
        tags={['Elemental Royalty', 'ELE', 'EMX Royalty', 'Tether', 'Tether Gold', 'XAUT', 'Gold Royalty', 'Tokenized Assets', 'Crypto Dividend', 'TSX']}
      >

        {/* Lede */}
        <p>
          Gold royalty company <strong>Elemental Altus Royalties Corp.</strong> (TSXV: ELE, OTCQX: ELEMF) and <strong>EMX Royalty Corporation</strong> (NYSE American: EMX) completed a landmark merger on <strong>November 13, 2025</strong>, creating one of the most significant gold royalty entities in the junior mining sector. The transaction, approved by a British Columbia court under a plan of arrangement, simultaneously attracted a <strong>US$100 million investment from Tether Investments</strong> and culminated in February 2026 with a dividend announcement that made history: the first publicly listed gold company to offer shareholders the option of receiving dividends in <strong>tokenized gold</strong>.
        </p>

        <HighlightBox type="key-point" color="green">
          <strong>Historic First:</strong> Elemental Royalty Corporation is the first publicly listed gold company to offer dividends payable in <Link href="/crypto/tether" className="text-green-700 underline font-semibold">Tether Gold (XAUT)</Link> — tokenized physical gold on the blockchain. US$0.12 per share annually, paid quarterly at US$0.03 per share starting Q1 2026.
        </HighlightBox>

        {/* Merger Details */}
        <h2>The Merger: Elemental Altus + EMX Royalty</h2>
        <p>
          The merger was structured as a court-approved plan of arrangement under the <em>Business Corporations Act (British Columbia)</em>, with a definitive agreement signed on <strong>September 4, 2025</strong>. Under the terms, EMX shareholders received <strong>0.2822 Elemental Altus shares</strong> for each EMX share held (adjusted for a share consolidation applied to Elemental Altus).
        </p>
        <p>
          Upon completion, former <strong>Elemental Altus shareholders owned approximately 51%</strong> of the combined entity, while former <strong>EMX shareholders held approximately 49%</strong> on a fully diluted basis. The resulting company retained the Elemental Altus name and branding, trading under the combined ticker <strong>ELE</strong>.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-green-700 text-white text-left">
                <th className="px-4 py-3 font-semibold">Detail</th>
                <th className="px-4 py-3 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { label: 'Effective Date', value: 'November 13, 2025' },
                { label: 'Structure', value: 'Plan of Arrangement (BC BCA)' },
                { label: 'Exchange Ratio (EMX → ELE)', value: '0.2822 ELE per EMX share' },
                { label: 'Post-Merger Ownership', value: '~51% Elemental Altus / ~49% EMX (fully diluted)' },
                { label: 'TSX Ticker', value: 'ELE' },
                { label: 'OTCQX Ticker', value: 'ELEMF' },
                { label: 'CUSIP', value: '28620K106' },
                { label: 'ISIN', value: 'CA28620K1066' },
                { label: 'Trading Start', value: 'November 14, 2025' },
              ].map((r) => (
                <tr key={r.label} className="hover:bg-gray-50">
                  <td className="px-4 py-2.5 font-medium text-gray-700 text-xs">{r.label}</td>
                  <td className="px-4 py-2.5 font-bold text-gray-900 text-xs">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tether Investment */}
        <h2>Tether Investments: US$100 Million Private Placement</h2>
        <p>
          Concurrent with the merger close, Elemental Royalty completed a <strong>US$100 million private placement</strong> with <Link href="/crypto/tether" className="text-blue-600 font-medium hover:underline">Tether Investments S.A. de C.V.</Link>, the investment arm of Tether — the issuer of the world&apos;s largest stablecoin, USDT. Under the placement, <strong>7,502,502 shares were issued at C$18.38 per share</strong>, making Tether Investments a significant shareholder in the newly combined company.
        </p>
        <p>
          The strategic rationale for Tether&apos;s investment is multifaceted. Tether has been diversifying its balance sheet beyond US Treasury holdings, and gold royalty companies offer defensive exposure to gold prices without direct commodity custody risk. The investment also laid the groundwork for the February 2026 tokenized gold dividend announcement.
        </p>

        <HighlightBox type="stat" color="blue">
          <strong>US$100 million</strong> private placement from <Link href="/crypto/tether" className="text-blue-700 underline">Tether Investments</Link> at <strong>C$18.38/share</strong> — 7,502,502 new shares issued, strengthening ELE&apos;s balance sheet ahead of integration.
        </HighlightBox>

        {/* Financial Position */}
        <h2>Financial Position &amp; Valuation Metrics</h2>
        <p>
          The merged entity enters 2026 with a strong financial profile, supported by diversified royalty streams from Elemental Altus&apos;s and EMX&apos;s combined portfolio of gold, silver, and base metal royalties and streaming agreements across multiple jurisdictions.
        </p>

        <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
          {[
            { label: 'Current Ratio', value: '~10.1–11.10x', sub: 'Indicates high liquidity', color: 'border-green-500 bg-green-50' },
            { label: 'Debt-to-Equity', value: '0.01–0.02x', sub: 'Minimal leverage', color: 'border-blue-500 bg-blue-50' },
            { label: 'Projected Revenue 2025', value: '~US$85M', sub: 'Full-year estimate', color: 'border-amber-500 bg-amber-50' },
            { label: 'Analyst Consensus 2026', value: '~US$90M', sub: 'Revenue forecast', color: 'border-purple-500 bg-purple-50' },
            { label: 'Share Price (Feb 2026)', value: 'US$19–21', sub: 'Trading range', color: 'border-gray-400 bg-gray-50' },
            { label: 'Market Cap (Feb 2026)', value: '~US$1.2–1.8B', sub: 'Estimated range', color: 'border-teal-500 bg-teal-50' },
          ].map((s) => (
            <div key={s.label} className={`border-l-4 ${s.color} p-4 rounded-r-lg`}>
              <p className="text-xl font-black text-gray-900">{s.value}</p>
              <p className="text-sm font-semibold text-gray-700">{s.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Dividend Policy */}
        <h2>Inaugural Dividend Policy &amp; the Tether Gold Option</h2>
        <p>
          On <strong>February 17, 2026</strong>, Elemental Royalty announced its inaugural dividend policy: <strong>US$0.12 per common share annually</strong>, paid quarterly at <strong>US$0.03 per share</strong>. The first record date is set for the end of Q1 2026.
        </p>
        <p>
          The defining feature of this dividend announcement — and what makes it historically significant — is the option for shareholders to receive their dividend in <strong>Tether Gold (XAUT)</strong>, a tokenized gold product issued by Tether that represents direct ownership of one troy fine ounce of physical gold stored in Swiss vaults. This marks the <strong>first instance of any publicly listed gold company offering dividends in tokenized gold</strong>.
        </p>

        <HighlightBox type="quote" color="orange">
          &ldquo;When a royalty company starts paying dividends in digital gold, it&apos;s like the old mining barons finally handing out nuggets that fit in your wallet.&rdquo;
        </HighlightBox>

        <p>
          <Link href="/crypto/tether" className="text-blue-600 font-medium hover:underline">Tether Gold (XAUT)</Link> carries a market capitalization of approximately <strong>$2.5 billion</strong> as of February 2026. The dividend policy is supported by projected revenue and cash flow growth without compromising the company&apos;s ability to pursue accretive royalty acquisitions.
        </p>

        {/* Why This Matters */}
        <h2>Why Tokenized Gold Dividends Matter</h2>
        <p>
          The introduction of XAUT-denominated dividends represents a convergence of traditional commodity finance and blockchain infrastructure that market observers have long anticipated but rarely seen executed at a public company level. For shareholders, it provides:
        </p>
        <ul>
          <li><strong>Direct gold exposure</strong> — unlike cash dividends that are subject to currency risk, XAUT tracks physical gold prices directly.</li>
          <li><strong>Custody simplicity</strong> — shareholders can hold tokenized gold in a crypto wallet without engaging a metals broker or taking physical delivery.</li>
          <li><strong>Blockchain transparency</strong> — XAUT is audited against physical vault holdings, providing on-chain verifiability.</li>
          <li><strong>Global accessibility</strong> — USDT and XAUT are accessible in markets where traditional financial infrastructure is limited.</li>
        </ul>
        <p>
          The move also signals Tether&apos;s ambition to position XAUT as a serious financial instrument beyond trading speculation — one that can function as institutional income currency within the gold sector.
        </p>

        {/* Timeline */}
        <h2>Key Timeline</h2>
        <div className="not-prose">
          <Timeline events={timelineEvents} />
        </div>

        {/* Disclaimer */}
        <blockquote>
          <strong>Disclaimer:</strong> This article is for informational and journalistic purposes only. Nothing in this article constitutes investment advice. Royalty company stocks and cryptocurrency assets including XAUT carry significant risk. Always consult a qualified financial advisor before making investment decisions.
        </blockquote>

      </NewsArticle>
    </SEOWrapper>
  );
}
