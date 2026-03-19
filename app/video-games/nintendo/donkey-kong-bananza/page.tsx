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
} from "@/components/ObjectDesign";
import { DataTable } from "@/components/ArticlePage";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "Donkey Kong Bananza — GDC 2026 Tech Reveal: 347M Voxels, Switch 2 Destruction Engine | ObjectWire",
  description:
    "Nintendo's GDC 2026 session revealed Donkey Kong Bananza's 347,070,464 individually destructible voxels per level, dynamic resolution system, and restore mechanic. Producer Kenta Motokura and engineer Tatsuya Kurihara detailed how voxel tech evolved from Super Mario Odyssey's snow to Switch 2's breakable worlds.",
  keywords: [
    "Donkey Kong Bananza GDC 2026",
    "Donkey Kong Bananza voxels 347 million",
    "Donkey Kong Bananza destructible world Switch 2",
    "Kenta Motokura Tatsuya Kurihara GDC",
    "Nintendo Switch 2 voxel engine",
    "Donkey Kong Bananza technical breakdown",
    "Donkey Kong Bananza 60fps voxel",
    "Donkey Kong Bananza restore mechanic",
    "Super Mario Odyssey voxel snow origin",
    "Nintendo GDC 2026 Moscone Center",
    "Donkey Kong Bananza canyon layer",
    "Nintendo destructible world game design",
  ],
  alternates: {
    canonical: "https://www.objectwire.org/video-games/nintendo/donkey-kong-bananza",
  },
  openGraph: {
    title: "Donkey Kong Bananza: 347M Voxels Per Level — Nintendo's GDC 2026 Tech Reveal",
    description:
      "Nintendo's Kenta Motokura and Tatsuya Kurihara revealed at GDC 2026 that each Bananza level contains 347,070,464 individually destructible voxels. The tech traces back to Mario Odyssey snow prototypes and was moved from Switch 1 to Switch 2 because the old hardware couldn't handle it.",
    type: "article",
    url: "https://www.objectwire.org/video-games/nintendo/donkey-kong-bananza",
    siteName: "ObjectWire",
    publishedTime: "2026-03-12T10:00:00Z",
    modifiedTime: "2026-03-12T10:00:00Z",
    section: "Video Games",
    tags: ["Donkey Kong Bananza", "Nintendo", "Switch 2", "GDC 2026", "Voxels", "Video Games"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donkey Kong Bananza: 347,070,464 Destructible Voxels Per Level — GDC 2026",
    description:
      "Each level has 347M individually destructible voxels. Tech originated in Mario Odyssey snow drifts. Moved from Switch 1 to Switch 2 because the old hardware couldn't cope. Full GDC breakdown.",
  },
};

