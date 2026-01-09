// This shows what your layout.tsx would look like with Supabase
import type { Metadata } from 'next';
import { AuthProvider } from '@/lib/auth-context';
import './globals.css';

export const metadata: Metadata = {
  title: "ObjectWire | Precision Intelligence News Network",
  description: "ObjectWire delivers verified, source-cited intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Wrap your app with AuthProvider to access user auth everywhere */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
