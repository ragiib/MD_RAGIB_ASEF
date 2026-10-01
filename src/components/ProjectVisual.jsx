import React from 'react';
import { Terminal, Activity, Layers, Code, Play, Check, Shield, Cpu, Image } from 'lucide-react';

/**
 * ProjectVisual: Multi-modal visual presentation engine.
 * Supports:
 * 1. Real image screenshots/mockups (when provided via imageSrc/url)
 * 2. High-fidelity custom software interactive mockups (terminal, canvas, analytics, code AST)
 * 3. Fallback placeholder frames ready for real screenshots
 */
export default function ProjectVisual({ type, title, imageSrc, caption, isGallery = false }) {
  // 1. Real screenshot/image support
  if (imageSrc) {
    return (
      <div className={`project-visual-wrapper visual-image-wrapper ${isGallery ? 'visual-gallery-mode' : ''}`}>
        <div className="visual-top-bar">
          <div className="visual-window-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="visual-window-title mono">{title || 'Screenshot Preview'}</span>
          <span className="badge badge-cyan visual-status-mini">IMAGE ASSET</span>
        </div>
        <div className="visual-body image-body">
          <img src={imageSrc} alt={title || 'Product screenshot'} className="visual-img" />
          {caption && <p className="visual-caption-overlay">{caption}</p>}
        </div>
      </div>
    );
  }

  // 2. Terminal Scheduler Mockup
  if (type === 'terminal-graph') {
    return (
      <div className={`project-visual-wrapper visual-terminal ${isGallery ? 'visual-gallery-mode' : ''}`}>
        <div className="visual-top-bar">
          <div className="visual-window-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="visual-window-title mono">chronos-engine :: daemon/worker-01</span>
          <span className="badge badge-emerald visual-status-mini">RUNNING</span>
        </div>
        <div className="visual-body terminal-body mono">
          <div className="term-line prompt">
            <span className="text-cyan">$</span> chronos worker --concurrency=16 --drain=safe --wal=active
          </div>
          <div className="term-line success">
            <Check size={12} className="term-icon" /> [INIT] Local write-ahead log mounted at ./data/chronos.wal
          </div>
          <div className="term-line success">
            <Check size={12} className="term-icon" /> [INFO] Ring buffer listener ready on 127.0.0.1:6389
          </div>
          <div className="term-line highlight">
            <span className="term-pill">DISPATCH #8921</span> Latency: 1.84ms &bull; Memory: 18.2MB &bull; ACK OK
          </div>
          <div className="term-sparkline">
            <div className="spark-bar" style={{ height: '35%' }} title="Tick 1" />
            <div className="spark-bar" style={{ height: '55%' }} title="Tick 2" />
            <div className="spark-bar" style={{ height: '45%' }} title="Tick 3" />
            <div className="spark-bar" style={{ height: '80%' }} title="Tick 4" />
            <div className="spark-bar active" style={{ height: '95%' }} title="Peak" />
            <div className="spark-bar" style={{ height: '70%' }} title="Tick 6" />
            <div className="spark-bar" style={{ height: '60%' }} title="Tick 7" />
            <div className="spark-bar" style={{ height: '85%' }} title="Tick 8" />
            <div className="spark-bar" style={{ height: '50%' }} title="Tick 9" />
            <div className="spark-bar" style={{ height: '65%' }} title="Tick 10" />
          </div>
        </div>
      </div>
    );
  }

  // 3. Canvas State Machine Mockup
  if (type === 'canvas-nodes') {
    return (
      <div className={`project-visual-wrapper visual-nodes ${isGallery ? 'visual-gallery-mode' : ''}`}>
        <div className="visual-top-bar">
          <div className="visual-window-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="visual-window-title mono">flowcraft.graph // auth_pipeline.ts</span>
          <span className="badge badge-indigo visual-status-mini">CANVAS 60FPS</span>
        </div>
        <div className="visual-body nodes-canvas">
          <div className="node-box node-start">
            <div className="node-header">idle(Payload)</div>
            <div className="node-socket right" />
          </div>

          <svg className="node-connecting-line" viewBox="0 0 200 60">
            <path d="M 40 30 C 85 30, 115 30, 160 30" fill="none" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="2" strokeDasharray="4 2" />
          </svg>

          <div className="node-box node-mid">
            <div className="node-header">verifySignature</div>
            <div className="node-socket left" />
            <div className="node-socket right" />
          </div>

          <div className="node-box node-end">
            <div className="node-header">emit(Authorized)</div>
            <div className="node-socket left" />
          </div>
        </div>
      </div>
    );
  }

  // 4. Analytics Telemetry Mockup
  if (type === 'analytics-dash') {
    return (
      <div className={`project-visual-wrapper visual-analytics ${isGallery ? 'visual-gallery-mode' : ''}`}>
        <div className="visual-top-bar">
          <div className="visual-window-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="visual-window-title mono">pulse-telemetry :: edge-metrics</span>
          <span className="badge badge-cyan visual-status-mini">EDGE STREAMING</span>
        </div>
        <div className="visual-body analytics-body">
          <div className="analytics-stat-row">
            <div className="dash-metric">
              <span className="label">REQ / SEC</span>
              <span className="value mono">14,280</span>
            </div>
            <div className="dash-metric">
              <span className="label">P99 LATENCY</span>
              <span className="value mono text-cyan">18.2ms</span>
            </div>
            <div className="dash-metric">
              <span className="label">ERROR RATE</span>
              <span className="value mono text-emerald">0.002%</span>
            </div>
            <div className="dash-metric">
              <span className="label">EDGE NODES</span>
              <span className="value mono text-indigo">24 Global</span>
            </div>
          </div>
          <div className="analytics-chart-svg">
            <svg viewBox="0 0 300 70" className="chart-line">
              <defs>
                <linearGradient id="chartGradV2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,50 Q40,42 70,48 T140,25 T210,38 T280,18 L300,22 L300,70 L0,70 Z"
                fill="url(#chartGradV2)"
              />
              <path
                d="M0,50 Q40,42 70,48 T140,25 T210,38 T280,18 L300,22"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.2"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // 5. Code AST & Workbench Mockup
  return (
    <div className={`project-visual-wrapper visual-code ${isGallery ? 'visual-gallery-mode' : ''}`}>
      <div className="visual-top-bar">
        <div className="visual-window-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="visual-window-title mono">syntax-forge :: parser.wasm</span>
        <span className="badge badge-amber visual-status-mini">WASM v2.1</span>
      </div>
      <div className="visual-body code-body mono">
        <div className="code-tree">
          <div className="tree-node"><span className="text-secondary">&gt; Program</span> [Root]</div>
          <div className="tree-node indent-1"><span className="text-cyan">&bull; FunctionDeclaration</span> (<span className="text-amber">"optimizeAST"</span>)</div>
          <div className="tree-node indent-2"><span className="text-emerald">&bull; BlockStatement</span> [4 expressions]</div>
          <div className="tree-node indent-3"><span className="text-secondary">&bull; ReturnStatement</span> &rarr; <span className="text-cyan">Result&lt;ASTNode&gt;</span></div>
        </div>
      </div>
    </div>
  );
}
