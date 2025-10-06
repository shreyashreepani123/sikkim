// src/pages/Manuscripts.jsx
import React from "react";
import "../styles/manuscript.css";

const manuscriptsData = [
  { id: 1, title: "Manuscript 1 – Buddhist Sutras", file: "/manuscripts/manuscript1.pdf" },
  { id: 2, title: "Manuscript 2 – Monastic Records", file: "/manuscripts/manuscript2.pdf" },
  { id: 3, title: "Manuscript 3 – Philosophical Commentaries", file: "/manuscripts/manuscript3.pdf" },
  { id: 4, title: "Manuscript 4 – Ritual Texts", file: "/manuscripts/manuscript4.pdf" },
  { id: 5, title: "Manuscript 5 – Sacred Scriptures", file: "/manuscripts/manuscript5.pdf" },
  { id: 6, title: "Manuscript 6 – Ancient Teachings", file: "/manuscripts/manuscript6.pdf" },
  { id: 7, title: "Manuscript 7 – Wisdom Chronicles", file: "/manuscripts/manuscript7.pdf" },
];

const Manuscripts = () => {
  return (
    <div className="manuscripts-container">
      <h1>📜 Ancient Manuscripts</h1>

      <div className="gallery">
        {manuscriptsData.map((m) => (
          <div key={m.id} className="manuscript-card">
            <div className="pdf-icon">📄</div>
            <h3>{m.title}</h3>
            <div className="btn-group">
              <a href={m.file} target="_blank" rel="noopener noreferrer" className="view-btn">
                👀 Preview
              </a>
              <a href={m.file} download className="download-btn">
                📥 Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manuscripts;
