# Ozone Network | Day 1 Legitimate News Network Execution Plan

**Date:** May 20, 2026
**Domain:** `https://www.ozonenetwork.news`
**Legal entity:** Ozone Network News LLC (ONN)
**Status:** Active — this is the working checklist, not a strategy doc.

The March 2026 Google Core Update (wrapped April 8) rewrote news SEO. It evaluates
site-wide authority, not page-level keyword density. Anonymous sites, AI-pseudonym authors,
and generic AI rewrites now receive a Trust Score of zero. This document maps every
requirement against current codebase state so nothing ships incomplete.

---

## Current State vs. Requirements

### 1. NewsMediaOrganization Schema

**Requirement:** `NewsMediaOrganization` JSON-LD with `publishingPrinciples`,
`correctionsPolicy`, `actionableFeedbackPolicy`, `ethicsPolicy`, `sameAs`, and a
live logo URL. Author field must be a `Person` object with `sameAs`, not a bare string.

**Status:**

| Check | Status | File |
|---|---|---|
| `NewsMediaOrganization` type on articles | DONE | `components/articles/NewsArticleSchema.tsx` |
| `publishingPrinciples` → `/editorial-standards` | DONE | `NewsArticleSchema.tsx` line 191 |
| `correctionsPolicy` → `/corrections` | DONE | `NewsArticleSchema.tsx` |
| `actionableFeedbackPolicy` → `/contact` | DONE | `NewsArticleSchema.tsx` |
| Author is `Person` object not bare string | DONE | `NewsArticleSchema.tsx` lines 108-113 |
| Author `sameAs` fallback map populated | PARTIAL | see Author Footprint section |
| Logo URL resolves to real file | **VERIFY** | `/OzoneNews-logo.png` must exist in `/public` |
| `sameAs` for org points to live social profiles | **VERIFY** | `NewsArticleSchema.tsx` lines 126-130 |

**Action required:** Confirm `public/OzoneNews-logo.png` exists and is 600x60px minimum.
Run Google Rich Results Test on any article page to verify schema passes.

---

### 2. Author Footprint (Biggest Gap)

Google stated in the 2026 documentation that authors who exist only on one domain are
treated as AI pseudonyms. The `AUTHOR_SAME_AS` map in `NewsArticleSchema.tsx` is the
enforcement mechanism. Current state:

| Author | External Twitter | External LinkedIn | Status |
|---|---|---|---|
| Max DeLeonardis | `x.com/ozonedailynews` | `linkedin.com/in/maximillion-deleonardis` | DONE |
| Tina Boyle | none | none | Facebook only, **INCOMPLETE** |
| Jack Sterling | none | none | Empty `sameAs` array, **BLOCKING** |
| Alfasa Chillingsworth | none | none | Empty `sameAs` array, **BLOCKING** |
| Jack Brennan | none | none | Empty `sameAs` array, **BLOCKING** |

**Why this blocks indexing:** Any article bylined to Jack Sterling, Alfasa Chillingsworth,
or Jack Brennan currently ships with no `sameAs` in the `Person` schema. Google's quality
raters have explicit instructions to flag this as a trust signal failure.

**Fix for each author — do this before the next article ships under their name:**

1. Create a real Twitter/X account. Handle format: `@[firstname]sterling`, `@alfasaonews`, etc.
2. Create a LinkedIn profile. Takes 10 minutes. Does not need to be heavily built out to count.
3. Add both URLs to `AUTHOR_SAME_AS` in `components/articles/NewsArticleSchema.tsx`.
4. Add both URLs to the `sameAs` array in `app/authors/[slug]/page.tsx` for each author.

**If real profiles cannot be created in time:** Use the "OzoneNews Editorial Team" house
byline. The house byline maps to Max DeLeonardis's verified profiles and passes the
footprint check. Do not ship articles under a named author with an empty `sameAs`.

---

### 3. Trust Pages

**Requirement:** Four pages, all live, all linked from global footer with visible blue
underlined links. Human reviewer at Google News Publisher Center will check these directly.

| Page | Exists | Footer Link | Content Quality |
|---|---|---|---|
| `/about` | YES | **VERIFY** | States legal entity, ownership, mission. Looks correct. |
| `/editorial-standards` | YES | **VERIFY** | Must state no fully automated AI generation without human review. |
| `/corrections` | YES | **VERIFY** | Must have `corrections@ozonenetwork.news` or a form. |
| `/contact` | YES | **VERIFY** | Must have physical or verifiable digital contact. |

**Action required:** Open the live site footer. Confirm all four links are visible, blue,
underlined, and in a dedicated "Newsroom Policies" row. If any are missing from the footer,
add them to the nav component before submitting to Google News Publisher Center.

---

### 4. Article Content Pipeline

**Current architecture (correct for Day 1):**

```
Write article content
        ↓
content/static/articles/[slug].json   ← source of truth, no Supabase
        ↓
app/[route]/page.tsx                  ← metadata, canonical, OpenGraph
        ↓
npm run registry:sync -- --write      ← adds to lib/content-registry.ts
        ↓
Sitemap / news-sitemap / JSON-LD      ← Google sees it
```

**Supabase role going forward:**

