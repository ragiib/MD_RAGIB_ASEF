import React, { useState } from 'react';
import { ArrowUpRight, Terminal, User, Code2, Compass, Layers, CheckCircle2, FileText, Target, Flag, Download, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useInteractiveSurface } from '../hooks/useInteractiveSurface';

function CapabilityCard({ icon: Icon, iconColor, title, desc, tag, metadata }) {
  const cardRef = useInteractiveSurface({
    mode: 'magnetic-surface',
    maxDistance: 7,
    proximityRange: 160
  });

  return (
    <div ref={cardRef} className="capability-card magnetic-surface-box">
      <div className="cap-specular-glow" aria-hidden="true" />
      <div className="cap-icon-box">
        <Icon size={20} className={iconColor} />
      </div>
      <div className="cap-content">
        <div className="cap-title-row">
          <h4 className="cap-title">{title}</h4>
          {tag && <span className="cap-mini-tag mono">{tag}</span>}
        </div>
        <p className="cap-desc">{desc}</p>
        {metadata && (
          <div className="cap-metadata-reveal mono">
            <span className="metadata-dot" />
            <span>{metadata}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AboutPreview({ onOpenContact }) {
  const [showFullBio, setShowFullBio] = useState(false);

  const dossierRef = useInteractiveSurface({
    mode: 'dossier-unfold',
    maxAngle: 3.5,
    perspective: 1400
  });

  return (
    <section className="about-section" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="Founder &amp; Builder Profile"
          title="Bridging software architecture with product intuition."
          subtitle="A disciplined product engineer who takes full ownership of the product lifecycle from blank canvas to distributed production."
        />

        <div className="about-layout-grid">
          {/* Left Column: Brand Identity & Biography Dossier with Physical Dossier Unfolding */}
          <div ref={dossierRef} className="about-bio-card dossier-panel-material">
            <div className="dossier-specular-light" aria-hidden="true" />
            
            <div className="about-card-badge-row">
              <span className="badge badge-cyan mono">BUILDER DOSSIER</span>
              <span className="mono text-muted dossier-ref-id" style={{ fontSize: '0.8rem' }}>REF // MRA-2026</span>
            </div>

            <div className="about-identity-block">
              <h3 className="about-name">MD RAGIB ASEF</h3>
              <p className="about-role mono">Founder · Developer · Product Builder</p>
            </div>

            <div className="about-bio-body">
              <p className="bio-lead">
                I build software products that live at the intersection of robust backend mechanics and refined, tactile user experiences.
              </p>

              {/* Professional Biography Box (Slides independently on pointer movement) */}
              <div className="bio-placeholder-box dossier-sliding-sheet">
                <div className="bio-placeholder-header">
                  <span className="status-dot"></span>
                  <span className="mono">Professional Biography &amp; Background</span>
                </div>
                <p className="bio-paragraph">
                  With a relentless focus on utility and craft, I approach software not just as code to be executed, but as end-to-end products that solve concrete operational bottlenecks. I specialize in full-stack web platforms, developer tooling, real-time telemetry, and local-first application architectures.
                </p>

                {showFullBio && (
                  <div className="bio-expanded-content">
                    <p className="bio-paragraph">
                      My workflow prioritizes velocity without compromising on structural stability. Whether architecting high-throughput background queues or hand-tuning CSS transitions, every layer receives the same meticulous attention to detail.
                    </p>
                    <p className="bio-paragraph">
                      Beyond solitary engineering, I actively study product distribution, pricing economics, and pedagogical frameworks for software education.
                    </p>
                  </div>
                )}
              </div>

              {/* Current Focus & Future Goals Strip */}
              <div className="about-focus-goals-strip dossier-sliding-sheet">
                <div className="focus-goal-item">
                  <div className="focus-goal-title mono">
                    <Target size={14} className="text-cyan" />
                    <span>CURRENT FOCUS</span>
                  </div>
                  <p className="focus-goal-desc">
                    Maturing the Phase 2 software pipeline into public release builds and optimizing edge telemetry collection.
                  </p>
                </div>

                <div className="focus-goal-item">
                  <div className="focus-goal-title mono">
                    <Flag size={14} className="text-emerald" />
                    <span>FUTURE GOALS</span>
                  </div>
                  <p className="focus-goal-desc">
                    Publishing open-source systems primitives and authoring pragmatic engineering deep-dives for aspiring solo founders.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-actions-row">
              <button
                type="button"
                className="btn btn-secondary btn-tactile"
                onClick={() => setShowFullBio(!showFullBio)}
              >
                <span>{showFullBio ? 'Collapse Dossier' : 'Read Full Background'}</span>
                <ArrowUpRight size={15} />
              </button>

              <button
                type="button"
                className="btn btn-ghost btn-tactile"
                onClick={onOpenContact}
              >
                <FileText size={15} />
                <span>Request Resume / CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Capabilities & What I Build with Magnetic Responsive Surfaces */}
          <div className="about-capabilities-stack">
            <CapabilityCard
              icon={Code2}
              iconColor="text-cyan"
              title="What I Build: Developer Tools & Web Apps"
              desc="Building decoupled, modern applications with React, TypeScript, Node.js, and edge infrastructure. Prioritizing instant load times, clean state management, and ergonomic component systems."
              tag="SYSTEMS"
              metadata="React 19 · TypeScript · Edge Runtimes · Vite"
            />

            <CapabilityCard
              icon={Layers}
              iconColor="text-indigo"
              title="Systems & Architecture Thinking"
              desc="Designing resilient background workers, event-driven pipelines, and relational/key-value data stores capable of predictable scale without unnecessary complexity."
              tag="INFRA"
              metadata="PostgreSQL · Redis Queues · WebSocket Streams"
            />

            <CapabilityCard
              icon={Compass}
              iconColor="text-emerald"
              title="Founder Mindset & Autonomy"
              desc="Ruthless prioritization of core user value. Comfortable leading product roadmaps, shaping user interfaces, and shipping self-sustaining digital assets."
              tag="LEADERSHIP"
              metadata="Product Strategy · Rapid Prototyping · Zero to 1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
