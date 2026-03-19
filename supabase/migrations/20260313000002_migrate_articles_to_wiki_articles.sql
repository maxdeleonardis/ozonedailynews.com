-- =============================================================================
-- Migrate wiki-type records from `articles` → `wiki_articles`
--
-- The `articles` table was seeded with 353 static page records by
-- scripts/migrate-wiki-content.ts. Those are all wiki/encyclopedia-style
-- pages. This script moves them into the dedicated `wiki_articles` table
-- so that `articles` is exclusively used by the NewsArticle component.
--
-- Safe to run multiple times (INSERT ... ON CONFLICT DO NOTHING).
-- Run AFTER 20260313000000_component_article_tables.sql has been applied.
-- =============================================================================

INSERT INTO wiki_articles (
  slug,
  title,
  subtitle,
  content,
  category,
  tags,
  author_name,
  author_role,
  author_slug,
  author_avatar,
  breaking,
  published_at,
  read_time,
  view_count,
  created_at,
  updated_at
)
SELECT
  slug,
  title,
  -- `excerpt` was the closest field to subtitle in the old table
  excerpt                             AS subtitle,
  content,
  category,
  -- old table had no tags array; default to empty
  COALESCE('{}'::text[], '{}'::text[]) AS tags,
  -- author_name was added to articles by the ALTER migration
  author_name                         AS author_name,
  NULL                                AS author_role,
  NULL                                AS author_slug,
  NULL                                AS author_avatar,
  false                               AS breaking,
  published_at,
  NULL                                AS read_time,
  view_count,
  created_at,
  updated_at
FROM articles
ON CONFLICT (slug) DO NOTHING;

-- =============================================================================
-- Optional: after verifying wiki_articles looks correct you can clean up
-- the wiki records from `articles` with:
--
--   DELETE FROM articles
--   WHERE slug IN (SELECT slug FROM wiki_articles);
--
-- Do NOT run this automatically — leave it as a manual step until the
-- WikiArticle component has been confirmed working against wiki_articles.
-- =============================================================================
