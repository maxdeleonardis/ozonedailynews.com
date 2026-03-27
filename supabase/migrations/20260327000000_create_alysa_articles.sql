-- =============================================================================
-- ALYSA ARTICLES TABLE
-- Powers: AlysaArticle component (athlete / sports figure biography layout)
--
-- Same column shape as creator_articles — both use the CreatorArticle renderer.
-- Kept as a separate table so athlete profiles can be managed independently
-- from general creator/influencer profiles in creator_articles.
--
-- DB component: AlysaArticleDB (server component, queries alysa_articles by slug)
-- =============================================================================

CREATE TABLE IF NOT EXISTS alysa_articles (
  id   UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,

  -- ── Status ────────────────────────────────────────────────────────────────
  status TEXT NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'published', 'archived')),

  -- ── JSON-LD Schema ────────────────────────────────────────────────────────
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
  breadcrumbs JSONB NOT NULL DEFAULT '[]'::jsonb,

  -- ── Hero Banner ───────────────────────────────────────────────────────────
  hero_image_src    TEXT NOT NULL DEFAULT '',
  hero_image_alt    TEXT NOT NULL DEFAULT '',
  hero_gradient     TEXT,
  hero_name         TEXT NOT NULL DEFAULT '',
  hero_subtitle     TEXT NOT NULL DEFAULT '',
  hero_description  TEXT NOT NULL DEFAULT '',

  -- Array of { label: string, style?: 'default' | 'achievement' | 'secondary' }
  hero_badges      JSONB NOT NULL DEFAULT '[]'::jsonb,

  -- Array of { href: string, label: string, icon?: string, variant?: 'primary'|'secondary'|'accent' }
  hero_cta_buttons JSONB NOT NULL DEFAULT '[]'::jsonb,

  -- ── Sidebar: Infobox ──────────────────────────────────────────────────────
  sidebar_infobox_image_src  TEXT NOT NULL DEFAULT '',
  sidebar_infobox_image_alt  TEXT NOT NULL DEFAULT '',
  sidebar_infobox_name       TEXT NOT NULL DEFAULT '',
  sidebar_infobox_subtitle   TEXT NOT NULL DEFAULT '',

  -- Array of { label: string, value: string }
  sidebar_infobox_rows JSONB NOT NULL DEFAULT '[]'::jsonb,

  -- ── Sidebar: Callout ──────────────────────────────────────────────────────
  -- { title, body, ctaLabel?, ctaHref?, color?: 'yellow'|'blue'|'green'|'red'|'purple' }
  -- NULL = no callout rendered
  sidebar_callout JSONB,

  -- ── Sidebar: Career Timeline ──────────────────────────────────────────────
  -- Array of { year: string, event: string }
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
  content_html TEXT NOT NULL DEFAULT '',

  -- ── Flags ─────────────────────────────────────────────────────────────────
  tiktok_embed BOOLEAN NOT NULL DEFAULT false,

  -- ── Timestamps ────────────────────────────────────────────────────────────
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── Indexes ───────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_alysa_articles_slug             ON alysa_articles (slug);
CREATE INDEX IF NOT EXISTS idx_alysa_articles_status           ON alysa_articles (status);
CREATE INDEX IF NOT EXISTS idx_alysa_articles_schema_published ON alysa_articles (schema_published_time DESC);
CREATE INDEX IF NOT EXISTS idx_alysa_articles_section          ON alysa_articles (schema_section);

-- ── auto-update updated_at ────────────────────────────────────────────────────
CREATE TRIGGER alysa_articles_updated_at
  BEFORE UPDATE ON alysa_articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ── Row Level Security ────────────────────────────────────────────────────────
ALTER TABLE alysa_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "alysa_articles_public_read" ON alysa_articles
  FOR SELECT TO public USING (true);

CREATE POLICY "alysa_articles_auth_write" ON alysa_articles
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "alysa_articles_anon_write" ON alysa_articles
  FOR ALL TO anon USING (true) WITH CHECK (true);
