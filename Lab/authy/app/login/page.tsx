import AuthPanel from "@/components/auth-panel";
import { LoginForm } from "@/components/login-form";

export default function Login() {
    return <div className="min-h-screen">
    <div className="overfolow-hidden mx-auto w-full max-w-7xl">
      <div className="p-6 min-h-96 relative">
        <div className="space-y-4">
          <h1 className="test-xl font-bold text-brand-secondary">Login!</h1>

          <p className="text-brand-secondary/70">Please login to access yoir account.</p>
          <LoginForm />
        </div>
      </div>
      <AuthPanel />
    </div>
  </div>
}