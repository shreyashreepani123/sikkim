// src/pages/Tourism.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tourism.css";  // ✅ import CSS

export default function Tourism() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Tourism in Sikkim</h2>
      <p>
        Explore monasteries, breathtaking treks, lakes, cultural festivals, and
        experiences that make Sikkim a unique destination for travelers. From
        the serene beauty of Tsomgo Lake to the vibrant festivals of Gangtok,
        every journey in Sikkim is filled with adventure, spirituality, and
        natural wonders.
      </p>

      <button onClick={() => navigate("/tourist")}>
        Explore 25 Best Things to Do
      </button>
    </div>
  );
}
