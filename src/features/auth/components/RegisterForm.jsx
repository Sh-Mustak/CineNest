import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validation/authSchema";
import authService from "../services/authService";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ProfileService from "../../profile/services/profileService";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // create appwrite authentication account
      const user = await authService.register(data);

      // Login immediately
      await authService.login(data)

      // create CineNest profile
      await ProfileService.createProfile({
        userId: user.$id,
        displayName: user.name
      })

      // Clear form
      reset();

      // Tell the user what happened
      toast.success("Account created successfully! Please login.");
      

      // Go to login page
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error);

      toast.error(
        error?.message || "Unable to create your account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full Name */}
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-300">
          Full Name
        </label>

        <input
          type="text"
          placeholder="John Doe"
          {...register("name")}
          className="w-full rounded-sm border border-zinc-700 bg-zinc-900/80 px-3 py-2 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
        />

        {errors.name && (
          <p className="text-sm text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

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
        <label className="mb-1 block text-sm font-medium text-zinc-300">
          Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
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

      {/* Create Account */}
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center rounded-sm bg-primary/90 py-2.5 font-semibold text-white transition hover:bg-primary active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <span className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
            Creating Account...
          </>
        ) : (
          "Create Account"
        )}
      </button>

      {/* Login */}
      <p className="text-center text-sm text-zinc-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-primary transition hover:text-primary/90"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;