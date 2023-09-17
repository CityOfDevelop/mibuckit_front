import LoginForm from '../components/LoginForm';
import SignInProd from '../components/SignInProd';

export default function Login() {
  return (
    <div className="flex flex-col h-screen">
      <LoginForm />
      <SignInProd />
    </div>
  );
}
