import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Menu, X, ArrowLeft, Layers } from 'lucide-react';

export default function Navigation({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isProjectPage = location.pathname.startsWith('/project/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`nav-header ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand identity */}
        <Link to="/" className="nav-brand" onClick={closeMobile}>
          <div className="nav-logo-mark">
            <span className="logo-mra">MRA</span>
          </div>
          <div className="nav-brand-text">
            <span className="brand-name">MD RAGIB ASEF</span>
            <span className="brand-role">Founder · Product Builder</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop-links" aria-label="Main Navigation">
          <a
            href="/#work"
            className={`nav-link ${isProjectPage ? 'nav-link-highlight' : ''}`}
            onClick={(e) => handleNavAnchor(e, 'work')}
          >
            Featured Work
          </a>
          <a
            href="/#philosophy"
            className="nav-link"
            onClick={(e) => handleNavAnchor(e, 'philosophy')}
          >
            Philosophy
          </a>
          <a
            href="/#about"
            className="nav-link"
            onClick={(e) => handleNavAnchor(e, 'about')}
          >
            About
          </a>
          <a
            href="/#future"
            className="nav-link"
            onClick={(e) => handleNavAnchor(e, 'future')}
          >
            Roadmap
          </a>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          {isProjectPage && (
            <Link to="/" className="btn btn-ghost nav-back-home-btn">
              <ArrowLeft size={14} />
              <span>All Products</span>
            </Link>
          )}

          <button 
            type="button" 
            className="btn btn-secondary nav-cta-btn"
            onClick={onOpenContact}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="nav-mobile-drawer">
          <div className="nav-mobile-content">
            <div className="nav-mobile-links">
              <a
                href="/#work"
                className="nav-mobile-link"
                onClick={(e) => handleNavAnchor(e, 'work')}
              >
                <span>01</span>
                <span>Featured Work</span>
              </a>
              <a
                href="/#philosophy"
                className="nav-mobile-link"
                onClick={(e) => handleNavAnchor(e, 'philosophy')}
              >
                <span>02</span>
                <span>Philosophy</span>
              </a>
              <a
                href="/#about"
                className="nav-mobile-link"
                onClick={(e) => handleNavAnchor(e, 'about')}
              >
                <span>03</span>
                <span>About MD Ragib Asef</span>
              </a>
              <a
                href="/#future"
                className="nav-mobile-link"
                onClick={(e) => handleNavAnchor(e, 'future')}
              >
                <span>04</span>
                <span>Roadmap &amp; Future</span>
              </a>
            </div>

            <div className="nav-mobile-footer">
              <button
                type="button"
                className="btn btn-primary btn-full"
                onClick={() => {
                  closeMobile();
                  onOpenContact();
                }}
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={16} />
              </button>
              <div className="nav-mobile-status">
                <span className="status-dot"></span>
                <span>Building software &amp; tools</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
