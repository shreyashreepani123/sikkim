// src/pages/Dashboard.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const name = user?.username || "Explorer";

  const features = [
    { name: "Monasteries", icon: "🏯", link: "/monasteries" },
    { name: "Manuscripts", icon: "📜", link: "/manuscripts" },
    { name: "Maps", icon: "🗺️", link: "/maps" },
    { name: "Teachings", icon: "📖", link: "/teachings" },
    { name: "Tourism", icon: "🌏", link: "/tourism" },
    { name: "Panorama", icon: "📸", link: "/panorama" },
    { name: "AI Chatbot", icon: "🤖", link: "/chatbot" },
    { name: "Buddha Chants", icon: "🎵", link: "/chants" },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Welcome to MonasterySphere, {name} 👋</h1>
      <p className="dashboard-subtitle">
        Explore monasteries, manuscripts, maps, and more. A website built with love...
      </p>

      <div className="features-grid fixed-grid">
        {features.map((item) => (
          <Link key={item.name} to={item.link} className="feature-card">
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.name}</h3>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button onClick={logout} className="auth-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
