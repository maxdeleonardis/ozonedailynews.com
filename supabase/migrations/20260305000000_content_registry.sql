-- =============================================================================
-- content_registry table
-- Replaces the static TypeScript array in lib/content-registry.ts
-- =============================================================================
-- Run once in Supabase SQL Editor:
--   supabase/migrations/20260305000000_content_registry.sql
-- or paste directly into the Supabase Dashboard → SQL Editor
-- =============================================================================

CREATE TABLE IF NOT EXISTS content_registry (
  slug              TEXT         PRIMARY KEY,
  title             TEXT         NOT NULL DEFAULT '',
  description       TEXT         NOT NULL DEFAULT '',
  publish_date      TEXT         NOT NULL DEFAULT '',   -- ISO date "YYYY-MM-DD"
  modified_date     TEXT         NOT NULL DEFAULT '',
  category          TEXT         NOT NULL DEFAULT 'General',
  tags              TEXT[]       NOT NULL DEFAULT '{}',
  author            TEXT         NOT NULL DEFAULT 'ObjectWire Editorial',
  author_slug       TEXT,
  priority          NUMERIC(3,2) NOT NULL DEFAULT 0.70,
  change_frequency  TEXT         NOT NULL DEFAULT 'weekly',
  featured          BOOLEAN      NOT NULL DEFAULT false,
  image_url         TEXT,
  image_width       INTEGER,
  image_height      INTEGER,
  image_alt         TEXT,
  image_credit      TEXT,
  created_at        TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Indexes for the most-used query patterns
CREATE INDEX IF NOT EXISTS idx_cr_publish_date   ON content_registry (publish_date DESC);
CREATE INDEX IF NOT EXISTS idx_cr_category       ON content_registry (category);
CREATE INDEX IF NOT EXISTS idx_cr_featured       ON content_registry (featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_cr_author_slug    ON content_registry (author_slug);
CREATE INDEX IF NOT EXISTS idx_cr_tags           ON content_registry USING GIN (tags);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION cr_set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS cr_updated_at ON content_registry;
CREATE TRIGGER cr_updated_at
  BEFORE UPDATE ON content_registry
  FOR EACH ROW EXECUTE FUNCTION cr_set_updated_at();

-- Row Level Security
ALTER TABLE content_registry ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "cr_public_read"  ON content_registry;
DROP POLICY IF EXISTS "cr_anon_write"   ON content_registry;

-- Anyone can read (sitemap, feeds, etc.)
CREATE POLICY "cr_public_read" ON content_registry
  FOR SELECT TO public USING (true);

-- Service key / anon can write (prebuild sync script)
CREATE POLICY "cr_anon_write" ON content_registry
  FOR ALL TO anon
  USING (true) WITH CHECK (true);
