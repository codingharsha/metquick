"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Icon from "@/components/Icon";

export const metadata = {
	title: "Student List | Admin — MetQuick",
};

const mockStudents = [
	{ id: "s1", name: "Maya Rao", email: "maya@example.com", enrolled: "2024-09-01", lastLogin: "2h ago", status: "active", sessions: 5 },
	{ id: "s2", name: "Liam Carter", email: "liam@example.com", enrolled: "2025-01-12", lastLogin: "1d ago", status: "active", sessions: 2 },
	{ id: "s3", name: "Sofia Nguyen", email: "sofia@example.com", enrolled: "2023-11-21", lastLogin: "3d ago", status: "suspended", sessions: 0 },
	{ id: "s4", name: "Noah Kim", email: "noah@example.com", enrolled: "2024-06-05", lastLogin: "30m ago", status: "active", sessions: 8 },
	{ id: "s5", name: "Ava Brown", email: "ava@example.com", enrolled: "2022-03-18", lastLogin: "7d ago", status: "active", sessions: 12 },
];

export default function StudentListPage() {
	const [students, setStudents] = useState(mockStudents);
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState("all");
	const [selected, setSelected] = useState(null);
	const [msg, setMsg] = useState("");

	const filtered = useMemo(() => {
		return students.filter((s) => {url 
			if (filter === "active" && s.status !== "active") return false;
			if (filter === "suspended" && s.status !== "suspended") return false;
			if (!query) return true;
			const q = query.toLowerCase();
			return s.name.toLowerCase().includes(q) || s.email.toLowerCase().includes(q);
		});
	}, [students, query, filter]);

	function toggleSuspend(id) {
		setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, status: s.status === "active" ? "suspended" : "active" } : s)));
		setMsg("Updated status.");
	}

	function removeStudent(id) {
		setStudents((prev) => prev.filter((s) => s.id !== id));
		setSelected(null);
		setMsg("Student removed.");
	}

	const metrics = useMemo(() => {
		const total = students.length;
		const active = students.filter((s) => s.status === "active").length;
		const suspended = students.filter((s) => s.status === "suspended").length;
		const sessions = students.reduce((acc, s) => acc + (s.sessions || 0), 0);
		return { total, active, suspended, sessions };
	}, [students]);

	return (
		<div style={{ padding: 20 }}>
			<Header title="Students" subtitle="Monitor enrolled students and manage access" />

			<section style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", marginTop: 12 }}>
				<div className="card">
					<div className="eyebrow">Total Students</div>
					<div style={{ fontSize: 28, fontWeight: 800 }}>{metrics.total}</div>
				</div>
				<div className="card">
					<div className="eyebrow">Active</div>
					<div style={{ fontSize: 28, fontWeight: 800 }}>{metrics.active}</div>
				</div>
				<div className="card">
					<div className="eyebrow">Suspended</div>
					<div style={{ fontSize: 28, fontWeight: 800 }}>{metrics.suspended}</div>
				</div>
				<div className="card">
					<div className="eyebrow">Sessions (total)</div>
					<div style={{ fontSize: 28, fontWeight: 800 }}>{metrics.sessions}</div>
				</div>
			</section>

			<div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 18, marginTop: 18 }}>
				<aside>
					<div className="card">
						<div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
							<Icon name="search" size={16} />
							<input
								placeholder="Search students..."
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								style={{ flex: 1 }}
							/>
						</div>

						<div className="chip-row" style={{ marginBottom: 12 }}>
							{["all", "active", "suspended"].map((c) => (
								<button
									key={c}
									className={`chip${filter === c ? " active" : ""}`}
									onClick={() => setFilter(c)}
								>
									{c === "all" ? "All" : c.charAt(0).toUpperCase() + c.slice(1)}
								</button>
							))}
						</div>

						<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
							{filtered.map((s) => (
								<div key={s.id} className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
									<div style={{ display: "flex", gap: 10, alignItems: "center" }}>
										<div style={{ width: 44, height: 44, borderRadius: 8, background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>{s.name.split(" ")[0][0]}</div>
										<div>
											<div style={{ fontWeight: 700 }}>{s.name}</div>
											<div className="muted" style={{ fontSize: 12 }}>{s.email}</div>
										</div>
									</div>
									<div>
										<button className="btn" onClick={() => setSelected(s)}>View</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</aside>

				<main>
					<div className="card">
						<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
							<div style={{ fontWeight: 800 }}>Student Monitor</div>
							<div className="muted">{msg}</div>
						</div>

						{!selected ? (
							<div style={{ padding: 30, textAlign: "center" }}>Select a student to view details and actions.</div>
						) : (
							<div style={{ marginTop: 12 }}>
								<div className="row" style={{ gap: 16, alignItems: "center" }}>
									<div style={{ width: 72, height: 72, borderRadius: 12, background: "#eee", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{selected.name.split(" ")[0][0]}</div>
									<div style={{ flex: 1 }}>
										<div style={{ fontWeight: 800, fontSize: 18 }}>{selected.name}</div>
										<div className="muted" style={{ fontSize: 13 }}>{selected.email}</div>
										<div style={{ marginTop: 8 }} className="muted">Enrolled: {selected.enrolled} • Last Login: {selected.lastLogin}</div>
									</div>
								</div>

								<div style={{ marginTop: 16 }}>
									<div className="eyebrow">Engagement</div>
									<div style={{ display: "flex", gap: 12, marginTop: 8 }}>
										<div className="card" style={{ padding: 12, minWidth: 140 }}>
											<div className="muted">Sessions</div>
											<div style={{ fontWeight: 800 }}>{selected.sessions}</div>
										</div>
										<div className="card" style={{ padding: 12, minWidth: 140 }}>
											<div className="muted">Status</div>
											<div style={{ fontWeight: 800 }}>{selected.status}</div>
										</div>
									</div>
								</div>

								<div style={{ display: "flex", gap: 8, marginTop: 16 }}>
									<button className="btn btn-primary" onClick={() => { setMsg('Message sent (mock).'); }}>Message</button>
									<button className="btn" onClick={() => toggleSuspend(selected.id)}>{selected.status === 'active' ? 'Suspend' : 'Reactivate'}</button>
									<button className="btn btn-danger" onClick={() => removeStudent(selected.id)} style={{ marginLeft: 'auto' }}>Remove</button>
								</div>
							</div>
						)}
					</div>
				</main>
			</div>
		</div>
	);
}

