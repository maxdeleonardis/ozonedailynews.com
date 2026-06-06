<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# OzoneNews | Agent / Copilot Instructions

**Last updated:** June 6, 2026
**Stack:** Next.js 16.2.6 (Turbopack, App Router), Supabase (Pro), Vercel, GitHub Git bridge
**Repo:** `aMarketology/ozonedailynews.com` — single repo, multi-brand via Git branches

---

## Architecture in One Paragraph

Static JSON files in `content/static/` are the source of truth for all published content. Supabase holds drafts and editor auth only. When an editor publishes via `/admin`, the Git bridge (`app/api/cms/publish/route.ts`) commits the article JSON atomically to GitHub, triggers an ISR revalidate, and marks the Supabase row as `published`. Git = published. Supabase = draft pipeline + auth + routing table.

---

## Commands You Will Run

```bash
npm run dev                    # local dev (port 3001 if 3000 is taken)
npm run build                  # production build — triggers prebuild SEO checks automatically
npm run publish                # full pipeline: sync-registry + backfill + mint:thumbnails + git push
npm run backfill               # push all static JSONs to Supabase (auto-loads .env.local)
npm run wiki:sync -- --write   # register new static JSONs in content_registry.json
npm run mint:thumbnails        # generate missing Satori OG thumbnails for all articles
npm run rss:digest             # fetch 27 RSS feeds → content/daily-digest/YYYY-MM-DD.md
npm run validate:eeat          # E-E-A-T audit on all published articles
npm run validate:canonicals    # confirm no layout-level canonical overrides exist
npm run alfasa                 # session briefing / SEO quality report
```

**`npm run build` automatically runs (via `prebuild`):**
1. `validate-public.ts` — no forbidden files in `/public`
2. `validate-canonicals.ts` — no layout-level canonical overrides
3. `sync-registry.ts --write` — content_registry.json up to date

**`npm run publish` runs in order:**
1. `sync-registry.ts --write`
2. `backfill-articles.ts` (with .env.local)
3. `mint-thumbnails.ts`
4. `git add -A && git commit && git push`

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

**Per-deployment env vars (set in Railway per service):**
```
NEXT_PUBLIC_BRAND_SLUG=basil
NEXT_PUBLIC_SITE_NAME=BasilNews
NEXT_PUBLIC_SITE_URL=https://www.basilnews.com
NEXT_PUBLIC_SITE_EMAIL=editorial@basilnews.com
NEXT_PUBLIC_SITE_TWITTER=@basilnews
NEXT_PUBLIC_SITE_CATEGORIES=Finance,News,Crypto
NEXT_PUBLIC_SITE_SLUG_PREFIXES=/finance,/jobs,/markets
GITHUB_DEFAULT_BRANCH=basil
```

The CMS (`/admin`) is fully brand-aware. The header, canonical URL auto-fill, Satori API call, and author list all read from these env vars. No hardcoded `ozonedailynews.com` references remain in the CMS.

---

## Content Pipeline

### Writing a New Article

1. Drop JSON into the correct `content/static/` store:
   - `jack_articles/` — long-form (JackArticleDB renderer)
   - `articles/` — standard news (NewsArticleDB renderer)
   - `wiki_articles/` — glossary/reference
   - `creator_articles/` — creator profiles
   - `article_pages/` — evergreen guides
2. Run `npm run publish` — syncs registry, upserts to Supabase (CMS visibility), mints thumbnail, commits + pushes

### Alternatively — Write via CMS

1. Go to `/admin/articles/new`
2. Fill form, click **Save Draft** (goes to Supabase)
3. Click **Publish to GitHub** (E-E-A-T gate runs, atomic Git commit, ISR revalidate)

### Article Type Routing

All article routing goes through `app/[...slug]/page.tsx` — NO per-article `page.tsx` stubs are generated. The slug resolves via `content_registry.json` → static JSON → renderer component. Never generate individual page.tsx stubs.

---

## Headless CMS — Current Feature State (June 2026)

| Feature | Route | Status |
|---|---|---|
| Article list | `/admin/articles` | Live |
| Create article | `/admin/articles/new` | Live |
| Edit article | `/admin/articles/edit/[slug]` | Live |
| Save draft | `POST /api/cms/articles` | Live |
| Update draft | `PUT /api/cms/articles/[slug]` | Live |
| Delete draft | `DELETE /api/cms/articles/[slug]` | Live |
| Publish to GitHub | `POST /api/cms/publish` | Live |
| Media upload | `POST /api/cms/media` | Live (Supabase Storage) |
| Satori thumbnail mint | CMS Thumbnail section | Live (purple ⚡ button) |
| Live QA panel | Right sidebar in editor | Live (word count, H2, dashes, AI phrases, meta, canonical, author) |
| E-E-A-T gate on publish | `/api/cms/publish` | Live (non-blocking warnings) |
| ISR revalidate on publish | `/api/cms/publish` | Live |
| Atomic GitHub commit | `lib/github-commit.ts` | Live (3x retry on collision) |

