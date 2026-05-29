import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { writeFileToGitHub } from '@/lib/github-bridge';
import { runEditorialGate } from '@/lib/editorial-gate';

export const dynamic = 'force-dynamic';

const VALID_CONTENT_TYPES = [
  'articles',
  'jack_articles',
  'article_pages',
  'creator_articles',
  'alysa_articles',
] as const;

type ContentType = (typeof VALID_CONTENT_TYPES)[number];

interface SaveBody {
  type: ContentType;
  slug: string;
  content: Record<string, unknown>;
}

// ── Index sync helper ──────────────────────────────────────────────────────

async function syncIndexFile(type: ContentType, slug: string): Promise<void> {
  const indexPath = `content/static/${type}/_index.json`;
  const token = process.env.GITHUB_TOKEN!;
  const repo = process.env.GITHUB_REPO!;
  const branch = process.env.GITHUB_BRANCH ?? 'main';

  // Fetch existing _index.json
  const url = `https://api.github.com/repos/${repo}/contents/${indexPath}?ref=${branch}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  let entries: string[] = [];
  let sha: string | undefined;

  if (res.ok) {
    const data = (await res.json()) as { content: string; sha: string };
    sha = data.sha;
    try {
      const decoded = Buffer.from(data.content, 'base64').toString('utf-8');
      const parsed = JSON.parse(decoded);
      entries = Array.isArray(parsed) ? parsed : [];
    } catch {
      entries = [];
    }
  }

  if (!entries.includes(slug)) {
    entries.push(slug);
  }

  const body: Record<string, unknown> = {
    message: `chore: sync ${type}/_index.json — add ${slug}`,
    content: Buffer.from(JSON.stringify(entries, null, 2), 'utf-8').toString('base64'),
    branch,
  };
  if (sha) body.sha = sha;

  await fetch(`https://api.github.com/repos/${repo}/contents/${indexPath}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify(body),
  });
}

// ── Route handler ──────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // 1. Auth check
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // 2. Parse body
  let body: SaveBody;
  try {
    body = (await req.json()) as SaveBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { type, slug, content } = body;

  if (!VALID_CONTENT_TYPES.includes(type)) {
    return NextResponse.json(
      { error: `Invalid content type "${type}". Must be one of: ${VALID_CONTENT_TYPES.join(', ')}` },
      { status: 400 }
    );
  }

  if (!slug || typeof slug !== 'string') {
    return NextResponse.json({ error: 'Missing or invalid "slug"' }, { status: 400 });
  }

  if (!content || typeof content !== 'object') {
    return NextResponse.json({ error: 'Missing or invalid "content"' }, { status: 400 });
  }

  // 3. Editorial gate
  const gate = runEditorialGate(content);
  if (!gate.ok) {
    return NextResponse.json(
      { error: 'Editorial gate failed', errors: gate.errors, warnings: gate.warnings },
      { status: 422 }
    );
  }

  // 4. Write to GitHub
  const filePath = `content/static/${type}/${slug}.json`;
  const commitMessage = `content(${type}): save ${slug} — via admin editor`;
  const result = await writeFileToGitHub(
    filePath,
    JSON.stringify(content, null, 2),
    commitMessage
  );

  if (!result.ok) {
    return NextResponse.json(
      { error: 'GitHub write failed', detail: result.error },
      { status: 502 }
    );
  }

  // 5. Sync _index.json (best-effort, don't fail the request if this errors)
  try {
    await syncIndexFile(type, slug);
  } catch (err) {
    console.warn('[save] _index.json sync failed:', err);
  }

  return NextResponse.json({
    ok: true,
    commitSha: result.commitSha,
    warnings: gate.warnings,
    message: `Saved ${slug} to ${filePath}`,
  });
}
