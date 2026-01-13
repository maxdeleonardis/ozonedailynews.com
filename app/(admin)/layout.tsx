import type { Metadata } from "next";
import "../globals.css";
import { ArticlesProvider } from "@/lib/articles-context";

// Force dynamic rendering for all admin pages
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard | ObjectWire",
    template: "%s | ObjectWire Admin"
  },
  description: "ObjectWire Admin Dashboard - Manage articles and content",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ArticlesProvider>
      {children}
    </ArticlesProvider>
  );
}
