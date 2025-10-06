// src/pages/Chants.jsx
import React from "react";
import chantsData from "../data/chantsData"; 
import "./Chants.css";

export default function Chants() {
  return (
    <div className="chants-page">
      <h2>Buddhist Chants & Prayers</h2>
      <p className="subtitle">
        Listen to peaceful Buddhist chants and mantras to calm the mind and soul.
      </p>

      <div className="chants-list">
        {chantsData.map((chant) => (
          <div key={chant.id} className="chant-item">
            <h3>{chant.title}</h3>

            {/* 🎵 Video player with poster */}
            <video 
              controls 
              width="100%" 
              poster={chant.poster} 
              style={{ borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
            >
              <source src={chant.file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}
