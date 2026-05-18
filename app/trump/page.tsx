import type { Metadata } from 'next';
import { Hub } from '@/components/Hub';
import { Breadcrumb } from '@/components/nav/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';
import { getAllEntries } from '@/lib/registry-service';

export const revalidate = 3600;

const SLUG = '/trump';

export const metadata: Metadata = {
  title: 'Trump | Politics, Policy & Executive Actions 2026',
  description:
    'OzoneNews coverage of Donald Trump, White House policy, executive orders, tariffs, immigration enforcement, and U.S. political news. Primary sources only.',
  keywords: [
    'Trump news 2026',
    'Trump executive orders',
    'Trump tariffs',
    'Trump immigration',
    'White House 2026',
    'Trump policy',
    'DOGE',
    'Trump crypto',
    'Trump administration',
    'US politics 2026',
    'Trump trade war',
    'Trump ICE',
  ],
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'Trump | Politics, Policy & Executive Actions 2026',
    description:
      'Comprehensive coverage of Trump White House actions: tariffs, immigration enforcement, crypto policy, DOGE, and executive orders. Verified reporting.',
    type: 'website',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump | Politics & Policy 2026',
    description:
      'OzoneNews politics hub: Trump executive orders, tariffs, immigration, DOGE, and U.S. policy coverage from primary sources.',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FEATURED ARTICLES
// ─────────────────────────────────────────────────────────────────────────────

const FEATURED = [
  {
    href: '/trump/trump-auto-tariffs-25-percent-april-3',
    title: 'Trump Auto Tariffs | 25% Levy Takes Effect April 3',
    description:
      'Trump signs executive order imposing a 25% tariff on all imported automobiles, taking effect April 3. Auto manufacturers and dealers brace for supply chain disruption.',
    badge: 'TARIFFS',
    emoji: '🚗',
    meta: 'April 2026 · Trade Policy',
  },
  {
    href: '/trump/white-house-app-launch-direct-updates-2026',
    title: 'White House App Launch | Direct Updates from the Administration',
    description:
      'The Trump administration launches an official White House app for direct communications, bypassing traditional media gatekeepers.',
    badge: 'TECH',
    emoji: '📱',
    meta: '2026 · White House',
  },
  {
    href: '/trump/WLFI-stablecoin',
    title: 'WLFI Stablecoin | Trump Family Crypto Venture',
    description:
      "World Liberty Financial's USD1 stablecoin launch tied to the Trump family crypto enterprise, raising conflict-of-interest concerns in Congress.",
    badge: 'CRYPTO',
    emoji: '💰',
    meta: '2026 · Finance',
  },
  {
    href: '/trump/ice-arrest-sfo-airport-nationwide-deployment',
    title: 'ICE Arrests at SFO Airport | Nationwide Deployment',
    description:
      'ICE conducts high-profile enforcement operations at San Francisco International Airport as part of a nationwide deployment order from the Trump administration.',
    badge: 'IMMIGRATION',
    emoji: '✈️',
    meta: '2026 · Immigration',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default async function TrumpHubPage() {
  const allEntries = await getAllEntries();

  const politicsArticles = allEntries.filter(
    (a) =>
      a.slug.startsWith('/trump/') ||
      a.category.toLowerCase() === 'politics',
  );

  const featuredSlugs = new Set(FEATURED.map((a) => a.href));
  const moreArticles = politicsArticles.filter(
    (a) => !featuredSlugs.has(a.slug),
  );

  return (
    <SEOWrapper slug={SLUG}>

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Trump', item: '/trump' },
            ]}
          />
        </div>
      </div>

      <Hub
        badge="POLITICS"
        badgeColor="from-red-700 to-red-900"
        title="Trump | Politics & Policy"
        subtitle="Comprehensive coverage of the Trump administration: executive orders, tariffs, immigration enforcement, crypto policy, and U.S. political developments from primary sources."
        meta={
          <>
            <span>🏛️ Executive Actions</span>
            <span className="hidden md:inline">•</span>
            <span>🌐 Trade & Tariffs</span>
            <span className="hidden md:inline">•</span>
            <span>📰 Verified Reporting</span>
          </>
        }
      >

        {/* Coverage Overview */}
        <Hub.InfoGrid
          title="Coverage Overview"
          icon="📊"
          items={[
            { label: 'Articles', value: `${politicsArticles.length > 0 ? politicsArticles.length : '15'}+` },
            { label: 'Focus Areas', value: 'Tariffs · Immigration · Crypto' },
            { label: 'Administration', value: '47th President' },
            { label: 'Updated', value: '2026' },
          ]}
          columns={4}
        />

        {/* Featured */}
        <Hub.Section title="Featured Coverage" icon="🔥" variant="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURED.map((article) => (
              <Hub.Card
                key={article.href}
                href={article.href}
                title={article.title}
                description={article.description}
                badge={article.badge}
                emoji={article.emoji}
                meta={article.meta}
              />
            ))}
          </div>
        </Hub.Section>

        {/* Policy & Executive Actions */}
        <Hub.Section title="Policy & Executive Actions" icon="🏛️" variant="highlight">
          <div className="space-y-4">
            <Hub.Card
              href="/trump/god-squad-gulf-drilling-esa-exemption"
              title="God Squad Convened | Gulf Drilling ESA Exemption"
              description="Trump administration convenes the rarely used 'God Squad' to override Endangered Species Act protections for Gulf of Mexico offshore drilling projects."
              badge="POLICY"
              emoji="⚖️"
              meta="2026 · Energy Policy"
            />
            <Hub.Card
              href="/trump"
              title="Space Force Builds Golden Dome | Missile Defense Shield"
              description="The Trump administration directs Space Force to develop the 'Golden Dome,' a comprehensive missile defense architecture modeled on Israel's Iron Dome."
              badge="DEFENSE"
              emoji="🛡️"
              meta="2026 · Defense"
            />
            <Hub.Card
              href="/trump/tax-law-corporate-revenue-drop-65-billion"
              title="Trump Tax Law | Corporate Revenue Drops $65 Billion"
              description="Analysis of the revenue impact of Trump-era tax legislation, with corporate tax receipts falling $65 billion as rate cuts and deductions take full effect."
              badge="ECONOMY"
              emoji="📉"
              meta="2026 · Tax Policy"
            />
            <Hub.Card
              href="/trump"
              title="Musk Pay Dispute | TSA Workers, Shutdown Threat"
              description="DOGE-linked payroll changes create uncertainty for TSA workers as a threatened government shutdown places federal employee pay in limbo."
              badge="DOGE"
              emoji="✂️"
              meta="2026 · Government"
            />
          </div>
        </Hub.Section>

        {/* Immigration */}
        <Hub.Section title="Immigration & Enforcement" icon="🚨" variant="default">
          <div className="space-y-4">
            <Hub.Card
              href="/trump/cbp-one-parole-revocation-second-attempt-judge-burroughs-2026"
              title="CBP One Parole Revocation | Judge Burroughs Rules Again"
              description="A federal judge blocks the second attempt by the Trump administration to revoke CBP One parole status for hundreds of thousands of migrants."
              badge="COURTS"
              emoji="⚖️"
              meta="2026 · Immigration"
            />
            <Hub.Card
              href="/trump"
              title="ICE Agents Drop Masks at Airports | Enforcement Escalation"
              description="ICE enforcement agents operating at U.S. airports no longer conceal their identity, part of a visible escalation in immigration enforcement operations."
              badge="ENFORCEMENT"
              emoji="🛂"
              meta="2026 · Immigration"
            />
            <Hub.Card
              href="/trump"
              title="The Shadow License Problem | Undocumented Driver IDs"
              description="Investigation into the 'shadow license' phenomenon: undocumented immigrants holding valid state driver's licenses that complicate federal enforcement."
              badge="INVESTIGATION"
              emoji="🪪"
              meta="2026 · Immigration"
            />
          </div>
        </Hub.Section>

        {/* Trade & Tariffs */}
        <Hub.Section title="Trade & Tariffs" icon="🌐" variant="default">
          <div className="space-y-4">
            <Hub.Card
              href="/trump/trump-auto-tariffs-25-percent-april-3"
              title="25% Auto Tariffs | April 3 Implementation"
              description="A 25% tariff on all imported vehicles officially took effect April 3. Automakers in Germany, Japan, and South Korea are most exposed."
              badge="TARIFFS"
              emoji="🚗"
              meta="April 2026 · Trade"
            />
            <Hub.Card
              href="/trump/japan-36-billion-us-energy-critical-minerals"
              title="Japan $36B Pledge | U.S. Energy & Critical Minerals"
              description="Japan commits $36 billion to U.S. energy infrastructure and critical minerals supply chains as trade negotiations seek to avoid tariff escalation."
              badge="TRADE"
              emoji="🇯🇵"
              meta="2026 · Trade"
            />
            <Hub.Card
              href="/trump"
              title="TotalEnergies $928M Offshore Wind Exit | Trump Energy Policy"
              description="French energy giant TotalEnergies writes down $928 million in U.S. offshore wind assets and exits projects, citing Trump administration regulatory reversals."
              badge="ENERGY"
              emoji="⚡"
              meta="2026 · Energy"
            />
            <Hub.Card
              href="/trump"
              title="Trump vs. China | Trade War Escalation"
              description="Full coverage of the expanding U.S.-China trade war: tariffs, retaliation measures, tech export controls, and supply chain decoupling."
              badge="TRADE WAR"
              emoji="🇨🇳"
              meta="2026 · China"
            />
          </div>
        </Hub.Section>

        {/* More articles pulled dynamically */}
        {moreArticles.length > 0 && (
          <Hub.Section title="More Coverage" icon="📰" variant="default">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {moreArticles.slice(0, 8).map((article) => (
                <Hub.Card
                  key={article.slug}
                  href={article.slug}
                  title={article.title}
                  badge="NEWS"
                  meta={article.publishDate}
                />
              ))}
            </div>
          </Hub.Section>
        )}

      </Hub>
    </SEOWrapper>
  );
}
