import AuthCard from "../components/AuthCard";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Login to continue your movie journey."
    >
      <LoginForm />
    </AuthCard>
  );
};

export default Login;
