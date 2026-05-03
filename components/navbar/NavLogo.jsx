import Image from "next/image";

export default function NavLogo() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 shadow-sm">
        <Image
          src="/logo.png"
          alt="Spin Kenya Logo"
          width={48}
          height={48}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-600">
          Spin Kenya
        </p>
        <p className="text-xs text-slate-500">Table Tennis Community</p>
      </div>
    </div>
  );
}
