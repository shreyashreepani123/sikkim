// src/pages/Journals.jsx
import React, { useState } from "react";
import "../styles/journals.css";
import { Link } from "react-router-dom";

const journals = [
  { title: "Deepakshi_Sharma", file: "/journals/Deepakshi_Sharma.pdf" },
  { title: "Journal on Sikkim Heritage", file: "/journals/Journal on sikkim heritage.pdf" },
  { title: "Journal on Sikkim", file: "/journals/journal on sikkim.pdf" },
  { title: "Live Optimized 2021 FLRS Updated Catalogue", file: "/journals/Live optimized 2021 FLRS updated catalogue.pdf" },
  { title: "Published Oral History Series English", file: "/journals/Published Oral History Series English.pdf" },
  { title: "Tibet Journal 2013 No.1 and 2", file: "/journals/Tibet-Journal-2013-No.1-and-2.pdf" },
  { title: "Tibet Journal 2013 Vol 38 No 3 and 4", file: "/journals/Tibet-Journal-2013-Vol 38 No 3and4.pdf" },
  { title: "Tibet Journal Full 2018", file: "/journals/tibet-journal-full-2018.pdf" },
];


const Journals = () => {
  const [selectedJournal, setSelectedJournal] = useState(null);

  return (
    <div className="journals-wrap">
      {/* Back link */}
      <div className="journals-topbar">
        <Link to="/dashboard" className="back-link">← Back to Dashboard</Link>
      </div>

      <h1 className="journals-title">📚 Digital Journals of Sikkim</h1>
      <p className="journals-sub">Preview and download rare journals and research works</p>

      {/* Journals Grid */}
      <div className="journals-grid">
        {journals.map((j, i) => (
          <div key={i} className="journal-card">
            <h3>{j.title}</h3>
            <div className="btn-group">
              <button onClick={() => setSelectedJournal(j.file)}>Preview</button>
              <a href={j.file} download className="download-btn">Download</a>
            </div>
          </div>
        ))}
      </div>

      {/* PDF Preview */}
      {selectedJournal && (
        <div className="pdf-viewer">
          <h2>📖 Preview</h2>
          <iframe src={selectedJournal} title="PDF Preview" frameBorder="0"></iframe>
          <button className="close-btn" onClick={() => setSelectedJournal(null)}>Close Preview</button>
        </div>
      )}

      {/* Description Section */}
      <div className="journals-description">
        <h2>✨ About Sikkim Journals</h2>
        <p>Journals in Sikkim form a crucial part of documenting its cultural, spiritual, and historical evolution.</p>
        <p>They record not only scholarly research but also oral histories and traditional practices.</p>
        <p>Many journals feature Buddhist philosophy, rare manuscripts, and teachings preserved for centuries.</p>
        <p>They serve as a bridge between traditional knowledge and modern scholarship.</p>
        <p>Sikkim’s journals highlight cross-cultural interactions within the Himalayan belt.</p>
        <p>They cover linguistic studies of Lepcha, Bhutia, and Nepali heritage.</p>
        <p>Rare Tibetan journals provide insight into Buddhist cosmology and rituals.</p>
        <p>Modern journals explore social, political, and environmental aspects of Sikkim.</p>
        <p>They act as archives of lived experiences of monks, scholars, and local people.</p>
        <p>The Tibet Journal, for instance, is globally recognized for its academic depth.</p>
        <p>Digitized journals preserve fragile pages from decay and inaccessibility.</p>
        <p>They are essential for researchers working on Himalayan studies worldwide.</p>
        <p>Many include translated works, making knowledge accessible beyond local languages.</p>
        <p>Students of anthropology and history rely on these journals for research.</p>
        <p>They also document festivals, rituals, and monastic traditions of the region.</p>
        <p>Environmental journals focus on Sikkim’s biodiversity and ecology.</p>
        <p>Oral history journals safeguard voices of elders and community leaders.</p>
        <p>These works ensure cultural continuity amidst globalization pressures.</p>
        <p>They are a testament to the resilience and wisdom of Himalayan traditions.</p>
        <p>Thus, Sikkim’s journals are not mere records, but living repositories of identity and heritage.</p>
      </div>
    </div>
  );
};

export default Journals;
