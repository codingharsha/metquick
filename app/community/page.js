import AppShell from "@/components/AppShell";
import Header from "@/components/Header";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Community | MetQuick",
};

export default function CommunityPage() {
  return (
    <AppShell activeNav="/community">
      <Header title="Community" subtitle="Peer learning, challenges, and shared wins in one place." rightIcon="message" rightHref="/messages" />

      <section className="card hero-banner">
        <span className="tag"><Icon name="users" size={12} /> 10,000+ learners</span>
        <h1 className="title" style={{ margin: "14px 0 10px" }}>Join the free learning community.</h1>
        <p className="subtitle">This page fills the gap left by the duplicate community prototype and gives the team a clear community route to iterate on.</p>
        <button className="btn btn-primary" style={{ marginTop: 18, padding: "14px 22px" }}>
          Join Now
        </button>
      </section>

      <section className="stats-grid">
        {[
          ["2.4K", "Active Today", "users"],
          ["500+", "Topics", "sparkles"],
          ["120", "Study Groups", "book"],
          ["48", "Live Events", "video"],
        ].map(([value, label, icon]) => (
          <div key={label} className="metric">
            <Icon name={icon} size={18} />
            <strong>{value}</strong>
            <span className="muted" style={{ fontSize: 12 }}>{label}</span>
          </div>
        ))}
      </section>

      <section className="card">
        <div className="section-head" style={{ marginBottom: 14 }}>
          <strong>Popular Rooms</strong>
          <span className="eyebrow">This week</span>
        </div>
        <div className="list">
          {[
            ["UI/UX Portfolio Reviews", "214 members online"],
            ["System Design Sprint", "88 members online"],
            ["Career Switch to Product", "134 members online"],
          ].map(([title, meta]) => (
            <div key={title} className="row" style={{ gap: 14 }}>
              <div className="icon-btn" style={{ color: "var(--orange)" }}>
                <Icon name="users" size={16} />
              </div>
              <div>
                <div style={{ fontWeight: 700 }}>{title}</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{meta}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
