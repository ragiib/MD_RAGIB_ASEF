import React, { useState } from 'react';
import { Layers, Wrench, Rocket, Cpu, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { philosophyData } from '../data/philosophy';

const iconMap = {
  Wrench: Wrench,
  Layers: Layers,
  Rocket: Rocket
};

export default function Philosophy() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="philosophy-section" id="philosophy">
      <div className="container">
        <SectionHeader
          eyebrow="Core Philosophy"
          title="Engineered for utility, not novelty."
          subtitle="Software should eliminate friction, empower human capability, and endure in production."
        />

        {/* Big Impact Statement Card */}
        <div className="philosophy-manifesto-card">
          <div className="manifesto-decor-grid" aria-hidden="true" />
          <div className="manifesto-content">
            <span className="manifesto-eyebrow">
              <Zap size={14} className="manifesto-icon" />
              BUILDER PRINCIPLE
            </span>
            <h3 className="manifesto-headline">
              &ldquo;I don't simply create random demo projects — I build useful software, engineer durable systems, and turn ideas into tangible products.&rdquo;
            </h3>
            <p className="manifesto-subtext">
              {philosophyData.statement}
            </p>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="philosophy-pillars-grid">
          {philosophyData.principles.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Cpu;
            const isActive = activePillar === idx;

            return (
              <div
                key={pillar.index}
                className={`philosophy-card ${isActive ? 'card-active' : ''}`}
                onMouseEnter={() => setActivePillar(idx)}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                onFocus={() => setActivePillar(idx)}
              >
                <div className="card-top-row">
                  <span className="pillar-num">{pillar.index}</span>
                  <div className="pillar-icon-box">
                    <IconComponent size={20} />
                  </div>
                </div>

                <div className="pillar-body">
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-tagline">{pillar.tagline}</p>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>

                <div className="pillar-footer">
                  <span className="pillar-indicator">
                    <CheckCircle2 size={14} />
                    <span>Active Standard</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Philosophy Spec Summary */}
        <div className="philosophy-metrics-bar">
          {philosophyData.stats.map((stat, i) => (
            <div key={i} className="spec-metric-item">
              <span className="spec-metric-label">{stat.label}</span>
              <span className="spec-metric-value">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
