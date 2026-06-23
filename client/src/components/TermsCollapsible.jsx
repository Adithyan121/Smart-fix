import React, { useState, useEffect } from 'react';
import { Shield, HelpCircle, FileText, RefreshCw, Lock } from 'lucide-react';
import termsData from '../data/terms.json';
import gsap from 'gsap';

export default function TermsCollapsible() {
  const [activeId, setActiveId] = useState(termsData[0].id);

  useEffect(() => {
    // Fade in content whenever tab changes
    gsap.fromTo('.terms-content-panel',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );
  }, [activeId]);

  const activeTerm = termsData.find(item => item.id === activeId);

  const getIcon = (id) => {
    switch (id) {
      case 'service': return <FileText size={18} />;
      case 'warranty': return <Shield size={18} />;
      case 'conditions': return <HelpCircle size={18} />;
      case 'refund': return <RefreshCw size={18} />;
      case 'privacy': return <Lock size={18} />;
      default: return <FileText size={18} />;
    }
  };

  return (
    <section id="terms" className="section" style={{ background: 'var(--bg-sec)' }}>
      {/* Title */}
      <h2 className="section-title">Terms & Policies</h2>
      <p className="section-subtitle">
        Transparent service agreements. Select a category below to review our certified warranty and operation parameters.
      </p>

      {/* Horizontal / Dashboard Layout */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '30px',
          width: '100%',
          alignItems: 'start'
        }}
        className="terms-grid"
      >
        {/* Navigation Sidebar */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {termsData.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '18px 24px',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  background: isActive ? 'var(--accent)' : 'var(--bg-main)',
                  color: isActive ? '#ffffff' : 'var(--text-main)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 600,
                  fontSize: '15px',
                  boxShadow: isActive ? 'var(--shadow-glow)' : 'var(--shadow-sm)',
                  transition: 'var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }
                }}
              >
                <span style={{
                  color: isActive ? '#ffffff' : 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  {getIcon(item.id)}
                </span>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Viewer Card */}
        <div 
          className="glass-card terms-content-panel"
          style={{
            padding: '40px',
            textAlign: 'left',
            minHeight: '260px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderColor: 'var(--accent)'
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--accent)',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '15px'
          }}>
            📋 Legal Framework
          </div>
          
          <h3 style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '22px',
            fontWeight: 800,
            marginBottom: '15px'
          }}>
            {activeTerm.title}
          </h3>
          
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            color: 'var(--text-muted)',
            lineHeight: '1.7',
            margin: 0
          }}>
            {activeTerm.content}
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .terms-grid {
            grid-template-columns: 0.8fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
