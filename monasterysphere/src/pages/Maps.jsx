// src/pages/Maps.jsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// 25 monasteries (expandable to 100 later)
const monasteries = [
  { name: "Rumtek Monastery", lat: 27.3172, lng: 88.6065 },
  { name: "Pemayangtse Monastery", lat: 27.2811, lng: 88.2392 },
  { name: "Tashiding Monastery", lat: 27.2824, lng: 88.2949 },
  { name: "Phodong Monastery", lat: 27.4214, lng: 88.606 },
  { name: "Dubdi Monastery", lat: 27.3181, lng: 88.2321 },
  { name: "Ralong Monastery", lat: 27.2915, lng: 88.3647 },
  { name: "Enchey Monastery", lat: 27.342, lng: 88.6135 },
  { name: "Lingdum (Ranka) Monastery", lat: 27.3305, lng: 88.6722 },
  { name: "Zurmang Kagyud Monastery", lat: 27.3381, lng: 88.6105 },
  { name: "Phensang Monastery", lat: 27.4059, lng: 88.6293 },
  { name: "Kartok Monastery", lat: 27.3082, lng: 88.2622 },
  { name: "Sanga Choeling Monastery", lat: 27.309, lng: 88.2391 },
  { name: "Khecheopalri Monastery", lat: 27.3653, lng: 88.2136 },
  { name: "Yangthang Rinpoche Monastery", lat: 27.3012, lng: 88.2235 },
  { name: "Gonjang Monastery", lat: 27.3882, lng: 88.6061 },
  { name: "Toling Monastery", lat: 27.3525, lng: 88.6231 },
  { name: "Rinchenpong Monastery", lat: 27.2967, lng: 88.1995 },
  { name: "Pal Zurmang Kagyud Monastery", lat: 27.3378, lng: 88.6132 },
  { name: "Ngadak Monastery", lat: 27.3066, lng: 88.3622 },
  { name: "Samdruptse Monastery", lat: 27.2965, lng: 88.3639 },
  { name: "Namchi Monastery", lat: 27.2845, lng: 88.3635 },
  { name: "Tendong Monastery", lat: 27.2905, lng: 88.391 },
  { name: "Bon Monastery (Kewzing)", lat: 27.2745, lng: 88.3271 },
  { name: "Serdup Choling Monastery", lat: 27.3102, lng: 88.2379 },
  { name: "Ralang Palchen Choling Monastery", lat: 27.2962, lng: 88.3659 },
];

export default function Maps() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleDirections = () => {
    if (start && end) {
      const url = `https://www.google.com/maps/dir/${encodeURIComponent(
        start
      )}/${encodeURIComponent(end)}`;
      window.open(url, "_blank");
    } else {
      alert("Please enter your location and select a monastery.");
    }
  };

  return (
    <div className="page-container">
      <h2 className="section-title center">
        Explore Monasteries of Sikkim <span>🏯</span>
      </h2>

      {/* Directions Form */}
      <div className="directions-box center">
        <input
          type="text"
          placeholder="Enter your location"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          style={{ marginRight: "10px", padding: "8px", width: "250px" }}
        />
        <select
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          style={{ marginRight: "10px", padding: "8px", width: "250px" }}
        >
          <option value="">Select a Monastery</option>
          {monasteries.map((m, i) => (
            <option key={i} value={`${m.lat},${m.lng}`}>
              {m.name}
            </option>
          ))}
        </select>
        <button className="btn primary" onClick={handleDirections}>
          Show Directions
        </button>
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
          Select your current location and a monastery from the list. <br />
          You’ll be redirected to Google Maps with driving directions.
        </p>
      </div>

      {/* Map with monastery pins */}
      <MapContainer
        center={[27.33, 88.62]}
        zoom={9}
        style={{ height: "600px", width: "100%", borderRadius: "10px", marginTop: "20px" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {monasteries.map((m, i) => (
          <Marker key={i} position={[m.lat, m.lng]}>
            <Popup>
              <b>{m.name}</b>
              <br />
              Lat: {m.lat}, Lng: {m.lng}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
