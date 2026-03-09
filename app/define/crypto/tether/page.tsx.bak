import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';

const SLUG = '/define/crypto/tether';

export const metadata: Metadata = {
  title: 'Tether (USDT) - What Is It? Stablecoin, Reserves & History | ObjectWire',
  description:
    'Tether (USDT) is the world\'s largest stablecoin by market cap, pegged 1:1 to the US dollar. Learn how Tether works, its reserve backing, Tether Gold (XAUT), and its role in crypto markets.',
  keywords: [
    'Tether',
    'USDT',
    'stablecoin',
    'Tether Investments',
    'Tether Gold',
    'XAUT',
    'cryptocurrency',
    'crypto stablecoin',
    'dollar pegged crypto',
    'Tether reserves',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/crypto/tether',
  },
  openGraph: {
    title: 'Tether (USDT) - World\'s Largest Stablecoin',
    description:
      'Full profile of Tether: how it works, its reserve structure, Tether Gold (XAUT), controversies, and its expanding investment arm.',
    type: 'article',
    url: 'https://www.objectwire.org/define/crypto/tether',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tether (USDT) - World\'s Largest Stablecoin | ObjectWire',
    description: 'How Tether works, what backs it, and why it matters for the entire crypto market.',
  },
};

const infoRows = [
  { label: 'Full Name', value: 'Tether' },
  { label: 'Ticker', value: 'USDT' },
  { label: 'Type', value: 'Fiat-collateralized Stablecoin' },
  { label: 'Peg', value: '1 USD' },
  { label: 'Launched', value: '2014' },
  { label: 'Issuer', value: 'Tether Operations Limited' },
  { label: 'Parent', value: 'iFinex Inc.' },
  { label: 'Market Cap', value: '~$140B+ (2026)' },
  { label: 'Blockchains', value: 'Ethereum, Tron, Solana, +10 more' },
  { label: 'Tether Gold', value: 'XAUT (~$2.5B market cap)' },
  { label: 'Headquarters', value: 'British Virgin Islands' },
  { label: 'Status', value: 'Active' },
];

