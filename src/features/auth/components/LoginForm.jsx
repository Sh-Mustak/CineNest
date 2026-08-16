import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validation/authSchema";
import authService from "../services/authService";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginForm = () => {
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const {setUser} = useAuth();

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
navigate("/"); // Redirect to home page after successful login
} catch (error) {
console.error("Error logging in:", error);
} finally {
setLoading(false);
}
};

return (
<form onSubmit={handleSubmit(onSubmit)}>
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
    className="w-full rounded-lg bg-amber-500 py-3 mt-4 font-semibold text-black hover:bg-amber-400 disabled:opacity-60"
  >
    {loading ? "Logging in..." : "Login"}
  </button>

  {/* Register Link */}
  <p className="text-center text-sm text-zinc-400">
    Don’t have an account?{" "}
    <Link to="/register" className="text-amber-400 hover:underline">
      Register
    </Link>
  </p>
</form>

);
};

export default LoginForm;