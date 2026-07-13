import Link from "next/link";
import AppShell from "@/components/AppShell";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import { mentors } from "@/lib/data";

export const metadata = {
  title: "Find Mentors | MetQuick",
};

export default function FindMentorsPage() {
  return (
    <AppShell activeNav="/find-mentors">
      <Header title="Find Mentors" subtitle="Browse mentors by role, domain, and availability." rightIcon="bell" />

      <div className="search">
        <span className="left"><Icon name="search" size={18} /></span>
        <input placeholder="Search mentors, skills..." />
        <span className="right"><Icon name="sliders" size={18} /></span>
      </div>

      <div className="card">
        <div className="section-head" style={{ marginBottom: 14 }}>
          <strong>Smart Match</strong>
          <span className="tag"><Icon name="sparkles" size={12} /> AI Pick</span>
        </div>
        <p className="subtitle" style={{ marginTop: 0 }}>Tell us what you want to improve and match that later to backend-powered mentor recommendations.</p>
        <textarea
          placeholder="I want to improve my System Design skills for FAANG interviews..."
          style={{
            width: "100%",
            minHeight: 120,
            marginTop: 14,
            borderRadius: 18,
            padding: 16,
            border: "1px solid var(--border)",
            background: "rgba(255,255,255,0.03)",
            color: "white",
            resize: "vertical",
          }}
        />
        <button className="btn btn-primary" style={{ marginTop: 14, width: "100%", padding: "15px 20px" }}>
          Find My Match
        </button>
      </div>

      <div className="chip-row">
        {["Technology", "Business", "Design", "Marketing", "Finance"].map((chip, index) => (
          <span key={chip} className={`chip${index === 0 ? " active" : ""}`}>{chip}</span>
        ))}
      </div>

      <section>
        <div className="section-head" style={{ marginBottom: 14 }}>
          <strong>All Mentors</strong>
          <span className="muted">{mentors.length}+ featured</span>
        </div>
        <div className="list">
          {mentors.map((mentor) => (
            <Link
              key={mentor.slug}
              href={mentor.slug === "arjun-sharma" ? "/mentor/arjun-sharma" : "/mentor/arjun-sharma"}
              className="mentor-card row"
              style={{ gap: 16, alignItems: "center" }}
            >
              <img src={mentor.image} alt={mentor.name} className="avatar" />
              <div style={{ flex: 1 }}>
                <div className="row" style={{ justifyContent: "space-between", gap: 12 }}>
                  <div style={{ fontWeight: 800 }}>{mentor.name}</div>
                  <div className="row" style={{ gap: 6 }}>
                    <Icon name="star" size={14} />
                    <span style={{ fontSize: 12, fontWeight: 700 }}>{mentor.rating}</span>
                  </div>
                </div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{mentor.role}</div>
                <div style={{ color: "var(--orange)", fontSize: 12, fontWeight: 700, marginTop: 8 }}>
                  {mentor.availability} • {mentor.price}
                </div>
              </div>
              <div className="icon-btn" style={{ width: 38, height: 38 }}>
                <Icon name="chevronRight" size={16} strokeWidth={2} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
