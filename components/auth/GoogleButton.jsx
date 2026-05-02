"use client";

import { signIn } from "next-auth/react";

export default function GoogleButton({ label = "Continue with Google" }) {
  return (
   <div>
        <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-full py-3 px-4 bg-white text-gray-800 shadow-sm hover:bg-gray-50 transition"
        >
            {/* Google Icon */}
            <img
                src="/assets/google.svg"
                alt="Google logo"
                className="w-5 h-5"
            />

            {/* Text */}
             <span className="font-medium text-black">
            {label}
            </span>
        </button>
    </div> 
  );
}