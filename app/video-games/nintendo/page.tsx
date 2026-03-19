import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import {
  DynamicNewsArticle,
  CaseOverview,
  StatisticsBox,
  ProcessDiagram,
  ArticleQuote,
} from '@/components/DynamicNewsArticle';

// ============================================================
// METADATA - Optimized SEO tags at the top for easy editing
// ============================================================
export const metadata: Metadata = {
  title: 'Nintendo Co., Ltd. - Gaming Company Profile | ObjectWire',
  description: 'Complete profile of Nintendo, Japanese multinational video game company. History, gaming consoles, franchises like Mario and Zelda, Switch success, and latest developments.',
  keywords: [
    'Nintendo',
    'Nintendo Company',
    'video game company',
    'Nintendo Switch',
    'Super Mario',
    'The Legend of Zelda',
    'gaming consoles',
    'Japanese gaming',
    'Kyoto Japan',
    'Shigeru Miyamoto',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/nintendo',
  },
  openGraph: {
    title: 'Nintendo Co., Ltd. - Gaming Company Profile',
    description: 'Japanese video game company: history, iconic franchises, and gaming innovations.',
    type: 'article',
    url: 'https://www.objectwire.org/nintendo',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nintendo - Company Profile',
    description: 'Complete guide to Nintendo gaming company.',
  },
};

