export default function LoginInfo() {
  return (
    <div className="flex items-center justify-center bg-slate-800/90 p-8 sm:p-10">
      <div className="mx-auto max-w-md text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-black">New here?</p>
        <h2 className="mt-4 text-3xl font-semibold text-black">Create your account</h2>
        <p className="mt-4 text-sm leading-7 text-slate-300/90">
          Join Spin Kenya today to access tournaments, personalized stats, and official merch perks.
        </p>
        <div className="mt-8 space-y-4 text-sm text-black">
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
            Easy sign-in experience
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
            Access tournament schedules and updates
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
            Shop exclusive Spin Kenya merch
          </div>
        </div>
      </div>
    </div>
  );
}
