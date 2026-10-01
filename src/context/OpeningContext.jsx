import React, { createContext, useContext, useState, useEffect } from 'react';

const OpeningContext = createContext({
  stage: 6,
  isOpeningActive: false,
  skipOpening: () => {},
  replayOpening: () => {}
});

export const STAGES = {
  VOID: 0,          // 0.0s - 0.8s: Darkness, breathing atmospheric void
  AWAKENING: 1,     // 0.8s - 2.0s: Architectural hairline grid, calibration traces
  CONSTRUCTION: 2,  // 2.0s - 3.2s: Physical glass layers form, rotate, and lock into space
  NAME_REVEAL: 3,   // 3.2s - 4.5s: Sculptural typography MD RAGIB ASEF tracking reveal & light sweep
  IDENTITY_REVEAL: 4, // 4.5s - 5.6s: Founder · Developer · Product Builder emerges
  EXPANSION: 5,     // 5.6s - 6.8s: Navigation glides to top, guides dissolve into live UI, CTAs assemble
  COMPLETE: 6       // 6.8s+: Full interactive website unlocked
};

export function OpeningProvider({ children }) {
  // Check if prefers-reduced-motion is requested
  const prefersReducedMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [stage, setStage] = useState(() => (prefersReducedMotion ? STAGES.COMPLETE : STAGES.VOID));

  useEffect(() => {
    if (prefersReducedMotion) {
      setStage(STAGES.COMPLETE);
      return;
    }

    // Precise cinematic choreography timeline
    const timers = [
      setTimeout(() => setStage(STAGES.AWAKENING), 800),
      setTimeout(() => setStage(STAGES.CONSTRUCTION), 2000),
      setTimeout(() => setStage(STAGES.NAME_REVEAL), 3200),
      setTimeout(() => setStage(STAGES.IDENTITY_REVEAL), 4500),
      setTimeout(() => setStage(STAGES.EXPANSION), 5600),
      setTimeout(() => setStage(STAGES.COMPLETE), 6800),
    ];

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        skipOpening();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      timers.forEach((t) => clearTimeout(t));
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [prefersReducedMotion]);

  const skipOpening = () => {
    setStage(STAGES.COMPLETE);
  };

  const replayOpening = () => {
    setStage(STAGES.VOID);
    setTimeout(() => setStage(STAGES.AWAKENING), 800);
    setTimeout(() => setStage(STAGES.CONSTRUCTION), 2000);
    setTimeout(() => setStage(STAGES.NAME_REVEAL), 3200);
    setTimeout(() => setStage(STAGES.IDENTITY_REVEAL), 4500);
    setTimeout(() => setStage(STAGES.EXPANSION), 5600);
    setTimeout(() => setStage(STAGES.COMPLETE), 6800);
  };

  const isOpeningActive = stage < STAGES.COMPLETE;

  return (
    <OpeningContext.Provider value={{ stage, isOpeningActive, skipOpening, replayOpening }}>
      {children}
    </OpeningContext.Provider>
  );
}

export function useOpening() {
  return useContext(OpeningContext);
}
