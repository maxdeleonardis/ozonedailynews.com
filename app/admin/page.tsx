// app/admin/page.tsx
// Redirects /admin → /admin/articles

import { redirect } from 'next/navigation';

export default function AdminRoot() {
  redirect('/admin/articles');
}
