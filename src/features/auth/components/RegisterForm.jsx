import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validation/authSchema";
import authService from "../services/authService";
import { useState } from "react";
import {Link} from "react-router-dom";
const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await authService.register(data);
      console.log("Registration successful");
    } catch (error) {
      console.error("Error registering user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Full Name */}
      <div>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          {...register("name")}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label>Email</label>

        <input
          type="email"
          placeholder="john@gmail.com"
          {...register("email")}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <label>Password</label>

        <input
          type="password"
          placeholder="********"
          {...register("password")}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
        />

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-amber-500 py-3 font-semibold text-black hover:bg-amber-400 disabled:opacity-60"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>

      {/* Login Link */}
      <p className="text-center text-sm text-zinc-400">
        Already have an account?{" "}
        <Link to="/login" className="text-amber-400 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;