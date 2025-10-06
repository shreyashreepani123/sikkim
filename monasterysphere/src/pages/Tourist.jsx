import React, { useState } from "react";
import touristData from "../data/touristData"; // make sure path is correct
import "./Tourist.css";

export default function Tourist() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  function openModal(item) {
    setActiveItem(item);
    setModalOpen(true);
    // prevent body scroll while modal is open
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setModalOpen(false);
    setActiveItem(null);
    document.body.style.overflow = "";
  }

  return (
    <div className="tourist-page">
      <h2>25 Best Things to Do in Sikkim</h2>

      <div className="tourist-list">
        {touristData.map((item) => (
          <article className="tourist-item" key={item.id}>
            <h3>{item.title}</h3>

            {/* central image with class for CSS targeting */}
            <img
              className="tourist-photo"
              src={item.image}
              alt={item.title}
              loading="lazy"
              onClick={() => openModal(item)}
            />

            <p className="tourist-text">{item.description}</p>
          </article>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {modalOpen && activeItem && (
        <div className="modal" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close">&times;</button>
            <img src={activeItem.image} alt={activeItem.title} />
            <h3>{activeItem.title}</h3>
            <p>{activeItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
