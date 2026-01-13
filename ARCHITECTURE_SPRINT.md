# Architecture Sprint: Data Integrity & Access Control

## What Changed

This update implements the "Two-Room Architecture" separating public (read-only) content from admin (editing) operations, with UUID-based routing and proper access control.

## Database Changes

### 1. New `status` Column
- **Added:** `status TEXT DEFAULT 'draft'` with CHECK constraint for values: `'draft'`, `'published'`, `'archived'`
- **Purpose:** Clear separation between drafts (in the kitchen) and published content (served to readers)
- **Replaces:** Relying solely on `published_at` timestamp for status determination

### 2. New Indexes
- `idx_articles_status` — Fast filtering for published vs draft articles
- `idx_articles_id` — Optimized UUID lookups for admin editor

### 3. Updated RLS (Row-Level Security)
- **Public Read Access:** Now restricted to `status = 'published'` only
- **Protection:** Unauthenticated users cannot see drafts, even if they bypass the frontend

## Folder Structure Changes

```
app/
├── (public)/              ← New: Public-facing routes (read-only)
│   ├── page.tsx          ← Homepage
│   ├── blog/
│   │   ├── page.tsx      ← Blog list (published only)
│   │   └── [slug]/
│   │       └── page.tsx  ← Individual articles (Server-Side Rendered, published only)
│   └── about/            ← Other public pages
│
├── (admin)/               ← New: Admin-only routes (requires auth)
│   ├── editor/
│   │   └── [id]/
│   │       └── page.tsx  ← UUID-based editor (/admin/editor/8f7a-22bc...)
│   └── dashboard/        ← Admin dashboard
│
├── actions/               ← New: Server Actions
│   └── articles.ts       ← saveArticleDraft(), publishArticle(), unpublishArticle()
│
└── blog/                  ← Old structure (can be deprecated after migration)
```

## Route Changes

### Before (Tangled)
- **Public:** `/blog/my-article` (client-side, shows drafts if you know the slug)
- **Edit:** `/blog/my-article/edit` (slug-based, breaks if title changes)

### After (Untangled)
- **Public:** `/blog/my-article` (server-side, ONLY published articles, 404 for drafts)
- **Edit:** `/admin/editor/8f7a-22bc-...` (UUID-based, never breaks, requires auth)

## Key Features

### 1. Save vs. Publish Separation

**Save Button:**
- Updates article content
- Keeps `status = 'draft'`
- Does NOT trigger `revalidatePath()`
- Public site remains unchanged

**Publish Button:**
- Sets `status = 'published'`
- Sets `published_at = NOW()`
- Triggers `revalidatePath('/blog')` — **This refreshes the public site**
- Article becomes visible on objectwire.com/blog

### 2. UUID Security
- Admin edit URLs use random, permanent UUIDs
- Changing article title/slug doesn't break editor link
- Public can't guess admin edit URLs

### 3. Data Integrity Protections

**Database Level (Supabase RLS):**
- Public users can ONLY read `status = 'published'` articles
- Drafts are invisible at the database query level
- Even if someone bypasses Next.js, they can't see drafts

**Application Level (Next.js):**
- Public blog route uses Server-Side Rendering (SSR)
- Explicit `WHERE status = 'published'` filter in queries
- 404 returned for draft articles
- Middleware protects all `/admin/*` routes

**Server Actions:**
- All save/publish operations are server-side
- `revalidatePath()` ensures public site cache refreshes after publish
- No client-side Supabase writes for article management

## Migration Steps

### Step 1: Update Database Schema
Run in Supabase SQL Editor:
```sql
-- Located in: supabase/setup.sql
-- This adds the status column, indexes, and updated RLS policies
```

### Step 2: Migrate Existing Data
Run in Supabase SQL Editor:
```sql
-- Located in: supabase/migrate-status.sql
-- This sets status based on existing published_at values
```

### Step 3: Deploy Code
The new folder structure and routes are ready. Next.js route groups don't affect public URLs.

### Step 4: Update Links
Update your admin dashboard to link to:
```tsx
<Link href={`/admin/editor/${article.id}`}>Edit</Link>
```
Instead of:
```tsx
<Link href={`/blog/${article.slug}/edit`}>Edit</Link>
```

### Step 5: Test Flow
1. Create new article at `/admin/editor/new`
2. Click "Save Draft" — article saved with `status = 'draft'`
3. Verify article is NOT visible on `/blog` (public site)
4. Click "Publish" — status changes to `'published'`, `revalidatePath()` triggers
5. Verify article IS visible on `/blog`

### Step 6: Deprecate Old Routes (Optional)
Once migration is complete, you can:
- Delete `app/blog/[slug]/edit/` directory
- Keep `app/blog/` for now (fallback during transition)

## Files Changed

### New Files
- `app/(public)/blog/[slug]/page.tsx` — Server-side public blog route
- `app/(admin)/editor/[id]/page.tsx` — UUID-based admin editor
- `app/actions/articles.ts` — Server Actions for save/publish
- `middleware.ts` — Admin route protection
- `supabase/migrate-status.sql` — Data migration script

### Modified Files
- `supabase/setup.sql` — Added status column, indexes, updated RLS
- Multiple route files copied to `(public)` and `(admin)` route groups

## Benefits

### Data Integrity
✅ Drafts cannot leak to public, even if frontend is compromised  
✅ Server-side validation ensures only published content is visible  
✅ RLS policies enforce database-level security  

### Access Control
✅ Middleware protects admin routes (requires Supabase session)  
✅ UUID-based editor URLs prevent unauthorized access  
✅ Public API only exposes published articles  

### Performance
✅ Server-Side Rendering for public routes (faster initial load)  
✅ Indexes optimize status-based queries  
✅ `revalidatePath()` only refreshes when needed (on publish)  

### Developer Experience
✅ Clear separation: (public) vs (admin) folders  
✅ Type-safe Server Actions replace client-side mutations  
✅ UUID routing eliminates slug-change bugs  

## Troubleshooting

### "Article not found" on public site after publishing
- Check article `status` in database: should be `'published'`
- Verify `revalidatePath()` is being called in `publishArticle()`
- Try clearing Next.js cache: `rm -rf .next && npm run dev`

### "Unauthorized" when accessing admin editor
- Check Supabase session: `await supabase.auth.getSession()`
- Verify middleware is running (check console logs)
- Ensure you're logged in at `/admin`

### Old articles not showing
- Run migration script: `supabase/migrate-status.sql`
- Check RLS policies allow public read for `status = 'published'`
- Verify Supabase connection in `lib/supabase/server.ts`

## Next Steps (Optional Enhancements)

1. **Role-Based Access Control:** Add `user_roles` table with `admin`, `editor`, `viewer` tiers
2. **Audit Logging:** Track who edited what and when
3. **Content Versioning:** Save article history on each edit
4. **Scheduled Publishing:** Allow setting future `published_at` dates
5. **Draft Previews:** Generate temporary preview URLs for drafts (with expiring tokens)

## Questions?

This architecture follows the same pattern used by enterprise CMS systems (Contentful, Strapi, WordPress with custom post statuses). If you're unsure about any implementation detail, check the code comments in `app/actions/articles.ts` and `supabase/setup.sql`.
