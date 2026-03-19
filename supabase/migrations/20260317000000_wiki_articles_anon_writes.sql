-- Migration: Add anon write policies to wiki_articles and jack_articles
-- Mirrors the pattern from 20260302000000_allow_anon_admin_writes.sql
--
-- Needed so npm run wiki:migrate / wiki:sync can write using the anon key
-- when SUPABASE_SERVICE_ROLE_KEY is not available.

-- wiki_articles
CREATE POLICY "wiki_articles_anon_insert" ON wiki_articles
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "wiki_articles_anon_update" ON wiki_articles
  FOR UPDATE TO anon USING (true) WITH CHECK (true);

CREATE POLICY "wiki_articles_anon_delete" ON wiki_articles
  FOR DELETE TO anon USING (true);

-- jack_articles
CREATE POLICY "jack_articles_anon_insert" ON jack_articles
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "jack_articles_anon_update" ON jack_articles
  FOR UPDATE TO anon USING (true) WITH CHECK (true);

CREATE POLICY "jack_articles_anon_delete" ON jack_articles
  FOR DELETE TO anon USING (true);
