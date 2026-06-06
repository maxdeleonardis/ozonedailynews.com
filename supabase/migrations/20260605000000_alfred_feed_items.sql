-- =============================================================================
-- Alfred AI CMS | RSS Feed Items Table
-- =============================================================================
-- Run in Supabase SQL Editor to create the alfred_feed_items table
-- =============================================================================

CREATE TABLE IF NOT EXISTS alfred_feed_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- RSS feed metadata
  feed_name TEXT NOT NULL,
  feed_category TEXT NOT NULL,
  
  -- Article metadata
  title TEXT NOT NULL,
  url TEXT NOT NULL UNIQUE,
  published_at TIMESTAMPTZ NOT NULL,
  summary TEXT,
  author TEXT,
  
  -- Alfred processing
  ingested_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  relevance_score INTEGER,
  matched_keywords TEXT[],
  category_assigned TEXT,
  
  -- Notification tracking
  notification_sent BOOLEAN DEFAULT FALSE,
  notification_sent_at TIMESTAMPTZ,
  
  -- User response
  user_response TEXT,
  user_response_at TIMESTAMPTZ,
  user_instructions TEXT,
  
  -- Article generation
  article_generated BOOLEAN DEFAULT FALSE,
  article_slug TEXT,
  article_generated_at TIMESTAMPTZ,
  
  -- Publishing
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  published_url TEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_feed_items_feed_name ON alfred_feed_items(feed_name);
CREATE INDEX IF NOT EXISTS idx_feed_items_category ON alfred_feed_items(feed_category);
CREATE INDEX IF NOT EXISTS idx_feed_items_relevance_score ON alfred_feed_items(relevance_score DESC);
CREATE INDEX IF NOT EXISTS idx_feed_items_published_at_desc ON alfred_feed_items(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_feed_items_notification_pending ON alfred_feed_items(notification_sent) WHERE notification_sent = FALSE;
CREATE INDEX IF NOT EXISTS idx_feed_items_user_response ON alfred_feed_items(user_response) WHERE user_response IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_feed_items_url ON alfred_feed_items(url);
CREATE INDEX IF NOT EXISTS idx_feed_items_ingested_at ON alfred_feed_items(ingested_at DESC);

-- Updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_alfred_feed_items_updated_at
  BEFORE UPDATE ON alfred_feed_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE alfred_feed_items ENABLE ROW LEVEL SECURITY;

-- Policy: Allow service role full access
CREATE POLICY "Service role has full access to alfred_feed_items"
  ON alfred_feed_items
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can read
CREATE POLICY "Authenticated users can read alfred_feed_items"
  ON alfred_feed_items
  FOR SELECT
  TO authenticated
  USING (true);

-- Comments for documentation
COMMENT ON TABLE alfred_feed_items IS 'RSS feed items ingested by Alfred AI CMS for automated article generation';
COMMENT ON COLUMN alfred_feed_items.relevance_score IS 'Computed score 0-100 based on keywords, recency, and priority';
COMMENT ON COLUMN alfred_feed_items.user_response IS 'WRITE, SKIP, BOOKMARK, or null';
COMMENT ON COLUMN alfred_feed_items.article_slug IS 'Generated article slug in format /category/subcategory/article-title';
