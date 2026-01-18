-- Create blog_posts table with block-based content structure
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE,
  
  -- Basic info
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  author TEXT DEFAULT 'ObjectWire Editorial Team',
  category TEXT DEFAULT 'Technology',
  tags TEXT[] DEFAULT '{}',
  read_time TEXT DEFAULT '5 min read',
  
  -- Block-based content (JSONB for flexible structure)
  blocks JSONB DEFAULT '[]'::jsonb,
  
  -- Status
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  
  -- Featured image
  featured_image TEXT,
  
  -- SEO
  meta_title TEXT,
  meta_description TEXT
);

-- Create index for slug lookups
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_created_at ON blog_posts(created_at DESC);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published posts
CREATE POLICY "Anyone can view published posts" ON blog_posts
  FOR SELECT USING (status = 'published');

-- Policy: Authenticated users can do everything
CREATE POLICY "Authenticated users have full access" ON blog_posts
  FOR ALL USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to auto-update updated_at
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
