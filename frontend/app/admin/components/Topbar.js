export default function Topbar() {
  return (
    <header
      style={{
        height: 70,
        borderBottom: "1px solid rgba(255,255,255,.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 32px",
        background: "#0f0f0f",
      }}
    >
      <h3
        style={{
          color: "white",
          margin: 0,
        }}
      >
        Admin Panel
      </h3>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          color: "white",
        }}
      >
        🔔

        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "#ff7a00",
            display: "grid",
            placeItems: "center",
            fontWeight: 700,
          }}
        >
          A
        </div>
      </div>
    </header>
  );
}