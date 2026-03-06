-- =============================================================================
-- Article View History
-- Stores the last 7 days of article views per user (hashed email key).
-- Max 50 rows per user enforced at write time by the API.
-- Rows older than 7 days are cheap to prune via a Supabase pg_cron job
-- or simply filtered out at read time.
-- =============================================================================

CREATE TABLE IF NOT EXISTS article_view_history (
  id           UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_hash    TEXT        NOT NULL,          -- SHA-256 of user email (no PII)
  article_slug TEXT        NOT NULL,
  article_title TEXT       NOT NULL,
  article_url  TEXT        NOT NULL,
  article_image TEXT,                         -- optional hero/thumbnail
  article_category TEXT,
  viewed_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- One row per (user, slug).  Re-visiting updates viewed_at.
  CONSTRAINT article_view_history_user_slug_key UNIQUE (user_hash, article_slug)
);

CREATE INDEX IF NOT EXISTS idx_avh_user_hash_viewed
  ON article_view_history (user_hash, viewed_at DESC);

-- RLS: rows are identified only by hashed email; no authenticated session needed.
ALTER TABLE article_view_history ENABLE ROW LEVEL SECURITY;

-- Anon role can insert/update/select (all guarded by user_hash in the API)
CREATE POLICY "avh_anon_select" ON article_view_history
  FOR SELECT TO anon USING (true);

CREATE POLICY "avh_anon_insert" ON article_view_history
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "avh_anon_update" ON article_view_history
  FOR UPDATE TO anon USING (true) WITH CHECK (true);

CREATE POLICY "avh_anon_delete" ON article_view_history
  FOR DELETE TO anon USING (true);

-- =============================================================================
-- Optional: pg_cron cleanup job (requires pg_cron extension enabled in Supabase)
-- Deletes rows older than 7 days every night at 03:00 UTC.
-- Uncomment if pg_cron is available on your Supabase plan.
-- =============================================================================
-- SELECT cron.schedule(
--   'clean-article-history',
--   '0 3 * * *',
--   $$DELETE FROM article_view_history WHERE viewed_at < NOW() - INTERVAL '7 days'$$
-- );
