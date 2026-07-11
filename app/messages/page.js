import AppShell from "@/components/AppShell";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import { messages } from "@/lib/data";

export const metadata = {
  title: "Messages | MetQuick",
};

export default function MessagesPage() {
  return (
    <AppShell activeNav="">
      <Header title="Messages" subtitle="Mentor conversations from the prototype are now a dedicated route." backHref="/" rightIcon="message" />

      <div className="search">
        <span className="left"><Icon name="search" size={18} /></span>
        <input placeholder="Search messages..." />
        <span className="right"><Icon name="sliders" size={18} /></span>
      </div>

      <div className="list">
        {messages.map(([name, preview, time, unread]) => (
          <article key={name} className="message-card row" style={{ gap: 16, alignItems: "center" }}>
            <img
              src={`https://ui-avatars.com/api/?background=1a1a1a&color=ffffff&name=${encodeURIComponent(name)}`}
              alt={name}
              className="avatar round"
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="split" style={{ gap: 12 }}>
                <strong style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</strong>
                <span className="muted" style={{ fontSize: 11 }}>{time}</span>
              </div>
              <div className="split" style={{ gap: 12, marginTop: 6 }}>
                <span className="muted" style={{ fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{preview}</span>
                {unread ? (
                  <span style={{ width: 10, height: 10, borderRadius: 999, background: "var(--orange)", flexShrink: 0 }} />
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
