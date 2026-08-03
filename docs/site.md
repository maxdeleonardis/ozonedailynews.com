# OzoneNews | Site & Systems Reference

**Last updated:** August 1, 2026
**Stack:** Next.js 16.2.6 (Turbopack, App Router), Supabase Pro, Vercel, GitHub Git bridge
**Repo:** `aMarketology/ozonedailynews.com` — single repo, multi-brand via Git branches

---

## Architecture

Static JSON files in `content/static/` are the source of truth for all published content. Supabase holds drafts and editor auth only. When an editor publishes via `/admin`, the Git bridge (`app/api/cms/publish/route.ts`) commits the article JSON atomically to GitHub, triggers an ISR revalidate, and marks the Supabase row as `published`.

**Git = published. Supabase = draft pipeline + auth + routing table.**

All article routing goes through `app/[...slug]/page.tsx` — no per-article `page.tsx` stubs are generated. The slug resolves via `content_registry.json` → static JSON → renderer component.

---

## Multi-Brand Architecture

One repo. Each brand = its own Git branch + Railway service + env vars.

| Brand slug | Branch | Domain | Status |
|---|---|---|---|
| `ozone` | `master` | ozonedailynews.com | Live |
| `basil` | `basil` | basilnews.com | Branch needed |
| `content` | `content` | contentnewsnow.com | Branch needed |
| `obsidian` | `obsidian` | obsidianpaper.com | Branch needed |
| `honey` | `honey` | honeynewspaper.com | Branch needed |
| `onyx` | `onyx` | onyxtimes.org | Branch needed |
| `clover` | `clover` | cloverheadlines.com | Branch needed |
| `objective` | `objective` | objectivewire.org | Branch needed |

---

## File Structure

```
content/
  static/
    articles/            # standard news JSON (NewsArticleDB renderer)
    jack_articles/       # long-form JSON (JackArticleDB renderer)
    wiki_articles/       # glossary/reference
    creator_articles/    # creator profile JSON
    article_pages/       # evergreen guide JSON
    sterling_articles/   # reserved
    content_registry.json  # master sitemap + routing registry
  articles/              # ID-addressed permanent copies (UUID filename)
  daily-digest/          # YYYY-MM-DD.md — RSS digest output (gitignored)

app/
  [...]slug]/            # universal article router — NO per-article stubs
  admin/                 # CMS UI (force-dynamic, editor-auth-gated)
  api/cms/               # publish, articles CRUD, media, reroute, update bridges

lib/
  authors.ts             # SINGLE SOURCE OF TRUTH for author entities (E-E-A-T)
  site-config.ts         # all brand identity from env vars (NEXT_PUBLIC_*)
  github-commit.ts       # atomic multi-file Git commit
  routing-service.ts     # routing_table upserts
  registry-service.ts    # content_registry in-memory cache + upserts

scripts/
  alfanso.ts             # article scaffolding / ghost writer
  alfasa-sentinel.ts     # Layer 1 E-E-A-T publish gate
  alfasa-suggest.ts      # Layer 3 session briefing
  backfill-articles.ts   # upserts static JSONs → Supabase articles table
  sync-registry.ts       # keeps content_registry.json in sync with static JSON files
  mint-thumbnails.ts     # Satori API → thumbnail_src for all articles
  rss-digest.ts          # 27 feeds, 7 verticals, daily markdown output
  validate-eeat.ts       # E-E-A-T audit
  validate-geo.ts        # GEO signal coverage scanner
```

---

## Commands

