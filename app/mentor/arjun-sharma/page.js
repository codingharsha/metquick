import Link from "next/link";
import AppShell from "@/components/AppShell";
import Header from "@/components/Header";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Arjun Sharma | MetQuick",
};

export default function MentorProfilePage() {
  return (
    <AppShell activeNav="">
      <Header title="Mentor Profile" subtitle="A reusable mentor detail page based on the attached mentor prototype." backHref="/find-mentors" rightIcon="more" />

      <section className="card" style={{ overflow: "hidden", padding: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
          alt="Arjun Sharma"
          style={{ width: "100%", height: 280, objectFit: "cover" }}
        />
        <div style={{ padding: 20 }}>
          <span className="tag">Online</span>
          <div style={{ fontSize: 30, fontWeight: 800, marginTop: 14 }}>Arjun Sharma</div>
          <div className="muted" style={{ marginTop: 6 }}>Product Designer @ Google</div>
          <div className="row" style={{ gap: 14, flexWrap: "wrap", marginTop: 14, color: "var(--muted)", fontSize: 13 }}>
            <span>Bengaluru, India</span>
            <span>10+ Years Experience</span>
            <span>250+ Sessions</span>
          </div>
          <div className="row" style={{ gap: 8, marginTop: 14 }}>
            <Icon name="star" size={16} />
            <strong>4.9</strong>
            <span className="muted">(120 reviews)</span>
          </div>
          <div className="row" style={{ gap: 12, marginTop: 18, flexWrap: "wrap" }}>
            <Link href="/sessions" className="btn btn-primary" style={{ padding: "14px 22px" }}>
              Book Session
            </Link>
            <Link href="/messages" className="btn btn-secondary" style={{ padding: "14px 22px" }}>
              Message
            </Link>
            <Link href="/rating" className="btn btn-secondary" style={{ padding: "14px 22px" }}>
              Reviews
            </Link>
          </div>
        </div>
      </section>

      <div className="chip-row">
        <span className="chip active">About</span>
        <span className="chip">Experience</span>
        <span className="chip">Content</span>
        <span className="chip">Reviews</span>
      </div>

      <section className="two-col">
        <div className="card">
          <strong>About Me</strong>
          <p className="subtitle" style={{ marginTop: 12 }}>
            Passionate product designer with a decade of experience building user-centric systems, mentorship programs, and scalable digital products.
          </p>
        </div>
        <div className="card">
          <strong>Specialties</strong>
          <div className="chip-row" style={{ marginTop: 14, flexWrap: "wrap" }}>
            {["Portfolio Review", "Design Systems", "Accessibility", "Career Growth"].map((tag) => (
              <span key={tag} className="chip active">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
