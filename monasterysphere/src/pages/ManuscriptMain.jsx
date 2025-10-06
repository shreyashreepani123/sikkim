// src/pages/ManuscriptMain.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/manuscriptHub.css";

const ManuscriptMain = () => {
  const sections = [
    { to: "/manuscripts/list", icon: "📜", title: "Manuscripts", desc: "Ancient texts (PDF preview + download)" },
    { to: "/manuscripts/mandala", icon: "🕉️", title: "Mystic Mandala", desc: "Symbolic mandala art and notes" },
    { to: "/manuscripts/murals", icon: "🖼️", title: "Buddha Murals", desc: "Monastic mural references" },
    { to: "/manuscripts/journals", icon: "📓", title: "Journals", desc: "Field notes & research logs" },
    { to: "/manuscripts/archive", icon: "💾", title: "Digital Archive", desc: "Digitized assets & references" },
  ];

  return (
    <div className="mh-wrap">
      <h1 className="mh-title">📚 Manuscript Collections</h1>
      <p className="mh-sub">Choose a section to explore. Each opens its own page.</p>

      <div className="mh-grid">
        {sections.map((s) => (
          <Link key={s.to} to={s.to} className="mh-card">
            <div className="mh-icon">{s.icon}</div>
            <h3 className="mh-card-title">{s.title}</h3>
            <p className="mh-card-desc">{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ManuscriptMain;
