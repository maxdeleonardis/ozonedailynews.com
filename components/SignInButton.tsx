"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

type View = "buttons" | "email-login" | "email-register";

export default function SignInButton() {
  const callbackUrl =
    typeof window !== "undefined" ? window.location.href : "/";

  const [view, setView] = useState<View>("buttons");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ── Email sign-in ──────────────────────────────────────────────────────
  const handleEmailLogin = async () => {
    setError("");
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });
    setLoading(false);
    if (res?.error) {
      setError("Invalid email or password");
    } else if (res?.url) {
      window.location.href = res.url;
    }
  };

  // ── Email registration ─────────────────────────────────────────────────
  const handleRegister = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, displayName }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Registration failed");
        setLoading(false);
        return;
      }
      // Auto sign-in after registration
      const signInRes = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl,
      });
      setLoading(false);
      if (signInRes?.url) {
        window.location.href = signInRes.url;
      }
    } catch {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  // ── Provider buttons view ──────────────────────────────────────────────
  if (view === "buttons") {
    return (
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => signIn("google", { callbackUrl })}
          variant="outline"
          className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border-gray-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Sign in with Google
        </Button>

        <Button
          onClick={() => setView("email-login")}
          variant="outline"
          className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border-gray-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 7l-10 7L2 7" />
          </svg>
          Sign in with Email
        </Button>
      </div>
    );
  }

  // ── Email login form ───────────────────────────────────────────────────
  if (view === "email-login") {
    return (
      <div className="flex flex-col gap-3 w-64">
        <h3 className="text-sm font-semibold text-gray-900">Sign in with Email</h3>
        {error && <p className="text-xs text-red-600">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
        <Button onClick={handleEmailLogin} disabled={loading} className="w-full">
          {loading ? "Signing in…" : "Sign In"}
        </Button>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <button onClick={() => setView("email-register")} className="hover:text-black underline">
            Create account
          </button>
          <button onClick={() => { setView("buttons"); setError(""); }} className="hover:text-black underline">
            Back
          </button>
        </div>
      </div>
    );
  }

  // ── Email registration form ────────────────────────────────────────────
  return (
    <div className="flex flex-col gap-3 w-64">
      <h3 className="text-sm font-semibold text-gray-900">Create Account</h3>
      {error && <p className="text-xs text-red-600">{error}</p>}
      <input
        type="text"
        placeholder="Display name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md text-sm"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md text-sm"
      />
      <input
        type="password"
        placeholder="Password (8+ characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md text-sm"
      />
      <Button onClick={handleRegister} disabled={loading} className="w-full">
        {loading ? "Creating account…" : "Create Account"}
      </Button>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <button onClick={() => setView("email-login")} className="hover:text-black underline">
          Already have an account?
        </button>
        <button onClick={() => { setView("buttons"); setError(""); }} className="hover:text-black underline">
          Back
        </button>
      </div>
    </div>
  );
}