```bash
npm run dev                    # local dev (port 3001 if 3000 is taken)
npm run build                  # production build — triggers prebuild SEO checks
npm run publish                # full pipeline: sync-registry + backfill + mint:thumbnails + git push
npm run backfill               # push all static JSONs to Supabase (auto-loads .env.local)
npm run wiki:sync -- --write   # register new static JSONs in content_registry.json
npm run mint:thumbnails        # generate missing Satori OG thumbnails for all articles
npm run rss:digest             # fetch 27 RSS feeds → content/daily-digest/YYYY-MM-DD.md
npm run validate:eeat          # E-E-A-T audit on all published articles
npm run validate:geo           # GEO signal coverage report
npm run validate:canonicals    # confirm no layout-level canonical overrides exist
npm run alfasa                 # session briefing / SEO quality report
npm run alfanso                # scaffold a new article (interactive or with flags)
```

`npm run build` automatically runs (via `prebuild`):
1. `validate-public.ts` — no forbidden files in `/public`
2. `validate-canonicals.ts` — no layout-level canonical overrides
3. `sync-registry.ts --write` — content_registry.json up to date

`npm run publish` runs in order:
1. `sync-registry.ts --write`
2. `backfill-articles.ts` (with .env.local)
3. `mint-thumbnails.ts`
4. `git add -A && git commit && git push`

---

## Article Types

| Type | Store | Renderer | Use For |
|---|---|---|---|
| `news` | `articles/` | `NewsArticleDB` | Standard news, 4 H2s, 4 FAQ items, 2 sources |
| `jack` | `jack_articles/` | `JackArticleDB` | Long-form, investigations, deep-dives, 4 H2s (Background → Core Finding → Implications → What Comes Next), 5 FAQ items, 3 sources, richer metadata |
| `wiki` | `wiki_articles/` | — | Glossary/reference entries |
| `creator` | `creator_articles/` | `CreatorArticleDB` | Creator profiles |

---

## Category Values (only these are valid)

News, Tech, Finance, Entertainment, World, Politics, Science, Sports, Culture, Crypto, Gaming

---

## Authors

Single source of truth: `lib/authors.ts`. The CMS author dropdown, E-E-A-T gate, and author profile pages (`/authors/[slug]`) all derive from this file.

| Slug | Name | Role | Beats |
|---|---|---|---|
| `max-deleonardis` | Max DeLeonardis | Founder & Publisher | Science, Technology, Climate, Space, Biomedical Engineering |
| `simon-minter` | Simon Alfred Minter | Science & Technology Reporter | Space, Climate, Atmospheric Science, AI, Technology |
| `ozonedailynews-editorial-team` | OzoneNews Editorial Team | Editorial Desk | Edits, updates, and corrections only — never new articles |
| `kaustubh-madiraju` | Kaustubh Madiraju | Contributing Reporter | — |
| `josh-donnelly` | Josh Donnelly | Contributing Writer | — |

**Simon Alfred Minter** is the primary science/space reporter. His bio states he draws "directly on primary sources including NASA, NOAA, ESA, and peer-reviewed scientific literature." His declared expertise: Space Exploration, NASA, SpaceX, Atmospheric Science, Ozone Layer, Climate Science, Artificial Intelligence, Emerging Technology.

**Max DeLeonardis** holds a Ph.D. in Biomedical Engineering from NC State (2024). His scientific training informs editorial oversight of science and technology coverage. He has authored several of the site's deep space pieces.

The `ozonedailynews-editorial-team` byline is reserved for collaboratively reported, desk-edited, or wire-assisted coverage. It is never used for new article bylines — only for updates, corrections, or revisions to existing published work. If no named author is available, the article does not publish until one is assigned.

---

## OStandard Rules (Absolute)

