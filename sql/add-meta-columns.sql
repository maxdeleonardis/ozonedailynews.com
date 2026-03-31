-- Add meta_title and meta_description to all 3 article tables
-- These columns let the admin editor control SEO metadata
-- When set, generateMetadata() in page stubs will use them over hardcoded values

ALTER TABLE articles
  ADD COLUMN IF NOT EXISTS meta_title text,
  ADD COLUMN IF NOT EXISTS meta_description text;

ALTER TABLE jack_articles
  ADD COLUMN IF NOT EXISTS meta_title text,
  ADD COLUMN IF NOT EXISTS meta_description text;

ALTER TABLE article_pages
  ADD COLUMN IF NOT EXISTS meta_title text,
  ADD COLUMN IF NOT EXISTS meta_description text;
