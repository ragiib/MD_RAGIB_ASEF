import React from 'react';
import { ArrowDown, ArrowUpRight, Code2, Terminal, Sparkles, User, Box } from 'lucide-react';
import HeroCanvas from './HeroCanvas';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Animated Subtle Canvas Background */}
      <HeroCanvas />

      <div className="container hero-container">
        {/* Availability Badge */}
        <div className="hero-badge-wrap animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="badge badge-cyan hero-badge">
            <span className="status-dot"></span>
            <span>Founder &amp; Independent Software Engineer</span>
          </div>
        </div>

        {/* Primary Identity Headline */}
        <div className="hero-content">
          <h1 className="hero-name animate-slide-up" style={{ animationDelay: '200ms' }}>
            MD RAGIB ASEF
          </h1>

          <div className="hero-role-wrapper animate-slide-up" style={{ animationDelay: '300ms' }}>
            <span className="hero-role-tag">Founder</span>
            <span className="hero-role-separator">·</span>
            <span className="hero-role-tag">Developer</span>
            <span className="hero-role-separator">·</span>
            <span className="hero-role-tag">Product Builder</span>
          </div>

          <p className="hero-statement animate-slide-up" style={{ animationDelay: '400ms' }}>
            Building software, tools, and digital experiences from the ground up.
          </p>

          {/* Primary Action Buttons */}
          <div className="hero-actions animate-slide-up" style={{ animationDelay: '500ms' }}>
            <button
              type="button"
              className="btn btn-primary hero-btn-main"
              onClick={() => scrollTo('work')}
            >
              <span>Explore My Work</span>
              <ArrowDown size={17} className="btn-icon-down" />
            </button>

            <button
              type="button"
              className="btn btn-secondary hero-btn-sub"
              onClick={() => scrollTo('about')}
            >
              <User size={16} />
              <span>About Me</span>
            </button>
          </div>
        </div>

        {/* Technical Signals / Architecture Strip */}
        <div className="hero-telemetry animate-fade-in" style={{ animationDelay: '650ms' }}>
          <div className="telemetry-item">
            <span className="telemetry-label">
              <span className="mono">01</span> / Core Focus
            </span>
            <span className="telemetry-value">Full-Stack Systems &amp; Developer Tools</span>
          </div>
          <div className="telemetry-divider" />
          <div className="telemetry-item">
            <span className="telemetry-label">
              <span className="mono">02</span> / Execution
            </span>
            <span className="telemetry-value">From Zero to Production Software</span>
          </div>
          <div className="telemetry-divider" />
          <div className="telemetry-item">
            <span className="telemetry-label">
              <span className="mono">03</span> / Philosophy
            </span>
            <span className="telemetry-value">Utility, Durability &amp; High Craft</span>
          </div>
        </div>
      </div>
    </section>
  );
}
