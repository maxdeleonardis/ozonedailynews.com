-- =============================================================================
-- Alter `articles` table to fully match the NewsArticle component
--
-- NewsArticleProps fields being mapped:
--   title            → articles.title          (already exists)
--   subtitle         → articles.subtitle        (new)
--   category         → articles.category        (already exists)
--   categoryColor    → articles.category_color  (new)
--   topicTag         → articles.topic_tag        (new)
--   publishDate      → articles.publish_date     (new - display string)
--   publishDateISO   → articles.published_at     (already exists as TIMESTAMPTZ)
--   readTime         → articles.read_time        (new)
--   author.name      → articles.author_name      (new - replaces plain `author` col)
--   author.role      → articles.author_role      (new)
--   author.avatar    → articles.author_avatar    (new)
--   author.twitter   → articles.author_twitter   (new)
--   author.authorSlug→ articles.author_slug      (new)
--   author.bio       → articles.author_bio       (new)
--   heroImage.src    → articles.hero_image_src   (new - replaces image_url)
--   heroImage.alt    → articles.hero_image_alt   (new)
--   heroImage.caption→ articles.hero_image_caption (new)
--   heroImage.credit → articles.hero_image_credit  (new)
--   thumbnail.src    → articles.thumbnail_src    (new)
--   thumbnail.alt    → articles.thumbnail_alt    (new)
--   tags             → articles.tags             (new TEXT[])
--   trending         → articles.trending         (new)
--   breaking         → articles.breaking         (new)
--   exclusive        → articles.exclusive        (new)
--   url              → articles.url              (new - canonical path)
--   children (body)  → articles.content_html     (new - serialised HTML body)
--
-- Legacy columns kept for backward compatibility:
--   author      (plain text) - kept; prefer author_name going forward
--   image_url                - kept; prefer hero_image_src going forward
--   excerpt                  - kept; maps loosely to subtitle
--   content     (JSONB)      - kept; used by WikiArticle fetches during migration
--   featured                 - kept
-- =============================================================================

-- ── Subtitle / deck ──────────────────────────────────────────────────────────
ALTER TABLE articles ADD COLUMN IF NOT EXISTS subtitle TEXT;

-- ── Category colour ──────────────────────────────────────────────────────────
ALTER TABLE articles ADD COLUMN IF NOT EXISTS category_color TEXT
  CHECK (category_color IS NULL OR category_color IN (
    'red','blue','green','purple','orange','pink','yellow'
  ));

-- ── Topic tag (enum matching TopicTagType in NewsArticle.tsx) ────────────────
ALTER TABLE articles ADD COLUMN IF NOT EXISTS topic_tag TEXT
  CHECK (topic_tag IS NULL OR topic_tag IN (
    'technology','news','finance','sports','entertainment',
    'lifestyle','investigations','world','politics','science',
    'gaming','crypto','ai','automotive','education','culture'
  ));

-- ── Display publish date string (e.g. "February 1, 2026") ───────────────────
ALTER TABLE articles ADD COLUMN IF NOT EXISTS publish_date TEXT;

-- ── Read time label ──────────────────────────────────────────────────────────
ALTER TABLE articles ADD COLUMN IF NOT EXISTS read_time TEXT;

-- ── Author fields (AuthorInfo interface) ─────────────────────────────────────
ALTER TABLE articles ADD COLUMN IF NOT EXISTS author_name    TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS author_role    TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS author_avatar  TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS author_twitter TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS author_slug    TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS author_bio     TEXT;

-- ── Hero image fields ────────────────────────────────────────────────────────
ALTER TABLE articles ADD COLUMN IF NOT EXISTS hero_image_src     TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS hero_image_alt     TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS hero_image_caption TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS hero_image_credit  TEXT;

-- ── Thumbnail (card/listing image) ───────────────────────────────────────────
ALTER TABLE articles ADD COLUMN IF NOT EXISTS thumbnail_src TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS thumbnail_alt TEXT;

-- ── Tags ─────────────────────────────────────────────────────────────────────
ALTER TABLE articles ADD COLUMN IF NOT EXISTS tags TEXT[] DEFAULT '{}'::text[];

-- ── Flags ────────────────────────────────────────────────────────────────────
ALTER TABLE articles ADD COLUMN IF NOT EXISTS trending  BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS breaking  BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS exclusive BOOLEAN NOT NULL DEFAULT false;

-- ── Canonical URL path (for ArticleViewTracker) ──────────────────────────────
ALTER TABLE articles ADD COLUMN IF NOT EXISTS url TEXT;

-- ── HTML body (serialised NewsArticle children) ──────────────────────────────
ALTER TABLE articles ADD COLUMN IF NOT EXISTS content_html TEXT NOT NULL DEFAULT '';

-- ── New indexes ──────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_articles_topic_tag  ON articles (topic_tag);
CREATE INDEX IF NOT EXISTS idx_articles_tags       ON articles USING GIN (tags);
CREATE INDEX IF NOT EXISTS idx_articles_breaking   ON articles (breaking)  WHERE breaking  = true;
CREATE INDEX IF NOT EXISTS idx_articles_trending   ON articles (trending)  WHERE trending  = true;
CREATE INDEX IF NOT EXISTS idx_articles_exclusive  ON articles (exclusive) WHERE exclusive = true;
CREATE INDEX IF NOT EXISTS idx_articles_author_slug ON articles (author_slug);
