import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Download,
  ShoppingBag,
  ExternalLink,
  Layers,
  Cpu,
  Shield,
  Zap,
  CheckCircle2,
  Terminal,
  Code2,
  Box,
  Monitor,
  Share2,
  Check,
  ChevronLeft,
  ChevronRight,
  Info
} from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import ProjectVisual from '../components/ProjectVisual';
import { getProjectBySlug, getAdjacentProjects } from '../data/projects';

export default function ProjectDetailPage({ onOpenContact }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top on slug change & dynamic document title
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveScreenshotIdx(0);

    if (project) {
      document.title = `${project.name} — MD RAGIB ASEF`;
    } else {
      document.title = 'Project Not Found — MD RAGIB ASEF';
    }

    return () => {
      document.title = 'MD RAGIB ASEF — Founder · Developer · Product Builder';
    };
  }, [slug, project]);

  if (!project) {
    return (
      <div className="project-not-found-wrap container">
        <div className="not-found-card">
          <span className="badge badge-amber mono">404 // NOT FOUND</span>
          <h2>Product Not Found</h2>
          <p>The product identifier &ldquo;{slug}&rdquo; does not match any current pipeline software.</p>
          <Link to="/" className="btn btn-primary">
            <ArrowLeft size={16} />
            <span>Back to All Work</span>
          </Link>
        </div>
      </div>
    );
  }

  const { prev, next } = getAdjacentProjects(project.slug);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Dynamic Primary Action CTA based on Free/Paid/Freemium
  const renderPrimaryAction = () => {
    if (project.pricingType === 'free') {
      return (
        <a
          href={project.downloadUrl || '#'}
          className="btn btn-primary btn-action-hero"
          onClick={(e) => {
            if (project.downloadUrl === '#') {
              e.preventDefault();
              alert(`Binary distribution for ${project.name} will be released with the public repository.`);
            }
          }}
        >
          <Download size={18} />
          <span>{project.ctaLabel || 'Download Free'}</span>
        </a>
      );
    }

    if (project.pricingType === 'paid') {
      return (
        <a
          href={project.purchaseUrl || '#'}
          className="btn btn-primary btn-action-hero"
          onClick={(e) => {
            if (project.purchaseUrl === '#') {
              e.preventDefault();
              alert(`Commercial licensing for ${project.name} will be available upon completion of the commerce phase.`);
            }
          }}
        >
          <ShoppingBag size={18} />
          <span>{project.ctaLabel || 'Purchase License'}</span>
        </a>
      );
    }

    // Freemium default
    return (
      <a
        href={project.downloadUrl || '#'}
        className="btn btn-primary btn-action-hero"
        onClick={(e) => {
          if (!project.downloadUrl || project.downloadUrl === '#') {
            e.preventDefault();
            alert(`Early access for ${project.name} is currently in private preview.`);
          }
        }}
      >
        <Zap size={18} />
        <span>{project.ctaLabel || 'Get Started Free'}</span>
      </a>
    );
  };

  const getPricingBadge = () => {
    switch (project.pricingType) {
      case 'free':
        return <span className="badge badge-emerald">{project.pricing}</span>;
      case 'paid':
        return <span className="badge badge-amber">{project.pricing}</span>;
      case 'freemium':
        return <span className="badge badge-indigo">{project.pricing}</span>;
      default:
        return <span className="badge badge-cyan">{project.pricing}</span>;
    }
  };

  return (
    <article className="project-detail-page">
      {/* 1. Header Navigation Strip */}
      <div className="project-nav-strip">
        <div className="container project-nav-strip-inner">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to All Products</span>
          </Link>

          <div className="project-strip-actions">
            <button
              type="button"
              className="strip-share-btn"
              onClick={handleShare}
              title="Copy share link"
            >
              {copiedLink ? (
                <>
                  <Check size={14} className="text-emerald" />
                  <span>Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 size={14} />
                  <span>Share Product</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Product Hero */}
      <section className="product-hero-section">
        <div className="container">
          <div className="product-hero-grid">
            <div className="product-hero-info">
              {/* Meta pills */}
              <div className="product-meta-pills">
                <span className="badge badge-cyan mono">{project.category}</span>
                {getPricingBadge()}
                <span className="badge mono">{project.version}</span>
                <span className="product-status-pill mono">
                  <span className="status-dot"></span>
                  {project.status}
                </span>
              </div>

              {/* Title & Tagline */}
              <h1 className="product-hero-title">{project.name}</h1>
              <p className="product-hero-tagline">{project.tagline}</p>

              {/* Platform indicators */}
              {project.platforms && (
                <div className="product-platforms-row">
                  <span className="platforms-label mono">PLATFORMS:</span>
                  <div className="platforms-badges">
                    {project.platforms.map((plat) => (
                      <span key={plat} className="platform-tag mono">
                        {plat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions row */}
              <div className="product-hero-actions">
                {renderPrimaryAction()}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-action-sub"
                  >
                    <GithubIcon size={17} />
                    <span>View Repository</span>
                  </a>
                )}

                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={onOpenContact}
                >
                  <span>Inquire / Feedback</span>
                </button>
              </div>

              {/* Quick Spec Metrics */}
              {project.stats && (
                <div className="product-hero-specs">
                  {project.stats.map((s, i) => (
                    <div key={i} className="hero-spec-item">
                      <span className="spec-label mono">{s.label}</span>
                      <span className="spec-val mono">{s.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Hero Visual */}
            <div className="product-hero-visual-col">
              <div className="product-main-visual-frame">
                <ProjectVisual type={project.visualType} title={project.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Overview: What It Is, Problem Solved, Who It's For */}
      <section className="product-overview-section">
        <div className="container">
          <div className="overview-container-card">
            <div className="overview-header-row">
              <span className="badge badge-cyan mono">PRODUCT SPECIFICATION</span>
              <span className="mono text-muted" style={{ fontSize: '0.8rem' }}>ARCHITECTURAL BRIEF</span>
            </div>

            <div className="overview-narrative">
              <h2 className="overview-section-heading">About {project.name}</h2>
              <p className="overview-long-desc">{project.longDescription || project.description}</p>
            </div>

            {project.overview && (
              <div className="overview-pillars-grid">
                <div className="overview-pillar-item">
                  <div className="pillar-label-row">
                    <Box size={16} className="text-cyan" />
                    <span className="pillar-label mono">WHAT IT IS</span>
                  </div>
                  <p className="pillar-text">{project.overview.whatItIs}</p>
                </div>

                <div className="overview-pillar-item">
                  <div className="pillar-label-row">
                    <Zap size={16} className="text-amber" />
                    <span className="pillar-label mono">PROBLEM SOLVED</span>
                  </div>
                  <p className="pillar-text">{project.overview.problemSolved}</p>
                </div>

                <div className="overview-pillar-item">
                  <div className="pillar-label-row">
                    <Monitor size={16} className="text-emerald" />
                    <span className="pillar-label mono">TARGET AUDIENCE</span>
                  </div>
                  <p className="pillar-text">{project.overview.targetAudience}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Key Features Grid */}
      {project.features && project.features.length > 0 && (
        <section className="product-features-section">
          <div className="container">
            <div className="section-header">
              <span className="badge badge-indigo">
                <span className="status-dot"></span>
                CAPABILITIES &amp; HIGHLIGHTS
              </span>
              <h2 className="section-title">Engineered with high-craft primitives.</h2>
              <p className="section-subtitle">
                Core technical capabilities designed to eliminate friction and maximize performance.
              </p>
            </div>

            <div className="product-features-grid">
              {project.features.map((feat, idx) => (
                <div key={idx} className="product-feature-card">
                  <div className="feature-top-row">
                    <span className="feature-number mono">0{idx + 1}</span>
                    {feat.badge && <span className="badge badge-cyan mono">{feat.badge}</span>}
                  </div>
                  <h3 className="feature-title">{feat.title}</h3>
                  <p className="feature-desc">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Visual Showcase & Screenshot Gallery */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="product-gallery-section">
          <div className="container">
            <div className="section-header">
              <span className="badge badge-cyan mono">VISUAL SHOWCASE</span>
              <h2 className="section-title">Interface &amp; telemetry views.</h2>
              <p className="section-subtitle">
                Inspect real runtime workflows, interactive dashboards, and developer configurations.
              </p>
            </div>

            <div className="gallery-container">
              {/* Active Gallery Display */}
              <div className="gallery-main-viewport">
                <ProjectVisual
                  type={project.screenshots[activeScreenshotIdx].type}
                  title={project.screenshots[activeScreenshotIdx].alt}
                  caption={project.screenshots[activeScreenshotIdx].caption}
                  isGallery={true}
                />
              </div>

              {/* Screenshot Selector Tabs */}
              <div className="gallery-thumbnails-strip" role="tablist">
                {project.screenshots.map((shot, idx) => (
                  <button
                    key={shot.id}
                    role="tab"
                    aria-selected={activeScreenshotIdx === idx}
                    className={`gallery-thumb-btn ${activeScreenshotIdx === idx ? 'thumb-active' : ''}`}
                    onClick={() => setActiveScreenshotIdx(idx)}
                  >
                    <span className="thumb-idx mono">VIEW 0{idx + 1}</span>
                    <span className="thumb-caption">{shot.caption}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Recruiter & Technical Architecture Layer */}
      {project.recruiter && (
        <section className="product-recruiter-section">
          <div className="container">
            <div className="recruiter-card">
              <div className="recruiter-card-header">
                <div className="recruiter-tag-group">
                  <span className="badge badge-emerald mono">TECHNICAL BREAKDOWN</span>
                  <span className="badge badge-cyan mono">RECRUITER &amp; ARCHITECTURE LAYER</span>
                </div>
                <span className="mono text-muted" style={{ fontSize: '0.8rem' }}>
                  VERIFIED IMPLEMENTATION
                </span>
              </div>

              <div className="recruiter-grid">
                {/* Left: Role & Personal Contribution */}
                <div className="recruiter-col-primary">
                  <div className="recruiter-role-block">
                    <span className="recruiter-label mono">ROLE</span>
                    <h3 className="recruiter-role-title">{project.recruiter.role}</h3>
                  </div>

                  <div className="recruiter-contribution-block">
                    <span className="recruiter-label mono">PERSONAL CONTRIBUTION</span>
                    <p className="recruiter-contribution-text">{project.recruiter.contribution}</p>
                  </div>

                  <div className="recruiter-highlights-block">
                    <span className="recruiter-label mono">KEY ENGINEERING HIGHLIGHTS</span>
                    <ul className="recruiter-highlights-list">
                      {project.recruiter.highlights.map((h, i) => (
                        <li key={i} className="recruiter-highlight-item">
                          <CheckCircle2 size={16} className="text-cyan highlight-bullet" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Architectural Decisions & Outcomes */}
                <div className="recruiter-col-secondary">
                  <div className="recruiter-arch-block">
                    <span className="recruiter-label mono">SYSTEM ARCHITECTURE</span>
                    <div className="arch-layers-stack">
                      {project.recruiter.architecture.map((arch, i) => (
                        <div key={i} className="arch-layer-item">
                          <span className="arch-layer-name mono">{arch.layer}</span>
                          <span className="arch-layer-detail">{arch.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {project.recruiter.outcomes && (
                    <div className="recruiter-outcome-block">
                      <span className="recruiter-label mono">OUTCOME &amp; RELIABILITY</span>
                      <p className="recruiter-outcome-text">{project.recruiter.outcomes}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies Matrix */}
              <div className="recruiter-technologies-bar">
                <span className="mono text-muted" style={{ fontSize: '0.75rem' }}>
                  STACK PRIMITIVES:
                </span>
                <div className="tech-pills-row">
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-tag mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. Adjacent Project Navigation Footer */}
      <section className="adjacent-projects-nav">
        <div className="container">
          <div className="adjacent-nav-grid">
            {prev && (
              <Link to={`/project/${prev.slug}`} className="adjacent-card adjacent-prev">
                <span className="adjacent-direction mono">
                  <ChevronLeft size={16} />
                  <span>PREVIOUS PRODUCT</span>
                </span>
                <h4 className="adjacent-title">{prev.name}</h4>
                <span className="adjacent-cat mono">{prev.category}</span>
              </Link>
            )}

            {next && (
              <Link to={`/project/${next.slug}`} className="adjacent-card adjacent-next">
                <span className="adjacent-direction mono">
                  <span>NEXT PRODUCT</span>
                  <ChevronRight size={16} />
                </span>
                <h4 className="adjacent-title">{next.name}</h4>
                <span className="adjacent-cat mono">{next.category}</span>
              </Link>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
