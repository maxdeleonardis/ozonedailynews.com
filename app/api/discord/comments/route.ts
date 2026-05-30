// app/api/discord/comments/route.ts
// GET  — fetch comments for an article slug
// POST — post a new comment (saves to Supabase + forwards to Discord webhook)

import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';
import { createSSRClient } from '@/lib/supabase/ssr';

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
  let body: { slug?: string; body?: string; articleTitle?: string; guestName?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { slug, body: commentBody, articleTitle, guestName } = body;
  if (!slug || !commentBody?.trim()) {
    return NextResponse.json({ error: 'slug and body are required' }, { status: 400 });
  }

  // Get Supabase session to identify the commenter
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
    // If the table doesn't exist yet, return a graceful error
    console.error('[discord/comments] insert error:', dbError.message);
    return NextResponse.json({ error: 'Failed to save comment' }, { status: 500 });
  }

  // Forward to Discord webhook (non-blocking — don't hold up the response)
  const webhookUrl = process.env.DISCORD_COMMENTS_WEBHOOK_URL;
  if (webhookUrl) {
    const articleLabel = articleTitle ? ` · ${articleTitle}` : '';
    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: `${username} (OzoneNews${articleLabel})`,
        avatar_url: avatar || undefined,
        content: commentBody.trim(),
      }),
    }).catch(() => { /* webhook failures are silent */ });
  }

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
