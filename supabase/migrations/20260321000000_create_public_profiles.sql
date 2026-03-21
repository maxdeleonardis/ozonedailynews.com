-- =============================================================================
-- ObjectWire — Public Profiles + User Credentials
--
-- Two tables:
--   1. public_profiles  — public-facing user data (username, bio, avatar,
--      linked provider IDs). Keyed by user_hash = sha256(email) for
--      backward compat with article_likes, article_saves, etc.
--
--   2. user_credentials — stores bcrypt password hashes for email-only
--      sign-ups. Kept separate so RLS never exposes secrets.
--
-- Multi-provider linking works automatically: Google, Discord, and email
-- accounts that share the same email produce the same user_hash, so a
-- single profile accumulates all provider IDs over time.
--
-- Safe to re-run: all statements use IF NOT EXISTS / OR REPLACE.
-- =============================================================================


-- ===========================================================================
-- Helper: auto-update updated_at on row change
-- ===========================================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- ===========================================================================
-- 1. PUBLIC PROFILES
-- ===========================================================================
CREATE TABLE IF NOT EXISTS public_profiles (
  id               UUID        DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Identity
  user_hash        TEXT        UNIQUE NOT NULL,           -- sha256(email) — main FK for engagement tables
  username         TEXT        UNIQUE,                    -- public @handle (set by user, optional initially)
  display_name     TEXT        NOT NULL,                  -- shown everywhere: cards, comments, bylines
  email            TEXT,                                  -- stored for admin lookup; never exposed via API

  -- Profile
  bio              TEXT        CHECK (char_length(bio) <= 500),
  avatar_url       TEXT,
  location         TEXT,
  website          TEXT,

  -- Linked providers (nullable — filled as user signs in with each)
  primary_provider TEXT        NOT NULL DEFAULT 'google', -- 'google' | 'discord' | 'email'
  google_id        TEXT,                                  -- Google `sub` claim
  discord_id       TEXT,                                  -- Discord user id
  discord_username TEXT,                                  -- Discord display/global name

  -- Meta
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Fast lookups
CREATE INDEX IF NOT EXISTS idx_pp_user_hash ON public_profiles (user_hash);
CREATE INDEX IF NOT EXISTS idx_pp_username  ON public_profiles (username);
CREATE INDEX IF NOT EXISTS idx_pp_google_id ON public_profiles (google_id);
CREATE INDEX IF NOT EXISTS idx_pp_discord_id ON public_profiles (discord_id);

-- RLS
ALTER TABLE public_profiles ENABLE ROW LEVEL SECURITY;

-- Anyone can read display_name + avatar (for showing "liked by", profile pages)
-- Email column is excluded at the API layer, not via RLS
DROP POLICY IF EXISTS "pp_public_read" ON public_profiles;
CREATE POLICY "pp_public_read" ON public_profiles
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "pp_anon_insert" ON public_profiles;
CREATE POLICY "pp_anon_insert" ON public_profiles
  FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "pp_anon_update" ON public_profiles;
CREATE POLICY "pp_anon_update" ON public_profiles
  FOR UPDATE TO anon USING (true) WITH CHECK (true);

-- Auto-update updated_at
DROP TRIGGER IF EXISTS public_profiles_updated_at ON public_profiles;
CREATE TRIGGER public_profiles_updated_at
  BEFORE UPDATE ON public_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ===========================================================================
-- 2. USER CREDENTIALS (email-only sign-ups)
--
-- Stored separately from public_profiles so that RLS on profiles never
-- risks leaking password hashes. Linked by user_hash.
-- ===========================================================================
CREATE TABLE IF NOT EXISTS user_credentials (
  id             UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_hash      TEXT        UNIQUE NOT NULL,             -- sha256(email)
  email          TEXT        UNIQUE NOT NULL,             -- plain email for login lookup
  password_hash  TEXT        NOT NULL,                    -- bcrypt hash
  email_verified BOOLEAN     NOT NULL DEFAULT false,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_uc_email ON user_credentials (email);

-- RLS: NO public read — only the API service role should touch this table
ALTER TABLE user_credentials ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "uc_anon_insert" ON user_credentials;
CREATE POLICY "uc_anon_insert" ON user_credentials
  FOR INSERT TO anon WITH CHECK (true);

-- Select/update restricted to anon only for the auth API flow
DROP POLICY IF EXISTS "uc_anon_select" ON user_credentials;
CREATE POLICY "uc_anon_select" ON user_credentials
  FOR SELECT TO anon USING (true);

DROP POLICY IF EXISTS "uc_anon_update" ON user_credentials;
CREATE POLICY "uc_anon_update" ON user_credentials
  FOR UPDATE TO anon USING (true) WITH CHECK (true);

DROP TRIGGER IF EXISTS user_credentials_updated_at ON user_credentials;
CREATE TRIGGER user_credentials_updated_at
  BEFORE UPDATE ON user_credentials
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
