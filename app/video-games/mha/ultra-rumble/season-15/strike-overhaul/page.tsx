import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';

const SLUG = '/video-games/mha/ultra-rumble/season-15/strike-overhaul';

// â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const infoboxRows = [
  { label: 'Real Name', value: 'Kai Chisaki' },
  { label: 'Alias', value: 'Overhaul' },
  { label: 'Affiliation', value: 'Shie Hassaikai' },
  { label: 'Role', value: 'Assault (Villain)' },
  { label: 'Battle Style', value: 'Blighted Precipice' },
  { label: 'Obtained From', value: 'Rolls only' },
  { label: 'Season', value: '15' },
  { label: 'Release (JST)', value: 'Feb 18, 2026 Â· 13:00' },
];

const statRows = [
  { label: 'Max Main Health', value: '300' },
  { label: 'Max Guard Point (GP)', value: '250' },
  { label: 'Max Armor', value: '100' },
  { label: 'Max Break Down', value: '500' },
  { label: 'Max Freeze', value: '100' },
  { label: 'Max Shock', value: '100' },
  { label: 'Guard Break Rate', value: '1.0' },
  { label: 'Take Damage Rate (Special)', value: '1.0' },
  { label: 'Giant Armor Resistance Rate', value: '1.0' },
  { label: 'Giant Break Down Resistance Rate', value: '1.0' },
  { label: 'Giant Negative Condition Resistance Rate', value: '1.0' },
  { label: 'Body Size', value: '3' },
];

const quirks = [
  {
    key: 'Î±',
    name: 'Showering Shot',
    color: 'bg-blue-600',
    description:
      'Fire a series of homing stone shots from beneath. Move at the same time to attack while traveling along the ground.',
    note: 'Aim Mode variant â†’ Rubble of the End: Fire sharp stone bullets while in Aim Mode. Trades homing for higher velocity and precision.',
  },
  {
    key: 'Î²',
    name: 'Blighted Precipice',
    color: 'bg-purple-600',
    badge: 'Signature Skill',
    description:
      'Ride a rising stone pillar that changes angle with movement input. Jump during ascent for extra lift. Quirk Skill Î± (Showering Shot) can be used while ascending â€” simultaneously repositioning and attacking.',
    note: 'The defining mechanic of this Quick Skill. Mastering movement input during Î² activation is the highest-skill expression on this character.',
  },
  {
    key: 'Î³',
    name: 'Coffin Shot',
    color: 'bg-orange-600',
    description:
      'Dash forward and strike to launch the opponent. Goes in different directions while on the ground vs. following aim direction in midair. Restrains the target in stone on hit, then detonates.',
    note: 'Direction changes based on air vs. ground state â€” critical for mid-air combo confirms.',
  },
];

const assaultRows = [
  { label: 'Ã—1 Assault Role', bonus: '5% reduction', multiplier: 'Ã—0.95' },
  { label: 'Ã—2 Assault Roles', bonus: '10% reduction', multiplier: 'Ã—0.90' },
  { label: 'Ã—3 Assault Roles', bonus: '20% reduction', multiplier: 'Ã—0.80' },
];

