import Image from "next/image";

export default function NavLogo() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 shadow-sm">
        <Image
          src="/logo.png"
          alt="Spin Kenya Logo"
          width={60}
          height={60}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
}
