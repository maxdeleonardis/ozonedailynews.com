-- ObjectWire Articles Table Setup
-- Run this in your Supabase SQL Editor

-- Drop existing table if you want to start fresh (CAUTION: This deletes all data!)
-- DROP TABLE IF EXISTS articles CASCADE;

-- Create the articles table (full schema matching publish-content.ts)
CREATE TABLE IF NOT EXISTS articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  excerpt TEXT,
  content JSONB,
  -- Category / topic
  category TEXT NOT NULL DEFAULT 'News',
  category_color TEXT,
  topic_tag TEXT,
  tags TEXT[],
  -- Author (author_name is primary; author kept for backward compat)
  author TEXT DEFAULT 'ObjectWire Editorial',
  author_name TEXT,
  author_role TEXT,
  author_avatar TEXT,
  author_twitter TEXT,
  author_slug TEXT,
  author_bio TEXT,
  -- Images
  image_url TEXT,
  image_alt TEXT,
  image_caption TEXT,
  image_credit TEXT,
  thumbnail_url TEXT,
  -- Publishing
  read_time TEXT,
  featured BOOLEAN DEFAULT false,
  trending BOOLEAN DEFAULT false,
  breaking BOOLEAN DEFAULT false,
  exclusive BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  view_count INTEGER DEFAULT 0
);

-- Add any missing columns to an existing table (safe to re-run)
ALTER TABLE articles ADD COLUMN IF NOT EXISTS subtitle TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS category_color TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS topic_tag TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS tags TEXT[];
ALTER TABLE articles ADD COLUMN IF NOT EXISTS author_name TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS author_role TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS author_avatar TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS author_twitter TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS author_slug TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS author_bio TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS image_alt TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS image_caption TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS image_credit TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS thumbnail_url TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS read_time TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS trending BOOLEAN DEFAULT false;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS breaking BOOLEAN DEFAULT false;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS exclusive BOOLEAN DEFAULT false;

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_articles_created_at ON articles(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);
CREATE INDEX IF NOT EXISTS idx_articles_id ON articles(id);

-- Enable Row Level Security
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access" ON articles;
DROP POLICY IF EXISTS "Allow authenticated insert" ON articles;
DROP POLICY IF EXISTS "Allow authenticated update" ON articles;
DROP POLICY IF EXISTS "Allow authenticated delete" ON articles;
DROP POLICY IF EXISTS "Allow anonymous insert" ON articles;
DROP POLICY IF EXISTS "Allow anonymous update" ON articles;
DROP POLICY IF EXISTS "Allow anonymous delete" ON articles;

-- Create policy to allow public read access to PUBLISHED articles only
CREATE POLICY "Allow public read access" ON articles
  FOR SELECT
  TO public
  USING (status = 'published');

-- Allow anonymous (anon) role to insert articles
CREATE POLICY "Allow anonymous insert" ON articles
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anonymous (anon) role to update articles
CREATE POLICY "Allow anonymous update" ON articles
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Allow anonymous (anon) role to delete articles
CREATE POLICY "Allow anonymous delete" ON articles
  FOR DELETE
  TO anon
  USING (true);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop trigger if exists
DROP TRIGGER IF EXISTS update_articles_updated_at ON articles;

-- Trigger to call the function
CREATE TRIGGER update_articles_updated_at
    BEFORE UPDATE ON articles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Function to increment view count
CREATE OR REPLACE FUNCTION increment_view_count(article_slug TEXT)
RETURNS void AS $$
BEGIN
  UPDATE articles
  SET view_count = view_count + 1
  WHERE slug = article_slug;
END;
$$ language 'plpgsql';

-- Verify the setup
SELECT 
  'Setup complete!' as message,
  COUNT(*) as article_count
FROM articles;

-- MIGRATION: Update existing articles to set status based on published_at
-- Run this AFTER creating the table if you have existing data
-- UPDATE articles 
-- SET status = CASE 
--   WHEN published_at IS NOT NULL THEN 'published'
--   ELSE 'draft'
-- END
-- WHERE status = 'draft';
