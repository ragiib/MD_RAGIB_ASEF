import { useEffect } from 'react';

/**
 * CursorAtmosphere: Subtly binds cursor coordinates to CSS variables on :root.
 * Powers environmental light reflection, glass bevel highlights, and ambient glow.
 * Zero DOM mutations, throttled via requestAnimationFrame.
 * Automatically disabled on touch screens and prefers-reduced-motion.
 */
export default function CursorAtmosphere() {
  useEffect(() => {
    // Only enable on precise pointer devices
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;

    let rafId = null;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight * 0.35;
    let currentX = targetX;
    let currentY = targetY;

    const handlePointerMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(updateCursor);
      }
    };

    const updateCursor = () => {
      // Smooth interpolation for fluid light movement
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      document.documentElement.style.setProperty('--cursor-x', `${Math.round(currentX)}px`);
      document.documentElement.style.setProperty('--cursor-y', `${Math.round(currentY)}px`);

      if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
        rafId = requestAnimationFrame(updateCursor);
      } else {
        rafId = null;
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
