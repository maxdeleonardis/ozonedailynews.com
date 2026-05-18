# Central Writer | Auth & Permissions Roadmap

This document outlines the plan for locking down OzoneNews's admin editor using Supabase Auth and role-based access control (RBAC), plus infrastructure work in progress.

---

## Session Log (March 30, 2026)

### Completed This Session

1. **Rewrote `/apple/page.tsx`** from `WikiArticle` stub → full inline `ArticlePage` component (298 lines). InfoBox sidebar, 8 content sections, Unsplash hero (Apple Park aerial by Carles Rabada). Internal links to 5 Apple sub-pages. OStandard-compliant metadata.

2. **Rewrote `/redbull/page.tsx`** from `WikiArticle` stub → full inline `ArticlePage` component (320 lines). InfoBox with company overview, F1 teams, football clubs. 9 content sections. Unsplash thumbnail (Red Bull can by Jesper Brouwers).

3. **Updated copilot-instructions.md** — added "never commit after every change" rule under Git / Deploy Rules.

4. **Started `generateMetadata()` infrastructure** (partially complete, see below).

### Files Changed (Uncommitted)

- `.github/copilot-instructions.md` — updated git commit rule
- `app/apple/page.tsx` — full ArticlePage rewrite
- `app/redbull/page.tsx` — full ArticlePage rewrite
- `lib/generate-article-metadata.ts` — NEW, shared metadata helper
- `scripts/add-meta-columns.ts` — NEW, migration script for meta columns
- `sql/add-meta-columns.sql` — NEW, raw SQL for adding meta columns
- `central_writer.md` — this file

---

## Next Session | Dynamic Metadata Pipeline (Priority)

### Problem
Meta title and description are hardcoded in each `page.tsx` stub's `export const metadata`. When you edit `title` or `subtitle` in the admin editor, the visible headline changes but Google/OG meta stays frozen. No way to edit SEO metadata without deploying code.

### Solution Architecture

```
page.tsx stub (generateMetadata)
       ↓
lib/generate-article-metadata.ts (fetches row from Supabase)
       ↓
Supabase row: meta_title, meta_description columns
       ↓
Falls back to: title + " | OzoneNews", subtitle
```

### What's Done
- [x] `lib/generate-article-metadata.ts` — shared helper created. Accepts slug + table, fetches row, builds full `Metadata` object with fallback chain.
- [x] `sql/add-meta-columns.sql` — SQL to add `meta_title` and `meta_description` to all 3 tables.
- [x] `scripts/add-meta-columns.ts` — Node script to run the migration (needs `exec_sql` RPC or manual SQL).
- [x] Admin editor already shows `meta_title` and `meta_description` in `TOP_FIELDS`.

### What's Left To Do
- [ ] **Run `sql/add-meta-columns.sql` in Supabase Dashboard SQL Editor** — the script couldn't run because there's no `exec_sql` RPC function. Go to Supabase Dashboard → SQL Editor → paste and run. This adds `meta_title` and `meta_description` columns to `articles`, `jack_articles`, and `article_pages`.
- [ ] **Fix `META_SELECT` in `generate-article-metadata.ts`** — currently selects columns that don't exist on all tables (e.g. `hero_image` only exists on `jack_articles`, `hero_image_src` only on `articles`). Need to use `*` or table-specific selects to avoid Supabase errors.
- [ ] **Test `generateArticleMetadata()`** — load a slug, verify the Metadata object is correct.
- [ ] **Create first page stub using `generateMetadata()`** — pick one `NewsArticleDB` page, replace static `export const metadata` with dynamic `generateMetadata()`. Verify Google sees the right title/description.
- [ ] **Backfill existing stubs** — once proven, update remaining stubs to use `generateMetadata()` over time. Low priority since static metadata still works fine.

---

## Next Session | Component Additions

### RelatedArticles on ArticlePage and JackArticle
- `RelatedArticles` already works inside `NewsArticle` (80/20 sidebar layout).
- `ArticlePage` and `JackArticle` do NOT have RelatedArticles yet.
- **Task**: Add `RelatedArticles` to `ArticlePage.tsx` and `JackArticle.tsx` as a sidebar or bottom section.

### Future Components to Build
- **ReadingProgress** — thin progress bar at top of article showing scroll position
- **ShareBar** — floating share buttons (X/Twitter, LinkedIn, copy link)
- **AuthorCard** — reusable author bio card at bottom of articles (currently inline in NewsArticle)
- **TableOfContents (floating)** — sticky TOC sidebar that highlights current section on scroll (ArticlePage already has a static TOC)

---

## Current State (March 2026)

- **Login**: Hardcoded credentials (`admin` / `BlackBook26`) stored in `lib/auth.ts`
- **Session**: `localStorage` flag (`ow_admin_session`) — no server-side validation
- **Editor**: `/admin/editor` — loads any article by slug, edits any table
- **API route**: `/api/admin/article` — no auth check on GET or PATCH
- **Risk**: Anyone who guesses the URL can hit the API directly

---

## Phase 1 | Supabase Auth Integration

### 1.1 Enable Supabase Auth
- Use the existing Supabase project (`kzcwclprrtonpsnownbl`)
- Enable Email/Password provider (already available)
- Optionally enable Google OAuth for faster sign-in