export default function NintendoPage() {
  return (
    <>
      <NewsArticleSchema
        title="Nintendo Co., Ltd. - Gaming Company Profile"
        description="Complete profile of Nintendo, Japanese multinational video game company headquartered in Kyoto, Japan."
        author="ObjectWire Technology Desk"
        authorUrl="https://objectwire.org/team"
        publishedTime="2024-08-20T00:00:00Z"
        modifiedTime="2026-01-31T15:00:00Z"
        articleUrl="https://objectwire.org/nintendo"
        section="Gaming"
        keywords={['Nintendo', 'video games', 'gaming', 'Switch', 'Mario']}
      />

      <DynamicNewsArticle
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/news', label: 'News' },
        ]}
        categories={[
          { label: 'COMPANY PROFILE', color: 'blue' },
          { label: 'GAMING', color: 'red' },
        ]}
        readTime="20 min read"
        title="Nintendo Co., Ltd."
        subtitle="Japanese multinational video game company headquartered in Kyoto, Japan, known for iconic franchises including Super Mario, The Legend of Zelda, and Pokémon, and revolutionary gaming hardware"
        author={{
          name: 'ObjectWire Technology Desk',
          department: 'Company Profiles & Analysis',
          initials: 'OW',
        }}
        publishDate="August 20, 2024"
        updatedDate="January 31, 2026"
        relatedArticles={[
          {
            href: '/nintendo/google-project-genie-ai-knockoffs',
            category: 'BREAKING',
            categoryColor: 'text-red-600',
            title: 'Google\'s Project Genie AI Tool Generates Nintendo Knockoffs',
          },
          {
            href: '/news',
            category: 'GAMING NEWS',
            categoryColor: 'text-blue-600',
            title: 'Latest Gaming Coverage',
          },
        ]}
        timeline={[
          { date: 'September 23, 1889', description: 'Nintendo founded as playing card company by Fusajiro Yamauchi' },
          { date: '1977', description: 'Color TV-Game consoles - first video game hardware' },
          { date: 'July 15, 1983', description: 'Famicom (NES) launches in Japan', highlight: true },
          { date: '1985', description: 'Super Mario Bros. released - becomes best-selling game' },
          { date: '1996', description: 'Nintendo 64 and Super Mario 64 launch 3D gaming era' },
          { date: '2006', description: 'Nintendo Wii revolutionizes gaming with motion controls', highlight: true },
          { date: 'March 3, 2017', description: 'Nintendo Switch launches as hybrid console', highlight: true },
          { date: '2023', description: 'The Super Mario Bros. Movie grosses $1.36 billion' },
          { date: 'January 2026', description: 'Switch 2 announcement expected' },
        ]}
        documents={[
          {
            href: 'https://www.nintendo.com/',
            label: 'Nintendo Official Website',
            icon: '🎮',
          },
          {
            href: 'https://www.nintendo.co.jp/ir/en/index.html',
            label: 'Investor Relations',
            icon: '📊',
          },
          {
            href: 'https://www.nintendo.com/us/whatsnew/',
            label: 'Nintendo News',
            icon: '📰',
          },
        ]}
        sources={[
          {
            number: 1,
            url: 'https://www.nintendo.com/',
            title: 'Nintendo Official Website',
            description: 'Official company information and product details',
          },
          {
            number: 2,
            url: 'https://www.nintendo.co.jp/ir/en/index.html',
            title: 'Nintendo Investor Relations',
            description: 'Financial reports and shareholder information',
          },
          {
            number: 3,
            url: 'https://en.wikipedia.org/wiki/Nintendo',
            title: 'Nintendo - Wikipedia',
            description: 'Historical information and company background',
          },
        ]}
        showCorrections={true}
        showEditorialStandards={true}
      >
        <CaseOverview
          title="COMPANY OVERVIEW"
          color="red"
          items={[
            { label: 'Founded:', value: 'September 23, 1889' },
            { label: 'Headquarters:', value: 'Kyoto, Japan' },
            { label: 'President:', value: 'Shuntaro Furukawa (since 2018)' },
            { label: 'Employees:', value: '~7,300 (2025)' },
            { label: 'Revenue:', value: '¥1.67 trillion / $11.3B (2024)' },
            { label: 'Market Cap:', value: '~$55 billion' },
          ]}
        />

        <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
          <strong>Nintendo Co., Ltd.</strong> is a Japanese multinational video game company headquartered in Kyoto, Japan. Founded in 1889 as a playing card company, Nintendo transformed into one of the most influential and recognizable brands in the video game industry, creating iconic franchises including Super Mario, The Legend of Zelda, Pokémon, and many others that have defined generations of gaming.
        </p>

        <p>
          Nintendo is renowned for its innovative approach to gaming hardware and software, consistently prioritizing unique gameplay experiences over raw technical specifications. The company designs and manufactures video game consoles, handheld systems, and develops first-party games that consistently rank among the best-selling and highest-rated titles in the industry. As of 2025, Nintendo has sold over 800 million hardware units and billions of software units worldwide.
        </p>

        <StatisticsBox
          title="KEY ACHIEVEMENTS"
          color="red"
          stats={[
            { value: '143M+', label: 'Switch Units Sold' },
            { value: '1.2B+', label: 'Switch Games Sold' },
            { value: '800M+', label: 'Hardware Lifetime' },
            { value: '$55B', label: 'Market Cap' },
          ]}
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Company History
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Early History (1889-1970s)</h3>

        <p>
          Nintendo was founded on September 23, 1889, by Fusajiro Yamauchi as a playing card company producing handmade hanafuda cards in Kyoto. The company name "Nintendo" has been translated as "leave luck to heaven" or "the temple of free hanafuda." Nintendo remained a card company for decades, eventually expanding into other ventures including a taxi company, love hotels, and toy manufacturing in the 1960s.
        </p>

        <p>
          Under the leadership of Hiroshi Yamauchi (great-grandson of the founder), Nintendo began its transition to electronic entertainment in the 1970s. The company hired Gunpei Yokoi, who developed the Ultra Hand toy and later pioneered Nintendo's entry into electronic games. In 1977, Nintendo released the Color TV-Game consoles in Japan, marking its first foray into video game hardware.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">The Famicom/NES Era (1983-1990)</h3>

        <p>
          Nintendo revolutionized home gaming with the Family Computer (Famicom) in Japan on July 15, 1983, and the Nintendo Entertainment System (NES) in North America in 1985. The NES revitalized the video game industry following the 1983 crash, establishing Nintendo as the dominant force in console gaming.
        </p>

        <p>
          The hire of Shigeru Miyamoto proved transformative. Miyamoto created Donkey Kong (1981) for arcades, introducing the character who would become Mario. Super Mario Bros. (1985) for NES became the best-selling video game of its time with over 40 million copies sold, establishing side-scrolling platformers as a dominant genre. The Legend of Zelda (1986) pioneered open-world adventure games with save functionality.
        </p>

        <p>
          Nintendo's strict licensing policies and "Seal of Quality" program restored consumer confidence after the market crash. Third-party developers created thousands of games for the platform, establishing franchises like Mega Man, Final Fantasy, and Castlevania on Nintendo hardware.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Handheld Gaming and SNES (1989-1995)</h3>

        <p>
          The Game Boy, released in 1989, established Nintendo's dominance in handheld gaming. Designed by Gunpei Yokoi with a focus on durability and battery life over technical specifications, the Game Boy sold over 118 million units. Tetris, bundled with the system, became one of gaming's most iconic titles. The Pokémon franchise, launching on Game Boy in 1996, became a cultural phenomenon generating over $100 billion in lifetime revenue.
        </p>

        <p>
          The Super Nintendo Entertainment System (SNES), released in 1990, competed against Sega's Genesis in the "console wars." While the Genesis gained market share with aggressive marketing, the SNES delivered critically acclaimed titles including Super Mario World, Super Metroid, The Legend of Zelda: A Link to the Past, and Super Mario Kart. The SNES sold 49 million units and established franchises that remain Nintendo's core properties.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">3D Gaming Transition (1996-2001)</h3>

        <p>
          The Nintendo 64 (1996) marked Nintendo's entry into 3D gaming. Super Mario 64 revolutionized 3D platformers with its analog control and camera system, setting the template for 3D game design. The Legend of Zelda: Ocarina of Time (1998) is frequently cited as one of the greatest games ever made, pioneering Z-targeting and cinematic storytelling.
        </p>

        <p>
          Despite critical success, the N64 struggled against Sony's PlayStation due to Nintendo's decision to use cartridges instead of CDs, limiting storage capacity and increasing costs. The N64 sold 33 million units compared to PlayStation's 102 million. Key third-party developers like Square (Final Fantasy) and Enix (Dragon Quest) moved to PlayStation, weakening Nintendo's software library.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">GameCube and Dual-Screen Innovation (2001-2006)</h3>

        <p>
          The GameCube (2001) continued Nintendo's struggles against Sony's PlayStation 2 and Microsoft's Xbox, selling only 21.7 million units. However, the system featured acclaimed first-party titles including Super Smash Bros. Melee, Metroid Prime, and The Legend of Zelda: The Wind Waker.
        </p>

        <p>
          Nintendo found success with the Game Boy Advance (2001) and particularly the Nintendo DS (2004), which featured dual screens and touch input. The DS sold 154 million units, becoming Nintendo's best-selling handheld. Titles like Brain Age and Nintendogs expanded gaming demographics beyond traditional gamers.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Wii Revolution (2006-2012)</h3>

        <p>
          The Nintendo Wii, released in 2006, revolutionized gaming with motion controls and accessible gameplay. Wii Sports, bundled with the system, introduced gaming to non-traditional audiences including families and elderly players. The Wii sold 101.6 million units, outselling the Xbox 360 and PlayStation 3.
        </p>

        <p>
          Wii's success came from "Blue Ocean Strategy"—creating new market space rather than competing on specifications. However, third-party support remained weak, and the system's casual gaming focus alienated core gamers. Late-generation sales declined as the novelty of motion controls faded.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Wii U Struggles (2012-2017)</h3>

        <p>
          The Wii U (2012) failed commercially, selling only 13.6 million units—Nintendo's worst-selling home console. The GamePad controller with built-in screen confused consumers who thought it was a Wii accessory rather than a new console. Third-party support evaporated, and many major multiplatform releases skipped the system.
        </p>

        <p>
          Despite hardware failure, Wii U delivered excellent first-party software including Splatoon, Super Mario 3D World, Mario Kart 8, and The Legend of Zelda: Breath of the Wild (released simultaneously on Switch). These games laid groundwork for Switch's success.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Switch Era (2017-Present)</h3>

        <p>
          The Nintendo Switch launched March 3, 2017, as a hybrid console functioning as both home and portable system. The innovative design allowing seamless transition between TV and handheld play addressed Nintendo's challenge of supporting two separate platforms.
        </p>

        <p>
          Switch became a massive success, selling over 143 million units as of December 2024—Nintendo's best-selling home console and second-best-selling system overall after the DS. The Legend of Zelda: Breath of the Wild launched as a killer app, followed by Super Mario Odyssey, Animal Crossing: New Horizons (31 million copies during COVID-19), and Mario Kart 8 Deluxe (62 million copies).
        </p>

        <p>
          Switch benefited from strong third-party support, particularly from indie developers. Major franchises like The Witcher 3, Doom, and Skyrim received successful Switch ports. Nintendo's first-party lineup maintained consistent quality with Splatoon 3, Pokémon Scarlet/Violet, and The Legend of Zelda: Tears of the Kingdom.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Major Franchises
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Super Mario</h3>

        <p>
          Nintendo's flagship franchise, Super Mario has sold over 830 million units across all games. Created by Shigeru Miyamoto, Mario appeared first in Donkey Kong (1981) before starring in Super Mario Bros. (1985). The franchise spans platformers (Super Mario Odyssey), racing (Mario Kart), sports (Mario Tennis), RPGs (Paper Mario), and party games (Mario Party). Mario Kart 8 Deluxe is the best-selling Switch game at 62 million copies.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">The Legend of Zelda</h3>

        <p>
          The action-adventure franchise created by Shigeru Miyamoto and Takashi Tezuka has sold over 160 million copies since 1986. Known for intricate dungeons, puzzles, and exploration, the series reinvented itself with Breath of the Wild (2017) and Tears of the Kingdom (2023), both earning universal critical acclaim. Ocarina of Time (1998) is frequently cited among gaming's greatest achievements.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Pokémon</h3>

        <p>
          While developed by Game Freak and published by The Pokémon Company, Nintendo owns significant stake and publishes Pokémon games. The franchise has generated over $100 billion in revenue across games, trading cards, anime, movies, and merchandise since 1996. Pokémon is the highest-grossing media franchise of all time. Main series games consistently sell 20+ million copies, with Pokémon Sword/Shield reaching 26 million.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Other Major Franchises</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Animal Crossing:</strong> Life simulation series; New Horizons sold 45 million copies</li>
          <li><strong>Splatoon:</strong> Team-based shooter franchise with unique ink mechanics</li>
          <li><strong>Super Smash Bros.:</strong> Fighting game crossover featuring Nintendo characters; Ultimate sold 34 million</li>
          <li><strong>Metroid:</strong> Sci-fi action-adventure series known for atmospheric exploration</li>
          <li><strong>Donkey Kong:</strong> Platformer series featuring the iconic ape character</li>
          <li><strong>Kirby:</strong> Platformer series featuring the pink puffball</li>
          <li><strong>Fire Emblem:</strong> Tactical RPG series experiencing mainstream success with Three Houses</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Corporate Leadership
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Executive Team</h3>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="border-2 border-black p-4">
            <h4 className="font-bold">Shuntaro Furukawa</h4>
            <p className="text-sm text-gray-500 mb-2">President (since June 2018)</p>
            <p className="text-sm">
              Became Nintendo's sixth president following Tatsumi Kimishima. Oversees Switch success and manages transition to next-generation hardware. Previously served in Nintendo's corporate planning and overseas business divisions.
            </p>
          </div>

          <div className="border-2 border-gray-200 p-4">
            <h4 className="font-bold">Shigeru Miyamoto</h4>
            <p className="text-sm text-gray-500 mb-2">Representative Director, Fellow</p>
            <p className="text-sm">
              Legendary game designer and creator of Mario, Zelda, Donkey Kong, and Star Fox. Considered one of the most influential figures in gaming history. Now focuses on broader creative supervision and new IP development.
            </p>
          </div>

          <div className="border-2 border-gray-200 p-4">
            <h4 className="font-bold">Ko Shiota</h4>
            <p className="text-sm text-gray-500 mb-2">Senior Executive Officer, General Manager of Corporate Analysis & Administration Division</p>
            <p className="text-sm">
              Oversees financial operations, accounting, and corporate administration.
            </p>
          </div>

          <div className="border-2 border-gray-200 p-4">
            <h4 className="font-bold">Shinya Takahashi</h4>
            <p className="text-sm text-gray-500 mb-2">Senior Managing Executive Officer, Deputy General Manager of Entertainment Planning & Development</p>
            <p className="text-sm">
              Oversees game development across Nintendo's internal studios. Managed Breath of the Wild and Tears of the Kingdom development.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Business Strategy and Philosophy
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Gameplay First</h3>

        <p>
          Nintendo prioritizes innovative gameplay experiences over technical specifications. While competitors focus on raw processing power and graphics, Nintendo emphasizes unique control schemes, novel hardware features, and accessible game design. This philosophy led to motion controls (Wii), dual screens (DS), and hybrid design (Switch).
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Evergreen Titles</h3>

        <p>
          Unlike most publishers, Nintendo games maintain sales years after release at full price. Mario Kart 8 Deluxe continues selling millions annually since 2017. Animal Crossing: New Horizons sold 31 million copies in 2020 alone. This "evergreen" strategy prioritizes long-term value over discounting.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Vertical Integration</h3>

        <p>
          Nintendo designs hardware, develops software, and manufactures systems (through partners like Foxconn). This vertical integration allows tight hardware-software optimization but limits flexibility compared to pure software publishers.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Recent Developments
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
          <h4 className="font-bold mb-2">🆕 Latest: Google AI Tool Controversy</h4>
          <p className="text-sm mb-3">
            In January 2026, Google launched Project Genie, an AI tool that sparked immediate copyright concerns after demonstrating ability to generate playable worlds nearly indistinguishable from Nintendo titles including Super Mario 64 and Breath of the Wild without restrictions.
          </p>
          <Link 
            href="/nintendo/google-project-genie-ai-knockoffs"
            className="text-blue-600 hover:underline font-medium text-sm"
          >
            Read full coverage: Google's Project Genie AI Tool Generates Nintendo Knockoffs →
          </Link>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-3">2024-2026 Key Milestones</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Switch 2 Announcement (Expected 2026):</strong> Next-generation hardware widely anticipated</li>
          <li><strong>Super Mario Bros. Movie (2023):</strong> Grossed $1.36 billion, highest-grossing video game adaptation</li>
          <li><strong>Zelda Movie Announced (2023):</strong> Live-action film in development with Sony Pictures</li>
          <li><strong>Universal Theme Parks (2023-2025):</strong> Super Nintendo World opens in Hollywood, Orlando, and Singapore</li>
          <li><strong>Tears of the Kingdom (2023):</strong> Sequel to Breath of the Wild sells 20+ million copies</li>
          <li><strong>Switch OLED Model (2021):</strong> Premium Switch variant with enhanced screen</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          External Links
        </h2>

        <ul className="space-y-2">
          <li>
            <a 
              href="https://www.nintendo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Official Nintendo Website
            </a>
          </li>
          <li>
            <a 
              href="https://www.nintendo.co.jp/ir/en/index.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Nintendo Investor Relations
            </a>
          </li>
          <li>
            <a 
              href="https://www.nintendo.com/us/whatsnew/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Nintendo News & Updates
            </a>
          </li>
          <li>
            <a 
              href="https://twitter.com/NintendoAmerica" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Nintendo of America on X (Twitter)
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/company/nintendo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Nintendo on LinkedIn
            </a>
          </li>
        </ul>

      </DynamicNewsArticle>
    </>
  );
}
