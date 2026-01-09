import type { Metadata } from "next";

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
  return <>{children}</>;
}
