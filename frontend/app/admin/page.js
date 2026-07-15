import Link from "next/link";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import { mentors } from "@/lib/data";

export const metadata = {
  title: "Admin Dashboard | MetQuick",
};

const mockUsers = [
  { id: 1, name: "Aisha Khan", email: "aisha@example.com", role: "student", status: "active" },
  { id: 2, name: "Ravi Patel", email: "ravi@example.com", role: "mentor", status: "pending" },
  { id: 3, name: "Olivia Lee", email: "olivia@example.com", role: "mentor", status: "active" },
];

export default function AdminPage() {
  return (
    <div style={{ padding: 20 }}>
      <Header title="Admin Dashboard" subtitle="Manage users, mentors and site settings" />

      <section style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginTop: 20 }}>
        <div className="card">
          <strong>Site Activity</strong>
          <div style={{ marginTop: 12 }}>
            <div className="eyebrow">Active Users</div>
            <div style={{ fontSize: 28, fontWeight: 800, marginTop: 6 }}>1.2k</div>
          </div>
        </div>

        <div className="card">
          <strong>Pending Approvals</strong>
          <div style={{ marginTop: 12 }}>
            <div className="eyebrow">Mentor Applications</div>
            <div style={{ fontSize: 28, fontWeight: 800, marginTop: 6 }}>{mentors.filter(m => m.pending).length || 2}</div>
          </div>
        </div>

        <div className="card">
          <strong>System</strong>
          <div style={{ marginTop: 12 }}>
            <div className="eyebrow">Last Deploy</div>
            <div style={{ marginTop: 6 }}>2 hours ago</div>
          </div>
        </div>
      </section>

      <section className="card" style={{ marginTop: 20 }}>
        <div className="section-head" style={{ marginBottom: 12 }}>
          <strong>Manage Users</strong>
          <Link href="/admin/users" className="muted">View all</Link>
        </div>

        <table className="table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td className="muted" style={{ fontSize: 13 }}>{u.email}</td>
                <td>{u.role}</td>
                <td>{u.status}</td>
                <td style={{ textAlign: "right" }}>
                  <button className="btn" style={{ marginRight: 8 }}>Edit</button>
                  <button className="btn btn-danger">Suspend</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="card" style={{ marginTop: 20 }}>
        <div className="section-head" style={{ marginBottom: 12 }}>
          <strong>Mentor Approvals</strong>
          <Link href="/admin/mentors" className="muted">Manage</Link>
        </div>

        <div className="h-scroll" style={{ display: "flex", gap: 12 }}>
          {mentors.slice(0, 5).map((m) => (
            <div key={m.slug} className="mentor-card" style={{ minWidth: 220 }}>
              <div className="row" style={{ gap: 10 }}>
                <img src={m.image} alt={m.name} className="avatar round" />
                <div>
                  <div style={{ fontWeight: 800 }}>{m.name}</div>
                  <div className="muted" style={{ fontSize: 12 }}>{m.role}</div>
                </div>
              </div>
              <div style={{ marginTop: 12 }} className="row">
                <button className="btn btn-secondary" style={{ flex: 1 }}>Reject</button>
                <button className="btn btn-primary" style={{ marginLeft: 8 }}>Approve</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
