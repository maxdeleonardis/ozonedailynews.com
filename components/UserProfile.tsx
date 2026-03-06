"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { NewsletterPanel } from "./NewsletterDropdown";

export default function UserProfile() {
  const { data: session } = useSession();
  const [showNewsletter, setShowNewsletter] = useState(false);

  if (!session?.user) return null;

  return (
    <DropdownMenu onOpenChange={(open) => { if (!open) setShowNewsletter(false); }}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-12 w-12 rounded-full p-0">
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name || "User"}
              width={48}
              height={48}
              className="rounded-full w-12 h-12 object-cover"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg">
              {session.user.name?.charAt(0).toUpperCase() || "U"}
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={showNewsletter ? "w-80" : "w-56"}
        align="end"
        forceMount
      >
        {showNewsletter ? (
          // ── Newsletter panel view ──────────────────────────────────────────
          <>
            <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100">
              <button
                onClick={() => setShowNewsletter(false)}
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-black transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            </div>
            <NewsletterPanel onClose={() => setShowNewsletter(false)} />
          </>
        ) : (
          // ── Default menu view ──────────────────────────────────────────────
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{session.user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">{session.user.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => window.location.href = "/account"}>
              Account Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => window.location.href = "/preferences"}>
              Preferences
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => window.location.href = "/history"}>
              📖 Reading History
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => window.location.href = "/saved"}>
              🔖 Saved Articles
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={(e) => { e.preventDefault(); setShowNewsletter(true); }}
              className="flex items-center justify-between"
            >
              <span>📬 Newsletter</span>
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-red-600 focus:text-red-600"
            >
              Sign Out
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
