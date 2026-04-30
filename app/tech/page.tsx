import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';
import { Breadcrumb } from '@/components/nav/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';
import { scanAllContent } from '@/lib/content-scanner';

export const dynamic = 'force-dynamic';

const SLUG = '/tech';

export const metadata: Metadata = {
  title: 'Tech | AI, Cloud, Semiconductors & Software 2026',
  description:
    'ObjectWire tech hub. AI models, cloud infrastructure, semiconductor supply chain, cybersecurity, and software news — verified from primary sources, updated daily.',
  keywords: [
    'tech news 2026',
    'AI news',
    'artificial intelligence',
    'cloud computing',
    'semiconductor news',
    'cybersecurity',
    'software news',
    'big tech',
    'startup news',
    'NVIDIA',
    'OpenAI',
    'Cloudflare',
    'Palantir',
    'TSMC',
    'technology trends 2026',
  ],
  openGraph: {
    title: 'Tech | AI, Cloud, Semiconductors & Software 2026',
    description:
      'Full tech coverage from ObjectWire: AI, cloud, semiconductors, cybersecurity, and software — from primary sources.',
    type: 'website',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech | AI, Cloud, Semiconductors & Software 2026',
    description: 'ObjectWire tech hub: AI, cloud, semiconductors, cybersecurity, and software news from primary sources.',
  },
};

// ── Curated featured articles (always shown at top) ───────────────────────────

const FEATURED = [
  {
    href: '/tech/tsmc-semiconductor-foundry-profile',
    title: 'TSMC | Global Semiconductor Foundry Profile',
    description: 'Complete profile of Taiwan Semiconductor Manufacturing — nodes, clients, geopolitics, and the race to advanced packaging.',
    badge: 'PROFILE',
    badgeStyle: 'default' as const,
    emoji: '🔬',
    meta: 'Semiconductors · Updated 2026',
  },
  {
    href: '/technology/grok-xai-pentagon-classified-approval-federal-safety-warnings-2026',
    title: 'Grok / xAI | Pentagon Classified Approval & Federal Safety Warnings',
    description: 'xAI\'s Grok secures Pentagon classified system approval while federal safety officers issue formal warnings. Full investigation.',
    badge: 'EXCLUSIVE',
    badgeStyle: 'historic' as const,
    emoji: '🛡️',
    meta: 'xAI · 2026',
  },
  {
    href: '/tech/cloudflare-dynamic-workers-open-beta-ai-code-execution-2026',
    title: 'Cloudflare Dynamic Workers | AI Code Execution Open Beta',
    description: 'Cloudflare launches Dynamic Workers open beta — serverless AI code execution at the edge, globally available.',
    badge: 'LATEST',
    badgeStyle: 'breaking' as const,
    emoji: '⚡',
    meta: 'Cloudflare · 2026',
  },
  {
    href: '/tech/palantir-3d-frontend-gaia-zodiac',
    title: 'Palantir 3D Frontend | Gaia & Zodiac Platform',
    description: 'Inside Palantir\'s new 3D visualization layer — Gaia geospatial and Zodiac analytics, built for defense and enterprise.',
    badge: 'ANALYSIS',
    emoji: '🌐',
    meta: 'Palantir · 2026',
  },
];

// ── Topic sub-hubs ─────────────────────────────────────────────────────────────

const TOPIC_LINKS = [
  { href: '/open-ai', label: 'OpenAI', emoji: '🤖' },
  { href: '/nvidia', label: 'NVIDIA', emoji: '🎮' },
  { href: '/google', label: 'Google', emoji: '🔍' },
  { href: '/apple', label: 'Apple', emoji: '🍎' },
  { href: '/microsoft', label: 'Microsoft', emoji: '🪟' },
  { href: '/cloudflare', label: 'Cloudflare', emoji: '⚡' },
  { href: '/intel', label: 'Intel', emoji: '💻' },
  { href: '/meta', label: 'Meta AI', emoji: '🌐' },
  { href: '/claude', label: 'Anthropic / Claude', emoji: '🧠' },
  { href: '/cursor', label: 'Cursor IDE', emoji: '✏️' },
  { href: '/github', label: 'GitHub', emoji: '🐙' },
  { href: '/shopify', label: 'Shopify', emoji: '🛍️' },
];

// ─────────────────────────────────────────────────────────────────────────────

