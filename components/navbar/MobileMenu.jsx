import Link from "next/link";

export default function MobileMenu({ session, menuOpen, onSignOut }) {
  if (!menuOpen) return null;

  return (
    <div className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-sm md:hidden">
      <div className="flex flex-col gap-3">
        <Link href="/" className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
          Home
        </Link>
        <Link href="/about" className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
          About
        </Link>
        <Link href="/tournaments" className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
          Tournaments
        </Link>
        <Link href="/merchandise" className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
          Merchandise
        </Link>
        {session ? (
          <button
            onClick={onSignOut}
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
