-- Migration Script: Update existing articles with status field
-- Run this in Supabase SQL Editor AFTER running setup.sql

-- This script updates existing articles to set their status based on published_at
-- Articles with published_at NOT NULL → status = 'published'
-- Articles with published_at NULL → status = 'draft'

BEGIN;

-- Update all existing articles
UPDATE articles 
SET status = CASE 
  WHEN published_at IS NOT NULL THEN 'published'
  ELSE 'draft'
END
WHERE status = 'draft' OR status IS NULL;

-- Verify the migration
SELECT 
  status,
  COUNT(*) as count,
  COUNT(CASE WHEN published_at IS NOT NULL THEN 1 END) as with_published_date
FROM articles
GROUP BY status;

COMMIT;

-- Expected output:
-- status     | count | with_published_date
-- -----------|-------|--------------------
-- published  | X     | X
-- draft      | Y     | 0
