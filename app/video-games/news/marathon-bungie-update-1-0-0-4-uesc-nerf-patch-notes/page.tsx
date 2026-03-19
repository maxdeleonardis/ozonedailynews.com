import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/video-games/news/marathon-bungie-update-1-0-0-4-uesc-nerf-patch-notes';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'Marathon Update 1.0.0.4 — Bungie Nerfs UESC AI, Thermal Scopes, & More | ObjectWire',
  description:
    'Bungie has deployed Marathon Update 1.0.0.4 on March 11, 2026. The first major balance pass reduces UESC enemy health by 10–15%, cuts boss shield HP by 25%, nerfs thermal scope range from 180m to 100m, and adds Med Cabinets and Munitions Crates to the Perimeter map. Full patch notes breakdown.',
  keywords: [
    'Marathon Update 1.0.0.4 patch notes',
    'Marathon Bungie UESC nerf March 2026',
    'Marathon UESC health reduction boss shield nerf',
    'Marathon thermal scope nerf range cap',
    'Marathon 1.0.0.4 balance patch',
    'Marathon Perimeter med cabinets munitions crates',
    'Marathon Traxus Contract UESC Commander nerf',
    'Marathon Broken Wing Pinwheel Outpost disabled',
    'Marathon extraction shooter patch notes 2026',
    'Bungie Marathon solo balance update',
    'Marathon sponsored kits MIDA CyberAcme Arachne',
    'Marathon Rook backpack bug fix',
  ],
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: 'Marathon Update 1.0.0.4: UESC Nerfed, Thermal Nerfed, Perimeter Buffed',
    description:
      'Bungie\'s first major balance pass for Marathon (2026) reduces UESC health by 10–15%, slashes boss shield HP by 25%, and caps thermal scope tracking at 100m. Full breakdown.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T10:00:00Z',
    modifiedTime: '2026-03-12T10:00:00Z',
    section: 'Video Games',
    tags: ['Marathon', 'Bungie', 'Patch Notes', 'UESC', 'Extraction Shooter', 'Video Games', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marathon 1.0.0.4: Bungie Nerfs UESC Bullet Sponges & Thermal Scopes',
    description:
      'UESC standard enemies: -10–15% HP. Boss shields: -25%. Thermal tracking: 180m → 100m. Perimeter gets more Med Cabinets. Full patch notes breakdown.',
  },
};