export const metadata: Metadata = {
  title: 'Overhaul Blighted Precipice Quick Skill â€” Season 15 My Hero Ultra Rumble | ObjectWire',
  description:
    'Bandai Namco drops the Overhaul "Blighted Precipice" Quick Skill in My Hero Ultra Rumble Season 15 on February 18, 2026. Full stats, quirk skills, tuning guide, roll strategy, and playstyle breakdown.',
  keywords: [
    'Overhaul Blighted Precipice Ultra Rumble',
    'My Hero Ultra Rumble Season 15',
    'Overhaul Quick Skill',
    'MHUR Overhaul rolls',
    'Blighted Precipice stats',
    'Ultra Rumble Season 15 new character',
    'Bandai Namco MHA game 2026',
    'Shie Hassaikai Quirk skill',
    'Overhaul villain build',
    'Ultra Rumble Assault role',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/mha/ultra-rumble/season-15/strike-overhaul',
  },
  openGraph: {
    title: 'Overhaul Blighted Precipice Quick Skill â€” Season 15 Ultra Rumble',
    description:
      'Bandai Namco drops the Overhaul "Blighted Precipice" Quick Skill variant in My Hero Ultra Rumble Season 15. Full stats, quirk breakdown, and roll guide.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/mha/ultra-rumble/season-15/strike-overhaul',
    siteName: 'ObjectWire',
    publishedTime: '2026-02-18T13:00:00+09:00',
    modifiedTime: '2026-02-18T13:00:00+09:00',
    authors: ['ObjectWire Gaming Desk'],
    section: 'Video Games',
    tags: ['My Hero Ultra Rumble', 'Overhaul', 'Season 15', 'Bandai Namco', 'Quick Skill'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overhaul Blighted Precipice Quick Skill â€” Season 15 Ultra Rumble',
    description:
      'Full breakdown of the new Overhaul Quick Skill variant released February 18, 2026 in My Hero Ultra Rumble Season 15.',
  },
};

// â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function OverhaulBlightedPrecipicePage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Overhaul Blighted Precipice Quick Skill â€” Season 15 My Hero Ultra Rumble"
        description="Bandai Namco drops the Overhaul 'Blighted Precipice' Quick Skill in My Hero Ultra Rumble Season 15 on February 18, 2026. Full stats, quirk skills, and roll strategy."
        author="ObjectWire Gaming Desk"
        publishedTime="2026-02-18T13:00:00+09:00"
        modifiedTime="2026-02-18T13:00:00+09:00"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Video Games"
        keywords={['My Hero Ultra Rumble', 'Overhaul', 'Season 15', 'Blighted Precipice', 'Bandai Namco', 'Quick Skill']}
      />

      <div className="min-h-screen bg-[#faf9f6]">

        {/* â”€â”€ Breadcrumb â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'Video Games', item: '/video-games' },
                { name: 'My Hero Academia', item: '/video-games/mha' },
                { name: 'Ultra Rumble', item: '/video-games/mha/ultra-rumble' },
                { name: 'Season 15', item: '/video-games/mha/ultra-rumble/season-15' },
                { name: 'Overhaul â€” Blighted Precipice', item: SLUG },
              ]}
            />
          </div>
        </div>

        {/* â”€â”€ Hero Banner â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <header className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-4 py-14">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                VILLAIN
              </span>
              <span className="bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Quick Skill Â· Season 15
              </span>
              <time
                dateTime="2026-02-18T13:00:00+09:00"
                className="bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full"
              >
                Released Feb 18, 2026 Â· 13:00 JST
              </time>
            </div>

            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
              Overhaul â€” Blighted Precipice
              <span className="block text-lg md:text-2xl font-normal text-purple-300 mt-2">
                My Hero Ultra Rumble Â· Season 15 Quick Skill Variant
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              Bandai Namco released the{' '}
              <strong className="text-white">Overhaul (Blighted Precipice)</strong> Quick Skill variant
              in My Hero Ultra Rumble Season 15 on February 18, 2026. Available exclusively through
              rolls, this new variant turns the Shie Hassaikai boss into a mobile ground-control
              threat capable of ascending stone pillars while continuing to fire â€” a fundamental shift
              from the base character&apos;s horizontal kit.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-400">
              <span>By <strong className="text-white">ObjectWire Gaming Desk</strong></span>
              <span>Â·</span>
              <span>February 18, 2026</span>
              <span>Â·</span>
              <span>8 min read</span>
            </div>
          </div>
        </header>

        {/* â”€â”€ Main Layout â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* â•â•â• ARTICLE BODY â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <article className="lg:col-span-2 space-y-12">

              {/* Intro */}
              <section>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Each new season of{' '}
                    <a
                      href="https://ultrarumble.com/character/34#google_vignette"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      My Hero Ultra Rumble
                    </a>{' '}
                    introduces Quick Skill variants â€” alternate versions of existing characters that
                    ship with a reworked moveset while keeping the same core identity. Season 15 brings
                    the <strong>Overhaul (Blighted Precipice)</strong> variant, named after its
                    signature Quirk Skill Î², which adds dramatic vertical ascent to an already
                    oppressive ground-control kit.
                  </p>
                  <p>
                    The base Overhaul design in Ultra Rumble has always been about environmental
                    control â€” using Showering Shot to harass at range and Coffin Shot to punish
                    overextension. Blighted Precipice doesn&apos;t change those fundamentals. It amplifies
                    them. The rising pillar mechanic creates three-dimensional pressure that forces
                    opponents to react both horizontally and vertically, making him harder to escape
                    once engaged. Add Restoration&apos;s full HP and GP recovery for nearby teammates,
                    and this kit becomes one of the most complete villain releases in recent memory.
                  </p>
                </div>
              </section>

              {/* YouTube */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Official Gameplay Trailer</h2>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/mNjwmhNuYFc?si=VV7UR2IijLoMocls"
                    title="My Hero Ultra Rumble â€” Overhaul Blighted Precipice Season 15 Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Official Season 15 character overview Â· Bandai Namco Entertainment
                </p>
              </section>

              {/* Role & Team Skill */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Role & Team Skill</h2>
                <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-5">
                  <p className="text-gray-700 leading-relaxed italic border-l-4 border-red-500 pl-4">
                    &quot;Young leader of the Shie Hassaikai! Control the ground and defeat your enemies
                    with your versatile Quirk!&quot;
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mb-4">
                  <div className="bg-gray-800 px-5 py-3">
                    <h3 className="text-white font-bold">Assault â€” Team Defense UP</h3>
                    <p className="text-gray-300 text-sm mt-1">
                      Gives your entire team Defense UP. The more teammates with the same role, the stronger the effect.
                    </p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {assaultRows.map((row) => (
                      <div key={row.label} className="flex items-center justify-between px-5 py-3 text-sm">
                        <span className="font-medium text-gray-700">{row.label}</span>
                        <div className="text-right">
                          <span className="font-bold text-green-600">{row.bonus}</span>
                          <span className="text-gray-400 ml-2 tabular-nums">{row.multiplier}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Running three Assault-role characters gives your squad a 20% damage reduction for the
                  entire match â€” one of the strongest defensive compositions in Season 15.
                </p>
              </section>

              {/* Quirk Skills */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Quirk Skills Breakdown</h2>
                <div className="space-y-5">
                  {quirks.map((q) => (
                    <div
                      key={q.key}
                      className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
                    >
                      <div className={`${q.color} px-5 py-3 flex items-center gap-3`}>
                        <span className="bg-white/20 text-white font-black text-base px-2.5 py-0.5 rounded">
                          {q.key}
                        </span>
                        <span className="text-white font-bold">{q.name}</span>
                        {q.badge && (
                          <span className="ml-auto bg-yellow-400 text-yellow-900 text-xs font-black px-2 py-0.5 rounded uppercase">
                            {q.badge}
                          </span>
                        )}
                      </div>
                      <div className="px-5 py-4">
                        <p className="text-gray-700 leading-relaxed">{q.description}</p>
                        {q.note && (
                          <p className="text-sm text-gray-500 mt-2 italic border-l-2 border-gray-200 pl-3">
                            {q.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Why Blighted Precipice Changes Everything</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The standard Overhaul kit is almost entirely horizontal in its threat coverage.
                    Blighted Precipice (Î²) adds a vertical axis â€” riding a rising stone pillar gives
                    elevation advantage, repositioning mid-fight, and the ability to fire Showering
                    Shot (Î±) during the ascent. Skilled players can angle the pillar toward clustered
                    enemies using the movement input, creating area-denial setups before landing
                    into a Coffin Shot (Î³) confirm.
                  </p>
                </div>
              </section>

              {/* Special Actions */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Actions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">Restoration</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Fully restores GP and HP of nearby allies. Hold to restore your own GP and HP.
                      Makes Overhaul a hybrid support-assault threat â€” sustain teammates between
                      engagements while maintaining offensive pressure.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">Disassembly</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Wide arm swing knocks away nearby opponents.{' '}
                      <strong>Can be used while under attack</strong> â€” critical escape when opponents
                      close the gap and bypass his range-oriented kit. Interrupt combos, create space,
                      reactivate Î².
                    </p>
                  </div>
                </div>
              </section>

              {/* Tuning Skills */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tuning Skills</h2>
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-gray-700 px-5 py-3">
                    <h3 className="text-white font-bold text-sm">Standard Tuning Skills</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <div className="px-5 py-4">
                      <p className="font-semibold text-gray-800 text-sm">Quirk Skill Î² Defense+</p>
                      <p className="text-gray-500 text-sm mt-1">
                        Decreases damage taken from enemy Quirk Skill Î² attacks. Recommended against
                        high-damage Î² characters who can interrupt your pillar ascent.
                      </p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="font-semibold text-gray-800 text-sm">GP Attack Power+</p>
                      <p className="text-gray-500 text-sm mt-1">
                        Increases damage dealt towards GP. Shreds guard bars faster and opens opponents
                        for follow-up Î³ (Coffin Shot) confirms.
                      </p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border-t border-yellow-200 px-5 py-4">
                    <p className="text-xs font-bold text-yellow-800 uppercase tracking-wider mb-2">
                      Special Tuning Skill
                    </p>
                    <p className="font-semibold text-gray-800 text-sm">PU Rejection</p>
                    <p className="text-gray-600 text-sm mt-1">
                      When activating PU PC, any launched opponent takes damage. Creates a punish
                      window every time your PU triggers â€” rewards aggressive tempo and snowballs
                      leads once Overhaul is powered up.
                    </p>
                  </div>
                </div>
              </section>

              {/* Playstyle Guide */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Playstyle Guide</h2>
                <div className="prose prose-gray max-w-none">
                  <h3>Opening â€” Establish Ground Control</h3>
                  <p>
                    At range, use Î± (Showering Shot) on the move. The homing property lets you advance,
                    retreat, and strafe while maintaining consistent damage. Pre-position slightly above
                    opponents whenever possible.
                  </p>
                  <h3>The Blighted Precipice Loop</h3>
                  <ol>
                    <li>Activate <strong>Î²</strong> â€” start ascending, angle toward the enemy with movement input</li>
                    <li>Fire <strong>Î±</strong> during the rise â€” homing shots track grounded targets below</li>
                    <li>Jump at the apex for extra height, switch to Aim Mode</li>
                    <li>Descend with <strong>Rubble of the End</strong> (Aim Mode Î±) for precision shots</li>
                    <li>Land and confirm with <strong>Î³ (Coffin Shot)</strong> â€” stone restraint into guaranteed burst</li>
                  </ol>
                  <h3>Sustain and Team Play</h3>
                  <p>
                    After every fight, trigger Restoration on your most-damaged teammate before looting.
                    Combined with triple-Assault 20% Defense UP, your squad repeatedly enters fights at
                    full HP â€” exhausting teams trying to third-party.
                  </p>
                  <h3>Emergency Reset: Disassembly</h3>
                  <p>
                    If caught in a combo, Disassembly (&quot;usable under attack&quot;) interrupts most
                    non-Quirk melee strings and creates space to reactivate Î² and escape upward.
                  </p>
                </div>
              </section>

              {/* Stats */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Full Character Stats</h2>
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <div className="bg-gray-800 px-5 py-3">
                    <h3 className="text-white font-bold text-sm">Overhaul (Blighted Precipice) â€” Base Stats</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {statRows.map((row) => (
                      <div key={row.label} className="flex items-center justify-between px-5 py-3 text-sm">
                        <span className="text-gray-600">{row.label}</span>
                        <span className="font-bold tabular-nums text-gray-900">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Base values at Season 15 release (February 18, 2026).{' '}
                  <a
                    href="https://ultrarumble.com/character/34#google_vignette"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Full data on ultrarumble.com â†’
                  </a>
                </p>
              </section>

              {/* How to Obtain */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Obtain â€” Roll Strategy</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">ðŸŽ²</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Rolls Only â€” Not in Battle Pass</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Overhaul (Blighted Precipice) is not available through story progression, Battle
                        Pass rewards, or direct purchase. The only acquisition method is the in-game
                        gacha rolls using Hero Crystals or Roll Tickets.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="prose prose-sm max-w-none text-gray-700">
                  <p>
                    Season 15 Quick Skill variants like Blighted Precipice typically run on limited-time
                    banners with elevated drop rates during the first two weeks of the season. Prioritize
                    rolling during the launch window (February 18, 2026 at 13:00 JST) before the
                    rate-up banner rotates.
                  </p>
                  <div className="not-prose bg-orange-50 border border-orange-200 rounded-xl p-4 my-4">
                    <p className="text-orange-900 font-bold text-sm mb-1">âš ï¸ Limited Pool Advisory</p>
                    <p className="text-orange-800 text-sm">
                      Quick Skill variants are historically removed from the standard pool after their
                      season ends. Roll before the Season 15 pool closes â€” he may return in future
                      Featured banners but is not guaranteed to re-enter the permanent pool.
                    </p>
                  </div>
                  <p>
                    For all Season 15 additions and patch notes, see the{' '}
                    <Link href="/video-games/mha/ultra-rumble/season-15" className="text-blue-600 hover:underline font-medium">
                      Ultra Rumble Season 15 hub
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Verdict */}
              <section className="border-t-2 border-black pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">ObjectWire Verdict</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Overhaul (Blighted Precipice) is one of the stronger Quick Skill releases in recent
                  seasons. The Î² Skill&apos;s vertical pillar doesn&apos;t just add mobility â€” it adds
                  decision-forcing pressure that makes every engagement happen on Overhaul&apos;s terms.
                  The ability to fire Showering Shot mid-ascent eliminates the typical tradeoff between
                  repositioning and attacking, and Restoration means skilled teams can run Overhaul as
                  a hybrid front-line support rather than pure backline damage.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you run Assault-heavy compositions, this is a roll target worth spending resources
                  on. New and returning players looking for a high-ceiling villain with genuine
                  solo-carry potential will find Blighted Precipice one of the most complete kits
                  in Season 15.
                </p>
              </section>

            </article>

            {/* â•â•â• SIDEBAR â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <aside className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">

                {/* Character Infobox */}
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-gradient-to-r from-blue-700 to-purple-700 px-4 py-3 text-center">
                    <h2 className="text-white font-bold text-base">Overhaul</h2>
                    <p className="text-blue-100 text-xs">Blighted Precipice Quick Skill</p>
                  </div>
                  <div className="divide-y divide-gray-100 text-sm">
                    {infoboxRows.map((row) => (
                      <div key={row.label} className="flex px-4 py-2.5 gap-2">
                        <span className="text-gray-500 w-28 shrink-0 text-xs">{row.label}</span>
                        <span className="font-medium text-gray-800 text-xs">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Official Sources */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Official Sources</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="https://en.bandainamcoent.eu/my-hero-academia/my-hero-ultra-rumble"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Bandai Namco EU â€” Ultra Rumble â†’
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ultrarumble.com/character/34#google_vignette"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Overhaul Stats â€” ultrarumble.com â†’
                      </a>
                    </li>
                  </ul>
                </div>

                {/* More MHA Coverage */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">More MHA Coverage</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/video-games/mha/ultra-rumble/season-15" className="text-blue-600 hover:underline">
                        â†’ Season 15 Full Breakdown
                      </Link>
                    </li>
                    <li>
                      <Link href="/video-games/mha/ultra-rumble" className="text-blue-600 hover:underline">
                        â†’ Ultra Rumble Hub
                      </Link>
                    </li>
                    <li>
                      <Link href="/video-games/mha/alls-justice" className="text-blue-600 hover:underline">
                        â†’ MHA: All&apos;s Justice
                      </Link>
                    </li>
                    <li>
                      <Link href="/video-games/mha" className="text-blue-600 hover:underline">
                        â†’ MHA Knowledge Hub
                      </Link>
                    </li>
                    <li>
                      <Link href="/video-games" className="text-blue-600 hover:underline">
                        â†’ All Video Game Coverage
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Meta */}
                <div className="text-xs text-gray-400 space-y-1 px-1">
                  <p>Published: February 18, 2026</p>
                  <p>Author: ObjectWire Gaming Desk</p>
                  <p>Category: Video Games · My Hero Ultra Rumble</p>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </div>
    </SEOWrapper>
  );
}
