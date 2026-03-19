import type { Metadata } from "next";
import Link from "next/link";
import {
  ObjectDesign,
  ObjSection,
  ObjHighlight,
  ObjQuote,
  ObjCallout,
  ObjTimeline,
  ObjStatGrid,
  ObjRelated,
} from "@/components/ObjectDesign";
import { DataTable } from "@/components/ArticlePage";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "John Carpenter's Toxic Commando — Review Roundup, Launch Day Guide | ObjectWire",
  description:
    "John Carpenter's Toxic Commando launches March 12, 2026 on PS5, Xbox Series X|S, and PC. Developed by Saber Interactive. 74 Metascore, four playable classes, the Swarm Engine, and an original Carpenter synth soundtrack. Full launch day review roundup.",
  keywords: [
    "Toxic Commando",
    "John Carpenter Toxic Commando",
    "Saber Interactive",
    "Toxic Commando review",
    "Toxic Commando metacritic",
    "Toxic Commando PS5",
    "Toxic Commando PC",
    "co-op shooter 2026",
    "zombie game 2026",
    "Swarm Engine",
    "Left 4 Dead spiritual successor",
  ],
  alternates: {
    canonical: "https://www.objectwire.org/video-games/toxic-comando",
  },
  openGraph: {
    title: "John Carpenter's Toxic Commando — Launch Day Review Roundup",
    description:
      "74 Metascore. Gory, gritty, and groovy. Saber Interactive's swarm co-op shooter is out now on PS5, Xbox Series X|S, and PC.",
    type: "article",
    url: "https://www.objectwire.org/video-games/toxic-comando",
    siteName: "ObjectWire",
    section: "Video Games",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toxic Commando Review: John Carpenter's B-Movie Co-op Shooter | ObjectWire",
    description:
      "74 Metascore at launch. Swarm Engine delivers hundreds of Sludge Zombies. Four classes, off-road driving, and a Carpenter synth soundtrack.",
  },
};

