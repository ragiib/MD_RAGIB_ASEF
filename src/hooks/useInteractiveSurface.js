import { useEffect, useRef } from 'react';

/**
 * useInteractiveSurface: Configurable physical pointer interaction engine.
 * 
 * Distinct interaction personalities:
 * - 'tilt'                -> Product cards: 3D perspective rotation + light sheen
 * - 'layered-parallax'    -> Philosophy: shallow box depth, independent inner layer movement
 * - 'dossier-unfold'      -> About dossier: document perspective shift + inner layer slide
 * - 'magnetic-surface'    -> Capabilities / CTA buttons: magnetic attraction toward cursor + proximity glow
 * - 'glass-illuminate'    -> Navigation / Panels: pointer light refraction with zero rotation
 * - 'spatial-progression' -> Roadmap: depth step-forward & connected lines reaction
 * 
 * Pure CSS variable updates via requestAnimationFrame — zero React re-renders, 60fps.
 * Automatically disabled on touch screens and prefers-reduced-motion.
 */
export function useInteractiveSurface({
  mode = 'glass-illuminate',
  maxAngle = 5,
  maxDistance = 12,
  perspective = 1000,
  proximityRange = 180,
  onStateChange = null
} = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Guard: Only enable on precision pointer devices (mouse/trackpad)
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;

    let rafId = null;
    let isHovering = false;

    // Target values
    let targetX = 50; // percentage
    let targetY = 50; // percentage
    let targetRotX = 0; // deg
    let targetRotY = 0; // deg
    let targetTransX = 0; // px
    let targetTransY = 0; // px
    let targetProximity = 0; // 0 to 1

    // Current interpolated values
    let currX = 50;
    let currY = 50;
    let currRotX = 0;
    let currRotY = 0;
    let currTransX = 0;
    let currTransY = 0;
    let currProximity = 0;

    const render = () => {
      // Smooth optical spring interpolation
      const factor = isHovering ? 0.16 : 0.1;
      currX += (targetX - currX) * factor;
      currY += (targetY - currY) * factor;
      currRotX += (targetRotX - currRotX) * factor;
      currRotY += (targetRotY - currRotY) * factor;
      currTransX += (targetTransX - currTransX) * factor;
      currTransY += (targetTransY - currTransY) * factor;
      currProximity += (targetProximity - currProximity) * factor;

      el.style.setProperty('--surface-x', `${currX.toFixed(2)}%`);
      el.style.setProperty('--surface-y', `${currY.toFixed(2)}%`);
      el.style.setProperty('--proximity-glow', currProximity.toFixed(3));

      // Apply mode-specific physical transforms
      if (mode === 'tilt') {
        el.style.transform = `perspective(${perspective}px) rotateX(${currRotX.toFixed(2)}deg) rotateY(${currRotY.toFixed(2)}deg) translateY(${isHovering ? -5 : 0}px)`;
      } else if (mode === 'layered-parallax') {
        // Zero outer card rotation; internal layers shift via CSS variables
        el.style.setProperty('--layer-depth-x', `${(currRotY * 1.5).toFixed(2)}px`);
        el.style.setProperty('--layer-depth-y', `${(-currRotX * 1.5).toFixed(2)}px`);
        el.style.transform = `translateY(${isHovering ? -3 : 0}px)`;
      } else if (mode === 'dossier-unfold') {
        // Document subtle perspective shift + inner layer sliding
        el.style.transform = `perspective(${perspective}px) rotateX(${(currRotX * 0.4).toFixed(2)}deg) rotateY(${(currRotY * 0.4).toFixed(2)}deg) translateY(${isHovering ? -2 : 0}px)`;
        el.style.setProperty('--dossier-slide-x', `${(currRotY * 0.8).toFixed(2)}px`);
        el.style.setProperty('--dossier-slide-y', `${(-currRotX * 0.8).toFixed(2)}px`);
      } else if (mode === 'magnetic-surface') {
        // Magnetic pull toward pointer position
        el.style.transform = `translate3d(${currTransX.toFixed(2)}px, ${currTransY.toFixed(2)}px, 0)`;
      } else if (mode === 'spatial-progression') {
        // Step forward in Z-depth without tilting
        el.style.transform = `translateZ(${isHovering ? 16 : 0}px) translateY(${isHovering ? -4 : 0}px)`;
      } else if (mode === 'glass-illuminate') {
        // Surface remains structurally stable; light tracks internally
        el.style.setProperty('--glass-light-x', `${currX.toFixed(2)}%`);
        el.style.setProperty('--glass-light-y', `${currY.toFixed(2)}%`);
      }

      const isDeltaSmall =
        Math.abs(targetX - currX) < 0.1 &&
        Math.abs(targetY - currY) < 0.1 &&
        Math.abs(targetRotX - currRotX) < 0.05 &&
        Math.abs(targetRotY - currRotY) < 0.05 &&
        Math.abs(targetTransX - currTransX) < 0.1 &&
        Math.abs(targetTransY - currTransY) < 0.1;

      if (!isDeltaSmall || isHovering) {
        rafId = requestAnimationFrame(render);
      } else {
        rafId = null;
      }
    };

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      targetX = (x / rect.width) * 100;
      targetY = (y / rect.height) * 100;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Tilt calculations
      targetRotX = ((y - centerY) / centerY) * -maxAngle;
      targetRotY = ((x - centerX) / centerX) * maxAngle;

      // Magnetic translation calculations
      targetTransX = ((x - centerX) / centerX) * maxDistance;
      targetTransY = ((y - centerY) / centerY) * maxDistance;

      targetProximity = 1;

      if (!rafId) {
        rafId = requestAnimationFrame(render);
      }
    };

    const handleMouseEnter = () => {
      isHovering = true;
      if (onStateChange) onStateChange(true);
      if (!rafId) rafId = requestAnimationFrame(render);
    };

    const handleMouseLeave = () => {
      isHovering = false;
      targetX = 50;
      targetY = 50;
      targetRotX = 0;
      targetRotY = 0;
      targetTransX = 0;
      targetTransY = 0;
      targetProximity = 0;

      if (onStateChange) onStateChange(false);
      if (!rafId) rafId = requestAnimationFrame(render);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mode, maxAngle, maxDistance, perspective, proximityRange, onStateChange]);

  return elementRef;
}
