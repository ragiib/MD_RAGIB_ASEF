import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { projectsData, projectCategories } from '../data/projects';
import { Box, Layers, Sparkles } from 'lucide-react';

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => {
        if (p.categorySlug === activeCategory) return true;
        if (p.tags && p.tags.includes(activeCategory)) return true;
        return false;
      });

  const getCategoryCount = (catId) => {
    if (catId === 'all') return projectsData.length;
    return projectsData.filter((p) => {
      if (p.categorySlug === catId) return true;
      if (p.tags && p.tags.includes(catId)) return true;
      return false;
    }).length;
  };

  return (
    <section className="featured-work-section" id="work">
      {/* Ambient Depth Background Aura */}
      <div className="section-ambient-halo" aria-hidden="true" />

      <div className="container">
        <div className="featured-work-top">
          <SectionHeader
            eyebrow="Real Products &amp; Software Pipeline"
            title="Software engineered from zero to launch."
            subtitle="Explore dedicated software products, developer utilities, and platform primitives built with end-to-end craftsmanship."
          />

          {/* Filter Pills with Counts and Glass Styling */}
          <div className="category-filter-bar glass-filter-bar" role="tablist" aria-label="Filter products by category">
            {projectCategories.map((cat) => {
              const count = getCategoryCount(cat.id);
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-pill btn-tactile ${isActive ? 'pill-active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="filter-count mono">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid with Interactive Focus Field */}
        <div
          className="projects-grid showcase-focus-field"
          onMouseLeave={() => setHoveredProjectId(null)}
        >
          {filteredProjects.map((project) => {
            const isFocused = hoveredProjectId === project.id;
            const isReceded = hoveredProjectId !== null && hoveredProjectId !== project.id;

            return (
              <ProjectCard
                key={project.id}
                project={project}
                isFocused={isFocused}
                isReceded={isReceded}
                onHoverStart={(id) => setHoveredProjectId(id)}
                onHoverEnd={() => setHoveredProjectId(null)}
              />
            );
          })}
        </div>

        {/* Showcase Bottom Banner with Physical Glass Panel */}
        <div className="showcase-bottom-banner glass-panel">
          <div className="banner-icon-col">
            <Box size={22} className="text-cyan" />
          </div>
          <div className="banner-text-col">
            <h4 className="banner-title">Modular Product Architecture</h4>
            <p className="banner-desc">
              All applications are built with clean separation between decoupled frontends, edge services, and local-first data primitives. Click any product to inspect architecture specifications.
            </p>
          </div>
          <div className="banner-action-col">
            <span className="badge badge-cyan mono glass-panel-pill">
              <span className="status-dot"></span>
              {projectsData.length} Software Builds Active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