export default function ToxicCommandoPage() {
  const timelineEvents = [
    {
      time: "2023",
      title: "Announcement",
      description:
        "Saber Interactive announces John Carpenter's Toxic Commando, the first game to carry Carpenter's name as a creative collaborator.",
    },
    {
      time: "2024",
      title: "Swarm Engine Reveal",
      description:
        "Saber showcases the latest iteration of the Swarm Engine, capable of rendering hundreds of Sludge Zombie enemies simultaneously on-screen.",
    },
    {
      time: "Early 2025",
      title: "Gameplay Trailer",
      description:
        "First extended gameplay footage reveals the four-class system, off-road vehicle mechanics, and John & Cody Carpenter's synth soundtrack.",
    },
    {
      time: "Late 2025",
      title: "MudRunner Mechanics Confirmed",
      description:
        "Developers confirm the 'MudRunner Twist' — players must manage vehicle fuel and winches when traversing toxic sludge terrain while under zombie assault.",
    },
    {
      time: "March 12, 2026",
      title: "Global Launch",
      description:
        "Toxic Commando releases worldwide on PlayStation 5, Xbox Series X|S, and PC. Early reviews land with a 74 Metascore consensus.",
    },
  ];

  return (
    <>
      <NewsArticleSchema
        title="John Carpenter's Toxic Commando — Launch Day Review Roundup & Full Guide"
        description="Toxic Commando launches March 12, 2026. Saber Interactive's swarm co-op shooter earns 74 Metascore. Four classes, Swarm Engine, off-road driving, and a John & Cody Carpenter synth soundtrack."
        publishedTime="2026-03-12T10:00:00Z"
        modifiedTime="2026-03-12T10:00:00Z"
        author="Conan Boyle"
        articleUrl="https://www.objectwire.org/video-games/toxic-comando"
        section="Video Games"
        keywords={[
          "Toxic Commando",
          "John Carpenter",
          "Saber Interactive",
          "co-op shooter",
          "Swarm Engine",
          "Sludge Zombies",
          "video games 2026",
        ]}
      />

      <ObjectDesign
        title="John Carpenter's Toxic Commando"
        subtitle="Saber Interactive's swarm co-op shooter arrives to 'gory, gritty, and groovy' reviews — March 12, 2026."
        category="Video Games"
        categoryColor="green"
        publishDate="March 12, 2026"
        lastUpdated="March 12, 2026"
        trending
        author={{
          name: "Conan Boyle",
          role: "Founding Writer",
          bio: "Conan Boyle is ObjectWire's founding writer, covering gaming, technology, and emerging culture from Austin, Texas.",
        }}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/video-games", label: "Video Games" },
          { href: "/video-games/toxic-comando", label: "Toxic Commando" },
        ]}
        infoBox={{
          title: "John Carpenter's Toxic Commando",
          accentColor: "green",
          items: [
            { label: "Developer", value: "Saber Interactive" },
            { label: "Publisher", value: "Saber Interactive" },
            { label: "Release Date", value: "March 12, 2026" },
            { label: "Platforms", value: "PS5 · Xbox Series X|S · PC" },
            { label: "Genre", value: "Co-op Swarm Shooter" },
            { label: "Players", value: "1–4 (Online Co-op)" },
            { label: "Engine", value: "Swarm Engine (latest iteration)" },
            { label: "Soundtrack", value: "John Carpenter & Cody Carpenter" },
            { label: "Classes", value: "Striker · Medic · Operator · Defender" },
            { label: "Metascore", value: "74 (as of launch day)" },
            { label: "ESRB", value: "M (Mature 17+)" },
            { label: "Notable Mechanic", value: "Off-road vehicle physics (MudRunner-style)" },
          ],
        }}
        tableOfContents={[
          { id: "overview", label: "Overview" },
          { id: "gameplay", label: "Gameplay & Classes" },
          { id: "vehicles", label: "The MudRunner Twist — Vehicle Mechanics" },
          { id: "soundtrack", label: "John Carpenter Soundtrack" },
          { id: "swarm-engine", label: "Swarm Engine Technology" },
          { id: "reviews", label: "Critical Reception" },
          { id: "review-scores", label: "Review Score Roundup", level: 2 },
          { id: "pros-cons", label: "Pros & Cons", level: 2 },
          { id: "development", label: "Development History" },
          { id: "verdict", label: "ObjectWire Verdict" },
        ]}
        tags={[
          "ToxicCommando",
          "JohnCarpenter",
          "SaberInteractive",
          "CoopShooter",
          "VideoGames",
          "PS5",
          "Xbox",
          "PCGaming",
          "ZombieGame",
          "Gaming2026",
        ]}
        relatedLinks={[
          {
            href: "/video-games",
            label: "Video Games Hub",
            description: "ObjectWire's full video games coverage",
            category: "Hub",
          },
          {
            href: "/video-games/game-of-the-year-2026-Clair-Obscur",
            label: "Clair Obscur: Game of the Year 2026",
            description: "Sandfall Interactive's GDC Award sweep — 4 programmers, $10M budget",
            category: "Video Games",
          },
          {
            href: "/video-games/news/outersloth-rejects-ai",
            label: "Outersloth Rejects 100% of AI Pitches",
            description: "The indie fund built on Among Us profits draws a hard line at GDC 2026",
            category: "Video Games",
          },
          {
            href: "/entertainment",
            label: "Entertainment",
            description: "Film, TV, and pop culture — including John Carpenter's broader legacy",
            category: "Entertainment",
          },
        ]}
        externalLinks={[
          { href: "https://www.metacritic.com/game/johns-carpenters-toxic-commando/", label: "Toxic Commando — Metacritic (74)" },
          { href: "https://store.steampowered.com/app/2381790/Toxic_Commando/", label: "Toxic Commando — Steam Store" },
          { href: "https://www.saber.games/", label: "Saber Interactive — Official Site" },
        ]}
      >

        {/* ── KEY STATS ────────────────────────────── */}
        <ObjStatGrid
          accentColor="green"
          columns={4}
          stats={[
            { value: "74", label: "Metascore", description: "Launch day critical consensus" },
            { value: "4", label: "Playable Classes", description: "Striker, Medic, Operator, Defender" },
            { value: "100s", label: "Enemies On-Screen", description: "Swarm Engine simultaneous Sludge Zombies" },
            { value: "Mar 12", label: "Launch Date", description: "2026 — PS5, Xbox Series X|S, PC" },
          ]}
        />

        {/* ── GAMEPLAY VIDEO EMBED ─────────────────── */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              background: "#111",
              padding: "8px 14px",
              borderRadius: "8px 8px 0 0",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ color: "#ef4444", fontSize: "18px" }}>▶</span>
            <span style={{ color: "#fff", fontSize: "12px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Toxic Commando — Official Gameplay
            </span>
          </div>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "0 0 8px 8px" }}>
            <iframe
              src="https://www.youtube.com/embed/c6f4X3YT4LE"
              title="John Carpenter's Toxic Commando — Official Gameplay"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
          </div>
        </div>

        {/* ── OVERVIEW ─────────────────────────────── */}
        <ObjSection id="overview" title="Overview" accentColor="green">
          <p>
            <strong>John Carpenter&apos;s Toxic Commando</strong> is a co-op swarm shooter developed
            and published by{" "}
            <strong>Saber Interactive</strong> — the studio behind{" "}
            <em>World War Z</em> (2019) and <em>Warhammer 40,000: Space Marine 2</em> (2024). The
            game marks the first time director and composer{" "}
            <strong>John Carpenter</strong> has lent his name and creative involvement to a video
            game, contributing to both the world-building and original score.
          </p>
          <p>
            The game released on <strong>March 12, 2026</strong> for PlayStation 5, Xbox Series X|S,
            and PC, arriving to a <strong>74 Metascore</strong> and a critical consensus that
            described it as a &quot;pure B-movie fun&quot; experience — faithful to the grindhouse
            aesthetic Carpenter helped define in the 1970s and 80s.
          </p>
          <p>
            While critics broadly agree it does not &quot;reinvent the wheel,&quot; Toxic Commando
            earns praise for its satisfying gunplay, spectacular on-screen enemy counts, unique
            vehicle survival mechanics, and an original synth-driven soundtrack that critics say
            elevates the game&apos;s signature tension sequences.
          </p>
          <ObjCallout type="insight" title="John Carpenter's First Game">
            Toxic Commando is notable as the first game to carry John Carpenter&apos;s name as a
            credited creative collaborator — bringing the director of <em>Halloween</em>,{" "}
            <em>The Thing</em>, and <em>Escape from New York</em> into interactive entertainment
            for the first time.
          </ObjCallout>
        </ObjSection>

        {/* ── GAMEPLAY & CLASSES ───────────────────── */}
        <ObjSection id="gameplay" title="Gameplay & Classes" accentColor="green">
          <p>
            Toxic Commando is a <strong>1–4 player online co-op</strong> experience in which players
            select from four distinct classes to navigate semi-open maps significantly larger than
            those in Saber&apos;s previous <em>World War Z</em>. Each map funnels squads through
            escalating enemy encounters that culminate in a{" "}
            <strong>&quot;Last Stand&quot;</strong> sequence — a signature wave-defence mode that
            critics highlight as the game&apos;s emotional and mechanical peak.
          </p>

          <DataTable
            headers={["Class", "Role", "Signature Ability", "Recommended For"]}
            rows={[
              ["Striker", "Frontline assault", "Adrenaline Rush — brief speed & damage boost", "Aggressive players, crowd control"],
              ["Medic", "Support / sustain", "Revive Pulse — AoE team heal", "Group play, keeping the squad alive"],
              ["Operator", "Tactical / gadgets", "Sentry Drone — deployable turret", "Mid-range control, chokepoint defence"],
              ["Defender", "Tank / anchor", "Riot Shield — portable mobile cover", "Protecting vehicles and Last Stand zones"],
            ]}
          />

          <ObjHighlight
            type="key-point"
            color="green"
          >
            <strong>The Left 4 Dead Formula:</strong> Critics widely describe Toxic Commando as a &quot;spiritual successor to Left 4 Dead,&quot;
            praising Saber&apos;s understanding of the co-op swarm loop: four roles, escalating
            pressure, and a climactic final stand. The added vehicle layer and grindhouse aesthetic
            are what separate it from its inspirations.
          </ObjHighlight>
        </ObjSection>

        {/* ── VEHICLE MECHANICS ────────────────────── */}
        <ObjSection id="vehicles" title='The "MudRunner Twist" — Vehicle Mechanics' accentColor="green">
          <p>
            One of Toxic Commando&apos;s most discussed design choices is its incorporation of
            off-road driving physics drawn directly from Saber&apos;s <em>MudRunner</em> and
            <em>SnowRunner</em> franchises. Armoured vehicles are not simple fast-travel tools —
            they are <strong>vital mobile fortresses</strong> that require active teamwork to
            maintain.
          </p>
          <p>
            Players must:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem", lineHeight: "1.9" }}>
            <li>Manage <strong>fuel levels</strong> across toxic sludge terrain</li>
            <li>Deploy <strong>winches</strong> to recover vehicles that bog down in sludge</li>
            <li>Coordinate between squad members — some manning guns, others managing terrain recovery</li>
            <li>Balance the impulse to accelerate through hordes vs. the risk of getting stuck</li>
          </ul>
          <p>
            Critics have described this as the game&apos;s most innovative element — transforming
            vehicles from typical co-op shooter conveniences into high-stakes survival puzzles.
          </p>
          <ObjHighlight
            type="stat"
            color="orange"
          >
            &quot;Toxic Commando&apos;s vehicles aren&apos;t just for transport; they are vital mobile
            fortresses that require teamwork to keep moving through treacherous terrain.&quot;
            — PlayStation Universe
          </ObjHighlight>
        </ObjSection>

        {/* ── SOUNDTRACK ───────────────────────────── */}
        <ObjSection id="soundtrack" title="John Carpenter Soundtrack" accentColor="green">
          <p>
            The original score was composed by <strong>John Carpenter</strong> and his son{" "}
            <strong>Cody Carpenter</strong> — extending the father-son musical partnership that has
            defined Carpenter&apos;s work since <em>Halloween</em> (1978). The soundtrack is
            entirely synth-driven, echoing the minimalist electronic compositions that made
            Carpenter&apos;s film scores iconic.
          </p>
          <p>
            Critics consistently highlight the soundtrack as one of the game&apos;s strongest
            assets, particularly during the &quot;Last Stand&quot; sequences, where the music builds
            tension in a way that reinforces the 80s grindhouse atmosphere.
          </p>
          <ObjQuote source="TheGamer">
            The soundtrack sounds like it escaped from something covered in dust in your basement — and that is entirely the point. It is the best thing in the game.
          </ObjQuote>
        </ObjSection>

        {/* ── SWARM ENGINE ─────────────────────────── */}
        <ObjSection id="swarm-engine" title="Swarm Engine Technology" accentColor="green">
          <p>
            Toxic Commando runs on the latest iteration of <strong>Saber&apos;s proprietary Swarm Engine</strong> — purpose-built for rendering massive enemy counts. The engine, first deployed in{" "}
            <em>World War Z</em>, has been significantly upgraded for this title, enabling{" "}
            <strong>hundreds of &quot;Sludge Zombies&quot;</strong> to be rendered simultaneously
            on-screen across all three platforms.
          </p>
          <p>
            The PS5 version takes advantage of the{" "}
            <strong>DualSense controller&apos;s adaptive triggers</strong>, with reviewers noting
            that the haptic feedback meaningfully reinforces the &quot;meaty&quot; gunplay feel
            when firing into large crowds — each weapon type delivering a distinct resistance profile.
          </p>

          <DataTable
            headers={["Platform", "Notable Tech Feature", "Swarm Count", "Controller Feature"]}
            rows={[
              ["PlayStation 5", "DualSense adaptive triggers + haptics", "Hundreds on-screen", "Per-weapon trigger resistance"],
              ["Xbox Series X|S", "Xbox Velocity Architecture streaming", "Hundreds on-screen", "Standard rumble"],
              ["PC", "Scalable Swarm Engine settings", "Configurable — hardware dependent", "Mouse/keyboard + gamepad support"],
            ]}
          />
        </ObjSection>

        {/* ── CRITICAL RECEPTION ───────────────────── */}
        <ObjSection id="reviews" title="Critical Reception" accentColor="green">
          <p>
            Toxic Commando launched on March 12, 2026, to a{" "}
            <strong>Metacritic score of 74</strong>. The critical consensus settles on the phrase
            &quot;pure B-movie fun&quot; — reviewers broadly agreeing that the game delivers exactly
            the experience it promises: chaotic co-op spectacle wrapped in a grindhouse aesthetic,
            without overreaching narrative ambition.
          </p>
          <ObjQuote source="TheGamer">
            Toxic Commando focuses on delivering a very specific pleasure. Four buddies, a towering horde of undead, and a soundtrack that sounds like it escaped from something covered in dust in your basement.
          </ObjQuote>

          <div id="review-scores">
            <DataTable
              headers={["Publication", "Score", "Verdict"]}
              rows={[
                ["MKAU Gaming", "9 / 10", "\"Chaotic, thrilling action co-op... visually appealing combat.\""],
                ["PlayStation Universe", "8 / 10", "\"Pure co-op chaos with confidence and flair.\""],
                ["TechRadar", "4 / 5", "\"A satisfying spiritual successor to World War Z.\""],
                ["GamingTrend", "70 / 100", "\"Goofy, kitschy story — but the gameplay loop holds up.\""],
                ["Metacritic Aggregate", "74 / 100", "\"Generally favorable co-op swarm shooter\" — launch day consensus"],
              ]}
            />
          </div>
        </ObjSection>

        {/* ── PROS & CONS ──────────────────────────── */}
        <ObjSection id="pros-cons" title="Pros & Cons" accentColor="green">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "8px", padding: "1.25rem" }}>
              <h4 style={{ fontWeight: 700, color: "#166534", marginBottom: "0.75rem", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                ✓ What Works
              </h4>
              <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.9", color: "#166534", fontSize: "0.9rem" }}>
                <li><strong>Tactical Driving</strong> — Vehicles are vital mobile fortresses requiring real teamwork</li>
                <li><strong>Satisfying Gunplay</strong> — Weapons feel &quot;meaty&quot; and impactful; PS5 DualSense fully utilised</li>
                <li><strong>80s Vibe</strong> — Character quips, retro film grain, and buddy-movie aesthetic land consistently</li>
                <li><strong>Swarm Scale</strong> — Hundreds of enemies on-screen creates genuine spectacle</li>
                <li><strong>Carpenter Soundtrack</strong> — Synth score elevates Last Stand tension meaningfully</li>
              </ul>
            </div>
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "8px", padding: "1.25rem" }}>
              <h4 style={{ fontWeight: 700, color: "#991b1b", marginBottom: "0.75rem", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                ✗ What Doesn&apos;t
              </h4>
              <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.9", color: "#991b1b", fontSize: "0.9rem" }}>
                <li><strong>Technical Roughness</strong> — Some reviewers noted underwhelming explosion effects</li>
                <li><strong>Dialogue</strong> — Character quips described as &quot;grating&quot; by several outlets</li>
                <li><strong>Shallow Story</strong> — Narrative is a thin excuse to move between Sludge God boss fights</li>
                <li><strong>Solo Play</strong> — Without friends, bots make the experience &quot;boring and inconsistent&quot;</li>
              </ul>
            </div>
          </div>
          <ObjCallout type="warning" title="Best Played With Friends">
            Critics are unanimous: Toxic Commando is a <strong>co-op game first</strong>. While
            AI bots are available for solo or partial-squad runs, the experience degrades
            significantly without human teammates. Plan your squad before launch.
          </ObjCallout>
        </ObjSection>

        {/* ── DEVELOPMENT HISTORY ──────────────────── */}
        <ObjSection id="development" title="Development History" accentColor="green">
          <p>
            Saber Interactive leveraged its accumulated co-op swarm expertise — from{" "}
            <em>World War Z</em>&apos;s 15 million players to <em>Space Marine 2</em>&apos;s
            critical success in 2024 — to build Toxic Commando as an evolution rather than a
            replication of the formula. The MudRunner vehicle physics integration was cited by
            developers as the project&apos;s most technically ambitious element.
          </p>
          <ObjTimeline accentColor="green" events={timelineEvents} />
        </ObjSection>

        {/* ── OBJECTWIRE VERDICT ───────────────────── */}
        <ObjSection id="verdict" title="ObjectWire Verdict" accentColor="green">
          <p>
            Toxic Commando does exactly what it says on the label: it delivers a loud, chaotic,
            grindhouse co-op shooter that would feel at home playing in a sticky-floored drive-in
            circa 1982. The Carpenter soundtrack is genuinely excellent. The Swarm Engine remains
            the best in the business for enemy density. The MudRunner vehicle layer adds genuine
            depth that separates this from the dozen Left 4 Dead imitators that have come and gone.
          </p>
          <p>
            The weak point is everything outside the core loop — the story is tissue-thin, the
            dialogue veers from charming to irritating, and playing solo is a noticeably inferior
            experience. But if you have three friends and a love of 80s horror films, this is
            the co-op game of March 2026.
          </p>
          <ObjHighlight
            type="stat"
            color="green"
          >
            <span style={{ fontSize: "2rem", fontWeight: 900 }}>7.5 / 10 — ObjectWire Score</span>
            <br />
            <em>Best experienced with a full four-player squad. Solo players should look elsewhere.</em>
          </ObjHighlight>
        </ObjSection>

      </ObjectDesign>
    </>
  );
}
