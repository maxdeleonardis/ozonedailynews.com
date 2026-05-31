-- ============================================================================
-- OzoneNews | Supabase Schema — Simplified
-- 5 tables only. Git is the source of truth for all published content.
-- Supabase handles: drafts, editor auth, URL routing, and redirects.
--
-- Run this entire file in Supabase → SQL Editor → Run
-- Safe to re-run on existing projects (idempotent).
-- ============================================================================

create extension if not exists "pgcrypto";

-- ─── Enums ───────────────────────────────────────────────────────────────────
do $$ begin
  create type article_status as enum ('draft', 'review', 'published');
exception when duplicate_object then null; end $$;

-- Add 'review' if upgrading from old schema
alter type article_status add value if not exists 'review';


-- ============================================================================
-- TABLE 1: articles
-- The draft pipeline. Editors write here in /admin.
-- On publish → JSON file committed to Git, status set to 'published'.
-- All article types (news, jack, wiki, etc.) live here with an article_type col.
-- ============================================================================
create table if not exists articles (
  id            uuid        primary key default gen_random_uuid(),
  slug          text        unique not null,
  url           text        not null,
  article_type  text        not null default 'news_article',
  -- ^ 'news_article' | 'jack_article' | 'wiki_article' | 'article_page' | 'creator_article'
  title         text        not null,
  subtitle      text,
  category      text        not null,
  status        article_status not null default 'draft',
  brand_slug    text        not null default 'ozone',
  breaking      boolean     not null default false,
  trending      boolean     not null default false,
  topic_tag     text,
  content_html  text        not null default '',
  publish_date  text        not null default '',
  published_at  timestamptz,
  author_name   text        not null default '',
  author_slug   text        not null default '',
  read_time     text,
  thumbnail_src text,
  thumbnail_alt text,
  tags          text[]      not null default '{}',
  metadata      jsonb,
  -- Extra JSONB for article_type-specific fields (timeline, sources, infobox, etc.)
  extra         jsonb       not null default '{}',
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- PATCH: add columns on existing articles table BEFORE any indexes (upgrade path)
alter table articles add column if not exists article_type  text        not null default 'news_article';
alter table articles add column if not exists brand_slug    text        not null default 'ozone';
alter table articles add column if not exists breaking      boolean     not null default false;
alter table articles add column if not exists trending      boolean     not null default false;
alter table articles add column if not exists topic_tag     text;
alter table articles add column if not exists publish_date  text        not null default '';
alter table articles add column if not exists author_name   text        not null default '';
alter table articles add column if not exists author_slug   text        not null default '';
alter table articles add column if not exists read_time     text;
alter table articles add column if not exists thumbnail_src text;
alter table articles add column if not exists thumbnail_alt text;
alter table articles add column if not exists tags          text[]      not null default '{}';
alter table articles add column if not exists metadata      jsonb;
alter table articles add column if not exists extra         jsonb       not null default '{}';
alter table articles add column if not exists subtitle      text;
alter table articles add column if not exists url           text;

create index if not exists articles_slug_idx      on articles (slug);
create index if not exists articles_brand_idx     on articles (brand_slug);
create index if not exists articles_status_idx    on articles (status);
create index if not exists articles_type_idx      on articles (article_type);
create index if not exists articles_published_idx on articles (published_at desc nulls last);
create index if not exists articles_breaking_idx  on articles (breaking) where breaking = true;
create index if not exists articles_category_idx  on articles (category);

create index if not exists articles_fts_idx on articles
  using gin(to_tsvector('english',
    coalesce(title,'') || ' ' || coalesce(subtitle,'') || ' ' || coalesce(content_html,'')
  ));

-- Auto-update updated_at
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

drop trigger if exists articles_updated_at on articles;
create trigger articles_updated_at
  before update on articles
  for each row execute function set_updated_at();

-- Comment on article_type values for reference:
-- 'news_article'    → standard news (NewsArticleDB)
-- 'jack_article'    → long-form / breaking / investigation (JackArticleDB)
-- 'wiki_article'    → evergreen reference (WikiArticle)
-- 'article_page'    → hub / topic page (ArticlePageDB)
-- 'creator_article' → author profile (CreatorArticleDB)


-- ============================================================================
-- TABLE 2: profiles
-- Editor role management. One row per Supabase auth user.
-- Grant editor access via: INSERT or UPDATE in Supabase Dashboard SQL Editor.
-- ============================================================================
create table if not exists profiles (
  user_id     uuid    primary key references auth.users (id) on delete cascade,
  email       text    unique,
  is_editor   boolean not null default false,
  brand_slugs text[]  not null default '{}',
  -- ^ which brands this editor can publish to, e.g. '{ozone,basil}'
  created_at  timestamptz not null default now()
);


-- ============================================================================
-- TABLE 3: routing_table
-- Maps public URL paths to immutable content UUIDs.
-- Decouples URLs from Git filenames — change a URL without moving any files.
-- ============================================================================
create table if not exists routing_table (
  url_path      text        primary key,
  content_id    text        not null,
  content_store text        not null default 'articles',
  brand_slug    text        not null default 'ozone',
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index if not exists routing_content_id_idx on routing_table (content_id);
create index if not exists routing_brand_idx      on routing_table (brand_slug);

create or replace function set_routing_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

drop trigger if exists routing_table_updated_at on routing_table;
create trigger routing_table_updated_at
  before update on routing_table
  for each row execute function set_routing_updated_at();


-- ============================================================================
-- TABLE 4: redirects
-- 301/302 rules. Edge middleware reads this before any page code fires.
-- Written automatically when an article URL is changed via /api/cms/reroute.
-- ============================================================================
create table if not exists redirects (
  old_path    text        primary key,
  new_path    text        not null,
  status_code int         not null default 301,
  created_at  timestamptz not null default now()
);

create index if not exists redirects_new_path_idx on redirects (new_path);


-- ============================================================================
-- TABLE 5: discord_comments
-- Reader comments — posted by signed-in (Discord OAuth) or anonymous users.
-- Each row is also forwarded to a Discord webhook (DISCORD_COMMENTS_WEBHOOK_URL).
-- ============================================================================
create table if not exists discord_comments (
  id               uuid        primary key default gen_random_uuid(),
  slug             text        not null,
  discord_id       text        not null,
  discord_username text        not null,
  discord_avatar   text,
  body             text        not null,
  created_at       timestamptz not null default now()
);

create index if not exists discord_comments_slug_idx on discord_comments (slug);
create index if not exists discord_comments_created_idx on discord_comments (created_at desc);


-- ============================================================================
-- TABLE 6: content_registry
-- The master index that drives sitemaps, RSS, JSON-LD, related articles, and the
-- homepage "live freshness" carousel BETWEEN deploys.
--
-- Git's content_registry.json is the build-time source of truth; this table is
-- the real-time mirror. The publish API upserts here so a new article appears in
-- getLatestArticlesLive() immediately, before the Git deploy finishes.
--
-- slug is the PUBLIC URL PATH (relative, e.g. "/nasa/news/article-slug").
-- ============================================================================
create table if not exists content_registry (
  slug             text        primary key,
  title            text        not null default '',
  description      text        not null default '',
  publish_date     timestamptz,
  modified_date    timestamptz,
  category         text        not null default 'News',
  tags             text[]      not null default '{}',
  author           text        not null default '',
  author_slug      text,
  priority         numeric     not null default 0.7,
  change_frequency text        not null default 'daily',
  image_url        text,
  image_alt        text,
  article_type     text        not null default 'NewsArticle',
  lifecycle        text        not null default 'news',
  -- ^ 'news' | 'review' | 'feature' | 'evergreen' | 'pruned'
  breaking         boolean     not null default false,
  brand_slug       text        not null default 'ozone',
  -- ^ multi-brand isolation — each site only reads/indexes its own entries
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

-- PATCH: add brand_slug on existing content_registry tables (upgrade path)
alter table content_registry add column if not exists brand_slug text not null default 'ozone';

create index if not exists content_registry_publish_idx   on content_registry (publish_date desc nulls last);
create index if not exists content_registry_category_idx   on content_registry (category);
create index if not exists content_registry_lifecycle_idx  on content_registry (lifecycle);
create index if not exists content_registry_author_idx     on content_registry (author_slug);
create index if not exists content_registry_brand_idx      on content_registry (brand_slug);

drop trigger if exists content_registry_updated_at on content_registry;
create trigger content_registry_updated_at
  before update on content_registry
  for each row execute function set_updated_at();


-- ============================================================================
-- ROW LEVEL SECURITY
-- ============================================================================
alter table articles         enable row level security;
alter table profiles         enable row level security;
alter table routing_table    enable row level security;
alter table redirects        enable row level security;
alter table discord_comments enable row level security;
alter table content_registry enable row level security;

-- Drop all policies first so this file is safe to re-run
drop policy if exists "anon read published articles"    on articles;
drop policy if exists "editors read own drafts"         on articles;
drop policy if exists "editors insert drafts"           on articles;
drop policy if exists "editors update own drafts"       on articles;
drop policy if exists "users read own profile"          on profiles;
drop policy if exists "routing_table_public_read"       on routing_table;
drop policy if exists "routing_table_service_write"     on routing_table;
drop policy if exists "redirects_public_read"           on redirects;
drop policy if exists "redirects_service_write"         on redirects;
drop policy if exists "discord_comments_public_read"    on discord_comments;
drop policy if exists "discord_comments_service_write"  on discord_comments;
drop policy if exists "content_registry_public_read"    on content_registry;
drop policy if exists "content_registry_service_write"  on content_registry;

-- articles: public reads published, editors read/write drafts, service_role does everything
create policy "anon read published articles"
  on articles for select
  using (status = 'published');

-- Editors can only see drafts that belong to a brand they manage.
-- brand_slugs = '{}' means superadmin — sees everything.
create policy "editors read own drafts"
  on articles for select
  using (
    exists (
      select 1 from profiles p
      where p.user_id = auth.uid()
        and p.is_editor = true
        and (
          p.brand_slugs = '{}'::text[]
          or articles.brand_slug = any(p.brand_slugs)
        )
    )
  );

create policy "editors insert drafts"
  on articles for insert
  with check (
    exists (
      select 1 from profiles p
      where p.user_id = auth.uid()
        and p.is_editor = true
        and (
          p.brand_slugs = '{}'::text[]
          or brand_slug = any(p.brand_slugs)
        )
    )
  );

create policy "editors update own drafts"
  on articles for update
  using (
    exists (
      select 1 from profiles p
      where p.user_id = auth.uid()
        and p.is_editor = true
        and (
          p.brand_slugs = '{}'::text[]
          or articles.brand_slug = any(p.brand_slugs)
        )
    )
  );

-- profiles: users read their own row only
create policy "users read own profile"
  on profiles for select
  using (auth.uid() = user_id);

-- routing_table: public reads (middleware uses anon key), service_role writes
create policy "routing_table_public_read"
  on routing_table for select
  using (true);

create policy "routing_table_service_write"
  on routing_table for all
  using (auth.role() = 'service_role');

-- redirects: public reads (middleware), service_role writes
create policy "redirects_public_read"
  on redirects for select
  using (true);

create policy "redirects_service_write"
  on redirects for all
  using (auth.role() = 'service_role');

-- discord_comments: anyone can read; service_role writes (API route uses service key)
create policy "discord_comments_public_read"
  on discord_comments for select
  using (true);

create policy "discord_comments_service_write"
  on discord_comments for all
  using (auth.role() = 'service_role');

-- content_registry: public reads (sitemaps/RSS/homepage use anon key), service_role writes
create policy "content_registry_public_read"
  on content_registry for select
  using (true);

create policy "content_registry_service_write"
  on content_registry for all
  using (auth.role() = 'service_role');


-- ============================================================================
-- STORAGE — media bucket (thumbnails, OG images, author avatars)
-- ============================================================================
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'media', 'media', true, 10485760,
  array['image/jpeg','image/png','image/webp','image/gif','image/svg+xml']
)
on conflict (id) do nothing;

drop policy if exists "media public read"    on storage.objects;
drop policy if exists "media service upload" on storage.objects;
drop policy if exists "media service update" on storage.objects;
drop policy if exists "media service delete" on storage.objects;

create policy "media public read"
  on storage.objects for select using (bucket_id = 'media');

create policy "media service upload"
  on storage.objects for insert
  with check (bucket_id = 'media' and auth.role() = 'service_role');

create policy "media service update"
  on storage.objects for update
  using (bucket_id = 'media' and auth.role() = 'service_role');

create policy "media service delete"
  on storage.objects for delete
  using (bucket_id = 'media' and auth.role() = 'service_role');

-- ============================================================================
-- Fix: add 'evergreen' to lifecycle enums if they exist from old schema
-- ============================================================================
do $$ begin
  alter type lifecycle_state add value if not exists 'evergreen';
exception when undefined_object then null; end $$;
