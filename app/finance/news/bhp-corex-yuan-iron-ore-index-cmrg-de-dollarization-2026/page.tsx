import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const SLUG = '/finance/news/bhp-corex-yuan-iron-ore-index-cmrg-de-dollarization-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'BHP COREX Index Deal | Yuan Iron Ore Pricing, De-Dollarization 2026',
  description:
    'BHP agreed to a 26% COREX yuan-linked index weighting in long-term iron ore contracts with China Mineral Resources Group, the first Big Four miner to accept Chinese portside pricing benchmarks.',
  keywords: [
    'BHP COREX index agreement 2026',
    'BHP yuan iron ore pricing',
    'China iron ore yuan settlement CMRG',
    'COREX 61% portside index BHP',
    'BHP Jimblebar fines China contract',
    'iron ore de-dollarization 2026',
    'petroyuan iron ore pricing',
    'BHP China Mineral Resources Group deal',
    'Hormuz toll yuan payment IRGC',
    'petroyuan vs petrodollar 2026',
    'iron ore yuan pricing impact steel mills',
    'BHP 1.8% vessel rebate China',
    'Platts Argus iron ore benchmark replacement',
    'renminbi commodity pricing 2026',
    'BHP Q2 revenue COREX impact',
    'Rio Tinto Vale yuan pricing pressure',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'BHP Breaks Ranks | Yuan-Linked COREX Index Enters Iron Ore Contracts for First Time',
    description:
      'BHP agreed a 26% COREX portside weighting in Jimblebar fines contracts with CMRG through FY2027. The first Big Four miner concession to Chinese yuan benchmarks lands as the Hormuz toll forces RMB reserves across global shipping.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-26T22:00:00Z',
    modifiedTime: '2026-04-26T22:00:00Z',
    section: 'Finance',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Iron ore mining operations representing BHP\'s new yuan-linked COREX index deal with China Mineral Resources Group',
      },
    ],
    tags: ['BHP', 'Iron Ore', 'Yuan', 'COREX Index', 'De-Dollarization', 'China'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BHP Accepts Yuan-Linked Pricing for Iron Ore | First Big Four Miner to Concede to COREX Index',
    description:
      '26% COREX weighting in Jimblebar fines contracts. 1.8% vessel rebate to settle the port-ban dispute. The Hormuz toll is forcing global shipping into RMB reserves — now it\'s hitting mining contracts too.',
    images: [OG_IMAGE],
  },
};

