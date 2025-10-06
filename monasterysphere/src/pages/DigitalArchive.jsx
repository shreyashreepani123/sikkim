// src/pages/DigitalArchive.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/digitalArchive.css";

const archiveImages = [
  { src: "/images/archives/ManuscriptLibrarypageslider1.jpg", title: "Ancient Manuscript 1" },
  { src: "/images/archives/ManuscriptLibrarypageslider3.jpg", title: "Ancient Manuscript 2" },
  { src: "/images/archives/ManuscriptLibrarypageslider6.jpg", title: "Ancient Manuscript 3" },
  { src: "/images/archives/ManuscriptLibrarypageslider7.jpg", title: "Ancient Manuscript 4" },
  { src: "/images/archives/Museumpageslider3.jpg", title: "Museum Artifact" },
];

const DigitalArchive = () => {
  return (
    <div className="archive-wrap">
      {/* Top Navigation */}
      <div className="archive-topbar">
        <Link to="/" className="archive-back">← Back to Dashboard</Link>
      </div>

      <h1 className="archive-title">📜 Digital Archive of Sikkim</h1>
      <p className="archive-sub">
        Preserving manuscripts, artifacts, and heritage through digital access.
      </p>

      {/* Archive Image Grid */}
      <div className="archive-grid">
        {archiveImages.map((item, i) => (
          <div key={i} className="archive-card">
            <img src={item.src} alt={item.title} className="archive-img" />
            <div className="archive-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Archive Info Section */}
      <div className="archive-description">
        <h2>✨ About the Digital Archive of Sikkim</h2>
        <p>The Digital Archive of Sikkim serves as a bridge between the past and the future.</p>
        <p>It preserves cultural treasures through digitization and open access.</p>
        <p>Rare manuscripts trace the philosophical, spiritual, and artistic traditions of the Himalayas.</p>
        <p>Ancient texts document Buddhist teachings, rituals, and rare scriptures once hidden in monasteries.</p>
        <p>Digitization protects knowledge from time, decay, and physical damage.</p>
        <p>Unique museum artifacts showcase the rich history of Sikkim.</p>
        <p>Each entry is carefully curated with high-resolution imagery and context.</p>
        <p>Scholars, researchers, and students benefit from its accessibility.</p>
        <p>The archive grows continuously with new digitizations.</p>
        <p>It symbolizes the fusion of tradition and technology.</p>
        <p>Browsing the archive feels like walking through a monastery library.</p>
        <p>Interactive features allow users to view details closely.</p>
        <p>The archive inspires seekers of wisdom and artists alike.</p>
        <p>It contributes to global recognition of Sikkim’s heritage.</p>
        <p>Knowledge transcends borders, connecting cultures worldwide.</p>
        <p>The archive fosters identity and pride among Sikkimese people.</p>
        <p>It safeguards fragile manuscripts for future generations.</p>
        <p>Educational institutions integrate it as a key resource.</p>
        <p>Artists and creators find inspiration in its treasures.</p>
        <p>It is not just a collection, but a sanctuary of memory and wisdom.</p>
      </div>
    </div>
  );
};

export default DigitalArchive;
