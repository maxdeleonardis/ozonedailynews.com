# Supabase Storage Setup Guide

## Overview
This guide will help you set up Supabase Storage for image uploads in your ObjectWire blog.

## Prerequisites
- Supabase project created
- Environment variables configured:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Step 1: Run Storage Migration

The storage migration creates the `blog-images` bucket with proper security policies.

### Option A: Using Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Copy the contents from `supabase/migrations/20260114000000_create_storage.sql`
5. Click **Run** to execute the query

### Option B: Using Supabase CLI

```bash
# Install Supabase CLI if not installed
npm install -g supabase

# Link your project
supabase link --project-ref your-project-ref

# Run migrations
supabase db push
```

## Step 2: Verify Storage Bucket

1. Go to **Storage** in your Supabase dashboard
2. You should see a bucket named `blog-images`
3. Click on it to verify it's set to **Public**

## Step 3: Configure Storage Policies

The migration automatically creates these policies:

- ✅ **Public Read**: Anyone can view images
- ✅ **Authenticated Upload**: Logged-in users can upload
- ✅ **Authenticated Update**: Logged-in users can update
- ✅ **Authenticated Delete**: Logged-in users can delete

To verify:
1. Go to **Storage** → `blog-images`
2. Click **Policies** tab
3. Ensure all 4 policies are enabled

## Step 4: Test Upload

1. Start your development server: `npm run dev`
2. Go to `/admin` and log in
3. Create or edit a blog post
4. Add an **Image** content block
5. Click **Upload Image**
6. Select an image file (max 10MB)
7. You should see a preview after upload

## Supported Image Formats

- JPEG (`.jpg`, `.jpeg`)
- PNG (`.png`)
- WebP (`.webp`)
- GIF (`.gif`)
- SVG (`.svg`)

## File Size Limits

- Maximum file size: **10MB**
- Files are automatically validated before upload

## Storage Structure

Images are stored in this path structure:
```
blog-images/
└── uploads/
    ├── 1705234567890-my-image.jpg
    ├── 1705234578123-another-image.png
    └── ...
```

## Security Notes

- Images are publicly accessible once uploaded (no authentication required to view)
- Only authenticated users can upload, update, or delete images
- File type validation prevents malicious uploads
- File size limits prevent storage abuse

## Troubleshooting

### Error: "Missing Supabase environment variables"
- Check that `.env.local` has both variables set
- Restart your dev server after adding variables

### Error: "Bucket 'blog-images' not found"
- Run the storage migration SQL in your Supabase dashboard
- Verify the bucket exists in Storage section

### Error: "Upload failed: Permission denied"
- Ensure you're logged in to the admin panel
- Check that storage policies are enabled
- Verify RLS is enabled on storage.objects table

### Error: "Invalid file type"
- Only image files are accepted
- Check the file extension matches supported formats

### Images not displaying
- Check the image URL in browser console
- Verify the bucket is set to Public
- Ensure the public URL matches your Supabase project URL

## Migration to Production

When deploying to production (Vercel, Netlify, etc.):

1. Set environment variables in your hosting platform:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

2. Run the storage migration in your production Supabase project

3. Test upload functionality in production environment

## API Reference

### `uploadImage(file: File, path?: string)`
Uploads an image to Supabase Storage.

**Parameters:**
- `file` - The image file to upload
- `path` - Optional custom path (defaults to timestamp-based)

**Returns:**
```typescript
{
  url: string | null;  // Public URL of uploaded image
  error: Error | null; // Error object if upload failed
}
```

### `deleteImage(url: string)`
Deletes an image from Supabase Storage.

**Parameters:**
- `url` - The public URL of the image to delete

**Returns:** `boolean` - True if successful

### `listImages(folder?: string)`
Lists all images in the specified folder.

**Parameters:**
- `folder` - Folder path to list (defaults to 'uploads')

**Returns:**
```typescript
{
  files: Array<{
    name: string;
    publicUrl: string;
    created_at: string;
    size: number;
  }>;
  error: Error | null;
}
```

## Next Steps

- Implement image gallery browser for selecting existing uploads
- Add image compression before upload
- Implement CDN integration for faster loading
- Add watermarking for copyright protection
- Create image optimization pipeline

## Support

For issues or questions:
- Check [Supabase Storage Docs](https://supabase.com/docs/guides/storage)
- Review code in `lib/storage-service.ts`
- Check browser console for error messages
