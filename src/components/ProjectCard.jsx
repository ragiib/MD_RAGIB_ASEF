import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Check, Sparkles, ExternalLink, Code2, Monitor, Download, Zap, ShoppingBag } from 'lucide-react';
import ProjectVisual from './ProjectVisual';

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const navigate = useNavigate();
  const [transformStyle, setTransformStyle] = useState('');
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    // Only apply 3D tilt on devices that support hover (not pure touch)
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -3.5;
      const rotateY = ((x - centerX) / centerX) * 3.5;

      setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`);
      setMousePos({
        x: Math.round((x / rect.width) * 100),
        y: Math.round((y / rect.height) * 100)
      });
    }
  };

  const handleMouseLeave = () => {
    setTransformStyle('');
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

  const getCtaIcon = (type) => {
    switch (type) {
      case 'free':
        return <Download size={14} />;
      case 'paid':
        return <ShoppingBag size={14} />;
      default:
        return <Zap size={14} />;
    }
  };

  return (
    <article
      ref={cardRef}
      className="project-card product-showcase-card"
      style={{
        transform: transformStyle,
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient reactive light sheen */}
      <div className="card-ambient-glow" aria-hidden="true" />

      {/* Visual Software Mockup Section (Clicking opens project page) */}
      <Link
        to={`/project/${project.slug}`}
        className="project-card-visual"
        aria-label={`View full details for ${project.name}`}
      >
        <ProjectVisual type={project.visualType} title={project.name} />
        <div className="card-visual-overlay">
          <span className="visual-inspect-btn">
            <span>Explore Product Specification</span>
            <ArrowRight size={15} />
          </span>
        </div>
      </Link>

      {/* Card Content & Metadata */}
      <div className="project-card-body">
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
            <span className="platforms-mini-label mono">TARGET:</span>
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

        {/* Card Footer Interaction */}
        <div className="project-card-footer">
          <Link
            to={`/project/${project.slug}`}
            className="btn btn-primary btn-card-action"
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
