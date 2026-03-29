/**
 * seed-missing-article-pages.ts
 *
 * Directly upserts content for the 3 ArticlePage stubs that were
 * trimmed before their content was ever written to Supabase.
 *
 * Targets: article_pages table
 * Slugs:
 *   video-games-gta-6
 *   video-games-nintendo-donkey-kong-bananza
 *   video-games-toxic-comando
 *
 * Run:
 *   npx tsx --env-file=.env.local scripts/seed-missing-article-pages.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ─────────────────────────────────────────────────────────────────────────────
// 1. GTA 6
// ─────────────────────────────────────────────────────────────────────────────
const gta6: Record<string, unknown> = {
  slug: 'video-games-gta-6',
  title: 'Grand Theft Auto VI',
  subtitle: 'Release Date, Price, Platforms & Everything We Know',
  category: 'Video Games',
  last_updated: '2026-03-25',
  url: '/video-games/gta-6',
  info_box: {
    title: 'Grand Theft Auto VI',
    items: [
      { label: 'Developer', value: 'Rockstar Games' },
      { label: 'Publisher', value: 'Take-Two Interactive' },
      { label: 'Release Date', value: 'November 19, 2026' },
      { label: 'Platforms', value: 'PS5, Xbox Series X|S (PC TBA)' },
      { label: 'Setting', value: 'Vice City (Leonida)' },
      { label: 'Protagonists', value: 'Lucia & Jason' },
      { label: 'Engine', value: 'RAGE (Rockstar Advanced Game Engine)' },
      { label: 'ESRB', value: 'Mature 17+ (expected)' },
      { label: 'US Price (est.)', value: '$89.99–$124.99' },
      { label: 'UK Price (est.)', value: '£89.99' },
      { label: 'India Price (est.)', value: '₹5,999–₹6,999' },
    ],
  },
  table_of_contents: [
    { id: 'release-date', label: 'Release Date & Delay History' },
    { id: 'price', label: 'Global Pricing' },
    { id: 'platforms', label: 'Platforms & PC Status' },
    { id: 'story', label: 'Story & Protagonists' },
    { id: 'setting', label: 'Setting: Vice City / Leonida' },
    { id: 'gameplay', label: 'Gameplay Features' },
    { id: 'trailer', label: 'Trailers & Marketing' },
    { id: 'development', label: 'Development Timeline' },
  ],
  related_links: [
    { href: '/video-games', label: 'Video Games Hub' },
    { href: '/video-games/gta-6', label: 'GTA 6 Page' },
    { href: '/video-games/nintendo/donkey-kong-bananza', label: 'Donkey Kong Bananza' },
  ],
  content_html: `
<section id="release-date">
  <h2>Release Date &amp; Delay History</h2>
  <p>Grand Theft Auto VI is confirmed for <strong>November 19, 2026</strong> on PlayStation 5 and Xbox Series X|S. The date was
  officially announced by Rockstar Games and Take-Two Interactive in May 2025, representing a significant delay from the
  originally teased "2025" window mentioned in investor communications following the December 2023 trailer launch.</p>
  <p>The game was first publicly confirmed to be in active development in February 2022 via a brief Rockstar statement. The
  December 2023 trailer — which amassed over 93 million YouTube views in its first 24 hours — confirmed Vice City as the setting,
  introduced protagonists Lucia and Jason, and showed a release window of 2025. A subsequent earnings call in early 2025
  pushed the date to fall 2026, with November 19 announced shortly after.</p>
  <p>No PC release date has been announced. Rockstar has historically released PC versions of GTA titles 12–18 months after
  console launches, suggesting a PC release in late 2027 or early 2028 at the earliest.</p>
</section>

<section id="price">
  <h2>Global Pricing</h2>
  <p>No official price has been announced as of March 2026. However, multiple retailer listings have appeared internationally,
  establishing a strong pricing signal:</p>
  <ul>
    <li><strong>United States:</strong> Retailer leaks point to a standard edition at <strong>$89.99</strong>, with a
    "Premium" edition at $109.99 and a "Collector's" edition at $124.99. The $89.99 base price would be $10 higher than GTA V's
    $79.99 launch and reflects an industry-wide premium pricing push led by NBA 2K and other Take-Two titles.</li>
    <li><strong>United Kingdom:</strong> Retailer GAME listed a Standard Edition at <strong>£89.99</strong>.</li>
    <li><strong>India:</strong> Multiple Indian retailers have listed the game between <strong>₹5,999 and ₹6,999</strong> for
    the standard PS5 edition.</li>
    <li><strong>Australia:</strong> AUD $124.95 standard edition listings have appeared on JB Hi-Fi.</li>
    <li><strong>Europe:</strong> €79.99–€89.99 range based on German and French retailer pages.</li>
  </ul>
  <p>Take-Two Interactive has not officially confirmed pricing. The company's CFO cited "premium value" when asked about
  potential $100+ pricing on analyst calls, stopping short of confirming a specific number.</p>
</section>

<section id="platforms">
  <h2>Platforms &amp; PC Status</h2>
  <p>GTA VI launches exclusively on <strong>PlayStation 5</strong> and <strong>Xbox Series X|S</strong>. No version for
  PlayStation 4, Xbox One, or Nintendo Switch has been announced or is expected.</p>
  <p><strong>PC:</strong> Rockstar has not announced a PC release date. The studio has a documented pattern of delayed PC
  ports — GTA V launched on PS3/Xbox 360 in September 2013 and didn't arrive on PC until April 2015. Red Dead Redemption 2
  launched on consoles in October 2018 and reached PC in November 2019. Industry analysts expect GTA VI on PC in 2027 or 2028.</p>
  <p>The game is being built specifically for the current generation of consoles and will take full advantage of PS5's SSD
  streaming, DualSense haptic feedback, and 3D audio. Xbox Series X will target 4K/60fps. Xbox Series S specifications
  have not been detailed by Rockstar.</p>
</section>

<section id="story">
  <h2>Story &amp; Protagonists</h2>
  <p>GTA VI is the first mainline entry in the series to feature a female protagonist. <strong>Lucia</strong> is a Latina woman
  introduced in the trailer being released from a Florida correctional facility. She meets <strong>Jason</strong>, her partner,
  and the two appear to embark on a Bonnie-and-Clyde style criminal odyssey across the fictional state of Leonida.</p>
  <p>The trailer showed Lucia and Jason robbing diners, evading police in high-speed chases, and navigating the social media
  celebrity culture of modern Vice City. Social media influencers, viral stunts, and online clout appear to be woven into the
  game's satirical premise — consistent with Rockstar's tradition of lampooning American culture.</p>
  <p>Voice actors for Lucia and Jason have not been officially confirmed, though casting agency listings in 2021 and 2022
  included descriptions matching the protagonists.</p>
</section>

<section id="setting">
  <h2>Setting: Vice City &amp; Leonida</h2>
  <p>GTA VI is set in a fictional version of Miami and South Florida called <strong>Vice City</strong>, situated within a
  larger fictional state called <strong>Leonida</strong> — a stand-in for Florida. The trailer showed neon-lit Miami Beach
  analogues, Florida Everglades-style wetlands, a Keys-like chain of islands, and rural interior towns.</p>
  <p>The map is expected to be significantly larger than GTA V's Los Santos and Blaine County. Rockstar has not confirmed
  map size, but leaks from 2022 suggested a map spanning urban Miami, suburban sprawl, rural counties, and a full coastal
  region with navigable waterways.</p>
  <p>Returning Vice City landmarks appear in the trailer including a Malibu Club analogue and the Ocean Beach strip,
  reimagined for 2026 aesthetics.</p>
</section>

<section id="gameplay">
  <h2>Gameplay Features</h2>
  <p>Rockstar has revealed minimal official gameplay details. What is known or strongly evidenced from the trailer:</p>
  <ul>
    <li><strong>Dual protagonists</strong> — Lucia and Jason can be played separately. Whether the game allows switching
    between them mid-mission like GTA V's three-character system is unconfirmed.</li>
    <li><strong>Social media mechanics</strong> — NPC characters film events on phones. Viral videos of player actions
    appear to be a gameplay element, satirizing influencer culture.</li>
    <li><strong>Expanded vehicle variety</strong> — Airboats, swamp vehicles, and classic muscle cars are visible.</li>
    <li><strong>GTA Online 2</strong> — Take-Two has confirmed a new online mode will launch with or shortly after the
    single-player game. Details are not public.</li>
    <li><strong>Physics and destruction</strong> — Environmental details in the trailer suggest significantly upgraded
    physics simulation vs GTA V.</li>
  </ul>
</section>

<section id="trailer">
  <h2>Trailers &amp; Marketing</h2>
  <p><strong>Trailer 1</strong> (December 4, 2023) — The first trailer was accidentally leaked a day early, prompting
  Rockstar to release it immediately. It accumulated 93 million YouTube views in 24 hours, setting a gaming record. The
  trailer confirmed Vice City, introduced Lucia, showed the Leonida setting, and gave a 2025 release window.</p>
  <p><strong>Trailer 2</strong> (May 2025) — Confirmed the November 2026 date, showed Jason more prominently, and revealed
  additional gameplay and story context. Introduced the Bonnie-and-Clyde framing explicitly.</p>
  <p>A third major marketing push is expected in mid-2026 ahead of the November release, likely including gameplay
  previews and pre-order announcements.</p>
</section>

<section id="development">
  <h2>Development Timeline</h2>
  <ul>
    <li><strong>2012–2013:</strong> GTA V ships. Rockstar North begins early concept work on next entry.</li>
    <li><strong>2018:</strong> Red Dead Redemption 2 ships. Full GTA VI development begins.</li>
    <li><strong>2022 (February):</strong> Rockstar officially confirms GTA VI is in active development in a blog post.</li>
    <li><strong>2022 (September):</strong> Massive internal leak — over 90 development videos posted online by hacker.
    Rockstar confirms authenticity. Lucia and Vice City confirmed inadvertently.</li>
    <li><strong>2023 (December 4):</strong> Trailer 1 releases. 2025 window announced.</li>
    <li><strong>2025 (Q1):</strong> Take-Two earnings call shifts release to "fall 2026."</li>
    <li><strong>2025 (May):</strong> Trailer 2. November 19, 2026 confirmed.</li>
    <li><strong>2026 (November 19):</strong> Global release on PS5 and Xbox Series X|S.</li>
  </ul>
</section>
`,
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. Donkey Kong Bananza
// ─────────────────────────────────────────────────────────────────────────────
const dkBananza: Record<string, unknown> = {
  slug: 'video-games-nintendo-donkey-kong-bananza',
  title: 'Donkey Kong Bananza',
  subtitle: 'GDC 2026 Tech Reveal: 347M Voxels, Switch 2 Destruction Engine',
  category: 'Video Games',
  last_updated: '2026-03-25',
  url: '/video-games/nintendo/donkey-kong-bananza',
  info_box: {
    title: 'Donkey Kong Bananza',
    items: [
      { label: 'Developer', value: 'Nintendo EPD' },
      { label: 'Publisher', value: 'Nintendo' },
      { label: 'Platform', value: 'Nintendo Switch 2' },
      { label: 'Release Date', value: 'July 17, 2025' },
      { label: 'Producer', value: 'Kenta Motokura' },
      { label: 'Lead Engineer', value: 'Tatsuya Kurihara' },
      { label: 'Voxels per level', value: '347,070,464' },
      { label: 'Frame rate', value: '60fps (dynamic resolution)' },
      { label: 'Engine origin', value: 'Super Mario Odyssey snow tech' },
      { label: 'GDC session', value: 'March 2026, Moscone Center' },
    ],
  },
  table_of_contents: [
    { id: 'gdc-reveal', label: 'GDC 2026 Tech Session' },
    { id: 'voxel-system', label: 'The 347M Voxel System' },
    { id: 'origins', label: 'Origins in Mario Odyssey' },
    { id: 'switch2-move', label: 'Why It Moved to Switch 2' },
    { id: 'restore-mechanic', label: 'The Restore Mechanic' },
    { id: 'dynamic-resolution', label: 'Dynamic Resolution & Performance' },
    { id: 'review', label: 'Reception' },
  ],
  related_links: [
    { href: '/video-games', label: 'Video Games Hub' },
    { href: '/video-games/gta-6', label: 'GTA 6 Guide' },
  ],
  content_html: `
<section id="gdc-reveal">
  <h2>GDC 2026 Tech Session</h2>
  <p>At the Game Developers Conference 2026 in San Francisco's Moscone Center, Nintendo producer
  <strong>Kenta Motokura</strong> and lead engineer <strong>Tatsuya Kurihara</strong> delivered one of the
  conference's most technically detailed sessions: a deep dive into the voxel destruction engine powering
  <em>Donkey Kong Bananza</em> on Nintendo Switch 2.</p>
  <p>The session, titled "Building a Destructible World: The Voxel Engine of Donkey Kong Bananza," drew a
  packed audience of engineers and designers. Motokura opened by acknowledging that the technology had its roots
  in a prototype built for <em>Super Mario Odyssey</em> — specifically the game's snow-deformation system —
  and had been quietly evolving at Nintendo EPD for nearly a decade before Bananza gave it a full showcase.</p>
</section>

<section id="voxel-system">
  <h2>The 347,070,464 Voxel System</h2>
  <p>The headline number from the session: each level in <em>Donkey Kong Bananza</em> contains exactly
  <strong>347,070,464 individually destructible voxels</strong>. Every one of these can be broken, displaced,
  or removed through DK's punching and digging mechanics. The result is that the entire terrain of each level
  is a fully destructible three-dimensional volume, not a surface mesh with destructible props layered on top.</p>
  <p>Kurihara explained the voxel grid is organized in a layered canyon structure, with each level containing
  multiple horizontal strata — visually distinct rock, earth, and mineral layers — each contributing to the
  347M total. Players can dig vertically through all layers, revealing different biomes and secrets as they go
  deeper, or punch horizontally through walls to create new passages.</p>
  <p>The system tracks destroyed voxels in compressed bitfield maps per chunk, allowing the engine to efficiently
  stream only the chunks near the player while keeping memory usage manageable on Switch 2's hardware.</p>
</section>

<section id="origins">
  <h2>Origins in Super Mario Odyssey Snow</h2>
  <p>Motokura revealed that the voxel technology traces its lineage directly to <em>Super Mario Odyssey</em>'s
  Snow Kingdom. That 2017 game featured deformable snow — Mario's footsteps left indentations, objects could
  be thrown into snowbanks and leave impact craters. The underlying technique was a simplified voxel grid
  applied to the snow surface layer.</p>
  <p>After Odyssey shipped, a small team at Nintendo EPD continued iterating on the voxel approach as an
  internal technology experiment. The question they were asking: what if the deformable surface wasn't just
  snow on top of the world, but the entire world? Could the same technique scale to a full 3D terrain volume
  at interactive frame rates?</p>
  <p>Several years of prototyping followed, initially targeted at Switch 1 hardware. The prototype worked, but
  at significant compromises to level size, voxel resolution, and performance.</p>
</section>

<section id="switch2-move">
  <h2>Why It Moved to Switch 2</h2>
  <p>Kurihara was candid about why <em>Donkey Kong Bananza</em> became a Switch 2 exclusive rather than
  shipping on the original Switch: "The original Switch simply could not handle the scale we wanted.
  We had a working prototype, but the level sizes were too small and the resolution was too coarse.
  It felt like a tech demo, not a game."</p>
  <p>Switch 2's significantly upgraded CPU, GPU, and memory bandwidth — Nintendo has not officially disclosed
  Switch 2 hardware specs in full, but developer documentation indicates roughly 4–5x the GPU performance
  of Switch 1 — gave the team the headroom to scale the voxel grid to the 347M-per-level target while
  maintaining 60fps with dynamic resolution management.</p>
  <p>The decision to move the project to Switch 2 was made in 2022 during Nintendo's internal hardware
  planning cycle. Bananza became one of the platform's first-party anchors alongside <em>Mario Kart World</em>.</p>
</section>

<section id="restore-mechanic">
  <h2>The Restore Mechanic</h2>
  <p>One of the most unusual design decisions in Bananza is the <strong>Restore mechanic</strong>: a player
  ability that rebuilds destroyed voxels in a target area back to their original configuration. Motokura
  described this as both a gameplay tool (certain puzzles require rebuilding terrain to progress) and a
  solution to a design problem: in a fully destructible world, players could accidentally destroy the
  geometry they needed to complete a level.</p>
  <p>The Restore ability is tied to a limited resource that recharges over time, ensuring players must think
  about both destruction and reconstruction. Kurihara noted that storing the "original state" for restoration
  required a separate compressed snapshot of each level's initial voxel configuration — essentially doubling
  the per-level voxel data stored in memory — but that Switch 2's RAM capacity made this tractable.</p>
</section>

<section id="dynamic-resolution">
  <h2>Dynamic Resolution &amp; Performance</h2>
  <p>Bananza targets <strong>60 frames per second</strong> across all play modes on Switch 2, including
  handheld. The engine achieves this through an aggressive dynamic resolution system that scales render
  resolution per frame based on GPU load — dropping from a native 1080p (docked) or 720p (handheld) target
  down to as low as 720p / 480p in the most destruction-heavy moments.</p>
  <p>Temporal upscaling (Nintendo's proprietary solution, not DLSS or FSR) reconstructs the final frame to
  the display's native resolution. Kurihara said that in playtests, players rarely noticed the resolution
  changes during chaotic destruction sequences because the visual noise of flying debris and particle effects
  masked the scaling artifacts.</p>
  <p>CPU workload from voxel physics — calculating which broken chunks fall, collide, and settle — was
  identified as the most challenging bottleneck. The team developed a priority system that runs full physics
  only on voxel chunks within a certain radius of the player, with simplified approximations for distant chunks.</p>
</section>

<section id="review">
  <h2>Reception</h2>
  <p><em>Donkey Kong Bananza</em> launched July 17, 2025, and was received as a critical success and one
  of the strongest Nintendo Switch 2 launch-window titles. The game earned an 89 on Metacritic, with critics
  praising the voxel destruction system as genuinely novel and the level design as the best in the Donkey Kong
  franchise since <em>Donkey Kong Country: Tropical Freeze</em>.</p>
  <p>The GDC 2026 session — delivered eight months after launch — was unusual in that it revealed the full
  technical depth of a shipped title rather than a game in development. Industry observers noted this as a
  sign of Nintendo's confidence in the technology and an indication that the voxel engine will likely appear
  in future Nintendo titles.</p>
</section>
`,
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. Toxic Commando
// ─────────────────────────────────────────────────────────────────────────────
const toxicCommando: Record<string, unknown> = {
  slug: 'video-games-toxic-comando',
  title: "John Carpenter's Toxic Commando",
  subtitle: 'Review Roundup & Launch Day Guide — March 12, 2026',
  category: 'Video Games',
  last_updated: '2026-03-25',
  url: '/video-games/toxic-comando',
  info_box: {
    title: "John Carpenter's Toxic Commando",
    items: [
      { label: 'Developer', value: 'Saber Interactive' },
      { label: 'Publisher', value: 'Focus Entertainment' },
      { label: 'Release Date', value: 'March 12, 2026' },
      { label: 'Platforms', value: 'PS5, Xbox Series X|S, PC (Steam)' },
      { label: 'Genre', value: 'Co-op shooter / Swarm survival' },
      { label: 'Players', value: '1–4 co-op' },
      { label: 'Metacritic (PS5)', value: '74' },
      { label: 'Soundtrack', value: 'John Carpenter (original synth)' },
      { label: 'Engine', value: 'Swarm Engine (proprietary)' },
      { label: 'Price', value: '$39.99' },
    ],
  },
  table_of_contents: [
    { id: 'overview', label: 'Overview' },
    { id: 'gameplay', label: 'Gameplay & Classes' },
    { id: 'swarm-engine', label: 'The Swarm Engine' },
    { id: 'carpenter', label: "John Carpenter's Involvement" },
    { id: 'reviews', label: 'Review Roundup' },
    { id: 'verdict', label: 'Verdict' },
  ],
  related_links: [
    { href: '/video-games', label: 'Video Games Hub' },
    { href: '/video-games/gta-6', label: 'GTA 6 Guide' },
    { href: '/video-games/nintendo/donkey-kong-bananza', label: 'Donkey Kong Bananza' },
  ],
  content_html: `
<section id="overview">
  <h2>Overview</h2>
  <p><em>John Carpenter's Toxic Commando</em> is a co-op swarm shooter developed by Saber Interactive
  (the studio behind <em>World War Z</em> and the Switch port of <em>The Witcher 3</em>) and published
  by Focus Entertainment. The game launched March 12, 2026, on PlayStation 5, Xbox Series X|S, and PC
  via Steam at a $39.99 price point — positioning itself as a mid-budget co-op experience rather than
  a $70 premium title.</p>
  <p>The game stars up to four players as Toxic Commandos, members of a special forces unit fighting
  through Sludge Zombie hordes in a B-movie-aesthetic world of chemical spills, mutant monsters, and
  over-the-top gore. The entire aesthetic is an explicit tribute to 1980s horror cinema — the genre
  John Carpenter defined.</p>
</section>

<section id="gameplay">
  <h2>Gameplay &amp; Classes</h2>
  <p>Toxic Commando features <strong>four playable classes</strong>, each with distinct abilities
  and weapon specializations:</p>
  <ul>
    <li><strong>Gunner</strong> — Heavy weapons specialist. Minigun, grenade launcher, highest damage output.
    Lowest mobility. Best for holding chokepoints in waves.</li>
    <li><strong>Recon</strong> — Fast, mobile, pistols and SMGs. Can mark enemies through walls. Best for
    flanking and objective runs.</li>
    <li><strong>Medic</strong> — Healing grenades, revive speed boost, adrenaline injectors. Essential in
    higher difficulties where downed teammates drain quickly.</li>
    <li><strong>Demolitions</strong> — Explosives expert. C4, proximity mines, RPG. Best at clearing dense
    Sludge Zombie clusters but requires careful positioning to avoid friendly fire.</li>
  </ul>
  <p>Each class levels up independently, unlocking new active abilities and passive perks. A full
  playthrough of the campaign (approximately 8–10 hours) will level one class to roughly 60% of its
  maximum unlock tree, encouraging repeat playthroughs with different classes or investing in the
  post-launch challenge modes.</p>
  <p>Off-road vehicle segments break up the on-foot waves — players can man turrets on trucks and ATVs
  while driving through Sludge Zombie-infested highways, a mechanic that reviewers singled out as a
  highlight for its chaotic energy.</p>
</section>

<section id="swarm-engine">
  <h2>The Swarm Engine</h2>
  <p>Saber Interactive's <strong>proprietary Swarm Engine</strong> — also used in <em>World War Z</em>
  — is the technical foundation of Toxic Commando. The engine is purpose-built to render and simulate
  hundreds of individual AI-driven enemies simultaneously on screen without significant frame rate impact.</p>
  <p>In Toxic Commando, the engine drives waves of <strong>Sludge Zombies</strong> — chemically mutated
  humans with a variety of movement patterns, attack types, and behaviors. Standard Sludge Zombies charge
  in packs; Bloater variants explode on death spreading toxic pools; Crawler variants hug the ground to
  evade bullets; and the Titan variant — a building-sized mutation — serves as level-cap boss encounters.</p>
  <p>On PS5 and Xbox Series X, the engine can put over 500 individual Sludge Zombies on screen
  simultaneously during peak wave segments, with each running independent pathfinding and collision.
  Frame rate remained near-locked at 60fps in most review conditions, with drops occurring primarily
  during simultaneous large explosion chains.</p>
</section>

<section id="carpenter">
  <h2>John Carpenter's Involvement</h2>
  <p>John Carpenter — director of <em>Halloween</em>, <em>The Thing</em>, <em>Escape from New York</em>,
  and <em>They Live</em> — served as an executive producer and composed the game's original synthesizer
  soundtrack. His involvement was announced in 2024 and was a key part of the game's marketing identity.</p>
  <p>Carpenter has been increasingly active in gaming in recent years, having contributed to music for
  <em>Halloween Kills</em> and collaborated on other licensed horror games. His synth score for Toxic Commando
  is an original work in the tradition of his iconic self-composed film soundtracks — pulsing bass lines,
  arpeggiated leads, and minimalist tension-building patterns that reviewers uniformly praised.</p>
  <p>In a pre-launch interview, Carpenter described his approach: "I wanted it to feel like you're inside
  one of my movies. The music should make you feel like something horrible is about to happen — because
  it is."</p>
</section>

<section id="reviews">
  <h2>Review Roundup (Launch Day — March 12, 2026)</h2>
  <p>Toxic Commando launched to a <strong>74 Metacritic score</strong> on PS5, placing it in the "Mixed or
  Average" category. Critical consensus was that the game is a competent, fun co-op experience that doesn't
  push the genre forward but delivers well on its modest ambitions — especially at $39.99.</p>
  <ul>
    <li><strong>IGN — 7/10:</strong> "Toxic Commando is a gleefully stupid good time that knows exactly what
    it is. Carpenter's soundtrack alone is worth the asking price."</li>
    <li><strong>Eurogamer — 3/5:</strong> "The Swarm Engine does the heavy lifting. Four hours in with friends
    it's a blast; solo it wears thin. The class system needs another pass."</li>
    <li><strong>Game Informer — 7.5/10:</strong> "A love letter to B-movie horror co-op gaming. Not a
    masterpiece, but an excellent $40 investment for a regular co-op group."</li>
    <li><strong>Destructoid — 7/10:</strong> "The vehicle sequences are the game's best moments. Wish there
    were more of them. The final boss is genuinely spectacular."</li>
    <li><strong>PC Gamer — 72/100:</strong> "Performance on PC is solid. The Swarm Engine handles the zombie
    counts impressively. Needs more map variety in the back half."</li>
  </ul>
  <p>Common criticisms across reviews: limited map variety in the campaign's second half, the Recon class
  feeling underpowered at launch, and solo play being significantly less engaging than co-op. Common
  praise: the Swarm Engine's performance, Carpenter's soundtrack, the vehicle sections, and the
  overall price-to-value proposition.</p>
</section>

<section id="verdict">
  <h2>Verdict</h2>
  <p><em>John Carpenter's Toxic Commando</em> succeeds at its core mission: delivering a gory, fun,
  B-movie co-op shooter that doesn't take itself seriously and doesn't ask you to pay full price.
  The Swarm Engine remains one of the most technically impressive co-op combat systems in gaming,
  and Carpenter's involvement lends the game a legitimacy that elevates it above licensed novelty.</p>
  <p>If you have three friends and $40, this is an easy recommendation for a weekend. Solo players
  looking for a deeper single-player experience should look elsewhere. Saber Interactive has announced
  a post-launch roadmap including two free map expansions and a horde mode update planned for
  spring 2026.</p>
</section>
`,
};

// ─────────────────────────────────────────────────────────────────────────────
// Upsert all 3
// ─────────────────────────────────────────────────────────────────────────────
async function main() {
  const rows = [gta6, dkBananza, toxicCommando];

  console.log('\n🚀  Seeding 3 missing article_pages rows...\n');

  for (const row of rows) {
    const { error } = await supabase
      .from('article_pages')
      .upsert(row, { onConflict: 'slug' });

    if (error) {
      console.error(`  ❌  ${row.slug}: ${error.message}`);
    } else {
      console.log(`  ✅  ${row.slug}`);
    }
  }

  console.log('\n🔍  Verifying...\n');
  for (const row of rows) {
    const { data } = await supabase
      .from('article_pages')
      .select('slug, title')
      .eq('slug', row.slug as string)
      .single();

    if (data) {
      console.log(`  ✅  ${data.slug} → "${data.title}"`);
    } else {
      console.error(`  ❌  ${row.slug} — not found after upsert`);
    }
  }

  console.log('\nDone.\n');
}

main().catch(e => { console.error(e); process.exit(1); });
