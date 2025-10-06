// src/components/MonasteryDetails.jsx
import React, { useState } from "react";
import jsPDF from "jspdf";
import "../styles.css";

export default function MonasteryDetails({ monastery, onClose }) {
  const [mainIndex, setMainIndex] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  const openPreview = () => {
    setShowPreview(true);
  };

  const downloadPDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let y = 20;

    // Title
    pdf.setFontSize(18);
    pdf.text(monastery.name, pageWidth / 2, y, { align: "center" });
    y += 10;

    pdf.setFontSize(12);
    pdf.text(`District: ${monastery.district}`, pageWidth / 2, y, {
      align: "center",
    });
    y += 15;

    // Add first image (if exists)
    if (monastery.images && monastery.images.length > 0) {
      try {
        const img = monastery.images[0];
        const imgElement = new Image();
        imgElement.crossOrigin = "anonymous";
        imgElement.src = img;
        await new Promise((resolve) => {
          imgElement.onload = resolve;
        });
        pdf.addImage(imgElement, "JPEG", 40, y, 130, 80);
        y += 90;
      } catch (err) {
        console.warn("Image failed to load for PDF:", err);
      }
    }

    // Add long description (split into multiple pages if needed)
    pdf.setFontSize(12);
    const lines = pdf.splitTextToSize(monastery.longDescription, pageWidth - 30);

    lines.forEach((line) => {
      if (y > pageHeight - 20) {
        pdf.addPage();
        y = 20;
      }
      pdf.text(line, 15, y);
      y += 7;
    });

    // Add footer with page numbers
    const pageCount = pdf.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setFontSize(10);
      pdf.text(
        `Page ${i} of ${pageCount} — MonasterySphere Report`,
        pageWidth / 2,
        pageHeight - 10,
        { align: "center" }
      );
    }

    pdf.save(`${monastery.id}.pdf`);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="details-grid">
          <div className="gallery-column">
            <img
              src={monastery.images[mainIndex]}
              alt={`${monastery.name} - ${mainIndex + 1}`}
              className="gallery-main"
              onError={(e) => (e.target.src = "/images/placeholder.png")}
            />
            <div className="thumb-row">
              {monastery.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className={`thumb ${i === mainIndex ? "active-thumb" : ""}`}
                  onClick={() => setMainIndex(i)}
                  onError={(e) => (e.target.src = "/images/placeholder.png")}
                  alt={`${monastery.name} ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="info-column">
            <h2 className="highlight-title">{monastery.name}</h2>
            <h4 className="muted">{monastery.district}</h4>
            <p className="lead">{monastery.short}</p>

            <div className="actions-row">
              <button className="btn" onClick={openPreview}>
                🔍 Preview PDF
              </button>
              <button className="btn primary" onClick={downloadPDF}>
                ⤓ Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Simple Preview */}
        {showPreview && (
          <div className="preview-backdrop" onClick={() => setShowPreview(false)}>
            <div className="preview-window" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowPreview(false)}>✕</button>
              <div className="preview-scroll">
                <h1>{monastery.name}</h1>
                <h3>District: {monastery.district}</h3>
                {monastery.images.map((src, i) => (
                  <img key={i} src={src} alt="" className="pdf-image" />
                ))}
                <p style={{ whiteSpace: "pre-line" }}>{monastery.longDescription}</p>
              </div>
              <div className="preview-actions">
                <button className="btn" onClick={() => setShowPreview(false)}>Close Preview</button>
                <button className="btn primary" onClick={downloadPDF}>Download PDF</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
