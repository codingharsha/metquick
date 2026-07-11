import Link from "next/link";
import AppShell from "@/components/AppShell";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import { mentors } from "@/lib/data";

export default function HomePage() {
  return (
    <AppShell activeNav="/">
      <Header title="Find mentors. Grow faster." subtitle="A mobile-first mentoring experience, now structured as a real Next.js app." />

      <div className="search">
        <span className="left"><Icon name="search" size={18} /></span>
        <input placeholder="Search mentors, skills or topics" />
        <span className="right"><Icon name="sliders" size={18} /></span>
      </div>

      <section className="hero-grid">
        <div className="card hero-banner">
          <span className="eyebrow">Welcome back</span>
          <h1 className="title" style={{ margin: "10px 0" }}>Build your next leap with the right mentor.</h1>
          <p className="subtitle">The client prototype is now organized into reusable routes, cards, and navigation we can extend with backend data later.</p>
          <div className="row" style={{ gap: 12, marginTop: 22, flexWrap: "wrap" }}>
            <Link href="/find-mentors" className="btn btn-primary" style={{ padding: "14px 22px" }}>
              Find Mentor
            </Link>
            <Link href="/community" className="btn btn-secondary" style={{ padding: "14px 22px" }}>
              Join Community
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="section-head" style={{ marginBottom: 14 }}>
            <strong>Platform Metrics</strong>
            <span className="eyebrow">Live</span>
          </div>
          <div className="list">
            {[
              ["10,000+", "Students"],
              ["500+", "Mentors"],
              ["5,000+", "Sessions"],
              ["4.95/5", "Rating"],
            ].map(([value, label]) => (
              <div key={label} className="split">
                <span style={{ fontSize: 24, fontWeight: 800 }}>{value}</span>
                <span className="muted">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="desktop-grid">
        <div className="card">
          <div className="section-head" style={{ marginBottom: 14 }}>
            <strong>Recommended Mentors</strong>
            <Link href="/find-mentors" className="muted">View all</Link>
          </div>
          <div className="h-scroll">
            {mentors.map((mentor) => (
              <Link key={mentor.slug} href={mentor.slug === "arjun-sharma" ? "/mentor/arjun-sharma" : "/find-mentors"} className="mentor-card" style={{ minWidth: 220 }}>
                <img src={mentor.image} alt={mentor.name} className="avatar round" />
                <div style={{ marginTop: 14, fontWeight: 800 }}>{mentor.name}</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{mentor.role}</div>
                <div className="row" style={{ gap: 8, marginTop: 12 }}>
                  <Icon name="star" size={14} />
                  <span style={{ fontSize: 12, fontWeight: 700 }}>{mentor.rating}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="section-head" style={{ marginBottom: 14 }}>
            <strong>Trending Now</strong>
            <span className="eyebrow">Shorts</span>
          </div>
          <div className="list">
            {[
              "How to land your first PM role",
              "5 Figma mistakes juniors still make",
              "Cracking system design interviews",
            ].map((item) => (
              <div key={item} className="row" style={{ gap: 12 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 16,
                    background: "rgba(255, 107, 0, 0.14)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--orange)",
                  }}
                >
                  <Icon name="play" size={16} />
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.4 }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
