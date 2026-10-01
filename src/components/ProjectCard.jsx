import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Zap, ShoppingBag, Terminal, Sparkles } from 'lucide-react';
import ProjectVisual from './ProjectVisual';

export default function ProjectCard({
  project,
  isFocused,
  isReceded,
  onHoverStart,
  onHoverEnd
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Smooth, controlled 3D tilt angles
      const rotateX = ((y - centerY) / centerY) * -4.5;
      const rotateY = ((x - centerX) / centerX) * 4.5;

      setTransformStyle(`perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`);
      setMousePos({
        x: Math.round((x / rect.width) * 100),
        y: Math.round((y / rect.height) * 100)
      });
    }
  };

  const handleMouseEnter = () => {
    if (onHoverStart) onHoverStart(project.id);
  };

  const handleMouseLeave = () => {
    setTransformStyle('');
    if (onHoverEnd) onHoverEnd();
  };

  const getPricingBadgeClass = (type) => {
    switch (type) {
      case 'free':
        return 'badge-emerald';
      case 'freemium':
        return 'badge-indigo';
      case 'paid':
        return 'badge-amber';
      default:
        return 'badge-cyan';
    }
  };

  return (
    <article
      ref={cardRef}
      className={`project-card product-showcase-card glass-card-material ${
        isFocused ? 'card-field-focused' : ''
      } ${isReceded ? 'card-field-receded' : ''}`}
      style={{
        transform: transformStyle,
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Physical Glass Specular Bevel & Light Refraction Sheen */}
      <div className="card-glass-specular" aria-hidden="true" />
      <div className="card-ambient-glow" aria-hidden="true" />

      {/* Layer 1: Visual Mockup Viewport with independent Parallax depth (Z: 24px) */}
      <Link
        to={`/project/${project.slug}`}
        className="project-card-visual layer-parallax-depth"
        aria-label={`View full details for ${project.name}`}
      >
        <ProjectVisual type={project.visualType} title={project.name} />
        <div className="card-visual-overlay">
          <span className="visual-inspect-btn">
            <span>Explore Specification</span>
            <ArrowRight size={15} />
          </span>
        </div>
      </Link>

      {/* Layer 2: Card Content & Metadata (Z: 14px) */}
      <div className="project-card-body layer-parallax-mid">
        {/* Category & Status Bar */}
        <div className="project-card-meta">
          <span className="project-category mono">{project.category}</span>
          <span className={`badge ${getPricingBadgeClass(project.pricingType)}`}>
            {project.pricing}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="project-card-title">
          <Link to={`/project/${project.slug}`} className="project-title-link">
            {project.name}
          </Link>
        </h3>
        <p className="project-card-tagline">{project.tagline}</p>

        {/* Supported Platforms Strip */}
        {project.platforms && (
          <div className="card-platforms-strip">
            <span className="platforms-mini-label mono">PLATFORMS:</span>
            <div className="platforms-pills-wrap">
              {project.platforms.map((plat) => (
                <span key={plat} className="platform-mini-pill mono">
                  {plat}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Technical Key Stats */}
        {project.stats && (
          <div className="project-stats-grid">
            {project.stats.map((stat, i) => (
              <div key={i} className="project-stat-item">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-val mono">{stat.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technology Tag Stack */}
        <div className="project-tech-tags" aria-label="Technology Stack">
          {project.techTags.map((tech) => (
            <span key={tech} className="tech-tag mono">
              {tech}
            </span>
          ))}
        </div>

        {/* Card Footer Interaction (Z: 28px) */}
        <div className="project-card-footer layer-parallax-high">
          <Link
            to={`/project/${project.slug}`}
            className="btn btn-primary btn-card-action btn-tactile"
            aria-label={`View full product details for ${project.name}`}
          >
            <span>Explore Product</span>
            <ArrowRight size={15} />
          </Link>

          <span className="project-status-note mono">
            {project.statusBadge || project.version}
          </span>
        </div>
      </div>
    </article>
  );
}
