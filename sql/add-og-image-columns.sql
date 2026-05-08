-- Add OG image dimension + explicit URL columns to articles table
-- Required for Google Discover and Top Stories eligibility.
-- Google requires og:image:width >= 1200 and og:image:height >= 630
-- to be declared explicitly in <head> for an article to be eligible for
-- Discover and Top Stories. Without these fields, Google may downgrade or
-- exclude the article from image-rich surfaces.

ALTER TABLE articles
  ADD COLUMN IF NOT EXISTS og_image_url     text,
  ADD COLUMN IF NOT EXISTS og_image_width   integer DEFAULT 1200,
  ADD COLUMN IF NOT EXISTS og_image_height  integer DEFAULT 675,
  ADD COLUMN IF NOT EXISTS og_image_alt     text;

-- og_image_url: explicit OG image override (takes priority over thumbnail_src / hero_image_src)
-- og_image_width: pixel width of the OG image (min 1200 for Top Stories)
-- og_image_height: pixel height of the OG image (675 = 16:9, Google preferred)
-- og_image_alt: accessible alt text for the OG image (improves image indexing)

-- Backfill: set width/height to 1200/675 for all existing rows that have a thumbnail
-- (we can't verify actual dimensions, but all thumbnails sourced from Unsplash are >= 1200px)
UPDATE articles
  SET og_image_width = 1200,
      og_image_height = 675
  WHERE og_image_width IS NULL
    AND (thumbnail_src IS NOT NULL OR hero_image_src IS NOT NULL);
