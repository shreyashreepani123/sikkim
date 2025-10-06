// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Global Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Monasteries from "./pages/Monasteries";
import Maps from "./pages/Maps";
import Teachings from "./pages/Teachings";
import Tourism from "./pages/Tourism";
import Tourist from "./pages/Tourist";
import Panorama from "./pages/Panorama";
import Chants from "./pages/Chants";
import Chatbot from "./pages/Chatbot";

// ✅ Manuscript-related pages
import ManuscriptMain from "./pages/ManuscriptMain";
import Manuscripts from "./pages/Manuscripts";
import Mandala from "./pages/Mandala";
import Murals from "./pages/Murals";
import Journals from "./pages/Journals";
import Archive from "./pages/DigitalArchive";

// Protected route wrapper
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          {/* Default route → Dashboard (protected) */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Explicit dashboard route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected feature routes */}
          <Route
            path="/monasteries"
            element={
              <ProtectedRoute>
                <Monasteries />
              </ProtectedRoute>
            }
          />
          <Route
            path="/maps"
            element={
              <ProtectedRoute>
                <Maps />
              </ProtectedRoute>
            }
          />

          {/* ✅ Manuscript Hub + Sub-Pages */}
          <Route
            path="/manuscripts"
            element={
              <ProtectedRoute>
                <ManuscriptMain />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manuscripts/list"
            element={
              <ProtectedRoute>
                <Manuscripts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manuscripts/mandala"
            element={
              <ProtectedRoute>
                <Mandala />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manuscripts/murals"
            element={
              <ProtectedRoute>
                <Murals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manuscripts/journals"
            element={
              <ProtectedRoute>
                <Journals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manuscripts/archive"
            element={
              <ProtectedRoute>
                <Archive />
              </ProtectedRoute>
            }
          />

          <Route
            path="/teachings"
            element={
              <ProtectedRoute>
                <Teachings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tourism"
            element={
              <ProtectedRoute>
                <Tourism />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tourist"
            element={
              <ProtectedRoute>
                <Tourist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/panorama"
            element={
              <ProtectedRoute>
                <Panorama />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chants"
            element={
              <ProtectedRoute>
                <Chants />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chatbot"
            element={
              <ProtectedRoute>
                <Chatbot />
              </ProtectedRoute>
            }
          />

          {/* Fallback: redirect unknown routes to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
