import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import authService from "../services/authService"

const AuthMenu = () => {
  const { user, loading , setUser} = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
      await authService.logout();
      setUser(null);
      navigate("/");    
    }
    catch(error){
      console.error("Logout failed:", error);
    }
  }

  if (loading) {
    return (
      <div className="w-8 h-8 rounded-full bg-zinc-700 animate-pulse" />
    );
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link
          to="/login"
          className="px-4 py-2 text-sm font-medium text-white hover:text-primary transition-colors"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition"
        >
          Register
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
    <span className="text-white text-sm">
      {user.name}
    </span>

    <button
       onClick={handleLogout}
       className="px-3 py-2 rounded-lg bg-red-600 text-white text-sm cursor-pointer"
    >
        Logout
    </button>
  </div>
  );
};

export default AuthMenu;