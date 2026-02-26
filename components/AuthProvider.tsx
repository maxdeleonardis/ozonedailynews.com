"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import AuthTracker from "./AuthTracker";

export default function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      {/* AuthTracker: fires tracking.identifyUser() whenever a Google session
          is present, linking the visitor's GA4 client_id to their hashed email. */}
      <AuthTracker />
      {children}
    </SessionProvider>
  );
}
