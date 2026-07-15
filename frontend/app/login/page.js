import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="title" style={{ marginBottom: "12px" }}>Welcome back</h1>
        <p className="subtitle" style={{ marginBottom: "32px" }}>Continue your mentorship journey.</p>
        <LoginForm />
      </div>
    </div>
  );
}
