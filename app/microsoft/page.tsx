import type { Metadata } from 'next';
import Link from 'next/link';
import { Hub } from '@/components/Hub';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';

export const metadata: Metadata = {
  title: 'Microsoft Corporation â€” Products, News & Analysis | ObjectWire',

  description: "ObjectWire's full coverage hub for Microsoft Corporation â€” Azure, Xbox, Windows, GitHub, LinkedIn, Copilot AI, leadership, history, and all breaking business and technology news.",
  keywords: ['Microsoft', 'Azure', 'Xbox', 'Windows', 'GitHub', 'LinkedIn', 'Satya Nadella', 'Copilot', 'OpenAI', 'cloud computing', 'AI', 'tech news'],
  openGraph: {
    title: 'Microsoft Corporation â€” Products, News & Analysis | ObjectWire',
    description: 'ObjectWire coverage of Microsoft: Azure cloud, Xbox gaming, Windows, GitHub, LinkedIn, Copilot AI, executive leadership, and all breaking news.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/microsoft',
  },
};

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// PAGE
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function MicrosoftHubPage() {
  return (
    <SEOWrapper slug="/microsoft">
      
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Microsoft', item: '/microsoft' },
            ]}
          />
        </div>
      </div>

      <Hub
        badge="MICROSOFT CORPORATION"
        badgeColor="from-blue-600 to-cyan-500"
        title="ðŸªŸ Microsoft"
        subtitle="Cloud computing, AI, gaming, productivity software, and the infrastructure of the modern enterprise â€” all in one company."
        meta={
          <>
            <span>ðŸ¢ Redmond, Washington</span>
            <span className="hidden md:inline">â€¢</span>
            <span>ðŸ“ˆ ~$3.1T Market Cap</span>
            <span className="hidden md:inline">â€¢</span>
            <span>ðŸ‘¤ CEO: Satya Nadella</span>
          </>
        }
      >

        {/* Key Metrics */}
        <Hub.InfoGrid
          title="Key Business Metrics"
          icon="ðŸ“Š"
          items={[
            { label: 'Market Capitalization', value: '~$3.1 Trillion' },
            { label: 'Annual Revenue (FY2025)', value: '$245 Billion' },
            { label: 'Global Employees', value: '238,000+' },
            { label: 'Cloud Revenue (Azure)', value: '$100B+ run rate' },
            { label: 'Xbox Game Pass Subscribers', value: '34M+' },
            { label: 'GitHub Users', value: '100M+ developers' },
            { label: 'OpenAI Investment', value: '$13B+ total' },
            { label: 'Founded', value: 'April 4, 1975' },
          ]}
          columns={4}
        />

        {/* Breaking & Latest News */}
        <Hub.Section title="Latest News" icon="ðŸ“°" variant="default">
          <div className="space-y-4">
            <Hub.Card
              href="/news/microsoft-gave-fbi-bitlocker-keys"
              title="Microsoft Gave FBI BitLocker Keys to Unlock Laptops"
              description="First known instance of a major tech company providing full-disk encryption keys to law enforcement â€” reigniting debates about tech company obligations and user privacy."
              badge="Breaking"
              badgeStyle="breaking"
              emoji="ðŸ”"
              meta="January 23, 2026 â€¢ Privacy & Security"
            />
            <Hub.Card
              href="/news/trump-microsoft-data-centers-electricity-prices"
              title="Trump & Microsoft Data Centers: Electricity Prices Under Scrutiny"
              description="The administration examines the impact of AI data center expansion on electricity infrastructure, pricing, and the grid â€” with Microsoft's Azure build-out squarely in focus."
              badge="Policy"
              emoji="âš¡"
              meta="January 2026 â€¢ Infrastructure"
            />
            <Hub.Card
              href="/news/ai"
              title="Anthropic Says Chinese AI Labs Used 24,000 Fake Accounts to Copy Claude"
              description="DeepSeek, Moonshot AI, and MiniMax allegedly made 16M coordinated prompts to extract Claude's capabilities â€” a development with direct implications for Microsoft's competing Copilot ecosystem."
              badge="AI"
              emoji="ðŸ¤–"
              meta="February 23, 2026 â€¢ AI Competition"
            />
          </div>
        </Hub.Section>

        {/* Products & Divisions */}
        <Hub.Section title="Microsoft Products & Divisions" icon="ðŸ—ï¸" variant="card">
          <Hub.LinkGrid
            columns={3}
            items={[
              {
                href: '/microsoft/xbox',
                emoji: 'ðŸŽ®',
                label: 'Xbox',
                sub: 'Gaming console, Game Pass, Activision Blizzard',
              },
              {
                href: '/github',
                emoji: 'ðŸ’»',
                label: 'GitHub',
                sub: '100M+ developers, Copilot, Actions, Codespaces',
              },
              {
                href: '/microsoft/azure',
                emoji: 'â˜ï¸',
                label: 'Azure',
                sub: 'Cloud computing, AI services, enterprise infrastructure',
              },
              {
                href: '/microsoft/windows',
                emoji: 'ðŸªŸ',
                label: 'Windows',
                sub: 'Windows 11, Recall AI, consumer & enterprise OS',
              },
              {
                href: '/microsoft/microsoft-365',
                emoji: 'ðŸ“Š',
                label: 'Microsoft 365',
                sub: 'Office, Teams, OneDrive, Copilot integration',
              },
              {
                href: '/microsoft/linkedin',
                emoji: 'ðŸ’¼',
                label: 'LinkedIn',
                sub: '1B+ members, professional network & recruiting',
              },
            ]}
          />
        </Hub.Section>

        {/* AI & Copilot */}
        <Hub.Section title="Microsoft AI & Copilot" icon="ðŸ¤–" variant="highlight">
          <Hub.Prose>
            <p>
              Microsoft&apos;s multibillion-dollar partnership with{' '}
              <Link href="/open-ai" className="text-cyan-300 hover:underline font-semibold">
                OpenAI
              </Link>{' '}
              â€” totaling over $13 billion in cumulative investment â€” has transformed the company&apos;s product strategy across every division. Copilot, powered by GPT-4 and subsequent models, is now embedded in Windows 11, Microsoft 365, Azure, GitHub, and Bing.
            </p>
            <p>
              Azure OpenAI Service gives enterprise customers API access to GPT-4, DALL-E, Whisper, and other models within Microsoft&apos;s cloud compliance boundaries â€” a commercially significant differentiator. GitHub Copilot, the AI coding assistant, surpassed 1.8 million paid subscribers and has become one of the most widely used developer tools in history.
            </p>
          </Hub.Prose>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'GitHub Copilot Subscribers', value: '1.8M+', sub: 'Paid developer seats' },
              { label: 'Azure OpenAI Customers', value: '65,000+', sub: 'Enterprise accounts' },
              { label: 'Copilot for M365', value: '$30/user/mo', sub: 'Enterprise add-on pricing' },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-lg p-4">
                <p className="text-2xl font-black text-gray-900">{s.value}</p>
                <p className="text-sm font-semibold text-gray-700">{s.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </Hub.Section>

        {/* Leadership */}
        <Hub.Section title="Executive Leadership" icon="ðŸ‘”" variant="default">
          <Hub.Table
            columns={[
              { key: 'name', label: 'Name', bold: true },
              { key: 'title', label: 'Title' },
              { key: 'note', label: 'Known For' },
            ]}
            rows={[
              {
                name: 'Satya Nadella',
                title: 'Chairman & CEO',
                note: 'Cloud-first transformation; grew market cap from $300B to $3T+ since 2014',
              },
              {
                name: 'Brad Smith',
                title: 'Vice Chair & President',
                note: 'Antitrust, regulatory affairs, responsible AI, government relations',
              },
              {
                name: 'Amy Hood',
                title: 'Executive VP & CFO',
                note: 'Financial strategy, investor relations, $190B+ revenue growth under tenure',
              },
              {
                name: 'Phil Spencer',
                title: 'CEO, Microsoft Gaming',
                note: 'Xbox ecosystem, Activision Blizzard acquisition, Game Pass growth',
              },
              {
                name: 'Scott Guthrie',
                title: 'Executive VP, Cloud + AI',
                note: 'Azure platform, OpenAI service integration, enterprise cloud strategy',
              },
              {
                name: 'Mustafa Suleyman',
                title: 'CEO, Microsoft AI',
                note: 'Consumer AI products including Copilot; former DeepMind and Inflection AI co-founder',
              },
            ]}
          />
        </Hub.Section>

        {/* History Timeline */}
        <Hub.Section title="Company History & Key Milestones" icon="ðŸ•°ï¸" variant="card">
          <Hub.Table
            columns={[
              { key: 'year', label: 'Year', bold: true, align: 'center' },
              { key: 'event', label: 'Milestone' },
            ]}
            rows={[
              { year: '1975', event: 'Founded by Bill Gates and Paul Allen in Albuquerque, NM' },
              { year: '1985', event: 'Windows 1.0 released' },
              { year: '1986', event: 'Microsoft IPO â€” shares open at $21, close at $28' },
              { year: '1990', event: 'Microsoft Office suite launches' },
              { year: '1995', event: 'Windows 95 and Internet Explorer launch; pivots to internet' },
              { year: '2001', event: 'Xbox gaming console launches; enters consumer hardware' },
              { year: '2008', event: 'Azure cloud platform first announced (commercial launch 2010)' },
              { year: '2014', event: 'Satya Nadella becomes CEO; acquires Minecraft for $2.5B' },
              { year: '2016', event: 'Acquires LinkedIn for $26.2 billion' },
              { year: '2018', event: 'Acquires GitHub for $7.5 billion' },
              { year: '2019', event: 'Becomes second US company to reach $1 trillion market cap' },
              { year: '2022', event: 'Announces $69B Activision Blizzard acquisition' },
              { year: '2023', event: 'Invests $10B+ in OpenAI; launches Bing Chat, Copilot' },
              { year: '2024', event: 'Activision Blizzard acquisition closes after global regulatory approval' },
              { year: '2026', event: 'Market cap ~$3.1 trillion; Copilot embedded across all products' },
            ]}
          />
        </Hub.Section>

        {/* Coverage Areas */}
        <Hub.Section title="ObjectWire Coverage Areas" icon="ðŸ“‚" variant="default">
          <div className="grid sm:grid-cols-2 gap-4">
            <Hub.Card
              href="/tech"
              title="Cloud & AI"
              description="Azure, OpenAI partnership, Copilot, and Microsoft's AI infrastructure investments."
              emoji="â˜ï¸"
            />
            <Hub.Card
              href="/microsoft/xbox"
              title="Xbox & Gaming"
              description="Xbox consoles, Game Pass, Activision Blizzard titles, and the future of cloud gaming."
              emoji="ðŸŽ®"
            />
            <Hub.Card
              href="/github"
              title="GitHub & Developer Tools"
              description="GitHub Copilot, Actions, Codespaces, enterprise developer platform strategy."
              emoji="ðŸ’»"
            />
            <Hub.Card
              href="/news"
              title="Policy & Regulation"
              description="Antitrust proceedings, AI regulation, government contracts, and privacy enforcement."
              emoji="âš–ï¸"
            />
          </div>
        </Hub.Section>

        {/* Related Topics */}
        <Hub.Section title="Related Topics" icon="ðŸ”—" variant="default">
          <Hub.LinkGrid
            columns={4}
            items={[
              { href: '/open-ai', emoji: 'ðŸ§ ', label: 'OpenAI', sub: 'GPT models & partnership' },
              { href: '/nvidia', emoji: 'ðŸŸ¢', label: 'Nvidia', sub: 'AI chips powering Azure' },
              { href: '/saas', emoji: 'ðŸ“¦', label: 'SaaS', sub: 'Enterprise software sector' },
              { href: '/tech', emoji: 'ðŸ”­', label: 'Tech News', sub: 'Broader technology coverage' },
              { href: '/finance', emoji: 'ðŸ’°', label: 'Finance', sub: 'MSFT stock & markets' },
              { href: '/define/nestjs-vs-nextjs-express', emoji: 'âš™ï¸', label: 'Dev Frameworks', sub: 'Node.js, Next.js, NestJS' },
              { href: '/news/ai', emoji: 'ðŸ¤–', label: 'AI News', sub: 'Latest AI developments' },
              { href: '/intel', emoji: 'ðŸ”µ', label: 'Intel', sub: 'Chip partner & competitor' },
            ]}
          />
        </Hub.Section>

      </Hub>
    </SEOWrapper>
  );
}