- **No em dashes (—) or en dashes (–) anywhere.** Use `|` in headings, commas in prose.
- **metadata.title:** max 60 chars, format `Primary Keyword | Specific Detail`, no brand suffix.
- **metadata.description:** 130-155 chars, primary keyword in first 60 chars.
- **No AI boilerplate phrases:** "in conclusion," "it is important to note," "furthermore, it is crucial," "in today's fast-paced world," "in the ever-evolving landscape," "it is worth noting that," "moreover, it should be noted," "navigating the complex," "delve into," "in summary."
- **All links must be blue and underlined:** `class="text-blue-600 hover:text-blue-800 underline"`. External links must have `target="_blank" rel="noopener noreferrer"`.
- **Every article needs:** named author, ISO-8601 timestamp with timezone offset, 300+ words, at least one `<h2>`, 130-155 char description, canonical URL, 4+ internal links, 1+ external source link, 4-8 tags (proper nouns only), `thumbnail_src` pointing to local `/thumbnails/` file.
- **Headings:** use `|` as separator, never `:`. No `&` in H1/H2/H3. Banned heading words: "Background," "Overview," "Introduction," "Conclusion."
- **Never:** add canonical to `app/layout.tsx`, put `robots.txt` or `sitemap.xml` in `/public`, use `lib/seo.ts`, use Supabase for new article writes, generate per-article `page.tsx` stubs, store live CDN URLs in `thumbnail_src`.

---

## Publishing Workflow

```
1. Write static JSON at content/static/articles/YYYY/MM/{slug}.json
   OR content/static/jack_articles/YYYY/MM/{slug}.json (long-form)
2. Run: npm run wiki:sync -- --write    (registers in content_registry.json)
3. Mint thumbnail via local Satori      (see Satori section below)
4. Run: npm run wiki:sync -- --write    (updates imageUrl in registry)
5. Commit: git add -A && git commit -m "publish: [title]" && git push
```

Or use the CMS at `/admin/articles/new` → Save Draft → Publish to GitHub.

---

## Satori Thumbnail System

Satori is the local branded thumbnail generation server at `localhost:3000`. It renders 1200x630 PNG images with title, subtitle, logo, gradient overlay, and Unsplash backgrounds.

**Always use localhost:3000. Never call satori-neon.vercel.app (returns 502).**

### Layouts

| Layout | Use when |
|---|---|
| `breaking` | Breaking news, time-sensitive stories, announcements |
| `cinematic` | Science, space, deep-dive features — visually dramatic |
| `standard` | General news, everyday articles |
| `minimal` | Opinion, editorial, text-heavy content |

### Accent Color Guide

| Story type | Color | Hex |
|---|---|---|
| Space / quantum / physics | Electric cyan | `#00d4ff` |
| Tech / AI / software | Vivid blue | `#2563eb` |
| Finance / crypto | Emerald green | `#10b981` |
| Breaking / danger | Alert red | `#ef4444` |
| Science / biology | Teal | `#0d9488` |
| Gaming | Violet | `#7c3aed` |
| Politics / world | Rose | `#f43f5e` |

### Minting (Python)

```python
import urllib.request, urllib.parse, json, os

SATORI_BASE = "http://localhost:3000"
TOKEN = "satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3"
SLUG = "category-article-slug-2026"
TITLE = "Article Title Here"
SUBTITLE = "Short deck text"
LAYOUT = "cinematic"     # breaking | cinematic | standard | minimal
ACCENT = "#00d4ff"       # optional
OUT_PATH = f"public/thumbnails/{SLUG}.jpg"

# Step 1: Register in Satori DB + get auto-selected Unsplash image
payload = json.dumps({
    "network": "ozone",
    "slug": SLUG,
    "title": TITLE,
    "subtitle": SUBTITLE,
    "layout": LAYOUT
}).encode()

req = urllib.request.Request(
    f"{SATORI_BASE}/api/v1/quick-generate",
    data=payload,
    headers={"Content-Type": "application/json", "Authorization": f"Bearer {TOKEN}"},
    method="POST"
)
with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read())

image_url = data.get("image_url", "")

# Step 2: Render PNG
params = urllib.parse.urlencode({
    "network": "ozone",
    "title": TITLE,
    "subtitle": SUBTITLE,
    "image_url": image_url,
    "layout": LAYOUT,
    "accent": ACCENT
})

req2 = urllib.request.Request(f"{SATORI_BASE}/api/v1/generate?{params}")
with urllib.request.urlopen(req2) as resp:
    png_bytes = resp.read()

os.makedirs("public/thumbnails", exist_ok=True)
with open(OUT_PATH, "wb") as f:
    f.write(png_bytes)

print(f"Saved: {OUT_PATH} ({len(png_bytes)//1024} KB)")
```

