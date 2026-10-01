import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Send, Mail, MessageSquare, Sparkles } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const contactEmail = 'ragibasef@gmail.com';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container contact-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="badge badge-cyan mono">DIRECT INQUIRY</span>
            <span className="status-dot"></span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <h3 className="modal-title">Start a Conversation</h3>
          <p className="modal-tagline">
            Whether you represent an engineering team, want to discuss software advisory, or inquire about upcoming products.
          </p>

          {/* Quick Copy Email Strip */}
          <div className="email-copy-strip">
            <div className="email-copy-info">
              <Mail size={16} className="text-cyan" />
              <span className="mono contact-email-val">{contactEmail}</span>
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-copy"
              onClick={handleCopy}
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="modal-divider" />

          {/* Direct Message Form */}
          {sent ? (
            <div className="contact-sent-notice">
              <div className="sent-icon-wrap">
                <Check size={28} className="text-emerald" />
              </div>
              <h4>Message Drafted</h4>
              <p>Thank you for reaching out. In Phase 1, email is monitored directly at <strong>{contactEmail}</strong>.</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label mono">YOUR NAME</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label mono">YOUR EMAIL</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label mono">PROJECT / INQUIRY DETAILS</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your product, team, or collaboration opportunity..."
                  className="form-input form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                <span>Send Message</span>
                <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
