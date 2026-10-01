import React from 'react';

/**
 * Reusable Section Header Component
 * Follows strict typographical hierarchy and consistent layout rhythm.
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  badgeColor = 'cyan'
}) {
  return (
    <div className={`section-header section-header-${align}`}>
      {eyebrow && (
        <div className="section-eyebrow-wrap">
          <span className={`badge badge-${badgeColor}`}>
            <span className="status-dot"></span>
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