After minting, run `npm run wiki:sync -- --write` to update `imageUrl` in the registry.

---

## Alfanso — The Ghost Writer / Article Scaffolder

`scripts/alfanso.ts` scaffolds a complete, OStandard-compliant article JSON in the correct sharded path, pre-wires the full GEO structure, registers the article in `content_registry.json`, and prints the CMS edit link.

### Usage

```bash
# Interactive (guided prompts)
npm run alfanso

# Non-interactive (fastest)
npm run alfanso -- \
  --title  "Galaxy-Killing Wind Found by JWST" \
  --type   jack \
  --cat    Science \
  --author simon-minter \
  --tags   "JWST,Galactic Wind,Supernovae,CRISTAL-02"
```

### Flags

| Flag | Description | Default |
|---|---|---|
| `--title` | Article title (required) | — |
| `--slug` | Custom slug | Auto-generated from title + category + year |
| `--type` | `news` or `jack` | `news` |
| `--cat` | Category | `News` |
| `--author` | Author slug from `lib/authors.ts` | `simon-minter` |
| `--tags` | Comma-separated, 4-8 proper nouns | — |
| `--dry` | Print JSON to stdout, do not write files | — |
| `--open` | Open created file in `$EDITOR` | — |

### What Alfanso Generates

- Correct sharded file path (`articles/2026/08/slug.json` or `jack_articles/2026/08/slug.json`)
- All required OStandard fields (published_at ISO-8601, canonical, author, thumbnail, metadata.description placeholder)
- Full GEO article structure in `content_html`:
  - `DirectAnswer` → `KeyTakeaways` → 4x H2 sections with `CitationBlock` → `FAQAccordion` → `SourcesInterlink`
- `[FILL: ...]` markers on every field that needs human content
- Automatic registry sync after writing
- CMS edit link printed at the end

### News vs Jack

| Aspect | `news` | `jack` |
|---|---|---|
| Store | `articles/` | `jack_articles/` |
| Renderer | `NewsArticleDB` | `JackArticleDB` |
| H2 sections | 4 (Sub-Topic, Mechanism, Implications, FAQ) | 4 (Background, Core Finding, Implications, What Comes Next) |
| FAQ items | 4 | 5 |
| Sources | 2 | 3 |
| Metadata richness | Standard | Extended (breadcrumbs, categories, related_articles, footer) |
| Use for | Breaking news, standard reporting | Long-form, investigations, deep-dives, scientific analysis |

---

## Alfasa — QA & E-E-A-T Gate

### Alfasa Sentinel (`scripts/alfasa-sentinel.ts`)

Layer 1 E-E-A-T publish gate. Runs before every publish. Produces hard blocks + E-E-A-T score.

```bash
npx ts-node scripts/alfasa-sentinel.ts --file path/to/article.json
npx ts-node scripts/alfasa-sentinel.ts --file path/to/article.json --skip-sentinel  # bypass
```

**Hard blocks** (article cannot publish):
- H1: Missing `author_name` or `author_slug`
- H2: `published_at` missing or not ISO-8601
- H3: Word count under 300
- H4: Em dash or en dash in title/subtitle
- H5: `metadata.description` missing or under 130 chars

**E-E-A-T Score (0-100):**

| Group | Max Points | Key Signals |
|---|---|---|
| Experience | 20 | Named author (+8), known author slug (+7), 2+ external links (+5) |
| Expertise | 20 | Word count 800+ (+10), 3+ H2s (+6), no AI boilerplate (+4) |
| Authoritativeness | 30 | 4+ tags (+8), thumbnail (+8), 4+ internal links (+7), 2+ external links (+7) |
| Trustworthiness | 30 | ISO timestamp (+8), canonical (+8), 130-155 char description (+7), ≤60 char title (+7) |