export default function FinanceNewsBhpCorexYuanIronOreIndexCmrgDeDollarization2026Page() {
  return (
    <NewsArticle
      title="BHP Breaks Ranks with Big Four Miners | Agrees to Yuan-Linked COREX Index in Iron Ore Contracts with China"
      subtitle="BHP accepted a 26% weighting for Beijing's COREX portside index in long-term Jimblebar fines contracts with state-backed China Mineral Resources Group, the first time a major global miner has conceded Chinese yuan benchmarks in a long-term supply agreement"
      category="Finance"
      categoryColor="green"
      topicTag="finance"
      publishDate="April 26, 2026"
      readTime="5 min read"
      breaking={false}
      trending={true}
      author={{
        name: 'Jack Brennan',
        role: 'Finance Reporter',
        authorSlug: 'jack-brennan',
      }}
      thumbnail={{
        src: OG_IMAGE,
        alt: 'Iron ore mining and shipping operations representing the BHP COREX yuan-linked pricing deal with China Mineral Resources Group',
      }}
      tags={['BHP', 'Iron Ore', 'COREX Index', 'Yuan Pricing', 'De-Dollarization']}
      slug="finance-news-bhp-corex-yuan-iron-ore-index-cmrg-de-dollarization-2026"
      url={SLUG}
    >
      <div className="prose prose-lg max-w-none">
        <p>
          <strong>BHP Group</strong>, the world's largest miner, has ended a six-month standoff with Beijing by agreeing to incorporate a Chinese yuan-linked pricing index into its long-term iron ore contracts, marking the first time one of the four dominant global miners has formally accepted Chinese control over a component of commodity pricing. The deal, announced April 24, 2026, following intensive negotiations with state-backed <strong>China Mineral Resources Group (CMRG)</strong>, covers BHP's flagship <strong>Jimblebar fines</strong> product through the end of the 2027 financial year. For broader context on the commodities and trade finance environment, see the <Link href="/finance" className="text-blue-600 hover:text-blue-800 underline">ObjectWire Finance hub</Link>.
        </p>

        <h2>The COREX Deal | 26% Yuan Weighting, 1.8% Vessel Rebate</h2>
        <p>
          The hybrid pricing model accepted by BHP uses the <strong>COREX 61% Portside Index</strong>, a Beijing-based benchmark that tracks the price of iron ore already sitting in Chinese ports, rather than the traditional seaborne indices such as Platts or Argus, which are settled in US dollars and reflect shipping prices at origin. The <strong>COREX index will carry a 26% weighting</strong> in the final price calculation for affected contracts, with the remaining 74% remaining tied to legacy dollar-denominated benchmarks.
        </p>
        <p>
          BHP also agreed to provide a <strong>1.8% rebate per vessel</strong> on these contracts, settling a long-running dispute that had seen certain BHP ore grades effectively excluded from Chinese port acceptance queues in early 2026. The rebate functions as a retroactive concession for shipments that faced delays or surcharges during the standoff period. CMRG has not commented on the terms of the dispute or the timeline of negotiations. BHP's statement described the arrangement as reflecting "a shared commitment to long-term supply stability."
        </p>
        <p>
          The significance of the COREX concession lies in its precedent rather than its 26% weighting. Portside indices, which track ore priced in RMB at Chinese storage facilities, give Chinese buyers structural pricing leverage over seaborne suppliers because they measure a market that Beijing directly administers. A miner accepting even a minority COREX weighting validates the index's legitimacy as a global benchmark, which creates pressure on <strong>Rio Tinto</strong> and <strong>Vale</strong> to accept similar terms in their own contract renegotiations. Neither company has commented on whether it faces equivalent pressure from CMRG.
        </p>

        <h2>The Hormuz Toll Connection | IRGC Yuan Demands Are Reshaping Trade Finance</h2>
        <p>
          The BHP deal did not emerge in a vacuum. Since mid-March 2026, the <strong>Islamic Revolutionary Guard Corps</strong> has enforced a mandatory toll of approximately <strong>$1 per barrel</strong> on oil tankers transiting the Strait of Hormuz, with payment required in <strong>Chinese yuan</strong> routed through CIPS and Kunlun Bank, or in stablecoins. US dollars are refused. With roughly 20% of the world's oil supply passing through the Strait, this toll has forced global shipping companies to maintain substantial RMB reserves for the first time as an operational necessity rather than a strategic hedge. For related coverage on the Hormuz shipping disruptions, see ObjectWire's reporting on <Link href="/news/world/imo-strait-of-hormuz-iran-ship-seizures-2026" className="text-blue-600 hover:text-blue-800 underline">IMO vessel seizures and the dual blockade</Link>.
        </p>
        <p>
          The knock-on effect is that Chinese buyers now have a credible argument that dollar-denominated commodity pricing creates unnecessary currency conversion friction for trade that is increasingly settled in RMB at multiple points in the supply chain. China spent <strong>$123 billion on iron ore in 2025</strong>. Shifting even a partial weighting of that settlement to yuan-linked benchmarks insulates the Chinese steel industry from the US Treasury's ability to apply financial pressure through dollar-denominated markets. The BHP deal is, in effect, a steel sector consequence of the Hormuz toll.
        </p>

        <h2>What Comes Next | Rio Tinto, Vale, and the COREX Precedent</h2>
        <p>
          The commodity market's immediate focus is whether BHP's concession triggers a cascade. <strong>Rio Tinto</strong>, whose Pilbara iron ore operations make it the second-largest supplier to Chinese steel mills after BHP, has been in parallel discussions with CMRG and has not disclosed any change to its pricing model as of April 26. <strong>Vale</strong>, the Brazilian giant whose ore carries a premium for its higher iron content, faces a structurally different negotiating position because its ore travels farther and incurs higher freight costs, making portside pricing comparisons less directly analogous.
        </p>
        <p>
          For steel mill operators, the near-term question is whether COREX portside pricing, which reflects ore already imported and sitting in Chinese storage, is systematically cheaper than seaborne pricing. If COREX consistently underprices Platts at times of global tightness, then any contract with a COREX weighting produces buyer savings in tight markets, and any contract without one produces buyer losses. That asymmetry is what gives CMRG its leverage. For context on how de-dollarization trends are intersecting with crypto infrastructure and cross-border stablecoin settlement, see ObjectWire's coverage of <Link href="/finance/news/wall-street-tokenized-trading-iran-crisis-2026" className="text-blue-600 hover:text-blue-800 underline">Wall Street's tokenized trading response to the Iran crisis</Link> and the <Link href="/trump" className="text-blue-600 hover:text-blue-800 underline">Trump administration's broader economic posture</Link>.
        </p>
      </div>
    </NewsArticle>
  );
}
