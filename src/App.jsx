import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CursorAtmosphere from './components/CursorAtmosphere';
import CinematicOpeningOverlay from './components/CinematicOpeningOverlay';
import { OpeningProvider } from './context/OpeningContext';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import './App.css';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <OpeningProvider>
      <BrowserRouter>
        <div className="app-shell">
          {/* Environmental Cursor Illumination Engine */}
          <CursorAtmosphere />

          {/* Cinematic Opening Sequence HUD & Glass Shards Overlay */}
          <CinematicOpeningOverlay />

          {/* Floating Header Navigation (Glides into live layout) */}
          <Navigation onOpenContact={() => setIsContactOpen(true)} />

          {/* Dynamic Route View */}
          <main id="main-content">
            <Routes>
              <Route path="/" element={<HomePage onOpenContact={() => setIsContactOpen(true)} />} />
              <Route path="/project/:slug" element={<ProjectDetailPage onOpenContact={() => setIsContactOpen(true)} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer onOpenContact={() => setIsContactOpen(true)} />

          {/* Direct Contact Modal */}
          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
        </div>
      </BrowserRouter>
    </OpeningProvider>
  );
}
