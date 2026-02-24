// =============================================================================
// /api/discord/comments
// =============================================================================
// GET  — fetch comments for a given article slug
// POST — submit a new comment (requires Discord session), forwards to Discord
//         webhook so the comment also appears in the configured Discord channel.
//
// Required environment variables:
//   DISCORD_COMMENTS_WEBHOOK_URL   — Discord channel webhook URL
//                                    (Server Settings → Integrations → Webhooks)
//
// Comments are held in an in-memory store for this implementation.
// Replace the `commentStore` map with a Supabase/Postgres insert for production.
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

// ── In-memory store (replace with DB in production) ──────────────────────────
export interface Comment {
  id: string;
  slug: string;
  discordId: string;
  discordUsername: string;
  discordAvatar: string;
  body: string;
  createdAt: string; // ISO timestamp
}

// Module-level map – survives hot-reloads in dev, resets on deploy
const commentStore = new Map<string, Comment[]>();

function slugComments(slug: string): Comment[] {
  if (!commentStore.has(slug)) commentStore.set(slug, []);
  return commentStore.get(slug)!;
}

// ── GET /api/discord/comments?slug=<slug> ─────────────────────────────────────
export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug param' }, { status: 400 });
  }
  const comments = slugComments(slug).slice().reverse(); // newest first
  return NextResponse.json({ comments });
}

// ── POST /api/discord/comments ────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Auth check
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
    email?: string;
  };

  const comment: Comment = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    slug,
    discordId: user.discordId,
    discordUsername: user.discordUsername,
    discordAvatar: user.discordAvatar,
    body: text.trim(),
    createdAt: new Date().toISOString(),
  };

  slugComments(slug).push(comment);

  // ── Forward to Discord channel webhook ───────────────────────────────────
  const webhookUrl = process.env.DISCORD_COMMENTS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: `${user.discordUsername} via ObjectWire`,
          avatar_url: user.discordAvatar,
          embeds: [
            {
              color: 0x5865f2, // Discord blurple
              author: {
                name: user.discordUsername,
                icon_url: user.discordAvatar,
              },
              description: text.trim(),
              footer: {
                text: `Article: ${slug}`,
              },
              timestamp: comment.createdAt,
            },
          ],
        }),
      });
    } catch (err) {
      console.error('[discord/comments] webhook failed:', err);
      // Don't fail the whole request if webhook has an issue
    }
  }

  return NextResponse.json({ comment }, { status: 201 });
}
