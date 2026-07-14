import Link from "next/link";
import Icon from "@/components/Icon";

const rightIconLabels = {
  bell: "Notifications",
  settings: "Settings",
  message: "Messages",
  more: "More options",
};

export default function Header({
  title,
  subtitle,
  backHref,
  rightIcon = "bell",
  rightHref,
  centered = false,
}) {
  return (
    <header className="page-stack" style={{ gap: 16 }}>
      <div className="topbar">
        <div className="row" style={{ gap: 12 }}>
          {backHref ? (
            <Link href={backHref} className="icon-btn" aria-label="Go back">
              <Icon name="arrowLeft" />
            </Link>
          ) : (
            <div className="row" style={{ gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 14,
                  background: "rgba(255, 107, 0, 0.12)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--orange)",
                }}
              >
                <Icon name="sparkles" size={18} />
              </div>
              <strong style={{ fontSize: 24, letterSpacing: "-0.04em" }}>metquick</strong>
            </div>
          )}

          {centered && (
            <div>
              <div style={{ fontSize: 20, fontWeight: 800 }}>{title}</div>
            </div>
          )}
        </div>

        {rightHref ? (
          <Link href={rightHref} className="icon-btn" aria-label={title ?? "Open action"}>
            <Icon name={rightIcon} />
          </Link>
        ) : (
          <button className="icon-btn" aria-label={rightIconLabels[rightIcon] ?? "Open action"}>
            <Icon name={rightIcon} />
          </button>
        )}
      </div>

      {!centered && title ? (
        <div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>{title}</div>
          {subtitle ? <p className="subtitle" style={{ margin: "6px 0 0" }}>{subtitle}</p> : null}
        </div>
      ) : null}
    </header>
  );
}
