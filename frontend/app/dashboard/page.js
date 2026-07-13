import Link from "next/link";
import AppShell from "@/components/AppShell";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import { mentors } from "@/lib/data";

export const metadata = {
  title: "Dashboard | MetQuick",
};

export default function DashboardPage() {
  return (
    <AppShell activeNav="/">
      <Header title="Welcome back, Mikey" subtitle="Your dashboard route mirrors the richer student dashboard prototype." rightHref="/profile" />

      <div className="search">
        <span className="left"><Icon name="search" size={18} /></span>
        <input placeholder="Search mentors, skills or topics..." />
        <span className="right"><Icon name="sliders" size={18} /></span>
      </div>

      <div className="chip-row">
        {["Product Design", "SaaS", "$20-50/hr", "Top Rated"].map((chip, index) => (
          <span key={chip} className={`chip${index === 0 ? " active" : ""}`}>{chip}</span>
        ))}
      </div>

      <section className="stats-grid">
        {[
          ["24.5h", "Learning Time", "clock"],
          ["12 Days", "Current Streak", "flame"],
          ["08", "Courses Active", "book"],
          ["152", "Skill Points", "award"],
        ].map(([value, label, icon]) => (
          <div key={label} className="metric">
            <Icon name={icon} size={18} />
            <strong>{value}</strong>
            <span className="muted" style={{ fontSize: 12 }}>{label}</span>
          </div>
        ))}
      </section>

      <section className="desktop-grid">
        <div className="card">
          <div className="section-head" style={{ marginBottom: 14 }}>
            <strong>Your Next Session</strong>
            <Link href="/sessions" className="muted">See schedule</Link>
          </div>
          <div className="session-card">
            <div className="row" style={{ gap: 14 }}>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
                alt="Dr. Sarah Jenkins"
                className="avatar round"
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800 }}>Dr. Sarah Jenkins</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>Product Strategy Lead @ Airbnb</div>
              </div>
              <span className="tag">In 2 hours</span>
            </div>
            <div className="split" style={{ marginTop: 18, fontSize: 12 }}>
              <div>
                <div className="eyebrow">Topic</div>
                <div style={{ marginTop: 6 }}>Scaling Product Growth</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="eyebrow">Duration</div>
                <div style={{ marginTop: 6 }}>60 Minutes</div>
              </div>
            </div>
            <button className="btn btn-primary" style={{ width: "100%", marginTop: 18, padding: "14px 20px" }}>
              Join Session
            </button>
          </div>
        </div>

        <div className="card">
          <div className="section-head" style={{ marginBottom: 14 }}>
            <strong>Continue Learning</strong>
            <span className="eyebrow">Module 04</span>
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.2 }}>
            Advanced UX Research & User Behavior Patterns
          </div>
          <p className="subtitle" style={{ marginTop: 8 }}>8 of 12 lessons completed • 45m left</p>
          <div style={{ marginTop: 18 }}>
            <div className="split" style={{ marginBottom: 8, fontSize: 12 }}>
              <span className="eyebrow">Course Progress</span>
              <span style={{ color: "var(--orange)", fontWeight: 700 }}>65%</span>
            </div>
            <div className="progress"><span style={{ width: "65%" }} /></div>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="section-head" style={{ marginBottom: 14 }}>
          <strong>Expert Mentors</strong>
          <Link href="/find-mentors" className="muted">View all</Link>
        </div>
        <div className="h-scroll">
          {mentors.map((mentor) => (
            <div key={mentor.slug} className="mentor-card" style={{ minWidth: 240 }}>
              <div className="row" style={{ gap: 12 }}>
                <img src={mentor.image} alt={mentor.name} className="avatar round" />
                <div>
                  <div style={{ fontWeight: 800 }}>{mentor.name}</div>
                  <div className="muted" style={{ fontSize: 12 }}>{mentor.role}</div>
                </div>
              </div>
              <div className="chip-row" style={{ marginTop: 14 }}>
                {mentor.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
              <div className="row" style={{ gap: 10, marginTop: 16 }}>
                <button className="btn btn-secondary" style={{ flex: 1, padding: "12px 16px" }}>Follow</button>
                <Link href="/mentor/arjun-sharma" className="btn btn-primary" style={{ padding: "12px 18px" }}>
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
