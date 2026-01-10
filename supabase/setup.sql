-- ObjectWire Articles Table Setup
-- Run this in your Supabase SQL Editor

-- Drop existing table if you want to start fresh (CAUTION: This deletes all data!)
-- DROP TABLE IF EXISTS articles CASCADE;

-- Create the articles table
CREATE TABLE IF NOT EXISTS articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content JSONB,
  category TEXT NOT NULL DEFAULT 'News',
  author TEXT DEFAULT 'ObjectWire Editorial',
  featured BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  image_url TEXT,
  view_count INTEGER DEFAULT 0
);

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_articles_created_at ON articles(created_at DESC);

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

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON articles
  FOR SELECT
  TO public
  USING (true);

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
