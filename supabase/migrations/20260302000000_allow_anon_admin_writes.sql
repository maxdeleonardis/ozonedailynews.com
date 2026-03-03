-- Migration: Allow anon key to write articles (admin editor uses anon key until Supabase Auth is wired)
-- 
-- CONTEXT: The admin editor at /admin/editor is currently client-side and calls createBlogPost()
-- using the NEXT_PUBLIC_SUPABASE_ANON_KEY. This migration temporarily opens write access for
-- the anon role so the editor can save articles.
--
-- PRODUCTION TODO: Replace these policies with authenticated-only policies once Supabase Auth
-- is set up in the admin area.  See: https://supabase.com/docs/guides/auth

-- Drop any conflicting anon policies first
DROP POLICY IF EXISTS "Allow anonymous insert" ON articles;
DROP POLICY IF EXISTS "Allow anonymous update" ON articles;
DROP POLICY IF EXISTS "anon_insert_articles" ON articles;
DROP POLICY IF EXISTS "anon_update_articles" ON articles;

-- Allow anon role to insert articles (admin editor pre-auth setup)
CREATE POLICY "anon_insert_articles" ON articles
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anon role to update articles (needed for save/re-publish)
CREATE POLICY "anon_update_articles" ON articles
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Allow anon role to delete articles (needed for admin dashboard delete)
CREATE POLICY "anon_delete_articles" ON articles
  FOR DELETE
  TO anon
  USING (true);

-- Allow anon role to read ALL articles (drafts + published) for admin dashboard
-- The public_read_published_only policy already handles unauthenticated users;
-- this is specifically for the admin UI session which also uses anon key for now.
CREATE POLICY "anon_read_all_articles" ON articles
  FOR SELECT
  TO anon
  USING (true);
