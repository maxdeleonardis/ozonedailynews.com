-- ============================================================================
-- OzoneNews | CMS Migration
-- Run this ONCE in Supabase → SQL Editor after the initial schema.sql
-- Adds multi-brand CMS support: draft pipeline + editor roles.
-- ============================================================================

-- ─── 1. Add 'review' to article_status enum ──────────────────────────────────
-- 'draft'   = being written in /admin
-- 'review'  = submitted, waiting for editor approval
-- 'published' = committed to Git, live on site
alter type article_status add value if not exists 'review';


-- ─── 2. Add brand_slug to articles (multi-site CMS column) ───────────────────
-- brand_slug routes the publish action to the correct Git branch.
-- ozone → master, basil → basil, obsidian → obsidian, etc.
alter table articles
  add column if not exists brand_slug text not null default 'ozone';

create index if not exists articles_brand_idx on articles (brand_slug);


-- ─── 3. profiles table (editor role management) ───────────────────────────────
-- Managed manually via Supabase Dashboard SQL editor.
-- To grant editor access:
--   INSERT INTO profiles (user_id, email, is_editor, brand_slugs)
--   VALUES ('auth-user-uuid-here', 'editor@email.com', true, '{ozone,basil}');
create table if not exists profiles (
  user_id     uuid    primary key references auth.users (id) on delete cascade,
  email       text,
  is_editor   boolean not null default false,
  brand_slugs text[]  not null default '{}',  -- which brands this editor can publish to
  created_at  timestamptz not null default now()
);

alter table profiles enable row level security;

-- Users can read their own profile (needed by admin auth guard)
create policy "users read own profile"
  on profiles for select using (auth.uid() = user_id);

-- Only service_role can insert/update profiles (admin grants editor access manually)
-- No anon/user write policies — editors are added via Supabase Dashboard only


-- ─── 4. Allow editors to read their own drafts ───────────────────────────────
-- The existing "anon read published articles" policy only shows status='published'.
-- Add a policy so authenticated editors can read their own drafts.
-- (Service role bypasses RLS entirely — used by the publish API route.)
create policy "auth read own drafts"
  on articles for select
  using (
    auth.uid() in (
      select user_id from profiles
      where is_editor = true
        and (brand_slug = any(brand_slugs) or array_length(brand_slugs, 1) is null)
    )
  );

-- Editors can insert drafts (the /api/cms/articles POST route uses service_role,
-- but this policy allows direct Supabase client writes if needed in the future)
create policy "editors insert drafts"
  on articles for insert
  with check (
    auth.uid() in (
      select user_id from profiles where is_editor = true
    )
  );

-- Editors can update their own brand's drafts
create policy "editors update own brand drafts"
  on articles for update
  using (
    auth.uid() in (
      select user_id from profiles
      where is_editor = true
        and (brand_slug = any(brand_slugs) or array_length(brand_slugs, 1) is null)
    )
  );
