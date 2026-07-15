import Link from "next/link";
import AppShell from "@/components/AppShell";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import { mentors } from "@/lib/data";

export const metadata = {
  title: "Mentor List | MetQuick",
};

export default function MentorListPage() {
  return (
    <AppShell activeNav="/find-mentors">
      <Header title="Mentor Directory" subtitle="Browse mentors by expertise and rating" />

      <section>
        <div className="section-head" style={{ marginBottom: 14 }}>
          <strong>All Mentors</strong>
          <span className="muted">{mentors.length} total</span>
        </div>

        <div className="list">
          {mentors.map((mentor) => (
            <Link
              key={mentor.slug}
              href={`/mentor/${mentor.slug}`}
              className="mentor-card row"
              style={{ gap: 16, alignItems: "center" }}
            >
              <img src={mentor.image} alt={mentor.name} className="avatar" />

              <div style={{ flex: 1 }}>
                <div
                  className="row"
                  style={{ justifyContent: "space-between", gap: 12 }}
                >
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