export default function DonkeyKongBananzaPage() {
  const timeline = [
    {
      time: "2017",
      title: "Super Mario Odyssey — Voxel Seeds",
      description:
        "Engineer Tatsuya Kurihara first prototypes voxel tech for Super Mario Odyssey's Snow Kingdom drifts and the 'cheese blocks' in Luncheon Kingdom — small-scale experiments that plant the idea.",
    },
    {
      time: "Post-Odyssey",
      title: "The 'Goomba with Arms' Prototype",
      description:
        "Kurihara experiments with terrain that can be ripped off and thrown, attaching arms to a Goomba model as a test vehicle. The mechanic's 'natural fit' with a large primate becomes immediately obvious.",
    },
    {
      time: "Early Development",
      title: "Original Switch — Project Begins",
      description:
        "Donkey Kong Bananza enters development targeting the original Nintendo Switch. The voxel destruction system is scoped to what the hardware can support.",
    },
    {
      time: "Switch 2 Pivot",
      title: "Hardware Upgrade — 'Limitless' Becomes Possible",
      description:
        "The project is moved to Nintendo Switch 2. The team cite the original Switch's inability to handle the voxel density required to make destruction feel 'limitless' as the primary driver.",
    },
    {
      time: "March 11, 2026",
      title: "GDC 2026 — 'Satisfying Destruction' Session",
      description:
        "Producer Kenta Motokura and Software Engineer Tatsuya Kurihara present to a standing-room audience at Moscone Center. The headline figure — 347,070,464 destructible voxels per level — goes immediately viral.",
    },
  ];

  return (
    <>
      <NewsArticleSchema
        title="Donkey Kong Bananza — GDC 2026 Tech Reveal: 347 Million Voxels, Switch 2 Destruction Engine"
        description="Nintendo's GDC 2026 session revealed Donkey Kong Bananza contains 347,070,464 individually destructible voxels per level, a dynamic resolution system to maintain 60fps on Switch 2, and a seamless restore mechanic. Full technical breakdown."
        publishedTime="2026-03-12T10:00:00Z"
        modifiedTime="2026-03-12T10:00:00Z"
        author="Conan Boyle"
        articleUrl="https://www.objectwire.org/video-games/nintendo/donkey-kong-bananza"
        section="Video Games"
        keywords={[
          "Donkey Kong Bananza",
          "GDC 2026",
          "Nintendo Switch 2",
          "voxels",
          "destructible world",
          "Kenta Motokura",
          "Tatsuya Kurihara",
        ]}
      />

      <ObjectDesign
        title="Donkey Kong Bananza — GDC 2026 Tech Reveal"
        subtitle="Nintendo's Kenta Motokura and Tatsuya Kurihara pull back the curtain on 347,070,464 individually destructible voxels per level — and how Switch 2 made it possible."
        category="GDC 2026"
        categoryColor="orange"
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
          { href: "/video-games/nintendo", label: "Nintendo" },
          { href: "/video-games/nintendo/donkey-kong-bananza", label: "Donkey Kong Bananza" },
        ]}
        infoBox={{
          title: "Donkey Kong Bananza",
          accentColor: "orange",
          items: [
            { label: "Developer", value: "Nintendo EPD" },
            { label: "Publisher", value: "Nintendo" },
            { label: "Platform", value: "Nintendo Switch 2 (exclusive)" },
            { label: "Producer", value: "Kenta Motokura" },
            { label: "Lead Engineer", value: "Tatsuya Kurihara" },
            { label: "Voxels per level", value: "347,070,464 (average)" },
            { label: "Destructible levels", value: "17 'nearly destructible' levels" },
            { label: "Target framerate", value: "60fps (dynamic resolution)" },
            { label: "Voxel properties", value: "Density · Wetness · Destructibility" },
            { label: "Voxel origin", value: "Super Mario Odyssey snow / cheese (2017)" },
            { label: "GDC Session", value: "March 11, 2026 — Moscone Center, San Francisco" },
          ],
        }}
        tableOfContents={[
          { id: "overview", label: "Overview" },
          { id: "philosophy", label: "Design Philosophy — 'Beautiful to Destroy'" },
          { id: "voxels", label: "The Voxel System" },
          { id: "performance", label: "Performance — 60fps on Switch 2" },
          { id: "restore", label: "The Restore Mechanic" },
          { id: "origins", label: "From Mario Odyssey to Donkey Kong" },
          { id: "switch2-pivot", label: "The Switch 2 Pivot" },
          { id: "canyon", label: "The Canyon Layer" },
          { id: "development", label: "Development Timeline" },
        ]}
        tags={[
          "DonkeyKongBananza",
          "Nintendo",
          "Switch2",
          "GDC2026",
          "Voxels",
          "GameDesign",
          "VideoGames",
          "Gaming2026",
        ]}
        relatedLinks={[
          {
            href: "/video-games/nintendo",
            label: "Nintendo Hub",
            description: "Full ObjectWire coverage of Nintendo and Switch 2",
            category: "Hub",
          },
          {
            href: "/video-games/nintendo/pokemon-pokopia-2-million-copies-4-days-switch-2",
            label: "Pokémon Pokopia: 2.2M Sold in 4 Days",
            description: "Switch 2's first evergreen mega-hit shatters spin-off sales records",
            category: "Nintendo",
          },
          {
            href: "/video-games/switch2/pokemon-pokopia",
            label: "Pokémon Pokopia — Review Guide",
            description: "93 OpenCritic — the highest-reviewed Pokémon game ever",
            category: "Nintendo",
          },
          {
            href: "/events/gdc-2026",
            label: "GDC 2026 Hub",
            description: "ObjectWire's full Game Developers Conference 2026 coverage",
            category: "Events",
          },
          {
            href: "/video-games",
            label: "Video Games Hub",
            description: "ObjectWire's full video games coverage",
            category: "Hub",
          },
        ]}
        externalLinks={[
          { href: "https://gdconf.com/", label: "Game Developers Conference — Official Site" },
          { href: "https://www.nintendo.com/", label: "Nintendo — Official Site" },
        ]}
      >

        {/* ── KEY STATS ────────────────────────────── */}
        <ObjStatGrid
          accentColor="orange"
          columns={4}
          stats={[
            { value: "347M", label: "Voxels per Level", description: "347,070,464 individually destructible" },
            { value: "17", label: "Destructible Levels", description: "'Nearly destructible' by design" },
            { value: "60fps", label: "Target Framerate", description: "Switch 2 with dynamic resolution" },
            { value: "2017", label: "Tech Origin", description: "Mario Odyssey snow prototypes" },
          ]}
        />

        {/* ── OVERVIEW ─────────────────────────────── */}
        <ObjSection id="overview" title="Overview" accentColor="orange">
          <p>
            At a standing-room-only session during the{" "}
            <Link href="/events/gdc-2026" className="text-orange-600 hover:underline">
              Game Developers Conference (GDC) 2026
            </Link>{" "}
            on <strong>March 11, 2026</strong>, Nintendo pulled back the curtain on the technical
            architecture of <strong>Donkey Kong Bananza</strong> — the upcoming Nintendo Switch 2
            exclusive developed by Nintendo EPD.
          </p>
          <p>
            Producer <strong>Kenta Motokura</strong> (previously director of <em>Super Mario Odyssey</em>)
            and Software Engineer <strong>Tatsuya Kurihara</strong> presented the session titled
            &quot;Satisfying Destruction&quot; to a packed Moscone Center audience in San Francisco.
            The talk detailed how Nintendo engineered a world that is simultaneously high-fidelity
            and almost entirely breakable — and why the original Switch couldn&apos;t handle it.
          </p>
          <p>
            The headline figure: a single level in Bananza contains an average of{" "}
            <strong>347,070,464 individually destructible voxels</strong> — each carrying its own
            physics properties of density, wetness, and destructibility. The number went immediately
            viral following the session.
          </p>
          <ObjCallout type="breaking" title="Standing Room Only at GDC 2026">
            The &quot;Satisfying Destruction&quot; session was one of the most-attended developer
            talks at GDC 2026, with overflow crowds gathering outside the Moscone Center room.
            Nintendo has not yet announced a release date for Donkey Kong Bananza.
          </ObjCallout>
        </ObjSection>

        {/* ── PHILOSOPHY ───────────────────────────── */}
        <ObjSection id="philosophy" title='Design Philosophy — "It is More Fun to Destroy That Which is Beautiful"' accentColor="orange">
          <p>
            The core design thesis of Donkey Kong Bananza — articulated by Motokura at the session —
            is that destruction only feels meaningful when the thing being destroyed has value.
            The team spent significant development time on making the initial state of each environment
            visually compelling, specifically so that the act of smashing through it carries weight.
          </p>
          <ObjQuote
            source="Kenta Motokura, Producer — GDC 2026"
            sourceRole="Nintendo EPD"
          >
            It is more fun to destroy that which is beautiful. If the environment looks cheap, the
            destruction feels cheap. We had to make players feel something before Donkey Kong&apos;s
            fist ever touches the ground.
          </ObjQuote>
          <p>
            This philosophy manifests in the game&apos;s 17 &quot;nearly destructible&quot; levels —
            a term Motokura used deliberately to acknowledge that not every surface in the game can
            be broken, but that the proportion of breakable vs. unbreakable geometry was engineered
            to feel &quot;limitless&quot; from the player&apos;s perspective.
          </p>
        </ObjSection>

        {/* ── VOXEL SYSTEM ─────────────────────────── */}
        <ObjSection id="voxels" title="The Voxel System" accentColor="orange">
          <p>
            A <strong>voxel</strong> (volumetric pixel) is the 3D equivalent of a 2D pixel — a
            discrete unit of space that can carry its own data. In most games, geometry is built
            from polygons; Donkey Kong Bananza uses voxels for its destructible terrain layer,
            giving each unit independent physical properties.
          </p>

          <DataTable
            headers={["Voxel Property", "What It Controls", "Gameplay Impact"]}
            rows={[
              ["Density", "How much force is required to break the voxel", "Harder rock requires more DK power; soft mud crumbles instantly"],
              ["Wetness", "Surface behaviour when struck or traversed", "Wet terrain shifts, splashes, and sticks differently to dry"],
              ["Destructibility", "Whether the voxel can be broken at all", "Critical path geometry can be flagged as indestructible"],
            ]}
          />

          <ObjHighlight type="stat" color="orange">
            <strong>347,070,464</strong> — the average number of individually destructible voxels
            in a single Donkey Kong Bananza level. Each one carries its own density, wetness, and
            destructibility value, simulated in real time at 60fps on Switch 2.
          </ObjHighlight>

          <p>
            Kurihara explained that the voxel grid is layered beneath the game&apos;s high-resolution
            surface geometry. Visually, the world looks like a traditional polygon-based game;
            the voxel destruction system activates underneath whenever Donkey Kong interacts with
            terrain — punching, stomping, grabbing, or throwing a section of the environment.
          </p>
        </ObjSection>

        {/* ── PERFORMANCE ──────────────────────────── */}
        <ObjSection id="performance" title="Performance — 60fps on Nintendo Switch 2" accentColor="orange">
          <p>
            Maintaining a stable <strong>60 frames per second</strong> with 347 million active
            voxels was described by Kurihara as the team&apos;s primary engineering challenge. The
            solution is a <strong>dynamic resolution system</strong> specifically designed for
            voxels:
          </p>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.9", marginBottom: "1rem" }}>
            <li>
              Voxels <strong>close to the player</strong> and in motion are rendered at full
              resolution with complete physics simulation
            </li>
            <li>
              Voxels at <strong>mid-range distance</strong> are downscaled with simplified physics
            </li>
            <li>
              Voxels <strong>far from the player</strong> or in static, undisturbed areas are held
              at minimal resolution with no active simulation
            </li>
            <li>
              When a distant voxel zone is disturbed — by a thrown boulder, for example — the
              engine dynamically upgrades its resolution in real time
            </li>
          </ul>
          <ObjCallout type="insight" title="Why Switch 2 Was Required">
            Kurihara confirmed the voxel system was retargeted from Switch 1 to Switch 2 because
            the original hardware&apos;s memory bandwidth and CPU threading could not sustain the
            concurrent simulation of 300M+ voxels at a playable framerate. The Switch 2&apos;s
            increased RAM throughput was the enabling factor.
          </ObjCallout>
        </ObjSection>

        {/* ── RESTORE MECHANIC ─────────────────────── */}
        <ObjSection id="restore" title="The Restore Mechanic" accentColor="orange">
          <p>
            One of the more quietly clever systems Nintendo revealed is the{" "}
            <strong>Restore Function</strong>. Because players can theoretically destroy their
            way into a corner — collapsing terrain needed to progress — the team built a seamless
            environment reset system:
          </p>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.9", marginBottom: "1rem" }}>
            <li>Chunks of destroyed terrain can be <strong>restored without a level reload</strong></li>
            <li>The restore is applied at the voxel layer, seamlessly regenerating geometry in place</li>
            <li>The system triggers without breaking gameplay flow or interrupting music and enemy AI</li>
          </ul>
          <p>
            Motokura described the restore mechanic as &quot;invisible design&quot; — a failsafe
            that most players will never notice unless they specifically attempt to softlock
            themselves. The goal is to keep destruction feeling &quot;consequence-free&quot; for
            casual play while still allowing experienced players to dramatically reshape the level.
          </p>
        </ObjSection>

        {/* ── MARIO ODYSSEY ORIGINS ────────────────── */}
        <ObjSection id="origins" title="From Super Mario Odyssey to Donkey Kong" accentColor="orange">
          <p>
            The voxel system did not emerge fully-formed for Bananza — it traces directly back to
            experiments Kurihara conducted during the development of{" "}
            <strong>Super Mario Odyssey</strong> (2017), where voxel tech was first used at
            Nintendo in limited, cosmetic roles.
          </p>

          <DataTable
            headers={["Game", "Voxel Use", "Scale", "Role in Bananza Lineage"]}
            rows={[
              ["Super Mario Odyssey (2017)", "Snow Kingdom drifts — footprints in snow", "Small-scale, visual only", "First Nintendo voxel prototype in a shipping game"],
              ["Super Mario Odyssey (2017)", "Luncheon Kingdom 'cheese blocks'", "Small-scale, limited interaction", "Proved voxels could be interactive, not just decorative"],
              ["Post-Odyssey prototype", "'Goomba with arms' terrain ripping test", "Internal prototype only", "Direct precursor to DK's grab-and-throw mechanic"],
              ["Donkey Kong Bananza (2026)", "Full level destruction — 347M voxels", "Entire level geometry", "Full commercial realisation of the 9-year lineage"],
            ]}
          />

          <ObjQuote
            source="Tatsuya Kurihara, Software Engineer — GDC 2026"
            sourceRole="Nintendo EPD"
          >
            I remember looking at Donkey Kong&apos;s arm reach and thinking — this is exactly the
            character who should be ripping terrain off and throwing it. The prototype almost
            designed itself once we had him in the scene.
          </ObjQuote>
        </ObjSection>

        {/* ── SWITCH 2 PIVOT ───────────────────────── */}
        <ObjSection id="switch2-pivot" title="The Switch 2 Pivot" accentColor="orange">
          <p>
            Donkey Kong Bananza was originally in development for the{" "}
            <strong>Nintendo Switch (2017)</strong>. The decision to move it to the Switch 2 was
            not a business decision driven by launch lineup needs — it was, according to Kurihara,
            a <strong>technical necessity</strong>.
          </p>
          <p>
            The original Switch&apos;s custom NVIDIA Tegra X1 processor and its memory architecture
            introduced hard ceilings on the number of voxels that could be simulated concurrently.
            Early internal builds on the original hardware ran at framerates that were, per Kurihara,
            &quot;not compatible with a fun experience.&quot; The Switch 2&apos;s upgraded processor,
            increased RAM, and improved memory bandwidth resolved the constraint.
          </p>
          <ObjHighlight type="key-point" color="orange">
            The Switch 2 migration was not a marketing move — Bananza&apos;s core destruction
            mechanic physically could not ship on the original Switch at the voxel density required
            to make it feel &quot;limitless.&quot; Nintendo Switch 2 hardware was the prerequisite.
          </ObjHighlight>
        </ObjSection>

        {/* ── CANYON LAYER ─────────────────────────── */}
        <ObjSection id="canyon" title='The "Canyon" Layer' accentColor="orange">
          <p>
            A technical detail that drew particular attention from developers in the audience was
            the <strong>Canyon Layer</strong> — Nintendo&apos;s internal term for the subsurface
            voxel geometry that sits beneath the game&apos;s visible surface terrain.
          </p>
          <p>
            When Donkey Kong breaks through a floor or wall, he is not simply revealing a flat
            void — the Canyon Layer generates a visually consistent interior, complete with its
            own voxel density properties, rock strata, and material variation. The effect is that
            even deeply excavated areas feel like they were &quot;always there,&quot; rather than
            procedurally generated in response to destruction.
          </p>
          <p>
            Kurihara described the Canyon Layer as one of the most memory-intensive features of
            the engine — maintaining a fully-formed underground world in memory at all times —
            but said the team considered it non-negotiable for the game&apos;s sense of physical
            reality.
          </p>
          <ObjCallout type="note" title="Canyon Layer Is Always Present">
            The Canyon Layer exists for the entire level at all times — not just in areas the
            player has reached. Nintendo pre-bakes the subsurface geometry to ensure the instant
            Donkey Kong punches through a floor, the world below is already fully defined.
          </ObjCallout>
        </ObjSection>

        {/* ── DEVELOPMENT TIMELINE ─────────────────── */}
        <ObjSection id="development" title="Development Timeline" accentColor="orange">
          <ObjTimeline accentColor="orange" events={timeline} />
        </ObjSection>

      </ObjectDesign>
    </>
  );
}
