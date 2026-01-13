import type { Metadata } from "next";
import "../globals.css";
import { ArticlesProvider } from "@/lib/articles-context-simple";
import { AuthProvider } from "@/lib/auth-context";

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
    <AuthProvider>
      <ArticlesProvider>
        {children}
      </ArticlesProvider>
    </AuthProvider>
  );
}
