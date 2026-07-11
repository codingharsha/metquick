import AppShell from "@/components/AppShell";
import Header from "@/components/Header";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Reviews | MetQuick",
};

export default function RatingPage() {
  return (
    <AppShell activeNav="">
      <Header title="Arjun Sharma Reviews" subtitle="The reviews prototype is now a standalone page ready for real review data." backHref="/mentor/arjun-sharma" rightIcon="more" />

      <section className="card two-col">
        <div>
          <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1 }}>4.9</div>
          <div className="row" style={{ gap: 4, marginTop: 10 }}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Icon key={index} name="star" size={16} />
            ))}
          </div>
          <div className="muted" style={{ marginTop: 10 }}>(120 Reviews)</div>
        </div>
        <div className="bar-list">
          {[
            ["5★", "92%", "92%"],
            ["4★", "6%", "6%"],
            ["3★", "2%", "2%"],
          ].map(([label, value, width]) => (
            <div key={label} className="bar">
              <span>{label}</span>
              <div className="bar-track"><div className="bar-fill" style={{ width }} /></div>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="section-head" style={{ marginBottom: 14 }}>
          <strong>Student Reviews</strong>
          <span className="muted">Latest</span>
        </div>
        <div className="reviews-list">
          {[
            ["Rohan Mehta", "Product Designer @ Microsoft", "Arjun’s mentorship helped me crack my dream role at Microsoft. His portfolio feedback was incredibly detailed."],
            ["Sana Iqbal", "UX Researcher @ Swiggy", "The session was practical, direct, and gave me a roadmap I could act on the same day."],
          ].map(([name, role, review]) => (
            <article key={name} className="review-card">
              <div className="split">
                <div>
                  <div style={{ fontWeight: 800 }}>{name}</div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{role}</div>
                </div>
                <div className="row" style={{ gap: 6 }}>
                  <Icon name="star" size={14} />
                  <strong style={{ fontSize: 12 }}>5.0</strong>
                </div>
              </div>
              <p className="subtitle" style={{ margin: "12px 0 0" }}>{review}</p>
            </article>
          ))}
        </div>
        <button className="btn btn-secondary" style={{ width: "100%", marginTop: 16, padding: "14px 20px", borderColor: "rgba(255,107,0,0.35)", color: "var(--orange)" }}>
          Write a Review
        </button>
      </section>
    </AppShell>
  );
}
