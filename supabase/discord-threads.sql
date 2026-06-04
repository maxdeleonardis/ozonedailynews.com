-- ============================================================================
-- discord_threads — maps article slug → Discord Forum Post (thread) ID
--
-- Created when the first comment on an article is posted.
-- Subsequent comments are sent as replies to the existing thread.
--
-- Run this in Supabase → SQL Editor → Run
-- ============================================================================

create table if not exists discord_threads (
  slug       text        primary key,
  thread_id  text        not null,
  created_at timestamptz not null default now()
);

-- No RLS needed — only accessed by service role via the API route
-- (discord_threads is purely internal, never read by the browser directly)

comment on table discord_threads is
  'Maps article slug to Discord Forum Post thread_id. One row per article.';
comment on column discord_threads.slug      is 'Article slug — matches discord_comments.slug';
comment on column discord_threads.thread_id is 'Discord channel ID of the Forum Post thread';
