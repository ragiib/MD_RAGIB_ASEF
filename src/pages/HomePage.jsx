import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import FeaturedWork from '../components/FeaturedWork';
import AboutPreview from '../components/AboutPreview';
import FuturePreview from '../components/FuturePreview';

export default function HomePage({ onOpenContact }) {
  const location = useLocation();

  // Handle hash scrolling when navigating from another page (e.g. /#work)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Intro / Philosophy Section */}
      <Philosophy />

      {/* 3. Real Product Showcase Section */}
      <FeaturedWork />

      {/* 4. About Foundation Section */}
      <AboutPreview onOpenContact={onOpenContact} />

      {/* 5. Future / Roadmap Preview Section */}
      <FuturePreview />
    </>
  );
}
