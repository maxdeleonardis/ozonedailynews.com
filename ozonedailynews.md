# OzoneNews Daily | What We Cover Every Day

**Site:** ozonedailynews.com
**Publisher:** Ozone Network News LLC
**Byline standard:** Max DeLeonardis (primary) | OzoneNews Editorial Team (house byline)
**Article format:** jack_article (GEO-structured, sourced, FAQs required)

---

## Daily Coverage Mandate

Every publishing day OzoneNews targets a minimum of **3-5 original reported articles** across the active verticals below. Each article must have a primary source published the same day or within the prior 24 hours. Breaking events are published immediately on confirmation.

---

## What We Write About Every Day

### Science (Daily — Highest Priority)

We monitor and report on peer-reviewed publications, space agency announcements, and confirmed observational discoveries every day. Primary sources: *Science*, *Nature*, *The Astrophysical Journal Letters*, *PNAS*, *Cell*, *PLOS Biology*, NOAA, NASA, ESA, EurekAlert.

**Daily monitoring list:**
- **Space weather** — NOAA SWPC Kp index, solar flare classifications, geomagnetic storm warnings, aurora events
- **Astrophysics** — new findings from ALMA, Chandra, Hubble, JWST, Event Horizon Telescope
- **Planetary science / Mars** — Curiosity and Perseverance mission updates, orbital mission status, landing window news
- **NASA programs** — Artemis, Commercial Crew, Lunar Gateway, SLS/Orion, Commercial Lunar Payload Services
- **Launch vehicles** — SpaceX Starship, Falcon 9, New Glenn, Vulcan, ULA, RocketLab
- **Biology / animal cognition** — peer-reviewed studies on intelligence, navigation, behavior, ecology
- **Climate monitoring** — NOAA monthly sea ice data, Keeling Curve CO2 readings, IPCC updates, reef bleaching reports
- **Environmental science** — ozone layer data, atmospheric chemistry, pollution measurement studies

---

### Tech (Daily — Second Priority)

Technology journalism focused on the physical infrastructure and hardware layer of the AI and computing economy. Primary sources: company press releases, SEC filings, IEEE publications, analyst reports from Wedbush/Morgan Stanley/Oppenheimer, GamersNexus, Tom's Hardware, AnandTech.

**Daily monitoring list:**
- **AI compute infrastructure** — hyperscaler data center groundbreakings, power procurement deals, GPU supply chain news
- **NVIDIA** — Blackwell/Rubin architecture updates, RTX consumer release news, data center revenue, NVLink/NVSwitch announcements
- **Semiconductor manufacturing** — TSMC yield reports, Intel foundry milestones, Samsung node transitions, ASML EUV news
- **Cloud infrastructure** — Google, Microsoft Azure, Amazon AWS capacity expansion, colocation vs. owned facility decisions
- **Consumer GPU/CPU** — major reviews (RTX, Radeon, Core Ultra), spec confirmations, pricing and availability
- **Space technology** — launch vehicle hardware, reusable booster milestones, Starlink constellation updates

---

### Finance (Daily — Third Priority)

Capital markets coverage of technology and space companies. Primary sources: SEC filings, Bloomberg, Reuters, official earnings releases, IPO S-1 documents, analyst initiation reports.

**Daily monitoring list:**
- **IPOs** — S-1 filings, pricing, analyst ratings, lock-up expiry events for major tech and space companies
- **Earnings** — quarterly results for NVIDIA, Google, Microsoft, Amazon, SpaceX investor releases
- **Valuations** — major funding rounds, secondary market pricing, unicorn/decacorn milestone events
- **Macro** — Fed decisions, treasury yield moves as they affect growth tech and space capital markets

---

### News (Breaking/As Needed)

Confirmed breaking events that cut across verticals. Published immediately on primary source confirmation with explicit "developing" label until all facts are verified.

**Daily triggers:**
- Government announcements with technology or science implications
- Regulatory decisions (FCC, FTC, EU AI Act, FAA launch licensing)
- Major industrial accidents with technology or environmental dimensions
- Official declassifications or policy documents

---

## Today's Coverage Format

Every article published today follows this structure:

```
1. Opening paragraph — direct answer to what happened (2-4 sentences, primary source named)
2. Context paragraph — why it matters, who is affected
3. <h2> sections — specific sub-questions, data points, named sources, figures
4. <h2>Frequently Asked Questions</h2>
   └── 5x <h3> questions with <p> answers
5. <SourcesInterlink> component — 4 external + 4 internal links
```

**Minimum requirements per article:**
- 300+ words
- 4+ internal OzoneNews links
- 1+ external primary source link
- `metadata.description`: 130-155 characters
- `metadata.title`: max 60 characters, format `Primary Keyword | Specific Detail`
- `published_at`: full ISO-8601 with timezone offset
- `thumbnail_src`: required for Google Top Stories eligibility
- Registry entry in `content/static/content_registry.json`

