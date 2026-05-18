# Alfasa | Content Editor Assistant — Full System Plan

**Version:** 1.0  
**Created:** May 5, 2026  
**Status:** Planned — Phase 1 Ready to Build  
**Author:** OzoneNews Editorial + Engineering

---

## What Alfasa Is

Alfasa is OzoneNews's in-repo editorial assistant. It is a **suggestion engine and writing aid**, not an auto-publisher. It lives entirely in the `scripts/alfasa/` directory, runs from the terminal, and has zero browser-side footprint.

Alfasa exists to solve one problem: **when we open a session, we should know immediately what matters most** — what is stale, what is getting traffic, what we were working on last, and where the content gaps are. Instead of manually auditing `content_registry.json` or checking Google Analytics, Alfasa surfaces that context in under 3 seconds at session start.

Alfasa never publishes. It never writes directly to Supabase. It never fires a query without a human decision first. The editorial loop is always:

```
Alfasa suggests → Human writes or edits → wiki:publish → Supabase
```

---

## Why Alfasa Exists (The Problem It Solves)

OzoneNews has 330+ indexed pages across 25+ topic verticals. Without a session context tool:

- We forget what we were writing last session
- High-traffic articles go stale for 30-60 days without anyone noticing
- Newly created pages sit as orphans with no inbound links
- We build new content into verticals that already have gaps in existing clusters
- We have no signal on which existing pages are worth updating vs. which are low-value

Alfasa solves all five with two local file reads and zero external calls.

---

## What Alfasa Must Never Do

These are hard constraints and exist for two reasons: (1) the Supabase excessive-calls ban, (2) Google's scaled AI content spam policy.

| Prohibited | Reason |
|---|---|
| Query Supabase directly at suggestion time | Caused the April 22 impressions drop. Supabase reads are reserved for ISR page rendering via `lib/` service layer only. |
| Auto-publish any article | Violates Google's helpful content policy. Every AI-drafted content must have human editorial review and a manual `wiki:publish`. |
| Run in the Next.js app (browser-side) | Alfasa is a developer tool. It has no place in the production bundle. |
| Cache-bust or re-fetch GA data more than once per day | One GA API call per day maximum. All session suggestions use the cached file. |
| Generate and submit a sitemap or registry entry | That is `wiki:publish`'s job. Alfasa only reads these files. |
| Write to `app/` or `content/` directly | Alfasa writes drafts to `.alfasa/drafts/` only. Human moves them. |

---

## Architecture Overview

```
Session start
     │
     ▼
npm run alfasa
     │
     ├── reads: content_registry.json         (local, instant, zero DB)
     ├── reads: .alfasa/session_log.json       (last 10 sessions)
     ├── reads: .alfasa/ga-cache.json          (updated once/day by ga-sync.ts)
     ├── reads: .alfasa/stale-thresholds.json  (per-category staleness rules)
     │
     ▼
suggest.ts
     │
     ├── stale-check.ts   → articles not updated in N days, cross-referenced with GA traffic
     ├── orphan-check.ts  → pages with no inbound internal links in the codebase
     ├── gap-check.ts     → hub pages that exist but have fewer than 3 sub-articles linked
     │
     ▼
Prints structured session briefing to terminal
No network calls. No Supabase. No file writes.
```

---

## File Structure

```
scripts/
  alfasa/
    suggest.ts              Main entry point. Orchestrates all checks, prints briefing.
    session-log.ts          Writes session activity to .alfasa/session_log.json.
                            Hooked into wiki:publish so every publish is auto-logged.
    stale-check.ts          Reads registry + GA cache. Flags articles by staleness + traffic tier.
    orphan-check.ts         Scans all page.tsx files for <Link href> and <a href> usage.
                            Builds a map of which pages receive inbound links.
                            Pages with zero inbound = orphan.
    gap-check.ts            Reads hub pages from registry. Counts linked sub-articles.
                            Hubs with fewer than 3 sub-articles = gap flagged.
    ga-sync.ts              Fetches GA4 top-200 pages (7d + 28d sessions) once per day.
                            Writes to .alfasa/ga-cache.json. Never called at session time.
    brief-writer.ts         (Phase 3) Reads a stale/gap article and produces a structured
                            content brief: what changed, suggested sub-articles, target keywords.
                            Writes to .alfasa/drafts/[slug]-brief.md. Never auto-publishes.

.alfasa/
  session_log.json          Last 10 sessions. Each entry: date, files touched, articles published.
  ga-cache.json             Top 200 pages by sessions. Updated by ga-sync.ts (daily cron).
  stale-thresholds.json     Per-category staleness rules (see below).
  drafts/                   Content briefs written by brief-writer.ts. Human reviews before use.
```

