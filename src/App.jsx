import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import './App.css';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-shell">
        {/* Floating Header Navigation */}
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
  );
}
