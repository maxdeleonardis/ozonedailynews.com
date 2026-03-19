import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import {
  DynamicNewsArticle,
  CaseOverview,
  StatisticsBox,
  ArticleQuote,
} from '@/components/DynamicNewsArticle';

// ============================================================
// METADATA
// ============================================================
export const metadata: Metadata = {
  title: 'Valve Corporation - Company Profile 2026 | ObjectWire',
  description:
    'Complete profile of Valve Corporation: founding, Steam platform, major franchises including Counter-Strike and Dota 2, loot box revenue, and organizational structure. Data current as of February 2026.',
  keywords: [
    'Valve Corporation',
    'Gabe Newell',
    'Steam platform',
    'Counter-Strike 2',
    'CS2',
    'Dota 2',
    'Half-Life',
    'Team Fortress 2',
    'loot boxes',
    'video game company',
    'Bellevue Washington',
    'Steam revenue',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/valve-corporation',
  },
  openGraph: {
    title: 'Valve Corporation - Company Profile 2026',
    description:
      'Valve Corporation: Steam, Counter-Strike, Dota 2, and the loot box economy. Revenue, history, and key statistics.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/valve-corporation',
    siteName: 'ObjectWire',
    images: [{ url: '/influncer/valve-ceo-Gabe-Newell.PNG' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valve Corporation - Company Profile 2026',
    description:
      'Steam, Counter-Strike, loot boxes, and $5B in annual revenue. Full Valve Corporation profile.',
  },
};

export default function ValveCorporationPage() {
  return (
    <>
      <NewsArticleSchema
        title="Valve Corporation - Company Profile 2026"
        description="Complete profile of Valve Corporation covering Steam, Counter-Strike, Dota 2, loot box revenue, and organizational structure. Data current as of February 2026."
        author="ObjectWire Technology Desk"
        authorUrl="https://objectwire.org/team"
        publishedTime="2025-01-01T00:00:00Z"
        modifiedTime="2026-02-26T00:00:00Z"
        articleUrl="https://objectwire.org/video-games/valve-corporation"
        section="Gaming"
        keywords={['Valve', 'Steam', 'Counter-Strike', 'Gabe Newell', 'loot boxes', 'gaming']}
      />

      <DynamicNewsArticle
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/video-games', label: 'Video Games' },
        ]}
        categories={[
          { label: 'COMPANY PROFILE', color: 'blue' },
          { label: 'GAMING', color: 'red' },
        ]}
        readTime="12 min read"
        title="Valve Corporation"
        subtitle="American video game developer and digital distribution company headquartered in Bellevue, Washington -- creator of Steam, Counter-Strike, Half-Life, Dota 2, and Team Fortress 2"
        author={{
          name: 'ObjectWire Technology Desk',
          department: 'Company Profiles & Analysis',
          initials: 'OW',
        }}
        publishDate="January 1, 2025"
        updatedDate="February 26, 2026"
        heroImage={{
          src: '/influncer/valve-ceo-Gabe-Newell.PNG',
          alt: 'Valve CEO Gabe Newell',
          caption: 'Valve CEO and co-founder Gabe Newell. Newell owns a majority stake exceeding 50% of the company.',
          credit: 'ObjectWire',
        }}
        relatedArticles={[
          {
            href: '/copyright/news/letitia-james-sues-counter-strike',
            category: 'BREAKING',
            categoryColor: 'text-red-600',
            title: 'NY AG Letitia James Sues Valve Over CS2 Loot Boxes',
          },
          {
            href: '/video-games',
            category: 'GAMING NEWS',
            categoryColor: 'text-blue-600',
            title: 'Latest Video Game Coverage',
          },
          {
            href: '/tech',
            category: 'TECH',
            categoryColor: 'text-gray-600',
            title: 'Technology News',
          },
        ]}
        timeline={[
          { date: 'August 24, 1996', description: 'Valve, L.L.C. founded by Gabe Newell and Mike Harrington in Kirkland, Washington', highlight: true },
          { date: 'November 19, 1998', description: 'Half-Life released, selling millions and reshaping the first-person shooter genre', highlight: true },
          { date: '2000', description: 'Mike Harrington sells stake to Gabe Newell, leaving Newell as majority owner' },
          { date: 'September 12, 2003', description: 'Steam digital distribution platform launches', highlight: true },
          { date: '2003', description: 'Valve reincorporates as Valve Corporation and relocates to Bellevue, Washington' },
          { date: 'November 16, 2004', description: 'Half-Life 2 released, sells 12 million copies by 2011' },
          { date: 'October 9, 2007', description: 'The Orange Box released, including Portal and Team Fortress 2' },
          { date: 'June 23, 2011', description: 'Team Fortress 2 goes free-to-play with cosmetic item economy' },
          { date: 'August 21, 2012', description: 'Counter-Strike: Global Offensive (CS:GO) released' },
          { date: 'July 9, 2013', description: 'Dota 2 fully released; The International prize pool exceeds $2.8 million' },
          { date: '2017', description: 'Steam reaches 67 million monthly active users' },
          { date: 'March 23, 2020', description: 'Half-Life: Alyx released for VR headsets' },
          { date: 'September 27, 2023', description: 'Counter-Strike 2 (CS2) launches, replacing CS:GO', highlight: true },
          { date: '2025', description: 'CS2 skin and case revenue exceeds $1 billion; Steam gross revenue reaches $17 billion' },
          { date: 'February 2026', description: 'NY AG Letitia James files lawsuit against Valve over CS2 loot boxes' },
        ]}
        documents={[
          { href: 'https://www.valvesoftware.com/', label: 'Valve Official Website', icon: '🎮' },
          { href: 'https://store.steampowered.com/', label: 'Steam Platform', icon: '💨' },
          { href: 'https://en.wikipedia.org/wiki/Valve_Corporation', label: 'Wikipedia: Valve Corporation', icon: '📖' },
        ]}
        sources={[
          {
            number: 1,
            url: 'https://en.wikipedia.org/wiki/Valve_Corporation',
            title: 'Valve Corporation - Wikipedia',
            description: 'Historical information and company background',
          },
          {
            number: 2,
            url: 'https://www.valvesoftware.com/',
            title: 'Valve Software Official Website',
            description: 'Official company information',
          },
          {
            number: 3,
            url: 'https://store.steampowered.com/',
            title: 'Steam Platform',
            description: 'Valve digital distribution storefront',
          },
        ]}
        showCorrections={true}
        showEditorialStandards={true}
      >
        <CaseOverview
          title="COMPANY OVERVIEW"
          color="blue"
          items={[
            { label: 'Founded:', value: 'August 24, 1996' },
            { label: 'Headquarters:', value: 'Bellevue, Washington, USA' },
            { label: 'CEO:', value: 'Gabe Newell (co-founder, majority owner)' },
            { label: 'Employees:', value: '~330-360 (2025 estimate)' },
            { label: '2023 Revenue:', value: '$5 billion' },
            { label: '2025 Steam Gross Revenue:', value: '$17 billion' },
            { label: 'Revenue Share (Steam):', value: '30% standard; 25-20% high-volume' },
            { label: 'CS2 Skin/Case Revenue (2025):', value: 'Over $1 billion' },
            { label: 'Structure:', value: 'Privately held, flat organization' },
          ]}
        />

        <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
          <strong>Valve Corporation</strong> develops video games, operates the Steam digital distribution platform, and manufactures hardware from its headquarters in Bellevue, Washington. Founded on August 24, 1996, by former Microsoft employees Gabe Newell and Mike Harrington, the company released its first title Half-Life in 1998. Steam, launched in 2003, serves as the primary revenue driver through a 30% commission on game sales and in-game transactions.
        </p>

        <p>
          Valve generated $5 billion in revenue during 2023, with Steam accounting for the majority. Major titles include the Counter-Strike series, Dota 2, Team Fortress 2, and Portal. Loot boxes and cosmetic items, particularly in Counter-Strike: Global Offensive (CS:GO) and Counter-Strike 2 (CS2), form a significant revenue stream, with CS2 skin and case sales exceeding $1 billion in 2025. The company maintains a flat organizational structure with approximately 336 employees as of 2021 and similar headcount estimates through 2025. Data current as of February 2026.
        </p>

        <StatisticsBox
          title="KEY STATISTICS"
          color="blue"
          stats={[
            { value: '$5B', label: '2023 Revenue' },
            { value: '$17B', label: '2025 Steam Gross' },
            { value: '$1B+', label: 'CS2 Revenue 2025' },
            { value: '~350', label: 'Employees' },
          ]}
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Founding and Early Development
        </h2>

        <p>
          Valve began operations as Valve, L.L.C. in Kirkland, Washington, on August 24, 1996. Gabe Newell and Mike Harrington, both ex-Microsoft employees, established the company. Harrington sold his stake to Newell in 2000, leaving Newell with majority ownership exceeding 50%. The entity reincorporated as Valve Corporation in 2003 and relocated to Bellevue.
        </p>

        <p>
          Initial development focused on modifying the Quake engine into GoldSrc for Half-Life, released November 19, 1998. Half-Life sold millions of copies and shaped first-person shooter mechanics, winning over 50 game of the year awards. Half-Life 2 launched October 16, 2004, selling 12 million copies by 2011 and introducing the Source engine with advanced physics via the Havok system.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Major Game Franchises
        </h2>

        <p>
          Valve produces multiplayer titles with ongoing updates and community mod support. All major ongoing titles use free-to-play models supported by cosmetic microtransactions.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Half-Life Series</h3>

        <p>
          The franchise that launched Valve. Half-Life (1998) used the GoldSrc engine and featured continuous gameplay without level-loading screens, a major innovation for the time. Half-Life 2 (2004) introduced the Source engine, facial animation, and physics-based puzzles. Episodes One (2006) and Two (2007) continued the story. Half-Life: Alyx (2020) marked Valve's return to the series as a full VR title, receiving near-universal critical acclaim.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Counter-Strike Series</h3>

        <p>
          Counter-Strike originated as a Half-Life mod by Minh Le and Jess Cliffe in 1999. Valve acquired the mod and released a standalone version in 2000. Counter-Strike: Source (2004) ported the game to the Source engine. Counter-Strike: Global Offensive (CS:GO) launched August 21, 2012, and introduced weapon cases with cosmetic skins, creating a multi-billion dollar secondary market. Counter-Strike 2 launched September 27, 2023, replacing CS:GO on a new Source 2 engine.
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Counter-Strike (1999/2000):</strong> Originated as Half-Life mod, standalone in 2000</li>
          <li><strong>Counter-Strike: Source (2004):</strong> Source engine port</li>
          <li><strong>Counter-Strike: Global Offensive (2012):</strong> Introduced loot box economy</li>
          <li><strong>Counter-Strike 2 (2023):</strong> Source 2 engine; replaced CS:GO</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Team Fortress 2</h3>

        <p>
          Released October 9, 2007 as part of The Orange Box, Team Fortress 2 introduced Valve's cosmetic item economy in June 2010 before going free-to-play on June 23, 2011. The game pioneered the hat and cosmetic model that Valve later deployed across other titles. As of 2025 TF2 remains active despite being over 17 years old, sustained entirely by cosmetic purchases and community activity.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Portal Series</h3>

        <p>
          Portal (2007) shipped inside The Orange Box. Its puzzle mechanics using a portal gun received widespread praise. Portal 2 (2011) expanded the single-player campaign and added cooperative play, earning near-perfect review scores. No Portal 3 has been announced.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Dota 2</h3>

        <p>
          Dota 2 launched July 9, 2013, as a free-to-play multiplayer online battle arena. The International, Valve's annual Dota 2 championship, generated prize pools funded by battle pass sales, reaching $40 million in 2021 -- the largest prize pool in esports history at the time. Cosmetic bundles and battle passes provide recurring revenue without affecting gameplay.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Steam Platform
        </h2>

        <p>
          Steam launched September 12, 2003, initially for Half-Life 2 updates and distribution, then expanded to third-party titles. It reached 67 million monthly active users by 2017. Gross revenue on Steam totaled $17 billion in 2025. The platform applies a 30% revenue share on most sales, reduced to 25% for developers earning over $10 million and 20% for earnings over $50 million.
        </p>

        <p>
          Steam holds the largest share of the PC digital distribution market. Features include the Steam Workshop for user-generated content, Steam Community Market for item trading, Steam Remote Play, and Steam Deck hardware integration. The Steam Community Market applies a 15% transaction fee on all player-to-player trades, with 5% going to the game publisher and 10% to Valve.
        </p>

        <StatisticsBox
          title="STEAM PLATFORM METRICS"
          color="blue"
          stats={[
            { value: 'Sept 12, 2003', label: 'Launch Date' },
            { value: '67M+', label: 'Monthly Active Users (2017)' },
            { value: '$17B', label: '2025 Gross Revenue' },
            { value: '30%', label: 'Standard Revenue Share' },
          ]}
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Loot Boxes and Microtransaction Revenue
        </h2>

        <p>
          Valve implements loot box systems through weapon cases in Counter-Strike titles. Players purchase keys to open cases containing cosmetic weapon skins at randomized rarity tiers. CS:GO and CS2 cases generated over $1 billion in revenue for Valve in 2025, with case key sales alone contributing approximately $800 million. The skin economy operates via the Steam Community Market, where players trade items and Valve collects a 15% transaction fee.
        </p>

        <p>
          The CS2 skin secondary market is extensive. Individual rare skins have sold for six figures, and one CS2 skin reportedly traded for over $1 million. The total value of the skin economy is estimated in the billions. Team Fortress 2 introduced the cosmetic item economy in 2010, and Dota 2 uses battle passes and cosmetic bundles, generating billions in cumulative revenue since launch.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
          <h4 className="font-bold mb-2">Legal Challenge: NY AG Lawsuit (2026)</h4>
          <p className="text-sm mb-3">
            In February 2026, New York Attorney General Letitia James filed a lawsuit against Valve Corporation alleging that CS2 loot boxes constitute illegal gambling under New York law, meeting the legal standard of consideration, chance, and monetary prize through the Steam skin market. Valve CEO Gabe Newell's official public response was: "GL HF."
          </p>
          <Link
            href="/copyright/news/letitia-james-sues-counter-strike"
            className="text-yellow-700 hover:underline font-medium text-sm"
          >
            Read full coverage: NY AG Letitia James Sues Valve Over CS2 Loot Boxes
          </Link>
        </div>

        <ArticleQuote
          quote="GL HF"
          author="Gabe Newell, CEO, Valve Corporation"
          title="Official response to the NY AG lawsuit"
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Organizational Structure and Headcount
        </h2>

        <p>
          Valve employs a flat structure without traditional managers, allowing employees to select projects. The approach is outlined in the company's public Employee Handbook. Headcount stood at 336 in 2021, with estimates between 330 and 360 through 2025. The company remains privately held, with Gabe Newell as majority owner. No public financial filings are required.
        </p>

        <p>
          The flat structure means product decisions, release timing, and resource allocation are driven by employee interest rather than a top-down management chain. Critics note this can lead to long development gaps; no mainline Half-Life game shipped between Half-Life 2: Episode Two (2007) and Half-Life: Alyx (2020).
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Hardware
        </h2>

        <p>
          Valve has entered hardware manufacturing on multiple occasions. The Steam Controller (2015) attempted to bring analog input to PC gaming. Steam Machines (2015) were Linux-based PCs designed to bring Steam to the living room; both lines were discontinued. The Steam Deck, announced in July 2021 and released February 25, 2022, is a handheld gaming PC running SteamOS. Multiple Steam Deck revisions have followed, and the device represents Valve's most commercially successful hardware venture.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Key Statistics Summary
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Founding date', 'August 24, 1996'],
                ['Founders', 'Gabe Newell, Mike Harrington'],
                ['Headquarters', 'Bellevue, Washington, USA'],
                ['Steam launch date', 'September 12, 2003'],
                ['2023 company revenue', '$5 billion'],
                ['2025 Steam gross revenue', '$17 billion'],
                ['CS2 skin/case revenue 2025', 'Over $1 billion'],
                ['Case key revenue 2025 (est.)', '~$800 million'],
                ['Steam transaction fee', '15% on player-to-player trades'],
                ['Standard Steam cut', '30% on game sales'],
                ['Employee count (2021)', '336'],
                ['Employee count estimate (2025)', '330-360'],
                ['Ownership', 'Privately held; Gabe Newell majority owner (50%+)'],
                ['Major titles', 'Half-Life, Counter-Strike, Team Fortress 2, Portal, Dota 2'],
                ['Highest single skin sale', 'Over $1 million (CS2)'],
              ].map(([metric, value], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium border-b border-gray-100">{metric}</td>
                  <td className="px-4 py-3 border-b border-gray-100">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          External Links
        </h2>

        <ul className="space-y-2">
          <li>
            <a
              href="https://www.valvesoftware.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Valve Corporation Official Website
            </a>
          </li>
          <li>
            <a
              href="https://store.steampowered.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Steam Platform
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Valve_Corporation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Valve Corporation - Wikipedia
            </a>
          </li>
          <li>
            <Link href="/copyright/news/letitia-james-sues-counter-strike" className="text-blue-600 hover:underline">
              ObjectWire: NY AG Letitia James Sues Valve Over CS2 Loot Boxes
            </Link>
          </li>
          <li>
            <Link href="/video-games" className="text-blue-600 hover:underline">
              ObjectWire Video Games Coverage
            </Link>
          </li>
        </ul>

      </DynamicNewsArticle>
    </>
  );
}
