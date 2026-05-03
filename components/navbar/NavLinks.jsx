import Link from "next/link";

export default function NavLinks({ session, onSignOut }) {
  return (
    <div className="hidden md:flex items-center gap-6">
      <Link href="/" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
        Home
      </Link>
      <Link href="/about" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
        About
      </Link>
      <Link href="/tournaments" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
        Tournaments
      </Link>
      <Link href="/merchandise" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
        Merchandise
      </Link>
      {session ? (
        <button
          onClick={onSignOut}
          className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
        >
          Logout
        </button>
      ) : (
        <Link
          href="/login"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Login
        </Link>
      )}
    </div>
  );
}
