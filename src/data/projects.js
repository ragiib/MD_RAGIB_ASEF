/**
 * Real Product Showcase & Software Data Architecture
 * 
 * Scalable schema supporting:
 * - Direct app discovery & filtering
 * - Individual project detail routing
 * - Free / Paid / Freemium commercial models
 * - Recruiter-friendly technical contribution & architecture specs
 * - Screenshot galleries & visual placeholders
 */

export const projectCategories = [
  { id: 'all', label: 'All Products' },
  { id: 'apps', label: 'Apps & Software' },
  { id: 'tools', label: 'Developer Tools' },
  { id: 'web', label: 'Web Platforms' },
  { id: 'productivity', label: 'Productivity' }
];

export const projectsData = [
  {
    id: 'chronos-engine',
    name: 'Chronos Engine',
    title: 'Chronos Engine',
    slug: 'chronos-engine',
    category: 'Developer Tool',
    categorySlug: 'tools',
    tags: ['tools', 'apps'],
    pricingType: 'free',
    pricing: 'Free & Open Source',
    pricingLabel: '100% Free · MIT License',
    ctaType: 'download',
    ctaLabel: 'Download Binary',
    platforms: ['macOS', 'Linux', 'Windows', 'CLI'],
    status: 'Public Release',
    statusBadge: 'v1.4 Public Release',
    version: 'v1.4.2',
    featured: true,
    tagline: 'High-throughput event scheduler & background task runner for distributed services.',
    description: 'A developer-first scheduling engine designed to coordinate asynchronous background pipelines with millisecond precision, persistent audit trails, and zero external database dependencies for local workflows.',
    longDescription: 'Chronos Engine was born out of frustration with overly heavyweight enterprise message brokers that require multi-container clusters just to orchestrate scheduled jobs locally. Chronos delivers a single-binary, memory-efficient daemon with embedded SQLite/memory storage, capable of running thousands of scheduled events, cron routines, and retry backoffs while maintaining an active audit stream.',
    
    // Overview Problem & Solution
    overview: {
      whatItIs: 'A standalone lightweight task scheduling engine and workflow coordinator built for modern backend services and local development pipelines.',
      problemSolved: 'Eliminates the complexity and memory overhead of standing up full Redis/RabbitMQ clusters for scheduled workers during development and mid-scale deployments.',
      targetAudience: 'Software engineers, platform architects, and indie builders who need predictable, high-frequency task execution without cloud vendor lock-in.'
    },

    technologies: ['TypeScript', 'Rust Core', 'Node.js', 'Redis', 'WebSockets', 'SQLite'],
    techTags: ['TypeScript', 'Rust Core', 'Node.js', 'Redis', 'WebSockets'],

    // Feature Cards
    features: [
      {
        title: 'Embedded Zero-Dependency Storage',
        description: 'Runs in zero-config mode with an integrated write-ahead-log persistence layer, eliminating external database requirements for local testing.',
        badge: 'Storage'
      },
      {
        title: 'Pluggable Queue Backends',
        description: 'Effortlessly switch between local embedded memory, Redis cluster, or PostgreSQL backends with a single configuration flag.',
        badge: 'Architecture'
      },
      {
        title: 'Streaming Observability Dashboard',
        description: 'Built-in local web dashboard providing real-time job throughput graphs, latency histograms, and dead-letter queue recovery.',
        badge: 'Telemetry'
      },
      {
        title: 'Fault-Tolerant Exponential Backoff',
        description: 'Configurable jittered retries, circuit breakers, and webhook dead-letter alerts to prevent cascading microservice outages.',
        badge: 'Resilience'
      }
    ],

    // Recruiter & Technical Contribution Layer
    recruiter: {
      role: 'Founder & Lead Systems Architect',
      contribution: 'Designed and implemented the core queue scheduling algorithm, ring buffer concurrency model, WebSocket telemetry protocol, and CLI packaging from ground zero.',
      highlights: [
        'Implemented lock-free ring buffers in the dispatch loop, achieving sub-2.4ms job dispatch latencies.',
        'Engineered an embedded WAL-based state engine allowing seamless daemon restarts without dropping pending queue ticks.',
        'Crafted a cross-platform CLI tool with tab-completions, daemonize flags, and structured JSON output.'
      ],
      architecture: [
        { layer: 'Core Dispatch Loop', detail: 'Event-driven reactor pattern with millisecond resolution timer wheels.' },
        { layer: 'Persistence Engine', detail: 'Single-file write-ahead-log with automated background checkpoints.' },
        { layer: 'Communication Protocol', detail: 'Bidirectional binary WebSockets with fallback to RESTful HTTP endpoints.' },
        { layer: 'Packaging & Distribution', detail: 'Statically linked binaries compiled via GitHub Actions for Linux, Darwin, and Win32.' }
      ],
      outcomes: 'Actively maintained with zero CVEs, sub-5MB idle memory footprint, and adopted by multiple solo developers for automated database backup pipelines.'
    },

    stats: [
      { label: 'Latency', value: '< 2.4ms' },
      { label: 'Throughput', value: '45k ops/s' },
      { label: 'Idle RAM', value: '18 MB' },
      { label: 'License', value: 'MIT' }
    ],

    visualType: 'terminal-graph',
    heroVisual: {
      type: 'terminal-graph',
      aspectRatio: '16/9'
    },

    // Screenshots / Gallery
    screenshots: [
      {
        id: 'term-main',
        caption: 'Chronos interactive CLI daemon running with 16 concurrent worker threads and sub-millisecond dispatch.',
        type: 'terminal-graph',
        alt: 'Chronos CLI Dashboard'
      },
      {
        id: 'dash-analytics',
        caption: 'Built-in real-time telemetry streaming metrics, queue depth, and memory consumption.',
        type: 'analytics-dash',
        alt: 'Real-time telemetry stream'
      },
      {
        id: 'code-schema',
        caption: 'Type-safe job declaration API with compile-time validation for retry strategies.',
        type: 'code-ast',
        alt: 'TypeScript job configuration schema'
      }
    ],

    downloadUrl: '#',
    purchaseUrl: null,
    githubUrl: 'https://github.com',
    documentationUrl: '#'
  },

  {
    id: 'flowcraft-studio',
    name: 'FlowCraft Studio',
    title: 'FlowCraft Studio',
    slug: 'flowcraft-studio',
    category: 'Productivity & Workflow',
    categorySlug: 'productivity',
    tags: ['productivity', 'apps', 'web'],
    pricingType: 'freemium',
    pricing: 'Freemium App',
    pricingLabel: 'Free Community · Pro $19/mo',
    ctaType: 'get-started',
    ctaLabel: 'Get Started Free',
    platforms: ['Web', 'macOS Desktop', 'Windows'],
    status: 'Early Access Beta',
    statusBadge: 'Early Access Beta',
    version: 'v0.9.4',
    featured: true,
    tagline: 'Visual state machine builder and reactive workflow orchestrator for product teams.',
    description: 'An interactive canvas environment that bridges the gap between software specifications and production-ready state machines, exporting typed TypeScript declarations directly.',
    longDescription: 'Engineering teams often build state machines on whiteboards that inevitably diverge from the real application code. FlowCraft Studio closes this divide by providing an infinite canvas where engineers and product designers construct deterministic finite state machines, visually simulate edge-case transitions, and export validated TypeScript code in one click.',
    
    overview: {
      whatItIs: 'A visual, node-based workspace for drafting, verifying, and generating deterministic state machine code.',
      problemSolved: 'Prevents state machine synchronization drift between product documentation diagrams and production frontend/backend logic.',
      targetAudience: 'Frontend architects, full-stack engineers, and product designers designing multi-step interactive workflows.'
    },

    technologies: ['React', 'TypeScript', 'HTML5 Canvas', 'Zustand', 'Web Workers', 'Tailwind CSS'],
    techTags: ['React', 'TypeScript', 'Canvas API', 'Tailwind', 'Zustand'],

    features: [
      {
        title: '60 FPS Infinite Canvas Engine',
        description: 'Custom GPU-accelerated canvas renderer supporting thousands of state nodes, smooth panning, and sub-pixel connector curves.',
        badge: 'Graphics'
      },
      {
        title: 'One-Click TypeScript Code Export',
        description: 'Instantly generates strict, zero-any TypeScript interfaces, exhaustive switch statements, and XState-compatible schemas.',
        badge: 'CodeGen'
      },
      {
        title: 'Interactive Transition Simulation',
        description: 'Step through events, test guards, and inspect payloads in real-time before writing a single line of backend logic.',
        badge: 'Testing'
      },
      {
        title: 'Local-First Offline Persistence',
        description: 'All diagrams and project schemas persist locally in IndexedDB with zero cloud transmission required for sensitive architectures.',
        badge: 'Privacy'
      }
    ],

    recruiter: {
      role: 'Founder & Full-Stack Engineer',
      contribution: 'Architected the virtualized canvas graph renderer, built the state transition validation algorithms, and crafted the responsive design system.',
      highlights: [
        'Developed a spatial hash-grid algorithm enabling 60 FPS panning with 5,000+ interactive nodes.',
        'Implemented strict TypeScript AST code emission using Babel and Prettier in a background Web Worker.',
        'Engineered seamless undo/redo history using immutable operational transformation records.'
      ],
      architecture: [
        { layer: 'Canvas Viewport', detail: 'Dual-buffer HTML5 canvas with requestAnimationFrame throttling and gesture physics.' },
        { layer: 'Graph Engine', detail: 'Directed acyclic and cyclical graph validation engine with cycle detection.' },
        { layer: 'Storage Primitive', detail: 'IndexedDB snapshotting with LZ-string compression for offline instant load.' },
        { layer: 'Export Pipeline', detail: 'In-browser TypeScript generator with syntax highlighting and bundle size estimation.' }
      ],
      outcomes: 'Tested by beta engineering teams; reduced onboarding time on complex multi-step checkout state machines by ~40%.'
    },

    stats: [
      { label: 'Rendering', value: '60 FPS Canvas' },
      { label: 'Export', value: 'TypeScript / JSON' },
      { label: 'Storage', value: 'Local First' },
      { label: 'Platforms', value: 'Web + Desktop' }
    ],

    visualType: 'canvas-nodes',
    heroVisual: {
      type: 'canvas-nodes',
      aspectRatio: '16/9'
    },

    screenshots: [
      {
        id: 'canvas-main',
        caption: 'Interactive infinite canvas showing authentication and payment verification state transitions.',
        type: 'canvas-nodes',
        alt: 'FlowCraft Infinite Canvas'
      },
      {
        id: 'code-gen',
        caption: 'Real-time generated TypeScript definitions matching the visual node arrangement.',
        type: 'code-ast',
        alt: 'TypeScript code generator'
      },
      {
        id: 'analytics-nodes',
        caption: 'State execution simulation mode with event step-through debugger.',
        type: 'analytics-dash',
        alt: 'Step through simulation debugger'
      }
    ],

    downloadUrl: '#',
    purchaseUrl: '#',
    githubUrl: 'https://github.com',
    documentationUrl: '#'
  },

  {
    id: 'pulse-telemetry',
    name: 'Pulse Telemetry',
    title: 'Pulse Telemetry',
    slug: 'pulse-telemetry',
    category: 'Platform & Systems',
    categorySlug: 'web',
    tags: ['web', 'software', 'tools'],
    pricingType: 'paid',
    pricing: 'Commercial / Pro',
    pricingLabel: 'Starting at $29/mo',
    ctaType: 'purchase',
    ctaLabel: 'Purchase License',
    platforms: ['Cloud SaaS', 'Docker Self-Hosted'],
    status: 'Active Pipeline',
    statusBadge: 'Active Pipeline',
    version: 'v1.1-preview',
    featured: true,
    tagline: 'Lightweight real-time application metrics and user telemetry for indie founders.',
    description: 'A privacy-conscious, edge-optimized analytics platform engineered for founders who need instant visibility into app health, user flows, and error events without sluggish tracking scripts.',
    longDescription: 'Modern web analytics tools either hoard excessive tracking cookies that trigger compliance nightmares or weigh down client page speed with bloated JavaScript bundles. Pulse Telemetry offers a modern, privacy-first alternative: a sub-2KB client script that pushes anonymous telemetry directly to edge collectors, giving builders sub-second dashboards without creepy user tracking.',
    
    overview: {
      whatItIs: 'A high-performance, privacy-first web telemetry and error-tracking platform designed specifically for SaaS founders.',
      problemSolved: 'Removes the 50KB+ script tax and cookie-banner liabilities imposed by legacy enterprise analytics providers.',
      targetAudience: 'Indie software founders, micro-SaaS operators, and engineering teams that value pristine page speed and user privacy.'
    },

    technologies: ['Next.js', 'Go', 'ClickHouse', 'Tailwind CSS', 'Docker', 'Edge Workers'],
    techTags: ['Next.js', 'Go', 'ClickHouse', 'Tailwind CSS', 'Docker'],

    features: [
      {
        title: 'Sub-2KB Client Beacon',
        description: 'Zero third-party dependencies and zero cookie footprint; loads asynchronously without degrading Core Web Vitals.',
        badge: 'Performance'
      },
      {
        title: 'Edge Ingestion Engine',
        description: 'Ingestion servers deployed globally on Cloudflare edge workers, parsing and sanitizing telemetry events in under 18ms.',
        badge: 'Edge'
      },
      {
        title: 'ClickHouse Columnar Storage',
        description: 'Aggregates millions of session events into real-time analytical rollups with sub-50ms query latencies.',
        badge: 'Database'
      },
      {
        title: 'Self-Hostable Container Option',
        description: 'Available as a single Docker-Compose bundle for self-hosters or managed via our high-availability cloud infrastructure.',
        badge: 'Self-Hosted'
      }
    ],

    recruiter: {
      role: 'Founder & Full-Stack Architect',
      contribution: 'Designed the lightweight beacon protocol, wrote the Go ingestion daemon, modeled the ClickHouse event schema, and built the real-time React dashboard.',
      highlights: [
        'Maintained sub-2KB gzipped client footprint while supporting session replay breadcrumbs and uncaught exception capture.',
        'Engineered an event batching queue in Go utilizing channel pooling, handling 20,000 requests/second per node.',
        'Optimized ClickHouse partition keys by organization and date for rapid historical lookups.'
      ],
      architecture: [
        { layer: 'Client Ingestion', detail: 'Non-blocking navigator.sendBeacon fallback with retry ring buffer.' },
        { layer: 'Collector API', detail: 'Stateless Go server verifying HMAC tokens and pushing to Kafka-compatible buffer.' },
        { layer: 'Analytical Core', detail: 'ClickHouse database with ReplacingMergeTree engine for deduplicated metrics.' },
        { layer: 'Presentation Layer', detail: 'Next.js dashboard with SVG sparklines and Server-Sent Events (SSE) updates.' }
      ],
      outcomes: 'Benchmarked against Google Analytics: loads 18x faster with 0 cookies and 100% GDPR/CCPA compliance.'
    },

    stats: [
      { label: 'Bundle Size', value: '1.2 KB' },
      { label: 'Edge Latency', value: '18ms' },
      { label: 'Privacy', value: '100% Cookie-Free' },
      { label: 'Throughput', value: '20k req/s' }
    ],

    visualType: 'analytics-dash',
    heroVisual: {
      type: 'analytics-dash',
      aspectRatio: '16/9'
    },

    screenshots: [
      {
        id: 'analytics-dash-screen',
        caption: 'Real-time telemetry dashboard streaming requests, P99 latency, and error spikes.',
        type: 'analytics-dash',
        alt: 'Real-time Analytics Dashboard'
      },
      {
        id: 'terminal-edge',
        caption: 'Edge collector logs showing distributed event processing across multiple regions.',
        type: 'terminal-graph',
        alt: 'Edge Ingestion Logs'
      },
      {
        id: 'code-sdk',
        caption: 'Minimal 3-line initialization snippet with typed event telemetry tracking.',
        type: 'code-ast',
        alt: 'TypeScript Telemetry SDK'
      }
    ],

    downloadUrl: null,
    purchaseUrl: '#',
    githubUrl: 'https://github.com',
    documentationUrl: '#'
  },

  {
    id: 'syntax-forge',
    name: 'Syntax Forge',
    title: 'Syntax Forge',
    slug: 'syntax-forge',
    category: 'Developer Utility',
    categorySlug: 'tools',
    tags: ['tools', 'apps'],
    pricingType: 'free',
    pricing: '100% Free App',
    pricingLabel: 'Open Source Community Tool',
    ctaType: 'download',
    ctaLabel: 'Launch Free Web App',
    platforms: ['Web', 'macOS', 'Linux', 'Windows'],
    status: 'Stable Release',
    statusBadge: 'Stable v2.1',
    version: 'v2.1.0',
    featured: false,
    tagline: 'Instant regex debugger, AST visualizer, and code transform workbench.',
    description: 'A desktop and web utility built to make parsing, tokenizing, and syntax transforms intuitive through instant visual feedback, syntax tree inspection, and benchmark comparisons.',
    longDescription: 'Debugging regular expressions and designing Babel or Rust AST transformations is notoriously cumbersome without immediate visual representation. Syntax Forge provides a clean, native-feeling workbench where developers paste complex grammar, observe the token stream hierarchy in real time, and verify replacement expressions safely.',
    
    overview: {
      whatItIs: 'An interactive AST exploration and regular expression debugging suite with instant compiled feedback.',
      problemSolved: 'Replaces confusing command-line test scripts with an intuitive, visual tree inspector and transform sandbox.',
      targetAudience: 'Compilers engineers, language tool developers, and full-stack builders writing complex string parsers.'
    },

    technologies: ['WebAssembly', 'Rust', 'Monaco Editor', 'CSS Grid', 'Tauri'],
    techTags: ['WebAssembly', 'Rust', 'Monaco Editor', 'CSS Grid'],

    features: [
      {
        title: 'Native WebAssembly Engine',
        description: 'Compiles Rust parser grammars into WebAssembly for native-speed execution directly inside the browser sandbox.',
        badge: 'WASM'
      },
      {
        title: 'Visual AST Tree Navigator',
        description: 'Bi-directional highlight synchronization between code tokens in the Monaco editor and the rendered syntax tree.',
        badge: 'UI/UX'
      },
      {
        title: 'Test Suite Exporter',
        description: 'Exports green test matrices into standard Jest, PyTest, or Cargo test files with a single click.',
        badge: 'Export'
      },
      {
        title: 'Zero Latency Transform Workbench',
        description: 'Live side-by-side transform preview showing input code, replacement rules, and output syntax in real-time.',
        badge: 'Productivity'
      }
    ],

    recruiter: {
      role: 'Founder & Systems Developer',
      contribution: 'Authored the Rust regex tokenizer, compiled the WebAssembly bridge, and integrated the Monaco editor token decoration layer.',
      highlights: [
        'Created a unified WASM memory interface allowing JavaScript to query Rust AST pointers with zero copying overhead.',
        'Engineered an interactive SVG tree hierarchy algorithm that handles 10,000+ AST nodes with virtualized node rendering.',
        'Packaged the utility into lightweight cross-platform desktop installers via Tauri.'
      ],
      architecture: [
        { layer: 'Parser Kernel', detail: 'Rust parser compiled to wasm32-unknown-unknown target with minimal wasm-bindgen wrapper.' },
        { layer: 'Editor Engine', detail: 'Monaco editor with customized token providers and multi-cursor sync.' },
        { layer: 'Tree Layout', detail: 'Custom Reingold-Tilford tidy tree algorithm with sub-millisecond redraws.' }
      ],
      outcomes: 'Widely used by engineering peers to debug complex RegExp parsing patterns and Babel transforms.'
    },

    stats: [
      { label: 'Engine', value: 'WASM (Rust)' },
      { label: 'Languages', value: '14+ Syntaxes' },
      { label: 'Memory', value: '< 25 MB' },
      { label: 'Platform', value: 'Web + Desktop' }
    ],

    visualType: 'code-ast',
    heroVisual: {
      type: 'code-ast',
      aspectRatio: '16/9'
    },

    screenshots: [
      {
        id: 'code-ast-screen',
        caption: 'Visual syntax tree inspection highlighting token parameters and node hierarchy.',
        type: 'code-ast',
        alt: 'Syntax Forge Tree Inspector'
      },
      {
        id: 'term-benchmark',
        caption: 'Execution benchmark comparing regex engine throughput across varying string lengths.',
        type: 'terminal-graph',
        alt: 'Benchmark comparisons'
      }
    ],

    downloadUrl: '#',
    purchaseUrl: null,
    githubUrl: 'https://github.com',
    documentationUrl: '#'
  },

  {
    id: 'apex-vault',
    name: 'Apex Vault',
    title: 'Apex Vault',
    slug: 'apex-vault',
    category: 'Developer Utility',
    categorySlug: 'tools',
    tags: ['tools', 'apps'],
    pricingType: 'freemium',
    pricing: 'Freemium Utility',
    pricingLabel: 'Free Solo · Team Pro $12/mo',
    ctaType: 'get-started',
    ctaLabel: 'Download Free Vault',
    platforms: ['CLI', 'macOS', 'Linux', 'Windows'],
    status: 'Beta Preview',
    statusBadge: 'Beta Preview',
    version: 'v0.8.2',
    featured: false,
    tagline: 'Local-first encrypted secret and environment orchestrator for modern developer teams.',
    description: 'An ergonomic CLI and native system tray app to inject, rotate, and synchronize environment secrets with zero plaintext disk exposure.',
    longDescription: 'Managing `.env` files across multiple staging environments and team members is a notorious source of credentials leakage and configuration bugs. Apex Vault acts as an encrypted keystore that safely injects environment variables directly into child processes in memory, completely eliminating unencrypted `.env` files from hard drives and Git repositories.',
    
    overview: {
      whatItIs: 'A zero-trust, local-first environment configuration and secret injection utility for software developers.',
      problemSolved: 'Prevents credentials leakage and accidental Git commits of plaintext API keys, passwords, and tokens.',
      targetAudience: 'Software engineers, DevOps leads, and security-conscious engineering squads.'
    },

    technologies: ['Rust', 'AES-256-GCM', 'React Native / Tauri', 'SQLite', 'Argon2id'],
    techTags: ['Rust', 'Cryptography', 'Tauri', 'SQLite'],

    features: [
      {
        title: 'Zero-Disk Plaintext Injection',
        description: 'Injects decrypted secrets directly into target child process memory spaces; no plaintext files ever touch disk.',
        badge: 'Security'
      },
      {
        title: 'Argon2id Key Derivation',
        description: 'Hardware-resistant key stretching combined with authenticated AES-256-GCM encryption for all stored records.',
        badge: 'Crypto'
      },
      {
        title: 'Instant CLI Wrapper',
        description: 'Seamless command execution with syntax like `apex run -- npm start` for transparent development workflow.',
        badge: 'CLI'
      },
      {
        title: 'Environment Drift Detection',
        description: 'Automatically flags missing required keys between development, staging, and production definitions.',
        badge: 'Validation'
      }
    ],

    recruiter: {
      role: 'Founder & Security Engineer',
      contribution: 'Designed the cryptographic envelope scheme, implemented the cross-platform memory injection module, and built the CLI command parser.',
      highlights: [
        'Implemented authenticated encryption with AES-256-GCM and per-record random nonces.',
        'Engineered cross-platform process spawning and pseudo-terminal (PTY) inheritance in Rust.',
        'Designed an intuitive interactive terminal prompt for rapid secret rotation.'
      ],
      architecture: [
        { layer: 'Crypto Layer', detail: 'Rust ring cryptography library with memory zeroization on drop.' },
        { layer: 'Process Runner', detail: 'Platform-specific process spawn with direct environment block override.' },
        { layer: 'Storage Primitive', detail: 'Local SQLite database with encrypted payload columns and WAL mode.' }
      ],
      outcomes: 'Zero secret leakage incidents reported across initial internal beta tests.'
    },

    stats: [
      { label: 'Encryption', value: 'AES-256-GCM' },
      { label: 'Overhead', value: '< 1.1ms' },
      { label: 'Storage', value: 'Encrypted WAL' },
      { label: 'Binary Size', value: '4.8 MB' }
    ],

    visualType: 'terminal-graph',
    heroVisual: {
      type: 'terminal-graph',
      aspectRatio: '16/9'
    },

    screenshots: [
      {
        id: 'vault-cli',
        caption: 'Apex Vault CLI running `apex run -- npm run dev` with seamless in-memory secret injection.',
        type: 'terminal-graph',
        alt: 'Apex Vault CLI Runner'
      },
      {
        id: 'vault-ast',
        caption: 'Secret schema validator inspecting key-value declarations and masking sensitive tokens.',
        type: 'code-ast',
        alt: 'Schema validator'
      }
    ],

    downloadUrl: '#',
    purchaseUrl: '#',
    githubUrl: 'https://github.com',
    documentationUrl: '#'
  }
];

export function getProjectBySlug(slug) {
  if (!slug) return null;
  return projectsData.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase() || p.id.toLowerCase() === slug.toLowerCase()
  ) || null;
}

export function getAdjacentProjects(currentSlug) {
  const index = projectsData.findIndex(
    (p) => p.slug.toLowerCase() === currentSlug.toLowerCase() || p.id.toLowerCase() === currentSlug.toLowerCase()
  );
  if (index === -1) return { prev: null, next: null };

  const prev = index > 0 ? projectsData[index - 1] : projectsData[projectsData.length - 1];
  const next = index < projectsData.length - 1 ? projectsData[index + 1] : projectsData[0];

  return { prev, next };
}
