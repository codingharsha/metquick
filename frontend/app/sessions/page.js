import AppShell from "@/components/AppShell";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import { sessions } from "@/lib/data";

export const metadata = {
  title: "Sessions | MetQuick",
};

export default function SessionsPage() {
  return (
    <AppShell activeNav="/sessions">
      <Header title="Sessions" subtitle="Upcoming, completed, and cancelled mentorship sessions." rightIcon="more" />

      <div className="chip-row">
        <span className="chip active">Upcoming</span>
        <span className="chip">Completed</span>
        <span className="chip">Cancelled</span>
      </div>

      <div className="list">
        {sessions.map((session) => (
          <section key={`${session.day}-${session.name}`} className="card">
            <div className="section-head" style={{ marginBottom: 14 }}>
              <strong>{session.day}</strong>
              <span className="tag">{session.status}</span>
            </div>
            <div className="session-card">
              <div className="row" style={{ gap: 14 }}>
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
                  alt={session.name}
                  className="avatar round"
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800 }}>{session.name}</div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{session.topic}</div>
                </div>
              </div>
              <div className="split" style={{ marginTop: 18, fontSize: 12 }}>
                <span className="row" style={{ gap: 8 }}><Icon name="calendar" size={14} /> {session.time}</span>
                <span className="row" style={{ gap: 8 }}><Icon name="clock" size={14} /> {session.duration}</span>
              </div>
              <button className="btn btn-primary" style={{ width: "100%", marginTop: 18, padding: "14px 20px" }}>
                Join Session
              </button>
            </div>
          </section>
        ))}
      </div>
    </AppShell>
  );
}
