import React, { useState } from 'react';
import { ArrowUpRight, Terminal, User, Code2, Compass, Layers, CheckCircle2, FileText, Target, Flag, Download } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function AboutPreview({ onOpenContact }) {
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <section className="about-section" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="Founder &amp; Builder Profile"
          title="Bridging software architecture with product intuition."
          subtitle="A disciplined product engineer who takes full ownership of the product lifecycle from blank canvas to distributed production."
        />

        <div className="about-layout-grid">
          {/* Left Column: Brand Identity & Biography Dossier */}
          <div className="about-bio-card">
            <div className="about-card-badge-row">
              <span className="badge badge-cyan mono">BUILDER DOSSIER</span>
              <span className="mono text-muted" style={{ fontSize: '0.8rem' }}>PRIMARY IDENTITY</span>
            </div>

            <div className="about-identity-block">
              <h3 className="about-name">MD RAGIB ASEF</h3>
              <p className="about-role mono">Founder · Developer · Product Builder</p>
            </div>

            <div className="about-bio-body">
              <p className="bio-lead">
                I build software products that live at the intersection of robust backend mechanics and refined, tactile user experiences.
              </p>

              {/* Professional Biography Box */}
              <div className="bio-placeholder-box">
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
              <div className="about-focus-goals-strip">
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
                className="btn btn-secondary"
                onClick={() => setShowFullBio(!showFullBio)}
              >
                <span>{showFullBio ? 'Collapse Dossier' : 'Read Full Background'}</span>
                <ArrowUpRight size={15} />
              </button>

              <button
                type="button"
                className="btn btn-ghost"
                onClick={onOpenContact}
              >
                <FileText size={15} />
                <span>Request Resume / CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Capabilities & What I Build */}
          <div className="about-capabilities-stack">
            {/* Capability Box 1 */}
            <div className="capability-card">
              <div className="cap-icon-box">
                <Code2 size={20} className="text-cyan" />
              </div>
              <div className="cap-content">
                <h4 className="cap-title">What I Build: Developer Tools &amp; Web Apps</h4>
                <p className="cap-desc">
                  Building decoupled, modern applications with React, TypeScript, Node.js, and edge infrastructure. Prioritizing instant load times, clean state management, and ergonomic component systems.
                </p>
              </div>
            </div>

            {/* Capability Box 2 */}
            <div className="capability-card">
              <div className="cap-icon-box">
                <Layers size={20} className="text-indigo" />
              </div>
              <div className="cap-content">
                <h4 className="cap-title">Systems &amp; Architecture Thinking</h4>
                <p className="cap-desc">
                  Designing resilient background workers, event-driven pipelines, and relational/key-value data stores capable of predictable scale without unnecessary complexity.
                </p>
              </div>
            </div>

            {/* Capability Box 3 */}
            <div className="capability-card">
              <div className="cap-icon-box">
                <Compass size={20} className="text-emerald" />
              </div>
              <div className="cap-content">
                <h4 className="cap-title">Founder Mindset &amp; Autonomy</h4>
                <p className="cap-desc">
                  Ruthless prioritization of core user value. Comfortable leading product roadmaps, shaping user interfaces, and shipping self-sustaining digital assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
