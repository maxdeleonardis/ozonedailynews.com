-- =============================================================================
-- CREATOR ARTICLES TABLE
-- Powers: CreatorArticle component (and the original AlysaArticle layout)
--
-- Usage:
--   - Creator/biography profiles: athletes, influencers, founders, artists
--   - AlysaArticle is treated as a row in this table with slug = 'winter-olympics/usa/alysa-liu'
--   - DB component: CreatorArticleDB (server component, queries by slug)
--
-- Column strategy:
--   - Flat scalars for top-level primitives (slug, status, content_html, etc.)
--   - JSONB for arrays and structured objects (breadcrumbs, hero_badges, sidebar_*)
--     so the CreatorArticleDB component can pass them through to CreatorArticle props
--     without any mapping transformation (same pattern as jack_articles).
-- =============================================================================

CREATE TABLE IF NOT EXISTS creator_articles (
  id   UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,

  -- ── Status ────────────────────────────────────────────────────────────────
  status TEXT NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'published', 'archived')),

  -- ── JSON-LD Schema ────────────────────────────────────────────────────────
  -- Maps to CreatorArticleProps.schema
  schema_title          TEXT        NOT NULL DEFAULT '',
  schema_description    TEXT        NOT NULL DEFAULT '',
  schema_author         TEXT        NOT NULL DEFAULT 'ObjectWire',
  schema_author_url     TEXT,
  schema_article_url    TEXT        NOT NULL DEFAULT '',
  schema_image_url      TEXT,
  schema_section        TEXT        NOT NULL DEFAULT '',
  schema_keywords       TEXT[]      NOT NULL DEFAULT '{}',
  schema_published_time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  schema_modified_time  TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- ── Breadcrumbs ───────────────────────────────────────────────────────────
  -- Array of { name: string, item: string }
  -- Example: [{"name":"Home","item":"/"},{"name":"Winter Olympics","item":"/winter-olympics"}]
  breadcrumbs JSONB NOT NULL DEFAULT '[]'::jsonb,

  -- ── Hero Banner ───────────────────────────────────────────────────────────
  -- Maps to CreatorArticleProps.hero
  hero_image_src    TEXT    NOT NULL DEFAULT '',
  hero_image_alt    TEXT    NOT NULL DEFAULT '',
  hero_gradient     TEXT,   -- CSS gradient string, e.g. "linear-gradient(135deg, #0f172a 0%, ...)"
  hero_name         TEXT    NOT NULL DEFAULT '',
  hero_subtitle     TEXT    NOT NULL DEFAULT '',
  hero_description  TEXT    NOT NULL DEFAULT '',

  -- Array of { label: string, style?: 'default' | 'achievement' | 'secondary' }
  -- Example: [{"label":"Winter Olympics 2026","style":"default"},{"label":"🥇 Olympic Champion","style":"achievement"}]
  hero_badges     JSONB NOT NULL DEFAULT '[]'::jsonb,

  -- Array of { href: string, label: string, icon?: string, variant?: 'primary'|'secondary'|'accent' }
  -- Example: [{"href":"/winter-olympics","label":"Olympics Hub","icon":"🏅","variant":"primary"}]
  hero_cta_buttons JSONB NOT NULL DEFAULT '[]'::jsonb,

  -- ── Sidebar: Infobox ──────────────────────────────────────────────────────
  sidebar_infobox_image_src  TEXT NOT NULL DEFAULT '',
  sidebar_infobox_image_alt  TEXT NOT NULL DEFAULT '',
  sidebar_infobox_name       TEXT NOT NULL DEFAULT '',
  sidebar_infobox_subtitle   TEXT NOT NULL DEFAULT '',

  -- Array of { label: string, value: string }
  -- Example: [{"label":"Full Name","value":"Alysa Liu"},{"label":"Born","value":"August 8, 2005"}]
  sidebar_infobox_rows JSONB NOT NULL DEFAULT '[]'::jsonb,

  -- ── Sidebar: Callout (optional achievement/CTA box) ───────────────────────
  -- { title: string, body: string, ctaLabel?: string, ctaHref?: string,
  --   color?: 'yellow'|'blue'|'green'|'red'|'purple' }
  -- NULL = no callout rendered
  sidebar_callout JSONB,

  -- ── Sidebar: Career Timeline ──────────────────────────────────────────────
  -- Array of { year: string, event: string }
  -- Example: [{"year":"2019","event":"Won U.S. Championship at age 13, youngest in history"}]
  sidebar_timeline JSONB NOT NULL DEFAULT '[]'::jsonb,

  -- ── Sidebar: Related Coverage Links ──────────────────────────────────────
  -- Array of { href: string, label: string }
  sidebar_related_links JSONB NOT NULL DEFAULT '[]'::jsonb,

  -- ── Sidebar: Meta ─────────────────────────────────────────────────────────
  sidebar_meta_published_date TEXT NOT NULL DEFAULT '',
  sidebar_meta_updated_date   TEXT,
  sidebar_meta_author         TEXT NOT NULL DEFAULT 'ObjectWire',
  sidebar_meta_category       TEXT NOT NULL DEFAULT '',

  -- ── Article Body ──────────────────────────────────────────────────────────
  -- Full article HTML rendered via dangerouslySetInnerHTML in CreatorArticleDB
  content_html TEXT NOT NULL DEFAULT '',

  -- ── Flags ─────────────────────────────────────────────────────────────────
  tiktok_embed BOOLEAN NOT NULL DEFAULT false,

  -- ── Timestamps ────────────────────────────────────────────────────────────
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── Indexes ───────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_creator_articles_slug             ON creator_articles (slug);
CREATE INDEX IF NOT EXISTS idx_creator_articles_status           ON creator_articles (status);
CREATE INDEX IF NOT EXISTS idx_creator_articles_schema_published ON creator_articles (schema_published_time DESC);
CREATE INDEX IF NOT EXISTS idx_creator_articles_section          ON creator_articles (schema_section);

-- ── auto-update updated_at ────────────────────────────────────────────────────
CREATE TRIGGER creator_articles_updated_at
  BEFORE UPDATE ON creator_articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ── Row Level Security ────────────────────────────────────────────────────────
ALTER TABLE creator_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "creator_articles_public_read" ON creator_articles
  FOR SELECT TO public USING (true);

CREATE POLICY "creator_articles_auth_write" ON creator_articles
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Allow anon role to write (matches pattern in 20260302000000_allow_anon_admin_writes.sql)
CREATE POLICY "creator_articles_anon_write" ON creator_articles
  FOR ALL TO anon USING (true) WITH CHECK (true);

