"use client";

import { signIn } from "next-auth/react";

export default function LoginForm() {
  return (
    <div className="mx-auto w-full max-w-md mt-10 space-y-4 bg-slate-950/80 p-6 rounded-[1.75rem] border border-slate-800/80 shadow-inner shadow-slate-950/20">
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-300">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-300">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
        />
      </div>

      <button className="w-full rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
        Continue with email
      </button>

      <div className="flex items-center gap-3 text-xs text-slate-500">
        <span className="block h-px flex-1 bg-slate-700" />
        or continue with
        <span className="block h-px flex-1 bg-slate-700" />
      </div>

      <button
        onClick={() => signIn("google")}
        className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/95 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
      >
        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M44.5 20.5H24v7h11.9C34.4 32.7 29.6 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8.1 3.1l5.7-5.7C34.6 7.7 29.7 5 24 5 12.3 5 3 14.3 3 26s9.3 21 21 21c11.3 0 20.5-8.2 20.5-20.5 0-1.4-.2-2.5-.5-3.5Z" fill="#FFC107" />
          <path d="M6.3 14.7 14.1 21.3C15.7 17.2 19.6 14 24 14c3.1 0 5.9 1.2 8.1 3.1l5.7-5.7C34.6 7.7 29.7 5 24 5 16.5 5 9.8 8.6 6.3 14.7Z" fill="#FF3D00" />
          <path d="M24 43c5.6 0 10.4-2.3 13.9-6.1l-6.6-5.4C28.9 33.3 26.6 34.5 24 34.5c-5.6 0-10.4-3.3-12.1-7.9l-7.8 6C7.6 38.9 15.3 43 24 43Z" fill="#4CAF50" />
          <path d="M44.5 20.5H24v7h11.9c-1.1 3.1-3.1 5.7-5.7 7.4l.1.1 6.6 5.4C40.9 36.5 45 30.3 45 24c0-1.4-.2-2.5-.5-3.5Z" fill="#1976D2" />
        </svg>
        Sign in with Google
      </button>
    </div>
  );
}
