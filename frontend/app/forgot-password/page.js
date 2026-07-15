import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="title" style={{ marginBottom: "12px" }}>Forgot password</h1>
        <p className="subtitle" style={{ marginBottom: "32px" }}>Enter your email to receive reset instructions.</p>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}