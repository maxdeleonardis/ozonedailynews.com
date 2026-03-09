import type { Metadata } from 'next';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import JackArticle, {
  JackSection,
  JackCaseOverview,
  JackCallout,
  JackStats,
} from '@/components/JackArticle';

const SLUG = '/video-games/Digital-Foundry';

const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/video-games/crimson-desert-blackspace-engine-4k-60fps-ray-tracing-digital-foundry-2026.jpg';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'Crimson Desert Delivers Native 4K 60fps With Ray Tracing on Ultra Settings — Digital Foundry Tech Preview February 2026 | ObjectWire',
  description:
    "Digital Foundry's February 27, 2026 tech preview confirmed Crimson Desert's BlackSpace Engine achieves native 4K at 60fps on ultra settings with full ray tracing and no upscaling on an AMD RX 7900 XTX. The game launches March 19, 2026, with AMD FSR Redstone and Nvidia DLSS 4 multi-frame generation at launch.",
  keywords: [
    'Crimson Desert native 4K 60fps ray tracing Digital Foundry 2026',
    'BlackSpace Engine Pearl Abyss tech preview February 2026',
    'Crimson Desert Digital Foundry RX 7900 XTX benchmark',
    'Crimson Desert AMD FSR Redstone launch 2026',
    'Crimson Desert Nvidia DLSS 4 multi-frame generation',
    'Pearl Abyss BlackSpace Engine ray tracing global illumination',
    'Crimson Desert release date March 19 2026 Steam PS5 Xbox',
    'Crimson Desert water physics FFT ocean simulation',
    'Alex Battaglia Digital Foundry BlackSpace Engine CES 2026',
    'Crimson Desert FSR Redstone ray regeneration upscaling',
    'BlackSpace Engine vs Unreal Engine 5 custom engine 2026',
    'Crimson Desert 4K ultra settings no upscaling benchmark',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "Crimson Desert: Native 4K / 60fps / RT on Ultra — No Upscaling Required, Digital Foundry Confirms",
    description:
      "Pearl Abyss's custom BlackSpace Engine hit native 4K at 60fps on ultra settings with full ray tracing on an AMD RX 7900 XTX — no upscaling applied. Digital Foundry published the tech preview on February 27, 2026. Launch is March 19 with FSR Redstone and DLSS 4.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T22:00:00Z',
    modifiedTime: '2026-03-01T22:00:00Z',
    section: 'Video Games',
    tags: [
      'Crimson Desert',
      'Pearl Abyss',
      'BlackSpace Engine',
      'Digital Foundry',
      'Ray Tracing',
      '4K Gaming',
      'AMD FSR Redstone',
      'DLSS 4',
      'Video Games',
      'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Crimson Desert Hits Native 4K / 60fps / Full RT on Ultra — Digital Foundry Feb 27, 2026",
    description:
      "BlackSpace Engine: native 4K, 60fps, ultra, ray tracing, no upscaling on RX 7900 XTX. FSR Redstone + DLSS 4 at launch March 19, 2026.",
    images: [IMAGE_URL],
  },
};

// ─── Infobox data ─────────────────────────────────────────────────────────────

const gameFacts = [
  { label: 'Game',             value: 'Crimson Desert — Pearl Abyss' },
  { label: 'Engine',           value: 'BlackSpace Engine — custom-built by Pearl Abyss' },
  { label: 'Release date',     value: 'March 19, 2026' },
  { label: 'Platforms',        value: 'PC (Steam), PlayStation 5, Xbox Series X|S, Mac' },
  { label: 'Tech preview',     value: 'Digital Foundry — February 27, 2026 (Alex Battaglia)' },
  { label: 'Demo resolution',  value: 'Native 4K — no upscaling applied' },
  { label: 'Demo framerate',   value: '60fps on ultra settings with full ray tracing' },
  { label: 'Test GPU',         value: 'AMD Radeon RX 7900 XTX' },
  { label: 'Test CPU',         value: 'AMD Ryzen 9 7900X3D (12-core)' },
  { label: 'Test RAM',         value: '32GB DDR5' },
  { label: 'Upscaling at launch', value: 'AMD FSR Redstone (upscaling + frame gen + ray regen) + Nvidia DLSS 4 (multi-frame gen)' },
  { label: 'FSR Redstone note', value: 'Second title after Call of Duty: Black Ops 7 to ship full FSR Redstone suite — Will Powers, Pearl Abyss' },
];

