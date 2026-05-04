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
    <nav className="fixed left-4 right-4 top-4 z-50 bg-white/85 backdrop-blur border-b border-slate-200/70 shadow-sm text-slate-900">
      <div claass="w-full px-6 sm:px-10 lg:px-12">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-10">
          <NavLogo />

          <NavLinks session={session} onSignOut={() => signOut()} />

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black bg-white text-black font-bold shadow-sm transition hover:border-slate-300 hover:bg-slate-100 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      <MobileMenu session={session} menuOpen={menuOpen} onSignOut={() => signOut()} />
    </nav>
  );
}