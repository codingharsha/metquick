import Link from "next/link";
import Icon from "@/components/Icon";
import { navItems } from "@/lib/data";

export default function BottomNav({ active }) {
  return (
    <nav className="nav">
      <div className="nav-grid">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item${active === item.href ? " active" : ""}`}
          >
            <Icon name={item.icon} size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
