import AuthCard from "../components/AuthCard";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <AuthCard
      title="Create your account"
      subtitle="Join CineNest and start your movie journey."
    >
      <RegisterForm />
    </AuthCard>
  );
};

export default Register;