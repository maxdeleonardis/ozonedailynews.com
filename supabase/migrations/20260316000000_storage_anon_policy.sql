-- Migration: Allow anon key to upload/manage images in blog-images bucket
--
-- CONTEXT: The admin editor uses the anon key (same as articles writes).
-- These policies mirror the article anon-write policies from 20260302000000.
--
-- PRODUCTION TODO: Lock these down to authenticated role once Supabase Auth
-- is wired into the admin area.

-- Ensure bucket exists (idempotent - won't overwrite existing data)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'blog-images',
  'blog-images',
  true,
  10485760, -- 10 MB max per file
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
)
ON CONFLICT (id) DO NOTHING;

-- Drop any conflicting policies first
DROP POLICY IF EXISTS "Public images are viewable by everyone"       ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload images"         ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update images"         ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete images"         ON storage.objects;
DROP POLICY IF EXISTS "anon_upload_blog_images"                       ON storage.objects;
DROP POLICY IF EXISTS "anon_update_blog_images"                       ON storage.objects;
DROP POLICY IF EXISTS "anon_delete_blog_images"                       ON storage.objects;
DROP POLICY IF EXISTS "public_read_blog_images"                       ON storage.objects;

-- Anyone can read public images (CDN-friendly, no auth needed)
CREATE POLICY "public_read_blog_images"
ON storage.objects FOR SELECT
USING (bucket_id = 'blog-images');

-- Anon role can upload (admin editor pre-auth)
CREATE POLICY "anon_upload_blog_images"
ON storage.objects FOR INSERT
TO anon
WITH CHECK (bucket_id = 'blog-images');

-- Anon role can replace/overwrite uploads
CREATE POLICY "anon_update_blog_images"
ON storage.objects FOR UPDATE
TO anon
USING (bucket_id = 'blog-images');

-- Anon role can delete uploads (admin image management)
CREATE POLICY "anon_delete_blog_images"
ON storage.objects FOR DELETE
TO anon
USING (bucket_id = 'blog-images');

-- Authenticated users retain full access too
CREATE POLICY "authenticated_upload_blog_images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "authenticated_update_blog_images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'blog-images');

CREATE POLICY "authenticated_delete_blog_images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'blog-images');