export default async function TechHubPage() {
  const allArticles = await scanAllContent();

  // Pull everything under /tech and /technology paths
  const techArticles = allArticles
    .filter((a) => {
      const s = a.slug.startsWith('/') ? a.slug : `/${a.slug}`;
      return (
        s.startsWith('/tech/') ||
        s.startsWith('/technology/') ||
        a.category.toLowerCase() === 'tech' ||
        a.category.toLowerCase() === 'technology'
      );
    })
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

  // Exclude slugs already in FEATURED so no duplicates
  const featuredHrefs = new Set(FEATURED.map((f) => f.href));
  const recentArticles = techArticles.filter((a) => {
    const s = a.slug.startsWith('/') ? a.slug : `/${a.slug}`;
    return !featuredHrefs.has(s);
  });

  return (
    <SEOWrapper slug={SLUG}>

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Tech', item: '/tech' },
            ]}
          />
        </div>
      </div>

      <Hub
        badge="TECHNOLOGY"
        badgeColor="from-blue-600 to-cyan-500"
        title="💻 Tech"
        subtitle="AI, cloud infrastructure, semiconductors, cybersecurity, and software — verified from primary sources and updated daily."
        meta={
          <>
            <span>🤖 Artificial Intelligence</span>
            <span className="hidden md:inline">•</span>
            <span>☁️ Cloud & Infrastructure</span>
            <span className="hidden md:inline">•</span>
            <span>🔬 Semiconductors</span>
            <span className="hidden md:inline">•</span>
            <span>🛡️ Cybersecurity</span>
          </>
        }
      >

        {/* ── Stats bar ──────────────────────────────────────────────────── */}
        <Hub.InfoGrid
          title="Coverage Overview"
          icon="📊"
          items={[
            { label: 'Articles Published', value: `${techArticles.length > 0 ? techArticles.length : '30'}+` },
            { label: 'Primary Verticals', value: 'AI · Cloud · Chips' },
            { label: 'Key Companies', value: 'NVIDIA · OpenAI · TSMC' },
            { label: 'Updated', value: 'Daily' },
          ]}
          columns={4}
        />

        {/* ── Featured ───────────────────────────────────────────────────── */}
        <Hub.Section title="Featured Coverage" icon="🔥" variant="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURED.map((a) => (
              <Hub.Card
                key={a.href}
                href={a.href}
                title={a.title}
                description={a.description}
                badge={a.badge}
                badgeStyle={a.badgeStyle}
                emoji={a.emoji}
                meta={a.meta}
              />
            ))}
          </div>
        </Hub.Section>

        {/* ── Latest articles (auto-discovered) ─────────────────────────── */}
        {recentArticles.length > 0 && (
          <Hub.Section title="Latest Tech Coverage" icon="📰" variant="default">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentArticles.slice(0, 20).map((a) => {
                const href = a.slug.startsWith('/') ? a.slug : `/${a.slug}`;
                return (
                  <Hub.Card
                    key={href}
                    href={href}
                    title={a.title}
                    description={a.excerpt}
                    thumbnail={undefined}
                    publishedAt={a.publishedAt.toISOString()}
                    meta={`${a.category} · ${a.date}`}
                  />
                );
              })}
            </div>
          </Hub.Section>
        )}

        {/* ── Company / topic sub-hubs ───────────────────────────────────── */}
        <Hub.Section title="Browse by Company" icon="🏢" variant="card">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {TOPIC_LINKS.map((t) => (
              <a
                key={t.href}
                href={t.href}
                className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all text-sm font-semibold text-gray-800 hover:text-blue-700"
              >
                <span className="text-lg">{t.emoji}</span>
                {t.label}
              </a>
            ))}
          </div>
        </Hub.Section>

        {/* ── Related hubs ──────────────────────────────────────────────── */}
        <Hub.Section title="Related Coverage" icon="🔗" variant="default">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Hub.Card href="/crypto" title="Crypto" description="Stablecoins, DeFi, digital assets, and blockchain infrastructure." emoji="🪙" />
            <Hub.Card href="/finance" title="Finance" description="Markets, earnings, M&A, and macroeconomic analysis." emoji="📈" />
            <Hub.Card href="/open-ai" title="OpenAI" description="ChatGPT, GPT-5, Sora, AI safety, and enterprise deployments." emoji="🤖" />
          </div>
        </Hub.Section>

      </Hub>
    </SEOWrapper>
  );
}

