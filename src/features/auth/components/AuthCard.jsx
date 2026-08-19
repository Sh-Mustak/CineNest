const AuthCard = ({ title, subtitle, children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808] px-4 flex items-center justify-center">

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035),transparent_55%)]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">

        <div className="rounded-3xl border border-white/10 bg-[#111111]/90 p-7 shadow-2xl backdrop-blur-xl sm:p-9">

          {/* Logo */}
          <div className="mb-8 text-center">

            <div className="mb-3">
              <span
                className="text-[38px] tracking-[5px] leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                <span className="text-white">Cine</span>
                <span className="text-primary">Nest</span>
              </span>
            </div>

            <p className="text-xs tracking-wide text-zinc-500">
              Your Ultimate Entertainment Hub
            </p>

          </div>

          {/* Heading */}
          <div className="mb-7 text-center">

            <h2 className="text-2xl font-bold tracking-tight text-white">
              {title}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              {subtitle}
            </p>

          </div>

          {/* Form */}
          {children}

        </div>

        {/* Bottom branding */}
        <p className="mt-5 text-center text-[11px] tracking-wide text-zinc-600">
          © {new Date().getFullYear()} CineNest. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default AuthCard;