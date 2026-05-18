import type { Metadata } from "next";
import "../globals.css";
import { ArticlesProvider } from "@/lib/articles-context-simple";
import { AuthProvider } from "@/lib/auth-context";

// Force dynamic rendering for all admin pages
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard | OzoneNews",
    template: "%s | OzoneNews Admin"
  },
  description: "OzoneNews Admin Dashboard - Manage articles and content",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <ArticlesProvider>
        {children}
      </ArticlesProvider>
    </AuthProvider>
  );
}