const benchmarkDetails = [
  { label: 'Resolution:',        value: 'Native 4K — no FSR, DLSS, or XeSS upscaling active during Digital Foundry capture.' },
  { label: 'Framerate:',         value: '60fps sustained on ultra settings including full ray tracing.' },
  { label: 'Frame pacing:',      value: 'Consistent across dynamic weather and lighting transitions in time-lapse sequences.' },
  { label: 'Draw distance:',     value: 'Level-of-detail transitions beyond 1km with minimal popping — Digital Foundry.' },
  { label: 'RX 9070 XT note:',   value: 'AMD confirmed RX 9070 XT owners achieve 4K playability via FSR Redstone — VideoCardz.' },
];

const rayTracingDetails = [
  { label: 'Global illumination:', value: 'Ray-traced GI applied to all light sources — torches, sconces, emissives, and ambient.' },
  { label: 'Reflections:',         value: 'Ray-traced on polished surfaces — armor, water, wet stone.' },
  { label: 'Bounced lighting:',    value: 'Visible in indoor, outdoor, and nighttime scenes from emissive sources.' },
  { label: 'Ray regeneration:',    value: 'FSR Redstone Ray Regeneration applied as RT denoising enhancement at launch.' },
];

const upscalingTable = [
  { label: 'AMD FSR Redstone — Upscaling:', value: 'FidelityFX Super Resolution — AI-based spatial upscaling.' },
  { label: 'AMD FSR Redstone — Frame Gen:',  value: 'Multi-frame insertion for higher displayed framerate.' },
  { label: 'AMD FSR Redstone — Ray Regen:',  value: 'RT denoising enhancement for higher-quality ray tracing output.' },
  { label: 'Nvidia DLSS 4:',                 value: 'Multi-frame generation — available at launch alongside FSR Redstone.' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CrimsonDesertDigitalFoundryPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Crimson Desert Delivers Native 4K at 60fps on Ultra Settings with Ray Tracing in Digital Foundry Tech Preview — February 27, 2026"
        description="Digital Foundry confirmed Pearl Abyss's BlackSpace Engine achieves native 4K at 60fps with full ray tracing on ultra settings on an AMD RX 7900 XTX — no upscaling. Crimson Desert launches March 19, 2026, with FSR Redstone and DLSS 4."
        author="Alfansa"
        authorUrl="https://www.objectwire.org/team/alfansa"
        publishedTime="2026-03-01T22:00:00Z"
        modifiedTime="2026-03-01T22:00:00Z"
        imageUrl={IMAGE_URL}
        articleUrl={ARTICLE_URL}
        section="Video Games"
        keywords={[
          'Crimson Desert 4K 60fps ray tracing Digital Foundry',
          'BlackSpace Engine Pearl Abyss benchmark 2026',
          'AMD FSR Redstone Crimson Desert launch',
          'Nvidia DLSS 4 Crimson Desert March 2026',
          'Crimson Desert release date March 19 2026',
        ]}
      />

      <JackArticle
        layout="news"
        title="Crimson Desert Delivers Native 4K at 60fps on Ultra Settings with Ray Tracing in Digital Foundry Tech Preview"
        subtitle="Digital Foundry published a technical analysis of Crimson Desert on February 27, 2026, documenting Pearl Abyss's custom BlackSpace Engine achieving native 4K resolution at 60fps on ultra settings with full ray tracing and no upscaling — tested on an AMD Radeon RX 7900 XTX. The game launches March 19, 2026, with AMD FSR Redstone full suite and Nvidia DLSS 4 multi-frame generation at day one."
        categoryLabel="Video Games"
        categories={[
          { label: 'Video Games', color: 'blue' },
          { label: 'Tech Preview', color: 'black' },
        ]}
        publishDate="March 1, 2026"
        publishDateISO="2026-03-01T22:00:00Z"
        modifiedDateISO="2026-03-01T22:00:00Z"
        readTime="5 min read"
        author={{
          name: 'Alfansa',
          department: 'ObjectWire Gaming Desk',
          url: 'https://www.objectwire.org/team/alfansa',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/video-games', label: 'Video Games' },
          { href: SLUG, label: 'Crimson Desert — Digital Foundry Tech Preview' },
        ]}
        relatedArticles={[
          {
            href: '/video-games',
            category: 'Video Games',
            categoryColor: 'text-blue-600',
            title: 'Video Games Hub — ObjectWire',
          },
          {
            href: '/video-games/epic',
            category: 'Epic Games',
            categoryColor: 'text-blue-600',
            title: 'Unreal Engine Expands Beyond Gaming — 2026 Adoption Trends',
          },
          {
            href: '/video-games/news/marathon-server-slam-steam-concurrent-players-peak-drop-march-2026',
            category: 'Gaming News',
            categoryColor: 'text-blue-600',
            title: 'Marathon Server Slam: 143,621 Steam Peak, Then a 50%+ Drop',
          },
          {
            href: '/nvidia/nvidia-groq-lpu-inference-platform-gtc-2026-20-billion-licensing-deal',
            category: 'AI Hardware',
            categoryColor: 'text-green-600',
            title: 'Nvidia & Groq: $20B LPU Licensing Deal at GTC 2026',
          },
        ]}
        timeline={[
          { date: 'CES 2026 (Jan)', description: 'Alex Battaglia (Digital Foundry) previews BlackSpace Engine — notes custom development over Unreal Engine 5.' },
          { date: 'Feb 27, 2026', description: 'Digital Foundry publishes full tech preview — native 4K / 60fps / RT on ultra confirmed on RX 7900 XTX.', highlight: true },
          { date: 'Feb 27, 2026', description: 'Pearl Abyss marketing lead Will Powers confirms FSR Redstone full suite integration — second title after CoD: Black Ops 7.' },
          { date: 'Feb 27, 2026', description: 'Nvidia DLSS 4 with multi-frame generation confirmed for day-one launch alongside FSR Redstone.' },
          { date: 'Mar 19, 2026', description: 'Crimson Desert global launch — Steam (PC), PS5, Xbox Series X|S, Mac.', highlight: true },
          { date: 'Post-launch', description: 'Digital Foundry plans full post-launch performance analysis across PC and console platforms.' },
        ]}
        documents={[
          { href: 'https://www.digitalfoundry.net', label: 'Digital Foundry — BlackSpace Engine Tech Preview, Feb 27, 2026', icon: '📊' },
          { href: 'https://store.steampowered.com', label: 'Crimson Desert on Steam — March 19, 2026', icon: '🔗' },
          { href: 'https://www.amd.com', label: 'AMD FSR Redstone — Feature Details', icon: '📄' },
        ]}
        accentColor="blue"
        articleUrl={ARTICLE_URL}
        description="Crimson Desert's BlackSpace Engine hits native 4K / 60fps / RT ultra on RX 7900 XTX. Launches March 19, 2026 with FSR Redstone and DLSS 4."
        section="Video Games"
        keywords={['Crimson Desert BlackSpace Engine 4K ray tracing', 'Digital Foundry tech preview 2026', 'AMD FSR Redstone DLSS 4 Crimson Desert']}
        showCorrections
        showEditorialStandards
        footerTagline="When a custom engine hits native 4K RT at 60fps on last-gen AMD hardware, the upscalers line up just in case."
        footerLinks={[
          { href: '/video-games', label: 'Video Games' },
          { href: '/tech', label: 'Technology' },
        ]}
      >

        {/* ── Lede ─────────────────────────────────────────────── */}
        <p>
          <strong>Digital Foundry</strong> published a technical analysis of{' '}
          <strong>Crimson Desert</strong> on <strong>February 27, 2026</strong>, documenting
          Pearl Abyss&apos;s custom <strong>BlackSpace Engine</strong> achieving{' '}
          <strong>native 4K resolution at 60 frames per second</strong> on ultra settings with
          full ray tracing enabled — and <strong>no upscaling applied</strong> — on an{' '}
          <strong>AMD Radeon RX 7900 XTX</strong>. Analyst{' '}
          <strong>Alex Battaglia</strong> had previously noted the engine&apos;s custom
          development over off-the-shelf options like Unreal Engine 5 in a CES 2026 preview.
          The game launches on <strong>March 19, 2026</strong>, across PC (Steam),
          PlayStation 5, Xbox Series X|S, and Mac, with AMD FSR Redstone full suite and
          Nvidia DLSS 4 multi-frame generation available at day one.
        </p>

        <JackCallout accentColor="blue" label="Digital Foundry — February 27, 2026">
          BlackSpace Engine sustained <strong>native 4K / 60fps / ultra / full ray tracing
          with no upscaling</strong> across extended sequences including dynamic weather and
          lighting changes — on an AMD Radeon RX 7900 XTX with Ryzen 9 7900X3D and 32GB DDR5.
          Level-of-detail transitions held beyond 1km draw distance with minimal popping.
        </JackCallout>

        <JackCaseOverview
          title="Crimson Desert — Tech Preview At a Glance"
          accentColor="blue"
          items={gameFacts}
        />

        {/* ── Section 1 ────────────────────────────────────────── */}
        <JackSection number={1} title="BlackSpace Engine Performance — What Digital Foundry Confirmed" accentColor="blue">
          <JackStats
            title="Performance Headline Numbers"
            accentColor="blue"
            stats={[
              { value: '4K native', label: 'Resolution — no upscaling applied during DF capture' },
              { value: '60fps', label: 'Framerate on ultra settings with full ray tracing' },
              { value: '1km+', label: 'Draw distance — LoD transitions with minimal popping' },
              { value: 'Mar 19', label: 'Global launch date — PC, PS5, Xbox, Mac' },
            ]}
          />
          <JackCaseOverview
            title="Benchmark Details — Digital Foundry Tech Preview"
            accentColor="blue"
            items={benchmarkDetails}
          />
          <JackCallout accentColor="black" label="Test Hardware">
            Digital Foundry&apos;s configuration: <strong>AMD Ryzen 9 7900X3D</strong> (12-core),{' '}
            <strong>AMD Radeon RX 7900 XTX</strong>, <strong>32GB DDR5</strong>. AMD separately
            confirmed that <strong>Radeon RX 9070 XT</strong> owners achieve{' '}
            <strong>4K playability via FSR Redstone</strong> — meaning the native-4K bar is
            set for RX 7900 XTX, while FSR Redstone extends 4K accessibility to the current
            generation mid-range.
          </JackCallout>
        </JackSection>

        {/* ── Section 2 ────────────────────────────────────────── */}
        <JackSection number={2} title="Ray Tracing and Global Illumination Implementation" accentColor="blue">
          <p>
            The BlackSpace Engine&apos;s ray tracing implementation applies to all light
            sources in the scene — not selectively to primary lights — producing consistent
            global illumination across environments from torch-lit interiors to open-world
            outdoor scenes.
          </p>
          <JackCaseOverview
            title="Ray Tracing Features — BlackSpace Engine"
            accentColor="blue"
            items={rayTracingDetails}
          />
          <JackCallout accentColor="orange" label="Custom Engine vs. Unreal Engine 5">
            Alex Battaglia noted at CES 2026 that Pearl Abyss chose to develop BlackSpace
            Engine in-house rather than adopt Unreal Engine 5. The Digital Foundry tech
            preview implicitly validates that decision: achieving this performance profile on a
            custom engine — rather than waiting for Epic to ship UE5 optimizations — gave Pearl
            Abyss direct control over the rendering pipeline at the cost of higher engine
            development investment. For context on UE5&apos;s industry position, see our{' '}
            coverage of{' '}
            <a href="/video-games/epic" className="font-medium underline hover:opacity-70">
              Unreal Engine&apos;s cross-industry expansion in 2026
            </a>.
          </JackCallout>
        </JackSection>

        {/* ── Section 3 ────────────────────────────────────────── */}
        <JackSection number={3} title="Water Physics and Environmental Simulation" accentColor="blue">
          <p>
            Beyond rendering, Digital Foundry&apos;s analysis highlighted the BlackSpace
            Engine&apos;s environmental simulation systems — particularly water and dynamic
            weather — as technically distinctive for an open-world action RPG at this fidelity
            level.
          </p>
          <JackCaseOverview
            title="Environmental Simulation — Highlighted Systems"
            accentColor="blue"
            items={[
              { label: 'Water physics:', value: 'FFT (Fast Fourier Transform) ocean simulation — realistic waves, currents, and shoreline foam.' },
              { label: 'Volumetric fog:', value: 'Integrates fluid dynamics for physically plausible atmospheric scattering.' },
              { label: 'Destruction:', value: 'Real-time physics-driven destructible environments — Digital Foundry RT feature.' },
              { label: 'Cloth & hair:', value: 'GPU-accelerated simulation responding to wind and collisions — Pearl Abyss dev archives.' },
              { label: 'Dynamic weather:', value: 'Alters lighting, particle systems, and atmospheric scattering in real time — visible in DF time-lapse sequences.' },
            ]}
          />
        </JackSection>

        {/* ── Section 4 ────────────────────────────────────────── */}
        <JackSection number={4} title="Upscaling Tech: FSR Redstone and DLSS 4 at Launch" accentColor="blue">
          <p>
            Despite the native-4K performance demonstration, Crimson Desert ships with both
            major upscaling ecosystems at day one — positioning FSR Redstone and DLSS 4 as
            accessibility tools for players on hardware below RX 7900 XTX, not as requirements
            for the target quality bar.
          </p>
          <JackCaseOverview
            title="Upscaling Technology Support at Launch"
            accentColor="blue"
            items={upscalingTable}
          />
          <JackCallout accentColor="blue" label="Will Powers — Pearl Abyss Marketing Lead">
            Pearl Abyss confirmed Crimson Desert as{' '}
            <strong>the second title after Call of Duty: Black Ops 7</strong> to ship the
            complete AMD FSR Redstone suite — upscaling, frame generation, and ray
            regeneration together. Nvidia DLSS 4 multi-frame generation launches
            simultaneously, giving players a choice between both vendors&apos; latest
            temporal and frame generation solutions from day one.
          </JackCallout>
          <p>
            <em>
              When a custom engine hits native 4K RT at 60fps on last-gen AMD hardware,
              the upscalers line up just in case.
            </em>
          </p>
        </JackSection>

      </JackArticle>
    </SEOWrapper>
  );
}
