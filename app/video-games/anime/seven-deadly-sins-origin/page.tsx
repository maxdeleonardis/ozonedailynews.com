import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/NewsArticle';

// ============================================================
// CONSTANTS
// ============================================================
const AUTHOR_NAME = 'Jack Sterling';
const AUTHOR_URL = 'https://www.objectwire.org/authors/jack-sterling';

// ============================================================
// METADATA
// ============================================================
export const metadata: Metadata = {
  title: 'Seven Deadly Sins: Origin Open World Launches March 2026 on PS5 and Steam | ObjectWire',
  description:
    'The Seven Deadly Sins: Origin launches March 16, 2026, on PS5 and Steam, followed by iOS, Android, and PC expansion on March 23. The free-to-play open-world action RPG from Netmarble uses Unreal Engine 5 and features Prince Tristan in a fractured Britannia.',
  keywords: [
    'Seven Deadly Sins Origin',
    'Seven Deadly Sins Origin open world',
    'Seven Deadly Sins Origin march 2026',
    'Seven Deadly Sins Origin PS5',
    'Seven Deadly Sins Origin Steam',
    'Seven Deadly Sins Origin release date',
    'Netmarble open world RPG 2026',
    'Seven Deadly Sins Origin mobile',
    'Prince Tristan Tioreh',
    'Britannia open world RPG',
    'anime open world game 2026',
    'Seven Deadly Sins Nanatsu no Taizai game',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/anime/seven-deadly-sins-origin',
  },
  openGraph: {
    title: 'Seven Deadly Sins: Origin Open World RPG -- March 16 on PS5 and Steam, March 23 Mobile',
    description:
      'Free-to-play open-world action RPG in the Seven Deadly Sins universe. Unreal Engine 5, real-time tag combat, climbing, gliding, crafting, anime voice cast, and gacha hero collection.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/anime/seven-deadly-sins-origin',
    siteName: 'ObjectWire',
    images: [{ url: '/video-games/seven_deadly_sins_orgins.PNG' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seven Deadly Sins: Origin -- Open World RPG Coming March 2026',
    description:
      'PS5 and Steam on March 16. iOS, Android, and PC expanded access on March 23. Unreal Engine 5, Prince Tristan, real-time tag combat, and open-world Britannia.',
  },
};

export default function SevenDeadlySinsOriginPage() {
  return (
    <div>
      <div className="hidden">
        <span itemProp="author" itemScope itemType="https://schema.org/Person">
          <span itemProp="name">{AUTHOR_NAME}</span>
          <link itemProp="url" href={AUTHOR_URL} />
        </span>
      </div>

      <NewsArticle
        title="Seven Deadly Sins: Origin Launches March 16, 2026 on PS5 and Steam as Open-World Action RPG -- Mobile Expansion March 23"
        subtitle="Netmarble's free-to-play open-world action RPG set in the Seven Deadly Sins anime universe hits PlayStation 5 and Steam first, with iOS, Android, and additional PC access one week later. Built in Unreal Engine 5 with real-time tag combat, open Britannia exploration, and the original anime voice cast."
        category="Game Launch"
        categoryColor="red"
        topicTag="gaming"
        publishDate="February 26, 2026"
        readTime="6 min read"
        thumbnail={{
          src: '/video-games/seven_deadly_sins_orgins.PNG',
          alt: 'The Seven Deadly Sins: Origin official artwork',
        }}
        author={{
          name: AUTHOR_NAME,
          role: 'Gaming Correspondent',
          authorSlug: 'jack-sterling',
        }}
        tags={[
          'Seven Deadly Sins Origin',
          'Netmarble',
          'Open World RPG',
          'PS5',
          'Steam',
          'Anime Game 2026',
          'Free to Play',
          'Prince Tristan',
          'Britannia',
          'Unreal Engine 5',
          'Gacha',
          'March 2026 Games',
        ]}
      >

        {/* Lede */}
        <p>
          <strong>The Seven Deadly Sins: Origin</strong> launched on PlayStation 5 and PC via Steam on March 16, 2026, followed by a full cross-platform rollout to iOS, Android, and additional PC access on March 23, 2026. Developed by Netmarble F&amp;C using Unreal Engine 5 and published by Netmarble, the free-to-play open-world action RPG features an original story set in{' '}
          <Link href="/video-games" className="text-blue-600 font-medium hover:underline">
            The Seven Deadly Sins
          </Link>{' '}
          universe, a franchise with over 55 million manga copies sold worldwide.
        </p>

        <p>
          Players control Prince Tristan, son of Meliodas and Elizabeth, and new character Tioreh as they navigate a Britannia disrupted by time-space collisions, guided by the Book of Stars and scholar Clotho. Combat uses real-time tag-based mechanics with up to four elemental heroes sharing one health bar. Exploration includes climbing, gliding, crafting, cooking, fishing, and fast travel. The full anime voice cast returns alongside gacha systems for hero collection.
        </p>

        {/* Key stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose">
          <div className="border-2 border-red-600 p-4 bg-red-50">
            <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">PS5 &amp; Steam Launch</p>
            <p className="text-2xl font-black text-gray-900">March 16, 2026</p>
          </div>
          <div className="border-2 border-gray-900 p-4 bg-gray-50">
            <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">Mobile / Full Rollout</p>
            <p className="text-2xl font-black text-gray-900">March 23, 2026</p>
          </div>
          <div className="border-2 border-orange-500 p-4 bg-orange-50">
            <p className="text-xs font-bold text-orange-700 uppercase tracking-wide mb-1">Franchise Manga Sales</p>
            <p className="text-2xl font-black text-gray-900">55M+ Copies</p>
          </div>
        </div>

        {/* YouTube Embed -- Official Launch Trailer */}
        <div className="not-prose my-8">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/K3IxMpE8_8c"
              title="The Seven Deadly Sins: Origin -- Official Launch Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
            />
          </div>
          <p className="text-center text-xs text-gray-500 mt-2 italic">
            The Seven Deadly Sins: Origin -- Official Launch Trailer. Published February 24, 2026.
          </p>
        </div>

        <h2>Release Timeline: PS5 and Steam First, Mobile and PC Expansion One Week Later</h2>

        <p>
          PlayStation 5 and Steam versions became available first on March 16, 2026. The grand launch expanded access to iOS, Android, and PC via Google Play Games on March 23, 2026. Earlier plans targeted January 2026 but shifted following a closed beta test held from October 30 to November 5, 2025, and a public beta on January 28, 2026. A launch trailer debuted on February 24, 2026. The staged rollout prioritized console and PC for stability, based on closed beta feedback.
        </p>

        <div className="space-y-3 my-6 not-prose">
          {[
            { date: 'October 30 to November 5, 2025', event: 'Closed beta test period' },
            { date: 'January 28, 2026', event: 'Public beta' },
            { date: 'February 13, 2026', event: 'Pre-registration announced across platforms' },
            { date: 'February 24, 2026', event: 'Official launch trailer released' },
            { date: 'March 16, 2026', event: 'Global launch on PlayStation 5 and PC via Steam', bold: true },
            { date: 'March 23, 2026', event: 'Grand launch expansion to iOS, Android, and PC via Google Play Games', bold: true },
          ].map(({ date, event, bold }, i) => (
            <div key={i} className="flex gap-4 border-l-4 border-red-600 pl-4">
              <div className="min-w-[200px]">
                <span className="text-sm font-bold text-red-700">{date}</span>
              </div>
              <p className={`text-sm text-gray-700 ${bold ? 'font-semibold' : ''}`}>{event}</p>
            </div>
          ))}
        </div>

        <h2>Story: Prince Tristan, Tioreh, and the Fractured Britannia</h2>

        <p>
          The plot centers on Prince Tristan of Liones, son of Meliodas and Elizabeth, and a new character named Tioreh exploring a fractured Britannia altered by time and space collisions. A discovered pendant activates a chain of changes including extinct creatures, black corruption, and returning characters such as Hawk. Scholar Clotho guides the quest amid multiverse threats and time-travel elements.
        </p>

        <p>
          The Book of Stars serves as a central narrative object driving the story forward. The plot bridges the original anime and its sequel, with familiar characters reappearing in new contexts shaped by the time-space disruptions. The story is entirely original to this game and was not adapted from the manga.
        </p>

        <h2>Real-Time Tag Combat with Elemental Heroes</h2>

        <p>
          Players control up to four elemental heroes sharing one health bar in real-time tag-based combat. Mechanics include combos, specials, dashes, team swaps, and combination skills. Closed beta feedback led to upgrades in combat pacing and control responsiveness before launch. The system rewards quickswap timing and elemental pairing between team members.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
          <div className="border-l-4 border-red-600 bg-red-50 p-4">
            <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-2">Combat Features</p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Up to four elemental heroes on one team</li>
              <li>Shared single health bar across team</li>
              <li>Real-time tag-based switching</li>
              <li>Combos, specials, and dashes</li>
              <li>Combination skills between heroes</li>
              <li>Improved pacing from beta feedback</li>
            </ul>
          </div>
          <div className="border-l-4 border-orange-500 bg-orange-50 p-4">
            <p className="text-xs font-bold text-orange-700 uppercase tracking-wide mb-2">Exploration Features</p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Seamless open-world Britannia</li>
              <li>Climbing and gliding traversal</li>
              <li>Underwater exploration</li>
              <li>Crafting, cooking, and fishing</li>
              <li>Fast travel via stones</li>
              <li>Co-op multiplayer partying</li>
            </ul>
          </div>
        </div>

        <h2>Open-World Britannia and Exploration Mechanics</h2>

        <p>
          Exploration covers a vast seamless Britannia with climbing, gliding, underwater traversal, crafting, cooking, fishing, and fast travel via stones. Co-op partying supports multiplayer engagement while gacha elements enable hero collection. The game emphasizes customizable team compositions and diverse weapon options. Unreal Engine 5 drives the visual fidelity of the environments across all platforms.
        </p>

        <h2>Gacha System and Hero Collection</h2>

        <p>
          The game includes gacha systems for hero collection tied to the Seven Deadly Sins character roster and new original characters introduced in Origin. Pre-registration opened across platforms including the official website, Google Play, and the App Store, with milestone rewards unlocked based on registration counts.
        </p>

        <h2>Key Statistics</h2>

        <div className="overflow-x-auto my-6 not-prose">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {[
                ['PS5 and Steam launch date', 'March 16, 2026'],
                ['Grand launch with mobile', 'March 23, 2026'],
                ['Developer', 'Netmarble F&C'],
                ['Publisher', 'Netmarble'],
                ['Engine', 'Unreal Engine 5'],
                ['Business model', 'Free-to-play with in-game purchases'],
                ['Primary protagonists', 'Prince Tristan, Tioreh'],
                ['Setting', 'Talos-II / fractured Britannia (time-space collisions)'],
                ['Franchise manga sales', 'Over 55 million copies worldwide'],
                ['Closed beta test period', 'October 30 to November 5, 2025'],
                ['Public beta', 'January 28, 2026'],
                ['Launch trailer', 'February 24, 2026'],
                ['Pre-registration platforms', 'Official website, Google Play, App Store'],
                ['Voice acting', 'Full anime cast included'],
              ].map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium border-b border-gray-100 w-1/2">{label}</td>
                  <td className="px-4 py-3 border-b border-gray-100">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Related Coverage</h2>

        <ul className="space-y-2">
          <li>
            <Link href="/video-games" className="text-blue-600 hover:underline font-medium">
              ObjectWire Video Games
            </Link>
            <span className="text-gray-500 text-sm ml-2">-- Latest gaming news and coverage</span>
          </li>
          <li>
            <Link href="/video-games/arknights-endfield" className="text-blue-600 hover:underline font-medium">
              Arknights: Endfield Launches January 22, 2026 -- $173M in Two Weeks
            </Link>
            <span className="text-gray-500 text-sm ml-2">-- Another major anime RPG launch in 2026</span>
          </li>
          <li>
            <Link href="/entertainment" className="text-blue-600 hover:underline font-medium">
              ObjectWire Entertainment
            </Link>
          </li>
        </ul>

      </NewsArticle>
    </div>
  );
}
