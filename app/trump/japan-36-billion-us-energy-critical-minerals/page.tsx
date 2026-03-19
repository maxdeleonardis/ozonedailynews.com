import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, Timeline } from '@/components/NewsArticle';

const SLUG = '/trump/japan-36-billion-us-energy-critical-minerals';

export const metadata: Metadata = {
  title: 'Japan Commits $36 Billion to US Energy & Critical Minerals Under Trump Trade Pact | ObjectWire',
  description:
    'Japan announced the first investments under its landmark US trade deal on February 17, 2026 — committing $36 billion across three projects: a $33B natural gas plant in Ohio, a $2.1B crude export terminal in Texas, and a $600M synthetic diamond plant in Georgia.',
  keywords: [
    'Japan US trade deal',
    'Japan $36 billion investment',
    'Trump Japan trade pact',
    'SoftBank Ohio power plant',
    'GulfLink Texas crude export terminal',
    'Element Six Georgia diamond plant',
    'Japan $550 billion investment',
    'US Japan energy agreement 2026',
    'Howard Lutnick Japan',
    'Sanae Takaichi Washington',
    'critical minerals supply chain',
    'Trump tariffs trade deal',
    'US energy independence',
    'natural gas Ohio AI data centers',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Japan Commits $36 Billion to US Energy & Critical Minerals Under Trump Trade Pact',
    description:
      'The first tranche of Japan\'s $550B US investment pledge: a record-breaking $33B Ohio gas plant, a Texas deepwater crude terminal, and a Georgia synthetic diamond facility. Full breakdown on ObjectWire.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-02-18T10:00:00Z',
    modifiedTime: '2026-02-18T10:00:00Z',
    section: 'Politics & Trade',
    tags: ['Trump', 'Japan', 'Trade Deal', 'Energy', 'Critical Minerals', 'SoftBank', 'Ohio', 'Texas', 'Georgia'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Japan\'s $36B US Investment Is Live — Ohio Gas Plant, Texas Crude Terminal, Georgia Diamonds',
    description:
      'First tranche of Japan\'s $550B US pledge: the largest natural gas plant in US history plus critical minerals and energy infrastructure. Under Trump\'s trade framework.',
  },
};

const projects = [
  {
    name: 'Ohio Natural Gas-Fired Power Plant',
    cost: '$33 Billion',
    location: 'Portsmouth, Ohio',
    operator: 'SB Energy (SoftBank Group subsidiary)',
    capacity: '9.2 GW — largest natural gas plant in US history',
    color: 'border-orange-500 bg-orange-50',
    dot: 'bg-orange-500',
    highlights: [
      'Exceeds electricity needs of all Ohio households',
      'Designed to support rising AI data center power demand',
      'SoftBank\'s largest single US infrastructure commitment',
    ],
  },
  {
    name: 'Texas GulfLink Deepwater Crude Oil Export Terminal',
    cost: '$2.1 Billion',
    location: 'Offshore Texas Coast',
    operator: 'Sentinel Midstream',
    capacity: '$20–30B in projected annual US crude exports',
    color: 'border-blue-600 bg-blue-50',
    dot: 'bg-blue-600',
    highlights: [
      'Deepwater terminal enabling larger tanker capacity',
      'Secures long-term export capacity for domestic refineries',
      'Strengthens US position as global crude exporter',
    ],
  },
  {
    name: 'Georgia Synthetic Industrial Diamond Manufacturing Plant',
    cost: '$600 Million',
    location: 'Georgia',
    operator: 'Element Six (De Beers Group unit)',
    capacity: '100% of US demand for synthetic diamond grit',
    color: 'border-teal-600 bg-teal-50',
    dot: 'bg-teal-600',
    highlights: [
      'High-pressure facility for advanced manufacturing & semiconductors',
      'Reduces US reliance on Chinese diamond imports',
      'Critical mineral independence for defense and chip supply chains',
    ],
  },
];

const timelineEvents = [
  {
    time: '2025',
    title: 'US-Japan Trade Pact Finalized',
    description: 'Japan pledges $550 billion in US strategic sector investments in exchange for reduced tariffs — automobiles and other goods lowered to 15% baseline from higher proposed levels.',
  },
  {
    time: 'Early Feb 2026',
    title: 'Lutnick-Akazawa Negotiations',
    description: 'US Commerce Secretary Howard Lutnick and Japan\'s Economy Minister Ryosei Akazawa hold discussions finalizing the first investment tranche details.',
  },
  {
    time: 'Feb 17, 2026',
    title: '$36 Billion First Tranche Announced',
    description: 'United States and Japan officially announce the first investments under the trade agreement — three projects spanning Ohio, Texas, and Georgia.',
  },
  {
    time: 'Upcoming',
    title: 'PM Takaichi Washington Visit',
    description: 'Japanese Prime Minister Sanae Takaichi is scheduled to visit Washington to further advance the bilateral investment relationship.',
  },
];

export default function JapanUSEnergyPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Japan Commits $36 Billion to US Energy and Critical Minerals Projects Under Trump Trade Pact"
        description="Japan announced the first investments under its landmark US trade deal on February 17, 2026 — $36 billion across three projects: a $33B Ohio natural gas plant, a $2.1B Texas crude export terminal, and a $600M Georgia synthetic diamond facility."
        author="ObjectWire Editorial"
        publishedTime="2026-02-18T10:00:00Z"
        modifiedTime="2026-02-18T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Politics & Trade"
        keywords={[
          'Japan US trade deal',
          'Trump Japan $550 billion',
          'SoftBank Ohio natural gas plant',
          'GulfLink Texas terminal',
          'Element Six Georgia diamonds',
          'US energy independence',
          'critical minerals supply chain',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Trump', item: '/trump' },
              { name: 'Japan $36B Trade Investment', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Japan Commits $36 Billion to US Energy and Critical Minerals Projects Under Trump Trade Pact"
        subtitle="The first tranche of Japan's $550 billion US investment pledge lands in Ohio, Texas, and Georgia — covering the largest natural gas plant in US history, a Gulf crude export terminal, and a synthetic diamond facility targeting full domestic supply."
        category="Trade & Politics"
        categoryColor="red"
        topicTag="politics"
        publishDate="February 18, 2026"
        readTime="6 min read"
        breaking={true}
        author={{
          name: 'ObjectWire Editorial',
          role: 'Political & Trade Desk',
        }}
        tags={['Trump', 'Japan', 'Trade Deal', 'Energy', 'Critical Minerals', 'Ohio', 'Texas', 'Georgia', 'SoftBank', 'GulfLink', 'Element Six', 'Howard Lutnick', 'Sanae Takaichi']}
      >

        {/* Lede */}
        <p>
          On February 17, 2026, the United States and Japan announced the first investments under their landmark trade agreement — with Japan committing <strong>up to $36 billion</strong> to oil, gas, and critical mineral projects across three US states. The announcement represents the opening tranche of Japan&apos;s sweeping <strong>$550 billion US investment pledge</strong> made as part of the trade deal struck in 2025 under the Trump administration.
        </p>
        <p>
          President Donald Trump highlighted the agreement on social media, declaring: <em>&ldquo;Our MASSIVE Trade Deal with Japan has just launched!&rdquo;</em> — crediting tariff leverage for enabling the scale of the commitments. Japanese Prime Minister <strong>Sanae Takaichi</strong> described the initiatives as delivering mutual benefit and strengthening economic security between the two nations.
        </p>

        <HighlightBox type="key-point" color="orange">
          <strong>$36 billion</strong> in Japanese investment is now committed across three US states — the first installment of a <strong>$550 billion total pledge</strong>. The centerpiece: a $33B Ohio natural gas plant that will be the <strong>largest natural gas-fired facility in US history</strong>.
        </HighlightBox>

        {/* Trade Framework */}
        <h2>Background: The US-Japan Trade Framework</h2>
        <p>
          The trade pact, finalized in 2025, structured Japan&apos;s $550 billion US investment commitment as a condition for reduced tariffs on Japanese imports. Under the agreement, baseline tariff rates on automobiles and other Japanese goods were lowered to <strong>15%</strong> — down from higher levels that had been proposed during earlier trade pressure. The deal focuses on four strategic areas:
        </p>
        <ul>
          <li><strong>Energy exports</strong> — LNG, crude oil, and power generation infrastructure</li>
          <li><strong>Power generation</strong> — Domestic baseload capacity including natural gas and renewables</li>
          <li><strong>Advanced manufacturing</strong> — Synthetic materials, semiconductors, and industrial inputs</li>
          <li><strong>Critical minerals</strong> — Supply chain diversification away from Chinese sources</li>
        </ul>
        <p>
          <strong>Commerce Secretary Howard Lutnick</strong> detailed the first three projects in a statement, emphasizing their combined role in national security and industrial growth. Discussions between Lutnick and Japan&apos;s Economy Minister <strong>Ryosei Akazawa</strong> preceded the formal announcement.
        </p>

        {/* The Three Projects */}
        <h2>The Three Projects: Full Breakdown</h2>
        <p>
          The $36 billion package is divided across three geographically and industrially distinct initiatives, each targeting a different dimension of US strategic vulnerability:
        </p>

        <div className="not-prose space-y-5 my-6">
          {projects.map((p, i) => (
            <div key={p.name} className={`border-l-4 ${p.color} rounded-r-xl p-5 shadow-sm`}>
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-7 h-7 ${p.dot} rounded-full flex items-center justify-center text-white font-black text-sm shrink-0 mt-0.5`}>
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-black text-gray-900 text-base leading-tight">{p.name}</h3>
                  <p className="text-2xl font-black text-gray-900 mt-1">{p.cost}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-3 mb-3 text-xs">
                <div>
                  <span className="text-gray-500 uppercase tracking-wider font-semibold block">Location</span>
                  <span className="font-bold text-gray-900">{p.location}</span>
                </div>
                <div>
                  <span className="text-gray-500 uppercase tracking-wider font-semibold block">Operator</span>
                  <span className="font-bold text-gray-900">{p.operator}</span>
                </div>
                <div>
                  <span className="text-gray-500 uppercase tracking-wider font-semibold block">Capacity / Impact</span>
                  <span className="font-bold text-gray-900">{p.capacity}</span>
                </div>
              </div>
              <ul className="space-y-1">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-gray-400 mt-0.5">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ohio Deep Dive */}
        <h2>Ohio: The AI Power Plant</h2>
        <p>
          The Ohio facility is the headline project. <strong>SB Energy</strong>, a subsidiary of Masayoshi Son&apos;s <strong>SoftBank Group</strong>, will lead a <strong>$33 billion natural gas-fired power plant in Portsmouth, Ohio</strong> — projected to generate <strong>9.2 gigawatts of electricity annually</strong>. To put that in context: the plant&apos;s output exceeds the residential electricity needs of every household in Ohio combined.
        </p>
        <p>
          The project is explicitly designed to serve the surging electricity demand generated by <strong>AI data centers</strong>. The buildout of hyperscale compute infrastructure — from companies like Microsoft, Google, Amazon, and Meta — has created a power demand cliff that existing grid capacity cannot meet. A 9.2 GW baseload facility represents a meaningful contribution to closing that gap at a time when utilities across the Midwest are warning of supply shortfalls.
        </p>

        <HighlightBox type="stat" color="orange">
          <strong>9.2 gigawatts</strong> — the projected annual output of the Portsmouth, Ohio plant. That exceeds the electricity needs of <strong>all Ohio households</strong> and would make it the <strong>single largest natural gas-fired plant in US history</strong>.
        </HighlightBox>

        {/* Texas */}
        <h2>Texas: Unlocking Deepwater Crude Exports</h2>
        <p>
          The <strong>GulfLink Deepwater Crude Oil Export Terminal</strong>, operated by <strong>Sentinel Midstream</strong>, receives $2.1 billion in Japanese support. The offshore Texas facility is engineered to handle very large crude carriers (VLCCs) — tanker classes that cannot currently dock at most US Gulf Coast export facilities due to depth limitations.
        </p>
        <p>
          The terminal is projected to facilitate <strong>$20–30 billion in annual US crude oil exports</strong> once operational, while also securing long-term export capacity for domestic refineries. For Japan, a deepwater terminal partnership directly supports its own energy security by locking in preferential access to US crude — a key diversification goal away from Middle East dependency.
        </p>

        {/* Georgia */}
        <h2>Georgia: Breaking China&apos;s Diamond Grit Monopoly</h2>
        <p>
          The least-publicized but arguably most strategically significant project is the <strong>$600 million synthetic industrial diamond manufacturing plant</strong> in Georgia. Operated by <strong>Element Six</strong>, a unit of De Beers Group, the high-pressure facility is designed to produce synthetic diamond grit meeting <strong>100% of US demand</strong> for advanced manufacturing and semiconductor applications.
        </p>
        <p>
          Industrial diamond grit is a critical input in semiconductor fabrication equipment, precision machining, and defense manufacturing. Currently, the US is heavily reliant on imports — primarily from China — for this material. The Georgia plant directly addresses that supply chain vulnerability, which has been flagged repeatedly in US government critical minerals assessments.
        </p>

        {/* Profit Structure */}
        <h2>Economic Structure: The 90-10 Profit Split</h2>
        <p>
          The financial architecture of the deal is designed to make Japanese participation attractive while ensuring long-term US economic benefit. Under the agreement, <strong>profits from these ventures are shared equally</strong> until Japan&apos;s initial investment capital is fully recovered. After that threshold is crossed, the split shifts to <strong>90% in favor of the United States</strong> and 10% for Japan.
        </p>
        <p>
          This structure functions similarly to a preferred equity arrangement: Japan accepts below-market control over long-term profits in exchange for the tariff concessions and market access that come with the trade deal. For the US, the arrangement means that once initial capital is returned to Japanese investors, the domestic economic benefit of these facilities becomes overwhelmingly American.
        </p>

        <blockquote>
          When tariffs turn into trillion-dollar handshakes, the only thing bigger than the numbers is the number of headlines they generate.
        </blockquote>

        {/* Broader Implications */}
        <h2>Broader Implications: Energy, Supply Chains &amp; the $550B Horizon</h2>
        <p>
          The $36 billion announcement is the opening move in what the Trump administration is positioning as a generational restructuring of US-allied capital flows. The remaining ~$514 billion of Japan&apos;s pledge is expected to flow into similar categories — energy, advanced manufacturing, critical minerals, and potentially semiconductor fabrication — over the coming years.
        </p>
        <p>
          The investments align with three concurrent US policy priorities: building baseload power capacity for the AI economy, diversifying critical mineral supply chains away from China, and re-shoring advanced manufacturing. Japan&apos;s commitment serves its own strategic goals simultaneously — securing LNG supply access, strengthening the bilateral alliance, and ensuring favorable trade terms for its auto industry.
        </p>
        <p>
          Prime Minister Takaichi&apos;s planned visit to Washington is expected to advance further tranches of the investment relationship and potentially formalize additional project commitments. See also: <Link href="/finance" className="text-blue-600 font-medium hover:underline">Finance & Markets coverage</Link> and <Link href="/tech" className="text-blue-600 font-medium hover:underline">Technology sector reporting</Link> for related AI infrastructure and supply chain stories.
        </p>

        {/* Timeline */}
        <h2>Timeline: US-Japan Trade Deal to $36B Launch</h2>
        <div className="not-prose">
          <Timeline events={timelineEvents} />
        </div>

        {/* Summary table */}
        <h2>Project Summary</h2>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="px-4 py-3 font-semibold">Project</th>
                <th className="px-4 py-3 font-semibold">State</th>
                <th className="px-4 py-3 font-semibold">Investment</th>
                <th className="px-4 py-3 font-semibold">Operator</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Natural Gas Power Plant</td>
                <td className="px-4 py-3 text-gray-700 text-xs">Ohio</td>
                <td className="px-4 py-3 font-bold text-orange-600 text-xs">$33B</td>
                <td className="px-4 py-3 text-gray-700 text-xs">SB Energy (SoftBank)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">GulfLink Crude Export Terminal</td>
                <td className="px-4 py-3 text-gray-700 text-xs">Texas</td>
                <td className="px-4 py-3 font-bold text-blue-600 text-xs">$2.1B</td>
                <td className="px-4 py-3 text-gray-700 text-xs">Sentinel Midstream</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900 text-xs">Synthetic Diamond Plant</td>
                <td className="px-4 py-3 text-gray-700 text-xs">Georgia</td>
                <td className="px-4 py-3 font-bold text-teal-600 text-xs">$600M</td>
                <td className="px-4 py-3 text-gray-700 text-xs">Element Six (De Beers)</td>
              </tr>
              <tr className="bg-gray-50 border-t-2 border-gray-300">
                <td className="px-4 py-3 font-black text-gray-900 text-xs" colSpan={2}>Total First Tranche</td>
                <td className="px-4 py-3 font-black text-gray-900 text-xs">~$36B</td>
                <td className="px-4 py-3 text-gray-500 text-xs">of $550B total pledge</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Related */}
        <h2>Related Coverage</h2>
        <ul>
          <li><Link href="/finance" className="text-blue-600 hover:underline font-medium">Finance &amp; Markets — Trade deal economic analysis →</Link></li>
          <li><Link href="/tech" className="text-blue-600 hover:underline font-medium">Technology — AI data center power demand →</Link></li>
          <li><Link href="/news" className="text-blue-600 hover:underline font-medium">News Hub — Latest breaking coverage →</Link></li>
          <li><Link href="/news/world-cup-travel-bans-trump-policy" className="text-blue-600 hover:underline font-medium">Trump Foreign Policy — World Cup travel bans →</Link></li>
        </ul>

      </NewsArticle>
    </SEOWrapper>
  );
}
