import Image from "next/image";

export default function AuthHeader({ title, subtitle }) {
  return (
    <div className="mb-6">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Spin Kenya"
            width={40}
            height={40}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-500 mt-2">{subtitle}</p>
    </div>
  );
}