Grades: A (85+) / B (70+) / C (55+) / D (40+) / F

**GEO warnings** (non-blocking):
- GEO1: No `DirectAnswer` block detected
- GEO2: No `KeyTakeaways` block detected
- GEO3: No `CitationBlock` or `FAQAccordion` detected

### Alfasa Suggest (`scripts/alfasa-suggest.ts`)

Layer 3 session briefing. Run at session start. Reads local files only, zero network calls.

```bash
npm run alfasa
```

Prints: recent publishes with grades, rolling E-E-A-T average (last 10), registry stats, OStandard reminders, quick commands.

---

## GEO System — Generative Engine Optimization

The site is built for AI citation by ChatGPT, Perplexity, Google AI Overviews, Claude, and Copilot. Traditional SEO ranks on Google's 10 blue links. GEO gets content extracted and surfaced by AI systems.

### The 10 GEO Signals

| Signal | What AI Systems Look For | Implementation |
|---|---|---|
| G1 Direct Answer | Clear answer in first 200 words | `<DirectAnswer answer="..." />` as first body element |
| G2 Key Takeaways | Bullet-point summary | `<KeyTakeaways items={[...]} />` after opening paragraph |
| G3 Structured Answer Units | FAQs, Q&A blocks | `<CitationBlock>` per key claim + `<FAQAccordion>` at end |
| G4 FAQ Schema | FAQPage JSON-LD | Injected by CitationBlock and FAQAccordion |
| G5 Named Author | Verifiable authorship | `author_name` + `author_slug` → `/authors/[slug]` |
| G6 Speakable | Voice AI extractability | `<GEOArticleWrapper speakableSelectors={[...]} />` |
| G7 Keywords Depth | Topical signal breadth | `keywords` array with 10-18 items |
| G8 External Sources | Citation credibility | 2+ external source links per article |
| G9 Specific Facts | Named entities, numbers, dates | 3+ specific figures per article |
| G10 Topical Focus | Single clear topic signal | One question deeply, not many broadly |

### GEO Article Structure (mandatory order)

```
1. <DirectAnswer answer="[2-4 sentences answering the core question]" />
2. <KeyTakeaways items={["Specific fact 1", "Specific fact 2", "Specific fact 3"]} />
3. Opening context paragraph
4. <h2>[Specific Sub-Question | Data Point]</h2>
   Body with named sources, specific figures
5. <CitationBlock question="..." answer="..." type="stat|definition|etc" source="..." sourceUrl="..." />
6. More body sections with H2s
7. <h2>Frequently Asked Questions</h2>
   <FAQAccordion items={[{ question: "...", answer: "..." }]} />
8. <SourcesInterlink sources={[...]} internalLinks={[...]} />
```

### CitationBlock Types

| Type | Use For |
|---|---|
| `definition` | "What is X?" questions |
| `stat` | Key numbers, dates, percentages |
| `comparison` | "X vs Y," pros/cons |
| `timeline` | Sequence of events, history |
| `verdict` | Editorial conclusions backed by evidence |

### GEO Components

| Component | File | Purpose |
|---|---|---|
| `DirectAnswer` | `components/geo/DirectAnswer.tsx` | Green-bordered quick answer, `itemProp="description"` |
| `KeyTakeaways` | `components/geo/KeyTakeaways.tsx` | Bullet-point summary with ItemList schema |
| `CitationBlock` | `components/geo/CitationBlock.tsx` | Structured Q&A with type badge, stat callout, source attribution, FAQPage JSON-LD |
| `FAQAccordion` | `components/geo/FAQAccordion.tsx` | Expandable FAQ with schema |
| `SourcesInterlink` | `components/geo/SourcesInterlink.tsx` | Numbered external sources + internal related links |
| `GEOArticleWrapper` | `components/geo/GEOArticleWrapper.tsx` | Enhanced NewsArticle schema with speakable, mentions |