---

## Today's Published Articles

| Title | Slug | Category | Published |
|---|---|---|---|
| Sun Fires Triple Solar Flares, Cannibal CME | `/science/northern-lights-us-june-2026-cannibal-cme-geomagnetic-storm` | Science | Jun 4, 2026 |
| NASA MAVEN Mars Orbiter Declared Dead | `/science/nasa-maven-mars-orbiter-dead-2026` | Science | Jun 4, 2026 |
| Milky Way Black Hole Caught Breathing | `/science/sagittarius-a-black-hole-wind-discovery-2026` | Science | Jun 4, 2026 |
| Bumblebees Match Chimps in Problem-Solving | `/science/bumblebee-problem-solving-chimp-tool-use-study-2026` | Science | Jun 4, 2026 |
| NVIDIA Blackwell RTX 50-Series Architecture | `/tech/nvidia/blackwell-rtx-50-series-architecture-specs-pricing-2026` | Tech | Jun 4, 2026 |
| Google Breaks Ground in Horndal, Sweden | `/tech/google-horndal-sweden-data-center-groundbreaking-2026` | Tech | Jun 3, 2026 |

---

## Source Watchlist (Check Daily)

| Source | What to Watch For |
|---|---|
| [NOAA SWPC](https://www.swpc.noaa.gov/) | Solar flare classifications, geomagnetic storm watches |
| [NASA News](https://www.nasa.gov/news/) | Mission status, science results, agency announcements |
| [EurekAlert](https://www.eurekalert.org/) | New peer-reviewed research press releases |
| [arXiv astro-ph](https://arxiv.org/list/astro-ph/new) | Preprint astrophysics papers |
| [NVIDIA Newsroom](https://nvidianews.nvidia.com/) | Product launches, financial updates |
| [NVIDIA IR](https://investor.nvidia.com/) | Earnings, SEC filings |
| [Google Blog](https://blog.google/) | Infrastructure announcements |
| [SpaceX Updates](https://www.spacex.com/updates/) | Launch status, Starship milestones |
| [Science Magazine](https://www.science.org/news/all-news) | Weekly new research publications |
| [Space.com News](https://www.space.com/news) | Space exploration and astronomy news |
| [Tom's Hardware](https://www.tomshardware.com/news) | GPU/CPU launch coverage |
| [GamersNexus](https://gamersnexus.net/) | Hardware architecture deep dives |
| [AP Science](https://apnews.com/hub/science) | Wire-service science confirmations |
| [PBS NewsHour Science](https://www.pbs.org/newshour/science) | Science wire, space agency news |

---

## Internal Linking Clusters (Cross-link on Every Publish)

When writing in a category, link to other articles in the same cluster:

**Science / Space cluster**
- `/science/nasa-maven-mars-orbiter-dead-2026`
- `/science/northern-lights-us-june-2026-cannibal-cme-geomagnetic-storm`
- `/science/sagittarius-a-black-hole-wind-discovery-2026`
- `/science/bumblebee-problem-solving-chimp-tool-use-study-2026`
- `/nasa/news/nasa-artemis-3-mission-status-launch-window-2026`
- `/nasa/artemis-3-timeline-leo-demonstration-2026`
- `/nasa/news/spacex-starship-orbital-flight-record-reuse-milestones-2026`
- `/science/space/blue-origin-new-glenn-explosion-cape-canaveral-2026`

**Science / Environment cluster**
- `/science/ozone-layer-recovery-data-2026`
- `/science/arctic-sea-ice-minimum-2026-measured-extent`
- `/science/great-barrier-reef-bleaching-data-2026`
- `/science/keeling-curve-co2-annual-peak-mauna-loa-2026`
- `/science/pigeon-magnetic-navigation-liver-macrophages-science-2026`

**Tech cluster**
- `/tech/nvidia/blackwell-rtx-50-series-architecture-specs-pricing-2026`
- `/tech/gaming/nvidia-rtx-5070-review-blackwell-midrange-2026`
- `/tech/google-horndal-sweden-data-center-groundbreaking-2026`
- `/tech/google-ai-data-center-water-consumption-cooling-2026`

**Finance cluster**
- `/finance/spacex-ipo-75-billion-record-valuation-2026`

---

## Never Publish Without

1. `published_at` as full ISO-8601: `2026-06-05T09:00:00-05:00`
2. `metadata.description` between 130-155 characters (hard limit)
3. `metadata.title` under 60 characters, no em dashes
4. `thumbnail_src` URL (Unsplash or Supabase CDN)
5. `author_name: "Max DeLeonardis"` and `author_slug: "max-deleonardis"`
6. Entry in `content/static/content_registry.json`
7. File in `content/static/jack_articles/[slug].json`
8. Git commit: `publish: [article title]` and `git push`
