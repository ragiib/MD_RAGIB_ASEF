import React, { useState } from 'react';
import { Sparkles, BookOpen, Layers, GitBranch, ArrowRight, Check, Send } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { futureData } from '../data/future';

const iconByPillar = [Layers, BookOpen, GitBranch];

export default function FuturePreview() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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

        {/* 3 Trajectory Columns */}
        <div className="future-pillars-grid">
          {futureData.pillars.map((pillar, i) => {
            const Icon = iconByPillar[i] || Sparkles;

            return (
              <div key={i} className="future-pillar-card">
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
                  <span className="roadmap-items-header mono">UPCOMING IN PIPELINE</span>
                  <ul className="roadmap-list">
                    {pillar.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="roadmap-item">
                        <span className="roadmap-bullet" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Early Access & Updates Dispatch Box */}
        <div className="future-dispatch-card">
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
                <button type="submit" className="btn btn-primary dispatch-submit-btn">
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
