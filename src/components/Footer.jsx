import React from 'react';
import { ArrowUp, Mail, Terminal, Heart, RotateCcw } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './BrandIcons';
import { useOpening } from '../context/OpeningContext';

export default function Footer({ onOpenContact }) {
  const { replayOpening } = useOpening();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Tier: Brand, Identity & Actions */}
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <div className="footer-brand-title">
              <span className="footer-name">MD RAGIB ASEF</span>
              <span className="footer-role mono">Founder · Developer · Product Builder</span>
            </div>
            <p className="footer-brand-tagline">
              Building software, tools, and digital experiences from the ground up.
            </p>
            <div className="footer-status-pill glass-panel-pill">
              <span className="status-dot"></span>
              <span className="mono">Open to technical advisory &amp; product building</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-col">
            <span className="footer-col-title mono">INDEX</span>
            <ul className="footer-links-list">
              <li><a href="#hero">Overview</a></li>
              <li><a href="#work">Featured Work</a></li>
              <li><a href="#philosophy">Engineering Philosophy</a></li>
              <li><a href="#about">About Ragib</a></li>
              <li><a href="#future">Roadmap &amp; Vision</a></li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="footer-socials-col">
            <span className="footer-col-title mono">CONNECT</span>
            <div className="footer-social-links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn btn-tactile"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn btn-tactile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <button
                type="button"
                className="social-btn btn-tactile"
                onClick={onOpenContact}
                aria-label="Send direct email"
              >
                <Mail size={18} />
                <span>Email Direct</span>
              </button>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn btn-tactile"
                aria-label="X (Twitter) Profile"
              >
                <TwitterXIcon size={18} />
                <span>X / Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Tier: Copyright, Replay Action & Back to Top */}
        <div className="footer-bottom-row">
          <div className="footer-copyright mono">
            &copy; {currentYear} MD RAGIB ASEF. All rights reserved.
          </div>

          <button
            type="button"
            className="footer-replay-btn mono btn-tactile"
            onClick={() => {
              scrollToTop();
              replayOpening();
            }}
            title="Replay cinematic opening sequence"
          >
            <RotateCcw size={13} className="text-cyan" />
            <span>Replay Cinematic Sequence</span>
          </button>

          <button
            type="button"
            className="footer-back-to-top btn-tactile"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
