"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Dashboard", href: "/admin" },
  { label: "Mentors", href: "/admin/mentor-list" },
  { label: "Students", href: "/admin/student-list" },
  { label: "Applications", href: "/admin/mentor-application" },
  { label: "Sessions", href: "/admin/session-monitoring" },
  { label: "Courses", href: "/admin/course-management" },
  { label: "Announcements", href: "/admin/announcements" },
  { label: "Settings", href: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: 250,
        background: "#111",
        borderRight: "1px solid rgba(255,255,255,.08)",
        padding: 24,
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: 30,
        }}
      >
        MetQuick Admin
      </h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              color:
                pathname === item.href
                  ? "#ff7a00"
                  : "#bdbdbd",
              textDecoration: "none",
              padding: "10px 14px",
              borderRadius: 10,
              background:
                pathname === item.href
                  ? "rgba(255,122,0,.12)"
                  : "transparent",
              transition: ".2s",
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}