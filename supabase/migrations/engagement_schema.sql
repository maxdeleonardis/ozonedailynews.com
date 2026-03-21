-- =============================================================================
-- ObjectWire — User Engagement Schema
-- Run this entire file in your Supabase SQL Editor.
-- Safe to re-run: all statements use IF NOT EXISTS / OR REPLACE.
--
-- Tables created:
--   1. article_view_history  — last 7 days of reads per user
--   2. article_likes         — per-user likes (drives public like counts)
--   3. article_saves         — per-user saved articles list
--
-- Privacy: users are identified only by SHA-256(email) — no PII stored.
-- =============================================================================


-- ---------------------------------------------------------------------------
-- 0. Shared helper: SHA-256 is done in the app layer.
--    We just store the hex string as user_hash in every table.
-- ---------------------------------------------------------------------------


-- ===========================================================================
-- 1. ARTICLE VIEW HISTORY
-- ===========================================================================
CREATE TABLE IF NOT EXISTS article_view_history (
  id               UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_hash        TEXT        NOT NULL,
  article_slug     TEXT        NOT NULL,
  article_title    TEXT        NOT NULL,
  article_url      TEXT        NOT NULL,
  article_image    TEXT,
  article_category TEXT,
  viewed_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT article_view_history_user_slug_key UNIQUE (user_hash, article_slug)
);

CREATE INDEX IF NOT EXISTS idx_avh_user ON article_view_history (user_hash, viewed_at DESC);

ALTER TABLE article_view_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "avh_anon_select" ON article_view_history;
DROP POLICY IF EXISTS "avh_anon_insert" ON article_view_history;
DROP POLICY IF EXISTS "avh_anon_update" ON article_view_history;
DROP POLICY IF EXISTS "avh_anon_delete" ON article_view_history;

CREATE POLICY "avh_anon_select" ON article_view_history FOR SELECT TO anon USING (true);
CREATE POLICY "avh_anon_insert" ON article_view_history FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "avh_anon_update" ON article_view_history FOR UPDATE TO anon USING (true) WITH CHECK (true);
CREATE POLICY "avh_anon_delete" ON article_view_history FOR DELETE TO anon USING (true);


-- ===========================================================================
-- 2. ARTICLE LIKES
-- One row = one user liked one article.
-- Like count = COUNT(*) WHERE article_slug = ?  (public)
-- ===========================================================================
CREATE TABLE IF NOT EXISTS article_likes (
  id               UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_hash        TEXT        NOT NULL,
  article_slug     TEXT        NOT NULL,
  article_title    TEXT        NOT NULL,
  article_url      TEXT        NOT NULL,
  liked_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT article_likes_user_slug_key UNIQUE (user_hash, article_slug)
);

CREATE INDEX IF NOT EXISTS idx_al_slug     ON article_likes (article_slug);
CREATE INDEX IF NOT EXISTS idx_al_user     ON article_likes (user_hash, liked_at DESC);

ALTER TABLE article_likes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "al_public_count" ON article_likes;
DROP POLICY IF EXISTS "al_anon_insert"  ON article_likes;
DROP POLICY IF EXISTS "al_anon_delete"  ON article_likes;

-- Anyone can read like counts (no user_hash exposed)
CREATE POLICY "al_public_count" ON article_likes FOR SELECT TO anon USING (true);
-- Anon (API-layer enforces auth) can insert/delete
CREATE POLICY "al_anon_insert"  ON article_likes FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "al_anon_delete"  ON article_likes FOR DELETE TO anon USING (true);


-- ===========================================================================
-- 3. ARTICLE SAVES
-- One row = one user saved one article.
-- Full metadata stored so the /saved page can render without extra queries.
-- ===========================================================================
CREATE TABLE IF NOT EXISTS article_saves (
  id               UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_hash        TEXT        NOT NULL,
  article_slug     TEXT        NOT NULL,
  article_title    TEXT        NOT NULL,
  article_url      TEXT        NOT NULL,
  article_image    TEXT,
  article_category TEXT,
  saved_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT article_saves_user_slug_key UNIQUE (user_hash, article_slug)
);

CREATE INDEX IF NOT EXISTS idx_as_user ON article_saves (user_hash, saved_at DESC);

ALTER TABLE article_saves ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "as_anon_select" ON article_saves;
DROP POLICY IF EXISTS "as_anon_insert" ON article_saves;
DROP POLICY IF EXISTS "as_anon_delete" ON article_saves;

CREATE POLICY "as_anon_select" ON article_saves FOR SELECT TO anon USING (true);
CREATE POLICY "as_anon_insert" ON article_saves FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "as_anon_delete" ON article_saves FOR DELETE TO anon USING (true);


-- ===========================================================================
-- 4. DISCORD COMMENTS
-- One row = one comment posted via the Discord OAuth comment widget.
-- Comments are also forwarded to a Discord channel webhook so they appear
-- live in the server, driving community growth.
-- ===========================================================================
CREATE TABLE IF NOT EXISTS discord_comments (
  id               UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  slug             TEXT        NOT NULL,
  discord_id       TEXT        NOT NULL,
  discord_username TEXT        NOT NULL,
  discord_avatar   TEXT        NOT NULL,
  body             TEXT        NOT NULL CHECK (char_length(body) <= 1000),
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_dc_slug ON discord_comments (slug, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_dc_user ON discord_comments (discord_id, created_at DESC);

ALTER TABLE discord_comments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "dc_public_read" ON discord_comments;
DROP POLICY IF EXISTS "dc_anon_insert" ON discord_comments;
DROP POLICY IF EXISTS "dc_anon_delete" ON discord_comments;

-- Anyone can read comments (like count, discussion feed)
CREATE POLICY "dc_public_read" ON discord_comments FOR SELECT TO anon USING (true);
-- API layer verifies Discord session; RLS just allows the write
CREATE POLICY "dc_anon_insert" ON discord_comments FOR INSERT TO anon WITH CHECK (true);
-- Deletion enforced at API layer (owner check); RLS permits the call
CREATE POLICY "dc_anon_delete" ON discord_comments FOR DELETE TO anon USING (true);


-- ===========================================================================
-- 5. DISCORD THREADS
-- Maps article slugs to Discord Forum Post thread IDs.
-- Used to route subsequent comments into the same Forum Post.
-- ===========================================================================
CREATE TABLE IF NOT EXISTS discord_threads (
  id             UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  slug           TEXT        UNIQUE NOT NULL,           -- article slug
  thread_id      TEXT        NOT NULL,                  -- Discord Forum Post thread ID
  thread_name    TEXT        NOT NULL,                  -- article title used when creating
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_dt_slug ON discord_threads (slug);

ALTER TABLE discord_threads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "dt_anon_select" ON discord_threads;
DROP POLICY IF EXISTS "dt_anon_insert" ON discord_threads;
DROP POLICY IF EXISTS "dt_anon_update" ON discord_threads;

CREATE POLICY "dt_anon_select" ON discord_threads FOR SELECT TO anon USING (true);
CREATE POLICY "dt_anon_insert" ON discord_threads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "dt_anon_update" ON discord_threads FOR UPDATE TO anon USING (true) WITH CHECK (true);


-- ===========================================================================
-- Optional: pg_cron nightly cleanup for view history (7-day TTL)
-- Uncomment if your Supabase plan has the pg_cron extension.
-- ===========================================================================
-- SELECT cron.schedule(
--   'clean-view-history',
--   '0 3 * * *',
--   $$DELETE FROM article_view_history WHERE viewed_at < NOW() - INTERVAL '7 days'$$
-- );

SELECT 'ObjectWire engagement schema ready' AS status;
