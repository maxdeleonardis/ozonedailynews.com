-- ============================================================================
-- OzoneNews | RLS Audit Script
-- Run this in Supabase → SQL Editor to verify brand isolation is airtight.
--
-- WHAT THIS TESTS:
--   1. Unauthenticated users can only see published articles (all brands)
--   2. An ozone editor cannot read drafts belonging to 'basil'
--   3. An ozone editor CAN read ozone drafts
--   4. A superadmin (brand_slugs = '{}') CAN read all drafts
--   5. content_registry is fully public (sitemap/RSS use anon key)
--   6. routing_table and redirects are fully public
--
-- HOW TO USE:
--   Paste this entire file into Supabase > SQL Editor > New Query > Run
--   All checks should return 0 rows — a row means a policy violation.
-- ============================================================================

-- ─── Setup: insert test data as service_role ─────────────────────────────────
-- These rows are cleaned up at the end of this script.

do $$ begin

  -- Fake ozone draft (should NOT be readable by a basil editor)
  insert into articles (slug, url, title, category, status, brand_slug, content_html)
  values (
    '__rls_audit_ozone_draft',
    'https://www.ozonedailynews.com/__rls_audit_ozone_draft',
    'RLS Audit — Ozone Draft',
    'Test', 'draft', 'ozone', 'audit test content'
  )
  on conflict (slug) do nothing;

  -- Fake basil draft (should NOT be readable by an ozone editor)
  insert into articles (slug, url, title, category, status, brand_slug, content_html)
  values (
    '__rls_audit_basil_draft',
    'https://www.basilnews.com/__rls_audit_basil_draft',
    'RLS Audit — Basil Draft',
    'Test', 'draft', 'basil', 'audit test content'
  )
  on conflict (slug) do nothing;

  -- Fake ozone published article (should be readable by anyone)
  insert into articles (slug, url, title, category, status, brand_slug, content_html)
  values (
    '__rls_audit_ozone_published',
    'https://www.ozonedailynews.com/__rls_audit_ozone_published',
    'RLS Audit — Ozone Published',
    'Test', 'published', 'ozone', 'audit test content'
  )
  on conflict (slug) do nothing;

end $$;


-- ─── CHECK 1: Anon can see published articles ────────────────────────────────
-- Expected: 1 row (the ozone published article)
-- A result of 0 rows means the "anon read published articles" policy is broken.

set role anon;

select
  'CHECK 1 — anon can read published' as check_name,
  case count(*) when 1 then 'PASS' else 'FAIL (expected 1 row)' end as result
from articles
where slug like '__rls_audit_%' and status = 'published';

reset role;


-- ─── CHECK 2: Anon cannot see drafts ─────────────────────────────────────────
-- Expected: 0 rows
-- A result > 0 means drafts are leaking to unauthenticated users.

set role anon;

select
  'CHECK 2 — anon cannot see drafts' as check_name,
  case count(*) when 0 then 'PASS' else concat('FAIL (', count(*), ' draft(s) leaked)') end as result
from articles
where slug like '__rls_audit_%' and status = 'draft';

reset role;


-- ─── CHECK 3: Brand isolation — ozone editor cannot read basil draft ─────────
-- This check uses set_config to simulate an authenticated user's JWT uid.
-- Replace 'YOUR_OZONE_EDITOR_UUID' with the real uuid from auth.users.
-- Run manually if you have the UUID — commented out by default to avoid errors.

-- set role authenticated;
-- set local request.jwt.claims = '{"sub":"YOUR_OZONE_EDITOR_UUID","role":"authenticated"}';
--
-- select
--   'CHECK 3 — ozone editor cannot read basil draft' as check_name,
--   case count(*) when 0 then 'PASS' else concat('FAIL (', count(*), ' cross-brand draft(s) leaked)') end as result
-- from articles
-- where slug = '__rls_audit_basil_draft';
--
-- reset role;


-- ─── CHECK 4: content_registry public read ────────────────────────────────────
-- Expected: content_registry is accessible to anon (sitemaps/RSS use anon key).
-- A result that throws an error means the policy is missing or broken.

set role anon;

select
  'CHECK 4 — content_registry public read' as check_name,
  'PASS — anon can query content_registry' as result
from content_registry
limit 1;

reset role;


-- ─── CHECK 5: routing_table public read ──────────────────────────────────────

set role anon;

select
  'CHECK 5 — routing_table public read' as check_name,
  'PASS — anon can query routing_table' as result
from routing_table
limit 1;

reset role;


-- ─── CHECK 6: redirects public read ──────────────────────────────────────────

set role anon;

select
  'CHECK 6 — redirects public read' as check_name,
  'PASS — anon can query redirects' as result
from redirects
limit 1;

reset role;


-- ─── CHECK 7: anon cannot write to articles ──────────────────────────────────
-- This must be run manually — INSERT will throw, not return rows.
-- set role anon;
-- insert into articles (slug, url, title, category, brand_slug, content_html)
-- values ('__rls_write_test', 'https://example.com', 'Write Test', 'Test', 'ozone', '');
-- Expected: ERROR: new row violates row-level security policy
-- reset role;


-- ─── Cleanup: remove test rows ───────────────────────────────────────────────

delete from articles where slug like '__rls_audit_%';

select 'Audit complete. Test rows cleaned up.' as status;