export default function MarathonUpdate1004Page() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Marathon Update 1.0.0.4 — Bungie Nerfs UESC AI, Thermal Scopes & Perimeter Map"
        description="Bungie deploys Marathon's first major balance patch on March 11, 2026. UESC enemy health reduced 10–15%, boss shields cut 25%, thermal scope range capped at 100m, and Perimeter map gets more sustain items. Full patch notes breakdown."
        author="Conan Boyle"
        authorUrl="https://www.objectwire.org/authors/conan-boyle"
        publishedTime="2026-03-12T10:00:00Z"
        modifiedTime="2026-03-12T10:00:00Z"
        articleUrl={CANONICAL}
        section="Video Games"
        keywords={[
          'Marathon Update 1.0.0.4',
          'Bungie UESC nerf',
          'Marathon patch notes',
          'thermal scope nerf',
          'Marathon solo balance',
          'extraction shooter 2026',
        ]}
      />

      <Breadcrumb
        items={[
          { name: 'Home', item: 'https://www.objectwire.org' },
          { name: 'Video Games', item: 'https://www.objectwire.org/video-games' },
          { name: 'News', item: 'https://www.objectwire.org/video-games/news' },
          { name: 'Marathon Update 1.0.0.4', item: CANONICAL },
        ]}
      />

      <NewsArticle
        title="Bungie Nerfs UESC AI to Ease the 'Solo Squeeze' — Marathon Update 1.0.0.4"
        subtitle="The first major balance pass for Marathon (2026) reduces enemy durability, caps thermal optics range, and injects more sustain into Perimeter — all in response to player feedback about 'bullet sponge' AI forces."
        category="Marathon"
        categoryColor="blue"
        topicTag="gaming"
        publishDate="March 12, 2026"
        readTime="5 min read"
        author={{
          name: 'Conan Boyle',
          role: 'Founding Writer',
          authorSlug: 'conan-boyle',
          bio: 'Conan Boyle is ObjectWire\'s founding writer, covering gaming, technology, and emerging culture from Austin, Texas.',
        }}
        tags={['Marathon', 'Bungie', 'PatchNotes', 'UESC', 'ExtractionShooter', 'Gaming2026']}
        url={SLUG}
        trending
      >

        {/* ── INTRO ─────────────────────────────────── */}
        <p>
          Bungie has deployed <strong>Update 1.0.0.4</strong> for Marathon (2026), going live on{' '}
          <strong>March 11, 2026</strong>. The patch is the game&apos;s first meaningful balance
          pass since launch, targeting the punishing difficulty of{' '}
          <strong>UESC (United Earth Space Council)</strong> AI forces — a pain point that players
          running solo had been loudly flagging since day one.
        </p>
        <p>
          The core complaint was simple: UESC enemies were &quot;bullet sponges.&quot; Players were
          burning through ammo and meds just to survive AI encounters, arriving at PvP fights
          under-resourced and at a severe disadvantage. Bungie has now addressed this directly with
          the first wave of what the developer is calling &quot;resource burden&quot; reductions.
        </p>

        {/* ── UESC NERF ─────────────────────────────── */}
        <h2 id="uesc-nerf">Balancing the "UESC Bite"</h2>
        <p>
          The headlining change in 1.0.0.4 is a broad reduction in enemy durability across the
          UESC faction. The numbers are meaningful without gutting the AI&apos;s ability to
          threaten players:
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#1e40af', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Enemy Type</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Change</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Developer Note</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Standard UESC Combatants', 'Total health pools reduced ~10–15%', 'Cited "resource burden" — players depleting ammo on unavoidable patrol skirmishes'],
                ['UESC Boss Units', 'Shield HP reduced by 25%', 'Targeted specifically at extended boss fights draining supplies before PvP'],
                ['UESC Commander', 'Encounter difficulty tuned down', 'Was a major solo roadblock on the Traxus Contract'],
              ].map(([type, change, note], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f8fafc' : '#fff', borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 600 }}>{type}</td>
                  <td style={{ padding: '10px 14px', color: '#2563eb' }}>{change}</td>
                  <td style={{ padding: '10px 14px', color: '#475569', fontSize: '0.85rem' }}>{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <HighlightBox type="quote" color="blue">
          &quot;The goal here is to allow your bullets and meds to go further without reducing too much
          of the UESC&apos;s bite. We see the feedback loud and clear that players appreciate the
          friction... and we have no plans to change that direction.&quot;
          <br /><br />
          <strong>— Bungie Developer Note, Update 1.0.0.4</strong>
        </HighlightBox>

        {/* ── ECONOMY & SUSTAIN ─────────────────────── */}
        <h2 id="economy">Economy & Survival Boosts</h2>
        <p>
          Alongside enemy nerfs, Bungie has directly addressed the resource loop on{' '}
          <strong>Perimeter</strong> — the game&apos;s beginner-friendly map — by increasing the
          density of consumable spawns:
        </p>
        <ul>
          <li>
            <strong>Med Cabinets</strong> and <strong>Munitions Crates</strong> have been added to
            more locations across the Perimeter map
          </li>
          <li>
            <strong>Sponsored Kits</strong> from <em>MIDA</em>, <em>CyberAcme</em>, and{' '}
            <em>Arachne</em> now include more starting ammunition — preventing &quot;Zero-to-Hero&quot;
            runs from collapsing at the first patrol encounter
          </li>
        </ul>

        {/* ── THERMAL NERF ──────────────────────────── */}
        <h2 id="thermal">The Thermal Scope Nerf</h2>
        <p>
          On the PvP side, long-range thermal optics had become what the community termed
          &quot;essential&quot; for high-level play. The scopes&apos; ability to highlight
          heat-signature targets was trivialising long-range engagements and creating a
          &quot;must-equip&quot; meta situation. Update 1.0.0.4 hits thermal in two directions:
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#0f172a', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Thermal Change</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Before</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>After</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Visual clarity on high-heat targets', 'Full highlight — clear silhouette at range', 'Reduced visual clarity through thermal lens'],
                ['Sniper thermal tracking range', '180m max highlight distance', '100m max highlight distance (−44%)'],
                ['All-class thermal range cap', 'Varied per class, no hard cap', 'Hard range caps applied across all classes'],
              ].map(([change, before, after], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f8fafc' : '#fff', borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 600 }}>{change}</td>
                  <td style={{ padding: '10px 14px', color: '#dc2626' }}>{before}</td>
                  <td style={{ padding: '10px 14px', color: '#16a34a' }}>{after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <HighlightBox type="key-point" color="orange">
          Sniper class players are the hardest hit — thermal tracking range more than halved, from
          180m down to 100m. Bungie has not indicated this was targeted at any specific community
          complaint beyond general &quot;thermal essentialness.&quot;
        </HighlightBox>

        {/* ── QOL & MAP CHANGES ─────────────────────── */}
        <h2 id="qol">Quality of Life & Map Changes</h2>

        <h3>The &quot;Broken Wing&quot; Closure</h3>
        <p>
          Bungie has <strong>temporarily disabled</strong> the &quot;Broken Wing&quot; entrance
          into the <strong>Pinwheel</strong> on the <strong>Outpost</strong> map. The developers
          stated it &quot;trivialized&quot; access to the high-tier loot zone and are reworking
          the approach to better match the risk/reward profile of that area. No timeline has been
          given for its re-enabling.
        </p>

        <h3>Objective Visibility</h3>
        <p>
          Nav points for contracts now appear at <strong>20m</strong> (up from 10m), making it
          easier to locate objectives in Marathon&apos;s often-confusing neon-soaked environments —
          a consistent early-hours complaint from new players.
        </p>

        <h3>Rook Combat Shell Fixes</h3>
        <p>
          The Rook combat shell received several bug fixes in 1.0.0.4, the most significant being
          an issue where <strong>backpacks would vanish upon exfiltration</strong> — a loss-of-loot
          bug that had been reported repeatedly in the days following launch.
        </p>

        {/* ── FULL PATCH SUMMARY ────────────────────── */}
        <h2 id="summary">Full Patch Summary</h2>

        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#1e293b', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Category</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Change</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['AI — UESC Standard', 'Health pools reduced ~10–15%'],
                ['AI — UESC Boss Shields', 'Shield HP reduced by 25%'],
                ['AI — UESC Commander', 'Traxus Contract encounter difficulty tuned down'],
                ['Map — Perimeter', 'More Med Cabinets and Munitions Crates added'],
                ['Economy — Sponsored Kits', 'MIDA / CyberAcme / Arachne starter ammo increased'],
                ['PvP — Thermal Scopes', 'Visual clarity reduced; hard range caps applied to all classes'],
                ['PvP — Sniper Thermal', 'Tracking range 180m → 100m'],
                ['Map — Outpost', '"Broken Wing" entrance to Pinwheel temporarily disabled'],
                ['UX — Contracts', 'Nav point visibility increased: 10m → 20m'],
                ['Rook Shell', 'Bug fix: backpack no longer vanishes on exfiltration'],
              ].map(([cat, change], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f8fafc' : '#fff', borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 600, color: '#1e40af' }}>{cat}</td>
                  <td style={{ padding: '10px 14px' }}>{change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── CONTEXT ───────────────────────────────── */}
        <h2 id="context">Context: A Noisy Launch Week</h2>
        <p>
          Marathon launched on <strong>March 5, 2026</strong> to a player base that was vocal about
          the game&apos;s friction. The extraction shooter format — where death means losing
          everything you&apos;re carrying — was compounded by AI forces that many felt were tuned
          too high for solo runs. Bungie explicitly said they &quot;have no plans to change
          that direction&quot; on the core friction, but that the UESC&apos;s ability to drain
          resources before PvP encounters was unintentional collateral difficulty.
        </p>
        <p>
          This is the first of what Bungie is framing as ongoing &quot;balance passes.&quot;
          The thermal nerf and Broken Wing closure suggest the studio is willing to move quickly
          on community-driven meta concerns — a signal to the extraction shooter audience that
          post-launch responsiveness is a priority.
        </p>

        <HighlightBox type="stat" color="blue">
          Update 1.0.0.4 is the <strong>first major balance patch</strong> for Marathon (2026),
          arriving <strong>6 days after the March 5 global launch</strong>. Bungie has not
          confirmed a cadence for future balance passes.
        </HighlightBox>

        {/* ── RELATED ───────────────────────────────── */}
        <h2 id="related">More Marathon & Video Game Coverage</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {[
            {
              href: '/video-games/news/marathon-server-slam-steam-concurrent-players-peak-drop-march-2026',
              label: 'Marathon Server Slam: 143K Steam Peak, 50%+ Drop',
              desc: 'The beta peaked at 143,621 concurrent players on Steam — then shed half within 24 hours.',
              color: '#1e40af',
            },
            {
              href: '/video-games/game-of-the-year-2026-Clair-Obscur',
              label: 'Clair Obscur: Game of the Year 2026',
              desc: 'Sandfall Interactive\'s GDC sweep — 4 programmers, $10M budget, every major award.',
              color: '#7c3aed',
            },
            {
              href: '/video-games/news/outersloth-rejects-ai',
              label: 'Outersloth Rejects 100% of AI Pitches',
              desc: 'The indie fund backed by Among Us profits draws a hard line at GDC 2026.',
              color: '#16a34a',
            },
            {
              href: '/video-games',
              label: 'Video Games Hub',
              desc: 'ObjectWire\'s full video games coverage — news, reviews, and features.',
              color: '#0f172a',
            },
          ].map(({ href, label, desc, color }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: 'block',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div style={{ background: color, padding: '8px 12px' }}>
                <span style={{ color: '#fff', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Video Games
                </span>
              </div>
              <div style={{ padding: '12px' }}>
                <p style={{ fontWeight: 700, marginBottom: '4px', fontSize: '0.9rem' }}>{label}</p>
                <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.5 }}>{desc}</p>
              </div>
            </Link>
          ))}
        </div>

      </NewsArticle>
    </SEOWrapper>
  );
}
