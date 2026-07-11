import AppShell from "@/components/AppShell";
import Header from "@/components/Header";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Profile | MetQuick",
};

export default function ProfilePage() {
  return (
    <AppShell activeNav="/profile">
      <Header title="Profile" subtitle="A structured version of the client’s user profile prototype." rightIcon="settings" />

      <section className="card profile-hero">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
          alt="Alex Thompson"
          className="avatar"
        />
        <div style={{ fontSize: 24, fontWeight: 800 }}>Alex Thompson</div>
        <div className="muted" style={{ marginTop: 6 }}>alex.thompson@example.com</div>
        <div className="chip-row" style={{ justifyContent: "center", marginTop: 18 }}>
          <span className="chip">Sessions: 48</span>
          <span className="chip">Learned: 24.5h</span>
          <span className="chip">Following: 125</span>
        </div>
      </section>

      <div className="chip-row">
        <span className="chip active">About</span>
        <span className="chip">Learning Path</span>
        <span className="chip">Certificates</span>
        <span className="chip">Bookmarks</span>
      </div>

      <section className="two-col">
        <div className="card">
          <strong>About</strong>
          <p className="subtitle" style={{ marginTop: 12 }}>
            Passionate UI/UX designer and frontend enthusiast exploring how AI and human-computer interaction can power better learning platforms.
          </p>
        </div>

        <div className="card">
          <strong>Quick Stats</strong>
          <div className="list" style={{ marginTop: 14 }}>
            {[
              ["Current Streak", "12 days"],
              ["Saved Mentors", "18"],
              ["Certificates", "06"],
            ].map(([label, value]) => (
              <div key={label} className="split">
                <span className="muted">{label}</span>
                <span style={{ fontWeight: 700 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="card">
        <strong>Settings</strong>
        <div className="settings-list" style={{ marginTop: 14 }}>
          {[
            ["Account Settings", "user"],
            ["Privacy & Security", "settings"],
            ["Notifications", "bell"],
            ["Help & Support", "message"],
          ].map(([label, icon]) => (
            <div key={label} className="setting-card split">
              <div className="row" style={{ gap: 12 }}>
                <div className="icon-btn" style={{ width: 40, height: 40, color: "var(--orange)" }}>
                  <Icon name={icon} size={16} />
                </div>
                <span style={{ fontWeight: 700 }}>{label}</span>
              </div>
              <Icon name="chevronRight" size={16} />
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