- Article content: STATIC JSON ONLY. Never write new articles to Supabase.
- Supabase stays for: auth, saved articles, reading history, admin editor UI.
- `wiki:sync` script: ignore it. It mirrors content to Supabase and is legacy.
- The only sync command to run after a new article: `npm run registry:sync -- --write`

---

### 5. Technical News Crawler Requirements

| Requirement | Status | Notes |
|---|---|---|
| News sitemap 48hr window, 1,000 URL max | DONE | `app/news-sitemap.xml/route.ts` |
| ISO 8601 timestamps with timezone offset | DONE | enforced in `published_at` field |
| Server-side rendering on article routes | DONE | `export const dynamic = 'force-dynamic'` |
| Canonical per-page, not in layout | DONE | April 2026 canonical bug fixed |
| No `robots.txt` in `/public` | DONE | `scripts/validate-public.ts` guards this |
| `content-registry.ts` entry for every article | **MANUAL** | run `registry:sync` after each new article |
| `imageUrl` 1200x675 in registry entry for Top Stories | **VERIFY** | articles without image skip Top Stories |

**Top Stories image note:** Google requires a 1200x675 (16:9) image in the article schema
to be eligible for Top Stories. 1200x630 fails. Any new article without `thumbnail_src` set
will not appear in Top Stories. Set a real hosted image URL or use a quality Unsplash URL.

---

### 6. Anti-AI Editorial Layer

**Build guards that are already in place:**

- `scripts/validate-ai-footprint.ts` — runs at prebuild, fails build on banned LLM phrases
- Banned: "In conclusion", "It is important to note", "It is important to remember",
  "Furthermore, it is crucial", "In today's fast-paced world", "In the ever-evolving landscape",
  "It is worth noting that", "Moreover, it should be noted", "Navigating the complex",
  "Delve into", "In summary"

**What the build guard does NOT check (human responsibility):**

Every article must have at least one of the following before it publishes:

1. An original quote from a named person (not paraphrased from another article)
2. A "Why This Matters" section written in editorial voice, not AI voice
3. A custom data table, chart, or screenshot that does not exist on the source page
4. A contrarian take or framing angle not present in the primary source article

This is the Information Gain requirement from the March 2026 Core Update. Generic
AI rewrites of CNBC or Reuters articles will not rank. The article you write must
give the reader something they cannot get from the original source alone.

---

### 7. External Submissions (Do These in Order)

Complete steps 1-6 above first. Submitting to Google News with broken trust pages or
empty author `sameAs` is worse than not submitting, it creates a rejection record.

**Step 1: Google News Publisher Center**
URL: `https://publishercenter.google.com`
Requirements before submitting:
- All four trust pages live and linked from footer
- News sitemap returning valid 48hr articles
- At least 10 published articles with proper schema
- At least one named author with real external `sameAs`

**Step 2: Bing Webmaster Tools**
URL: `https://www.bing.com/webmasters`
Submit sitemap and news sitemap. Bing's news crawler is more lenient than Google's
but still checks for `NewsArticle` schema and author identity signals.

**Step 3: Google Search Console**
URL: `https://search.google.com/search-console`
Submit both `sitemap.xml` and `news-sitemap.xml`. Monitor Core Web Vitals.
This is the baseline before everything else.

**Step 4: MuckRack Publisher Listing**
URL: `https://muckrack.com`
Lists OzoneNews so PR firms and publicists can find the newsroom for exclusive
quotes and embargoes. Free to list. This is how you start getting primary sources
to reach out rather than you chasing them.

**Step 5: Online News Association (ONA)**
URL: `https://journalists.org`
Membership gives access to press credentialing networks and peer editorial review.
Listed membership is itself an E-E-A-T signal.

**Step 6: Wikidata Entity**
Create a Wikidata item for Ozone Network News LLC as a media organization. Include
official URL, founding date, location, and links to social profiles. This is what
generates the Google Knowledge Panel for the organization. Without a Wikidata entry,
the Knowledge Panel will not appear in branded searches.

---

### 8. What "Day 1" Actually Means for Ranking

The March 2026 update does not penalize new domains. It evaluates the quality of the
entity footprint you build from the first crawl. A new domain that ships with correct
`NewsMediaOrganization` schema, named authors with real external profiles, all four
trust pages, and Information Gain content will outrank a 3-year-old domain that carries
algorithmic baggage from AI spam, anonymous authorship, and missing trust signals.

The advantage of starting fresh is that every article indexed builds the entity footprint
correctly from the first day. The 447+ articles in the registry are leverage, but only
if the entity shell they sit inside passes the trust checks. Fix the author footprints
first. The schema infrastructure is already correct.

---

## Priority Order (Execute in This Sequence)

1. **Create Twitter and LinkedIn for Jack Sterling, Alfasa Chillingsworth, Jack Brennan** — blocking, do today
2. **Update `AUTHOR_SAME_AS` map** in `components/articles/NewsArticleSchema.tsx` with real profile URLs
3. **Verify footer has all four trust page links** — human reviewer check at Google News
4. **Verify `public/OzoneNews-logo.png` exists** — invalid logo breaks `NewsMediaOrganization` schema
5. **Run `npm run registry:sync -- --write`** after every new article to add to content registry
6. **Submit to Google Search Console** with both sitemaps
7. **Submit to Google News Publisher Center** once steps 1-5 are complete
8. **Create Wikidata entity** for Ozone Network News LLC
9. **List on MuckRack** for inbound press access
