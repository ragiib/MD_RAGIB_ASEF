import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Terminal, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import ProjectVisual from './ProjectVisual';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="badge badge-cyan mono">{project.category}</span>
            <span className="modal-version mono">{project.statusBadge}</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Visual Header */}
        <div className="modal-visual-hero">
          <ProjectVisual type={project.visualType} title={project.title} />
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-title-row">
            <div>
              <h3 className="modal-title">{project.title}</h3>
              <p className="modal-tagline">{project.tagline}</p>
            </div>
            <div className="modal-pricing-tag">
              <span className="badge badge-emerald">{project.pricing}</span>
            </div>
          </div>

          <div className="modal-divider" />

          {/* Description */}
          <div className="modal-section">
            <h4 className="modal-section-title">Overview &amp; Purpose</h4>
            <p className="modal-description-text">{project.description}</p>
          </div>

          {/* Key Architecture Features */}
          {project.features && (
            <div className="modal-section">
              <h4 className="modal-section-title">Architecture Highlights</h4>
              <ul className="modal-features-list">
                {project.features.map((feat, i) => (
                  <li key={i} className="modal-feature-item">
                    <CheckCircle2 size={16} className="feature-check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Stats Grid */}
          {project.stats && (
            <div className="modal-stats-row">
              {project.stats.map((s, i) => (
                <div key={i} className="modal-stat-box">
                  <span className="stat-label">{s.label}</span>
                  <span className="stat-value mono">{s.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div className="modal-section">
            <h4 className="modal-section-title">Technology Foundation</h4>
            <div className="modal-tech-stack">
              {project.techTags.map((tag) => (
                <span key={tag} className="tech-tag mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="modal-footer">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <GithubIcon size={16} />
            <span>Source Code</span>
          </a>
          <a
            href={project.demoUrl}
            className="btn btn-primary"
            onClick={(e) => {
              if (project.demoUrl === '#') {
                e.preventDefault();
                alert(`Interactive demo environment for ${project.title} will be live in Phase 2.`);
              }
            }}
          >
            <span>Launch Web App</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
