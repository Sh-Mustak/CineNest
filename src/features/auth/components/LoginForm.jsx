import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validation/authSchema";
import authService from "../services/authService";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await authService.login(data);

      const user = await authService.getCurrentUser();

      setUser(user);

      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

      {/* Email */}
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-300">
          Email
        </label>

        <input
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          className="w-full rounded-sm border border-zinc-700 bg-zinc-900/80 px-3 py-2 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
        />

        {errors.email && (
          <p className="text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <div className="mb-1 flex items-center justify-between">
          <label className="text-sm font-medium text-zinc-300">
            Password
          </label>

          <Link
            to="/forgot-password"
            className="text-xs text-zinc-300 transition hover:text-wite"
          >
            Forgot password?
          </Link>
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            {...register("password")}
            className="w-full rounded-sm border border-zinc-700 bg-zinc-900/80 px-3 py-2 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[54%] -translate-y-1/2 text-zinc-500 transition hover:text-zinc-300"
          >
            <span className="material-symbols-outlined text-xl">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        </div>

        {errors.password && (
          <p className="text-sm text-red-400">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Login Button */}
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center rounded-sm bg-primary py-2 font-semibold text-zinc-300 transition hover:bg-primary/90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <span className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
            Logging in...
          </>
        ) : (
          "Login"
        )}
      </button>

      {/* Register */}
      <p className="text-center text-sm text-zinc-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-primary transition hover:text-primary/90"
        >
          Create one
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
