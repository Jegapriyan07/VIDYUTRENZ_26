import React, { useEffect, useState } from "react";
import "./ECELoader.css";

const ECELoader = ({ onFinish }) => {
  const [status, setStatus] = useState("PHASE 1: GENERATING SCHEMATIC...");
  const [fade, setFade] = useState(false);
  const [powerOn, setPowerOn] = useState(false);

  useEffect(() => {
    // Timeline of events
    setTimeout(() => setStatus("PHASE 2: ROUTING PCB TRACES..."), 1500);
    
    setTimeout(() => {
        setStatus("PHASE 3: APPLYING VOLTAGE...");
        setPowerOn(true); // Triggers neon glow effect
    }, 3000);

    setTimeout(() => setStatus("SYSTEM ONLINE."), 4200);

    // Finish sequence
    const finishTimer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 800); // Wait extended to match CSS transition
    }, 5000);

    return () => clearTimeout(finishTimer);
  }, [onFinish]);

  return (
    <div className={`ece-loader ${fade ? "fade-out" : ""} ${powerOn ? "powered-up" : ""}`}>
      <div className="blueprint-grid"></div>
      
      {/* Container is now scaled massively in CSS */}
      <div className="schematic-container">
        {/* THE CENTRAL IC CHIP */}
        <div className="chip-schematic">
            {/* UPDATED TEXT AND FONT APPPLIED VIA CSS */}
            <span className="chip-label">  SYMPO-2026</span>
            <div className="chip-pin pin-l1"></div>
            <div className="chip-pin pin-l2"></div>
            <div className="chip-pin pin-r1"></div>
            <div className="chip-pin pin-r2"></div>
        </div>

        <svg className="schematic-svg" viewBox="0 0 400 300">
            {/* Path 1: Top Left Input */}
            <path className="schematic-trace trace-1" d="M 50 100 L 150 100 L 150 130" />
            <rect className="component resistor r1" x="40" y="90" width="20" height="20" />
            
            {/* Path 2: Bottom Left Input */}
            <path className="schematic-trace trace-2" d="M 50 200 L 150 200 L 150 170" />
            <circle className="component capacitor c1" cx="50" cy="200" r="12" />

            {/* Path 3: Top Right Output */}
            <path className="schematic-trace trace-3" d="M 250 130 L 250 100 L 350 100" />
            <rect className="component resistor r2" x="340" y="90" width="20" height="20" />

            {/* Path 4: Bottom Right Output to Ground */}
            <path className="schematic-trace trace-4" d="M 250 170 L 250 220 L 350 220" />
            <path className="component ground g1" d="M 340 220 L 360 220 M 345 225 L 355 225 M 348 230 L 352 230" />
        </svg>
      </div>

      <div className="status-panel">
        <div className="status-indicator"></div>
        <p className="status-text">{status}</p>
      </div>

    </div>
  );
};

export default ECELoader;