---

## Staleness Thresholds

Different content types have different acceptable update windows. These are stored in `.alfasa/stale-thresholds.json` and can be adjusted without touching code.

```json
{
  "news": 7,
  "gaming": 14,
  "tech": 21,
  "finance": 14,
  "crypto": 7,
  "wiki": 90,
  "hub": 30,
  "creator": 60,
  "service": 180,
  "default": 30
}
```

A `/video-games/gta-6` hub page that hasn't been updated in 31 days is flagged. A `/service/surveillance` page updated 60 days ago is not. The category is read from `content_registry.json` entries.

---

## Session Briefing Output Format

```
━━━ ALFASA | May 5, 2026 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

▶ LAST SESSION (May 4, 2026)
  Published : taylor-swift-trademark-voice-image-ai-2026
  Edited    : service/page.tsx, service/investigative-reporting, tip-the-newsroom
  Restored  : 14 copyright pages

▶ STALE HIGH-TRAFFIC ARTICLES  (traffic + not updated in threshold window)
  HIGH   /video-games/gta-6              2,341 sessions/wk  |  last update: Mar 12  (54d)
  HIGH   /open-ai                        1,876 sessions/wk  |  last update: Feb 28  (66d)
  MED    /video-games/switch2            1,204 sessions/wk  |  last update: Mar 3   (63d)
  MED    /copyright                        412 sessions/wk  |  last update: Apr 2   (33d)

▶ ORPHAN PAGES  (no inbound internal links found)
  /copyright/elemental-atlus-royalties
  /service/tip-the-newsroom
  /service/document-review

▶ HUB GAPS  (hub pages with fewer than 3 linked sub-articles)
  /rocket-league              0 linked sub-articles
  /service/investigative-reporting  (new — not yet linked from cluster)

▶ SUGGESTED NEXT ACTIONS
  1. Update /video-games/gta-6 hub — 54 days stale, highest-traffic page
  2. Run npm run alfasa:brief -- /video-games/gta-6 to generate a content brief
  3. Add inbound link to /service/tip-the-newsroom from /service/page.tsx
  4. Add inbound link to /service/document-review from /service/investigative-reporting

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## GA Integration | The Right Way

### Why GA4 Data API (not GA dashboard)

The GA4 Data API is:
- Free (included with any GA4 property)
- Server-side only (no browser tracking, no client calls)
- Queryable via a Google Cloud service account (no OAuth user flow)
- Returns structured JSON (pageviews, sessions, by URL, by date range)

We use it for one thing: knowing which existing pages are getting real organic traffic so Alfasa can prioritize stale updates.

### Data Flow

```
ga-sync.ts  (runs once per day, cron or manual)
  │
  ├── authenticates via GOOGLE_APPLICATION_CREDENTIALS (service account JSON)
  ├── queries GA4 Data API: top 200 pages, sessions, 7d + 28d windows
  ├── writes structured result to .alfasa/ga-cache.json
  └── exits. No Supabase. No Next.js. No deploy needed.

suggest.ts  (runs at session start)
  │
  └── reads .alfasa/ga-cache.json  (local disk, <1ms)
      never calls GA API
      never calls Supabase
