"use client";

import { ReactNode } from "react";
import AuthTracker from "./AuthTracker";

export default function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthTracker />
      {children}
    </>
  );
}
