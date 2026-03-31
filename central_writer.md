# Central Writer | Auth & Permissions Roadmap

This document outlines the plan for locking down ObjectWire's admin editor using Supabase Auth and role-based access control (RBAC).

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
