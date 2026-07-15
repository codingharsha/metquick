"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import { mentors as initialMentors } from "@/lib/data";

export const metadata = {
	title: "Mentor Applications | Admin — MetQuick",
};

const initialApplications = [
	{
		id: "app-1",
		name: "Simran Kaur",
		email: "simran@example.com",
		role: "Senior PM",
		bio: "Experienced product manager offering mentoring on strategy and growth.",
		image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
		tags: ["Product", "Strategy"],
	},
	{
		id: "app-2",
		name: "Diego Ramirez",
		email: "diego@example.com",
		role: "Data Scientist",
		bio: "ML practitioner focusing on recommendation systems and model interpretability.",
		image: "https://images.unsplash.com/photo-1545996124-1b0848b7a3f9?auto=format&fit=crop&w=600&q=80",
		tags: ["ML", "Data"]
	},
];

function slugify(name) {
	return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function MentorApplicationPage() {
	const [applications, setApplications] = useState(initialApplications);
	const [mentors, setMentors] = useState(initialMentors || []);
	const [selected, setSelected] = useState(null);
	const [msg, setMsg] = useState("");

	function approve(id) {
		const app = applications.find((a) => a.id === id);
		if (!app) return;

		const newMentor = {
			slug: slugify(app.name),
			name: app.name,
			role: app.role,
			image: app.image,
			rating: "4.8",
			price: "$50 / hr",
			availability: "Available",
			tags: app.tags || [],
			location: "",
			experience: "",
			sessionsCount: "0",
			reviewCount: "0 reviews",
			about: app.bio,
		};

		setMentors((prev) => [newMentor, ...prev]);
		setApplications((prev) => prev.filter((a) => a.id !== id));
		setSelected(null);
		setMsg(`${app.name} approved as mentor.`);
	}

	function removeApp(id) {
		const app = applications.find((a) => a.id === id);
		if (!app) return;
		setApplications((prev) => prev.filter((a) => a.id !== id));
		setSelected(null);
		setMsg(`${app.name}'s application removed.`);
	}

	return (
		<div style={{ padding: 20 }}>
			<Header title="Mentor Applications" subtitle="Approve or remove incoming mentor applications" />

			<div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 18, marginTop: 20 }}>
				<aside>
					<div className="card">
						<div style={{ fontWeight: 800, marginBottom: 8 }}>Applications</div>
						<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
							{applications.length === 0 ? (
								<div className="muted" style={{ padding: 12 }}>No pending applications.</div>
							) : (
								applications.map((a) => (
									<div key={a.id} className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
										<div style={{ display: "flex", gap: 10, alignItems: "center" }}>
											<img src={a.image} alt={a.name} className="avatar" />
											<div>
												<div style={{ fontWeight: 700 }}>{a.name}</div>
												<div className="muted" style={{ fontSize: 12 }}>{a.role}</div>
											</div>
										</div>
										<div>
											<button className="btn" onClick={() => setSelected(a)}>
												View
											</button>
										</div>
									</div>
								))
							)}
						</div>
					</div>
				</aside>

				<main>
					<div className="card">
						<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
							<div style={{ fontWeight: 800 }}>Application Details</div>
							<div className="muted">{msg}</div>
						</div>

						{!selected ? (
							<div style={{ padding: 30, textAlign: "center" }}>
								Select an application to review and approve.
							</div>
						) : (
							<div style={{ marginTop: 12 }}>
								<div className="row" style={{ gap: 12, alignItems: "center" }}>
									<img src={selected.image} alt={selected.name} className="avatar round" />
									<div style={{ flex: 1 }}>
										<div style={{ fontWeight: 800 }}>{selected.name}</div>
										<div className="muted" style={{ fontSize: 13 }}>{selected.email}</div>
										<div className="muted" style={{ fontSize: 12, marginTop: 6 }}>{selected.role}</div>
									</div>
								</div>

								<div style={{ marginTop: 12 }}>
									<div className="eyebrow">Bio</div>
									<p style={{ marginTop: 8 }}>{selected.bio}</p>
								</div>

								<div style={{ marginTop: 16 }} className="row">
									<button className="btn btn-primary" onClick={() => approve(selected.id)}>Approve</button>
									<button className="btn" onClick={() => { setSelected(null); setMsg(""); }}>Close</button>
									<button className="btn btn-danger" onClick={() => removeApp(selected.id)} style={{ marginLeft: 'auto' }}>Remove</button>
								</div>
							</div>
						)}
					</div>

					<div style={{ marginTop: 18 }} className="card">
						<div style={{ fontWeight: 800 }}>Recently Approved</div>
						<div style={{ display: 'flex', gap: 12, marginTop: 12, overflowX: 'auto' }}>
							{mentors.slice(0,5).map(m => (
								<div key={m.slug} className="mentor-card" style={{ minWidth: 180 }}>
									<div className="row" style={{ gap: 10 }}>
										<img src={m.image} alt={m.name} className="avatar" />
										<div>
											<div style={{ fontWeight: 700 }}>{m.name}</div>
											<div className="muted" style={{ fontSize: 12 }}>{m.role}</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

