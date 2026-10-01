import React, { useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Code2, Terminal, Sparkles, User, Box, Shield, Zap } from 'lucide-react';
import HeroCanvas from './HeroCanvas';
import { useOpening, STAGES } from '../context/OpeningContext';
import { useInteractiveSurface } from '../hooks/useInteractiveSurface';

function MagneticHeroButton({ children, className, onClick, ...props }) {
  const btnRef = useInteractiveSurface({
    mode: 'magnetic-surface',
    maxDistance: 6,
    proximityRange: 120
  });

  return (
    <button
      ref={btnRef}
      type="button"
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });
  const { stage, isOpeningActive, replayOpening } = useOpening();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLightPos({ x: Math.round(x), y: Math.round(y) });
  };

  // Determine reveal classes based on choreographed stage
  const isNameRevealed = stage >= STAGES.NAME_REVEAL;
  const isIdentityRevealed = stage >= STAGES.IDENTITY_REVEAL;
  const isUiExpanded = stage >= STAGES.EXPANSION;

  return (
    <section
      className={`hero-section ${isOpeningActive ? 'hero-cinematic-mode' : ''} stage-${stage}`}
      id="hero"
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      style={{
        '--hero-light-x': `${lightPos.x}%`,
        '--hero-light-y': `${lightPos.y}%`
      }}
    >
      {/* Animated Subtle Canvas Background */}
      <HeroCanvas />

      {/* Atmospheric Depth Vignette & Horizon Ambient Beam */}
      <div className="hero-light-cone" aria-hidden="true" />
      <div className="hero-ambient-horizon" aria-hidden="true" />

      <div className="container hero-container">
        {/* Availability Badge — Revealed in Stage 5 */}
        <div className={`hero-badge-wrap ${isUiExpanded ? 'hero-elem-revealed' : 'hero-elem-hidden'}`}>
          <div className="badge badge-cyan hero-badge glass-panel-pill">
            <span className="status-dot"></span>
            <span className="hero-badge-text">Founder &amp; Independent Software Engineer</span>
            <span className="badge-pipe mono">//</span>
            <span className="badge-tag mono">PIPELINE ACTIVE</span>
          </div>
        </div>

        {/* Primary Identity Headline with Choreographed Reveal (Stage 4) */}
        <div className="hero-content">
          <div className="hero-title-group">
            <h1
              className={`hero-name signature-name ${
                isNameRevealed ? 'name-awakened' : 'name-dormant'
              }`}
            >
              <span className="hero-name-mark mono" title="Initials Monogram">
                <span className="mark-laser-clip" />
                MD
              </span>
              <span className="hero-name-primary">
                <span className="name-letter-construct">RAGIB ASEF</span>
              </span>
            </h1>
          </div>

          {/* Identity Subhead — Revealed in Stage 5 */}
          <div
            className={`hero-role-wrapper ${
              isIdentityRevealed ? 'role-revealed' : 'role-dormant'
            }`}
          >
            <span className="hero-role-tag">Founder</span>
            <span className="hero-role-separator">·</span>
            <span className="hero-role-tag">Developer</span>
            <span className="hero-role-separator">·</span>
            <span className="hero-role-tag">Product Builder</span>
          </div>

          {/* Mission Statement — Revealed in Stage 5 */}
          <p
            className={`hero-statement ${
              isIdentityRevealed ? 'statement-revealed' : 'statement-dormant'
            }`}
          >
            Building software, tools, and digital experiences from the ground up.
          </p>

          {/* Primary Action Buttons — Revealed in Stage 6 */}
          <div
            className={`hero-actions ${
              isUiExpanded ? 'actions-revealed' : 'actions-dormant'
            }`}
          >
            <MagneticHeroButton
              className="btn btn-primary hero-btn-main btn-tactile"
              onClick={() => scrollTo('work')}
            >
              <span>Explore My Work</span>
              <ArrowDown size={17} className="btn-icon-down" />
            </MagneticHeroButton>

            <MagneticHeroButton
              className="btn btn-secondary hero-btn-sub btn-tactile"
              onClick={() => scrollTo('about')}
            >
              <User size={16} />
              <span>About Me</span>
            </MagneticHeroButton>
          </div>
        </div>

        {/* Technical Signals / Architecture Strip — Anchors in Stage 6 */}
        <div
          className={`hero-telemetry glass-panel ${
            isUiExpanded ? 'telemetry-revealed' : 'telemetry-dormant'
          }`}
        >
          <div className="telemetry-item">
            <span className="telemetry-label">
              <span className="mono text-cyan">01</span> / Core Focus
            </span>
            <span className="telemetry-value">Full-Stack Systems &amp; Developer Tools</span>
          </div>
          <div className="telemetry-divider" />
          <div className="telemetry-item">
            <span className="telemetry-label">
              <span className="mono text-cyan">02</span> / Execution
            </span>
            <span className="telemetry-value">From Zero to Production Software</span>
          </div>
          <div className="telemetry-divider" />
          <div className="telemetry-item">
            <span className="telemetry-label">
              <span className="mono text-cyan">03</span> / Philosophy
            </span>
            <span className="telemetry-value">Utility, Durability &amp; High Craft</span>
          </div>
        </div>
      </div>
    </section>
  );
}
