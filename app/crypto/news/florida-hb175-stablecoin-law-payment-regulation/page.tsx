import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/crypto/news/florida-hb175-stablecoin-law-payment-regulation';
const AUTHOR_NAME = 'ObjectWire Finance Desk';
const PUBLISH_ISO = '2026-03-06T14:00:00Z';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Florida Passes First State-Level Stablecoin Law in the US — HB 175 | ObjectWire',
  description:
    'Florida HB 175 passed the House 102–2 and Senate 37–0, creating the first full state-level rulebook for payment stablecoins in the US and launching a live pilot for government fee payments.',
  keywords: [
    'Florida stablecoin law HB 175',
    'Florida payment stablecoin regulation 2026',
    'HB 175 Florida stablecoin',
    'Florida crypto regulation 2026',
    'GENIUS Act state implementation',
    'qualified payment stablecoin issuer',
    'Florida Office of Financial Regulation stablecoin',
    'stablecoin not security Florida',
    'DeSantis stablecoin bill',
    'Florida stablecoin pilot program',
    'state stablecoin regulation United States',
    'payment stablecoin AML compliance',
    'stablecoin government fee payments',
    'OFR stablecoin licensing Florida',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Florida Passes First State-Level Stablecoin Law — HB 175 Heads to DeSantis',
    description:
      'HB 175 passed 102–2 in the House and 37–0 in the Senate. Florida defines "payment stablecoin," requires OFR licensing, implements the federal GENIUS Act, and launches a pilot for stablecoin fee payments.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: PUBLISH_ISO,
    modifiedTime: PUBLISH_ISO,
    section: 'Finance',
    tags: ['Stablecoin', 'Florida', 'Crypto Regulation', 'HB 175', 'GENIUS Act', 'DeSantis'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Creates First US State-Level Stablecoin Rulebook — HB 175',
    description:
      'House 102–2, Senate 37–0. Florida defines payment stablecoins, requires OFR licensing, cross-references the GENIUS Act, and pilots stablecoin payments for government fees.',
  },
};

