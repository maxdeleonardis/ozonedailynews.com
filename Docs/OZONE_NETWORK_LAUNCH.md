# Ozone Network Launch Plan | Post March 2026 Core Update

**Status:** Active. This is the canonical execution plan for hardening the OzoneNews domain (`ozonenetwork.news`) against the March 2026 Google Core Update and the Bing AI-cleanup algorithms.

**Domain:** `https://www.ozonenetwork.news`
**Legal entity:** Ozone Network News LLC (ONN)
**Mission:** A verified, source-cited newsroom. Not a blog. Not an aggregator.

---

## Why This Plan Exists

The Google March 2026 Core Update (rolled out through April 8) rewrote the playbook for news sites:

1. **Site-wide authority** is now the dominant ranking factor, not page-level optimization.
2. **Commoditized content** (generic AI-generated rehashes with zero Information Gain) is being systematically filtered.
3. **Entity verification** matters more than ever, anonymous sites get a Trust Score of zero.
4. **Newsroom structure** (corrections policy, editorial standards, named authors with real external footprints) is now machine-checked via `NewsMediaOrganization` schema.

The rebrand from ObjectWire to OzoneNews on a fresh domain is a strategic reset, we build the entity correctly from day one with no algorithmic baggage.

---

## The Five Pillars

### Pillar 1 | Entity Footprint via Schema

**Goal:** Prove to Google and Bing that OzoneNews is a real news organization, not a blog.

**Required:**

- `NewsMediaOrganization` JSON-LD on the homepage and global layout, not generic `Organization`.
- All four newsroom policy URLs hardcoded into the schema:
  - `publishingPrinciples` → `/editorial-standards`
  - `correctionsPolicy` → `/corrections`
  - `actionableFeedbackPolicy` → `/contact`
  - `ethicsPolicy` → `/editorial-standards`
- `sameAs` array points to real, live external profiles (Twitter, LinkedIn, GitHub for the company).
- Logo URL resolves to a real 600x60 PNG at `/OzoneNews-logo.png`. If the file does not exist, the schema is invalid.
- Every article `author` field is a `Person` object with a `sameAs` array linking to that author's external Twitter or LinkedIn. A bare string author name is no longer acceptable.

**Owned by:** `components/articles/NewsArticleSchema.tsx`, `app/layout.tsx`.

---

### Pillar 2 | Author Footprint and Borrowed Authority

**Goal:** Each named author (Jack Sterling, Max Davis, Tina Reyes, etc.) must exist on the open web outside ozonenetwork.news. If they only exist on our domain, Google treats them as AI pseudonyms.

**Required:**

- Real Twitter/X account for each named author with the handle linked from the author profile page.
- Real LinkedIn profile for each named author with the URL linked from the author profile page.
- If they have written anywhere else (Medium, Substack, prior outlet bylines), link those too.
- Author profile page (`/authors/[slug]`) must include:
  - Real headshot (not a generic avatar).
  - 2 to 3 sentence professional bio detailing their specific beat experience.
  - Beat-specific email address, e.g. `j.sterling@ozonenetwork.news`.
  - `sameAs` array in the page's `Person` schema linking to all external profiles.
- `Person.sameAs` is also embedded inside every `NewsArticle.author` schema property for articles they have written.

**Owned by:** `app/authors/[slug]/page.tsx`, author profile JSON store.

---

### Pillar 3 | Anti-AI Editorial Layer (Information Gain)

**Goal:** Every article that ships must contain at least one piece of Information Gain that does not exist anywhere else on the open web.

**Required on every publish:**

1. **One of the following per article:**
   - An original quote (interview, statement, or first-party source).
   - A contrarian perspective the AI would not have generated.
   - A custom chart, raw screenshot, or primary-source data the AI did not summarize.
   - A "Why This Matters" section written by hand tying the news to a macro trend.
2. **Banned LLM transition phrases** (build will fail if any appear in `content_html`):
   - "In conclusion"
   - "It is important to note"
   - "It is important to remember"
   - "Furthermore, it is crucial"
   - "Furthermore, it is important"
   - "In today's fast-paced world"
   - "In the ever-evolving landscape"
   - "It is worth noting that"
   - "Moreover, it should be noted"
3. **Required section for all JackArticles:** `<JackSection heading="Why This Matters">` placed near the end of the article, written by a human, tying the story to a macro trend.

**Enforcement:** `scripts/validate-ai-footprint.ts` runs at prebuild after `validate-eeat.ts`. Build fails on any banned phrase. Override only with `OZONENEWS_OVERRIDE=true npm run build`.

---

### Pillar 4 | Technical News Crawler Requirements

**Goal:** Google News, Google Top Stories, and Bing News Publisher Hub crawl and index articles within the freshness window.

**Required:**

- **News sitemap (`app/news-sitemap.xml/route.ts`):**
  - Only articles published in the last 48 hours.
  - Maximum 1,000 URLs.
  - Articles older than 48 hours drop off, but remain on the main `sitemap.xml`.
