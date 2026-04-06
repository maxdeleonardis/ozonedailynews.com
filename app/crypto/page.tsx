import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';
import { Breadcrumb } from '@/components/nav/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';
import { scanAllContent } from '@/lib/content-scanner';

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const dynamic = 'force-dynamic';

const SLUG = '/crypto';

export const metadata: Metadata = {
  title: 'Crypto | Stablecoins, Regulation & Digital Assets',
  description:
    'ObjectWire crypto coverage hub. USDC, stablecoin regulation, Coinbase, XRP, Circle, DeFi news, and digital asset analysis from primary sources.',
  keywords: [
    'crypto news',
    'USDC stablecoin',
    'Circle Internet Group',
    'Coinbase',
    'XRP',
    'stablecoin regulation 2026',
    'DeFi news',
    'crypto regulation',
    'digital assets',
    'blockchain news',
    'GENIUS Act',
    'crypto compliance',
  ],
  openGraph: {
    title: 'Crypto | Stablecoins, Regulation & Digital Assets',
    description:
      'Complete crypto coverage from ObjectWire. Stablecoin policy, USDC issuance, Coinbase, XRP, DeFi infrastructure, and regulatory analysis.',
    type: 'website',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto | Stablecoins, Regulation & Digital Assets',
    description: 'ObjectWire crypto hub: stablecoin policy, USDC, Coinbase, XRP, DeFi infrastructure, and regulatory analysis.',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FEATURED ARTICLES (curated, always shown)
// ─────────────────────────────────────────────────────────────────────────────

const FEATURED_ARTICLES = [
  {
    href: '/crypto/usdc',
    title: 'USD Coin (USDC) | Circle Internet Group',
    description:
      'Full profile of USDC: history, reserves, blockchain coverage, use cases, USDC vs USDT comparison, and the Agentic AI stablecoin opportunity.',
    badge: 'PROFILE',
    badgeStyle: 'default' as const,
    emoji: '💵',
    meta: 'Circle Internet Group · Updated March 2026',
  },
  {
    href: '/crypto/bernstein-circle-coinbase-stablecoin-kings-ai-era',
    title: 'Bernstein Crowns Circle and Coinbase as Stablecoin Kings for the AI Era',
    description:
      'Bernstein SocGen gives Circle a $190 price target and names both CRCL and COIN the top proxy plays as stablecoins decouple from crypto volatility.',
    badge: 'ANALYSIS',
    badgeStyle: 'historic' as const,
    emoji: '👑',
    meta: 'March 23, 2026 · JackArticle',
  },
  {
    href: '/crypto/usdc/circle-mints-750m-on-solana-network',
    title: 'Circle Mints $750M in USDC on Solana | 24-Hour Liquidity Injection',
    description:
      '$750 million in USDC minted on Solana in 24 hours, 0.3% of total supply. Solana DEX volumes surged 18% as institutional demand accelerates.',
    badge: 'LATEST',
    badgeStyle: 'breaking' as const,
    emoji: '🟣',
    meta: 'April 1, 2026 · JackArticle',
  },
  {
    href: '/crypto/news/fed-cbdc-halted-stablecoins-digital-dollar-2026',
    title: 'Fed Confirms CBDC Work Halted | Backs Stablecoins as Digital Dollar',
    description:
      'The Federal Reserve will not pursue a CBDC, instead endorsing regulated stablecoins and tokenized bank deposits as the U.S. digital dollar framework.',
    badge: 'POLICY',
    emoji: '🏛️',
    meta: 'March 2026 · JackArticle',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default async function CryptoHubPage() {
  const allArticles = await scanAllContent();
  
  // Include articles tagged as Crypto OR Finance articles under /crypto path
  const cryptoArticles = allArticles.filter(
    (a) =>
      a.category.toLowerCase() === 'crypto' ||
      a.slug.startsWith('/crypto/')
  );

  // Deduplicate: exclude slugs already in FEATURED_ARTICLES
  const featuredSlugs = new Set(FEATURED_ARTICLES.map((a) => a.href.slice(1)));
  const discoveredArticles = cryptoArticles.filter(
    (a) => !featuredSlugs.has(a.slug)
  );

  return (
    <SEOWrapper slug="/crypto">

      {/* Breadcrumb bar */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Crypto', item: '/crypto' },
            ]}
          />
        </div>
      </div>

      <Hub
        badge="CRYPTO"
        badgeColor="from-purple-600 to-indigo-500"
        title="🪙 Crypto"
        subtitle="Stablecoin regulation, USDC issuance, DeFi infrastructure, and digital asset analysis, from primary sources, verified on-chain."
        meta={
          <>
            <span>💰 Stablecoins & DeFi</span>
            <span className="hidden md:inline">•</span>
            <span>🏛️ Regulation & Policy</span>
            <span className="hidden md:inline">•</span>
            <span>📊 On-Chain Data</span>
          </>
        }
      >

        {/* ── Coverage Overview ─────────────────────────────────────────── */}
        <Hub.InfoGrid
          title="Coverage Overview"
          icon="📊"
          items={[
            {
              label: 'Articles Published',
              value: `${cryptoArticles.length > 0 ? cryptoArticles.length : '10'}+`,
            },
            { label: 'Focus', value: 'Stablecoins & Regulation' },
            { label: 'Key Assets', value: 'USDC · XRP · HBAR' },
            { label: 'Companies', value: 'Circle · Coinbase' },
          ]}
          columns={4}
        />

        {/* ── Featured Coverage ─────────────────────────────────────────── */}
        <Hub.Section title="Featured Coverage" icon="🔥" variant="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURED_ARTICLES.map((article) => (
              <Hub.Card
                key={article.href}
                href={article.href}
                title={article.title}
                description={article.description}
                badge={article.badge}
                badgeStyle={article.badgeStyle ?? 'default'}
                emoji={article.emoji}
                meta={article.meta}
              />
            ))}
          </div>
        </Hub.Section>

        {/* ── Stablecoins & USDC ────────────────────────────────────────── */}
        <Hub.Section title="Stablecoins & USDC" icon="💵" variant="highlight">
          <div className="space-y-4">
            <Hub.Card
              href="/crypto/usdc"
              title="USD Coin (USDC) | Complete Profile"
              description="Everything you need to know about Circle's regulated dollar stablecoin. History, reserves, blockchain support, use cases, and USDC vs USDT."
              emoji="🔵"
              meta="Circle Internet Group · Evergreen Profile"
            />
            <Hub.Card
              href="/crypto/usdc/circle-mints-750m-on-solana-network"
              title="Circle Mints $750M USDC on Solana in 24 Hours"
              description="$750M in new USDC entered Solana on March 31. Institutional demand for on-chain dollar liquidity accelerating on the fastest settlement layer."
              badge="LATEST"
              badgeStyle="breaking"
              emoji="🟣"
              meta="April 1, 2026 · Finance"
            />
            <Hub.Card
              href="/crypto/usdc/circle-unfreeze-wallets-zachxbt-2026"
              title="Circle Unfreezes 5 of 16 USDC Wallets After ZachXBT Backlash"
              description="Circle unfroze 5 of 16 blacklisted USDC hot wallets after blockchain investigator ZachXBT exposed the sealed court-order freeze."
              badge="CONTROVERSY"
              emoji="🔓"
              meta="March 30, 2026 · News"
            />
          </div>
        </Hub.Section>

        {/* ── Regulation & Policy ───────────────────────────────────────── */}
        <Hub.Section title="Regulation & Policy" icon="🏛️" variant="default">
          <div className="space-y-4">
            <Hub.Card
              href="/crypto/news/fed-cbdc-halted-stablecoins-digital-dollar-2026"
              title="Fed Confirms CBDC Work Halted | Backs Stablecoins as Digital Dollar"
              description="The Federal Reserve endorses regulated stablecoins and tokenized bank deposits as the U.S. digital dollar framework, ending CBDC exploration."
              badge="POLICY"
              emoji="🏛️"
              meta="March 2026 · JackArticle"
            />
            <Hub.Card
              href="/crypto/news/florida-hb175-stablecoin-law-payment-regulation"
              title="Florida Passes First State-Level Stablecoin Law | HB 175"
              description="HB 175 passed 102-2 in the House and 37-0 in the Senate. Florida defines payment stablecoins, requires OFR licensing, and pilots stablecoin fee payments."
              badge="REGULATION"
              emoji="📜"
              meta="March 6, 2026 · Finance"
            />
            <Hub.Card
              href="/crypto/white-house-block-and-find-out-coinbase-clarity-act-2026"
              title="White House 'Block and Find Out' | Coinbase Clarity Act 2026"
              description="The Coinbase-backed Clarity Act takes shape as the White House signals a regulatory pivot on digital assets."
              emoji="🏠"
              meta="2026 · Policy"
            />
          </div>
        </Hub.Section>

        {/* ── Auto-Discovered Articles ──────────────────────────────────── */}
        {discoveredArticles.length > 0 && (
          <Hub.Section title="All Crypto Coverage" icon="📰" variant="default">
            <div className="space-y-4">
              {discoveredArticles.slice(0, 12).map((article) => (
                <Hub.Card
                  key={article.slug}
                  href={`/${article.slug}`}
                  title={article.title}
                  description={article.excerpt}
                  badge={article.urgent ? 'BREAKING' : undefined}
                  badgeStyle={article.urgent ? 'breaking' : 'default'}
                  meta={`${article.date} · ${article.author}`}
                />
              ))}
            </div>
            {discoveredArticles.length > 12 && (
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  {discoveredArticles.length} total articles in Crypto coverage
                </p>
              </div>
            )}
          </Hub.Section>
        )}

        {/* ── Browse by Asset ───────────────────────────────────────────── */}
        <Hub.Section title="Browse by Asset" icon="🪙" variant="card">
          <Hub.LinkGrid
            columns={4}
            items={[
              {
                href: '/crypto/usdc',
                emoji: '💵',
                label: 'USDC',
                sub: 'Circle stablecoin coverage',
              },
              {
                href: '/crypto/xrp',
                emoji: '💧',
                label: 'XRP',
                sub: 'Ripple & XRP Ledger news',
              },
              {
                href: '/crypto/hbar',
                emoji: '♯',
                label: 'HBAR',
                sub: 'Hedera network coverage',
              },
              {
                href: '/crypto/coinbase',
                emoji: '🔷',
                label: 'Coinbase',
                sub: 'COIN stock & platform news',
              },
            ]}
          />
        </Hub.Section>

        {/* ── Browse by Topic ───────────────────────────────────────────── */}
        <Hub.Section title="Browse by Topic" icon="🎯" variant="default">
          <Hub.LinkGrid
            columns={3}
            items={[
              {
                href: '/crypto/news/fed-cbdc-halted-stablecoins-digital-dollar-2026',
                emoji: '🏛️',
                label: 'Regulation',
                sub: 'CBDC, GENIUS Act, state laws',
              },
              {
                href: '/crypto/bernstein-circle-coinbase-stablecoin-kings-ai-era',
                emoji: '📈',
                label: 'Market Analysis',
                sub: 'Bernstein, price targets, trends',
              },
              {
                href: '/crypto/usdc/circle-mints-750m-on-solana-network',
                emoji: '🔗',
                label: 'On-Chain Data',
                sub: 'Minting, flows, DeFi metrics',
              },
            ]}
          />
        </Hub.Section>

        {/* ── Related Coverage ──────────────────────────────────────────── */}
        <Hub.Section title="Related Coverage" icon="🔗" variant="default">
          <Hub.LinkGrid
            columns={3}
            items={[
              {
                href: '/finance',
                emoji: '📈',
                label: 'Finance',
                sub: 'Markets, Fed policy, earnings',
              },
              {
                href: '/tech',
                emoji: '💻',
                label: 'Tech',
                sub: 'AI, payments infrastructure',
              },
              {
                href: '/open-ai',
                emoji: '🤖',
                label: 'AI & ML',
                sub: 'Agentic AI payments, GPT-5',
              },
            ]}
          />
        </Hub.Section>

      </Hub>
    </SEOWrapper>
  );
}
