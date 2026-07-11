import BottomNav from "@/components/BottomNav";

export default function AppShell({ children, activeNav }) {
  return (
    <>
      <main className="app-shell">
        <div className="page-stack">{children}</div>
      </main>
      <BottomNav active={activeNav} />
    </>
  );
}
