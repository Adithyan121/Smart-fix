import React from 'react';
import { 
  Wrench, 
  Smartphone, 
  Mail, 
  Phone,
  
} from 'lucide-react';


export default function Footer({ currentPage }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    if (currentPage !== 'home') {
      e.preventDefault();
      window.location.hash = href;
    }
  };

  return (
    <footer style={{
      position: 'relative',
      background: 'var(--bg-main)',
      width: '100%',
      overflow: 'hidden',
      borderTop: '1px solid var(--border-color)'
    }}>
      {/* Animated Wave Separator */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <svg 
          style={{
            position: 'relative',
            width: '100%',
            height: '80px',
            marginBottom: '-1px',
            minHeight: '60px',
            maxHeight: '120px'
          }}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 24 150 28" 
          preserveAspectRatio="none" 
          shapeRendering="auto"
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax-waves">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(20, 45, 227, 0.04)" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(20, 45, 227, 0.02)" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(20, 45, 227, 0.01)" />
            <use href="#gentle-wave" x="48" y="7" fill="var(--bg-sec)" />
          </g>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div style={{
        background: 'var(--bg-sec)',
        padding: '60px 5% 40px',
        color: 'var(--text-main)'
      }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            maxWidth: '1400px',
            margin: '0 auto',
            textAlign: 'left'
          }}
          className="footer-grid"
        >
          {/* Column 1: About */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* <img src={logo} alt="Smart Fix Logo" style={{ height: '36px', objectFit: 'contain' }} /> */}
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
            </div>
            
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '14px',
              color: 'var(--text-muted)',
              lineHeight: '1.6'
            }}>
              Certified specialists in mobile phone repairs, micro-soldering, diagnostics, and high-performance smartphone sales.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, href: 'https://instagram.com/_.smart_fix/' },
                {icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5A9.5 9.5 0 0 1 7.6 20L3 21l1.1-4.4A9.5 9.5 0 1 1 21 11.5z" /><path d="M9.5 8.5c.3-.7.6-.7.9-.7h.8c.2 0 .5.1.6.4l.6 1.5c.1.3.1.6-.1.8l-.5.6c-.1.2-.1.4 0 .5.3.6 1 1.3 1.6 1.6.2.1.4.1.5 0l.6-.5c.2-.2.5-.2.8-.1l1.5.6c.3.1.4.4.4.6v.8c0 .3 0 .6-.7.9-.6.3-1.9.2-3.7-.7-1.8-.9-3.7-2.8-4.6-4.6-.9-1.8-1-3.1-.7-3.7z" /></svg>), href: 'https://wa.me/917994770102'},
                {icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>),href: 'mailto:smartfix0102@gmail.com'}
              ].map((soc, i) => (
                <a 
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'var(--transition-normal)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-main)';
                    e.currentTarget.style.color = 'var(--text-main)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ fontFamily: 'var(--font-poppins)', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-muted)' }}>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Repair Services</a>
              <a href="#teardown" onClick={(e) => handleNavClick(e, '#teardown')} onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Hardware Teardown</a>
              <a href="#timeline" onClick={(e) => handleNavClick(e, '#timeline')} onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Repair Process</a>
              <a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')} onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Why Choose Us</a>
              <a href="#/faq" onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>FAQ Support</a>
            </div>
          </div>

          {/* Column 3: Services */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ fontFamily: 'var(--font-poppins)', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Our Repairs
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-muted)' }}>
              <a href="#services" onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Screen Swaps</a>
              <a href="#services" onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Battery Replacements</a>
              <a href="#services" onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Water Damage Rescue</a>
              <a href="#services" onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Charging Port Repair</a>
              <a href="#services" onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Logic Board Diagnostic</a>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ fontFamily: 'var(--font-poppins)', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Store Contacts
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Smartphone size={16} style={{ color: 'var(--accent)' }} />
                <span>+91 7994770102</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} style={{ color: 'var(--accent)' }} />
                <span>smartfix0102@gmail.com</span>
              </div>
     
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div style={{
          maxWidth: '1400px',
          margin: '40px auto 0',
          borderTop: '1px solid var(--border-color)',
          paddingTop: '25px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '13px',
          color: 'var(--text-muted)'
        }}>
          <span>© {currentYear} Smart Fix Inc. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <a href="#/terms" onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Warranty Agreement</a>
            <a href="#/terms" onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Privacy Policy</a>
          </div>
        </div>
      </div>

      <style>{`
        .parallax-waves > use {
          animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        .parallax-waves > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
        }
        .parallax-waves > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }
        .parallax-waves > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }
        .parallax-waves > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 20s;
        }
        @keyframes move-forever {
          0% { transform: translate3d(-90px,0,0); }
          100% { transform: translate3d(85px,0,0); }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
