import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Menu, X, ArrowLeft, RotateCcw } from 'lucide-react';
import { useOpening, STAGES } from '../context/OpeningContext';
import { useInteractiveSurface } from '../hooks/useInteractiveSurface';

const sectionLabels = {
  hero: '01 // OVERVIEW',
  work: '02 // SHOWCASE',
  philosophy: '03 // PRINCIPLES',
  about: '04 // DOSSIER',
  future: '05 // ROADMAP'
};

export default function Navigation({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();
  const { stage, isOpeningActive, replayOpening } = useOpening();

  const navGlassRef = useInteractiveSurface({
    mode: 'glass-illuminate'
  });

  const isProjectPage = location.pathname.startsWith('/project/');
  const isNavVisible = isProjectPage || stage >= STAGES.EXPANSION;

  // Scroll detection & section observation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track active visible section when on homepage
    if (!isProjectPage) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: [0.3, 0.6] }
      );

      const sectionIds = ['hero', 'work', 'philosophy', 'about', 'future'];
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isProjectPage]);

  const closeMobile = () => setMobileMenuOpen(false);

  const handleNavAnchor = (e, anchorId) => {
    e.preventDefault();
    closeMobile();

    if (isProjectPage) {
      navigate(`/#${anchorId}`);
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      ref={navGlassRef}
      className={`nav-header glass-header ${scrolled ? 'nav-scrolled' : ''} ${
        isNavVisible ? 'nav-constructed-in' : 'nav-pre-construction'
      }`}
    >
      <div className="container nav-container">
        {/* Brand identity */}
        <Link to="/" className="nav-brand" onClick={closeMobile}>
          <div className="nav-logo-mark">
            <span className="logo-mra">MRA</span>
          </div>
          <div className="nav-brand-text">
            <span className="brand-name">MD RAGIB ASEF</span>
            <span className="brand-role mono">Founder · Product Builder</span>
          </div>
        </Link>

        {/* Dynamic Context Status Instrument */}
        <div className="nav-context-instrument mono" aria-live="polite">
          <span className="context-indicator-dot"></span>
          <span className="context-text">
            {isProjectPage ? 'SPEC // DEEP DIVE' : sectionLabels[activeSection] || '01 // OVERVIEW'}
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop-links" aria-label="Main Navigation">
          <a
            href="/#work"
            className={`nav-link ${activeSection === 'work' && !isProjectPage ? 'nav-link-active' : ''} ${isProjectPage ? 'nav-link-highlight' : ''}`}
            onClick={(e) => handleNavAnchor(e, 'work')}
          >
            Featured Work
          </a>
          <a
            href="/#philosophy"
            className={`nav-link ${activeSection === 'philosophy' && !isProjectPage ? 'nav-link-active' : ''}`}
            onClick={(e) => handleNavAnchor(e, 'philosophy')}
          >
            Philosophy
          </a>
          <a
            href="/#about"
            className={`nav-link ${activeSection === 'about' && !isProjectPage ? 'nav-link-active' : ''}`}
            onClick={(e) => handleNavAnchor(e, 'about')}
          >
            About
          </a>
          <a
            href="/#future"
            className={`nav-link ${activeSection === 'future' && !isProjectPage ? 'nav-link-active' : ''}`}
            onClick={(e) => handleNavAnchor(e, 'future')}
          >
            Roadmap
          </a>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          {isProjectPage && (
            <Link to="/" className="btn btn-ghost nav-back-home-btn btn-tactile">
              <ArrowLeft size={14} />
              <span>All Products</span>
            </Link>
          )}

          <button 
            type="button" 
            className="btn btn-secondary nav-cta-btn btn-tactile"
            onClick={onOpenContact}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="nav-mobile-toggle btn-tactile"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Physical Glass Finish */}
      {mobileMenuOpen && (
        <div className="nav-mobile-drawer glass-drawer">
          <div className="nav-mobile-content">
            <div className="nav-mobile-links">
              <a
                href="/#work"
                className="nav-mobile-link"
                onClick={(e) => handleNavAnchor(e, 'work')}
              >
                <span className="mono">01</span>
                <span>Featured Work</span>
              </a>
              <a
                href="/#philosophy"
                className="nav-mobile-link"
                onClick={(e) => handleNavAnchor(e, 'philosophy')}
              >
                <span className="mono">02</span>
                <span>Philosophy</span>
              </a>
              <a
                href="/#about"
                className="nav-mobile-link"
                onClick={(e) => handleNavAnchor(e, 'about')}
              >
                <span className="mono">03</span>
                <span>About MD Ragib Asef</span>
              </a>
              <a
                href="/#future"
                className="nav-mobile-link"
                onClick={(e) => handleNavAnchor(e, 'future')}
              >
                <span className="mono">04</span>
                <span>Roadmap &amp; Future</span>
              </a>
            </div>

            <div className="nav-mobile-footer">
              <button
                type="button"
                className="btn btn-primary btn-full btn-tactile"
                onClick={() => {
                  closeMobile();
                  onOpenContact();
                }}
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={16} />
              </button>

              <button
                type="button"
                className="btn btn-ghost btn-full mono btn-tactile"
                onClick={() => {
                  closeMobile();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  replayOpening();
                }}
                style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}
              >
                <RotateCcw size={14} />
                <span>Replay Opening Experience</span>
              </button>

              <div className="nav-mobile-status mono">
                <span className="status-dot"></span>
                <span>Systems Active · MD RAGIB ASEF</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
