// =============================================================================
// /api/discord/comments
// =============================================================================
// GET  — fetch comments for a given article slug (from Supabase)
// POST — submit a new comment (requires Discord session), saves to Supabase,
//         forwards to Discord Forum Channel via webhook.
//         First comment on an article auto-creates a Forum Post (thread).
//         Subsequent comments append to the same thread.
//
// Required environment variables:
//   DISCORD_COMMENTS_WEBHOOK_URL   — Discord Forum Channel webhook URL
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { createAuthClient }          from '@/lib/supabase/server';
import { createClient }              from '@/lib/supabase/server';

// ── GET /api/discord/comments?slug=<slug> ─────────────────────────────────────
export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug param' }, { status: 400 });
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from('discord_comments')
    .select('id, slug, discord_id, discord_username, discord_avatar, body, created_at')
    .eq('slug', slug)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[discord/comments GET]', error.message);
    return NextResponse.json({ error: 'DB error' }, { status: 500 });
  }

  // Map DB column names to the camelCase the frontend expects
  const comments = (data ?? []).map((row) => ({
    id: row.id,
    slug: row.slug,
    discordId: row.discord_id,
    discordUsername: row.discord_username,
    discordAvatar: row.discord_avatar,
    body: row.body,
    createdAt: row.created_at,
  }));

  return NextResponse.json({ comments });
}

// ── POST /api/discord/comments ────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Auth check via Supabase
  const authSupabase = await createAuthClient();
  const { data: { user } } = await authSupabase.auth.getUser();
  if (!user?.email) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  let body: { slug: string; body: string; articleTitle?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { slug, body: text, articleTitle } = body;

  if (!slug || typeof slug !== 'string') {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }
  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return NextResponse.json({ error: 'Empty comment' }, { status: 400 });
  }
  if (text.trim().length > 1000) {
    return NextResponse.json({ error: 'Comment exceeds 1000 characters' }, { status: 400 });
  }

  // Build commenter identity from Supabase user metadata
  const commenterId   = user.id;
  const commenterName = user.user_metadata?.full_name ?? user.email?.split('@')[0] ?? 'Anonymous';
  const commenterAvatar = user.user_metadata?.avatar_url ?? '';

  const supabase = await createClient();

  // ── Save to Supabase ─────────────────────────────────────────────────────
  const { data: inserted, error: insertError } = await supabase
    .from('discord_comments')
    .insert({
      slug,
      discord_id: commenterId,
      discord_username: commenterName,
      discord_avatar: commenterAvatar,
      body: text.trim(),
    })
    .select('id, slug, discord_id, discord_username, discord_avatar, body, created_at')
    .single();

  if (insertError || !inserted) {
    console.error('[discord/comments POST]', insertError?.message);
    return NextResponse.json({ error: 'Failed to save comment' }, { status: 500 });
  }

  const comment = {
    id: inserted.id,
    slug: inserted.slug,
    discordId: inserted.discord_id,
    discordUsername: inserted.discord_username,
    discordAvatar: inserted.discord_avatar,
    body: inserted.body,
    createdAt: inserted.created_at,
  };

  // ── Forward to Discord Forum Channel webhook ─────────────────────────────
  const webhookUrl = process.env.DISCORD_COMMENTS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      // Check if a Forum Post (thread) already exists for this article
      const { data: thread } = await supabase
        .from('discord_threads')
        .select('thread_id')
        .eq('slug', slug)
        .single();

      const siteUrl = process.env.NEXTAUTH_URL ?? 'https://www.objectwire.org';
      const articleUrl = `${siteUrl}/${slug}`;
      const threadTitle = articleTitle || slug.split('/').pop()?.replace(/-/g, ' ') || slug;

      const webhookPayload: Record<string, unknown> = {
        username: `${commenterName} via ObjectWire`,
        avatar_url: commenterAvatar || undefined,
        embeds: [
          {
            color: 0x5865f2,
            author: {
              name: commenterName,
              icon_url: commenterAvatar || undefined,
            },
            description: text.trim(),
            fields: [
              {
                name: '📰 Read Article',
                value: `[${threadTitle}](${articleUrl})`,
              },
            ],
            footer: {
              text: `objectwire.org`,
            },
            timestamp: comment.createdAt,
          },
        ],
      };

      let targetUrl = webhookUrl;

      if (thread?.thread_id) {
        // Append to existing Forum Post
        targetUrl = `${webhookUrl}?thread_id=${thread.thread_id}`;
      } else {
        // Create a new Forum Post — pass thread_name to auto-create
        webhookPayload.thread_name = threadTitle;
      }

      const webhookRes = await fetch(`${targetUrl}?wait=true`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(webhookPayload),
      });

      // If we just created a new Forum Post, save the thread_id
      if (!thread?.thread_id && webhookRes.ok) {
        try {
          const webhookData = await webhookRes.json();
          const newThreadId = webhookData.channel_id; // Discord returns the thread's channel_id
          if (newThreadId) {
            await supabase
              .from('discord_threads')
              .insert({
                slug,
                thread_id: newThreadId,
                thread_name: threadTitle,
              });
          }
        } catch {
          // Thread tracking failed — non-critical, next comment will create a new post
        }
      }
    } catch (err) {
      console.error('[discord/comments] webhook failed:', err);
      // Don't fail the whole request if webhook has an issue
    }
  }

  return NextResponse.json({ comment }, { status: 201 });
}
