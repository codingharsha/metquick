import RegisterDetailsForm from "@/components/auth/RegisterDetailsForm";

export default function RegisterDetailsPage() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="title" style={{ marginBottom: "12px" }}>Complete your profile</h1>
        <p className="subtitle" style={{ marginBottom: "32px" }}>Provide a few details to get started.</p>
        <RegisterDetailsForm />
      </div>
    </div>
  );
}