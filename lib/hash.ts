// =============================================================================
// Shared utility: SHA-256 hex digest using Web Crypto (Edge-safe)
// =============================================================================
export async function sha256hex(value: string): Promise<string> {
  const buf = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(value.toLowerCase().trim()),
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}
