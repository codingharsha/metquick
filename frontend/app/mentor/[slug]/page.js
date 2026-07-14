import Link from "next/link";
import { notFound } from "next/navigation";
import AppShell from "@/components/AppShell";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import { mentors } from "@/lib/data";

export function generateStaticParams() {
  return mentors.map((mentor) => ({ slug: mentor.slug }));
}

export function generateMetadata({ params }) {
  const mentor = mentors.find((item) => item.slug === params.slug);
  return { title: mentor ? `${mentor.name} | MetQuick` : "Mentor | MetQuick" };
}

export default function MentorProfilePage({ params }) {
  const mentor = mentors.find((item) => item.slug === params.slug);

  if (!mentor) {
    notFound();
  }

  return (
    <AppShell activeNav="">
      <Header title="Mentor Profile" subtitle="A reusable mentor detail page based on the attached mentor prototype." backHref="/find-mentors" rightIcon="more" />

      <section className="card" style={{ overflow: "hidden", padding: 0 }}>
        <img
          src={mentor.image}
          alt={mentor.name}
          style={{ width: "100%", height: 280, objectFit: "cover" }}
        />
        <div style={{ padding: 20 }}>
          <span className="tag">{mentor.availability}</span>
          <div style={{ fontSize: 30, fontWeight: 800, marginTop: 14 }}>{mentor.name}</div>
          <div className="muted" style={{ marginTop: 6 }}>{mentor.role}</div>
          <div className="row" style={{ gap: 14, flexWrap: "wrap", marginTop: 14, color: "var(--muted)", fontSize: 13 }}>
            <span>{mentor.location}</span>
            <span>{mentor.experience}</span>
            <span>{mentor.sessionsCount}</span>
          </div>
          <div className="row" style={{ gap: 8, marginTop: 14 }}>
            <Icon name="star" size={16} />
            <strong>{mentor.rating}</strong>
            <span className="muted">({mentor.reviewCount})</span>
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
            {mentor.about}
          </p>
        </div>
        <div className="card">
          <strong>Specialties</strong>
          <div className="chip-row" style={{ marginTop: 14, flexWrap: "wrap" }}>
            {mentor.tags.map((tag) => (
              <span key={tag} className="chip active">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
