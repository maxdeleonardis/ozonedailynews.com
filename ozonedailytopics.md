# OzoneNews | Editorial Topics Reference
# What We Cover — Binding on Every Article and Every Pitch

**Publisher:** Ozone Network News LLC
**Site:** ozonedailynews.com
**Author contact:** editorial@ozonedailynews.com
**Standard:** OStandard (see .github/copilot-instructions.md)

---

## Mission

OzoneNews is a verified news publication. We report on primary-source, confirmed events and peer-reviewed research. We do not aggregate, rewrite, or editorialize without named sourcing. Every article requires at least one verifiable primary source (official press release, peer-reviewed journal, agency announcement, or named expert on record).

---

## What We Cover

### Science
Our largest category. We report on peer-reviewed research published in journals including *Science*, *Nature*, *The Astrophysical Journal Letters*, *PNAS*, and *PLOS Biology*. Coverage spans:

- **Space science and astrophysics** — black holes, galaxies, solar physics, orbital mechanics, exoplanets, cosmic events
- **Planetary science and exploration** — Mars missions, lunar programs, deep space probes, mission status updates
- **Space weather** — solar flares, CMEs, geomagnetic storms, aurora events, NOAA SWPC forecasts
- **Biology and ecology** — animal cognition, behavioral ecology, conservation biology, species discoveries
- **Climate science** — sea ice data, atmospheric CO2 measurements, reef bleaching, ozone layer monitoring
- **Environmental data reporting** — quantitative updates from NOAA, NASA, NSIDC, ESA, and affiliated institutions

#### Science sub-paths
- `/science/` — general science
- `/science/space/` — space exploration and astronomy
- `/nasa/` — NASA-specific mission coverage
- `/rockets/` — launch vehicle analysis

---

### Tech
Technology journalism focused on infrastructure, hardware, and the companies building the physical layer of the internet, cloud, and compute economy.

- **AI infrastructure** — data center construction, power procurement, GPU supply chains, hyperscaler capex
- **Semiconductor hardware** — GPU releases, CPU architecture, chip manufacturing milestones (TSMC, Intel, NVIDIA, AMD)
- **Cloud and data centers** — facility groundbreakings, power agreements, colocation vs. owned infrastructure
- **Space technology** — launch vehicles, reusable rocket programs, orbital logistics

#### Tech sub-paths
- `/tech/` — general technology
- `/tech/google/` — Google infrastructure and products
- `/tech/nvidia/` — NVIDIA hardware and AI supply chain
- `/tech/intel/` — Intel manufacturing and fab
- `/tech/gaming/` — consumer GPU and gaming hardware

---

### Finance
Capital markets, corporate finance, and the economics of technology companies.

- **IPOs and valuations** — S-1 analysis, pricing, lock-up periods, analyst ratings
- **Earnings and guidance** — quarterly results, forward guidance, analyst reactions
- **Deal analysis** — M&A, venture rounds, secondary markets
- **Macro and rates** — Fed decisions, treasury yields as they affect tech and growth stocks

#### Finance sub-paths
- `/finance/` — general finance
- `/finance/spacex/` — SpaceX capital structure and IPO coverage

---

### News
Breaking and developing stories that do not fit a single vertical. Used for multi-category events, geopolitical stories with technology implications, and urgent dispatches.

- **Breaking events** — confirmed, primary-sourced, timestamped
- **Developing stories** — updated as facts emerge, with explicit correction policy applied
- **Policy and regulation** — FCC, FTC, EU AI Act, FAA launch licensing, environmental permits

#### News sub-paths
- `/news/` — general breaking news

---

### Engineering (Internal / Analysis)
Long-form technical analysis written for practitioners: software engineers, systems architects, and technical founders. Not consumer explainers.

- **System design case studies** — architecture decisions at scale
- **Infrastructure postmortems** — what failed, why, and what changed
- **Developer tool evaluations** — frameworks, databases, deployment platforms

#### Engineering sub-paths
- `/engineering/` — technical analysis

---

### Defense (Selective Coverage)
We cover defense only when there is a direct nexus to space, technology, or US government procurement that affects civilian markets.

- **Space defense** — military satellite programs, USSF launches, dual-use orbital platforms
- **Defense tech contracts** — awards with direct technology or supply-chain relevance
- **No foreign military operations coverage** without verified primary sourcing from DoD or allied equivalents

#### Defense sub-paths
- `/defense/` — selective defense technology

---

## What We Do NOT Cover

- Celebrity gossip, lifestyle, or entertainment without a verified technology or business angle
- Opinion pieces without named expert sourcing (no anonymous takes)
- Cryptocurrency price prediction or trading advice
- Politics as a standalone topic (we cover policy when it has direct technology or science implications)
- Unverified leaks, rumors, or supply-chain speculation presented as confirmed fact

---

## Valid Categories (Enforced by Build)

These are the only valid values for the `category` field in article JSON:

