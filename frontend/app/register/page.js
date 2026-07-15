import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="title" style={{ marginBottom: "12px" }}>Create account</h1>
        <p className="subtitle" style={{ marginBottom: "32px" }}>Join the mentorship community today.</p>
        <RegisterForm />
      </div>
    </div>
  );
}