export default function FloridaStablecoinLawPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Florida Passes First State-Level Stablecoin Law in the US — HB 175"
        description="Florida HB 175 passed the House 102–2 and Senate 37–0, creating the first full state-level rulebook for payment stablecoins in the US and launching a live pilot for government fee payments."
        author={AUTHOR_NAME}
        authorUrl="https://www.objectwire.org/team"
        publishedTime={PUBLISH_ISO}
        modifiedTime={PUBLISH_ISO}
        articleUrl={CANONICAL}
        section="Finance"
        keywords={[
          'Florida stablecoin law', 'HB 175', 'payment stablecoin', 'GENIUS Act',
          'crypto regulation', 'OFR licensing', 'DeSantis', 'stablecoin pilot',
        ]}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Crypto', item: '/crypto' },
              { name: 'News', item: '/crypto/news' },
              { name: 'Florida HB 175 Stablecoin Law', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Florida Passes First Full State-Level Stablecoin Law in the United States"
        subtitle="CS/CS/HB 175 sailed through the House 102–2 and the Senate 37–0, creating a complete regulatory framework for payment stablecoins and pairing it with a live pilot to let the state government accept them for fees."
        category="FINANCE BREAKING"
        categoryColor="blue"
        topicTag="finance"
        publishDate="March 6, 2026"
        readTime="5 min read"
        breaking
        author={{
          name: AUTHOR_NAME,
          role: 'Finance & Digital Assets',
        }}
        tags={[
          'Stablecoin',
          'Florida',
          'HB 175',
          'Crypto Regulation',
          'GENIUS Act',
          'DeSantis',
          'OFR',
          'AML',
          'Digital Currency',
        ]}
        slug="florida-hb175-stablecoin-law-payment-regulation"
        url={SLUG}
      >
        {/* ── THE LEAD ─────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            The First Rulebook
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Florida just created the first complete state-level regulatory framework for payment stablecoins in the United States. <strong>CS/CS/HB 175</strong> passed the House <strong>102–2</strong> on March 3, 2026, cleared the Senate <strong>37–0</strong> on March 5, and is now ordered enrolled and headed to Governor Ron DeSantis for signature.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The bill does not merely acknowledge stablecoins exist. It defines them, licenses their issuers, plugs them into Florida&apos;s existing anti-money laundering framework, and — in a first for any U.S. state — pairs the regulation with a <strong>live pilot program</strong> allowing state agencies to accept qualified payment stablecoins for government fees.
          </p>

          <HighlightBox type="stat" color="blue">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400">102–2</div>
                <div className="text-sm text-gray-300">House Vote</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">37–0</div>
                <div className="text-sm text-gray-300">Senate Vote</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">1st</div>
                <div className="text-sm text-gray-300">State-Level Rulebook</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">Live</div>
                <div className="text-sm text-gray-300">Pilot Program</div>
              </div>
            </div>
          </HighlightBox>
        </section>

        {/* ── WHAT THE BILL DOES ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What CS/CS/HB 175 Actually Does
          </h2>

          <div className="space-y-4 my-6">
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-5">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Defines &quot;Payment Stablecoin&quot;</h3>
              <p className="text-gray-300 text-sm">Formally introduces the terms <strong>&quot;payment stablecoin&quot;</strong> and <strong>&quot;qualified payment stablecoin issuer&quot;</strong> into Florida&apos;s money services statutes. This is the legal anchor — without a definition, enforcement is impossible.</p>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-700 p-5">
              <h3 className="text-lg font-bold text-green-400 mb-2">Requires OFR Licensing</h3>
              <p className="text-gray-300 text-sm">Anyone issuing qualified payment stablecoins in or into Florida must be <strong>licensed (or exempt) by the Office of Financial Regulation</strong>. Violations carry penalties up to hundreds of thousands of dollars.</p>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-700 p-5">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Implements the Federal GENIUS Act</h3>
              <p className="text-gray-300 text-sm">Explicitly cross-references the federal GENIUS Act, aligning Florida&apos;s rules with federal standards on <strong>reserves, 1:1 backing, redemption rights, AML, and sanctions compliance</strong>. No state–federal mismatch.</p>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-700 p-5">
              <h3 className="text-lg font-bold text-orange-400 mb-2">Stablecoin ≠ Security</h3>
              <p className="text-gray-300 text-sm">Clarifies that a compliant payment stablecoin under this framework is <strong>not treated as a &quot;security&quot;</strong> under certain state provisions, eliminating the regulatory overlap that has paralyzed crypto companies in other states.</p>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-700 p-5">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">State + Federal Coordination</h3>
              <p className="text-gray-300 text-sm">Allows coordination or joint supervision with the OCC when the issuer is a federally regulated entity, but keeps <strong>OFR as the primary state supervisor</strong>. Dual-chartered issuers are not forced to pick one.</p>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-700 p-5">
              <h3 className="text-lg font-bold text-pink-400 mb-2">AML Integration</h3>
              <p className="text-gray-300 text-sm">Pulls stablecoin issuers into Florida&apos;s existing anti-money laundering framework. KYC, suspicious activity reporting, and sanctions screening requirements are <strong>the same as traditional money services businesses</strong>.</p>
            </div>
          </div>
        </section>

        {/* ── THE PILOT ────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The Pilot: Government Accepts Stablecoins for Fees
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            What separates HB 175 from every other crypto bill in America is the <strong>live pilot program</strong>. Florida is not just writing rules — it is testing them in production. Under the pilot, state agencies can accept qualified payment stablecoins for government fees, making Florida the first state where you could potentially pay a licensing fee, filing fee, or regulatory charge with a stablecoin instead of USD wire or check.
          </p>

          <HighlightBox type="key-point" color="green">
            <strong>Why this matters:</strong> A government accepting stablecoins for fees is not symbolic. It forces the entire settlement, custody, and accounting stack to be production-ready. If the pilot works, it creates a template every other state can copy.
          </HighlightBox>
        </section>

        {/* ── GENIUS ACT ALIGNMENT ─────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            GENIUS Act Alignment: Why It Matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The federal GENIUS Act established reserve requirements, redemption guarantees, and AML obligations for stablecoin issuers at the national level. But without state-level implementation, issuers operating in individual states faced a patchwork of ambiguous rules.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Florida&apos;s explicit cross-reference to GENIUS means an issuer licensed under HB 175 meets <strong>both state and federal standards simultaneously</strong>. This is the regulatory clarity that companies like Circle (USDC), Paxos (USDP), and PayPal (PYUSD) have demanded for years.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-gray-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Requirement</th>
                  <th className="px-4 py-3 text-left font-semibold">GENIUS Act (Federal)</th>
                  <th className="px-4 py-3 text-left font-semibold">HB 175 (Florida)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">1:1 Reserve Backing</td>
                  <td className="px-4 py-3 text-green-600">Required</td>
                  <td className="px-4 py-3 text-green-600">Cross-referenced ✓</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Redemption at Par</td>
                  <td className="px-4 py-3 text-green-600">Required</td>
                  <td className="px-4 py-3 text-green-600">Cross-referenced ✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">AML / KYC</td>
                  <td className="px-4 py-3 text-green-600">Required</td>
                  <td className="px-4 py-3 text-green-600">Integrated into MSB framework ✓</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Sanctions Compliance</td>
                  <td className="px-4 py-3 text-green-600">Required</td>
                  <td className="px-4 py-3 text-green-600">Cross-referenced ✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">State Licensing</td>
                  <td className="px-4 py-3 text-gray-500">Deferred to states</td>
                  <td className="px-4 py-3 text-green-600">OFR licensing required ✓</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Securities Exemption</td>
                  <td className="px-4 py-3 text-gray-500">Silent</td>
                  <td className="px-4 py-3 text-green-600">Explicitly not a security ✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── POLITICS ─────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Politics and Timing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The near-unanimous vote — 102–2 in the House, 37–0 in the Senate — is remarkable in a legislature that frequently splits on financial regulation. The bipartisan consensus reflects a growing recognition that stablecoin regulation is not a partisan issue but an infrastructure one.
          </p>

          <HighlightBox type="quote" color="purple">
            &quot;This is not about picking winners in crypto. This is about making sure Florida&apos;s payments infrastructure is ready for the next decade.&quot;
            <br />
            <span className="text-sm text-gray-400 mt-2 block">— Florida House sponsor on HB 175</span>
          </HighlightBox>

          <p className="text-gray-700 leading-relaxed mb-4">
            The bill is now ordered enrolled and headed to Governor DeSantis. Given the overwhelming legislative support and the governor&apos;s public positioning as pro-crypto, signature is widely expected.
          </p>
        </section>

        {/* ── WHAT TO WATCH ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What to Watch Next
          </h2>
          <ul className="space-y-3 my-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">▸</span>
              <span className="text-gray-700"><strong>Governor&apos;s Signature:</strong> DeSantis has signaled support for crypto-friendly legislation. The signing ceremony — and any executive commentary — will set the tone for enforcement.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">▸</span>
              <span className="text-gray-700"><strong>Pilot Launch Date:</strong> When the first state agency begins accepting stablecoin payments. This is the real test of the framework.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">▸</span>
              <span className="text-gray-700"><strong>OFR Licensing Rules:</strong> The Office of Financial Regulation will need to publish detailed guidance on the application process, fee structure, and ongoing compliance requirements.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">▸</span>
              <span className="text-gray-700"><strong>Issuer Applications:</strong> Which stablecoin issuers — Circle, Paxos, PayPal, or new entrants — apply for Florida licensing first.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">▸</span>
              <span className="text-gray-700"><strong>Copycat Bills:</strong> Texas, Wyoming, and New York are all watching. HB 175 may become the template for state-level stablecoin regulation nationwide.</span>
            </li>
          </ul>
        </section>

        {/* ── SOURCES ──────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Sources &amp; Methodology
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This report is based on the enrolled text of CS/CS/HB 175 as filed with the Florida Legislature, official vote records from the House (March 3, 2026) and Senate (March 5, 2026), and statements from the bill&apos;s sponsors. ObjectWire reviewed the bill&apos;s cross-references to the federal GENIUS Act and Florida&apos;s existing money services statutes.
          </p>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────────── */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/crypto/hbar/rba-cbdc-hashsphere-hedera-project-acacia" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-blue-600 uppercase">CBDC</span>
              <h3 className="font-semibold text-gray-900 mt-1">RBA Completes Real-Money CBDC Trials via HashSphere</h3>
              <p className="text-sm text-gray-600 mt-1">Australia&apos;s central bank validates Hedera tech for wholesale digital currency settlement.</p>
            </Link>
            <Link href="/saas/news/sam-altman-visits-hedera-team" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-purple-600 uppercase">Hedera</span>
              <h3 className="font-semibold text-gray-900 mt-1">Hedera Team Visits Sam Altman</h3>
              <p className="text-sm text-gray-600 mt-1">The intersection of AI and distributed ledger technology at the highest level.</p>
            </Link>
            <Link href="/finance" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">Finance</span>
              <h3 className="font-semibold text-gray-900 mt-1">Finance Hub</h3>
              <p className="text-sm text-gray-600 mt-1">Banking, regulation, digital currency policy, and financial technology coverage.</p>
            </Link>
            <Link href="/trump" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-red-600 uppercase">Politics</span>
              <h3 className="font-semibold text-gray-900 mt-1">Trump Coverage</h3>
              <p className="text-sm text-gray-600 mt-1">Policy, executive orders, and administration coverage including crypto regulation.</p>
            </Link>
            <Link href="/tech" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">Tech</span>
              <h3 className="font-semibold text-gray-900 mt-1">Technology Hub</h3>
              <p className="text-sm text-gray-600 mt-1">Breaking technology news including blockchain, AI, and fintech updates.</p>
            </Link>
          </div>
        </section>
      </NewsArticle>
    </SEOWrapper>
  );
}