### AI Crawler Status

All major AI crawlers are permitted in `app/robots.ts`:

| Crawler | System | Status |
|---|---|---|
| `GPTBot` | ChatGPT (OpenAI) | Allowed |
| `ChatGPT-User` | ChatGPT browsing | Allowed |
| `PerplexityBot` | Perplexity AI | Allowed |
| `anthropic-ai` | Claude (Anthropic) | Allowed |
| `Claude-Web` | Claude browsing | Allowed |
| `Google-Extended` | Google Gemini/SGE | Allowed |
| `Bingbot` | Copilot (Microsoft) | Allowed |

The `/llms.txt` route tells AI systems what the site covers, who produces content, and how to cite it correctly.

---

## Writing Highly Scientific, Opinionated Space Pieces

### Which article type to use

Use `--type jack` for depth. Jack articles provide a narrative arc: Background → Core Finding → Implications → What Comes Next. This is ideal for scientific opinion pieces where you need to establish prior work, present the new finding, argue its significance, and project forward.

### Which author to use

- **`simon-minter`** (Simon Alfred Minter) — Science & Technology Reporter. Declared expertise in Space Exploration, NASA, SpaceX, Atmospheric Science, Climate Science, AI. His bio states he draws "directly on primary sources including NASA, NOAA, ESA, and peer-reviewed scientific literature."
- **`max-deleonardis`** (Max DeLeonardis) — Founder & Publisher, Ph.D. in Biomedical Engineering from NC State. Has authored several deep space pieces on the site.

### How to inject scientific opinion

The `CitationBlock` component supports `type="verdict"` specifically for editorial conclusions backed by evidence. The pattern:

1. Present data via `type="stat"` CitationBlocks (key numbers, measurements, source attributions)
2. Synthesize with a `type="verdict"` CitationBlock (editorial conclusion)
3. Use prose sections between CitationBlocks to build the argument

Example from the CRISTAL-02 article: stat blocks establish the evidence (outflow rate, lookback time, merger fraction), and the prose draws the editorial conclusion: "The CRISTAL-02 result restores parsimony to models of early galaxy evolution... No new physics required."

### The DirectAnswer must lead with the thesis

For an opinionated scientific piece, the DirectAnswer should state the thesis immediately — name the finding, the institution, the publication, the mechanism, and the consequence, all in 2-4 sentences. AI systems will quote this verbatim.

### How to write a strong DirectAnswer

**Weak:**
> "This article discusses the recent findings about mycorrhizal fungi networks."

**Strong (OStandard):**
> "A global mapping study led by SPUN has quantified Earth's arbuscular mycorrhizal fungal network at 110 quadrillion kilometers, enough to span roughly 10 percent of the Milky Way's diameter. This living infrastructure supports more than 70 percent of all land plant species and sequesters between 1 billion and 4 billion tons of CO2 annually. Cultivated croplands show fungal network densities 47.3 percent lower than undisturbed ecosystems due to tilling and synthetic fertilizer use."

Rules: Named institution. Specific number. Specific consequence. No em dashes. No hedging.

### Satori thumbnail for space articles

- Layout: `cinematic` (visually dramatic, designed for science/space/deep-dive features)
- Accent: `#00d4ff` (electric cyan, for space/quantum/physics)

### Full pipeline for a space opinion piece

```bash
# 1. Scaffold
npm run alfanso -- \
  --title "Your Space Title" \
  --type jack \
  --cat Science \
  --author simon-minter \
  --tags "NASA,JWST,Exoplanet,Astrophysics"

# 2. Fill all [FILL: ...] markers in the generated JSON
# File path is printed by Alfanso after scaffolding

# 3. Quality check
npm run alfasa
npm run validate:geo

# 4. Publish
npm run publish

# 5. Mint thumbnail (cinematic + cyan accent)
# Use Python script from Satori section above
npm run wiki:sync -- --write
```