```

### ga-cache.json Structure

```json
{
  "generated": "2026-05-05T08:00:00Z",
  "window_7d": [
    { "path": "/video-games/gta-6", "sessions": 2341, "pageviews": 4102 },
    { "path": "/open-ai", "sessions": 1876, "pageviews": 3204 }
  ],
  "window_28d": [
    { "path": "/video-games/gta-6", "sessions": 9876, "pageviews": 16000 }
  ]
}
```

### One-Time GA Setup (human steps, done once)

1. Go to [Google Cloud Console](https://console.cloud.google.com) → Create a new project (or use existing)
2. Enable the **Google Analytics Data API** on the project
3. Create a **Service Account** — name it `alfasa-ga-reader` or similar
4. Download the service account JSON key file → save as `.alfasa/ga-service-account.json`
5. Add `.alfasa/ga-service-account.json` to `.gitignore` (never commit this file)
6. Go to GA4 Admin → Property → Account Access Management → Add the service account email as **Viewer**
7. Add to `.env.local`:
   ```
   GOOGLE_APPLICATION_CREDENTIALS=.alfasa/ga-service-account.json
   GA4_PROPERTY_ID=properties/XXXXXXXXX
   ```
8. Add to Railway environment variables (same two vars, using the JSON content inline or a Railway secret file)
9. Install the GA4 client library:
   ```bash
   npm install @google-analytics/data
   ```

---

## Tech Stack Decision | Why Not OpenAI API for Alfasa

This was evaluated and rejected for Phase 1 and Phase 2. Here is the reasoning:

### Option A: OpenAI API (rejected for core Alfasa)

**What it would do:** Send article content + GA data to GPT-4o, receive back a prioritized action list and content brief in natural language.

**Why we are not using it for the suggestion engine:**
- Costs money per session start (even at GPT-4o mini pricing, 10 sessions/day with context = ~$3-8/month, and grows with content size)
- Introduces a network dependency at session start — if OpenAI is down or rate-limited, Alfasa fails
- The suggestion logic (stale check, orphan check, gap check) is deterministic — it does not need LLM reasoning
- Any AI involvement in the suggestion pipeline creates a paper trail that complicates the Google AI content policy defense

**Where OpenAI API is acceptable (Phase 3 only):**
- Generating a **content brief** for a specific article when explicitly requested by the developer
- The brief is saved as a `.md` file in `.alfasa/drafts/` — it is never auto-published
- The developer runs `npm run alfasa:brief -- /video-games/gta-6` manually, reviews the output, then writes or edits the actual article

### Option B: Pure TypeScript scripts reading local files (chosen for Phase 1 + Phase 2)

- Zero cost
- Zero network dependency at session start
- Deterministic and auditable
- Fast (<1 second for full briefing)
- No third-party API keys required for Phase 1

### Option C: Wiring APIs together manually (Langchain / custom agent)

Evaluated and rejected. An agent loop that reads GA, reads the registry, and generates actions adds complexity without adding value over deterministic TypeScript for the suggestion layer. Agent frameworks are appropriate when reasoning over ambiguous inputs is needed. Our inputs (registry dates, GA numbers, link presence/absence) are structured and unambiguous.

### Final Stack Decision

| Component | Technology | Reason |
|---|---|---|
| Suggestion engine | TypeScript CLI scripts | Deterministic, fast, zero cost, no external deps |
| GA data fetch | `@google-analytics/data` (official Google client) | Official, stable, free |
| Session logging | JSON file writes in `scripts/alfasa/session-log.ts` | Simple, portable, readable |
| Content briefs (Phase 3) | OpenAI API (GPT-4o mini) called manually only | Cost-controlled, never auto-publishes |
| Orphan/link scanning | `grep` + TypeScript file traversal | No AST parser needed for link href extraction |
| Staleness rules | `.alfasa/stale-thresholds.json` | Human-editable without code changes |

---

## Phased Build Plan

### Phase 1 — Local suggestions, no GA (build now, zero risk, zero cost)

**Deliverables:**
- `scripts/alfasa/suggest.ts` — main entry, reads registry + session log, prints briefing
- `scripts/alfasa/session-log.ts` — writes session activity on `wiki:publish` hook
- `scripts/alfasa/stale-check.ts` — staleness check using registry dates + thresholds config
- `scripts/alfasa/orphan-check.ts` — scans all `page.tsx` files for `<Link href>` and `<a href>`, flags pages with zero inbound links
- `scripts/alfasa/gap-check.ts` — checks hub pages for sub-article count
- `.alfasa/stale-thresholds.json` — editable staleness config
- `npm run alfasa` added to `package.json`

**What you get:** Full session briefing in under 1 second. Stale articles, orphan pages, hub gaps. No GA traffic data yet — all articles treated equally by recency only.

**Risk:** Zero. No network calls, no external dependencies, no Supabase.

### Phase 2 — GA integration (after one-time GA setup)

**Deliverables:**
- `scripts/alfasa/ga-sync.ts` — daily GA4 Data API pull, writes `.alfasa/ga-cache.json`
- `suggest.ts` updated to read GA cache and tier articles by traffic (HIGH / MED / LOW)
- `package.json` adds `alfasa:sync` command for manual GA refresh
- Optional: Railway cron job to auto-run `ga-sync.ts` daily at 6am CT

**What you get:** Stale article suggestions are now ranked by actual traffic. A stale `/video-games/gta-6` at 2,341 sessions/week surfaces before a stale `/rocket-league` at 12 sessions/week.

**Risk:** Low. One GA API call per day. Cached locally. Session start still reads only local files.

### Phase 3 — Content brief generation (manual, human-triggered only)

**Deliverables:**
- `scripts/alfasa/brief-writer.ts` — reads a specific article's registry entry, GA data, and category context. Calls OpenAI API (GPT-4o mini) to generate a structured content brief. Saves to `.alfasa/drafts/[slug]-brief.md`.
- `npm run alfasa:brief -- /path/to/article` command
- Brief format: current article summary, what has changed in the topic since last update, 3-5 suggested new sub-sections, 8-12 updated target keywords, 3 suggested internal links to add

**Editorial rule:** The brief is an input to human writing. It is never submitted to `wiki:publish` directly. The developer or editor reads the brief, writes or edits the article, then runs `wiki:publish` manually.

**Risk:** Low. OpenAI cost is per-brief, not per-session. Only called when explicitly requested.

---

## session_log.json Schema

```json
{
  "sessions": [
    {
      "date": "2026-05-04",
      "published": [
        "copyright/news/taylor-swift-trademark-voice-image-ai-2026"
      ],
      "edited": [
        "service/page.tsx",
        "service/investigative-reporting/page.tsx",
        "service/tip-the-newsroom/page.tsx"
      ],
      "restored": [
        "copyright/elemental-atlus-royalties/page.tsx"
      ],
      "notes": "Restored 14 deleted copyright pages. Added 3 journalism service pages."
    }
  ]
}
```

Maximum 10 sessions stored. Oldest entry dropped when 11th is written. The log is human-readable and can be edited manually.

---

## Integration Points with Existing Tooling

| Existing Tool | Alfasa Integration |
|---|---|
| `npm run wiki:publish` | After successful publish, `session-log.ts` appends the slug to today's session entry |
| `content_registry.json` | Read-only by Alfasa. Never written. Registry is managed by `wiki:publish` and `sync-registry.ts`. |
| `lib/blog-service.ts` | Not touched by Alfasa. Alfasa never queries Supabase. |
| `npm run wiki:status` | Alfasa is a separate concern. Status checks sync state. Alfasa checks editorial priority. |
| `.gitignore` | `.alfasa/ga-service-account.json` must be gitignored. `ga-cache.json` and `session_log.json` are committed (no sensitive data). |

---

## .gitignore Additions Required

```
# Alfasa
.alfasa/ga-service-account.json
.alfasa/drafts/*.md
```

The `ga-cache.json` and `session_log.json` are committed. They contain no sensitive data (URL paths and session counts only) and committing them means the session history survives across machine reloads.

---

## Google AI Content Policy | Alfasa's Editorial Firewall

The ban recovery plan depends on demonstrating to Google's classifier that OzoneNews produces editorial content with genuine human oversight. Alfasa's architecture enforces this by design:

1. **Alfasa never calls `wiki:publish`** — only a human running the command in the terminal can publish
2. **Briefs are saved as `.md` files** — they are input documents, not publishable content
3. **No auto-scheduling, no auto-drafting to Supabase** — the pipeline always terminates at a file on disk that a human must act on
4. **Session logs are auditable** — if Google ever requests evidence of editorial process, the session log shows human-authored publishing dates and explicit editorial decisions

The goal is a publishing workflow that could survive a manual review: every article was touched by a human, every `wiki:publish` was a deliberate act, every GA-informed update was a human editorial decision informed by data.

---

## Summary | What We Are Building and Why

| What | Why |
|---|---|
| `npm run alfasa` at session start | Replace manual memory with a 3-second briefing |
| Stale check | High-traffic articles going stale is the single biggest recovery lever for the HCU penalty |
| Orphan check | Orphan pages waste crawl budget and dilute PageRank distribution |
| Hub gap check | Under-linked hubs signal shallow topical authority to Google |
| GA cache (Phase 2) | Prioritize effort on pages that already have real traffic |
| Content briefs (Phase 3) | Speed up human writing without replacing it |
| No auto-publish, ever | Protect the domain from further algorithmic penalty |

---

*This document lives at `Docs/alfasa_content_editor_assistant.md` and is the single source of truth for Alfasa architecture decisions. Update it before changing any script behavior.*
