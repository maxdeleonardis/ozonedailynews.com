// =============================================================================
// /api/discord/comments
// =============================================================================
// GET  — fetch comments for a given article slug (from Supabase)
// POST — submit a new comment (requires Discord session):
//          1. Persists to Supabase discord_comments table
//          2. Forwards rich embed to Discord channel webhook
//             → every comment drives traffic back to your Discord server
//
// Required environment variables:
//   NEXT_PUBLIC_SUPABASE_URL        — Supabase project URL
//   NEXT_PUBLIC_SUPABASE_ANON_KEY   — Supabase anon key
//   DISCORD_COMMENTS_WEBHOOK_URL    — Discord channel webhook URL
//                                     (Server Settings → Integrations → Webhooks)
//   DISCORD_SERVER_INVITE           — Permanent invite link shown in webhook CTA
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth-options';
import { createClient } from '@/lib/supabase/server';

export interface Comment {
  id: string;
  slug: string;
  discordId: string;
  discordUsername: string;
  discordAvatar: string;
  body: string;
  createdAt: string;
}

// ── Row shape coming back from Supabase ───────────────────────────────────────
interface DbRow {
  id: string;
  slug: string;
  discord_id: string;
  discord_username: string;
  discord_avatar: string;
  body: string;
  created_at: string;
}

function rowToComment(row: DbRow): Comment {
  return {
    id:              row.id,
    slug:            row.slug,
    discordId:       row.discord_id,
    discordUsername: row.discord_username,
    discordAvatar:   row.discord_avatar,
    body:            row.body,
    createdAt:       row.created_at,
  };
}

// ── GET /api/discord/comments?slug=<slug> ────────────────────────────────────
export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug param' }, { status: 400 });
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('discord_comments')
      .select('*')
      .eq('slug', slug)
      .order('created_at', { ascending: false })
      .limit(200);

    if (error) throw error;

    const comments = (data as DbRow[]).map(rowToComment);
    return NextResponse.json({ comments });
  } catch (err) {
    console.error('[discord/comments] GET failed:', err);
    return NextResponse.json({ comments: [] });
  }
}

// ── POST /api/discord/comments ───────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Auth check — must be signed in with Discord
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  let body: { slug: string; body: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { slug, body: text } = body;

  if (!slug || typeof slug !== 'string') {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }
  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return NextResponse.json({ error: 'Empty comment' }, { status: 400 });
  }
  if (text.trim().length > 1000) {
    return NextResponse.json({ error: 'Comment exceeds 1000 characters' }, { status: 400 });
  }

  const user = session.user as unknown as {
    discordId: string;
    discordUsername: string;
    discordAvatar: string;
  };

  // ── Persist to Supabase ───────────────────────────────────────────────────
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('discord_comments')
    .insert({
      slug,
      discord_id:       user.discordId,
      discord_username: user.discordUsername,
      discord_avatar:   user.discordAvatar,
      body:             text.trim(),
    })
    .select()
    .single();

  if (error) {
    console.error('[discord/comments] insert failed:', error);
    return NextResponse.json({ error: 'Failed to save comment' }, { status: 500 });
  }

  const comment = rowToComment(data as DbRow);

  // ── Forward to Discord channel webhook (drives community growth) ──────────
  const webhookUrl  = process.env.DISCORD_COMMENTS_WEBHOOK_URL;
  const inviteLink  = process.env.DISCORD_SERVER_INVITE ?? 'https://discord.gg/objectwire';
  const articleUrl  = `https://www.objectwire.org/${slug}`;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username:   `${user.discordUsername} via ObjectWire`,
          avatar_url: user.discordAvatar,
          embeds: [
            {
              color: 0x5865f2,
              author: {
                name:     user.discordUsername,
                icon_url: user.discordAvatar,
                url:      articleUrl,
              },
              description: text.trim(),
              fields: [
                {
                  name:   '📰 Article',
                  value:  `[Read on ObjectWire](${articleUrl})`,
                  inline: true,
                },
                {
                  name:   '🔗 Join the server',
                  value:  `[ObjectWire Discord](${inviteLink})`,
                  inline: true,
                },
              ],
              footer: { text: `Article: ${slug}` },
              timestamp: comment.createdAt,
            },
          ],
        }),
      });
    } catch (err) {
      console.error('[discord/comments] webhook failed:', err);
      // Never fail the response if webhook errors
    }
  }

  return NextResponse.json({ comment }, { status: 201 });
}