### Existing space content (reference)

| Article | Slug | Topic |
|---|---|---|
| Galaxy-Killing Wind | `science-galaxy-killing-wind-cristal-02-jwst-early-universe-2026` | JWST/ALMA, supernova-driven wind, early universe galaxy death |
| Sagittarius A* Wind | `science-sagittarius-a-black-hole-wind-discovery-2026` | Milky Way black hole, ALMA, Chandra, 50-year mystery |
| NASA Roman Telescope | `science-nasa-roman-space-telescope-arrives-florida-2026` | NASA flagship mission arrival |
| MAVEN Mars Orbiter | `science-nasa-maven-mars-orbiter-dead-2026` | 11-year mission retrospective |
| ISS Zvezda Leak | `science-iss-zvezda-air-leak-dragon-shelter-june-2026` | Space station crisis, Dragon shelter |
| Artemis III Timeline | `science-artemis-iii-nasa-moon-mission-timeline-2026` | Lunar program timeline |
| Blue Origin New Glenn | `science-space-blue-origin-new-glenn-explosion-cape-canaveral-2026` | Launch failure investigation |
| Blue Origin Funding | `blue-origin-10-billion-funding-round-130-billion-valuation-2026` | $10B raise, $130B valuation |
| SpaceX Starfall | `tech-spacex-starfall-reentry-capsule-demo-2026` | Reentry capsule demonstration |
| SpaceX IPO | `finance-spacex-ipo-75-billion-record-valuation-2026` | $75B IPO valuation |
| Northern Lights CME | `science-northern-lights-us-june-2026-cannibal-cme-geomagnetic-storm` | Cannibal CME, geomagnetic storm |
| NASA Cold Atom Lab | `science-nasa-cold-atom-lab-iss-upgrade-quantum-bec-2026` | Quantum BEC upgrade on ISS |
| NASA Swift Rescue | `science-nasa-swift-observatory-rescue-boost-mission-2026` | Observatory rescue mission |
| Second-Gen Black Holes | `science-second-generation-black-holes-ligo-virgo-kagra-2026` | LIGO/Virgo/KAGRA detection |
| Europa Ocean | `science-europa-hidden-ocean-ice-shell-2026` | Hidden ocean, ice shell |
| Euclid Quasars | `science-euclid-telescope-ancient-quasars-2026` | Ancient quasars discovery |
| Hillsborough Meteorite | `science-hillsborough-meteorite-alien-chemistry-2026` | Alien chemistry in meteorite |
| Gravity from Entropy | `science-gravity-from-entropy-gfe-bianconi-2026` | GFE theory, Bianconi |

All live in `content/static/jack_articles/` or `content/static/articles/` and demonstrate the GEO structure in practice.

---

## Trust Pages (must exist and be linked in footer)

- `/about`
- `/editorial-standards`
- `/corrections`
- `/contact`

All four must be visible blue-underlined links in the global footer "Newsroom Policies" row.

---

## Absolute Rules (Never Do)

- Never add `canonical` to `app/layout.tsx` or any shared layout
- Never put `robots.txt` or `sitemap.xml` in `/public`
- Never use `lib/seo.ts` (deleted — use `@/lib/site-config`)
- Never use Supabase for new article writes (static JSON is source of truth)
- Never use any `*DB` component without a matching static JSON file
- Never publish without a `content_registry.json` entry
- Never generate per-article `page.tsx` stubs (routing is via `app/[...slug]/page.tsx`)
- Never store a live CDN URL in `thumbnail_src` — always save PNG to `public/thumbnails/` first
- Never use multi-line curl with shell variables to call Satori — use Python urllib instead
- Never call `satori-neon.vercel.app` for minting (returns 502) — always use `localhost:3000`
- All Supabase-dependent pages must have `export const dynamic = 'force-dynamic'`