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
  title: 'HUNTER×HUNTER NEN×SURVIVOR Launches February 18, 2026 on iOS and Android | ObjectWire',
  description:
    'HUNTER×HUNTER NEN×SURVIVOR released globally on February 18, 2026 for iOS, Android, and Windows via Google Play Games. The free-to-play roguelike survivor action game by WonderPlanet reached 1.5 million pre-registrations with launch rewards including a free 5-star selector ticket and 10,000 Nen crystals.',
  keywords: [
    'HUNTER×HUNTER NEN×SURVIVOR',
    'Hunter x Hunter NEN SURVIVOR',
    'Hunter x Hunter mobile game 2026',
    'WonderPlanet',
    'Bushiroad',
    'roguelike mobile game 2026',
    'anime mobile RPG 2026',
    'Hunter x Hunter game iOS Android',
    'Nen abilities mobile game',
    'free to play anime game 2026',
    'Hunter x Hunter Gon Killua mobile',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/anime/hunter-hunter-nen-survivor',
  },
  openGraph: {
    title: 'HUNTER×HUNTER NEN×SURVIVOR -- February 18, 2026 Global Launch on iOS and Android',
    description:
      'Free-to-play roguelike survivor game in the Hunter x Hunter universe. 1.5M pre-registrations, original anime voice cast, four-character Nen teams, and random skill pools per run.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/anime/hunter-hunter-nen-survivor',
    siteName: 'ObjectWire',
    images: [{ url: '/video-games/thumbnail.PNG' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HUNTER×HUNTER NEN×SURVIVOR -- Roguelike Survivor Launches Feb 18, 2026',
    description:
      'iOS, Android, and Windows via Google Play Games. 1.5M pre-registrations, Nen ability builds, original cast voice acting, and auto-battle mode.',
  },
};

export default function HunterHunterNenSurvivorPage() {
  return (
    <div>
      <div className="hidden">
        <span itemProp="author" itemScope itemType="https://schema.org/Person">
          <span itemProp="name">{AUTHOR_NAME}</span>
          <link itemProp="url" href={AUTHOR_URL} />
        </span>
      </div>

      <NewsArticle
        title="HUNTER×HUNTER NEN×SURVIVOR Launches February 18, 2026 on iOS and Android as Free-to-Play Roguelike Survivor Action Game"
        subtitle="WonderPlanet and Bushiroad's mobile game adapts the Hunter x Hunter anime universe into short roguelike runs with four-character Nen teams, random skill pools, and original Japanese voice acting. 1.5 million pre-registrations unlocked a free 5-star selector ticket and 10,000 Nen crystals at launch."
        category="Game Launch"
        categoryColor="orange"
        topicTag="gaming"
        publishDate="February 26, 2026"
        readTime="5 min read"
        thumbnail={{
          src: '/video-games/thumbnail.PNG',
          alt: 'HUNTER×HUNTER NEN×SURVIVOR official artwork',
        }}
        author={{
          name: AUTHOR_NAME,
          role: 'Gaming Correspondent',
          authorSlug: 'jack-sterling',
        }}
        tags={[
          'HUNTER×HUNTER NEN×SURVIVOR',
          'Hunter x Hunter',
          'WonderPlanet',
          'Bushiroad',
          'Roguelike',
          'Mobile Game 2026',
          'Anime Game',
          'Free to Play',
          'iOS Android',
          'Nen Abilities',
          'Gon Killua',
          'Survivor Action',
        ]}
      >

        {/* Lede */}
        <p>
          <strong>HUNTER×HUNTER NEN×SURVIVOR</strong> released globally on February 18, 2026, for iOS and Android as a free-to-play roguelike survivor action game developed by WonderPlanet and published by Bushiroad. The title adapts the{' '}
          <Link href="/video-games/anime" className="text-blue-600 font-medium hover:underline">
            Hunter x Hunter
          </Link>{' '}
          anime universe into short, intense sessions optimized for one-handed mobile play, where players assemble teams of four characters and use Nen abilities to survive enemy waves.
        </p>

        <p>
          Pre-registration reached 1.5 million users, unlocking rewards including a free 5-star character selector ticket and 10,000 Nen crystals upon launch. The game features voice acting from the original anime Japanese cast and offers auto-battle mode alongside manual real-time combat. Downloads are available on the App Store, Google Play, and Google Play Games for Windows.
        </p>

        {/* Key stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose">
          <div className="border-2 border-orange-500 p-4 bg-orange-50">
            <p className="text-xs font-bold text-orange-700 uppercase tracking-wide mb-1">Global Launch</p>
            <p className="text-2xl font-black text-gray-900">February 18, 2026</p>
            <p className="text-xs text-gray-500 mt-1">iOS, Android, Windows (Google Play Games)</p>
          </div>
          <div className="border-2 border-gray-900 p-4 bg-gray-50">
            <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">Pre-Registrations</p>
            <p className="text-2xl font-black text-gray-900">1.5 Million</p>
            <p className="text-xs text-gray-500 mt-1">5-star selector + 10,000 Nen crystals unlocked</p>
          </div>
          <div className="border-2 border-blue-600 p-4 bg-blue-50">
            <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-1">Team Size Per Run</p>
            <p className="text-2xl font-black text-gray-900">4 Characters</p>
            <p className="text-xs text-gray-500 mt-1">Random Nen skill pools each run</p>
          </div>
        </div>

        {/* YouTube Embed */}
        <div className="not-prose my-8">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/EqjLEGU_414"
              title="HUNTER×HUNTER NEN×SURVIVOR -- Official Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
            />
          </div>
          <p className="text-center text-xs text-gray-500 mt-2 italic">
            HUNTER×HUNTER NEN×SURVIVOR -- Official Trailer. Published by Bushiroad.
          </p>
        </div>

        <h2>Platform Availability After February 18, 2026 Launch</h2>

        <p>
          The game launched on iOS and Android worldwide on February 18, 2026. Windows access became available through Google Play Games on the same date. No PC standalone client or console versions exist at launch. Cross-platform account linking supports progress transfer between mobile devices.
        </p>

        <h2>Roguelike Survivor Gameplay: Short Runs, Random Builds, Constant Replayability</h2>

        <p>
          Players engage in short roguelike runs combining survivor-style wave defense with real-time action. Each run generates random skill pools, allowing unique builds through Nen ability selection, character synergies, and strategic party composition. Combat occurs against enemy swarms and bosses with manual controls or auto mode for passive progression. Multiple difficulty levels and stage variations extend replayability beyond the initial character unlock content.
        </p>

        <h2>Four-Character Teams with Original Anime Voice Acting</h2>

        <p>
          Players assemble teams of four characters drawn from the Hunter x Hunter series, including Gon, Killua, Kurapika, Hisoka, Leorio, Meruem, Chrollo, and others. Voice lines use original Japanese cast recordings from the anime. Roles include attack, defense, support, and recovery types. Synergies activate when combining compatible characters or Nen ability types, rewarding players who understand the source material's power system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
          <div className="border-l-4 border-orange-500 bg-orange-50 p-4">
            <p className="text-xs font-bold text-orange-700 uppercase tracking-wide mb-2">Team Features</p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Four characters per run</li>
              <li>Attack, defense, support, recovery roles</li>
              <li>Synergies between compatible characters</li>
              <li>Original Japanese anime voice cast</li>
              <li>Characters include Gon, Killua, Kurapika, Hisoka, Meruem, Chrollo, and more</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-600 bg-blue-50 p-4">
            <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Combat Features</p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Real-time manual combat</li>
              <li>Auto-battle mode available</li>
              <li>Roguelike random Nen skill pools each run</li>
              <li>Wave defense against swarms and bosses</li>
              <li>Multiple difficulty tiers</li>
            </ul>
          </div>
        </div>

        <h2>Nen Development System: Lineage Strengthening and Memory Scenes</h2>

        <p>
          Nen progression involves leveling characters, training specific abilities, strengthening lineage traits, and equipping Memory Scenes. Memory Scenes are collectible cards depicting key anime moments that grant passive bonuses or active effects in combat. Skills unlock through random drops, gacha pulls, or event rewards. Build variety arises from combining skills, roles, and character traits, offering distinct approaches to boss encounters.
        </p>

        <h2>Key Features Driving Replayability</h2>

        <ul className="space-y-2 my-4">
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold mt-0.5">+</span>
            <span><strong>Four-character team composition</strong> with role-based synergies per run</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold mt-0.5">+</span>
            <span><strong>Random Nen skill pools</strong> generated each run for unique builds</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold mt-0.5">+</span>
            <span><strong>Auto-battle mode</strong> for quick one-handed sessions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold mt-0.5">+</span>
            <span><strong>Multiple difficulty tiers</strong> and stage rotations</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold mt-0.5">+</span>
            <span><strong>Memory Scenes</strong> equipped for passive combat enhancements</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold mt-0.5">+</span>
            <span><strong>Event-limited characters</strong> and abilities expanding the roster</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold mt-0.5">+</span>
            <span><strong>Daily login rewards</strong> and mission chains</span>
          </li>
        </ul>

        <h2>Monetization: Free to Play with Optional Purchases</h2>

        <p>
          The game remains free to download and play with optional in-app purchases for Nen crystals, premium summons, and convenience items. Advertisements appear in non-intrusive formats such as rewarded videos for extra resources. No subscription model exists. No pay-to-win mechanics in core progression have been reported. Official channels provide ongoing news, maintenance schedules, and event calendars.
        </p>

        <h2>Key Statistics Summary</h2>

        <div className="overflow-x-auto my-6 not-prose">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {[
                ['Global launch date', 'February 18, 2026'],
                ['Developer', 'WonderPlanet'],
                ['Publisher', 'Bushiroad'],
                ['Platforms', 'iOS, Android, Windows (Google Play Games)'],
                ['Business model', 'Free-to-play with optional in-app purchases'],
                ['Pre-registration total', '1.5 million users'],
                ['Launch rewards', 'Free 5-star character selector ticket + 10,000 Nen crystals'],
                ['Team size per run', '4 characters'],
                ['Combat mode', 'Real-time manual or auto-battle'],
                ['Voice acting', 'Original Japanese anime cast'],
                ['Roguelike element', 'Random Nen skill pools generated each run'],
                ['Memory Scenes', 'Collectible cards granting passive or active bonuses'],
                ['Monetization', 'In-app purchases and rewarded video ads; no subscription'],
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
            <Link href="/video-games/anime/seven-deadly-sins-origin" className="text-blue-600 hover:underline font-medium">
              Seven Deadly Sins: Origin Launches March 16, 2026 on PS5 and Steam
            </Link>
            <span className="text-gray-500 text-sm ml-2">-- Another major anime open-world RPG launching in 2026</span>
          </li>
          <li>
            <Link href="/video-games/arknights-endfield" className="text-blue-600 hover:underline font-medium">
              Arknights: Endfield -- $173M in Two Weeks After January 22 Launch
            </Link>
            <span className="text-gray-500 text-sm ml-2">-- Anime RPG launch revenue comparison</span>
          </li>
          <li>
            <Link href="/video-games" className="text-blue-600 hover:underline font-medium">
              ObjectWire Video Games
            </Link>
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
