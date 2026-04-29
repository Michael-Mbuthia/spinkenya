"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
         <Image
          src="/logo.png"
          alt="Spin Kenya Logo"
          width={60}
          height={60}
        />
        </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/tournaments">Tournaments</Link>
        <Link href="/merchandise">Merch</Link>
        <Link href="/login">Login</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-4 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/tournaments">Tournaments</Link>
          <Link href="/merchandise">Merch</Link>
          <Link href="/login">Login</Link>
        </div>
      )}
    </nav>
  );
}