// app/api/cms/media/route.ts
// POST — upload a media file to Supabase Storage using the service role key.
// Only editors may upload. Returns the public CDN URL on success.
//
// Request: multipart/form-data with fields:
//   file       — the image file
//   slug       — article slug (used to namespace the storage path)
//
// Response: { url: string } on success, { error: string } on failure.

import { NextRequest, NextResponse } from 'next/server';
import { createSSRClient } from '@/lib/supabase/ssr';
import { createServiceClient } from '@/lib/supabase/server';

const BUCKET = 'media';
const MAX_BYTES = 25 * 1024 * 1024; // 25 MB

export async function POST(req: NextRequest) {
  // Verify the caller is a signed-in editor
  const ssr = await createSSRClient();
  if (!ssr) {
    return NextResponse.json({ error: 'Auth not configured' }, { status: 503 });
  }

  const { data: { user } } = await ssr.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const service = createServiceClient();
  if (!service) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  // Check editor status
  const { data: profile } = await service
    .from('profiles')
    .select('is_editor')
    .eq('user_id', user.id)
    .single();

  if (!profile?.is_editor) {
    return NextResponse.json({ error: 'Forbidden — editors only' }, { status: 403 });
  }

  // Parse the multipart form
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
  }

  const file = formData.get('file') as File | null;
  const slug = (formData.get('slug') as string | null)?.trim() || 'unslugged';

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }
  if (!file.type.startsWith('image/')) {
    return NextResponse.json({ error: 'Only image files are accepted' }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: `File too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Max is 25 MB.` },
      { status: 400 },
    );
  }

  // Build the storage path
  const safeName = file.name.replace(/[^a-z0-9.-]/gi, '-').toLowerCase();
  const storagePath = `thumbnails/${slug}/${Date.now()}-${safeName}`;

  // Upload with the service role client (bypasses RLS)
  const arrayBuffer = await file.arrayBuffer();
  const { error: uploadError } = await service.storage
    .from(BUCKET)
    .upload(storagePath, arrayBuffer, {
      contentType: file.type,
      upsert: true,
    });

  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 });
  }

  const { data: urlData } = service.storage.from(BUCKET).getPublicUrl(storagePath);
  return NextResponse.json({ url: urlData.publicUrl }, { status: 200 });
}

// ─── GET /api/cms/media ───────────────────────────────────────────────────────
// List all files in the media/thumbnails/ bucket prefix.
// Used by the admin Media Library page.

export async function GET(req: NextRequest) {
  const ssr = await createSSRClient();
  if (!ssr) return NextResponse.json({ error: 'Auth not configured' }, { status: 503 });

  const { data: { user } } = await ssr.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const service = createServiceClient();
  if (!service) return NextResponse.json({ error: 'DB not configured' }, { status: 503 });

  const { data: profile } = await service
    .from('profiles')
    .select('is_editor')
    .eq('user_id', user.id)
    .single();
  if (!profile?.is_editor) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const { searchParams } = new URL(req.url);
  const prefix = searchParams.get('prefix') ?? 'thumbnails';
  const limit  = Math.min(parseInt(searchParams.get('limit') ?? '200', 10), 500);

  const { data: files, error } = await service.storage
    .from(BUCKET)
    .list(prefix, { limit, sortBy: { column: 'created_at', order: 'desc' } });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  const items = (files ?? [])
    .filter((f) => f.name !== '.emptyFolderPlaceholder')
    .map((f) => ({
      name: f.name,
      path: `${prefix}/${f.name}`,
      url: `${supabaseUrl}/storage/v1/object/public/${BUCKET}/${prefix}/${f.name}`,
      size: f.metadata?.size ?? 0,
      createdAt: f.created_at,
    }));

  return NextResponse.json({ items });
}
