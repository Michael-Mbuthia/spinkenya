"use client";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

import NavLogo from "./navbar/NavLogo";
import NavLinks from "./navbar/NavLinks";
import MobileMenu from "./navbar/MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-200/70 shadow-sm text-slate-900">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between pl-4 pr-8 sm:pl-6 sm:pr-10 lg:pl-8 lg:pr-12">
        <NavLogo />

        <NavLinks session={session} onSignOut={() => signOut()} />

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <MobileMenu session={session} menuOpen={menuOpen} onSignOut={() => signOut()} />
    </nav>
  );
}