- **Timestamps everywhere use full ISO 8601 with explicit timezone offset:**
  - Correct: `2026-05-18T18:00:00-05:00`
  - Wrong: `2026-05-18T18:00:00Z` (UTC works but tz offset is preferred for news freshness)
  - Wrong: `2026-05-18` (date only, no time)
- **Server-side rendering on every article route:**
  - Every `page.tsx` exports `dynamic = 'force-dynamic'` (already enforced).
  - No client-side JS required to render article text. Hero image, headline, deck, byline, and body must all be in the initial HTML payload.
- **Main sitemap:** capped at 50,000 URLs per file, multiple files allowed via sitemap index.

**Owned by:** `app/news-sitemap.xml/route.ts`, `app/sitemap.ts`.

---

### Pillar 5 | Radical Transparency (The Four Trust Pages)

**Goal:** When a human reviewer from Google News Publisher Center or Bing Publisher Hub audits the site, every excuse to reject us is removed.

**Required pages, all linked from the global footer:**

1. **`/about`** — Who owns Ozone Network News LLC, what the mission is, physical/digital contact information, funding model (self-funded, no advertising or sponsored content), editorial independence statement.
2. **`/editorial-standards`** — Clear policy. Example language: *"Ozone Network is committed to accurate reporting. Our writers verify facts across multiple primary sources before publication. We do not use fully automated AI generation without human editorial review."* Must cover: sourcing, AI policy, fact-checking process, conflict of interest, anonymous sources, corrections process.
3. **`/corrections`** — Real form or email (`corrections@ozonenetwork.news`) where readers flag errors. Must state that corrections are logged at the top of amended articles with timestamp, original text preserved.
4. **`/contact`** — Multiple contact methods (general, editorial, corrections, tips, advertising, press). Real physical mailing address if available.

**Footer requirement:** All four URLs must appear as visible, blue-underlined links in the global footer (not buried in a "Legal" dropdown). Render order: About, Editorial Standards, Corrections, Contact.

**Owned by:** `app/about/page.tsx`, `app/editorial-standards/page.tsx`, `app/corrections/page.tsx`, `app/contact/page.tsx`, `app/layout.tsx` (footer).

---

## Execution Checklist

Run in order. Each step is a separate commit.

### Phase 1 | Documentation (this turn)
- [x] Create this file (`Docs/OZONE_NETWORK_LAUNCH.md`).
- [ ] Update `Docs/MANIFESTO.md` brand strings and add Information Gain principle.
- [ ] Update `Docs/Editorial Standard.txt` with AI policy and banned phrase list.
- [ ] Update `.github/copilot-instructions.md` with the five pillars summary.

### Phase 2 | Schema and Footer
- [ ] Fix `OrganizationSchema` in `components/articles/NewsArticleSchema.tsx`:
  - Real `sameAs` URLs (drop fake Facebook/TikTok, use real Twitter and LinkedIn).
  - Fix typo `"OzoneNews News"` → `"OzoneNews"`.
  - Logo URL points to real file.
- [ ] Upgrade `NewsArticleSchema` `author` to support `sameAs` array.
- [ ] Footer in `app/layout.tsx`: visible blue-underlined links to all four trust pages in a dedicated "Newsroom Policies" row.

### Phase 3 | Trust Pages
- [ ] Verify `/about` covers ownership, mission, funding, contact.
- [ ] Rewrite `/editorial-standards` to cover sourcing, AI policy, fact-checking, corrections process.
- [ ] Rewrite `/corrections` with the form/email and the correction-logging policy.
- [ ] Verify or create `/contact` with all contact methods.

### Phase 4 | Authors
- [ ] Audit `/authors/[slug]` pages, ensure each has headshot, real bio, beat email, external `sameAs` links.
- [ ] Author JSON store: add `sameAs` field per author.
- [ ] Wire `sameAs` into `NewsArticleSchema.author` for every article render.

### Phase 5 | News Sitemap and Timestamps
- [ ] `app/news-sitemap.xml/route.ts`: 48-hour window, 1000 URL cap.
- [ ] Audit all article `publishedTime` fields, ensure full ISO 8601 with timezone offset.

### Phase 6 | Anti-AI Lint
- [ ] Create `scripts/validate-ai-footprint.ts` with the banned phrase list.
- [ ] Wire into `package.json` prebuild after `validate-eeat.ts`.
- [ ] Run first audit, fix or override existing violations.

---

## Daily Editorial Discipline

When writing any new article on the Ozone Network domain:

1. Write the headline and lede by hand. Never paste an AI-generated lede directly.
2. Before publishing, scan the body for any banned LLM transition phrase. The build will catch them, but catch them first.
3. Inject at least one Information Gain element (original quote, custom data, contrarian take, or "Why This Matters" section).
4. Verify the author has an external footprint, if not, do not byline them on the article. Use the ONN house byline instead.
5. Set `publishedTime` to a precise ISO 8601 timestamp with timezone offset, not midnight UTC.
