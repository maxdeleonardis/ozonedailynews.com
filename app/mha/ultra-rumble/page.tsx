import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'My Hero Ultra Rumble: Complete Game Guide & Wiki | ObjectWire',
  description: 'Comprehensive guide to My Hero Ultra Rumble, the free-to-play 24-player battle royale based on My Hero Academia. Characters, gameplay, seasons, and competitive scene.',
  keywords: [
    'My Hero Ultra Rumble',
    'MHA battle royale',
    'My Hero Academia game',
    'Ultra Rumble characters',
    'Bandai Namco',
    'free to play battle royale',
    'anime battle royale',
    'MHA Ultra Rumble wiki',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/mha/ultra-rumble',
  },
  openGraph: {
    title: 'My Hero Ultra Rumble: Complete Game Guide & Wiki',
    description: 'Comprehensive guide to My Hero Ultra Rumble, the free-to-play 24-player battle royale based on My Hero Academia.',
    type: 'article',
    url: 'https://www.objectwire.org/mha/ultra-rumble',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Hero Ultra Rumble: Complete Game Guide & Wiki',
    description: 'Comprehensive guide to My Hero Ultra Rumble, the free-to-play 24-player battle royale based on My Hero Academia.',
  },
};

export default function MyHeroUltraRumblePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NewsArticleSchema
        title="My Hero Ultra Rumble: Complete Game Guide & Wiki"
        description="Comprehensive guide to My Hero Ultra Rumble, the free-to-play 24-player battle royale based on My Hero Academia. Characters, gameplay, seasons, and competitive scene."
        publishedTime="2024-09-28T00:00:00Z"
        modifiedTime="2026-01-27T00:00:00Z"
        author="ObjectWire Editorial Team"
        imageUrl="https://www.objectwire.org/mha-ultra-rumble-hero.jpg"
        articleUrl="https://www.objectwire.org/mha/ultra-rumble"
        section="Gaming"
        keywords={["My Hero Academia", "Ultra Rumble", "battle royale", "anime game", "multiplayer"]}
      />

      <Breadcrumb
        items={[
          { name: 'Home', item: '/' },
          { name: 'My Hero Academia', item: '/mha' },
          { name: 'Ultra Rumble', item: '/mha/ultra-rumble' },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            My Hero Ultra Rumble
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The Free-to-Play 24-Player Battle Royale from My Hero Academia Universe
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Overview */}
          <section className="mb-12 bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>My Hero Ultra Rumble</strong> is a free-to-play, 24-player battle royale game developed and published by Bandai Namco Entertainment. Released on September 28, 2023, the game brings the beloved My Hero Academia universe to the competitive multiplayer arena, allowing players to control their favorite heroes and villains in intense 8-team battles.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Set in the iconic world created by Kohei Horikoshi, Ultra Rumble features fast-paced combat where players must master Quirks—the superpowers that define the My Hero Academia franchise. The game combines traditional battle royale mechanics with unique anime-style abilities, creating a distinct experience that appeals to both MHA fans and competitive gamers.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Available on PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, Nintendo Switch, and PC (via Steam), Ultra Rumble has built a dedicated player base through consistent seasonal updates, new character releases, and competitive tournaments.
            </p>
          </section>

          {/* Gameplay */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Gameplay Mechanics</h2>
            
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm mb-6">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Battle Royale Format</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ultra Rumble divides 24 players into 8 teams of 3, creating a unique tactical dynamic where cooperation is essential. Teams must scavenge for items, level up their characters during matches, and strategically position themselves as the playable area shrinks—a mechanic represented by the "collapse" of the battlefield.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Unlike traditional shooters, combat emphasizes melee attacks, special abilities (Quirks), and environmental destruction. Players can demolish buildings, create vertical pathways, and use the terrain to gain tactical advantages—staying true to the destructive spectacle of the anime.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm mb-6">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Character Roles & Quirks</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Each playable character belongs to one of five role types:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li><strong className="text-blue-400">Strike:</strong> Aggressive damage dealers focused on eliminating enemies quickly</li>
                <li><strong className="text-green-400">Assault:</strong> Balanced fighters with versatile combat abilities</li>
                <li><strong className="text-yellow-400">Rapid:</strong> High-mobility characters specializing in hit-and-run tactics</li>
                <li><strong className="text-purple-400">Technical:</strong> Support specialists providing buffs, healing, and utility</li>
                <li><strong className="text-red-400">Support:</strong> Team-oriented characters with area control and defensive capabilities</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Each character's Quirk functions as their unique ability set—from Izuku Midoriya's One For All power punches to Himiko Toga's transformation abilities. Mastering these Quirks and understanding team composition is crucial to victory.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-pink-400 mb-4">Progression System</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Players earn experience through matches to level up characters and unlock cosmetic items. The game features:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Season Battle Passes (free and premium tiers)</li>
                <li>Character-specific mastery progression</li>
                <li>Cosmetic customization including costumes, voice lines, and victory poses</li>
                <li>Ranked competitive mode with tier-based matchmaking</li>
                <li>Limited-time events with exclusive rewards</li>
              </ul>
            </div>
          </section>

          {/* Playable Characters */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Playable Characters</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-6">
                As of January 2026, Ultra Rumble features over 30 playable characters spanning heroes, villains, and pro heroes from the My Hero Academia series. Notable characters include:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xl font-semibold text-green-400 mb-3">Heroes</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Izuku Midoriya (Deku)</li>
                    <li>• Katsuki Bakugo</li>
                    <li>• Shoto Todoroki</li>
                    <li>• Ochaco Uraraka</li>
                    <li>• Tenya Ida</li>
                    <li>• Tsuyu Asui</li>
                    <li>• Eijiro Kirishima</li>
                    <li>• Denki Kaminari</li>
                    <li>• Momo Yaoyorozu</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-red-400 mb-3">Villains</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Tomura Shigaraki</li>
                    <li>• Dabi</li>
                    <li>• Himiko Toga</li>
                    <li>• Twice</li>
                    <li>• Mr. Compress</li>
                    <li>• Muscular</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Pro Heroes</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• All Might</li>
                  <li>• Endeavor</li>
                  <li>• Hawks</li>
                  <li>• Mt. Lady</li>
                  <li>• Cementoss</li>
                  <li>• Present Mic</li>
                  <li>• Midnight</li>
                </ul>
              </div>

              <p className="text-gray-300 leading-relaxed mt-6">
                New characters are regularly added through seasonal updates, with recent additions focusing on fan-favorite characters from later story arcs. The <Link href="/mha/ultra-rumble/season-15" className="text-blue-400 hover:text-blue-300 underline">Season 15 update</Link> continues this trend with exciting new playable fighters.
              </p>
            </div>
          </section>

          {/* Seasonal Updates */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Seasonal Updates</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-4">
                Ultra Rumble operates on a seasonal model, with major updates approximately every 2-3 months. Each season introduces:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>New playable characters from the My Hero Academia universe</li>
                <li>Balance adjustments and gameplay refinements</li>
                <li>Fresh cosmetic items and customization options</li>
                <li>Limited-time game modes and special events</li>
                <li>Ranked season resets with exclusive rewards</li>
                <li>Map updates and environmental changes</li>
              </ul>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                The game launched with Season 1 in September 2023 and has maintained consistent content updates throughout its lifecycle. <strong>Season 15</strong>, launching in early 2026, represents the game's continued commitment to expanding the playable roster and refining the competitive experience.
              </p>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mt-6">
                <h4 className="text-xl font-semibold text-purple-400 mb-3">Latest: Season 15</h4>
                <p className="text-gray-300 leading-relaxed mb-3">
                  The most recent season introduces new characters, gameplay balance updates, and fresh cosmetic content. For detailed information about Season 15's features and additions, visit our dedicated <Link href="/mha/ultra-rumble/season-15" className="text-blue-400 hover:text-blue-300 underline">Season 15 coverage page</Link>.
                </p>
                <a 
                  href="https://en.bandainamcoent.eu/my-hero-academia/news/my-hero-ultra-rumble-season-15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 underline"
                >
                  Official Season 15 Announcement →
                </a>
              </div>
            </div>
          </section>

          {/* Player Base & Popularity */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Player Base & Popularity</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-4">
                Despite launching in a crowded battle royale market, My Hero Ultra Rumble has carved out a dedicated niche among anime gaming communities. The game's free-to-play model and cross-platform support have helped maintain accessibility across multiple platforms.
              </p>
              
              <h3 className="text-2xl font-semibold text-blue-400 mb-4 mt-6">Community Reception</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The game received mixed-to-positive reviews at launch, with praise for its faithful adaptation of Quirk abilities and criticism for technical performance issues that have since been addressed. Player reception has improved significantly through post-launch support:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Regular balance patches addressing community feedback</li>
                <li>Server stability improvements and matchmaking optimization</li>
                <li>Consistent content releases maintaining player engagement</li>
                <li>Active social media presence and community events</li>
              </ul>

              <h3 className="text-2xl font-semibold text-purple-400 mb-4 mt-6">Competitive Scene</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                While not reaching esports prominence like Fortnite or Apex Legends, Ultra Rumble has cultivated a grassroots competitive community with:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Ranked mode with seasonal leaderboards</li>
                <li>Community-organized tournaments</li>
                <li>Content creator leagues and showcase matches</li>
                <li>Regional competitive scenes, particularly strong in Japan</li>
              </ul>

              <p className="text-gray-300 leading-relaxed mt-6">
                Peak concurrent player counts vary by platform, with the game maintaining healthiest populations on PlayStation and PC. The <Link href="/mha" className="text-blue-400 hover:text-blue-300 underline">My Hero Academia</Link> franchise's global popularity continues to drive new player acquisition, particularly during anime season premieres.
              </p>
            </div>
          </section>

          {/* Development & Updates */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Development & Publisher</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Bandai Namco Entertainment</strong> serves as both developer and publisher for My Hero Ultra Rumble. The company has extensive experience with anime-licensed games, having previously worked on titles across the Dragon Ball, Naruto, and One Piece franchises.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The development team has shown commitment to long-term support, with the game receiving:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>15+ seasonal updates (as of January 2026)</li>
                <li>Over 30 playable characters added post-launch</li>
                <li>Significant technical improvements and optimization</li>
                <li>Regular collaboration events and limited-time modes</li>
              </ul>

              <p className="text-gray-300 leading-relaxed">
                Bandai Namco's roadmap for Ultra Rumble extends into 2026 and beyond, with plans for continued character additions aligned with the ongoing My Hero Academia manga and anime storylines.
              </p>
            </div>
          </section>

          {/* Platforms & Technical */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Platforms & Technical Details</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Available Platforms</h3>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• <strong>PlayStation 5</strong> – 60 FPS performance, enhanced visuals</li>
                <li>• <strong>PlayStation 4</strong> – 30 FPS, cross-gen compatible</li>
                <li>• <strong>Xbox Series X/S</strong> – 60 FPS performance mode</li>
                <li>• <strong>Xbox One</strong> – 30 FPS, backward compatible</li>
                <li>• <strong>Nintendo Switch</strong> – Portable play, 30 FPS</li>
                <li>• <strong>PC (Steam)</strong> – Uncapped framerate, customizable settings</li>
              </ul>

              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Cross-Platform Features</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Full cross-platform play is supported across all platforms, allowing friends to team up regardless of their gaming system. Cross-progression is available for players who link their Bandai Namco account, enabling cosmetics and progression to transfer between platforms.
              </p>

              <h3 className="text-2xl font-semibold text-pink-400 mb-4">System Requirements (PC)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Minimum</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• OS: Windows 10 64-bit</li>
                    <li>• CPU: Intel Core i5-6600 / AMD Ryzen 3 1200</li>
                    <li>• RAM: 8 GB</li>
                    <li>• GPU: NVIDIA GTX 960 / AMD RX 470</li>
                    <li>• Storage: 20 GB available space</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-yellow-400 mb-3">Recommended</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• OS: Windows 10/11 64-bit</li>
                    <li>• CPU: Intel Core i7-8700 / AMD Ryzen 5 3600</li>
                    <li>• RAM: 16 GB</li>
                    <li>• GPU: NVIDIA RTX 2060 / AMD RX 5700</li>
                    <li>• Storage: 20 GB SSD</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Related Content */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Related Content</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/mha/ultra-rumble/season-15"
                className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg p-6 hover:from-blue-800/50 hover:to-purple-800/50 transition-all border border-blue-500/30"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Season 15 Update</h3>
                <p className="text-gray-300 text-sm">
                  Latest character additions, balance changes, and seasonal content for Ultra Rumble's fifteenth season.
                </p>
              </Link>

              <Link 
                href="/mha"
                className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg p-6 hover:from-purple-800/50 hover:to-pink-800/50 transition-all border border-purple-500/30"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-2">My Hero Academia Hub</h3>
                <p className="text-gray-300 text-sm">
                  Complete coverage of the My Hero Academia anime, manga, characters, and gaming universe.
                </p>
              </Link>
            </div>
          </section>

          {/* External Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">External Resources</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://en.bandainamcoent.eu/my-hero-academia/my-hero-ultra-rumble"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Official My Hero Ultra Rumble Website
                  </a>
                </li>
                <li>
                  <a 
                    href="https://en.bandainamcoent.eu/my-hero-academia/news/my-hero-ultra-rumble-season-15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Season 15 Official Announcement
                  </a>
                </li>
                <li>
                  <a 
                    href="https://store.steampowered.com/app/1607250/MY_HERO_ULTRA_RUMBLE/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Steam Store Page
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com/MHUltraRumble_EN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Official Twitter/X Account
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
