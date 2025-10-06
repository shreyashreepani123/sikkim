// src/pages/Murals.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "../styles/murals.css";

const images = [
  "/images/murals/mural1.jpg",
  "/images/murals/mural2.jpg",
  "/images/murals/mural3.jpg",
  "/images/murals/mural4.jpg",
  "/images/murals/mural5.jpg",
  "/images/murals/mural6.jpg",
  "/images/murals/mural7.jpg",
  "/images/murals/mural8.jpg",
  "/images/murals/mural9.jpg",
  "/images/murals/mural10.jpg",
  "/images/murals/mural11.jpg",
  "/images/murals/mural12.jpg",
  "/images/murals/mural13.jpg",
  "/images/murals/mural14.jpg",
  "/images/murals/mural15.jpg",
  "/images/murals/mural16.jpg",
  "/images/murals/mural17.jpg",
  "/images/murals/mural18.jpg",
];

const Murals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="murals-wrap">
      <div className="murals-topbar">
        <Link to="/manuscripts" className="murals-back">
          ← Back to Manuscript Hub
        </Link>
      </div>

      <h1 className="murals-title">🖼️ Buddha Murals</h1>
      <p className="murals-sub">
        Explore the sacred wall paintings and murals of monasteries.
      </p>

      {/* Image Gallery */}
      <div className="murals-grid">
        {images.map((src, i) => (
          <div key={i} className="murals-card">
            <img
              src={src}
              alt={`Mural ${i + 1}`}
              className="murals-img"
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(i);
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      {/* Description */}
      <div className="murals-description">
        <h2>✨ About Buddha Murals</h2>
        <p>
          Buddha murals are sacred wall paintings found across monasteries,
          temples, and sacred sites. These artworks are not mere decoration but
          visual scriptures that embody teachings, stories, and symbolic wisdom.
        </p>
        <p>
          The murals often depict the life of Siddhartha Gautama, his journey to
          enlightenment, and important moments like the first sermon at Sarnath
          or the great departure. Each stroke of color carries a narrative
          intended to inspire reflection and devotion.
        </p>
        <p>
          Beyond storytelling, the murals function as meditation tools.
          Practitioners contemplate the scenes to internalize Buddhist
          principles such as compassion, impermanence, and non-attachment. The
          murals serve as windows into the Dharma.
        </p>
        <p>
          In many monasteries, murals also act as protective symbols. Fierce
          deities painted on walls are believed to guard the sacred space from
          negative forces. Their vibrant forms remind visitors of the balance
          between wisdom and power.
        </p>
        <p>
          Over centuries, Buddha murals became historical records, reflecting
          the cultural, regional, and artistic influences of their time. From
          intricate Tibetan thangka-inspired paintings to serene Indian Ajanta
          cave murals, they form a visual lineage of faith and artistry.
        </p>
      </div>
    </div>
  );
};

export default Murals;
