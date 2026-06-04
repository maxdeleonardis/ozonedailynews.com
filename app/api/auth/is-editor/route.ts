import { NextResponse } from 'next/server';
import { createSSRClient } from '@/lib/supabase/ssr';
import { createServiceClient } from '@/lib/supabase/server';

export async function GET() {
  const ssr = await createSSRClient();
  if (!ssr) return NextResponse.json({ is_editor: false });

  const { data: { user } } = await ssr.auth.getUser();
  if (!user) return NextResponse.json({ is_editor: false });

  const service = createServiceClient();
  if (!service) return NextResponse.json({ is_editor: false });

  const { data } = await service
    .from('profiles')
    .select('is_editor')
    .eq('user_id', user.id)
    .single();

  return NextResponse.json({ is_editor: data?.is_editor === true });
}
