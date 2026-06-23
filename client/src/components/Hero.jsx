import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Award, Clock, ArrowRight, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import heroImg from '../assets/hero.png';

export default function Hero() {
  const containerRef = useRef(null);
  const mockupRef = useRef(null);

  useEffect(() => {
    // Reveal text elements on load
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo('.hero-title-reveal', 
      { y: 60, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, delay: 0.2 }
    );
    
    tl.fromTo('.hero-subtitle', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }, 
      '-=0.8'
    );
    
    tl.fromTo('.hero-ctas', 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6 }, 
      '-=0.6'
    );
    
    tl.fromTo('.hero-badge', 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, stagger: 0.15, duration: 0.6 }, 
      '-=0.4'
    );

    // Slowly rotate the premium mockup
    gsap.to(mockupRef.current, {
      y: '+=15',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Ambient floating lights
    gsap.to('.glow-orb-1', {
      x: '+=30',
      y: '-=40',
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    
    gsap.to('.glow-orb-2', {
      x: '-=40',
      y: '+=30',
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Normalized coordinates (-0.5 to 0.5)
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;

    // Parallax layers
    gsap.to('.parallax-bg', { x: x * 20, y: y * 20, duration: 0.8, ease: 'power2.out' });
    gsap.to(mockupRef.current, { x: x * 40, y: y * 40 + (Math.sin(Date.now() / 1000) * 10), duration: 0.6, ease: 'power2.out' });
    gsap.to('.parallax-item-1', { x: x * -60, y: y * -60, duration: 0.7, ease: 'power2.out' });
    gsap.to('.parallax-item-2', { x: x * 80, y: y * -80, duration: 0.9, ease: 'power2.out' });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 80% 20%, var(--accent-light) 0%, transparent 50%)'
      }}
    >
      {/* Background Glowing Effects */}
      <div className="glow-orb-1 glow-blur" style={{ top: '15%', right: '25%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(20, 45, 227, 0.18) 0%, rgba(20, 45, 227, 0) 70%)' }}></div>
      <div className="glow-orb-2 glow-blur" style={{ bottom: '20%', right: '10%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(59, 82, 255, 0.12) 0%, rgba(59, 82, 255, 0) 70%)' }}></div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '50px',
        width: '100%',
        alignItems: 'center',
        zIndex: 10
      }} className="hero-grid">
        
        {/* Left Side Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'var(--accent-light)',
              border: '1px solid var(--border-color)',
              color: 'var(--accent)',
              fontFamily: 'var(--font-poppins)',
              fontWeight: 600,
              fontSize: '13px',
              marginBottom: '20px'
            }} className="parallax-bg">
              ✨ No: 1 Mobile phone Service Shop
            </div>
            
            <div style={{ overflow: 'hidden' }}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                lineHeight: '1.1',
                margin: 0,
                letterSpacing: '-1.5px',
                fontWeight: 800
              }}>
                <span className="hero-title-reveal" style={{ display: 'inline-block' }}>
                  Your Trusted Mobile <br />
                  <span style={{
                    background: 'linear-gradient(135deg, var(--accent) 0%, #00d2ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Phone Sales & Repair</span> <br />
                  Experts
                </span>
              </h1>
            </div>
          </div>

          <p className="hero-subtitle" style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'var(--text-muted)',
            lineHeight: '1.6',
            maxWidth: '560px'
          }}>
            Premium smartphones, genuine accessories, and expert repair services under one roof. Your device deserves the best.
          </p>

          {/* CTA Buttons */}
          <div className="hero-ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            <a href="#services" className="btn-primary">
              Shop Now <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Book Repair <ArrowDown size={18} />
            </a>
          </div>

          {/* Trust Badges */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '15px',
            marginTop: '15px'
          }}>
            {[
              { icon: <ShieldCheck size={20} />, text: 'Genuine Parts' },
              { icon: <Award size={20} />, text: 'Certified Technicians' },
              { icon: <Clock size={20} />, text: 'Same Day Repair' }
            ].map((badge, idx) => (
              <div 
                key={idx}
                className="hero-badge"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid var(--glass-border)',
                  boxShadow: 'var(--shadow-sm)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  transition: 'var(--transition-normal)'
                }}
              >
                <div style={{ color: 'var(--accent)' }}>
                  {badge.icon}
                </div>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Phone Display Mockup */}
        <div className="hero-mockup-container" style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px'
        }}>
          {/* Main Rotating Smartphone mockup */}
          <div 
            ref={mockupRef}
            className="mockup-phone"
            style={{
              position: 'relative',
              width: '280px',
              height: '560px',
              borderRadius: '45px',
              background: '#0c0f1d',
              border: '12px solid #2d3142',
              boxShadow: '0 50px 100px -20px rgba(0,0,0,0.7), var(--shadow-glow)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '20px',
              overflow: 'hidden',
              zIndex: 5
            }}
          >
            {/* Screen Glass Reflection */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 50%, rgba(20,45,227,0.1) 100%)',
              pointerEvents: 'none',
              zIndex: 3
            }}></div>

            {/* Dynamic Island */}
            <div style={{
              width: '90px',
              height: '25px',
              background: '#000000',
              borderRadius: '20px',
              margin: '0 auto',
              zIndex: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#111827', marginRight: '40px' }}></div>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#2563eb' }}></div>
            </div>

            {/* Premium SmartFix Interface Mock */}
            <div style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              color: '#ffffff',
              fontFamily: 'var(--font-poppins)',
              gap: '15px',
              zIndex: 2,
              marginTop: '-20px'
            }}>
              <div style={{
                background: 'rgba(20, 45, 227, 0.2)',
                border: '1px solid rgba(20, 45, 227, 0.4)',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#60a5fa'
              }}>
                SmartFix UI v2.0
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '24px', fontWeight: 800 }}>Diagnostics</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', maxWidth: '180px' }}>System Status Scan: Completed successfully</p>
              
              {/* Animated Progress Circle */}
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                border: '4px solid #1e293b',
                borderTopColor: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'spin 2s linear infinite',
                position: 'relative'
              }}>
                <div style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  background: '#090b14',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(-45deg)' /* counter-spin if spin applied */
                }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#10b981', animation: 'pulse 1.5s infinite' }}>100%</span>
                </div>
              </div>
            </div>

            <div style={{ color: '#64748b', fontSize: '11px', textAlign: 'center', zIndex: 2 }}>
              Secure Encryption Active
            </div>
          </div>

          {/* Floating Hardware Elements */}
          <div 
            className="parallax-item-1 float-anim"
            style={{
              position: 'absolute',
              top: '10%',
              left: '10%',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '15px',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              zIndex: 6
            }}
          >
            <div style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 700 }}>MICROCHIP</div>
            <div style={{ fontSize: '13px', fontWeight: 600 }}>A16 CPU Socket</div>
          </div>

          <div 
            className="parallax-item-2"
            style={{
              position: 'absolute',
              bottom: '15%',
              right: '5%',
              background: 'rgba(20, 45, 227, 0.08)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(20, 45, 227, 0.2)',
              padding: '15px',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              zIndex: 6
            }}
          >
            <div style={{
              background: 'var(--accent)',
              color: '#ffffff',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '12px'
            }}>5G</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-main)' }}>Modem Unit</div>
              <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Connected</div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @media (max-width: 991px) {
          .hero-mockup-container {
            display: none !important;
          }
        }
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
