-- =============================================================================
-- Create `article_pages` table
--
-- Powers: ArticlePage component
-- Used for rich long-form editorial pages with info boxes, table of contents,
-- and related links (e.g. /influencer/daddywellness, /authors/*, /blog/*).
--
-- ArticlePageProps mapping:
--   title            → article_pages.title
--   subtitle         → article_pages.subtitle
--   category         → article_pages.category
--   lastUpdated      → article_pages.last_updated   (display string)
--   infoBox          → article_pages.info_box        (JSONB)
--   tableOfContents  → article_pages.table_of_contents (JSONB)
--   children (body)  → article_pages.content_html
--   relatedLinks     → article_pages.related_links   (JSONB)
--   backLink         → article_pages.back_link        (JSONB)
-- =============================================================================

CREATE TABLE IF NOT EXISTS article_pages (
  id               UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  slug             TEXT        UNIQUE NOT NULL,

  -- Core
  title            TEXT        NOT NULL,
  subtitle         TEXT,
  category         TEXT,
  last_updated     TEXT,                         -- display string e.g. "March 2026"

  -- Sidebar info box
  info_box         JSONB,
  -- format: {
  --   "title": "Quick Facts",
  --   "image": { "src": "...", "alt": "...", "caption": "..." },
  --   "items": [{ "label": "Born", "value": "1990" }, ...]
  -- }

  -- Table of contents
  table_of_contents JSONB      DEFAULT '[]'::jsonb,
  -- format: [{ "id": "section-1", "label": "Introduction", "level": 1 }, ...]

  -- HTML body (serialised ArticlePage children)
  content_html     TEXT        NOT NULL DEFAULT '',

  -- Related links sidebar
  related_links    JSONB       DEFAULT '[]'::jsonb,
  -- format: [{ "href": "/crypto/bitcoin", "label": "Bitcoin", "description": "..." }, ...]

  -- Back navigation link
  back_link        JSONB,
  -- format: { "href": "/influencer", "label": "← Influencers" }

  -- Timestamps
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Engagement
  view_count       INTEGER     NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_article_pages_slug     ON article_pages (slug);
CREATE INDEX IF NOT EXISTS idx_article_pages_category ON article_pages (category);

ALTER TABLE article_pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "article_pages_public_read" ON article_pages
  FOR SELECT TO public USING (true);

CREATE POLICY "article_pages_auth_write" ON article_pages
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE TRIGGER article_pages_updated_at
  BEFORE UPDATE ON article_pages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
