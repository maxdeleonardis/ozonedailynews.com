import { createBrowserClient } from '@/lib/supabase/client';

const BUCKET = 'blog-images';

/**
 * Upload an image file to the Supabase `blog-images` storage bucket.
 * Returns the permanent public URL on success, or an error message on failure.
 *
 * Path pattern: article-images/{timestamp}-{sanitized-filename}
 * Public URL:   {SUPABASE_URL}/storage/v1/object/public/blog-images/{path}
 */
export async function uploadImage(
  file: File,
  folder = 'article-images',
): Promise<{ url?: string; error?: { message: string } }> {
  try {
    const supabase = createBrowserClient();

    // Sanitize filename — strip special chars, collapse spaces to hyphens
    const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg';
    const base = file.name
      .replace(/\.[^.]+$/, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60);
    const path = `${folder}/${Date.now()}-${base}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(path, file, {
        cacheControl: '31536000', // 1 year
        upsert: false,
        contentType: file.type,
      });

    if (uploadError) {
      return { error: { message: uploadError.message } };
    }

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    return { url: data.publicUrl };
  } catch (err) {
    return {
      error: { message: err instanceof Error ? err.message : 'Upload failed' },
    };
  }
}

/**
 * Delete an image from storage by its full public URL.
 * Extracts the storage path from the URL automatically.
 */
export async function deleteImage(
  publicUrl: string,
): Promise<{ error?: { message: string } }> {
  try {
    const supabase = createBrowserClient();
    // Extract path after /blog-images/
    const marker = `/blog-images/`;
    const idx = publicUrl.indexOf(marker);
    if (idx === -1) return { error: { message: 'URL does not reference blog-images bucket' } };
    const path = publicUrl.slice(idx + marker.length);

    const { error } = await supabase.storage.from(BUCKET).remove([path]);
    if (error) return { error: { message: error.message } };
    return {};
  } catch (err) {
    return {
      error: { message: err instanceof Error ? err.message : 'Delete failed' },
    };
  }
}

/**
 * List all images in a folder within the bucket.
 */
export async function listImages(folder = 'article-images') {
  try {
    const supabase = createBrowserClient();
    const { data, error } = await supabase.storage.from(BUCKET).list(folder, {
      sortBy: { column: 'created_at', order: 'desc' },
    });
    if (error) return { files: [], error: { message: error.message } };
    return { files: data ?? [], error: null };
  } catch (err) {
    return {
      files: [],
      error: { message: err instanceof Error ? err.message : 'List failed' },
    };
  }
}

