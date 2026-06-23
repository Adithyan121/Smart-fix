import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Smartphone, Wrench } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="glass-nav" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1400px',
        padding: '0 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            background: 'var(--accent)',
            color: '#ffffff',
            padding: '8px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(20, 45, 227, 0.3)'
          }}>
            <Wrench size={22} />

          </div>
            {/* <img src={logo} alt="Smart Fix Logo" style={{ width: '24px', height: '24px', objectFit: 'contain' }} /> */}
          <span style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 800,
            fontSize: '22px',
            letterSpacing: '-0.5px',
            color: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center'
          }}>
            Smart<span style={{ color: 'var(--accent)' }}>Fix</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div style={{ display: 'none', alignItems: 'center', gap: '30px' }} className="desktop-menu-container">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 500,
                fontSize: '14px',
                color: 'var(--text-muted)',
                letterSpacing: '0.2px'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            style={{
              background: 'var(--bg-sec)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--neu-button)',
              transition: 'var(--transition-fast)'
            }}
            onMouseDown={(e) => e.currentTarget.style.boxShadow = 'var(--neu-button-active)'}
            onMouseUp={(e) => e.currentTarget.style.boxShadow = 'var(--neu-button)'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Call-to-action */}
          <a 
            href="#contact" 
            className="btn-primary" 
            style={{ 
              padding: '10px 22px', 
              fontSize: '14px',
              display: 'none'
            }}
            className="desktop-btn"
          >
            Book Now
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-toggle"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="glass-nav" style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          width: '100%',
          padding: '20px 5%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          zIndex: 999,
          borderBottom: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 600,
                fontSize: '16px',
                color: 'var(--text-main)',
                paddingBottom: '5px'
              }}
            >
              {link.label}
            </a>
          ))}
          
          <a 
            href="#contact" 
            className="btn-primary" 
            onClick={() => setIsOpen(false)}
            style={{ 
              padding: '12px 0', 
              justifyContent: 'center',
              width: '100%'
            }}
          >
            Book Now
          </a>
        </div>
      )}

      {/* Embedded inline styles for navbar responsiveness */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-menu-container {
            display: flex !important;
          }
          .desktop-btn {
            display: inline-flex !important;
            background: var(--accent);
            border-radius:50px;
            color: #ffffff;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