---

## File Structure — What Lives Where

```
content/
  static/
    articles/            # standard news JSON
    jack_articles/       # long-form JSON (JackArticleDB)
    wiki_articles/       # glossary JSON
    creator_articles/    # creator profile JSON
    article_pages/       # evergreen guide JSON
    sterling_articles/   # reserved
    content_registry.json  # master sitemap + routing registry (22 entries as of June 6)
  articles/              # ID-addressed permanent copies (UUID filename)
  daily-digest/          # YYYY-MM-DD.md — RSS digest output (gitignored)

app/
  [...]slug]/            # universal article router — NO per-article stubs
  admin/                 # CMS UI (force-dynamic, editor-auth-gated)
  api/cms/               # publish, articles CRUD, media, reroute, update bridges

lib/
  authors.ts             # SINGLE SOURCE OF TRUTH for author entities (E-E-A-T)
  site-config.ts         # all brand identity from env vars (NEXT_PUBLIC_*)
  github-commit.ts       # atomic multi-file Git commit (shared by publish + update)
  routing-service.ts     # routing_table upserts
  registry-service.ts    # content_registry in-memory cache + upserts

scripts/
  backfill-articles.ts   # upserts static JSONs → Supabase articles table
  sync-registry.ts       # keeps content_registry.json in sync with static JSON files
  mint-thumbnails.ts     # Satori API → thumbnail_src for all articles
  rss-digest.ts          # 27 feeds, 7 verticals, daily markdown output
  validate-eeat.ts       # E-E-A-T audit
  alfasa-suggest.ts      # SEO session briefing
```

---

## Rules That Are Absolute

- **Never add `canonical` to `app/layout.tsx`** or any shared layout. Canonicals belong on individual page metadata only. `validate-canonicals.ts` will fail the build if you do this.
- **Never put `robots.txt` or `sitemap.xml` in `/public`** — they are generated by `app/robots.ts` and `app/sitemap.ts`.
- **Never use `lib/seo.ts`** — it was deleted. Use `@/lib/site-config`.
- **Never generate per-article `page.tsx` stubs** — routing is dynamic via `app/[...slug]/page.tsx`.
- **All Supabase-dependent pages must have `export const dynamic = 'force-dynamic'`** — Next.js 16 will attempt static prerender and timeout at 60s otherwise.
- **Static JSON is source of truth** — if a file exists in `content/static/`, it wins over the Supabase row in the edit page, publish route, and routing resolution.
- **Em dashes (— –) are banned everywhere.** Use `|` in headings, commas in prose.
- **`npm run backfill` requires `.env.local`** — the script reads `SUPABASE_SERVICE_ROLE_KEY`. It auto-loads via `dotenv-cli` when run as `npm run backfill`.

---

## Adding a New Author

Edit `lib/authors.ts`. Add an entry to the `AUTHORS` object. The CMS author dropdown, E-E-A-T gate (`KNOWN_AUTHOR_SLUGS`), and author profile pages (`/authors/[slug]`) all derive from this single file. No other changes needed.

---

## DNS Note (macOS)

AT&T home router (`192.168.1.254`) silently blocks `.co` TLD DNS resolution. Supabase is on `*.supabase.co`. If `nslookup vgxzkkigomwmdxtwazeg.supabase.co` times out, run:

```bash
sudo networksetup -setdnsservers Wi-Fi 1.1.1.1 8.8.8.8
sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder
```

This persists across reboots. If it ever reverts (DHCP overwrite), run again.

---

## Supabase Project

- **URL:** `https://vgxzkkigomwmdxtwazeg.supabase.co`
- **Tier:** Pro (not paused, no cold starts)
- **Tables:** `articles`, `profiles`, `routing_table`, `content_registry`, `likes`, `saves`, `discord_threads`
- **Storage bucket:** `media` (thumbnails at `media/thumbnails/{slug}/`)
- **Auth:** email/password, `profiles.is_editor` flag gates CMS access

---

## Satori Thumbnail API

- **Endpoint:** `POST https://satori-neon.vercel.app/api/v1/fetch-article`
- **Body:** `{ "url": "https://www.ozonedailynews.com/category/slug" }`
- **Returns:** `{ title, subtitle, imageUrl, slug, brandSlug }`
- **`imageUrl`** is written to `thumbnail_src`, `hero_image.src`, and OG images array
- **No auth required**
- **CLI:** `npm run mint:thumbnails [--slug <slug>] [--force] [--dry]`
- **CMS:** Purple ⚡ button in Thumbnail section of the article editor
