import Image from "next/image";

export default function AuthHeader({ title, subtitle }) {
  return (
    <div className="mb-6">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <div className="relative w-16 h-16 rounded-full bg-blue-200 overflow-hidden">
          <Image
            src="/logo.png"
            alt="Spin Kenya"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-500 mt-2">{subtitle}</p>
    </div>
  );
}