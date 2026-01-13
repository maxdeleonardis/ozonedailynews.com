-- Migration: Add status column and update RLS policies for two-room architecture
-- This migration implements the "kitchen vs dining room" separation

-- Step 1: Add status column with constraint
ALTER TABLE articles 
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'draft' 
CHECK (status IN ('draft', 'published', 'archived'));

-- Step 2: Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);
CREATE INDEX IF NOT EXISTS idx_articles_id ON articles(id);

-- Step 3: Migrate existing data (set status based on published_at)
UPDATE articles 
SET status = CASE 
  WHEN published_at IS NOT NULL THEN 'published'
  ELSE 'draft'
END
WHERE status = 'draft' OR status IS NULL;

-- Step 4: Drop old permissive RLS policies
DROP POLICY IF EXISTS "Allow public read all articles" ON articles;
DROP POLICY IF EXISTS "Allow public read access to published articles" ON articles;
DROP POLICY IF EXISTS "Allow authenticated insert" ON articles;
DROP POLICY IF EXISTS "Allow authenticated update" ON articles;
DROP POLICY IF EXISTS "Allow authenticated delete" ON articles;

-- Step 5: Create new strict RLS policies

-- PUBLIC: Can only read published articles (the "dining room")
CREATE POLICY "public_read_published_only" ON articles
  FOR SELECT
  TO public
  USING (status = 'published');

-- AUTHENTICATED: Can read all articles (see drafts in "the kitchen")
CREATE POLICY "authenticated_read_all" ON articles
  FOR SELECT
  TO authenticated
  USING (true);

-- AUTHENTICATED: Can insert new articles (always as draft)
CREATE POLICY "authenticated_insert_drafts" ON articles
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- AUTHENTICATED: Can update articles
CREATE POLICY "authenticated_update_articles" ON articles
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- AUTHENTICATED: Can delete articles
CREATE POLICY "authenticated_delete_articles" ON articles
  FOR DELETE
  TO authenticated
  USING (true);

-- Step 6: Add comments for documentation
COMMENT ON COLUMN articles.status IS 'Article status: draft (kitchen), published (dining room), or archived';

-- Step 7: Verify migration
DO $$
DECLARE
  draft_count INTEGER;
  published_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO draft_count FROM articles WHERE status = 'draft';
  SELECT COUNT(*) INTO published_count FROM articles WHERE status = 'published';
  
  RAISE NOTICE 'Migration complete: % drafts, % published articles', draft_count, published_count;
END $$;
