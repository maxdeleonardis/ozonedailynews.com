import type { Metadata } from 'next';
import Link from 'next/link';
import JackArticle, {
  JackCaseOverview,
  JackStats,
  JackVideo,
  JackCallout,
} from '@/components/JackArticle';

// ============================================================
// CONSTANTS
// ============================================================
const AUTHOR_NAME = 'Jack Sterling';
const AUTHOR_SLUG = 'jack-sterling';
const AUTHOR_URL = 'https://www.objectwire.org/authors/jack-sterling';

// ============================================================
// METADATA
// ============================================================
export const metadata: Metadata = {
  title: 'Arknights: Endfield Launches January 22, 2026 on PC, Mobile, and PS5 | ObjectWire',
  description:
    'Arknights: Endfield launched globally on January 22, 2026, for PC, iOS, Android, and PlayStation 5. The open-world action RPG from Hypergryph hit $173 million in global revenue in the first two weeks and 35 million pre-registrations.',
  keywords: [
    'Arknights Endfield',
    'Arknights Endfield launch',
    'Arknights Endfield PC PS5 mobile',
    'Hypergryph',
    'Gryphline',
    'open world action RPG 2026',
    'Arknights Endfield revenue',
    'Talos-II',
    'free to play gacha 2026',
    'Arknights Endfield gacha system',
    'Arknights Endfield release date',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/arknights-endfield',
  },
  openGraph: {
    title: 'Arknights: Endfield Launches January 22, 2026 -- $173M in Two Weeks',
    description:
      'Hypergryph shifts from tower defense to open-world action RPG with real-time combat and factory automation on Talos-II. 35M pre-registrations, $173M global revenue in first two weeks.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/arknights-endfield',
    siteName: 'ObjectWire',
    images: [{ url: '/video-games/endfield_gryphline.PNG' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arknights: Endfield -- $173M in Two Weeks After Jan 22 Launch',
    description:
      'Free-to-play open-world action RPG on PC, mobile, and PS5. 35M pre-registrations, cross-progression, factory automation, and 4-member real-time combat.',
  },
};

export default function ArkknightsEndfieldPage() {
  return (
    <JackArticle
      layout="news"
      categories={[
        { label: 'GAME LAUNCH', color: 'blue' },
        { label: 'GAMING', color: 'gray' },
      ]}
      publishDate="February 26, 2026"
      publishDateISO="2026-02-26T09:00:00Z"
      modifiedDateISO="2026-02-26T09:00:00Z"
      readTime="8 min read"
      title="Arknights: Endfield Launches January 22, 2026 on PC, Mobile, and PS5 as Open-World Action RPG with Real-Time Combat and Factory Building"
      subtitle="Hypergryph shifts from tower defense to a full open-world action RPG set on the moon Talos-II. 35 million pre-registrations, $173 million in global revenue two weeks after launch, cross-platform progression, and a Factorio-style base automation system."
      heroImage={{
        src: '/video-games/endfield_gryphline.PNG',
        alt: 'Arknights: Endfield -- Gryphline official launch artwork',
        caption: 'Arknights: Endfield official artwork. Published by Gryphline, developed by Hypergryph.',
        credit: 'Gryphline / Hypergryph',
      }}
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/video-games', label: 'Video Games' },
      ]}
      author={{
        name: AUTHOR_NAME,
        slug: AUTHOR_SLUG,
        url: AUTHOR_URL,
        department: 'Gaming Correspondent',
        initials: 'JS',
      }}
      articleUrl="https://www.objectwire.org/video-games/arknights-endfield"
      description="Arknights: Endfield launched globally on January 22, 2026 for PC, iOS, Android, and PlayStation 5. Revenue, platform support, combat mechanics, gacha system, and base building breakdown."
      section="Gaming"
      keywords={['Arknights Endfield', 'Hypergryph', 'Gryphline', 'open world RPG', 'PS5', 'gacha', 'Talos-II']}
      relatedArticles={[
        {
          href: '/video-games',
          category: 'VIDEO GAMES',
          categoryColor: 'text-blue-600',
          title: 'ObjectWire Video Games Coverage',
        },
        {
          href: '/video-games/valve-corporation',
          category: 'COMPANY PROFILE',
          categoryColor: 'text-gray-600',
          title: 'Valve Corporation -- Steam, Counter-Strike, and Dota 2',
        },
        {
          href: '/tech',
          category: 'TECH',
          categoryColor: 'text-gray-600',
          title: 'Technology News',
        },
      ]}
      timeline={[
        { date: 'January 20, 2026', description: 'Pre-downloads open across PC, mobile, and PS5' },
        { date: 'January 22, 2026', description: 'Global launch at 11:00 AM GMT+8 on PC launcher, Epic Games Store, iOS, Android, and PS5', highlight: true },
        { date: 'January 23, 2026', description: 'Mobile spending peaks in Japan and China' },
        { date: 'February 2026', description: 'Mobile revenue reaches $46 million for the first month' },
        { date: 'February 5, 2026', description: 'Global revenue crosses $173 million (1.2 billion RMB) across all platforms in two weeks', highlight: true },
        { date: 'February 22, 2026', description: 'Americas and Europe dedicated servers open at 12:00 server time' },
        { date: 'February 26, 2026', description: 'Data compiled; Asia server permanently available' },
      ]}
      documents={[
        { href: 'https://endfield.gryphline.com/landing/ua/obt', label: 'Arknights: Endfield Official Launch Page', icon: '🎮' },
        { href: 'https://endfield.gryphline.com/', label: 'Gryphline Endfield Home', icon: '🌐' },
      ]}
      sources={[
        {
          number: 1,
          url: 'https://endfield.gryphline.com/landing/ua/obt',
          title: 'Arknights: Endfield Official Launch Page',
          description: 'Official open beta launch page from Gryphline',
        },
        {
          number: 2,
          url: 'https://endfield.gryphline.com/',
          title: 'Gryphline Endfield Official Website',
          description: 'Developer and publisher official site for Arknights: Endfield',
        },
      ]}
      showCorrections={true}
      showEditorialStandards={true}
    >
      {/* Lede */}
      <p>
        <strong>Arknights: Endfield</strong> released globally on January 22, 2026, at 11:00 AM GMT+8 for PC via the official launcher and Epic Games Store, iOS, Android, and PlayStation 5 as a free-to-play title developed by Hypergryph and published by Gryphline. The game shifts from the tower defense roots of the original{' '}
        <Link href="/video-games" className="text-blue-600 hover:underline font-medium">
          Arknights
        </Link>{' '}
        to an open-world action RPG blending real-time 3D combat, exploration on the moon Talos-II, and base-building automation systems.
      </p>

      <p>
        Players reached 35 million pre-registrations unlocking rewards including a free 5-star operator Snowshine and 20 Basic HH Permits. Global revenue across platforms reached $173 million, or 1.2 billion RMB, in the first two weeks according to official reports. Mobile revenue alone hit $46 million in the first month, led by Japan and China with spending peaks on January 23.
      </p>

      <JackCaseOverview
        title="ARKNIGHTS: ENDFIELD -- LAUNCH OVERVIEW"
        accentColor="blue"
        items={[
          { label: 'Global Launch:', value: 'January 22, 2026, 11:00 AM GMT+8' },
          { label: 'Developer:', value: 'Hypergryph' },
          { label: 'Publisher:', value: 'Gryphline' },
          { label: 'Platforms:', value: 'PC (launcher + Epic Games Store), iOS, Android, PlayStation 5' },
          { label: 'Business Model:', value: 'Free-to-play with in-game purchases' },
          { label: 'Cross-Progression:', value: 'Supported across PC, mobile, and PS5 via account linkage' },
          { label: 'Pre-Registrations:', value: '35 million' },
          { label: 'Two-Week Global Revenue:', value: '$173 million (1.2 billion RMB)' },
          { label: 'First Month Mobile Revenue:', value: '$46 million' },
          { label: 'Setting:', value: 'Talos-II, a natural satellite of gas giant Talos' },
        ]}
      />

      <JackStats
        title="KEY METRICS"
        accentColor="blue"
        stats={[
          { value: '35M', label: 'Pre-Registrations' },
          { value: '$173M', label: '2-Week Global Revenue' },
          { value: '$46M', label: 'First Month Mobile' },
          { value: '4', label: 'Platforms at Launch' },
        ]}
      />

      {/* Official launch trailer */}
      <JackVideo
        videoId="1mTQW3rAMXc"
        title="Arknights: Endfield Official Launch Trailer"
        caption="Arknights: Endfield official launch trailer. Published by Gryphline on YouTube."
        provider="youtube"
      />

      <h2>Platform Support and Cross-Progression</h2>

      <p>
        Arknights: Endfield launched simultaneously on PC through a standalone launcher and Epic Games Store, iOS and Android mobile devices, and PlayStation 5. Pre-downloads began January 20, 2026 across all platforms. Cross-save and cross-progression function across PC, mobile, and PS5 requiring account linkage through the game's official system.
      </p>

      <p>
        The PlayStation Store lists the title as free-to-play with real-time 3D action RPG mechanics. No Xbox Series X launch occurred at release. Americas and Europe dedicated servers opened February 22, 2026, at 12:00 server time, with Asia servers permanently available from launch.
      </p>

      <h2>Story and Setting: Talos-II, 152 Years After the First Pioneers</h2>

      <p>
        Players take on the role of the Protocol Field Recovery Department Endministrator on Talos-II, a natural satellite of the gas giant Talos, considered a planet by its inhabitants. The setting takes place 152 years after Terran pioneers arrived via multi-surface vessels, approximately in year 1254 of the in-game calendar.
      </p>

      <p>
        Threats include Catastrophes with falling alien structures and Aggeloi enemies amid resource gathering and colony development. Talos-II serves as the primary world with exploration revealing hidden areas and interactive environmental features tied to the base-building progression.
      </p>

      <h2>Real-Time Combat System</h2>

      <p>
        Players control a four-member operator team in semi-real-time combat, switching characters for combo skills, dodges, and executions to stagger enemies. The emphasis falls on elemental reactions, quickswapping, timing ultimate abilities, and skills for combos. Tower defense elements carry over to aid open-world challenges.
      </p>

      <p>
        Updates since closed beta improved visuals, camera angles, model rendering, and combat smoothness. The game supports 120 FPS and 4K resolution. In-game guides assist early team building for players unfamiliar with squad composition. Combat earns positive recognition for avoiding repetitive swap mechanics in larger encounters.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="border-l-4 border-blue-600 bg-blue-50 p-4">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Combat Features</p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>Four-member operator teams with quickswap</li>
            <li>Elemental reactions and combo timing</li>
            <li>Dodges, executions, and stagger system</li>
            <li>Tower defense elements in open world</li>
            <li>120 FPS and 4K resolution support</li>
            <li>Ultimate ability timing mechanics</li>
          </ul>
        </div>
        <div className="border-l-4 border-gray-600 bg-gray-50 p-4">
          <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Base Building Features</p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>Factorio-style automation with conveyors</li>
            <li>Ziplines for traversal integration</li>
            <li>Blueprints for manual or copied builds</li>
            <li>Resource production lines</li>
            <li>Relics system for progression</li>
            <li>Weekly routines yielding Oroberyl currency</li>
          </ul>
        </div>
      </div>

      <h2>Base Building and Factory Automation</h2>

      <p>
        Base building in Arknights: Endfield mirrors Factorio-style automation using ziplines, conveyors, and production lines to craft gear from gathered resources. Players access blueprints for manual builds or player-copied layouts with a relics system. Tutorials progress from basics to endgame stages with three new modes added post-closed beta tests.
      </p>

      <p>
        Weekly routines yield Oroberyl currency and Arsenal tickets for weapons. Endgame content includes interactive environments and hidden areas that connect to the base automation progression, rewarding players who engage deeply with the production systems.
      </p>

      <h2>Launch Rewards and Pre-Registration Milestones</h2>

      <p>
        Pre-registrations totaling 35 million unlocked a 5-star operator Snowshine, 20 Basic HH Permits, and a 5-star weapon Finishing Call. Launch rewards provided 40 beginner banner pulls, 60 standard pulls, 27 limited pulls, a free 6-star Ardelia operator with signature weapon and selector, and 4,000 Oroberyl premium currency. Livestream codes ALLFIELD and RETURNOFALL granted 2,000 additional Oroberyl and items.
      </p>

      <JackCallout accentColor="blue" label="LAUNCH REWARD SUMMARY">
        <ul className="text-sm space-y-1">
          <li><strong>Pre-reg rewards:</strong> 5-star Snowshine, 20 Basic HH Permits, 5-star weapon Finishing Call</li>
          <li><strong>Beginner pulls:</strong> 40 pulls on beginner banner</li>
          <li><strong>Standard pulls:</strong> 60 standard banner pulls</li>
          <li><strong>Limited pulls:</strong> 27 limited banner pulls</li>
          <li><strong>Free 6-star:</strong> Ardelia operator with signature weapon and selector</li>
          <li><strong>Premium currency:</strong> 4,000 Oroberyl</li>
          <li><strong>Livestream codes:</strong> ALLFIELD, RETURNOFALL (2,000 Oroberyl + items)</li>
        </ul>
      </JackCallout>

      <h2>Gacha System: Pity, Banners, and Rates</h2>

      <p>
        The gacha system includes a 120-pull hard pity on operator banners with rate-ups rotating Laevatain, Gilberta, and Yvonne at launch. The 60-pull dossier mechanic passes progress to the next banner for 10x pulls. Urgent Recruitment provides free 10x pulls without consuming pity progress. The weapon Arsenal banner guarantees a 6-star at 40 pulls, a rate-up at 80, and a selector at 100 pulls.
      </p>

      <p>
        Beta feedback highlighted pity not carrying between banners and ongoing gacha concerns, but launch eased progression through more Oroberyl available from events and exploration chests. Battle pass tiers include a free tier, a paid recoverable Origeometry tier, and a premium tier.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="px-4 py-3 text-left font-semibold">Banner Type</th>
              <th className="px-4 py-3 text-left font-semibold">Hard Pity</th>
              <th className="px-4 py-3 text-left font-semibold">Rate-Up Guarantee</th>
              <th className="px-4 py-3 text-left font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-3 border-b border-gray-100 font-medium">Operator (Limited)</td>
              <td className="px-4 py-3 border-b border-gray-100">120 pulls</td>
              <td className="px-4 py-3 border-b border-gray-100">Within pity</td>
              <td className="px-4 py-3 border-b border-gray-100">60-pull dossier passes to next banner</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 border-b border-gray-100 font-medium">Urgent Recruitment</td>
              <td className="px-4 py-3 border-b border-gray-100">N/A</td>
              <td className="px-4 py-3 border-b border-gray-100">Free 10x</td>
              <td className="px-4 py-3 border-b border-gray-100">Does not consume pity progress</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 border-b border-gray-100 font-medium">Weapon Arsenal</td>
              <td className="px-4 py-3 border-b border-gray-100">100 pulls (selector)</td>
              <td className="px-4 py-3 border-b border-gray-100">40-pull 6-star guarantee</td>
              <td className="px-4 py-3 border-b border-gray-100">Rate-up at 80; selector at 100</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Revenue and Player Metrics</h2>

      <p>
        Global revenue reached $173 million (1.2 billion RMB) across PC, mobile, and PS5 in the first two weeks after the January 22 launch. Mobile revenue totaled $46 million in the first month with Japan and China leading spending. Spending peaks concentrated on January 23, the day after launch.
      </p>

      <p>
        Americas and Europe servers opened February 22, 2026, expanding the addressable player base for ongoing revenue. Asia servers opened at launch and remain permanently available with no scheduled shutdowns reported.
      </p>

      <h2>Reviews and Community Feedback</h2>

      <p>
        Reviews praise visuals, action combat depth, and base building satisfaction with interconnected systems. Combat earns positive notes for avoiding repetitive swap mechanics and delivering consistent elemental combo opportunities. Visual updates between closed beta and launch addressed prior criticisms of rendering quality and camera angles.
      </p>

      <p>
        Beta feedback highlighted repetition in smaller fights and gacha concerns around non-carrying pity. Launch addressed some progression concerns through increased Oroberyl availability from events and exploration. Endgame grinding and complex base systems draw mentions as points of note for players assessing time investment.
      </p>

      <h2>Frequently Asked Questions</h2>

      <div className="space-y-4 my-6">
        {[
          {
            q: 'Is Arknights: Endfield free to play on PC, mobile, and PS5?',
            a: 'Yes. Arknights: Endfield operates free-to-play with in-game purchases for pulls and battle passes. Battle pass tiers include a free tier, a paid recoverable Origeometry tier, and a premium tier.',
          },
          {
            q: 'Does Arknights: Endfield support cross-save across PC, mobile, and PS5?',
            a: 'Cross-progression works across PC, iOS, Android, and PS5 via account linkage through the official Gryphline account system.',
          },
          {
            q: 'What is the gacha pity system in Arknights: Endfield?',
            a: 'Operator banners use 120 hard pity with rate-ups. A 60-pull dossier passes progress to the next banner 10x pull. The Weapon Arsenal banner guarantees a 6-star at 40 pulls, rate-up at 80, and a selector at 100.',
          },
          {
            q: 'When did Arknights: Endfield servers open for Americas and Europe?',
            a: 'Americas and Europe servers opened February 22, 2026, at 12:00 server time. Asia servers have been permanently available since the January 22, 2026 global launch.',
          },
          {
            q: 'What was the total global revenue for Arknights: Endfield in the first two weeks?',
            a: '$173 million (1.2 billion RMB) across PC, mobile, and PS5 in the two weeks following the January 22, 2026 launch.',
          },
        ].map(({ q, a }, i) => (
          <div key={i} className="border border-gray-200 p-4">
            <p className="font-semibold text-sm mb-1">{q}</p>
            <p className="text-sm text-gray-700">{a}</p>
          </div>
        ))}
      </div>

      <h2>External Links</h2>

      <ul className="space-y-3">
        <li>
          <a
            href="https://endfield.gryphline.com/landing/ua/obt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Arknights: Endfield Official Launch Page (Gryphline)
          </a>
        </li>
        <li>
          <a
            href="https://endfield.gryphline.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Gryphline -- Arknights: Endfield Official Website
          </a>
        </li>
        <li>
          <Link href="/video-games" className="text-blue-600 hover:underline">
            ObjectWire Video Games Coverage
          </Link>
        </li>
      </ul>

    </JackArticle>
  );
}
