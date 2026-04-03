"use client";

import { useSession } from "next-auth/react";
import SignInButton from "./SignInButton";
import UserProfile from "@/components/user/UserProfile";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
    );
  }

  return session ? <UserProfile /> : <SignInButton />;
}
