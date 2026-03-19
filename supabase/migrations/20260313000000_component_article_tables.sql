-- =============================================================================
-- Component Article Tables
-- Two new tables + the existing `articles` table covers all three components:
--
--   articles        →  NewsArticle component  (see 20260313000001_alter_articles_for_newsarticle.sql)
--   wiki_articles   →  WikiArticle component  (encyclopedia + news dual-mode)
--   jack_articles   →  JackArticle component  (research report + CME news layout)
-- =============================================================================


-- ─────────────────────────────────────────────────────────────────────────────
-- 1. WIKI ARTICLES
--    Powers: WikiArticle component
--    Two display modes driven by whether author_name is set:
--      - Wiki mode  (author_name IS NULL): encyclopedia layout
--      - News mode  (author_name NOT NULL): news article layout
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS wiki_articles (
  id               UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  slug             TEXT        UNIQUE NOT NULL,

  -- Core content
  title            TEXT        NOT NULL,
  subtitle         TEXT,                              -- Used as h1 display title
  content          JSONB       NOT NULL DEFAULT '[]'::jsonb,
  -- content format: [{ "type": "html", "content": "<p>...</p>" }]

  -- Category / topic
  category         TEXT,                              -- e.g. "Crypto", "Tech"
  topic_tag        TEXT,                              -- secondary label, e.g. "DeFi"
  tags             TEXT[]      DEFAULT '{}'::text[],  -- tag chips shown at footer

  -- News-mode fields (rendered when author_name IS NOT NULL)
  author_name      TEXT,                              -- null = wiki layout
  author_role      TEXT,                              -- e.g. "Senior Reporter"
  author_slug      TEXT,                              -- for /authors/<slug> link
  author_avatar    TEXT,                              -- image URL

  -- Badges
  breaking         BOOLEAN     NOT NULL DEFAULT false,

  -- Dates
  published_at     TIMESTAMPTZ,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Engagement
  read_time        TEXT,                              -- e.g. "4 min read"
  view_count       INTEGER     NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_wiki_articles_slug         ON wiki_articles (slug);
CREATE INDEX IF NOT EXISTS idx_wiki_articles_category     ON wiki_articles (category);
CREATE INDEX IF NOT EXISTS idx_wiki_articles_published_at ON wiki_articles (published_at DESC);
CREATE INDEX IF NOT EXISTS idx_wiki_articles_tags         ON wiki_articles USING GIN (tags);

ALTER TABLE wiki_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "wiki_articles_public_read" ON wiki_articles
  FOR SELECT TO public USING (true);

CREATE POLICY "wiki_articles_auth_write" ON wiki_articles
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE TRIGGER wiki_articles_updated_at
  BEFORE UPDATE ON wiki_articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ─────────────────────────────────────────────────────────────────────────────
-- 2. JACK ARTICLES
--    Powers: JackArticle component
--    Two layouts: 'report' (full-width research/Greenland style) and
--                 'news'   (CME-style sidebar + content).
--    Rich sidebar data (timeline, documents, related) stored as JSONB.
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS jack_articles (
  id                          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  slug                        TEXT        UNIQUE NOT NULL,

  -- Layout mode
  layout                      TEXT        NOT NULL DEFAULT 'report'
                                          CHECK (layout IN ('report','news')),

  -- Header
  title                       TEXT        NOT NULL,
  subtitle                    TEXT,                          -- deck / news layout
  subject                     TEXT,                         -- thick left-border bar (report layout)
  description                 TEXT,                         -- meta description for SEO + schema

  -- Category
  category_label              TEXT,                         -- single label (report layout)
  categories                  JSONB       DEFAULT '[]'::jsonb,
  -- categories format: [{ "label": "Finance", "color": "green" }, ...]

  -- Dates / timing
  publish_date                TEXT,                         -- display string e.g. "February 1, 2026"
  publish_date_iso            TIMESTAMPTZ,                  -- ISO for schema + sorting
  modified_date_iso           TIMESTAMPTZ,
  read_time                   TEXT,

  -- Hero image
  hero_image                  JSONB,
  -- format: { "src": "...", "alt": "...", "caption": "...", "credit": "..." }

  -- Breadcrumbs
  breadcrumbs                 JSONB       DEFAULT '[]'::jsonb,
  -- format: [{ "href": "/finance", "label": "Finance" }, ...]

  -- Author
  author                      JSONB,
  -- format: { "name": "...", "slug": "...", "avatar": "...", "initials": "...",
  --           "department": "...", "url": "..." }

  -- Body (JSX children serialised as HTML)
  content_html                TEXT        NOT NULL DEFAULT '',

  -- Sidebar (news layout)
  related_articles            JSONB       DEFAULT '[]'::jsonb,
  -- format: [{ "href": "...", "category": "...", "categoryColor": "...", "title": "..." }]

  timeline                    JSONB       DEFAULT '[]'::jsonb,
  -- format: [{ "date": "...", "description": "...", "highlight": true }]

  documents                   JSONB       DEFAULT '[]'::jsonb,
  -- format: [{ "href": "...", "label": "...", "icon": "..." }]

  -- Newsletter
  show_newsletter             BOOLEAN     NOT NULL DEFAULT false,
  newsletter_title            TEXT,
  newsletter_description      TEXT,

  -- Sources / footnotes
  sources                     JSONB       DEFAULT '[]'::jsonb,
  -- format: [{ "number": 1, "url": "...", "title": "...", "description": "..." }]

  -- Footer
  show_corrections            BOOLEAN     NOT NULL DEFAULT true,
  show_editorial_standards    BOOLEAN     NOT NULL DEFAULT true,
  footer_tagline              TEXT,
  footer_links                JSONB       DEFAULT '[]'::jsonb,
  -- format: [{ "href": "/finance", "label": "Research Archive" }]

  -- Theme
  accent_color                TEXT        NOT NULL DEFAULT 'gray'
                                          CHECK (accent_color IN (
                                            'gray','blue','green','orange','red','purple','black'
                                          )),

  -- SEO / Google News schema
  article_url                 TEXT,                         -- canonical URL
  section                     TEXT,                         -- e.g. "Finance", "Technology"
  keywords                    TEXT[]      DEFAULT '{}'::text[],

  -- Archival
  uuid                        TEXT,                         -- stable public UUID
  version                     TEXT,                         -- e.g. "1.2"

  -- Timestamps
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Engagement
  view_count                  INTEGER     NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_jack_articles_slug             ON jack_articles (slug);
CREATE INDEX IF NOT EXISTS idx_jack_articles_layout           ON jack_articles (layout);
CREATE INDEX IF NOT EXISTS idx_jack_articles_publish_date_iso ON jack_articles (publish_date_iso DESC);
CREATE INDEX IF NOT EXISTS idx_jack_articles_section          ON jack_articles (section);
CREATE INDEX IF NOT EXISTS idx_jack_articles_keywords         ON jack_articles USING GIN (keywords);
CREATE INDEX IF NOT EXISTS idx_jack_articles_uuid             ON jack_articles (uuid) WHERE uuid IS NOT NULL;

ALTER TABLE jack_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "jack_articles_public_read" ON jack_articles
  FOR SELECT TO public USING (true);

CREATE POLICY "jack_articles_auth_write" ON jack_articles
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE TRIGGER jack_articles_updated_at
  BEFORE UPDATE ON jack_articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
