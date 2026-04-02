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
  let body: { slug: string; body: string; articleTitle?: string; guestName?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { slug, body: text, articleTitle, guestName } = body;

  if (!slug || typeof slug !== 'string') {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }
  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return NextResponse.json({ error: 'Empty comment' }, { status: 400 });
  }
  if (text.trim().length > 1000) {
    return NextResponse.json({ error: 'Comment exceeds 1000 characters' }, { status: 400 });
  }

  // ── Determine commenter identity ──────────────────────────────────────────
  // Two modes:
  //   1. Discord-authed user → identity from Supabase session
  //   2. Guest → identity from guestName in request body
  let commenterId: string;
  let commenterName: string;
  let commenterAvatar: string;

  const authSupabase = await createAuthClient();
  const { data: { user } } = await authSupabase.auth.getUser();

  if (user?.id) {
    // Authenticated (Discord OAuth via Supabase)
    commenterId     = user.id;
    commenterName   = user.user_metadata?.full_name
                   ?? user.user_metadata?.custom_claims?.global_name
                   ?? user.user_metadata?.name
                   ?? user.email?.split('@')[0]
                   ?? 'Discord User';
    commenterAvatar = user.user_metadata?.avatar_url ?? '';
  } else if (guestName && typeof guestName === 'string' && guestName.trim().length > 0) {
    // Guest mode — no auth required
    const sanitized = guestName.trim().slice(0, 40);
    commenterId     = `guest_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    commenterName   = sanitized;
    commenterAvatar = '';
  } else {
    return NextResponse.json({ error: 'Sign in with Discord or provide a guest name' }, { status: 400 });
  }

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

      // Always use the production URL for article links in Discord
      const articleUrl = `https://www.objectwire.org/${slug}`;
      const threadTitle = articleTitle || slug.split('/').pop()?.replace(/-/g, ' ') || slug;
      const isGuest = commenterId.startsWith('guest_');

      const webhookPayload: Record<string, unknown> = {
        username: isGuest ? `${commenterName} (Guest) via ObjectWire` : `${commenterName} via ObjectWire`,
        avatar_url: commenterAvatar || undefined,
        embeds: [
          {
            color: isGuest ? 0x9ca3af : 0x5865f2,
            author: {
              name: isGuest ? `${commenterName} (Guest)` : commenterName,
              icon_url: commenterAvatar || undefined,
            },
            description: text.trim(),
            fields: [
              {
                name: '📰 Article',
                value: `[${threadTitle}](${articleUrl})`,
              },
            ],
            footer: { text: 'objectwire.org' },
            timestamp: comment.createdAt,
          },
        ],
      };

      // Build the correct URL — ?wait=true always, ?thread_id only when appending
      const params = new URLSearchParams({ wait: 'true' });
      if (thread?.thread_id) {
        params.set('thread_id', thread.thread_id);
      } else {
        // First comment on this article — auto-create a Forum Post (thread)
        webhookPayload.thread_name = threadTitle;
      }
      const targetUrl = `${webhookUrl}?${params.toString()}`;

      const webhookRes = await fetch(targetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(webhookPayload),
      });

      // On a new thread creation, save the thread_id for future comments
      if (!thread?.thread_id && webhookRes.ok) {
        try {
          const webhookData = await webhookRes.json();
          // Discord returns channel_id = the new Forum thread's channel id
          const newThreadId = webhookData.channel_id;
          if (newThreadId) {
            await supabase
              .from('discord_threads')
              .insert({ slug, thread_id: newThreadId, thread_name: threadTitle });
          }
        } catch {
          // Non-critical — next comment will create a new thread
        }
      }

      if (!webhookRes.ok) {
        const errBody = await webhookRes.text().catch(() => '');
        console.error('[discord/comments] webhook error', webhookRes.status, errBody);
      }
    } catch (err) {
      console.error('[discord/comments] webhook failed:', err);
      // Never fail the whole request over a webhook error
    }
  }

  return NextResponse.json({ comment }, { status: 201 });
}
