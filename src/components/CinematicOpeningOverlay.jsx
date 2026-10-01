import React from 'react';
import { useOpening, STAGES } from '../context/OpeningContext';
import { FastForward, Terminal, Sparkles } from 'lucide-react';

export default function CinematicOpeningOverlay() {
  const { stage, isOpeningActive, skipOpening } = useOpening();

  if (!isOpeningActive) return null;

  return (
    <div className={`cinematic-stage-wrap stage-${stage}`} aria-hidden="true">
      {/* Skip Button for User Control */}
      <button
        type="button"
        className="cinematic-skip-btn mono btn-tactile"
        onClick={skipOpening}
        title="Press Escape or click to skip directly to interface"
      >
        <span>Skip Sequence</span>
        <span className="skip-key">[Esc]</span>
      </button>

      {/* Stage 1 & 2: Architectural Hairline Grid & Horizon Laser */}
      <div className="cinematic-horizon-axis" />
      <div className="cinematic-vertical-axis" />

      {/* System Calibration Data Markers */}
      <div className="cinematic-calibration-hud mono">
        <div className="hud-corner top-left">
          <span className="hud-tag text-cyan">+ SYSTEM RUNTIME</span>
          <span className="hud-metric">BUILD_VER // 2.4.0-PROD</span>
        </div>
        <div className="hud-corner top-right">
          <span className="hud-tag">STATUS // CALIBRATING</span>
          <span className="hud-metric">Z-INDEX // 6-LAYER DEPTH</span>
        </div>
        <div className="hud-corner bottom-left">
          <span className="hud-tag text-emerald">&bull; ARCHITECTURAL AXES</span>
          <span className="hud-metric">LATENCY // 1.2ms OPTICAL</span>
        </div>
        <div className="hud-corner bottom-right">
          <span className="hud-tag text-amber">WORKSPACE // ACTIVE</span>
          <span className="hud-metric">MD RAGIB ASEF</span>
        </div>
      </div>

      {/* Stage 3: Spatial Glass Construction Shards (Materializing & Locking into 3D Space) */}
      <div className="glass-construction-field">
        {/* Left Flanking Glass Prism */}
        <div className="construction-shard shard-left">
          <div className="shard-specular-edge" />
          <div className="shard-inner-grid" />
        </div>

        {/* Right Flanking Glass Prism */}
        <div className="construction-shard shard-right">
          <div className="shard-specular-edge" />
          <div className="shard-inner-grid" />
        </div>

        {/* Center Framing Lens (Precursor to the Live Header) */}
        <div className="construction-shard shard-center-lens">
          <div className="shard-specular-edge" />
        </div>
      </div>

      {/* Stage 4: Central Laser Framing Aperture */}
      <div className="cinematic-center-aperture">
        <div className="aperture-bracket top-left" />
        <div className="aperture-bracket top-right" />
        <div className="aperture-bracket bottom-left" />
        <div className="aperture-bracket bottom-right" />
      </div>
    </div>
  );
}
