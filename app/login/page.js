import LoginForm from "@/components/login/LoginForm";
import LoginInfo from "@/components/login/LoginInfo";

export default function Login() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.16),_transparent_28%)]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="px-8 py-10 sm:px-10 sm:py-12 flex flex-col items-center justify-center">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-300/90">Spin Kenya</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl text-center">
                Welcome back
              </h1>
              <p className="mt-4 max-w-xl text-center text-sm leading-7 text-slate-200 sm:text-base">
                Sign in to access your tournaments, profile, and exclusive merch offers.
              </p>

              <LoginForm />
            </div>

            <LoginInfo />
          </div>
        </div>
      </div>
    </div>
  );
}