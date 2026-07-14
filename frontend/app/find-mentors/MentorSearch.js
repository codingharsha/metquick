"use client";

import { useState } from "react";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import { mentors } from "@/lib/data";

export default function MentorSearch() {
  const [search, setSearch] = useState("");

  const filteredMentors = mentors.filter((mentor) => {
    const query = search.toLowerCase();

    return (
      mentor.name.toLowerCase().includes(query) ||
      mentor.role.toLowerCase().includes(query)
    );
  });

  return (
    <AppShell activeNav="/find-mentors">
      <Header
        title="Find Mentors"
        subtitle="Browse mentors by role, domain, and availability."
        rightIcon="bell"
      />

      {/* Search Bar */}
      <div className="search">
        <span className="left">
          <Icon name="search" size={18} />
        </span>

        <input
          type="text"
          placeholder="Search mentors, skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <span className="right">
          <Icon name="sliders" size={18} />
        </span>
      </div>

      {/* Categories */}
      <div className="chip-row">
        {["Technology", "Business", "Design", "Marketing", "Finance"].map(
          (chip, index) => (
            <span
              key={chip}
              className={`chip${index === 0 ? " active" : ""}`}
            >
              {chip}
            </span>
          )
        )}
      </div>

      {/* Mentor List */}
      <section>
        <div className="section-head" style={{ marginBottom: 14 }}>
          <strong>All Mentors</strong>
          <span className="muted">
            {filteredMentors.length}+ featured
          </span>
        </div>

        <div className="list">
          {filteredMentors.length > 0 ? (
            filteredMentors.map((mentor) => (
              <Link
                key={mentor.slug}
                href={`/mentor/${mentor.slug}`}
                className="mentor-card row"
                style={{ gap: 16, alignItems: "center" }}
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="avatar"
                />

                <div style={{ flex: 1 }}>
                  <div
                    className="row"
                    style={{
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <div style={{ fontWeight: 800 }}>
                      {mentor.name}
                    </div>

                    <div className="row" style={{ gap: 6 }}>
                      <Icon name="star" size={14} />
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                        }}
                      >
                        {mentor.rating}
                      </span>
                    </div>
                  </div>

                  <div
                    className="muted"
                    style={{
                      fontSize: 12,
                      marginTop: 4,
                    }}
                  >
                    {mentor.role}
                  </div>

                  <div
                    style={{
                      color: "var(--orange)",
                      fontSize: 12,
                      fontWeight: 700,
                      marginTop: 8,
                    }}
                  >
                    {mentor.availability} • {mentor.price}
                  </div>
                </div>

                <div
                  className="icon-btn"
                  style={{
                    width: 38,
                    height: 38,
                  }}
                >
                  <Icon
                    name="chevronRight"
                    size={16}
                    strokeWidth={2}
                  />
                </div>
              </Link>
            ))
          ) : (
            <div
              className="card"
              style={{
                textAlign: "center",
                padding: "30px",
              }}
            >
              No mentors found.
            </div>
          )}
        </div>
      </section>
    </AppShell>
  );
}