export default function TetherPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Define', item: '/define' },
              { name: 'Crypto', item: '/define/crypto' },
              { name: 'Tether', item: SLUG },
            ]}
          />
        </div>
      </div>

      {/* Wikipedia-style layout */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="lg:grid lg:grid-cols-4 lg:gap-10">

          {/* ── MAIN CONTENT ── */}
          <div className="lg:col-span-3">

            {/* Title block */}
            <div className="mb-6 border-b border-gray-300 pb-4">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full">₿ Crypto</span>
                <span className="text-xs font-bold uppercase tracking-wider bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full">Stablecoin</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-1">Tether <span className="text-gray-500 font-normal text-2xl">(USDT)</span></h1>
              <p className="text-gray-600 text-lg">
                The world&apos;s largest stablecoin by market capitalization, pegged 1:1 to the US dollar and underpinning a significant share of global cryptocurrency trading volume.
              </p>
            </div>

            {/* TOC */}
            <nav className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm inline-block min-w-[220px]">
              <p className="font-bold text-gray-800 mb-2 text-xs uppercase tracking-wider">Contents</p>
              <ol className="space-y-1 text-blue-700 list-decimal list-inside">
                <li><a href="#overview" className="hover:underline">Overview</a></li>
                <li><a href="#how-it-works" className="hover:underline">How Tether Works</a></li>
                <li><a href="#reserves" className="hover:underline">Reserve Backing</a></li>
                <li><a href="#tether-gold" className="hover:underline">Tether Gold (XAUT)</a></li>
                <li><a href="#tether-investments" className="hover:underline">Tether Investments</a></li>
                <li><a href="#blockchains" className="hover:underline">Supported Blockchains</a></li>
                <li><a href="#controversies" className="hover:underline">Controversies & Regulation</a></li>
                <li><a href="#market-role" className="hover:underline">Role in Crypto Markets</a></li>
              </ol>
            </nav>

            {/* Section: Overview */}
            <section id="overview" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Tether</strong> (ticker: <strong>USDT</strong>) is a fiat-collateralized stablecoin issued by <strong>Tether Operations Limited</strong>, a subsidiary of iFinex Inc., the same holding company that owns the Bitfinex cryptocurrency exchange. First launched in 2014 under the name &quot;Realcoin,&quot; Tether was rebranded and became the dominant stablecoin in the digital asset ecosystem.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Each USDT token is designed to maintain a value of exactly <strong>$1.00 USD</strong>, achieved through a combination of cash, cash equivalents, and other assets held in reserve. As of early 2026, Tether&apos;s market capitalization exceeds <strong>$140 billion</strong>, making it the third-largest cryptocurrency overall — behind only Bitcoin and Ethereum — and by far the largest stablecoin.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Tether is issued and redeemed by Tether Operations Limited, with authorized users able to deposit fiat currency and receive USDT at a 1:1 ratio, or return USDT to receive dollars back. In practice, most retail participants access USDT through cryptocurrency exchanges rather than directly minting or redeeming through Tether Limited.
              </p>
            </section>

            {/* Section: How It Works */}
            <section id="how-it-works" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4">How Tether Works</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tether operates as a <em>fiat-collateralized stablecoin</em>: for every USDT in circulation, the company claims to hold an equivalent amount of value in reserve assets. Unlike algorithmic stablecoins (e.g., the defunct TerraUSD) which use on-chain mechanisms to maintain their peg, Tether relies on centralized custody of real-world assets.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mb-4">
                <p className="text-blue-900 font-semibold text-sm mb-1">Mint & Burn Mechanism</p>
                <p className="text-blue-800 text-sm leading-relaxed">
                  When an authorized customer deposits $1 million USD, Tether mints 1,000,000 USDT. When that customer redeems, the USDT is &quot;burned&quot; (destroyed) and dollars are returned. This supply-demand loop is what theoretically maintains the $1.00 peg.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                On the secondary market, the peg is reinforced by arbitrage: if USDT trades at $0.99, traders buy cheap USDT and redeem for $1.00 profit; if USDT trades above $1.00, traders mint fresh USDT and sell it. This dynamic keeps the stablecoin tightly pegged under normal market conditions.
              </p>
            </section>

            {/* Section: Reserves */}
            <section id="reserves" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4">Reserve Backing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tether publishes quarterly attestation reports (not full audits) prepared by accounting firms, disclosing its reserve composition. As of late 2025 / early 2026, the reported breakdown is approximately:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left">
                      <th className="px-4 py-2 font-semibold border-b border-gray-200">Asset Type</th>
                      <th className="px-4 py-2 font-semibold border-b border-gray-200">% of Reserves</th>
                      <th className="px-4 py-2 font-semibold border-b border-gray-200">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { asset: 'US Treasury Bills', pct: '~83%', note: 'Primarily short-term T-bills' },
                      { asset: 'Money Market Funds', pct: '~5%', note: 'High-liquidity funds' },
                      { asset: 'Cash & Bank Deposits', pct: '~3%', note: 'Held at partner banks' },
                      { asset: 'Reverse Repos', pct: '~5%', note: 'Overnight / short-term' },
                      { asset: 'Other Assets', pct: '~4%', note: 'Corporate bonds, Bitcoin, gold, etc.' },
                    ].map((r) => (
                      <tr key={r.asset} className="hover:bg-gray-50">
                        <td className="px-4 py-2 font-medium text-gray-900">{r.asset}</td>
                        <td className="px-4 py-2 text-green-700 font-bold">{r.pct}</td>
                        <td className="px-4 py-2 text-gray-500">{r.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs italic">
                * Figures are approximate and based on Tether&apos;s published attestation reports. Independent full audits have not been completed.
              </p>
            </section>

            {/* Section: Tether Gold */}
            <section id="tether-gold" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4">Tether Gold (XAUT)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In addition to USDT, Tether issues <strong>Tether Gold</strong> (ticker: <strong>XAUT</strong>), a tokenized representation of physical gold. Each XAUT token corresponds to one troy fine ounce of gold held in a Swiss vault. XAUT allows holders to gain direct exposure to gold&apos;s price movement via blockchain, without needing to physically custody gold.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                {[
                  { label: 'Backing', value: '1 oz gold per XAUT' },
                  { label: 'Storage', value: 'Swiss vaults' },
                  { label: 'Market Cap (2026)', value: '~$2.5 billion' },
                ].map((s) => (
                  <div key={s.label} className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                    <p className="text-amber-900 font-bold text-lg">{s.value}</p>
                    <p className="text-amber-700 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                Tether Gold is notable for its role in financial innovation. In February 2026, gold royalty company <strong>Elemental Royalty Corporation (ELE)</strong> became the first publicly listed company to offer dividends payable in tokenized gold — specifically XAUT — making Tether Gold a key instrument in bridging traditional commodity finance with blockchain infrastructure. See:{' '}
                <Link href="/copyright/elemental-atlus-royalties" className="text-blue-600 hover:underline font-medium">Elemental Royalty / Tether Gold Dividend Story →</Link>
              </p>
            </section>

            {/* Section: Tether Investments */}
            <section id="tether-investments" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4">Tether Investments</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Beyond its stablecoin operations, Tether has deployed capital through its investment arm, <strong>Tether Investments S.A. de C.V.</strong>, making strategic minority stakes in companies across technology, energy, and finance. Notable investments include:
              </p>
              <ul className="space-y-3 text-gray-700 text-sm mb-4">
                <li className="flex gap-3">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <div>
                    <strong>Elemental Royalty Corporation (2025)</strong> — US$100 million private placement; 7.5M+ shares acquired at C$18.38/share, becoming a significant shareholder in the newly merged gold royalty company.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <div>
                    <strong>Northern Data AG</strong> — Strategic investment in high-performance computing infrastructure, supporting Bitcoin mining and AI workloads.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <div>
                    <strong>Adecoagro S.A.</strong> — Agricultural and renewable energy investments in Latin America.
                  </div>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Tether&apos;s investment strategy reflects a broader effort to diversify the company&apos;s balance sheet beyond US Treasuries and to establish presence in sectors deemed strategic for the long-term crypto economy.
              </p>
            </section>

            {/* Section: Blockchains */}
            <section id="blockchains" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4">Supported Blockchains</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tether is issued across more than a dozen blockchain networks, allowing users to transact USDT wherever they hold assets. The most widely used chains include:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Ethereum (ERC-20)', 'Tron (TRC-20)', 'Solana (SPL)', 'Avalanche (AVAX)', 'Polygon', 'BNB Smart Chain', 'Algorand', 'Bitcoin (Omni Layer)', 'EOS', 'Liquid Network', 'Kusama', 'TON'].map((chain) => (
                  <span key={chain} className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 font-medium">
                    {chain}
                  </span>
                ))}
              </div>
            </section>

            {/* Section: Controversies */}
            <section id="controversies" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4">Controversies &amp; Regulation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tether has faced persistent scrutiny from regulators, researchers, and journalists over its reserve transparency and the relationship between USDT issuance and cryptocurrency price manipulation.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">CFTC &amp; DOJ Settlements (2021)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Tether and Bitfinex settled with the U.S. Commodity Futures Trading Commission for $41 million over claims that USDT was not always fully backed. The DOJ also extracted a settlement related to unlicensed money transmission.
                  </p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Reserve Transparency Concerns</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Critics have long called for a full independent audit rather than the attestation reports Tether currently publishes. In 2021, the New York Attorney General revealed Tether&apos;s reserves had at times included loans to affiliated entities.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Market Manipulation Research</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Academic papers (Griffin &amp; Shams, 2020) alleged that Tether issuance was used to manipulate Bitcoin prices during the 2017 bull run. Tether contests these findings.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Market Role */}
            <section id="market-role" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4">Role in Crypto Markets</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                USDT consistently ranks as one of the highest-volume assets in global cryptocurrency trading, often exceeding even Bitcoin in 24-hour trading volume on major exchanges. Its utility stems from several key functions:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm list-none">
                {[
                  { icon: '💱', title: 'Trading Pair Base', desc: 'Most crypto exchanges list assets against USDT, making it the de facto quote currency for crypto pairs.' },
                  { icon: '🌍', title: 'Dollar Access', desc: 'In countries with restricted USD access (Turkey, Argentina, etc.), USDT provides a practical dollar substitute.' },
                  { icon: '⚡', title: 'Settlement & DeFi', desc: 'USDT is the backbone of DeFi lending, liquidity pools, and cross-chain settlements on Ethereum and Tron.' },
                  { icon: '🏦', title: 'Institutional Liquidity', desc: 'Exchanges, market makers, and hedge funds use USDT as a low-cost, high-speed alternative to wire transfers.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3 bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <strong className="text-gray-900">{item.title}:</strong>{' '}
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-8 text-xs text-yellow-800">
              <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute financial or investment advice. Cryptocurrency investments carry significant risk. Always consult a qualified financial professional.
            </div>

            {/* Meta footer */}
            <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-400 space-y-0.5">
              <p>Last Updated: February 18, 2026</p>
              <p>Category: Crypto · Stablecoins</p>
              <p>Author: ObjectWire Editorial</p>
            </div>
          </div>

          {/* ── SIDEBAR (Wikipedia infobox style) ── */}
          <aside className="lg:col-span-1 mt-8 lg:mt-0">
            <div className="sticky top-6 space-y-5">

              {/* Infobox */}
              <div className="bg-white border-2 border-gray-300 rounded-xl overflow-hidden shadow-sm text-sm">
                <div className="bg-amber-500 px-4 py-3 text-center">
                  <p className="text-white font-black text-lg tracking-wide">USDT</p>
                  <p className="text-amber-100 text-xs font-medium">Tether Stablecoin</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {infoRows.map((row) => (
                    <div key={row.label} className="flex px-3 py-2 gap-2">
                      <span className="text-gray-500 text-xs w-28 shrink-0 leading-tight pt-0.5">{row.label}</span>
                      <span className="font-medium text-gray-900 text-xs leading-tight">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related */}
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider">Related Coverage</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/copyright/elemental-atlus-royalties" className="text-blue-600 hover:underline text-sm">
                      → Elemental Royalty & Tether Gold Dividend
                    </Link>
                  </li>
                  <li>
                    <Link href="/define/crypto" className="text-blue-600 hover:underline text-sm">
                      → Crypto Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/finance" className="text-blue-600 hover:underline text-sm">
                      → Finance News
                    </Link>
                  </li>
                  <li>
                    <Link href="/define/crypto/txc-stablecoin" className="text-blue-600 hover:underline text-sm">
                      → TXC Stablecoin Analysis
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
