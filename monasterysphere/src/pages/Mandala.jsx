// src/pages/Mandala.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/mandala.css";

const images = [
  { id: 1, src: "/images/mandala/mandala1.jpg", title: "Mandala 1" },
  { id: 2, src: "/images/mandala/mandala2.jpg", title: "Mandala 2" },
  { id: 3, src: "/images/mandala/mandala3.jpg", title: "Mandala 3" },
  { id: 4, src: "/images/mandala/mandala4.jpg", title: "Mandala 4" },
  { id: 5, src: "/images/mandala/mandala5.jpg", title: "Mandala 5" },
  { id: 6, src: "/images/mandala/mandala6.jpg", title: "Mandala 6" },
];

const Mandala = () => {
  return (
    <div className="mandala-wrap">
      <div className="mandala-topbar">
        <Link to="/manuscripts" className="mandala-back">
          ← Back to Manuscript Hub
        </Link>
      </div>

      <h1 className="mandala-title">🕉️ Mystic Mandala</h1>
      <p className="mandala-sub">
        Explore sacred mandalas used in Buddhist traditions.
      </p>

      {/* Image Grid */}
      <div className="mandala-grid">
        {images.map((img) => (
          <div key={img.id} className="mandala-card">
            <img src={img.src} alt={img.title} className="mandala-img" />
            <p className="mandala-caption">{img.title}</p>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="mandala-description">
        <h2>✨ What is a Mystic Mandala?</h2>
        <p>
          The mystic mandala is a symbolic representation of the universe in
          Buddhist and Hindu traditions. It is not just an art form but also a
          spiritual map guiding practitioners towards enlightenment. Each line,
          color, and symbol within the mandala carries profound meaning, linking
          the microcosm of human life with the macrocosm of the cosmos.
        </p>
        <p>
          Mandalas are used in meditation, rituals, and as teaching tools.
          Practitioners focus on the intricate patterns to quiet the mind,
          cultivate awareness, and experience deeper levels of consciousness.
          Traditionally, mandalas are created with colored sand, painted on
          walls, or preserved in manuscripts. Their impermanence, especially in
          sand mandalas, teaches the truth of change and non-attachment.
        </p>
        <p>
          Mystic mandalas often depict deities at the center, surrounded by
          concentric layers of geometric shapes. These layers symbolize stages
          of spiritual growth, from the outer worldly distractions to the inner
          realization of truth. Walking into a mandala (conceptually or in
          ritual practice) mirrors the journey of entering one’s own mind and
          transcending illusions.
        </p>
        <p>
          In essence, the mandala is a living symbol of harmony, unity, and
          awakening. Its presence in monasteries, manuscripts, and murals
          reflects its timeless role as a bridge between the seen and the
          unseen, the material and the spiritual, the self and the infinite.
        </p>
      </div>
    </div>
  );
};

export default Mandala;