```
News | Tech | Finance | Entertainment | World | Politics | Science | Sports | Culture | Crypto | Gaming
```

---

## Slug Format

Slugs follow a strict hierarchy:

```
/[category]/[topic-slug]-[year]
/[category]/[company]/[topic-slug]-[year]
```

Examples:
- `/science/nasa-maven-mars-orbiter-dead-2026`
- `/tech/google-horndal-sweden-data-center-groundbreaking-2026`
- `/finance/spacex-ipo-75-billion-record-valuation-2026`
- `/science/sagittarius-a-black-hole-wind-discovery-2026`

---

## Article Formats in Use

| Format | Component | Store | Best For |
|---|---|---|---|
| `jack_article` | `JackArticleDB` | `content/static/jack_articles/` | Primary editorial format. Full-length reported news with timeline, sources, FAQ, and GEO structure. |
| `wiki_article` | `WikiArticleDB` | `content/static/wiki_articles/` | Reference and explainer content. Evergreen definitions, data tables, and topic summaries. |
| `creator_article` | `CreatorArticleDB` | `content/static/creator_articles/` | Community contributor format. Bylined, but not full editorial production. |
| `article_page` | `ArticlePageDB` | `content/static/article_pages/` | Static page content. Used for hub pages and category landing pages. |

The `jack_article` format is the production standard for all reported news.

---

## GEO Article Structure (Enforced)

Every jack_article `content_html` must follow this section order:

1. Opening paragraph (direct answer to what happened, 2-4 sentences)
2. Context paragraph (why it matters, named sources)
3. `<h2>` section (specific sub-question or data point, not "Background" or "Overview")
4. Body sections with `<h2>` headings, named sources, and specific figures
5. `<h2>Frequently Asked Questions</h2>` with `<h3>` Q headings and `<p>` answers
6. `<SourcesInterlink>` component (external sources + internal cross-links)

---

## Internal Linking Requirements (Per Article)

Every published article must contain at minimum:

- **4 internal links** using `<a href="/path" class="text-blue-600 hover:text-blue-800 underline">` in `content_html`
- **1 external source link** using `<a href="https://..." target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">`
- A `<SourcesInterlink>` component call at the bottom of `content_html` with `internalLinks` pointing to 4 related OzoneNews articles

---

## Current Science Coverage Clusters

These are the active interlinking clusters as of June 4, 2026:

**Space exploration cluster**
- `/science/nasa-maven-mars-orbiter-dead-2026`
- `/nasa/news/nasa-artemis-3-mission-status-launch-window-2026`
- `/nasa/artemis-3-timeline-leo-demonstration-2026`
- `/nasa/news/spacex-starship-orbital-flight-record-reuse-milestones-2026`
- `/spacex-starship-flight-10-engineering-legacy-v3-transition`
- `/science/space/blue-origin-new-glenn-explosion-cape-canaveral-2026`

**Space weather cluster**
- `/science/northern-lights-us-june-2026-cannibal-cme-geomagnetic-storm`
- `/science/sagittarius-a-black-hole-wind-discovery-2026`

**Biology and ecology cluster**
- `/science/bumblebee-problem-solving-chimp-tool-use-study-2026`
- `/science/pigeon-magnetic-navigation-liver-macrophages-science-2026`
- `/science/great-barrier-reef-bleaching-data-2026`
- `/science/arctic-sea-ice-minimum-2026-measured-extent`
- `/science/keeling-curve-co2-annual-peak-mauna-loa-2026`
- `/science/ozone-layer-recovery-data-2026`

**Tech infrastructure cluster**
- `/tech/google-horndal-sweden-data-center-groundbreaking-2026`
- `/tech/google-ai-data-center-water-consumption-cooling-2026`
- `/tech/gaming/nvidia-rtx-5070-review-blackwell-midrange-2026`

**Finance cluster**
- `/finance/spacex-ipo-75-billion-record-valuation-2026`

---

## Priority Coverage Queue

Topics we actively watch for new developments:

- NASA Artemis program (crewed lunar missions, SLS, Orion)
- SpaceX Starship development (flight tests, Mechazilla catch operations, Starlink V3)
- Mars surface missions (Curiosity, Perseverance, Ingenuity follow-on)
- NVIDIA Blackwell and next-gen GPU supply chains
- Google, Microsoft, Amazon hyperscale data center expansion in Europe
- Solar Cycle 25 peak activity and space weather events
- NOAA climate monitoring (sea ice, CO2, ozone)
- Peer-reviewed biology and cognitive science (animal intelligence, navigation, ecology)
- SpaceX IPO and associated capital markets developments

---

## Authors

| Name | Slug | Department |
|---|---|---|
| Max DeLeonardis | `max-deleonardis` | Science, Tech, Finance |
| OzoneNews Editorial Team | `ozonedailynews-editorial-team` | All (house byline) |

New authors must have a live `/authors/[slug]` page before their first article publishes.
