import React, { useState } from 'react';
import { Sparkles, BookOpen, Layers, GitBranch, ArrowRight, Check, Send, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { futureData } from '../data/future';
import { useInteractiveSurface } from '../hooks/useInteractiveSurface';

const iconByPillar = [Layers, BookOpen, GitBranch];

function FuturePillarCardItem({
  pillar,
  index,
  isFocused,
  isReceded,
  onHoverStart,
  onHoverEnd
}) {
  const Icon = iconByPillar[index] || Sparkles;
  const [activeItemIdx, setActiveItemIdx] = useState(null);

  const cardRef = useInteractiveSurface({
    mode: 'spatial-progression',
    onStateChange: (isHovering) => {
      if (isHovering) onHoverStart(index);
      else onHoverEnd();
    }
  });

  return (
    <div
      ref={cardRef}
      className={`future-pillar-card spatial-roadmap-card ${
        isFocused ? 'pillar-focused' : ''
      } ${isReceded ? 'pillar-receded' : ''}`}
    >
      {/* Specular Edge & Progression Glow */}
      <div className="spatial-specular-edge" aria-hidden="true" />
      <div className="spatial-progression-glow" aria-hidden="true" />

      <div className="future-card-header">
        <div className="future-icon-wrap">
          <Icon size={20} />
        </div>
        <span className={`badge badge-${pillar.badgeColor}`}>
          <span className="status-dot"></span>
          {pillar.badge}
        </span>
      </div>

      <div className="future-card-content">
        <span className="future-category-label mono">{pillar.category}</span>
        <h4 className="future-pillar-title">{pillar.title}</h4>
        <p className="future-pillar-desc">{pillar.description}</p>
      </div>

      <div className="future-roadmap-items">
        <div className="roadmap-items-header-row">
          <span className="roadmap-items-header mono">UPCOMING IN PIPELINE</span>
          <span className="roadmap-cadence-badge mono">PHASE 2 → 3</span>
        </div>

        <ul className="roadmap-list" role="list">
          {pillar.items.map((item, itemIdx) => {
            const isItemActive = activeItemIdx === itemIdx;

            return (
              <li
                key={itemIdx}
                className={`roadmap-item ${isItemActive ? 'item-active' : ''}`}
                onMouseEnter={() => setActiveItemIdx(itemIdx)}
                onMouseLeave={() => setActiveItemIdx(null)}
              >
                <div className="roadmap-progression-node">
                  <span className="roadmap-bullet" />
                  <span className="roadmap-track-line" />
                </div>
                <div className="roadmap-item-info">
                  <span className="roadmap-item-title">{item}</span>
                  <span className="roadmap-item-meta mono">
                    {isItemActive ? 'MILESTONE IN ACTIVE SPEC' : 'SCHEDULED'}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function FuturePreview() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="future-section" id="future">
      <div className="container">
        <SectionHeader
          eyebrow={futureData.eyebrow}
          title={futureData.title}
          subtitle={futureData.subtitle}
        />

        {/* 3 Trajectory Columns with Spatial Progression Depth */}
        <div className="future-pillars-grid">
          {futureData.pillars.map((pillar, i) => (
            <FuturePillarCardItem
              key={i}
              pillar={pillar}
              index={i}
              isFocused={hoveredPillar === i}
              isReceded={hoveredPillar !== null && hoveredPillar !== i}
              onHoverStart={(idx) => setHoveredPillar(idx)}
              onHoverEnd={() => setHoveredPillar(null)}
            />
          ))}
        </div>

        {/* Early Access & Updates Dispatch Box */}
        <div className="future-dispatch-card glass-card-material">
          <div className="dispatch-info">
            <span className="badge badge-cyan mono">RELEASE DISPATCH</span>
            <h4 className="dispatch-title">Stay informed as products and curricula launch.</h4>
            <p className="dispatch-text">
              Receive concise, signal-rich updates when new software is released into public beta or when course cohorts become available. Zero spam.
            </p>
          </div>

          <div className="dispatch-form-col">
            {subscribed ? (
              <div className="dispatch-success-box">
                <Check size={18} className="text-emerald" />
                <span className="mono">Registered for early product dispatches.</span>
              </div>
            ) : (
              <form className="dispatch-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="dispatch-input"
                  required
                />
                <button type="submit" className="btn btn-primary dispatch-submit-btn btn-tactile">
                  <span>Notify Me</span>
                  <Send size={15} />
                </button>
              </form>
            )}
            <span className="dispatch-disclaimer mono">
              Founder-direct dispatches · Unsubscribe anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

