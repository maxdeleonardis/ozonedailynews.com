// app/api/discord/comments/route.ts
// GET  — fetch comments for an article slug
// POST — post a new comment (saves to Supabase + creates/replies to Discord Forum thread)
//
// Discord Forum Channel: https://discord.com/channels/1385068774549360772/1485009785048010934
//
// Flow:
//   First comment on an article → POST /channels/{FORUM_CHANNEL_ID}/threads
//     creates a Forum Post (thread) named after the article.
//   All following comments      → POST /channels/{thread_id}/messages
//     replies inside that same thread.
//
// Required env vars:
//   DISCORD_BOT_TOKEN       — Bot token with SEND_MESSAGES + CREATE_PUBLIC_THREADS
//   DISCORD_FORUM_CHANNEL_ID — 1485009785048010934

import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';
import { createSSRClient } from '@/lib/supabase/ssr';

// ─── Discord Bot helpers ──────────────────────────────────────────────────────

const DISCORD_API = 'https://discord.com/api/v10';

function discordHeaders() {
  const token = process.env.DISCORD_BOT_TOKEN;
  if (!token) return null;
  return {
    'Authorization': `Bot ${token}`,
    'Content-Type': 'application/json',
  };
}

/**
 * Create a new Forum Post (thread) in the forum channel.
 * Returns the thread_id string, or null on failure.
 */
async function createForumThread(
  articleTitle: string,
  firstMessage: string,
  authorName: string,
  articleUrl?: string,
): Promise<string | null> {
  const channelId = process.env.DISCORD_FORUM_CHANNEL_ID ?? '1485009785048010934';
  const headers = discordHeaders();
  if (!headers) return null;

  // Build a rich embed so the thread opener looks like a proper article card
  const embed = {
    title:       articleTitle || 'OzoneNews Article',
    url:         articleUrl,
    color:       0x0ea5e9, // sky-blue — OzoneNews brand accent
    description: firstMessage,
    footer:      { text: `${authorName} · via OzoneNews` },
    timestamp:   new Date().toISOString(),
  };

  const res = await fetch(`${DISCORD_API}/channels/${channelId}/threads`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name:    (articleTitle || 'Article Discussion').slice(0, 100),
      message: { embeds: [embed] },
      // auto_archive_duration: 10080 = 7 days
      auto_archive_duration: 10080,
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => '');
    console.error('[discord/comments] createForumThread failed:', res.status, err);
    return null;
  }

  const data = await res.json() as { id?: string };
  return data.id ?? null;
}

/**
 * Post a reply message into an existing thread.
 */
async function postToThread(
  threadId: string,
  message: string,
  authorName: string,
  avatarUrl?: string,
): Promise<boolean> {
  const headers = discordHeaders();
  if (!headers) return false;

  // Use a webhook-style username override via allowed_mentions + author embed
  const embed = {
    description: message,
    color:       0x5865f2,
    footer:      { text: authorName, icon_url: avatarUrl || undefined },
    timestamp:   new Date().toISOString(),
  };

  const res = await fetch(`${DISCORD_API}/channels/${threadId}/messages`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ embeds: [embed] }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => '');
    console.error('[discord/comments] postToThread failed:', res.status, err);
    return false;
  }
  return true;
}

// ─── GET /api/discord/comments?slug=... ──────────────────────────────────────

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  if (!slug) return NextResponse.json({ comments: [] });

  const service = createServiceClient();
  if (!service) return NextResponse.json({ comments: [] });

  const { data, error } = await service
    .from('discord_comments')
    .select('*')
    .eq('slug', slug)
    .order('created_at', { ascending: false })
    .limit(100);

  if (error) return NextResponse.json({ comments: [] });

  const comments = (data ?? []).map((row) => ({
    id:              row.id,
    slug:            row.slug,
    discordId:       row.discord_id,
    discordUsername: row.discord_username,
    discordAvatar:   row.discord_avatar ?? '',
    body:            row.body,
    createdAt:       row.created_at,
  }));

  return NextResponse.json({ comments });
}