### 1.2 Replace `lib/auth.ts`
- Remove hardcoded credentials
- Use `@supabase/ssr` for server-side session validation
- Use `supabase.auth.getUser()` in API routes to verify the caller
- Store session in HTTP-only cookies (not localStorage)

### 1.3 Protect API Routes
- `/api/admin/article` GET and PATCH must check `supabase.auth.getUser()`
- Return 401 if no valid session
- Return 403 if user lacks the required role

---

## Phase 2 | Role-Based Access Control (RBAC)

### 2.1 Roles

| Role | Description | Permissions |
|---|---|---|
| `superadmin` | Platform owner (you) | Full access to all articles, all tables, all users, deploy triggers |
| `editor` | Senior editor | Can edit and publish any article in any table |
| `writer` | Staff writer | Can create drafts, edit their own articles only, cannot publish |
| `contributor` | External contributor | Can create drafts only, cannot edit after submission, cannot publish |
| `viewer` | Read-only | Can view the editor UI but cannot save changes (useful for reviewers) |

### 2.2 Supabase Implementation

**Option A — `user_roles` table (recommended)**

```sql
CREATE TABLE user_roles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('superadmin', 'editor', 'writer', 'contributor', 'viewer')),
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id)
);

-- RLS policy: only superadmins can modify roles
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Superadmins manage roles"
  ON user_roles FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'superadmin'
    )
  );
```

**Option B — JWT custom claims (faster checks, harder to manage)**
- Set `role` in the user's `raw_app_meta_data` via the service role
- Access via `auth.jwt() ->> 'role'` in RLS policies
- Downside: requires token refresh when role changes

### 2.3 Article Ownership

Add an `owner_id` column to each article table:

```sql
ALTER TABLE articles ADD COLUMN owner_id UUID REFERENCES auth.users(id);
ALTER TABLE jack_articles ADD COLUMN owner_id UUID REFERENCES auth.users(id);
ALTER TABLE article_pages ADD COLUMN owner_id UUID REFERENCES auth.users(id);
```

When a writer creates an article, `owner_id` is set to their `auth.uid()`.

### 2.4 RLS Policies on Article Tables

```sql
-- Writers can only SELECT/UPDATE their own articles
CREATE POLICY "Writers edit own articles"
  ON articles FOR UPDATE
  USING (
    owner_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role IN ('writer', 'editor', 'superadmin')
    )
  );

-- Editors and superadmins can edit any article
CREATE POLICY "Editors edit all articles"
  ON articles FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role IN ('editor', 'superadmin')
    )
  );

-- Only editors and superadmins can set status = 'published'
-- (Writers can only save as 'draft')
```

---

## Phase 3 | Editor UI Changes

### 3.1 Login Flow
1. `/admin` shows Supabase Auth UI (email/password or Google)
2. On success, redirect to `/admin/editor`
3. Editor checks role from `user_roles` table on mount
4. UI adapts based on role:
   - `writer` sees only their articles in a list, plus "New Draft" button
   - `editor` sees all articles with a search bar
   - `superadmin` sees everything plus user management

### 3.2 Save Behavior by Role
| Role | Can Save Draft | Can Publish | Can Edit Others |
|---|---|---|---|
| `superadmin` | ✅ | ✅ | ✅ |
| `editor` | ✅ | ✅ | ✅ |
| `writer` | ✅ | ❌ (submit for review) | ❌ |
| `contributor` | ✅ (one-time) | ❌ | ❌ |
| `viewer` | ❌ | ❌ | ❌ |

### 3.3 Publish Workflow for Writers
1. Writer saves article as `status: 'draft'`
2. Editor receives notification (email or in-app)
3. Editor reviews, edits, sets `status: 'published'`
4. Writer can see the published version but cannot modify after publish

---

## Phase 4 | Audit Trail

```sql
CREATE TABLE article_edits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  article_slug TEXT NOT NULL,
  table_name TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  changed_fields JSONB NOT NULL,
  previous_values JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

Every PATCH to `/api/admin/article` logs:
- Who made the edit
- What fields changed
- What the old values were
- Timestamp

This enables transparent corrections (core editorial principle) and rollback.

---

## Migration Checklist

- [ ] Enable Supabase Auth email/password provider
- [ ] Create `user_roles` table with seed data (your account = superadmin)
- [ ] Add `owner_id` to `articles`, `jack_articles`, `article_pages`
- [ ] Write RLS policies for each table
- [ ] Replace `lib/auth.ts` with Supabase Auth client
- [ ] Update `/api/admin/article` to validate session + role
- [ ] Update editor UI to show role-appropriate controls
- [ ] Create `/admin/users` page for superadmin to manage roles
- [ ] Add `article_edits` audit table
- [ ] Test: writer cannot publish, editor can, superadmin can manage users
- [ ] Remove hardcoded credentials from `lib/auth.ts`

---

## Notes

- Keep the service role key server-side only (`SUPABASE_SERVICE_ROLE_KEY` in `.env.local`)
- Client-side uses `NEXT_PUBLIC_SUPABASE_ANON_KEY` — RLS enforces permissions
- The API route at `/api/admin/article` currently uses the server Supabase client (service role) — once auth is added, switch to the user's session so RLS applies automatically
- Until Phase 1 is implemented, the hardcoded login is the only protection
