import { supabase, isSupabaseConfigured } from './supabase';

const BUCKET_NAME = 'blog-images';

export interface UploadResult {
  url: string | null;
  error: Error | null;
}

/**
 * Upload an image file to Supabase Storage
 * @param file - The file to upload
 * @param path - Optional custom path (defaults to timestamp-based name)
 * @returns Object with url and error
 */
export async function uploadImage(file: File, path?: string): Promise<UploadResult> {
  try {
    if (!isSupabaseConfigured || !supabase) {
      return {
        url: null,
        error: new Error('Supabase is not configured')
      };
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
      return {
        url: null,
        error: new Error('Invalid file type. Please upload a JPEG, PNG, WebP, GIF, or SVG image.')
      };
    }

    // Validate file size (10MB max)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return {
        url: null,
        error: new Error('File size exceeds 10MB limit.')
      };
    }

    // Generate unique filename if path not provided
    const fileName = path || `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const filePath = `uploads/${fileName}`;

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Upload error:', error);
      return { url: null, error: new Error(error.message) };
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    return { url: publicUrl, error: null };
  } catch (error) {
    console.error('Upload error:', error);
    return {
      url: null,
      error: error instanceof Error ? error : new Error('Unknown upload error')
    };
  }
}

/**
 * Delete an image from Supabase Storage
 * @param url - The public URL of the image to delete
 * @returns True if successful, false otherwise
 */
export async function deleteImage(url: string): Promise<boolean> {
  try {
    if (!isSupabaseConfigured || !supabase) {
      console.error('Supabase is not configured');
      return false;
    }

    // Extract path from public URL
    const urlObj = new URL(url);
    const pathMatch = urlObj.pathname.match(/\/storage\/v1\/object\/public\/blog-images\/(.+)$/);
    
    if (!pathMatch) {
      console.error('Invalid image URL format');
      return false;
    }

    const filePath = pathMatch[1];

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([filePath]);

    if (error) {
      console.error('Delete error:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Delete error:', error);
    return false;
  }
}

/**
 * List all images in the storage bucket
 * @param folder - Optional folder path to list (defaults to 'uploads')
 * @returns Array of file objects
 */
export async function listImages(folder: string = 'uploads') {
  try {
    if (!isSupabaseConfigured || !supabase) {
      return { files: [], error: new Error('Supabase is not configured') };
    }

    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .list(folder, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'created_at', order: 'desc' }
      });

    if (error) {
      console.error('List error:', error);
      return { files: [], error };
    }

    // Get public URLs for all files
    const filesWithUrls = data.map(file => {
      const { data: { publicUrl } } = supabase!.storage
        .from(BUCKET_NAME)
        .getPublicUrl(`${folder}/${file.name}`);
      
      return {
        ...file,
        publicUrl
      };
    });

    return { files: filesWithUrls, error: null };
  } catch (error) {
    console.error('List error:', error);
    return {
      files: [],
      error: error instanceof Error ? error : new Error('Unknown error')
    };
  }
}
