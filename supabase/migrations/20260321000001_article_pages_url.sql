-- =============================================================================
-- Add canonical URL column to article_pages
--
-- Stores the full canonical path (e.g. "/influencer/daddywellness") so
-- ArticlePageDB can pass a real URL to ArticleViewTracker and ReactionBar
-- without having to derive it from the slug.
--
-- Falls back to '/' + slug when NULL.
-- =============================================================================

ALTER TABLE article_pages ADD COLUMN IF NOT EXISTS url TEXT;

COMMENT ON COLUMN article_pages.url IS
  'Canonical path, e.g. "/influencer/daddywellness". '
  'Used for view-history and engagement tracking. Falls back to /slug if NULL.';
