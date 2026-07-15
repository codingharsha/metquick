"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import { mentors as initialMentors } from "@/lib/data";

export const metadata = {
	title: "Edit Mentors | Admin — MetQuick",
};

export default function MentorEditPage() {
	const [mentors, setMentors] = useState(initialMentors || []);
	const [selected, setSelected] = useState(null);
	const [statusMsg, setStatusMsg] = useState("");

	function handleSelect(slug) {
		const m = mentors.find((x) => x.slug === slug);
		if (m) setSelected({ ...m });
		setStatusMsg("");
	}

	function handleChange(e) {
		const { name, value, type, checked } = e.target;
		setSelected((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	}

	function handleSave() {
		if (!selected) return;
		setMentors((prev) => prev.map((m) => (m.slug === selected.slug ? selected : m)));
		setStatusMsg("Saved changes.");
	}

	function handleDelete() {
		if (!selected) return;
		setMentors((prev) => prev.filter((m) => m.slug !== selected.slug));
		setSelected(null);
		setStatusMsg("Mentor deleted.");
	}

	return (
		<div style={{ padding: 20 }}>
			<Header title="Mentor Editor" subtitle="Review and edit mentor profiles" />

			<div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 18, marginTop: 20 }}>
				<aside>
					<div className="card">
						<div style={{ fontWeight: 800, marginBottom: 8 }}>Mentors</div>
						<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
							{mentors.map((m) => (
								<div key={m.slug} className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
									<div style={{ display: "flex", gap: 10, alignItems: "center" }}>
										<img src={m.image} alt={m.name} className="avatar" />
										<div>
											<div style={{ fontWeight: 700 }}>{m.name}</div>
											<div className="muted" style={{ fontSize: 12 }}>{m.role}</div>
										</div>
									</div>
									<div>
										<button className="btn" onClick={() => handleSelect(m.slug)}>
											<Icon name="edit" size={14} />
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</aside>

				<main>
					<div className="card">
						<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
							<div style={{ fontWeight: 800 }}>Editor</div>
							<div className="muted">{statusMsg}</div>
						</div>

						{!selected ? (
							<div style={{ padding: 30, textAlign: "center" }}>
								Select a mentor from the left to edit their profile.
							</div>
						) : (
							<form onSubmit={(e) => e.preventDefault()} style={{ marginTop: 12 }}>
								<label className="field">
									<div className="label">Name</div>
									<input name="name" value={selected.name} onChange={handleChange} />
								</label>

								<label className="field">
									<div className="label">Role</div>
									<input name="role" value={selected.role} onChange={handleChange} />
								</label>

								<label className="field">
									<div className="label">Bio</div>
									<textarea name="bio" value={selected.bio || ""} onChange={handleChange} rows={4} />
								</label>

								<div style={{ display: "flex", gap: 12 }}>
									<label className="field" style={{ flex: 1 }}>
										<div className="label">Availability</div>
										<input name="availability" value={selected.availability || ""} onChange={handleChange} />
									</label>

									<label className="field" style={{ width: 140 }}>
										<div className="label">Price</div>
										<input name="price" value={selected.price || ""} onChange={handleChange} />
									</label>
								</div>

								<label className="field">
									<div className="label">Tags (comma separated)</div>
									<input
										name="tags"
										value={(selected.tags && selected.tags.join(", ")) || ""}
										onChange={(e) => setSelected((prev) => ({ ...prev, tags: e.target.value.split(",").map(t => t.trim()).filter(Boolean) }))}
									/>
								</label>

								<label className="field">
									<div className="label">Image URL</div>
									<input name="image" value={selected.image || ""} onChange={handleChange} />
								</label>

								<div style={{ display: "flex", gap: 8, marginTop: 12 }}>
									<button className="btn btn-primary" onClick={handleSave}>Save</button>
									<button className="btn" onClick={() => { setSelected(null); setStatusMsg(""); }}>Cancel</button>
									<button className="btn btn-danger" onClick={handleDelete} style={{ marginLeft: 'auto' }}>Delete</button>
								</div>
							</form>
						)}
					</div>
				</main>
			</div>
		</div>
	);
}
