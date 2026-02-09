// Placeholder for storage service
export async function uploadImage(file: File): Promise<{ url?: string; error?: { message: string } }> {
  console.log('Upload image:', file.name);
  // TODO: Implement real image upload
  return { url: 'https://placeholder.com/image.jpg' };
}
