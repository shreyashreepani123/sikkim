import React, { useEffect, useRef, useState } from "react";
import "./Panorama.css";

const monasteries = [
  { key: "rumtek", label: "Rumtek Monastery" },
  { key: "pemayangtse", label: "Pemayangtse Monastery" },
  { key: "tashiding", label: "Tashiding Monastery" },
  { key: "phodong", label: "Phodong Monastery" },
  { key: "dubdi", label: "Dubdi Monastery" },
  { key: "ralong", label: "Ralong Monastery" },
  { key: "enchey", label: "Enchey Monastery" },
];

export default function Panorama() {
  const [selected, setSelected] = useState(monasteries[0].key);
  const [imgSrc, setImgSrc] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [angle, setAngle] = useState(0);
  const [zoom, setZoom] = useState(1); // controls closeness to the cylinder
  const [isDragging, setIsDragging] = useState(false);

  const stageRef = useRef(null);
  const dragX = useRef(0);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const raf = useRef(0);

  // ---------- Load image ----------
  useEffect(() => {
    let cancel = false;
    const tryExts = async () => {
      const base = `/panorama/${selected}`;
      const exts = [".png", ".jpg", ".jpeg", ".webp"];
      for (const ext of exts) {
        const url = `${base}${ext}`;
        const ok = await imageExists(url);
        if (ok) {
          if (!cancel) {
            setImgSrc(url);
            setLoaded(false);
          }
          return;
        }
      }
      if (!cancel) {
        setImgSrc(`${base}.png`);
        setLoaded(false);
      }
    };
    tryExts();
    return () => {
      cancel = true;
    };
  }, [selected]);

  function imageExists(url) {
    return new Promise((resolve) => {
      const im = new Image();
      im.onload = () => resolve(true);
      im.onerror = () => resolve(false);
      im.src = url + (url.includes("?") ? "&" : "?") + "v=" + Date.now();
    });
  }

  // ---------- Drag / inertia ----------
  useEffect(() => {
    const down = (e) => {
      setIsDragging(true);
      dragX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      lastX.current = dragX.current;
      velocity.current = 0;
      cancelAnimationFrame(raf.current);
    };
    const move = (e) => {
      if (!isDragging) return;
      const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      const dx = x - lastX.current;
      lastX.current = x;
      velocity.current = dx;
      setAngle((a) => a + dx * 0.2); // rotate
    };
    const up = () => {
      if (!isDragging) return;
      setIsDragging(false);
      const step = () => {
        velocity.current *= 0.9;
        if (Math.abs(velocity.current) > 0.1) {
          setAngle((a) => a + velocity.current * 0.2);
          raf.current = requestAnimationFrame(step);
        }
      };
      raf.current = requestAnimationFrame(step);
    };

    const s = stageRef.current;
    s.addEventListener("mousedown", down);
    s.addEventListener("touchstart", down, { passive: true });
    window.addEventListener("mousemove", move, { passive: false });
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      s.removeEventListener("mousedown", down);
      s.removeEventListener("touchstart", down);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
      cancelAnimationFrame(raf.current);
    };
  }, [isDragging]);

  return (
    <div className="pano-page">
      <header className="pano-header">
        <h1>360° Panorama Viewer</h1>
        <div className="chooser">
          <label>Choose a Monastery:&nbsp;</label>
          <select
            className="select"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {monasteries.map((m) => (
              <option key={m.key} value={m.key}>
                {m.label}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div className="pano-card">
        <div className="pano-toolbar">
          <button className="pbtn" onClick={() => setAngle((a) => a - 10)}>⟲</button>
          <button className="pbtn" onClick={() => setAngle((a) => a + 10)}>⟳</button>
          <button className="pbtn" onClick={() => setZoom((z) => z + 0.1)}>➕</button>
          <button className="pbtn" onClick={() => setZoom((z) => Math.max(0.5, z - 0.1))}>➖</button>
        </div>

        <div ref={stageRef} className="stage">
          {!imgSrc ? (
            <div className="pano-empty">Choose a monastery image…</div>
          ) : (
            <>
              {!loaded && <div className="pano-loading">Loading…</div>}
              <img
                src={imgSrc}
                alt="preload"
                className="preload"
                onLoad={() => setLoaded(true)}
              />
              <div className="camera" style={{ transform: `scale(${zoom})` }}>
                <div
                  className="cylinder"
                  style={{
                    transform: `rotateY(${angle}deg)`,
                    backgroundImage: `url(${imgSrc})`,
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