// ─── POST /api/discord/comments ──────────────────────────────────────────────

export async function POST(req: NextRequest) {
  let body: {
    slug?: string;
    body?: string;
    articleTitle?: string;
    articleUrl?: string;
    guestName?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { slug, body: commentBody, articleTitle, articleUrl, guestName } = body;
  if (!slug || !commentBody?.trim()) {
    return NextResponse.json({ error: 'slug and body are required' }, { status: 400 });
  }

  // ── Resolve commenter identity ────────────────────────────────────────────
  const ssr = await createSSRClient();

  let username = guestName?.trim() || 'Guest';
  let avatar = '';
  let resolvedDiscordId = `anon_${Date.now()}`;

  if (ssr) {
    try {
      const { data: { user } } = await ssr.auth.getUser();
      if (user) {
        const provider = user.app_metadata?.provider ?? 'email';
        if (provider === 'discord') {
          resolvedDiscordId = user.user_metadata?.provider_id ?? user.id;
          username = user.user_metadata?.custom_claims?.global_name
                  ?? user.user_metadata?.full_name
                  ?? user.user_metadata?.name
                  ?? 'Discord User';
          avatar = user.user_metadata?.avatar_url ?? '';
        } else if (provider === 'anonymous') {
          resolvedDiscordId = `anon_${user.id.slice(0, 8)}`;
          username = guestName?.trim() || 'Guest';
        } else {
          resolvedDiscordId = `user_${user.id.slice(0, 8)}`;
          username = user.user_metadata?.full_name
                  ?? user.email?.split('@')[0]
                  ?? 'User';
          avatar = user.user_metadata?.avatar_url ?? '';
        }
      }
    } catch {
      // session unavailable — post as guest
    }
  }

  const service = createServiceClient();
  if (!service) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  // ── Save comment to Supabase ──────────────────────────────────────────────
  const { data: inserted, error: dbError } = await service
    .from('discord_comments')
    .insert({
      slug,
      discord_id:       resolvedDiscordId,
      discord_username: username,
      discord_avatar:   avatar,
      body:             commentBody.trim(),
    })
    .select()
    .single();

  if (dbError) {
    console.error('[discord/comments] insert error:', dbError.message);
    return NextResponse.json({ error: 'Failed to save comment' }, { status: 500 });
  }

  // ── Discord Forum Thread (non-blocking) ───────────────────────────────────
  // We do this after the DB insert so the comment is always saved even if
  // Discord is down. Thread management runs in the background.
  void (async () => {
    try {
      // Look up whether this article already has a forum thread
      const { data: threadRow } = await service
        .from('discord_threads')
        .select('thread_id')
        .eq('slug', slug)
        .single();

      const existingThreadId: string | null = threadRow?.thread_id ?? null;

      if (!existingThreadId) {
        // ── First comment ever for this article — create the Forum Post ──
        const resolvedTitle = articleTitle || slug.replace(/-/g, ' ');
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ozonedailynews.com';
        const resolvedUrl = articleUrl || `${siteUrl}/${slug}`;

        const threadId = await createForumThread(
          resolvedTitle,
          commentBody.trim(),
          username,
          resolvedUrl,
        );

        if (threadId) {
          // Persist the slug → thread_id mapping so future comments go to the same thread
          await service
            .from('discord_threads')
            .upsert({ slug, thread_id: threadId }, { onConflict: 'slug' });
        }
      } else {
        // ── Subsequent comment — reply inside the existing thread ──
        await postToThread(existingThreadId, commentBody.trim(), username, avatar || undefined);
      }
    } catch (err) {
      // Discord errors are fully non-fatal — the comment is already saved in Supabase
      console.error('[discord/comments] Discord sync error (non-fatal):', err);
    }
  })();

  const comment = {
    id:              inserted.id,
    slug:            inserted.slug,
    discordId:       inserted.discord_id,
    discordUsername: inserted.discord_username,
    discordAvatar:   inserted.discord_avatar ?? '',
    body:            inserted.body,
    createdAt:       inserted.created_at,
  };

  return NextResponse.json({ comment }, { status: 201 });
}
