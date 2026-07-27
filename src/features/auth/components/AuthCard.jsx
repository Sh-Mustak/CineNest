const AuthCard = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

        {/* Logo */}
        <div className="mb-8 text-center">
          <span
          className="text-[32px] tracking-[4px] leading-none pt-100"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="text-white">Cine</span>
          <span className="text-primary">Nest</span>
        </span>

          <p className="mt-2 text-sm text-zinc-400">
            Your Ultimate Entertainment Hub
          </p>
        </div>

        {/* Heading */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-white">
            {title}
          </h2>

          <p className="mt-2 text-zinc-400">
            {subtitle}
          </p>
        </div>

        {/* Form */}
        {children}

      </div>
    </div>
  );
};

export default AuthCard;